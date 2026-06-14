import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  CreditCard,
  FileCheck,
  Scale,
  Wallet,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Clock,
  XCircle,
  HelpCircle,
  Activity,
  Layers,
  Globe
} from "lucide-react";

// --- Custom Components ---

const EligibilityCard = ({ title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-xl p-5 flex gap-4 shadow-sm"
  >
    <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 flex items-center justify-center shrink-0">
      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WarningCard = ({ title, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-4 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-xl flex items-center gap-3"
  >
    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
    <span className="font-semibold text-orange-900 dark:text-orange-300 text-sm">{title}</span>
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
    <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 dark:bg-blue-500/10 border-2 border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mb-3 relative z-10">
      {step}
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
  </motion.div>
);

// --- Content Structure ---

const policySections = [
  {
    id: "overview",
    title: "1. Overview",
    icon: <FileCheck className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">A Commitment to Fairness</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
          TechieHelp values transparency and fairness in all our business engagements. 
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Because most of our services involve highly customized AI development, intensive implementation, strategic consulting, API integrations, and dedicated deployment work, our refund eligibility strictly depends on the specific stage of project execution.
        </p>
      </>
    )
  },
  {
    id: "eligibility",
    title: "2. Refund Eligibility",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Full or partial refund requests may be considered under the following conditions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EligibilityCard title="No Work Has Started" desc="The project was cancelled before any engineering, design, or consulting hours were logged." delay={0.1} />
          <EligibilityCard title="Mistaken Payments" desc="Payment was made entirely by mistake or processed erroneously." delay={0.2} />
          <EligibilityCard title="Duplicate Transactions" desc="The payment gateway accidentally processed the same transaction multiple times." delay={0.3} />
          <EligibilityCard title="Service Undeliverable" desc="TechieHelp determines internally that we cannot deliver the agreed-upon technical solution." delay={0.4} />
        </div>
      </>
    )
  },
  {
    id: "custom-projects",
    title: "3. Custom AI Projects",
    icon: <Activity className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Development & Automation Projects</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Enterprise deployments are customized specifically for each client's unique operational architecture. This includes:
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {["AI Agents", "LeadAI Deployments", "Voice AI Systems", "Workflow Automation", "Custom Integrations", "Business Dashboards"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="p-5 bg-blue-50 dark:bg-[#33bbcf]/10 border border-blue-100 dark:border-[#33bbcf]/20 rounded-xl">
          <p className="text-blue-900 dark:text-[#33bbcf] font-medium text-sm">
            Once project execution (including architecture planning, model training, or coding) begins, advance payments become generally non-refundable based on the amount of work already completed.
          </p>
        </div>
      </>
    )
  },
  {
    id: "leadai",
    title: "4. LeadAI Platform",
    icon: <Layers className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          For users utilizing recurring subscription models on the LeadAI Platform or dashboard:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300 mb-6">
          <li><strong>Plan Types:</strong> Monthly, Quarterly, and Annual subscriptions.</li>
          <li><strong>Cancellations:</strong> Users may cancel future renewals at any time from their dashboard settings.</li>
          <li><strong>Usage:</strong> Already consumed platform usage quotas and completed billing periods are strictly non-refundable.</li>
        </ul>
      </>
    )
  },
  {
    id: "cancellation",
    title: "5. Cancellation Policy",
    icon: <XCircle className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Clients hold the right to request project cancellation before development starts for a full refund (minus any transaction gateway fees).
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          However, once implementation, API integrations, technical configuration, strategy consulting, or live deployment work has begun, cancellation requests are reviewed on a strict individual basis to calculate the cost of hours already burned.
        </p>
      </>
    )
  },
  {
    id: "non-refundable",
    title: "6. Non-Refundable Services",
    icon: <AlertTriangle className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Due to the irreversible nature of time and third-party capital spent, the following items and services are strictly non-refundable:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <WarningCard title="Completed Development Work" delay={0.1} />
          <WarningCard title="Consulting Sessions" delay={0.15} />
          <WarningCard title="Strategy Calls" delay={0.2} />
          <WarningCard title="Custom Integrations" delay={0.25} />
          <WarningCard title="AI Training & Config" delay={0.3} />
          <WarningCard title="Third-Party Service Fees" delay={0.35} />
          <WarningCard title="Domain Purchases" delay={0.4} />
          <WarningCard title="Hosting Charges" delay={0.45} />
          <WarningCard title="API Usage Costs" delay={0.5} />
        </div>
      </>
    )
  },
  {
    id: "exceptional",
    title: "7. Exceptional Cases",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We understand that edge cases exist. Refunds outside the standard policy may be reviewed in exceptional circumstances, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
          <li>Duplicate Payments processed by error.</li>
          <li>Technical Billing Errors on our infrastructure.</li>
          <li>Verified Processing Issues flagged by the payment gateway.</li>
          <li>Undeliverable Services due to severe, unforeseen technical limitations.</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Each exceptional case is evaluated individually by our management team.
        </p>
      </>
    )
  },
  {
    id: "disputes",
    title: "8. Dispute Resolution",
    icon: <Scale className="w-5 h-5" />,
    content: (
      <>
        <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Professional Resolution</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            TechieHelp aims to resolve all billing concerns professionally, quickly, and fairly.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            We strongly request that customers contact our billing support team to resolve any financial concerns amicably <strong>before</strong> initiating payment disputes or chargebacks with their bank or credit card provider.
          </p>
        </div>
      </>
    )
  },
  {
    id: "processing",
    title: "9. Processing Time",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          Once a refund request is officially approved by TechieHelp, the processing timeline depends primarily on the payment gateway and your financial institution:
        </p>

        {/* Animated Timeline UI */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-gray-200 dark:bg-gray-800 -z-10" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-6 left-[10%] right-[10%] h-1 bg-[#33bbcf] origin-left -z-10" 
          />
          
          <div className="flex justify-between relative z-10">
            <TimelineStep step="1" title="Refund Approved" delay={0.3} />
            <TimelineStep step="2" title="Gateway Processing" delay={0.6} />
            <TimelineStep step="3" title="Funds Received" delay={0.9} />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-full">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-blue-900 dark:text-blue-300">Expected Time: 5–10 Business Days</span>
          </div>
        </div>
      </>
    )
  }
];

const RefundPolicy = () => {
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
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
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
            <span className="text-gray-900 dark:text-white">Refund Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Refund Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            Understand our refund, cancellation, payment, and project delivery policies before purchasing TechieHelp services or products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> Transparent Billing
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Fair Refund Process
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> Secure Payments
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Customer Focused
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Need Help With Billing?</h2>
              
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

          <Wallet className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Questions About Payments?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our billing team is available to assist you with any questions regarding payments, invoices, or subscriptions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              Contact Support
            </a>
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
               Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hidden lg:flex">
               Explore Services
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default RefundPolicy;
