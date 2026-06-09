import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
  Clock,
  Activity,
  Users,
  Database,
  Calendar,
  MessageSquare,
  Volume2,
  AlertCircle,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  Award,
  TrendingUp,
  Building,
  Headphones,
  Sparkles,
  DollarSign,
  Briefcase,
  Flame,
  ArrowRightLeft
} from "lucide-react";

const AICallingAgents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Live AI Call Center Simulator States
  const [dialerState, setDialerState] = useState("Idle"); // Idle, Dialing, Connected, Qualified, Booked, Completed
  const [dialerStep, setDialerStep] = useState(0);
  const [isDialerRunning, setIsDialerRunning] = useState(true);
  const [activeCallIdx, setActiveCallIdx] = useState(0);

  const mockCalls = [
    { name: "Rahul Sharma", company: "JIET Jodhpur", status: "Hot 🔥", phone: "+91 98765 XXXXX" },
    { name: "Neha Vyas", company: "Jaipur Academy", status: "Warm 🟡", phone: "+91 94140 XXXXX" },
    { name: "Amit Patel", company: "Rai Real Estate", status: "Hot 🔥", phone: "+91 88901 XXXXX" }
  ];

  const dialerSteps = [
    { label: "New Lead Detected", status: "Dialing", desc: "Form filled on TechieHelp.in - instant trigger" },
    { label: "AI Agent Triggered", status: "Dialing", desc: "Voice channel initiated & dialing number..." },
    { label: "Call Connected", status: "Connected", desc: "User answered. AI speaking with sub-1s latency" },
    { label: "Lead Qualified", status: "Qualified", desc: "AI analyzed budget, timeline & requirements (BANT)" },
    { label: "Meeting Scheduled", status: "Booked", desc: "AI offered open slots & booked Google Calendar" },
    { label: "CRM & Team Updated", status: "Completed", desc: "Call recording & analysis pushed to CRM; team notified" }
  ];

  // Auto-progress Call Dialer Simulator
  useEffect(() => {
    let timer = null;
    if (isDialerRunning) {
      timer = setInterval(() => {
        setDialerStep((prevStep) => {
          if (prevStep >= dialerSteps.length - 1) {
            setActiveCallIdx((prevIdx) => (prevIdx + 1) % mockCalls.length);
            setDialerState("Idle");
            return 0;
          }
          const nextStep = prevStep + 1;
          setDialerState(dialerSteps[nextStep].status);
          return nextStep;
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isDialerRunning, mockCalls.length]);

  // 2. Live Conversation Demo Simulator
  const [convIndex, setConvIndex] = useState(0);
  const [isConvPlaying, setIsConvPlaying] = useState(true);

  const conversationScript = [
    { speaker: "agent", text: "Hello Rahul! This is Priya calling from TechieHelp. I noticed you just requested details about our AI automation services. Am I speaking with Rahul?" },
    { speaker: "customer", text: "Yes, this is Rahul. Wow, that was fast, I literally just submitted the form a minute ago." },
    { speaker: "agent", text: "Yes, Rahul! Our AI Calling Agents respond within 60 seconds to ensure you get immediate help. I'd love to ask a quick couple of questions to see how we can assist you. What services are you looking to automate?" },
    { speaker: "customer", text: "We run a coaching institute in Jodhpur. We get around 40-50 student inquiries every day on our website and social ads, but our staff takes hours to call them back." },
    { speaker: "agent", text: "I completely understand. Slow response times can cause students to look elsewhere. TechieHelp can automate this—our voice AI calls every new inquiry instantly, qualifies their course interest, budget, and batch timings, and books career counseling calls on your staff's calendars. How soon are you hoping to set this up?" },
    { speaker: "customer", text: "Honestly, as soon as possible. Next week would be great if it's doable." },
    { speaker: "agent", text: "That is perfect! We can deploy a tailored voice agent for you in just 7 days. I would recommend scheduling a quick 10-minute strategy call with Amit, our head consultant, to showcase a live dashboard and lock in your custom script. Would tomorrow at 11:00 AM work for you?" },
    { speaker: "customer", text: "Yeah, 11:00 AM works for me." },
    { speaker: "agent", text: "Fantastic, Rahul! I've booked tomorrow at 11:00 AM on your calendar. I'm also sending the confirmation link and calendar invite on WhatsApp now. It was great speaking with you!" },
    { speaker: "customer", text: "Perfect. Thank you, Priya!" }
  ];

  // Auto-progress Conversation Script
  useEffect(() => {
    let timer = null;
    if (isConvPlaying) {
      timer = setInterval(() => {
        setConvIndex((prevIdx) => (prevIdx + 1) % conversationScript.length);
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isConvPlaying, conversationScript.length]);

  // 3. Why Speed Matters Graph State (Active hover data point)
  const [hoveredSpeedPoint, setHoveredSpeedPoint] = useState(null);
  const speedGraphPoints = [
    { label: "1 Minute", rate: "92%", desc: "Highest conversion - lead is hot and engaged", color: "from-green-500 to-emerald-400" },
    { label: "5 Minutes", rate: "46%", desc: "Significant drop - attention begins shifting", color: "from-teal-500 to-green-400" },
    { label: "30 Minutes", rate: "18%", desc: "Very low conversion - lead starts looking at competitors", color: "from-yellow-500 to-amber-400" },
    { label: "1 Hour+", rate: "4%", desc: "Lost opportunity - lead has cooled off completely", color: "from-red-500 to-orange-400" }
  ];

  // 4. FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqs = [
    {
      q: "How realistic are the voices?",
      a: "Extremely realistic. Our conversational engines feature sub-1-second latency, natural breathing pauses, dynamic inflection, and warm, human-sounding tones. Most leads do not realize they are talking to an AI until the agent tells them."
    },
    {
      q: "Can AI schedule meetings?",
      a: "Yes. The AI calling agent integrates directly with Google Calendar, Outlook, Calendly, or Cal.com. During the call, the AI checks real-time availability, offers matching slots to the client, books the chosen meeting, and triggers automated email/WhatsApp calendar invites."
    },
    {
      q: "Can it integrate with CRM?",
      a: "Absolutely. Our agents connect to HubSpot, Salesforce, Zoho, Google Sheets, or custom webhook endpoints. As soon as the call finishes, the full call recording, transcript, BANT qualification status, and call summaries are synced instantly."
    },
    {
      q: "Can it call automatically?",
      a: "Yes. You can trigger automated outbound calls via API or CRM triggers. The moment a new lead fills out a form on your website, Facebook Ads, or landing pages, the AI agent is triggered and dials the prospect within 60 seconds."
    },
    {
      q: "Can it handle inbound calls?",
      a: "Yes. Our calling system handles both inbound and outbound traffic. You can route your main business phone line or specific advertising numbers to the AI agent to handle inquiries 24/7."
    },
    {
      q: "Can it work in multiple languages?",
      a: "Yes. TechieHelp AI Calling Agents support English, Hindi, Hinglish, Spanish, German, French, and regional Indian languages, matching the client's spoken language dynamically."
    }
  ];

  // 5. Industry Selector State
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const industries = [
    { title: "Real Estate", outcome: "3.2X increase in site visits booked", desc: "Instant follow-ups on real estate portals (99acres, MagicBricks, FB ads). AI filters by budget, location, and BHK preferences, booking site visits immediately on agent calendars." },
    { title: "Coaching Institutes", outcome: "2.7X higher student enrollment", desc: "Calls student inquiries instantly on course sign-ups. AI qualifies based on course interest, batch timing, and budget, routing hot prospects to your counseling staff." },
    { title: "Education", outcome: "45% reduction in admissions team workload", desc: "Automates initial filtering of admissions inquiries. Checks eligibility, entrance exam status, and marks before scheduling admissions interviews." },
    { title: "Agencies", outcome: "2.1X increase in booked strategy sessions", desc: "Qualifies inbound agency inquiries for marketing, development, or design, routing only enterprise prospects to account executives." },
    { title: "Healthcare", outcome: "85% reduction in appointment no-shows", desc: "Handles outbound appointment reminders and confirmation calls, allowing patients to reschedule or cancel appointments using voice keys or speech." },
    { title: "Consulting", outcome: "38% growth in premium consultation sales", desc: "Outbound qualification for high-ticket consulting leads. Filters out low-budget leads and books strategic assessments automatically." },
    { title: "E-Commerce", outcome: "18% recovery on abandoned checkouts", desc: "Calls buyers who abandoned high-value shopping carts within 15 minutes, offering assistance, answering FAQs, and providing exclusive discount codes." },
    { title: "Startups", outcome: "Scalable client acquisition 24/7", desc: "Replaces manual outbound cold-calling teams with scalable AI agents that dial lists, pitch value, qualify interests, and book demos." }
  ];

  return (
    <div className="bg-[#030014] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30 pt-28 pb-20 overflow-hidden relative">
      <Helmet>
        <title>AI Calling Agents: 24/7 Automated Phone Sales & CRM | TechieHelp</title>
        <meta name="description" content="Hire AI phone employees that work 24/7. TechieHelp builds custom conversational voice AI agents that call leads in under 60 seconds, qualify prospects, and book calendar meetings." />
      </Helmet>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-pink-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <span>Home</span>
          <span className="text-purple-500">→</span>
          <span>Services</span>
          <span className="text-purple-500">→</span>
          <span className="text-white font-semibold">AI Calling Agents</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider"
            >
              <Volume2 className="w-4 h-4 animate-pulse" />
              <span>Your AI Sales Team That Never Sleeps</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Every Lead Gets A Call <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Within 60 Seconds.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              TechieHelp AI Calling Agents instantly call new leads, answer questions, qualify prospects, overcome objections, and schedule meetings automatically. Replace missed calls, slow follow-ups, and repetitive conversations with 24/7 voice agents.
            </motion.p>

            {/* Statistics Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-white/5 py-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Calls Within 60 Seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Human-Like Voice Conversations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Automatic Meeting Booking</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-xl shadow-purple-900/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#live-demo"
                className="px-6 py-3.5 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500 transition-all flex items-center gap-2"
              >
                Listen To Live AI Calls
              </a>
              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-xl font-semibold text-gray-400 hover:text-white transition-all"
              >
                Get Custom Proposal
              </a>
            </motion.div>
          </div>

          {/* LIVE AI CALL CENTER PREVIEW SIMULATOR */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-green-400">Live Call Center Simulator</span>
                </div>
                <button
                  onClick={() => setIsDialerRunning(!isDialerRunning)}
                  className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded px-2.5 py-1 text-gray-400 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  {isDialerRunning ? (
                    <>
                      <Pause className="w-3 h-3" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-green-400" /> Resume
                    </>
                  )}
                </button>
              </div>

              {/* Dialer HUD Display */}
              <div className="bg-black/40 border border-white/5 rounded-2xl p-5 mb-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Current Lead</span>
                    <span className="text-base font-bold text-white">{mockCalls[activeCallIdx].name}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold ${
                    dialerState === "Dialing" ? "bg-blue-500/20 text-blue-400 animate-pulse" :
                    dialerState === "Connected" ? "bg-green-500/20 text-green-400" :
                    dialerState === "Qualified" ? "bg-purple-500/20 text-purple-400" :
                    dialerState === "Booked" ? "bg-yellow-500/20 text-yellow-400 font-bold" :
                    dialerState === "Completed" ? "bg-pink-500/20 text-pink-400" :
                    "bg-white/5 text-gray-400"
                  }`}>
                    {dialerState === "Idle" ? "Ready" : dialerState}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Company</span>
                    <span className="text-gray-300 font-semibold">{mockCalls[activeCallIdx].company}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Phone</span>
                    <span className="text-gray-300 font-mono">{mockCalls[activeCallIdx].phone}</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2">
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-green-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((dialerStep + 1) / dialerSteps.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {/* Progress Flow Steps */}
              <div className="space-y-3">
                {dialerSteps.map((step, idx) => {
                  const isActive = idx === dialerStep;
                  const isCompleted = idx < dialerStep;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-300 border ${
                        isActive ? "bg-purple-500/10 border-purple-500/30" : "bg-transparent border-transparent"
                      }`}
                    >
                      <div className="mt-0.5">
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : isActive ? (
                          <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-white/10" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <p className={`text-xs font-semibold ${isActive ? "text-white" : "text-gray-500"}`}>
                            {step.label}
                          </p>
                          {isActive && (
                            <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded uppercase">
                              Active
                            </span>
                          )}
                        </div>
                        <p className={`text-[10px] mt-0.5 ${isActive ? "text-purple-300" : "text-gray-600"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">The Cost of Waiting</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Your Sales Team Can't Be Available 24/7</h2>
            <p className="text-gray-400 text-lg">
              Most businesses lose customers because nobody calls back fast enough. Look at how leads drift away in a typical manual loop:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            
            {/* Journey Card 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4 border border-blue-500/20">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lead Arrives</h3>
              <p className="text-sm text-gray-500">Prospect submits an inquiry on your site or social page.</p>
              <div className="hidden lg:block absolute top-12 right-[-20px] z-20 text-gray-600 font-bold">→</div>
            </div>

            {/* Journey Card 2 */}
            <div className="bg-red-500/[0.02] border border-red-500/10 rounded-2xl p-6 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold mb-4 border border-red-500/20">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Immediate Follow-Up</h3>
              <p className="text-sm text-gray-500">Sales representatives are busy, asleep, or out of office.</p>
              <div className="hidden lg:block absolute top-12 right-[-20px] z-20 text-gray-600 font-bold">→</div>
            </div>

            {/* Journey Card 3 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-4 border border-amber-500/20">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Customer Loses Interest</h3>
              <p className="text-sm text-gray-500">The first 5 minutes pass. The buyer's impulse cools off.</p>
              <div className="hidden lg:block absolute top-12 right-[-20px] z-20 text-gray-600 font-bold">→</div>
            </div>

            {/* Journey Card 4 */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Competitor Wins</h3>
              <p className="text-sm text-gray-400">Another provider responds first and locks in the deal.</p>
            </div>
          </div>
        </section>

        {/* WHY SPEED MATTERS GRAPH SECTION */}
        <section className="mb-28 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">The First Call Wins</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why Callback Speed Determines Revenue
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Calling a lead within 60 seconds raises contact rates by **over 390%**. After just 5 minutes, conversion rates collapse. AI calling ensures you are first to call, every single time.
              </p>
              <div className="space-y-4 pt-2">
                {speedGraphPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredSpeedPoint(idx)}
                    onMouseLeave={() => setHoveredSpeedPoint(null)}
                    className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredSpeedPoint === idx ? "bg-white/5 border-purple-500/40" : "bg-transparent border-white/5"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-white">{pt.label}</span>
                      <span className="text-xs font-bold text-purple-400">{pt.rate} Call Conversion Ratio</span>
                    </div>
                    {hoveredSpeedPoint === idx && (
                      <p className="text-[10px] text-gray-400 mt-1.5 transition-all">{pt.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Graph Drawing (SVG) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="border border-white/5 bg-black/40 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-gray-500">Lead Conversion Rate vs Callback Delay</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-mono">Live Stat</span>
                </div>
                
                {/* SVG Graph */}
                <div className="relative h-64 w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 220">
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#b91c1c" />
                      </linearGradient>
                    </defs>

                    {/* Y Axis Grid Lines */}
                    <line x1="40" y1="20" x2="480" y2="20" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                    <line x1="40" y1="70" x2="480" y2="70" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                    <line x1="40" y1="120" x2="480" y2="120" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                    <line x1="40" y1="170" x2="480" y2="170" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />

                    {/* X Axis Base Line */}
                    <line x1="40" y1="170" x2="480" y2="170" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />

                    {/* Bars representing values */}
                    {/* Bar 1: 1 Min (92%) -> Height: 150px */}
                    <rect
                      x="70"
                      y={20}
                      width="55"
                      height="150"
                      rx="6"
                      fill="url(#barGrad)"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setHoveredSpeedPoint(0)}
                      onMouseLeave={() => setHoveredSpeedPoint(null)}
                    />
                    <text x="97" y="15" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">92%</text>

                    {/* Bar 2: 5 Mins (46%) -> Height: 75px */}
                    <rect
                      x="180"
                      y={95}
                      width="55"
                      height="75"
                      rx="6"
                      fill="url(#barGrad)"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setHoveredSpeedPoint(1)}
                      onMouseLeave={() => setHoveredSpeedPoint(null)}
                    />
                    <text x="207" y="90" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold">46%</text>

                    {/* Bar 3: 30 Mins (18%) -> Height: 30px */}
                    <rect
                      x="290"
                      y={140}
                      width="55"
                      height="30"
                      rx="6"
                      fill="url(#dropGrad)"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setHoveredSpeedPoint(2)}
                      onMouseLeave={() => setHoveredSpeedPoint(null)}
                    />
                    <text x="317" y="135" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">18%</text>

                    {/* Bar 4: 1 Hr+ (4%) -> Height: 8px */}
                    <rect
                      x="400"
                      y={162}
                      width="55"
                      height="8"
                      rx="2"
                      fill="url(#dropGrad)"
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      onMouseEnter={() => setHoveredSpeedPoint(3)}
                      onMouseLeave={() => setHoveredSpeedPoint(null)}
                    />
                    <text x="427" y="157" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">4%</text>

                    {/* Labels under the graph */}
                    <text x="97" y="192" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">1 Minute</text>
                    <text x="207" y="192" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">5 Mins</text>
                    <text x="317" y="192" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">30 Mins</text>
                    <text x="427" y="192" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">1 Hour+</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW AI CALLING WORKS FLOWCHART */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Automated Flowchart</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">How AI Voice Automation Connects</h2>
            <p className="text-gray-400 text-lg">
              Trace the end-to-end pathway from lead arrival to automated calling, objection qualifying, calendar routing, and direct notifications:
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-16 flex items-center justify-center overflow-x-auto min-h-[300px]">
            <svg width="900" height="220" viewBox="0 0 900 220" className="min-w-[900px]">
              <defs>
                <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Connecting Paths with animation */}
              <path d="M120 110 H180" fill="none" stroke="url(#flowGlow)" strokeWidth="3" strokeDasharray="10,5" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M280 110 H340" fill="none" stroke="url(#flowGlow)" strokeWidth="3" strokeDasharray="10,5" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M440 110 H500" fill="none" stroke="url(#flowGlow)" strokeWidth="3" strokeDasharray="10,5" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M600 110 H660" fill="none" stroke="url(#flowGlow)" strokeWidth="3" strokeDasharray="10,5" className="animate-[marquee_12s_linear_infinite]" />
              <path d="M760 110 H800" fill="none" stroke="url(#flowGlow)" strokeWidth="3" strokeDasharray="10,5" className="animate-[marquee_12s_linear_infinite]" />

              {/* Node 1: New Lead */}
              <rect x="20" y="75" width="100" height="70" rx="12" fill="#0c0a1c" stroke="#a855f7" strokeWidth="2" />
              <text x="70" y="105" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">New Lead</text>
              <text x="70" y="125" textAnchor="middle" fill="#a855f7" fontSize="9" fontStyle="italic">Form / Ad Submit</text>

              {/* Node 2: AI Triggered */}
              <rect x="180" y="75" width="100" height="70" rx="12" fill="#0c0a1c" stroke="#ec4899" strokeWidth="2" />
              <text x="230" y="105" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">AI Agent Setup</text>
              <text x="230" y="125" textAnchor="middle" fill="#ec4899" fontSize="9" fontStyle="italic">Dialer Instantiated</text>

              {/* Node 3: Voice Call */}
              <rect x="340" y="75" width="100" height="70" rx="12" fill="#0c0a1c" stroke="#3b82f6" strokeWidth="2" />
              <text x="390" y="100" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Phone Call</text>
              <text x="390" y="118" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Sub-1s latency</text>
              <text x="390" y="132" textAnchor="middle" fill="#9ca3af" fontSize="8">Human-Like Voice</text>

              {/* Node 4: Qualification & Booking */}
              <rect x="500" y="75" width="100" height="70" rx="12" fill="#0c0a1c" stroke="#10b981" strokeWidth="2" />
              <text x="550" y="100" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Qualify & Book</text>
              <text x="550" y="118" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">Meeting Set</text>
              <text x="550" y="132" textAnchor="middle" fill="#9ca3af" fontSize="8">BANT Checked</text>

              {/* Node 5: CRM Updated */}
              <rect x="660" y="75" width="100" height="70" rx="12" fill="#0c0a1c" stroke="#eab308" strokeWidth="2" />
              <text x="710" y="105" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">CRM Updated</text>
              <text x="710" y="125" textAnchor="middle" fill="#eab308" fontSize="9" fontStyle="italic">Transcripts & Status</text>

              {/* Node 6: Team Alert */}
              <circle cx="840" cy="110" r="30" fill="#0c0a1c" stroke="#ef4444" strokeWidth="2" />
              <text x="840" y="108" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Team</text>
              <text x="840" y="122" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Notified</text>
            </svg>
          </div>
        </section>

        {/* WHAT THE AI AGENT CAN DO */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">What TechieHelp AI Agents Can Do</h2>
            <p className="text-gray-400 text-lg">
              Engineered for versatility, our AI phone employees take over repetitive telecalling, follow-ups, and calendar scheduling duties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Outbound Lead Qualification</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Automatically dial website signups, quiz them on their requirements, analyze timeline/budget, and qualify.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Inbound Call Handling</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connect your business line to answer customer questions instantly, schedule bookings, and route emergencies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Appointment Booking</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lookup calendars in real time, suggest available times, and lock meetings in your team's schedule.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Customer Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Provide instant resolution for standard customer queries like tracking, billing, or access issues.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">FAQ Handling</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Trained on your business knowledge documents to respond accurately to product, policy, and services FAQs.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Follow-Up Calls</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Re-engage cold leads, call clients before major events, or follow up on unpaid invoices and agreements.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lead Scoring</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Score leads dynamically based on call replies, separating high-intent buyers from cold inquiries.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CRM Updates</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Write call transcripts, summaries, action points, and call recording files directly back to HubSpot/Salesforce.
              </p>
            </div>

            {/* Card 9 */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-purple-500/30 p-6 rounded-2xl hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Calendar Scheduling</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Book meetings across team member slots based on automated round-robin distribution or matching criteria.
              </p>
            </div>
          </div>
        </section>

        {/* LIVE CONVERSATION DEMO */}
        <section id="live-demo" className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Live Script</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Listen to AI Calling in Real Time</h2>
            <p className="text-gray-400 text-lg">
              Read how a typical conversation unfolds. Our AI handles user concerns, queries and closes appointment booking smoothly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            {/* Conversation player header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Priya (TechieHelp Voice Engine)</span>
                  <span className="text-[10px] text-purple-300 font-mono">Status: Connected to Lead</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setConvIndex(0);
                  }}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs rounded text-gray-400 hover:text-white transition-all"
                >
                  Restart
                </button>
                <button
                  onClick={() => setIsConvPlaying(!isConvPlaying)}
                  className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs flex items-center gap-1.5 shadow-lg transition-all"
                >
                  {isConvPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isConvPlaying ? "Pause Audio" : "Play Audio"}
                </button>
              </div>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
              <AnimatePresence>
                {conversationScript.slice(0, convIndex + 1).map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.speaker === "agent" ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-4 text-sm ${
                      msg.speaker === "agent"
                        ? "bg-purple-600/10 text-purple-100 border border-purple-500/20 rounded-tl-none"
                        : "bg-white/5 text-gray-200 border border-white/5 rounded-tr-none"
                    }`}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-purple-400">
                          {msg.speaker === "agent" ? "AI Employee (Priya)" : "Rahul (Customer)"}
                        </span>
                        <span className="text-[9px] text-gray-500">Live Transcript</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Soundwave animation */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Voice Activity Indicator</span>
              <div className="flex gap-1 h-5 items-center">
                <span className={`w-0.5 bg-purple-500 rounded ${isConvPlaying ? "animate-[bounce_0.8s_infinite]" : "h-1"}`} />
                <span className={`w-0.5 bg-pink-500 rounded h-3 ${isConvPlaying ? "animate-[bounce_1.2s_infinite]" : "h-1"}`} />
                <span className={`w-0.5 bg-blue-500 rounded h-4 ${isConvPlaying ? "animate-[bounce_0.9s_infinite]" : "h-1"}`} />
                <span className={`w-0.5 bg-purple-500 rounded h-2 ${isConvPlaying ? "animate-[bounce_1s_infinite]" : "h-1"}`} />
                <span className={`w-0.5 bg-pink-500 rounded h-5 ${isConvPlaying ? "animate-[bounce_0.7s_infinite]" : "h-1"}`} />
              </div>
            </div>
          </div>
        </section>

        {/* AI QUALIFICATION ENGINE */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Qualification Rules</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">How the AI Qualifies Leads</h2>
            <p className="text-gray-400 text-lg">
              During the call, the AI analyzes responses based on your BANT filters to score and classify prospects instantly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hot Lead */}
            <div className="bg-gradient-to-b from-red-500/[0.08] to-transparent border border-red-500/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-red-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                <Flame className="w-4 h-4 animate-pulse" /> Hot Lead
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 pt-4">🔥 Hot Leads</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <div>
                    <strong className="text-white">Ready To Buy:</strong> Timelines are immediate or within 1-2 weeks.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <div>
                    <strong className="text-white">Budget Available:</strong> Fits target client thresholds comfortably.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  <div>
                    <strong className="text-white">Meeting Booked:</strong> Scheduled onto sales team calendars.
                  </div>
                </li>
              </ul>
            </div>

            {/* Warm Lead */}
            <div className="bg-gradient-to-b from-yellow-500/[0.08] to-transparent border border-yellow-500/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-yellow-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400" /> Warm Lead
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 pt-4">🟡 Warm Leads</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <strong className="text-white">Interested:</strong> Positive sentiment, fits business profiles.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <strong className="text-white">Needs More Info:</strong> Asks product questions or handles objections.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                  <div>
                    <strong className="text-white">Follow-Up scheduled:</strong> Saved to CRM for automated WhatsApp sequences.
                  </div>
                </li>
              </ul>
            </div>

            {/* Cold Lead */}
            <div className="bg-gradient-to-b from-blue-500/[0.08] to-transparent border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Cold Lead
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 pt-4">🔵 Cold Leads</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <strong className="text-white">Research Phase:</strong> Just checking options, no short-term intent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <strong className="text-white">Low Budget:</strong> Under minimum entry qualification thresholds.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <strong className="text-white">Future Opportunity:</strong> Logged into CRM for nurture mailing.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT SECTION */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Business Outcomes</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Performance Analytics & Business Impact</h2>
            <p className="text-gray-400 text-lg">
              Unlock scaling capacity. AI phone agents deliver premium call metrics, automate labor, and expand sales opportunities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Calls Made Automatically</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">10,000+ / Day</h3>
              <p className="text-sm text-gray-400">Scale call dials instantly during lead spikes without hiring temporary workers.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">01</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Lead Qualification Rate</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">94.8% Accuracy</h3>
              <p className="text-sm text-gray-400">Consistent conversational quality analyzing BANT data filters on every dial.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">02</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Meetings Booked Automatically</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">32% Increase</h3>
              <p className="text-sm text-gray-400">AI locks calendar bookings on the phone while lead engagement is highest.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">03</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Response Speed</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">&lt; 60 Seconds</h3>
              <p className="text-sm text-gray-400">Beating human speed restrictions by calling instantly, 24 hours a day.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">04</div>
            </div>

            {/* Stat 5 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Manual Work Saved</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">80+ Hours / Mo</h3>
              <p className="text-sm text-gray-400">Releases team members from cold calling, repetitive dialing, and sorting cold leads.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">05</div>
            </div>

            {/* Stat 6 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Revenue Opportunity</span>
              <h3 className="text-4xl font-extrabold text-white mt-2 mb-4">2.4X Growth</h3>
              <p className="text-sm text-gray-400">Capture every inbound/outbound call, eliminating lost lead leakage.</p>
              <div className="absolute bottom-2 right-2 text-purple-500/10 font-bold text-7xl font-mono pointer-events-none">06</div>
            </div>
          </div>
        </section>

        {/* WHO SHOULD USE THIS */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Target Sectors</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Who Should Deploy AI Calling?</h2>
            <p className="text-gray-400 text-lg">
              Explore outcomes tailored to different business models and operations:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* List side */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold transition-all border flex items-center justify-between ${
                    selectedIndustry === idx
                      ? "bg-purple-600/10 border-purple-500 text-white shadow-lg"
                      : "bg-transparent border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{ind.title}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    selectedIndustry === idx ? "bg-purple-500 text-white" : "bg-white/5 text-gray-500"
                  }`}>
                    Active
                  </span>
                </button>
              ))}
            </div>

            {/* Display side */}
            <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block mb-2">Target Outcome</span>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  {industries[selectedIndustry].outcome}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {industries[selectedIndustry].desc}
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Building className="w-4 h-4 text-purple-500" />
                  <span>Deployment: Custom script configured</span>
                </div>
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-bold text-sm flex items-center gap-1"
                >
                  Deploy for my business <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VOICE AI CAPABILITIES */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Technical Pillars</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Voice AI Capabilities & Core Strengths</h2>
            <p className="text-gray-400 text-lg">
              Engineered with advanced conversational models to perform identically to highly-skilled sales agents:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Natural Human-Like Voice</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Matches speaking speeds, introduces natural breathing beats, and expresses warm voice inflections.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Multi-Language Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Speaks English, Hindi, Hinglish, and custom regional variants fluently matching client preferences.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Custom Business Scripts</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trained on your sales objectives, target values, products, and scripts for consistent delivery.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Objection Handling</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Armed with script branching rules to answer product hesitations, competitor comparisons, and pricing objections.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Calendar Integration</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Checks live schedules, offers open slots, books slots directly, and sends invites automatically on call.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Knowledge Base Training</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Syncs with files, PDFs, links, and FAQs, ensuring accurate responses to detailed customer questions.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">CRM Synchronization</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pushes recordings, transcripts, actions, and scores directly back to Google Sheets or CRMs immediately.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-2">Low-Latency Response</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Operates with sub-1-second audio feedback delays, avoiding uncomfortable pauses or overlap.
              </p>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION TIMELINE */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Implementation Plan</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">How We Deploy Your Agent In 7 Days</h2>
            <p className="text-gray-400 text-lg">
              Our structured onboarding roadmap ensures your custom phone agent is operational and configured by day 7:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {/* Day 1 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 1</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Discovery Call</h3>
                <p className="text-xs text-gray-500">We analyze your calling needs, integration targets, and scripts.</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 2</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Design</h3>
                <p className="text-xs text-gray-500">We map the conversation flow, objection paths, and BANT filters.</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 3</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Agent Setup</h3>
                <p className="text-xs text-gray-500">We train the custom voice engine and configure system prompts.</p>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 4</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">CRM Integration</h3>
                <p className="text-xs text-gray-500">Connecting Google Sheets, CRM API portals, and webhooks.</p>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 5</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Testing</h3>
                <p className="text-xs text-gray-500">Dry-run testing for latency, scoring precision, and integrations.</p>
              </div>
            </div>

            {/* Day 6 */}
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">Day 6</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Training</h3>
                <p className="text-xs text-gray-500">Reviewing conversation transcripts and adjusting script triggers.</p>
              </div>
            </div>

            {/* Day 7 */}
            <div className="bg-gradient-to-b from-purple-500/20 to-transparent border border-purple-500/30 p-5 rounded-2xl relative flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono font-bold text-purple-300">Day 7</span>
                <h3 className="text-base font-bold text-white mt-1.5 mb-2">Go Live</h3>
                <p className="text-xs text-purple-300">AI agent is fully live handling real inbound and outbound calls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY SECTION */}
        <section className="mb-28">
          <div className="bg-gradient-to-r from-purple-900/10 via-pink-900/5 to-blue-900/10 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Case Study</span>
                <h2 className="text-3xl font-extrabold text-white">Education Institute Success Story</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn how a premium regional education institute scaled their admissions calling, resolved lead lag times, and automated BANT checks.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Before AI</span>
                    <h4 className="text-sm font-bold text-red-400 mt-1">Manual Follow-Up</h4>
                    <p className="text-xs text-gray-500 mt-1">Average Response Time: 4 Hours</p>
                  </div>
                  <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/20">
                    <span className="text-[10px] uppercase font-mono text-purple-300 tracking-wider">After AI</span>
                    <h4 className="text-sm font-bold text-green-400 mt-1">AI Calls Instantly</h4>
                    <p className="text-xs text-purple-300 mt-1">Callback within: 60 Seconds</p>
                  </div>
                </div>
              </div>

              {/* Case Study Outcomes */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl text-center">
                  <span className="text-xs text-gray-500 block font-mono">Admission Conversion Rate</span>
                  <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2 mb-3">
                    3.1X Growth
                  </h3>
                  <p className="text-xs text-gray-500">More qualified student leads captured and routed successfully.</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl text-center">
                  <span className="text-xs text-gray-500 block font-mono">Appointments Booked</span>
                  <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mt-2 mb-3">
                    42% Increase
                  </h3>
                  <p className="text-xs text-gray-500">Admissions interviews locked on counseling team calendars.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TECHIEHELP */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Why TechieHelp</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Why Deploy With TechieHelp?</h2>
            <p className="text-gray-400 text-lg">
              We deliver custom-built, fully owned voice infrastructure, matching regional enterprise objectives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Custom Voice AI</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trained and script-optimized specifically around your business rules and local customer language patterns.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Building className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Built Around Your Business</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We custom-program BANT filters, objection routing, and calendar booking systems to mimic your best agents.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Clock className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">24/7 Availability</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                No holidays, breaks, or sleep cycles. The AI responds instantly to leads arriving at midnight or weekends.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Fast Deployment</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We design, program, test, integrate, and launch your automated phone calling system in just 7 days.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Full Ownership</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                One-time build and setup fees. You own the script configuration, numbers, and agent configurations completely.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Indian Support Team</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dedicated developer support operating out of Rajasthan startup hubs to resolve issues immediately.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">No Missed Calls</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Simultaneous scaling allows the agent to place hundreds of calls at once without busy tone restrictions.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <DollarSign className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Rajasthan Milestone Hub</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Verified ISO 9001:2015 startup, officially selected in Rajasthan Startup Summit 2026.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Investment Packages</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Transparent Build Pricing</h2>
            <p className="text-gray-400 text-lg">
              One-time build fees with full asset ownership. No complex monthly software subscriptions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Plan 1 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col justify-between relative">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Outbound Agent</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Outbound Calling & Qualification</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">₹25,000</span>
                  <span className="text-xs text-gray-500">/ setup</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Outbound Call Integration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> AI Conversational Scripting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Lead Qualification Logic</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> CRM Status Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Call Logs & Status Reporting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Deployment Support</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all text-xs block"
              >
                Book Setup Call
              </a>
            </div>

            {/* Plan 2 */}
            <div className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl">
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded">
                Popular
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Inbound + Outbound Agent</h3>
                  <p className="text-xs text-purple-300 uppercase tracking-widest mt-1">Full Phone Automation</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">₹45,000</span>
                  <span className="text-xs text-gray-400">/ setup</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Inbound Call Routing & Support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Outbound Call Integration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Google Calendar Integration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Appointment Booking Automation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Custom Voice Engine Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Live CRM Call Transcripts</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 text-center bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all text-xs block shadow-lg"
              >
                Book Setup Call
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col justify-between relative">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Enterprise AI Call Center</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Multi-Agent Custom Setup</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">Custom</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Deep Custom DB Lookups on Call</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Custom Voice Cloning & Branding</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Advanced Conversational Branches</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Round-Robin Calendar Routing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Dedicated Technical support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Custom integrations & webhooks</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all text-xs block"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">
              Find answers to key operational concerns and questions:
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = idx === openFaqIndex;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-bold text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-white/5 text-sm text-gray-400 leading-relaxed">
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
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-blue-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block">Deploy In 7 Days</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Stop Missing Sales Calls.</h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Deploy your AI calling team in 7 days and let AI qualify, engage, and schedule meetings around the clock. Make sure every lead gets contacted within 60 seconds.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold bg-white text-purple-900 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl"
                >
                  Get My AI Calling Agent <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500 transition-all"
                >
                  Book Free Strategy Session
                </a>
                <a
                  href="#pricing"
                  className="px-6 py-3.5 rounded-xl font-semibold text-gray-400 hover:text-white transition-all"
                >
                  Request Custom Proposal
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AICallingAgents;
