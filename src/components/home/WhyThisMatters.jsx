import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Zap, Calendar, TrendingUp, ArrowRight, Calculator, X } from "lucide-react";

const painPoints = [
  "Leads go cold within 5 minutes of no response.",
  "Customers repeat themselves across every touchpoint.",
  "Conversations get lost between tools and teams.",
  "Sales reps switch between 6+ tools to close one deal.",
  "Revenue slips away — silently, constantly.",
];

const stages = [
  {
    id: "cold",
    icon: AlertCircle,
    label: "Lead Goes Cold",
    color: "#ef4444",
    bg: "bg-red-50",
    border: "border-red-200",
    iconColor: "text-red-500",
    desc: "No response in 5 min",
  },
  {
    id: "ai",
    icon: Zap,
    label: "AI Saves Lead",
    color: "#6366f1",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconColor: "text-indigo-500",
    desc: "Instant personalized reply",
  },
  {
    id: "meeting",
    icon: Calendar,
    label: "Meeting Booked",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconColor: "text-emerald-500",
    desc: "Auto-scheduled in seconds",
  },
  {
    id: "revenue",
    icon: TrendingUp,
    label: "Revenue Closed",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconColor: "text-amber-500",
    desc: "Deal won automatically",
  },
];

const AnimatedGraph = () => {
  const points = [10, 18, 14, 22, 19, 35, 45, 40, 58, 72, 68, 90];
  const max = 100;
  const width = 280;
  const height = 100;
  const svgPoints = points
    .map((p, i) => `${(i / (points.length - 1)) * width},${height - (p / max) * height}`)
    .join(" ");

  return (
    <div className="relative w-full mt-4">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Revenue Pipeline</div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-20 overflow-visible">
        <defs>
          <linearGradient id="graphGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Fill area */}
        <motion.polygon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          points={`0,${height} ${svgPoints} ${width},${height}`}
          fill="url(#fillGrad)"
        />
        {/* Line */}
        <motion.polyline
          points={svgPoints}
          fill="none"
          stroke="url(#graphGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          style={{ pathLength: 1 }}
        />
        {/* End dot */}
        <motion.circle
          cx={width}
          cy={height - (points[points.length - 1] / max) * height}
          r="4"
          fill="#10b981"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        />
      </svg>
      <div className="flex items-center gap-1.5 mt-1">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] text-gray-500">+340% revenue after LeadAI</span>
      </div>
    </div>
  );
};

const WhyThisMatters = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [visiblePains, setVisiblePains] = useState([]);
  const [isRoiOpen, setIsRoiOpen] = useState(false);
  const [leads, setLeads] = useState(200);
  const [dealSize, setDealSize] = useState(50000);
  const [responseTime, setResponseTime] = useState(4);
  
  const intervalRef = useRef(null);

  // Animate pain points appearing one by one
  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < painPoints.length) {
        setVisiblePains((prev) => [...prev, idx]);
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 600);
    return () => clearInterval(timer);
  }, []);

  // Cycle stages
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2200);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#03030a] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-500/3 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/3 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 mb-5"
            >
              <AlertCircle className="w-3 h-3 text-red-400" />
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">WHY THIS MATTERS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-poppins font-black text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight leading-[1.05] mb-4"
            >
              Slow Responses <br />
              <span className="text-red-500">Cost Revenue.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md"
            >
              Every second without a reply is a second your competitor gains ground. The problem isn't the team — it's the system.
            </motion.p>

            {/* Pain points */}
            <div className="space-y-3 mb-10">
              {painPoints.map((pain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={visiblePains.includes(i) ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-snug">{pain}</p>
                </motion.div>
              ))}
            </div>

            {/* Resolution & Calculator Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-3 px-5 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-2xl w-full sm:w-fit font-bold text-sm cursor-pointer hover:bg-slate-800 dark:hover:bg-gray-100 transition-all shadow-sm justify-center"
              >
                <Zap className="w-4 h-4 text-[#33bbcf] dark:text-[#1d9fb0]" />
                <span>LeadAI fixes all of it.</span>
                <ArrowRight className="w-4 h-4 text-[#33bbcf] dark:text-[#1d9fb0]" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                onClick={() => setIsRoiOpen(true)}
                className="flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 rounded-2xl w-full sm:w-fit text-gray-900 dark:text-white font-bold text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm justify-center"
              >
                <Calculator className="w-4 h-4 text-cyan-500 dark:text-cyan-400 animate-pulse" />
                <span>Calculate Your Loss</span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT: Animated lifecycle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#080812]/40 border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
          >
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">Live Lead Lifecycle</div>

            {/* Stage cards */}
            <div className="space-y-3 mb-6">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                const isActive = i === activeStage;
                const isPast = i < activeStage;
                return (
                  <motion.div
                    key={stage.id}
                    animate={{
                      opacity: isPast ? 0.5 : 1,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-4 p-3.5 rounded-xl border transition-all ${
                      isActive
                        ? `${stage.bg} dark:bg-indigo-950/20 ${stage.border} dark:border-indigo-500/30 shadow-sm`
                        : "bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-transparent"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? stage.bg + " dark:bg-indigo-900/30" : "bg-white dark:bg-black/30"
                      } border ${isActive ? stage.border : "border-gray-200 dark:border-white/10"}`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? stage.iconColor : "text-gray-400"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-600"}`}>
                        {stage.label}
                      </p>
                      <p className={`text-[11px] ${isActive ? "text-gray-500 dark:text-gray-400" : "text-gray-300 dark:text-gray-700"}`}>
                        {stage.desc}
                      </p>
                    </div>
                    {isPast && (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {isActive && (
                      <motion.div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: stage.color }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Revenue graph */}
            <div className="border-t border-gray-100 dark:border-white/5 pt-5">
              <AnimatedGraph />
            </div>

            {/* Bottom metric */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Avg Response", val: "< 2s" },
                { label: "Leads Saved", val: "94%" },
                { label: "Revenue ↑", val: "3.4x" },
              ].map((m) => (
                <div key={m.label} className="bg-gray-50 dark:bg-white/5 rounded-xl p-2.5 text-center border border-gray-100 dark:border-white/5">
                  <p className="text-sm font-black text-gray-900 dark:text-white">{m.val}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ROI Calculator Modal Popup */}
      <AnimatePresence>
        {isRoiOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRoiOpen(false)}
              className="fixed inset-0 bg-gray-900/60 dark:bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-white dark:bg-[#0c0c20] border border-gray-200 dark:border-white/10 rounded-3xl p-6 relative shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-500 animate-pulse" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-poppins">Revenue Loss Calculator</h3>
                </div>
                <button
                  onClick={() => setIsRoiOpen(false)}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:border-red-500/50 hover:bg-gray-100 dark:bg-white/5 transition-all cursor-pointer focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Calculator Inputs */}
              <div className="space-y-5">
                {/* Leads Slider */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="text-xs font-bold text-gray-500 uppercase font-mono tracking-wider">Monthly Website Leads</label>
                    <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">{leads} leads</span>
                  </div>
                  <input
                    type="range"
                    min="10" max="2000" step="10"
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* Deal Value Slider */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="text-xs font-bold text-gray-500 uppercase font-mono tracking-wider">Average Deal Value</label>
                    <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">₹{dealSize.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="5000" max="500000" step="5000"
                    value={dealSize}
                    onChange={(e) => setDealSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* Response Time Dropdown */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="text-xs font-bold text-gray-500 uppercase font-mono tracking-wider">Current Response Time</label>
                    <span className="text-sm font-bold text-red-500 font-mono">
                      {responseTime === 1 ? "1 hour" : `${responseTime} hours`}
                    </span>
                  </div>
                  <select
                    value={responseTime}
                    onChange={(e) => setResponseTime(Number(e.target.value))}
                    className="w-full bg-gray-50 dark:bg-[#15152a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-cyan-500 cursor-pointer font-medium"
                  >
                    <option value="1">Under 1 hour (~5% conversion)</option>
                    <option value="4">4 hours (~1.5% conversion)</option>
                    <option value="12">12 hours (~0.5% conversion)</option>
                    <option value="24">24 hours (~0.2% conversion)</option>
                  </select>
                </div>
              </div>

              {/* Results Block */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 space-y-4">
                {/* Monthly Revenue Lost (Red) */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase font-mono tracking-wider mb-1 font-poppins">Monthly Loss Incurred</p>
                    <p className="text-[10px] text-red-500/70">Revenue lost to slow response times</p>
                  </div>
                  <p className="text-xl font-bold text-red-500 font-mono">
                    -₹{Math.round(leads * dealSize * (0.10 - Math.max(0.10 * Math.exp(-0.06 * responseTime), 0.002))).toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Monthly Revenue Recovered (Green) */}
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono tracking-wider mb-1 font-poppins">Recovered by LeadAI</p>
                    <p className="text-[10px] text-emerald-500/70">With instant response & qualification</p>
                  </div>
                  <p className="text-xl font-bold text-emerald-500 font-mono">
                    +₹{Math.round(leads * dealSize * (0.10 - Math.max(0.10 * Math.exp(-0.06 * responseTime), 0.002)) * 0.9).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsRoiOpen(false);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-cyan-500 dark:text-cyan-600" />
                  <span className="font-poppins">Claim Your Recovered Revenue</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyThisMatters;
