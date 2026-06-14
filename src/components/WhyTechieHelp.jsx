import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Rocket, Code2, Server, Key } from "lucide-react";
import styles from "../style";

const reasons = [
  { icon: <Code2 className="w-6 h-6 text-cyan-400" />, title: "AI-First Platform", desc: "Built from the ground up for AI automation, not a bolted-on afterthought." },
  { icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, title: "Enterprise Security", desc: "Bank-grade encryption protecting your data and your customers' privacy." },
  { icon: <Globe2 className="w-6 h-6 text-cyan-400" />, title: "Global Reach", desc: "Scalable infrastructure supporting businesses across 16+ countries." },
  { icon: <Rocket className="w-6 h-6 text-cyan-400" />, title: "Fast Deployment", desc: "Go from signup to a fully active AI employee in under 48 hours." },
  { icon: <Server className="w-6 h-6 text-cyan-400" />, title: "24/7 Automation", desc: "99.99% uptime guaranteed. Your AI employee never stops working." },
  { icon: <Key className="w-6 h-6 text-cyan-400" />, title: "Full Ownership", desc: "You own your data, your leads, and your customized AI models completely." },
];

const WhyTechieHelp = () => {
  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6 bg-white dark:bg-[#050510]`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* Left Side text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-cyan-500/50" />
            <p className="text-cyan-500 font-mono tracking-[4px] text-[11px] uppercase">The Platform</p>
          </div>
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            Why Businesses Choose <span className="text-gradient">TechieHelp</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            We don't just provide software. We provide a complete AI workforce infrastructure that is secure, scalable, and instantly deployable.
          </p>
          <a href="/about-us" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold hover:gap-4 transition-all">
            Learn more about our technology &rarr;
          </a>
        </motion.div>

        {/* Right Side Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 dark:bg-[#0c0c1a] border border-gray-200 dark:border-white/5 p-8 rounded-3xl hover:bg-white dark:hover:bg-white/5 hover:border-cyan-500/30 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTechieHelp;
