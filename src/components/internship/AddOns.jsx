import React from "react";
import { motion } from "framer-motion";
import { Plus, Award, FileText, Users, Briefcase } from "lucide-react";

const addons = [
  { 
    title: "Verified Certificate", 
    price: "299", 
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    desc: "Physical copy + Digital verification"
  },
  { 
    title: "Letter of Recommendation", 
    price: "399", 
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    desc: "For your masters or job applications"
  },
  { 
    title: "Mentorship", 
    price: "699", 
    icon: <Users className="w-6 h-6 text-[#33bbcf]" />,
    desc: "One-on-one sessions with experts"
  },
  { 
    title: "Placement Support", 
    price: "999", 
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    desc: "Mock interviews + Resume builder"
  }
];

const AddOns = () => {
  return (
    <section className="py-20 bg-white dark:bg-primary px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Power-up Your <span className="text-blue-400">Career</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400">Choose from our premium add-ons to enhance your internship experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col items-center text-center group cursor-default"
            >
              <div className="p-4 rounded-full bg-gray-100 dark:bg-white/5 mb-6 group-hover:bg-gray-100 dark:bg-white/10 transition-colors">
                {addon.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{addon.title}</h3>
              <p className="text-xs text-gray-500 mb-6">{addon.desc}</p>
              <div className="mt-auto pt-6 border-t border-white/5 w-full flex items-center justify-between">
                <span className="text-lg font-black text-gray-900 dark:text-white">₹{addon.price}</span>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-blue-600 transition-colors">
                  <Plus className="w-5 h-5 text-gray-900 dark:text-white" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
