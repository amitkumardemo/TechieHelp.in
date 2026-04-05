import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-white/5 opacity-50 -z-10" />

          <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-8 animate-float" />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Don’t Just Learn — <span className="text-gradient">Build Your Career</span> with TechieHelp
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Join 15,000+ students and start building real projects today. Limited batch sizes—Apply before the deadline!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://forms.gle/N8kk845Lbfds6Pwj6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_70px_rgba(37,99,235,0.6)] transform hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden text-center"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-[30deg] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              <span>Apply Now – Limited Seats</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Only 48 Hours Left</p>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" className="h-6" alt="Logo" />
             <p className="text-lg font-black text-white italic tracking-tighter">TECHIEHELP</p>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <p className="text-xs font-bold text-white uppercase tracking-widest">98% Success Rate</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
