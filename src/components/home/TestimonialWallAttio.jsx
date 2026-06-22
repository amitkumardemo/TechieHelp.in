import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: "Sarah Jenkins", company: "NexusAI", logo: "N", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "David Chen", company: "FlowState", logo: "F", image: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Emily Watson", company: "Nova Labs", logo: "NL", image: "https://i.pravatar.cc/150?img=5" },
  { id: 4, name: "Marcus Reed", company: "Quantum", logo: "Q", image: "https://i.pravatar.cc/150?img=14" },
  { id: 5, name: "Aisha Patel", company: "Vertex", logo: "V", image: "https://i.pravatar.cc/150?img=9" },
  { id: 6, name: "James Wilson", company: "Aura", logo: "A", image: "https://i.pravatar.cc/150?img=12" },
];

const scrollItems = [...testimonials, ...testimonials];

const TestimonialWallAttio = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative transition-colors duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex gap-6 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {scrollItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="w-[320px] md:w-[400px] rounded-3xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/40 dark:shadow-none p-8 flex flex-col justify-between backdrop-blur-xl transition-transform hover:-translate-y-1"
          >
             <div className="flex items-center gap-4 mb-6">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover bg-gray-100 dark:bg-gray-800" />
                <div>
                   <div className="font-medium text-lg text-gray-900 dark:text-white">{item.name}</div>
                   <div className="text-gray-500 dark:text-gray-400">{item.company}</div>
                </div>
             </div>
             
             <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "LeadAI completely transformed our revenue engine. The automation is flawless and the interface is a joy to use."
             </div>

             <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 dark:border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-400 dark:text-gray-500 text-lg">
                  {item.logo}
                </div>
                <div className="flex gap-1 text-gray-300 dark:text-gray-600 text-lg">
                   <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
             </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialWallAttio;
