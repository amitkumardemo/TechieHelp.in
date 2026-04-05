import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingDown, Clock8 } from "lucide-react";

const stats = [
  { label: "0 Missed Leads", desc: "100% Capture Rate", icon: <ShieldCheck className="w-8 h-8 text-green-400" />, shadow: "shadow-[0_0_30px_rgba(74,222,128,0.1)]" },
  { label: "3x Faster", desc: "Instant AI Response", icon: <Zap className="w-8 h-8 text-blue-400" />, shadow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]" },
  { label: "50% Savings", desc: "Reduced Human Cost", icon: <TrendingDown className="w-8 h-8 text-red-400" />, shadow: "shadow-[0_0_30px_rgba(239,68,68,0.1)]" },
  { label: "24/7 Operations", desc: "Fully Autonomous", icon: <Clock8 className="w-8 h-8 text-purple-400" />, shadow: "shadow-[0_0_30px_rgba(168,85,247,0.1)]" }
];

const StatsResults = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6 relative overflow-hidden" id="results">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 text-center flex flex-col items-center group ${stat.shadow}`}
            >
              <div className="mb-8 p-6 rounded-[2rem] bg-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter leading-none">{stat.label}</h3>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[4px] mt-4">{stat.desc}</p>
              
              {/* Decorative progress line mockup */}
              <div className="w-full h-[1px] bg-white/5 mt-10 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent w-2/3 animate-shimmer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsResults;
