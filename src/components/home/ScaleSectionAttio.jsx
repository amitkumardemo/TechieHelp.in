import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  "16+ Countries",
  "100+ Projects",
  "99.99% Uptime",
  "ISO 9001 Verified",
  "Rajasthan Startup Summit",
  "Armenia Startup Summit",
  "Sub-second Response Time",
  "Millions of Automated Interactions"
];

const ScaleSectionAttio = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 dark:text-white mb-16 text-center leading-[1.1]"
      >
        Built For Scale.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-10 rounded-3xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center group cursor-default"
          >
            <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-tight">
              {stat}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScaleSectionAttio;
