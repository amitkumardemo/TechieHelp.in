import { useState, useEffect } from "react";
import { close, menu, logo } from "../assets";
import { useLocation } from "react-router-dom";
import styles from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, LogOut, Sparkles, X, Bot, PhoneCall, Cpu, Mic, LineChart, Grid, GraduationCap, Briefcase, Trophy, FileCheck, LayoutDashboard, Calendar, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const serviceItems = [
  {
    id: "ai-lead-engine",
    title: "AI Lead Engine",
    desc: "Capture, qualify and respond to leads instantly.",
    icon: Bot,
    bgClass: "bg-rose-500/10 group-hover:bg-rose-500/20",
    textClass: "text-rose-400",
    path: "/services/ai-lead-engine"
  },
  {
    id: "ai-calling-agents",
    title: "AI Calling Agents",
    desc: "Dial leads under 60s, pre-qualify & route.",
    icon: PhoneCall,
    bgClass: "bg-amber-500/10 group-hover:bg-amber-500/20",
    textClass: "text-amber-400",
    path: "/services/ai-calling-agents"
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow",
    desc: "Connect systems & run admin tasks autonomously.",
    icon: Cpu,
    bgClass: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    textClass: "text-emerald-400",
    path: "/services/ai-workflow-automation"
  },
  {
    id: "voice-ai-system",
    title: "Voice AI",
    desc: "24/7 custom human-like inbound voice reception.",
    icon: Mic,
    bgClass: "bg-violet-500/10 group-hover:bg-violet-500/20",
    textClass: "text-violet-400",
    path: "/services/voice-ai-system"
  },
  {
    id: "leadai-dashboard",
    title: "LeadAI",
    desc: "Visualize pipelines, qualify, and analyze lead data.",
    icon: LineChart,
    bgClass: "bg-sky-500/10 group-hover:bg-sky-500/20",
    textClass: "text-sky-400",
    path: "/leadai-dashboard"
  },
  {
    id: "all-services",
    title: "All AI Services",
    desc: "Explore our complete suite of AI solutions.",
    icon: Grid,
    bgClass: "bg-pink-500/10 group-hover:bg-pink-500/20",
    textClass: "text-pink-400",
    path: "/services"
  }
];

const careerItems = [
  {
    id: "training-internships",
    title: "Training + Internships",
    desc: "Join our intensive industrial training & internship.",
    icon: GraduationCap,
    bgClass: "bg-blue-500/10 group-hover:bg-blue-500/20",
    textClass: "text-blue-400",
    path: "/careers/training-internships"
  },
  {
    id: "jobs",
    title: "Jobs",
    desc: "Explore open career opportunities at TechieHelp.",
    icon: Briefcase,
    bgClass: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    textClass: "text-emerald-400",
    path: "/careers/jobs"
  },
  {
    id: "hackathon",
    title: "Hackathons",
    desc: "Participate in coding hackathons and win prizes.",
    icon: Trophy,
    bgClass: "bg-amber-500/10 group-hover:bg-amber-500/20",
    textClass: "text-amber-400",
    path: "/hackathon"
  },
  {
    id: "verify-certificate",
    title: "Verify Certificate",
    desc: "Verify your internship & course certificates instantly.",
    icon: FileCheck,
    bgClass: "bg-sky-500/10 group-hover:bg-sky-500/20",
    textClass: "text-sky-400",
    path: "/verify-certificate"
  }
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      setToggle(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      <nav
        className={`${styles.paddingX} fixed top-0 left-0 right-0 w-screen flex items-center py-1 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-white/5`}
      >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        {/* LEFT: LOGO */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img src={logo} alt="logo" width="220" height="300" className="w-[180px] h-[72px] object-contain" />
          </Link>
        </div>
        
        {/* CENTER: NAV LINKS */}
        <ul className="list-none sm:flex hidden justify-center items-center">
          {navLinks.map((nav, index) => {
            const isActive = location.pathname === nav.path || 
              (nav.subLinks && nav.subLinks.some(s => s.path === location.pathname));

            return (
              <li
                key={nav.id}
                className={`relative font-poppins font-normal cursor-pointer text-[15px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-8"
                } text-gray-900 dark:text-white drop-shadow-md py-2 group`}
                onMouseEnter={() => {
                  if (nav.subLinks) {
                    if (timeoutId) clearTimeout(timeoutId);
                    setDropdownOpen(nav.id);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.subLinks) {
                    const id = setTimeout(() => setDropdownOpen(null), 150);
                    setTimeoutId(id);
                  }
                }}
              >
                {nav.subLinks ? (
                  <div className="relative">
                    <span className="flex items-center cursor-pointer select-none gap-1 hover:text-red-400 transition-colors">
                      {nav.title}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen === nav.id ? "rotate-180 text-red-400" : ""}`} />
                    </span>

                    {/* Check if it is the "AI Solutions" Mega Menu */}
                    {nav.id === "services" ? (
                      <AnimatePresence>
                        {dropdownOpen === nav.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-[-170px] top-full mt-3 w-[680px] bg-white/95 dark:bg-[#050510]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl z-50 text-gray-900 dark:text-white overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Decorative glow inside mega menu */}
                            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />
                            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />

                            <div className="grid grid-cols-12 gap-5 relative z-10">
                              {/* Left Section: Services (cols 1 to 8) */}
                              <div className="col-span-8 pr-2">
                                {/* Header description */}
                                <div className="border-b border-white/5 pb-2 mb-4 flex items-center justify-between">
                                  <div>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-red-400 font-bold block mb-0.5">
                                      Products
                                    </span>
                                    <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                                      Build your AI workforce with intelligent automation.
                                    </p>
                                  </div>
                                  <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                                </div>

                                {/* Services Grid (2 Columns) */}
                                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                                  {serviceItems.map((item) => (
                                    <Link
                                      key={item.id}
                                      to={item.path}
                                      onClick={() => setDropdownOpen(null)}
                                      className="card-glass flex flex-col"
                                    >
                                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.bgClass} shrink-0`}>
                                        <item.icon className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
                                      </div>
                                      <div>
                                        <h4 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors">
                                          {item.title}
                                        </h4>
                                        <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal mt-0.5">
                                          {item.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right Section: Custom build CTA (cols 9 to 12) */}
                              <div className="col-span-4 border-l border-white/5 pl-5 flex flex-col gap-3 h-full">
                                <div className="space-y-1.5">
                                  <span className="text-[8px] font-mono text-[#33bbcf] uppercase tracking-[0.15em] block font-bold">
                                    Custom Build
                                  </span>
                                  <h5 className="text-[11px] font-bold text-gray-900 dark:text-white leading-snug">
                                    Need custom agents?
                                  </h5>
                                  <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal">
                                    Get specialized features tailored for your business.
                                  </p>
                                </div>

                                {/* ── Mini LeadAI Product Preview ── */}
                                <div className="relative rounded-xl bg-white/60 dark:bg-white/[0.03] border border-gray-100 dark:border-white/8 p-2.5 overflow-hidden shadow-sm" style={{ minHeight: "148px" }}>
                                  {/* Soft blue glow */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-transparent dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-transparent pointer-events-none rounded-xl" />
                                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

                                  {/* Status cards column */}
                                  <div className="relative z-10 flex flex-col gap-1 mb-2">
                                    {[
                                      { label: "New Lead Detected",  color: "#10b981" },
                                      { label: "AI Reply Generated", color: "#6366f1" },
                                      { label: "Voice AI Triggered", color: "#8b5cf6" },
                                      { label: "CRM Updated",        color: "#06b6d4" },
                                      { label: "Meeting Booked",     color: "#f59e0b" },
                                    ].map((item, idx) => (
                                      <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 6 }}
                                        animate={{ opacity: [0, 1, 1, 0.4, 1], x: 0 }}
                                        transition={{
                                          opacity: { duration: 3.5, repeat: Infinity, delay: idx * 0.55, ease: "easeInOut" },
                                          x: { duration: 0.3, delay: idx * 0.05 },
                                        }}
                                        className="flex items-center gap-1.5 bg-white/80 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-md px-2 py-0.5 w-full"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: item.color }} />
                                        <span className="text-[9px] font-medium text-gray-700 dark:text-gray-300 truncate">{item.label}</span>
                                        <span className="ml-auto text-[8px] text-gray-400">✓</span>
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Connector line */}
                                  <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-500/30 to-transparent mb-2" />

                                  {/* Metrics row */}
                                  <div className="relative z-10 flex items-center justify-between gap-1">
                                    {[
                                      { label: "Lead Score",  value: "92/100" },
                                      { label: "Reply Time",  value: "1.2s" },
                                      { label: "Revenue",     value: "₹85K" },
                                    ].map((m) => (
                                      <div key={m.label} className="flex flex-col items-center bg-white/70 dark:bg-white/4 border border-gray-100 dark:border-white/5 rounded-lg px-2 py-1 flex-1">
                                        <span className="text-[10px] font-bold text-gray-900 dark:text-white">{m.value}</span>
                                        <span className="text-[8px] text-gray-400 leading-none mt-0.5">{m.label}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Mini pipeline bar chart */}
                                  <div className="relative z-10 flex items-end gap-0.5 mt-2 h-5">
                                    {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                                      <motion.div
                                        key={i}
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                                        style={{ originY: 1, height: `${h}%`, backgroundColor: i === 5 ? "#6366f1" : "#e0e7ff" }}
                                        className="flex-1 rounded-t-sm dark:opacity-60"
                                      />
                                    ))}
                                  </div>
                                  <div className="relative z-10 flex items-center gap-1 mt-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    <span className="text-[8px] text-gray-400">Pipeline Activity</span>
                                  </div>
                                </div>

                                <Link
                                  to="/contacts"
                                  onClick={() => setDropdownOpen(null)}
                                  className="group flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-gray-200 dark:border-white/10 hover:border-red-500/30 text-xs font-semibold text-gray-900 dark:text-white hover:text-red-400 transition-all text-center"
                                >
                                  <span>Contact us</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : nav.id === "careers" ? (
                      <AnimatePresence>
                        {dropdownOpen === nav.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-[-100px] top-full mt-3 w-[680px] bg-white/95 dark:bg-[#050510]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl z-50 text-gray-900 dark:text-white overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Decorative glow inside mega menu */}
                            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />
                            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />

                            <div className="grid grid-cols-12 gap-5 relative z-10">
                              {/* Left Section: Careers (cols 1 to 8) */}
                              <div className="col-span-8 pr-2">
                                {/* Header description */}
                                <div className="border-b border-white/5 pb-2 mb-4 flex items-center justify-between">
                                  <div>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-red-400 font-bold block mb-0.5">
                                      Careers & Training
                                    </span>
                                    <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                                      Launch your tech career with training and internships.
                                    </p>
                                  </div>
                                  <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                                </div>

                                {/* Careers Grid (2 Columns) */}
                                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                                  {careerItems.map((item) => (
                                    <Link
                                      key={item.id}
                                      to={item.path}
                                      onClick={() => setDropdownOpen(null)}
                                      className="card-glass flex flex-col"
                                    >
                                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.bgClass} shrink-0`}>
                                        <item.icon className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
                                      </div>
                                      <div>
                                        <h4 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors">
                                          {item.title}
                                        </h4>
                                        <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal mt-0.5">
                                          {item.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right Section: CTA (cols 9 to 12) */}
                              <div className="col-span-4 border-l border-white/5 pl-5 flex flex-col justify-between h-full min-h-[160px]">
                                <div className="space-y-1.5">
                                  <span className="text-[8px] font-mono text-[#33bbcf] uppercase tracking-[0.15em] block font-bold">
                                    Hiring Partners
                                  </span>
                                  <h5 className="text-[11px] font-bold text-gray-900 dark:text-white leading-snug">
                                    Want to hire?
                                  </h5>
                                  <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal">
                                    Access our pool of pre-trained and vetted graduates.
                                  </p>
                                </div>
                                <Link
                                  to="/contacts"
                                  onClick={() => setDropdownOpen(null)}
                                  className="group mt-4 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-gray-200 dark:border-white/10 hover:border-red-500/30 text-xs font-semibold text-gray-900 dark:text-white hover:text-red-400 transition-all text-center"
                                >
                                  <span>Partner with us</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      /* Sleek simple dropdown for other non-services links */
                      <AnimatePresence>
                        {dropdownOpen === nav.id && (
                          <motion.ul
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full mt-3 w-52 bg-white/95 dark:bg-[#050510]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl py-2 shadow-2xl z-50 text-gray-900 dark:text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {nav.subLinks.map((subLink) => (
                              <li
                                key={subLink.id}
                                className="px-4 py-2 hover:bg-gray-100 dark:bg-white/5 cursor-pointer text-xs font-medium hover:text-red-400 transition-colors"
                              >
                                <Link
                                  to={subLink.path}
                                  onClick={() => setDropdownOpen(null)}
                                >
                                  {subLink.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <Link to={nav.path} className="hover:text-red-400 transition-colors">
                    {nav.title}
                  </Link>
                )}

                {/* Navigation active underline animation */}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-purple-500 transform transition-transform duration-300 origin-center ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </li>
            );
          })}

          {/* For Business Dropdown (HubSpot Style Option 3) */}
        </ul>

        {/* RIGHT: ICONS & BUTTONS */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            className="relative font-poppins font-normal cursor-pointer text-[15px] text-gray-900 dark:text-white drop-shadow-md py-2 group ml-6"
            onMouseEnter={() => {
              if (timeoutId) clearTimeout(timeoutId);
              setDropdownOpen("for-business");
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setDropdownOpen(null), 150);
              setTimeoutId(id);
            }}
          >
            <span className="flex items-center cursor-pointer select-none gap-1 hover:text-red-400 transition-colors">
              For Business
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen === "for-business" ? "rotate-180 text-red-400" : ""}`} />
            </span>

            <AnimatePresence>
              {dropdownOpen === "for-business" && (
                <motion.ul
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-3 w-52 bg-white/95 dark:bg-[#050510]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl py-2 shadow-2xl z-50 text-gray-900 dark:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="px-4 py-2.5 hover:bg-gray-100 dark:bg-white/5 cursor-pointer text-xs font-semibold hover:text-red-400 transition-colors border-b border-white/5">
                    <Link
                      to="/login"
                      onClick={async () => {
                        await logout();
                        setDropdownOpen(null);
                      }}
                      className="flex items-center gap-2 w-full"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5 text-red-400" />
                      <span>Access Dashboard</span>
                    </Link>
                  </li>
                  <li className="px-4 py-2.5 hover:bg-gray-100 dark:bg-white/5 cursor-pointer text-xs font-semibold hover:text-red-400 transition-colors">
                    <Link
                      to="/contacts"
                      onClick={() => setDropdownOpen(null)}
                      className="flex items-center gap-2 w-full"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#33bbcf]" />
                      <span>Book Demo</span>
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
            
            <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-purple-500 transform transition-transform duration-300 origin-center ${
              location.pathname === "/login" || location.pathname === "/leadai-dashboard" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`} />
          </li>

          {/* Profile Dropdown (Only when user is logged in) */}
          {user && (
            <li className="ml-6 relative group py-2">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={user.photoURL || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTIwIDIwQzIyLjc2MTQgMjAgMjUgMTcuNzYxNCAyNSAxNUMyNSAxMi4yMzg2IDIyLjc2MTQgMTAgMjAgMTBDMTcuMjM4NiAxMCAxNSAxMi4yMzg2IDE1IDE1QzE1IDE3Ljc2MTQgMTcuNzYxNCAyMCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="}
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-white/10 group-hover:border-red-500/40 transition-colors"
                  onClick={() => { window.location.href = "/profile"; }}
                />
              </div>
              <ul className="absolute right-0 mt-3 w-32 bg-white/95 dark:bg-[#050510]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity text-gray-900 dark:text-white z-50 text-xs shadow-2xl">
                <li className="px-4 py-2 hover:bg-gray-100 dark:bg-white/5 cursor-pointer font-semibold">
                  <Link to="/profile">Profile</Link>
                </li>
                <li
                  className="px-4 py-2 hover:bg-red-500/10 text-red-400 cursor-pointer border-t border-white/5 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          )}
          
          <li className="ml-6 sm:block hidden">
            <ThemeToggle />
          </li>
          
          {location.pathname === "/careers/training-internships" && (
            <li className="ml-6 sm:block hidden">
              <a 
                href="https://forms.gle/N8kk845Lbfds6Pwj6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply Now
              </a>
            </li>
          )}
        </ul>

        {/* MOBILE MENU TOGGLE: Re-using exact verified hamburger png/svg assets */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <X
              className="w-[28px] h-[28px] text-gray-900 dark:text-white cursor-pointer z-50 relative"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <Menu
              className="w-[28px] h-[28px] text-gray-900 dark:text-white cursor-pointer z-50 relative"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>
      </div>
      </nav>

      {/* MOBILE SLIDE-OVER DRAWER MENU: Placed outside <nav> to prevent backdrop-filter clipping */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-gray-900/40 dark:bg-black/75 backdrop-blur-sm z-[60] sm:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white/95 dark:bg-[#050510]/95 backdrop-blur-2xl border-l border-gray-200 dark:border-white/10 p-6 shadow-2xl z-[70] overflow-y-auto flex flex-col justify-between sm:hidden"
            >
              <div className="flex-1">
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <img src={logo} alt="logo" className="w-[140px] h-[56px] object-contain" />
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                      onClick={() => setToggle(false)}
                      className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:border-red-500/50 hover:bg-gray-100 dark:bg-white/5 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Nav Links List */}
                <div className="space-y-4">
                  {navLinks.map((nav) => {
                    const isSolutions = nav.id === "services";
                    const isCareers = nav.id === "careers";
                    const isSubOpen = mobileDropdownOpen === nav.id;

                    if (isSolutions) {
                      return (
                        <div key={nav.id} className="border-b border-white/5 pb-3">
                          <button
                            onClick={() => setMobileDropdownOpen(isSubOpen ? null : "services")}
                            className="w-full flex items-center justify-between text-gray-900 dark:text-white font-medium text-base py-2 hover:text-red-400 transition-colors"
                          >
                            <span>{nav.title}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${isSubOpen ? "rotate-180 text-red-400" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isSubOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-3 space-y-2.5 overflow-hidden"
                              >
                                {/* 6 compact stacked items */}
                                {serviceItems.map((item) => (
                                  <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => {
                                      setToggle(false);
                                      setMobileDropdownOpen(null);
                                    }}
                                    className="flex items-center gap-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-2.5 rounded-xl hover:bg-gray-100 dark:bg-white/10 hover:border-red-500/30 transition-all group"
                                  >
                                    <div className={`flex items-center justify-center w-6 h-6 rounded-md ${item.bgClass} shrink-0`}>
                                      <item.icon className={`w-3.5 h-3.5 ${item.textClass}`} />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors">
                                      {item.title}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all ml-auto" />
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    if (isCareers) {
                      return (
                        <div key={nav.id} className="border-b border-white/5 pb-3">
                          <button
                            onClick={() => setMobileDropdownOpen(isSubOpen ? null : "careers")}
                            className="w-full flex items-center justify-between text-gray-900 dark:text-white font-medium text-base py-2 hover:text-red-400 transition-colors"
                          >
                            <span>{nav.title}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${isSubOpen ? "rotate-180 text-red-400" : ""}`} />
                          </button>
                            
                          <AnimatePresence>
                            {isSubOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-3 space-y-2.5 overflow-hidden"
                              >
                                {/* 4 compact stacked items */}
                                {careerItems.map((item) => (
                                  <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => {
                                      setToggle(false);
                                      setMobileDropdownOpen(null);
                                    }}
                                    className="flex items-center gap-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-2.5 rounded-xl hover:bg-gray-100 dark:bg-white/10 hover:border-red-500/30 transition-all group"
                                  >
                                    <div className={`flex items-center justify-center w-6 h-6 rounded-md ${item.bgClass} shrink-0`}>
                                      <item.icon className={`w-3.5 h-3.5 ${item.textClass}`} />
                                    </div>
                                    <span className="text-[11px] font-semibold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors">
                                      {item.title}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all ml-auto" />
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <div key={nav.id} className="border-b border-white/5 pb-3">
                        <Link
                          to={nav.path}
                          onClick={() => setToggle(false)}
                          className="block w-full text-gray-900 dark:text-white font-medium text-base py-2 hover:text-red-400 transition-colors"
                        >
                          {nav.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Account / User Section Footer */}
              <div className="border-t border-gray-200 dark:border-white/10 pt-6 mt-6 space-y-4 shrink-0">
                {!user ? (
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contacts"
                      onClick={() => setToggle(false)}
                      className="btn-primary"
                    >
                      Book Demo
                    </Link>
                    <Link
                      to="/login"
                      onClick={async () => {
                        await logout();
                        setToggle(false);
                      }}
                      className="flex items-center justify-center w-full py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:bg-white/10 hover:border-red-500/30 text-gray-900 dark:text-white font-bold rounded-xl text-sm transition-all"
                    >
                      Access Dashboard
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photoURL || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTIwIDIwQzIyLjc2MTQgMjAgMjUgMTcuNzYxNCAyNSAxNUMyNSAxMi4yMzg2IDIyLjc2MTQgMTAgMjAgMTBDMTcuMjM4NiAxMCAxNSAxMi4yMzg2IDE1IDE1QzE1IDE3Ljc2MTQgMTcuNzYxNCAyMCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/10"
                      />
                      <div className="flex-1">
                        <span className="text-xs font-bold text-gray-900 dark:text-white block">Profile Active</span>
                        <Link
                          to="/profile"
                          onClick={() => setToggle(false)}
                          className="text-[11px] text-red-400 hover:underline"
                        >
                          View Account Details
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/login"
                        onClick={async () => {
                          await logout();
                          setToggle(false);
                        }}
                        className="btn-primary"
                      >
                        Access Dashboard
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-red-600/10 border border-red-500/20 hover:bg-red-600/20 text-red-400 font-bold rounded-xl text-sm transition-all"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
