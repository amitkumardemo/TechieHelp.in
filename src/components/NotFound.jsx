import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Home,
  Cpu,
  LayoutDashboard,
  Phone,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Bot,
  AlertCircle
} from "lucide-react";

const quickLinks = [
  { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
  { name: "AI Solutions", icon: <Cpu className="w-5 h-5" />, path: "/services" },
  { name: "LeadAI Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/leadai-dashboard" },
  { name: "Contact Us", icon: <Phone className="w-5 h-5" />, path: "/contacts" },
  { name: "Portfolio", icon: <Briefcase className="w-5 h-5" />, path: "/project-portfolio" },
  { name: "LMS", icon: <GraduationCap className="w-5 h-5" />, path: "/special-batch" },
];

const messages = [
  "Even our AI searched every workflow and couldn't locate this page.",
  "This route isn't in our neural network yet.",
  "Looks like this data point got lost in the cloud.",
  "404: Our AI agents are scratching their digital heads.",
];

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Basic redirect simulating a search
      navigate(`/services?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#02000a] text-gray-900 dark:text-white font-poppins relative overflow-hidden flex flex-col justify-center pt-24 pb-16 px-6">

      {/* Background Visuals - Digital Grid & Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Animated 404 Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative flex items-center justify-center mb-8"
        >
          {/* Subtle text behind for glitch effect */}
          <span className="absolute text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-sm translate-x-2 translate-y-2 select-none">
            404
          </span>
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 select-none relative z-10">
            404
          </h1>
          {/* AI Bot floating near 404 */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 md:-right-12 top-1/4 bg-white/80 dark:bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl z-20"
          >
            <Bot className="w-10 h-10 text-cyan-500" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#050510] animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Looks Like This AI Agent Couldn't Find The Page
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            The page you are looking for may have been moved, deleted, renamed, or never existed. Don't worry — our AI can help you find where you need to go.
          </p>
          <div className="inline-block bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-4 py-2 rounded-full">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 italic">
              "{randomMessage}"
            </p>
          </div>
        </motion.div>

        {/* Search & Routing Options Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl">

          {/* Left Column: Smart Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-none"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-500" /> Smart Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="group flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl hover:bg-white dark:hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-cyan-500 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-semibold text-sm text-center">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Search & Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Search Box */}
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
              <h3 className="text-lg font-bold mb-4">Search Website</h3>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, services..."
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>
            </div>

            {/* AI Assistant CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-black dark:from-[#0a0a1a] dark:to-[#050510] border border-gray-800 dark:border-white/10 rounded-3xl p-6 text-white shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">Need Help Finding Something?</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Our team can direct you to the right solution.
              </p>
              <div className="space-y-3 relative z-10">
                <Link to="/contacts" className="w-full py-2.5 px-4 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  Talk to Our Team <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contacts" className="w-full py-2.5 px-4 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  Book Strategy Call
                </Link>
              </div>
            </div>

            {/* Technical Error Details */}
            <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 break-all space-y-1">
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Error Code:</span> 404 NOT_FOUND</p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Requested Path:</span> {location.pathname}</p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Timestamp:</span> {new Date().toISOString()}</p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
