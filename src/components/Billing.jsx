import React from 'react';
import { motion } from "framer-motion";
import { cards } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} relative overflow-hidden py-20`}>
    {/* Decorative Glows */}
    <div className="absolute top-0 -left-1/4 w-[50%] h-[50%] bg-red-500/10 blur-[120px] rounded-full" />
    
    <div className={layout.sectionImgReverse}>
      <motion.img 
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src={cards} 
        alt="billing" 
        className="w-[100%] h-[80%] relative z-[4] drop-shadow-[0_0_50px_rgba(239,68,68,0.2)]" 
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient opacity-20" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient opacity-20" />
      {/* gradient end */}
    </div>

    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${layout.sectionInfo} p-8 sm:p-12 rounded-[40px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-red-500/20 transition-all duration-700 shadow-2xl`}
    >
      {/* Background Accent Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-red-500/10 blur-[90px] rounded-full group-hover:bg-red-500/20 transition-all duration-1000" />
      
      <h2 className={`${styles.heading2} relative z-10 tracking-tighter leading-tight`}>
        You Lose Customers <br className="sm:block hidden" /> When You’re <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">Not Available</span>
      </h2>
      
      <div className="relative z-10">
        <p className={`${styles.paragraph} mt-6 font-black italic text-red-400/80 uppercase tracking-[6px] text-[10px]`}>
          Wait Time = Profit Drain
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-8 text-gray-900 dark:text-white/70 leading-relaxed font-medium`}>
          When a customer fills your form and you're busy or offline, the lead goes cold instantly. A 5-minute delay can cost you the deal. TechieHelp AI ensures you never miss a lead again.
        </p>
        <Button styles="mt-12 !bg-white !text-black !font-black !shadow-white/10 hover:!shadow-red-500/20 transition-all hover:scale-105" text="Stop Losing Leads — Book Strategy Call" />
      </div>
    </motion.div>
  </section>
);

export default Billing;
