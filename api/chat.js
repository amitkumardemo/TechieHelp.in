import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { SYSTEM_INSTRUCTION, getLocalBackupResponse } from "../src/config/prompts/chatbotPrompt.js";

// Initialize Firebase client in Serverless environment if not already initialized
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyCHQ3Hd37ubRkDbTbbKuNQnX89oAo3MNwQ",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "techiehelp-27710.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "techiehelp-27710",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "techiehelp-27710.firebasestorage.app",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "899635859051",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:899635859051:web:2a61d32253b3581897eb2e",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RJKKPDHE0N"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history, sessionId, userId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
    const text = getLocalBackupResponse(message);
    return res.status(200).json({ text, leadCaptured: false, isFallback: true });
  }

  try {
    // Format message history for Gemini API
    const contents = [];

    if (history && Array.isArray(history)) {
      history.forEach((msg) => {
        if (msg.sender === "user") {
          contents.push({
            role: "user",
            parts: [{ text: msg.text }]
          });
        } else if (msg.sender === "bot") {
          contents.push({
            role: "model",
            parts: [{ text: msg.text }]
          });
        }
      });
    }

    // Add current user message
    contents.push({
      role: "user",
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
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
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

    // Detect and parse lead capture tags in response text
    const leadRegex = /<lead_captured\s+name="([^"]*)"\s+email="([^"]*)"\s+phone="([^"]*)"\s+interest="([^"]*)"\s*\/?>/i;
    const match = text.match(leadRegex);
    let leadCaptured = null;

    if (match) {
      leadCaptured = {
        name: match[1],
        email: match[2],
        phone: match[3],
        interest: match[4],
        timestamp: new Date().toISOString(),
        sessionId: sessionId || "guest",
        userId: userId || "guest"
      };

      // Strip lead tag from the response text shown to user
      text = text.replace(leadRegex, "").trim();

      // Write lead to Firestore
      try {
        await addDoc(collection(db, "leads"), leadCaptured);
        console.log("Successfully logged lead in Firestore:", leadCaptured);
      } catch (dbErr) {
        console.error("Error writing lead to Firestore:", dbErr);
      }
    }

    // Save message thread telemetry to Firestore if sessionId is provided
    if (sessionId) {
      try {
        const sessionRef = doc(db, "chat_sessions", sessionId);
        // Set metadata
        await setDoc(sessionRef, {
          lastUpdated: new Date().toISOString(),
          userId: userId || "guest",
          leadCaptured: !!leadCaptured
        }, { merge: true });

        // Add user query
        await addDoc(collection(sessionRef, "messages"), {
          sender: "user",
          text: message,
          timestamp: new Date().toISOString()
        });

        // Add bot response
        await addDoc(collection(sessionRef, "messages"), {
          sender: "bot",
          text,
          timestamp: new Date().toISOString()
        });
      } catch (dbErr) {
        console.error("Error logging chat message to Firestore:", dbErr);
      }
    }

    return res.status(200).json({ text, leadCaptured: !!leadCaptured, isFallback });

  } catch (error) {
    console.error("API route error:", error);
    return res.status(500).json({ error: "Failed to process chat response.", details: error.message });
  }
}
