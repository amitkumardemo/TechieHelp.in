import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, PhoneForwarded, Workflow, BarChart3, Volume2, CheckCircle2, ArrowRight } from "lucide-react";

const products = [
  {
    title: "AI Lead Capture System",
    desc: "Capture and respond to every inquiry automatically.",
    icon: <Target className="w-10 h-10 text-blue-400" />,
    outcome: "100% Response Coverage",
    color: "from-blue-600 to-blue-400",
    bg: "bg-blue-600/5",
    border: "border-blue-500/20",
    path: "/services/ai-lead-engine"
  },
  {
    title: "AI Calling Agent",
    desc: "AI calls new leads and qualifies them automatically.",
    icon: <PhoneForwarded className="w-10 h-10 text-purple-400" />,
    outcome: "24/7 Sales Team",
    color: "from-purple-600 to-purple-400",
    bg: "bg-purple-600/5",
    border: "border-purple-500/20",
    path: "/services/ai-calling-agents"
  },
  {
    title: "AI Follow-Up Engine",
    desc: "Automatically follows up with prospects.",
    icon: <Volume2 className="w-10 h-10 text-red-400" />,
    outcome: "More Conversions",
    color: "from-red-600 to-red-400",
    bg: "bg-red-600/5",
    border: "border-red-500/20",
    path: "/services/voice-ai-system"
  },
  {
    title: "AI Dashboard",
    desc: "Monitor leads, calls, replies and performance.",
    icon: <BarChart3 className="w-10 h-10 text-orange-400" />,
    outcome: "Complete Visibility",
    color: "from-orange-600 to-orange-400",
    bg: "bg-orange-600/5",
    border: "border-orange-500/20",
    path: "/services/ai-business-dashboard"
  },
  {
    title: "AI Workflow Automation",
    desc: "Connect CRM, email, sheets and operations.",
    icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    outcome: "90% Less Manual Work",
    color: "from-cyan-600 to-cyan-400",
    bg: "bg-cyan-600/5",
    border: "border-cyan-500/20",
    path: "/services/ai-workflow-automation"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6" id="products">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            AI Systems <span className="text-gradient font-black">We Build</span>
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">Productized AI Modules for Scalable Growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <Link to={product.path} key={product.title} className="block h-full cursor-pointer group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-7 rounded-2xl ${product.bg} border ${product.border} hover:border-white/20 transition-all duration-500 backdrop-blur-2xl flex flex-col h-full overflow-hidden relative`}
              >
                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[60px] -z-10 group-hover:bg-white/10 transition-all" />
                 
                 <div className="mb-5 p-3.5 rounded-xl bg-white/5 inline-block group-hover:scale-105 transition-all duration-300 border border-white/5 w-fit">
                   {React.cloneElement(product.icon, { className: "w-6 h-6 " + product.icon.props.className.split(' ').pop() })}
                 </div>

                 <div className="flex-1">
                   <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                     {product.title}
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                   </h3>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
