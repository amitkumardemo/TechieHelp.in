import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Mail, Phone, Globe, Lock, Unlock, Database, ArrowRight, Play, Pause, RefreshCw, CheckCircle, Cpu } from "lucide-react";

const stepsData = [
  {
    title: "1. The Inbound Inquiry",
    label: "Inbound Inquiry",
    description: "A high-value lead (Rajesh, Founder of ScaleUp) submits a demo request on your website and sends an email: 'Need custom agent pricing today.'",
    siloed: {
      action: "Website form data sits in the web server; the email is isolated in the sales representative's email client.",
      visualState: "incoming",
      highlightNodes: ["web", "email"],
      alert: "Data isolated in separate, disconnected accounts"
    },
    leadai: {
      action: "LeadAI instantly captures both the website form submission and the incoming email within milliseconds.",
      visualState: "incoming",
      highlightNodes: ["web", "email"],
      alert: "Instant multi-channel ingestion active"
    }
  },
  {
    title: "2. The CRM Sync Syncing",
    label: "Database Sync",
    description: "The lead's requirements need to sync with the main sales database to update the client's file.",
    siloed: {
      action: "No integration exists. The central database has zero records of the email or form submission.",
      visualState: "blocked",
      highlightNodes: ["web", "email"],
      alert: "❌ Blocked by Silo Barrier"
    },
    leadai: {
      action: "LeadAI automatically merges the form details and email inquiries into a single unified contact profile.",
      visualState: "synced",
      highlightNodes: ["web", "email", "crm"],
      alert: "✓ 100% Unified Profile Synced"
    }
  },
  {
    title: "3. Inbound Sales Call",
    label: "Customer Call",
    description: "Rajesh calls the sales line to get answers. The phone system rings and a sales agent picks up.",
    siloed: {
      action: "The call recording is isolated. The agent has no access to the email or form. 'Can you repeat what you need?'",
      visualState: "no-context",
      highlightNodes: ["phone"],
      alert: "⚠️ Agent has zero history or context"
    },
    leadai: {
      action: "LeadAI loads his profile instantly. The agent answers: 'Hi Rajesh! I see you filled out our web form and emailed about agent pricing...'",
      visualState: "context-matched",
      highlightNodes: ["phone", "crm"],
      alert: "✓ Full Contact Profile loaded in 0.5s"
    }
  },
  {
    title: "4. The Deal Outcome",
    label: "Sales Outcome",
    description: "The speed and intelligence of the response determines if the lead converts or is lost.",
    siloed: {
      action: "Frustrated by repeated questions and a 4-hour delay, Rajesh drops out and goes to a competitor.",
      visualState: "cold",
      highlightNodes: [],
      alert: "❌ Lead Went Cold (Lost Revenue)"
    },
    leadai: {
      action: "Pricing details verified on call. Proposal auto-sent. Meeting booked. Deal closed in under 2 minutes.",
      visualState: "won",
      highlightNodes: ["crm"],
      alert: "✓ Deal Won (Response Time: 45 seconds)"
    }
  }
];

const RevenueStackProblem = () => {
  const [mode, setMode] = useState("siloed"); // "siloed" or "leadai"
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayTimer = useRef(null);

  console.log("DEBUG SIMULATOR RENDER:", {
    activeStep,
    stepsDataExists: !!stepsData,
    stepsDataLength: stepsData?.length,
    currentStepInfoExists: !!stepsData?.[activeStep]
  });

  const points = [
    "Leads come from everywhere.",
    "Emails live in one tool.",
    "Calls happen somewhere else.",
    "Customer context gets lost.",
    "Revenue slips away."
  ];

  // Auto-play steps logic
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % stepsData.length);
      }, 5000);
    } else {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPlaying]);

  const handleStepClick = (idx) => {
    setIsPlaying(false);
    setActiveStep(idx);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setActiveStep(0); // Reset journey to step 1 to let them view the comparison from start
  };

  const currentStepInfo = stepsData[activeStep];
  const stepConfig = mode === "siloed" ? currentStepInfo.siloed : currentStepInfo.leadai;

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-12 relative z-10 px-4 sm:px-6 bg-white dark:bg-[#02050c] overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Warning/Success backdrop glow based on mode */}
      <div className={`absolute right-[10%] top-[25%] w-[400px] h-[300px] transition-all duration-700 blur-[100px] rounded-full pointer-events-none -z-10 ${
        mode === "siloed" ? "bg-rose-500/[0.03]" : "bg-emerald-500/[0.03]"
      }`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: HEADING AND PROBLEM STATEMENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-6"
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Broken Pipelines
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-poppins font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-md"
            >
              Your Revenue Stack <span className="text-rose-500">Is Broken.</span>
            </motion.h2>

            <div className="mt-8 space-y-6">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-150 transition-transform duration-300 shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400 text-lg font-medium tracking-tight">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom info callout */}
            <div className="mt-12 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 max-w-lg">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Why does this animation matter?
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 leading-relaxed">
                Toggle between the tabs on the right. You will see how separate systems block data from reaching the CRM, creating blindspots for sales reps and causing leads to go cold.
              </p>
            </div>
          </div>

          {/* RIGHT: THE INTERACTIVE TIMELINE COMPARISON BOX */}
          <div className="flex flex-col gap-6 w-full">
            
            {/* The Simulation Console Card */}
            <div className="relative p-6 sm:p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl overflow-hidden">
              
              {/* Top Mode Selector Tabs */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-4 mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Interactive Simulator
                </span>
                
                <div className="flex bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
                  <button
                    onClick={() => handleModeChange("siloed")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      mode === "siloed"
                        ? "bg-rose-500 text-white shadow-md shadow-rose-500/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Lock className="w-3 h-3" /> Siloed Stack
                  </button>
                  <button
                    onClick={() => handleModeChange("leadai")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      mode === "leadai"
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Unlock className="w-3 h-3" /> LeadAI Way
                  </button>
                </div>
              </div>

              {/* Central Journey Map Diagram */}
              <div className="h-[210px] relative rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-900 p-4 overflow-hidden flex items-center justify-between">
                
                {/* 1. Left Side: Source Nodes */}
                <div className="flex flex-col gap-4 z-10">
                  
                  {/* Web Form Source */}
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                    stepConfig.highlightNodes.includes("web")
                      ? "bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400 scale-105 shadow-sm"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"
                  }`}>
                    <Globe className="w-4 h-4 shrink-0" />
                    <div className="text-left">
                      <p className="text-[8px] font-bold uppercase tracking-wider leading-none">Web Form</p>
                      <p className="text-[9px] font-semibold mt-0.5 leading-none">ScaleUp Inquiry</p>
                    </div>
                  </div>

                  {/* Inbound Email Source */}
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                    stepConfig.highlightNodes.includes("email")
                      ? "bg-indigo-500/10 border-indigo-500 text-indigo-600 dark:text-indigo-400 scale-105 shadow-sm"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"
                  }`}>
                    <Mail className="w-4 h-4 shrink-0" />
                    <div className="text-left">
                      <p className="text-[8px] font-bold uppercase tracking-wider leading-none">Email Client</p>
                      <p className="text-[9px] font-semibold mt-0.5 leading-none">Pricing request</p>
                    </div>
                  </div>

                  {/* Phone Call Source */}
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                    stepConfig.highlightNodes.includes("phone")
                      ? "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 scale-105 shadow-sm"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"
                  }`}>
                    <Phone className="w-4 h-4 shrink-0" />
                    <div className="text-left">
                      <p className="text-[8px] font-bold uppercase tracking-wider leading-none">Phone System</p>
                      <p className="text-[9px] font-semibold mt-0.5 leading-none">Rajesh Call</p>
                    </div>
                  </div>

                </div>

                {/* 2. Middle Pipeline Area */}
                <div className="flex-1 h-full relative flex items-center justify-center">
                  
                  {/* Traditional Siloed Barrier */}
                  {mode === "siloed" && (
                    <div className="w-full h-full relative flex items-center justify-center">
                      
                      {/* Dotted lines carrying red blocked packets */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 0,45 H 100" className="stroke-rose-300/40 dark:stroke-rose-800/30 stroke-2 stroke-dasharray" strokeDasharray="4 4" />
                        <path d="M 0,105 H 100" className="stroke-rose-300/40 dark:stroke-rose-800/30 stroke-2 stroke-dasharray" strokeDasharray="4 4" />
                        <path d="M 0,165 H 100" className="stroke-rose-300/40 dark:stroke-rose-800/30 stroke-2 stroke-dasharray" strokeDasharray="4 4" />
                        
                        {/* Animating red packet bubbles */}
                        {isPlaying && stepConfig.highlightNodes.length > 0 && (
                          <>
                            <circle r="4" fill="#f43f5e" className="animate-ping">
                              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10,45 H 90" />
                            </circle>
                            <circle r="4" fill="#f43f5e" className="animate-ping">
                              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10,105 H 90" />
                            </circle>
                          </>
                        )}
                      </svg>

                      {/* Silo Barrier Divider */}
                      <div className="w-[2px] h-[80%] bg-dashed border-l border-rose-500/40 relative flex items-center justify-center">
                        <div className="absolute px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30 text-rose-500 text-[8px] font-bold uppercase tracking-widest rotate-90 whitespace-nowrap shadow-sm flex items-center gap-1 z-10">
                          <Lock className="w-2 h-2" /> Silo Boundary
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Connected LeadAI Central Cognition Pipeline */}
                  {mode === "leadai" && (
                    <div className="w-full h-full relative flex items-center justify-center">
                      
                      {/* Glowing pipelines linking sources to LeadAI Brain */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 5,45 Q 60,45 80,105" fill="none" className="stroke-emerald-400/40 dark:stroke-emerald-500/20 stroke-2" />
                        <path d="M 5,105 H 80" fill="none" className="stroke-emerald-400/40 dark:stroke-emerald-500/20 stroke-2" />
                        <path d="M 5,165 Q 60,165 80,105" fill="none" className="stroke-emerald-400/40 dark:stroke-emerald-500/20 stroke-2" />
                        
                        <path d="M 120,105 H 180" fill="none" className="stroke-emerald-400/60 dark:stroke-emerald-500/30 stroke-2" />

                        {/* Animating green packets flowing into brain */}
                        {isPlaying && (
                          <>
                            {stepConfig.highlightNodes.includes("web") && (
                              <circle r="4" fill="#10b981">
                                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 5,45 Q 60,45 80,105" />
                              </circle>
                            )}
                            {stepConfig.highlightNodes.includes("email") && (
                              <circle r="4" fill="#10b981">
                                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 5,105 H 80" />
                              </circle>
                            )}
                            {stepConfig.highlightNodes.includes("phone") && (
                              <circle r="4" fill="#10b981">
                                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 5,165 Q 60,165 80,105" />
                              </circle>
                            )}
                            {activeStep >= 1 && (
                              <circle r="4" fill="#10b981">
                                <animateMotion dur="1.2s" repeatCount="indefinite" path="M 120,105 H 180" />
                              </circle>
                            )}
                          </>
                        )}
                      </svg>

                      {/* LeadAI Brain Node */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 z-10 animate-pulse relative">
                        <div className="absolute inset-[-4px] rounded-2xl border border-emerald-400/40 animate-ping opacity-70" style={{ animationDuration: '3s' }} />
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                </div>

                {/* 3. Right Side: The Sales CRM Card */}
                <div className="w-[125px] z-10">
                  <div className={`p-3 rounded-xl border flex flex-col justify-between h-[170px] bg-white dark:bg-slate-900 transition-all duration-300 ${
                    mode === "siloed"
                      ? "border-rose-100 dark:border-rose-950/20"
                      : "border-emerald-100 dark:border-emerald-950/20 shadow-sm"
                  }`}>
                    
                    {/* Database Header */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Database className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">Sales CRM</span>
                      </div>
                      
                      <div className="h-[2px] w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-3" />
                    </div>

                    {/* CRM Dynamic Lead Information */}
                    <div className="flex-1 flex flex-col justify-center gap-2">
                      {mode === "siloed" ? (
                        /* Siloed Empty Info States */
                        activeStep === 3 ? (
                          <div className="text-center p-1 rounded bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
                            <p className="text-[8px] font-bold text-rose-500 uppercase">Lead Lost</p>
                            <p className="text-[7px] text-rose-400 mt-0.5 leading-tight">No interaction synced. Stale profile.</p>
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
                            <div className="h-2 w-4/5 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
                            <p className="text-[7px] font-semibold text-rose-400 text-center uppercase tracking-wider animate-pulse pt-1">
                              ✖ Blind State
                            </p>
                          </div>
                        )
                      ) : (
                        /* LeadAI Populated Context States */
                        activeStep >= 1 ? (
                          <div className="space-y-1 text-[8px] font-semibold leading-tight text-slate-700 dark:text-slate-300">
                            <div className="bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                              <span className="text-[7px] text-slate-400 block uppercase">Lead Name</span>
                              <span className="font-bold">Rajesh (ScaleUp)</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                              <span className="text-[7px] text-slate-400 block uppercase">Merged Context</span>
                              <span className="text-emerald-500 font-bold truncate block">Forms + Emails linked</span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
                            <div className="h-2 w-4/5 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
                            <p className="text-[7px] font-semibold text-slate-400 text-center uppercase">Waiting...</p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="mt-2">
                      {mode === "siloed" ? (
                        <div className="px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-center">
                          <span className="text-[7px] font-bold text-rose-500 uppercase tracking-widest">
                            {activeStep === 3 ? "OFFLINE" : "UNRESOLVED"}
                          </span>
                        </div>
                      ) : (
                        <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-center flex items-center justify-center gap-0.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-[7px] font-bold text-emerald-500 uppercase tracking-widest">
                            {activeStep === 3 ? "DEAL WON" : "AUTO-SYNCED"}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </div>

              {/* Progress/Step Ticker bar */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {stepsData.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className={`py-2 px-1 rounded-lg border text-center transition-all flex flex-col justify-between items-center ${
                      activeStep === idx
                        ? mode === "siloed"
                          ? "border-rose-400 bg-rose-500/5 text-rose-500"
                          : "border-emerald-400 bg-emerald-500/5 text-emerald-500"
                        : "border-slate-100 dark:border-slate-900 bg-transparent text-slate-400 hover:border-slate-200 dark:hover:border-slate-800"
                    }`}
                  >
                    <span className="text-[8px] font-bold uppercase tracking-tight block">Step {idx + 1}</span>
                    <span className="text-[9px] font-semibold tracking-tight mt-0.5 truncate max-w-full">
                      {step.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Narrative Panel Explaining the Active State */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    {currentStepInfo.title}
                  </h4>
                  <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded border ${
                    mode === "siloed"
                      ? "bg-rose-500/10 border-rose-500/20 text-rose-500"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  }`}>
                    {stepConfig.alert}
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal mb-2.5">
                  {currentStepInfo.description}
                </p>

                <div className={`p-2.5 rounded-xl text-[10px] leading-relaxed font-semibold ${
                  mode === "siloed"
                    ? "bg-rose-50/40 dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-900/20 text-slate-600 dark:text-rose-400"
                    : "bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/20 text-slate-600 dark:text-emerald-400"
                }`}>
                  <span className="font-extrabold block text-[8px] uppercase tracking-wider mb-0.5">
                    {mode === "siloed" ? "🔴 System Friction" : "🟢 LeadAI Resolution"}
                  </span>
                  {stepConfig.action}
                </div>
              </div>

              {/* Control Bar (Play, Pause, Reset) */}
              <div className="flex items-center justify-between mt-4 text-slate-400 text-[10px]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-700 dark:hover:text-white transition-colors bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => {
                      setActiveStep(0);
                      setIsPlaying(true);
                    }}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-700 dark:hover:text-white transition-colors bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[9px] uppercase tracking-wider">
                    {isPlaying ? "Autoplay On" : "Autoplay Paused"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="font-mono text-[9px]">Timeline: Step {activeStep + 1} of 4</span>
                </div>
              </div>

            </div>

            {/* Bottom Section Callout */}
            <div className="p-4 rounded-2xl bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-100/50 dark:border-emerald-900/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                    How LeadAI eliminates this problem
                  </h4>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">
                    By syncing all sources instantly with AI-powered context synthesis, sales agents have full history before they even answer.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-poppins text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent inline-flex items-center gap-3">
            LeadAI brings everything together.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default RevenueStackProblem;
