import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/gmail/signature?workspaceId=xxx
 * Returns the email signature for a workspace.
 *
 * POST /api/gmail/signature
 * Saves the email signature for a workspace.
 * Body: { workspaceId, name, designation, company, phone, website, logoUrl, customHtml }
 */
export async function GET(req: NextRequest) {
  try {
    const workspaceId = req.nextUrl.searchParams.get("workspaceId");
    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const signature = await prisma.emailSignature.findUnique({
      where: { workspaceId },
    });

    return NextResponse.json(signature ?? null);
  } catch (error) {
    console.error("[GMAIL_SIGNATURE_GET]", error);
    return NextResponse.json({ error: "Failed to fetch signature" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, name, designation, company, phone, website, logoUrl, customHtml } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const signature = await prisma.emailSignature.upsert({
      where: { workspaceId },
      create: { workspaceId, name, designation, company, phone, website, logoUrl, customHtml },
      update: { name, designation, company, phone, website, logoUrl, customHtml },
    });

    return NextResponse.json(signature);
  } catch (error) {
    console.error("[GMAIL_SIGNATURE_POST]", error);
    return NextResponse.json({ error: "Failed to save signature" }, { status: 500 });
  }
}
