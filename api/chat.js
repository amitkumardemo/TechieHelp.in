import { techiehelpContext } from '../src/data/techiehelpContext.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key is not configured' });
  }

  const systemInstruction = `You are a helpful, professional, and friendly AI chatbot for TechieHelp (https://techiehelp.in).

Here is the exact information about TechieHelp:
${techiehelpContext}

CRITICAL RULES:
1. You must ONLY answer questions based on the TechieHelp website information provided above. Do NOT use any external knowledge.
2. Help users with internships, courses, services, pricing, platform navigation, and FAQs.
3. If a question is not about TechieHelp or you do not know the answer based on the provided information, you MUST reply exactly: "Please contact TechieHelp support for more information."
4. Keep responses concise, friendly, and structured using markdown where helpful.`;

  // Map messages to Gemini's format: user -> user, model -> model
  // Keep the last 6 messages to stay within prompt length limits
  const recentMessages = messages.slice(-6);
  const contents = recentMessages.map(m => ({
    role: m.sender === 'user' ? 'user' : 'model',
    parts: [{ text: m.text }]
  }));

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Please contact TechieHelp support for more information.";
    return res.status(200).json({ text: botText });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
