import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logo, send as sendIcon, close as closeIcon } from '../assets';

// Production Datasets
const DATASET_A = {
    internships: [
        { id: "web", title: "Web Development", stack: "HTML, CSS, JavaScript, React", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "app", title: "App Development", stack: "Flutter, React Native, Firebase", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "uiux", title: "UI/UX Design", stack: "Figma, Adobe XD, User Research", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "seo", title: "SEO & Digital Marketing", stack: "Google Analytics, SEMrush, Keywords", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "ai", title: "Artificial Intelligence", stack: "Python, TensorFlow, Neural Networks", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "ml", title: "Machine Learning", stack: "Python, Scikit-learn, Regression", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "frontend", title: "Front-End Developer", stack: "React, Tailwind, Redux", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "backend", title: "Back-End Developer", stack: "Node.js, MongoDB, Express", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "fullstack", title: "Full Stack Developer", stack: "MERN or Java Full Stack", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "mern", title: "MERN Stack", stack: "MongoDB, Express, React, Node", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "python", title: "Python Developer", stack: "Django, Flask, Automation", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "java", title: "Java Developer", stack: "Spring Boot, Maven, SQL", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "javafull", title: "Java Full Stack", stack: "Spring Boot + React", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "react", title: "React Developer", stack: "Hooks, Context API, Next.js", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "javascript", title: "JavaScript Developer", stack: "ES6+, Async, DOM", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "node", title: "Node.js Developer", stack: "Express, Middleware, Auth", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "aiml", title: "AI/ML Developer", stack: "NLP, Computer Vision, Data Sets", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "devops", title: "DevOps", stack: "Docker, Kubernetes, CI/CD", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" },
        { id: "cyber", title: "Cyber Security", stack: "Ethical Hacking, Linux, Networks", duration: "1 / 2 / 3 Months", price: "₹499 (Std) / ₹3000 (Spl)", link: "https://rzp.io/rzp/techiehelpInternship" }
    ],
    specialBatchForm: "https://forms.gle/MUSBDGVVap4eqH418",
    standardPaymentLink: "https://rzp.io/rzp/techiehelpInternship"
};

const DATASET_B = {
    services: [
        { title: "Web & App Development", price: "5999", features: ["Custom solution", "AI integration", "Deployment & support"] },
        { title: "AI Agents & Automation", price: "15,000", features: ["Custom solution", "AI integration", "Deployment & support"] },
        { title: "AI Education (LMS, Tutor Bots)", price: "15,000", features: ["Custom solution", "AI integration", "Deployment & support"] },
        { title: "Voice & Calling AI", price: "Custom quote", features: ["Custom solution", "AI integration", "Deployment & support"] },
        { title: "Workflow & CRM Automation", price: "Custom quote", features: ["Custom solution", "AI integration", "Deployment & support"] }
    ]
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 🧠 CONTEXT MEMORY
    const [currentMode, setCurrentMode] = useState(null); // internship | services | company
    const [currentDomain, setCurrentDomain] = useState(null); // web | app | uiux | ...

    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi 👋 I’m TechieHelp AI — your guide for internships, AI services, and automation solutions. How can I assist you today?",
            sender: 'bot',
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

    const handleSend = async (text = null) => {
        const q = (text || inputValue).trim();
        if (!q) return;

        setMessages(prev => [...prev, { id: Date.now(), text: q, sender: 'user' }]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getBotResponse(q);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
            setIsTyping(false);
        }, 800);
    };

    const getBotResponse = (query) => {
        const lowQ = query.toLowerCase();

        // 🚀 APPLY NOW ACTION PROMPT
        const applyKeywords = ["apply", "enroll", "join", "payment"];
        if (applyKeywords.some(k => lowQ.includes(k))) {
            if (currentDomain) {
                const domainInfo = DATASET_A.internships.find(d => d.id === currentDomain || d.title.toLowerCase().includes(currentDomain));
                return `You're almost in! 🚀
Here are your official enrollment links for ${domainInfo?.title || currentDomain}:

👉 **Standard Payment Link:**
${DATASET_A.standardPaymentLink}

👉 **Special Batch Form:**
${DATASET_A.specialBatchForm}`;
            }
        }

        // 🏢 COMPANY INFO PROMPT
        const companyKeywords = ["about", "techiehelp", "company"];
        if (companyKeywords.some(k => lowQ.includes(k))) {
            setCurrentMode('company');
            return `🏢 **TechieHelp – Official Overview**

• AI-first automation & software company
• MSME Registered | ISO 9001:2015
• AICTE / NIP aligned programs
• 15,000+ students trained
• 100+ AI solutions delivered
• Incubated at JIET, Jodhpur

Ask next:
[Internships] | [Services] | [Contact]`;
        }

        // 🎓 INTERNSHIP MODE PROMPT
        if (lowQ.includes("internship") || (currentMode === 'internship' && !currentDomain) || (currentMode === 'internship' && lowQ.length < 25)) {
            if (currentMode !== 'internship') setCurrentMode('internship');

            const domainMatch = DATASET_A.internships.find(d => lowQ.includes(d.id) || lowQ.includes(d.title.toLowerCase()));
            if (domainMatch) {
                setCurrentDomain(domainMatch.id);
                return `📌 **${domainMatch.title} Internship – TechieHelp**

🔧 **Tech Stack:**
${domainMatch.stack}

⏳ **Duration:**
1 / 2 / 3 Months

💰 **Pricing:**
• Standard Internship – ₹499
• Special Mentorship Batch – ₹3000

🎓 **You Will Get:**
• ISO Certificate
• AICTE/NIP aligned structure
• LinkedIn Digital Badge
• Real-world Projects
• LMS + Mentor Support

👉 **Apply Now:**
[Standard Payment Link](${DATASET_A.standardPaymentLink})

[Special Batch Form](${DATASET_A.specialBatchForm})

Ask:
[Syllabus] | [Projects] | [Apply Now]`;
            }

            if (currentMode === 'internship' && !currentDomain) {
                return `🚀 **Official Internship Mode**
      
We offer intensive training in 19+ domains. Which one are you interested in?
• Web Dev | App Dev | UI/UX
• AI | ML | Cyber Security
• Data Science | MERN | Python

Each domain includes AICTE-verified certificates and real projects.`;
            }

            // If user asks for internship but no domain matched and we have a current domain, stay in current domain context
            if (currentDomain) {
                const d = DATASET_A.internships.find(x => x.id === currentDomain);
                return `You are currently viewing the **${d.title}** internship. Would you like to **Apply Now** or view the **Syllabus**?`;
            }

            return `🚀 **Official Internship Mode**
      
We offer intensive training in 19+ domains. Which one are you interested in?
• Web Dev | App Dev | UI/UX
• AI | ML | Cyber Security
• Data Science | MERN | Python`;
        }

        // 🛠 SERVICES MODE PROMPT
        if (lowQ.includes("service") || currentMode === 'services') {
            if (currentMode !== 'services') setCurrentMode('services');
            const serviceMatch = DATASET_B.services.find(s => lowQ.includes(s.title.toLowerCase()));
            if (serviceMatch) {
                return `📦 **${serviceMatch.title} – TechieHelp**

**Starting From:**
₹${serviceMatch.price}

**Includes:**
• ${serviceMatch.features.join('\n• ')}

**Next:**
[Get Quote] | [Talk to Expert]`;
            }
            return `📦 **Our Official Services**
      
• Web & App Development
• AI Agents & Automation
• AI Education (LMS, Tutor Bots)
• Voice & Calling AI
• Workflow & CRM Automation

Which service do you want pricing for?`;
        }

        return "I'm TechieHelp AI, and I can guide you on internships, services, or pricing. Could you please specify which domain or service you're interested in?";
    };

    return (
        <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-6 w-[360px] h-[550px] bg-[#0c0f14]/95 backdrop-blur-3xl border border-gray-800 rounded-[2rem] flex flex-col shadow-2xl overflow-hidden"
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
                                    <div className={`max-w-[85%] p-3.5 text-[13px] leading-relaxed shadow-lg ${m.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-[1.2rem] rounded-br-none'
                                            : 'bg-gray-900 text-gray-200 border border-gray-800 rounded-[1.2rem] rounded-bl-none whitespace-pre-line'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-900 border border-gray-800 p-3 rounded-2xl rounded-bl-none flex gap-1">
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
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
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about internships, services, or pricing..."
                                    className="w-full bg-gray-900 border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="absolute right-2 w-9 h-9 bg-cyan-600 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)]"
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
                {/* Modern Chatbot Icon */}
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
