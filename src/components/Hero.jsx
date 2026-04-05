import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

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
    <section id="home" className={`relative flex md:flex-row flex-col pt-28 pb-8 overflow-hidden min-h-[85vh] flex items-center`}>
      {/* Background Enhancements */}
      <NeuralNetworkBackground />
      <div className="absolute top-0 left-0 w-[400px] h-full bg-blue-gradient opacity-10 blur-[120px] -rotate-45 animate-light-beam z-[0]" />

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-[5]`}>
        {/* original discount badge with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px] mb-4 sm:mx-2 mx-0 mt-0 border border-white/5 shadow-lg shadow-blue-500/5 scale-90 origin-left"
        >
          <p className={`${styles.paragraph} text-xs text-white text-center`}>
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

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 font-poppins font-bold ss:text-[64px] text-[48px] text-white ss:leading-[80px] leading-[60px] tracking-tighter"
          >
            Your Business.<br className="sm:block hidden" />{" "}
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,196,255,0.2)]">Fully Automated</span>{" "}
          </motion.h1>
          <div className="ss:flex hidden md:mr-4 mr-0 scale-90">
            <GetStarted />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-poppins font-bold ss:text-[64px] text-[48px] text-white ss:leading-[80px] leading-[60px] w-full tracking-tighter"
        >
          by AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${styles.paragraph} max-w-[470px] mt-6 font-medium italic border-l-2 border-blue-500/50 pl-6 py-1 bg-gradient-to-r from-blue-500/5 to-transparent text-sm`}
        >
          From capturing leads to calling customers and managing workflows — TechieHelp builds AI systems that run your business automatically, 24/7.
        </motion.p>
        
        {/* Key Points Grid - Glass Style */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mt-8 w-full max-w-[500px]"
        >
           {[
             { text: "Never miss a lead again", icon: "💎" },
             { text: "AI calls & qualifies instantly", icon: "⚡" },
             { text: "Works even when offline", icon: "🌙" },
             { text: "Handles lakhs of requests", icon: "🚀" }
           ].map((point, i) => (
             <motion.div 
                key={point.text} 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm group cursor-default"
             >
                <span className="text-base group-hover:rotate-12 transition-transform">{point.icon}</span>
                <span className="text-[9px] font-bold text-white/70 uppercase tracking-widest">{point.text}</span>
             </motion.div>
           ))}
        </motion.div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-8 relative px-6 md:px-0`}>
        {/* Animated Glows behind Image */}
        <div className="absolute z-[0] w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blue__gradient opacity-20 animate-pulse" />
        <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40 opacity-10 blur-3xl" />
        
        <div className="relative w-full h-[80%] flex items-center justify-center">
          <motion.img
            src={robot}
            alt="billing"
            className="w-[90%] h-[75%] relative z-[5] drop-shadow-[0_0_50px_rgba(0,196,255,0.2)]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ 
              opacity: 1, 
              scale: 0.9, 
              rotate: 0,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Decorative Glassmorphism Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-10 right-0 md:right-10 p-4 glass-morphism rounded-2xl glow-primary animate-float z-[10] hidden ss:block"
          >
            <div className="text-secondary text-[20px] font-bold">95%</div>
            <div className="text-white text-[10px] uppercase tracking-wider">Automation Success</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-10 left-0 md:left-5 p-4 glass-morphism rounded-2xl border-white/10 animate-float z-[10] hidden ss:block"
            style={{ animationDelay: '2s' }}
          >
            <div className="text-gradient text-[18px] font-bold">Smart Workflows</div>
            <div className="w-12 h-1 bg-secondary rounded-full mt-1" />
          </motion.div>
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;