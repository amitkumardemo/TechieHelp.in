import React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Rocket, Flame } from "lucide-react";

const PricingSaaS = () => {
  const features = [
    "AI Lead Qualification",
    "AI Email Automation",
    "AI Calling Agent",
    "Dashboard Access",
    "CRM Integration",
    "Deployment Support"
  ];

  return (
    <section className="py-24 bg-[#050510] px-6 relative overflow-hidden" id="pricing">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter"
          >
            Custom <span className="text-gradient font-black">AI Systems</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 font-bold max-w-2xl mx-auto">One-time setup for continuous automated growth.</p>
        </div>

        <div className="max-w-xl mx-auto p-1 rounded-[4rem] bg-gradient-to-br from-blue-600/30 to-purple-600/30 shadow-[0_0_80px_rgba(59,130,246,0.15)] relative overflow-hidden">
          <div className="bg-[#0a0a1a] rounded-[3.9rem] p-12 md:p-20 relative z-10 text-center">
            {/* Urgency Badge */}
            <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 animate-pulse">
              <Flame className="w-3.5 h-3.5" />
              <span className="text-[9px] font-black uppercase">Limited slots</span>
            </div>

            <span className="inline-block px-5 py-2 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-[3px] mb-8 border border-blue-500/20">
              Custom AI Builds
            </span>

            <div className="flex flex-col items-center justify-center mb-10">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[4px] mb-4">Starting From</div>
              <span className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
                ₹15,000<span className="text-xl md:text-2xl text-gray-500 ml-2">+</span>
              </span>
              <p className="mt-8 text-[10px] font-black text-gray-500 uppercase tracking-[4px]">Custom-built based on your business needs</p>
            </div>

            <div className="space-y-4 mb-12 text-left px-4">
              {features.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-black text-gray-300 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full py-6 bg-white text-[#050510] font-black text-xl rounded-[2rem] flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <span>Schedule Custom AI Consultation</span>
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-10 flex items-center justify-center gap-3 text-[10px] font-black text-gray-900 dark:text-white/20 uppercase tracking-[5px]">
              <Rocket className="w-4 h-4" />
              <span>Deployment: 5–7 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSaaS;
