import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Calendar } from 'lucide-react';

const FloatingOrb = ({ className, style }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={style}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      opacity: [0.6, 0.9, 0.6],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
);

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 overflow-hidden bg-white border-t border-gray-100">

      {/* Animated background orbs */}
      <FloatingOrb
        className="w-[500px] h-[500px] bg-[#33bbcf]/5 blur-[120px]"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      <FloatingOrb
        className="w-[300px] h-[300px] bg-indigo-500/4 blur-[100px]"
        style={{ top: "20%", right: "10%" }}
      />
      <FloatingOrb
        className="w-[250px] h-[250px] bg-blue-500/4 blur-[80px]"
        style={{ bottom: "20%", left: "10%" }}
      />

      <div className="w-full max-w-5xl mx-auto relative z-10">

        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] bg-white dark:bg-[#0c0d14] border border-gray-100 dark:border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-10 sm:p-14 md:p-20 text-center"
        >
          {/* Inner subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-[40px]" />

          {/* Top gradient line */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#33bbcf]/40 to-transparent" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 mb-8"
          >
            <Zap className="w-3 h-3 text-[#33bbcf] animate-pulse" />
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">AUTONOMOUS REVENUE PLATFORM</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white tracking-tight leading-[1.05] max-w-3xl mx-auto mb-6"
          >
            The Future Of Revenue{' '}
            <span className="bg-gradient-to-r from-[#33bbcf] via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Runs On LeadAI.
            </span>
          </motion.h2>

          {/* Subheadline — three lines */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mb-10 space-y-1"
          >
            {[
              "Connect Gmail.",
              "Connect Your Website.",
              "Everything Else Happens Automatically.",
            ].map((line, i) => (
              <p
                key={i}
                className={`text-base sm:text-lg font-medium ${i === 2 ? "text-gray-700 dark:text-gray-200 font-semibold" : "text-gray-400 dark:text-gray-500"}`}
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="/login"
              className="relative overflow-hidden group w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-black text-white font-bold text-sm tracking-tight shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#33bbcf] to-[#5ce1e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                Start Free
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="/contacts"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-bold text-sm tracking-tight hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Book Demo
            </a>
          </motion.div>

          {/* Trust markers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[11px] font-semibold text-gray-400 uppercase tracking-widest"
          >
            <span>No credit card required</span>
            <span className="hidden sm:inline text-gray-200">•</span>
            <span>Setup in minutes</span>
            <span className="hidden sm:inline text-gray-200">•</span>
            <span>Cancel anytime</span>
          </motion.div>

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
