import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How does LeadAI remember customers?",
    answer:
      "LeadAI builds a persistent memory profile for every customer — storing past conversations, purchase history, issues raised, and context across every channel. When a customer contacts you again, LeadAI instantly retrieves their full history so your team (or AI) can respond with complete context, not 'Can you repeat your issue?'",
  },
  {
    question: "Can LeadAI reply automatically to emails?",
    answer:
      "Yes. LeadAI connects to your Gmail or business inbox and drafts or sends instant, personalized replies based on your knowledge base and the customer's history. You can set it to auto-send or to draft-for-review mode. Responses go out in under 2 seconds.",
  },
  {
    question: "How does the knowledge base work?",
    answer:
      "You upload your FAQs, product documentation, pricing, and business information to LeadAI's knowledge engine. The AI indexes this content and uses it to power accurate, on-brand replies across email, voice, and chat — ensuring it always represents your business correctly.",
  },
  {
    question: "Can LeadAI use previous conversations?",
    answer:
      "Absolutely. LeadAI's Relationship Memory system logs every conversation across every channel. When a customer writes in, the AI contextualizes the reply using everything that was said before — removing repetition and building genuine customer relationships.",
  },
  {
    question: "Does LeadAI support Gmail?",
    answer:
      "Yes — Gmail is a core integration. LeadAI connects via OAuth, reads incoming emails, and responds automatically or drafts replies for your approval. It works with Google Workspace and personal Gmail accounts.",
  },
  {
    question: "Can LeadAI call customers automatically?",
    answer:
      "Yes. LeadAI includes a Voice AI agent that can make outbound calls to follow up on leads, confirm bookings, or handle FAQs. The voice is natural and personalized. You can trigger calls based on rules (e.g., no reply in 30 minutes) or manually.",
  },
  {
    question: "Can I connect my CRM?",
    answer:
      "Yes — LeadAI integrates with popular CRMs including HubSpot, Salesforce, Zoho, and custom platforms via webhook/API. When a lead comes in or a deal progresses, CRM fields are automatically updated in real time — no manual data entry required.",
  },
  {
    question: "How does LeadAI learn about my business?",
    answer:
      "During onboarding, you feed LeadAI your knowledge base — pricing, services, team info, FAQs, and tone of voice. LeadAI continuously improves its understanding from real conversations, ensuring it gets smarter about your business over time.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Security is paramount. All data is encrypted at rest and in transit. LeadAI is ISO 9001 certified and follows GDPR-aligned data handling practices. Customer conversation data is never shared or used to train third-party models.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are live in under 30 minutes. Connect Gmail, upload your knowledge base, and LeadAI starts working immediately. Our onboarding team provides a guided walkthrough to ensure everything is configured for your specific workflows.",
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => (
  <div
    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen
        ? "border-gray-200 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        : "border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10"
    }`}
  >
    <button
      onClick={() => onToggle(index)}
      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white dark:bg-[#0c0d14] hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
    >
      <div className="flex items-start gap-3">
        <span className="text-[10px] font-bold text-gray-300 dark:text-gray-500 font-mono mt-0.5 shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`text-[15px] font-semibold leading-snug transition-colors ${isOpen ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
          {item.question}
        </span>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="shrink-0"
      >
        <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`} />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden bg-white dark:bg-[#0c0d14]"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6">
            <div className="ml-7 border-l-2 border-[#33bbcf]/30 pl-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const col1 = faqData.slice(0, 5);
  const col2 = faqData.slice(5);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#090a0f] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#33bbcf]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#33bbcf]/8 border border-[#33bbcf]/20 mb-5"
          >
            <Sparkles className="w-3 h-3 text-[#33bbcf] animate-pulse" />
            <span className="text-[10px] font-bold text-[#33bbcf] uppercase tracking-widest">PRODUCT FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Everything You Need{' '}
            <span className="bg-gradient-to-r from-[#33bbcf] to-blue-500 bg-clip-text text-transparent">
              To Know.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base max-w-lg mx-auto"
          >
            Real answers to real questions about how LeadAI automates your revenue operations.
          </motion.p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="space-y-3">
            {col1.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FAQItem
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={handleToggle}
                />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {col2.map((item, i) => {
              const globalIndex = i + 5;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <FAQItem
                    item={item}
                    index={globalIndex}
                    isOpen={openIndex === globalIndex}
                    onToggle={handleToggle}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Still have questions?</p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
