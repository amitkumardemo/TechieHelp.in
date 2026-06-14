import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingDown, TrendingUp, Clock, Zap, Users, Bot, DollarSign } from "lucide-react";
import styles from "../style";

const BeforeAfterTable = () => {
  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6`}>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            The Old Way vs <span className="text-gradient">LeadAI</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See exactly how replacing manual operations with an AI workforce transforms your bottom line.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central vs line for desktop */}
          <div className="hidden md:block absolute top-[80px] bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-gray-200 dark:from-white/10 to-transparent -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

            {/* Traditional Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-red-200 dark:border-red-900/30">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Traditional Teams</h3>
                  <p className="text-sm text-red-600 dark:text-red-400">Manual & Slow</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Clock className="w-5 h-5 text-red-500" />, text: "Hours to respond to leads" },
                  { icon: <TrendingDown className="w-5 h-5 text-red-500" />, text: "High percentage of missed opportunities" },
                  { icon: <DollarSign className="w-5 h-5 text-red-500" />, text: "High monthly salary costs & overhead" },
                  { icon: <Users className="w-5 h-5 text-red-500" />, text: "Limited by working hours (9 to 5)" },
                  { icon: <XCircle className="w-5 h-5 text-red-500" />, text: "Manual follow-ups forgotten" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* LeadAI Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(51,187,207,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full" />

              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-200 dark:border-cyan-500/30 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">LeadAI Workforce</h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold tracking-wide">Automated & Instant</p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                {[
                  { icon: <Zap className="w-5 h-5 text-cyan-500 drop-shadow-[0_0_8px_rgba(51,187,207,0.5)]" />, text: "Sub-second instant response time" },
                  { icon: <TrendingUp className="w-5 h-5 text-cyan-500 drop-shadow-[0_0_8px_rgba(51,187,207,0.5)]" />, text: "Zero missed leads. 100% capture rate" },
                  { icon: <CheckCircle2 className="w-5 h-5 text-cyan-500 drop-shadow-[0_0_8px_rgba(51,187,207,0.5)]" />, text: "Fraction of the cost of a human employee" },
                  { icon: <CheckCircle2 className="w-5 h-5 text-cyan-500 drop-shadow-[0_0_8px_rgba(51,187,207,0.5)]" />, text: "24/7/365 continuous operations" },
                  { icon: <CheckCircle2 className="w-5 h-5 text-cyan-500 drop-shadow-[0_0_8px_rgba(51,187,207,0.5)]" />, text: "Automated, persistent follow-up sequences" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <span className="text-gray-900 dark:text-white font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTable;
