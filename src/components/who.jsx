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
    className="relative group p-5 rounded-2xl glass-morphism border-white/5 overflow-hidden hover:border-secondary/20 transition-all duration-500"
  >
    {/* Glass Sweep Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

    <div className="relative z-10">
      <h4 className="text-white font-poppins font-bold text-[17px] mb-2 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h4>
      <p className="text-dimWhite font-poppins text-[14px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
        {detail}
      </p>
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-16 ss:px-16 px-6 flex justify-center items-center bg-primary min-h-[500px]">
      {/* Smooth Ambient Background */}
      <AmbientOrb className="w-[400px] h-[400px] bg-blue-gradient top-[-10%] left-[-5%]" delay={0} />
      <AmbientOrb className="w-[300px] h-[300px] bg-pink__gradient bottom-[10%] right-[0%]" delay={2} />

      <div className="xl:max-w-[1280px] w-full flex md:flex-row flex-col gap-10 lg:gap-16 items-center relative z-[10]">

        {/* Left: Refined Staggered Content */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-secondary/50" />
            <p className="text-secondary uppercase tracking-[3px] font-bold text-[11px]">Core Architecture</p>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-poppins font-semibold ss:text-[45px] text-[36px] text-white ss:leading-[58px] leading-[48px] mb-6">
            You Focus on <span className="text-gradient">Growth</span>,<br />
            We Replace <span className="text-secondary">Manual Work</span>.
          </motion.h2>

          <motion.p variants={itemVariants} className="font-poppins text-dimWhite text-[16px] leading-[28px] max-w-[500px] mb-10 border-l-2 border-secondary/10 pl-6 italic">
            At <span className="text-white font-medium">TechieHelp</span>, we are an AI-first automation company focused on replacing people-dependent business operations with AI agents and intelligent automation systems.
          </motion.p>

          {/* Elegant Value Grid */}
          <div className="grid grid-cols-1 ss:grid-cols-2 gap-5">
            {[
              { title: "1. AI & Voice Agents", detail: "AI-powered calling and operational automation." },
              { title: "2. Eliminate Manual Work", detail: "End-to-end workflow automation." },
              { title: "3. Minimize Errors", detail: "Reliable systems that reduce human mistakes." },
              { title: "4. Scale Headcount-Free", detail: "Grow operations without increasing manpower." }
            ].map((item, index) => (
              <FluidCard key={index} index={index} {...item} />
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Button styles="mt-10 py-3.5 px-12 rounded-full hover:scale-105 transition-transform" text="Learn More" />
          </motion.div>
        </motion.div>

        {/* Right: Soft AI Visualization */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient Aura breathing */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-blue-gradient rounded-full blur-[80px]"
            />

            <div className="relative group overflow-hidden rounded-3xl">
              <motion.img
                src={bill}
                alt="techiehelp-fluid-ai"
                className="w-full max-h-[440px] lg:max-h-[520px] object-contain relative z-[5] drop-shadow-[0_0_50px_rgba(51,187,207,0.15)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Subtle Soft Light Sweep */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-secondary/5 via-secondary/10 to-transparent z-[6] blur-sm opacity-60"
                animate={{ top: ['-20%', '120%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Refined ROI Labels */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-6 ss:left-10 glass-morphism p-3 px-5 rounded-2xl border border-white/10 z-[10] backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(92,225,230,1)]" />
                  <p className="text-white text-[13px] font-poppins font-medium tracking-wide">Autonomous Engine Active</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
