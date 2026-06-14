import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, PhoneCall, GitBranch, Building } from "lucide-react";

const stats = [
  {
    title: "Leads Processed",
    value: "10,000+",
    desc: "Inbound requests captured, reply-routed, and qualified autonomously.",
    icon: <Users className="w-8 h-8 text-blue-400" />,
    color: "from-blue-600/20 to-blue-400/5",
    border: "border-blue-500/25 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  },
  {
    title: "AI Calls Made",
    value: "50,000+",
    desc: "Autonomous outbound/inbound phone qualifications handled by voice agents.",
    icon: <PhoneCall className="w-8 h-8 text-[#33bbcf] animate-pulse" />,
    color: "from-purple-600/20 to-purple-400/5",
    border: "border-purple-500/25 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
  },
  {
    title: "Workflows Automated",
    value: "1,200+",
    desc: "End-to-end multi-app integrations executed without human delay.",
    icon: <GitBranch className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-600/20 to-cyan-400/5",
    border: "border-cyan-500/25 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
  },
  {
    title: "Businesses Served",
    value: "100+",
    desc: "Global clients scaling conversion, optimizing ops, and cutting manual overhead.",
    icon: <Building className="w-8 h-8 text-orange-400" />,
    color: "from-orange-600/20 to-orange-400/5",
    border: "border-orange-500/25 shadow-[0_0_30px_rgba(249,115,22,0.15)]"
  }
];

const GlobalFootprint = () => {
  return (
    <section className="py-24 bg-[#050510] px-6 relative overflow-hidden" id="impact">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-purple-700/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-[10px] font-mono tracking-[3px] text-blue-300 uppercase">Track Record</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter"
          >
            Results &amp; <span className="text-gradient font-black">Impact</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            TechieHelp builds high-performance custom AI systems that run operations and drive conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              className={`bg-gradient-to-br ${stat.color} border ${stat.border} p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 backdrop-blur-xl group hover:bg-white/[0.08]`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider block mb-3">
                  {stat.title}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-semibold">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
