import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Users, Globe } from "lucide-react";

const items = [
  { title: "Not an Agency", desc: "We build systems, not sell hours. Your automation belongs to you.", icon: <ShieldCheck className="w-8 h-8 text-blue-400" /> },
  { title: "AI-First Engine", desc: "Custom-trained LLM logic for business-specific reasoning.", icon: <Cpu className="w-8 h-8 text-[#33bbcf]" /> },
  { title: "Fully Automated", desc: "Our systems run even when you are offline, handling thousands of requests.", icon: <Zap className="w-8 h-8 text-[#33bbcf]" /> },
  { title: "Scalable Infrastructure", desc: "Lakhs of leads? No problem. The system scales instantly.", icon: <Users className="w-8 h-8 text-green-400" /> },
  { title: "Battle Tested", desc: "MSME Registered and trusted by startups and enterprises.", icon: <Globe className="w-8 h-8 text-red-400" /> }
];

const Differentiator = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6 relative overflow-hidden" id="why-us">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter"
          >
            Why <span className="text-gradient">TechieHelp AI Engine</span>
          </motion.h2>
          <p className="text-gray-500 font-black text-xs uppercase tracking-[5px]">Built for the Next Generation of Business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center group backdrop-blur-xl hover:bg-gray-100 dark:bg-white/10"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gray-100 dark:bg-white/5 group-hover:bg-blue-500/10 group-hover:rotate-12 transition-all">
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-tighter leading-tight">{item.title}</h3>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
