import React from 'react';
import { motion } from "framer-motion";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} tracking-tighter`}>
      AI That Instantly <br className="sm:block hidden" /> <span className="text-gradient">Handles Every Lead</span>
    </h2>
    
    <div className="relative mt-12 pl-8">
      {/* Vertical Pulse Line */}
      <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20" />
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-4 w-[2px] h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent z-10 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
      />

      <div className="space-y-8">
         {[
           { id: 1, text: "Form submitted & Data Stored", color: "blue" },
           { id: 2, text: "AI Sends Instant Email & SMS", color: "purple" },
           { id: 3, text: "AI Calls Customer Instantly", color: "red" },
           { id: 4, text: "AI Updates System & Notifies You", color: "green" }
         ].map((step, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
             className="flex items-center gap-6 group"
           >
              <div className={`w-8 h-8 rounded-full bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-400 font-black border border-${step.color}-500/30 shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 bg-primary`}>
                {step.id}
              </div>
              <p className="text-white/60 font-bold text-xs uppercase tracking-[3px] group-hover:text-white transition-colors">
                {step.text}
              </p>
           </motion.div>
         ))}
      </div>
    </div>
    
    <div className="mt-12 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 inline-block">
      <p className="font-black text-[10px] text-blue-300 uppercase tracking-[5px] animate-pulse">
         Scalable to 10L+ concurrent leads
      </p>
    </div>

    <Button styles={`mt-10`} text="See Live AI Demo" />
  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt="ai-operations" className="w-[100%] h-[90%] drop-shadow-[0_0_50px_rgba(0,196,255,0.1)]" />
  </div>
</section>
);

export default CardDeal;
