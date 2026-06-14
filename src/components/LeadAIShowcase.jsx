import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Bot, Activity, Clock, Zap, Target, Mail, 
  PhoneCall, Database, CalendarCheck, TrendingUp,
  BrainCircuit, ShieldCheck, UserCheck, Code
} from "lucide-react";

const sampleLeads = [
  { name: "Rahul Sharma", company: "TechNova Solutions", initial: "RS", email: "rahul@technova.com", source: "Website Form", priority: "High", intent: "Workflow Automation", budget: "₹50K+", timeframe: "30 Days", decisionMaker: "Founder", score: "92/100", revenue: "₹85,000", prob: "87%" },
  { name: "Priya Desai", company: "Apex Logistics", initial: "PD", email: "priya.d@apexlogistics.in", source: "LinkedIn Ad", priority: "Urgent", intent: "Fleet Tracking AI", budget: "₹1.2L+", timeframe: "Immediate", decisionMaker: "Operations Head", score: "98/100", revenue: "₹1,20,000", prob: "95%" },
  { name: "Amit Kumar", company: "Global Finance", initial: "AK", email: "amit.kumar@globalfin.co", source: "Organic Search", priority: "Medium", intent: "Document Extraction", budget: "₹25K+", timeframe: "90 Days", decisionMaker: "IT Manager", score: "78/100", revenue: "₹30,000", prob: "65%" },
  { name: "Sneha Reddy", company: "MediCare Plus", initial: "SR", email: "sreddy@medicare.in", source: "Referral", priority: "High", intent: "Patient Booking Bot", budget: "₹75K+", timeframe: "45 Days", decisionMaker: "Director", score: "88/100", revenue: "₹75,000", prob: "82%" }
];

const getTimelineSteps = (lead) => [
  { id: 0, title: "Lead Detected", icon: Target, time: "0.0s", detail: "Lead captured from source" },
  { id: 1, title: "Intent Analyzed", icon: BrainCircuit, time: "0.2s", detail: "NLP analysis complete" },
  { id: 2, title: "Reply Generated", icon: Code, time: "0.5s", detail: "Custom response drafted" },
  { id: 3, title: "Email Sent", icon: Mail, time: "0.8s", detail: `Delivered to ${lead.email}` },
  { id: 4, title: "Call Triggered", icon: PhoneCall, time: "1.5s", detail: "Voice agent initiating contact" },
  { id: 5, title: "Lead Qualified", icon: ShieldCheck, time: "4.2s", detail: "BANT criteria matched" },
  { id: 6, title: "CRM Updated", icon: Database, time: "4.5s", detail: "Record synced to Salesforce" },
  { id: 7, title: "Meeting Booked", icon: CalendarCheck, time: "5.0s", detail: "Slot confirmed for Tomorrow" }
];

const LeadAIShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [leadIndex, setLeadIndex] = useState(0);
  
  const currentLead = sampleLeads[leadIndex];
  const timelineSteps = getTimelineSteps(currentLead);

  // Simulation Engine Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= timelineSteps.length - 1) {
          // Pause at the end for a bit, then restart with new lead
          setTimeout(() => {
            setCurrentStep(0);
            setLeadIndex((prevIndex) => (prevIndex + 1) % sampleLeads.length);
          }, 4000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500); // 1.5s per step

    return () => clearInterval(timer);
  }, [timelineSteps.length]);

  return (
    <section id="leadai-demo" className={`py-16 sm:py-24 px-4 sm:px-6 relative z-10 w-full overflow-hidden bg-white dark:bg-[#03030a]`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1300px] mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Bot className="w-4 h-4" /> Autonomous Business OS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Watch LeadAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            See how your AI Employee captures leads, qualifies opportunities, communicates with prospects, updates systems, and books meetings automatically.
          </motion.p>
        </div>

        {/* The Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full bg-gray-50 dark:bg-[#080812] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
        >
          {/* Top Bar: Live Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white dark:bg-[#0c0c1a] border-b border-gray-200 dark:border-white/5 p-4 z-20">
            <div className="col-span-2 md:col-span-1 flex items-center gap-3 border-b pb-4 md:pb-0 md:border-b-0 border-transparent md:border-r md:border-gray-200 dark:md:border-white/10 px-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">System Status</p>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Active
                </p>
              </div>
            </div>
            
            <div className="px-2 border-r border-gray-200 dark:border-white/10">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Response Time</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {currentStep >= 1 ? "1.2s" : "0.0s"}
              </p>
            </div>
            <div className="px-2 md:border-r border-gray-200 dark:border-white/10">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Lead Score</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {currentStep >= 5 ? currentLead.score : currentStep >= 1 ? "Analyzing..." : "--"}
              </p>
            </div>
            <div className="px-2 border-r border-gray-200 dark:border-white/10">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Conversion Prob.</p>
              <p className="text-xl font-bold text-green-500">
                {currentStep >= 5 ? currentLead.prob : "--"}
              </p>
            </div>
            <div className="px-2">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Revenue Potential</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {currentStep >= 5 ? currentLead.revenue : "Calculating..."}
              </p>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="flex flex-col lg:flex-row flex-1 p-6 gap-6 relative z-10 bg-white/50 dark:bg-transparent">
            
            {/* COLUMN 1: Lead Data & Reasoning */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              
              {/* Incoming Lead Widget */}
              <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-white/5 pb-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">Incoming Lead Payload</h3>
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] rounded-full border border-blue-200 dark:border-blue-500/30">Just Now</span>
                </div>
                
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xl font-bold text-gray-600 dark:text-gray-300">
                    {currentLead.initial}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{currentLead.name}</h4>
                    <p className="text-sm text-gray-500">{currentLead.company}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Source:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentLead.source}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Priority:</span>
                    <span className={`font-medium flex items-center gap-1 ${currentLead.priority === 'Urgent' || currentLead.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}><Zap className="w-3 h-3"/> {currentLead.priority}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Email:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentLead.email}</span>
                  </div>
                </div>
              </div>

              {/* AI Reasoning Panel */}
              <div className={`bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl p-5 shadow-sm transition-all duration-500 ${currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-4 h-4 text-cyan-500" />
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">AI Logic Extractor</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Intent", value: currentLead.intent, step: 1 },
                    { label: "Budget", value: currentLead.budget, step: 1 },
                    { label: "Timeline", value: currentLead.timeframe, step: 1 },
                    { label: "Decision Maker", value: currentLead.decisionMaker, step: 1 },
                    { label: "Status", value: "Excellent Fit", step: 5, color: "text-green-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between items-center text-sm relative z-10">
                        <span className="text-gray-500">{item.label}</span>
                        <span className={`font-mono font-medium ${currentStep >= item.step ? (item.color || 'text-gray-900 dark:text-white') : 'text-gray-300 dark:text-gray-700'}`}>
                          {currentStep >= item.step ? item.value : "Scanning..."}
                        </span>
                      </div>
                      {currentStep === item.step && (
                        <motion.div 
                          initial={{ scaleX: 0, opacity: 0.5 }}
                          animate={{ scaleX: 1, opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 bg-cyan-500/10 origin-left"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLUMN 2: Activity Feed Timeline (Center) */}
            <div className="lg:w-1/3 bg-gray-50 dark:bg-[#0c0c1a] border border-gray-200 dark:border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-inner">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 text-center">Execution Timeline</h3>
              
              <div className="relative pl-10">
                {/* Connecting Line Background */}
                <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-white/10 z-0" />
                
                {/* Active Line Fill */}
                <motion.div 
                  className="absolute left-[15px] top-2 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-600 z-10"
                  initial={{ height: "0%" }}
                  animate={{ height: `${(currentStep / (timelineSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />

                {/* Glowing Particle */}
                <motion.div 
                  className="absolute left-[12px] w-2 h-6 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)] z-20"
                  initial={{ top: "0%" }}
                  animate={{ top: `calc(${(currentStep / (timelineSteps.length - 1)) * 100}% + 4px)` }}
                  transition={{ duration: 0.5 }}
                />

                <div className="space-y-6 relative z-30">
                  {timelineSteps.map((step, idx) => {
                    const isActive = currentStep === idx;
                    const isPast = currentStep > idx;
                    const StepIcon = step.icon;

                    return (
                      <div key={idx} className={`relative transition-all duration-300 ${isActive ? 'opacity-100 scale-[1.02]' : isPast ? 'opacity-70' : 'opacity-40'}`}>
                        
                        {/* Node */}
                        <div className="absolute -left-10 top-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors relative z-20 bg-gray-50 dark:bg-[#0c0c1a] ${isActive ? 'border-cyan-500 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : isPast ? 'border-blue-500 text-blue-500' : 'border-gray-300 dark:border-white/20 text-gray-400'}`}>
                            {isActive ? <Activity className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}}/> : <StepIcon className="w-3.5 h-3.5" />}
                          </div>
                          {isActive && (
                            <div className="absolute inset-0 rounded-full border border-cyan-500 animate-ping opacity-50 z-10" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="pt-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className={`text-sm font-bold ${isActive ? 'text-cyan-600 dark:text-cyan-400' : isPast ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                              {step.title}
                            </h4>
                            <span className="text-[10px] font-mono text-gray-400">{step.time}</span>
                          </div>
                          {isActive && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                            >
                              {step.detail}
                            </motion.p>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* COLUMN 3: Systems & Business Outcomes */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              
              {/* Communication Systems Widget */}
              <div className="flex-1 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl p-5 shadow-sm flex flex-col justify-center gap-5">
                
                {/* Email Module */}
                <div className={`p-4 rounded-xl border transition-all duration-500 ${currentStep >= 3 ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30' : 'bg-gray-50 dark:bg-white/5 border-transparent opacity-50'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Mail className={`w-4 h-4 ${currentStep >= 3 ? 'text-blue-500' : 'text-gray-400'}`} />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Email Outreach</span>
                    </div>
                    {currentStep >= 3 && <span className="px-2 py-0.5 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-[9px] uppercase tracking-wider rounded-md font-mono border border-green-200 dark:border-green-500/30">Delivered</span>}
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>To: {currentLead.email}</p>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Subject: Re: Automation specific to {currentLead.intent.toLowerCase()}</p>
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-black/50 rounded-full mt-3 overflow-hidden">
                      {currentStep >= 3 && <motion.div initial={{width:0}} animate={{width:"100%"}} transition={{duration: 1}} className="h-full bg-blue-500" />}
                    </div>
                  </div>
                </div>

                {/* Voice Call Module */}
                <div className={`p-4 rounded-xl border transition-all duration-500 ${currentStep >= 4 ? 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30' : 'bg-gray-50 dark:bg-white/5 border-transparent opacity-50'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <PhoneCall className={`w-4 h-4 ${currentStep >= 4 ? 'text-purple-500' : 'text-gray-400'}`} />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Voice Agent</span>
                    </div>
                    {currentStep === 4 && <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider font-mono text-purple-500"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"/> Calling...</span>}
                    {currentStep > 4 && <span className="text-[9px] text-gray-500 font-mono">02:14 mins</span>}
                  </div>
                  {currentStep >= 4 ? (
                    <div className="flex items-center gap-1 h-6">
                      {[...Array(15)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={currentStep === 4 ? { height: ["20%", "100%", "20%"] } : { height: "20%" }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-purple-400 rounded-full"
                          style={{ height: "20%" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400">Awaiting trigger...</p>
                  )}
                </div>

                {/* CRM Sync Module */}
                <div className={`p-4 rounded-xl border transition-all duration-500 ${currentStep >= 6 ? 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30' : 'bg-gray-50 dark:bg-white/5 border-transparent opacity-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Database className={`w-4 h-4 ${currentStep >= 6 ? 'text-cyan-500' : 'text-gray-400'}`} />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">CRM Sync</span>
                    </div>
                    {currentStep >= 6 && <UserCheck className="w-4 h-4 text-cyan-500" />}
                  </div>
                  <div className="flex items-center justify-between text-xs mt-3">
                    <span className="text-gray-500">Salesforce Stage</span>
                    <span className="font-bold text-gray-900 dark:text-white border-b border-dashed border-gray-400">{currentStep >= 7 ? "Meeting Set" : currentStep >= 6 ? "Qualified Lead" : "---"}</span>
                  </div>
                </div>

              </div>
              
              {/* Final Outcome Banner */}
              <div className={`bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-xl shadow-green-500/20 transition-all duration-500 transform ${currentStep >= 7 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-white" />
                    <span className="font-bold">Meeting Confirmed</span>
                  </div>
                </div>
                <p className="text-sm text-green-100">Tomorrow at 2:00 PM EST with {currentLead.company} {currentLead.decisionMaker}.</p>
                <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center text-xs font-mono">
                  <span>Human Effort: 0 mins</span>
                  <span className="bg-white/20 px-2 py-1 rounded">100% Automated</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadAIShowcase;
