import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  Shield,
  CreditCard,
  Building2,
  Lock,
  Zap,
  Globe,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  BarChart,
  Bot,
  Layers,
  PhoneCall,
  Settings,
  Clock,
  ArrowDownCircle,
  HelpCircle,
  UserCheck,
  Star
} from "lucide-react";

// --- Custom Components ---

const PricingCard = ({ title, price, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group flex flex-col justify-between min-h-[220px]"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 blur-[50px] rounded-full group-hover:bg-${color}-500/20 transition-all`} />
    <div className="relative z-10">
      <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10 mb-4`}>
        <Icon className={`w-6 h-6 text-${color}-500`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    </div>
    <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-white/10">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider font-semibold">Starting From</p>
      <p className="text-2xl font-black text-gray-900 dark:text-white">{price}</p>
    </div>
  </motion.div>
);

const TimelineItem = ({ title, time, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-0 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#050510]" />
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
      <Clock className="w-4 h-4 text-blue-500" />
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{time}</span>
    </div>
  </motion.div>
);

const FeatureCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-start gap-4"
  >
    <div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-cyan-500" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

// --- Content Structure ---

const pricingSections = [
  {
    id: "philosophy",
    title: "1. Pricing Philosophy",
    icon: <Star className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent & Value Driven</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          TechieHelp believes businesses should understand exactly what they are paying for. We reject complicated billing structures that trap businesses.
        </p>
        <ul className="space-y-3 mt-6">
          {["No hidden charges.", "No surprise invoices.", "No misleading commitments."].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-semibold">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: "model",
    title: "2. Our Pricing Model",
    icon: <BarChart className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Our core AI solutions are priced competitively based on the immediate value and operational efficiency they bring to your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PricingCard title="AI Lead Engine" price="₹15,000+" icon={Bot} color="blue" delay={0.1} />
          <PricingCard title="AI Calling Agents" price="₹25,000+" icon={PhoneCall} color="green" delay={0.2} />
          <PricingCard title="Workflow Automation" price="₹20,000+" icon={Layers} color="purple" delay={0.3} />
          <PricingCard title="Voice AI Systems" price="₹30,000+" icon={Zap} color="orange" delay={0.4} />
        </div>
        <div className="mt-6 p-6 bg-gradient-to-r from-gray-900 to-black dark:from-white/5 dark:to-transparent border border-gray-800 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Custom Enterprise Solutions</h4>
            <p className="text-sm text-gray-400">Tailored architecture and dedicated AI models for scale.</p>
          </div>
          <span className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg font-bold whitespace-nowrap">
            Custom Pricing
          </span>
        </div>
      </>
    )
  },
  {
    id: "custom",
    title: "3. Custom AI Projects",
    icon: <Settings className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Custom project pricing is calculated dynamically. Depending on the exact scope of your deployment, the final pricing depends on several factors:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Business Requirements", "Integration Complexity", "AI Models", "Voice Systems", "Automation Workflows", "Deployment Scale", "Security Requirements"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </>
    )
  },
  {
    id: "leadai",
    title: "4. LeadAI Platform",
    icon: <Shield className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          For clients utilizing our LeadAI Dashboard and native platform, pricing tiers may vary based on consumption and scale:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li><strong>Users:</strong> Number of internal team seats.</li>
          <li><strong>Volume:</strong> Total automation volume and email processing quotas.</li>
          <li><strong>Voice:</strong> AI Calling usage minutes.</li>
          <li><strong>Connections:</strong> Number of connected third-party integrations (CRM, WhatsApp, etc.).</li>
          <li><strong>Enterprise:</strong> Custom features, SLAs, and dedicated compliance requirements.</li>
        </ul>
      </>
    )
  },
  {
    id: "deployment",
    title: "5. Deployment Policy",
    icon: <Clock className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          We pride ourselves on rapid time-to-value. Deployment timelines are strictly adhered to once all requirements and assets are received.
        </p>
        <div className="ml-4">
          <TimelineItem title="Basic Solutions" time="3–5 Days" delay={0.1} />
          <TimelineItem title="Standard Systems" time="5–10 Days" delay={0.2} />
          <TimelineItem title="Enterprise Deployments" time="Custom Timeline" delay={0.3} />
        </div>
      </>
    )
  },
  {
    id: "payments",
    title: "6. Payment Terms",
    icon: <CreditCard className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          To ensure commitment from both parties and allocate engineering resources, our standard project payment structure is:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl text-center">
            <h4 className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">50%</h4>
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">Advance Payment</p>
          </div>
          <div className="flex-1 p-6 bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-xl text-center">
            <h4 className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">50%</h4>
            <p className="text-sm font-semibold text-green-800 dark:text-green-200">Before Final Deployment</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          <em>* Custom enterprise payment schedules can be negotiated for large-scale architectures.</em>
        </p>
        <div className="flex items-center gap-3 flex-wrap mt-6">
          <span className="text-sm font-bold text-gray-500 uppercase">Accepted:</span>
          {["UPI", "Bank Transfer", "Razorpay", "Approved Credit Cards"].map((method, i) => (
            <span key={i} className="px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded text-sm text-gray-700 dark:text-gray-300 shadow-sm">
              {method}
            </span>
          ))}
        </div>
      </>
    )
  },
  {
    id: "refunds",
    title: "7. Refund Policy",
    icon: <ArrowDownCircle className="w-5 h-5" />,
    content: (
      <>
        <div className="p-6 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-xl mb-6">
          <h4 className="text-lg font-bold text-orange-800 dark:text-orange-400 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Transparent Refund Policy
          </h4>
          <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
            TechieHelp invests significant engineering hours upfront to build custom AI workflows and train models. Therefore, work already completed is strictly non-refundable.
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li>Custom development work is generally not eligible for full refunds after development begins.</li>
          <li>Refunds for unused SaaS subscriptions may be reviewed on a case-by-case basis.</li>
          <li>If a project is cancelled before engineering begins, advance payments may be partially refunded minus consulting fees.</li>
        </ul>
      </>
    )
  },
  {
    id: "subscription",
    title: "8. Subscription Terms",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          For recurring SaaS products and continuous AI maintenance services, we offer flexible subscription terms:
        </p>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-center font-bold text-gray-800 dark:text-white">Monthly</div>
          <div className="flex-1 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-center font-bold text-gray-800 dark:text-white">Quarterly</div>
          <div className="flex-1 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-center font-bold text-gray-800 dark:text-white">Annual</div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Subscriptions renew automatically at the end of the billing cycle unless cancelled. Usage quotas reset upon renewal.
        </p>
      </>
    )
  },
  {
    id: "support",
    title: "9. Support & Maintenance",
    icon: <HelpCircle className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Depending on your plan, we provide dedicated support to ensure your AI workforce never sleeps.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-transparent border border-gray-200 dark:border-white/10 rounded-lg flex justify-between items-center">
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white">Basic Support</h5>
              <p className="text-sm text-gray-500">Email support during business hours.</p>
            </div>
            <span className="text-sm font-mono bg-gray-100 dark:bg-white/10 px-2 py-1 rounded">24-48h Response</span>
          </div>
          <div className="p-4 bg-white dark:bg-transparent border border-gray-200 dark:border-white/10 rounded-lg flex justify-between items-center">
            <div>
              <h5 className="font-bold text-gray-900 dark:text-white">Standard Support</h5>
              <p className="text-sm text-gray-500">Email & Chat support.</p>
            </div>
            <span className="text-sm font-mono bg-gray-100 dark:bg-white/10 px-2 py-1 rounded">12-24h Response</span>
          </div>
          <div className="p-4 bg-white dark:bg-[#33bbcf]/10 border border-gray-200 dark:border-[#33bbcf]/30 rounded-lg flex justify-between items-center">
            <div>
              <h5 className="font-bold text-gray-900 dark:text-[#33bbcf]">Priority Enterprise Support</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dedicated Slack channel & Phone support.</p>
            </div>
            <span className="text-sm font-mono bg-cyan-50 dark:bg-[#33bbcf]/20 text-[#33bbcf] px-2 py-1 rounded font-bold">&lt; 4h Response</span>
          </div>
        </div>
      </>
    )
  },
  {
    id: "responsibilities",
    title: "10. Client Responsibilities",
    icon: <UserCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          To meet our strict deployment timelines and deliver high-quality AI, we require clients to promptly provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Accurate business requirements and edge cases.</li>
          <li>Timely feedback on model testing and workflow previews.</li>
          <li>Required access credentials (CRM APIs, Email SMTPs).</li>
          <li>Integration permissions and domain approvals.</li>
          <li>Core business information and training data.</li>
        </ul>
      </>
    )
  },
  {
    id: "difference",
    title: "11. What Makes TechieHelp Different",
    icon: <Building2 className="w-5 h-5" />,
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <FeatureCard title="No Hidden Fees" desc="Clear, predictable pricing before writing a single line of code." icon={CheckCircle2} delay={0.1} />
          <FeatureCard title="Transparent Scope" desc="Detailed architecture maps outlining exactly what is delivered." icon={Search} delay={0.2} />
          <FeatureCard title="Business-Focused" desc="We build for ROI and revenue, not just cool tech demos." icon={TrendingUp} delay={0.3} />
          <FeatureCard title="Enterprise Security" desc="Bank-grade encryption for all internal models and data." icon={Shield} delay={0.4} />
          <FeatureCard title="Fast Deployment" desc="Our robust scaffolding allows us to launch systems in days." icon={Zap} delay={0.5} />
          <FeatureCard title="Global Support" desc="Supporting organizations across 16+ countries flawlessly." icon={Globe} delay={0.6} />
        </div>
      </>
    )
  }
];

// Reusable icons for the features grid (need to be imported)
import { Search, TrendingUp } from "lucide-react";


const PricingPolicy = () => {
  const [activeSection, setActiveSection] = useState(pricingSections[0].id);

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
      const sectionElements = pricingSections.map(section =>
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
            <span className="text-gray-900 dark:text-white">Pricing Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Pricing Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            Transparent pricing, billing, deployment, and service policies for TechieHelp AI solutions and platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Transparent Pricing
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> No Hidden Charges
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Secure Payments
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> Business Friendly
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">Overview</h3>
              <nav className="flex flex-col space-y-1">
                {pricingSections.map((section) => (
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

          {/* Main Document Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-[900px] flex-1 bg-white dark:bg-[#050510]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-none"
          >

            <div className="mb-12 pb-8 border-b border-gray-200 dark:border-white/10">
              <p className="text-gray-500 dark:text-gray-400 font-medium"><strong>Last Updated:</strong> June 2026</p>
              <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                We believe in building long-term partnerships with our clients. This requires absolute transparency in how we price, build, and deploy our AI systems. This document outlines our standard pricing, billing practices, and deployment expectations.
              </p>
            </div>

            {/* Document Sections */}
            <div className="space-y-16">
              {pricingSections.map((section) => (
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

            {/* Specific Contact Section inside Document */}
            <div id="contact" className="scroll-mt-32 mt-16 pl-0 md:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Contact Information</h2>
              
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#33bbcf]/10 blur-[50px] rounded-full group-hover:bg-[#33bbcf]/20 transition-all" />

                <h3 className="text-xl font-bold mb-6">TechieHelp Headquarters</h3>

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
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone Sales</p>
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

        {/* Contact/Quote CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#33bbcf]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/30 blur-[100px] rounded-full pointer-events-none" />

          <MessageSquare className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Need a Custom Quote?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Our team will architect the perfect AI solution tailored to your business scale and budget. Let's discuss your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Request Proposal
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black dark:from-[#11101d] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready To Deploy Your AI Workforce?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of businesses scaling operations with TechieHelp's intelligent automation systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Explore Services
            </Link>
            <a href="tel:+917073130165" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Talk To Our Team
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default PricingPolicy;
