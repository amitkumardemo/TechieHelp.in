import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Mail,
  Flame,
  Bot,
  Phone,
  GitFork,
  CreditCard,
  BarChart3,
  Ticket,
  Layers,
  Settings,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Edit2,
  Eye,
  UserMinus,
  UserCheck,
  Check,
  X,
  Play,
  Pause,
  ExternalLink,
  Globe,
  CheckCircle2,
  Database,
  Inbox,
  AlertCircle,
  Calendar,
  TrendingUp,
  Send,
  Volume2,
  Clock,
  Plus,
  RefreshCw,
  Sliders,
  Shield,
  Activity,
  LogOut,
  MailCheck,
  ChevronRight
} from "lucide-react";

// ==========================================
// MOCK DATA & CONFIG
// ==========================================

const INITIAL_CUSTOMERS = [
  { id: "cust-1", name: "Sarah Connor", company: "CyberDyne Systems", plan: "Growth", status: "Active", email: "sarah@cyberdyne.io", gmailConnected: true, lastActivity: "2 mins ago", apiCalls: 14209, workflowsCount: 3, mrr: 199 },
  { id: "cust-2", name: "Bruce Wayne", company: "Wayne Enterprises", plan: "Enterprise", status: "Active", email: "bruce@waynecorp.com", gmailConnected: true, lastActivity: "12 mins ago", apiCalls: 89340, workflowsCount: 8, mrr: 899 },
  { id: "cust-3", name: "Tony Stark", company: "Stark Industries", plan: "Enterprise", status: "Active", email: "tony@stark.com", gmailConnected: true, lastActivity: "1 hour ago", apiCalls: 124310, workflowsCount: 12, mrr: 1299 },
  { id: "cust-4", name: "Richard Hendricks", company: "Pied Piper", plan: "Growth", status: "Active", email: "richard@piedpiper.xyz", gmailConnected: true, lastActivity: "5 mins ago", apiCalls: 22800, workflowsCount: 4, mrr: 199 },
  { id: "cust-5", name: "Gregory House", company: "Plainsboro Diagnostics", plan: "Starter", status: "Active", email: "house@plainsborodiag.org", gmailConnected: false, lastActivity: "4 hours ago", apiCalls: 5400, workflowsCount: 1, mrr: 49 },
  { id: "cust-6", name: "Elliot Alderson", company: "Allsafe Cybersecurity", plan: "Starter", status: "Suspended", email: "elliot@allsafe.co", gmailConnected: true, lastActivity: "3 days ago", apiCalls: 1200, workflowsCount: 2, mrr: 49 },
  { id: "cust-7", name: "Michael Scott", company: "Dunder Mifflin", plan: "Starter", status: "Suspended", email: "mscott@dundermifflin.com", gmailConnected: false, lastActivity: "1 week ago", apiCalls: 450, workflowsCount: 1, mrr: 49 },
  { id: "cust-8", name: "Logan Roy", company: "Waystar Royco", plan: "Enterprise", status: "Active", email: "l.roy@waystar.com", gmailConnected: true, lastActivity: "25 mins ago", apiCalls: 75200, workflowsCount: 6, mrr: 899 }
];

const WORKFLOWS_INITIAL = [
  { id: "wf-1", name: "Inbound Lead Ingestion & Qualification", customer: "Wayne Enterprises", status: "Running", executions: 48230, successRate: 99.8, lastRun: "2s ago" },
  { id: "wf-2", name: "AI Reply & Follow-up Scheduler", customer: "Stark Industries", status: "Running", executions: 34102, successRate: 98.4, lastRun: "5s ago" },
  { id: "wf-3", name: "Voice AI Calling Agent Trigger", customer: "CyberDyne Systems", status: "Running", executions: 12400, successRate: 96.1, lastRun: "1m ago" },
  { id: "wf-4", name: "CRM Sync & HubSpot Exporter", customer: "Acme Corp", status: "Running", executions: 22109, successRate: 99.9, lastRun: "45s ago" },
  { id: "wf-5", name: "Cold Outreach Automation Block", customer: "Pied Piper", status: "Paused", executions: 8900, successRate: 94.2, lastRun: "2 hours ago" },
  { id: "wf-6", name: "Customer Feedback Routing", customer: "Dunder Mifflin", status: "Paused", executions: 340, successRate: 88.5, lastRun: "3 days ago" }
];

const INITIAL_LOGS = [
  { id: "log-1", time: "18:31:02", type: "lead", text: "AI Qualified Lead: John Doe (john@doe.com, Score: 94/100) for CyberDyne Systems.", status: "success" },
  { id: "log-2", time: "18:30:45", type: "reply", text: "AI Sent Reply: 'Follow up on subscription pricing' to arthur@pendragon.org for Stark Industries.", status: "success" },
  { id: "log-3", time: "18:30:12", type: "call", text: "AI Triggered Call: Contacted Bruce Wayne (Duration: 3m 45s, Status: Meeting Booked) for Stark Industries.", status: "success" },
  { id: "log-4", time: "18:29:50", type: "workflow", text: "Workflow Executed: 'Auto-Ingest & Score Lead' completed for Wayne Enterprises.", status: "success" },
  { id: "log-5", time: "18:29:10", type: "gmail", text: "New Gmail Connected: Connected oauth-token for Hooli Inc.", status: "success" },
  { id: "log-6", time: "18:28:01", type: "lead", text: "AI Qualified Lead: Martha Kent (martha@kentfarm.com, Score: 88/100) for Wayne Enterprises.", status: "success" },
  { id: "log-7", time: "18:27:14", type: "reply", text: "AI Sent Reply: 'Introduction and scheduling link' to clark@dailyplanet.com for Pied Piper.", status: "success" },
  { id: "log-8", time: "18:25:30", type: "call", text: "AI Triggered Call: Contacted Peter Parker (Duration: 1m 12s, Status: Not Interested) for CyberDyne Systems.", status: "warning" }
];

const RECENT_EMAILS = [
  { id: "email-1", customer: "CyberDyne Systems", leadEmail: "j.connor@resistance.net", subject: "Re: QualifyAI Automated Assistant Setup", score: 98, status: "Qualified", draft: "Hi John,\n\nI reviewed your request and noticed your infrastructure team is looking to deploy autonomous nodes next quarter. I've flagged your account as 'High Priority' and unlocked advanced access to the sandbox.\n\nLet's schedule a call tomorrow at 10 AM.\n\nBest,\nQualifyAI Assistant" },
  { id: "email-2", customer: "Stark Industries", leadEmail: "p.parker@midtownhigh.edu", subject: "Re: Requesting Stark Internships Info", score: 85, status: "Qualified", draft: "Dear Peter,\n\nThank you for reaching out regarding the Stark Industries Research Internship. Your background in biophysics is highly aligned with our Nano-Tech division.\n\nHere is a calendar link to select a brief screening interview.\n\nRegards,\nStark AI Recruiter" },
  { id: "email-3", customer: "Pied Piper", leadEmail: "gavin@hooli.xyz", subject: "Re: Middle-out Compression Licensing Terms", score: 34, status: "Discarded", draft: "Hi Gavin,\n\nThanks for your interest. However, based on our automated ingestion metrics, we are currently not licensing our compression algorithm to competitive tech conglomerates.\n\nBest regards,\nPied Piper Automated Desk" },
  { id: "email-4", customer: "Wayne Enterprises", leadEmail: "selina.kyle@catburglar.org", subject: "Re: Security Ingestion Inquiries", score: 72, status: "Pending", draft: "Hi Selina,\n\nWe received your request regarding Wayne Enterprises' private security blueprints. To proceed, we require multi-factor identity authorization.\n\nPlease click the secure link to verify.\n\nSincerely,\nWayne Security AI Gateway" }
];

const RECENT_CALLS = [
  { id: "call-1", customer: "Stark Industries", leadName: "Pepper Potts", phone: "+1 (555) 019-2834", duration: "4m 12s", status: "Booked", score: 95, transcript: "[AI Agent]: Hello Pepper, this is Jarvis calling from Stark Industries. I wanted to follow up on your cloud database provisioning.\n\n[Pepper Potts]: Oh hi! Yes, I was looking into upgrading our storage because the current servers are running at 98% capacity.\n\n[AI Agent]: Excellent. I see you qualify for our high-throughput cluster. I can book you in for a migration call with Tony Stark tomorrow. Does 2 PM EST work?\n\n[Pepper Potts]: Yes, 2 PM is perfect. Please send the invite.\n\n[AI Agent]: Confirmed. Booking complete. Have a wonderful day!" },
  { id: "call-2", customer: "CyberDyne Systems", leadName: "Miles Dyson", phone: "+1 (555) 012-9988", duration: "2m 15s", status: "Booked", score: 90, transcript: "[AI Agent]: Hello Miles, this is T-800 calling from CyberDyne. We noticed your request for the neural network processor manual.\n\n[Miles Dyson]: Yes, I need the details on the assembly code for the main chip layout.\n\n[AI Agent]: I can schedule a technical review with our lead engineer today at 4 PM.\n\n[Miles Dyson]: Sounds good, lock it in." },
  { id: "call-3", customer: "Pied Piper", leadName: "Jared Dunn", phone: "+1 (555) 014-4422", duration: "1m 30s", status: "Busy/Voicemail", score: 10, transcript: "[AI Agent]: Hello Jared, this is Pied Piper Assistant. Calling regarding the server room cooling upgrade...\n\n[Jared Dunn (Voicemail)]: Hi, you've reached Jared. I'm currently assisting Richard with a server crisis. Please leave a message, and I'll respond as soon as I can. Remember, we are pivoting!" },
  { id: "call-4", customer: "Wayne Enterprises", leadName: "Harvey Dent", phone: "+1 (555) 015-8811", duration: "3m 02s", status: "Rejected", score: 50, transcript: "[AI Agent]: Hello District Attorney Dent, I'm calling from Wayne Enterprises automation desk.\n\n[Harvey Dent]: I don't have time for automations. Let's make this simple: heads or tails? If it's heads, you get a meeting. If tails, you hang up.\n\n[AI Agent]: Sir, I am an AI engine, I don't gamble. Let me send you the qualification form instead...\n\n[Harvey Dent]: No deal. Goodbye." }
];

const RECENT_PAYMENTS = [
  { id: "pay-1", customer: "Wayne Enterprises", plan: "Enterprise", amount: "$899.00", date: "Just now", status: "Success" },
  { id: "pay-2", customer: "Stark Industries", plan: "Enterprise", amount: "$1,299.00", date: "10 mins ago", status: "Success" },
  { id: "pay-3", customer: "CyberDyne Systems", plan: "Growth", amount: "$199.00", date: "1 hour ago", status: "Success" },
  { id: "pay-4", customer: "Pied Piper", plan: "Growth", amount: "$199.00", date: "4 hours ago", status: "Success" },
  { id: "pay-5", customer: "Logan Roy", plan: "Enterprise", amount: "$899.00", date: "1 day ago", status: "Success" }
];

const SUPPORT_TICKETS = [
  { id: "tix-1", customer: "Pied Piper", subject: "Gemini API key rate limits exceeded", status: "Open", priority: "High", date: "3 hours ago", message: "We are getting 429 quota errors on our lead scoring pipeline. We are on the Growth plan. Can you increase our rate limit allocation on the shared API gate?" },
  { id: "tix-2", customer: "CyberDyne Systems", subject: "Custom Voice Agent pronunciation correction", status: "Open", priority: "Medium", date: "5 hours ago", message: "Our call agent T-800 keeps pronouncing 'diaspora' incorrectly during phone screenings. How do we inject phonetic SSML overrides into the Vapi workspace configurations?" },
  { id: "tix-3", customer: "Dunder Mifflin", subject: "Unable to connect Gmail account via OAuth", status: "Resolved", priority: "Low", date: "1 day ago", message: "Every time we authenticate, it says app is in developer test mode. Resolved: Added Dunder Mifflin to workspace test users list." }
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function QualifyAIAdmin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [workflows, setWorkflows] = useState(WORKFLOWS_INITIAL);
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPlan, setFilterPlan] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [timeRange, setTimeRange] = useState("30d");

  // Selection state for Modals
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view_customer', 'edit_customer', 'suspend_confirm', 'email_draft', 'call_transcript', 'ticket_reply'

  // Edit Customer Modal Temp States
  const [editName, setEditName] = useState("");
  const [editCompany, setEditCompany] = useState("");
  const [editPlan, setEditPlan] = useState("Starter");
  const [editEmail, setEditEmail] = useState("");

  // Support Reply State
  const [ticketReplyText, setTicketReplyText] = useState("");

  // System Live Activity Stats
  const [stats, setStats] = useState({
    totalCustomers: 842,
    activeCustomers: 812,
    leadsProcessed: 124809,
    repliesSent: 89432,
    callsTriggered: 18340,
    monthlyRevenue: 48250,
    mrr: 42500,
    conversionRate: 34.2
  });

  // Settings State
  const [llmProvider, setLlmProvider] = useState("Gemini Pro");
  const [systemKey, setSystemKey] = useState("tk_qualify_live_8a82b93ffc2b8c9d0e1a2f3b");
  const [webhookUrl, setWebhookUrl] = useState("https://api.techiehelp.in/v1/webhooks/qualifyai");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Live Logger Interval
  useEffect(() => {
    const logTypes = ["lead", "reply", "call", "workflow", "gmail"];
    const companies = ["Wayne Enterprises", "Stark Industries", "CyberDyne Systems", "Pied Piper", "Acme Corp", "Tyrell Corp"];
    const names = ["Peter Parker", "Clark Kent", "Diana Prince", "Barry Allen", "Hal Jordan", "Arthur Curry", "Victor Stone"];
    const emails = ["spidey@dailybugle.com", "kent@dailyplanet.com", "diana@themyscira.gov", "barry@ccpd.gov", "green@lantern.org", "arthur@atlantis.gov", "cyborg@star.labs"];

    const interval = setInterval(() => {
      const randomType = logTypes[Math.floor(Math.random() * logTypes.length)];
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomEmail = emails[Math.floor(Math.random() * emails.length)];
      
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      let logText = "";
      let status = "success";

      switch (randomType) {
        case "lead":
          const score = Math.floor(Math.random() * 40) + 60; // 60-100
          logText = `AI Qualified Lead: ${randomName} (${randomEmail}, Score: ${score}/100) for ${randomCompany}.`;
          // Trigger slight increment in stats
          setStats(prev => ({
            ...prev,
            leadsProcessed: prev.leadsProcessed + 1,
            repliesSent: score > 75 ? prev.repliesSent + 1 : prev.repliesSent
          }));
          break;
        case "reply":
          logText = `AI Sent Reply: 'Follow up response to booking schedule' to ${randomEmail} for ${randomCompany}.`;
          setStats(prev => ({ ...prev, repliesSent: prev.repliesSent + 1 }));
          break;
        case "call":
          const callSuccess = Math.random() > 0.6;
          const durationMin = Math.floor(Math.random() * 4) + 1;
          const durationSec = Math.floor(Math.random() * 60);
          logText = `AI Triggered Call: Contacted ${randomName} (Duration: ${durationMin}m ${durationSec}s, Status: ${callSuccess ? "Meeting Booked" : "No Answer"}) for ${randomCompany}.`;
          status = callSuccess ? "success" : "warning";
          setStats(prev => ({
            ...prev,
            callsTriggered: prev.callsTriggered + 1,
            conversionRate: callSuccess ? parseFloat((prev.conversionRate + 0.01).toFixed(2)) : prev.conversionRate
          }));
          break;
        case "workflow":
          logText = `Workflow Executed: 'Auto-Ingest & Score Lead' block completed for ${randomCompany}.`;
          break;
        case "gmail":
          logText = `OAuth Sync: Synchronized Gmail Inbox messages successfully for ${randomCompany}.`;
          break;
        default:
          break;
      }

      // Add to logs
      const newLog = {
        id: `log-${Date.now()}`,
        time: timeStr,
        type: randomType,
        text: logText,
        status: status
      };

      setLogs(prev => [newLog, ...prev.slice(0, 49)]); // Keep last 50 logs

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Modal Actions
  const handleOpenEdit = (customer) => {
    setSelectedItem(customer);
    setEditName(customer.name);
    setEditCompany(customer.company);
    setEditPlan(customer.plan);
    setEditEmail(customer.email);
    setModalType("edit_customer");
  };

  const handleSaveEdit = () => {
    setCustomers(prev => prev.map(c => 
      c.id === selectedItem.id 
        ? { ...c, name: editName, company: editCompany, plan: editPlan, email: editEmail }
        : c
    ));
    setModalType(null);
    setSelectedItem(null);
  };

  const handleToggleSuspend = (customer) => {
    setSelectedItem(customer);
    setModalType("suspend_confirm");
  };

  const confirmToggleSuspend = () => {
    setCustomers(prev => prev.map(c => {
      if (c.id === selectedItem.id) {
        const newStatus = c.status === "Active" ? "Suspended" : "Active";
        return { ...c, status: newStatus };
      }
      return c;
    }));
    setModalType(null);
    setSelectedItem(null);
  };

  const handleOpenTicket = (ticket) => {
    setSelectedItem(ticket);
    setTicketReplyText("");
    setModalType("ticket_reply");
  };

  const handleSendTicketReply = () => {
    // Mark as resolved in local state
    INITIAL_LOGS.push({
      id: `log-${Date.now()}`,
      time: "Just now",
      type: "workflow",
      text: `Support Response sent to ${selectedItem.customer} for ticket regarding '${selectedItem.subject}'`,
      status: "success"
    });
    setModalType(null);
    setSelectedItem(null);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Filter & Search Logic
  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = filterPlan === "All" || c.plan === filterPlan;
    const matchesStatus = filterStatus === "All" || c.status === filterStatus;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#030307] text-[#ebebed] font-sans overflow-hidden antialiased selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      
      {/* Background glow effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0f172a]/40 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#0c4a6e]/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[30%] right-[10%] w-[30%] h-[30%] bg-[#581c87]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-white/[0.06] bg-[#05050a]/90 backdrop-blur-2xl flex flex-col justify-between h-screen shrink-0 sticky top-0">
        <div>
          {/* Logo Section */}
          <div className="p-6 flex items-center gap-3 border-b border-white/[0.04]">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#38bdf8] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#38bdf8]/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-white">QualifyAI</h1>
              <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Super Admin</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "customers", label: "Customers", icon: Users, badge: customers.length },
              { id: "emails", label: "Emails", icon: Mail },
              { id: "leads", label: "Leads", icon: Flame },
              { id: "activities", label: "AI Activities", icon: Activity, dot: true },
              { id: "calls", label: "Calls", icon: Phone },
              { id: "workflows", label: "Workflows", icon: GitFork, badge: workflows.length },
              { id: "subscriptions", label: "Subscriptions", icon: CreditCard },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "tickets", label: "Support Tickets", icon: Ticket, badge: SUPPORT_TICKETS.filter(t=>t.status==='Open').length },
              { id: "integrations", label: "Integrations", icon: Layers },
              { id: "settings", label: "Settings", icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group ${
                    isActive 
                      ? "bg-white/[0.05] text-[#38bdf8] border border-white/[0.04] shadow-sm" 
                      : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-105 ${isActive ? "text-[#38bdf8]" : "text-gray-400 group-hover:text-white"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] bg-white/[0.06] text-gray-400 px-1.5 py-0.5 rounded font-mono">
                      {item.badge}
                    </span>
                  )}
                  {item.dot && (
                    <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full animate-pulse mr-1" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer Panel */}
        <div className="p-4 border-t border-white/[0.04] bg-white/[0.01] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-bold text-white text-xs shadow-md border border-white/10">
              AD
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Aditya Kumar</p>
              <p className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                Session Active
              </p>
            </div>
          </div>
          <a href="/" className="text-gray-400 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-white/[0.03]">
            <LogOut className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto pb-12 relative">
        
        {/* HEADER BAR */}
        <header className="sticky top-0 bg-[#030307]/70 backdrop-blur-md z-40 border-b border-white/[0.05] py-4 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Welcome Back, Admin</h2>
              <p className="text-xs text-gray-400 font-mono">TechieHelp QualifyAI Control Center</p>
            </div>
            <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full animate-ping" />
              LIVE DATA STREAM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-400">LLM Processing Speed</p>
              <p className="text-[11px] font-mono text-white font-semibold flex items-center justify-end gap-1">
                <Activity className="w-3.5 h-3.5 text-green-400" />
                1,248 ops/min
              </p>
            </div>
            <div className="h-8 w-px bg-white/[0.08] mx-2" />
            <button 
              onClick={() => {
                // Flash alert that logs synchronized
                const toast = document.createElement("div");
                toast.className = "fixed bottom-5 right-5 z-50 glass border border-[#38bdf8]/30 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-2xl animate-bounce";
                toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> <span class="text-white">Metrics refreshed successfully</span>`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 2500);
              }}
              className="p-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.1] text-gray-300 hover:text-white rounded-lg transition-all"
              title="Refresh Data Streams"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* CONTAINER FOR TABS */}
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              
              {/* ==========================================
                  1. OVERVIEW TAB
                  ========================================== */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* KPI Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Total Customers", value: stats.totalCustomers, trend: "+12.4%", up: true, subtitle: "active subscriptions" },
                      { title: "Leads Processed", value: stats.leadsProcessed.toLocaleString(), trend: "+24.8%", up: true, subtitle: "scored by QualifyAI" },
                      { title: "AI Replies Sent", value: stats.repliesSent.toLocaleString(), trend: "+18.2%", up: true, subtitle: "generated drafts & responses" },
                      { title: "AI Calls Triggered", value: stats.callsTriggered.toLocaleString(), trend: "+8.1%", up: true, subtitle: "via Vapi agent nodes" },
                      { title: "MRR Growth", value: `$${stats.mrr.toLocaleString()}`, trend: "+15.4%", up: true, subtitle: "monthly recurring revenue" },
                      { title: "Conversion Rate", value: `${stats.conversionRate}%`, trend: "+3.1%", up: true, subtitle: "qualification index success" },
                      { title: "Active Workflows", value: workflows.filter(w=>w.status==="Running").length, trend: "Stable", up: true, subtitle: "running automation pipelines" },
                      { title: "Average Score", value: "84.2", trend: "+1.8%", up: true, subtitle: "out of 100 confidence" }
                    ].map((card, i) => (
                      <div key={i} className="glass border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-5 shadow-2xl relative overflow-hidden group transition-all duration-300">
                        {/* subtle grid background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-20" />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                          <div className="flex items-center justify-between text-gray-400 text-xs font-medium mb-2">
                            <span>{card.title}</span>
                            <span className={`text-[10px] font-mono font-bold flex items-center gap-0.5 px-1.5 py-0.5 rounded ${card.up ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                              {card.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                              {card.trend}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-white tracking-tight font-mono">{card.value}</div>
                          <div className="text-[10px] text-gray-500 mt-2 font-mono">{card.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts & Split Screen Feed */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Real-time AI Feed Center (Left 2 columns) */}
                    <div className="lg:col-span-2 glass border border-white/[0.05] rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#38bdf8] animate-pulse" />
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Activity Live Processing Feed</h3>
                        </div>
                        <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-mono">Sync: 1.2s lag</span>
                      </div>

                      <div className="space-y-3 max-h-[360px] overflow-y-auto scrollbar-hide pr-1 min-h-[300px]">
                        <AnimatePresence initial={false}>
                          {logs.slice(0, 6).map((log) => (
                            <motion.div
                              key={log.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="p-3 bg-white/[0.02] border border-white/[0.03] rounded-xl flex items-center justify-between gap-4 text-xs hover:bg-white/[0.04] transition-all"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <span className={`w-2 h-2 rounded-full shrink-0 ${
                                  log.type === "lead" ? "bg-red-500" :
                                  log.type === "reply" ? "bg-[#38bdf8]" :
                                  log.type === "call" ? "bg-amber-400" :
                                  log.type === "workflow" ? "bg-purple-400" : "bg-green-400"
                                }`} />
                                <span className="text-gray-500 font-mono text-[10px] shrink-0">{log.time}</span>
                                <p className="text-gray-300 font-sans truncate">{log.text}</p>
                              </div>
                              <span className="text-[9px] uppercase tracking-wider font-mono text-gray-500 shrink-0">{log.type}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <button 
                        onClick={() => setActiveTab("activities")}
                        className="w-full text-center text-xs text-[#38bdf8] hover:text-white mt-4 font-medium transition-colors"
                      >
                        Open Live Monitor Center →
                      </button>
                    </div>

                    {/* Sales & Lead Performance Funnel (Right column) */}
                    <div className="glass border border-white/[0.05] rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Lead Funnel qualification</h3>
                          <span className="text-[10px] text-gray-500 font-mono">This Month</span>
                        </div>
                        
                        {/* Vertical Funnel Blocks */}
                        <div className="space-y-3">
                          {[
                            { stage: "Ingested Leads", count: "124,809", percent: "100%", width: "w-full", color: "from-[#38bdf8]/40 to-[#38bdf8]/10" },
                            { stage: "Qualified (Score > 60)", count: "58,160", percent: "46.5%", width: "w-[85%]", color: "from-[#38bdf8]/50 to-[#6366f1]/20" },
                            { stage: "Replied / Engaged", count: "42,684", percent: "34.2%", width: "w-[70%]", color: "from-[#6366f1]/60 to-purple-500/20" },
                            { stage: "Meetings Booked", count: "7,820", percent: "6.2%", width: "w-[50%]", color: "from-purple-500/70 to-red-500/20" }
                          ].map((item, idx) => (
                            <div key={idx} className="relative p-2.5 rounded-xl border border-white/[0.03] overflow-hidden bg-white/[0.01]">
                              <div className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r ${item.color} ${item.width} opacity-10 pointer-events-none`} />
                              <div className="flex items-center justify-between text-xs relative z-10">
                                <div>
                                  <p className="font-semibold text-white">{item.stage}</p>
                                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.count} total leads</p>
                                </div>
                                <span className="font-mono text-white text-[11px] font-bold">{item.percent}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab("leads")}
                        className="w-full text-center text-xs text-[#38bdf8] hover:text-white mt-4 font-medium transition-colors"
                      >
                        View Lead Quality Stats →
                      </button>
                    </div>

                  </div>

                  {/* Recent Customers Overview Panel */}
                  <div className="glass border border-white/[0.05] rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Active Customers & API Metrics</h3>
                        <p className="text-xs text-gray-400 mt-1">Real-time status of QualifyAI connected customer environments</p>
                      </div>
                      <button 
                        onClick={() => setActiveTab("customers")}
                        className="text-xs text-[#38bdf8] hover:text-white font-medium transition-colors border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 px-3 py-1.5 rounded-lg bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10"
                      >
                        Manage All Customers
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.05] text-gray-400 font-mono uppercase text-[10px]">
                            <th className="pb-3 font-semibold">Customer Name</th>
                            <th className="pb-3 font-semibold">Company</th>
                            <th className="pb-3 font-semibold">Plan</th>
                            <th className="pb-3 font-semibold">Status</th>
                            <th className="pb-3 font-semibold">Gmail Oauth</th>
                            <th className="pb-3 font-semibold">API Operations</th>
                            <th className="pb-3 font-semibold">Last Activity</th>
                            <th className="pb-3 font-semibold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                          {customers.slice(0, 4).map((c) => (
                            <tr key={c.id} className="hover:bg-white/[0.01] transition-colors">
                              <td className="py-4 text-white font-medium">{c.name}</td>
                              <td className="py-4 text-gray-300">{c.company}</td>
                              <td className="py-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                  c.plan === "Enterprise" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                                  c.plan === "Growth" ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20" :
                                  "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                                }`}>
                                  {c.plan}
                                </span>
                              </td>
                              <td className="py-4">
                                <span className={`flex items-center gap-1.5 text-[11px] ${c.status === "Active" ? "text-green-400" : "text-red-400"}`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${c.status === "Active" ? "bg-green-400" : "bg-red-400 animate-pulse"}`} />
                                  {c.status}
                                </span>
                              </td>
                              <td className="py-4 text-center">
                                {c.gmailConnected ? (
                                  <span className="text-green-400 text-xs flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Syncing</span>
                                ) : (
                                  <span className="text-gray-500 text-xs flex items-center gap-1"><X className="w-3.5 h-3.5" /> Disconnected</span>
                                )}
                              </td>
                              <td className="py-4 font-mono font-semibold text-white">{c.apiCalls.toLocaleString()}</td>
                              <td className="py-4 text-gray-400 font-mono">{c.lastActivity}</td>
                              <td className="py-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button onClick={() => { setSelectedItem(c); setModalType("view_customer"); }} className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-gray-400 hover:text-white" title="View Metrics"><Eye className="w-3.5 h-3.5" /></button>
                                  <button onClick={() => handleOpenEdit(c)} className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-gray-400 hover:text-[#38bdf8]" title="Edit Configuration"><Edit2 className="w-3.5 h-3.5" /></button>
                                  <button onClick={() => handleToggleSuspend(c)} className={`p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded ${c.status === "Active" ? "text-red-400 hover:bg-red-500/10" : "text-green-400 hover:bg-green-500/10"}`} title={c.status === "Active" ? "Suspend" : "Activate"}>
                                    {c.status === "Active" ? <UserMinus className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* ==========================================
                  2. CUSTOMERS TAB
                  ========================================== */}
              {activeTab === "customers" && (
                <div className="space-y-6">
                  {/* Title & Filters */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass border border-white/[0.05] p-5 rounded-2xl">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="Search customers by name, company, email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl text-xs text-white transition-all font-sans"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Filter className="w-3.5 h-3.5" />
                        <span>Filter Plan:</span>
                      </div>
                      <select 
                        value={filterPlan} 
                        onChange={(e) => setFilterPlan(e.target.value)}
                        className="bg-white/[0.03] border border-white/[0.06] text-xs text-white rounded-lg p-2 outline-none cursor-pointer"
                      >
                        <option value="All" className="bg-[#05050a]">All Plans</option>
                        <option value="Starter" className="bg-[#05050a]">Starter</option>
                        <option value="Growth" className="bg-[#05050a]">Growth</option>
                        <option value="Enterprise" className="bg-[#05050a]">Enterprise</option>
                      </select>

                      <select 
                        value={filterStatus} 
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-white/[0.03] border border-white/[0.06] text-xs text-white rounded-lg p-2 outline-none cursor-pointer"
                      >
                        <option value="All" className="bg-[#05050a]">All Status</option>
                        <option value="Active" className="bg-[#05050a]">Active</option>
                        <option value="Suspended" className="bg-[#05050a]">Suspended</option>
                      </select>
                    </div>
                  </div>

                  {/* Full Table */}
                  <div className="glass border border-white/[0.05] rounded-2xl p-6 shadow-2xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.05] text-gray-400 font-mono uppercase text-[10px]">
                            <th className="pb-3 font-semibold">Name</th>
                            <th className="pb-3 font-semibold">Company / Email</th>
                            <th className="pb-3 font-semibold">Tier Plan</th>
                            <th className="pb-3 font-semibold">Workflows</th>
                            <th className="pb-3 font-semibold text-center">Gmail Integration</th>
                            <th className="pb-3 font-semibold">API Ops</th>
                            <th className="pb-3 font-semibold">Status</th>
                            <th className="pb-3 font-semibold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                          {filteredCustomers.length > 0 ? (
                            filteredCustomers.map((c) => (
                              <tr key={c.id} className="hover:bg-white/[0.01] transition-colors">
                                <td className="py-4 text-white font-medium">{c.name}</td>
                                <td className="py-4">
                                  <div className="text-gray-300 font-medium">{c.company}</div>
                                  <div className="text-gray-500 text-[10px] font-mono mt-0.5">{c.email}</div>
                                </td>
                                <td className="py-4">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                    c.plan === "Enterprise" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                                    c.plan === "Growth" ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20" :
                                    "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                                  }`}>
                                    {c.plan}
                                  </span>
                                </td>
                                <td className="py-4 font-mono font-semibold text-white">{c.workflowsCount} Active</td>
                                <td className="py-4 text-center">
                                  {c.gmailConnected ? (
                                    <span className="text-green-400 text-xs inline-flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Syncing</span>
                                  ) : (
                                    <span className="text-gray-500 text-xs inline-flex items-center gap-1"><X className="w-3.5 h-3.5" /> Off</span>
                                  )}
                                </td>
                                <td className="py-4 font-mono text-white">{c.apiCalls.toLocaleString()}</td>
                                <td className="py-4">
                                  <span className={`flex items-center gap-1.5 text-[11px] ${c.status === "Active" ? "text-green-400" : "text-red-400"}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${c.status === "Active" ? "bg-green-400" : "bg-red-400 animate-pulse"}`} />
                                    {c.status}
                                  </span>
                                </td>
                                <td className="py-4 text-right">
                                  <div className="flex items-center justify-end gap-2">
                                    <button onClick={() => { setSelectedItem(c); setModalType("view_customer"); }} className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-gray-400 hover:text-white" title="View Stats"><Eye className="w-3.5 h-3.5" /></button>
                                    <button onClick={() => handleOpenEdit(c)} className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-gray-400 hover:text-[#38bdf8]" title="Edit Tier"><Edit2 className="w-3.5 h-3.5" /></button>
                                    <button onClick={() => handleToggleSuspend(c)} className={`p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded ${c.status === "Active" ? "text-red-400 hover:bg-red-500/10" : "text-green-400 hover:bg-green-500/10"}`} title={c.status === "Active" ? "Suspend" : "Activate"}>
                                      {c.status === "Active" ? <UserMinus className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="8" className="py-12 text-center text-gray-500">
                                <Inbox className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                                <p>No customers matching filters</p>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  3. EMAILS ANALYTICS TAB
                  ========================================== */}
              {activeTab === "emails" && (
                <div className="space-y-6">
                  {/* Email Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Emails Analyzed</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">104,230</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +15.2% MoM
                      </p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">AI Generated Drafts</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">89,432</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +18.2% MoM
                      </p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Response Send Rate</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">85.8%</h4>
                      <p className="text-[9px] font-mono text-gray-500 mt-2">Auto-submitted replies</p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Average Qualification Score</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">84.2/100</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +1.8% average
                      </p>
                    </div>
                  </div>

                  {/* SVG Email Trend Line Chart */}
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">AI Automated Email Volume (Last 7 Days)</h3>
                    <div className="h-64 w-full">
                      <svg viewBox="0 0 700 240" className="w-full h-full">
                        {/* Grids */}
                        <line x1="50" y1="40" x2="650" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="50" y1="90" x2="650" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="50" y1="140" x2="650" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="50" y1="190" x2="650" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        
                        {/* Line 1 - Analyzed Leads */}
                        <path
                          d="M 50 180 Q 150 140 250 80 T 450 110 T 650 40"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Line 2 - Auto Replies */}
                        <path
                          d="M 50 200 Q 150 160 250 110 T 450 130 T 650 60"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="2.5"
                          strokeDasharray="4,4"
                          strokeLinecap="round"
                        />

                        {/* Data Nodes */}
                        <circle cx="250" cy="80" r="5" fill="#38bdf8" stroke="#030307" strokeWidth="2" />
                        <circle cx="450" cy="110" r="5" fill="#38bdf8" stroke="#030307" strokeWidth="2" />
                        <circle cx="650" cy="40" r="5" fill="#38bdf8" stroke="#030307" strokeWidth="2" />

                        {/* Labels */}
                        <text x="50" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Mon</text>
                        <text x="150" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Tue</text>
                        <text x="250" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Wed</text>
                        <text x="350" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Thu</text>
                        <text x="450" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Fri</text>
                        <text x="550" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Sat</text>
                        <text x="650" y="215" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Sun</text>

                        <text x="45" y="45" fill="#6b7280" fontSize="9" textAnchor="end" fontFamily="monospace">20k</text>
                        <text x="45" y="95" fill="#6b7280" fontSize="9" textAnchor="end" fontFamily="monospace">15k</text>
                        <text x="45" y="145" fill="#6b7280" fontSize="9" textAnchor="end" fontFamily="monospace">10k</text>
                        <text x="45" y="195" fill="#6b7280" fontSize="9" textAnchor="end" fontFamily="monospace">5k</text>
                      </svg>
                    </div>

                    <div className="flex items-center gap-6 mt-4 text-[10px] font-mono text-gray-400 justify-center">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-1.5 bg-[#38bdf8] rounded-full inline-block" />
                        <span>Incoming Leads Scanned</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-1.5 bg-[#6366f1] border-b border-dashed inline-block" />
                        <span>AI Replied Drafts Outbox</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Emails Queue */}
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Live Email Draft Ingestion Queue</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.05] text-gray-400 font-mono uppercase text-[10px]">
                            <th className="pb-3 font-semibold">Customer Account</th>
                            <th className="pb-3 font-semibold">Lead Address</th>
                            <th className="pb-3 font-semibold">Email Subject</th>
                            <th className="pb-3 font-semibold">Confidence Score</th>
                            <th className="pb-3 font-semibold">Status Block</th>
                            <th className="pb-3 font-semibold text-right">Draft Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                          {RECENT_EMAILS.map((email) => (
                            <tr key={email.id} className="hover:bg-white/[0.01]">
                              <td className="py-4 text-white font-medium">{email.customer}</td>
                              <td className="py-4 text-gray-300 font-mono">{email.leadEmail}</td>
                              <td className="py-4 text-gray-400 truncate max-w-xs">{email.subject}</td>
                              <td className="py-4 font-mono font-semibold">
                                <span className={`px-2 py-0.5 rounded ${
                                  email.score >= 80 ? "bg-green-500/10 text-green-400" :
                                  email.score >= 60 ? "bg-amber-500/10 text-amber-400" :
                                  "bg-red-500/10 text-red-400"
                                }`}>
                                  {email.score}/100
                                </span>
                              </td>
                              <td className="py-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  email.status === "Qualified" ? "bg-green-500/10 text-green-400" :
                                  email.status === "Pending" ? "bg-amber-500/10 text-amber-400 animate-pulse" :
                                  "bg-gray-500/10 text-gray-400"
                                }`}>
                                  {email.status}
                                </span>
                              </td>
                              <td className="py-4 text-right">
                                <button
                                  onClick={() => { setSelectedItem(email); setModalType("email_draft"); }}
                                  className="text-xs text-[#38bdf8] hover:underline flex items-center justify-end gap-1.5 ml-auto"
                                >
                                  Review Draft <ChevronRight className="w-3 h-3" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* ==========================================
                  4. LEADS OVERVIEW TAB
                  ========================================== */}
              {activeTab === "leads" && (
                <div className="space-y-6">
                  {/* Lead Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass border border-white/[0.05] p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase">Hot Leads (Score 80-100)</p>
                        <h4 className="text-3xl font-bold font-mono text-red-400 mt-2">12,430</h4>
                        <p className="text-[10px] text-gray-500 mt-2">Recommended for immediate call sync</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <Flame className="w-6 h-6 animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="glass border border-white/[0.05] p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase">Warm Leads (Score 50-79)</p>
                        <h4 className="text-3xl font-bold font-mono text-amber-400 mt-2">24,590</h4>
                        <p className="text-[10px] text-gray-500 mt-2">Added to email automation sequences</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="glass border border-white/[0.05] p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase">Cold Leads (Score &lt; 50)</p>
                        <h4 className="text-3xl font-bold font-mono text-blue-400 mt-2">21,140</h4>
                        <p className="text-[10px] text-gray-500 mt-2">Archived / exported to CSV databases</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Database className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Top Performing Customers by Qualified Leads */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass border border-white/[0.05] p-6 rounded-2xl">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Top Performing Customer Workspaces</h3>
                      <div className="space-y-4">
                        {[
                          { name: "Tony Stark", company: "Stark Industries", leads: "1,248", score: "94.2%", bar: "w-[94.2%]" },
                          { name: "Bruce Wayne", company: "Wayne Enterprises", leads: "982", score: "89.8%", bar: "w-[89.8%]" },
                          { name: "Sarah Connor", company: "CyberDyne Systems", leads: "740", score: "84.5%", bar: "w-[84.5%]" },
                          { name: "Richard Hendricks", company: "Pied Piper", leads: "420", score: "78.2%", bar: "w-[78.2%]" }
                        ].map((cust, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <div>
                                <span className="text-white font-medium">{cust.company}</span>
                                <span className="text-gray-500 ml-2 font-mono text-[10px]">({cust.leads} qualified leads)</span>
                              </div>
                              <span className="font-mono text-[#38bdf8] font-bold">{cust.score} Success</span>
                            </div>
                            <div className="w-full bg-white/[0.03] rounded-full h-1.5 overflow-hidden border border-white/[0.05]">
                              <div className={`bg-gradient-to-r from-[#38bdf8] to-[#6366f1] h-full ${cust.bar} rounded-full`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between">
                      <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">QualifyAI Accuracy Index</h3>
                        <div className="flex items-center justify-center py-4 relative">
                          {/* Radial Progress Ring SVG */}
                          <svg width="120" height="120" className="transform -rotate-90">
                            <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="none" />
                            <circle cx="60" cy="60" r="50" stroke="#38bdf8" strokeWidth="8" fill="none" strokeDasharray="314.15" strokeDashoffset="27.6" strokeLinecap="round" />
                          </svg>
                          <div className="absolute text-center">
                            <p className="text-xl font-bold font-mono text-white">91.2%</p>
                            <p className="text-[8px] text-gray-500 uppercase tracking-widest font-mono mt-0.5">Confidence</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-400 text-center leading-relaxed mt-4">
                          Based on feedback loops of 89,432 automated email sequences audited by the administrative safety check pipelines.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ==========================================
                  5. AI ACTIVITIES TIMELINE
                  ========================================== */}
              {activeTab === "activities" && (
                <div className="space-y-6">
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-4 mb-6 gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">QualifyAI Real-Time Event Ledger</h3>
                        <p className="text-xs text-gray-400 mt-1">Real-time ledger of qualified actions, emails outbox, and call handshakes</p>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.05]">
                        Buffer size: 50 active events
                      </span>
                    </div>

                    <div className="space-y-3">
                      {logs.map((log) => (
                        <div
                          key={log.id}
                          className="p-3.5 bg-white/[0.01] border border-white/[0.03] rounded-xl flex items-center justify-between gap-4 text-xs hover:bg-white/[0.03] hover:border-white/[0.06] transition-all"
                        >
                          <div className="flex items-center gap-3.5 flex-1 min-w-0">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${
                              log.type === "lead" ? "bg-red-500" :
                              log.type === "reply" ? "bg-[#38bdf8]" :
                              log.type === "call" ? "bg-amber-400" :
                              log.type === "workflow" ? "bg-purple-400" : "bg-green-400"
                            }`} />
                            <span className="text-gray-500 font-mono text-[10px] shrink-0">{log.time}</span>
                            <p className="text-gray-200 font-sans">{log.text}</p>
                          </div>
                          <span className={`px-2 py-0.5 text-[9px] font-mono rounded ${
                            log.type === "lead" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                            log.type === "reply" ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20" :
                            log.type === "call" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                            log.type === "workflow" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                            "bg-green-500/10 text-green-400 border border-green-500/20"
                          }`}>
                            {log.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  6. CALLS ANALYTICS TAB
                  ========================================== */}
              {activeTab === "calls" && (
                <div className="space-y-6">
                  {/* Call Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Calls Ingested</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">18,340</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +8.1% MoM
                      </p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Call Success Rate</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">42.1%</h4>
                      <p className="text-[9px] font-mono text-gray-500 mt-2">Meetings booked success</p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Average Call Duration</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">2m 45s</h4>
                      <p className="text-[9px] font-mono text-gray-500 mt-2">AI conversational length</p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Meetings Scheduled</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">7,820</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +12.4% MoM
                      </p>
                    </div>
                  </div>

                  {/* Call Logs Table */}
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Live Vapi Calling Node Transcripts</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.05] text-gray-400 font-mono uppercase text-[10px]">
                            <th className="pb-3 font-semibold">Customer Account</th>
                            <th className="pb-3 font-semibold">Lead Contact Name</th>
                            <th className="pb-3 font-semibold">Phone Number</th>
                            <th className="pb-3 font-semibold">Duration</th>
                            <th className="pb-3 font-semibold">Call Outcome</th>
                            <th className="pb-3 font-semibold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                          {RECENT_CALLS.map((call) => (
                            <tr key={call.id} className="hover:bg-white/[0.01]">
                              <td className="py-4 text-white font-medium">{call.customer}</td>
                              <td className="py-4 text-gray-300 font-medium">{call.leadName}</td>
                              <td className="py-4 text-gray-500 font-mono">{call.phone}</td>
                              <td className="py-4 text-gray-400 font-mono">{call.duration}</td>
                              <td className="py-4">
                                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                                  call.status === "Booked" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                                  call.status === "Busy/Voicemail" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                                  "bg-red-500/10 text-red-400 border border-red-500/20"
                                }`}>
                                  {call.status}
                                </span>
                              </td>
                              <td className="py-4 text-right">
                                <button
                                  onClick={() => { setSelectedItem(call); setModalType("call_transcript"); }}
                                  className="text-xs text-[#38bdf8] hover:underline flex items-center justify-end gap-1.5 ml-auto"
                                >
                                  View Transcript <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  7. WORKFLOW MONITOR
                  ========================================== */}
              {activeTab === "workflows" && (
                <div className="space-y-6">
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-6">
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Active automation workflow loops</h3>
                        <p className="text-xs text-gray-400 mt-1">Status of system workflows run on QualifyAI</p>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs text-[#38bdf8] border border-[#38bdf8]/20 px-3 py-1.5 rounded-lg bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 transition-colors">
                        <Plus className="w-4 h-4" /> Create Core Workflow
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {workflows.map((wf) => (
                        <div 
                          key={wf.id}
                          className="p-5 bg-white/[0.01] border border-white/[0.03] hover:border-white/[0.06] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-all"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-sm font-bold text-white">{wf.name}</h4>
                              <span className="text-[10px] text-gray-500 font-mono bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">
                                Customer: {wf.customer}
                              </span>
                            </div>
                            <div className="flex items-center gap-6 mt-3 text-[11px] font-mono text-gray-500">
                              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Success Rate: {wf.successRate}%</span>
                              <span className="flex items-center gap-1"><Database className="w-3.5 h-3.5 text-[#38bdf8]" /> Executions: {wf.executions.toLocaleString()}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-purple-400" /> Last Active: {wf.lastRun}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 justify-between border-t border-white/[0.04] md:border-none pt-4 md:pt-0">
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                              wf.status === "Running" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                            }`}>
                              {wf.status}
                            </span>
                            <button
                              onClick={() => {
                                setWorkflows(prev => prev.map(w => {
                                  if (w.id === wf.id) {
                                    const newStatus = w.status === "Running" ? "Paused" : "Running";
                                    return { ...w, status: newStatus };
                                  }
                                  return w;
                                }));
                              }}
                              className={`p-2 rounded-lg border transition-all ${
                                wf.status === "Running" 
                                  ? "bg-red-500/5 hover:bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/30"
                                  : "bg-green-500/5 hover:bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/30"
                              }`}
                              title={wf.status === "Running" ? "Pause Workflow" : "Run Workflow"}
                            >
                              {wf.status === "Running" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  8. SUBSCRIPTIONS PAGE
                  ========================================== */}
              {activeTab === "subscriptions" && (
                <div className="space-y-6">
                  {/* Subscription KPI cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Free Users</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">210</h4>
                      <p className="text-[9px] font-mono text-gray-500 mt-2">Active sandbox access</p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Paid Active Users</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">632</h4>
                      <p className="text-[9px] font-mono text-[#38bdf8] mt-2">75.0% Conversion ratio</p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Total Revenue (MRR)</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">$42,500</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2 flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +15.4% MoM
                      </p>
                    </div>
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Annualized Run Rate</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">$510,000</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2">Based on current MRR</p>
                    </div>
                  </div>

                  {/* Plan Distribution and Recent Payments */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Plan distribution */}
                    <div className="glass border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between">
                      <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Subscription Plan Distribution</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Enterprise ($899+)", count: "112 users", percent: "17.7%", width: "w-[17.7%]", color: "bg-purple-500" },
                            { name: "Growth ($199)", count: "340 users", percent: "53.8%", width: "w-[53.8%]", color: "bg-[#38bdf8]" },
                            { name: "Starter ($49)", count: "180 users", percent: "28.5%", width: "w-[28.5%]", color: "bg-gray-400" }
                          ].map((plan, idx) => (
                            <div key={idx} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-white font-medium">{plan.name}</span>
                                <span className="text-gray-500 font-mono text-[10px]">{plan.count} ({plan.percent})</span>
                              </div>
                              <div className="w-full bg-white/[0.03] rounded-full h-2 overflow-hidden border border-white/[0.05]">
                                <div className={`h-full ${plan.color} ${plan.width} rounded-full`} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono mt-6 text-center border-t border-white/[0.04] pt-4">
                        Aggregate calculated from 632 active paid accounts.
                      </div>
                    </div>

                    {/* Recent Payments */}
                    <div className="lg:col-span-2 glass border border-white/[0.05] p-6 rounded-2xl">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Recent Invoices Handshakes</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-white/[0.05] text-gray-400 font-mono uppercase text-[10px]">
                              <th className="pb-3 font-semibold">Transaction ID</th>
                              <th className="pb-3 font-semibold">Customer Account</th>
                              <th className="pb-3 font-semibold">Tier Plan</th>
                              <th className="pb-3 font-semibold">Total Paid</th>
                              <th className="pb-3 font-semibold">Timestamp</th>
                              <th className="pb-3 font-semibold text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/[0.03]">
                            {RECENT_PAYMENTS.map((p) => (
                              <tr key={p.id} className="hover:bg-white/[0.01]">
                                <td className="py-3.5 text-gray-400 font-mono text-[10px]">{p.id.toUpperCase()}</td>
                                <td className="py-3.5 text-white font-medium">{p.customer}</td>
                                <td className="py-3.5">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                    p.plan === "Enterprise" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                                    "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                                  }`}>
                                    {p.plan}
                                  </span>
                                </td>
                                <td className="py-3.5 text-white font-mono font-semibold">{p.amount}</td>
                                <td className="py-3.5 text-gray-500 font-mono">{p.date}</td>
                                <td className="py-3.5 text-right">
                                  <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-mono font-bold">
                                    {p.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  9. ANALYTICS PAGE
                  ========================================== */}
              {activeTab === "analytics" && (
                <div className="space-y-6">
                  {/* Select timeline */}
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">QualifyAI Performance Deep-Dive</h3>
                    <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[10px] font-mono">
                      {["7d", "30d", "90d", "All"].map(range => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={`px-3 py-1.5 rounded-lg transition-all ${
                            timeRange === range ? "bg-white/[0.06] text-[#38bdf8] font-bold" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {range.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dual Chart growth grids */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Revenue Growth Chart */}
                    <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">MRR Revenue Growth ($ USD)</h3>
                      <div className="h-64">
                        <svg viewBox="0 0 500 240" className="w-full h-full">
                          {/* Grid line */}
                          <line x1="40" y1="40" x2="480" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="90" x2="480" y2="90" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="140" x2="480" y2="140" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="190" x2="480" y2="190" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                          {/* Gradient Fill */}
                          <defs>
                            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Filled area path */}
                          <path
                            d="M 40 190 Q 140 150 240 110 T 440 60 L 480 60 L 480 190 Z"
                            fill="url(#chartGlow)"
                          />

                          {/* Top stroke */}
                          <path
                            d="M 40 190 Q 140 150 240 110 T 480 60"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />

                          {/* Highlight Node */}
                          <circle cx="480" cy="60" r="5" fill="#38bdf8" stroke="#030307" strokeWidth="2" />

                          {/* Axis labels */}
                          <text x="40" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Q1</text>
                          <text x="180" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Q2</text>
                          <text x="330" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Q3</text>
                          <text x="480" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Q4</text>
                        </svg>
                      </div>
                    </div>

                    {/* Customer Growth Chart */}
                    <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Customer Ingestion Rate</h3>
                      <div className="h-64">
                        <svg viewBox="0 0 500 240" className="w-full h-full">
                          <line x1="40" y1="40" x2="480" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="90" x2="480" y2="90" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="140" x2="480" y2="140" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                          <line x1="40" y1="190" x2="480" y2="190" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                          {/* Double lines */}
                          <path
                            d="M 40 170 Q 140 120 240 80 T 480 40"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          
                          <circle cx="480" cy="40" r="5" fill="#6366f1" stroke="#030307" strokeWidth="2" />
                          
                          <text x="40" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Jan</text>
                          <text x="180" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Mar</text>
                          <text x="330" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">May</text>
                          <text x="480" y="210" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="monospace">Jul</text>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* ==========================================
                  10. SUPPORT TICKETS PAGE
                  ========================================== */}
              {activeTab === "tickets" && (
                <div className="space-y-6">
                  {/* Status header */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Open Support Tickets</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">2</h4>
                      <p className="text-[9px] font-mono text-red-400 mt-2">Requires admin follow-up</p>
                    </div>
                    
                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Resolved (Last 24h)</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">12</h4>
                      <p className="text-[9px] font-mono text-green-400 mt-2">Resolved rate: 98%</p>
                    </div>

                    <div className="glass border border-white/[0.05] p-5 rounded-2xl">
                      <p className="text-gray-400 text-xs font-semibold">Average Response Time</p>
                      <h4 className="text-2xl font-bold font-mono text-white mt-1">18 mins</h4>
                      <p className="text-[9px] font-mono text-gray-500 mt-2">Under target metric of 1hr</p>
                    </div>
                  </div>

                  {/* List of tickets */}
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Support ledger & customer requests</h3>
                    <div className="space-y-4">
                      {SUPPORT_TICKETS.map((t) => (
                        <div key={t.id} className="p-5 bg-white/[0.01] border border-white/[0.03] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-all">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-sm font-bold text-white">{t.subject}</h4>
                              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                                t.status === "Open" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"
                              }`}>
                                {t.status}
                              </span>
                              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                                t.priority === "High" ? "bg-purple-500/10 text-purple-400" : "bg-gray-500/10 text-gray-400"
                              }`}>
                                {t.priority} Priority
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed italic">"{t.message}"</p>
                            <p className="text-[10px] text-gray-500 font-mono mt-3">Customer Workspace: {t.customer} • Received {t.date}</p>
                          </div>

                          <div className="shrink-0 text-right">
                            {t.status === "Open" ? (
                              <button
                                onClick={() => handleOpenTicket(t)}
                                className="text-xs bg-[#38bdf8] text-black font-semibold px-4 py-2 rounded-lg hover:bg-white transition-all shadow-lg"
                              >
                                Answer Ticket
                              </button>
                            ) : (
                              <span className="text-[10px] font-mono text-gray-500">Solved by Support Desk</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ==========================================
                  11. INTEGRATIONS PAGE
                  ========================================== */}
              {activeTab === "integrations" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Gmail API Node", status: "Connected", code: "gmail_connected", text: "Connected via Google OAuth2. Scans incoming customer mail boxes to qualify leads.", connected: true },
                      { name: "Google Sheets", status: "Connected", code: "sheets_connected", text: "Synchronizes qualified lead outputs into client Google Spreadsheets.", connected: true },
                      { name: "Gemini 1.5 Pro", status: "Connected", code: "gemini_connected", text: "Main language processing backend for parsing emails and scoring profiles.", connected: true },
                      { name: "Vapi Voice Node", status: "Connected", code: "vapi_connected", text: "Triggers AI outbound phone agent calls automatically for high-qualified leads.", connected: true },
                      { name: "WhatsApp Gateway", status: "Disconnected", code: "whatsapp_connected", text: "Outbox channels to follow up with leads via WhatsApp chat protocols.", connected: false }
                    ].map((integ, idx) => (
                      <div key={idx} className="glass border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between h-56 hover:border-white/[0.1] transition-all relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 pointer-events-none" />
                        <div>
                          <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{integ.name}</h4>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              integ.connected ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}>
                              {integ.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed font-sans">{integ.text}</p>
                        </div>

                        <div className="border-t border-white/[0.04] pt-4 mt-4 flex items-center justify-between">
                          <span className="text-[9px] font-mono text-gray-500">API Sync: 100% SLA uptime</span>
                          <button 
                            onClick={() => {
                              const toast = document.createElement("div");
                              toast.className = "fixed bottom-5 right-5 z-50 glass border border-[#38bdf8]/30 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-2xl animate-bounce";
                              toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> <span class="text-white">${integ.name} sync re-scheduled</span>`;
                              document.body.appendChild(toast);
                              setTimeout(() => toast.remove(), 2500);
                            }}
                            className="text-xs text-[#38bdf8] hover:text-white font-medium transition-colors"
                          >
                            {integ.connected ? "Reconnect Gate" : "Authorize Integration"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==========================================
                  12. SETTINGS PAGE
                  ========================================== */}
              {activeTab === "settings" && (
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="glass border border-white/[0.05] p-6 rounded-2xl">
                    <div className="border-b border-white/[0.05] pb-4 mb-6">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-[#38bdf8]" />
                        QualifyAI Settings Configuration
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">Configure global AI LLM defaults and key endpoints</p>
                    </div>

                    <form onSubmit={handleSaveSettings} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 block">Default Language Model Processing Engine</label>
                        <select 
                          value={llmProvider}
                          onChange={(e) => setLlmProvider(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/50 text-xs text-white rounded-xl p-3 outline-none cursor-pointer"
                        >
                          <option value="Gemini Pro" className="bg-[#05050a]">Gemini 1.5 Pro (Google DeepMind) - Default</option>
                          <option value="GPT-4o" className="bg-[#05050a]">GPT-4o API Node (OpenAI)</option>
                          <option value="Claude 3.5 Sonnet" className="bg-[#05050a]">Claude 3.5 Sonnet (Anthropic)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 block">System Administrative Token Code (API Key)</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            value={systemKey}
                            onChange={(e) => setSystemKey(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-3 text-xs text-white font-mono"
                          />
                          <Shield className="w-4 h-4 text-gray-500 absolute right-3 top-3.5" />
                        </div>
                        <p className="text-[10px] text-gray-500 font-mono">Keep this key private. It unlocks super admin metrics.</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-300 block">Global Webhook Endpoint</label>
                        <input 
                          type="text" 
                          value={webhookUrl}
                          onChange={(e) => setWebhookUrl(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-3 text-xs text-white font-mono"
                        />
                      </div>

                      <div className="border-t border-white/[0.04] pt-6 flex items-center justify-between">
                        {saveSuccess ? (
                          <span className="text-xs text-green-400 font-medium flex items-center gap-1.5 animate-pulse">
                            <Check className="w-4 h-4" /> Configuration saved successfully
                          </span>
                        ) : (
                          <span className="text-[10px] text-gray-500 font-mono">Last updated: Just now</span>
                        )}
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#38bdf8] to-[#6366f1] text-black font-semibold text-xs px-6 py-2.5 rounded-xl hover:shadow-lg transition-all"
                        >
                          Save Configurations
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>

      </main>

      {/* ==========================================
          MODALS DRAWER PORTAL SYSTEM
          ========================================== */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg glass border border-white/[0.08] bg-[#07070c] rounded-2xl p-6 shadow-2xl overflow-hidden z-10"
            >
              
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {modalType === "view_customer" && "Customer Operational metrics"}
                  {modalType === "edit_customer" && "Configure Customer Tier Plan"}
                  {modalType === "suspend_confirm" && "Authentication override"}
                  {modalType === "email_draft" && "AI Outbox Draft review"}
                  {modalType === "call_transcript" && "Vapi Calling Node transcript"}
                  {modalType === "ticket_reply" && "Response Support Console"}
                </h4>
                <button 
                  onClick={() => { setModalType(null); setSelectedItem(null); }}
                  className="p-1.5 rounded-lg hover:bg-white/[0.05] text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* BODY CONTENT */}

              {/* MODAL 1: VIEW CUSTOMER */}
              {modalType === "view_customer" && selectedItem && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm">
                      {selectedItem.company.slice(0,2).toUpperCase()}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm">{selectedItem.company}</h5>
                      <p className="text-xs text-gray-500 font-mono">Workspace ID: {selectedItem.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-white/[0.04] py-4 my-2 text-xs">
                    <div>
                      <p className="text-gray-500">Contact Admin</p>
                      <p className="text-white mt-0.5">{selectedItem.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">{selectedItem.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Subscription Tier</p>
                      <p className="text-white font-semibold mt-0.5">{selectedItem.plan} Tier</p>
                      <p className="text-[10px] text-[#38bdf8] font-mono mt-0.5">${selectedItem.mrr}/month recurring</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Connected Accounts</p>
                      <p className="text-white mt-0.5 flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedItem.gmailConnected ? 'bg-green-400' : 'bg-gray-500'}`} />
                        Gmail: {selectedItem.gmailConnected ? "Synchronized" : "Off"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">API Operations</p>
                      <p className="text-white font-mono font-bold mt-0.5">{selectedItem.apiCalls.toLocaleString()} calls</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Monthly Usage Threshold Allocation</p>
                    <div className="w-full bg-white/[0.03] rounded-full h-2 overflow-hidden border border-white/[0.05]">
                      <div className="bg-gradient-to-r from-[#38bdf8] to-[#6366f1] h-full w-[65%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-gray-500">
                      <span>{selectedItem.apiCalls.toLocaleString()} / 200,000 operations</span>
                      <span>65% tier load</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 2: EDIT CUSTOMER CONFIG */}
              {modalType === "edit_customer" && selectedItem && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Workspace Customer Name</label>
                    <input 
                      type="text" 
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Company Brand</label>
                    <input 
                      type="text" 
                      value={editCompany}
                      onChange={(e) => setEditCompany(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Workspace Email Address</label>
                    <input 
                      type="text" 
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Subscription Plan Tier</label>
                    <select 
                      value={editPlan}
                      onChange={(e) => setEditPlan(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-2.5 text-xs text-white"
                    >
                      <option value="Starter" className="bg-[#05050a]">Starter ($49/mo)</option>
                      <option value="Growth" className="bg-[#05050a]">Growth ($199/mo)</option>
                      <option value="Enterprise" className="bg-[#05050a]">Enterprise ($899/mo)</option>
                    </select>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4 mt-6 flex justify-end gap-3">
                    <button 
                      onClick={() => setModalType(null)}
                      className="px-4 py-2 border border-white/[0.05] hover:bg-white/[0.03] text-gray-400 hover:text-white rounded-xl text-xs transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveEdit}
                      className="px-5 py-2 bg-[#38bdf8] text-black font-semibold rounded-xl text-xs hover:bg-white transition-all"
                    >
                      Save Configurations
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 3: SUSPEND CONFIRMATION */}
              {modalType === "suspend_confirm" && selectedItem && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start gap-2.5 text-xs leading-relaxed">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-bold">Caution: Suspensions override live workflow loops</p>
                      <p className="mt-1">
                        Suspending <strong>{selectedItem.company}</strong> will pause all active outbound voice dialing agents, block incoming webhook ingest pipelines, and revoke authorization logs.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Are you sure you want to {selectedItem.status === "Active" ? "suspend" : "activate"} this environment?
                  </p>

                  <div className="border-t border-white/[0.05] pt-4 mt-6 flex justify-end gap-3">
                    <button 
                      onClick={() => setModalType(null)}
                      className="px-4 py-2 border border-white/[0.05] hover:bg-white/[0.03] text-gray-400 hover:text-white rounded-xl text-xs transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={confirmToggleSuspend}
                      className={`px-5 py-2 text-black font-semibold rounded-xl text-xs transition-all ${
                        selectedItem.status === "Active" ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
                      }`}
                    >
                      Confirm {selectedItem.status === "Active" ? "Suspension" : "Activation"}
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 4: EMAIL DRAFT PREVIEW */}
              {modalType === "email_draft" && selectedItem && (
                <div className="space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex border-b border-white/[0.04] pb-2">
                      <span className="text-gray-500 w-16">To:</span>
                      <span className="text-white font-mono">{selectedItem.leadEmail}</span>
                    </div>
                    <div className="flex border-b border-white/[0.04] py-2">
                      <span className="text-gray-500 w-16">Subject:</span>
                      <span className="text-white font-medium">{selectedItem.subject}</span>
                    </div>
                    <div className="flex border-b border-white/[0.04] py-2">
                      <span className="text-gray-500 w-16">Confidence:</span>
                      <span className="text-[#38bdf8] font-mono font-bold">{selectedItem.score}/100</span>
                    </div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto scrollbar-hide">
                    {selectedItem.draft}
                  </div>

                  <div className="p-3 bg-[#38bdf8]/5 border border-[#38bdf8]/10 text-[#38bdf8] rounded-xl flex items-center gap-2 text-[10px] leading-relaxed">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>QualifyAI created this response draft using LLM synthesis based on ingest documents.</span>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4 mt-6 flex justify-end gap-2">
                    <button 
                      onClick={() => {
                        const toast = document.createElement("div");
                        toast.className = "fixed bottom-5 right-5 z-50 glass border border-red-500/30 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-2xl animate-bounce";
                        toast.innerHTML = `<span class="text-red-400">●</span> <span class="text-white">Draft discarded</span>`;
                        document.body.appendChild(toast);
                        setTimeout(() => toast.remove(), 2500);
                        setModalType(null);
                      }}
                      className="px-4 py-2 border border-red-500/20 hover:bg-red-500/5 text-red-400 rounded-xl text-xs transition-colors"
                    >
                      Discard Draft
                    </button>
                    <button 
                      onClick={() => {
                        const toast = document.createElement("div");
                        toast.className = "fixed bottom-5 right-5 z-50 glass border border-green-500/30 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-2xl animate-bounce";
                        toast.innerHTML = `<span class="text-green-400">●</span> <span class="text-white">Email submitted successfully</span>`;
                        document.body.appendChild(toast);
                        setTimeout(() => toast.remove(), 2500);
                        setModalType(null);
                      }}
                      className="px-5 py-2 bg-gradient-to-r from-[#38bdf8] to-[#6366f1] text-black font-semibold rounded-xl text-xs hover:shadow-lg transition-all"
                    >
                      Approve & Send Email
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 5: CALL TRANSCRIPT */}
              {modalType === "call_transcript" && selectedItem && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <p className="text-white font-bold">{selectedItem.leadName}</p>
                      <p className="text-gray-500 font-mono text-[10px] mt-0.5">{selectedItem.phone}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-mono font-bold">
                        {selectedItem.status}
                      </span>
                      <p className="text-[10px] text-gray-500 font-mono mt-1">Duration: {selectedItem.duration}</p>
                    </div>
                  </div>

                  {/* Audio Waveform CSS Mock */}
                  <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl flex items-center justify-between gap-4">
                    <span className="text-[10px] text-gray-400 font-mono">Audio Recording:</span>
                    <div className="flex items-end gap-1.5 h-6 flex-1 max-w-[200px] justify-center">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(bar => {
                        const randomHeight = Math.floor(Math.random() * 16) + 4; // 4-20px
                        return (
                          <div 
                            key={bar} 
                            style={{ height: `${randomHeight}px` }} 
                            className="w-1 bg-[#38bdf8] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" 
                          />
                        );
                      })}
                    </div>
                    <button className="p-1 text-[#38bdf8] hover:text-white transition-colors bg-[#38bdf8]/10 rounded border border-[#38bdf8]/20">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto scrollbar-hide border-l-2 border-l-[#38bdf8]">
                    {selectedItem.transcript}
                  </div>

                  <div className="border-t border-white/[0.05] pt-4 mt-6 flex justify-end">
                    <button 
                      onClick={() => setModalType(null)}
                      className="px-5 py-2 border border-white/[0.05] hover:bg-white/[0.03] text-gray-400 hover:text-white rounded-xl text-xs transition-colors"
                    >
                      Close Transcripts
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 6: SUPPORT TICKET REPLY */}
              {modalType === "ticket_reply" && selectedItem && (
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-white text-sm">{selectedItem.subject}</h5>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">Ticket ID: {selectedItem.id.toUpperCase()}</p>
                  </div>

                  <div className="p-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs text-gray-300 leading-relaxed font-sans">
                    "{selectedItem.message}"
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-gray-400">Administrative Response</label>
                    <textarea
                      rows="4"
                      value={ticketReplyText}
                      onChange={(e) => setTicketReplyText(e.target.value)}
                      placeholder="Write your response to the customer..."
                      className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/50 outline-none rounded-xl p-3 text-xs text-white font-sans resize-none"
                    />
                  </div>

                  <div className="border-t border-white/[0.05] pt-4 mt-6 flex justify-end gap-2">
                    <button 
                      onClick={() => setModalType(null)}
                      className="px-4 py-2 border border-white/[0.05] hover:bg-white/[0.03] text-gray-400 hover:text-white rounded-xl text-xs transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSendTicketReply}
                      className="px-5 py-2 bg-[#38bdf8] text-black font-semibold rounded-xl text-xs hover:bg-white transition-all shadow-lg"
                    >
                      Send Reply & Close Ticket
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
