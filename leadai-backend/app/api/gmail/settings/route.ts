import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const integration = await prisma.gmailIntegration.findUnique({
      where: { workspaceId },
    });

    return NextResponse.json({
      autoReplyEnabled: integration?.autoReplyEnabled ?? false,
      autoReplyTone: integration?.autoReplyTone ?? "Professional",
      autoReplyInstructions: integration?.autoReplyInstructions ?? "",
      autoReplyHours: integration?.autoReplyHours ?? "",
      autoReplyDelay: integration?.autoReplyDelay ?? 5,
      autoReplySignature: integration?.autoReplySignature ?? "",
    });
  } catch (error) {
    console.error("[GMAIL_SETTINGS_GET]", error);
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      workspaceId,
      autoReplyEnabled,
      autoReplyTone,
      autoReplyInstructions,
      autoReplyHours,
      autoReplyDelay,
      autoReplySignature,
    } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const integration = await prisma.gmailIntegration.upsert({
      where: { workspaceId },
      create: {
        workspaceId,
        email: "onboarding@techiehelp.in",
        accessToken: "",
        refreshToken: "",
        autoReplyEnabled: !!autoReplyEnabled,
        autoReplyTone: autoReplyTone || "Professional",
        autoReplyInstructions: autoReplyInstructions || "",
        autoReplyHours: autoReplyHours || "",
        autoReplyDelay: parseInt(autoReplyDelay) || 5,
        autoReplySignature: autoReplySignature || "",
      },
      update: {
        autoReplyEnabled: !!autoReplyEnabled,
        autoReplyTone: autoReplyTone || "Professional",
        autoReplyInstructions: autoReplyInstructions || "",
        autoReplyHours: autoReplyHours || "",
        autoReplyDelay: parseInt(autoReplyDelay) || 5,
        autoReplySignature: autoReplySignature || "",
      },
    });

    return NextResponse.json({ success: true, settings: integration });
  } catch (error) {
    console.error("[GMAIL_SETTINGS_POST]", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
