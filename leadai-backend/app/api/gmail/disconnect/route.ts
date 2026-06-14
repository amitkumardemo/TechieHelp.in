import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revokeToken } from "@/lib/gmail";

/**
 * DELETE /api/gmail/disconnect
 * Revokes OAuth token and removes GmailIntegration from DB.
 * Body: { workspaceId }
 */
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const integration = await prisma.gmailIntegration.findUnique({
      where: { workspaceId },
    });

    if (!integration) {
      return NextResponse.json({ error: "Gmail not connected" }, { status: 404 });
    }

    // Attempt to revoke access token with Google
    try {
      await revokeToken(integration.accessToken);
    } catch {
      // Continue even if revocation fails (token may already be expired)
    }

    // Delete integration record
    await prisma.gmailIntegration.delete({ where: { workspaceId } });

    // Log activity
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: "GMAIL_DISCONNECTED",
        title: "Gmail Disconnected",
        description: `Gmail account ${integration.email} disconnected`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[GMAIL_DISCONNECT]", error);
    return NextResponse.json({ error: "Disconnect failed" }, { status: 500 });
  }
}
