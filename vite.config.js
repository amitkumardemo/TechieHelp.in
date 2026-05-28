import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { SYSTEM_INSTRUCTION, getLocalBackupResponse } from './src/config/prompts/chatbotPrompt.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-chat-middleware',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && req.url.startsWith('/api/chat')) {
              // Only allow POST
              if (req.method !== 'POST') {
                res.writeHead(405, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Method not allowed' }));
                return;
              }

              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });

              req.on('end', async () => {
                try {
                  const parsedBody = JSON.parse(body || '{}');
                  const { message, history } = parsedBody;

                  const apiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY;
                  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY') {
                    // Instantly use local fallback if key is placeholder
                    const text = getLocalBackupResponse(message);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ text, isFallback: true }));
                    return;
                  }

                  const contents = [];
                  if (history && Array.isArray(history)) {
                    history.forEach(msg => {
                      contents.push({
                        role: msg.sender === 'user' ? 'user' : 'model',
                        parts: [{ text: msg.text }]
                      });
                    });
                  }
                  contents.push({
                    role: 'user',
                    parts: [{ text: message }]
                  });

                  // Sequential Candidate Endpoints list
                  const endpointsToTry = [
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
                    "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
                  ];

                  let text = "";
                  let success = false;
                  let lastError = null;

                  for (const baseUrl of endpointsToTry) {
                    try {
                      const url = `${baseUrl}?key=${apiKey}`;
                      const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          contents,
                          systemInstruction: {
                            parts: [{ text: SYSTEM_INSTRUCTION }]
                          },
                          generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 800
                          }
                        })
                      });

                      if (response.ok) {
                        const data = await response.json();
                        text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                        if (text) {
                          success = true;
                          break;
                        }
                      } else {
                        const errorText = await response.text();
                        console.warn(`Model endpoint ${baseUrl} returned status ${response.status}: ${errorText}`);
                        lastError = new Error(`Status ${response.status}: ${errorText}`);
                      }
                    } catch (err) {
                      console.warn(`Failed to connect to model endpoint ${baseUrl}:`, err);
                      lastError = err;
                    }
                  }

                  let isFallback = false;
                  // If all external API candidates failed, execute the local keyword fallback
                  if (!success) {
                    console.warn("All external Gemini API routes failed. Engaging local backup response engine.", lastError);
                    text = getLocalBackupResponse(message);
                    isFallback = true;
                  }

                  // Strip lead tag
                  const leadRegex = /<lead_captured\s+name="([^"]*)"\s+email="([^"]*)"\s+phone="([^"]*)"\s+interest="([^"]*)"\s*\/?>/i;
                  text = text.replace(leadRegex, "").trim();

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ text, isFallback }));
                } catch (err) {
                  console.error("Vite local API middleware error:", err);
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Failed to process chat response.', details: err.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    base: '/',
    server: {
      fs: {
        strict: false,
      },
    },
  };
});