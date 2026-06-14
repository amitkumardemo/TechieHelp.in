import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, DollarSign, Clock } from "lucide-react";
import styles from "../style";

const metrics = [
  { icon: <Zap className="w-8 h-8 text-cyan-400" />, value: "95%", label: "Faster Response Time", desc: "From hours to milliseconds." },
  { icon: <Target className="w-8 h-8 text-cyan-400" />, value: "0", label: "Missed Leads", desc: "Every single inquiry captured." },
  { icon: <TrendingUp className="w-8 h-8 text-cyan-400" />, value: "3x", label: "Conversion Increase", desc: "Due to instant follow-ups." },
  { icon: <DollarSign className="w-8 h-8 text-cyan-400" />, value: "50%", label: "Cost Reduction", desc: "Lower operational overhead." },
  { icon: <Clock className="w-8 h-8 text-cyan-400" />, value: "24/7", label: "Operations", desc: "Always on, never sleeps." },
];

const ClientResults = () => {
  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider">
              PROVEN RESULTS
            </span>
          </div>
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            The <span className="text-gradient">Impact</span> of an AI Workforce
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            These aren't just features. These are the measurable business outcomes our clients experience within the first 30 days of deploying LeadAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-[#0c0c1a] border border-gray-200 dark:border-white/10 p-8 rounded-3xl text-center shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{metric.value}</h3>
              <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">{metric.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
