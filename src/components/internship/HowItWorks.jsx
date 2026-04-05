import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Zap, Laptop, LayoutDashboard, Rocket } from "lucide-react";

const steps = [
  {
    title: "Apply & Pay ₹499",
    desc: "Choose your domain and plan to start your journey.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Get Offer Letter",
    desc: "Instantly receive your official internship offer letter.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    title: "Access Dashboard",
    desc: "Log in to the Institute of AI platform to see your tasks.",
    icon: <LayoutDashboard className="w-8 h-8" />
  },
  {
    title: "Build Projects",
    desc: "Work on real-world tasks and build your portfolio.",
    icon: <Laptop className="w-8 h-8" />
  },
  {
    title: "Get Certified",
    desc: "Complete your internship and get your verified certificates.",
    icon: <Rocket className="w-8 h-8" />
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How it <span className="text-gradient">Works</span>
          </motion.h2>
          <p className="text-gray-400">Step-by-step guide to your tech career growth.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600/20 group-hover:border-blue-600/40 transition-all duration-300">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
