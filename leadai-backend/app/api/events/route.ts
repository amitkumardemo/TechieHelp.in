import { NextRequest, NextResponse } from "next/server";
import { eventEmitter } from "@/lib/events";

export const dynamic = "force-dynamic";

/**
 * GET /api/events?workspaceId=xxx
 * Establishes a Server-Sent Events (SSE) stream for live updates on the client.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const workspaceId = searchParams.get("workspaceId");

  if (!workspaceId) {
    return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
  }

  const responseHeaders = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
  };

  const stream = new ReadableStream({
    start(controller) {
      // Event listener for this workspace
      const listener = (event: { type: string; data: any }) => {
        const payload = `data: ${JSON.stringify(event)}\n\n`;
        controller.enqueue(new TextEncoder().encode(payload));
      };

      eventEmitter.on(`workspace:${workspaceId}`, listener);

      // Enqueue a connection established message
      controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ type: "CONNECTED" })}\n\n`));

      // Periodic ping to prevent connection timeouts (every 30 seconds)
      const pingInterval = setInterval(() => {
        try {
          controller.enqueue(new TextEncoder().encode(": ping\n\n"));
        } catch {
          // Stream might be closed
          clearInterval(pingInterval);
        }
      }, 30000);

      // Clean up when client aborts/disconnects
      req.signal.addEventListener("abort", () => {
        eventEmitter.off(`workspace:${workspaceId}`, listener);
        clearInterval(pingInterval);
        try {
          controller.close();
        } catch {}
      });
    },
  });

  return new Response(stream, { headers: responseHeaders });
}
