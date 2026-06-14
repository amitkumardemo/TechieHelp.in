import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/gmail/emails/[id]
 * Returns the full email detail including body and AI analysis.
 * Query: workspaceId required for workspace isolation.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const workspaceId = req.nextUrl.searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const email = await prisma.email.findFirst({
      where: { id, workspaceId },
      include: {
        aiReplies: {
          orderBy: { createdAt: "desc" },
        },
        lead: {
          select: { id: true, name: true, leadScore: true, status: true },
        },
      },
    });

    if (!email) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    // Mark as read
    if (!email.isRead) {
      await prisma.email.update({
        where: { id },
        data: { isRead: true },
      });
    }

    return NextResponse.json(email);
  } catch (error) {
    console.error("[GMAIL_EMAIL_DETAIL]", error);
    return NextResponse.json({ error: "Failed to fetch email" }, { status: 500 });
  }
}

/**
 * PATCH /api/gmail/emails/[id]
 * Update email status (archive, mark read/unread).
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { workspaceId, isArchived, isRead, status } = body;

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    const updated = await prisma.email.updateMany({
      where: { id, workspaceId },
      data: {
        ...(isArchived !== undefined && { isArchived }),
        ...(isRead !== undefined && { isRead }),
        ...(status && { status }),
      },
    });

    if (updated.count === 0) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[GMAIL_EMAIL_PATCH]", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
