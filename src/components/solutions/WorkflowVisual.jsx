import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Database, Mail, Phone, SearchCheck, Server, BellRing, ChevronRight } from "lucide-react";

const flowSteps = [
  { id: 1, label: "Customer fills form", icon: <ClipboardList className="w-6 h-6" />, color: "bg-blue-500" },
  { id: 2, label: "AI stores data", icon: <Database className="w-6 h-6" />, color: "bg-purple-600" },
  { id: 3, label: "AI sends instant email", icon: <Mail className="w-6 h-6" />, color: "bg-cyan-500" },
  { id: 4, label: "AI calls customer", icon: <Phone className="w-6 h-6" />, color: "bg-red-500" },
  { id: 5, label: "AI collects details", icon: <SearchCheck className="w-6 h-6" />, color: "bg-green-500" },
  { id: 6, label: "AI updates database", icon: <Server className="w-6 h-6" />, color: "bg-orange-500" },
  { id: 7, label: "You get notification", icon: <BellRing className="w-6 h-6" />, color: "bg-yellow-500" }
];

const WorkflowVisual = () => {
  return (
    <section className="py-32 bg-[#050510] px-6 relative overflow-hidden" id="workflow">
      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
        >
          AI That Instantly <br />
          <span className="text-gradient">Handles Every Lead</span>
        </motion.h2>
        <p className="text-gray-500 font-black text-xs uppercase tracking-[5px] mb-20 leading-relaxed">
          Even if 10,000+ leads come — <span className="text-white">system responds instantly</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {flowSteps.map((step, i) => (
            <React.Fragment key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className={`w-20 h-20 rounded-[2rem] ${step.color} flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-[#050510] relative z-20`}>
                   {step.icon}
                </div>
                
                <div className="mt-8 flex flex-col items-center">
                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mb-3">
                      <span className="text-[10px] font-black text-white/50">{step.id}</span>
                   </div>
                   <h4 className="text-[11px] font-black text-white uppercase tracking-widest leading-tight whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.label}
                   </h4>
                </div>
              </motion.div>

              {/* Connector (Desktop) */}
              {i < flowSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pointer-events-none opacity-20">
                  <ChevronRight className="w-8 h-8 text-white animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Visual Flow Connector Line (Desktop) */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -z-10" />
    </section>
  );
};

export default WorkflowVisual;
