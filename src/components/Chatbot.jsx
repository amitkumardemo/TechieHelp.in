import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logo, send as sendIcon, close as closeIcon } from '../assets';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { SYSTEM_INSTRUCTION } from '../config/prompts/chatbotPrompt.js';

// Inline Markdown Parser
const formatMessageText = (text) => {
    if (!text) return "";
    
    const lines = text.split('\n');
    
    return lines.map((line, idx) => {
        let trimmed = line.trim();
        
        // 1. Handle Bullet Points (e.g. starting with * or - or •)
        const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ');
        if (isBullet) {
            const content = trimmed.substring(2);
            return (
                <ul key={idx} className="list-disc pl-5 my-1">
                    <li className="text-gray-200">{parseInlineFormatting(content)}</li>
                </ul>
            );
        }
        
        // 2. Handle Numbered Lists (e.g. "1. ")
        const numListMatch = trimmed.match(/^(\d+)\.\s(.*)/);
        if (numListMatch) {
            const num = parseInt(numListMatch[1], 10);
            const content = numListMatch[2];
            return (
                <ol key={idx} className="list-decimal pl-5 my-1" start={num}>
                    <li className="text-gray-200">{parseInlineFormatting(content)}</li>
                </ol>
            );
        }
        
        // 3. Regular Paragraph / Heading
        if (trimmed === "") {
            return <div key={idx} className="h-2"></div>;
        }
        
        if (trimmed.startsWith('### ')) {
            return <h4 key={idx} className="font-bold text-sm text-cyan-400 mt-2 mb-1">{parseInlineFormatting(trimmed.substring(4))}</h4>;
        }
        if (trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
            const startIdx = trimmed.startsWith('## ') ? 3 : 2;
            return <h3 key={idx} className="font-bold text-sm text-cyan-300 mt-2 mb-1">{parseInlineFormatting(trimmed.substring(startIdx))}</h3>;
        }

        return <p key={idx} className="mb-1">{parseInlineFormatting(line)}</p>;
    });
};

const parseInlineFormatting = (text) => {
    // Process markdown link syntax: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        
        const linkText = match[1];
        const linkUrl = match[2];
        parts.push(
            <a 
                key={match.index} 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
            >
                {linkText}
            </a>
        );
        
        lastIndex = linkRegex.lastIndex;
    }
    
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }
    
    return parts.map((part, idx) => {
        if (typeof part !== 'string') return part;
        
        // Process bold syntax: **text**
        const boldRegex = /\*\*([^*]+)\*\*/g;
        let boldParts = [];
        let bLastIndex = 0;
        let bMatch;
        
        while ((bMatch = boldRegex.exec(part)) !== null) {
            if (bMatch.index > bLastIndex) {
                boldParts.push(part.substring(bLastIndex, bMatch.index));
            }
            boldParts.push(<strong key={bMatch.index} className="font-bold text-white">{bMatch[1]}</strong>);
            bLastIndex = boldRegex.lastIndex;
        }
        
        if (bLastIndex < part.length) {
            boldParts.push(part.substring(bLastIndex));
        }
        
        return <React.Fragment key={idx}>{boldParts}</React.Fragment>;
    });
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMode, setCurrentMode] = useState(null); // internship | services | company
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi 👋 I’m TechieHelp AI — your guide for internships, AI services, and automation solutions. How can I assist you today?",
            sender: 'bot',
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    // Voice/Speech States
    const [isListening, setIsListening] = useState(false);
    const [speakingMsgId, setSpeakingMsgId] = useState(null);
    
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    useEffect(() => { 
        scrollToBottom(); 
    }, [messages, isTyping]);

    // Initialize Speech Recognition on Mount
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const rec = new SpeechRecognition();
            rec.continuous = false;
            rec.interimResults = false;
            rec.lang = 'en-US';
            
            rec.onstart = () => {
                setIsListening(true);
            };
            
            rec.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
            };
            
            rec.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                setIsListening(false);
            };
            
            rec.onend = () => {
                setIsListening(false);
            };
            
            recognitionRef.current = rec;
        }
    }, []);

    // Clean up SpeechSynthesis when closing
    useEffect(() => {
        if (!isOpen && window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setSpeakingMsgId(null);
        }
    }, [isOpen]);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition is not supported in this browser. Please try Chrome or Safari.");
            return;
        }
        
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };

    const handleSpeak = (text, msgId) => {
        if (!window.speechSynthesis) {
            alert("Text-to-speech is not supported in this browser.");
            return;
        }

        if (window.speechSynthesis.speaking && speakingMsgId === msgId) {
            window.speechSynthesis.cancel();
            setSpeakingMsgId(null);
            return;
        }

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }

        // Strip tags and markdown formatting for natural voice output
        const cleanText = text
            .replace(/<[^>]*>/g, '') // remove XML/HTML
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // replace markdown links with label
            .replace(/\*\*([^*]+)\*\*/g, '$1'); // remove bold markers

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.onend = () => setSpeakingMsgId(null);
        utterance.onerror = () => setSpeakingMsgId(null);
        
        setSpeakingMsgId(msgId);
        window.speechSynthesis.speak(utterance);
    };

    const handleSend = async (text = null) => {
        const q = (text || inputValue).trim();
        if (!q) return;

        // Update suggestion mode based on query keywords
        const lowQ = q.toLowerCase();
        if (lowQ.includes("intern") || lowQ.includes("training") || lowQ.includes("course") || lowQ.includes("tcap")) {
            setCurrentMode('internship');
        } else if (lowQ.includes("service") || lowQ.includes("custom") || lowQ.includes("pricing") || lowQ.includes("automation")) {
            setCurrentMode('services');
        } else if (lowQ.includes("about") || lowQ.includes("techiehelp") || lowQ.includes("company")) {
            setCurrentMode('company');
        }

        const userMsg = { id: Date.now(), text: q, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Fetch sessionId or create new one
        let sessionId = localStorage.getItem('techiehelp_chat_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('techiehelp_chat_session_id', sessionId);
        }

        try {
            // Keep current history and map role types for api
            const chatHistory = [...messages, userMsg];

            let responseText = "";

            try {
                // Call backend API
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: q,
                        history: messages,
                        sessionId,
                        userId: 'guest'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    responseText = data.text;
                } else {
                    throw new Error(`Backend API returned code ${response.status}`);
                }
            } catch (apiErr) {
                console.warn("Backend API call failed, falling back to direct client-side Gemini connection:", apiErr);
                
                // Fallback direct Gemini connection using client key
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY') {
                    responseText = "I'm sorry, I cannot connect to the server API, and the Gemini API Key is not configured. Please add your `GEMINI_API_KEY` to the `.env` file to enable conversations.";
                } else {
                    // Structure payload for Gemini
                    const contents = [];
                    messages.forEach(msg => {
                        contents.push({
                            role: msg.sender === 'user' ? 'user' : 'model',
                            parts: [{ text: msg.text }]
                        });
                    });
                    contents.push({
                        role: 'user',
                        parts: [{ text: q }]
                    });

                    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
                    
                    const response = await fetch(geminiUrl, {
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
                        responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I encountered an issue. How can I help you?";
                    } else {
                        const errDetails = await response.text();
                        console.error("Gemini Direct API Error:", errDetails);
                        responseText = "I apologize, but I am unable to process your request at the moment. Please contact us directly at support@techiehelp.in.";
                    }
                }
            }

            // Remove lead tags if present in client fallback (the backend API strips it automatically)
            const leadRegex = /<lead_captured\s+name="([^"]*)"\s+email="([^"]*)"\s+phone="([^"]*)"\s+interest="([^"]*)"\s*\/?>/i;
            const textWithoutLead = responseText.replace(leadRegex, "").trim();

            setMessages(prev => [...prev, { id: Date.now() + 1, text: textWithoutLead, sender: 'bot' }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I had trouble communicating. Please try again.", sender: 'bot' }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-6 w-[360px] h-[550px] bg-[#0c0f14]/95 backdrop-blur-3xl border border-gray-800 rounded-[2rem] flex flex-col shadow-2xl overflow-hidden text-left"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-blue-900/60 to-black">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-black rounded-lg p-1.5 border border-cyan-500/30 flex items-center justify-center relative">
                                    <img src={logo} alt="TH" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xs tracking-wide">TechieHelp AI • Online</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
                                        <span className="text-[10px] text-gray-400 font-medium">Always Active</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1">
                                <img src={closeIcon} className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className="relative group max-w-[85%]">
                                        <div className={`p-3.5 text-[13px] leading-relaxed shadow-lg ${m.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-[1.2rem] rounded-br-none'
                                                : 'bg-gray-900 text-gray-200 border border-gray-800 rounded-[1.2rem] rounded-bl-none whitespace-pre-line'
                                            }`}>
                                            {m.sender === 'user' ? m.text : formatMessageText(m.text)}
                                        </div>
                                        {/* Speak Button for Bot Messages */}
                                        {m.sender === 'bot' && (
                                            <button 
                                                onClick={() => handleSpeak(m.text, m.id)}
                                                className={`absolute -right-7 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100 ${speakingMsgId === m.id ? 'opacity-100 text-cyan-400 border-cyan-500/50' : ''}`}
                                                title="Read aloud"
                                            >
                                                {speakingMsgId === m.id ? (
                                                    <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                                                ) : (
                                                    <Volume2 className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-900 border border-gray-800 p-3 rounded-2xl rounded-bl-none flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                            {currentMode === 'internship' ? (
                                ['Web Dev', 'App Dev', 'AI/ML', 'Apply Now', 'Pricing'].map(btn => (
                                    <button key={btn} onClick={() => handleSend(btn)} className="whitespace-nowrap px-3 py-1.5 bg-blue-900/30 border border-blue-500/20 text-cyan-400 rounded-full text-[10px] font-bold hover:bg-blue-700 hover:text-white transition-all">{btn}</button>
                                ))
                            ) : currentMode === 'services' ? (
                                ['Web Dev', 'AI Agents', 'LMS', 'Talk to Expert'].map(btn => (
                                    <button key={btn} onClick={() => handleSend(btn)} className="whitespace-nowrap px-3 py-1.5 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-[10px] font-bold hover:bg-gray-700 hover:text-white transition-all">{btn}</button>
                                ))
                            ) : (
                                ['Internships', 'Services', 'About Company'].map(btn => (
                                    <button key={btn} onClick={() => handleSend(btn)} className="whitespace-nowrap px-3 py-1.5 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-[10px] font-bold hover:bg-gray-700 hover:text-white transition-all">{btn}</button>
                                ))
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-800 bg-black/40">
                            <div className="relative flex items-center gap-2">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask about internships, services..."
                                        className="w-full bg-gray-900 border border-gray-800 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                                    />
                                    {/* Mic/Voice Button inside Input */}
                                    <button
                                        onClick={toggleListening}
                                        className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all ${isListening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'text-gray-400 hover:text-white'}`}
                                        title={isListening ? "Listening..." : "Voice search"}
                                    >
                                        {isListening ? (
                                            <MicOff className="w-4 h-4" />
                                        ) : (
                                            <Mic className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleSend()}
                                    className="w-9 h-9 shrink-0 bg-cyan-600 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                                >
                                    <img src={sendIcon} className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Icon */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-black border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] relative group overflow-hidden"
                whileHover={{ scale: 1.1 }}
            >
                <div className="absolute inset-0 bg-cyan-400 opacity-10 animate-pulse duration-[4000ms]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-xl"></div>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 text-cyan-400 relative z-10"
                >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                </svg>
            </motion.button>
        </div>
    );
};

export default Chatbot;
