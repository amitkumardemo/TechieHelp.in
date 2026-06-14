import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, UserX, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6 relative overflow-hidden" id="problem">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 uppercase tracking-tighter"
          >
            Most Businesses <br />
            <span className="text-red-500">Lose Leads Every Day</span>
          </motion.h2>
          <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">The Hidden Cost of Human Delay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Scenario UI: Drop-off Flow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[3.5rem] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[80px]" />
             
             <div className="space-y-8 relative z-10">
                {[
                  { label: "Lead arrives", icon: <ArrowRight className="text-[#33bbcf]" />, sub: "Customer fills contact form / WhatsApp" },
                  { label: "No response", icon: <Clock className="text-orange-500" />, sub: "Sales team busy or offline (Hours pass)" },
                  { label: "Lead loses interest", icon: <UserX className="text-red-400" />, sub: "Frustrated by wait times" },
                  { label: "Competitor wins", icon: <TrendingDown className="text-red-600" />, sub: "Another company responds instantly" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-tight">{item.label}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{item.sub}</p>
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
             <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/25 backdrop-blur-xl">
                <AlertCircle className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-snug uppercase tracking-tight">
                  Lost Response = <span className="text-red-500">Lost Revenue</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
                  Businesses lose revenue because nobody responds instantly, follow-ups are missed, and sales teams cannot operate 24/7.
                </p>
             </div>
             
             <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-100 dark:bg-white/5 border border-white/5">
                <div className="text-2xl font-black text-gray-900 dark:text-white/20">01</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                  By automating your intake channels, we capture 100% of these missed conversion opportunities.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
