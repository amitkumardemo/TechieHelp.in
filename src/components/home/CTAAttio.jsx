import React from 'react';
import { motion } from 'framer-motion';

const CTAAttio = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 max-w-5xl mx-auto text-center bg-white dark:bg-[#0a0a0a] relative transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-gray-900 dark:text-white mb-12 leading-[1.05]"
      >
        The Next Era Of Customer <br className="hidden md:block"/> Relationships Runs On TechieHelp.
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
          Start Free
        </button>
        <button className="px-8 py-4 bg-white dark:bg-[#111] text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm">
          Talk To Sales
        </button>
      </motion.div>
    </section>
  );
};

export default CTAAttio;
