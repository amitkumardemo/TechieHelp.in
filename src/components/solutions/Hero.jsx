import React from "react";
import { motion } from "framer-motion";
import { Zap, Play, MessageSquarePlus } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#050510]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl mb-10"
        >
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-blue-300">Powered by TechieHelp AI Engine</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tight"
        >
          AI Systems That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
            Capture, Call & Convert
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold italic opacity-80"
        >
          From form submission to AI calling, CRM updates, and workflow automation — everything runs without human effort. 24/7 autonomous operations for your business.
        </motion.p>

        {/* Feature Tags */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            "Never miss a lead again",
            "AI qualifications instantly",
            "Works offline 24/7",
            "Handles thousands of requests"
          ].map(tag => (
            <div key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-white/50 uppercase tracking-widest backdrop-blur-md">
              {tag}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center"
        >
          <a
            href="https://wa.me/917673825079?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-12 py-6 bg-white text-[#050510] font-black text-lg rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
          >
            <span>Book Free Demo</span>
            <MessageSquarePlus className="w-6 h-6" />
          </a>
          <button className="group w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-xl">
            <span>See Live AI System</span>
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements (Visual Polish) */}
      <div className="absolute bottom-20 left-20 opacity-20 hidden lg:block animate-bounce-slow">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 rotate-12" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 hidden lg:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20" />
      </div>
    </section>
  );
};

export default Hero;
