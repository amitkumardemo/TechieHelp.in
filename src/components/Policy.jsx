import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Database,
  UserCheck,
  Building2,
  Lock,
  Zap,
  Globe,
  Archive,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Eye,
  Settings,
  Link as LinkIcon
} from "lucide-react";

// Table of Contents & Content Structure
const policySections = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp collects specific information to deliver and optimize our AI Workforce Platform and automation systems. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li><strong>Identity Data:</strong> Name, business information, company details.</li>
          <li><strong>Contact Data:</strong> Email address, phone number.</li>
          <li><strong>Technical Data:</strong> Website interactions, form submissions.</li>
          <li><strong>Integration Data:</strong> Gmail connections, CRM data, WhatsApp integrations.</li>
          <li><strong>Usage Data:</strong> LeadAI activity data, platform interactions, workflow execution metrics.</li>
        </ul>
      </>
    )
  },
  {
    id: "usage",
    title: "2. How We Use Information",
    icon: <Settings className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We use collected information exclusively to operate and improve our services:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Account creation and secure authentication.</li>
          <li>Executing core platform operations and automation workflows.</li>
          <li>Powering AI Lead Qualification and AI Email Processing.</li>
          <li>Facilitating AI Calling Services and customer support interactions.</li>
          <li>Performing analytics and continuous platform improvements.</li>
        </ul>
      </>
    )
  },
  {
    id: "ai-processing",
    title: "3. AI Platform Data Processing",
    icon: <Zap className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          As an AI Workforce Platform, the LeadAI engine may process the following data to execute designated tasks:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Emails, leads, and web forms.</li>
          <li>Customer interactions and workflow data.</li>
          <li>CRM records synced by the user.</li>
        </ul>
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-xl">
          <p className="text-red-800 dark:text-red-200 font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5" /> TechieHelp does NOT sell customer data. Data is processed solely for delivering platform functionality.
          </p>
        </div>
      </>
    )
  },
  {
    id: "integrations",
    title: "4. Third-Party Integrations",
    icon: <LinkIcon className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp securely connects with various third-party platforms via OAuth and API protocols to enable workflow automation:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Google Gmail, Google Workspace, and Google Sheets.</li>
          <li>WhatsApp Business API and CRM Platforms.</li>
          <li>Voice AI Providers and Payment Processors.</li>
          <li>Cloud Infrastructure Providers.</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We utilize secure OAuth connections to ensure we only access the specific data required to perform your automated workflows, without storing underlying credentials.
        </p>
      </>
    )
  },
  {
    id: "security",
    title: "5. Data Security",
    icon: <Lock className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We deploy enterprise-grade security architecture to protect your business information:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white mb-1">Encryption</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Data is encrypted at rest and in transit.</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-start gap-3">
            <Shield className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white mb-1">Access Controls</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Strict role-based permissions and authentication protection.</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-start gap-3">
            <Building2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white mb-1">Secure Infrastructure</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hosted on hardened, enterprise-grade cloud environments.</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-start gap-3">
            <Eye className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white mb-1">Monitoring & Logging</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Continuous security monitoring and audit logging.</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "cookies",
    title: "6. Cookies & Tracking",
    icon: <Eye className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We use tracking technologies to improve platform experience and understand usage patterns:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li><strong>Necessary Cookies:</strong> Required for authentication, security, and core platform operation.</li>
          <li><strong>Analytics Cookies:</strong> To understand how users interact with our dashboards and services.</li>
          <li><strong>Performance Cookies:</strong> To ensure fast loading times and optimized routing.</li>
          <li><strong>Preference Cookies:</strong> To remember your dashboard settings and theme preferences.</li>
        </ul>
      </>
    )
  },
  {
    id: "retention",
    title: "7. Data Retention",
    icon: <Archive className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Customer data is retained only as long as necessary to provide the requested services, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Users may request data deletion at any time. Upon account deletion, all active workflow data, synced CRM records, and associated PII are purged from our active databases in accordance with our deletion procedures.
        </p>
      </>
    )
  },
  {
    id: "rights",
    title: "8. Your Privacy Rights",
    icon: <UserCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Depending on your jurisdiction, you possess the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li><strong>Access Data:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Update Data:</strong> Correct inaccuracies in your business or personal profiles.</li>
          <li><strong>Delete Data:</strong> Request erasure of your data from our systems.</li>
          <li><strong>Request Export:</strong> Obtain your data in a portable, machine-readable format.</li>
          <li><strong>Withdraw Consent:</strong> Opt-out of non-essential data processing or marketing communications.</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          To exercise any of these rights, please contact our support team.
        </p>
      </>
    )
  },
  {
    id: "international",
    title: "9. International Operations",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp operates globally, supporting organizations across:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["India", "USA", "UAE", "Japan", "Brazil", "Nigeria", "Kenya", "Sri Lanka", "Ghana", "Egypt", "Bangladesh", "Cameroon", "Rwanda", "Ethiopia", "Iran", "Qatar"].map((country) => (
            <span key={country} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">
              {country}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          By utilizing our services, you consent to the secure transfer, processing, and storage of your information in data centers that may be located outside your country of residence, strictly adhering to international security standards.
        </p>
      </>
    )
  },
  {
    id: "updates",
    title: "10. Policy Updates",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp may update this Privacy Policy periodically to reflect changes in our AI technologies, legal requirements, or operational practices.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Users will be notified via email or a prominent platform notice when significant material changes occur.
        </p>
      </>
    )
  }
];


const SitePolicy = () => {
  const [activeSection, setActiveSection] = useState(policySections[0].id);

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Intersection Observer for active TOC highlighting
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
      const offset = 100; // Account for sticky header
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

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#33bbcf] to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#33bbcf]/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium"
          >
            <Link to="/" className="hover:text-[#33bbcf] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Legal</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">Privacy Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            How TechieHelp collects, processes, protects, and manages data across our AI platforms, automation systems, and business solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> ISO 9001 Verified
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> MSME Registered
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Enterprise Security
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Privacy Focused
            </span>
          </motion.div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="flex flex-col lg:flex-row gap-12 relative items-start">

          {/* Sticky Sidebar (Table of Contents) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block w-[300px] shrink-0 sticky top-32"
          >
            <div className="bg-white dark:bg-[#050510]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">Privacy Overview</h3>
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
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Document Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-[900px] flex-1 bg-white dark:bg-[#050510]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-none"
          >

            <div className="mb-12 pb-8 border-b border-gray-200 dark:border-white/10">
              <p className="text-gray-500 dark:text-gray-400 font-medium"><strong>Last Updated:</strong> June 2026</p>
              <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                TechieHelp takes privacy, security, and data protection seriously. This document outlines our practices regarding the collection, use, and safeguarding of your information when you interact with our AI platforms, LeadAI engine, and automation services.
              </p>
            </div>

            {/* Document Sections */}
            <div className="space-y-16">
              {policySections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
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

            {/* Specific Contact Section inside Document */}
            <div id="contact" className="scroll-mt-32 mt-16 pl-0 md:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Contact Information</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">For questions regarding this Privacy Policy or your data rights, please contact our legal and support team:</p>

              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/20 transition-all" />

                <h3 className="text-xl font-bold mb-6">TechieHelp</h3>

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions About Privacy?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our legal and compliance team is here to help you understand our data processing, security standards, and your privacy rights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Mail className="w-5 h-5" /> Contact Support
            </a>
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default SitePolicy;
