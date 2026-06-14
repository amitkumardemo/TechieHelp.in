import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckSquare, ShieldCheck, Award, MapPin, Trophy, ArrowRight, Zap, CheckCircle2, Building2, TrendingUp } from 'lucide-react';

const BentoCard = ({ title, subtitle, desc, metric, metricLabel, icon: Icon, colorClass, spanClass = "md:col-span-1", delay = 0, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[250px] ${spanClass}`}
  >
    {/* Subtle Background Glow */}
    <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${colorClass} rounded-full blur-[80px] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
        </div>
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#33bbcf] bg-[#33bbcf]/10 px-3 py-1 rounded-full border border-[#33bbcf]/20">
          Verified
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${colorClass} mb-3`}>
            {subtitle}
          </p>
        )}
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-2 line-clamp-2">
          {desc}
        </p>
      </div>

      {/* Embedded Visuals or Metrics */}
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase tracking-wider mb-1">{metricLabel}</p>
          <p className="text-gray-900 dark:text-white font-bold text-sm">{metric}</p>
        </div>
        {children && (
          <div className="flex-shrink-0 h-10 flex items-center justify-end">
            {children}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Clients = () => (
  <section className="w-full bg-white dark:bg-[#030014] relative py-20 transition-colors duration-300">
    
    {/* Header Section */}
    <div className="max-w-3xl mx-auto text-center px-6 mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33bbcf]/10 border border-[#33bbcf]/20 mb-4"
      >
        <Trophy className="w-3 h-3 text-[#33bbcf]" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#33bbcf] font-bold">Milestones</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight tracking-tight"
      >
        Global Trust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33bbcf] to-blue-500">Recognition</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base text-gray-600 dark:text-gray-400"
      >
        From global deployments to startup recognition, TechieHelp is building India's emerging AI Workforce Platform.
      </motion.p>
    </div>

    {/* Compact Bento Grid Layout */}
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Row 1 */}
        <BentoCard
          title="16+ Countries Served"
          desc="Supporting businesses across India, USA, UAE, Japan, Brazil, Nigeria, Kenya, Sri Lanka, and more globally."
          metricLabel="Active Network"
          metric="Global AI Workforce"
          icon={Globe}
          colorClass="from-cyan-400 to-blue-500"
          spanClass="md:col-span-2"
          delay={0.1}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} className="w-2 h-2 rounded-full bg-[#33bbcf]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }} />
            ))}
          </div>
        </BentoCard>

        <BentoCard
          title="100+ Projects"
          desc="Deployed AI Employees and Workflow Automations across multiple industries."
          metricLabel="Delivery Status"
          metric="Live in Production"
          icon={Building2}
          colorClass="from-blue-400 to-indigo-500"
          spanClass="md:col-span-1"
          delay={0.2}
        >
           <TrendingUp className="w-6 h-6 text-indigo-500" />
        </BentoCard>

        {/* Row 2 */}
        <BentoCard
          title="ISO 9001 Verified"
          desc="Recognized for maintaining structured quality processes and operational excellence."
          metricLabel="Standard"
          metric="Quality Management"
          icon={ShieldCheck}
          colorClass="from-emerald-400 to-teal-500"
          spanClass="md:col-span-1"
          delay={0.3}
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
        </BentoCard>

        <BentoCard
          title="Rajasthan Summit"
          subtitle="Selected in 2026"
          desc="Chosen among innovative startups contributing to technology-driven business transformation."
          metricLabel="Recognition"
          metric="Innovation Excellence"
          icon={Award}
          colorClass="from-orange-400 to-amber-500"
          spanClass="md:col-span-1"
          delay={0.4}
        />

        <BentoCard
          title="Seaside Summit"
          subtitle="Armenia 2026"
          desc="Selected globally for participation among emerging startups building the next gen platforms."
          metricLabel="Global Reach"
          metric="International Cohort"
          icon={MapPin}
          colorClass="from-pink-400 to-rose-500"
          spanClass="md:col-span-1"
          delay={0.5}
        />

        {/* Row 3 - Full Width CTA replacing the massive Final Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-3 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#33bbcf]/20 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf] rounded-full blur-[100px] opacity-10 pointer-events-none" />
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Building The Future Workforce</h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              TechieHelp helps businesses deploy AI Employees to capture leads, automate workflows, and scale operations without bottlenecks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors text-sm flex items-center justify-center gap-2 whitespace-nowrap">
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/services/ai-lead-engine" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#33bbcf]/10 text-[#33bbcf] font-bold border border-[#33bbcf]/20 hover:bg-[#33bbcf]/20 transition-colors text-sm flex items-center justify-center gap-2 whitespace-nowrap">
              Explore Platform <Zap className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Clients;
