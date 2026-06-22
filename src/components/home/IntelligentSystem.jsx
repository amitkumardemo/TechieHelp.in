import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Mail, Phone, Database, Calendar, 
  TrendingUp, ArrowRight, UserCheck, Inbox, 
  Layers, MessageSquare, ClipboardList, CheckCircle2,
  LineChart, Users2, ShieldAlert
} from "lucide-react";
import KnowledgeEngineMemory from "./KnowledgeEngineMemory";


const IntelligentSystem = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  // Row 1 workflow items
  const workflowSteps = [
    { label: "Lead Captured", desc: "Form/email detection", icon: <Inbox className="w-5 h-5 text-blue-500" /> },
    { label: "AI Reply", desc: "Instant draft response", icon: <Mail className="w-5 h-5 text-indigo-500" /> },
    { label: "Voice AI", desc: "Outbound call query", icon: <Phone className="w-5 h-5 text-purple-500" /> },
    { label: "CRM Updated", desc: "Status & fields synced", icon: <Database className="w-5 h-5 text-orange-500" /> },
    { label: "Meeting Booked", desc: "Calendar slot set", icon: <Calendar className="w-5 h-5 text-pink-500" /> },
    { label: "Revenue Closed", desc: "System updates pipeline", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> }
  ];

  // Auto cycle Row 1 workflow step
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflow((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Auto cycle Row 2 tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 bg-slate-50/50 dark:bg-[#02050c]/20 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> The Core Platform
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            The Intelligent System <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">That Never Sleeps.</span>
          </motion.h2>
        </div>

        {/* ROWS CONTENT */}
        <div className="space-y-32">
          
          {/* ROW 1: Revenue Agents At Your Command */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3"
              >
                01 . AUTONOMOUS WORKFLOWS
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 dark:text-white leading-tight mb-6"
              >
                Revenue Agents <br />At Your Command.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-base max-w-md"
              >
                Watch agents orchestrate your entire lead funnel. From discovery to close, everything flows seamlessly in a single autonomous pipeline.
              </motion.p>
            </div>

            {/* Right: Flowing cards */}
            <div className="relative p-6 sm:p-8 rounded-[32px] bg-white/70 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40 shadow-sm overflow-hidden min-h-[340px] flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {workflowSteps.map((step, idx) => {
                  const isActive = activeWorkflow === idx;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-2xl border transition-all duration-500 flex flex-col justify-between h-[100px] cursor-default relative ${
                        isActive
                          ? "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-500/30 dark:border-indigo-500/20 shadow-[0_4px_15px_rgba(99,102,241,0.08)]"
                          : "bg-white/60 dark:bg-slate-950/40 border-slate-200/50 dark:border-slate-800/60 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? "bg-indigo-100/50 dark:bg-indigo-900/30" : "bg-slate-50 dark:bg-slate-900"}`}>
                          {step.icon}
                        </div>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isActive ? "text-slate-800 dark:text-slate-100" : "text-slate-500"}`}>
                          {step.label}
                        </div>
                        <div className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 truncate">{step.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>


          {/* ROW 2: Already There When You Arrive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Right: Premium Mock Tabbed Console */}
            <div className="order-2 lg:order-1 relative p-6 sm:p-8 rounded-[32px] bg-white/70 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40 shadow-sm overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Tab Controls (Browser Header style) */}
              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/40 pb-4 mb-6">
                <div className="flex gap-1.5 items-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/40 select-none">
                  {["Gmail Inbox", "Caller Hub", "CRM Lead"].map((tabLabel, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-tight transition-all ${
                        activeTab === idx
                          ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                          : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      }`}
                    >
                      {tabLabel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col justify-center relative overflow-hidden min-h-[220px]">
                <AnimatePresence mode="wait">
                  
                  {/* TAB 0: EMAIL INBOX DRAFT */}
                  {activeTab === 0 && (
                    <motion.div
                      key="email-inbox"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 w-full"
                    >
                      <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-[10px] font-semibold text-slate-500 flex justify-between">
                        <span>To: amitkumar@gmail.com</span>
                        <span>Subject: Inquiry on LeadAI pricing</span>
                      </div>

                      <div className="relative p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.02] dark:bg-blue-500/[0.01] shadow-[inset_0_4px_30px_rgba(59,130,246,0.01)]">
                        <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-full w-full animate-pulse" />
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                            AI Auto-Draft Formulated
                          </span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase">Prepared in 200ms</span>
                        </div>

                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic">
                          "Hi Amit, I saw you were looking for pricing models on LeadAI. We have three tiers customized for operations scale. Let's schedule a call tomorrow to see which fits..."
                        </p>

                        <div className="flex items-center justify-between mt-4 border-t border-slate-200/40 dark:border-slate-800/40 pt-3">
                          <span className="text-[8px] font-semibold text-slate-400">Stored in Gmail Drafts</span>
                          <button className="px-3 py-1 rounded bg-blue-600 text-white font-bold text-[9px] shadow-sm select-none">Send Draft</button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 1: CALLER DOSSIER */}
                  {activeTab === 1 && (
                    <motion.div
                      key="caller-hub"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 w-full"
                    >
                      {/* Phone call notification */}
                      <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/10 rounded-2xl border border-indigo-500/20 flex items-center justify-between animate-pulse">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold shrink-0">
                            📞
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-800 dark:text-slate-100 block">Incoming: Sarah Parker</span>
                            <span className="text-[8px] text-slate-400 uppercase tracking-wide">Ready to answer</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-800 px-2 py-0.5 rounded-full">Active Ringing</span>
                      </div>

                      {/* Dossier info */}
                      <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] space-y-2.5">
                        <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                          LeadAI Caller Context Dossier (Prepared)
                        </span>
                        
                        <div className="grid grid-cols-2 gap-3 text-[10px]">
                          <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 rounded-lg">
                            <span className="text-slate-400 block text-[8px] font-bold uppercase">Pain Point</span>
                            <span className="text-slate-700 dark:text-slate-200 font-semibold block mt-0.5">High pricing concerns</span>
                          </div>
                          <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 rounded-lg">
                            <span className="text-slate-400 block text-[8px] font-bold uppercase">Mood Score</span>
                            <span className="text-emerald-500 font-bold block mt-0.5">High Interest (92%)</span>
                          </div>
                          <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40 rounded-lg col-span-2">
                            <span className="text-slate-400 block text-[8px] font-bold uppercase">Last Contact Detail</span>
                            <span className="text-slate-700 dark:text-slate-200 font-medium block mt-0.5 truncate">Shared proposal documents via WhatsApp last night</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: CRM AUTOMATION */}
                  {activeTab === 2 && (
                    <motion.div
                      key="crm-sync"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 w-full"
                    >
                      {/* Mock Lead profile header */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-950 border border-orange-100 dark:border-slate-800 flex items-center justify-center text-orange-500 font-bold shrink-0">
                          👥
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Sarah Parker</span>
                          <span className="text-[9px] text-slate-400 font-medium">Lead ID: TH-8291 • HubSpot Sync</span>
                        </div>
                      </div>

                      {/* CRM fields filling in */}
                      <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/[0.01] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                            Autopopulating Fields
                          </span>
                          <span className="text-[8px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded animate-pulse">Sync Active</span>
                        </div>

                        <div className="space-y-2">
                          {[
                            { name: "Deal Value", val: "₹4,50,000", delay: 0.1 },
                            { name: "Pain Point Category", val: "ISO 9001 Compliance", delay: 0.3 },
                            { name: "Next Step", val: "Auto-Draft Sent (Awaiting call)", delay: 0.5 }
                          ].map((field, fIdx) => (
                            <div key={fIdx} className="flex justify-between items-center text-[10px] py-1 border-b border-slate-200/40 dark:border-slate-800/40">
                              <span className="text-slate-400 font-bold">{field.name}</span>
                              <motion.span 
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: field.delay }}
                                className="text-slate-800 dark:text-slate-200 font-extrabold"
                              >
                                {field.val}
                              </motion.span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

            {/* Left text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">
                02 . PREPARED INTELLIGENCE
              </span>
              <h3 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 dark:text-white leading-tight mb-6">
                Already There <br />When You Arrive.
              </h3>
              
              <div className="space-y-4">
                {[
                  { q: "Open your inbox.", a: "The draft is already prepared.", id: 0 },
                  { q: "Join a call.", a: "The summary is already ready.", id: 1 },
                  { q: "Open CRM.", a: "Customer history is already loaded.", id: 2 }
                ].map((item, idx) => {
                  const isActive = activeTab === item.id;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTab(item.id)}
                      className={`flex flex-col border-l-2 pl-4 py-2 cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/5 pl-5" 
                          : "border-slate-200 dark:border-slate-800 opacity-50 hover:opacity-80"
                      }`}
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"}`}>{item.q}</span>
                      <span className={`text-sm font-semibold mt-0.5 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>{item.a}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>


          {/* ROW 3: Continuous Context For Every Customer */}
          <KnowledgeEngineMemory />


          {/* ROW 4: For The People Who Own The Numbers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Right: Charts/Metrics */}
            <div className="order-2 lg:order-1 relative p-6 sm:p-8 rounded-[32px] bg-white/70 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40 shadow-sm overflow-hidden min-h-[340px] flex flex-col justify-center">
              
              {/* Analytics Dashboard Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Revenue Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Revenue</span>
                    <span className="text-xl font-bold text-slate-800 dark:text-white mt-1 block">₹12.4L</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-500 mt-4">
                    <span className="text-xs">↑</span> +42% MoM
                  </div>
                </div>

                {/* Pipeline Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Active Pipeline</span>
                    <span className="text-xl font-bold text-slate-800 dark:text-white mt-1 block">1,824</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-indigo-500 mt-4">
                    <span className="text-xs">→</span> Auto Syncing
                  </div>
                </div>

                {/* Conversions Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col justify-between col-span-2">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">MQL-to-SQL Conversion</span>
                      <span className="text-base font-bold text-slate-800 dark:text-white mt-0.5 block">3x Growth Rate</span>
                    </div>
                    <LineChart className="w-8 h-8 text-emerald-500/80" />
                  </div>
                  <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} transition={{ duration: 1 }} className="bg-emerald-500 h-full" />
                  </div>
                </div>

              </div>

            </div>

            {/* Left text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">
                04 . BUSINESS METRICS & DASHBOARD
              </span>
              <h3 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 dark:text-white leading-tight mb-6">
                For The People <br />Who Own The Numbers.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-normal text-base max-w-md">
                Get real-time insights, revenue projections, and pipeline health parameters automatically compiled. No manual reporting, zero spreadsheets.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm">
                {["Revenue", "Pipeline", "Forecast", "Conversions", "Growth"].map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default IntelligentSystem;
