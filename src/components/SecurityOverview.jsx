import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Lock,
  KeyRound,
  Database,
  Cloud,
  Server,
  Fingerprint,
  Eye,
  Globe,
  Activity,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Layers,
  FileCheck,
  Network,
  Cpu,
  MonitorDot,
  RefreshCw,
  Zap
} from "lucide-react";

// --- Custom Components ---

const AnimatedCounter = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="tabular-nums">
      {prefix}{end % 1 !== 0 ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const SecurityCard = ({ title, icon: Icon, delay, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col gap-4 shadow-sm hover:border-[#33bbcf]/50 transition-colors group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/5 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/10 transition-colors" />
    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-[#33bbcf]/10 border border-cyan-100 dark:border-[#33bbcf]/20 flex items-center justify-center shrink-0">
      <Icon className="w-6 h-6 text-cyan-600 dark:text-[#33bbcf]" />
    </div>
    <div className="relative z-10">
      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
      {desc && <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>}
    </div>
  </motion.div>
);

const TimelineStep = ({ step, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6 relative"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 border-2 border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold z-10 relative">
        {step}
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-500/30 dark:to-transparent absolute top-10" />
    </div>
    <div className="pb-12 pt-1">
      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ArchitectureNode = ({ title, icon: Icon, isLast = false }) => (
  <div className="flex flex-col items-center relative">
    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center z-10 relative group hover:border-[#33bbcf] transition-colors cursor-crosshair">
      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#33bbcf]" />
    </div>
    <span className="mt-3 font-semibold text-sm text-gray-700 dark:text-gray-300">{title}</span>
    
    {!isLast && (
      <>
        <div className="h-10 w-0.5 bg-gray-200 dark:bg-white/10 my-2" />
        <div className="absolute top-[88px] right-[-80px] hidden md:flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-3 py-1 rounded-full text-xs font-bold text-green-700 dark:text-green-400">
          <ShieldCheck className="w-3 h-3" /> TLS 1.3
        </div>
      </>
    )}
  </div>
);

// --- Main Component ---

const SecurityOverview = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#02000a] text-gray-900 dark:text-white font-poppins relative selection:bg-[#33bbcf]/30 overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#33bbcf] to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#33bbcf]/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium"
        >
          <Link to="/" className="hover:text-[#33bbcf] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Trust & Security</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white">Security Overview</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        >
          Security Overview
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-10"
        >
          Security, privacy, reliability, and operational protection built into every TechieHelp platform and AI workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 text-sm font-semibold mb-20"
        >
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#33bbcf]" /> Secure Infrastructure
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <Lock className="w-4 h-4 text-blue-500" /> Enterprise Ready
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <Eye className="w-4 h-4 text-green-500" /> Privacy Focused
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <FileCheck className="w-4 h-4 text-purple-500" /> ISO-Aligned Processes
          </span>
        </motion.div>

        {/* Hero Visual: Animated Security Network */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,187,207,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              <div className="p-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-3">
                <Database className="w-5 h-5 text-gray-500" /> <span className="font-semibold text-sm">Encrypted Storage</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-3">
                <Cloud className="w-5 h-5 text-gray-500" /> <span className="font-semibold text-sm">Secure Cloud Nodes</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 border border-dashed border-[#33bbcf]/30 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-24 h-24 border border-dashed border-blue-500/30 rounded-full" />
              <div className="w-16 h-16 bg-[#33bbcf]/20 rounded-full flex items-center justify-center backdrop-blur-md border border-[#33bbcf]/50 z-10">
                <ShieldCheck className="w-8 h-8 text-[#33bbcf]" />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/3">
              <div className="p-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-3 justify-end">
                <span className="font-semibold text-sm">Protected Workflows</span> <Activity className="w-5 h-5 text-gray-500" />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-3 justify-end">
                <span className="font-semibold text-sm">AI Workforce Protection</span> <Cpu className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Areas */}
      <section className="px-6 max-w-5xl mx-auto pb-32 space-y-32">
        
        {/* Section 1: Security At Every Layer */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Security At Every Layer</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Defense-in-depth architecture protecting all platform vectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SecurityCard title="Infrastructure Security" desc="Isolated VPCs, strict firewalls, and DDoS protection on global nodes." icon={Server} delay={0.1} />
            <SecurityCard title="Application Security" desc="Continuous vulnerability scanning, static analysis, and bug bounties." icon={Network} delay={0.2} />
            <SecurityCard title="Identity Security" desc="Strict multi-factor authentication and role-based access configurations." icon={Fingerprint} delay={0.3} />
            <SecurityCard title="Data Security" desc="Military-grade encryption for all data in transit and completely at rest." icon={Database} delay={0.4} />
            <SecurityCard title="AI Workflow Security" desc="Isolated environments preventing cross-tenant data contamination." icon={Cpu} delay={0.5} />
            <SecurityCard title="Integration Security" desc="Secure OAuth handshakes and encrypted API credential vaults." icon={KeyRound} delay={0.6} />
          </div>
        </div>

        {/* Section 2: Data Protection */}
        <div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Protecting Customer Data By Design</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                We believe security should be default, not an option. Your business data is guarded by modern cryptographic standards before it ever reaches our servers.
              </p>
              <ul className="space-y-4">
                {["Encryption In Transit (TLS 1.3)", "Encryption At Rest (AES-256)", "Secure Storage Clusters", "Least Privilege Access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-[#0c0f1a] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center">
                <Lock className="w-8 h-8 text-[#33bbcf] mb-3" />
                <h4 className="font-bold text-sm">Role-Based Access</h4>
              </div>
              <div className="bg-white dark:bg-[#0c0f1a] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center">
                <FileCheck className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-bold text-sm">Audit Logging</h4>
              </div>
              <div className="bg-white dark:bg-[#0c0f1a] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center">
                <KeyRound className="w-8 h-8 text-purple-500 mb-3" />
                <h4 className="font-bold text-sm">Secure Auth</h4>
              </div>
              <div className="bg-white dark:bg-[#0c0f1a] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center">
                <RefreshCw className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-bold text-sm">Backup Systems</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Architecture Flow */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">LeadAI Security Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              How data flows securely through our automation systems, verified at every stage.
            </p>
          </div>
          
          <div className="flex flex-col items-center max-w-md mx-auto">
            <ArchitectureNode title="Website Forms" icon={Globe} />
            <ArchitectureNode title="LeadAI Engine" icon={Cpu} />
            <ArchitectureNode title="Email Processing" icon={Mail} />
            <ArchitectureNode title="CRM Sync" icon={Database} />
            <ArchitectureNode title="Dashboard UI" icon={MonitorDot} />
            <ArchitectureNode title="Notifications" icon={Zap} isLast={true} />
          </div>
        </div>

        {/* Section 6 & 7: Monitoring & Continuity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#0c0f1a] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full" />
            <Activity className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Platform Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Live dashboard-style health tracking ensures we catch anomalies before they impact your business.
            </p>
            <ul className="space-y-3">
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> 24/7 Security Operations</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Real-time Activity Logs</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Automated Infrastructure Alerts</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#0c0f1a] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full" />
            <RefreshCw className="w-10 h-10 text-[#33bbcf] mb-6" />
            <h3 className="text-2xl font-bold mb-4">Business Continuity</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Designed to survive failure. Our infrastructure guarantees high availability architecture.
            </p>
            <ul className="space-y-3">
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#33bbcf]" /> Automated Daily Backups</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#33bbcf]" /> Infrastructure Redundancy</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#33bbcf]" /> Disaster Recovery Planning</li>
            </ul>
          </div>
        </div>

        {/* Section 11: Incident Response */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Rapid Security Response Process</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Our SLA-driven protocol for handling critical security events.</p>
          </div>
          <div className="max-w-2xl mx-auto pl-4">
            <TimelineStep step="1" title="Detection" desc="Automated monitors or user reports flag an anomalous security event in real time." delay={0.1} />
            <TimelineStep step="2" title="Investigation" desc="Security engineering isolates the issue and assesses potential platform impact." delay={0.2} />
            <TimelineStep step="3" title="Containment" desc="Immediate deployment of firewall rules, session revokes, or patch isolation." delay={0.3} />
            <TimelineStep step="4" title="Resolution" desc="Vulnerability is patched, systems restored, and post-mortem analysis logged." delay={0.4} />
          </div>
        </div>

        {/* Trust Metrics Section */}
        <div className="py-12 border-y border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                <AnimatedCounter end={99.9} suffix="%" />
              </h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Uptime SLA</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                <AnimatedCounter end={16} suffix="+" />
              </h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Countries Served</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                24/7
              </h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Monitoring</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black dark:from-[#11101d] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

          <ShieldCheck className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Security Questions?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our security and compliance team is available to discuss vendor assessments or platform infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Contact Security Team
            </a>
            <Link to="/data-processing-agreement" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
               View DPA
            </Link>
            <Link to="/privacy-policy" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hidden lg:flex">
               Privacy Policy
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default SecurityOverview;
