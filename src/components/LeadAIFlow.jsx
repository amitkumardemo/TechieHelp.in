import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Globe, Mail, PhoneCall, Calendar, 
  Database, MessageSquare, FileSpreadsheet, TrendingUp, 
  Cpu, Workflow, Layers, ArrowRight, ShieldCheck, Landmark, Heart, LifeBuoy
} from "lucide-react";

const LeadAIFlow = () => {
  const [hoveredInput, setHoveredInput] = useState(null);
  const [hoveredOutput, setHoveredOutput] = useState(null);

  // Left Column: Business & Operations
  const inputs = [
    { id: "lead-gen", label: "Lead Generation", desc: "Automated capture", icon: <Globe className="w-5 h-5 text-indigo-500" /> },
    { id: "support", label: "Support", desc: "24/7 customer help", icon: <LifeBuoy className="w-5 h-5 text-sky-500" /> },
    { id: "billing", label: "Billing", desc: "Invoice operations", icon: <Landmark className="w-5 h-5 text-purple-500" /> },
    { id: "calendar", label: "Calendar", desc: "Schedule demo slots", icon: <Calendar className="w-5 h-5 text-pink-500" /> },
    { id: "analytics", label: "Analytics", desc: "Revenue insights", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> }
  ];

  // Center Column: LeadAI Core Modules
  const centerModules = [
    { label: "AI Qualifier", icon: <Cpu className="w-3.5 h-3.5" />, desc: "Scoring & criteria" },
    { label: "Voice AI", icon: <PhoneCall className="w-3.5 h-3.5" />, desc: "Autonomous call agent" },
    { label: "Inbox Memory", icon: <Layers className="w-3.5 h-3.5" />, desc: "Unified database" },
    { label: "Sync Engine", icon: <Workflow className="w-3.5 h-3.5" />, desc: "Integration manager" }
  ];

  // Bottom Row: Connected System Objects
  const bottomObjects = [
    { label: "Website Forms", icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { label: "AI Inbox", icon: <Mail className="w-5 h-5 text-indigo-500" /> },
    { label: "Customer Memory", icon: <Layers className="w-5 h-5 text-purple-500" /> },
    { label: "Revenue Pipeline", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
    { label: "Voice AI", icon: <PhoneCall className="w-5 h-5 text-rose-500" /> }
  ];

  // Right Column: Integrations & Platforms (10 items laid out in a 5x2 grid)
  const outputs = [
    { id: "gmail", label: "Gmail", color: "text-rose-500", letter: "G", bgColor: "bg-rose-500/10" },
    { id: "whatsapp", label: "WhatsApp", color: "text-emerald-500", letter: "W", bgColor: "bg-emerald-500/10" },
    { id: "slack", label: "Slack", color: "text-purple-500", letter: "S", bgColor: "bg-purple-500/10" },
    { id: "hubspot", label: "HubSpot", color: "text-orange-500", letter: "H", bgColor: "bg-orange-500/10" },
    { id: "salesforce", label: "Salesforce", color: "text-sky-500", letter: "SF", bgColor: "bg-sky-500/10" },
    { id: "gemini", label: "Gemini", color: "text-indigo-500", letter: "✦", bgColor: "bg-indigo-500/10" },
    { id: "sheets", label: "Google Sheets", color: "text-green-600", letter: "Sh", bgColor: "bg-green-600/10" },
    { id: "vapi", label: "Vapi", color: "text-slate-800 dark:text-white", letter: "V", bgColor: "bg-slate-500/10" },
    { id: "stripe", label: "Stripe", color: "text-indigo-600", letter: "St", bgColor: "bg-indigo-600/10" },
    { id: "zoom", label: "Zoom", color: "text-blue-500", letter: "Z", bgColor: "bg-blue-500/10" }
  ];

  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 bg-white dark:bg-[#02050c] overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* Local stylesheet for SVG flow path animations */}
      <style>{`
        @keyframes flow-forward {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes flow-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-flow-line {
          animation: flow-forward 2.5s linear infinite;
        }
        .animate-flow-line-fast {
          animation: flow-forward 1.2s linear infinite;
        }
        .animate-flow-down {
          animation: flow-vertical 1.5s linear infinite;
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Glow Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/5 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-200/60 bg-slate-50 dark:bg-slate-900/40 dark:border-slate-800/60 mb-5"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em]">Ecosystem Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            How <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">LeadAI</span> Works
          </motion.h2>
        </div>

        {/* CONNECTIVITY DIAGRAM */}
        <div className="relative min-h-[600px] flex flex-col justify-center select-none">
          
          {/* SVG Connection Layer - Desktop Only */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <marker id="flow-arrow-in" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 Z" fill="#6366f1" />
              </marker>
              <marker id="flow-arrow-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 Z" fill="#10b981" />
              </marker>
            </defs>

            {/* Left Column (Inputs) -> Center Brain */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = 60 + i * 120;
              const isHovered = hoveredInput === i;
              return (
                <g key={`in-${i}`}>
                  <path d={`M 260 ${y} C 340 ${y}, 340 300, 410 300`} stroke={isHovered ? "#60a5fa" : "#e2e8f0"} strokeWidth={isHovered ? "2" : "1.2"} className="dark:stroke-slate-800/80 transition-all duration-300" fill="none" />
                  <path d={`M 260 ${y} C 340 ${y}, 340 300, 410 300`} stroke="#6366f1" strokeWidth="2" strokeDasharray="6 15" strokeDashoffset="0" className={isHovered ? "animate-flow-line-fast" : "animate-flow-line"} opacity={isHovered ? "1" : "0.35"} markerEnd="url(#flow-arrow-in)" fill="none" />
                </g>
              );
            })}

            {/* Center Brain -> Right Column (Outputs - 5 rows of 2 columns) */}
            {[0, 1, 2, 3, 4].map((row) => {
              const y = 60 + row * 120;
              // Path to Col 1 (HubSpot, Salesforce, Zoom etc)
              const isHoveredCol1 = hoveredOutput === row * 2;
              const isHoveredCol2 = hoveredOutput === row * 2 + 1;
              
              return (
                <g key={`out-${row}`}>
                  {/* Connect to Column 1 (x=730) */}
                  <path d={`M 590 300 C 660 300, 660 ${y}, 725 ${y}`} stroke={isHoveredCol1 ? "#34d399" : "#e2e8f0"} strokeWidth={isHoveredCol1 ? "2" : "1.2"} className="dark:stroke-slate-800/80 transition-all duration-300" fill="none" />
                  <path d={`M 590 300 C 660 300, 660 ${y}, 725 ${y}`} stroke="#10b981" strokeWidth="2" strokeDasharray="6 15" strokeDashoffset="0" className={isHoveredCol1 ? "animate-flow-line-fast" : "animate-flow-line"} opacity={isHoveredCol1 ? "1" : "0.35"} markerEnd="url(#flow-arrow-out)" fill="none" />

                  {/* Connect to Column 2 (x=855) */}
                  <path d={`M 590 300 C 680 300, 680 ${y}, 850 ${y}`} stroke={isHoveredCol2 ? "#34d399" : "#e2e8f0"} strokeWidth={isHoveredCol2 ? "2" : "1.2"} className="dark:stroke-slate-800/80 transition-all duration-300" fill="none" />
                  <path d={`M 590 300 C 680 300, 680 ${y}, 850 ${y}`} stroke="#10b981" strokeWidth="2" strokeDasharray="6 15" strokeDashoffset="0" className={isHoveredCol2 ? "animate-flow-line-fast" : "animate-flow-line"} opacity={isHoveredCol2 ? "1" : "0.35"} markerEnd="url(#flow-arrow-out)" fill="none" />
                </g>
              );
            })}
          </svg>

          {/* Three-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 items-center max-w-[1100px] mx-auto w-full z-10">
            
            {/* LEFT COLUMN: BUSINESS OPERATIONS */}
            <div className="h-auto lg:h-[600px] flex flex-col justify-between py-6 gap-4 lg:gap-0">
              <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">
                1. Operations & Functions
              </div>
              {inputs.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredInput(idx)}
                  onMouseLeave={() => setHoveredInput(null)}
                  className={`h-[92px] w-full lg:w-[250px] p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex items-center gap-3.5 relative group cursor-pointer`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {item.label}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-indigo-500 group-hover:animate-ping" />
                </motion.div>
              ))}
            </div>

            {/* CENTER COLUMN: THE CORE BRAIN */}
            <div className="h-auto lg:h-[600px] flex flex-col justify-center items-center py-6">
              
              <div className="hidden lg:block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                2. LeadAI Orchestrator
              </div>

              {/* Core Brain Hub */}
              <div className="relative w-44 h-44 flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-[25px] opacity-15 dark:opacity-25 animate-pulse" />
                <div className="absolute -inset-1 border border-dashed border-indigo-400/20 rounded-full animate-[spin_25s_linear_infinite]" />
                <div className="absolute -inset-4 border border-dashed border-emerald-400/10 rounded-full animate-[spin_18s_linear_infinite_reverse]" />

                <div className="relative w-40 h-40 rounded-full bg-white/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col items-center justify-center text-center p-4 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center shadow-md shadow-indigo-500/20 mb-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-poppins font-bold text-xs text-slate-800 dark:text-white tracking-wide">LeadAI Brain</span>
                  <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Core Engine</span>
                  <div className="flex items-center gap-1.5 mt-2 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/30">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[8px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">Sync Active</span>
                  </div>
                </div>
              </div>

              {/* Mobile stack flow line */}
              <div className="lg:hidden flex flex-col items-center my-6 gap-2">
                <div className="w-[2px] h-10 bg-indigo-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-indigo-400 animate-flow-down" />
                </div>
                <div className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-100 text-[9px] font-bold uppercase tracking-wider">
                  Processing Stack
                </div>
                <div className="w-[2px] h-10 bg-emerald-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-emerald-400 animate-flow-down" />
                </div>
              </div>

              {/* Capabilities Pills Grid */}
              <div className="mt-8 grid grid-cols-2 gap-2.5 w-[280px]">
                {centerModules.map((module, i) => (
                  <div 
                    key={i} 
                    className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex items-start gap-2"
                  >
                    <div className="p-1 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/20 text-indigo-500 dark:text-indigo-400 shrink-0">
                      {module.icon}
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-tight">{module.label}</div>
                      <div className="text-[8px] text-slate-400 dark:text-slate-500 mt-0.5 truncate">{module.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: INTEGRATION ECOSYSTEM */}
            <div className="h-auto lg:h-[600px] flex flex-col justify-between py-6 gap-4 lg:gap-0 lg:pl-10">
              <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-2 lg:mb-0">
                3. Integrations & Stack
              </div>

              {/* 5 Rows x 2 Columns Grid */}
              <div className="grid grid-cols-2 gap-3 w-full lg:w-[320px]">
                {outputs.map((item, idx) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredOutput(idx)}
                    onMouseLeave={() => setHoveredOutput(null)}
                    className={`h-[92px] p-3 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-emerald-500/30 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex items-center gap-3 relative group cursor-pointer`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0 font-bold text-xs ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                      {item.letter}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {item.label}
                      </h4>
                      <span className="text-[8px] text-slate-400 dark:text-slate-500 block uppercase tracking-wider mt-0.5">
                        Connected
                      </span>
                    </div>
                    <div className="absolute left-2 w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-emerald-500 group-hover:animate-ping lg:block hidden" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM CARDS / OBJECTS LIST */}
        <div className="mt-16 border-t border-slate-100 dark:border-slate-900 pt-16">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Automated Business Memory Layer
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {bottomObjects.map((obj, i) => (
              <div 
                key={i}
                className="p-3.5 px-6 rounded-2xl bg-white/70 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex items-center justify-center shrink-0">
                  {obj.icon}
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{obj.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadAIFlow;
