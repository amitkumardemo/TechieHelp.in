import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Database,
  Lock,
  Server,
  Globe,
  KeyRound,
  Cloud,
  FileCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Activity,
  Cpu,
  RefreshCw,
  FolderLock,
  Network
} from "lucide-react";

// --- Custom Components ---

const DefinitionCard = ({ term, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:border-[#33bbcf]/50 transition-colors"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-[#33bbcf]/10 border border-cyan-100 dark:border-[#33bbcf]/20 flex items-center justify-center shrink-0">
        <FileCheck className="w-4 h-4 text-cyan-600 dark:text-[#33bbcf]" />
      </div>
      <h4 className="font-bold text-gray-900 dark:text-white">{term}</h4>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-11 border-l-2 border-gray-100 dark:border-white/5">{desc}</p>
  </motion.div>
);

const SecurityCard = ({ title, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-5 bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-4 group hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
  >
    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#33bbcf]/50 transition-all">
      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#33bbcf] transition-colors" />
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
  </motion.div>
);

// --- Content Structure ---

const dpaSections = [
  {
    id: "overview",
    title: "1. Overview",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Establishing Enterprise Trust</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
          This Data Processing Agreement (DPA) governs the processing of personal and business data when customers use TechieHelp services, platforms, AI systems, and automation solutions.
        </p>
        <div className="p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl flex items-start gap-4 mb-6">
          <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2">Controller vs. Processor</h4>
            <p className="text-blue-800 dark:text-blue-300/80 text-sm leading-relaxed">
              In the context of this agreement, TechieHelp acts solely as a <strong>Data Processor</strong> providing infrastructure, while our customers remain the absolute <strong>Data Controller</strong> of their own business and client data.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "definitions",
    title: "2. Definitions",
    icon: <FileCheck className="w-5 h-5" />,
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DefinitionCard term="Data Controller" desc="The entity that determines the purposes and means of the processing of Personal Data (Our Customer)." delay={0.1} />
          <DefinitionCard term="Data Processor" desc="The entity which processes Personal Data on behalf of the controller (TechieHelp)." delay={0.2} />
          <DefinitionCard term="Personal Data" desc="Any information relating to an identified or identifiable natural person processed through our systems." delay={0.3} />
          <DefinitionCard term="Customer Data" desc="All electronic data, text, messages, communications or other materials submitted to the Platform." delay={0.4} />
          <DefinitionCard term="Subprocessor" desc="Any third party engaged by TechieHelp to process data on behalf of the Customer." delay={0.5} />
          <DefinitionCard term="AI Workflow Data" desc="Specific datasets temporarily processed in memory to execute AI models or LLM operations." delay={0.6} />
        </div>
      </>
    )
  },
  {
    id: "scope",
    title: "3. Scope of Processing",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          To deliver platform functionality, LeadAI capabilities, and workflow automations, TechieHelp may process the following categories of data on your behalf:
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {["Contact Information", "Business Information", "Lead Data", "Email Content", "WhatsApp Communications", "CRM Records", "Workflow Data", "Customer Support Requests", "Platform Usage Logs", "Automation Events"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          TechieHelp processes this data strictly for the purpose of delivering, securing, and improving the agreed-upon platform services.
        </p>
      </>
    )
  },
  {
    id: "customer-responsibilities",
    title: "4. Customer Responsibilities",
    icon: <UserCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          As the Data Controller, the Customer assumes complete responsibility for:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li><strong>Obtaining Consents:</strong> Securing legally required permissions from individuals before loading their data into TechieHelp.</li>
          <li><strong>Legal Compliance:</strong> Ensuring that the collection and processing of data complies with all applicable privacy laws (e.g., GDPR, CCPA, DPDP).</li>
          <li><strong>Data Accuracy:</strong> Providing accurate information to the platform.</li>
          <li><strong>Managing Permissions:</strong> Properly configuring role-based access for their internal team members.</li>
          <li><strong>Lawful Collection:</strong> Refraining from processing illegal or highly sensitive unauthorized data.</li>
        </ul>
      </>
    )
  },
  {
    id: "techiehelp-responsibilities",
    title: "5. TechieHelp Responsibilities",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          As the Data Processor, TechieHelp formally agrees to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Process Data Only As Instructed</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Protect Customer Information</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Maintain Security Controls</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Limit Internal Access</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Support Data Requests</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Maintain Confidentiality</span>
          </div>
        </div>
      </>
    )
  },
  {
    id: "security-measures",
    title: "6. Data Security Measures",
    icon: <Lock className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          TechieHelp implements and maintains strict technical and organizational security measures to protect Customer Data against accidental or unlawful destruction, loss, alteration, or unauthorized access.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SecurityCard title="Encryption In Transit" icon={Network} delay={0.1} />
          <SecurityCard title="Encryption At Rest" icon={FolderLock} delay={0.2} />
          <SecurityCard title="OAuth Authentication" icon={KeyRound} delay={0.3} />
          <SecurityCard title="Access Controls" icon={Lock} delay={0.4} />
          <SecurityCard title="Role-Based Permissions" icon={UserCheck} delay={0.5} />
          <SecurityCard title="Audit Logging" icon={FileCheck} delay={0.6} />
          <SecurityCard title="Monitoring Systems" icon={Activity} delay={0.7} />
          <SecurityCard title="Secure Cloud Infrastructure" icon={Cloud} delay={0.8} />
          <SecurityCard title="Backup Systems" icon={Database} delay={0.9} />
        </div>
      </>
    )
  },
  {
    id: "subprocessors",
    title: "7. Subprocessors",
    icon: <Server className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          To provide highly available, global enterprise services, TechieHelp engages trusted third-party providers. All subprocessors are vetted to ensure they maintain appropriate security standards identical to our own.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Google Cloud", "Google Workspace", "Firebase", "Vercel", "Cloudflare", "WhatsApp Business Providers", "Voice AI Providers", "Payment Providers", "Analytics Services"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Server className="w-4 h-4 text-gray-400" /> {tag}
            </span>
          ))}
        </div>
      </>
    )
  },
  {
    id: "international-transfers",
    title: "8. International Data Transfers",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          TechieHelp supports global enterprise operations. We process and route data through secure, localized nodes across the following regions:
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {["India", "USA", "UAE", "Japan", "Brazil", "Nigeria", "Kenya", "Sri Lanka", "Ghana", "Egypt", "Bangladesh", "Cameroon", "Rwanda", "Ethiopia", "Iran", "Qatar"].map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-[#33bbcf]/5 border border-gray-200 dark:border-[#33bbcf]/20 rounded text-sm text-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            All cross-border data transfers are protected using industry-standard legal safeguards and robust encryption protocols ensuring compliance with international mandates.
          </p>
        </div>
      </>
    )
  },
  {
    id: "data-retention",
    title: "9. Data Retention",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp retains Customer Data only for as long as functionally necessary to fulfill the purposes outlined in this agreement:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li><strong>Service Delivery:</strong> Active accounts retaining operational workflow data.</li>
          <li><strong>Legal Compliance:</strong> Maintaining financial transaction logs for tax audits.</li>
          <li><strong>Security Monitoring:</strong> Storing access logs to investigate unauthorized activities.</li>
          <li><strong>Operational Requirements:</strong> Maintaining automated backups for disaster recovery.</li>
        </ul>
      </>
    )
  },
  {
    id: "data-deletion",
    title: "10. Data Deletion",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Customers have absolute control over their data lifecycle. The Controller may request:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Account Deletion</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Complete termination of platform access and profile.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Data Export</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Extracting raw CRM or workflow data prior to exit.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Data Removal</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Selective deletion of specific database records.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Access Requests</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Verification of what exact data is currently held.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "audit-compliance",
    title: "11. Audit & Compliance",
    icon: <FileCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          TechieHelp maintains strict internal governance to ensure our operations meet the standards expected by global enterprises.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <ShieldCheck className="w-5 h-5 text-green-500" /> ISO 9001 Verified
          </span>
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <CheckCircle2 className="w-5 h-5 text-blue-500" /> MSME Registered
          </span>
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <Lock className="w-5 h-5 text-purple-500" /> Privacy Controls
          </span>
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <Server className="w-5 h-5 text-[#33bbcf]" /> Security Procedures
          </span>
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <UserCheck className="w-5 h-5 text-orange-500" /> Internal Governance
          </span>
          <span className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm font-bold">
            <Activity className="w-5 h-5 text-pink-500" /> Operational Standards
          </span>
        </div>
      </>
    )
  }
];

const DataProcessingAgreement = () => {
  const [activeSection, setActiveSection] = useState(dpaSections[0].id);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = dpaSections.map(section =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#02000a] text-gray-900 dark:text-white font-poppins relative selection:bg-[#33bbcf]/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#33bbcf] to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#33bbcf]/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium"
          >
            <Link to="/" className="hover:text-[#33bbcf] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Legal</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">Data Processing Agreement</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Data Processing Agreement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-10"
          >
            How TechieHelp securely processes, manages, and protects customer data across our AI Workforce Platform and automation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> Enterprise Ready
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> Data Protection Focused
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Infrastructure
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Privacy Compliant
            </span>
          </motion.div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="flex flex-col lg:flex-row gap-12 relative items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block w-[300px] shrink-0 sticky top-32"
          >
            <div className="bg-white dark:bg-[#050510]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">Navigation</h3>
              <nav className="flex flex-col space-y-1">
                {dpaSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm py-2 px-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id
                        ? "bg-cyan-50 dark:bg-[#33bbcf]/10 text-cyan-600 dark:text-[#33bbcf] font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    <span className="opacity-70">{section.icon}</span>
                    <span className="truncate">{section.title.split('. ')[1]}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-[900px] flex-1 bg-white dark:bg-[#050510]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-none"
          >
            <div className="mb-12 pb-8 border-b border-gray-200 dark:border-white/10">
              <p className="text-gray-500 dark:text-gray-400 font-medium"><strong>Last Updated:</strong> June 2026</p>
            </div>

            <div className="space-y-16">
              {dpaSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white group-hover:scale-110 group-hover:bg-[#33bbcf] group-hover:text-white group-hover:border-[#33bbcf] transition-all duration-300">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      <a href={`#${section.id}`} className="hover:text-[#33bbcf] transition-colors">
                        {section.title}
                      </a>
                    </h2>
                  </div>
                  <div className="text-lg text-gray-700 dark:text-gray-300 pl-0 md:pl-16">
                    {section.content}
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-100 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent mt-12 md:ml-16" />
                </div>
              ))}
            </div>

            {/* Premium Enterprise Trust Section */}
            <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#33bbcf]/10 dark:to-blue-500/10 border border-blue-100 dark:border-[#33bbcf]/20 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/20 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 relative z-10">Why Organizations Trust TechieHelp</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Secure Data Processing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Military-grade encryption applied to all active workflows and storage.</p>
                </div>
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <FileCheck className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Transparent Operations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clear guidelines separating Data Controller and Processor responsibilities.</p>
                </div>
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <Lock className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Enterprise Controls</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Robust identity management and role-based access configurations.</p>
                </div>
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <Cloud className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Scalable Infrastructure</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Built on global cloud providers with 99.99% uptime guarantees.</p>
                </div>
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <Globe className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Global Operations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Supporting international deployments across 15+ countries.</p>
                </div>
                <div className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-sm">
                  <UserCheck className="w-6 h-6 text-[#33bbcf] mb-3" />
                  <h4 className="font-bold mb-1">Privacy Focused</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We do not sell data; your business information remains exclusively yours.</p>
                </div>
              </div>
            </div>

            <div id="contact" className="scroll-mt-32 mt-16 pl-0 md:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Questions About Data Processing?</h2>
              
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/20 transition-all" />

                <h3 className="text-xl font-bold mb-6">TechieHelp Compliance Team</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Support</p>
                      <a href="mailto:support@techiehelp.in" className="font-semibold hover:text-[#33bbcf] transition-colors">support@techiehelp.in</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone Support</p>
                      <a href="tel:+917073130165" className="font-semibold hover:text-[#33bbcf] transition-colors">+91 7073130165</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Website</p>
                      <a href="http://www.techiehelp.in" target="_blank" rel="noreferrer" className="font-semibold hover:text-[#33bbcf] transition-colors">www.techiehelp.in</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                      <p className="font-semibold">Jodhpur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black dark:from-[#11101d] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

          <ShieldCheck className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Need Enterprise Compliance Information?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our compliance team is ready to assist your organization with vendor assessments, security questionnaires, and data processing inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Contact Compliance Team
            </a>
            <Link to="/privacy-policy" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
               View Privacy Policy
            </Link>
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hidden lg:flex">
               Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default DataProcessingAgreement;
