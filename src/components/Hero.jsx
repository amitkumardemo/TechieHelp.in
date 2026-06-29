import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, Inbox, Database, PhoneCall, BarChart3,
  Zap, Shield, TrendingUp, ArrowRight, Calendar, Star
} from "lucide-react";

/* ─── Animated Product Mockups ─────────────────────── */

const InboxMockup = () => (
  <div className="w-full h-full bg-[#f9fafb] dark:bg-slate-950/40 flex transition-colors duration-300">
    <div className="w-52 bg-white dark:bg-[#0b081f] border-r border-gray-100 dark:border-slate-800/60 p-4 flex flex-col gap-1.5 shrink-0 transition-colors">
      <div className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-3">Inbox · 5 new</div>
      {[
        { name: "Rahul Sharma", msg: "Interested in automation…", time: "2m", dot: "bg-blue-500", active: true },
        { name: "Priya Desai", msg: "Fleet tracking solution", time: "12m", dot: "bg-emerald-500" },
        { name: "Amit Kumar", msg: "Document extraction", time: "1h", dot: "bg-amber-400" },
        { name: "Sneha Reddy", msg: "Patient booking bot", time: "3h", dot: "bg-purple-500" },
        { name: "Vikram Singh", msg: "CRM integration help", time: "5h", dot: "bg-pink-500" },
      ].map((item, i) => (
        <div key={i} className={`flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all ${item.active ? "bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20" : "hover:bg-gray-50 dark:hover:bg-slate-900/40"}`}>
          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.dot}`} />
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold text-gray-800 dark:text-slate-200 truncate">{item.name}</p>
            <p className="text-[11px] text-gray-400 dark:text-slate-500 truncate">{item.msg}</p>
          </div>
          <span className="text-[10px] text-gray-300 dark:text-slate-600 shrink-0">{item.time}</span>
        </div>
      ))}
    </div>
    <div className="flex-1 flex flex-col p-5 gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">Rahul Sharma · TechNova</h3>
          <p className="text-xs text-gray-400 dark:text-slate-500">rahul@technova.com · LinkedIn Ad</p>
        </div>
        <div className="flex gap-1.5">
          <span className="px-2.5 py-1 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold rounded-full">HOT</span>
          <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full">Score 92</span>
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-[#0b081f] rounded-2xl border border-gray-100 dark:border-slate-800/60 p-4 flex flex-col gap-3 transition-colors">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-slate-400 shrink-0">RS</div>
          <div className="bg-gray-50 dark:bg-slate-900/60 rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[75%]">
            <p className="text-[12px] text-gray-700 dark:text-slate-300">Hi, I'm looking for an AI solution to automate our lead management. Budget is ₹50K+.</p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex gap-2.5 justify-end">
          <div className="bg-blue-600 rounded-2xl rounded-tr-none px-3.5 py-2.5 max-w-[78%]">
            <p className="text-[12px] text-white">Hi Rahul! Our AI handles lead capture, instant replies, and CRM updates automatically — 24/7. Shall I schedule a quick demo?</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">AI</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex items-center gap-2 pl-9">
          {[0, 0.18, 0.36].map((d, i) => (
            <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: d }} className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-slate-600" />
          ))}
          <span className="text-[11px] text-gray-400 dark:text-slate-500 ml-1">LeadAI is typing…</span>
        </motion.div>
      </div>
    </div>
  </div>
);

const MemoryMockup = () => (
  <div className="w-full h-full bg-[#f9fafb] dark:bg-slate-950/40 flex transition-colors duration-300">
    <div className="w-48 bg-white dark:bg-[#0b081f] border-r border-gray-100 dark:border-slate-800/60 p-4 flex flex-col gap-1 shrink-0 transition-colors">
      <div className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-3">Customers</div>
      {["Rahul Sharma", "Priya Desai", "Sneha Reddy", "Amit Kumar", "Vikram Singh"].map((name, i) => (
        <div key={i} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[12px] font-medium cursor-pointer transition-all ${i === 0 ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400" : "text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-900/40"}`}>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-[9px] font-bold text-white shrink-0">{name[0]}</div>
          <span className="truncate dark:text-slate-300">{name}</span>
        </div>
      ))}
    </div>
    <div className="flex-1 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">R</div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Rahul Sharma</h3>
            <p className="text-xs text-gray-400 dark:text-slate-500">TechNova Solutions · Founder</p>
          </div>
        </div>
        <span className="text-[11px] bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full font-semibold">Active Client</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ label: "Total Spend", val: "₹1.2L" }, { label: "Deals Closed", val: "3" }, { label: "Last Contact", val: "2h ago" }].map((m, i) => (
          <div key={i} className="bg-white dark:bg-[#0b081f] rounded-xl border border-gray-100 dark:border-slate-800/60 p-3 transition-colors shadow-sm">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 mb-1">{m.label}</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{m.val}</p>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-[#0b081f] rounded-xl border border-gray-100 dark:border-slate-800/60 p-4 flex-1 transition-colors">
        <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-3">AI Memory Timeline</p>
        <div className="space-y-2.5">
          {[
            { icon: "💬", text: "Replied to workflow automation query", time: "2h ago" },
            { icon: "📞", text: "Call completed — 4m 32s, positive", time: "1d ago" },
            { icon: "📋", text: "CRM updated: Qualified → Proposal", time: "2d ago" },
            { icon: "✅", text: "Deal closed: ₹85,000 — AI Package", time: "5d ago" },
          ].map((ev, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }} className="flex items-start gap-2.5 text-[12px]">
              <span>{ev.icon}</span>
              <span className="text-gray-600 dark:text-slate-300 flex-1">{ev.text}</span>
              <span className="text-gray-400 dark:text-slate-500 shrink-0">{ev.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CallingMockup = () => (
  <div className="w-full h-full bg-[#f9fafb] dark:bg-slate-950/40 flex flex-col p-5 gap-3 transition-colors duration-300">
    <motion.div animate={{ boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 25px rgba(99,102,241,0.25)", "0 0 0px rgba(99,102,241,0)"] }} transition={{ repeat: Infinity, duration: 2 }}
      className="bg-indigo-600 rounded-2xl p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">P</div>
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 rounded-full border-2 border-white/30" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Priya Desai · Apex Logistics</p>
          <p className="text-indigo-200 text-xs">AI Voice Agent Active</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(10)].map((_, i) => (
            <motion.div key={i} animate={{ height: [3, Math.random() * 20 + 6, 3] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.08 }} className="w-1 bg-white/70 rounded-full" style={{ height: 3 }} />
          ))}
        </div>
        <span className="text-white/80 font-mono text-sm tabular-nums">02:14</span>
      </div>
    </motion.div>
    <div className="bg-white dark:bg-[#0b081f] rounded-2xl border border-gray-100 dark:border-slate-800/60 flex-1 p-4 flex flex-col gap-2.5 overflow-hidden transition-colors">
      <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Live Transcript</p>
      {[
        { who: "AI", msg: "Hi Priya! Calling from TechieHelp — you'd inquired about fleet tracking AI. Is this a good time?", delay: 0 },
        { who: "P", msg: "Yes, absolutely. Looking for something that handles 200+ vehicles.", delay: 0.4 },
        { who: "AI", msg: "Perfect! Our system handles real-time tracking, anomaly detection, and automated alerts. We've deployed for clients with 500+ vehicles.", delay: 0.8 },
      ].map((line, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: line.delay + 0.2 }} className={`flex gap-2 ${line.who !== "AI" ? "justify-end" : ""}`}>
          {line.who === "AI" && <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[9px] text-white font-bold shrink-0 mt-0.5">AI</div>}
          <div className={`rounded-2xl px-3 py-2 max-w-[78%] ${line.who === "AI" ? "bg-gray-50 dark:bg-slate-900/60 rounded-tl-none" : "bg-indigo-50 dark:bg-indigo-500/10 rounded-tr-none"}`}>
            <p className="text-[12px] text-gray-700 dark:text-slate-300">{line.msg}</p>
          </div>
          {line.who !== "AI" && <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-[9px] text-white font-bold shrink-0 mt-0.5">P</div>}
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex gap-1 items-center pl-8">
        {[0, 0.2, 0.4].map((d, i) => <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: d }} className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-slate-600" />)}
        <span className="text-[11px] text-gray-400 dark:text-slate-500 ml-1">AI is responding…</span>
      </motion.div>
    </div>
  </div>
);

const AnalyticsMockup = () => (
  <div className="w-full h-full bg-[#f9fafb] dark:bg-slate-950/40 p-5 flex flex-col gap-3 transition-colors duration-300">
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Total Revenue", val: "₹12.4L", change: "+24%", color: "text-emerald-600 dark:text-emerald-400" },
        { label: "Leads Captured", val: "1,284", change: "+18%", color: "text-blue-600 dark:text-blue-400" },
        { label: "Connect Rate", val: "87%", change: "+5%", color: "text-purple-600 dark:text-purple-400" },
        { label: "Avg Deal Size", val: "₹82K", change: "+12%", color: "text-amber-600 dark:text-amber-400" },
      ].map((m, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white dark:bg-[#0b081f] rounded-2xl border border-gray-100 dark:border-slate-800/60 p-3 transition-colors shadow-sm">
          <p className="text-[10px] text-gray-400 dark:text-slate-500 mb-1.5">{m.label}</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{m.val}</p>
          <p className={`text-[11px] font-semibold mt-1 ${m.color}`}>{m.change} this month</p>
        </motion.div>
      ))}
    </div>
    <div className="bg-white dark:bg-[#0b081f] rounded-2xl border border-gray-100 dark:border-slate-800/60 flex-1 p-4 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-gray-800 dark:text-slate-200">Revenue Pipeline</p>
        <div className="flex gap-3 text-[11px] text-gray-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />Captured</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />Closed</span>
        </div>
      </div>
      <div className="flex items-end gap-3 h-20">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => {
          const h1 = [38, 52, 45, 68, 58, 88];
          const h2 = [22, 33, 28, 48, 42, 70];
          return (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5">
                <motion.div initial={{ height: 0 }} animate={{ height: h1[i] }} transition={{ duration: 0.5, delay: i * 0.07 }} className="flex-1 bg-blue-200 dark:bg-blue-500/40 rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: h2[i] }} transition={{ duration: 0.5, delay: i * 0.07 + 0.08 }} className="flex-1 bg-emerald-400 dark:bg-emerald-500/80 rounded-t-md" />
              </div>
              <span className="text-[10px] text-gray-400 dark:text-slate-500">{month}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const TABS = [
  { id: "inbox",    label: "AI Inbox",          icon: Inbox,       component: InboxMockup },
  { id: "memory",   label: "Customer Memory",   icon: Database,    component: MemoryMockup },
  { id: "calling",  label: "AI Calling",         icon: PhoneCall,   component: CallingMockup },
  { id: "analytics",label: "Revenue Analytics", icon: BarChart3,   component: AnalyticsMockup },
];

const AUTO_INTERVAL = 9000;

const Hero = () => {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [progress, setProgress]         = useState(0);
  const timerRef    = useRef(null);
  const progressRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current)    clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    const t0 = Date.now();
    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - t0) / AUTO_INTERVAL) * 100, 100));
    }, 30);
    timerRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % TABS.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [activeIndex]);

  const ActiveMockup = TABS[activeIndex].component;

  return (
    <section id="home" className="relative w-full bg-white dark:bg-[#030014] pt-28 pb-0 flex flex-col items-center overflow-hidden transition-colors duration-300">
      
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,white_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_30%,#030014_100%)]" />

      {/* Top Badge */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 flex items-center gap-1 mb-7" >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-purple-500/5 dark:to-blue-500/5 border border-blue-100 dark:border-purple-500/20 shadow-sm">
          <span className="flex items-center gap-1 text-blue-600 dark:text-[#33bbcf] text-[11px] font-bold uppercase tracking-[0.18em]">
            <Zap className="w-3 h-3" /> Powered by TechieHelp AI Engine
          </span>
          <span className="h-3 w-px bg-blue-200 dark:bg-purple-500/30" />
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />)}
          </div>
        </div>
      </motion.div>

      {/* Headline Text */}
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.06 }} className="relative z-10 text-center px-4 max-w-[960px]">
        <h1 className="font-poppins font-black text-[44px] ss:text-[56px] sm:text-[68px] md:text-[78px] lg:text-[88px] leading-[1.0] tracking-[-0.035em] text-gray-900 dark:text-white transition-colors">
          The AI Revenue Platform
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-[#33bbcf] dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
              Engineered For Growth.
            </span>
            <motion.svg initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }} className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" preserveAspectRatio="none">
              <motion.path d="M 4 8 Q 100 2 200 8 Q 300 14 396 8" fill="none" stroke="url(#heroStroke)" strokeWidth="3.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.65 }} />
              <defs>
                <linearGradient id="heroStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
        </h1>
      </motion.div>

      {/* Trust Signal Pills */}
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative z-10 flex flex-wrap items-center justify-center gap-2 mt-6 px-4">
        {[
          { icon: Shield, label: "MSME & ISO Certified" },
          { icon: TrendingUp, label: "₹1Cr+ Revenue Generated" },
          { icon: Zap, label: "Responds in under 2 seconds" },
        ].map((pill, i) => (
          <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full text-gray-500 dark:text-gray-400 text-[12px] font-medium transition-colors">
            <pill.icon className="w-3 h-3 text-gray-400 dark:text-slate-500" />
            {pill.label}
          </div>
        ))}
      </motion.div>

      {/* Subheadline Text */}
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-10 mt-6 text-center text-[15px] sm:text-[17px] text-gray-500 dark:text-gray-400 max-w-[680px] leading-relaxed px-5">
        LeadAI captures leads, replies instantly, calls customers, updates your CRM, and compounds revenue —
        <strong className="text-gray-700 dark:text-slate-200 font-semibold transition-colors"> 24/7, fully automated.</strong>
      </motion.p>

      {/* CTA Layer */}
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }} className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3">
        <a href="/contacts" className="relative overflow-hidden group flex items-center gap-2 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-slate-900 text-[15px] font-bold rounded-full transition-all shadow-lg hover:shadow-[0_0_20px_rgba(51,187,207,0.4)] hover:-translate-y-0.5">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#33bbcf] to-[#5ce1e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
        <a href="/contacts" className="flex items-center gap-2 px-8 py-3.5 border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-purple-500 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-[15px] font-medium rounded-full transition-all hover:-translate-y-0.5 shadow-sm">
          <Calendar className="w-4 h-4 text-gray-400" /> Book Strategy Call
        </a>
      </motion.div>

      {/* Tab Selectors */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.33 }} className="relative z-10 mt-16 w-full max-w-5xl px-4">
        <div className="flex border-b border-gray-200 dark:border-slate-800">
          {TABS.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveIndex(index); }}
                className={`relative flex items-center gap-2 px-4 py-3.5 text-[13px] sm:text-[14px] font-medium transition-colors select-none outline-none flex-1 sm:flex-none justify-center sm:justify-start whitespace-nowrap ${
                  isActive ? "text-gray-900 dark:text-white" : "text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-400"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? "text-gray-900 dark:text-[#33bbcf]" : "text-gray-400 dark:text-slate-500"}`} />
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.span className="block h-full bg-black dark:bg-[#33bbcf] rounded-full" style={{ width: `${progress}%` }} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Main Mockup Window Frame */}
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.42 }} className="relative z-10 w-full max-w-5xl px-4 mt-3 mb-20">
        <div className="w-full rounded-t-2xl border border-gray-200 dark:border-slate-800 border-b-0 overflow-hidden shadow-xl">
          {/* Browser top bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#0b081f] border-b border-gray-200 dark:border-slate-800 transition-colors">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800/80 rounded-md h-6 flex items-center px-3 gap-2">
              <Shield className="w-3 h-3 text-green-500" />
              <span className="text-[11px] text-gray-400 dark:text-slate-500 font-mono">app.techiehelp.in / {TABS[activeIndex].id}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold">LIVE</span>
            </div>
          </div>

          {/* View Canvas */}
          <div className="relative w-full bg-[#f9fafb] dark:bg-[#060417] overflow-hidden transition-colors" style={{ height: 360 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ActiveMockup />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;