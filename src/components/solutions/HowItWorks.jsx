import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Rocket, Activity } from "lucide-react";

const steps = [
  { id: 1, title: "Connect Website", desc: "Link your existing website, ads, or forms to the TechieHelp AI Engine.", icon: <Globe className="w-8 h-8" />, color: "text-blue-400" },
  { id: 2, title: "We Build AI System", desc: "Our team develops custom LLM logic and automated calling agents for you.", icon: <Cpu className="w-8 h-8" />, color: "text-purple-400" },
  { id: 3, title: "Deploy & Integrate", desc: "We launch the system and connect it to your CRM, Sheets, and tools.", icon: <Rocket className="w-8 h-8" />, color: "text-green-400" },
  { id: 4, title: "Automated Growth", desc: "Your business runs automatically. Sit back and watch the conversions.", icon: <Activity className="w-8 h-8" />, color: "text-cyan-400" }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#050510] px-6" id="how-it-works">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            How it <span className="text-gradient">Works</span>
          </motion.h2>
          <p className="text-gray-500 font-black text-xs uppercase tracking-[5px]">The Path to Full Business Automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connection Line Decor */}
           <div className="absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block -z-10" />

           {steps.map((step, i) => (
             <motion.div
               key={step.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-2xl text-center"
             >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-3xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-2xl group-hover:scale-110 transition-transform">
                   0{step.id}
                </div>
                
                <div className={`mb-8 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity ${step.color}`}>
                   {step.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-none group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
