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
    { title: "AI Call Completed", desc: "AI Phone Agent finished BANT qualification call in under 45s �", node: "call" },
    { title: "Workflow Triggered", desc: "AI automated Sync updated ClickUp & Google Sheets �", node: "workflow" },
    { title: "CRM Updated", desc: "Lead record synced with HubSpot instantly ", node: "dashboard" },
    { title: "Meeting Scheduled", desc: "Consultation booked automatically on Amit's Google Calendar �️", node: "call" }
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
    <div className="bg-[#030014] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30 pt-28 pb-20 overflow-hidden relative">
      <Helmet>
        <title>About Us: Building the Future AI Workforce | TechieHelp</title>
        <meta name="description" content="TechieHelp is an AI-first company building the future workforce. We help businesses deploy custom AI employees that automate operations, qualify leads, and run 24/7." />
      </Helmet>

      {/* Decorative Light Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-pink-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 font-mono">
          <a href="/" className="hover:text-[#33bbcf] transition-colors">Home</a>
          <span className="text-[#33bbcf]/60 font-bold">/</span>
          <span className="text-gray-900 dark:text-white font-medium bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">About Us</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[78vh] relative">
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider shadow-lg shadow-purple-900/10"
            >
              <Sparkles className="w-4 h-4 text-[#33bbcf] animate-pulse" />
              <span>Building AI Employees For Modern Businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight drop-shadow-sm"
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
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl border-l-2 border-purple-500/30 pl-4 py-1.5 bg-gradient-to-r from-purple-500/5 to-transparent font-medium"
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
                className="btn-primary"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                Explore AI Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-purple-500/60 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
              >
                Book Strategy Call
              </a>
              <a
                href="/project-portfolio"
                className="px-6 py-4 rounded-xl font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-all flex items-center gap-1 group"
              >
                View Portfolio <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* ANIMATED HERO VISUAL (ECOSYSTEM HUB-AND-SPOKE ORBIT) */}
          <div className="lg:col-span-5 w-full relative">
            <div className="card-glass flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

              <div className="flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-4 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#33bbcf]">TechieHelp AI Ecosystem</span>
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

                  {/* Standard Static/Faded Paths */}
                  <line x1="50%" y1="50%" x2="22%" y2="22%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="22%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="22%" y2="78%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="78%" y2="78%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Active Pulsing Dynamic Paths */}
                  {heroActivities[activeActivityIdx].node === "lead" && (
                    <motion.line
                      x1="50%" y1="50%" x2="22%" y2="22%"
                      stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)"
                      strokeDasharray="10 6"
                      animate={{ strokeDashoffset: [100, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                  {heroActivities[activeActivityIdx].node === "call" && (
                    <motion.line
                      x1="50%" y1="50%" x2="78%" y2="22%"
                      stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)"
                      strokeDasharray="10 6"
                      animate={{ strokeDashoffset: [100, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                  {heroActivities[activeActivityIdx].node === "workflow" && (
                    <motion.line
                      x1="50%" y1="50%" x2="22%" y2="78%"
                      stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)"
                      strokeDasharray="10 6"
                      animate={{ strokeDashoffset: [100, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                  {heroActivities[activeActivityIdx].node === "dashboard" && (
                    <motion.line
                      x1="50%" y1="50%" x2="78%" y2="78%"
                      stroke="url(#activePathGrad)" strokeWidth="3" filter="url(#glow-path)"
                      strokeDasharray="10 6"
                      animate={{ strokeDashoffset: [100, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                </svg>

                {/* Central Hub Orb */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-0.5 shadow-[0_0_35px_rgba(168,85,247,0.4)] flex items-center justify-center animate-pulse">
                  <div className="w-full h-full rounded-full bg-black/95 flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-[#33bbcf] animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="text-[9px] font-bold text-gray-900 dark:text-white uppercase tracking-widest mt-1">Core AI</span>
                  </div>
                </div>

                {/* Top Left Node: AI Lead Engine */}
                <div
                  className={`absolute top-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "lead"
                    ? "bg-purple-600/15 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-[1.04]"
                    : "bg-black/60 border-white/5 opacity-50 hover:opacity-75"
                    }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <BrainCircuit className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">AI Lead Engine</h4>
                  <span className="text-[9px] text-gray-500 font-mono mt-0.5">Autopilot Qualifier</span>
                </div>

                {/* Top Right Node: AI Calling Agents */}
                <div
                  className={`absolute top-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "call"
                    ? "bg-purple-600/15 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-[1.04]"
                    : "bg-black/60 border-white/5 opacity-50 hover:opacity-75"
                    }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Bot className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">AI Calling Agents</h4>
                  <span className="text-[9px] text-gray-500 font-mono mt-0.5">Voice Dialer</span>
                </div>

                {/* Bottom Left Node: AI Workflow Automation */}
                <div
                  className={`absolute bottom-[5%] left-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "workflow"
                    ? "bg-purple-600/15 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-[1.04]"
                    : "bg-black/60 border-white/5 opacity-50 hover:opacity-75"
                    }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Workflow className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">Workflow Automation</h4>
                  <span className="text-[9px] text-gray-500 font-mono mt-0.5">Operations Sync</span>
                </div>

                {/* Bottom Right Node: LeadAI Dashboard */}
                <div
                  className={`absolute bottom-[5%] right-[2%] w-[44%] p-3.5 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center justify-center ${heroActivities[activeActivityIdx].node === "dashboard"
                    ? "bg-purple-600/15 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-[1.04]"
                    : "bg-black/60 border-white/5 opacity-50 hover:opacity-75"
                    }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <Activity className="w-4.5 h-4.5 text-[#33bbcf]" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">LeadAI Dashboard</h4>
                  <span className="text-[9px] text-gray-500 font-mono mt-0.5">Analytics Control</span>
                </div>

              </div>

              {/* Sleek Terminal Ticker Console */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#33bbcf]">Live Activity Simulator</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-white/15 hover:bg-white/20 transition-all cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-white/15 hover:bg-white/20 transition-all cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-white/15 hover:bg-white/20 transition-all cursor-pointer" />
                  </div>
                </div>

                <div className="bg-black/60 border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-inner backdrop-blur-md relative overflow-hidden min-h-[96px] flex flex-col justify-center">
                  <div className="absolute top-2 right-4 flex items-center gap-4 text-[9px] font-mono text-gray-500">
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
                        <span className="text-[9px] font-mono text-gray-600">
                          [{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300 font-medium font-mono leading-relaxed pl-1">
                        <span className="text-[#33bbcf] font-bold mr-2">&gt;</span>
                        {heroActivities[activeActivityIdx].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>

          {/* Elegant Floating Scroll Down Indicator */}
          <div
            className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer z-10 opacity-60 hover:opacity-100 hover:text-[#33bbcf] text-gray-500 transition-all"
            onClick={() => {
              document.getElementById("what-we-build")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
            </div>
          </div>

        </section>

        {/* GLOBAL TRUST, SCALE & STARTUP MILESTONES */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Global Trust, Scale & Startup Milestones</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              From startup recognition to global reach, TechieHelp is building AI systems trusted by businesses, learners, and organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Milestone 1 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg">�</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Reach</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">16+ Countries</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Building AI solutions across: India, USA, UAE, Japan, Brazil, Nigeria, Kenya, Sri Lanka, Ghana, Egypt, Bangladesh, Cameroon, Rwanda, Ethiopia, Iran.
                </p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Proven Delivery</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">100+ Projects</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Deploying custom AI lead systems, voice calling agents, operations dashboards, web applications, and complete business automation architectures.
                </p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quality Commitment</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">ISO 9001 Certified</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Committed to absolute quality management, client asset safety, and verified operational delivery excellence.
                </p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg">�</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rajasthan Startup Summit</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">Selected Startup 2026</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Recognized and selected among promising startups during the official Rajasthan Startup Summit 2026.
                </p>
              </div>
            </div>

            {/* Milestone 5 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg">�</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Armenia Summit</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">Armenia Summit 2026</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Selected internationally for the global startup cohort representing at Seaside Startup Summit Armenia 2026.
                </p>
              </div>
            </div>

            {/* Milestone 6 */}
            <div className="card-glass flex flex-col">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-500/20">
                <Check className="w-3 h-3" /> Verified
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center font-bold text-lg">�</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Startup of the Year</h3>
                <h4 className="text-2xl font-extrabold text-[#33bbcf]">JIET Universe Jodhpur</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Awarded for excellence in AI innovation, entrepreneurship, and ecosystem contribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="mb-28 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Why We Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Why TechieHelp Was Started
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Most businesses lose opportunities because operations depend entirely on people. Manual follow-ups, slow replies, spreadsheet chaos, and approval bottlenecks stall growth.
              </p>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Slow responses lose prospects</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Missed follow-ups lose revenue</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Manual bottlenecks limit scalability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-black/30 border border-white/5 p-6 rounded-2xl">
                <p className="text-base text-gray-300 leading-relaxed">
                  TechieHelp was founded in **2023 in Jodhpur** to solve these challenges using AI.
                </p>
                <p className="text-base text-gray-300 leading-relaxed mt-4">
                  We believe businesses should not depend on manual operations to grow. Instead, businesses should operate with intelligent AI systems that work continuously.
                </p>
                <p className="text-lg text-purple-300 font-semibold mt-6 border-l-4 border-purple-500 pl-4 py-1">
                  We design custom AI Employees that capture leads, qualify customers, and run workflows 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STARTUP TIMELINE */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Onboarding roadmap</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Startup Timeline</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Follow our growth trajectory from our Jodhpur foundation to the global AI workforce platform of the future:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* 2023 */}
            <div className="card-glass flex flex-col">
              <div>
                <span className="text-xs font-mono font-bold text-[#33bbcf]">2023</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">TechieHelp Founded</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Launched in Jodhpur, Rajasthan to solve slow business response times using custom software.
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="card-glass flex flex-col">
              <div>
                <span className="text-xs font-mono font-bold text-[#33bbcf]">2024</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Services Expansion</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Scaled technical offerings, custom CRM connectors, and local business web applications.
                </p>
              </div>
            </div>

            {/* 2025 */}
            <div className="card-glass flex flex-col">
              <div>
                <span className="text-xs font-mono font-bold text-[#33bbcf]">2025</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">AI Solutions Launch</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Fitted voice dialers and webhook routing, introducing standard AI automation packages.
                </p>
              </div>
            </div>

            {/* 2026 */}
            <div className="bg-gradient-to-b from-purple-500/20 to-transparent border border-purple-500/30 p-6 rounded-2xl relative flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono font-bold text-purple-300">2026</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">AI Employee Ecosystem</h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  Developing the 24/7 AI employee workforce framework and expanding reach to 16+ countries.
                </p>
              </div>
            </div>

            {/* Future */}
            <div className="card-glass flex flex-col">
              <div>
                <span className="text-xs font-mono font-bold text-[#33bbcf]">Future</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Global AI Platform</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Establishing the world's most trusted AI workforce platform where businesses operate on autopilot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section id="what-we-build" className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Solutions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">What We Build</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our core AI offerings engineered to automate manual business processes end-to-end:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <a
              href="/services/ai-lead-engine"
              className="card-glass flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI Lead Engine</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Captures every inquiry and qualifies leads automatically 24/7.
              </p>
            </a>

            {/* Card 2 */}
            <a
              href="/services/ai-calling-agents"
              className="card-glass flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI Calling Agents</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Calls prospects instantly in under 60 seconds and books meetings on your calendar.
              </p>
            </a>

            {/* Card 3 */}
            <a
              href="/services/ai-workflow-automation"
              className="card-glass flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI Workflow Automation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automates spreadsheet data syncing, invoicing, and cross-application workflows.
              </p>
            </a>

            {/* Card 4 */}
            <a
              href="/leadai-dashboard"
              className="card-glass flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#33bbcf] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">LeadAI Dashboard</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Presents real-time performance analytics, recordings, and lead status updates.
              </p>
            </a>
          </div>
        </section>

        {/* AI EMPLOYEE CONCEPT */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Transformation</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">What Is An AI Employee?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Compare traditional operations against scalable, 24/7 automated operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Employee */}
            <div className="bg-red-500/[0.02] border border-red-500/10 p-8 rounded-3xl relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono text-red-400 font-bold tracking-wider">
                Human Limits
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Traditional Employee</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Works 8 Hours (limited shift durations)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Needs onboarding and continuous training</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Limited call/lead processing capacity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Manual data entry and spreadsheet copy-pasting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Continuous monthly salary & overhead expenses</span>
                </li>
              </ul>
            </div>

            {/* AI Employee */}
            <div className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <span className="absolute top-4 right-4 text-[9px] uppercase font-mono text-purple-300 font-bold tracking-wider">
                Autopilot scaling
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">TechieHelp AI Employee</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Works 24/7 (never sleeps or goes out of office)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Trained once on your script & knowledge base</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Unlimited simultaneous processing scaling</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Fully automated tasks & instant CRM updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>One-time deployment fee with full ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-[#33bbcf] w-6 h-6" /> Our Mission
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Make AI practical, accessible, and results-driven for every business, helping them eliminate manual work and increase client conversions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <Globe className="text-blue-400 w-6 h-6" /> Our Vision
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Build India's most trusted AI workforce platform where businesses of all scales can grow through intelligent voice and workflow automations.
            </p>
          </div>
        </section>

        {/* GLOBAL IMPACT MAP */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Global Impact</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">TechieHelp Around The World</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our verified clients and technology reaches across the globe:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {mapPins.map((pin, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePin(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold transition-all border flex items-center justify-between ${activePin === idx
                    ? "bg-purple-600/10 border-purple-500 text-gray-900 dark:text-white shadow-lg"
                    : "bg-transparent border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white"
                    }`}
                >
                  <span>{pin.name}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${activePin === idx ? "bg-purple-500 text-gray-900 dark:text-white" : "bg-gray-100 dark:bg-white/5 text-gray-500"
                    }`}>
                    Active Pin
                  </span>
                </button>
              ))}
            </div>

            {/* Map representation side */}
            <div className="lg:col-span-8 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#33bbcf] font-bold block mb-2">Active Reach</span>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                  Serving {mapPins[activePin].name}
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p><strong>Target Cities:</strong> {mapPins[activePin].cities}</p>
                  <p><strong>Primary Deployment:</strong> {mapPins[activePin].service}</p>
                </div>
              </div>

              {/* Pulse labels */}
              <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#33bbcf]" /> AI Solutions</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#33bbcf]" /> Automation Services</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#33bbcf]" /> Technology Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY IMPACT METRICS */}
        <section className="mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">16+</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Countries Reached</p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">100+</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Projects Delivered</p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">24/7</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">AI Operations</p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">2023</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Founded</p>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE TECHIEHELP */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Pillars</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Why Businesses Choose TechieHelp</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We engineer custom, scalable solutions delivering full client asset ownership:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-glass flex flex-col">
              <BrainCircuit className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI-First Approach</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We design systems around voice agents, webhooks, and decision logic rather than manual task loops.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Workflow className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Custom Built Systems</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trained specifically around your target variables, products, and scripts for consistent delivery.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Clock className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">24/7 Operations</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Continuously qualify and schedule leads overnight or weekends without staff fatigue.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Zap className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Fast Deployment</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our structured onboarding path gets your custom voice agent live in just 7 days.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Layers className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Scalable Infrastructure</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Able to handle spikes of thousands of calls simultaneously without database lag.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Award className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Full Ownership</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                One-time build fees. You own all scripts, configurations, and dashboards completely.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <TrendingUp className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Startup Agility</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Selected Startup in Rajasthan Startup Summit 2026, delivering rapid iterations.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Users className="w-8 h-8 text-[#33bbcf] mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Indian Support Team</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dedicated developers to review integration logs and optimize decision variables.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Onboarding</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our structured onboarding roadmap ensuring your custom logic works seamlessly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {workSteps.map((step, idx) => {
              const isActive = idx === activeWorkStep;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${isActive
                    ? "bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-900/5 scale-[1.02] opacity-100"
                    : "bg-white/[0.02] border-white/5 opacity-50"
                    }`}
                >
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-purple-300" : "text-gray-500"}`}>
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* TECHNOLOGY ECOSYSTEM ORBIT */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Integrations</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Technology Ecosystem</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our AI Core integrates seamlessly with standard business APIs and LLM models:
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl max-w-3xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 text-[#33bbcf] flex items-center justify-center mx-auto border border-purple-500/30 animate-pulse">
              <BrainCircuit className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">TechieHelp AI Core</h3>

            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
              {["OpenAI (GPT-4)", "Gemini 1.5 Pro", "Vapi Voice Engine", "WhatsApp Business Cloud API", "Google Sheets API", "HubSpot CRM", "Salesforce API", "Razorpay / Stripe Hooks", "Tally API Connector"].map((tech, idx) => (
                <span key={idx} className="bg-gray-100 dark:bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="mb-28 text-center">
          <div className="inline-block bg-gray-100 dark:bg-white/5 p-12 rounded-3xl border border-gray-200 dark:border-white/10 max-w-3xl w-full relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
            <img src={AmitPhoto} alt="Amit Kumar" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/30 relative z-10" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Amit Kumar</h3>
            <p className="text-[#33bbcf] font-medium mb-8">Founder & CEO, TechieHelp</p>
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic max-w-xl mx-auto">
              “We don’t just build software. <br />
              <span className="text-gray-900 dark:text-white font-semibold">We build AI systems that run businesses.</span>”
            </p>
          </div>
        </section>

        {/* CULTURE SECTION */}
        <section className="mb-28 bg-gradient-to-r from-purple-900/10 to-[#030014] border border-purple-500/20 p-10 md:p-14 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">We Build Systems, Not Dependency</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            We don't sell hours. We build assets. Every solution we create is designed to help businesses scale, automate, and operate independently.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-blue-900/20 border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#33bbcf] font-bold block">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Ready To Build Your AI Workforce?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Let TechieHelp design and deploy AI systems that work around the clock for your business. Contact us to schedule a workflow audit.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold bg-white text-purple-900 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl"
                >
                  Book Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#what-we-build"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-purple-500 transition-all"
                >
                  Explore AI Solutions
                </a>
                <a
                  href="/project-portfolio"
                  className="px-6 py-3.5 rounded-xl font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-all"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
