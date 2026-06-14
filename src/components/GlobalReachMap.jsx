import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Zap, Activity, ShieldCheck, CheckCircle, Mail, BarChart2 } from "lucide-react";
import styles from "../style";

const hq = { name: "India", flag: "🇮🇳", top: "45%", left: "70%" };

const countries = [
  { name: "USA", flag: "🇺🇸", top: "30%", left: "20%", projects: "34+", status: "Active" },
  { name: "Brazil", flag: "🇧🇷", top: "65%", left: "32%", projects: "12+", status: "Active" },
  { name: "Ghana", flag: "🇬🇭", top: "54%", left: "47%", projects: "5+", status: "Deploying" },
  { name: "Nigeria", flag: "🇳🇬", top: "53%", left: "49%", projects: "8+", status: "Active" },
  { name: "Cameroon", flag: "🇨🇲", top: "55%", left: "51%", projects: "3+", status: "Active" },
  { name: "Egypt", flag: "🇪🇬", top: "40%", left: "55%", projects: "7+", status: "Active" },
  { name: "Rwanda", flag: "🇷🇼", top: "58%", left: "56%", projects: "2+", status: "Active" },
  { name: "Kenya", flag: "🇰🇪", top: "57%", left: "58%", projects: "11+", status: "Active" },
  { name: "Ethiopia", flag: "🇪🇹", top: "53%", left: "59%", projects: "4+", status: "Active" },
  { name: "Qatar", flag: "🇶🇦", top: "43%", left: "61%", projects: "9+", status: "Active" },
  { name: "UAE", flag: "🇦🇪", top: "42%", left: "62%", projects: "22+", status: "Active" },
  { name: "Iran", flag: "🇮🇷", top: "38%", left: "63%", projects: "6+", status: "Active" },
  { name: "Sri Lanka", flag: "🇱🇰", top: "52%", left: "71%", projects: "14+", status: "Active" },
  { name: "Bangladesh", flag: "🇧🇩", top: "46%", left: "73%", projects: "18+", status: "Active" },
  { name: "Japan", flag: "🇯🇵", top: "35%", left: "85%", projects: "27+", status: "Active" },
];

const activities = [
  { text: "New Lead Qualified", country: "USA", flag: "🇺🇸", icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
  { text: "Workflow Executed", country: "Japan", flag: "🇯🇵", icon: <Activity className="w-4 h-4 text-blue-400" /> },
  { text: "Voice Agent Activated", country: "UAE", flag: "🇦🇪", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
  { text: "Email Automated", country: "Brazil", flag: "🇧🇷", icon: <Mail className="w-4 h-4 text-cyan-400" /> },
  { text: "Customer Onboarded", country: "India", flag: "🇮🇳", icon: <ShieldCheck className="w-4 h-4 text-purple-400" /> }
];

const GlobalReachMap = () => {
  const [activeFeed, setActiveFeed] = useState(0);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeed((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6 bg-white dark:bg-[#03050c] overflow-hidden transition-colors duration-300`}>
      <style>{`
        @keyframes flowAnimation {
          from { stroke-dashoffset: 34; }
          to { stroke-dashoffset: 0; }
        }
        .flow-line {
          animation: flowAnimation 1.5s linear infinite;
        }
      `}</style>

      {/* Background Enhancements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global AI Workforce Network
            </span>
          </div>
          <h2 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
            Enterprise Scale. <span className="text-cyan-400">Global Reach.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            TechieHelp AI Employees are actively helping businesses automate operations across multiple continents.
          </p>
        </motion.div>

        {/* The Network Dashboard Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#070a14] rounded-3xl border border-white/5 shadow-[0_0_80px_rgba(6,182,212,0.05)] overflow-hidden">

          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Real World Map Vector */}
          <div className="absolute inset-0 flex items-center justify-center p-8 opacity-30 pointer-events-none mix-blend-screen">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="w-full h-full object-contain invert"
            />
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {countries.map((c, i) => (
              <g key={i}>
                <motion.line
                  x1={hq.left} y1={hq.top}
                  x2={c.left} y2={c.top}
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
                <line
                  x1={c.left} y1={c.top}
                  x2={hq.left} y2={hq.top}
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeDasharray="4 30"
                  className="flow-line"
                  opacity="0.7"
                />
              </g>
            ))}
          </svg>

          {/* Centerpiece: India HQ */}
          <div
            className="absolute z-30 group cursor-pointer"
            style={{ top: hq.top, left: hq.left }}
            onMouseEnter={() => setHoveredCountry({ ...hq, projects: "HQ", status: "Active" })}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-16 h-16 border border-cyan-500/30 rounded-full animate-[spin_4s_linear_infinite]" />
              <div className="absolute w-24 h-24 border border-dashed border-blue-500/20 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
              <div className="absolute w-8 h-8 bg-cyan-500/20 rounded-full animate-ping opacity-60 pointer-events-none" />
              <span className="text-2xl sm:text-3xl drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] relative z-10" style={{ filter: 'drop-shadow(0px 0px 8px rgba(6, 182, 212, 1))' }}>
                {hq.flag}
              </span>

              <div className="absolute top-8 whitespace-nowrap bg-[#0c0c1a]/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <span className="text-cyan-400 font-bold text-xs">TechieHelp HQ</span>
              </div>
            </div>
          </div>

          {/* Country Nodes */}
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="absolute z-20 cursor-pointer group"
              style={{ top: country.top, left: country.left }}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-125 group-hover:z-40">
                <div className="absolute w-5 h-5 bg-blue-500/20 rounded-full animate-ping opacity-60 pointer-events-none" />
                <div className="absolute w-5 h-5 bg-blue-500/10 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.6)] pointer-events-none group-hover:shadow-[0_0_20px_rgba(6,182,212,0.9)]" />
                <span className="text-lg sm:text-xl relative z-10" style={{ filter: 'drop-shadow(0px 0px 4px rgba(6, 182, 212, 0.6))' }}>
                  {country.flag}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Interactive Hover Tooltip */}
          <AnimatePresence>
            {hoveredCountry && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute z-50 bg-[#0c0c1a]/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl min-w-[180px] pointer-events-none"
                style={{ top: `calc(${hoveredCountry.top} - 10px)`, left: `calc(${hoveredCountry.left} + 20px)` }}
              >
                <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <span className="text-2xl">{hoveredCountry.flag}</span>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{hoveredCountry.name}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Status</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> {hoveredCountry.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Projects</span>
                    <span className="text-white font-bold">{hoveredCountry.projects}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="text-gray-500">Node Type</span>
                    <span className="text-blue-400 font-mono">LeadAI Edge</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Metrics Panel (Top Left) */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex flex-col gap-3 z-30 hidden md:flex">
            {[
              { label: "Countries Served", val: "16+", icon: <Globe className="w-4 h-4 text-blue-400" /> },
              { label: "Projects Delivered", val: "100+", icon: <Activity className="w-4 h-4 text-green-400" /> },
              { label: "AI Operations", val: "24/7", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
              { label: "Automation Success", val: "95%", icon: <BarChart2 className="w-4 h-4 text-purple-400" /> }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 flex items-center gap-4 shadow-lg"
              >
                <div className="p-1.5 bg-white/5 rounded-md">
                  {metric.icon}
                </div>
                <div>
                  <h5 className="text-white font-black text-lg leading-none">{metric.val}</h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Real-Time Activity Feed Widget (Bottom Right) */}
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-30">
            <div className="bg-[#0c0c1a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl w-64">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Network Activity</span>
              </div>
              <div className="h-[40px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeed}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center gap-3"
                  >
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5 shrink-0">
                      {activities[activeFeed].icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xs">{activities[activeFeed].text}</span>
                      <span className="text-gray-500 text-[10px] flex items-center gap-1 mt-0.5">
                        {activities[activeFeed].flag} {activities[activeFeed].country}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed border-t border-gray-200 dark:border-white/10 pt-8">
            TechieHelp AI Employees operate across multiple countries, helping organizations automate lead generation, communication, workflows, and customer operations around the clock. <span className="text-gray-900 dark:text-white font-semibold">100K+ Automated Interactions Processed Daily.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalReachMap;
