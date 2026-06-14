import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  Scale,
  FileCheck,
  Lock,
  Building2,
  Globe,
  Award,
  ClipboardCheck,
  Fingerprint,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Activity,
  Cpu,
  RefreshCw,
  Zap,
  Network,
  Eye
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

const TrustCard = ({ title, icon: Icon, delay, desc, highlight = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`p-6 rounded-2xl flex flex-col gap-4 shadow-sm transition-all group relative overflow-hidden ${
      highlight 
        ? "bg-gradient-to-br from-[#33bbcf]/10 to-blue-500/10 border border-[#33bbcf]/30 hover:border-[#33bbcf]" 
        : "bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 hover:border-[#33bbcf]/50"
    }`}
  >
    {highlight && <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/20 transition-colors" />}
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
      highlight ? "bg-[#33bbcf]/20 border border-[#33bbcf]/30" : "bg-cyan-50 dark:bg-[#33bbcf]/10 border border-cyan-100 dark:border-[#33bbcf]/20"
    }`}>
      <Icon className={`w-6 h-6 ${highlight ? "text-[#33bbcf]" : "text-cyan-600 dark:text-[#33bbcf]"}`} />
    </div>
    <div className="relative z-10">
      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
      {desc && <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>}
    </div>
  </motion.div>
);

const CertificationCard = ({ title, subtitle, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-[#050510] border border-gray-200 dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:border-[#33bbcf]/50 transition-colors group shadow-sm"
  >
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#33bbcf]/10 dark:to-blue-500/10 border border-blue-100 dark:border-[#33bbcf]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-blue-600 dark:text-[#33bbcf]" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white text-lg">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{subtitle}</p>
    </div>
  </motion.div>
);

const GovernanceNode = ({ title, desc, step }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative z-10 w-full">
    <div className="w-12 h-12 rounded-full bg-[#33bbcf] text-gray-900 font-black flex items-center justify-center text-xl shrink-0 shadow-[0_0_15px_rgba(51,187,207,0.3)]">
      {step}
    </div>
    <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex-1 shadow-sm hover:border-[#33bbcf]/50 transition-colors">
      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  </div>
);

// --- Main Component ---

const ComplianceCenter = () => {
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
          <span className="text-gray-900 dark:text-white">Compliance Center</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        >
          Compliance & Trust Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-10"
        >
          Our commitment to security, privacy, governance, operational excellence, and responsible AI deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 text-sm font-semibold mb-20"
        >
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <BadgeCheck className="w-4 h-4 text-[#33bbcf]" /> ISO 9001 Verified
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <Building2 className="w-4 h-4 text-blue-500" /> MSME Registered
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Privacy Focused
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <Lock className="w-4 h-4 text-purple-500" /> Enterprise Ready
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <Scale className="w-4 h-4 text-orange-500" /> Responsible AI
          </span>
        </motion.div>

        {/* Hero Visual: Trust Network */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl flex items-center justify-center min-h-[400px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,187,207,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Center Node */}
            <div className="absolute w-24 h-24 bg-gradient-to-br from-[#33bbcf] to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(51,187,207,0.4)] z-20">
              <ShieldCheck className="w-12 h-12 text-gray-900" />
            </div>

            {/* Orbiting Nodes */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-lg flex items-center gap-2 rotate-[-360deg] animate-[spin_30s_linear_reverse_infinite]">
                <Scale className="w-4 h-4 text-[#33bbcf]" /> <span className="text-xs font-bold whitespace-nowrap">Governance</span>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-lg flex items-center gap-2 rotate-[-360deg] animate-[spin_30s_linear_reverse_infinite]">
                <BadgeCheck className="w-4 h-4 text-blue-500" /> <span className="text-xs font-bold whitespace-nowrap">Quality</span>
              </div>
            </motion.div>

            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px]">
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 p-3 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-lg flex items-center gap-2 rotate-[360deg] animate-[spin_40s_linear_infinite]">
                <Fingerprint className="w-4 h-4 text-purple-500" /> <span className="text-xs font-bold whitespace-nowrap">Privacy</span>
              </div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 p-3 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-lg flex items-center gap-2 rotate-[360deg] animate-[spin_40s_linear_infinite]">
                <Cpu className="w-4 h-4 text-green-500" /> <span className="text-xs font-bold whitespace-nowrap">AI Responsibility</span>
              </div>
            </motion.div>
            
            {/* Connecting Lines */}
            <div className="absolute w-full h-full border border-dashed border-gray-300 dark:border-white/10 rounded-full" style={{ width: '250px', height: '250px' }} />
            <div className="absolute w-full h-full border border-dashed border-gray-200 dark:border-white/5 rounded-full" style={{ width: '500px', height: '500px' }} />
          </div>
        </motion.div>
      </section>

      {/* Main Content Areas */}
      <section className="px-6 max-w-6xl mx-auto pb-32 space-y-32">
        
        {/* Section 1 & 2: Overview & Certifications */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built For Trust & Long-Term Reliability</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              TechieHelp follows structured processes, governance frameworks, and operational standards to ensure reliable delivery, customer trust, and platform security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard title="ISO 9001 Verified" subtitle="Quality Management Standard" icon={BadgeCheck} delay={0.1} />
            <CertificationCard title="MSME Registered" subtitle="Government Recognized" icon={Building2} delay={0.2} />
            <CertificationCard title="Startup of the Year" subtitle="JIET Universe Jodhpur" icon={Award} delay={0.3} />
            <CertificationCard title="Rajasthan Startup" subtitle="Summit 2026 Selected" icon={Award} delay={0.4} />
            <CertificationCard title="Seaside Startup" subtitle="Summit Armenia 2026" icon={Globe} delay={0.5} />
          </div>
        </div>

        {/* Section 10: Live Trust Center Panel (Moved up for impact) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bg-[#050510] border border-[#33bbcf]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(51,187,207,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/10 pb-8">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Activity className="w-6 h-6 text-[#33bbcf]" /> Live Compliance Status
              </h3>
              <p className="text-gray-400 mt-2">Real-time operational status of core governance frameworks.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-green-400">All Systems Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: "ISO 9001 Verified", icon: BadgeCheck },
              { label: "MSME Registered", icon: Building2 },
              { label: "Privacy Controls", icon: Fingerprint },
              { label: "Security Controls", icon: Lock },
              { label: "Responsible AI", icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <item.icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-white text-sm">Operational</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 6: Operational Governance */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Operational Governance</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              How we maintain quality and compliance continuously.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 relative max-w-3xl mx-auto pl-6 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[38px] md:left-[23px] top-6 bottom-6 w-1 bg-gradient-to-b from-[#33bbcf]/50 via-blue-500/50 to-purple-500/50 hidden md:block" />
            
            <GovernanceNode step="1" title="Policies Defined" desc="Establishing strict guidelines for Quality Assurance, Risk Management, and Incident Response." />
            <GovernanceNode step="2" title="Processes Implemented" desc="Translating policies into executable workflows, internal reviews, and strict documentation." />
            <GovernanceNode step="3" title="Active Monitoring" desc="24/7 observability across infrastructure, data access, and AI workflow execution." />
            <GovernanceNode step="4" title="Regular Auditing" desc="Scheduled internal and external reviews to ensure ISO compliance and structural integrity." />
            <GovernanceNode step="5" title="Continuous Improvement" desc="Iterative upgrades based on customer feedback, threat intel, and platform analytics." />
          </div>
        </div>

        {/* Section 5: Responsible AI Principles */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <Cpu className="w-10 h-10 text-[#33bbcf]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI Built Responsibly</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl">
            TechieHelp builds AI systems that support businesses while maintaining strict responsible use standards, ensuring technology augments human capability ethically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TrustCard title="Human Oversight" desc="Ensuring critical automation decisions always have 'human-in-the-loop' safeguards." icon={Eye} highlight />
            <TrustCard title="Transparency" desc="Clear operational logic so customers know exactly how their AI processes data." icon={Network} />
            <TrustCard title="Privacy Protection" desc="AI models are strictly prohibited from using customer data for external training." icon={Fingerprint} />
            <TrustCard title="Ethical Automation" desc="Strict boundaries against creating systems that deceive or manipulate end users." icon={Scale} />
            <TrustCard title="Fair Usage" desc="Equitable resource distribution preventing monopolization of computational power." icon={Activity} />
            <TrustCard title="Business Accountability" desc="We take complete responsibility for the secure infrastructure powering our agents." icon={ShieldCheck} highlight />
          </div>
        </div>

        {/* Section 3 & 4 & 7: Legal Framework & Privacy */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Legal & Privacy Framework</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our comprehensive suite of binding policies protecting your enterprise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/privacy-policy" className="p-6 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-[#33bbcf]/50 transition-colors flex flex-col items-center text-center gap-3 group">
              <Fingerprint className="w-8 h-8 text-gray-400 group-hover:text-[#33bbcf] transition-colors" />
              <span className="font-bold text-sm">Privacy Policy</span>
            </Link>
            <Link to="/data-processing-agreement" className="p-6 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-[#33bbcf]/50 transition-colors flex flex-col items-center text-center gap-3 group">
              <ClipboardCheck className="w-8 h-8 text-gray-400 group-hover:text-[#33bbcf] transition-colors" />
              <span className="font-bold text-sm">DPA</span>
            </Link>
            <Link to="/terms-and-conditions" className="p-6 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-[#33bbcf]/50 transition-colors flex flex-col items-center text-center gap-3 group">
              <FileCheck className="w-8 h-8 text-gray-400 group-hover:text-[#33bbcf] transition-colors" />
              <span className="font-bold text-sm">Terms & Conditions</span>
            </Link>
            <Link to="/acceptable-use-policy" className="p-6 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-[#33bbcf]/50 transition-colors flex flex-col items-center text-center gap-3 group">
              <Scale className="w-8 h-8 text-gray-400 group-hover:text-[#33bbcf] transition-colors" />
              <span className="font-bold text-sm">Acceptable Use</span>
            </Link>
          </div>
        </div>

        {/* Section 8: Global Operations */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Trusted Across 16+ Countries</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              TechieHelp delivers secure, compliant AI automation to startups, enterprises, and governments globally.
            </p>
            <div className="flex gap-6">
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-1"><AnimatedCounter end={16} suffix="+" /></h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Countries Served</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-1"><AnimatedCounter end={100} suffix="+" /></h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Global Projects</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-wrap gap-3 relative z-10">
            {["India", "USA", "UAE", "Japan", "Brazil", "Nigeria", "Kenya", "Sri Lanka", "Ghana", "Egypt", "Bangladesh", "Cameroon", "Rwanda", "Ethiopia", "Iran", "Qatar"].map((country, i) => (
              <span key={i} className="px-4 py-2 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#33bbcf]" /> {country}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black dark:from-[#11101d] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

          <BadgeCheck className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Need Enterprise Compliance Info?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our compliance team is ready to assist your organization with vendor assessments and governance documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Contact Compliance Team
            </a>
            <Link to="/security" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
               View Security Overview
            </Link>
            <Link to="/data-processing-agreement" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hidden lg:flex">
               View DPA
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default ComplianceCenter;
