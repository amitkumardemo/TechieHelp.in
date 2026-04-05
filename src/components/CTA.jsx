import React from 'react';
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[30px] shadow-2xl border border-white/5 backdrop-blur-3xl relative overflow-hidden group`}>
    <div className="absolute -inset-2 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    
    <div className="flex-1 flex flex-col relative z-10">
      <h2 className={`${styles.heading2} tracking-tighter`}>Stop Managing Operations. <span className="text-gradient">Let AI Run Your Business.</span></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 font-bold italic uppercase tracking-[4px] text-[10px] text-blue-300 opacity-60`}>
        24/7 Autonomy • 0% Downtime • 100% Scalability
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-8 text-white/50`}>
        Everything you need to automate your business operations and scale to lakhs of requests instantly.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-10`}>
      <Button styles="py-5 px-10 text-lg !font-black !rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/30 transition-all active:scale-95" text="Book Free Demo" />
    </div>
  </section>
);

export default CTA;
