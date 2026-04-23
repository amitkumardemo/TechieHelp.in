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
    <section className="py-24 bg-[#05050f] px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[130px] rounded-full" />
      </div>
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
          {/* Animated Progress Line */}
          <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-white/5 -translate-y-1/2 hidden lg:block overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-orange-400"
            />
          </div>
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
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500/10 group-hover:border-orange-500/40 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 shadow-lg relative glass-morphism">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.6)]">
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
