import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Play,
  Database,
  MessageSquare,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Activity,
  DollarSign,
  TrendingUp,
  Mail,
  MessageCircle,
  Calendar,
  AlertCircle,
  Users,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Building2,
  Sparkles,
  ShieldAlert,
  Flame,
  AlertOctagon,
  ArrowDown
} from "lucide-react";

const AILeadEngine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Live Simulator States
  const [simStep, setSimStep] = useState(0);
  const [isSimRunning, setIsSimRunning] = useState(true);
  const [simLeads, setSimLeads] = useState([
    { name: "Rahul Sharma", company: "JIET Jodhpur", budget: "₹5,00,000", score: "Hot " },
    { name: "Sarah Jenkins", company: "Apex Digital", budget: "$10,000", score: "Warm �" },
    { name: "Amit Verma", company: "Jaipur Real Estate", budget: "₹15,00,000", score: "Hot " }
  ]);
  const [currentLeadIdx, setCurrentLeadIdx] = useState(0);

  // Hero Step-by-Step Cycle State
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Active Industry Card State
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Simulation Steps Data
  const simSteps = [
    { title: "New Lead Detected", status: "ACTIVE", desc: "User filled contact form on website / WhatsApp", icon: <Users className="w-5 h-5 text-blue-400" /> },
    { title: "AI Qualification Running", status: "PROCESSING", desc: "Analyzing budget, authority, need, and timeline (BANT)", icon: <Activity className="w-5 h-5 text-[#33bbcf]" /> },
    { title: "Email Sent", status: "SYNCED", desc: "Sent custom email proposal matching prospect intent", icon: <Mail className="w-5 h-5 text-cyan-400" /> },
    { title: "WhatsApp Sent", status: "SYNCED", desc: "Followed up on WhatsApp with booking calendar link", icon: <MessageCircle className="w-5 h-5 text-green-400" /> },
    { title: "CRM Updated", status: "QUALIFIED", desc: "Lead classified as HOT and synced to Google Sheets & HubSpot", icon: <Database className="w-5 h-5 text-yellow-400" /> },
    { title: "Sales Team Notified", status: "SYNCED", desc: "Slack/WhatsApp alert triggered for immediate human call", icon: <AlertCircle className="w-5 h-5 text-red-400" /> }
  ];

  // Auto progression for Lead Simulator
  useEffect(() => {
    let interval = null;
    if (isSimRunning) {
      interval = setInterval(() => {
        setSimStep((prevStep) => {
          if (prevStep >= simSteps.length - 1) {
            // Pick next lead and loop back
            setCurrentLeadIdx((prevIdx) => (prevIdx + 1) % simLeads.length);
            return 0;
          }
          return prevStep + 1;
        });
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isSimRunning, simLeads.length]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentLead = simLeads[currentLeadIdx];

  const industriesData = [
    {
      title: "Coaching Institutes",
      outcome: "2.7X more qualified student enrollments.",
      desc: "Instantly reply to course enquiries on WhatsApp. Qualify students based on course interest, batch timing, and budget, then schedule career counseling calls automatically.",
      metric: "94% Response Rate"
    },
    {
      title: "Real Estate",
      outcome: "3.2X increase in property site visits booked.",
      desc: "Capture leads from FB Ads & MagicBricks. AI instantly qualifies buyers based on budget, location preference, and timeline before scheduling site visits with agents.",
      metric: "under 30s Response"
    },
    {
      title: "Hospitals & Clinics",
      outcome: "40% reduction in missed appointments.",
      desc: "Handle emergency bookings, doctor availability inquiries, and OPD schedule details. Qualify patients by symptom severity and log bookings to HMIS.",
      metric: "24/7 Availability"
    },
    {
      title: "Educational Institutes",
      outcome: "50% reduction in manual admissions workload.",
      desc: "Respond to admission queries, fee structures, and eligibility criteria instantly. AI filters prospective candidates and routes hot leads to the counseling desk.",
      metric: "90% Work Automation"
    },
    {
      title: "Agencies & Consultants",
      outcome: "2.5X increase in booked strategy calls.",
      desc: "Qualify inbound clients on budget, service needs, and project timelines. Filter out low-budget leads automatically and book calendar meetings only for high-value prospects.",
      metric: "Zero Bad Leads"
    },
    {
      title: "Startups & SaaS",
      outcome: "45% boost in product demo attendance.",
      desc: "Capture signups and qualify leads based on team size, technical requirements, and software stack. Automatically sync details with HubSpot CRM and notify account executives.",
      metric: "HubSpot Integrations"
    },
    {
      title: "Local Businesses",
      outcome: "38% increase in Google Maps conversions.",
      desc: "Instantly capture customer inquiries from Google Business Profiles and WhatsApp. Provide instant pricing, quotes, and booking options to local customers 24/7.",
      metric: "Google Maps CRM Sync"
    },
    {
      title: "E-commerce & Brands",
      outcome: "22% drop in cart abandonment.",
      desc: "AI automatically triggers WhatsApp follow-ups for abandoned checkouts, offers instant discount codes, solves customer support queries, and handles order tracking.",
      metric: "WhatsApp Cart Recovery"
    }
  ];

  return (
    <div className="bg-[#030014] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30 pt-28 pb-20 overflow-x-hidden relative">
      <Helmet>
        <title>AI Lead Engine - 24/7 Automated Lead Capture Systems | TechieHelp</title>
        <meta name="description" content="Hire AI Employees that work 24/7. TechieHelp helps businesses automate lead qualification, customer replies, AI calling, follow-ups, and operations without increasing headcount." />
        <meta property="og:title" content="AI Lead Engine - 24/7 Automated Lead Capture Systems | TechieHelp" />
        <meta property="og:description" content="Hire AI Employees that work 24/7. TechieHelp builds AI Lead Engines that capture, qualify, and convert leads automatically without increasing headcount." />
        <meta property="og:url" content="https://techiehelp.in/services/ai-lead-engine" />
      </Helmet>

      {/* Cinematic Ambient Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c24_1px,transparent_1px),linear-gradient(to_bottom,#0c0c24_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <div className="fixed top-[15%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-[15%] right-[15%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 border border-white/5 bg-white/[0.02] backdrop-blur-md w-fit px-4 py-2 rounded-full">
          <span>Home</span>
          <span className="text-[#33bbcf]/50">→</span>
          <span>Services</span>
          <span className="text-[#33bbcf]/50">→</span>
          <span className="text-gray-900 dark:text-white font-semibold">AI Lead Engine</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-7/12 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md shadow-md"
            >
              <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-blue-300 font-semibold">
                Your 24/7 Automated Lead Capture Engine
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tighter"
            >
              Never Miss <br />
              <span className="text-cyan-gradient font-bold">
                Another Lead Again.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              TechieHelp AI Lead Engine captures every inquiry, responds instantly through Email and WhatsApp, qualifies prospects using AI, updates your CRM, and alerts your team automatically.
            </motion.p>

            {/* Positioning Statement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-morphism p-5 border-white/5 rounded-2xl mb-8 flex gap-4 items-center bg-white/[0.02] max-w-xl text-left shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600" />
              <Sparkles className="w-10 h-10 text-blue-400 shrink-0 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[3px] text-blue-400 font-semibold mb-0.5">Brand Commitment</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
                  We don't sell software. We build AI Employees that capture, qualify, and convert leads automatically.
                </p>
              </div>
            </motion.div>

            {/* Bullet list of stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8 text-left"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <Check className="text-green-500 w-5 h-5 stroke-[3]" /> 100% Lead Capture
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <Check className="text-green-500 w-5 h-5 stroke-[3]" /> AI Qualification
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <Check className="text-green-500 w-5 h-5 stroke-[3]" /> Instant Follow-Up
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <Check className="text-green-500 w-5 h-5 stroke-[3]" /> 24/7 Operations
              </span>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 w-full"
            >
              <a
                href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team,%20I%20am%20interested%20in%20deploying%20the%20AI%20Lead%20Engine%20for%20my%20business.%20Please%20guide%20me%20further."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Get My AI Lead Engine</span> <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold rounded-xl transition-all active:scale-95 text-sm flex items-center gap-2"
              >
                <span>Book Free Strategy Call</span>
              </a>
              <a
                href="#simulator"
                className="px-6 py-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white font-semibold transition-colors text-sm flex items-center gap-1.5"
              >
                <Play className="w-4 h-4 text-blue-400 fill-current" /> Watch Demo
              </a>
            </motion.div>
          </div>

          {/* Right Hero: Visual representation / Mini Dashboard */}
          <div className="lg:w-5/12 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[460px] glass-morphism border-white/5 bg-white/[0.02] rounded-3xl p-6 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400 tracking-wider">ACTIVE AGENT SYSTEM</span>
                </div>
              </div>

              {/* Central Widget wrapper with timeline */}
              <div className="relative pr-8">

                {/* Vertical Connector track line */}
                <div className="absolute right-3.5 top-[8%] bottom-[8%] w-[2px] bg-gray-100 dark:bg-white/10 md:block hidden z-0 pointer-events-none" />

                <div className="space-y-4 relative z-10">

                  {/* Step 1 Card: Capture */}
                  <div
                    onClick={() => setActiveStep(0)}
                    className={`p-4 rounded-2xl border transition-all duration-500 text-left cursor-pointer relative ${activeStep === 0
                        ? "bg-blue-500/10 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.2)] opacity-100 scale-[1.02]"
                        : "bg-white/[0.02] border-white/5 opacity-40 hover:opacity-60"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${activeStep === 0 ? "text-blue-400 font-bold" : "text-gray-500"}`}>Step 1: Capture</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${activeStep === 0 ? "bg-blue-500/20 text-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.3)]" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>100% SUCCESS</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Multi-Channel Ingestion</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Website, Social Ads, GBP, and WhatsApp funneled to AI instantly.</p>

                    {/* Step 1 Micro-Animation */}
                    <AnimatePresence>
                      {activeStep === 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 flex gap-2 flex-wrap"
                        >
                          {["� Website", "� WhatsApp", " FB Ads", "� GBP"].map((src, i) => (
                            <motion.span
                              key={src}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-[9px] bg-blue-500/10 border border-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold"
                            >
                              {src}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Timeline Node */}
                    <div className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 md:block hidden">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 border-[#030014] transition-all duration-500 ${activeStep === 0
                          ? "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)] scale-125"
                          : "bg-white/15 scale-90"
                        }`} />
                    </div>
                  </div>

                  {/* Step 2 Card: Qualify */}
                  <div
                    onClick={() => setActiveStep(1)}
                    className={`p-4 rounded-2xl border transition-all duration-500 text-left cursor-pointer relative ${activeStep === 1
                        ? "bg-purple-500/10 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] opacity-100 scale-[1.02]"
                        : "bg-white/[0.02] border-white/5 opacity-40 hover:opacity-60"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${activeStep === 1 ? "text-[#33bbcf] font-bold" : "text-gray-500"}`}>Step 2: Qualify</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${activeStep === 1 ? "bg-purple-500/20 text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.3)]" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>AI ACTIVE</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Intent Analysis & Lead Scoring</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">AI analyzes budget, authority, and timelines in under 3 seconds.</p>

                    {/* Step 2 Micro-Animation */}
                    <AnimatePresence>
                      {activeStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 bg-black/40 border border-purple-500/10 rounded-xl p-2.5"
                        >
                          {[
                            { label: "Budget", val: "₹5L+ ✓" },
                            { label: "Authority", val: "Founder ✓" },
                            { label: "Need", val: "High ✓" },
                            { label: "Timeline", val: "Immediate ✓" }
                          ].map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className="flex justify-between items-center text-[9px] font-mono"
                            >
                              <span className="text-gray-500">{item.label}:</span>
                              <span className="text-purple-300 font-bold">{item.val}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Timeline Node */}
                    <div className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 md:block hidden">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 border-[#030014] transition-all duration-500 ${activeStep === 1
                          ? "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] scale-125"
                          : "bg-white/15 scale-90"
                        }`} />
                    </div>
                  </div>

                  {/* Step 3 Card: Act */}
                  <div
                    onClick={() => setActiveStep(2)}
                    className={`p-4 rounded-2xl border transition-all duration-500 text-left cursor-pointer relative ${activeStep === 2
                        ? "bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] opacity-100 scale-[1.02]"
                        : "bg-white/[0.02] border-white/5 opacity-40 hover:opacity-60"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${activeStep === 2 ? "text-cyan-400 font-bold" : "text-gray-500"}`}>Step 3: Act</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${activeStep === 2 ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.3)]" : "bg-gray-100 dark:bg-white/5 text-gray-500"}`}>SYNCED</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Instant Response & Sync</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Sends custom PDF catalog via WhatsApp/Email. Syncs CRM & alerts sales team.</p>

                    {/* Step 3 Micro-Animation */}
                    <AnimatePresence>
                      {activeStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 space-y-2 bg-black/40 border border-cyan-500/10 rounded-xl p-2.5"
                        >
                          <div className="flex justify-between items-center text-[9px] font-mono">
                            <span className="text-gray-500">Proposal Delivery:</span>
                            <span className="text-green-400 font-bold">100% Sent ✓</span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-1 overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                              className="bg-cyan-500 h-full"
                            />
                          </div>
                          <div className="flex justify-between items-center text-[9px] font-mono">
                            <span className="text-gray-500">HubSpot & Sheets:</span>
                            <span className="text-cyan-400 font-bold">Synced ✓</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Timeline Node */}
                    <div className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 md:block hidden">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 border-[#030014] transition-all duration-500 ${activeStep === 2
                          ? "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-125"
                          : "bg-white/15 scale-90"
                        }`} />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LIVE SIMULATOR SECTION */}
        <section id="simulator" className="mb-28 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Live Simulation</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Watch The AI Lead Employee In Action
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              See how the engine detects incoming traffic, qualifies it, responds instantly, and coordinates your stack in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Simulator Controls & Lead Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Lead Details Card */}
              <div className="glass-morphism border-white/5 bg-white/[0.01] p-6 rounded-3xl flex flex-col justify-between flex-1 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent blur-xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xs font-mono uppercase text-gray-600 dark:text-gray-400 tracking-wider">Incoming Lead Detail</h4>
                    <button
                      onClick={() => setIsSimRunning(!isSimRunning)}
                      className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white transition-colors flex items-center gap-1.5 text-[10px] font-mono font-semibold"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSimRunning ? "animate-spin" : ""}`} />
                      {isSimRunning ? "Pause Sim" : "Resume Sim"}
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 font-mono">Lead Name</p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{currentLead.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 font-mono">Company / Organization</p>
                      <p className="text-sm font-semibold text-gray-200">{currentLead.company}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 font-mono">Reported Budget Range</p>
                      <p className="text-sm font-semibold text-blue-400 font-mono">{currentLead.budget}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 font-mono">AI Lead Score</p>
                      <span className="inline-block px-2.5 py-1 text-xs font-bold rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-yellow-300 mt-1">
                        {currentLead.score}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <span>Simulation Cycle</span>
                  <span className="font-mono text-gray-900 dark:text-white">Lead {currentLeadIdx + 1} of {simLeads.length}</span>
                </div>
              </div>
            </div>

            {/* Processor Actions list */}
            <div className="lg:col-span-7">
              <div className="glass-morphism border-white/5 bg-white/[0.01] p-6 rounded-3xl h-full shadow-2xl">
                <h4 className="text-xs font-mono uppercase text-gray-600 dark:text-gray-400 tracking-wider mb-6 text-left">Pipeline Execution Logs</h4>

                <div className="space-y-3">
                  {simSteps.map((step, idx) => {
                    const isActive = idx === simStep;
                    const isCompleted = idx < simStep;

                    return (
                      <div
                        key={step.title}
                        className={`flex items-start gap-4 p-3.5 rounded-2xl border transition-all duration-500 ${isActive
                            ? "bg-white/[0.04] border-blue-500/30 shadow-lg"
                            : isCompleted
                              ? "bg-white/[0.01] border-green-500/10 opacity-70"
                              : "bg-transparent border-transparent opacity-40"
                          }`}
                      >
                        {/* Status Icon */}
                        <div className="shrink-0 mt-0.5">
                          {isCompleted ? (
                            <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          ) : (
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-500 ${isActive ? "bg-blue-600/20 border-blue-500/30" : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10"
                              }`}>
                              {step.icon}
                            </div>
                          )}
                        </div>

                        {/* Text and Desc */}
                        <div className="flex-1 text-left min-w-0">
                          <div className="flex items-center justify-between gap-4">
                            <h5 className={`text-sm font-bold transition-colors duration-500 ${isActive ? "text-gray-900 dark:text-white" : isCompleted ? "text-gray-300" : "text-gray-500"
                              }`}>{step.title}</h5>
                            <span className={`text-[8px] font-mono px-2 py-0.5 rounded font-bold ${step.status === "ACTIVE" ? "bg-blue-500/20 text-blue-400" :
                                step.status === "PROCESSING" ? "bg-purple-500/20 text-[#33bbcf] animate-pulse" :
                                  step.status === "QUALIFIED" ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"
                              }`}>{step.status}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-normal truncate">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="mb-28 relative">
          {/* Funnel section glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-red-400 mb-2 font-bold">The Leakage Problem</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Most Businesses Lose Revenue Before Sales Even Starts
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              The cost of delay is massive. When a prospect submits an inquiry, they expect an immediate response. Every minute of delay leaks conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            {/* Funnel graphic representation */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="space-y-4">
                {/* 100 Leads */}
                <div className="flex items-center gap-4">
                  <span className="w-24 text-right text-xs font-mono text-gray-600 dark:text-gray-400">100 Leads Recd</span>
                  <div className="btn-primary">
                    <span className="relative z-10">Total Enquiries Received</span>
                    <span className="relative z-10 font-mono">100%</span>
                  </div>
                </div>

                {/* 50 Contacted */}
                <div className="flex items-center gap-4">
                  <span className="w-24 text-right text-xs font-mono text-gray-600 dark:text-gray-400">50 Contacted</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="btn-primary">
                      <span className="relative z-10">Speed Delay Dropoff</span>
                      <span className="relative z-10 font-mono">50%</span>
                    </div>
                    <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest font-mono shrink-0">50% Lost</span>
                  </div>
                </div>

                {/* 20 Followed Up */}
                <div className="flex items-center gap-4">
                  <span className="w-24 text-right text-xs font-mono text-gray-600 dark:text-gray-400">20 Followed Up</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="btn-primary">
                      <span className="relative z-10">Manual Followup Delay</span>
                      <span className="relative z-10 font-mono">20%</span>
                    </div>
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest font-mono shrink-0">80% Lost</span>
                  </div>
                </div>

                {/* 5 Converted */}
                <div className="flex items-center gap-4">
                  <span className="w-24 text-right text-xs font-mono text-gray-600 dark:text-gray-400">5 Converted</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-[5%] h-10 rounded-xl bg-green-500 flex items-center justify-center text-black font-extrabold text-xs relative overflow-hidden shadow-[0_0_15px_#22c55e]">
                      <span className="relative z-10 font-mono">5%</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest font-mono shrink-0">5 Converted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Message Text */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex gap-3 items-center mb-6 w-fit">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold font-mono tracking-widest uppercase">CRITICAL REVENUE LEAK</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Most businesses lose opportunities because nobody responds instantly.</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                Leads are perishable. If a prospect inquiries and has to wait hours for a response, they have already gone to a competitor. Manual follow-ups are too slow, inconsistent, and expensive.
              </p>
              <div className="border-l-4 border-red-500 pl-4 py-1 italic text-lg text-gray-900 dark:text-white font-bold">
                "Speed is revenue. The business that answers first wins the contract."
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION (FLOWCHART) */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">System Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              How The AI Lead Engine Works
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              A unified pipeline that bridges your marketing channels with your AI and sales stack seamlessly.
            </p>
          </div>

          <div className="glass-morphism border-white/5 bg-white/[0.01] p-8 rounded-[2rem] max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

              {/* Traffic Sources Column */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-mono uppercase text-gray-500 tracking-widest text-center md:text-left mb-2">1. Inbound Channels</h4>
                {[
                  { name: "Website Form", detail: "HTML / WordPress", icon: "�" },
                  { name: "WhatsApp Message", detail: "Customer chat init", icon: "�" },
                  { name: "Facebook Lead Ad", detail: "API Direct Sync", icon: "�" },
                  { name: "Google Business Profile", detail: "GBP inquiries", icon: "�" }
                ].map((item) => (
                  <div key={item.name} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-left flex gap-3 items-center hover:bg-white/[0.04] hover:border-gray-200 dark:border-white/10 transition-all">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-[9px] text-gray-500 font-mono">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connecting Flow Indicator Column */}
              <div className="md:col-span-1 flex flex-col justify-center items-center gap-1.5 py-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full md:block hidden" />
                <ArrowDown className="w-5 h-5 text-[#33bbcf] md:hidden block animate-bounce" />
                <span className="text-[8px] font-mono text-[#33bbcf] uppercase tracking-widest md:-rotate-90 md:my-6">Process</span>
              </div>

              {/* Core Processor Column */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <h4 className="text-xs font-mono uppercase text-gray-500 tracking-widest text-center mb-2">2. Processing Core</h4>

                <div className="relative group w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-[10px] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 backdrop-blur-md text-center">
                    <div className="btn-primary">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                    <h5 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-1">AI Lead Engine</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Central hub parsing lead data, intent classification, and database logging.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex items-center justify-center gap-2">
                  <Activity className="w-4 h-4 text-[#33bbcf] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300">AI Qualification Matrix</span>
                </div>
              </div>

              {/* Connecting Flow Indicator Column */}
              <div className="md:col-span-1 flex flex-col justify-center items-center gap-1.5 py-4">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full md:block hidden" />
                <ArrowDown className="w-5 h-5 text-cyan-400 md:hidden block animate-bounce" />
                <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest md:-rotate-90 md:my-6">Route</span>
              </div>

              {/* Outputs Column */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-mono uppercase text-gray-500 tracking-widest text-center md:text-left mb-2">3. Outbound Actions</h4>
                {[
                  { name: "Email Reply", detail: "Personalized follow-up", icon: <Mail className="w-4 h-4 text-cyan-400" /> },
                  { name: "WhatsApp Reply", detail: "Automated chat response", icon: <MessageCircle className="w-4 h-4 text-green-400" /> },
                  { name: "CRM Sync", detail: "Hubspot/Sheets logs", icon: <Database className="w-4 h-4 text-yellow-400" /> },
                  { name: "Sales Team Alert", detail: "Instant Slack notify", icon: <AlertCircle className="w-4 h-4 text-red-400" /> }
                ].map((item) => (
                  <div key={item.name} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-left flex gap-3 items-center hover:bg-white/[0.04] hover:border-gray-200 dark:border-white/10 transition-all">
                    <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-[9px] text-gray-500 font-mono">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT SECTION (KPI CARDS) */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Operational Impact</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Business Performance Reimagined
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              The metrics that count. Deploying the AI Lead Engine translates to direct, measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Response Time", value: "< 45 Secs", icon: <Clock className="w-5 h-5 text-blue-400" />, desc: "Answering lead instantly" },
              { label: "Lead Capture Rate", value: "100%", icon: <Users className="w-5 h-5 text-green-400" />, desc: "Zero enquiries leaked" },
              { label: "Qualification Accuracy", value: "92%", icon: <Activity className="w-5 h-5 text-[#33bbcf]" />, desc: "AI parsing criteria" },
              { label: "Manual Work Reduced", value: "90%", icon: <Database className="w-5 h-5 text-yellow-400" />, desc: "Repetitive tasks deleted" },
              { label: "Conversion Increase", value: "3X Growth", icon: <TrendingUp className="w-5 h-5 text-red-400" />, desc: "High conversion speeds" }
            ].map((kpi) => (
              <div key={kpi.label} className="glass-morphism border-white/5 bg-white/[0.01] p-5 rounded-2xl text-left hover:bg-white/[0.03] transition-all flex flex-col justify-between shadow-lg">
                <div className="p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl w-fit mb-4">{kpi.icon}</div>
                <div>
                  <h4 className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">{kpi.label}</h4>
                  <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-2">{kpi.value}</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal">{kpi.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU GET (DELIVERABLES GRID) */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">System Features</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              What You Get With TechieHelp Deployment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              We configure, integrate, and test every aspect of your AI Lead Engine to deliver a plug-and-play AI Employee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Website Form Integration", desc: "Syncs website forms, custom popups, and lead capture nodes." },
              { title: "WhatsApp Business Integration", desc: "Connects Official WhatsApp API to funnel lead conversations." },
              { title: "Gmail Integration", desc: "Monitors primary inboxes for customer emails and contact requests." },
              { title: "Automated Email Responses", desc: "AI replies with personalized answers and attached files in seconds." },
              { title: "Automated WhatsApp Responses", desc: "Instant follow-up message with booking calendars on WhatsApp." },
              { title: "Lead Qualification Engine", desc: "Qualifies prospects based on custom criteria before scheduling." },
              { title: "AI Lead Scoring", desc: "Grades leads (Hot/Warm/Cold) based on budget, timeline, and need." },
              { title: "CRM Integration", desc: "Synchronizes contact details with Salesforce, HubSpot, or custom CRMs." },
              { title: "Google Sheets Integration", desc: "Instantly logs data to centralized sheets for team transparency." },
              { title: "Dashboard Access", desc: "Real-time pipeline monitoring and lead status tracking." },
              { title: "Team Notifications", desc: "Slack, Discord, or WhatsApp alerts for qualified leads." },
              { title: "Deployment Support", desc: "Complete testing, training, and 7-day post-launch optimization." }
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl text-left hover:border-gray-200 dark:border-white/10 transition-all flex gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEAD QUALIFICATION SECTION */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">AI Matrix</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Automated Lead Classification
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              The AI qualifies leads automatically using BANT analysis and scores them to ensure your sales team calls the right customer first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Hot Leads */}
            <div className="glass-morphism border-white/5 bg-[#07021a]/50 p-8 rounded-3xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 flex items-center gap-2">
                  <Flame className="w-6 h-6 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Hot Leads</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">SCORE: 90-100</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready To Buy</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">High budget range, immediate timeline requirement, matches decision-maker profile.</p>
              <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10 text-red-400 font-mono text-[10px] font-bold uppercase tracking-widest text-center">
                Immediate Action Required
              </div>
            </div>

            {/* Warm Leads */}
            <div className="glass-morphism border-white/5 bg-[#07021a]/50 p-8 rounded-3xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/5 blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-[#33bbcf] flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Warm Leads</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">SCORE: 60-89</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interested</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Expressed clear interest, matches target industry, budget validation is needed.</p>
              <div className="p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-yellow-400 font-mono text-[10px] font-bold uppercase tracking-widest text-center">
                Needs Follow-Up Evaluation
              </div>
            </div>

            {/* Cold Leads */}
            <div className="glass-morphism border-white/5 bg-[#07021a]/50 p-8 rounded-3xl text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[#33bbcf] flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Cold Leads</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">SCORE: 10-59</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Researching</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Browsing resources, no immediate buy intention, low-budget profile matches.</p>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest text-center">
                Long-Term Nurturing Loop
              </div>
            </div>
          </div>
        </section>

        {/* LIVE DASHBOARD PREVIEW */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">System Intelligence</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Consolidated Engine Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              A premium, real-time analytics panel showing leads captured, qualified conversions, and pipeline valuation.
            </p>
          </div>

          <div className="glass-morphism border-white/5 bg-white/[0.01] rounded-[2rem] p-6 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Top Stats Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: "Total Leads Captured", val: "1,248", change: "+12.4%", icon: <Users className="w-4 h-4 text-blue-400" /> },
                { title: "Qualified Leads (Hot)", val: "812", change: "92.3% Acc", icon: <Flame className="w-4 h-4 text-red-400" /> },
                { title: "AI Replies Sent", val: "1,248", change: "100% Rate", icon: <MessageSquare className="w-4 h-4 text-cyan-400" /> },
                { title: "Revenue Potential", val: "₹18.4 Lakhs", change: "Est. Value", icon: <DollarSign className="w-4 h-4 text-green-400" /> }
              ].map((stat) => (
                <div key={stat.title} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-left flex justify-between items-center">
                  <div>
                    <h5 className="text-[10px] text-gray-500 font-semibold mb-1 uppercase tracking-wider">{stat.title}</h5>
                    <p className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{stat.val}</p>
                    <span className="text-[8px] font-mono text-green-400 font-bold">{stat.change}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 shrink-0">{stat.icon}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Chart Mockup (Col 7) */}
              <div className="lg:col-span-7 p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xs font-mono uppercase text-gray-600 dark:text-gray-400 tracking-wider">Lead Intake Growth</h5>
                    <div className="flex gap-2 text-[8px] font-mono font-bold text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Auto AI</span>
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Human Manual</span>
                    </div>
                  </div>

                  {/* SVG Line Graph */}
                  <svg viewBox="0 0 500 200" className="w-full h-44 pointer-events-none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 180 Q100 130 200 90 T400 40 L500 20" fill="none" stroke="#3b82f6" strokeWidth="4" />
                    <path d="M0 180 Q100 130 200 90 T400 40 L500 20 L500 200 L0 200 Z" fill="url(#chartGlow)" />
                    <path d="M0 190 Q100 180 200 160 T400 150 L500 140" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 5" />
                    {/* Dots */}
                    <circle cx="200" cy="90" r="4" fill="#3b82f6" />
                    <circle cx="400" cy="40" r="4" fill="#3b82f6" />
                  </svg>
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Intelligent automation outperforms human dispatch speeds by 800%.</p>
              </div>

              {/* Conversion Funnel Mockup (Col 5) */}
              <div className="lg:col-span-5 p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-left flex flex-col justify-between">
                <h5 className="text-xs font-mono uppercase text-gray-600 dark:text-gray-400 tracking-wider mb-6">Lead-to-Meeting Conversion</h5>

                <div className="space-y-4">
                  {[
                    { label: "1. Enquiries Received", val: "100 Leads", w: "w-full", color: "bg-blue-600/40" },
                    { label: "2. Qualified by AI", val: "65 Qualified", w: "w-[65%]", color: "bg-purple-600/40" },
                    { label: "3. Calendar Booked", val: "20 Meetings", w: "w-[20%]", color: "bg-cyan-600/40" },
                    { label: "4. Deals Closed", val: "8 Customers", w: "w-[8%]", color: "bg-green-500" }
                  ].map((row) => (
                    <div key={row.label} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-300">
                        <span>{row.label}</span>
                        <span className="font-mono">{row.val}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                        <div className={`h-full ${row.w} ${row.color} rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Target Verticals</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Custom Built For Every Industry
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              The AI Lead Engine is tailored specifically to your business rules. Click on the industries below to see targeted outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Industry selector tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {industriesData.map((ind, idx) => {
                const isActive = activeIndustry === idx;
                return (
                  <button
                    key={ind.title}
                    onClick={() => setActiveIndustry(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${isActive
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-gray-900 dark:text-white shadow-lg shadow-blue-500/5"
                        : "bg-white/[0.01] border-white/5 text-gray-600 dark:text-gray-400 hover:bg-white/[0.02] hover:border-gray-200 dark:border-white/10"
                      }`}
                  >
                    <span className="text-sm font-bold">{ind.title}</span>
                    <Building2 className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 text-blue-400" : "text-gray-500"}`} />
                  </button>
                );
              })}
            </div>

            {/* Selected industry details visual */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-morphism border-white/5 bg-[#05021a]/80 p-8 rounded-[2rem] h-full flex flex-col justify-between text-left shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                      <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono uppercase tracking-widest font-bold">
                        Vertical Spec
                      </span>
                      <span className="text-sm font-bold text-green-400 font-mono">
                        {industriesData[activeIndustry].metric}
                      </span>
                    </div>

                    <h4 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                      {industriesData[activeIndustry].title}
                    </h4>

                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      {industriesData[activeIndustry].desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Projected Outcome:</span>
                    <span className="text-base font-black text-gray-900 dark:text-white tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {industriesData[activeIndustry].outcome}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* GO-LIVE TIMELINE SECTION */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">7-Day Deployment</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Implementation Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              A rapid deployment strategy that takes your business from manual processes to fully autonomous AI operations in one week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 max-w-6xl mx-auto text-left">
            {[
              { day: "Day 1", title: "Business Discovery", desc: "Audit existing pipeline, channels, products & custom business logic." },
              { day: "Day 2", title: "Workflow Mapping", desc: "Design system flowchart, BANT qualification checklist, & messaging templates." },
              { day: "Day 3", title: "AI Configuration", desc: "Train AI engine on company data, catalogs, and tone parameters." },
              { day: "Day 4", title: "Integrations Link", desc: "Link website, WhatsApp APIs, email servers, CRM, and Sheets." },
              { day: "Day 5", title: "System Testing", desc: "Trigger test enquiries to check reply speeds, AI accuracy, and logging." },
              { day: "Day 6", title: "Team Training", desc: "Instruct sales team on lead score notifications and human handover." },
              { day: "Day 7", title: "Launch & Go Live", desc: "Publish system pipeline live. Operations start running autonomously 24/7." }
            ].map((step, idx) => (
              <div key={step.day} className="card-glass flex flex-col">
                <div className="absolute top-3 right-4 text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">{step.day}</div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDY SECTION */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-green-400 mb-2 font-bold">Case Studies</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Real Business Results
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              Verified outcomes showing how TechieHelp automation directly shifts commercial metrics.
            </p>
          </div>

          <div className="glass-morphism border-white/5 bg-[#05021a]/80 p-8 rounded-[2rem] max-w-4xl mx-auto shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-green-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                  Verified Result
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">JIET Coaching Institute case</span>
              </div>
              <div className="text-2xl font-black text-green-400 tracking-tight font-mono">2.7X More Leads</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Before vs After Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30 flex justify-between items-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                  <div>
                    <h5 className="text-[10px] uppercase text-red-400 font-mono font-bold tracking-widest mb-1">Before TechieHelp</h5>
                    <p className="text-sm font-semibold text-gray-300">Manual Staff Follow-Up</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase text-gray-500 font-mono">Response Time</p>
                    <p className="text-base font-extrabold text-gray-900 dark:text-white">4 Hours</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-green-950/20 border border-green-900/30 flex justify-between items-center relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                  <div>
                    <h5 className="text-[10px] uppercase text-green-400 font-mono font-bold tracking-widest mb-1">After TechieHelp</h5>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">AI Lead Engine Active</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase text-gray-500 font-mono">Response Time</p>
                    <p className="text-base font-extrabold text-green-400">45 Seconds</p>
                  </div>
                </div>
              </div>

              {/* Case text desc */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Eliminated lead delay leakage entirely.</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  The Institute was receiving hundreds of student inquiries daily via Facebook Ads and WhatsApp. Because staff took hours to follow up manually, students had already booked calls with competing institutes.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  By deploying the AI Lead Engine, 100% of leads received immediate WhatsApp replies, qualified details (course choice, timing, budget) automatically, and synced hot candidates to the counselors in 45 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TECHIEHELP */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Why TechieHelp</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              AI Built For Enterprise Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              We deliver complete operational systems custom-configured to your commercial pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Custom Built For Your Business", desc: "Every flow, filter criteria, and message copy is custom-designed based on your product catalog." },
              { title: "Full Ownership", desc: "No recurring software subscription trap. You own the code stack and integrations completely." },
              { title: "No Technical Knowledge Required", desc: "We handle the entire setup, API links, testing, and deployment. You just receive qualified leads." },
              { title: "Fast 7-Day Deployment", desc: "Our pre-configured operational templates ensure your system goes live within a week." },
              { title: "Indian Support Team", desc: "Dedicated local developer support available via phone/WhatsApp for any pipeline modifications." },
              { title: "AI Employees Working 24/7", desc: "Zero downtime, zero sick leaves, zero delay. AI handles leads at midnight with the same speed as midday." }
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left hover:border-gray-200 dark:border-white/10 transition-all flex flex-col justify-between shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING PLANS */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Transparent Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Choose Your AI Lead Engine
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              No monthly license fees. One-time build cost with full system ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Basic Setup */}
            <div className="glass-morphism border-white/5 bg-[#05021a]/60 p-8 rounded-[2rem] text-left flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Basic Setup</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold mb-6">Single Inbound Integration</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">₹15,000</span>
                  <span className="text-xs text-gray-500 font-medium">One-Time Cost</span>
                </div>

                <ul className="space-y-4 text-xs text-gray-600 dark:text-gray-400 mb-8">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Web Form Integration</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Email Auto Reply (Gmail)</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> CRM / Google Sheets Logging</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> 3 Day Setup Deployment</li>
                </ul>
              </div>

              <a
                href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team,%20I%20am%20interested%20in%20deploying%20the%20Basic%20Setup%20AI%20Lead%20Engine%20for%20my%20business.%20Please%20guide%20me%20further."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:text-gray-900 dark:text-white rounded-xl font-bold text-center transition-all text-xs text-gray-900 dark:text-white"
              >
                Get Basic Setup
              </a>
            </div>

            {/* Standard Engine (Popular) */}
            <div className="glass-morphism border-blue-500/30 bg-[#0c052d]/60 p-8 rounded-[2rem] text-left flex flex-col justify-between shadow-2xl relative overflow-hidden scale-105">
              <div className="btn-primary">
                Popular Plan
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Standard Engine</h4>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-mono font-bold mb-6">Omnichannel AI Employee</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">₹25,000</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">One-Time Cost</span>
                </div>

                <ul className="space-y-4 text-xs text-gray-300 mb-8">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#33bbcf] stroke-[3]" /> Multi-Channel Lead Capture</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#33bbcf] stroke-[3]" /> WhatsApp Business Auto-Reply</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#33bbcf] stroke-[3]" /> Smart AI Lead Qualification</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#33bbcf] stroke-[3]" /> HubSpot/CRM Auto Integration</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#33bbcf] stroke-[3]" /> 5 Day Complete Deployment</li>
                </ul>
              </div>

              <a
                href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team,%20I%20am%20interested%20in%20deploying%20the%20Standard%20AI%20Lead%20Engine%20for%20my%20business.%20Please%20guide%20me%20further."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Standard Engine
              </a>
            </div>

            {/* Enterprise Custom */}
            <div className="glass-morphism border-white/5 bg-[#05021a]/60 p-8 rounded-[2rem] text-left flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Enterprise Custom</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold mb-6">Tailored AI Reasoning</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">Custom</span>
                  <span className="text-xs text-gray-500 font-medium">Pricing</span>
                </div>

                <ul className="space-y-4 text-xs text-gray-600 dark:text-gray-400 mb-8">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Unlimited Marketing Channels</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Custom LLM / AI Logic Training</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Advanced CRM & ERP Integrations</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400 stroke-[3]" /> Dedicated developer support contract</li>
                </ul>
              </div>

              <a
                href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team,%20I%20am%20interested%20in%20deploying%20the%20Enterprise%20Custom%20AI%20Lead%20Engine%20for%20my%20business.%20Please%20guide%20me%20further."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:text-gray-900 dark:text-white rounded-xl font-bold text-center transition-all text-xs text-gray-900 dark:text-white"
              >
                Book Enterprise Discussion
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[4px] text-blue-400 mb-2 font-bold">Common Queries</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-2 text-sm md:text-base">
              Everything you need to know about TechieHelp's AI Lead Engine.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {[
              {
                q: "How does AI qualify leads?",
                a: "The AI acts as an intelligent agent. When a lead submits an inquiry, the AI parses their request and immediately follows up with specific questions on WhatsApp or Email (e.g., about their budget range, project timeline, size). It maps the replies against your BANT (Budget, Authority, Need, Timeline) parameters, scores the lead, and logs the result."
              },
              {
                q: "Can it connect with WhatsApp?",
                a: "Yes. We integrate the engine directly with the WhatsApp Business API. This allows the AI agent to send template messages, respond to customer queries, and engage in natural, text-based conversations with prospects in real-time."
              },
              {
                q: "Can it connect with my CRM?",
                a: "Absolutely. We support deep integrations with all major CRMs, including HubSpot, Salesforce, Zoho, and Pipedrive. If you don't use a CRM, we sync all lead profiles, conversation records, and qualification scores with Google Sheets."
              },
              {
                q: "How long does deployment take?",
                a: "Basic setups are completed in 3 days. Standard Omnichannel engines are deployed, tested, and handed over to your team in 5 days. Custom enterprise solutions involving specialized database integrations take 7-14 days."
              },
              {
                q: "Do I own the system?",
                a: "Yes. Unlike SaaS software platforms that charge expensive monthly licensing fees, TechieHelp is an automation agency. We build your AI Lead Engine inside your own workspace accounts (Make, Zapier, OpenAI API, Meta WhatsApp Cloud API). Once deployed, you own the entire flow completely with no recurring agency fees."
              },
              {
                q: "Can it work with Google Sheets?",
                a: "Yes. Google Sheets is our default integration setup for small businesses. It creates a centralized, easily accessible spreadsheet where lead contacts, AI scores, qualification summaries, and communication timestamps are synced in real-time."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="glass-morphism border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex justify-between items-center text-gray-900 dark:text-white font-bold text-sm md:text-base hover:bg-white/[0.02]"
                  >
                    <span>{faq.q}</span>
                    <div className="p-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 0.8 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 border-t border-white/5 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-30 -z-10 animate-pulse" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -z-10" />

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
            Stop Losing Leads To Slow Follow-Ups.
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy your AI Lead Engine in 7 days and let AI capture, qualify, and convert customers automatically. Elevate your conversion pipeline with a 24/7 dedicated digital employee.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team,%20I%20am%20ready%20to%20deploy%20the%20AI%20Lead%20Engine%20for%20my%20business.%20Please%20guide%20me%20further."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 font-extrabold px-8 py-4 rounded-xl text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-1.5"
            >
              Get My AI Lead Engine
            </a>
            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Custom Automation Plan
            </a>
            <a
              href="tel:+917673825079"
              className="px-6 py-4 text-gray-300 hover:text-gray-900 dark:text-white font-bold transition-colors text-sm flex items-center gap-1.5"
            >
              Call Now
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AILeadEngine;
