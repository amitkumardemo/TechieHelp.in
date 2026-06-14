import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateEmailReply } from "@/lib/gemini";

/**
 * POST /api/gmail/reply/generate
 * Uses Gemini AI to generate a professional reply for an email.
 * Body: { workspaceId, emailId, tone? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workspaceId, emailId, tone = "Professional" } = body;

    if (!workspaceId || !emailId) {
      return NextResponse.json(
        { error: "workspaceId and emailId are required" },
        { status: 400 }
      );
    }

    // Get email
    const email = await prisma.email.findFirst({
      where: { id: emailId, workspaceId },
    });

    if (!email) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    // Get email signature for this workspace
    const signature = await prisma.emailSignature.findUnique({
      where: { workspaceId },
    });

    const signatureText = signature
      ? [
          signature.name && `Best regards,\n${signature.name}`,
          signature.designation && signature.company
            ? `${signature.designation} | ${signature.company}`
            : signature.designation ?? signature.company,
          signature.phone,
          signature.website,
        ]
          .filter(Boolean)
          .join("\n")
      : "Best regards,\nTeam TechieHelp.in";

    // Generate reply with Gemini
    const replyText = await generateEmailReply({
      originalSubject: email.subject ?? "",
      originalSender: email.sender,
      originalBody: email.body ?? "",
      intent: email.intent ?? "General Inquiry",
      tone,
      signature: signatureText,
    });

    // Save as draft AIReply
    const aiReply = await prisma.aIReply.create({
      data: {
        emailId,
        generatedReply: replyText,
        status: "DRAFT",
        model: "gemini-1.5-pro",
      },
    });

    // Activity feed
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: "AI_REPLY_GENERATED",
        title: "AI Reply Generated",
        description: `Reply drafted for: "${email.subject}"`,
        metadata: JSON.stringify({ emailId, aiReplyId: aiReply.id }),
      },
    });

    return NextResponse.json({
      id: aiReply.id,
      reply: replyText,
      status: "DRAFT",
    });
  } catch (error) {
    console.error("[GMAIL_REPLY_GENERATE]", error);
    return NextResponse.json({ error: "Reply generation failed" }, { status: 500 });
  }
}
