import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Server, Database, Globe, Cpu, Inbox, PhoneCall, Calendar } from "lucide-react";

const LiveFromDayOne = () => {
  const steps = [
    { label: "Connect Gmail.", desc: "Scan inbox and customer interactions" },
    { label: "Connect Website.", desc: "Ingest pages, products & documentation" },
    { label: "Connect CRM.", desc: "Load sales histories & pipelines" }
  ];

  const pipeline = [
    { label: "Website", icon: <Globe className="w-5 h-5 text-indigo-500" /> },
    { label: "Knowledge Engine", icon: <Cpu className="w-5 h-5 text-blue-500" /> },
    { label: "Gemini", icon: <Sparkles className="w-5 h-5 text-purple-500" /> },
    { label: "AI Inbox", icon: <Inbox className="w-5 h-5 text-pink-500" /> },
    { label: "Voice AI", icon: <PhoneCall className="w-5 h-5 text-rose-500" /> },
    { label: "CRM", icon: <Database className="w-5 h-5 text-amber-500" /> },
    { label: "Meeting Booked", icon: <Calendar className="w-5 h-5 text-emerald-500" /> }
  ];

  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 bg-white dark:bg-[#02050c] overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-6"
            >
              <Server className="w-3.5 h-3.5" /> LIVE FROM DAY ONE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              Connect Once. <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">LeadAI Learns Everything.</span>
            </motion.h2>

            <div className="mt-8 space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-indigo-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">{step.label}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 max-w-md">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                LeadAI automatically builds company memory.
              </p>
              <div className="flex gap-4 mt-3 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                <span>• No training</span>
                <span>• No manual prompts</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PIPELINE PATHWAY ANIMATION */}
          <div className="relative p-6 sm:p-8 rounded-[32px] bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-900/60 shadow-[inset_0_4px_30px_rgba(0,0,0,0.01)] min-h-[400px] flex flex-col justify-between">
            
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center mb-6">
              Data Ingestion & Flow Path
            </div>

            <div className="flex flex-col gap-4 relative">
              
              {/* Vertical connector line */}
              <div className="absolute left-[24px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-indigo-500/80 via-purple-500/80 to-emerald-500/80 pointer-events-none" />

              {pipeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-4 relative z-10"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">{item.label}</span>
                    {idx < pipeline.length - 1 && (
                      <span className="text-[9px] text-slate-400 font-semibold tracking-wide block uppercase mt-0.5">
                        Processing →
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveFromDayOne;
