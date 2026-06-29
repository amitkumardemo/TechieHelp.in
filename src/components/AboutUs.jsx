import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Workflow,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Activity,
  Lightbulb,
  Globe,
  Award,
  Zap,
  Layers,
  TrendingUp,
  Users
} from "lucide-react";

import AmitPhoto from "../assets/AmitPhoto.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Live activity feed simulator for Animated Hero Visual
  const [activeActivityIdx, setActiveActivityIdx] = useState(0);
  const heroActivities = [
    { title: "Lead Qualified", desc: "AI Lead Engine graded a new B2B prospect as HOT 🔥", node: "lead" },
    { title: "AI Call Completed", desc: "AI Phone Agent finished BANT qualification call in under 45s 📞", node: "call" },
    { title: "Workflow Triggered", desc: "AI automated Sync updated ClickUp & Google Sheets ⚡", node: "workflow" },
    { title: "CRM Updated", desc: "Lead record synced with HubSpot instantly 🔄", node: "dashboard" },
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
    <div className="bg-slate-50 dark:bg-[#030014] min-h-screen text-slate-700 dark:text-gray-300 font-sans selection:bg-purple-500/30 pt-28 pb-20 overflow-hidden relative transition-colors duration-300">
      <Helmet>
        <title>About Us: Building the Future AI Workforce | TechieHelp</title>
        <meta name="description" content="TechieHelp is an AI-first company building the future workforce. We help businesses deploy custom AI employees that automate operations, qualify leads, and run 24/7." />
      </Helmet>

      {/* Decorative Light Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 dark:bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-blue-500/5 dark:bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-pink-500/5 dark:bg-pink-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-8 font-mono">
          <a href="/" className="hover:text-[#33bbcf] transition-colors">Home</a>
          <span className="text-[#33bbcf]/60 font-bold">/</span>
          <span className="text-slate-900 dark:text-white font-medium bg-purple-500/5 dark:bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.05)] dark:shadow-[0_0_15px_rgba(168,85,247,0.1)]">About Us</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[78vh] relative">
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 dark:bg-gradient-to-r dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-mono uppercase tracking-wider shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#33bbcf] animate-pulse" />
              <span>Building AI Employees For Modern Businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Building The Future <br />
              <span className="text-cyan-gradient font-bold">
                Workforce With AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl border-l-2 border-purple-500/40 pl-4 py-1.5 bg-gradient-to-r from-purple-500/5 to-transparent font-medium"
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
              <a href="#what-we-build" className="btn-primary">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                Explore AI Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-purple-500/60 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
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
            <div className="card-glass bg-white/70 dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-xl flex flex-col shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#33bbcf]">TechieHelp AI Ecosystem</span>
              </div>

              {/* Hub-and-Spoke Grid */}
              <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto z-10">
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

                  {/* Faded connections adaptive color */}
                  <line x1="50%" y1="50%" x2="22%" y2="22%" className="stroke-slate-300 dark:stroke-purple-500/10" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="22%" className="stroke-slate-300 dark:stroke-purple-500/10" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="22%" y2="78%" className="stroke-slate-300 dark:stroke-purple-500/10" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="78%" className="stroke-slate-300 dark:stroke-purple-500/10" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Pulsing Active Paths */}
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

                {/* Center Hub Orb */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-0.5 shadow-xl flex items-center justify-center animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-900 dark:bg-black/95 flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-[#33bbcf] animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest mt-1">Core AI</span>
                  </div>
                </div>

                {/* Top Left Node */}
                <div className={`absolute top-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${
                  heroActivities[activeActivityIdx].node === "lead"
                    ? "bg-purple-600/10 dark:bg-purple-600/15 border-purple-500 shadow-lg scale-[1.04]"
                    : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-60 text-slate-700 dark:text-gray-300"
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <BrainCircuit className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI Lead Engine</h4>
                  <span className="text-[9px] text-slate-400 dark:text-gray-500 font-mono mt-0.5">Autopilot Qualifier</span>
                </div>

                {/* Top Right Node */}
                <div className={`absolute top-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${
                  heroActivities[activeActivityIdx].node === "call"
                    ? "bg-purple-600/10 dark:bg-purple-600/15 border-purple-500 shadow-lg scale-[1.04]"
                    : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-60 text-slate-700 dark:text-gray-300"
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Bot className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI Calling Agents</h4>
                  <span className="text-[9px] text-slate-400 dark:text-gray-500 font-mono mt-0.5">Voice Dialer</span>
                </div>

                {/* Bottom Left Node */}
                <div className={`absolute bottom-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${
                  heroActivities[activeActivityIdx].node === "workflow"
                    ? "bg-purple-600/10 dark:bg-purple-600/15 border-purple-500 shadow-lg scale-[1.04]"
                    : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-60 text-slate-700 dark:text-gray-300"
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Workflow className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Workflow Automation</h4>
                  <span className="text-[9px] text-slate-400 dark:text-gray-500 font-mono mt-0.5">Operations Sync</span>
                </div>

                {/* Bottom Right Node */}
                <div className={`absolute bottom-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${
                  heroActivities[activeActivityIdx].node === "dashboard"
                    ? "bg-purple-600/10 dark:bg-purple-600/15 border-purple-500 shadow-lg scale-[1.04]"
                    : "bg-white dark:bg-black/60 border-slate-200 dark:border-white/5 opacity-60 text-slate-700 dark:text-gray-300"
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Activity className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">LeadAI Dashboard</h4>
                  <span className="text-[9px] text-slate-400 dark:text-gray-500 font-mono mt-0.5">Analytics Control</span>
                </div>
              </div>

              {/* Console Console Visualizer */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#33bbcf]">Live Activity Simulator</span>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-black/60 border border-slate-800 dark:border-white/10 rounded-2xl p-5 shadow-inner backdrop-blur-md relative overflow-hidden min-h-[96px] flex flex-col justify-center">
                  <div className="absolute top-2 right-4 flex items-center gap-4 text-[9px] font-mono text-slate-500">
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
                        <span className="text-[9px] bg-purple-500/20 text-purple-300 font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          ✓ {heroActivities[activeActivityIdx].title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          [{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-200 font-medium font-mono leading-relaxed pl-1">
                        <span className="text-[#33bbcf] font-bold mr-2">&gt;</span>
                        {heroActivities[activeActivityIdx].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section id="what-we-build" className="mb-28 border-t border-slate-200 dark:border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Solutions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">What We Build</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              Explore our core AI offerings engineered to automate manual business processes end-to-end:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/services/ai-lead-engine", icon: BrainCircuit, title: "AI Lead Engine", desc: "Captures every inquiry and qualifies leads automatically 24/7." },
              { href: "/services/ai-calling-agents", icon: Bot, title: "AI Calling Agents", desc: "Calls prospects instantly in under 60 seconds and books meetings on your calendar." },
              { href: "/services/ai-workflow-automation", icon: Workflow, title: "AI Workflow Automation", desc: "Automates spreadsheet data syncing, invoicing, and cross-application workflows." },
              { href: "/leadai-dashboard", icon: Activity, title: "LeadAI Dashboard", desc: "Presents real-time performance analytics, recordings, and lead status updates." }
            ].map((card, i) => (
              <a key={i} href={card.href} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl hover:border-purple-500/50 shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* REST OF COMPONENTS RE-STYLING PRESERVING STRUCTURAL CONTENT */}
        {/* MILESTONES */}
        <section className="mb-28 border-t border-slate-200 dark:border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Global Trust, Scale & Startup Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Global Reach", metric: "16+ Countries", desc: "Building AI solutions across: India, USA, UAE, Japan, Brazil, Nigeria, Kenya, Sri Lanka, Ghana, Egypt, Bangladesh, Cameroon, Rwanda, Ethiopia, Iran." },
              { title: "Proven Delivery", metric: "100+ Projects", desc: "Deploying custom AI lead systems, voice calling agents, operations dashboards, web applications, and complete business automation architectures." },
              { title: "Quality Commitment", metric: "ISO 9001 Certified", desc: "Committed to absolute quality management, client asset safety, and verified operational delivery excellence." },
              { title: "Rajasthan Startup Summit", metric: "Selected Startup 2026", desc: "Recognized and selected among promising startups during the official Rajasthan Startup Summit 2026." },
              { title: "Armenia Summit", metric: "Armenia Summit 2026", desc: "Selected internationally for the global startup cohort representing at Seaside Startup Summit Armenia 2026." },
              { title: "Startup of the Year", metric: "JIET Universe Jodhpur", desc: "Awarded for excellence in AI innovation, entrepreneurship, and ecosystem contribution." }
            ].map((milestone, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative shadow-sm flex flex-col">
                <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                  <Check className="w-3 h-3" /> Verified
                </span>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{milestone.title}</h3>
                  <h4 className="text-2xl font-extrabold text-[#33bbcf]">{milestone.metric}</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-500/5 dark:bg-purple-900/10 border border-purple-500/20 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-[#33bbcf] w-6 h-6" /> Our Mission
            </h2>
            <p className="text-base text-slate-700 dark:text-gray-300 leading-relaxed">
              Make AI practical, accessible, and results-driven for every business, helping them eliminate manual work and increase client conversions.
            </p>
          </div>
          <div className="bg-blue-500/5 dark:bg-blue-900/10 border border-blue-500/20 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Globe className="text-blue-500 dark:text-blue-400 w-6 h-6" /> Our Vision
            </h2>
            <p className="text-base text-slate-700 dark:text-gray-300 leading-relaxed">
              Build India's most trusted AI workforce platform where businesses of all scales can grow through intelligent voice and workflow automations.
            </p>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="mb-28 text-center">
          <div className="inline-block bg-white dark:bg-white/5 p-12 rounded-3xl border border-slate-200 dark:border-white/10 max-w-3xl w-full relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
            <img src={AmitPhoto} alt="Amit Kumar" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/30 relative z-10" />
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Amit Kumar</h3>
            <p className="text-[#33bbcf] font-medium mb-8">Founder & CEO, TechieHelp</p>
            <p className="text-2xl md:text-3xl font-light text-slate-700 dark:text-gray-300 leading-relaxed italic max-w-xl mx-auto">
              “We don’t just build software. <br />
              <span className="text-slate-900 dark:text-white font-semibold">We build AI systems that run businesses.</span>”
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;