import { prisma } from "./prisma";
import { getAuthenticatedClient, fetchEmailsForQuery, refreshAccessToken, sendEmail } from "./gmail";
import { decrypt } from "./encryption";
import { analyzeEmail, generateEmailReply } from "./gemini";
import { google } from "googleapis";
import { emitWorkspaceEvent } from "./events";
import { searchKnowledgeContext } from "./knowledge";

function parseSender(sender: string) {
  if (!sender) return { name: "Unknown", email: "" };
  const match = sender.match(/^(.*?)\s*<(.*?)>$/);
  if (match) {
    return { name: match[1].replace(/['"]/g, "").trim(), email: match[2].trim() };
  }
  return { name: sender.split("@")[0], email: sender };
}

/**
 * Updates the CustomerMemory profile using Gemini AI by synthesizing the new email content
 * with existing memory.
 */
async function updateMemoryWithGemini(
  workspaceId: string,
  customerEmail: string,
  emailBody: string,
  isOutbound: boolean,
  currentMemory: any
): Promise<{ requirements: string; budget: string; painPoints: string; lastSummary: string }> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey.startsWith("AIzaSyDummy")) {
      // Fallback if no real API key
      return {
        requirements: currentMemory?.requirements || "Not specified",
        budget: currentMemory?.budget || "Not specified",
        painPoints: currentMemory?.painPoints || "Not specified",
        lastSummary: isOutbound ? "Sent follow-up reply." : "Received query from customer.",
      };
    }

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a B2B Relationship Intelligence AI.
We are updating the long-term relationship memory profile for a customer contact: ${customerEmail}.

Current Memory Profile:
- Requirements: ${currentMemory?.requirements || "None recorded"}
- Budget: ${currentMemory?.budget || "None recorded"}
- Pain Points: ${currentMemory?.painPoints || "None recorded"}
- Last Summary: ${currentMemory?.lastSummary || "None recorded"}

New email exchanged (Direction: ${isOutbound ? "OUTBOUND (From us to customer)" : "INBOUND (From customer to us)"}):
${emailBody.slice(0, 3000)}

Synthesize the new email with the current profile and output a JSON object ONLY containing:
{
  "requirements": "<Updated project requirements/needs, keeping past details if still relevant>",
  "budget": "<Updated budget info like '₹50,000', '1.5 Lakhs', 'Enterprise scale', or 'Unknown'>",
  "painPoints": "<Updated customer pain points or issues they are facing>",
  "lastSummary": "<A new consolidated relationship summary of 2-3 sentences incorporating this interaction>"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in Gemini memory response");
    
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      requirements: String(parsed.requirements || currentMemory?.requirements || "Not specified"),
      budget: String(parsed.budget || currentMemory?.budget || "Not specified"),
      painPoints: String(parsed.painPoints || currentMemory?.painPoints || "Not specified"),
      lastSummary: String(parsed.lastSummary || currentMemory?.lastSummary || "Interaction updated."),
    };
  } catch (e) {
    console.error("Gemini CustomerMemory update failed:", e);
    return {
      requirements: currentMemory?.requirements || "Not specified",
      budget: currentMemory?.budget || "Not specified",
      painPoints: currentMemory?.painPoints || "Not specified",
      lastSummary: isOutbound ? "Sent reply email." : "Received inbound email.",
    };
  }
}

/**
 * Runs Gmail sync for a specific workspace.
 * Fetches latest inbox and sent messages, creates/updates Threads, Conversations, Leads,
 * and extracts attachments.
 */
export async function syncWorkspaceGmail(workspaceId: string, maxResults = 50) {
  const integration = await prisma.gmailIntegration.findUnique({
    where: { workspaceId },
  });

  if (!integration || integration.status !== "CONNECTED") {
    return { success: false, error: "Gmail integration not connected" };
  }

  // 1. Decrypt Refresh Token
  let refreshToken: string;
  try {
    refreshToken = decrypt(integration.refreshToken);
  } catch (e) {
    return { success: false, error: "Refresh token decryption failed" };
  }

  // 2. Token Refresh
  let accessToken = integration.accessToken;
  const now = new Date();
  const expiry = integration.tokenExpiry;

  if (!expiry || expiry <= now) {
    try {
      const refreshed = await refreshAccessToken(refreshToken);
      accessToken = refreshed.accessToken;
      await prisma.gmailIntegration.update({
        where: { workspaceId },
        data: {
          accessToken: refreshed.accessToken,
          tokenExpiry: refreshed.expiry,
        },
      });
    } catch (e) {
      console.error("Access token refresh failed:", e);
      // Mark as broken integration
      await prisma.gmailIntegration.update({
        where: { workspaceId },
        data: { status: "DISCONNECTED" },
      });
      return { success: false, error: "OAuth refresh failed. Integration disconnected." };
    }
  }

  const auth = getAuthenticatedClient(accessToken, refreshToken);

  // 3. Fetch Inbox and Sent emails
  const [inboxEmails, sentEmails] = await Promise.all([
    fetchEmailsForQuery(auth, "in:inbox", maxResults),
    fetchEmailsForQuery(auth, "in:sent", maxResults),
  ]);

  const allEmails = [...inboxEmails, ...sentEmails];
  // Sort oldest to newest so thread timeline is built sequentially
  allEmails.sort((a, b) => a.receivedAt.getTime() - b.receivedAt.getTime());

  let syncedCount = 0;
  let skippedCount = 0;

  for (const email of allEmails) {
    // Check if email already exists
    const existing = await prisma.email.findFirst({
      where: { gmailMessageId: email.gmailMessageId, workspaceId },
    });

    if (existing) {
      skippedCount++;
      continue;
    }

    // Determine if it is outbound or inbound
    const isOutbound = email.sender.toLowerCase().includes(integration.email.toLowerCase());
    const customerContact = isOutbound ? parseSender(email.recipient) : parseSender(email.sender);
    
    if (!customerContact.email) {
      skippedCount++;
      continue;
    }

    const customerEmail = customerContact.email;
    const customerName = customerContact.name || customerEmail.split("@")[0];

    // 4. Find or Create CustomerMemory
    let customerMemory = await prisma.customerMemory.findUnique({
      where: { email: customerEmail },
    });

    if (!customerMemory) {
      customerMemory = await prisma.customerMemory.create({
        data: {
          workspaceId,
          email: customerEmail,
          name: customerName,
          relationshipScore: 50,
        },
      });
    }

    // 5. Find or Create Conversation
    let conversation = await prisma.conversation.findFirst({
      where: { workspaceId, customerEmail },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          workspaceId,
          customerEmail,
          status: "ACTIVE",
        },
      });
    }

    // 6. Find or Create Thread
    let thread = await prisma.thread.findUnique({
      where: { gmailThreadId: email.gmailThreadId },
    });

    if (!thread) {
      thread = await prisma.thread.create({
        data: {
          workspaceId,
          gmailThreadId: email.gmailThreadId,
          conversationId: conversation.id,
          subject: email.subject,
          snippet: email.snippet,
        },
      });
    } else if (!thread.conversationId) {
      await prisma.thread.update({
        where: { id: thread.id },
        data: { conversationId: conversation.id },
      });
    }

    // 7. Analyze Inbound Emails using Gemini
    let leadScore = 0;
    let priority = "MEDIUM";
    let intent = "General Inquiry";
    let sentiment = "NEUTRAL";
    let aiSummary = "";

    if (!isOutbound) {
      const analysis = await analyzeEmail(email.subject, email.sender, email.body);
      leadScore = analysis.leadScore;
      priority = analysis.priority;
      intent = analysis.intent;
      sentiment = analysis.sentiment;
      aiSummary = analysis.aiSummary;
    } else {
      intent = "Outgoing Reply";
      aiSummary = `Sent reply: ${email.snippet}`;
    }

    // 8. Find or Create Lead
    let lead = await prisma.lead.findFirst({
      where: { workspaceId, email: customerEmail },
    });

    if (!lead && !isOutbound && leadScore >= 50) {
      lead = await prisma.lead.create({
        data: {
          workspaceId,
          name: customerName,
          email: customerEmail,
          source: "Gmail",
          leadScore,
          priority,
          status: "NEW",
          intent,
          notes: aiSummary,
          customerMemoryId: customerMemory.id,
        },
      });
    } else if (lead && !isOutbound) {
      // Update lead score if new email shows higher score
      const nextScore = Math.max(lead.leadScore, leadScore);
      await prisma.lead.update({
        where: { id: lead.id },
        data: {
          leadScore: nextScore,
          intent,
          priority: leadScore > lead.leadScore ? priority : lead.priority,
        },
      });
    }

    // 9. Create Email Record
    const savedEmail = await prisma.email.create({
      data: {
        workspaceId,
        leadId: lead?.id || null,
        gmailMessageId: email.gmailMessageId,
        subject: email.subject,
        sender: email.sender,
        recipient: email.recipient,
        body: email.body,
        snippet: email.snippet,
        receivedAt: email.receivedAt,
        isRead: email.isRead,
        status: isOutbound ? "SENT" : "RECEIVED",
        leadScore,
        priority,
        intent,
        sentiment,
        aiSummary,
        customerMemoryId: customerMemory.id,
        threadId: thread.id,
      },
    });

    // 10. Store Attachments Metadata
    if (email.attachments && email.attachments.length > 0) {
      for (const att of email.attachments) {
        await prisma.attachment.create({
          data: {
            emailId: savedEmail.id,
            filename: att.filename,
            mimeType: att.mimeType,
            size: att.size,
          },
        });
      }
    }

    // 10.5 Auto-Reply to New Inbound Qualified Leads
    if (!isOutbound && leadScore >= 40 && integration.autoReplyEnabled) {
      try {
        console.log(`[AUTO-REPLY] New lead detected from ${customerEmail}. Score: ${leadScore}. Generating auto reply...`);

        // Fetch signature
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

        // Load conversation history for the context (excluding the currently saved email)
        const dbHistory = await prisma.email.findMany({
          where: {
            workspaceId,
            customerMemoryId: customerMemory.id,
            NOT: { id: savedEmail.id },
          },
          orderBy: { receivedAt: "desc" },
          take: 10,
        });

        const conversationHistory = dbHistory.reverse().map((h) => ({
          sender: h.sender,
          body: h.body || h.snippet || "",
          receivedAt: h.receivedAt,
        }));

        // Search company knowledge base for RAG context
        const companyKnowledgeCtx = await searchKnowledgeContext(workspaceId, email.body ?? "");

        // Generate reply with Gemini
        const replyText = await generateEmailReply({
          originalSubject: email.subject ?? "",
          originalSender: email.sender,
          originalBody: email.body ?? "",
          intent,
          tone: "Professional",
          signature: signatureText,
          customerMemory,
          conversationHistory,
          companyKnowledge: companyKnowledgeCtx,
        });

        // Send via Gmail API
        const replySubject = email.subject.toLowerCase().startsWith("re:") ? email.subject : `Re: ${email.subject}`;
        await sendEmail(auth, customerEmail, replySubject, replyText, email.gmailMessageId);
        console.log(`[AUTO-REPLY] Auto reply sent to ${customerEmail}`);

        // Save AIReply record
        const aiReply = await prisma.aIReply.create({
          data: {
            emailId: savedEmail.id,
            generatedReply: replyText,
            status: "SENT",
            sentAt: new Date(),
            model: "gemini-1.5-pro",
          },
        });

        // Save Sent Email Record
        const autoSentEmail = await prisma.email.create({
          data: {
            workspaceId,
            leadId: lead?.id || null,
            gmailMessageId: `auto_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            subject: replySubject,
            sender: integration.email,
            recipient: email.sender,
            body: replyText,
            snippet: replyText.slice(0, 120),
            receivedAt: new Date(),
            isRead: true,
            status: "SENT",
            leadScore: 0,
            priority: "LOW",
            intent: "Outgoing Reply",
            sentiment: "NEUTRAL",
            aiSummary: "Auto reply sent.",
            customerMemoryId: customerMemory.id,
            threadId: thread.id,
          },
        });

        // Update original email status
        await prisma.email.update({
          where: { id: savedEmail.id },
          data: { status: "REPLIED" },
        });

        // Update lead status to contacted
        if (lead) {
          await prisma.lead.update({
            where: { id: lead.id },
            data: { status: "CONTACTED" },
          });
        }

        // Create activity feed event for the auto reply
        await prisma.activityFeed.create({
          data: {
            workspaceId,
            type: "EMAIL_SENT",
            title: "Auto Reply Sent",
            description: `Auto-replied to ${customerEmail} — "${replySubject}"`,
            metadata: JSON.stringify({ emailId: savedEmail.id, replyEmailId: autoSentEmail.id, to: customerEmail }),
          },
        });

        // Emit SSE workspace event to notify frontend
        emitWorkspaceEvent(workspaceId, "EMAIL_SENT", {
          id: autoSentEmail.id,
          subject: autoSentEmail.subject,
          sender: autoSentEmail.sender,
          recipient: autoSentEmail.recipient,
          receivedAt: autoSentEmail.receivedAt,
        });

        // Also emit event notifying of draft/sent ready
        emitWorkspaceEvent(workspaceId, "AI_DRAFT_READY", {
          emailId: savedEmail.id,
          aiReplyId: aiReply.id,
          subject: email.subject,
          sender: email.sender,
        });

      } catch (autoReplyErr) {
        console.error("[AUTO-REPLY] Failed to execute auto-reply:", autoReplyErr);
      }
    }

    // 11. Run Memory extraction & Synthesis in background/sequential
    const updatedMemory = await updateMemoryWithGemini(
      workspaceId,
      customerEmail,
      email.body,
      isOutbound,
      customerMemory
    );

    // Update customer relationship details
    const pointsDelta = isOutbound ? 10 : (leadScore >= 75 ? 15 : 5);
    const nextScore = Math.min(100, customerMemory.relationshipScore + pointsDelta);

    await prisma.customerMemory.update({
      where: { id: customerMemory.id },
      data: {
        relationshipScore: nextScore,
        requirements: updatedMemory.requirements,
        budget: updatedMemory.budget,
        painPoints: updatedMemory.painPoints,
        lastSummary: updatedMemory.lastSummary,
      },
    });

    // 12. Log activity events
    await prisma.activityFeed.create({
      data: {
        workspaceId,
        type: isOutbound ? "EMAIL_SENT" : "EMAIL_SYNCED",
        title: isOutbound ? "Email Sent" : "Email Synced",
        description: `"${email.subject}" ${isOutbound ? "to" : "from"} ${customerEmail}`,
        metadata: JSON.stringify({ emailId: savedEmail.id }),
      },
    });

    if (!isOutbound && leadScore >= 60) {
      await prisma.activityFeed.create({
        data: {
          workspaceId,
          type: "LEAD_QUALIFIED",
          title: "Lead Qualified",
          description: `${customerEmail} qualified with score ${leadScore}/100`,
          metadata: JSON.stringify({ emailId: savedEmail.id, leadScore }),
        },
      });
    }

    // Emit Server-Sent Events to connected browsers
    try {
      emitWorkspaceEvent(workspaceId, isOutbound ? "EMAIL_SENT" : "EMAIL_SYNCED", {
        id: savedEmail.id,
        subject: savedEmail.subject,
        sender: savedEmail.sender,
        recipient: savedEmail.recipient,
        receivedAt: savedEmail.receivedAt,
      });

      if (!isOutbound && leadScore >= 60) {
        emitWorkspaceEvent(workspaceId, "LEAD_QUALIFIED", {
          id: lead?.id,
          name: customerName,
          email: customerEmail,
          score: leadScore,
        });
      }
    } catch (sseError) {
      console.error("SSE emission failed:", sseError);
    }

    syncedCount++;
  }

  // Update lastSyncAt
  await prisma.gmailIntegration.update({
    where: { workspaceId },
    data: { lastSyncAt: new Date() },
  });

  return {
    success: true,
    synced: syncedCount,
    skipped: skippedCount,
    total: allEmails.length,
  };
}
