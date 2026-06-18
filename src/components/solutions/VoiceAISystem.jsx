import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Phone,
  PhoneCall,
  Volume2,
  CheckCircle,
  ArrowRight,
  Zap,
  Mic,
  Bot,
  MessageSquare,
  TrendingUp,
  Award,
  DollarSign,
  Clock,
  Activity,
  Users,
  Database,
  Calendar,
  AlertCircle,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  Building,
  Headphones,
  Sparkles,
  Play,
  Pause,
  MessageCircle,
  Clock3,
  CheckSquare
} from "lucide-react";

const VoiceAISystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Animated Call Center Hero Simulator States
  const [heroStep, setHeroStep] = useState(0);
  const [isHeroSimRunning, setIsHeroSimRunning] = useState(true);

  const heroSimulationSteps = [
    {
      label: "Incoming Call",
      badge: "Connected",
      badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
      description: "Call received from Rahul Sharma (+91 98765 XXXXX) on main business line.",
      icon: PhoneCall,
      highlight: "ringing"
    },
    {
      label: "AI Answers",
      badge: "Listening",
      badgeColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      description: "AI receptionist answers instantly on the first ring: 'Thank you for calling TechieHelp...'",
      icon: Volume2,
      highlight: "greeting"
    },
    {
      label: "Customer Inquiry",
      badge: "Responding",
      badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
      description: "Rahul asks: 'I want to know more about your services.' AI parses inquiry in 400ms.",
      icon: MessageSquare,
      highlight: "query"
    },
    {
      label: "AI Resolves Issue",
      badge: "Responding",
      badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
      description: "AI explains service & qualifies interest: 'I can schedule a consultation. Does 11:00 AM work?'",
      icon: Bot,
      highlight: "resolve"
    },
    {
      label: "Appointment Booked",
      badge: "Booked",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      description: "Rahul confirms. AI schedules Google Calendar invite & triggers WhatsApp confirmation.",
      icon: Calendar,
      highlight: "booking"
    },
    {
      label: "CRM Updated",
      badge: "Resolved",
      badgeColor: "bg-purple-500/20 text-[#33bbcf] border border-purple-500/30",
      description: "Call transcript, audio recording, and booking status synchronized with HubSpot CRM.",
      icon: Database,
      highlight: "crm"
    }
  ];

  useEffect(() => {
    let interval = null;
    if (isHeroSimRunning) {
      interval = setInterval(() => {
        setHeroStep((prev) => (prev + 1) % heroSimulationSteps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHeroSimRunning]);

  // 2. Interactive ROI Calculator States
  const [monthlyCalls, setMonthlyCalls] = useState(100);
  const [missedRate, setMissedRate] = useState(20);
  const [customerValue, setCustomerValue] = useState(10000);

  const missedCalls = Math.round(monthlyCalls * (missedRate / 100));
  const potentialRevenueLost = missedCalls * customerValue;

  // 3. Interactive Conversation Demo States
  const [demoStep, setDemoStep] = useState(0);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const demoScript = [
    {
      speaker: "AI Receptionist",
      text: "Thank you for calling TechieHelp. Never miss a call again! I am your AI assistant. How can I help you today?",
      audioWave: true,
      avatar: "�"
    },
    {
      speaker: "Customer",
      text: "Hi, I want to know more about your services and how you guys build AI systems.",
      audioWave: false,
      avatar: "�",
      name: "Rahul Sharma"
    },
    {
      speaker: "AI Receptionist",
      text: "Absolutely. We specialize in Custom Voice AI, Lead Engines, and CRM Integrations. May I know your name and preferred contact number to share the details?",
      audioWave: true,
      avatar: "�"
    },
    {
      speaker: "Customer",
      text: "Sure, my name is Rahul Sharma and this is my contact number.",
      audioWave: false,
      avatar: "�",
      name: "Rahul Sharma"
    },
    {
      speaker: "AI Receptionist",
      text: "Thank you Rahul. I can schedule a consultation for tomorrow at 11:00 AM with our head consultant to demonstrate our live systems. Does that work for you?",
      audioWave: true,
      avatar: "�"
    },
    {
      speaker: "Customer",
      text: "Yes, tomorrow at 11:00 AM works perfectly.",
      audioWave: false,
      avatar: "�",
      name: "Rahul Sharma"
    },
    {
      speaker: "AI Receptionist",
      text: "Awesome! I have scheduled that in. I'm sending a calendar invite and WhatsApp confirmation right now. It was a pleasure speaking with you, Rahul!",
      audioWave: true,
      avatar: "�"
    }
  ];

  useEffect(() => {
    let timer = null;
    if (isPlayingDemo) {
      timer = setInterval(() => {
        setDemoStep((prev) => {
          if (prev >= demoScript.length - 1) {
            setIsPlayingDemo(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlayingDemo]);

  // 4. FAQ Accordion States
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Can the AI answer calls automatically?",
      a: "Yes. By configuring a simple call forwarding or integrating with your existing IVR/telephony system, the AI Receptionist can instantly pick up calls on the first ring, 24/7."
    },
    {
      q: "Can it book appointments?",
      a: "Absolutely. The Voice AI is integrated directly with calendar apps like Google Calendar, Outlook, and scheduling services like Calendly or custom databases. It checks real-time slots and registers bookings dynamically."
    },
    {
      q: "Can it work in Hindi and English?",
      a: "Yes. Our engines are natively trained in multilingual conversations. It handles English, Hindi, and Hinglish (mixed Hindi-English) with accurate accent recognition and local phrasing."
    },
    {
      q: "Can it transfer calls to my team?",
      a: "Yes. If a customer has a highly complex requirement or explicitly requests to speak with a human agent, the AI gracefully transfers the call to the specified department or staff number."
    },
    {
      q: "Can it integrate with CRM?",
      a: "Yes. It seamlessly syncs call transcripts, status details, lead profiles, and calendar invites with HubSpot, Salesforce, Zoho, Google Sheets, or any custom API endpoints."
    },
    {
      q: "Can it handle multiple calls simultaneously?",
      a: "Yes. Unlike human employees, the AI can scale instantly to handle hundreds of concurrent calls. Your customers will never hear a busy tone again."
    }
  ];

  // 5. Scroll helper
  const scrollToDemo = () => {
    const element = document.getElementById("conversation-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-[#050510] min-h-screen text-gray-700 dark:text-gray-700 dark:text-gray-300 font-sans selection:bg-red-500/30 pt-28 pb-20 overflow-hidden relative">
      <Helmet>
        <title>Voice AI Receptionist: 24/7 Phone Automation & Scheduling | TechieHelp</title>
        <meta
          name="description"
          content="TechieHelp Voice AI Receptionist answers calls instantly, books appointments, answers FAQs, and updates your CRM 24/7. Stop losing revenue due to missed calls."
        />
      </Helmet>

      {/* Background glow effects */}
      <div className="fixed top-[15%] left-[5%] w-[45%] h-[40%] bg-red-700/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[15%] right-[5%] w-[45%] h-[40%] bg-purple-700/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>Home</span>
          <span className="text-red-500">→</span>
          <span>Services</span>
          <span className="text-red-500">→</span>
          <span className="text-gray-900 dark:text-white font-semibold">Voice AI Receptionist</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20"
            >
              <Volume2 className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-300">
                Brand: TechieHelp • Voice AI Receptionist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter"
            >
              Your Next Employee <br />
              <span className="text-cyan-gradient font-bold">
                Never Sleeps.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
            >
              TechieHelp Voice AI Receptionist answers customer calls instantly, handles inquiries, books appointments, and supports customers around the clock. Never miss a customer call again.
            </motion.p>

            {/* Statistics Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-gray-200 dark:border-white/10 py-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">�</span>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm">24/7 Availability</h4>
                  <p className="text-xs text-gray-500">Always active, day or night</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl"></span>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm">Instant Call Pickup</h4>
                  <p className="text-xs text-gray-500">Zero wait times for callers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">�</span>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm">Reduce Support Costs</h4>
                  <p className="text-xs text-gray-500">Save up to 80% on staffing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">�</span>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm">Automatic Booking</h4>
                  <p className="text-xs text-gray-500">Direct integration with calendar</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get My AI Receptionist <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all"
              >
                Book Free Consultation
              </a>
              <button
                onClick={scrollToDemo}
                className="px-6 py-3.5 rounded-xl font-semibold text-red-400 hover:text-red-300 transition-all flex items-center gap-1.5"
              >
                <Play className="w-4 h-4 fill-red-400/20" /> Listen To Live Demo
              </button>
            </motion.div>
          </div>

          {/* ANIMATED HERO VISUAL: CALL CENTER */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative">
              <div className="absolute -top-3 -left-3 bg-red-600 text-gray-900 dark:text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                Interactive Call Center Visualizer
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-4 mb-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    Call Pipeline Active
                  </span>
                </div>
                <button
                  onClick={() => setIsHeroSimRunning(!isHeroSimRunning)}
                  className="text-xs font-mono bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg px-2.5 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white flex items-center gap-1.5 transition-all"
                >
                  {isHeroSimRunning ? (
                    <>
                      <Pause className="w-3 h-3" /> Stop Auto-Loop
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-red-400" /> Auto-Loop
                    </>
                  )}
                </button>
              </div>

              {/* Status Badges Overlay */}
              <div className="grid grid-cols-5 gap-2 mb-6 text-center text-[10px] font-mono">
                <div
                  className={`py-1.5 rounded-md transition-all duration-300 border ${heroStep === 0
                      ? "bg-green-500/20 text-green-300 border-green-500/50 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 border-transparent"
                    }`}
                >
                  Connected
                </div>
                <div
                  className={`py-1.5 rounded-md transition-all duration-300 border ${heroStep === 1
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 border-transparent"
                    }`}
                >
                  Listening
                </div>
                <div
                  className={`py-1.5 rounded-md transition-all duration-300 border ${heroStep === 2 || heroStep === 3
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 border-transparent"
                    }`}
                >
                  Responding
                </div>
                <div
                  className={`py-1.5 rounded-md transition-all duration-300 border ${heroStep === 5
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 border-transparent"
                    }`}
                >
                  Resolved
                </div>
                <div
                  className={`py-1.5 rounded-md transition-all duration-300 border ${heroStep === 4
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 border-transparent"
                    }`}
                >
                  Booked
                </div>
              </div>

              {/* Steps HUD */}
              <div className="space-y-4">
                {heroSimulationSteps.map((step, idx) => {
                  const isActive = idx === heroStep;
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setHeroStep(idx);
                        setIsHeroSimRunning(false);
                      }}
                      className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${isActive
                          ? "bg-gradient-to-r from-red-950/20 to-purple-950/20 border-red-500/30 shadow-lg"
                          : "bg-white dark:bg-white/[0.01] border-gray-200 dark:border-white/5 opacity-50 hover:opacity-80"
                        }`}
                    >
                      <div className={`p-2.5 rounded-xl transition-all ${isActive ? "bg-red-500/20 text-red-400" : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                        }`}>
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">{step.label}</h4>
                          <span className={`text-[9px] px-2 py-0.5 rounded font-mono ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Flowchart Indicator Line */}
              <div className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 text-center text-xs font-mono flex items-center justify-center gap-1.5">
                <span className="text-gray-500">Pipeline Status:</span>
                <span className="text-red-400 font-bold uppercase">
                  {heroSimulationSteps[heroStep].label} Active
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="mb-24 border-t border-gray-200 dark:border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              The Leak in Your Funnel
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Customers Don't Like Waiting</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Most businesses lose high-value customers simply because nobody answers the phone. Look at what happens in a split second:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Customer Calls</h3>
              <p className="text-xs text-gray-500">Need urgent info, booking request, or service quote.</p>
              <div className="hidden md:block absolute top-12 -right-3 text-red-500 font-bold z-10">→</div>
            </div>

            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-red-400 mb-2">No Answer</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Receptionist busy, call lines full, or out-of-office hours.</p>
              <div className="hidden md:block absolute top-12 -right-3 text-red-500 font-bold z-10">→</div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Calls Competitor</h3>
              <p className="text-xs text-gray-500">Immediately searches next listing and dials competitor.</p>
              <div className="hidden md:block absolute top-12 -right-3 text-red-500 font-bold z-10">→</div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 text-gray-900 dark:text-white flex items-center justify-center font-bold mb-4 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                4
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Lost Revenue</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Average customer lifetime value vanishes instantly.</p>
            </div>
          </div>

          <div className="mt-10 text-center max-w-xl mx-auto">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 inline-block">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ⚠️ <strong className="text-gray-900 dark:text-white">Message:</strong> Most businesses lose customers simply because nobody answers the phone.
              </p>
            </div>
          </div>
        </section>

        {/* BIG ROI SECTION */}
        <section className="mb-24 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
              Calculate Your Opportunity Loss
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              How Much Is A Missed Call Costing You?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Adjust the sliders below to calculate the real value locked inside missed opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ROI Inputs */}
            <div className="space-y-6">
              {/* Slider 1 */}
              <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Monthly Calls Received</span>
                  <span className="text-gray-900 dark:text-white font-bold text-lg">{monthlyCalls} Calls</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>50</span>
                  <span>1000</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Estimated Missed Calls %</span>
                  <span className="text-red-400 font-bold text-lg">{missedRate}% Missed</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={missedRate}
                  onChange={(e) => setMissedRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Average Customer Value (LTV)</span>
                  <span className="text-green-400 font-bold text-lg">₹{customerValue.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>₹1,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>
            </div>

            {/* ROI Outputs */}
            <div className="space-y-6">
              <div className="bg-red-950/20 border border-red-500/20 p-6 rounded-3xl relative overflow-hidden">
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block mb-1">
                  Potential Revenue Lost
                </span>

                {/* Animated counter readout */}
                <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 tracking-tighter">
                  ₹{potentialRevenueLost.toLocaleString("en-IN")}
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Based on losing <span className="text-red-400 font-bold">{missedCalls} calls</span> per month,
                  with an average customer value of ₹{customerValue.toLocaleString("en-IN")}.
                </p>

                {/* Animated Bar Chart representation */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>Missed Opportunity Loss</span>
                    <span>100% Impact</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden border border-gray-200 dark:border-white/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-pink-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${missedRate * 2}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* TechieHelp Voice AI Comparison */}
              <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded">
                  TechieHelp Solution
                </div>

                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-bold">
                  Voice AI Receptionist
                </span>
                <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2 tracking-tighter">
                  Missed Calls = 0
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-base mb-2">Revenue Opportunity Preserved</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  By capturing and handling 100% of calls instantly, you secure the entire potential revenue pool of
                  <span className="text-emerald-400 font-bold"> ₹{potentialRevenueLost.toLocaleString("en-IN")}</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THE AI RECEPTIONIST DOES */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">What the AI Receptionist Does</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our Voice AI Receptionist functions like your best customer support officer. It handles conversations, systems, and logic automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Answer Incoming Calls</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Picks up call lines instantly, greets with natural human tones, and routes inquiries without delays.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Book Appointments</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Directly schedules meetings, consultations, and visits, syncing automatically with calendar links.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Handle FAQs</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Addresses pricing queries, locations, timings, and business parameters using built-in knowledge bases.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Transfer To Human Team</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Smart escalation system forwards calls to human specialists when custom or complex requirements arise.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Capture Lead Information</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Logs name, contact details, requirements, and call feedback automatically to build a robust database.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Send Follow-Up Messages</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Triggers SMS, WhatsApp summaries, or calendar reminders immediately after the call is disconnected.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Update CRM</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Logs transcription records, summary highlights, and task requests directly back into your core CRM tool.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group hover:border-red-500/30">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Multi-Language Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Converses dynamically in English, Hindi, Hinglish, and regional Indian languages based on customer speech.
              </p>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS: FLOWCHART */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
              Operational Sequence
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Observe how the voice agent processes speech signals, interacts, schedules, and alerts your team:
            </p>
          </div>

          {/* SVG flowchart with animated line elements */}
          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-16 flex items-center justify-center overflow-x-auto min-h-[300px]">
            <svg width="860" height="220" viewBox="0 0 860 220" className="min-w-[860px]">
              <defs>
                <linearGradient id="flowRedGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* Connecting animated path lines */}
              <path d="M110 110 H160" fill="none" stroke="url(#flowRedGlow)" strokeWidth="3" strokeDasharray="8,4" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M260 110 H310" fill="none" stroke="url(#flowRedGlow)" strokeWidth="3" strokeDasharray="8,4" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M410 110 H460" fill="none" stroke="url(#flowRedGlow)" strokeWidth="3" strokeDasharray="8,4" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M560 110 H610" fill="none" stroke="url(#flowRedGlow)" strokeWidth="3" strokeDasharray="8,4" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M710 110 H760" fill="none" stroke="url(#flowRedGlow)" strokeWidth="3" strokeDasharray="8,4" className="animate-[marquee_12s_linear_infinite]" />

              {/* Node 1 */}
              <rect x="10" y="75" width="100" height="70" rx="12" fill="#050510" stroke="#ef4444" strokeWidth="2" />
              <text x="60" y="105" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Customer Calls</text>
              <text x="60" y="122" textAnchor="middle" fill="#ef4444" fontSize="8">Inbound Link</text>

              {/* Node 2 */}
              <rect x="160" y="75" width="100" height="70" rx="12" fill="#050510" stroke="#ec4899" strokeWidth="2" />
              <text x="210" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">AI Receptionist</text>
              <text x="210" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Answers</text>
              <text x="210" y="130" textAnchor="middle" fill="#ec4899" fontSize="8">Instant Pickup</text>

              {/* Node 3 */}
              <rect x="310" y="75" width="100" height="70" rx="12" fill="#050510" stroke="#a855f7" strokeWidth="2" />
              <text x="360" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Understands</text>
              <text x="360" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Intent</text>
              <text x="360" y="130" textAnchor="middle" fill="#a855f7" fontSize="8">Speech Analysis</text>

              {/* Node 4 */}
              <rect x="460" y="75" width="100" height="70" rx="12" fill="#050510" stroke="#3b82f6" strokeWidth="2" />
              <text x="510" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Provides</text>
              <text x="510" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Information</text>
              <text x="510" y="130" textAnchor="middle" fill="#3b82f6" fontSize="8">FAQ Lookup</text>

              {/* Node 5 */}
              <rect x="610" y="75" width="100" height="70" rx="12" fill="#050510" stroke="#10b981" strokeWidth="2" />
              <text x="660" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Books</text>
              <text x="660" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Appointment</text>
              <text x="660" y="130" textAnchor="middle" fill="#10b981" fontSize="8">Calendar Sync</text>

              {/* Node 6 */}
              <rect x="760" y="75" width="90" height="70" rx="12" fill="#050510" stroke="#f59e0b" strokeWidth="2" />
              <text x="805" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Updates CRM</text>
              <text x="805" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">& Team</text>
              <text x="805" y="130" textAnchor="middle" fill="#f59e0b" fontSize="8">Alert Triggered</text>
            </svg>
          </div>
        </section>

        {/* LIVE CONVERSATION DEMO */}
        <section id="conversation-demo" className="mb-24 border-t border-gray-200 dark:border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Experience the Latency & Tone
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Live Conversation Demo</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Observe step-by-step how the Voice AI Receptionist responds to Rahul Sharma's inquiries.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative">

            {/* Phone header mockup */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-lg">
                  �
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">TechieHelp Voice AI</h4>
                  <span className="text-[10px] text-green-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" /> Online • Ready to speak
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsPlayingDemo(!isPlayingDemo);
                  }}
                  className="bg-red-600 hover:bg-red-500 text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                >
                  {isPlayingDemo ? (
                    <>
                      <Pause className="w-3.5 h-3.5" /> Pause Script
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-white" /> Play Demo
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setDemoStep(0);
                    setIsPlayingDemo(false);
                  }}
                  className="bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Chat Bubble Interface */}
            <div className="space-y-4 min-h-[300px] max-h-[450px] overflow-y-auto pr-2">
              <AnimatePresence>
                {demoScript.slice(0, demoStep + 1).map((msg, idx) => {
                  const isAI = msg.speaker === "AI Receptionist";
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${isAI ? "justify-start" : "justify-end"}`}
                    >
                      {isAI && (
                        <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm shrink-0">
                          {msg.avatar}
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl relative ${isAI
                            ? "bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-800 dark:text-gray-200 rounded-tl-none"
                            : "bg-red-600 text-gray-900 dark:text-white rounded-tr-none shadow-md shadow-red-900/15"
                          }`}
                      >
                        <div className="flex justify-between items-center mb-1 gap-4">
                          <span className="text-[10px] font-mono font-bold opacity-60">
                            {isAI ? "Voice AI Receptionist" : msg.name}
                          </span>
                          <span className="text-[9px] font-mono opacity-40">Live</span>
                        </div>
                        <p className="text-xs leading-relaxed font-medium">{msg.text}</p>

                        {/* Audio wave animation for voice messages */}
                        {isAI && msg.audioWave && (
                          <div className="mt-3 flex items-center gap-1.5 bg-gray-100 dark:bg-black/30 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/5">
                            <Mic className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                            <div className="flex items-center gap-1 h-4">
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  animate={{ height: [4, Math.random() * 12 + 4, 4] }}
                                  transition={{ duration: 0.6 + Math.random() * 0.4, repeat: Infinity }}
                                  className="w-1 bg-red-500 rounded-full"
                                />
                              ))}
                            </div>
                            <span className="text-[9px] text-gray-500 font-mono ml-auto">Voice Feed</span>
                          </div>
                        )}
                      </div>
                      {!isAI && (
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm shrink-0">
                          {msg.avatar}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Typing indicator */}
              {isPlayingDemo && demoStep < demoScript.length - 1 && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm shrink-0">
                    {demoScript[demoStep + 1].speaker === "AI Receptionist" ? "�" : "�"}
                  </div>
                  <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Step triggers manual */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-gray-500 font-mono">
                Script Progress: {demoStep + 1} / {demoScript.length}
              </span>
              <div className="flex gap-2">
                <button
                  disabled={demoStep === 0}
                  onClick={() => setDemoStep((prev) => Math.max(0, prev - 1))}
                  className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:border-white/20 disabled:opacity-40 text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                >
                  Prev
                </button>
                <button
                  disabled={demoStep === demoScript.length - 1}
                  onClick={() => setDemoStep((prev) => Math.min(demoScript.length - 1, prev + 1))}
                  className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:border-white/20 disabled:opacity-40 text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* COST SAVING COMPARISON */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Financial Analysis
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Cost Saving Comparison</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Compare the costs, limitations, and operational metrics of human staffing versus TechieHelp Voice AI:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card Traditional */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                  Human Staffing
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Traditional Receptionist</h3>
                <div className="text-3xl font-black text-red-400 mb-6">
                  ₹20,000–₹40,000 <span className="text-sm font-medium text-gray-500">/ Monthly</span>
                </div>

                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <span>Works 8 Hours (Misses evening & weekend leads)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <span>Limited Availability (Handles only 1 call line at a time)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <span>Leaves, Sick Days, & National Holidays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <span>Training & HR Management Overhead Required</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Voice AI */}
            <div className="bg-gradient-to-br from-red-950/20 to-purple-950/20 border border-red-500/30 rounded-3xl p-8 backdrop-blur-xl relative flex flex-col justify-between shadow-[0_0_40px_rgba(239,68,68,0.15)]">
              <div className="absolute top-4 right-4 bg-red-600 text-gray-900 dark:text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded">
                Optimized
              </div>

              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block mb-1 font-bold">
                  TechieHelp Systems
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">TechieHelp Voice AI</h3>
                <div className="text-3xl font-black text-emerald-400 mb-6">
                  One-Time Setup <span className="text-sm font-medium text-gray-500">No Monthly Platform Markup</span>
                </div>

                <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-lg">✓</span>
                    <span>Works 24/7 (Answers calls in under 1 second)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-lg">✓</span>
                    <span>Handles Multiple Concurrent Calls Simultaneously</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-lg">✓</span>
                    <span>No Breaks, No Holidays, Never Resigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-lg">✓</span>
                    <span>Zero Training Required Post-Setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHO SHOULD USE THIS */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Market Fit
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Who Should Use This</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Perfect for high-inquiry businesses that require immediate responses to preserve lead value:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                �
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Hospitals & Clinics</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automates appointment bookings, emergency support routing, and answers operating hours FAQs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                �
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Educational Institutes</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Handles admissions FAQs, batch scheduling queries, and logs prospective student contact profiles.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                �
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Real Estate</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pre-qualifies buyers by budget, schedules property visits, and uploads site details directly to CRM.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">

              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Service Businesses</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Perfect for consultants, coaching centers, agencies, and regional service teams seeking 24/7 coverage.
              </p>
            </div>

          </div>
        </section>

        {/* VOICE AI CAPABILITIES */}
        <section className="mb-24 border-t border-gray-200 dark:border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Core Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Voice AI Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore the technological components that deliver a human-grade calling experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">Natural Human Voice</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Uses state-of-the-art TTS voice synthesizers with human-like breathing, inflection, and hesitation tokens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">Multi-Language Conversations</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Understands and responds dynamically in English, Hindi, and regional dialects depending on customer preference.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">Appointment Booking</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Integrates directly with calendars to lock appointments without human intervention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">Lead Qualification</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Pre-screens callers based on budget, intent, and timing before directing to sales reps.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">FAQ Responses</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Answers questions instantly with sub-second latency from structured business training documents.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">CRM Integration</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Instantly synchronizes contact profiles, call summaries, transcripts, and status fields with CRMs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">WhatsApp Follow-Up</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Triggers confirmation messages, contact cards, and scheduling summaries directly to WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">Call Recording</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Stores transcripts and high-quality voice audio links inside CRM pipelines for monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT DASHBOARD */}
        <section className="mb-24 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 to-purple-500/5 -z-10" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-gray-200 dark:border-white/10 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
                Executive Insights
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">Business Impact Dashboard</h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                Live performance analytics across all Voice AI Receptionist agents deployed this month.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl flex items-center gap-2 text-xs text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Stats Update Active
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Calls Answered</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">99.8%</div>
              <span className="text-[9px] text-green-400 font-mono">100% Target Met</span>
            </div>

            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Booked Sessions</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">1,420</div>
              <span className="text-[9px] text-green-400 font-mono">+48% Increase</span>
            </div>

            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Tickets Resolved</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">84%</div>
              <span className="text-[9px] text-gray-500 font-mono">No Human Esc.</span>
            </div>

            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Revenue Saved</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">₹14,20,000</div>
              <span className="text-[9px] text-green-400 font-mono">Opportunity Secured</span>
            </div>

            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Customer CSAT</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">4.9 / 5</div>
              <span className="text-[9px] text-green-400 font-mono">Highly Positive</span>
            </div>

            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/5 p-4 rounded-xl">
              <span className="text-[10px] text-gray-500 uppercase font-mono block">Resolution Rate</span>
              <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">95%</div>
              <span className="text-[9px] text-green-400 font-mono">Sub-1s Answering</span>
            </div>
          </div>

          {/* SVG Performance Chart Mockup */}
          <div className="bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Call Volume & Missed Call Collapse Ratio
              </h4>
              <div className="flex gap-4 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-red-500"><span className="w-2 h-2 bg-red-500 rounded-full" /> Missed Calls (Before AI)</span>
                <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full" /> Saved Opportunities (With AI)</span>
              </div>
            </div>

            <div className="relative h-48 w-full mt-4">
              <svg className="w-full h-full" viewBox="0 0 600 150">
                {/* Horizontal reference grid lines */}
                <line x1="20" y1="20" x2="580" y2="20" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />
                <line x1="20" y1="70" x2="580" y2="70" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />
                <line x1="20" y1="120" x2="580" y2="120" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />

                {/* Left Line: Missed Calls dropping (Red) */}
                <path d="M 50,110 L 150,90 L 250,120 L 350,130 L 450,140 L 550,140" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="110" r="4" fill="#ef4444" />
                <circle cx="150" cy="90" r="4" fill="#ef4444" />
                <circle cx="550" cy="140" r="4" fill="#ef4444" />

                {/* Right Line: Saved Opportunities climbing (Emerald) */}
                <path d="M 50,130 L 150,100 L 250,60 L 350,30 L 450,25 L 550,20" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="130" r="4" fill="#10b981" />
                <circle cx="350" cy="30" r="4" fill="#10b981" />
                <circle cx="550" cy="20" r="4" fill="#10b981" />

                {/* X Axis Date labels */}
                <text x="50" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 1</text>
                <text x="150" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 2</text>
                <text x="250" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 3</text>
                <text x="350" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 4</text>
                <text x="450" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 5</text>
                <text x="550" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">Week 6</text>
              </svg>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION TIMELINE */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">7-Day Deployment Timeline</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Here is how we design, build, train, integrate, and launch your Voice AI Receptionist:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 max-w-6xl mx-auto text-center">
            {/* Day 1 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 1</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Business Discovery</h4>
              <p className="text-[10px] text-gray-500">Analyze calling logs, FAQ structures, and parameters.</p>
            </div>

            {/* Day 2 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 2</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Conversation Design</h4>
              <p className="text-[10px] text-gray-500">Draft greeting phrases, routing paths, and dialog options.</p>
            </div>

            {/* Day 3 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 3</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Voice Training</h4>
              <p className="text-[10px] text-gray-500">Configure TTS models with realistic hesitation and tone pauses.</p>
            </div>

            {/* Day 4 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 4</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">CRM Integration</h4>
              <p className="text-[10px] text-gray-500">Map fields to CRM databases and calendar parameters.</p>
            </div>

            {/* Day 5 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 5</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Testing</h4>
              <p className="text-[10px] text-gray-500">Simulate concurrent calls to test latencies and responses.</p>
            </div>

            {/* Day 6 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl relative overflow-hidden group">
              <span className="text-xs font-bold font-mono text-red-400 block mb-2">Day 6</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Optimization</h4>
              <p className="text-[10px] text-gray-500">Refine language engines for Hinglish/Hindi accents.</p>
            </div>

            {/* Day 7 */}
            <div className="bg-gradient-to-b from-red-950/20 to-purple-950/20 border border-red-500/30 p-5 rounded-2xl relative overflow-hidden group shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <span className="text-xs font-bold font-mono text-emerald-400 block mb-2">Day 7</span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Go Live</h4>
              <p className="text-[10px] text-gray-700 dark:text-gray-700 dark:text-gray-300">Link AI Receptionist to your main phone numbers.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="mb-24 max-w-4xl mx-auto bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center md:text-left space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
                Proof of Performance
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Healthcare Clinic</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                See how a regional healthcare center eliminated patient waiting time and expanded calendar bookings.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-3 gap-4 text-center">
              <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                <span className="text-[10px] uppercase font-mono text-gray-500 block">Before</span>
                <div className="text-xl font-bold text-red-400 mt-2">32 Missed Calls</div>
                <span className="text-[9px] text-gray-500 block mt-1">Per Week (Average)</span>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
                <span className="text-[10px] uppercase font-mono text-emerald-400 block">After</span>
                <div className="text-xl font-bold text-emerald-400 mt-2">0 Missed Calls</div>
                <span className="text-[9px] text-emerald-400 block mt-1">100% Handled</span>
              </div>

              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 p-4 rounded-xl flex flex-col justify-center">
                <span className="text-[10px] uppercase font-mono text-[#33bbcf] block font-bold">Result</span>
                <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">48% More Bookings</div>
                <div className="text-[9px] text-gray-500 font-medium">2X Faster Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TECHIEHELP */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Our Differentiators
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Why TechieHelp</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We specialize in custom integration pipelines, voice models, and local language frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Diff 1 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <span className="text-2xl block mb-3">�️</span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Custom Voice Experiences</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tailor accents, speech speeds, greetings, and call scripts to perfectly align with your brand tone.
              </p>
            </div>

            {/* Diff 2 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <span className="text-2xl block mb-3"></span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Business-Specific Training</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trained specifically on your product documentation, service logs, and scheduling workflows.
              </p>
            </div>

            {/* Diff 3 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <span className="text-2xl block mb-3"></span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Fast Deployment</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our templates and deployment integrations get your voice assistant running within 7 business days.
              </p>
            </div>

            {/* Diff 4 */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <span className="text-2xl block mb-3">�</span>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Full Ownership</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                No monthly platform markups or recurring management overhead. You own the build.
              </p>
            </div>

          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <h5 className="text-gray-900 dark:text-white font-bold text-xs">24/7 Availability</h5>
                <p className="text-[10px] text-gray-500">Always-on customer service</p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-center gap-3">
              <span className="text-2xl">��</span>
              <div>
                <h5 className="text-gray-900 dark:text-white font-bold text-xs">Indian Support Team</h5>
                <p className="text-[10px] text-gray-500">Optimized multilingual training</p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-center gap-3">
              <span className="text-2xl">�️</span>
              <div>
                <h5 className="text-gray-900 dark:text-white font-bold text-xs">Multi-Language Support</h5>
                <p className="text-[10px] text-gray-500">Supports Hindi & English natively</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mb-24 border-t border-gray-200 dark:border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Straightforward Value
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Pricing Plans</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              One-time build fees with full ownership of the conversational pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">

            {/* Basic Plan */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl relative flex flex-col justify-between hover:border-red-500/20 transition-all">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Receptionist</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Inbound Support Only</p>
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-8">₹30,000</div>

                <ul className="space-y-4 text-xs text-gray-600 dark:text-gray-400 mb-8 border-t border-gray-200 dark:border-white/5 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Inbound Call Handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Appointment Booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>FAQ Responses Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Basic Call Logs & Summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Deployment Support Included</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-center rounded-xl text-xs transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Advanced Plan */}
            <div className="bg-gradient-to-br from-red-950/20 to-purple-950/20 border border-red-500/40 p-8 rounded-3xl relative flex flex-col justify-between shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:border-red-500/60 transition-all">
              <div className="absolute top-4 right-4 bg-red-600 text-gray-900 dark:text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md">
                Popular
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Advanced Voice AI</h3>
                <p className="text-xs text-red-400 mb-6 uppercase tracking-wider">Inbound & Outbound Calling</p>
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-8">₹50,000</div>

                <ul className="space-y-4 text-xs text-gray-700 dark:text-gray-700 dark:text-gray-300 mb-8 border-t border-white/15 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Voice Cloning (Natural Human Tone)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Inbound & Outbound Call Capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Full Calendar & Scheduling Sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>CRM Synchronization (Hubspot/Salesforce)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Native Hindi & English (Multilingual)</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-gray-900 dark:text-white font-bold text-center rounded-xl text-xs transition-all shadow-lg"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl relative flex flex-col justify-between hover:border-red-500/20 transition-all">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Voice Platform</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Database Query Routing</p>
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-8">Custom</div>

                <ul className="space-y-4 text-xs text-gray-600 dark:text-gray-400 mb-8 border-t border-gray-200 dark:border-white/5 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Unlimited Concurrent Call Capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Custom Voice Branding & Accents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Direct Database Integrations (Live Lookup)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Dedicated Technical Support Channel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Custom SLA & Voice Channel Setup</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-center rounded-xl text-xs transition-all"
              >
                Contact Sales
              </a>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
              Answering Your Doubts
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Quick answers about routing, training, accents, scheduling capabilities, and ownership.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-900 dark:text-white hover:bg-white dark:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm md:text-base pr-4">{faq.q}</span>
                    <span className="shrink-0 text-red-400 transition-transform duration-300">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-red-950/30 to-purple-950/30 border border-red-500/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-30 -z-10 animate-pulse" />

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
            Stop Missing Revenue Because Of Missed Calls.
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy your AI Receptionist in 7 days and ensure every customer receives instant attention.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-950 font-bold px-8 py-4 rounded-xl text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Get My AI Receptionist <ArrowRight className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-red-500/50 font-semibold px-8 py-4 rounded-xl text-sm transition-all"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/917073130165?text=Hello%20TechieHelp%20Team,%20I%20would%20like%20to%20request%20a%20custom%20proposal%20for%20the%20Voice%20AI%20Receptionist."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-red-500/50 font-semibold px-8 py-4 rounded-xl text-sm transition-all"
            >
              Request Custom Proposal
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VoiceAISystem;
