import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#05050f] px-6 relative overflow-hidden">
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
          className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-gray-200 dark:border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gray-100 dark:bg-white/5 opacity-50 -z-10" />

          <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-8 animate-float" />
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-none">
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
              className="btn-primary"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-[30deg] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              <span>Apply Now – Limited Seats</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Only 48 Hours Left</p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
             <div className="flex items-center gap-2">
               <span className="font-bold text-gray-900 dark:text-white">Email:</span> <a href="mailto:internship@techiehelp.in" className="hover:text-blue-400 font-medium">internship@techiehelp.in</a>
             </div>
             <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
             <div className="flex items-center gap-2">
               <span className="font-bold text-gray-900 dark:text-white">Phone:</span> <a href="tel:+917673825079" className="hover:text-blue-400 font-medium">7673825079</a>
             </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" className="h-6" alt="Logo" />
             <p className="text-lg font-black text-gray-900 dark:text-white italic tracking-tighter">TECHIEHELP</p>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">98% Success Rate</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
