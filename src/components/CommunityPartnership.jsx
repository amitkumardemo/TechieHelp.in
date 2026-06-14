import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
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
  UserCheck,
  Link as LinkIcon,
  Share2,
  ThumbsUp,
  Smile,
  HeartHandshake
} from "lucide-react";

// SEO Structured Data (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechieHelp",
  "url": "https://techiehelp.in",
  "logo": "https://techiehelp.in/logo.png",
  "description": "TechieHelp Community Monetization - Turn Your Community Into Income by just sharing a link.",
  "sameAs": [
    "https://linkedin.com/company/techiehelp",
    "https://instagram.com/techiehelp"
  ]
};

const NeuralNetworkBackground = () => (
  <svg viewBox="0 0 800 600" className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-[0]" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#33bbcf" stopOpacity="0" />
        <stop offset="50%" stopColor="#33bbcf" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#33bbcf" stopOpacity="0" />
      </linearGradient>
    </defs>

    {[...Array(15)].map((_, i) => (
      <motion.circle
        key={i}
        cx={Math.random() * 800}
        cy={Math.random() * 600}
        r="1.5"
        fill="#33bbcf"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}

    <motion.path
      d="M100 100 L300 200 L500 150 M200 400 L400 300 L600 500 M50 300 L250 150 L450 400 L700 250"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="0.5"
      animate={{
        strokeDasharray: ["0, 1000", "1000, 0"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </svg>
);

const CommunityPartnership = () => {
  const stats = [
    { value: "1,000+", label: "Partners Earning" },
    { value: "₹50k+", label: "Highest Payout" },
    { value: "100%", label: "Passive Income" },
  ];

  const [notification, setNotification] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const notifications = [
    { name: "Rahul transferred", action: "earned ₹2,500 today", icon: <DollarSign className="w-4 h-4 text-green-400" /> },
    { name: "Sneha shared link", action: "got 3 signups instantly", icon: <UserCheck className="w-4 h-4 text-blue-400" /> },
    { name: "Aman withdrew", action: "earned ₹5,000 this week", icon: <TrendingUp className="w-4 h-4 text-yellow-400" /> },
    { name: "Priya joined", action: "ready to earn passively", icon: <HeartHandshake className="w-4 h-4 text-[#33bbcf]" /> },
    { name: "Rahul transferred", action: "earned ₹1,200 today", icon: <DollarSign className="w-4 h-4 text-green-400" /> },
  ];

  useEffect(() => {
    const notifyInterval = setInterval(() => {
      const random = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(random);
      setTimeout(() => setNotification(null), 3500);
    }, 6000);

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(notifyInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6 text-green-400" />, title: "Passive income �", desc: "Earn while you sleep by just sharing links" },
    { icon: <Smile className="w-6 h-6 text-blue-400" />, title: "No work pressure", desc: "No deadlines, no boss. Work at your own pace" },
    { icon: <ThumbsUp className="w-6 h-6 text-[#33bbcf]" />, title: "No skills required", desc: "You don't need any technical or sales background" },
    { icon: <Clock className="w-6 h-6 text-yellow-400" />, title: "Earn anytime", desc: "Flexible earning opportunity fitting your schedule" },
    { icon: <Users className="w-6 h-6 text-pink-400" />, title: "Grow your influence", desc: "Add value to your community members with great offers" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "Zero Investment", desc: "Start earning with absolutely zero joining fees" },
  ];

  const steps = [
    { title: "Get Your Link", desc: "Sign up and receive your unique referral link." },
    { title: "Share It", desc: "Post the link in your WhatsApp/Telegram groups or social media." },
    { title: "Students Join", desc: "Students enroll in TechieHelp programs using your link." },
    { title: "Earn Commission �", desc: "You get paid instantly for every successful signup." }
  ];

  const commissions = [
    { name: "Special Batch", price: "₹3,000", reward: "₹500", highlight: true, popular: true, link: "/special-batch" },
    { name: "Standard Program", price: "₹499", reward: "₹100", highlight: false },
  ];

  return (
    <div className="bg-[#00040f] text-gray-900 dark:text-white min-h-screen font-poppins pt-20 relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#00040f]">
        <NeuralNetworkBackground />
        <div className="absolute top-0 left-0 w-[400px] h-full bg-blue-gradient opacity-10 blur-[120px] -rotate-45 animate-light-beam z-[0]" />
      </div>

      <Helmet>
        <title>Turn Your Community Into Income | TechieHelp</title>
        <meta name="description" content="Just promote TechieHelp programs in your community and earn commission on every signup. No selling required, no investment." />
        <meta name="keywords" content="Community Monetization, Passive Income India, Referral Program, Earn Money Online" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-100 dark:bg-white/5 z-[1000]">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* FOMO Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 left-6 z-[200] p-4 rounded-2xl backdrop-blur-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 border-blue-500/30 flex items-center gap-4 shadow-2xl md:max-w-xs"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              {notification.icon}
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-900 dark:text-white mb-0.5">{notification.name}</p>
              <p className="text-gray-500 dark:text-dimWhite font-medium leading-tight">{notification.action}</p>
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
              className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md mb-6 w-fit flex gap-2 items-center"
            >
              <HeartHandshake size={14} className="text-blue-400" />
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[4px]">No Selling Required. Just Promote.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-poppins font-black sm:text-[60px] text-[40px] text-gray-900 dark:text-white sm:leading-[75px] leading-[50px] w-full mb-6"
            >
              Turn Your Community Into <br />
              <span className="text-cyan-gradient font-bold">
                Income �
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 dark:text-dimWhite font-medium text-xl leading-relaxed mb-6 max-w-[550px]"
            >
              Just promote TechieHelp programs in your community and earn commission on every signup.
            </motion.p>
            
            <ul className="space-y-3 mb-10 text-lg font-bold">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 w-5 h-5"/> No selling required</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 w-5 h-5"/> No investment</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 w-5 h-5"/> Just share link & earn</li>
            </ul>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                href="https://forms.gle/bj9FxgkaMwmA5GxBA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 px-8 bg-white text-[#0f172a] font-black text-lg rounded-2xl shadow-[0_10px_35px_rgba(255,255,255,0.15)] hover:shadow-white/30 transition-all flex items-center justify-center gap-3"
              >
                Start Earning Now 
              </motion.a>
              
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
              <div className="relative bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                <img 
                  src={tcapHero} 
                  alt="Turn Community into income" 
                  className="w-full h-[480px] object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Achievement Badge Overlay */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-8 px-5 py-3 rounded-2xl backdrop-blur-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 shadow-2xl z-20 md:flex hidden items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">₹</div>
                <div>
                  <p className="text-[10px] font-bold text-gray-900 dark:text-white/60 uppercase tracking-widest">Active Earning</p>
                  <p className="text-sm font-black text-gray-900 dark:text-white leading-none">Just Shared Link �</p>
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
                <h3 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-gray-500 dark:text-dimWhite uppercase tracking-[3px] text-[10px] sm:text-[11px] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full relative overflow-hidden flex items-center gap-8 py-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="whitespace-nowrap flex items-center gap-8 animate-marquee">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-lg font-black text-blue-400 uppercase tracking-widest"> 1000+ partners already earning simply by sharing links</span>
                  <span className="text-gray-900 dark:text-white/20">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${styles.paddingX} py-32 relative`}>
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">How It <span className="text-cyan-gradient font-bold">Works</span></h2>
          <p className="text-gray-500 dark:text-dimWhite text-base">Super easy to understand. Just promote → earn commission.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-[20px] left-[40px] bottom-[20px] w-[2px] bg-gradient-to-b from-blue-500 to-transparent hidden sm:block" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {}
            }}
            className="space-y-16 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="flex flex-col sm:flex-row gap-8 items-start group relative"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-black shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500 border-2 border-gray-200 dark:border-white/10 relative z-10">{i + 1}</div>
                <div className="pt-3 backdrop-blur-sm bg-gray-100 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 group-hover:border-blue-500/30 transition-all w-full relative z-10">
                  <h3 className="text-2xl font-black mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-gray-500 dark:text-dimWhite text-base max-w-[550px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className={`${styles.paddingX} py-32 relative bg-white dark:bg-primary overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight italic">
                If your community has <br /> <span className="text-cyan-gradient font-bold">200–500 members:</span>
              </h2>
              <p className="text-gray-500 dark:text-dimWhite text-xl mb-12">See how easily you can scale your earnings based on simple signups.</p>
              
              <div className="space-y-6">
                {[
                  { count: "5 joins", reward: "₹500", bg: "bg-blue-600/10", note: "for 1 month 499 wala" },
                  { count: "20 joins", reward: "₹4,000", bg: "bg-purple-600/10", note: "for 2 month 999 wala" },
                  { count: "50 joins", reward: "₹25,000", bg: "bg-green-600/10", note: "for special batches" }
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl flex justify-between items-center border border-gray-200 dark:border-white/10 ${tier.bg}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center font-bold text-xl"><Users size={20}/></div>
                      <span className="text-2xl font-black">{tier.count}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-gradient font-bold">{tier.reward}</span>
                      {tier.note && <p className="text-[10px] uppercase font-bold text-green-400 opacity-80 mt-1">{tier.note}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-10 rounded-[2.5rem] backdrop-blur-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Globe size={150} /></div>
                <h3 className="text-3xl font-black mb-6">Why It Works</h3>
                <ul className="space-y-6">
                 {[
                   "Highly demanded tech programs",
                   "Students love our affordable pricing",
                   "Your link does all the tracking seamlessly",
                   "No complicated multi-level marketing",
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

      {/* Commission Section */}
      <section id="commissions" className={`${styles.paddingX} py-32 relative bg-blue-600/5`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md mb-6 w-fit text-green-400 font-bold uppercase tracking-widest text-sm">
             <HeartHandshake size={16} /> Just promote, no selling required
           </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">Simple Commission <br className="sm:block hidden" /> Structure <span className="text-cyan-gradient font-bold">�</span></h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto">
          {commissions.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-10 rounded-[3rem] border transition-all relative ${plan.highlight
                  ? "bg-gradient-to-br from-blue-600/80 to-blue-900/90 border-white/40 shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10 scale-105 backdrop-blur-xl"
                  : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-white/30 backdrop-blur-xl"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-yellow-400 text-[#0f172a] px-5 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-yellow-400/20">Highly Recommended</div>
              )}
              <h4 className={`text-3xl font-black mb-6 ${plan.highlight ? "text-gray-900 dark:text-white" : "text-gray-200"}`}>{plan.name}</h4>
              
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
                <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Program Price</p>
                <div className="text-lg font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 inline-block px-4 py-1.5 rounded-lg border border-gray-300 dark:border-white/20 shadow-inner">{plan.price}</div>
                {plan.link && (
                  <RouterLink to={plan.link} className="flex flex-wrap items-center gap-2 text-blue-300 hover:text-gray-900 dark:text-white transition-colors underline decoration-blue-500/50 underline-offset-4 mt-4 font-bold text-sm">
                    View Program Details <ArrowRight size={14} />
                  </RouterLink>
                )}
              </div>

              <div className={`p-6 rounded-3xl mb-8 mt-6 border shadow-2xl ${plan.highlight ? "bg-gray-100 dark:bg-white/10 border-gray-300 dark:border-white/20 shadow-black/20" : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 shadow-black/10"}`}>
                <p className="text-sm uppercase tracking-widest font-black opacity-80 mb-3 text-green-300">Your Commission</p>
                <div className="flex items-baseline gap-2">
                   <p className="text-6xl font-black text-green-400 drop-shadow-lg">{plan.reward}</p>
                   <span className="text-sm font-bold text-gray-900 dark:text-white/70">/student</span>
                </div>
              </div>

              <ul className="space-y-4 mb-2 overflow-hidden">
                {[1].map(item => (
                  <li key={item} className="flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white/90">
                    <CheckCircle2 className={`w-6 h-6 ${plan.highlight ? "text-blue-300" : "text-green-400"}`} />
                    <span>Instant Payout on Signup</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`${styles.paddingX} py-32 relative overflow-hidden`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">Amazing <span className="text-cyan-gradient font-bold">Benefits</span></h2>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-gray-200 dark:border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
              <p className="text-gray-500 dark:text-dimWhite text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${styles.paddingX} py-40 text-center relative bg-[#00040f]`}>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/40"
          >
            <Share2 className="w-12 h-12 text-gray-900 dark:text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-black mb-10 leading-none">Start Earning From Your <br className="sm:block hidden" /> <span className="text-cyan-gradient font-bold">Community �</span></h2>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="https://forms.gle/1Ui7sxWq3AqwmmZe8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, shadow: "0 0 50px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-8 px-24 bg-white text-blue-600 font-extrabold text-3xl rounded-full shadow-2xl transition-all"
            >
              Start Earning Now 
            </motion.a>
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
          Start Earning Now 
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

export default CommunityPartnership;
