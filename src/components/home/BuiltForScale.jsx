import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Star, Server, Users, Award, TrendingUp } from "lucide-react";

const BuiltForScale = () => {
  const cards = [
    {
      metric: "#1 Ranked",
      label: "Recognitions",
      desc: "Acclaimed as a leading autonomous intelligence platform developer.",
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-500/5 to-amber-500/30",
      borderColor: "border-amber-500",
      textColor: "text-amber-500",
      shadowColor: "shadow-amber-500/20",
      height: "40%",
    },
    {
      metric: "ISO 9001",
      label: "Certified Quality",
      desc: "Standardized quality management protocols in systems engineering.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500/5 to-purple-500/30",
      borderColor: "border-purple-500",
      textColor: "text-purple-500",
      shadowColor: "shadow-purple-500/20",
      height: "55%",
    },
    {
      metric: "100+",
      label: "Enterprise Clients",
      desc: "Agent orchestration frameworks built for high-growth firms.",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500/5 to-indigo-500/30",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-500",
      shadowColor: "shadow-indigo-500/20",
      height: "70%",
    },
    {
      metric: "16+",
      label: "Countries Served",
      desc: "Global reach with multi-lingual pipeline capturing and voice AI.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500/5 to-blue-500/30",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      shadowColor: "shadow-blue-500/20",
      height: "85%",
    },
    {
      metric: "99.99%",
      label: "Uptime SLA",
      desc: "Enterprise hosting with zero downtime operations and distributed failover.",
      icon: <Server className="w-6 h-6" />,
      color: "from-emerald-500/5 to-emerald-500/30",
      borderColor: "border-emerald-500",
      textColor: "text-emerald-500",
      shadowColor: "shadow-emerald-500/20",
      height: "100%",
    }
  ];

  return (
    <section className="py-24 md:py-32 relative z-10 px-4 sm:px-6 bg-white dark:bg-[#02050c] overflow-hidden border-t border-slate-100 dark:border-slate-900/50">
      
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6 shadow-sm"
          >
            <TrendingUp className="w-4 h-4 text-blue-500" /> Unprecedented Scale
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter font-black text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            Built For <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">Enterprise Growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            A continuous upward trajectory. Designed to handle millions of interactions securely, globally, and without interruption.
          </motion.p>
        </div>

        {/* DESKTOP GLASSMORPHISM GROWTH CHART */}
        <div className="hidden lg:flex items-end justify-center h-[550px] gap-6 xl:gap-8 max-w-6xl mx-auto mt-32 relative">
          
          {/* Chart Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 dark:opacity-[0.15] py-4 -z-10">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="w-full border-b border-dashed border-slate-400 dark:border-slate-500" />
            ))}
          </div>

          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ height: "0%" }}
              whileInView={{ height: card.height }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative w-full max-w-[200px] rounded-t-[32px] border-t-4 ${card.borderColor} bg-gradient-to-t ${card.color} group cursor-pointer flex flex-col justify-end pb-10 px-6 transition-all hover:brightness-110 shadow-lg`}
            >
               {/* Floating Metric Card (At the top of the bar) */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5 + (idx * 0.15) }}
                 viewport={{ once: true }}
                 className={`absolute -top-16 left-1/2 -translate-x-1/2 w-[115%] bg-white dark:bg-[#0B1120] rounded-2xl shadow-2xl ${card.shadowColor} p-4 border border-slate-200 dark:border-slate-800/80 flex items-center justify-center gap-3 transition-transform duration-500 group-hover:-translate-y-6 group-hover:scale-105 z-20`}
               >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 dark:bg-[#050B14] shadow-inner ${card.textColor}`}>
                     {card.icon}
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">
                      {card.label}
                    </h4>
                    <span className={`text-xl font-black tracking-tighter leading-none ${card.textColor}`}>
                      {card.metric}
                    </span>
                  </div>
               </motion.div>

               {/* Hover Reveal Description Text */}
               <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center relative z-10">
                 <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                   {card.desc}
                 </p>
               </div>
               
               {/* Internal Bar Glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[32px] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* MOBILE VERTICAL STEPPER */}
        <div className="flex lg:hidden flex-col gap-10 mt-12 pl-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 relative">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6"
            >
              {/* Glowing dot on the line */}
              <div className={`absolute -left-[31px] top-6 w-4 h-4 rounded-full border-4 border-white dark:border-[#02050c] bg-white shadow-[0_0_15px_currentColor] ${card.textColor}`} />
              
              {/* Content */}
              <div className={`bg-white dark:bg-[#0B1120] rounded-[24px] shadow-lg ${card.shadowColor} border border-slate-200 dark:border-slate-800/80 p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-slate-50 dark:bg-[#050B14] shadow-inner ${card.textColor}`}>
                     {card.icon}
                  </div>
                  <div>
                    <span className={`text-3xl font-black tracking-tighter block mb-1 ${card.textColor}`}>{card.metric}</span>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block leading-none">{card.label}</h4>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BuiltForScale;
