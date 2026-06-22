import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function parseSender(sender: string) {
  if (!sender) return { name: "Unknown", email: "" };
  const match = sender.match(/^(.*?)\s*<(.*?)>$/);
  if (match) {
    return { name: match[1].replace(/['"]/g, "").trim(), email: match[2].trim() };
  }
  return { name: sender.split("@")[0], email: sender };
}

/**
 * GET /api/dashboard/data?workspaceId=xxx
 * Retrieves actual workspace integration status and live synced data.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json({ error: "workspaceId is required" }, { status: 400 });
    }

    // Ensure workspace exists in the database
    await prisma.workspace.upsert({
      where: { id: workspaceId },
      create: {
        id: workspaceId,
        name: "My Workspace",
        slug: workspaceId,
      },
      update: {},
    });

    // 1. Fetch Integration Statuses
    const [gmail, whatsapp, sheets, vapi] = await Promise.all([
      prisma.gmailIntegration.findUnique({ where: { workspaceId } }),
      prisma.whatsAppIntegration.findUnique({ where: { workspaceId } }),
      prisma.googleSheetsIntegration.findUnique({ where: { workspaceId } }),
      prisma.vapiIntegration.findUnique({ where: { workspaceId } }),
    ]);

    // 2. Fetch Synced Data
    const [dbEmails, dbLeads, dbCalls, dbTimeline, dbMemories] = await Promise.all([
      prisma.email.findMany({
        where: { workspaceId },
        orderBy: { receivedAt: "desc" },
      }),
      prisma.lead.findMany({
        where: { workspaceId },
        orderBy: { createdAt: "desc" },
      }),
      prisma.call.findMany({
        where: { workspaceId },
        include: { lead: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.activityFeed.findMany({
        where: { workspaceId },
        orderBy: { createdAt: "desc" },
        take: 30,
      }),
      prisma.customerMemory.findMany({
        where: { workspaceId },
        orderBy: { updatedAt: "desc" },
      }),
    ]);

    const integrationStatuses = {
      gmail: gmail?.status === "CONNECTED" ? "Connected" : "Not Connected",
      gmailEmail: gmail?.email || null,
      lastSyncAt: gmail?.lastSyncAt ? gmail.lastSyncAt.toISOString() : null,
      emailsSynced: dbEmails.length,
      forms: gmail?.status === "CONNECTED" ? "Connected" : "Not Connected", // Forms share Gmail hook
      whatsapp: whatsapp?.status === "CONNECTED" ? "Connected" : "Not Connected",
      sheets: sheets?.status === "CONNECTED" ? "Connected" : "Not Connected",
      vapi: vapi?.status === "CONNECTED" ? "Connected" : "Not Connected",
      gemini: "Connected", // AI Core is always ready
    };

    // Format emails/inbox items
    const inboxItems = dbEmails.map((email) => {
      const parsed = parseSender(email.sender);
      return {
        id: email.id,
        senderName: parsed.name,
        email: parsed.email,
        subject: email.subject || "(No Subject)",
        message: email.body || "",
        source: email.gmailMessageId ? "Gmail" : "Website Form",
        score: email.leadScore,
        priority: email.priority || "Medium",
        time: email.receivedAt.toISOString(),
        aiSummary: email.aiSummary || "",
        intent: email.intent || "General Inquiry",
        sentiment: email.sentiment || "Neutral",
        suggestedAction: email.isRead ? "None" : "Generate Draft Reply",
        read: email.isRead,
        gmailMessageId: email.gmailMessageId,
        threadId: email.threadId,
      };
    });

    // Format leads
    const leads = dbLeads.map((lead) => ({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      phone: lead.phone || "N/A",
      source: lead.source || "Unknown",
      score: lead.leadScore,
      priority: lead.priority,
      status: lead.status === "NEW" ? "New" : 
              lead.status === "QUALIFIED" ? "Qualified" :
              lead.status === "CONTACTED" ? "Contacted" :
              lead.status === "CONVERTED" ? "Converted" : "Discarded",
      revenue: lead.estimatedRevenue > 0 ? `₹${lead.estimatedRevenue.toLocaleString()}` : "—",
      time: lead.createdAt.toISOString(),
    }));

    // Format calls
    const calls = dbCalls.map((call) => ({
      id: call.id,
      leadName: call.lead?.name || "Unknown Lead", // Fallback if no lead link
      phone: call.phone,
      duration: call.duration ? `${Math.floor(call.duration / 60)}m ${call.duration % 60}s` : "0m 00s",
      status: call.status,
      meetingBooked: call.bookedMeeting,
      score: 80, // Default metric score
      time: call.createdAt.toISOString(),
      transcript: call.transcript || "",
      summary: call.summary || "",
    }));

    // Format activity feed timeline
    const timeline = dbTimeline.map((item) => ({
      id: item.id,
      time: item.createdAt.toISOString(),
      text: item.description || item.title,
      type: item.type.toLowerCase().split("_")[0], // e.g. "email", "lead", "call"
    }));

    return NextResponse.json({
      integrationStatuses,
      inboxItems,
      leads,
      calls,
      whatsappChats: [], // Placeholder for WhatsApp integrations
      timeline,
      customerMemories: dbMemories,
    });
  } catch (error) {
    console.error("[DASHBOARD_DATA_GET]", error);
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
  }
}
