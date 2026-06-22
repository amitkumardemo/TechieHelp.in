import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, MessageCircle, MessageSquare, Phone, 
  Database, CreditCard, FileSpreadsheet, Sparkles 
} from "lucide-react";

const IntegrationStack = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Integrations data
  const integrations = [
    {
      name: "Gmail",
      desc: "Auto-reply & analyze",
      icon: <Mail className="w-6 h-6 text-rose-500" />,
      color: "#f43f5e", // Rose
      glowClass: "shadow-[0_0_20px_rgba(244,63,94,0.3)] border-rose-500/30 dark:border-rose-500/20",
      xPos: "left-[12%]",
      yPos: "top-[68%]"
    },
    {
      name: "WhatsApp",
      desc: "Instant messaging",
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      color: "#10b981", // Emerald
      glowClass: "shadow-[0_0_20px_rgba(16,185,129,0.3)] border-emerald-500/30 dark:border-emerald-500/20",
      xPos: "left-[22%]",
      yPos: "top-[45%]"
    },
    {
      name: "Slack",
      desc: "Team alerts & logs",
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      color: "#a855f7", // Purple
      glowClass: "shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-500/30 dark:border-purple-500/20",
      xPos: "left-[35%]",
      yPos: "top-[27%]"
    },
    {
      name: "Vapi Voice",
      desc: "Voice AI calling",
      icon: <Phone className="w-6 h-6 text-indigo-500" />,
      color: "#6366f1", // Indigo
      glowClass: "shadow-[0_0_20px_rgba(99,102,241,0.3)] border-indigo-500/30 dark:border-indigo-500/20",
      xPos: "left-[50%] -translate-x-1/2",
      yPos: "top-[19%]"
    },
    {
      name: "HubSpot",
      desc: "CRM lead pipeline sync",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      color: "#f97316", // Orange
      glowClass: "shadow-[0_0_20px_rgba(249,115,22,0.3)] border-orange-500/30 dark:border-orange-500/20",
      xPos: "left-[65%]",
      yPos: "top-[27%]"
    },
    {
      name: "Stripe",
      desc: "Invoicing & payments",
      icon: <CreditCard className="w-6 h-6 text-indigo-400" />,
      color: "#4f46e5", // Indigo-600
      glowClass: "shadow-[0_0_20px_rgba(79,70,229,0.3)] border-indigo-500/30 dark:border-indigo-500/20",
      xPos: "left-[78%]",
      yPos: "top-[45%]"
    },
    {
      name: "Google Sheets",
      desc: "Live database tracking",
      icon: <FileSpreadsheet className="w-6 h-6 text-green-600" />,
      color: "#16a34a", // Green-600
      glowClass: "shadow-[0_0_20px_rgba(22,163,74,0.3)] border-green-500/30 dark:border-green-500/20",
      xPos: "left-[88%]",
      yPos: "top-[68%]"
    }
  ];

  // Determine current theme color for LeadAI Hub glow
  const currentGlowColor = hoveredNode !== null ? integrations[hoveredNode].color : "#33bbcf";

  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 bg-slate-50/30 dark:bg-[#02050c]/50 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* Local styles for laser path drawing and terminal animations */}
      <style>{`
        @keyframes laser-flow {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-laser {
          animation: laser-flow 2s linear infinite;
        }
        .animate-laser-fast {
          animation: laser-flow 0.8s linear infinite;
        }
      `}</style>

      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-[0.15em] uppercase">
              Seamless Integration
            </span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Connect Your <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">Existing Stack</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            LeadAI integrates natively with the tools you already use. No complex migrations, database rewrites, or API setups required.
          </p>
        </motion.div>

        {/* INTERACTIVE CONVERGENCE ARCH */}
        <div className="relative max-w-4xl mx-auto h-[250px] sm:h-[320px] lg:h-[420px] select-none">
          
          {/* SVG Connector Layer - Curved quadratic bezier paths */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            {/* Markers for arrowhead flow indicators */}
            <defs>
              <marker id="glow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 Z" fill={currentGlowColor} />
              </marker>
            </defs>

            {/* Path 0: Gmail (Left) -> Inward */}
            <path d="M 100 280 Q 200 350, 400 300" stroke={hoveredNode === 0 ? "rgba(244,63,94,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 0 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 100 280 Q 200 350, 400 300" stroke="#f43f5e" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 0 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 0 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 1: WhatsApp (Left) -> Inward */}
            <path d="M 180 190 Q 250 280, 400 300" stroke={hoveredNode === 1 ? "rgba(16,185,129,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 1 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 180 190 Q 250 280, 400 300" stroke="#10b981" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 1 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 1 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 2: Slack (Left) -> Inward */}
            <path d="M 280 120 Q 320 220, 400 300" stroke={hoveredNode === 2 ? "rgba(168,85,247,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 2 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 280 120 Q 320 220, 400 300" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 2 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 2 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 3: Vapi Voice (Top) -> Inward */}
            <path d="M 400 90 L 400 300" stroke={hoveredNode === 3 ? "rgba(99,102,241,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 3 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 400 90 L 400 300" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 3 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 3 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 4: HubSpot (Right) -> Outward */}
            <path d="M 400 300 Q 480 220, 520 120" stroke={hoveredNode === 4 ? "rgba(249,115,22,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 4 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 400 300 Q 480 220, 520 120" stroke="#f97316" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 4 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 4 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 5: Stripe (Right) -> Outward */}
            <path d="M 400 300 Q 550 280, 620 190" stroke={hoveredNode === 5 ? "rgba(79,70,229,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 5 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 400 300 Q 550 280, 620 190" stroke="#4f46e5" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 5 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 5 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />

            {/* Path 6: Google Sheets (Right) -> Outward */}
            <path d="M 400 300 Q 600 350, 700 280" stroke={hoveredNode === 6 ? "rgba(22,163,74,0.3)" : "rgba(226,232,240,0.4)"} strokeWidth={hoveredNode === 6 ? "2" : "1"} className="dark:stroke-slate-800/40 transition-all duration-300" fill="none" />
            <path d="M 400 300 Q 600 350, 700 280" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 14" strokeDashoffset="0" className={hoveredNode === 6 ? "animate-laser-fast" : "animate-laser"} opacity={hoveredNode === 6 ? "1" : "0.2"} markerEnd="url(#glow-arrow)" fill="none" />
          </svg>

          {/* CENTRAL LEADAI HUB */}
          <div 
            className="absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center pointer-events-none"
          >
            {/* Dynamic glowing ring matching current hovered brand color */}
            <div 
              className="absolute inset-0 rounded-full blur-[25px] opacity-20 dark:opacity-35 transition-all duration-500" 
              style={{ backgroundColor: currentGlowColor }}
            />
            
            {/* Inner Hub Ring */}
            <div 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 bg-white/95 dark:bg-slate-950/95 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-500 backdrop-blur-md"
              style={{ borderColor: `${currentGlowColor}30` }}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 animate-pulse" style={{ color: currentGlowColor }} />
              <span className="font-poppins font-bold text-[10px] sm:text-xs text-slate-800 dark:text-white mt-1">LeadAI Hub</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Syncing</span>
              </div>
            </div>
          </div>

          {/* INTEGRATION NODES */}
          {integrations.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredNode(idx)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute ${item.xPos} ${item.yPos} z-20`}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 hover:shadow-lg relative group ${
                  hoveredNode === idx ? item.glowClass : ""
                }`}
              >
                {item.icon}

                {/* Node Label Tooltip - White background, black text name */}
                <div className="absolute bottom-full mb-2.5 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)] translate-y-1 group-hover:translate-y-0 z-30">
                  {item.name}
                </div>
              </motion.div>
            </div>
          ))}

        </div>

        {/* Goal message */}
        <div className="text-center mt-12">
          <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm italic">
            Zero development overhead. Our pre-built connectors allow LeadAI to synchronize pipelines completely out of the box.
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntegrationStack;
