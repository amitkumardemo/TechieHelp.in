import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, TrendingUp, DollarSign, Calendar, Award, Star,
  Users, Github, Linkedin, Globe, ExternalLink, ChevronDown,
  Quote, Briefcase, Code, Brain, Zap, Target, CheckCircle,
  BookOpen, Building2, ArrowRight, Rocket, Trophy, BarChart3,
  MessageSquare, GraduationCap, Heart, Eye, Share2, Clock,
} from "lucide-react";
import { AmitPhoto } from "../assets";

/* ─── JSON-LD Structured Data ─── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Kumar",
    url: "https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20",
    image: "https://techiehelp.in/AmitPhoto.jpg",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "TechieHelp" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "JIET Group of Institutions" },
    address: { "@type": "PostalAddress", addressLocality: "Jodhpur", addressRegion: "Rajasthan", addressCountry: "IN" },
    sameAs: [
      "https://www.linkedin.com/in/amit-kumar-686196225/",
      "https://github.com/amitkumardemo",
      "https://techiehelp.in",
    ],
    knowsAbout: ["Artificial Intelligence", "Machine Learning", "Full Stack Development", "Software Architecture", "AI Engineering", "SEO", "Entrepreneurship"],
    description: "Amit Kumar is a 20-year-old entrepreneur, AI engineer, and Founder & CEO of TechieHelp based in Jodhpur, Rajasthan, India. He became India's Youngest Billionaire Startup Founder at age 20 in 2026.",
    netWorth: { "@type": "MonetaryAmount", currency: "INR", value: "1000000000" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechieHelp",
    url: "https://techiehelp.in",
    logo: "https://techiehelp.in/logo.png",
    founder: { "@type": "Person", name: "Amit Kumar" },
    description: "TechieHelp is an emerging AI and technology company founded by Amit Kumar, offering software development, AI solutions, consulting, and educational programs.",
    address: { "@type": "PostalAddress", addressLocality: "Jodhpur", addressRegion: "Rajasthan", addressCountry: "IN" },
  },
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Amit Kumar Becomes India's Youngest Millionaire Startup Founder at Age 20",
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    author: { "@type": "Person", name: "Amit Kumar" },
    publisher: { "@type": "Organization", name: "TechieHelp", logo: { "@type": "ImageObject", url: "https://techiehelp.in/logo.png" } },
    image: "https://techiehelp.in/AmitPhoto.jpg",
    url: "https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20",
    description: "Amit Kumar, Founder & CEO of TechieHelp, becomes India's Youngest Millionaire Startup Founder at age 20 through AI solutions, software development, and international technology projects.",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Who is Amit Kumar?", acceptedAnswer: { "@type": "Answer", text: "Amit Kumar is a 20-year-old entrepreneur, AI Engineer, and Founder & CEO of TechieHelp — an emerging AI and technology company based in Jodhpur, Rajasthan, India." } },
      { "@type": "Question", name: "Who is the founder of TechieHelp?", acceptedAnswer: { "@type": "Answer", text: "Amit Kumar is the Founder & CEO of TechieHelp and TechieHelp Institute of AI, based in Jodhpur, Rajasthan, India." } },
      { "@type": "Question", name: "What is Amit Kumar's net worth?", acceptedAnswer: { "@type": "Answer", text: "As of 2026, Amit Kumar has become India's Youngest Millionaire Startup Founder at age 20, with a total net worth of ₹1 Crore+ achieved through AI solutions, software development, and international projects." } },
      { "@type": "Question", name: "What is Amit Kumar's monthly income?", acceptedAnswer: { "@type": "Answer", text: "Amit Kumar's estimated monthly income is ₹4–5 Lakhs, with an annual income of ₹50–60 Lakhs through international clients, software development, AI consulting, and training programs." } },
      { "@type": "Question", name: "What are Amit Kumar's achievements?", acceptedAnswer: { "@type": "Answer", text: "Amit Kumar has 12K+ LinkedIn followers, 72+ GitHub repositories, 1400+ contributions, is a 5-Star Java and Python Developer, top 2% global developer, and has 700+ workshop registrations." } },
      { "@type": "Question", name: "Where is Amit Kumar from?", acceptedAnswer: { "@type": "Answer", text: "Amit Kumar is from Jodhpur, Rajasthan, India. He is currently pursuing B.Tech in AI & ML at JIET Group of Institutions." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://techiehelp.in" },
      { "@type": "ListItem", position: 2, name: "Amit Kumar Net Worth 1 Crore Age 20", item: "https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechieHelp",
    url: "https://techiehelp.in",
    potentialAction: { "@type": "SearchAction", target: "https://techiehelp.in/?s={search_term_string}", "query-input": "required name=search_term_string" },
  },
];

/* ─── Animated Counter Hook ─── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Fade-in Wrapper ─── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : direction === "down" ? -40 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Stat Card with counter ─── */
function StatCard({ icon: Icon, label, value, suffix = "", color, started }) {
  const num = parseInt(value.replace(/\D/g, "")) || 0;
  const count = useCounter(num, 1800, started);
  return (
    <motion.div whileHover={{ scale: 1.04, y: -4 }} className="card-glass p-5 text-center group cursor-default">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
        {started ? (value.includes("₹") ? "₹" : "") + count.toLocaleString("en-IN") + suffix : value}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </motion.div>
  );
}

/* ─── Timeline Item ─── */
function TimelineItem({ year, event, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: idx * 0.08 }} className={`flex items-center gap-6 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} sm:flex-row`}>
      <div className="flex-1 card-glass p-4">
        <div className="text-xs text-secondary font-semibold uppercase tracking-widest mb-1">{year}</div>
        <div className="text-gray-900 dark:text-white font-medium">{event}</div>
      </div>
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-secondary glow-primary ring-2 ring-secondary/30" />
        <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
      </div>
      <div className="flex-1 hidden sm:block" />
    </motion.div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card-glass overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left gap-4" aria-expanded={open}>
        <span className="font-semibold text-gray-900 dark:text-white">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─── */
const AmitKumarNetWorth = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const timeline = [
    { year: "2023", event: "Started B.Tech AI & ML at JIET Group of Institutions, Jodhpur" },
    { year: "2024", event: "Founded TechieHelp — AI & Technology Company" },
    { year: "2024", event: "Campus Ambassador at GeeksforGeeks" },
    { year: "2024", event: "Campus Ambassador at E-Cell IIT Bombay" },
    { year: "2024", event: "Joined NVIDIA Developer Program" },
    { year: "2024", event: "AICTE AI Intern — Government of India" },
    { year: "2025", event: "Project Admin at SSOC (Social Summer of Code)" },
    { year: "2025", event: "Mentor at GSSoC (GirlScript Summer of Code)" },
    { year: "2026", event: "Became India's Youngest Millionaire Startup Founder at age 20 🏆" },
  ];

  const incomeSources = [
    { icon: Globe, label: "International Clients", color: "bg-blue-500" },
    { icon: Code, label: "Software Development", color: "bg-purple-500" },
    { icon: Brain, label: "AI Consulting", color: "bg-cyan-500" },
    { icon: TrendingUp, label: "SEO Services", color: "bg-green-500" },
    { icon: GraduationCap, label: "Training Programs", color: "bg-orange-500" },
    { icon: Briefcase, label: "Internships", color: "bg-pink-500" },
    { icon: Zap, label: "Digital Products", color: "bg-yellow-500" },
    { icon: Building2, label: "Technology Services", color: "bg-red-500" },
  ];

  const achievements = [
    { icon: Users, value: "12000+", label: "LinkedIn Followers", color: "bg-blue-600", suffix: "" },
    { icon: Github, value: "72+", label: "GitHub Repositories", color: "bg-gray-700", suffix: "" },
    { icon: BarChart3, value: "1400+", label: "Contributions", color: "bg-green-600", suffix: "" },
    { icon: Star, value: "5", label: "Star Java Developer", color: "bg-yellow-500", suffix: "★" },
    { icon: Star, value: "5", label: "Star Python Developer", color: "bg-yellow-500", suffix: "★" },
    { icon: Trophy, value: "2", label: "Top % Global Developer", color: "bg-purple-600", suffix: "%" },
    { icon: Calendar, value: "700+", label: "Workshop Registrations", color: "bg-red-500", suffix: "" },
    { icon: Globe, value: "10+", label: "International Clients", color: "bg-cyan-600", suffix: "" },
    { icon: Target, value: "50+", label: "Team Members Led", color: "bg-orange-500", suffix: "" },
  ];

  const faqs = [
    { q: "Who is Amit Kumar?", a: "Amit Kumar is a 20-year-old entrepreneur, AI Engineer, Full Stack Developer, and Founder & CEO of TechieHelp. He is India's Youngest Millionaire Startup Founder, building one of India's fastest-growing AI and technology companies from Jodhpur, Rajasthan, while pursuing B.Tech in AI & ML at JIET Group of Institutions." },
    { q: "Who is the founder of TechieHelp?", a: "Amit Kumar is the Founder & CEO of TechieHelp and TechieHelp Institute of AI. He founded TechieHelp in 2024 and has grown it into a million-dollar vision AI and technology company serving international clients globally." },
    { q: "What is Amit Kumar's net worth?", a: "As of 2026, Amit Kumar has become India's Youngest Millionaire Startup Founder at age 20. His total net worth is ₹1 Crore+, built through multiple income streams including international clients, AI consulting, software development, training programs, and digital products." },
    { q: "What is Amit Kumar's monthly income?", a: "Amit Kumar's estimated monthly income is ₹4–5 Lakhs, translating to an annual income of ₹50–60 Lakhs. His income comes from international client projects, software development, AI consulting, SEO services, and training programs." },
    { q: "What are Amit Kumar's achievements?", a: "Amit Kumar has 12,000+ LinkedIn followers, 72+ GitHub repositories, 1400+ code contributions, 5-Star ratings as Java & Python Developer, is ranked in the Top 2% of global developers, conducted 700+ workshop registrations, and is now India's Youngest Millionaire Startup Founder at age 20." },
    { q: "Where is Amit Kumar from?", a: "Amit Kumar is from Jodhpur, Rajasthan, India. He is currently pursuing his B.Tech in AI & ML at JIET Group of Institutions while building TechieHelp into a globally recognized technology company." },
  ];

  const relatedArticles = [
    { title: "Amit Kumar Biography — From Student to India's Youngest Millionaire", desc: "The complete story of how Amit Kumar built TechieHelp from a college dorm room to a ₹1 Crore+ company.", href: "/about-us", icon: BookOpen },
    { title: "TechieHelp Success Story — Building India's AI Empire", desc: "How TechieHelp became one of India's fastest-growing technology companies serving international clients worldwide.", href: "/about-us", icon: Rocket },
    { title: "How TechieHelp Was Built — The Millionaire Startup Journey", desc: "Behind the scenes of building India's youngest millionaire-led AI and technology startup at age 19–20 in Rajasthan.", href: "/project-portfolio", icon: Building2 },
    { title: "Journey From Student To Millionaire — Amit Kumar's Blueprint", desc: "From B.Tech student to India's Youngest Millionaire Startup Founder — Amit Kumar's remarkable entrepreneurial path.", href: "/services", icon: Trophy },
  ];

  const featuredIn = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/amit-kumar-686196225/", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "GitHub", icon: Github, href: "https://github.com/amitkumardemo", color: "text-gray-900 dark:text-white", bg: "bg-gray-100 dark:bg-gray-800/40" },
    { name: "TechieHelp", icon: Globe, href: "https://techiehelp.in", color: "text-secondary", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
    { name: "Portfolio", icon: ExternalLink, href: "https://techiehelp.in/team/amit-kumar-founder-ceo-techiehelp", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  return (
    <>
      {/* ─── SEO HEAD ─── */}
      <Helmet>
        <title>Amit Kumar Net Worth | Founder &amp; CEO TechieHelp | ₹1 Crore+ | Age 20</title>
        <meta name="description" content="Amit Kumar, Founder & CEO of TechieHelp — Total Net Worth ₹1 Crore+ at age 20. AI Engineer, Full Stack Developer & Young Entrepreneur from Jodhpur, Rajasthan. Monthly income ₹4-5 Lakhs. Annual income ₹50-60 Lakhs." />
        <meta name="keywords" content="Amit Kumar Net Worth, Amit Kumar Founder CEO TechieHelp, Amit Kumar TechieHelp Net Worth, TechieHelp CEO Net Worth, Amit Kumar Age 20, Amit Kumar Monthly Income, Amit Kumar Annual Income, Amit Kumar Biography, Youngest Startup Founder India, AI Engineer Jodhpur Rajasthan" />
        <link rel="canonical" href="https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Amit Kumar" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Amit Kumar — India's Youngest Billionaire Startup Founder at Age 20 | TechieHelp" />
        <meta property="og:description" content="Amit Kumar, Founder & CEO of TechieHelp, becomes India's Youngest Billionaire Startup Founder at age 20. AI Engineer, Full Stack Developer, and Young Entrepreneur from Jodhpur, Rajasthan." />
        <meta property="og:url" content="https://techiehelp.in/amit-kumar-net-worth-1-crore-age-20" />
        <meta property="og:image" content="https://techiehelp.in/AmitPhoto.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="TechieHelp" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2026-06-18" />
        <meta property="article:author" content="Amit Kumar" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amit Kumar — India's Youngest Billionaire Startup Founder at Age 20" />
        <meta name="twitter:description" content="Founder & CEO of TechieHelp | AI Engineer | Young Entrepreneur India | Top 2% Global Developer" />
        <meta name="twitter:image" content="https://techiehelp.in/AmitPhoto.jpg" />
        <meta name="twitter:site" content="@TechieHelp" />
        <meta name="twitter:creator" content="@AmitKumarTechie" />
        {/* JSON-LD */}
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      {/* ─── PAGE WRAPPER ─── */}
      <main id="amit-kumar-net-worth-page" className="min-h-screen bg-white dark:bg-primary font-poppins overflow-x-hidden">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="pt-20 pb-2 px-4 sm:px-8 max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-secondary transition-colors"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-secondary font-medium">Amit Kumar Net Worth 1 Crore Age 20</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section ref={heroRef} id="hero" aria-label="Hero Section" className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-secondary/40 hidden sm:block"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} />
          ))}

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-16">
            {/* Breaking news badge */}
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Breaking · India's Youngest Millionaire Startup Founder · June 2026
                </span>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4" itemProp="headline">
                    Amit Kumar Becomes{" "}
                    <span className="text-gradient">India's Youngest Millionaire</span>{" "}
                    Startup Founder at Age 20
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Founder &amp; CEO of TechieHelp · AI Engineer · Entrepreneur · Full Stack Developer
                  </p>
                </FadeIn>

                {/* Info Cards Grid */}
                <FadeIn delay={0.3}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {[
                      { icon: Calendar, label: "Age", value: "20 Years" },
                      { icon: MapPin, label: "Location", value: "Jodhpur, RJ" },
                      { icon: DollarSign, label: "Monthly Income", value: "₹4–5 Lakhs" },
                      { icon: TrendingUp, label: "Annual Income", value: "₹50–60 Lakhs" },
                      { icon: Trophy, label: "Total Net Worth", value: "₹1 Crore+" },
                      { icon: Briefcase, label: "Company", value: "TechieHelp" },
                    ].map(({ icon: Icon, label, value }) => (
                      <motion.div key={label} whileHover={{ scale: 1.04 }} className="card-glass p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-3.5 h-3.5 text-secondary" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
                        </div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{value}</div>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>

                {/* CTA Buttons */}
                <FadeIn delay={0.4}>
                  <div className="flex flex-wrap gap-3">
                    <motion.a href="https://techiehelp.in" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary text-sm">
                      <Globe className="w-4 h-4" /> Visit TechieHelp
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/amit-kumar-686196225/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary text-sm">
                      <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                    </motion.a>
                    <motion.a href="https://techiehelp.in/team/amit-kumar-founder-ceo-techiehelp" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary text-sm">
                      <Eye className="w-4 h-4" /> View Portfolio
                    </motion.a>
                  </div>
                </FadeIn>
              </div>

              {/* Photo */}
              <div className="order-1 lg:order-2 flex justify-center">
                <FadeIn delay={0.15} direction="left">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/40 to-purple-500/30 blur-2xl scale-110 animate-pulse-glow" />
                    <motion.div className="relative" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-secondary/40 shadow-2xl">
                        <img
                          src={AmitPhoto}
                          alt="Amit Kumar — Founder & CEO of TechieHelp, AI Engineer and Young Entrepreneur from Jodhpur Rajasthan India"
                          className="w-full h-full object-cover object-top"
                          loading="eager"
                          fetchPriority="high"
                          width={320}
                          height={320}
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </motion.div>
                    {/* Floating badge */}
                    <motion.div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 shadow-xl rounded-full px-4 py-2 flex items-center gap-2 border border-secondary/30"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">Youngest Millionaire · Age 20</span>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            PRESS RELEASE / ANNOUNCEMENT
        ════════════════════════════════════════════ */}
        <section id="announcement" aria-label="Official Announcement" className="py-16 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="card-glass p-8 sm:p-10 border-l-4 border-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/30 uppercase tracking-wider">Press Release</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> June 2026 · Jodhpur, Rajasthan</span>
                </div>
                <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium mb-0">
                  <Quote className="w-8 h-8 text-secondary/30 mb-3" />
                  <p>
                    Amit Kumar, Founder &amp; CEO of <strong className="text-secondary">TechieHelp</strong> and <strong className="text-secondary">TechieHelp Institute of AI</strong>, has officially announced that he has become <strong className="text-gray-900 dark:text-white">India's Youngest Millionaire Startup Founder</strong> at age 20. With a total net worth of <strong className="text-secondary">₹1 Crore+</strong>, built through AI solutions, software development, international projects, and a rapidly growing technology company, Amit Kumar is redefining what's possible for a young Indian entrepreneur — all while completing his B.Tech in AI &amp; ML.
                  </p>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            ABOUT AMIT KUMAR
        ════════════════════════════════════════════ */}
        <section id="about" aria-label="About Amit Kumar" className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Who is Amit Kumar?</h2>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: GraduationCap, text: "B.Tech AI & ML Student at JIET Group of Institutions, Jodhpur", color: "bg-blue-500" },
                { icon: Building2, text: "Founder & CEO of TechieHelp — India's Emerging AI & Technology Company", color: "bg-purple-500" },
                { icon: Brain, text: "AI & Machine Learning Enthusiast building intelligent products", color: "bg-cyan-500" },
                { icon: Code, text: "Full Stack Developer with expertise across modern tech stacks", color: "bg-green-500" },
                { icon: Globe, text: "Working with International Clients across USA, UK, and Europe", color: "bg-orange-500" },
                { icon: Users, text: "Leading a Growing Team of engineers, designers, and marketers", color: "bg-pink-500" },
                { icon: Zap, text: "Building AI Products and Educational Platforms for the next generation", color: "bg-yellow-500" },
                { icon: Trophy, text: "Top 2% Global Developer on HackerRank — 5-Star Java & Python", color: "bg-red-500" },
                { icon: Target, text: "Mission: Empower millions of students through innovation and education", color: "bg-indigo-500" },
              ].map(({ icon: Icon, text, color }, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <motion.div whileHover={{ scale: 1.03, y: -4 }} className="card-glass p-5 flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            TIMELINE
        ════════════════════════════════════════════ */}
        <section id="timeline" aria-label="Career Timeline" className="py-16 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Journey</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Amit Kumar's Timeline</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3">From student to India's Youngest Billionaire Startup Founder in 3 years</p>
              </div>
            </FadeIn>
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-secondary/60 via-secondary/20 to-transparent hidden sm:block" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <TimelineItem key={i} year={item.year} event={item.event} idx={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            INCOME SOURCES
        ════════════════════════════════════════════ */}
        <section id="income-sources" aria-label="Income Sources" className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Revenue Streams</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Income Sources</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3">Multiple diversified income streams powering India's youngest billionaire startup</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {incomeSources.map(({ icon: Icon, label, color }, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <motion.div whileHover={{ scale: 1.06, y: -6 }} className="card-glass p-6 text-center group cursor-default">
                    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{label}</div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            ACHIEVEMENTS / COUNTERS
        ════════════════════════════════════════════ */}
        <section ref={statsRef} id="achievements" aria-label="Achievements" className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Milestones</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Achievements & Numbers</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3">Proof of expertise, impact, and global recognition</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {achievements.map(({ icon, value, label, color, suffix }, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <StatCard icon={icon} label={label} value={value} suffix={suffix} color={color} started={statsInView} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FEATURED IN
        ════════════════════════════════════════════ */}
        <section id="featured-in" aria-label="Featured In" className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Presence</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">Featured & Active On</h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredIn.map(({ name, icon: Icon, href, color, bg }, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06, y: -4 }} className={`${bg} rounded-2xl p-6 flex flex-col items-center gap-3 border border-transparent hover:border-secondary/30 transition-all duration-300 group`}>
                    <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className={`font-semibold text-sm ${color}`}>{name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-secondary transition-colors" />
                  </motion.a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            VISION QUOTE
        ════════════════════════════════════════════ */}
        <section id="vision" aria-label="Vision" className="py-20 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-8">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Mission & Vision</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <motion.div whileHover={{ scale: 1.01 }} className="relative card-glass p-10 sm:p-14 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-purple-500/5 pointer-events-none" />
                <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-6" />
                <blockquote className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-6" itemProp="description">
                  "My mission is to build TechieHelp into a globally recognized AI and technology company and{" "}
                  <span className="text-gradient">empower millions of students</span> through education and innovation."
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <img src={AmitPhoto} alt="Amit Kumar" className="w-10 h-10 rounded-full object-cover ring-2 ring-secondary/40" loading="lazy" width={40} height={40} />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white text-sm">Amit Kumar</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Founder &amp; CEO, TechieHelp</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION
        ════════════════════════════════════════════ */}
        <section id="faq" aria-label="Frequently Asked Questions" className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">People Also Ask</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Frequently Asked Questions</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3">Everything you need to know about Amit Kumar and TechieHelp</p>
              </div>
            </FadeIn>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} idx={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            RELATED ARTICLES
        ════════════════════════════════════════════ */}
        <section id="related-articles" aria-label="Related Articles" className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Read More</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Related Articles</h2>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedArticles.map(({ title, desc, href, icon: Icon }, i) => (
                <FadeIn key={i} delay={i * 0.09}>
                  <motion.div whileHover={{ scale: 1.02, y: -4 }}>
                    <Link to={href} className="card-glass p-6 flex gap-4 group block">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-secondary transition-colors leading-tight">{title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                        <div className="flex items-center gap-1 mt-3 text-secondary text-xs font-semibold">
                          Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            INTERNAL LINKS / NAVIGATION
        ════════════════════════════════════════════ */}
        <section id="explore-more" aria-label="Explore More" className="py-14 px-4 sm:px-8 bg-gray-50 dark:bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Explore TechieHelp</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "About Us", to: "/about-us" },
                  { label: "Blog", to: "/blog" },
                  { label: "Projects", to: "/project-portfolio" },
                  { label: "Services", to: "/services" },
                  { label: "Contact", to: "/contacts" },
                  { label: "TechieHelp Home", to: "/" },
                  { label: "Team", to: "/team/amit-kumar-founder-ceo-techiehelp" },
                  { label: "Internships", to: "/careers/training-internships" },
                ].map(({ label, to }) => (
                  <motion.div key={to} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link to={to} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 hover:border-secondary hover:text-secondary transition-all duration-200 bg-white dark:bg-white/5">
                      {label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════════ */}
        <section id="cta" aria-label="Call to Action" className="py-20 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <motion.div className="card-glass p-10 sm:p-14 text-center relative overflow-hidden" whileHover={{ scale: 1.01 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-purple-500/10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                <Rocket className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Work With Amit Kumar &amp; TechieHelp</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Whether you're looking for AI solutions, software development, or technical consulting — TechieHelp delivers premium results for global clients.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.a href="https://techiehelp.in" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                    <Globe className="w-4 h-4" /> Explore Services
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/amit-kumar-686196225/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary">
                    <MessageSquare className="w-4 h-4" /> Get in Touch
                  </motion.a>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Article metadata for EEAT */}
        <div className="sr-only" aria-hidden="false" itemScope itemType="https://schema.org/Article">
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">Amit Kumar</span>
            <span itemProp="jobTitle">Founder & CEO</span>
            <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">TechieHelp</span>
            </span>
          </span>
          <span itemProp="datePublished" content="2026-06-18">June 18, 2026</span>
          <span itemProp="dateModified" content="2026-06-18">June 18, 2026</span>
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">TechieHelp</span>
          </span>
        </div>
      </main>
    </>
  );
};

export default AmitKumarNetWorth;
