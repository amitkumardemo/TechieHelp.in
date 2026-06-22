import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsAnimation = () => {
  const integrations = [
    { name: 'Gmail', icon: 'M', color: 'text-red-500', angle: 0 },
    { name: 'Slack', icon: '#', color: 'text-purple-600 dark:text-purple-400', angle: 45 },
    { name: 'HubSpot', icon: 'H', color: 'text-orange-500', angle: 90 },
    { name: 'Google Calendar', icon: '📅', color: 'text-blue-500', angle: 135 },
    { name: 'WhatsApp', icon: '💬', color: 'text-green-500', angle: 180 },
    { name: 'Stripe', icon: 'S', color: 'text-indigo-500', angle: 225 },
    { name: 'Google Sheets', icon: '📊', color: 'text-green-600 dark:text-green-400', angle: 270 },
    { name: 'Gemini', icon: '✦', color: 'text-blue-400', angle: 315 },
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-10">
        <div className="w-64 h-64 border border-gray-400 dark:border-gray-500 rounded-full"></div>
        <div className="absolute w-96 h-96 border border-gray-300 dark:border-gray-600 rounded-full"></div>
      </div>

      {/* Center Atom/Core */}
      <div className="absolute z-20 flex items-center justify-center">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="w-16 h-16 bg-black dark:bg-white rounded-xl shadow-2xl shadow-black/20 dark:shadow-white/10 flex items-center justify-center relative"
         >
            <span className="text-white dark:text-black font-bold text-2xl tracking-tighter">L</span>
            {/* Glowing effect behind center */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl filter blur-xl opacity-40 -z-10 animate-pulse"></div>
         </motion.div>
      </div>

      {/* Orbiting Integrations */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {integrations.map((integration, index) => {
          // Calculate positions on a circle
          const radius = 140; // distance from center
          const radian = (integration.angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <motion.div
              key={index}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: [0, x], 
                y: [0, y], 
                opacity: 1 
              }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1, 
                ease: "easeOut",
                fillMode: "forwards"
              }}
              style={{ position: 'absolute' }}
              className="group"
            >
              {/* Connecting Line (drawn from center to icon) */}
              <svg className="absolute left-1/2 top-1/2 -z-10 pointer-events-none" style={{ overflow: 'visible' }}>
                 <motion.line 
                   x1="0" y1="0" x2={-x} y2={-y} 
                   stroke="currentColor" className="text-gray-200 dark:text-gray-800" strokeWidth="1" strokeDasharray="4 4"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                 />
                 <motion.circle r="2" fill="currentColor" className="text-gray-400 dark:text-gray-600"
                   initial={{ cx: 0, cy: 0, opacity: 0 }}
                   animate={{ cx: -x, cy: -y, opacity: [0, 1, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                 />
              </svg>

              {/* Icon Container */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="w-12 h-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-md dark:shadow-none flex items-center justify-center text-lg font-bold cursor-pointer hover:scale-110 hover:shadow-lg transition-transform"
              >
                <span className={integration.color}>{integration.icon}</span>
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none z-30">
                {integration.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsAnimation;
