import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#050510] px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 border border-gray-300 dark:border-white/20 text-center shadow-[0_0_100px_rgba(59,130,246,0.2)] overflow-hidden"
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight uppercase">
              Stop Losing Leads.
            </h2>

            <p className="text-gray-900 dark:text-white/80 font-bold italic mb-12 max-w-xl text-lg opacity-80">
              Let AI handle every customer interaction while you focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-2xl">
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-3xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <span>Book Free Consultation</span>
                <MessageCircle className="w-7 h-7" />
              </a>
              <a
                href="tel:+917073130165"
                className="group w-full sm:w-auto px-12 py-6 bg-black/10 backdrop-blur-xl border border-white/30 text-gray-900 dark:text-white font-black text-xl rounded-3xl hover:bg-black/20 transition-all flex items-center justify-center gap-3"
              >
                <span>Call Now</span>
                <PhoneCall className="w-7 h-7" />
              </a>
            </div>

            <p className="mt-12 text-[10px] font-black text-gray-900 dark:text-white/40 uppercase tracking-[6px]">No Monthly Subscription • Custom Build Fee Apply</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
