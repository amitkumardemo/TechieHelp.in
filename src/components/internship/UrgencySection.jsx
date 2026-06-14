import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section className="py-20 bg-[#05050f] px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-[3rem] bg-gradient-to-br from-red-600/10 to-transparent border border-red-500/20 text-center overflow-hidden"
        >
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-red-600/5 blur-3xl opacity-50 -z-10 animate-pulse" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 text-red-400 text-xs font-black uppercase tracking-widest mb-8 border border-red-600/20">
            <AlertTriangle className="w-4 h-4" />
            Limited Availability
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
            Only <span className="text-red-500">50 Seats</span> Per Batch
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Next Batch Starts on <span className="text-gray-900 dark:text-white font-bold">{formatDate()}</span>. Don't miss your chance!
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {[
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 md:w-28 h-20 md:h-28 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-4xl md:text-5xl font-black text-gray-900 dark:text-white shadow-2xl">
                  {unit.value < 10 ? `0${unit.value}` : unit.value}
                </div>
                <p className="mt-3 text-[10px] md:text-xs font-black uppercase tracking-[3px] text-gray-500">{unit.label}</p>
              </div>
            ))}
          </div>

          <a 
            href="https://forms.gle/N8kk845Lbfds6Pwj6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 text-gray-900 dark:text-white font-black text-lg rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:shadow-[0_0_60px_rgba(220,38,38,0.5)] transform hover:scale-105 uppercase tracking-wider"
          >
            Apply Now – Limited Seats
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
