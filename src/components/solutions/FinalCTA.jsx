import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#050510] px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 border border-white/20 text-center shadow-[0_0_100px_rgba(59,130,246,0.2)] overflow-hidden"
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
              Stop Managing Operations. <br />
              <span className="text-white/60">Let AI Run Your Business.</span>
            </h2>
            
            <p className="text-white/80 font-bold italic mb-12 max-w-xl text-lg opacity-80">
              Transform your business into an autonomous growth engine. Deployment and launch within 7 days.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-2xl">
              <a 
                href="https://wa.me/917673825079?text=Hello%20TechieHelp%2C%20I%20am%20ready%20to%20let%20AI%20run%20my%20business.%20Book%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-3xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <span>Book Free Demo</span>
                <MessageCircle className="w-7 h-7" />
              </a>
              <button className="group w-full sm:w-auto px-12 py-6 bg-black/10 backdrop-blur-xl border border-white/30 text-white font-black text-xl rounded-3xl hover:bg-black/20 transition-all flex items-center justify-center gap-3">
                <span>Talk to AI Experts</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="mt-12 text-[10px] font-black text-white/40 uppercase tracking-[6px]">No Monthly Subscription • Custom Build Fee Apply</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
