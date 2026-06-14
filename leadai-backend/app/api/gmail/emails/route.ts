import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/gmail/emails
 * Returns paginated email list for a workspace with optional filters.
 * Query params:
 *   workspaceId (required)
 *   tab: all | unread | high | hot | replied | archived
 *   search: string
 *   page: number (default 1)
 *   limit: number (default 20)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const workspaceId = searchParams.get("workspaceId");
    const tab = searchParams.get("tab") ?? "all";
    const search = searchParams.get("search") ?? "";
    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = parseInt(searchParams.get("limit") ?? "20", 10);

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    // Build where clause
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: Record<string, any> = { workspaceId };

    switch (tab) {
      case "unread":
        where.isRead = false;
        where.isArchived = false;
        break;
      case "high":
        where.priority = "HIGH";
        where.isArchived = false;
        break;
      case "hot":
        where.leadScore = { gte: 80 };
        where.isArchived = false;
        break;
      case "replied":
        where.status = "REPLIED";
        break;
      case "archived":
        where.isArchived = true;
        break;
      default: // "all"
        where.isArchived = false;
    }

    if (search) {
      where.OR = [
        { subject: { contains: search, mode: "insensitive" } },
        { sender: { contains: search, mode: "insensitive" } },
        { snippet: { contains: search, mode: "insensitive" } },
      ];
    }

    const [emails, total] = await Promise.all([
      prisma.email.findMany({
        where,
        orderBy: { receivedAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          subject: true,
          sender: true,
          recipient: true,
          snippet: true,
          receivedAt: true,
          isRead: true,
          isArchived: true,
          leadScore: true,
          priority: true,
          intent: true,
          sentiment: true,
          aiSummary: true,
          status: true,
          gmailMessageId: true,
          aiReplies: {
            select: { id: true, status: true, sentAt: true },
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
      }),
      prisma.email.count({ where }),
    ]);

    return NextResponse.json({
      emails,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("[GMAIL_EMAILS_LIST]", error);
    return NextResponse.json({ error: "Failed to fetch emails" }, { status: 500 });
  }
}
