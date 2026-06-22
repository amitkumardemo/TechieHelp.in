import { NextRequest, NextResponse } from "next/server";
import { syncWorkspaceGmail } from "@/lib/sync-worker";

/**
 * POST /api/gmail/sync
 * Manually triggers Gmail sync for a given workspace.
 * Body: { workspaceId: string, maxResults?: number }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, maxResults = 50 } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const result = await syncWorkspaceGmail(workspaceId, maxResults);
    
    if (!result.success) {
      return NextResponse.json({ error: result.error || "Sync failed" }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("[GMAIL_SYNC_POST]", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
