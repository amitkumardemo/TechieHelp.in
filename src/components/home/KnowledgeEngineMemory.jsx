import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KnowledgeEngineMemory = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "NEW EMAIL ARRIVES.",
      desc: "LeadAI understands the customer's request."
    },
    {
      id: 1,
      title: "CHECKS PREVIOUS HISTORY.",
      desc: "Remembers past conversations and solutions."
    },
    {
      id: 2,
      title: "SENDS A PERSONALIZED REPLY.",
      desc: "Customers feel remembered and trust your business more."
    }
  ];

  // Auto cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center my-24 lg:my-32">
      {/* Left: Text & Accordion */}
      <div>
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-4">
          03 . RELATIONSHIP MEMORY
        </span>
        <h3 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 dark:text-white leading-[1.1] mb-10 tracking-tight">
          Never Forget A <br />Customer Again.
        </h3>
        
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === step.id;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveStep(step.id)}
                className={`flex flex-col border-l-[3px] pl-5 py-1 cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? "border-blue-600 dark:border-blue-500" 
                    : "border-slate-200 dark:border-slate-800 opacity-40 hover:opacity-70"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-widest ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"}`}>
                  {step.title}
                </span>
                <span className={`text-lg md:text-xl mt-1.5 ${isActive ? "text-slate-900 dark:text-white font-medium" : "text-slate-500 dark:text-slate-400 font-normal"}`}>
                  {step.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Visual Window */}
      <div className="relative p-6 sm:p-10 rounded-[32px] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/40 shadow-sm flex items-center justify-center min-h-[420px]">
        {/* Abstract background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[32px]">
          <div className="w-[400px] h-[400px] rounded-full border border-slate-200/50 dark:border-slate-800/50 absolute" />
          <div className="w-[550px] h-[550px] rounded-full border border-slate-200/30 dark:border-slate-800/30 absolute" />
        </div>

        {/* Browser/App Window */}
        <div className="relative w-full max-w-md bg-white dark:bg-[#0B0F19] rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-200/60 dark:border-slate-800 overflow-hidden z-10">
          
          {/* Mac Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              <span className={`transition-colors ${activeStep === 0 ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full" : ""}`}>Inbox</span>
              <span className={`transition-colors ${activeStep === 1 ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full" : ""}`}>Memory</span>
              <span className={`transition-colors ${activeStep === 2 ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full" : ""}`}>Draft</span>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 h-[260px] relative bg-white dark:bg-[#0B0F19]">
            <AnimatePresence mode="wait">
              
              {/* Step 0: Inbox */}
              {activeStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">
                    <span>From: rahul@techcorp.com</span>
                    <span>Subject: AI Automation</span>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs shrink-0">
                      R
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Rahul Sharma</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "Hi TechieHelp,<br/><br/>We want to scale our support team. Can we upgrade the system you built for us last year?"
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    LeadAI Analyzing Intent...
                  </div>
                </motion.div>
              )}

              {/* Step 1: Memory Search */}
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs">🔍</span>
                    Searching Knowledge Base
                  </div>

                  <div className="space-y-3">
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Client History</p>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Worked on "Voice Bot V1" in Jan 2025.</p>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Current Setup</p>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300">HubSpot CRM Integration Active.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="mt-2 flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">✓ Context Loaded (100% Match)</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personalized Reply */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-[10px]">✨</div>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">AI Auto-Draft Formulated</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Prepared in 200ms</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 mb-5 flex-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "Hi Rahul,<br/><br/>
                      Great to hear from you. Since we built your <span className="font-semibold text-blue-600 dark:text-blue-400">Voice Bot V1 last year</span> and synced it with <span className="font-semibold text-blue-600 dark:text-blue-400">HubSpot</span>, scaling your support automation will be seamless..."
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-[10px] text-slate-400 font-medium">Stored in Gmail Drafts</span>
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors">
                      Send Draft
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* Small animated cursor pointing to Send Draft in Step 2 */}
        <AnimatePresence>
          {activeStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 0, y: 50 }}
              animate={{ opacity: 1, x: 130, y: 100 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute z-20 pointer-events-none right-12 bottom-12"
            >
              <div className="w-4 h-4 bg-rose-500/80 backdrop-blur-sm rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-50" />
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default KnowledgeEngineMemory;
