import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { exchangeCode, getAuthenticatedClient, fetchInboxEmails } from "@/lib/gmail";
import { encrypt } from "@/lib/encryption";
import { analyzeEmail } from "@/lib/gemini";

const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";

/**
 * GET /api/gmail/callback
 * Handles Google OAuth callback after user grants permission.
 * 1. Exchanges code for tokens
 * 2. Saves encrypted tokens to GmailIntegration
 * 3. Triggers initial email sync
 * 4. Redirects to frontend dashboard
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  // User denied access
  if (error) {
    return NextResponse.redirect(
      `${FRONTEND_URL}/leadai-dashboard?tab=integrations&gmail_error=${error}`
    );
  }

  if (!code || !state) {
    return NextResponse.redirect(
      `${FRONTEND_URL}/leadai-dashboard?tab=integrations&gmail_error=missing_params`
    );
  }

  try {
    // Decode state to get workspaceId
    const decoded = JSON.parse(Buffer.from(state, "base64").toString("utf-8"));
    const { workspaceId } = decoded;

    if (!workspaceId) {
      throw new Error("Invalid state parameter");
    }

    // Exchange code for tokens
    const { accessToken, refreshToken, expiry, email } = await exchangeCode(code);

    // Encrypt refresh token before storing
    const encryptedRefreshToken = encrypt(refreshToken);

    // Upsert GmailIntegration record
    await prisma.gmailIntegration.upsert({
      where: { workspaceId },
      create: {
        workspaceId,
        email,
        accessToken,
        refreshToken: encryptedRefreshToken,
        status: "CONNECTED",
        connectedAt: new Date(),
        tokenExpiry: expiry,
      },
      update: {
        email,
        accessToken,
        refreshToken: encryptedRefreshToken,
        status: "CONNECTED",
        connectedAt: new Date(),
        tokenExpiry: expiry,
        lastSyncAt: null,
      },
    });

    // Log activity
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: "GMAIL_CONNECTED",
        title: "Gmail Connected",
        description: `Gmail account ${email} connected successfully`,
      },
    });

    // Trigger initial email sync in background (non-blocking)
    syncEmailsInBackground(workspaceId, accessToken, refreshToken).catch(console.error);

    // Redirect to frontend with success
    return NextResponse.redirect(
      `${FRONTEND_URL}/leadai-dashboard?tab=inbox&gmail_connected=true`
    );
  } catch (error) {
    console.error("[GMAIL_CALLBACK]", error);
    return NextResponse.redirect(
      `${FRONTEND_URL}/leadai-dashboard?tab=integrations&gmail_error=callback_failed`
    );
  }
}

/** Syncs emails in background after initial connect */
async function syncEmailsInBackground(
  workspaceId: string,
  accessToken: string,
  refreshToken: string
): Promise<void> {
  const auth = getAuthenticatedClient(accessToken, refreshToken);
  const emails = await fetchInboxEmails(auth, 25);

  for (const email of emails) {
    // Skip if already synced
    const existing = await prisma.email.findFirst({
      where: { gmailMessageId: email.gmailMessageId, workspaceId },
    });
    if (existing) continue;

    // Analyze with Gemini
    const analysis = await analyzeEmail(email.subject, email.sender, email.body);

    // Save email to DB
    const savedEmail = await prisma.email.create({
      data: {
        workspaceId,
        gmailMessageId: email.gmailMessageId,
        subject: email.subject,
        sender: email.sender,
        recipient: email.recipient,
        body: email.body,
        snippet: email.snippet,
        receivedAt: email.receivedAt,
        isRead: email.isRead,
        leadScore: analysis.leadScore,
        priority: analysis.priority,
        intent: analysis.intent,
        sentiment: analysis.sentiment,
        aiSummary: analysis.aiSummary,
        status: "RECEIVED",
      },
    });

    // Create or find lead for high-score emails
    if (analysis.leadScore >= 60) {
      await prisma.activityFeed.create({
        data: {
          workspaceId,
          type: "LEAD_QUALIFIED",
          title: "Lead Qualified from Email",
          description: `${email.sender} — Score: ${analysis.leadScore} | ${analysis.intent}`,
          metadata: JSON.stringify({ emailId: savedEmail.id, leadScore: analysis.leadScore }),
        },
      });
    }

    // Activity feed entry for sync
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: "EMAIL_SYNCED",
        title: "Email Synced",
        description: `"${email.subject}" from ${email.sender}`,
        metadata: JSON.stringify({ emailId: savedEmail.id }),
      },
    });
  }

  // Update lastSyncAt
  await prisma.gmailIntegration.update({
    where: { workspaceId },
    data: { lastSyncAt: new Date() },
  });
}
