import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, FileSpreadsheet, Brain, Database, Globe, Layers } from "lucide-react";
import styles from "../style";

const integrations = [
  { icon: <Mail className="w-8 h-8 text-red-500" />, name: "Gmail", desc: "Auto-reply & analyze" },
  { icon: <MessageCircle className="w-8 h-8 text-green-500" />, name: "WhatsApp", desc: "Instant messaging" },
  { icon: <FileSpreadsheet className="w-8 h-8 text-green-600" />, name: "Google Sheets", desc: "Live data sync" },
  { icon: <Brain className="w-8 h-8 text-blue-500" />, name: "Gemini", desc: "Core AI engine" },
  { icon: <Database className="w-8 h-8 text-purple-500" />, name: "Vapi", desc: "Voice AI calling" },
  { icon: <Layers className="w-8 h-8 text-orange-500" />, name: "Your CRM", desc: "HubSpot, Salesforce" },
  { icon: <Globe className="w-8 h-8 text-cyan-500" />, name: "Website Forms", desc: "Direct capture" },
];

const IntegrationStack = () => {
  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6`}>
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider">
              SEAMLESS INTEGRATION
            </span>
          </div>
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            Connect Your <span className="text-gradient">Existing Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            LeadAI drops right into the tools you already use. No complex migrations or new software to learn.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-[#0c0c1a] border border-gray-200 dark:border-white/10 p-6 rounded-3xl flex flex-col items-center text-center w-40 sm:w-48 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4 shadow-inner border border-gray-100 dark:border-white/5">
                {item.icon}
              </div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-1">{item.name}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationStack;
