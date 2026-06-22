import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Activity, Users, UserCheck, Inbox, Mail, Phone, Calendar, Landmark, Heart } from "lucide-react";

const LeadJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const journeySteps = [
    { label: "Visitor", metric: "12,450", sub: "Organic Traffic", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { label: "Lead", metric: "8,720", sub: "Forms & Scans", icon: <Inbox className="w-6 h-6" />, color: "from-cyan-500 to-teal-500" },
    { label: "AI Inbox", metric: "8,720", sub: "Stored Context", icon: <Mail className="w-6 h-6" />, color: "from-teal-500 to-emerald-500" },
    { label: "Smart Reply", metric: "4,920", sub: "Instant Drafts", icon: <Sparkles className="w-6 h-6" />, color: "from-emerald-500 to-green-500" },
    { label: "Voice Call", metric: "1,250", sub: "Outbound Queries", icon: <Phone className="w-6 h-6" />, color: "from-blue-600 to-indigo-600" },
    { label: "Meeting", metric: "890", sub: "Auto-synced", icon: <Calendar className="w-6 h-6" />, color: "from-indigo-500 to-violet-500" },
    { label: "Customer", metric: "620", sub: "Closed Won", icon: <UserCheck className="w-6 h-6" />, color: "from-violet-500 to-purple-500" },
    { label: "Revenue", metric: "₹482K", sub: "Invoiced Value", icon: <Landmark className="w-6 h-6" />, color: "from-purple-500 to-fuchsia-500" },
    { label: "NPS Score", metric: "99%", sub: "Context Score", icon: <Heart className="w-6 h-6" />, color: "from-fuchsia-500 to-rose-500" }
  ];

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isHovering, journeySteps.length]);

  return (
    <section className="py-16 md:py-24 relative z-10 px-4 sm:px-6 bg-white dark:bg-[#03030a] overflow-hidden border-t border-slate-100 dark:border-slate-900/50">
      
      {/* Premium Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-[100px] pointer-events-none transition-colors duration-1000" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[9px] font-extrabold tracking-[0.2em] uppercase mb-5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            End-To-End Visibility
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            Every Customer Journey.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">One Continuous System.</span>
          </motion.h2>
        </div>

        {/* UNIQUE HORIZONTAL ACCORDION PIPELINE */}
        <div className="flex flex-col lg:flex-row w-full h-[650px] lg:h-[400px] gap-2 p-2 bg-slate-50/50 dark:bg-slate-900/20 rounded-[32px] border border-slate-100 dark:border-slate-800/50 shadow-sm max-w-6xl mx-auto">
          {journeySteps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={idx}
                layout
                onMouseEnter={() => {
                  setActiveStep(idx);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative overflow-hidden rounded-[24px] cursor-pointer group flex items-center lg:items-start transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive 
                    ? `basis-full lg:basis-1/2 bg-gradient-to-br ${step.color} shadow-lg shadow-blue-500/10` 
                    : "basis-[10%] lg:basis-[6%] bg-white dark:bg-[#0B0F19] border border-slate-200/60 dark:border-slate-800/80"
                }`}
              >
                
                {/* Active State Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner border border-white/20">
                          {step.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-black/20 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                          Step {idx + 1}
                        </span>
                      </div>
                      
                      <div className="mt-auto">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">
                          {step.label}
                        </p>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 drop-shadow-md">
                          {step.metric}
                          {idx === 7 || idx === 8 ? "" : "+"}
                        </h3>
                        <p className="text-sm md:text-base font-semibold text-white/90">
                          {step.sub}
                        </p>
                      </div>

                      {/* Glassmorphism reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30 pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive State Content */}
                <div className={`absolute inset-0 flex lg:flex-col items-center justify-center lg:justify-start lg:pt-8 p-4 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className={`text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors ${isActive ? 'scale-0' : 'scale-100'}`}>
                    {step.icon}
                  </div>
                  {/* Rotated text for desktop, normal for mobile */}
                  <div className="ml-4 lg:ml-0 lg:absolute lg:bottom-12 flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 whitespace-nowrap lg:-rotate-90 origin-center">
                      {step.label}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LeadJourney;
