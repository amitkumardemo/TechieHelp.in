import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, Layout, ShieldAlert, Cpu, Database, 
  Search, ChevronRight, Zap, Globe, Server, Layers, 
  Terminal, Monitor, Box, Cloud, Rocket, Award, Star
} from "lucide-react";

const domains = [
  { 
    title: "Web Development", 
    path: "/webdevelopment",
    category: "Development",
    icon: <Globe className="w-10 h-10 text-blue-400" />, 
    color: "from-blue-600/20 to-blue-900/10 border-blue-500/30",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    desc: "Master modern web architectures. Build high-performance React apps and secure Node.js backends. Industry-standard MERN stack training.",
    highlight: "12+ Live Projects"
  },
  { 
    title: "App Development", 
    path: "/androiddevelopment",
    category: "Mobile",
    icon: <Smartphone className="w-10 h-10 text-purple-400" />, 
    color: "from-purple-600/20 to-purple-900/10 border-purple-500/30",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    desc: "Create stunning Android & iOS apps. Learn Flutter & React Native. Build your own play-store ready application in just 4 weeks.",
    highlight: "Play Store Ready"
  },
  { 
    title: "Fullstack Developer", 
    path: "/fullstack",
    category: "Development",
    icon: <Layers className="w-10 h-10 text-orange-400" />, 
    color: "from-orange-600/20 to-orange-900/10 border-orange-500/30",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    desc: "The elite path. Become a 360-degree developer managing both UI and Databases. Highest placement rates from this domain.",
    highlight: "Job-Ready Portfolio"
  },
  { 
    title: "AI & Machine Learning", 
    path: "/aiml",
    category: "AI & Data",
    icon: <Cpu className="w-10 h-10 text-red-500" />, 
    color: "from-red-600/20 to-red-900/10 border-red-500/30",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.2)]",
    desc: "Work with TechieHelp Institute of AI models. Python, TensorFlow, and Predictive Analytics. The fastest-growing tech career path.",
    highlight: "AI Platform Access"
  },
  { 
    title: "Cyber Security", 
    path: "/cybersecurity",
    category: "Security",
    icon: <ShieldAlert className="w-10 h-10 text-green-400" />, 
    color: "from-green-600/20 to-green-900/10 border-green-500/30",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.2)]",
    desc: "Defend digital assets. Learn Ethical Hacking, Network Security, and Forensic analysis. Get certified in high-demand security protocols.",
    highlight: "Govt. Standard Lab"
  },
  { 
    title: "Data Science", 
    path: "/machinelearning",
    category: "AI & Data",
    icon: <Database className="w-10 h-10 text-blue-500" />, 
    color: "from-blue-600/20 to-blue-900/10 border-blue-500/30",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    desc: "Uncover insights from data. SQL, PowerBI, and Advanced Analytics. Learn to solve real business problems with data-driven logic.",
    highlight: "MSME Certified"
  },
  { 
    title: "UI/UX Design", 
    path: "/uiux",
    category: "Specialized",
    icon: <Layout className="w-10 h-10 text-pink-400" />, 
    color: "from-pink-600/20 to-pink-900/10 border-pink-500/30",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    desc: "Design the future of apps. Figma, User Research, and Prototyping. Build a premium portfolio that wows top tech companies.",
    highlight: "Figma Masterclass"
  },
  { 
    title: "Backend Development", 
    path: "/backend",
    category: "Development",
    icon: <Server className="w-10 h-10 text-gray-400" />, 
    color: "from-gray-600/20 to-gray-900/10 border-gray-500/30",
    glow: "shadow-[0_0_30px_rgba(107,114,128,0.2)]",
    desc: "The engine behind the web. Master Node.js, SQL, and Cloud deployments. High-salary opportunities for backend architects.",
    highlight: "Scalable Systems"
  },
  { 
    title: "Python Developer", 
    path: "/python",
    category: "Development",
    icon: <Terminal className="w-10 h-10 text-yellow-400" />, 
    color: "from-yellow-600/20 to-yellow-900/10 border-yellow-500/30",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.2)]",
    desc: "The most versatile language. From automation to AI, Python is everywhere. Learn industry-level coding standards and libraries.",
    highlight: "Automation Focus"
  },
  { 
    title: "DevOps", 
    path: "/devops",
    category: "Cloud",
    icon: <Cloud className="w-10 h-10 text-indigo-400" />, 
    color: "from-indigo-600/20 to-indigo-900/10 border-indigo-500/30",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.2)]",
    desc: "Ship code faster. Learn Docker, Kubernetes, and CI/CD pipelines. The bridge between development and infrastructure.",
    highlight: "Cloud Certified"
  },
  { 
    title: "Special Batch", 
    path: "/special-batch",
    category: "Specialized",
    icon: <Award className="w-10 h-10 text-yellow-500" />, 
    color: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/40",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    desc: "A fast-track program for elite students. Intensive training, direct mentorship, and 100% placement focus. Highly selective batch.",
    highlight: "Elite Entry"
  },
  { 
    title: "Placement Booster", 
    path: "/placement-booster",
    category: "Specialized",
    icon: <Rocket className="w-10 h-10 text-blue-600" />, 
    color: "from-blue-600/30 to-purple-900/20 border-blue-400/50",
    glow: "shadow-[0_0_40px_rgba(37,99,235,0.4)]",
    desc: "Not just an internship, but a career launchpad. Mock interviews, resume building, and direct referrals to top tech partners.",
    highlight: "Job Guaranteed"
  }
];

const categories = ["All", "Development", "Mobile", "AI & Data", "Security", "Cloud", "Specialized"];

const DomainGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDomains = domains.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) || d.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || d.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-primary px-6" id="domains">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Find Your <span className="text-gradient">Dream Career</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
            Browse through our wide range of industry-aligned internship programs. Filter by category or search to find your perfect fit.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto relative group mb-10"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search domains (e.g. React, Python, Cyber)..." 
              className="w-full pl-16 pr-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all shadow-2xl text-lg font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)]' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((domain, i) => (
              <motion.div
                key={domain.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -12 }}
                className={`group relative flex flex-col h-full bg-gradient-to-br ${domain.color} backdrop-blur-2xl rounded-[3rem] border p-10 overflow-hidden transition-all duration-500 ${domain.glow}`}
              >
                {/* Decorative Shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors" />
                
                {/* Highlight Badge */}
                <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white">{domain.highlight}</span>
                </div>

                <div className="relative z-10 mb-8 w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  {domain.icon}
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {domain.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-4 text-xs font-bold text-blue-400 uppercase tracking-widest opacity-80">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Highly Rated Program</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed mb-12 font-medium">
                    {domain.desc}
                  </p>
                </div>

                <a 
                  href="https://forms.gle/N8kk845Lbfds6Pwj6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full group/btn"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover/btn:opacity-60 transition duration-1000 group-hover/btn:duration-200" />
                  <button className="relative w-full py-5 bg-[#0a0a0f] text-white font-black text-lg rounded-2xl border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                    <span className="relative z-10">Apply Now</span>
                    <ChevronRight className="relative z-10 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredDomains.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-24 text-center"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Box className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No matching domains</h3>
              <p className="text-gray-500 mb-8">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="text-blue-500 font-bold hover:underline"
              >
                Reset all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DomainGrid;
