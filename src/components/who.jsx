import React from 'react';
import { motion } from 'framer-motion';
import { bill } from "../assets";
import styles from "../style";
import Button from "./Button";

const AmbientOrb = ({ className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.1, 1],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
  />
);

const FluidCard = ({ title, detail, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="relative group p-4 rounded-xl glass-morphism border-white/5 overflow-hidden hover:border-secondary/30 transition-all duration-500 bg-black/20"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
    <div className="relative z-10 flex items-start gap-3">
      <div className="mt-1">
        <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(92,225,230,0.8)]" />
      </div>
      <div>
        <h4 className="text-white font-poppins font-semibold text-[15px] leading-[22px] mb-1">
          {title}
        </h4>
        <p className="text-dimWhite font-poppins text-[13px] leading-[20px] opacity-80 group-hover:opacity-100 transition-opacity">
          {detail}
        </p>
      </div>
    </div>
  </motion.div>
);

const WhoWeAre = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24 ss:px-16 px-6 flex justify-center items-center bg-primary min-h-[500px]">
      {/* Smooth Ambient Background */}
      <AmbientOrb className="w-[400px] h-[400px] bg-blue-gradient top-[0%] left-[-10%]" delay={0} />
      <AmbientOrb className="w-[300px] h-[300px] bg-pink__gradient bottom-[10%] right-[0%]" delay={2} />

      <div className="xl:max-w-[1280px] w-full flex lg:flex-row flex-col gap-16 lg:gap-16 items-center relative z-[10]">

        {/* Left: Refined Content */}
        <motion.div
          className="flex-1 lg:max-w-[55%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-secondary/50" />
            <p className="text-secondary font-bold text-[14px]">⚡ WHAT HAPPENS WHEN A LEAD COMES IN?</p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-poppins font-semibold ss:text-[40px] text-[32px] text-white ss:leading-[52px] leading-[42px] mb-6">
            Most businesses lose customers in the <span className="text-gradient">first few minutes.</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="font-poppins text-[15px] leading-[26px] mb-8 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
            <p className="text-dimWhite mb-3">A user fills your form. You’re busy. No response. The lead goes cold.</p>
            <p className="text-red-400 font-semibold text-[16px]">💸 That’s lost revenue.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-white/10 mb-8" />

          <motion.h3 variants={itemVariants} className="font-poppins font-semibold text-[24px] text-white mb-6">
            🚀 Now Imagine This Instead:
          </motion.h3>

          <motion.p variants={itemVariants} className="font-poppins text-gray-300 text-[16px] mb-4">
            The moment a lead comes in —
          </motion.p>

          <ul className="space-y-3 mb-8">
            {[
              "AI captures the data instantly",
              "AI sends a reply within seconds",
              "AI calls the customer automatically",
              "AI collects details & qualifies the lead",
              "AI updates your system in real-time",
              "You get notified instantly"
            ].map((text, i) => (
              <motion.li variants={itemVariants} key={i} className="flex items-start gap-3 text-dimWhite text-[16px] font-poppins leading-[24px]">
                <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/20">
                  <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90">{text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={itemVariants} className="font-poppins text-[#FFE87C] font-medium text-[17px] mb-10 py-3 px-4 bg-[#FFE87C]/10 border border-[#FFE87C]/20 rounded-xl inline-block">
            💡 No delays. No missed leads. No manual work.
          </motion.div>

        </motion.div>

        {/* Right: Soft AI Visualization & Scale Stats */}
        <div className="flex-1 relative flex flex-col justify-center items-center w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full mb-10 text-center lg:text-left"
          >
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/20 p-6 rounded-3xl border border-blue-500/20 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full"></div>
              <h4 className="font-poppins font-bold text-[22px] text-white mb-2">🧠 This is not a tool.</h4>
              <p className="font-poppins text-gray-300 text-[15px] leading-[26px]">
                This is a complete AI system that runs your business operations automatically — even when you’re offline.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full"
          >
            {/* Ambient Aura */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/10 rounded-[30px] blur-[60px]"
            />

            <div className="relative z-10 w-full p-1 border border-white/10 rounded-[32px] bg-white/5 backdrop-blur-sm">
              <div className="bg-[#0a0a0a] rounded-[28px] p-8 w-full border border-white/5 relative overflow-hidden">
                <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-red-500/20 blur-[60px] rounded-full" />
                
                <h3 className="font-poppins font-bold text-[24px] text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🔥</span> Built for scale:
                </h3>

                <div className="grid grid-cols-1 gap-4 mb-10 w-full">
                  <FluidCard title="Lead Capacity" detail="Handle 1 to 10,000+ leads at once" index={0} />
                  <FluidCard title="Availability" detail="Works 24/7 without breaks" index={1} />
                  <FluidCard title="Automation" detail="Zero human dependency" index={2} />
                  <FluidCard title="Performance" detail="Faster than any team" index={3} />
                </div>
                
                <div className="relative text-center">
                  <div className="absolute inset-0 bg-secondary/20 blur-[20px] rounded-full" />
                  <h4 className="font-poppins font-bold text-[18px] text-white relative z-10">
                    🎯 Focus on growth. <br className="hidden ss:block" />Let AI handle the rest.
                  </h4>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default WhoWeAre;
