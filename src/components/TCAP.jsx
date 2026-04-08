import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import tcapHero from "../assets/tcap_hero.png";
import styles, { layout } from "../style";
import {
  Sparkles,
  Rocket,
  ShieldCheck,
  Users,
  TrendingUp,
  Trophy,
  Globe,
  ChevronRight,
  CheckCircle2,
  DollarSign,
  Gift,
  Award,
  Zap,
  Target,
  Clock,
  ArrowRight,
  TrendingDown,
  ExternalLink,
  ChevronDown,
  UserCheck
} from "lucide-react";

// SEO Structured Data (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechieHelp",
  "url": "https://techiehelp.in",
  "logo": "https://techiehelp.in/logo.png",
  "description": "TechieHelp Campus Ambassador Program (TCAP) - Earn while you learn.",
  "sameAs": [
    "https://linkedin.com/company/techiehelp",
    "https://instagram.com/techiehelp"
  ]
};

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a campus ambassador program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A campus ambassador program is a student leadership opportunity where students represent a brand on their campus to promote its mission, services, and opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I earn as a TechieHelp Campus Ambassador?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most active ambassadors earn between ₹5,000 to ₹10,000 per month through referral commissions and performance bonuses."
      }
    }
  ]
};

const TCAP = () => {
  const stats = [
    { value: "15,000+", label: "Successful Students" },
    { value: "4.6/5", label: "Program Rating" },
    { value: "₹12 LPA+", label: "Highest Package" },
  ];

  const [notification, setNotification] = useState(null);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours countdown
  const [scrollProgress, setScrollProgress] = useState(0);

  const notifications = [
    { name: "Rahul from Delhi", action: "earned ₹2,500", icon: <DollarSign className="w-4 h-4 text-green-400" /> },
    { name: "Sneha from Jaipur", action: "just joined the team", icon: <UserCheck className="w-4 h-4 text-blue-400" /> },
    { name: "Aman from Mumbai", action: "earned ₹5,000 this week", icon: <TrendingUp className="w-4 h-4 text-yellow-400" /> },
    { name: "Priya from Bangalore", action: "redeemed milestone bonus", icon: <Trophy className="w-4 h-4 text-purple-400" /> },
    { name: "Vikram from Pune", action: "earned ₹1,200 today", icon: <DollarSign className="w-4 h-4 text-green-400" /> },
  ];

  useEffect(() => {
    const notifyInterval = setInterval(() => {
      const random = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(random);
      setTimeout(() => setNotification(null), 3500);
    }, 8000);

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(notifyInterval);
      clearInterval(timerInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const benefits = [
    { icon: <DollarSign className="w-6 h-6 text-green-400" />, title: "Earn ₹10,000+", desc: "Attractive monthly commissions on referrals" },
    { icon: <ShieldCheck className="w-6 h-6 text-blue-400" />, title: "Certificate + LOR", desc: "Official ISO certification & Recommendation" },
    { icon: <Rocket className="w-6 h-6 text-purple-400" />, title: "PPO Opportunities", desc: "Top performers get direct hiring offers" },
    { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Free Courses", desc: "Complimentary access to premium training" },
    { icon: <Gift className="w-6 h-6 text-pink-400" />, title: "Welcome Kit", desc: "Exclusive T-shirts & TechieHelp goodies" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "LinkedIn Growth", desc: "Exclusive digital badge & profile feature" },
  ];

  const commissions = [
    { name: "Basic Plan", price: "₹499", reward: "₹100", highlight: false },
    { name: "Pro Plan", price: "₹999", reward: "₹250", highlight: true, popular: true },
    { name: "Advanced Plan", price: "₹1499", reward: "₹400", highlight: false },
    { name: "Elite Plan", price: "₹2499", reward: "₹700", highlight: false },
  ];

  const steps = [
    { title: "Apply", desc: "Submit your basic application for review." },
    { title: "Get Selected", desc: "Complete a quick interview & get onboarded." },
    { title: "Get Link", desc: "Receive your exclusive ambassador dashboard." },
    { title: "Promote", desc: "Share TechieHelp opportunities in your campus." },
    { title: "Earn Money", desc: "Get paid instantly for every successful referral." }
  ];

  const rewards = [
    { title: "First Sale Bonus", reward: "₹200", desc: "Bonus on your very first onboarded student" },
    { title: "Weekly Reward", reward: "₹500", desc: "Top weekly performer bonus" },
    { title: "Milestone Bonus", reward: "₹2000", desc: "On completing 50+ successful sales" },
    { title: "Leaderboard", reward: "Rank Up", desc: "Monthly prizes for top 3 ambassadors" },
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-poppins overflow-hidden pt-20">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[1000]">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Helmet>
        <title>Campus Ambassador Program | Earn ₹10,000/Month | TechieHelp</title>
        <meta name="description" content="Join TechieHelp Campus Ambassador Program and earn up to ₹10,000/month as a student. Get certificate, LOR, and PPO opportunities. Apply Now!" />
        <meta name="keywords" content="Campus Ambassador Program, Campus Ambassador Internship India, Student Ambassador Program, Earn Money as Student India, Referral Program for Students" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>

      {/* FOMO Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 left-6 z-[200] p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 border-blue-500/30 flex items-center gap-4 shadow-2xl md:max-w-xs"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              {notification.icon}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white mb-0.5">{notification.name}</p>
              <p className="text-dimWhite font-medium leading-tight">{notification.action}</p>
            </div>
            <div className="ml-4 w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className={`${layout.section} ${styles.paddingX} min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center`}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full text-left">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md mb-6 w-fit"
            >
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[4px]">Elite Campus Ambassador Program 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-poppins font-black sm:text-[56px] text-[36px] text-white sm:leading-[70px] leading-[45px] w-full mb-6"
            >
              Become a Campus Leader & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Earn ₹10,000 Monthly
              </span> 🚀
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-dimWhite font-medium text-lg leading-relaxed mb-10 max-w-[550px]"
            >
              Join India’s premier student network. Scale your influence, build your personal brand, and secure your financial future. <span className="text-white font-bold border-b-2 border-blue-500/50">Success starts on campus.</span>
            </motion.p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                href="https://forms.gle/1Ui7sxWq3AqwmmZe8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 px-8 bg-white text-[#0f172a] font-black text-lg rounded-2xl shadow-[0_10px_35px_rgba(255,255,255,0.15)] hover:shadow-white/30 transition-all flex items-center justify-center gap-3"
              >
                Apply for TCAP 💰
              </motion.a>
              
              <div className="flex -space-x-3 items-center group cursor-help">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-blue-500/20 flex items-center justify-center text-[10px] font-bold bg-white/5 backdrop-blur-md">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <span className="ml-4 text-[13px] font-bold text-dimWhite tracking-wide group-hover:text-white transition-colors">1.2k+ Applied</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full lg:max-w-[520px]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={tcapHero} 
                  alt="TechieHelp Campus Ambassadors" 
                  className="w-full h-[480px] object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Achievement Badge Overlay */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-8 px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl z-20 md:flex hidden items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">₹</div>
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Top Earner</p>
                  <p className="text-sm font-black text-white leading-none">Amit: ₹5,200/wk</p>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -left-8 px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl z-20 md:flex hidden items-center gap-3"
              >
                <Rocket className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Recent Activity</p>
                  <p className="text-sm font-black text-white leading-none">Batch 12 Filling 🚀</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={`${styles.paddingX} py-20 relative bg-black/40 border-y border-white/5`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-dimWhite uppercase tracking-[3px] text-[10px] sm:text-[11px] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full relative overflow-hidden flex items-center gap-8 py-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="whitespace-nowrap flex items-center gap-8 animate-marquee">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-lg font-black text-blue-400 uppercase tracking-widest">🔥 1000+ students already earning with TechieHelp</span>
                  <span className="text-white/20">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`${styles.paddingX} py-32 relative overflow-hidden`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">TCAP?</span></h2>
          <p className="text-dimWhite text-base sm:text-lg">Massive perks, direct industry exposure, and a community of high-performers.</p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
              <p className="text-dimWhite text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className={`${styles.paddingX} py-32 relative bg-primary overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight italic">
                Massive Earning <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 underline">Potential 📈</span>
              </h2>
              <p className="text-dimWhite text-xl mb-12">Stop dreaming, start doing. Here is how much you can easily earn every month by helping students join our specialized batches.</p>
              
              <div className="space-y-6">
                {[
                  { count: "10 Students", reward: "₹1,000", bg: "bg-blue-600/10" },
                  { count: "25 Students", reward: "₹5,000", bg: "bg-purple-600/10" },
                  { count: "50+ Students", reward: "₹10,000+", bg: "bg-green-600/10" }
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl flex justify-between items-center border border-white/10 ${tier.bg}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-bold text-xl">{i + 1}</div>
                      <span className="text-2xl font-black">{tier.count}</span>
                    </div>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">{tier.reward}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm font-bold text-dimWhite flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" /> Top ambassadors earn ₹5,000–₹10,000/month consistently
              </p>
            </div>
            
            <div className="p-10 rounded-[2.5rem] backdrop-blur-xl bg-white/5 border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><TrendingUp size={150} /></div>
                <h3 className="text-2xl font-black mb-6">Why Students Choose US?</h3>
                <ul className="space-y-4">
                 {[
                   "100% Practical Training",
                   "ISO Certified Courses",
                   "Direct Placement Support",
                   "Industry Expert Mentors",
                   "Most Affordable Pricing"
                 ].map((text, i) => (
                   <li key={i} className="flex items-center gap-4 text-lg font-bold">
                     <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"><CheckCircle2 size={12} /></div>
                     {text}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className={`${styles.paddingX} py-20 bg-red-600/10 border-y border-red-600/20`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black text-white mb-1 uppercase italic tracking-tighter">Hurry Up! Time is Running Out ⏰</h2>
            <p className="text-red-400 font-bold text-sm uppercase tracking-widest animate-pulse">Only 50 seats left for this month's intake</p>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 border-red-600/30 min-w-[90px] text-center">
              <span className="text-3xl font-black block">{formatTime(timeLeft).split(' ')[0]}</span>
            </div>
            <div className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 border-red-600/30 min-w-[90px] text-center">
              <span className="text-3xl font-black block">{formatTime(timeLeft).split(' ')[1]}</span>
            </div>
            <div className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 border-red-600/30 min-w-[90px] text-center">
              <span className="text-3xl font-black block">{formatTime(timeLeft).split(' ')[2]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <section id="commissions" className={`${styles.paddingX} py-32 relative bg-blue-600/5`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">Strong Commission <br className="sm:block hidden" /> Structure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">💰</span></h2>
          <p className="text-dimWhite text-base">The more you help others grow, the more you earn. Simple as that.</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {commissions.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-10 rounded-[3rem] border transition-all relative ${plan.highlight
                  ? "bg-gradient-to-b from-blue-600 to-blue-900 border-white/40 shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10 scale-105"
                  : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-yellow-400 text-[#0f172a] px-5 py-1 rounded-full text-xs font-black uppercase tracking-widest">Most Popular</div>
              )}
              <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-blue-100" : "text-dimWhite"}`}>{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`${plan.highlight ? "text-blue-200" : "text-dimWhite"}`}>/student</span>
              </div>
              <div className={`p-6 rounded-2xl mb-8 ${plan.highlight ? "bg-white/10" : "bg-white/5"}`}>
                <p className="text-xs uppercase tracking-widest font-black opacity-60 mb-2">Commission Rate</p>
                <p className="text-3xl font-black text-green-400">{plan.reward}</p>
              </div>
              <ul className="space-y-4 mb-10 overflow-hidden">
                {[1, 2, 3].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className={`w-4 h-4 ${plan.highlight ? "text-blue-200" : "text-green-400"}`} />
                    <span>Instant Payout</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className={`${styles.paddingX} py-32 relative`}>
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Works</span></h2>
          <p className="text-dimWhite text-base">Your journey from student to leader in 5 simple steps.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-[20px] left-[40px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent hidden sm:block" />

          <div className="space-y-16 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-black shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.4)]">{i + 1}</div>
                <div className="pt-3">
                  <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                  <p className="text-dimWhite text-base max-w-[550px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className={`${styles.paddingX} py-32 relative overflow-hidden`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto relative z-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Performance <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Rewards 🎯</span></h2>
            <p className="text-dimWhite text-lg mb-8">Beyond commissions, we celebrate every milestone you hit with game-changing rewards.</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {rewards.map((reward, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                  <p className="text-green-400 font-black text-2xl mb-2">{reward.reward}</p>
                  <h4 className="text-xl font-bold mb-2">{reward.title}</h4>
                  <p className="text-dimWhite text-sm">{reward.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-1 rounded-[3rem] bg-gradient-to-tr from-blue-500 via-transparent to-purple-500 overflow-hidden group">
            <div className="bg-[#0f172a] rounded-[2.9rem] p-10 overflow-hidden relative">
              <h3 className="text-2xl font-black mb-6">Roles & Responsibilities</h3>
              <ul className="space-y-6">
                {[
                  "Promote TechieHelp internships in your campus",
                  "Onboard students for specialized batches",
                  "Social media marketing & community growth",
                  "Organize campus-level tech workshops",
                  "Connect with tech clubs & student bodies"
                ].map((task, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <UserCheck className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-lg font-medium text-white/90">{task}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-[80px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className={`${styles.paddingX} py-32`}>
        <div className="max-w-7xl mx-auto p-16 rounded-[4rem] bg-white text-[#0f172a] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black mb-8">Who Can <span className="text-blue-600">Apply?</span></h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-16">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-black">Any College Student</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-black">Great Communicator</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-black">Socially Active</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-60 h-60 border-[40px] border-blue-500/5 rounded-full"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.paddingX} py-32 relative bg-black/20`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Questions ❓</span></h2>
            <p className="text-dimWhite text-base sm:text-lg uppercase tracking-widest font-bold">Everything you need to know about TCAP</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What is a campus ambassador program?", a: "It's a leadership opportunity where you represent TechieHelp in your college, promote our mission, and earn commissions on every student enrollment." },
              { q: "How can students earn money?", a: "By referring students to our specialized training batches using your unique link. You earn up to ₹700 per referral, plus weekly bonuses." },
              { q: "Is this program free?", a: "Yes! There are no registration fees to join the TechieHelp Campus Ambassador Program. It is strictly an earning and learning opportunity." },
              { q: "Who can apply?", a: "Any college student from any stream who is motivated, has good communication skills, and wants to build a career in technology and sales." },
              { q: "What are the benefits?", a: "Earnings up to ₹10,000/month, official Certificate + LOR, PPO opportunities, free course access, and exclusive welcome kits." }
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 border-white/5 cursor-pointer transition-all hover:bg-white/10">
                <summary className="flex justify-between items-center font-bold text-lg list-none">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-blue-500" />
                </summary>
                <p className="mt-4 text-dimWhite leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${styles.paddingX} py-40 text-center relative bg-gradient-to-b from-primary to-blue-900/40`}>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/40"
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-black mb-6 leading-none">Start Earning <br className="sm:block hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Today 💰</span></h2>
          <p className="text-dimWhite text-xl mb-10 opacity-80 font-medium">Financial independence is just one application away. Join 1,000+ students already winning with TechieHelp.</p>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="https://forms.gle/1Ui7sxWq3AqwmmZe8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, shadow: "0 0 50px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-8 px-24 bg-white text-blue-600 font-extrabold text-3xl rounded-full shadow-2xl transition-all"
            >
              Apply Now & Earn 💰
            </motion.a>
            
            <div className="flex items-center gap-3 py-2 px-6 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 border-red-500/30">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
               <span className="text-sm font-black text-red-400 uppercase tracking-[4px]">Deadline approaching soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick Apply Button (Mobile Only) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full p-4 sm:hidden z-[300] bg-gradient-to-t from-[#0f172a] to-transparent"
      >
        <a
          href="https://forms.gle/1Ui7sxWq3AqwmmZe8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-5 bg-white text-blue-600 font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
        >
          Start Earning Today 💰
        </a>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default TCAP;
