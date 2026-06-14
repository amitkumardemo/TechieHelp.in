import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Wallet, CalendarX2, BrainCircuit, Rocket, ActivitySquare } from "lucide-react";

const features = [
  {
    id: 0,
    icon: Clock,
    title: "Works 24/7",
    description: "Never sleeps, never takes breaks. Your business runs around the clock automatically.",
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500",
    glowClass: "shadow-[0_0_40px_rgba(59,130,246,0.15)]"
  },
  {
    id: 1,
    icon: Wallet,
    title: "No Salary",
    description: "Replace expensive operational overhead with a fraction of the software cost.",
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500",
    glowClass: "shadow-[0_0_40px_rgba(16,185,129,0.15)]"
  },
  {
    id: 2,
    icon: CalendarX2,
    title: "No Leaves",
    description: "Zero sick days. Zero vacations. 100% consistent output every single day.",
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500",
    glowClass: "shadow-[0_0_40px_rgba(245,158,11,0.15)]"
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "No Training",
    description: "Deploys instantly with expert-level knowledge of your entire business context.",
    colorClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500",
    glowClass: "shadow-[0_0_40px_rgba(168,85,247,0.15)]"
  },
  {
    id: 4,
    icon: Rocket,
    title: "Scales Instantly",
    description: "Handle 10 leads or 10,000 leads simultaneously without breaking a sweat.",
    colorClass: "text-pink-500",
    bgClass: "bg-pink-500/10",
    borderClass: "border-pink-500",
    glowClass: "shadow-[0_0_40px_rgba(236,72,153,0.15)]"
  },
  {
    id: 5,
    icon: ActivitySquare,
    title: "No Delays",
    description: "Responds to customers and captures leads in milliseconds, guaranteeing high conversion.",
    colorClass: "text-cyan-500",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500",
    glowClass: "shadow-[0_0_40px_rgba(6,182,212,0.15)]"
  },
];

const AIEmployeeFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle effect
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000); // 4 seconds per feature
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="py-12 relative z-10 px-4 w-full bg-white dark:bg-[#03030a] border-y border-gray-100 dark:border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Ultra-Compact Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[1px] w-8 md:w-16 bg-cyan-500/30 hidden sm:block" />
          <h2 className="font-poppins font-bold text-xl md:text-2xl text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">AI Employee</span>
          </h2>
          <span className="h-[1px] w-8 md:w-16 bg-cyan-500/30 hidden sm:block" />
        </div>

        {/* Horizontal Feature Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 w-full">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            const Icon = feature.icon;
            
            return (
              <button
                key={feature.id}
                onMouseEnter={() => { setActiveIndex(idx); setIsPaused(true); }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 border text-sm font-bold ${
                  isActive 
                    ? `bg-white dark:bg-[#0c0c1a] ${feature.borderClass} ${feature.colorClass} shadow-md scale-105` 
                    : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? feature.colorClass : 'text-gray-400'}`} />
                <span className="whitespace-nowrap">{feature.title}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Description Box */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`w-full max-w-[800px] h-[220px] sm:h-[180px] bg-white dark:bg-[#0c0c1a]/80 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden transition-colors duration-500 ${activeFeature.glowClass}`}
        >
          {/* Subtle background icon for aesthetic */}
          <div className="absolute -right-8 -top-8 opacity-[0.03] dark:opacity-5 pointer-events-none">
            <ActiveIcon className="w-64 h-64" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center justify-center h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${activeFeature.bgClass} ${activeFeature.colorClass}`}>
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <h3 className={`text-xl font-bold ${activeFeature.colorClass}`}>
                  {activeFeature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {activeFeature.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar (Auto-cycle Indicator) */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-100 dark:bg-white/5">
            <motion.div 
              key={activeFeature.id}
              className={`h-full ${activeFeature.bgClass.replace('/10', '')}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "100%" : "100%" }}
              transition={{ duration: isPaused ? 0 : 4, ease: "linear" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIEmployeeFeatures;
