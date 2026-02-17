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
    <section id="home" className={`relative flex md:flex-row flex-col pt-24 pb-10 overflow-hidden`}>
      {/* Background Enhancements */}
      <NeuralNetworkBackground />
      <div className="absolute top-0 left-0 w-[400px] h-full bg-blue-gradient opacity-10 blur-[120px] -rotate-45 animate-light-beam z-[0]" />

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-[5]`}>
        {/* original discount badge with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 sm:mx-2 mx-0 mt-2 border border-white/5 shadow-lg shadow-blue-500/5"
        >
          <p className={`${styles.paragraph} text-xs sm:text-sm text-white text-center`}>
            MSME CERTIFIED| ISO Certified | Incubated at JIET | Trusted by 100+ Clients
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
          >
            We Build<br className="sm:block hidden" />{" "}
            <span className="text-gradient">AI Agents</span>{" "}
          </motion.h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          That Replace
          <br />
          Manual Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          We build AI agents, automation, and voice agents that replace manual work and help businesses scale without human errors.
        </motion.p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative px-6 md:px-0`}>
        {/* Original robot image with framing */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.img
            src={robot}
            alt="billing"
            className="w-[100%] h-[80%] relative z-[5] drop-shadow-[0_20px_50px_rgba(51,187,207,0.3)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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

          {/* original gradients */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-30" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-20" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-30" />
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;