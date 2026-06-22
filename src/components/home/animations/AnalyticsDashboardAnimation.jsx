import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsDashboardAnimation = () => {
  // Generate random heights for the bar chart
  const bars = Array.from({ length: 12 }).map((_, i) => ({
    height1: 30 + Math.random() * 40,
    height2: 20 + Math.random() * 60,
    height3: 10 + Math.random() * 30
  }));

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden flex z-10">
        
        {/* Dashboard Main Area */}
        <div className="flex-1 p-6">
           <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
              {['7D', '30D', '3M', '6M', '12M', 'All'].map((tab, idx) => (
                <div key={idx} className={`text-xs font-medium cursor-pointer ${idx === 2 ? 'text-gray-900 dark:text-white border-b border-gray-900 dark:border-white pb-1' : 'text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-300'}`}>
                  {tab}
                </div>
              ))}
           </div>

           {/* Legend */}
           <div className="flex items-center gap-6 mb-8 px-2">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-300"></div><span className="text-[10px] text-gray-500 dark:text-gray-400">Q1</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-purple-300"></div><span className="text-[10px] text-gray-500 dark:text-gray-400">Q2</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-orange-400"></div><span className="text-[10px] text-gray-500 dark:text-gray-400">Plus</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-pink-400"></div><span className="text-[10px] text-gray-500 dark:text-gray-400">Pro</span>
             </div>
           </div>

           {/* Animated Bar Chart */}
           <div className="relative h-48 flex items-end justify-between px-2 gap-1 md:gap-2">
              {/* Y-axis labels */}
              <div className="absolute -left-2 top-0 bottom-0 flex flex-col justify-between text-[8px] text-gray-400 dark:text-gray-600 h-full py-1">
                <span>$ 2.8M</span>
                <span>$ 2.0M</span>
                <span>$ 1.2M</span>
                <span>$ 0.4M</span>
              </div>
              
              {/* Horizontal Grid Lines */}
              <div className="absolute left-6 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-gray-100 dark:border-gray-800/50 w-full border-dashed"></div>
                <div className="border-b border-gray-100 dark:border-gray-800/50 w-full border-dashed"></div>
                <div className="border-b border-gray-100 dark:border-gray-800/50 w-full border-dashed"></div>
                <div className="border-b border-gray-100 dark:border-gray-800/50 w-full border-dashed"></div>
              </div>

              {/* Bars */}
              {bars.map((bar, idx) => (
                <div key={idx} className="relative flex flex-col justify-end w-full max-w-[16px] md:max-w-[24px] h-full z-10 group cursor-pointer">
                   
                   {/* Tooltip on Hover */}
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     whileHover={{ opacity: 1, y: 0 }}
                     className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-xl rounded-lg p-2 hidden group-hover:block z-20 pointer-events-none"
                   >
                      <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-1">Pro plan</div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-gray-400 dark:text-gray-500">Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">July 2026</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-gray-400 dark:text-gray-500">Amount</span>
                        <span className="font-medium text-gray-900 dark:text-white">$1,920,380</span>
                      </div>
                   </motion.div>

                   <motion.div 
                     className="w-full bg-pink-400 dark:bg-pink-500 rounded-t-sm"
                     initial={{ height: 0 }}
                     animate={{ height: `${bar.height1}%` }}
                     transition={{ duration: 1, delay: idx * 0.05, ease: "easeOut" }}
                   ></motion.div>
                   <motion.div 
                     className="w-full bg-purple-300 dark:bg-purple-500 mt-[1px]"
                     initial={{ height: 0 }}
                     animate={{ height: `${bar.height2}%` }}
                     transition={{ duration: 1, delay: 0.5 + idx * 0.05, ease: "easeOut" }}
                   ></motion.div>
                   <motion.div 
                     className="w-full bg-orange-300 dark:bg-orange-500 mt-[1px] rounded-b-sm"
                     initial={{ height: 0 }}
                     animate={{ height: `${bar.height3}%` }}
                     transition={{ duration: 1, delay: 1 + idx * 0.05, ease: "easeOut" }}
                   ></motion.div>
                </div>
              ))}
           </div>
        </div>

        {/* Dashboard Right Sidebar */}
        <div className="hidden md:block w-48 border-l border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#111] p-4">
           <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Insight</div>
           
           <div className="space-y-1">
             <div className="flex items-center gap-2 px-2 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm cursor-pointer">
               <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               <span className="text-xs font-medium text-gray-900 dark:text-white">Historical values</span>
             </div>
             <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-600 dark:text-gray-400">
               <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
               <span className="text-xs">Funnel</span>
             </div>
             <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-600 dark:text-gray-400">
               <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <span className="text-xs">Time in stage</span>
             </div>
             <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-600 dark:text-gray-400">
               <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
               <span className="text-xs">Stage changed</span>
             </div>
           </div>
        </div>

      </div>

    </div>
  );
};

export default AnalyticsDashboardAnimation;
