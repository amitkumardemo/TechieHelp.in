import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award, MapPin, Zap, TrendingUp, ArrowRight } from 'lucide-react';

// Animated counter hook
const useCounter = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, shouldStart]);
  return count;
};

const StatCard = ({ value, suffix = '', label, sublabel, delay = 0, onVisible }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (onVisible) onVisible();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericTarget = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const displayCount = useCounter(numericTarget, 2000, visible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 overflow-hidden hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#33bbcf]/3 to-indigo-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-none mb-2 tabular-nums">
          {visible ? displayCount : 0}{suffix}
        </div>
        <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
        {sublabel && <div className="text-xs text-gray-400">{sublabel}</div>}
      </div>
    </motion.div>
  );
};

const BadgeCard = ({ icon: Icon, title, subtitle, desc, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative bg-white border border-gray-100 rounded-3xl p-6 overflow-hidden hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
  >
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `radial-gradient(ellipse at top right, ${color}08, transparent 70%)` }}
    />
    <div className="relative z-10">
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}12`, border: `1px solid ${color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-0.5">{title}</h3>
      {subtitle && <p className="text-xs font-semibold mb-2" style={{ color }}>{subtitle}</p>}
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Clients = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50 relative overflow-hidden border-t border-gray-100">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#33bbcf]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-5"
          >
            <Globe className="w-3 h-3 text-[#33bbcf]" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">GLOBAL TRUST</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Trusted Across{' '}
            <span className="bg-gradient-to-r from-[#33bbcf] to-blue-500 bg-clip-text text-transparent">
              16+ Countries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base text-gray-500 max-w-xl mx-auto"
          >
            From enterprise deployments to global summits, LeadAI is redefining how the world's fastest-growing companies automate revenue.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard value="16" suffix="+" label="Countries Served" sublabel="Global network" delay={0.1} />
          <StatCard value="100" suffix="+" label="Deployments" sublabel="Live in production" delay={0.15} />
          <StatCard value="99" suffix=".99%" label="Uptime SLA" sublabel="Enterprise grade" delay={0.2} />
          <StatCard value="9001" suffix="" label="ISO Certified" sublabel="Quality management" delay={0.25} />
        </div>

        {/* Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <BadgeCard
            icon={Award}
            title="Rajasthan Startup Summit"
            subtitle="2026 Innovation Award"
            desc="Selected among India's most innovative startups driving business transformation through AI."
            color="#f59e0b"
            delay={0.2}
          />
          <BadgeCard
            icon={MapPin}
            title="Seaside Summit Armenia"
            subtitle="International Cohort 2026"
            desc="Chosen globally for participation among emerging platforms shaping the next generation of AI."
            color="#ec4899"
            delay={0.25}
          />
          <BadgeCard
            icon={ShieldCheck}
            title="ISO 9001 Verified"
            subtitle="Quality Assured"
            desc="Recognized for structured quality processes, operational excellence, and enterprise-grade reliability."
            color="#10b981"
            delay={0.3}
          />
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="relative overflow-hidden bg-[#090a0f] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: '#090a0f' }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[#33bbcf]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#33bbcf]" />
              <span className="text-[10px] font-bold text-[#33bbcf] uppercase tracking-widest">Autonomous Revenue Platform</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Building The Future Of Revenue
            </h3>
            <p className="text-gray-400 text-sm max-w-lg">
              LeadAI helps businesses deploy AI agents to capture leads, automate workflows, and scale revenue without bottlenecks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/services/ai-lead-engine"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#33bbcf]/10 text-[#33bbcf] font-bold border border-[#33bbcf]/20 hover:bg-[#33bbcf]/20 transition-colors text-sm whitespace-nowrap"
            >
              Explore Platform <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
