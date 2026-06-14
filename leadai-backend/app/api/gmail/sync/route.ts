import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedClient, fetchInboxEmails, refreshAccessToken } from "@/lib/gmail";
import { decrypt, encrypt } from "@/lib/encryption";
import { analyzeEmail } from "@/lib/gemini";

/**
 * POST /api/gmail/sync
 * Syncs latest Gmail emails for the given workspace.
 * Requires: Authorization: Bearer <firebase_token>
 * Body: { workspaceId: string, maxResults?: number }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, maxResults = 20 } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    // Get Gmail integration
    const integration = await prisma.gmailIntegration.findUnique({
      where: { workspaceId },
    });

    if (!integration || integration.status !== "CONNECTED") {
      return NextResponse.json({ error: "Gmail not connected" }, { status: 404 });
    }

    // Decrypt refresh token
    let refreshToken: string;
    try {
      refreshToken = decrypt(integration.refreshToken);
    } catch {
      return NextResponse.json({ error: "Token decryption failed" }, { status: 500 });
    }

    // Check if access token needs refresh
    let accessToken = integration.accessToken;
    const now = new Date();
    const expiry = integration.tokenExpiry;

    if (!expiry || expiry <= now) {
      const refreshed = await refreshAccessToken(refreshToken);
      accessToken = refreshed.accessToken;

      // Update stored token
      await prisma.gmailIntegration.update({
        where: { workspaceId },
        data: {
          accessToken: refreshed.accessToken,
          tokenExpiry: refreshed.expiry,
        },
      });
    }

    // Fetch emails from Gmail
    const auth = getAuthenticatedClient(accessToken, refreshToken);
    const emails = await fetchInboxEmails(auth, maxResults);

    let synced = 0;
    let skipped = 0;

    for (const email of emails) {
      // Skip already synced emails
      const existing = await prisma.email.findFirst({
        where: { gmailMessageId: email.gmailMessageId, workspaceId },
      });

      if (existing) {
        skipped++;
        continue;
      }

      // Analyze with Gemini
      const analysis = await analyzeEmail(email.subject, email.sender, email.body);

      // Save to database
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

      // Activity feed
      await prisma.activityFeed.create({
        data: {
          workspaceId,
          type: "EMAIL_SYNCED",
          title: "Email Synced",
          description: `"${email.subject}" from ${email.sender} — Score: ${analysis.leadScore}`,
          metadata: JSON.stringify({ emailId: savedEmail.id }),
        },
      });

      if (analysis.leadScore >= 60) {
        await prisma.activityFeed.create({
          data: {
            workspaceId,
            type: "LEAD_QUALIFIED",
            title: "Lead Qualified",
            description: `${email.sender} — ${analysis.intent} (Score: ${analysis.leadScore})`,
            metadata: JSON.stringify({ emailId: savedEmail.id, leadScore: analysis.leadScore }),
          },
        });
      }

      synced++;
    }

    // Update lastSyncAt
    await prisma.gmailIntegration.update({
      where: { workspaceId },
      data: { lastSyncAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      synced,
      skipped,
      total: emails.length,
    });
  } catch (error) {
    console.error("[GMAIL_SYNC]", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
