import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  Shield,
  FileText,
  UserCheck,
  Building2,
  Lock,
  Zap,
  Globe,
  Scale,
  CreditCard,
  Database,
  Activity,
  AlertTriangle,
  XCircle,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

// Table of Contents & Content Structure
const termsSections = [
  {
    id: "about",
    title: "1. About TechieHelp",
    icon: <Building2 className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp is an AI Automation Platform that provides AI-powered business solutions including AI Employees, Lead Qualification Systems, AI Calling Agents, Workflow Automation, AI Dashboards, SaaS Products, and Intelligent Business Automation Services.
        </p>
      </>
    )
  },
  {
    id: "acceptance",
    title: "2. Acceptance of Terms",
    icon: <FileText className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          By accessing our website, products, or services, you agree to be legally bound by these Terms & Conditions. If you do not agree, please discontinue use of our services immediately.
        </p>
      </>
    )
  },
  {
    id: "eligibility",
    title: "3. User Eligibility",
    icon: <UserCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          You must be at least 18 years old or have legal authority to enter into business agreements on behalf of an organization.
        </p>
      </>
    )
  },
  {
    id: "registration",
    title: "4. Account Registration",
    icon: <Lock className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">Users are responsible for:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Maintaining account security</li>
          <li>Protecting login credentials</li>
          <li>Providing accurate business information</li>
          <li>All activities performed under their account</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp reserves the right to suspend or terminate accounts that provide false or misleading information.
        </p>
      </>
    )
  },
  {
    id: "usage",
    title: "5. Platform Usage",
    icon: <Zap className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">Users may not:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
          <li>Violate applicable laws or regulations</li>
          <li>Attempt unauthorized access to systems</li>
          <li>Interfere with platform security</li>
          <li>Upload malicious software or harmful content</li>
          <li>Abuse AI-generated services</li>
          <li>Use the platform for spam or illegal activities</li>
        </ul>
      </>
    )
  },
  {
    id: "ai-disclaimer",
    title: "6. AI Services Disclaimer",
    icon: <AlertTriangle className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp provides AI-generated outputs including lead qualification, email drafts, workflow recommendations, and automation actions.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          While we strive for accuracy, AI-generated results may occasionally contain errors. Users remain responsible for reviewing important business decisions before implementation.
        </p>
      </>
    )
  },
  {
    id: "integrations",
    title: "7. Third-Party Integrations",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">Our platform may connect with third-party services including:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Gmail</li>
          <li>Google Workspace</li>
          <li>WhatsApp Business</li>
          <li>CRM Platforms</li>
          <li>Payment Providers</li>
          <li>Voice AI Providers</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Use of these integrations remains subject to the respective provider's terms and policies.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    icon: <Shield className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          All content, software, branding, logos, designs, dashboards, AI workflows, and platform components belong to TechieHelp unless otherwise stated.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Users may not copy, reproduce, resell, reverse engineer, or redistribute any part of the platform without written permission.
        </p>
      </>
    )
  },
  {
    id: "payments",
    title: "9. Payments & Billing",
    icon: <CreditCard className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">For paid services:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
          <li>Fees must be paid according to agreed pricing</li>
          <li>Payments are generally non-refundable unless stated otherwise</li>
          <li>Failure to pay may result in suspension of services</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Custom development and implementation projects may be governed by separate agreements.
        </p>
      </>
    )
  },
  {
    id: "data",
    title: "10. Data & Privacy",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We take reasonable measures to protect customer information and business data.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          By using our services, you agree to our Privacy Policy regarding data collection, storage, and processing.
        </p>
      </>
    )
  },
  {
    id: "availability",
    title: "11. Service Availability",
    icon: <Activity className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          While we aim for high platform availability, TechieHelp does not guarantee uninterrupted service. Maintenance, upgrades, or external provider outages may occasionally impact functionality.
        </p>
      </>
    )
  },
  {
    id: "liability",
    title: "12. Limitation of Liability",
    icon: <Scale className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our platform, services, or AI-generated outputs.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Our total liability shall not exceed the amount paid by the customer for the applicable service.
        </p>
      </>
    )
  },
  {
    id: "termination",
    title: "13. Termination",
    icon: <XCircle className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We reserve the right to suspend or terminate accounts that violate these Terms & Conditions or misuse our platform.
        </p>
      </>
    )
  },
  {
    id: "changes",
    title: "14. Changes to Terms",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp may update these Terms & Conditions at any time. Continued use of the platform constitutes acceptance of updated terms.
        </p>
      </>
    )
  },
  {
    id: "governing-law",
    title: "15. Governing Law",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Jodhpur, Rajasthan, India.
        </p>
      </>
    )
  },
];


const SiteTerms = () => {
  const [activeSection, setActiveSection] = useState(termsSections[0].id);

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
      const sectionElements = termsSections.map(section =>
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#02000a] text-gray-900 dark:text-white font-poppins relative selection:bg-blue-500/30">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium"
          >
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Legal</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">Terms & Conditions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            The terms governing the use of TechieHelp's AI platforms, services, and automation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> MSME Registered
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" /> ISO 9001 Verified
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> AI Platform
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Global Operations
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">Contents</h3>
              <nav className="flex flex-col space-y-1">
                {termsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm py-2 px-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id
                        ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
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
                Welcome to TechieHelp. These Terms & Conditions govern your access to and use of TechieHelp's websites, platforms, AI products, software, dashboards, and services. By accessing or using our platform, you agree to comply with these terms.
              </p>
            </div>

            {/* Legal Highlights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mb-4">
                  <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">User Responsibilities</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Maintain secure credentials and provide accurate business information when utilizing our AI services.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-500/5 border border-purple-100 dark:border-purple-500/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold mb-2">Security Standards</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">We protect your data with encrypted pipelines and strict compliance with global privacy regulations.</p>
              </div>
            </div>

            {/* Document Sections */}
            <div className="space-y-16">
              {termsSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      <a href={`#${section.id}`} className="hover:text-blue-500 transition-colors">
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">16. Contact Information</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">For questions regarding these Terms & Conditions, please contact our legal and support team:</p>

              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all" />

                <h3 className="text-xl font-bold mb-6">TechieHelp Headquarters</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Support</p>
                      <a href="mailto:support@techiehelp.in" className="font-semibold hover:text-blue-500 transition-colors">support@techiehelp.in</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone Support</p>
                      <a href="tel:+917073130165" className="font-semibold hover:text-blue-500 transition-colors">+91 7073130165</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Website</p>
                      <a href="http://www.techiehelp.in" target="_blank" rel="noreferrer" className="font-semibold hover:text-blue-500 transition-colors">www.techiehelp.in</a>
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

              <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-100 dark:border-blue-500/20 text-center">
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  By using TechieHelp, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black dark:from-[#11101d] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

          <MessageSquare className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions About These Terms?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our legal and compliance team is here to help you understand our service terms, data privacy, and AI policies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Mail className="w-5 h-5" /> Contact Support
            </a>
            <Link to="/contacts" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
              Book a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default SiteTerms;
