import { NextRequest, NextResponse } from "next/server";
import { getAuthUrl } from "@/lib/gmail";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/gmail/connect
 * Returns the Google OAuth consent URL.
 * The workspaceId is passed as a query param and encoded in the OAuth state.
 */
export async function GET(req: NextRequest) {
  try {
    const workspaceId = req.nextUrl.searchParams.get("workspaceId");
    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
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

    const authUrl = getAuthUrl(workspaceId);
    return NextResponse.json({ authUrl });
  } catch (error) {
    console.error("[GMAIL_CONNECT]", error);
    return NextResponse.json({ error: "Failed to generate auth URL" }, { status: 500 });
  }
}
