import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";
import { Target, PhoneCall, Activity, Database } from "lucide-react";
import HeroSimulation from "./HeroSimulation";

const NeuralNetworkBackground = () => (
  <svg viewBox="0 0 800 600" className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-[0]">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#33bbcf" stopOpacity="0" />
        <stop offset="50%" stopColor="#33bbcf" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#33bbcf" stopOpacity="0" />
      </linearGradient>
    </defs>

    {[...Array(15)].map((_, i) => (
      <motion.circle
        key={i}
        cx={Math.random() * 800}
        cy={Math.random() * 600}
        r="1.5"
        fill="#33bbcf"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}

    <motion.path
      d="M100 100 L300 200 L500 150 M200 400 L400 300 L600 500 M50 300 L250 150 L450 400 L700 250"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="0.5"
      animate={{
        strokeDasharray: ["0, 1000", "1000, 0"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className={`relative flex md:flex-row flex-col pt-40 pb-8 overflow-hidden min-h-[85vh] items-center max-w-7xl mx-auto gap-8 lg:gap-12 xl:gap-20 px-4 sm:px-6`}>
      {/* Background Enhancements */}
      <NeuralNetworkBackground />
      <div className="absolute top-0 left-0 w-[400px] h-full bg-blue-gradient opacity-10 blur-[120px] -rotate-45 animate-light-beam z-[0]" />

      <div className={`w-full lg:w-1/2 ${styles.flexStart} flex-col relative z-[5]`}>
        {/* original discount badge with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px] mb-4 sm:mx-2 mx-0 mt-0 border border-white/5 shadow-lg shadow-blue-500/5 scale-90 origin-left"
        >
          <p className={`${styles.paragraph} text-xs text-gray-900 dark:text-white text-center`}>
            MSME CERTIFIED| ISO Certified | Incubated at JIET | Trusted by 100+ Clients
          </p>
        </motion.div>

        {/* Powered by Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-blue-300">Powered by TechieHelp AI Engine</span>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full mb-4">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 font-poppins font-bold ss:text-[64px] text-[48px] text-gray-900 dark:text-white ss:leading-[80px] leading-[60px] tracking-tighter"
          >
            Hire Your First <br className="sm:block hidden" />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,196,255,0.2)]">AI Employee.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[470px] mt-2 font-medium border-l-2 border-blue-500/50 pl-6 py-2 bg-gradient-to-r from-blue-500/5 to-transparent"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-2">
            Captures Leads. Replies Instantly. Calls Customers. Updates Your Systems.
          </p>
          <p className="text-gray-900 dark:text-white font-bold text-lg">
            24/7. Without Hiring Anyone.
          </p>
        </motion.div>

        {/* New CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="/contacts" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(51,187,207,0.3)] hover:shadow-[0_0_30px_rgba(51,187,207,0.5)] hover:-translate-y-1 transition-all text-center">
            Book Free Strategy Call
          </a>
          <button onClick={() => document.getElementById('leadai-demo')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center">
            Watch Live Demo
          </button>
        </motion.div>

        {/* Key Points Grid - Glass Style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mt-8 w-full max-w-[500px]"
        >
          {[
            { text: "Never miss a lead again", icon: <Target className="w-5 h-5 icon-premium" /> },
            { text: "AI calls & qualifies instantly", icon: <PhoneCall className="w-5 h-5 icon-premium" /> },
            { text: "Works even when offline", icon: <Activity className="w-5 h-5 icon-premium" /> },
            { text: "Handles lakhs of requests", icon: <Database className="w-5 h-5 icon-premium" /> }
          ].map((point, i) => (
            <motion.div
              key={point.text}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm group cursor-default icon-hover"
            >
              <div className="icon-wrapper w-8 h-8 shrink-0">
                {point.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-900 dark:text-white/70 uppercase tracking-widest leading-tight">{point.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className={`w-full lg:w-1/2 flex ${styles.flexCenter} md:my-0 my-8 relative`}>
        {/* Animated Glows behind Image */}
        <div className="absolute z-[0] w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blue__gradient opacity-20 animate-pulse" />
        <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40 opacity-10 blur-3xl" />

        <div className="relative w-full h-[80%] flex items-center justify-center">
          <div className="relative z-[5] w-full max-w-[650px] lg:scale-110">
            <HeroSimulation />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;