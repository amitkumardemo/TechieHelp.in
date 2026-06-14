import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, UserPlus, MessageSquare, PhoneCall, Activity, CheckCircle, Play, Pause } from "lucide-react";

const heroSampleLeads = [
  { name: "Ananya Patel", company: "RetailTech India", budget: "₹80,000 - ₹1,20,000", score: "HOT", badgeClasses: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]" },
  { name: "Vikram Singh", company: "BlueSky Manufacturing", budget: "₹40,000 - ₹75,000", score: "WARM", badgeClasses: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]" },
  { name: "Neha Gupta", company: "Elevate EduCare", budget: "₹1,50,000 - ₹2,50,000", score: "URGENT", badgeClasses: "bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]" },
  { name: "Rajat Kapoor", company: "Kapoor Real Estate", budget: "₹20,000 - ₹50,000", score: "MILD", badgeClasses: "bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]" },
  { name: "Sonal Tiwari", company: "Tiwari Consulting Group", budget: "₹1,00,000 - ₹1,80,000", score: "HOT", badgeClasses: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]" },
  { name: "Arvind Joshi", company: "AgriGrow Solutions", budget: "₹30,000 - ₹60,000", score: "WARM", badgeClasses: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]" },
  { name: "Kavita Reddy", company: "Reddy Healthcare", budget: "₹2,00,000 - ₹3,50,000", score: "URGENT", badgeClasses: "bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]" },
  { name: "Nitin Agarwal", company: "Agarwal Wealth Managers", budget: "₹90,000 - ₹1,40,000", score: "HOT", badgeClasses: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]" },
  { name: "Pooja Verma", company: "Verma Design Studios", budget: "₹15,000 - ₹40,000", score: "MILD", badgeClasses: "bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]" },
  { name: "Deepak Chawla", company: "Chawla Auto Parts", budget: "₹60,000 - ₹90,000", score: "WARM", badgeClasses: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]" },
  { name: "Meera Iyer", company: "Iyer Legal Associates", budget: "₹1,20,000 - ₹2,00,000", score: "URGENT", badgeClasses: "bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]" },
  { name: "Gaurav Malhotra", company: "Malhotra Event Planners", budget: "₹45,000 - ₹80,000", score: "HOT", badgeClasses: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]" },
  { name: "Shruti Rao", company: "Rao Digital Marketing", budget: "₹70,000 - ₹1,10,000", score: "WARM", badgeClasses: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]" },
  { name: "Karan Singh", company: "Singh Transport & Co", budget: "₹1,80,000 - ₹3,00,000", score: "URGENT", badgeClasses: "bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]" },
  { name: "Ayesha Khan", company: "Khan Boutique Chains", budget: "₹50,000 - ₹85,000", score: "HOT", badgeClasses: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]" },
];

const HeroSimulation = () => {
  const [heroStep, setHeroStep] = useState(0);
  const [leadIndex, setLeadIndex] = useState(0);
  const [isHeroSimRunning, setIsHeroSimRunning] = useState(true);

  const currentLead = heroSampleLeads[leadIndex];

  const heroSimulationSteps = [
    {
      label: "System Connected",
      badge: "Active",
      badgeColor: "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30",
      description: "TechieHelp AI seamlessly connected to your Gmail and Website forms.",
      icon: Mail,
      highlight: "connected"
    },
    {
      label: "New Lead Detected",
      badge: "Listening",
      badgeColor: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30",
      description: "Incoming lead inquiry detected. Extracting contact details instantly.",
      icon: UserPlus,
      highlight: "lead"
    },
    {
      label: "Custom Email Sent",
      badge: "Responding",
      badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30",
      description: "AI drafts and sends a personalized, context-aware email reply within 2 seconds.",
      icon: MessageSquare,
      highlight: "email"
    },
    {
      label: "AI Call Triggered",
      badge: "Calling",
      badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30",
      description: "Voice AI initiates a phone call to qualify the lead and answer questions.",
      icon: PhoneCall,
      highlight: "call"
    },
    {
      label: "Dashboard Updated",
      badge: "Recorded",
      badgeColor: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30",
      description: "Full call recording and transcript instantly available on your TechieHelp dashboard.",
      icon: Activity,
      highlight: "dashboard"
    },
    {
      label: "Client Onboarded",
      badge: "Resolved",
      badgeColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
      description: "Lead marked as HOT. CRM updated and client successfully onboarded automatically.",
      icon: CheckCircle,
      highlight: "onboard"
    }
  ];

  useEffect(() => {
    let interval = null;
    if (isHeroSimRunning) {
      interval = setInterval(() => {
        setHeroStep((prev) => {
          if (prev >= heroSimulationSteps.length - 1) {
            setLeadIndex((i) => (i + 1) % heroSampleLeads.length);
            return 0;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHeroSimRunning]);

  return (
    <div className="w-full">
      {/* Dashboard Window Frame */}
      <div className="bg-[#0B101E] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] font-sans text-left relative group">

        {/* Animated Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />

        {/* Dashboard Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40 relative z-10">
          <div className="flex flex-1 items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="flex-1 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] flex justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            LeadAI Dashboard
          </div>
          <div className="flex flex-1 justify-end items-center">
            <button
              onClick={() => setIsHeroSimRunning(!isHeroSimRunning)}
              className="text-[10px] font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-2 py-1 text-gray-400 hover:text-white flex items-center gap-1.5 transition-all"
            >
              {isHeroSimRunning ? (
                <><Pause className="w-3 h-3" /> Pause</>
              ) : (
                <><Play className="w-3 h-3 text-cyan-400" /> Play</>
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Content Split */}
        <div className="flex flex-col md:flex-row relative z-10">

          {/* Left Sidebar: Lead Info */}
          <div className="w-full md:w-[40%] bg-white/[0.02] border-r border-white/5 p-5 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Incoming Lead Detail</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Lead Name</p>
                  <p className="text-white font-bold text-lg md:text-xl transition-all">{currentLead.name}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Company / Organization</p>
                  <p className="text-gray-300 font-medium text-sm md:text-base transition-all">{currentLead.company}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Reported Budget Range</p>
                  <p className="text-cyan-400 font-bold text-sm md:text-base transition-all">{currentLead.budget}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">AI Lead Score</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded border text-xs font-bold transition-all ${currentLead.badgeClasses}`}>
                    {currentLead.score}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
              <span>Simulation Cycle</span>
              <span className="font-bold text-white">Automated Demo</span>
            </div>
          </div>

          {/* Right Panel: Pipeline Logs */}
          <div className="w-full md:w-[60%] p-5 md:p-6 bg-black/20">
            <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Pipeline Execution Logs</h3>

            <div className="space-y-2 relative">
              {/* Connecting vertical line */}
              <div className="absolute top-4 bottom-4 left-5 w-0.5 bg-white/5 z-[0]" />

              {heroSimulationSteps.map((step, idx) => {
                const isActive = idx === heroStep;
                const isPast = idx < heroStep;
                const StepIcon = step.icon;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setHeroStep(idx);
                      setIsHeroSimRunning(false);
                    }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer border relative z-10 ${isActive
                      ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.15)] scale-[1.02]"
                      : isPast
                        ? "bg-transparent border-transparent opacity-60"
                        : "bg-transparent border-transparent opacity-30 hover:opacity-50"
                      }`}
                  >
                    {/* Icon Node */}
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border relative z-10 transition-colors duration-300 ${isActive
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                        : isPast
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-gray-800 border-gray-700 text-gray-500"
                        }`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className={`text-[13px] font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>{step.label}</h4>
                        {isActive ? (
                          <span className={`text-[8px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        ) : isPast ? (
                          <span className={`text-[8px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20`}>
                            Done
                          </span>
                        ) : null}
                      </div>

                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSimulation;
