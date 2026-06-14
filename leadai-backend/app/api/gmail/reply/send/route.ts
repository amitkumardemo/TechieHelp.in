import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedClient, sendEmail, refreshAccessToken } from "@/lib/gmail";
import { decrypt } from "@/lib/encryption";

/**
 * POST /api/gmail/reply/send
 * Sends an email via the connected Gmail account.
 * Body: { workspaceId, emailId, aiReplyId?, replyText, to, subject }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, emailId, aiReplyId, replyText, to, subject } = body;

    if (!workspaceId || !replyText || !to || !subject) {
      return NextResponse.json(
        { error: "workspaceId, replyText, to, and subject are required" },
        { status: 400 }
      );
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

    // Refresh access token if expired
    let accessToken = integration.accessToken;
    if (integration.tokenExpiry && integration.tokenExpiry <= new Date()) {
      const refreshed = await refreshAccessToken(refreshToken);
      accessToken = refreshed.accessToken;
      await prisma.gmailIntegration.update({
        where: { workspaceId },
        data: { accessToken: refreshed.accessToken, tokenExpiry: refreshed.expiry },
      });
    }

    // Send via Gmail API
    const auth = getAuthenticatedClient(accessToken, refreshToken);
    await sendEmail(auth, to, subject, replyText);

    // Update AIReply status if provided
    if (aiReplyId) {
      await prisma.aIReply.update({
        where: { id: aiReplyId },
        data: {
          editedReply: replyText,
          sentAt: new Date(),
          status: "SENT",
        },
      });
    }

    // Mark original email as replied
    if (emailId) {
      await prisma.email.update({
        where: { id: emailId },
        data: { status: "REPLIED" },
      });
    }

    // Activity feed
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: "EMAIL_SENT",
        title: "Email Sent",
        description: `Reply sent to ${to} — "${subject}"`,
        metadata: JSON.stringify({ emailId, to }),
      },
    });

    return NextResponse.json({ success: true, sentAt: new Date().toISOString() });
  } catch (error) {
    console.error("[GMAIL_REPLY_SEND]", error);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
