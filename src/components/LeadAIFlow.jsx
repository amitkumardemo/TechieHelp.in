import React from "react";
import { motion } from "framer-motion";
import { Globe, Inbox, MessageSquare, PhoneCall, CheckSquare, Database, Bell } from "lucide-react";
import styles from "../style";

const flowSteps = [
  { icon: <Globe className="w-5 h-5" />, title: "Website Form", desc: "User submits an inquiry", color: "from-gray-400 to-gray-500" },
  { icon: <Inbox className="w-5 h-5" />, title: "LeadAI Captures", desc: "Data extracted in ms", color: "from-cyan-400 to-cyan-500" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "LeadAI Responds", desc: "Instant SMS & Email", color: "from-cyan-500 to-blue-500" },
  { icon: <PhoneCall className="w-5 h-5" />, title: "LeadAI Calls", desc: "Voice AI dials the lead", color: "from-blue-500 to-indigo-500" },
  { icon: <CheckSquare className="w-5 h-5" />, title: "Qualifies", desc: "Determines buying intent", color: "from-indigo-500 to-purple-500" },
  { icon: <Database className="w-5 h-5" />, title: "Updates CRM", desc: "Logs transcript & notes", color: "from-purple-500 to-pink-500" },
  { icon: <Bell className="w-5 h-5" />, title: "You Get Notified", desc: "Meeting booked for you", color: "from-green-400 to-emerald-500" },
];

const LeadAIFlow = () => {
  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6 bg-gray-50 dark:bg-[#050510]`}>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            How <span className="text-gradient">LeadAI</span> Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A fully autonomous pipeline that completely eliminates manual sales administration.
          </p>
        </motion.div>

        {/* Desktop Horizontal Flow */}
        <div className="hidden md:flex flex-col items-center relative py-10">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500"
            />
          </div>

          <div className="flex justify-between w-full relative z-10">
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 + 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center w-32 relative group"
              >
                {/* Ping Animation behind active nodes */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity`} />

                <div className={`w-14 h-14 rounded-full bg-white dark:bg-[#0c0c1a] border-4 border-white dark:border-[#050510] flex items-center justify-center text-white bg-gradient-to-br ${step.color} shadow-lg mb-4 relative z-10 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white text-center mb-1 leading-tight">{step.title}</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center leading-tight">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="flex md:hidden flex-col gap-6 relative py-4 pl-6">
          <div className="absolute top-0 bottom-0 left-10 w-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-green-500"
            />
          </div>

          {flowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 relative z-10"
            >
              <div className={`w-10 h-10 rounded-full bg-white dark:bg-[#0c0c1a] border-4 border-white dark:border-[#050510] flex items-center justify-center text-white bg-gradient-to-br ${step.color} shadow-lg shrink-0`}>
                {step.icon}
              </div>
              <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4 rounded-xl shadow-sm flex-1">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadAIFlow;
