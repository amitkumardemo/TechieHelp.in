import React from "react";
import { motion } from "framer-motion";
import { Target, PhoneForwarded, Workflow, BarChart3, Volume2, CheckCircle2 } from "lucide-react";

const products = [
  {
    title: "AI Lead Engine",
    desc: "Captures + responds + stores leads automatically without delay.",
    icon: <Target className="w-10 h-10 text-blue-400" />,
    outcome: "0 missed leads",
    color: "from-blue-600 to-blue-400",
    bg: "bg-blue-600/5",
    border: "border-blue-500/20"
  },
  {
    title: "AI Calling Agents",
    desc: "Calls, qualifies & collects customer data autonomously.",
    icon: <PhoneForwarded className="w-10 h-10 text-purple-400" />,
    outcome: "Your AI sales team works 24/7",
    color: "from-purple-600 to-purple-400",
    bg: "bg-purple-600/5",
    border: "border-purple-500/20"
  },
  {
    title: "AI Workflow Automation",
    desc: "End-to-end integration across your business stack.",
    icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    outcome: "Run operations without manual work",
    color: "from-cyan-600 to-cyan-400",
    bg: "bg-cyan-600/5",
    border: "border-cyan-500/20"
  },
  {
    title: "AI Business Dashboard",
    desc: "Track leads, performance & revenue growth in real-time.",
    icon: <BarChart3 className="w-10 h-10 text-orange-400" />,
    outcome: "Complete control in one place",
    color: "from-orange-600 to-orange-400",
    bg: "bg-orange-600/5",
    border: "border-orange-500/20"
  },
  {
    title: "Voice AI System",
    desc: "Human-like AI voice assistants for communication.",
    icon: <Volume2 className="w-10 h-10 text-red-400" />,
    outcome: "Handle customers without human dependency",
    color: "from-red-600 to-red-400",
    bg: "bg-red-600/5",
    border: "border-red-500/20"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6" id="products">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-3"
          >
            AI Systems <span className="text-gradient">We Build</span>
          </motion.h2>
          <p className="text-gray-500 text-sm">Productized AI Modules for Scalable Growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-7 rounded-2xl ${product.bg} border ${product.border} hover:border-white/20 transition-all duration-500 backdrop-blur-2xl flex flex-col h-full overflow-hidden relative`}
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[60px] -z-10 group-hover:bg-white/10 transition-all" />
               
               <div className="mb-5 p-3.5 rounded-xl bg-white/5 inline-block group-hover:scale-105 transition-all duration-300 border border-white/5">
                 {React.cloneElement(product.icon, { className: "w-6 h-6 " + product.icon.props.className.split(' ').pop() })}
               </div>

               <div className="flex-1">
                 <h3 className="text-base font-bold text-white mb-2">{product.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                   {product.desc}
                 </p>
               </div>

               <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-green-500/20 text-green-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest block">Outcome</span>
                    <p className="text-xs font-semibold text-white">{product.outcome}</p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
