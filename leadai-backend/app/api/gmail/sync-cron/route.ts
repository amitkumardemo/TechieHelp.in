import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncWorkspaceGmail } from "@/lib/sync-worker";

/**
 * GET/POST /api/gmail/sync-cron
 * Cron job endpoint to sync all connected workspaces.
 * Secured with a CRON_SECRET or query parameter key.
 */
async function handleCron(req: NextRequest) {
  try {
    // 1. Authorization check
    const authHeader = req.headers.get("authorization") || req.nextUrl.searchParams.get("key");
    const cronSecret = process.env.CRON_SECRET || "leadai-cron-secret-2026";
    
    if (authHeader && authHeader !== `Bearer ${cronSecret}` && authHeader !== cronSecret) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    // 2. Fetch all active connected Gmail integrations
    const integrations = await prisma.gmailIntegration.findMany({
      where: { status: "CONNECTED" },
    });

    const results = [];

    // 3. Process integrations sequentially to prevent database load spikes
    for (const integration of integrations) {
      try {
        const syncResult = await syncWorkspaceGmail(integration.workspaceId, 5);
        results.push({
          workspaceId: integration.workspaceId,
          email: integration.email,
          success: syncResult.success,
          synced: syncResult.success ? (syncResult as any).synced : 0,
          error: syncResult.success ? null : (syncResult as any).error,
        });
      } catch (err: any) {
        results.push({
          workspaceId: integration.workspaceId,
          email: integration.email,
          success: false,
          synced: 0,
          error: err?.message || "Internal processing error",
        });
      }
    }

    return NextResponse.json({
      success: true,
      processed: integrations.length,
      results,
    });
  } catch (error: any) {
    console.error("[GMAIL_CRON_ERROR]", error);
    return NextResponse.json({ error: "Cron execution failed", details: error?.message }, { status: 500 });
  }
}

export { handleCron as GET, handleCron as POST };
