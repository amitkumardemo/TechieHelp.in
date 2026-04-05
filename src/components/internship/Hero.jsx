import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, CheckCircle } from "lucide-react";
import heroImg from "../../assets/techiehelp-hero.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-primary px-6">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Registration Open for {new Date().toLocaleString('en-IN', { month: 'long' })} {new Date().getFullYear()} Batch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Start Your Internship at <span className="text-gradient underline decoration-white/20 underline-offset-8">Just ₹499</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Work on Real Projects + Get Certified + Access TechieHelp Institute of AI Platform. The bridge between your college and career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a 
              href="https://forms.gle/N8kk845Lbfds6Pwj6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(93,42,235,0.4)] hover:shadow-[0_0_30px_rgba(93,42,235,0.6)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 w-1/4 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
              <span>Apply Now – ₹499</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              Start Free Demo
            </button>
          </motion.div>

          {/* Social Proof Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-blue-600 flex items-center justify-center text-[10px] font-bold">+15k</div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold text-white">4.6</span>
                </div>
                <p className="text-xs text-gray-400">15,000+ Students</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold text-white leading-none mb-1">₹12 LPA</p>
              <p className="text-xs text-gray-400">Highest Package</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl font-bold text-white leading-none mb-1">ISO Certified</p>
              <p className="text-xs text-gray-400">MSME Registered</p>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-xl mx-auto"
        >
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden glass-morphism p-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 -z-10" />
            <img
              src={heroImg}
              alt="Students collaborating"
              className="w-full h-full object-cover rounded-[20px] opacity-80"
            />
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Project Based</p>
                  <p className="text-[10px] text-gray-400">Hands-on learning</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Mentorship</p>
                  <p className="text-[10px] text-gray-400">Industry Experts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Placement Ticker */}
      <div className="w-full mt-20 relative py-6 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                Highest Placement: <span className="text-white">₹12 LPA</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                Adobe: <span className="text-white">₹8 LPA</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                Tech Mahindra: <span className="text-white">₹6 LPA</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                15,000+ Students Certified
              </span>
              <span className="text-white/20">•</span>
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                MSME Registered
              </span>
              <span className="text-white/20">•</span>
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
                ISO Certified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
