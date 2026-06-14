import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle,
  Database,
  Calendar,
  MessageSquare,
  Mail,
  Activity,
  FileText,
  AlertCircle,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Clock,
  TrendingUp,
  Award,
  Check,
  Building,
  Sparkles,
  DollarSign,
  Briefcase,
  Users,
  Settings,
  ArrowRightLeft
} from "lucide-react";

const AIWorkflowAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Interactive Operations Map States
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [isMapRunning, setIsMapRunning] = useState(true);
  const mapNodes = [
    { id: "web", label: "Website", icon: <Building className="w-4 h-4" />, status: "Lead Submitted" },
    { id: "crm", label: "CRM Card", icon: <Layers className="w-4 h-4" />, status: "Lead Updated" },
    { id: "gsheet", label: "Google Sheets", icon: <Database className="w-4 h-4" />, status: "Syncing Complete" },
    { id: "whatsapp", label: "WhatsApp", icon: <MessageSquare className="w-4 h-4" />, status: "Notification Sent" },
    { id: "email", label: "Email System", icon: <Mail className="w-4 h-4" />, status: "Proposal Emailed" },
    { id: "accounts", label: "Accounting", icon: <DollarSign className="w-4 h-4" />, status: "Invoice Generated" },
    { id: "dashboard", label: "Dashboard", icon: <Activity className="w-4 h-4" />, status: "KPIs Refreshed" }
  ];

  // Auto-cycle active node in the operations map
  useEffect(() => {
    let timer = null;
    if (isMapRunning) {
      timer = setInterval(() => {
        setActiveNodeIdx((prevIdx) => (prevIdx + 1) % mapNodes.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isMapRunning, mapNodes.length]);

  // 2. Before vs After Toggle State
  const [isBeforeState, setIsBeforeState] = useState(false);

  // 3. AI Decision Engine Interactive State
  const [activeDecision, setActiveDecision] = useState("score"); // score, payment, reply, booking
  const decisions = {
    score: {
      title: "Lead Scoring",
      condition: "If Lead Score > 80",
      yes: "Assign To Sales Team & Trigger Instant Call",
      no: "Route to Automated WhatsApp/Email Nurture Loop"
    },
    payment: {
      title: "Billing & Invoices",
      condition: "If Payment Received",
      yes: "Generate PDF Invoice, Update CRM Status & Email Receipt",
      no: "Wait 48 hours, Then Send Automated WhatsApp Reminder"
    },
    reply: {
      title: "Customer Follow-Up",
      condition: "If Customer Doesn't Reply in 24h",
      yes: "Send Friendly WhatsApp Check-in with Calendar Booking Link",
      no: "Pause Follow-Up Workflow & Update Sales Rep Tasks"
    },
    booking: {
      title: "Calendar Bookings",
      condition: "If Meeting Booked",
      yes: "Update CRM Stage, Freeze Calendar Slot & Sync Team Calendars",
      no: "Send Booking Link Expiration Warning via Email"
    }
  };

  // 4. Automation Examples Tabs
  const [selectedWorkflowTab, setSelectedWorkflowTab] = useState(0);
  const workflowsList = [
    {
      title: "Lead Qualification",
      steps: ["New Lead Form Filled", "AI Scores & Extracts Data", "CRM Stage Set to Hot/Warm", "WhatsApp Calendar Link Sent", "Team Notified via Slack"]
    },
    {
      title: "Employee Onboarding",
      steps: ["Offer Signed in DocuSign", "Add Employee to HR Dashboard", "Generate Custom Email Account", "Send Welcome Onboarding Guide", "Invite to Slack Teams"]
    },
    {
      title: "Invoice & Payment",
      steps: ["Deal Closed in CRM", "Generate PDF Invoice automatically", "Email Invoice to Client", "Listen for Stripe/Razorpay Webhook", "Update Google Sheets & Ledger"]
    },
    {
      title: "Customer Support",
      steps: ["Inbound Ticket Received", "AI Analyzes Intent & Urgency", "Auto-Resolve standard FAQ tickets", "Update Support CRM Card", "Assign complex issues to humans"]
    }
  ];

  // 5. Industry outcomes tab selector
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const industries = [
    { title: "Agencies", outcome: "20+ hours saved weekly per project manager", desc: "Automates client onboarding. Once contract is signed, AI automatically creates a Slack channel, creates a ClickUp folder, generates a kickoff Google Doc, and sends calendar invite." },
    { title: "Startups", outcome: "Autopilot operations for lean scale", desc: "Keeps team sizing minimal. Automates user provisioning, billing status tracking, Stripe payment failures routing, and lead-to-rep matching workflows." },
    { title: "Educational Institutes", outcome: "2.5X faster student application processing", desc: "Syncs application files to student database. AI reviews eligibility details, tags missing files, and sends automatic reminder emails to applicants." },
    { title: "Real Estate", outcome: "Immediate buyer lead routing to brokers", desc: "Grabs buyer lead profiles from MagicBricks/99acres, updates agent spreadsheets, routes numbers via round-robin, and pushes WhatsApp follow-up instantly." },
    { title: "Healthcare", outcome: "92% reduction in manual patient scheduling", desc: "Integrates patient booking forms with medical staff schedules, sends custom pre-check questionnaires, and writes responses to secure EHR folders." },
    { title: "Consulting Firms", outcome: "100% automated proposal and invoice cycles", desc: "Triggers proposal document generation post strategy call, monitors approval statuses, and fires automated Stripe invoices when approved." },
    { title: "E-Commerce", outcome: "Instant order details tracking sync", desc: "Connects Shopify checkouts directly to local warehouse sheets, updates inventory logs, generates shipping labels, and sends updates on WhatsApp." },
    { title: "Local Businesses", outcome: "Hands-free local citation & feedback loop", desc: "Triggers Google Review request notifications via WhatsApp 1 hour after local service completion, syncing feedbacks to a master sheet." }
  ];

  // 6. FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const faqs = [
    {
      q: "Can it connect with my CRM?",
      a: "Yes. We integrate workflows with Salesforce, HubSpot, Zoho, Pipedrive, ActiveCampaign, and custom in-house CRMs using standard API endpoints or Zapier/Make connections."
    },
    {
      q: "Can it automate WhatsApp?",
      a: "Absolutely. We utilize official WhatsApp Cloud API gateways to trigger automated notifications, alerts, PDFs, reminders, and interactive options based on database events."
    },
    {
      q: "Can it update Google Sheets?",
      a: "Yes. Google Sheets is one of our most popular nodes. We can automate appending rows, checking for duplicates, updating specific cells, and creating weekly backup logs."
    },
    {
      q: "Can AI make decisions automatically?",
      a: "Yes. Using advanced reasoning branches, the system does not just move text. It checks filters, reads email contexts, grades lead criteria, and determines which action path to dispatch."
    },
    {
      q: "Can it generate invoices?",
      a: "Yes. We connect systems to QuickBooks, Tally, Zoho Books, or PDF generation APIs. It creates custom invoices based on lead CRM records and emails them instantly."
    },
    {
      q: "How long does deployment take?",
      a: "A standard operations workflow is designed, tested, and deployed live in 7 days. More complex custom API systems may take up to 2 weeks."
    }
  ];

  return (
    <div className="bg-[#030014] min-h-screen text-gray-300 font-sans selection:bg-cyan-500/30 pt-28 pb-20 overflow-hidden relative">
      <Helmet>
        <title>AI Operations & Workflow Automation Solutions | TechieHelp</title>
        <meta name="description" content="Build a business that runs itself. TechieHelp builds custom AI operations workflow systems that automate data entry, update CRM, generate invoices, and sync Google Sheets." />
      </Helmet>

      {/* Background radial glow lights */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-indigo-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-10">
          <span>Home</span>
          <span className="text-cyan-500">→</span>
          <span>Services</span>
          <span className="text-cyan-500">→</span>
          <span className="text-gray-900 dark:text-white font-semibold">AI Workflow Automation</span>
        </div>

        {/* HERO SECTION */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider"
            >
              <Workflow className="w-4 h-4" />
              <span>Build A Business That Runs Itself</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
            >
              Your Business Should Run <br />
              <span className="text-cyan-gradient font-bold">
                Even When You're Offline.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Stop paying people to move data between apps. TechieHelp builds AI-powered workflow systems that automatically move data, update records, trigger actions, send notifications, and keep operations running 24/7.
            </motion.p>

            {/* Statistics bullet checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-white/5 py-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white"> 90% Less Manual Work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">� Automated Operations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white"> Real-Time Data Sync</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">� AI-Powered Decision Making</span>
              </div>
            </motion.div>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get My Automation Blueprint <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-cyan-500 transition-all"
              >
                Book Free Workflow Audit
              </a>
              <a
                href="#live-operations"
                className="px-6 py-3.5 rounded-xl font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-all"
              >
                Watch Automation Demo
              </a>
            </motion.div>
          </div>

          {/* ANIMATED HERO VISUAL OPERATIONS MAP */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10" />

              {/* Header controls */}
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">Live Operations Map</span>
                </div>
                <button
                  onClick={() => setIsMapRunning(!isMapRunning)}
                  className="text-xs font-mono bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded px-2 py-0.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white flex items-center gap-1 transition-all"
                >
                  {isMapRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-cyan-400" />}
                  {isMapRunning ? "Pause" : "Play"}
                </button>
              </div>

              {/* Node layout map */}
              <div className="space-y-4">
                {mapNodes.map((node, idx) => {
                  const isActive = idx === activeNodeIdx;
                  const isCompleted = idx < activeNodeIdx;
                  return (
                    <div
                      key={node.id}
                      className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${isActive
                          ? "bg-cyan-500/10 border-cyan-500/30 shadow-lg shadow-cyan-900/5 scale-[1.02] opacity-100"
                          : isCompleted
                            ? "bg-blue-500/[0.03] border-blue-500/10 opacity-80"
                            : "bg-transparent border-white/5 opacity-30"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${isActive ? "bg-cyan-500/20 text-cyan-400" : isCompleted ? "bg-blue-500/10 text-blue-400" : "bg-gray-100 dark:bg-white/5 text-gray-500"
                          }`}>
                          {node.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">{node.label}</p>
                          {isActive && (
                            <p className="text-[10px] text-cyan-300 font-mono mt-0.5 animate-pulse">
                              {node.status}...
                            </p>
                          )}
                          {isCompleted && (
                            <p className="text-[10px] text-blue-400 font-mono mt-0.5">
                              Completed
                            </p>
                          )}
                        </div>
                      </div>

                      {isActive ? (
                        <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-blue-400 stroke-[3]" /> Sync Complete
                        </span>
                      ) : isCompleted ? (
                        <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-[#33bbcf] stroke-[3]" /> Done
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-gray-600">Idle</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Moving data particle feed logs */}
              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 bg-black/30 rounded-xl p-3.5 text-[10px] font-mono text-gray-600 dark:text-gray-400 space-y-1">
                <p className="text-gray-500 uppercase tracking-widest text-[9px] font-bold pb-1.5 border-b border-white/5 mb-1.5">
                  Activity Feed Logs
                </p>
                <div className="h-10 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNodeIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-300"
                    >
                      &gt; [SUCCESS] Action on node "{mapNodes[activeNodeIdx].label}": {mapNodes[activeNodeIdx].status}.
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">The Cost of Chores</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Your Team Spends Too Much Time On Repetitive Tasks</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Manual admin bottlenecks drain corporate output. These 6 areas cost businesses valuable time every single day:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Manual Data Entry</h3>
              <p className="text-sm text-gray-500">Typing student details, leads or client data into spreadsheets line-by-line.</p>
            </div>
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Copy-Pasting Between Apps</h3>
              <p className="text-sm text-gray-500">Moving customer info from emails to CRM, then to invoicing sheets manually.</p>
            </div>
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Missed Follow-Ups</h3>
              <p className="text-sm text-gray-500">Leaving leads uncalled for hours because sales reps were out of office.</p>
            </div>
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Spreadsheet Chaos</h3>
              <p className="text-sm text-gray-500">Broken formulas, duplicate rows, and conflicting columns across sheets.</p>
            </div>
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Invoice Delays</h3>
              <p className="text-sm text-gray-500">Forgetting to bill clients on time, stalling collection and cashflows.</p>
            </div>
            <div className="card-glass flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Approval Bottlenecks</h3>
              <p className="text-sm text-gray-500">Waiting for management signatures to move documentation forward.</p>
            </div>
          </div>

          {/* Visual: Employee -> Lost Revenue */}
          <div className="max-w-4xl mx-auto bg-red-950/10 border border-red-500/10 rounded-2xl p-6 text-center">
            <p className="text-sm font-mono text-red-400 font-bold uppercase tracking-widest mb-6">Traditional Operational Drain</p>
            <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-gray-900 dark:text-white font-bold">
              <div className="bg-black/40 border border-white/5 p-4 rounded-xl w-44">Employee</div>
              <div className="text-gray-600">↓ Repeating Task</div>
              <div className="bg-black/40 border border-white/5 p-4 rounded-xl w-44">Lost Time</div>
              <div className="text-gray-600">↓ Lost Momentum</div>
              <div className="bg-red-500/20 border border-red-500/30 p-4 rounded-xl w-44 text-red-300">Lost Revenue</div>
            </div>
          </div>
        </section>

        {/* AUTOMATION IMPACT GRAPH */}
        <section className="mb-28 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">The Impact Graph</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Before vs After Automation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Toggle the switch to see the operational transformation. Custom integrations compress hours of manual work and drop data errors to near-zero.
              </p>

              {/* Toggle controls */}
              <div className="flex items-center gap-4 bg-black/40 border border-white/5 p-2 rounded-xl w-fit">
                <button
                  onClick={() => setIsBeforeState(true)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${isBeforeState ? "bg-red-500/20 text-red-400 border border-red-500/20" : "bg-transparent text-gray-500"
                    }`}
                >
                  Before Automation
                </button>
                <button
                  onClick={() => setIsBeforeState(false)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${!isBeforeState ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20" : "bg-transparent text-gray-500"
                    }`}
                >
                  After Automation
                </button>
              </div>
            </div>

            {/* Impact chart rendering */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-black/30 border border-white/5 rounded-2xl p-6 space-y-6">

                {/* Metric 1: Hours */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Weekly Manual Work Hours</span>
                    <span className={`text-sm font-bold ${isBeforeState ? "text-red-400" : "text-green-400"}`}>
                      {isBeforeState ? "40 Hours" : "4 Hours (90% Saved)"}
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${isBeforeState ? "bg-red-500" : "bg-cyan-500"}`}
                      animate={{ width: isBeforeState ? "100%" : "10%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Metric 2: Errors */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Manual Processing Data Errors</span>
                    <span className={`text-sm font-bold ${isBeforeState ? "text-red-400" : "text-green-400"}`}>
                      {isBeforeState ? "20+ Errors / Mo" : "Near-Zero Errors"}
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${isBeforeState ? "bg-red-500" : "bg-cyan-500"}`}
                      animate={{ width: isBeforeState ? "80%" : "1%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Metric 3: Response speed */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Operations Response Time</span>
                    <span className={`text-sm font-bold ${isBeforeState ? "text-red-400" : "text-green-400"}`}>
                      {isBeforeState ? "4-8 Hours Delay" : "Instant (< 1s)"}
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${isBeforeState ? "bg-red-500" : "bg-cyan-500"}`}
                      animate={{ width: isBeforeState ? "95%" : "2%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Automation Workflow</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">How The Automated Path Flows</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Trace the system events from the moment a lead signs up to invoicing and internal team Slack alerts:
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-16 flex items-center justify-center overflow-x-auto min-h-[300px]">
            <svg width="900" height="240" viewBox="0 0 900 240" className="min-w-[900px]">
              <defs>
                <linearGradient id="cyanPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Connecting paths */}
              <path d="M120 120 H180" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" strokeDasharray="8,5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M280 120 H340" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" strokeDasharray="8,5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M440 120 H500" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" strokeDasharray="8,5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M600 120 H660" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" strokeDasharray="8,5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M760 120 H820" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" strokeDasharray="8,5" className="animate-[marquee_10s_linear_infinite]" />

              {/* Step 1 */}
              <rect x="20" y="80" width="100" height="80" rx="12" fill="#0b081e" stroke="#06b6d4" strokeWidth="2" />
              <text x="70" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">1. New Lead</text>
              <text x="70" y="135" textAnchor="middle" fill="#06b6d4" fontSize="8">Form Submitted</text>

              {/* Step 2 */}
              <rect x="180" y="80" width="100" height="80" rx="12" fill="#0b081e" stroke="#6366f1" strokeWidth="2" />
              <text x="230" y="110" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">2. AI reads data</text>
              <text x="230" y="128" textAnchor="middle" fill="#6366f1" fontSize="8">BANT Scoring</text>
              <text x="230" y="142" textAnchor="middle" fill="#9ca3af" fontSize="8">CRM updated</text>

              {/* Step 3 */}
              <rect x="340" y="80" width="100" height="80" rx="12" fill="#0b081e" stroke="#6366f1" strokeWidth="2" />
              <text x="390" y="110" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">3. WhatsApp</text>
              <text x="390" y="128" textAnchor="middle" fill="#6366f1" fontSize="8">Message Sent</text>
              <text x="390" y="142" textAnchor="middle" fill="#9ca3af" fontSize="8">Email Triggered</text>

              {/* Step 4 */}
              <rect x="500" y="80" width="100" height="80" rx="12" fill="#0b081e" stroke="#10b981" strokeWidth="2" />
              <text x="550" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">4. Invoice Set</text>
              <text x="550" y="135" textAnchor="middle" fill="#10b981" fontSize="8">Ledger updated</text>

              {/* Step 5 */}
              <rect x="660" y="80" width="100" height="80" rx="12" fill="#0b081e" stroke="#10b981" strokeWidth="2" />
              <text x="710" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">5. Dashboard</text>
              <text x="710" y="135" textAnchor="middle" fill="#10b981" fontSize="8">Real-time sync</text>

              {/* Step 6 */}
              <circle cx="850" cy="120" r="30" fill="#0b081e" stroke="#ef4444" strokeWidth="2" />
              <text x="850" y="118" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Team</text>
              <text x="850" y="132" textAnchor="middle" fill="#ef4444" fontSize="8">Alerted</text>
            </svg>
          </div>
        </section>

        {/* WHAT WE AUTOMATE */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Service Grid</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">What TechieHelp Automates</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We connect applications across 12 primary integration areas to construct a unified business workflow:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">01</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Lead Management</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Capture, distribute, and follow up with leads automatically.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">02</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Customer Onboarding</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Trigger custom welcome emails and setup customer dashboard portals.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">03</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Invoice Processing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Auto-generate invoices on Stripe checkouts and update spreadsheets.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">04</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">CRM Updates</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Keep pipeline stages synced, updating status details instantly.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">05</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Google Sheets Sync</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Maintain master records, lead spreadsheets, and analytics logs.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">06</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">WhatsApp Automation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Send instant notifications, booking invites, and alerts.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">07</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Email Automation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Deliver responsive transactional proposals and calendar alerts.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">08</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Reporting & Analytics</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Assemble operational performance logs and sync data dashboards.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">09</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Team Notifications</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Alert sales staff on Slack or WhatsApp for instant lead calls.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">10</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Appointment Scheduling</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Lookup live calendars, round-robin assignments, and lock bookings.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">11</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Document Generation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Automate PDFs, agreement proposals, contracts, and receipts.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-cyan-400 font-bold text-sm block mb-1">12</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Internal Approvals</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Trigger manager sign-offs before generating custom contracts.</p>
            </div>
          </div>
        </section>

        {/* AI DECISION ENGINE */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Logic Branches</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">AI Doesn't Just Move Data. It Makes Decisions.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Click the tabs below to explore how our workflow automation reasons through complex corporate actions:
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-200 dark:border-white/10 mb-8">
              {Object.keys(decisions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveDecision(key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${activeDecision === key
                      ? "bg-cyan-600 text-gray-900 dark:text-white border-cyan-500 shadow-md"
                      : "bg-transparent border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white"
                    }`}
                >
                  {decisions[key].title}
                </button>
              ))}
            </div>

            {/* Decision display visualizer */}
            <div className="space-y-6">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-around gap-6">

                {/* Condition node */}
                <div className="bg-cyan-950/20 border border-cyan-500/30 p-5 rounded-2xl text-center w-56 shadow-lg">
                  <span className="text-[10px] text-cyan-400 font-mono block mb-1">Decision Trigger</span>
                  <strong className="text-sm text-gray-900 dark:text-white">{decisions[activeDecision].condition}</strong>
                </div>

                <div className="text-gray-600 font-extrabold text-xl hidden md:block">→</div>

                {/* Outputs */}
                <div className="space-y-4 w-full md:w-80">
                  <div className="bg-green-950/20 border border-green-500/20 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-green-400 block font-bold uppercase">YES Branch</span>
                      <p className="text-xs text-gray-300 mt-0.5">{decisions[activeDecision].yes}</p>
                    </div>
                  </div>
                  <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-red-400 block font-bold uppercase">NO Branch</span>
                      <p className="text-xs text-gray-300 mt-0.5">{decisions[activeDecision].no}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* LIVE OPERATIONS CENTER (DASHBOARD PREVIEW) */}
        <section id="live-operations" className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Live Center</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Operations Center Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Track real-time workflow performance. Access detailed metrics and visual execution summaries on autopilot:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Tasks Automated Today</span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">1,420</h3>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Hours Saved</span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">48 Hrs</h3>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Errors Prevented</span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">14</h3>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Workflows Executed</span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">100%</h3>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Revenue Impact</span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">2.4X</h3>
            </div>
          </div>

          {/* SVG line-graph layout */}
          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-gray-500">Hourly Workflow Execution Volume</span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded font-mono">Live Syncing</span>
            </div>
            <div className="h-64 w-full">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="50" y1="20" x2="780" y2="20" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                <line x1="50" y1="70" x2="780" y2="70" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                <line x1="50" y1="120" x2="780" y2="120" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />
                <line x1="50" y1="170" x2="780" y2="170" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="5 5" />

                {/* Graph Curve */}
                <path
                  d="M50 170 C 150 150, 250 80, 350 90 C 450 100, 550 40, 650 50 C 750 60, 780 70, 780 70 L 780 170 Z"
                  fill="url(#areaGrad)"
                />
                <path
                  d="M50 170 C 150 150, 250 80, 350 90 C 450 100, 550 40, 650 50 C 750 60, 780 70, 780 70"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                />

                {/* Pulse Indicator */}
                <circle cx="650" cy="50" r="6" fill="#06b6d4" />
                <circle cx="650" cy="50" r="12" fill="none" stroke="#06b6d4" strokeOpacity="0.4" className="animate-ping" />

                {/* Axis Labels */}
                <text x="50" y="192" fill="#4b5563" fontSize="9" fontWeight="bold">09:00 AM</text>
                <text x="250" y="192" fill="#4b5563" fontSize="9" fontWeight="bold">12:00 PM</text>
                <text x="450" y="192" fill="#4b5563" fontSize="9" fontWeight="bold">03:00 PM</text>
                <text x="650" y="192" fill="#4b5563" fontSize="9" fontWeight="bold">06:00 PM</text>
              </svg>
            </div>
          </div>
        </section>

        {/* WHO SHOULD USE THIS */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Target Users</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Who Should Deploy Operational Automation?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore custom deliverables mapped for different industries and domains:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* List */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold transition-all border flex items-center justify-between ${selectedIndustry === idx
                      ? "bg-cyan-600/10 border-cyan-500 text-gray-900 dark:text-white shadow-lg"
                      : "bg-transparent border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-white/[0.02]"
                    }`}
                >
                  <span>{ind.title}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${selectedIndustry === idx ? "bg-cyan-500 text-gray-900 dark:text-white" : "bg-gray-100 dark:bg-white/5 text-gray-500"
                    }`}>
                    Active
                  </span>
                </button>
              ))}
            </div>

            {/* Display Box */}
            <div className="lg:col-span-8 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-bold">Target Outcome</span>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                  {industries[selectedIndustry].outcome}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {industries[selectedIndustry].desc}
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Workflow className="w-4 h-4 text-cyan-500" />
                  <span>Deployment: Configured, audited & tested in 7 Days</span>
                </div>
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold text-sm flex items-center gap-1"
                >
                  Request Workflow Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AUTOMATION EXAMPLES */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Use Cases</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Example Automation Workflows</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore step-by-step visual roadmaps of our 4 most popular operational packages:
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-200 dark:border-white/10 mb-8">
              {workflowsList.map((wf, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedWorkflowTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${selectedWorkflowTab === idx
                      ? "bg-cyan-600 text-gray-900 dark:text-white border-cyan-500 shadow-md"
                      : "bg-transparent border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white"
                    }`}
                >
                  {wf.title}
                </button>
              ))}
            </div>

            {/* Stepper display */}
            <div className="space-y-4">
              {workflowsList[selectedWorkflowTab].steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 bg-black/30 border border-white/5 p-4 rounded-xl">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION TIMELINE */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">How We Deploy Your Autopilot in 7 Days</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our structured onboarding roadmap ensuring your custom logic works seamlessly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-6xl mx-auto">
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 1</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Discovery</h3>
              <p className="text-xs text-gray-500 font-medium">Analyzing manual chores, bottlenecks and app connections.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 2</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Process Mapping</h3>
              <p className="text-xs text-gray-500 font-medium">Drafting step flows, validation criteria and parameters.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 3</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">AI Logic Design</h3>
              <p className="text-xs text-gray-500 font-medium">Programming decision logic, variables, and formats.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 4</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Integration</h3>
              <p className="text-xs text-gray-500 font-medium">Connecting CRM cards, sheets, APIs, and webhook triggers.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 5</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Testing</h3>
              <p className="text-xs text-gray-500 font-medium">Executing system dry-runs and validation error checks.</p>
            </div>
            <div className="card-glass flex flex-col">
              <span className="text-xs font-mono font-bold text-cyan-400">Day 6</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Training</h3>
              <p className="text-xs text-gray-500 font-medium">Familiarizing staff with dashboard interfaces and logs.</p>
            </div>
            <div className="bg-gradient-to-b from-cyan-500/20 to-transparent border border-cyan-500/30 p-5 rounded-2xl shadow-lg">
              <span className="text-xs font-mono font-bold text-cyan-300">Day 7</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1.5 mb-2">Go Live</h3>
              <p className="text-xs text-cyan-300 font-medium">AI system goes fully live running operations on autopilot.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="mb-28">
          <div className="bg-gradient-to-r from-cyan-900/10 via-indigo-900/5 to-blue-900/10 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Case Study</span>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Agency Operations Transformation</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  How a regional consulting agency automated their client scheduling, task assignments, invoicing, and reporting sheets:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">Before AI</span>
                    <h4 className="text-sm font-bold text-red-400 mt-1">Manual Chores</h4>
                    <p className="text-xs text-gray-500 mt-0.5">5 Hours Daily Manual Work</p>
                  </div>
                  <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/20">
                    <span className="text-[10px] uppercase font-mono text-cyan-300 block">After AI</span>
                    <h4 className="text-sm font-bold text-green-400 mt-1">95% Automated</h4>
                    <p className="text-xs text-cyan-300 mt-0.5">Instant data flows</p>
                  </div>
                </div>
              </div>

              {/* Case Outcomes */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl text-center">
                  <span className="text-xs text-gray-500 block font-mono">Operations Time Saved</span>
                  <h3 className="text-cyan-gradient font-bold">
                    20+ Hours / Wk
                  </h3>
                  <p className="text-xs text-gray-500">Redirected back to custom client deliverables.</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl text-center">
                  <span className="text-xs text-gray-500 block font-mono">Execution Speed</span>
                  <h3 className="text-cyan-gradient font-bold">
                    3X Faster
                  </h3>
                  <p className="text-xs text-gray-500">Eliminated client onboarding queues and invoice delays.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TECHIEHELP */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Why TechieHelp</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Why Partner With TechieHelp?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We deploy custom workflow automations focused entirely on scalability, accuracy, and full client asset ownership:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-glass flex flex-col">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Custom Workflows</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Trained and customized specifically around your business rules and app stack connections.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Settings className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI Logic Included</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We design smart branching, data filters, and lead grading criteria.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Layers className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">No-Code Experience</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We handle the backend setups; your staff manages flows through visual, user-friendly forms.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Award className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Full Ownership</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                One-time build fees. You own all configurations, scripts, sheets, and dashboard layouts.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Fast Deployment</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We analyze, map, program, and launch your automated workflow pipeline in just 7 days.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Activity className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Scalable Architecture</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Configured to handle thousands of events simultaneously without lagging or data drops.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Dedicated Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dedicated developers to review integration logs and optimize decision variables.
              </p>
            </div>
            <div className="card-glass flex flex-col">
              <Users className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Indian Milestone Team</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Selected Startup in Rajasthan Startup Summit 2026 and Seaside Startup Summit Armenia 2026.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Investment Packages</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Transparent Build Pricing</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              One-time build fees with full asset ownership. No complex monthly software subscriptions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Plan 1 */}
            <div className="card-glass flex flex-col">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Basic Automation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">2 App Integrations</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">₹20,000</span>
                  <span className="text-xs text-gray-500">/ setup</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 2 App Connections</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Linear Data Syncing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Email Automation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Google Sheets Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Basic Workflow Design</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 4 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 text-center bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl font-bold transition-all text-xs block font-mono"
              >
                Book Setup Call
              </a>
            </div>

            {/* Plan 2 */}
            <div className="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/30 p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl animate-pulse-subtle">
              <div className="btn-primary">
                Popular
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Standard Automation</h3>
                  <p className="text-xs text-cyan-300 uppercase tracking-widest mt-1">Multi-App Operations</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">₹35,000</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">/ setup</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 5 App Connections</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> AI Decision & Branching Logic</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> WhatsApp & Email automation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Auto-Invoicing & Receipts</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Operational Reporting Dashboard</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 7 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Setup Call
              </a>
            </div>

            {/* Plan 3 */}
            <div className="card-glass flex flex-col">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Enterprise Automation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Custom API Setup</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">Custom</span>
                </div>
                <ul className="space-y-3.5 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Unlimited Integrations</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Custom API coding & connections</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Advanced Custom AI logic</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Direct database read/writes</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Dedicated Technical support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> SLA Maintenance contract</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 text-center bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl font-bold transition-all text-xs block"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-28 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Find answers to key operational concerns and questions:
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = idx === openFaqIdx;
              return (
                <div
                  key={idx}
                  className="card-glass flex flex-col"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-bold text-gray-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
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
                        <div className="p-6 pt-0 border-t border-white/5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
          <div className="bg-gradient-to-r from-cyan-900/20 via-indigo-900/10 to-blue-900/20 border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Stop Managing Operations Manually.</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Deploy your custom AI workflow system and let your business run on autopilot. Free up your team to focus on high-value goals.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold bg-white text-cyan-900 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl"
                >
                  Get My Automation Blueprint <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-cyan-500 transition-all"
                >
                  Book Free Workflow Audit
                </a>
                <a
                  href="#pricing"
                  className="px-6 py-3.5 rounded-xl font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-all"
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

export default AIWorkflowAutomation;
