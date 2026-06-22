import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { exchangeCode } from "@/lib/gmail";
import { encrypt } from "@/lib/encryption";
import { syncWorkspaceGmail } from "@/lib/sync-worker";

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

    // Ensure workspace exists in the database
    await prisma.workspace.upsert({
      where: { id: workspaceId },
      create: {
        id: workspaceId,
        name: "My Workspace",
        slug: workspaceId,
      },
      update: {},
    });

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
    syncWorkspaceGmail(workspaceId).catch(console.error);

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
