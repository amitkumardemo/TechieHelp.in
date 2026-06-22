import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, XCircle, AlertCircle } from "lucide-react";

// Micro-animated checkmark icon using SVG path drawing
const CheckIcon = ({ animate }) => (
  <svg
    className="w-5 h-5 text-emerald-500 mr-3 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.path
      d="M20 6L9 17L4 12"
      initial={{ pathLength: 0 }}
      animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

// Micro-animated crossmark icon using SVG path drawing
const CrossIcon = ({ animate }) => (
  <svg
    className="w-5 h-5 text-rose-500/80 mr-3 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.path
      d="M18 6L6 18M6 6l12 12"
      initial={{ pathLength: 0 }}
      animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

// Smooth custom counting hook/component using requestAnimationFrame with easeOut
const AnimatedCounter = ({ value, duration = 1.5, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp = null;
    const endValue = parseFloat(value);
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Easing out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * endValue;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, inView]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

const BeforeAfterTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // 7 paired comparison rows mapped logically
  const comparisonRows = [
    {
      left: "Fragmented tools",
      right: "One platform"
    },
    {
      left: "Manual follow-ups",
      right: "CRM automation"
    },
    {
      left: "No memory of previous interactions",
      right: "AI Inbox with memory"
    },
    {
      left: "Multiple subscriptions & high overhead",
      right: "Website knowledge engine"
    },
    {
      left: "Slow response times",
      right: "Voice AI calling"
    },
    {
      left: "Generic email replies",
      right: "Personalized conversations"
    },
    {
      left: "Data silos & manual updates",
      right: "Revenue analytics"
    }
  ];

  // Stats Grid data
  const statsData = [
    {
      label: "Response Time",
      competitorVal: "Hours",
      leadAIVal: <AnimatedCounter value={1.2} decimals={1} suffix=" Seconds" />
    },
    {
      label: "Customer Context",
      competitorVal: "Fragmented",
      leadAIVal: "Unified Memory"
    },
    {
      label: "Tools Needed",
      competitorVal: "5–10",
      leadAIVal: <AnimatedCounter value={1} decimals={0} suffix=" Platform" />
    },
    {
      label: "Operations",
      competitorVal: "Manual",
      leadAIVal: "Autonomous"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-28 relative z-10 px-4 sm:px-6 bg-slate-50/40 dark:bg-[#040814]/30 overflow-hidden border-t border-slate-100 dark:border-slate-900"
    >
      {/* Stripe-like Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Radial soft lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-emerald-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] block mb-3"
          >
            WHY BUSINESSES SWITCH
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Traditional Tools <span className="text-slate-300 dark:text-slate-600 font-light">vs</span> <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">TechieHelp LeadAI</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal leading-relaxed"
          >
            See why businesses are moving from disconnected tools and manual workflows to an intelligent AI Revenue Platform.
          </motion.p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="relative max-w-5xl mx-auto">
          {/* Centered vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-slate-200/80 dark:via-slate-800/40 to-transparent -translate-x-1/2 z-10 pointer-events-none" />

          {/* Centered VS badge on desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] items-center justify-center z-20 pointer-events-none">
            <span className="font-poppins font-bold text-xs text-slate-400 dark:text-slate-500 tracking-wider">VS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            
            {/* LEFT CARD - Traditional Tools & Competitors */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group rounded-3xl p-6 sm:p-8 bg-slate-100/60 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle red outline glow on card hover */}
              <div className="absolute inset-0 border border-red-500/10 dark:border-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/50 dark:border-slate-800/40">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                      Traditional Tools & Competitors
                    </h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                      Manual & Fragmented
                    </p>
                  </div>
                  <div className="self-start sm:self-center px-3 py-1 text-xs font-semibold rounded-full bg-rose-50 text-rose-600 border border-rose-100 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30">
                    Legacy Operations
                  </div>
                </div>

                {/* Rows */}
                <div className="space-y-1">
                  {comparisonRows.map((row, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                        hoveredRow === idx 
                          ? "bg-rose-50/50 dark:bg-rose-950/10 translate-x-1" 
                          : "bg-transparent"
                      }`}
                    >
                      <CrossIcon animate={isSectionInView} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        hoveredRow === idx 
                          ? "text-rose-700 dark:text-rose-300 font-semibold" 
                          : "text-slate-600 dark:text-slate-400"
                      }`}>
                        {row.left}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile/Tablet VS divider */}
            <div className="lg:hidden flex items-center justify-center my-2">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-center">
                <span className="font-poppins font-bold text-xs text-slate-400 dark:text-slate-500 tracking-wider">VS</span>
              </div>
            </div>

            {/* RIGHT CARD - TechieHelp LeadAI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/50 border border-blue-500/20 dark:border-blue-500/10 shadow-[0_20px_50px_rgba(59,130,246,0.04)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Glowing Border/Background Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur-[4px] opacity-10 group-hover:opacity-20 transition duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-[22px] -z-10" />

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent flex items-center gap-2">
                      TechieHelp LeadAI
                      <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                    </h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                      Unified & Autonomous
                    </p>
                  </div>
                  <div className="self-start sm:self-center px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30">
                    AI Revenue Platform
                  </div>
                </div>

                {/* Rows */}
                <div className="space-y-1">
                  {comparisonRows.map((row, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                        hoveredRow === idx 
                          ? "bg-emerald-50/50 dark:bg-emerald-950/10 -translate-x-1" 
                          : "bg-transparent"
                      }`}
                    >
                      <CheckIcon animate={isSectionInView} />
                      <span className={`text-sm font-semibold transition-colors duration-300 ${
                        hoveredRow === idx 
                          ? "text-emerald-700 dark:text-emerald-300 font-bold" 
                          : "text-slate-800 dark:text-slate-200"
                      }`}>
                        {row.right}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM STATS GRID */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Performance Comparison
            </h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white/70 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/10"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30 dark:from-blue-950/5 dark:to-emerald-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-4">
                  {stat.label}
                </span>

                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Competitor Col */}
                  <div className="border-r border-slate-100 dark:border-slate-800/60 pr-2">
                    <span className="text-[9px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider block mb-1">
                      Competitors
                    </span>
                    <span className="text-base font-semibold text-slate-500 dark:text-slate-400 block truncate">
                      {stat.competitorVal}
                    </span>
                  </div>

                  {/* LeadAI Col */}
                  <div className="pl-2">
                    <span className="text-[9px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                      LeadAI
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent block truncate">
                      {stat.leadAIVal}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Goal message - Why use 5 different tools when TechieHelp combines everything? */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm italic">
            Why manage 5 disconnected legacy tools when TechieHelp consolidates your entire sales stack into a single autonomous engine?
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BeforeAfterTable;
