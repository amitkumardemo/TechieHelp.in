import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export interface EmailAnalysis {
  leadScore: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  intent: string;
  sentiment: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
  aiSummary: string;
}

/**
 * Analyzes an email using Gemini AI to generate lead scoring and intent classification.
 */
export async function analyzeEmail(
  subject: string,
  sender: string,
  body: string
): Promise<EmailAnalysis> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `You are a B2B lead qualification AI for a business called TechieHelp.in.

Analyze this incoming business email and return a JSON object ONLY (no markdown, no explanation):

Email Subject: ${subject}
Email From: ${sender}
Email Body:
${body.slice(0, 3000)}

Return JSON exactly like this:
{
  "leadScore": <integer 0-100>,
  "priority": "<HIGH|MEDIUM|LOW>",
  "intent": "<brief intent like: Website Development, App Development, SEO Services, Support, Spam, Partnership, etc>",
  "sentiment": "<POSITIVE|NEUTRAL|NEGATIVE>",
  "aiSummary": "<2-3 sentence summary of what this email is about and why it matters>"
}

Scoring guide:
- 80-100: Hot lead, clear buying intent, specific project request
- 60-79: Warm lead, interested but vague
- 40-59: Informational inquiry
- 20-39: Generic/cold contact
- 0-19: Spam or irrelevant`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in Gemini response");

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      leadScore: Math.min(100, Math.max(0, Number(parsed.leadScore) || 0)),
      priority: ["HIGH", "MEDIUM", "LOW"].includes(parsed.priority)
        ? parsed.priority
        : "MEDIUM",
      intent: String(parsed.intent || "General Inquiry"),
      sentiment: ["POSITIVE", "NEUTRAL", "NEGATIVE"].includes(parsed.sentiment)
        ? parsed.sentiment
        : "NEUTRAL",
      aiSummary: String(parsed.aiSummary || ""),
    };
  } catch {
    // Return safe defaults if Gemini fails
    return {
      leadScore: 0,
      priority: "LOW",
      intent: "Unknown",
      sentiment: "NEUTRAL",
      aiSummary: "Analysis unavailable.",
    };
  }
}

/**
 * Generates a professional email reply using Gemini AI.
 */
export async function generateEmailReply(params: {
  originalSubject: string;
  originalSender: string;
  originalBody: string;
  intent: string;
  tone?: string;
  signature?: string;
}): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const { originalSubject, originalSender, originalBody, intent, tone = "Professional", signature = "" } = params;

  const prompt = `You are an expert business email writer for TechieHelp.in, a software development and digital services company.

Write a professional email reply to the following inquiry.

Original Email:
From: ${originalSender}
Subject: ${originalSubject}
Body: ${originalBody.slice(0, 2000)}

Lead Intent: ${intent}
Reply Tone: ${tone}

Instructions:
- Write a complete, ready-to-send email reply
- Address the sender by name if available from their email
- Be specific to their inquiry (${intent})
- Keep it concise (3-4 paragraphs max)
- Include a call-to-action (schedule a call, share portfolio, etc.)
- Do NOT include a subject line — just the email body
- End with the signature below

Signature:
${signature || "Best regards,\nTeam TechieHelp.in\nhttps://techiehelp.in"}

Write only the email body, no extra text:`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch {
    return `Thank you for reaching out to TechieHelp.in.

We've received your inquiry about ${intent} and would love to discuss how we can help you achieve your goals.

Could we schedule a quick 15-minute call to understand your requirements better? Please feel free to reply to this email or visit https://techiehelp.in to learn more about our services.

${signature || "Best regards,\nTeam TechieHelp.in"}`;
  }
}
