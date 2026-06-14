import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Lock,
  Settings,
  BarChart,
  Database,
  Globe,
  User,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Activity,
  Layers,
  Cpu,
  RefreshCw,
  ToggleRight,
  ToggleLeft,
  XCircle,
  HelpCircle
} from "lucide-react";

// --- Custom Components ---

const CookieTypeCard = ({ title, purpose, examples, status, icon: Icon, delay }) => {
  const isEssential = status === "Always Active";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group flex flex-col justify-between"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${isEssential ? 'bg-[#33bbcf]/10' : 'bg-blue-500/10'} blur-[50px] rounded-full group-hover:bg-opacity-20 transition-all`} />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10">
            <Icon className={`w-6 h-6 ${isEssential ? 'text-[#33bbcf]' : 'text-blue-500'}`} />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
            isEssential 
              ? 'bg-cyan-50 dark:bg-[#33bbcf]/10 text-cyan-600 dark:text-[#33bbcf] border-cyan-200 dark:border-[#33bbcf]/20' 
              : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/20'
          }`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          <strong>Purpose:</strong> {purpose}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-white/10 relative z-10">
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold mb-3">Examples</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex, i) => (
            <span key={i} className="px-2 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-xs text-gray-700 dark:text-gray-300">
              {ex}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DashboardMockupRow = ({ title, isEnabled, icon: Icon }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{isEnabled ? 'Always Active' : 'Optional'}</p>
      </div>
    </div>
    <div>
      {isEnabled ? (
        <ToggleRight className="w-8 h-8 text-[#33bbcf]" />
      ) : (
        <ToggleLeft className="w-8 h-8 text-gray-400" />
      )}
    </div>
  </div>
);

// --- Content Structure ---

const cookieSections = [
  {
    id: "overview",
    title: "1. What Are Cookies",
    icon: <Database className="w-5 h-5" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Basics</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
          Cookies are small text files stored on a user's device that help websites remember preferences, improve functionality, enhance security, and provide a better browsing experience.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Think of them as the short-term memory of our platform. They allow TechieHelp to recognize your device when you return, ensuring you don't have to log in repeatedly and that your dashboard settings remain exactly as you left them.
        </p>
      </>
    )
  },
  {
    id: "usage",
    title: "2. Why TechieHelp Uses Cookies",
    icon: <Activity className="w-5 h-5" />,
    content: (
      <>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-[#33bbcf]/10 dark:to-blue-500/10 border border-blue-100 dark:border-[#33bbcf]/20 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Building Better Experiences Through Responsible Data Usage</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Our platform relies on cookies to operate at enterprise scale.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { t: "Website Functionality", i: <Layers className="w-4 h-4" /> },
            { t: "Account Authentication", i: <Lock className="w-4 h-4" /> },
            { t: "Platform Security", i: <Shield className="w-4 h-4" /> },
            { t: "Performance Optimization", i: <Activity className="w-4 h-4" /> },
            { t: "User Preferences", i: <Settings className="w-4 h-4" /> },
            { t: "Analytics & Improvements", i: <BarChart className="w-4 h-4" /> },
            { t: "Fraud Prevention", i: <XCircle className="w-4 h-4" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
              <div className="text-blue-500">{item.i}</div>
              <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{item.t}</span>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    id: "categories",
    title: "3. Cookie Categories",
    icon: <Layers className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          We categorize our cookies based on their purpose and necessity. Review the classifications below to understand what data is stored.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CookieTypeCard 
            title="Essential Cookies" 
            purpose="Required for core website functionality." 
            examples={["Authentication", "Session Management", "Security Verification", "Login Protection"]} 
            status="Always Active" 
            icon={Shield} 
            delay={0.1} 
          />
          <CookieTypeCard 
            title="Analytics Cookies" 
            purpose="Understand how visitors use TechieHelp products and pages." 
            examples={["Page Visits", "User Flows", "Traffic Sources", "Platform Usage"]} 
            status="Optional" 
            icon={BarChart} 
            delay={0.2} 
          />
          <CookieTypeCard 
            title="Performance Cookies" 
            purpose="Improve loading speed, responsiveness, and platform reliability." 
            examples={["Performance Monitoring", "Error Tracking", "Optimization Metrics"]} 
            status="Optional" 
            icon={Activity} 
            delay={0.3} 
          />
          <CookieTypeCard 
            title="Functional Cookies" 
            purpose="Remember user preferences and settings." 
            examples={["Theme Selection", "Language Settings", "Saved Preferences"]} 
            status="Optional" 
            icon={Settings} 
            delay={0.4} 
          />
        </div>
      </>
    )
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    icon: <Globe className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          To provide a seamless Enterprise SaaS experience, TechieHelp integrates with leading global infrastructure providers. These third parties may place cookies on your device according to their own privacy and cookie policies.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Google Analytics", "Google Workspace", "Authentication Providers", "Payment Processors", "Cloud Services", "Customer Communication Tools"].map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" /> {tag}
            </span>
          ))}
        </div>
      </>
    )
  },
  {
    id: "managing",
    title: "5. Managing Cookies",
    icon: <Settings className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          You are in full control of your data. You can accept, reject, or manage your cookie preferences directly through your browser or our platform settings.
        </p>

        {/* Dashboard Mockup */}
        <div className="max-w-md bg-white dark:bg-[#0c0f1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-gray-900 dark:text-white" />
            <h4 className="font-bold text-gray-900 dark:text-white">Privacy Controls</h4>
          </div>
          <div className="p-2">
            <DashboardMockupRow title="Essential Cookies" isEnabled={true} icon={Shield} />
            <DashboardMockupRow title="Analytics Cookies" isEnabled={false} icon={BarChart} />
            <DashboardMockupRow title="Performance Cookies" isEnabled={false} icon={Activity} />
            <DashboardMockupRow title="Functional Cookies" isEnabled={false} icon={Settings} />
          </div>
          <div className="px-6 py-4 bg-gray-50 dark:bg-black/20 border-t border-gray-200 dark:border-white/10">
            <button className="w-full py-2 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-lg text-sm hover:scale-[1.02] transition-transform">
              Save Preferences
            </button>
          </div>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li><strong>Accept Cookies:</strong> Allow all functionality and tracking.</li>
          <li><strong>Reject Non-Essential:</strong> Block analytics and performance tracking.</li>
          <li><strong>Delete Existing:</strong> Clear previously stored cookies via browser settings.</li>
        </ul>
      </>
    )
  },
  {
    id: "security",
    title: "6. Security & Privacy",
    icon: <Lock className="w-5 h-5" />,
    content: (
      <>
        <div className="p-6 bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-xl mb-6 flex items-start gap-4">
          <Shield className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-green-800 dark:text-green-400 mb-2">Privacy First Approach</h4>
            <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
              TechieHelp does not sell personal information. Cookies are utilized strictly to improve user experience, fortify platform security, and analyze product performance.
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          All cookie usage is strictly governed by our comprehensive Privacy Policy, ensuring compliance with global data protection standards.
        </p>
      </>
    )
  },
  {
    id: "updates",
    title: "7. Policy Updates",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          As our AI Workforce Platform evolves and introduces new features, our cookie practices may change. 
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We encourage users to review this Cookie Policy periodically to stay informed about how we are protecting your privacy and optimizing your experience.
        </p>
      </>
    )
  }
];

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState(cookieSections[0].id);

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
      const sectionElements = cookieSections.map(section =>
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
            <span className="text-gray-900 dark:text-white">Cookie Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            Learn how TechieHelp uses cookies and similar technologies to improve platform performance, security, and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-semibold"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Privacy Focused
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> Secure Platform
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Transparent Tracking
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#33bbcf]" /> User Control
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
                {cookieSections.map((section) => (
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
                TechieHelp is committed to maintaining the trust of our users. Part of this commitment involves being transparent about the technologies we use to make our platforms functional, fast, and secure.
              </p>
            </div>

            {/* Document Sections */}
            <div className="space-y-16">
              {cookieSections.map((section) => (
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Questions About Cookies?</h2>
              
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

          <HelpCircle className="w-12 h-12 text-[#33bbcf] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Want To Learn More?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Explore our comprehensive data protection policies or speak with our team to learn how we secure enterprise workloads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/privacy-policy" className="w-full sm:w-auto px-8 py-4 bg-[#33bbcf] text-gray-900 font-bold rounded-xl hover:bg-[#2cb2c6] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,187,207,0.3)]">
              View Privacy Policy
            </Link>
            <a href="mailto:support@techiehelp.in" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Contact Support
            </a>
            <a href="https://calendar.app.google/XY3C9NoNJuDAtbZp9" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hidden lg:flex">
               Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
};

export default CookiePolicy;
