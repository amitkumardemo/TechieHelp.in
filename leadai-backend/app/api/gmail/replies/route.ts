import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const replies = await prisma.aIReply.findMany({
      where: {
        OR: [
          { email: { workspaceId } },
          { lead: { workspaceId } }
        ]
      },
      orderBy: { createdAt: "desc" },
      include: {
        email: {
          select: {
            sender: true,
            recipient: true,
            subject: true,
            threadId: true,
          }
        }
      }
    });

    const formatted = replies.map(r => ({
      id: r.id,
      recipient: r.recipient || r.email?.recipient || "Unknown",
      subject: r.subject || r.email?.subject || "(No Subject)",
      generatedReply: r.generatedReply,
      threadId: r.threadId || r.email?.threadId || "N/A",
      status: r.status,
      sentTime: r.sentAt ? r.sentAt.toISOString() : null,
      responseReceived: r.responseReceived,
      toneUsed: r.tone || "Professional",
      confidence: Math.round((r.confidence ?? 0.85) * 100),
      revenuePotential: r.revenuePotential ?? 0,
    }));

    return NextResponse.json({ replies: formatted });
  } catch (error) {
    console.error("[GMAIL_REPLIES_GET]", error);
    return NextResponse.json({ error: "Failed to load replies" }, { status: 500 });
  }
}
