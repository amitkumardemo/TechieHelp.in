import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { crawlWebsite } from "@/lib/knowledge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, websiteUrl } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    let urlToCrawl = websiteUrl;

    if (!urlToCrawl) {
      const knowledge = await prisma.companyKnowledge.findUnique({
        where: { workspaceId },
      });

      if (!knowledge || !knowledge.websiteUrl) {
        return NextResponse.json({ error: "No website URL configured" }, { status: 400 });
      }
      urlToCrawl = knowledge.websiteUrl;
    }

    // Trigger crawler asynchronously (returns immediately after setting status to CRAWLING)
    const knowledgeStatus = await crawlWebsite(workspaceId, urlToCrawl);

    return NextResponse.json({
      success: true,
      message: "Crawling started",
      status: "CRAWLING",
      knowledge: knowledgeStatus,
    });
  } catch (error) {
    console.error("[KNOWLEDGE_CRAWL_POST]", error);
    return NextResponse.json({ error: "Failed to trigger crawler" }, { status: 500 });
  }
}
