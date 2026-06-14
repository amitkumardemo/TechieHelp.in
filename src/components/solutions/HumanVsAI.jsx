import React from "react";
import { motion } from "framer-motion";
import { User, Bot, X, Check } from "lucide-react";

const HumanVsAI = () => {
  const comparisonData = [
    {
      metric: "Operational Hours",
      human: "Works 8 Hours/Day",
      ai: "Works 24/7/365",
      humanStatus: false,
      aiStatus: true,
    },
    {
      metric: "Pricing Model",
      human: "Monthly Salary + Benefits",
      ai: "One-Time Setup Fee",
      humanStatus: false,
      aiStatus: true,
    },
    {
      metric: "Response Speed",
      human: "Average 15+ Minutes",
      ai: "Instant (< 60 Seconds)",
      humanStatus: false,
      aiStatus: true,
    },
    {
      metric: "Scale Capacity",
      human: "Handles 1 customer at a time",
      ai: "Handles 1,000+ concurrent calls/chats",
      humanStatus: false,
      aiStatus: true,
    },
    {
      metric: "Break Time & Leaves",
      human: "Takes Breaks, Sick Leaves",
      ai: "Never Stops, No downtime",
      humanStatus: false,
      aiStatus: true,
    },
    {
      metric: "Lead Coverage",
      human: "Misses night/weekend leads",
      ai: "100% Leads Captured & Handled",
      humanStatus: false,
      aiStatus: true,
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a1a] px-6 relative" id="human-vs-ai">
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-700/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter"
          >
            Human vs. <span className="text-gradient">TechieHelp AI</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium max-w-xl mx-auto">
            Traditional hiring vs. deploying an autonomous digital workforce.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] p-6 md:p-10 backdrop-blur-xl overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 pb-4">
                <th className="pb-6 text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Features</th>
                <th className="pb-6 text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <User className="w-4 h-4 text-red-400" /> Human Employee
                </th>
                <th className="pb-6 text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-2 text-gradient">
                    <Bot className="w-4 h-4 text-blue-400 animate-bounce" /> TechieHelp AI Employee
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row, idx) => (
                <tr key={row.metric} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 font-semibold text-gray-900 dark:text-white text-sm">{row.metric}</td>
                  <td className="py-5 text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{row.human}</span>
                  </td>
                  <td className="py-5 text-gray-200 font-semibold text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{row.ai}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HumanVsAI;
