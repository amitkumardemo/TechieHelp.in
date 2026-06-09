import React from 'react';
import { motion } from 'framer-motion';
import { features } from "../constants";
import styles from "../style";
import Button from "./Button";

// AI Module Component for High-End Cinematic feel
const AIModule = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="relative group w-full max-w-[460px] cursor-pointer"
  >
    {/* Inner Glow Backdrop */}
    <div className="absolute -inset-2 bg-secondary/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative glass-morphism border-white/5 p-6 rounded-3xl flex items-center gap-6 group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500 group-hover:-translate-y-2 shadow-2xl">
      {/* HUD Accent */}
      <div className="absolute top-4 right-6 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#33bbcf]" />
        <span className="text-[9px] font-mono text-secondary tracking-[2px] uppercase opacity-60">System Ready</span>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center p-4 border border-secondary/20 group-hover:border-secondary/40 transition-colors">
        <img src={icon} alt={title} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />
      </div>

      <div className="flex-1">
        <h4 className="text-white font-poppins font-bold text-[18px] mb-1 group-hover:text-secondary transition-colors">
          {title}
        </h4>
        <p className="text-white/60 font-poppins text-[13px] leading-relaxed group-hover:text-white/80 transition-colors">
          {content}
        </p>
      </div>
    </div>
  </motion.div>
);

const WordReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className={`inline-block mr-[0.25em] ${word === "Growth," || word === "AI" || word === "Engines." ? "text-gradient relative group cursor-default" : ""}`}
        >
          {word}
          {(word === "Growth," || word === "AI" || word === "Engines.") && (
            <motion.div
              className="absolute -bottom-1 left-0 h-[1px] bg-secondary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          )}
        </motion.span>
      ))}
    </span>
  );
};

const Business = () => (
  <section id="features" className="relative w-full overflow-hidden py-16 lg:py-24 lg:min-h-[85vh] flex items-center justify-center ss:px-16 px-6 bg-primary">
    {/* Cinematic Ambient Elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
    </div>

    <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2 grid-cols-1 gap-12 lg:gap-20 items-center relative z-[10]">

      {/* Left: Infrastructure Insight */}
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-secondary/30" />
            <p className="text-secondary font-mono tracking-[4px] text-[11px] uppercase">AI product ecosystem</p>
          </div>

          <h2 className="font-poppins font-bold ss:text-[54px] text-[42px] text-white ss:leading-[68px] leading-[52px] mb-8 uppercase tracking-tighter">
            AI Systems That <br className="sm:block hidden" /> <span className="text-gradient">Run Your Business</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="font-poppins text-dimWhite text-[18px] leading-[32px] max-w-[500px] mb-12"
          >
            We don’t just offer services. We build complete AI systems—Lead Engines, Calling Agents, and Automated Workflows—that replace manual effort and automate your operations end-to-end.
          </motion.p>

          {/* Metric Bar (Direct ROI for VCs) */}
          <div className="flex gap-12 mb-10 border-t border-white/5 pt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col"
            >
              <span className="text-white font-bold text-[28px] leading-tight">90%</span>
              <span className="text-dimWhite font-mono text-[10px] uppercase tracking-widest mt-1">Manual Work Reduction</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col"
            >
              <span className="text-white font-bold text-[28px] leading-tight">24/7</span>
              <span className="text-dimWhite font-mono text-[10px] uppercase tracking-widest mt-1">Operational Autonomy</span>
            </motion.div>
          </div>

          <Button styles="py-4 px-12 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all" />
        </motion.div>
      </div>

      {/* Right: The Modular System */}
      <div className="flex flex-col items-center md:items-end w-full relative">
        {/* Connection Visuals */}
        <div className="absolute top-0 right-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />

        <div className="relative z-10 w-full flex flex-col items-center md:items-end gap-2">
          {features.map((feature, index) => (
            <AIModule key={feature.id} {...feature} index={index} />
          ))}
        </div>

        {/* Floating Decorative Particle */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -bottom-10 right-20 w-32 h-32 bg-secondary blur-[60px] rounded-full pointer-events-none opacity-20"
        />
      </div>

    </div>
  </section>
);

export default Business;
