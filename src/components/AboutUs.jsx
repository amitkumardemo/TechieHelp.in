import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Workflow,
  CheckCircle,
  Globe,
  Award,
  Zap,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  Check,
  Briefcase,
  Layers,
  Activity,
  UserCheck,
  Shield,
  Lightbulb,
  CheckCircle2,
  DollarSign
} from "lucide-react";

import AmitPhoto from "../assets/AmitPhoto.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Live activity feed simulator for Animated Hero Visual
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);
  const heroActivities = [
    { title: "Lead Qualified", desc: "AI Lead Engine graded a new B2B prospect as HOT ", node: "lead" },
    { title: "AI Call Completed", desc: "AI Phone Agent finished BANT qualification call in under 45s 📞", node: "call" },
    { title: "Workflow Triggered", desc: "AI automated Sync updated ClickUp & Google Sheets ⚡", node: "workflow" },
    { title: "CRM Updated", desc: "Lead record synced with HubSpot instantly 📈", node: "dashboard" },
    { title: "Meeting Scheduled", desc: "Consultation booked automatically on Amit's Google Calendar 🗓️", node: "call" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveActivityIdx((prev) => (prev + 1) % heroActivities.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [heroActivities.length]);

  // 2. Global impact map sidebar state (active pin details)
  const [activePin, setActivePin] = useState(0);
  const mapPins = [
    { name: "India", cities: "Jodhpur (HQ) & Jaipur", service: "AI Calling & Lead Engines" },
    { name: "USA", cities: "New York & California", service: "Operations Automation & SaaS" },
    { name: "UAE", cities: "Dubai", service: "Real Estate AI Calling Systems" },
    { name: "Japan", cities: "Tokyo", service: "Local Business Automations" },
    { name: "Brazil", cities: "São Paulo", service: "Customer Support Workflow Sync" },
    { name: "Nigeria", cities: "Lagos", service: "E-Commerce Invoicing Systems" },
    { name: "Kenya", cities: "Nairobi", service: "CRM Status Automations" },
    { name: "Sri Lanka", cities: "Colombo", service: "Educational Admissions Calling" }
  ];

  // 3. How We Work step state
  const [activeWorkStep, setActiveWorkStep] = useState(0);
  const workSteps = [
    { step: "Step 1", title: "Business Discovery", desc: "We audit your manual workflows, spreadsheet bottlenecks, and software stack connections." },
    { step: "Step 2", title: "AI Architecture Design", desc: "We design the custom system architecture, BANT decision paths, and script hooks." },
    { step: "Step 3", title: "Development & Integration", desc: "We connect systems, code APIs, train custom voice engines, and integrate databases." },
    { step: "Step 4", title: "Deployment", desc: "Dry-run testing for response latency, precision, and webhook sync reliability." },
    { step: "Step 5", title: "Optimization", desc: "Continuous script tuning and execution logs monitoring to improve conversion outcomes." }
  ];

  // Auto-progress process stepper
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkStep((prev) => (prev + 1) % workSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [workSteps.length]);

  return (
    <div className="bg-slate-50 dark:bg-[#030014] min-h-screen text-slate-800 dark:text-gray-300 font-sans selection:bg-purple-500/30 pt-28 pb-20 overflow-hidden relative transition-colors duration-300">
      <Helmet>
        <title>About Us: Building the Future AI Workforce | TechieHelp</title>
        <meta name="description" content="TechieHelp is an AI-first company building the future workforce. We help businesses deploy custom AI employees that automate operations, qualify leads, and run 24/7." />
      </Helmet>

      {/* Decorative Light Radial Glows - Dynamic Opacities for Light vs Dark Modes */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-400/10 dark:bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-blue-400/10 dark:bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-pink-400/10 dark:bg-pink-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-8 font-mono">
          <a href="/" className="hover:text-[#33bbcf] transition-colors">Home</a>
          <span className="text-[#33bbcf]/60 font-bold">/</span>
          <span className="text-slate-900 dark:text-white font-medium bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.1)]">About Us</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[78vh] relative">
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 dark:bg-gradient-to-r dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-[#33bbcf] animate-pulse" />
              <span>Building AI Employees For Modern Businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Building The Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:bg-cyan-gradient font-bold">
                Workforce With AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl border-l-2 border-purple-500/30 pl-4 py-1.5 bg-gradient-to-r from-purple-500/5 to-transparent font-medium"
            >
              TechieHelp is an AI-first company helping businesses automate lead generation, customer communication, workflow operations, and business processes using intelligent AI systems.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <a
                href="#what-we-build"
                className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-600 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                Explore AI Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-950 dark:text-white border border-slate-200 dark:border-white/10 hover:border-purple-500/60 shadow-md backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
              >
                Book Strategy Call
              </a>
              <a
                href="/project-portfolio"
                className="px-6 py-4 rounded-xl font-semibold text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:text-white transition-all flex items-center gap-1 group"
              >
                View Portfolio <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* ANIMATED HERO VISUAL */}
          <div className="lg:col-span-5 w-full relative">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 shadow-xl backdrop-blur-xl flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-[#33bbcf]">TechieHelp AI Ecosystem</span>
              </div>

              {/* Hub-and-Spoke Interactive Network Grid */}
              <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto z-10">

                {/* SVG Connections Radiating from Center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="activePathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="glow-path">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Adaptive Path Grays */}
                  <line x1="50%" y1="50%" x2="22%" y2="22%" stroke="currentColor" className="text-slate-200 dark:text-purple-900/20" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="22%" stroke="currentColor" className="text-slate-200 dark:text-purple-900/20" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="22%" y2="78%" stroke="currentColor" className="text-slate-200 dark:text-purple-900/20" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="78%" stroke="currentColor" className="text-slate-200 dark:text-purple-900/20" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Active Dynamic Routing Indicators */}
                  {heroActivities[activeActivityIdx].node === "lead" && (
                    <motion.line x1="50%" y1="50%" x2="22%" y2="22%" stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)" strokeDasharray="10 6" animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
                  )}
                  {heroActivities[activeActivityIdx].node === "call" && (
                    <motion.line x1="50%" y1="50%" x2="78%" y2="22%" stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)" strokeDasharray="10 6" animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
                  )}
                  {heroActivities[activeActivityIdx].node === "workflow" && (
                    <motion.line x1="50%" y1="50%" x2="22%" y2="78%" stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)" strokeDasharray="10 6" animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
                  )}
                  {heroActivities[activeActivityIdx].node === "dashboard" && (
                    <motion.line x1="50%" y1="50%" x2="78%" y2="78%" stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)" strokeDasharray="10 6" animate={{ strokeDashoffset: [100, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
                  )}
                </svg>

                {/* Central Hub Orb */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-0.5 shadow-md flex items-center justify-center animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-50 dark:bg-black/95 flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-cyan-600 dark:text-[#33bbcf] animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="text-[9px] font-bold text-slate-900 dark:text-white uppercase tracking-widest mt-1">Core AI</span>
                  </div>
                </div>

                {/* Top Left Node */}
                <div className={`absolute top-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "lead" ? "bg-purple-600/15 border-purple-500 shadow-md scale-[1.04]" : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-70 dark:opacity-50"}`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2"><BrainCircuit className="w-4.5 h-4.5 text-cyan-600 dark:text-[#33bbcf]" /></div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI Lead Engine</h4>
                  <span className="text-[9px] text-slate-500 font-mono mt-0.5">Autopilot Qualifier</span>
                </div>

                {/* Top Right Node */}
                <div className={`absolute top-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "call" ? "bg-purple-600/15 border-purple-500 shadow-md scale-[1.04]" : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-70 dark:opacity-50"}`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2"><Bot className="w-4.5 h-4.5 text-cyan-600 dark:text-[#33bbcf]" /></div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI Calling Agents</h4>
                  <span className="text-[9px] text-slate-500 font-mono mt-0.5">Voice Dialer</span>
                </div>

                {/* Bottom Left Node */}
                <div className={`absolute bottom-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "workflow" ? "bg-purple-600/15 border-purple-500 shadow-md scale-[1.04]" : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-70 dark:opacity-50"}`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2"><Workflow className="w-4.5 h-4.5 text-cyan-600 dark:text-[#33bbcf]" /></div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Workflow Automation</h4>
                  <span className="text-[9px] text-slate-500 font-mono mt-0.5">Operations Sync</span>
                </div>

                {/* Bottom Right Node */}
                <div className={`absolute bottom-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "dashboard" ? "bg-purple-600/15 border-purple-500 shadow-md scale-[1.04]" : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-70 dark:opacity-50"}`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2"><Activity className="w-4.5 h-4.5 text-cyan-600 dark:text-[#33bbcf]" /></div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">LeadAI Dashboard</h4>
                  <span className="text-[9px] text-slate-500 font-mono mt-0.5">Analytics Control</span>
                </div>

              </div>

              {/* Terminal Console */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-cyan-600 dark:text-[#33bbcf]">Live Activity Simulator</span>
                  </div>
                </div>

                <div className="bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-inner backdrop-blur-md relative overflow-hidden min-h-[96px] flex flex-col justify-center">
                  <div className="absolute top-2 right-4 flex items-center gap-4 text-[9px] font-mono text-slate-400 dark:text-gray-500">
                    <span>SYS: ACTIVE</span>
                    <span>LATENCY: 42ms</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeActivityIdx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          ✓ {heroActivities[activeActivityIdx].title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 dark:text-gray-600">
                          [{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-800 dark:text-gray-300 font-medium font-mono leading-relaxed pl-1">
                        <span className="text-cyan-600 dark:text-[#33bbcf] font-bold mr-2">&gt;</span>
                        {heroActivities[activeActivityIdx].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Scroll Indicator */}
          <div
            className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer z-10 opacity-60 hover:opacity-100 hover:text-cyan-600 dark:hover:text-[#33bbcf] text-slate-400 dark:text-gray-500 transition-all"
            onClick={() => {
              document.getElementById("what-we-build")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-gray-600 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-sm"
              />
            </div>
          </div>

        </section>

        {/* GLOBAL TRUST, SCALE & STARTUP MILESTONES */}
        <section className="mb-28 border-t border-slate-200 dark:border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-[#33bbcf] font-bold block">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Global Trust, Scale & Startup Milestones</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              From startup recognition to global reach, TechieHelp is building AI systems trusted by businesses, learners, and organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards using explicit white or dark variants instead of hardcoded raw transparent elements */}
            {[
              { id: "M1", icon: "🌐", title: "Global Reach", metric: "16+ Countries", desc: "Building AI solutions across: India, USA, UAE, Japan, Brazil, Nigeria, Kenya, Sri Lanka, Ghana, Egypt, Bangladesh, Cameroon, Rwanda, Ethiopia, Iran." },
              { id: "M2", icon: "🚀", title: "Proven Delivery", metric: "100+ Projects", desc: "Deploying custom AI lead systems, voice calling agents, operations dashboards, web applications, and complete business automation architectures." },
              { id: "M3", icon: "📜", title: "Quality Commitment", metric: "ISO 9001 Certified", desc: "Committed to absolute quality management, client asset safety, and verified operational delivery excellence." },
              { id: "M4", icon: "🏆", title: "Rajasthan Startup Summit", metric: "Selected Startup 2026", desc: "Recognized and selected among promising startups during the official Rajasthan Startup Summit 2026." },
              { id: "M5", icon: "🎪", title: "Armenia Summit", metric: "Armenia Summit 2026", desc: "Selected internationally for the global startup cohort representing at Seaside Startup Summit Armenia 2026." },
              { id: "M6", icon: "💎", title: "Startup of the Year", metric: "JIET Universe Jodhpur", desc: "Awarded for excellence in AI innovation, entrepreneurship, and ecosystem contribution." }
            ].map((milestone) => (
              <div key={milestone.id} className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/75 dark:bg-black/40 shadow-sm relative flex flex-col group hover:border-purple-500/40 transition-colors">
                <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                  <Check className="w-3 h-3" /> Verified
                </span>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 text-cyan-600 dark:text-[#33bbcf] flex items-center justify-center font-bold text-lg">{milestone.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{milestone.title}</h3>
                  <h4 className="text-2xl font-extrabold text-cyan-600 dark:text-[#33bbcf]">{milestone.metric}</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="mb-28 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-[#33bbcf] font-bold block">Why We Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why TechieHelp Was Started
              </h2>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm">
                Most businesses lose opportunities because operations depend entirely on people. Manual follow-ups, slow replies, spreadsheet chaos, and approval bottlenecks stall growth.
              </p>
              <div className="space-y-3.5 pt-2">
                {["Slow responses lose prospects", "Missed follow-ups lose revenue", "Manual bottlenecks limit scalability"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-slate-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 p-6 rounded-2xl">
                <p className="text-base text-slate-800 dark:text-gray-300 leading-relaxed">
                  TechieHelp was founded in <strong className="text-slate-950 dark:text-white font-bold">2023 in Jodhpur</strong> to solve these challenges using AI.
                </p>
                <p className="text-base text-slate-800 dark:text-gray-300 leading-relaxed mt-4">
                  We believe businesses should not depend on manual operations to grow. Instead, businesses should operate with intelligent AI systems that work continuously.
                </p>
                <p className="text-lg text-purple-700 dark:text-purple-300 font-semibold mt-6 border-l-4 border-purple-500 pl-4 py-1">
                  We design custom AI Employees that capture leads, qualify customers, and run workflows 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STARTUP TIMELINE HEADER */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-[#33bbcf] font-bold block">Onboarding roadmap</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Startup Timeline</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              Follow our growth trajectory from our Jodhpur foundation to the global AI workforce platform of the future:
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;