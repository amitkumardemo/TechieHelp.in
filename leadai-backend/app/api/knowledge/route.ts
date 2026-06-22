import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const knowledge = await prisma.companyKnowledge.findUnique({
      where: { workspaceId },
      include: {
        pages: {
          select: {
            id: true,
            url: true,
            title: true,
            lastCrawledAt: true,
            content: true,
          },
          orderBy: { url: "asc" },
        },
      },
    });

    return NextResponse.json({
      knowledge: knowledge
        ? {
            websiteUrl: knowledge.websiteUrl,
            pagesIndexed: knowledge.pagesIndexed,
            lastSyncAt: knowledge.lastSyncAt ? knowledge.lastSyncAt.toISOString() : null,
            knowledgeSize: knowledge.knowledgeSize,
            autoSync: knowledge.autoSync,
            enableLearning: knowledge.enableLearning,
            enableConversationMemory: knowledge.enableConversationMemory,
            status: knowledge.status,
            pages: knowledge.pages.map((p) => ({
              id: p.id,
              url: p.url,
              title: p.title || p.url,
              lastCrawledAt: p.lastCrawledAt.toISOString(),
              size: p.content?.length || 0,
            })),
          }
        : null,
    });
  } catch (error) {
    console.error("[KNOWLEDGE_STATUS_GET]", error);
    return NextResponse.json({ error: "Failed to load knowledge status" }, { status: 500 });
  }
}
