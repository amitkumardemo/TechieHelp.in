import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardMockup from './DashboardMockup';

const features = [
  { id: 'inbox', label: 'AI Inbox' },
  { id: 'memory', label: 'Customer Memory' },
  { id: 'calling', label: 'AI Calling' },
  { id: 'analytics', label: 'Revenue Analytics' }
];

const HeroAttio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(0);
  const [scale, setScale] = useState(1);
  const progressInterval = useRef(null);
  const containerRef = useRef(null);
  const DURATION = 6000;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        setScale(parentWidth / 1024);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    startProgress();
    return () => clearInterval(progressInterval.current);
  }, [activeTab]);

  const startProgress = () => {
    clearInterval(progressInterval.current);
    setProgress(0);
    const startTime = Date.now();
    
    progressInterval.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / DURATION) * 100;
      
      if (newProgress >= 100) {
        clearInterval(progressInterval.current);
        setActiveTab((prev) => (prev + 1) % features.length);
      } else {
        setProgress(newProgress);
      }
    }, 50);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide backdrop-blur-sm"
      >
        ✨ Powered by TechieHelp AI Engine
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-center text-gray-900 dark:text-white leading-[1.05] max-w-4xl mb-8"
      >
        The AI Revenue Platform <br className="hidden md:block" /> Engineered For Growth.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 text-center max-w-3xl mb-12 leading-relaxed"
      >
        LeadAI captures leads, replies instantly, calls customers, remembers conversations, updates systems, and compounds revenue around the clock.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-4 mb-24"
      >
        <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
          Get Started
        </button>
        <button className="px-8 py-4 bg-white dark:bg-[#0a0a0a] text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm">
          Book Strategy Call
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 w-full max-w-4xl"
      >
        {features.map((feature, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                isActive ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-800' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
              }`}
            >
              {feature.label}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-black dark:bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px] relative"
      >
        <div className="relative rounded-t-2xl md:rounded-t-3xl border-[8px] md:border-[12px] border-gray-900 dark:border-gray-800 bg-black aspect-[16/10] overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-20"></div>
          
          <div className="relative w-full h-full bg-white dark:bg-[#0a0a0a]" ref={containerRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden"
              >
                <div 
                  className="origin-top-left absolute top-0 left-0"
                  style={{
                    width: '1024px',
                    height: '640px',
                    transform: `scale(${scale})`,
                  }}
                >
                  <DashboardMockup activeTab={activeTab} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="h-4 md:h-6 bg-gray-300 dark:bg-gray-700 rounded-b-3xl w-[105%] -ml-[2.5%] shadow-xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 bg-gray-400 dark:bg-gray-600 rounded-b-md"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroAttio;
