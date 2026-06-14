import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  Shield,
  ShieldAlert,
  Lock,
  UserCheck,
  Mail,
  Phone,
  Database,
  Globe,
  FileWarning,
  Ban,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Activity,
  Layers,
  Zap,
  TrendingUp,
  Cpu,
  RefreshCw,
  Clock,
  MapPin
} from "lucide-react";

// --- Custom Components ---

const PermittedCard = ({ title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-xl p-5 flex gap-4 shadow-sm group hover:border-[#33bbcf]/50 transition-colors"
  >
    <div className="w-10 h-10 rounded-full bg-cyan-50 dark:bg-[#33bbcf]/10 border border-cyan-100 dark:border-[#33bbcf]/20 flex items-center justify-center shrink-0">
      <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-[#33bbcf]" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#33bbcf] transition-colors">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WarningCard = ({ title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-5 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-xl flex items-start gap-4"
  >
    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-red-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
      <Ban className="w-5 h-5 text-red-500" />
    </div>
    <div>
      <h4 className="font-bold text-red-900 dark:text-red-400 mb-1">{title}</h4>
      {desc && <p className="text-sm text-red-800 dark:text-red-300/80 leading-relaxed">{desc}</p>}
    </div>
  </motion.div>
);

const TimelineStep = ({ step, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex-1 text-center relative"
  >
    <div className="w-12 h-12 mx-auto rounded-full bg-orange-50 dark:bg-orange-500/10 border-2 border-orange-200 dark:border-orange-500/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold mb-3 relative z-10">
      <ShieldAlert className="w-5 h-5" />
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
  </motion.div>
);

// --- Content Structure ---

const policySections = [
  {
    id: "overview",
    title: "1. Overview",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsible Automation</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
          TechieHelp provides AI-powered business automation tools designed to improve productivity, communication, lead management, workflow automation, and customer engagement.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          To maintain a secure, high-performance, and trustworthy environment, all users must use the platform responsibly, ethically, and in strict compliance with applicable local and international laws.
        </p>
      </>
    )
  },
  {
    id: "permitted",
    title: "2. Permitted Usage",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          TechieHelp's AI systems are engineered to accelerate legitimate business operations. Users may freely use the platform for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PermittedCard title="Business Automation" desc="Automating repetitive operational tasks and data entry." delay={0.1} />
          <PermittedCard title="Lead Qualification" desc="Scoring and qualifying opted-in inbound business leads." delay={0.2} />
          <PermittedCard title="Customer Communication" desc="Responding to inquiries and providing fast support." delay={0.3} />
          <PermittedCard title="Workflow Automation" desc="Connecting internal APIs and syncing business data." delay={0.4} />
          <PermittedCard title="Email Automation" desc="Sending transactional and opted-in marketing campaigns." delay={0.5} />
          <PermittedCard title="AI Calling Systems" desc="Conducting legitimate outbound sales or inbound support." delay={0.6} />
        </div>
      </>
    )
  },
  {
    id: "prohibited",
    title: "3. Prohibited Activities",
    icon: <Ban className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Strictly Forbidden Operations</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          To protect our network reputation and our users, you may <strong>NOT</strong> use TechieHelp services to facilitate or engage in:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WarningCard title="Illegal Activities" desc="Any action violating local, national, or international law." delay={0.1} />
          <WarningCard title="Fraud & Financial Scams" desc="Deceptive schemes designed to steal money or credentials." delay={0.2} />
          <WarningCard title="Phishing Campaigns" desc="Impersonating trusted entities to gather sensitive data." delay={0.3} />
          <WarningCard title="Spam Distribution" desc="Mass unsolicited communication across any channel." delay={0.4} />
          <WarningCard title="Harassment" desc="Threatening, abusive, or highly offensive communication." delay={0.5} />
          <WarningCard title="Fake Lead Generation" desc="Creating or distributing manufactured user data." delay={0.6} />
        </div>
      </>
    )
  },
  {
    id: "ai-rules",
    title: "4. AI Usage Rules",
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          AI-generated outputs (text, voice, analysis) possess significant persuasive power. Therefore, AI tools must not be configured or used for:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
          <li><strong>Deceptive Activities:</strong> Tricking users into believing they are interacting with a human when human intervention is required by law.</li>
          <li><strong>Misinformation Campaigns:</strong> Generating or amplifying false information at scale.</li>
          <li><strong>Impersonation:</strong> Programming Voice AI or Text AI to mimic specific individuals without their explicit consent.</li>
        </ul>
        <div className="p-5 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
          <p className="text-blue-900 dark:text-blue-300 font-medium text-sm">
            <strong>Liability:</strong> Users remain fully responsible and legally liable for all actions performed through, and content generated by, their configured AI systems.
          </p>
        </div>
      </>
    )
  },
  {
    id: "leadai",
    title: "5. LeadAI Restrictions",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          The LeadAI Engine is a powerful tool designed for inbound optimization. It may <strong>not</strong> be used to:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Send Bulk Spam Emails", "Automate Unsolicited Outreach", "Generate Fake Leads", "Bypass Third-Party Platform Rules", "Manipulate Customer Data", "Abuse CRM Systems", "Artificially Inflate Metrics"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <FileWarning className="w-4 h-4 text-orange-500" /> {tag}
            </span>
          ))}
        </div>
      </>
    )
  },
  {
    id: "communication",
    title: "6. Communication Policies",
    icon: <MessageSquare className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Whether utilizing Email, WhatsApp, or Voice AI Calling Agents, your customer messaging must strictly comply with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">Anti-Spam Requirements</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <UserCheck className="w-5 h-5 text-gray-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">Explicit Consent Requirements</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">Local Telemarketing Regulations</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center gap-3">
            <Shield className="w-5 h-5 text-gray-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">Business Communication Standards</span>
          </div>
        </div>
      </>
    )
  },
  {
    id: "security",
    title: "7. Security Violations",
    icon: <Lock className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Platform integrity is our highest priority. Users are strictly prohibited from:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li><strong>Unauthorized Access:</strong> Attempting to bypass authentication or access data not belonging to you.</li>
          <li><strong>API Abuse:</strong> Sending excessive requests designed to overload our infrastructure (DDoS).</li>
          <li><strong>Credential Sharing:</strong> Selling, reselling, or inappropriately sharing active session tokens.</li>
          <li><strong>Reverse Engineering:</strong> Decompiling or extracting source code from TechieHelp dashboards or AI models.</li>
          <li><strong>Malware Distribution:</strong> Uploading malicious payloads, scripts, or viruses into the platform.</li>
          <li><strong>Unapproved Testing:</strong> Conducting penetration testing or automated security scans without written permission.</li>
        </ul>
      </>
    )
  },
  {
    id: "suspension",
    title: "8. Account Suspension",
    icon: <ShieldAlert className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          TechieHelp utilizes automated monitoring and manual audits. We reserve the right to immediately suspend or permanently terminate accounts that violate this policy, threaten platform security, or engage in illegal activity.
        </p>

        {/* Animated Timeline UI */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-gray-200 dark:bg-gray-800 -z-10" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-6 left-[10%] right-[10%] h-1 bg-orange-500 origin-left -z-10" 
          />
          
          <div className="flex justify-between relative z-10">
            <TimelineStep step="1" title="Violation Detected" delay={0.3} />
            <TimelineStep step="2" title="Service Suspended" delay={0.6} />
            <TimelineStep step="3" title="Account Terminated" delay={0.9} />
          </div>
        </div>
      </>
    )
  },
  {
    id: "reporting",
    title: "9. Reporting Abuse",
    icon: <FileWarning className="w-5 h-5" />,
    content: (
      <>
        <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">See Something Suspicious?</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            If you encounter suspected abuse, fraud, security issues, or a violation of this Acceptable Use Policy originating from a TechieHelp customer, please report it immediately.
          </p>
          <a href="mailto:support@techiehelp.in" className="inline-flex items-center gap-2 text-[#33bbcf] font-bold hover:underline">
            Report Abuse via Email <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </>
    )
  },
  {
    id: "updates",
    title: "10. Policy Updates",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          TechieHelp may update this policy periodically as our AI services evolve and as international regulations change. Users are encouraged to review this policy regularly. Continued use of the platform constitutes acceptance of the updated terms.
        </p>
      </>
    )
  }
];

const AcceptableUsePolicy = () => {
  const [activeSection, setActiveSection] = useState(policySections[0].id);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = policySections.map(section =>
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
            <span className="text-gray-900 dark:text-white">Acceptable Use Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Acceptable Use Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            Guidelines for responsible, ethical, and lawful use of TechieHelp platforms, AI employees, automation systems, and services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> Responsible AI
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> Secure Platform
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Enterprise Standards
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Ethical Usage
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
                {policySections.map((section) => (
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
              {policySections.map((section) => (
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

            <div id="contact" className="scroll-mt-32 mt-16 pl-0 md:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Report Abuse or Policy Concerns</h2>
              
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/20 transition-all" />

                <h3 className="text-xl font-bold mb-6">TechieHelp Security Team</h3>

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

          <Shield className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions About Platform Usage?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our compliance and security teams are available to clarify any questions regarding acceptable use of AI workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Contact Support
            </a>
            <Link to="/terms-and-conditions" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
               View Terms
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

export default AcceptableUsePolicy;
