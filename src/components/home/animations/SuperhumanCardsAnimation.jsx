import React from 'react';
import { motion } from 'framer-motion';

const SuperhumanCardsAnimation = () => {
  const cards = [
    { title: "AI Draft Ready", desc: "Response to pricing inquiry", icon: "✉️", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/30", delay: 0 },
    { title: "Meeting Notes", desc: "Discovery call with TechNova", icon: "📝", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/30", delay: 1.5 },
    { title: "Customer Summary", desc: "High intent, series B funded", icon: "✨", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/30", delay: 0.7 },
    { title: "Pain Points", desc: "Manual data entry, slow response", icon: "🎯", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/30", delay: 2.2 }
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative w-full max-w-lg h-[400px] mx-auto z-10 perspective-[1000px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              y: [100, 0, -50, -100], 
              scale: [0.9, 1, 1, 0.9],
              rotateX: [20, 0, 0, -20]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              delay: card.delay,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 top-1/3 -translate-x-1/2 w-72 bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 rounded-2xl shadow-xl dark:shadow-none p-4 flex items-start gap-4"
          >
            <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center text-lg shrink-0`}>
              {card.icon}
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{card.title}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{card.desc}</div>
            </div>
          </motion.div>
        ))}

        {/* Static Background decorative elements */}
        <div className="absolute left-10 top-10 w-24 h-24 bg-blue-100 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50"></div>
        <div className="absolute right-10 bottom-10 w-32 h-32 bg-purple-100 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};

export default SuperhumanCardsAnimation;
