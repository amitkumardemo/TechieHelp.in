import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle, PlayCircle, Sparkles } from "lucide-react";

// IMPORTANT: Ensure these two uploaded images are in the assets folder
import confusedImg from "../../assets/confused-student.png";
import confidentImg from "../../assets/confident-student.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#03030a] px-6 selection:bg-orange-500/30">
      
      {/* Premium Deep Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-[80%] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.15)] group"
          >
            <span className="text-lg">🚀</span>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 tracking-wide uppercase">
              Registration Open for Summer Internship 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">Summer Internship 2026</span> <br className="hidden sm:block" />
            at Just ₹499
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed font-medium"
          >
            Join TechieHelp Summer Internship Program 2026 and gain hands-on experience in Web Development, Full Stack, Data Analytics, and AI/ML. Work on real-world projects, get MSME & ISO certified, and boost your career with industry mentorship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="font-bold text-orange-400/90 mb-10 tracking-widest uppercase text-sm border-l-2 border-orange-500 pl-4 py-1"
          >
            Build Real Skills. Work on Live Projects. Get Certified.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            {/* Animated Premium Button */}
            <a 
              href="https://forms.gle/N8kk845Lbfds6Pwj6"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-2xl p-[2px] focus:outline-none group shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-shadow"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fdba74_0%,#f97316_50%,#fdba74_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[14px] bg-[#03030a] px-8 text-lg font-black text-white backdrop-blur-3xl group-hover:bg-gradient-to-tr group-hover:from-[#03030a] group-hover:to-orange-900/40 transition-all gap-3">
                Apply Now – ₹499 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <button className="group w-full sm:w-auto h-16 px-8 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
              <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              Start Free Demo
            </button>
          </motion.div>

          {/* Social Proof Inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#03030a] bg-gray-800" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#03030a] bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white z-10">+15k</div>
            </div>
            <div className="text-left flex flex-col justify-center">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-sm font-medium text-gray-400"><span className="text-white font-bold">15,000+</span> Students Enrolled</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full h-[500px] sm:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Abstract Back Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-orange-500/20 blur-[100px] rounded-full animate-pulse-glow" />

          {/* Visual Container */}
          <div className="relative w-full h-full max-w-[600px] mx-auto flex flex-col justify-between overflow-visible">
            
            {/* The SVG Connecting Arrow (Flows Top-Left to Bottom-Right) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M 30 30 C 50 30, 70 50, 70 70" 
                fill="none" 
                stroke="url(#flow)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* Pulsing Arrowhead */}
              <motion.polygon 
                points="70,70 68,66 74,68" 
                fill="#3b82f6"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>

            {/* Top Left: Confused Student Block */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[65%] sm:w-[55%] self-start z-20 drop-shadow-2xl"
            >
              {/* Image without filters, clear and large */}
              <img src={confusedImg} alt="Confused Flow" className="w-full h-auto object-contain relative z-10" />
            </motion.div>

            {/* Bottom Right: Confident Student Block */}
            <motion.div 
              animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative w-[75%] sm:w-[65%] self-end z-20 mt-[-20px] drop-shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
            >
              {/* Image without filters, clear and large */}
              <img src={confidentImg} alt="Solution Flow" className="w-full h-auto object-contain relative z-10" />
            </motion.div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
