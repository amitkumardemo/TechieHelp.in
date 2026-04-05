import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, UserX, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-32 bg-[#0a0a1a] px-6 relative overflow-hidden" id="problem">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            You Lose Customers <br />
            <span className="text-red-500">When You’re Busy</span>
          </motion.h2>
          <p className="text-gray-500 font-black text-xs uppercase tracking-[5px]">The Hidden Cost of Human Delay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Scenario UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[80px]" />
             
             <div className="space-y-8 relative z-10">
                {[
                  { label: "Customer fills form", icon: <ArrowRight className="text-blue-500" />, sub: "3:00 PM - Inquiry Received" },
                  { label: "No instant reply", icon: <Clock className="text-orange-500" />, sub: "3:15 PM - Waiting..." },
                  { label: "Lead goes cold", icon: <UserX className="text-red-500" />, sub: "4:00 PM - Lead Disengaged" },
                  { label: "Revenue lost", icon: <TrendingDown className="text-red-600" />, sub: "Competitor contacted instead" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase tracking-tighter">{item.label}</h4>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
             <div className="p-10 rounded-[3rem] bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/20 backdrop-blur-xl">
                <AlertCircle className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-3xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">
                  Speed = Revenue. <br />
                  <span className="text-red-500">Delay = Loss.</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-bold italic">
                  In today's fast-paced market, a 5-minute delay can reduce your lead conversion by 80%. Human teams can't be everywhere 24/7 — but AI can.
                </p>
             </div>
             
             <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5">
                <div className="text-4xl font-black text-white/20">01</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">TechieHelp solves this by embedding AI directly into your lead funnel.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
