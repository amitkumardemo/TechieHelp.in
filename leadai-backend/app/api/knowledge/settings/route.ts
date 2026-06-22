import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      workspaceId,
      websiteUrl,
      autoSync,
      enableLearning,
      enableConversationMemory,
    } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    let startUrl = websiteUrl ? websiteUrl.trim() : "";
    if (startUrl && !/^https?:\/\//i.test(startUrl)) {
      startUrl = `https://${startUrl}`;
    }

    const knowledge = await prisma.companyKnowledge.upsert({
      where: { workspaceId },
      create: {
        workspaceId,
        websiteUrl: startUrl,
        autoSync: autoSync !== undefined ? !!autoSync : true,
        enableLearning: enableLearning !== undefined ? !!enableLearning : true,
        enableConversationMemory: enableConversationMemory !== undefined ? !!enableConversationMemory : true,
        status: "IDLE",
      },
      update: {
        websiteUrl: startUrl,
        autoSync: autoSync !== undefined ? !!autoSync : true,
        enableLearning: enableLearning !== undefined ? !!enableLearning : true,
        enableConversationMemory: enableConversationMemory !== undefined ? !!enableConversationMemory : true,
      },
    });

    return NextResponse.json({ success: true, knowledge });
  } catch (error) {
    console.error("[KNOWLEDGE_SETTINGS_POST]", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
