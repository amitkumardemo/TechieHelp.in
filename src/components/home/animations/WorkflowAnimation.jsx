import React from 'react';
import { motion } from 'framer-motion';

const WorkflowAnimation = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center gap-8 z-10">
        
        {/* Node 1: Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 w-64 z-20"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="text-gray-400 dark:text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trigger</span>
            <span className="ml-auto text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded border border-green-100 dark:border-green-800">Active</span>
          </div>
          <div className="font-medium text-gray-900 dark:text-white text-sm mb-1">New Lead Captured</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">Trigger when a lead enters pipeline</div>
        </motion.div>

        {/* SVG Connecting Lines between 1 and 2 */}
        <div className="absolute top-[80px] w-0.5 h-8 bg-gray-200 dark:bg-gray-800 z-10">
           <motion.div 
             className="w-full bg-blue-500 dark:bg-blue-400 rounded-full"
             initial={{ height: '0%', top: '0%' }}
             animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             style={{ position: 'absolute' }}
           />
        </div>

        {/* Node 2: Condition */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 w-64 z-20"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="text-gray-400 dark:text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Condition</span>
          </div>
          <div className="font-medium text-gray-900 dark:text-white text-sm mb-1">AI Qualification</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">Route by lead score</div>
        </motion.div>

        {/* SVG Connecting Lines for branches */}
        <svg className="absolute top-[180px] w-64 h-12 z-10" viewBox="0 0 256 48" fill="none">
          <path d="M128 0 V 24 H 32 V 48" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M128 0 V 24 H 224 V 48" stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Animated path 1 */}
          <motion.circle r="3" fill="#3b82f6" 
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            style={{ offsetPath: "path('M128 0 V 24 H 32 V 48')" }}
          />
          {/* Animated path 2 */}
          <motion.circle r="3" fill="#3b82f6" 
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            style={{ offsetPath: "path('M128 0 V 24 H 224 V 48')" }}
          />
        </svg>

        <div className="flex gap-8 w-full justify-center z-20">
          {/* Node 3: Left Branch */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 w-40"
          >
             <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-1">HIGH SCORE</div>
             <div className="font-medium text-gray-900 dark:text-white text-xs">Book Meeting</div>
             <motion.div 
               animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 6px rgba(59, 130, 246, 0)'] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="absolute -right-2 -top-2 w-4 h-4 bg-blue-500 rounded-full"
             ></motion.div>
          </motion.div>

          {/* Node 4: Right Branch */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4 w-40 opacity-70"
          >
             <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-1">LOW SCORE</div>
             <div className="font-medium text-gray-900 dark:text-white text-xs">Nurture Email</div>
          </motion.div>
        </div>

      </div>

      {/* Decorative floating blocks on the side to match reference */}
      <div className="absolute right-10 top-20 flex flex-col gap-3 opacity-40 blur-[1px]">
        <div className="w-48 h-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded shadow-sm"></div>
        <div className="w-40 h-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded shadow-sm ml-4"></div>
        <div className="w-56 h-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded shadow-sm"></div>
      </div>
      
    </div>
  );
};

export default WorkflowAnimation;
