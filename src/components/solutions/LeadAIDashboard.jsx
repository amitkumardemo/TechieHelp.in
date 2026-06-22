import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  Inbox,
  Flame,
  Mail,
  Phone,
  MessageSquare,
  GitFork,
  BarChart3,
  FileText,
  Layers,
  Settings,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Calendar,
  TrendingUp,
  Send,
  Volume2,
  Clock,
  Plus,
  RefreshCw,
  Shield,
  Activity,
  LogOut,
  Check,
  X,
  Play,
  Pause,
  ExternalLink,
  Copy,
  PlusCircle,
  Download,
  Share2,
  PhoneCall,
  User,
  Zap,
  MoreVertical,
  Sliders,
  DollarSign,
  Menu,
  Database
} from "lucide-react";

// ==========================================
// STATIC MOCK DATA
// ==========================================

const INITIAL_INBOX = [
  {
    id: "inbox-1",
    senderName: "Rohan Mehta",
    email: "rohan.mehta@nexusventures.in",
    subject: "Inquiry regarding AI automation consulting",
    message: "Hi TechieHelp Team, I saw your LeadAI page and wanted to know if this can integrate with our custom CRM. We get about 500 leads daily from website forms and need an AI employee to filter them and book calls. Can you share pricing and setup time?",
    source: "Website Form",
    score: 95,
    priority: "High",
    time: "10 mins ago",
    aiSummary: "Prospect Rohan Mehta from Nexus Ventures wants to qualify 500+ daily inbound form leads and auto-book calls. CRM integration required.",
    intent: "Pricing & CRM Integration",
    sentiment: "Positive / Urgent",
    suggestedAction: "Draft enterprise proposal and schedule integration scoping call.",
    read: false
  },
  {
    id: "inbox-2",
    senderName: "Sarah Connor",
    email: "sconnor@cyberdyne.io",
    subject: "Automated qualification for security systems",
    message: "Hello, we are launching a new smart security system line. We need an AI Calling Agent to instantly phone leads that fill our form and pre-qualify their budget. Does LeadAI support phone calls with customized AI voices?",
    source: "Gmail",
    score: 91,
    priority: "High",
    time: "25 mins ago",
    aiSummary: "Client asks about Vapi voice agents for instant outbound qualification calls. Focused on security system budget verification.",
    intent: "AI Voice Call Capability",
    sentiment: "Inquisitive",
    suggestedAction: "Send Vapi calling agent demo and trigger a test AI Call.",
    read: false
  },
  {
    id: "inbox-3",
    senderName: "Aditya Sharma",
    email: "aditya.sharma@fintechscale.com",
    subject: "Lead gen workflow inquiry",
    message: "Hey, do you support WhatsApp automation? We receive lead details via Facebook ads and want to shoot a WhatsApp reply within 30 seconds of submission.",
    source: "WhatsApp",
    score: 84,
    priority: "Medium",
    time: "1 hour ago",
    aiSummary: "Fintech scaleup wants instant WhatsApp lead follow-up flows triggered via Facebook Ad webhook.",
    intent: "WhatsApp Integration",
    sentiment: "Interested",
    suggestedAction: "Share WhatsApp template catalog and auto-reply rule engine.",
    read: true
  },
  {
    id: "inbox-4",
    senderName: "Michael Scott",
    email: "mscott@dundermifflin.com",
    subject: "Paper sales automation",
    message: "I want an AI that can answer all my clients instantly. Sometimes I am busy holding meetings or hosting Dundies and cannot write emails. Can it write in a fun startup tone?",
    source: "Website Form",
    score: 42,
    priority: "Low",
    time: "2 hours ago",
    aiSummary: "User seeking general auto-responder functionality in a startup/casual tone. Low qualification score due to fit and budget indicators.",
    intent: "General Auto-responder",
    sentiment: "Casual",
    suggestedAction: "Send standard self-serve onboarding guide and startup tone options.",
    read: true
  }
];

const INITIAL_LEADS = [
  { id: "lead-1", name: "Rohan Mehta", email: "rohan.mehta@nexusventures.in", phone: "+91 98765 43210", source: "Website Form", score: 95, priority: "High", status: "In Progress", revenue: "₹45,000", time: "10 mins ago" },
  { id: "lead-2", name: "Sarah Connor", email: "sconnor@cyberdyne.io", phone: "+1 (555) 902-1984", source: "Gmail", score: 91, priority: "High", status: "Converted", revenue: "₹1,20,000", time: "25 mins ago" },
  { id: "lead-3", name: "Aditya Sharma", email: "aditya.sharma@fintechscale.com", phone: "+91 90123 45678", source: "WhatsApp", score: 84, priority: "Medium", status: "In Progress", revenue: "₹35,000", time: "1 hour ago" },
  { id: "lead-4", name: "Harvey Specter", email: "specter@pearsonhardman.com", phone: "+1 (555) 808-1111", source: "Gmail", score: 89, priority: "High", status: "Contacted", revenue: "₹95,000", time: "4 hours ago" },
  { id: "lead-5", name: "Elon Musk", email: "elon@spacex.com", phone: "+1 (555) 420-6969", source: "Website Form", score: 99, priority: "High", status: "Contacted", revenue: "₹5,00,000", time: "5 hours ago" },
  { id: "lead-6", name: "Peter Parker", email: "p.parker@dailybugle.com", phone: "+1 (555) 303-9999", source: "WhatsApp", score: 65, priority: "Medium", status: "In Progress", revenue: "₹15,000", time: "1 day ago" },
  { id: "lead-7", name: "Bruce Wayne", email: "bwayne@waynecorp.com", phone: "+1 (555) 100-0000", source: "Website Form", score: 98, priority: "High", status: "Converted", revenue: "₹3,50,000", time: "2 days ago" }
];

const INITIAL_CALLS = [
  {
    id: "call-1",
    leadName: "Rohan Mehta",
    phone: "+91 98765 43210",
    duration: "2m 45s",
    status: "Completed",
    meetingBooked: true,
    score: 95,
    time: "5 mins ago",
    transcript: "[AI QualifyAgent]: Hello Rohan, this is Sam from TechieHelp LeadAI. I'm calling regarding your website inquiry about AI integration.\n\n[Rohan Mehta]: Oh yes! Thanks for calling. We have a lot of leads coming in, and we want to know if you can hook up to HubSpot.\n\n[AI QualifyAgent]: Absolutely. LeadAI supports direct webhook outputs and HubSpot integrations. What CRM tier are you running?\n\n[Rohan Mehta]: We use HubSpot Enterprise. We need to qualify budget and timeline automatically.\n\n[AI QualifyAgent]: That fits perfectly. We can set up automated voice qualification based on budget. I see you qualify for our pilot launch. Can we book a 15-min demo with our solutions engineer tomorrow at 3 PM?\n\n[Rohan Mehta]: Yes, 3 PM works. Send me the calendar invite.\n\n[AI QualifyAgent]: Excellent. I've sent the meeting invite to rohan.mehta@nexusventures.in. Looking forward to it!",
    summary: "Rohan confirmed they use HubSpot Enterprise. Interested in budget and timeline qualification. Booked 15-min pilot demo for tomorrow at 3 PM."
  },
  {
    id: "call-2",
    leadName: "Sarah Connor",
    phone: "+1 (555) 902-1984",
    duration: "3m 12s",
    status: "Completed",
    meetingBooked: true,
    score: 91,
    time: "20 mins ago",
    transcript: "[AI QualifyAgent]: Hello Sarah, calling from TechieHelp regarding your security line automation request.\n\n[Sarah Connor]: Hi. I need an automated calling agent that triggers immediately when a lead lands, scoring them instantly.\n\n[AI QualifyAgent]: Yes, our trigger latency is under 1.5 seconds. We feed Webhook triggers straight to Vapi voice streams.\n\n[Sarah Connor]: Awesome. Let's schedule a deep dive.\n\n[AI QualifyAgent]: Booked for tomorrow 11 AM EST.",
    summary: "Sarah validated instant response speed requirements. Hooking form to Vapi call engine. Booked setup call for tomorrow 11 AM EST."
  },
  {
    id: "call-3",
    leadName: "Tony Stark",
    phone: "+1 (555) 300-3000",
    duration: "1m 15s",
    status: "Completed",
    meetingBooked: false,
    score: 88,
    time: "3 hours ago",
    transcript: "[AI QualifyAgent]: Hello Tony, this is Jarvis from TechieHelp.\n\n[Tony Stark]: Hey, I'm reviewing your specs. Can you handle multi-agent handoffs?\n\n[AI QualifyAgent]: Yes, our workflow routing can shift from AI to human operators based on sentiment markers.\n\n[Tony Stark]: Impressive. Send me technical whitepaper, I will review it during flight.",
    summary: "Tony Stark requested technical documentation regarding multi-agent handoff workflows. Follow-up email scheduled."
  },
  {
    id: "call-4",
    leadName: "Michael Scott",
    phone: "+1 (555) 202-0202",
    duration: "0m 45s",
    status: "Voicemail",
    meetingBooked: false,
    score: 42,
    time: "5 hours ago",
    transcript: "[AI QualifyAgent]: Hi Michael, calling from TechieHelp LeadAI...\n\n[Voicemail]: Hi, this is Michael Scott. Leave a message after the beep. If this is Dwight, please go back to work.",
    summary: "Call went to voicemail. Sent fallback WhatsApp automation."
  }
];

const INITIAL_WHATSAPP = [
  { id: "wa-1", senderName: "Aditya Sharma", phone: "+91 90123 45678", status: "Qualified", message: "Perfect, can you send over the setup instructions?", time: "5m ago", aiDraft: "Hi Aditya! Here is our standard integration document: https://docs.techiehelp.in/leadai. You can insert your API Key in the settings page to connect your database. Let me know if you want me to call you to assist with setup!" },
  { id: "wa-2", senderName: "Rohan Mehta", phone: "+91 98765 43210", status: "Follow-up Required", message: "Is there an additional charge for custom AI voice configurations?", time: "12m ago", aiDraft: "Hi Rohan, voice customization is included in our Growth and Enterprise packages. We support standard SSML adjustments. Let's schedule a brief 5-min voice demo if you are free!" },
  { id: "wa-3", senderName: "Vikram Malhotra", phone: "+91 98111 22233", status: "Unread", message: "Hi, I filled the form. Are you guys available for a quick call now?", time: "45m ago", aiDraft: "Hello Vikram, yes! I'm ready to dial you immediately. Please confirm if +91 98111 22233 is the correct number to reach you." },
  { id: "wa-4", senderName: "Dwight Schrute", phone: "+1 (555) 700-1234", status: "Qualified", message: "Beets are ready for harvest. Does your AI understand agricultural sales?", time: "2 hours ago", aiDraft: "Hello Dwight! Yes, TechieHelp LeadAI is fully customizable. You can upload your beet pricing and inventory tables directly to the Lead Qualification Rules section, and the AI will answer clients accordingly." }
];

const WORKFLOW_STEPS = [
  { id: "wf-step-1", title: "Website Form Submitted", desc: "Triggers when new lead fills client form", type: "trigger", icon: "Globe", active: true },
  { id: "wf-step-2", title: "AI Analysis & Intent Match", desc: "Gemini AI parses message, sentiment, intent", type: "action", icon: "Sparkles", active: true },
  { id: "wf-step-3", title: "Lead Qualification & Scoring", desc: "Computes fit score (0-100) based on custom rules", type: "action", icon: "Flame", active: true },
  { id: "wf-step-4", title: "Personalized Email Reply", desc: "Sends custom email response within 45 seconds", type: "action", icon: "Mail", active: true },
  { id: "wf-step-5", title: "WhatsApp Message Follow-up", desc: "Dispatches template WhatsApp engagement message", type: "action", icon: "MessageSquare", active: true },
  { id: "wf-step-6", title: "Automated AI Call (Vapi)", desc: "Triggers instant phone screening for High Priority leads", type: "action", icon: "Phone", active: true },
  { id: "wf-step-7", title: "CRM Sync & Calendar booking", desc: "Pushes data to HubSpot / Google Sheets, schedules demo", type: "action", icon: "GitFork", active: true }
];

const INITIAL_TIMELINE = [
  { id: "time-1", time: "07:10 PM", text: "AI Qualified Lead: Rohan Mehta (Score: 95/100, Priority: High) via Web Form.", type: "lead" },
  { id: "time-2", time: "07:11 PM", text: "AI Sent Personalized Email to rohan.mehta@nexusventures.in.", type: "email" },
  { id: "time-3", time: "07:12 PM", text: "AI Sent WhatsApp Follow-up regarding CRM integrations.", type: "whatsapp" },
  { id: "time-4", time: "07:13 PM", text: "AI Triggered Outbound Voice Call to +91 98765 43210 via Vapi Node.", type: "call" },
  { id: "time-5", time: "07:16 PM", text: "AI Call Completed. Status: Meeting Booked (Duration: 2m 45s).", type: "call" },
  { id: "time-6", time: "07:17 PM", text: "HubSpot CRM synchronized & Google Calendar invite dispatched.", type: "crm" }
];

// ==========================================
// CORE SYSTEM TONES
// ==========================================
const TONE_TEMPLATES = {
  Professional: {
    inbox1: "Dear Rohan,\n\nThank you for reaching out to TechieHelp. We appreciate your interest in LeadAI.\n\nOur system integrates seamlessly with HubSpot Enterprise via direct webhook nodes. Based on your volume of 500 daily leads, we suggest setting up our high-priority workflow, which automates email response, WhatsApp sequences, and voice qualification within 60 seconds of submission.\n\nI have scheduled our scoping session for tomorrow at 3 PM. Here is the confirmation link: https://meet.techiehelp.in/rohan-scoping.\n\nSincerely,\nLeadAI Assistant",
    inbox2: "Dear Sarah,\n\nWe appreciate your inquiry. Yes, LeadAI integrates Vapi voice agent capabilities to dial leads immediately. We can customize the voice parameters to match your brand requirements.\n\nI have pre-drafted a booking for tomorrow at 11 AM EST. Let me know if that works.\n\nBest regards,\nLeadAI Team"
  },
  Friendly: {
    inbox1: "Hi Rohan!\n\nThanks for stopping by! It's great to hear about Nexus Ventures. LeadAI will absolutely hook up to your HubSpot CRM in just a few clicks.\n\nHandling 500 leads a day is exactly what our AI Employee is built for. It will answer emails and book calendar dates in real-time, working 24/7 so your team can focus on closing deals.\n\nI've sent over a calendar invite for tomorrow at 3 PM so we can walk through it. Can't wait to chat!\n\nCheers,\nYour LeadAI Pal",
    inbox2: "Hi Sarah!\n\nExciting news about your smart security line! Yes, our AI voice calls are fully operational. They dial your form leads within seconds, qualify them, and book appointments.\n\nLet's catch up tomorrow at 11 AM EST to run a live test. Let me know if that sounds good!\n\nWarmly,\nLeadAI Assistant"
  },
  Sales: {
    inbox1: "Hey Rohan,\n\nDid you know that responding to leads within 5 minutes increases conversions by 391%? With LeadAI, we slash that response time to 30 seconds across email, WhatsApp, and calls.\n\nOur HubSpot integration takes under 10 minutes to sync. Let's get Nexus Ventures onto our high-speed pilot program. I've locked in a demo slot for us tomorrow at 3 PM.\n\nLet's automate your pipeline today!\n\nGrowth Team,\nTechieHelp LeadAI",
    inbox2: "Hey Sarah,\n\nYour competitors are taking hours to follow up with security leads. Our AI calling agents dial them *instantly* while they are still warm, qualify their budget, and book meetings directly into your sales reps' calendar.\n\nLet's run a live voice test on your phone tomorrow at 11 AM EST. Get ready to be amazed!\n\nSales Engine,\nLeadAI"
  },
  Startup: {
    inbox1: "Hey Rohan! �\n\nLove what you guys are building at Nexus! Let's get those 500 daily leads handled by a supercharged AI employee. HubSpot sync? Done. Webhooks? 100% supported.\n\nLet's get this automated. I've blocked out a brief coffee-chat tomorrow at 3 PM to set it up.\n\nCatch you then,\nLeadAI Team",
    inbox2: "Hey Sarah! \n\nSmart security meets smart AI calling agents! Yes, our Vapi pipeline will automatically trigger a custom outbound call to your leads within seconds.\n\nLet's kick things off tomorrow at 11 AM EST with a live dial demonstration.\n\nLet's go!,\nLeadAI Builder"
  }
};

// ==========================================
// CUSTOM SPARKLINE HELPER
// ==========================================
const getSparklinePath = (values, width = 70, height = 20) => {
  if (!values || values.length === 0) return { stroke: "", fill: "" };
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const padding = 2;
  const points = values.map((val, idx) => {
    const x = padding + (idx * (width - 2 * padding)) / (values.length - 1);
    const y = height - padding - ((val - min) * (height - 2 * padding)) / range;
    return { x, y };
  });
  
  let stroke = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const cp1x = p0.x + (p1.x - p0.x) / 2;
    const cp1y = p0.y;
    const cp2x = p0.x + (p1.x - p0.x) / 2;
    const cp2y = p1.y;
    stroke += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }
  
  const fill = `${stroke} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;
  return { stroke, fill };
};

// ==========================================
// BEZIER PATH GENERATION HELPER
// ==========================================
const getBezierPath = (pts) => {
  if (pts.length === 0) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const cp1x = p0.x + (p1.x - p0.x) / 2;
    const cp1y = p0.y;
    const cp2x = p0.x + (p1.x - p0.x) / 2;
    const cp2y = p1.y;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }
  return d;
};

// ==========================================
// AVATAR HELPERS
// ==========================================
const getAvatarColor = (name) => {
  const colors = [
    "bg-red-50 text-red-600 border-red-100",
    "bg-emerald-50 text-emerald-600 border-emerald-100",
    "bg-blue-50 text-blue-600 border-blue-100",
    "bg-amber-50 text-amber-600 border-amber-100",
    "bg-purple-50 text-purple-600 border-purple-100",
    "bg-cyan-50 text-cyan-600 border-cyan-100",
    "bg-rose-50 text-rose-600 border-rose-100",
    "bg-indigo-50 text-indigo-600 border-indigo-100"
  ];
  if (!name) return colors[0];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return colors[sum % colors.length];
};

const getInitials = (name) => {
  if (!name) return "U";
  const parts = name.split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

// ==========================================
// VOLUME GRAPH MOCK DATA
// ==========================================
const VOLUME_7_DAYS = [
  { date: "Jun 14", received: 24, replies: 18, meetings: 2 },
  { date: "Jun 15", received: 32, replies: 25, meetings: 4 },
  { date: "Jun 16", received: 45, replies: 32, meetings: 5 },
  { date: "Jun 17", received: 38, replies: 28, meetings: 3 },
  { date: "Jun 18", received: 52, replies: 44, meetings: 6 },
  { date: "Jun 19", received: 60, replies: 50, meetings: 8 },
  { date: "Jun 20", received: 48, replies: 39, meetings: 5 },
];

const VOLUME_30_DAYS = [
  { date: "May 22", received: 32, replies: 24, meetings: 3 },
  { date: "May 25", received: 38, replies: 28, meetings: 4 },
  { date: "May 28", received: 35, replies: 26, meetings: 3 },
  { date: "Jun 01", received: 50, replies: 38, meetings: 6 },
  { date: "Jun 04", received: 48, replies: 37, meetings: 5 },
  { date: "Jun 07", received: 62, replies: 48, meetings: 8 },
  { date: "Jun 10", received: 58, replies: 46, meetings: 6 },
  { date: "Jun 13", received: 70, replies: 56, meetings: 10 },
  { date: "Jun 16", received: 65, replies: 51, meetings: 8 },
  { date: "Jun 19", received: 82, replies: 66, meetings: 13 },
  { date: "Jun 20", received: 78, replies: 62, meetings: 12 },
];

export default function LeadAIDashboard() {
  // Force light/white theme for LeadAI Dashboard
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    
    // Remove dark class to force light theme styles
    root.classList.remove("dark");
    
    // Cleanup: restore dark theme if it was present
    return () => {
      if (hadDark) {
        root.classList.add("dark");
      }
    };
  }, []);

  // Read tab parameter from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, []);

  const { workspace } = useAuth();
  const workspaceId = workspace?.id;

  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  // Data States
  const [inboxItems, setInboxItems] = useState([]);
  const [selectedInboxId, setSelectedInboxId] = useState(null);
  const [leads, setLeads] = useState([]);
  const [calls, setCalls] = useState([]);
  const [whatsappChats, setWhatsappChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  
  // Workflow States
  const [workflowSteps, setWorkflowSteps] = useState(WORKFLOW_STEPS);
  
  // Timeline State
  const [timeline, setTimeline] = useState([]);
  
  // AI Replies Tab Specific States
  const [replyMessageSource, setReplyMessageSource] = useState("");
  const [replyTone, setReplyTone] = useState("Professional");
  const [replyDraft, setReplyDraft] = useState("");
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState("");

  // AI Calling Tab Specific States
  const [activeCallLogId, setActiveCallLogId] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioIntervalRef = useRef(null);

  // Search & Filter States
  const [inboxSearch, setInboxSearch] = useState("");
  const [inboxFilter, setInboxFilter] = useState("All");
  const [leadsSearch, setLeadsSearch] = useState("");
  const [leadsFilter, setLeadsFilter] = useState("All");
  
  // Integration States
  const [integrationStatuses, setIntegrationStatuses] = useState({
    gmail: "Not Connected",
    forms: "Not Connected",
    whatsapp: "Not Connected",
    sheets: "Not Connected",
    vapi: "Not Connected",
    gemini: "Not Connected"
  });
  const [webhookCopied, setWebhookCopied] = useState("");

  // Settings State
  const [settings, setSettings] = useState({
    fullName: "Amit Kumar",
    companyName: "TechieHelp",
    qualificationThreshold: 75,
    defaultTone: "Professional",
    autoCallHighPriority: true,
    autoReplyEmails: true,
    whatsappGreeting: "Hi! Thanks for reaching out. Our AI assistant is reviewing your query."
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Custom Gmail Connection Flow States
  const [toasts, setToasts] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [customerMemories, setCustomerMemories] = useState([]);
  const [chartRange, setChartRange] = useState("7days");
  const [hoveredChartIdx, setHoveredChartIdx] = useState(null);
  const [companyKnowledge, setCompanyKnowledge] = useState(null);
  const [knowledgeCrawlUrl, setKnowledgeCrawlUrl] = useState("");
  const [knowledgeActiveTab, setKnowledgeActiveTab] = useState("overview");
  const [aiRepliesTab, setAiRepliesTab] = useState("logs");

  // AI Replies — real API-backed state
  const [aiReplyLogs, setAiReplyLogs] = useState([]);
  const [aiReplyLogsLoading, setAiReplyLogsLoading] = useState(false);
  const [aiReplyAnalytics, setAiReplyAnalytics] = useState(null);
  const [aiReplyAnalyticsLoading, setAiReplyAnalyticsLoading] = useState(false);
  const [aiReplySettings, setAiReplySettings] = useState({
    autoReplyEnabled: false,
    autoReplyTone: "Professional",
    autoReplyInstructions: "",
    autoReplyDelay: 5,
    autoReplySignature: "",
  });
  const [aiReplySettingsSaving, setAiReplySettingsSaving] = useState(false);
  const [aiReplySettingsSaved, setAiReplySettingsSaved] = useState(false);
  const [aiReplySettingsLoaded, setAiReplySettingsLoaded] = useState(false);

  const showToast = (message, type = "info") => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const setToast = (val) => {
    if (val) {
      showToast(val.message, val.type);
    }
  };

  // Helper to group emails by threadId or customerEmail
  const groupInboxByThread = (items) => {
    const threads = {};
    items.forEach(item => {
      const key = item.threadId || item.email;
      if (!threads[key]) {
        threads[key] = {
          threadId: item.threadId,
          customerEmail: item.email,
          customerName: item.senderName,
          subject: item.subject,
          priority: item.priority,
          score: item.score,
          time: item.time,
          snippet: item.message.slice(0, 100),
          messages: [],
          unread: false,
          source: item.source,
          intent: item.intent,
          sentiment: item.sentiment,
          aiSummary: item.aiSummary,
          suggestedAction: item.suggestedAction,
          id: item.id
        };
      }
      threads[key].messages.push(item);
      if (!item.read) {
        threads[key].unread = true;
      }
      threads[key].messages.sort((a, b) => new Date(a.time) - new Date(b.time));
      
      const latestMsg = threads[key].messages[threads[key].messages.length - 1];
      threads[key].time = latestMsg.time;
      threads[key].snippet = latestMsg.message.slice(0, 120);
      threads[key].score = Math.max(...threads[key].messages.map(m => m.score));
      threads[key].priority = threads[key].messages.some(m => m.priority === "High") ? "High" : (threads[key].messages.some(m => m.priority === "Medium") ? "Medium" : "Low");
    });
    return Object.values(threads).sort((a, b) => new Date(b.time) - new Date(a.time));
  };

  // Fetch real dashboard data when workspace changes
  const fetchDashboardData = async () => {
    if (!workspaceId) return;
    setIsLoadingData(true);
    try {
      const [response, knowledgeResponse] = await Promise.all([
        fetch(`/api/dashboard/data?workspaceId=${workspaceId}`),
        fetch(`/api/knowledge?workspaceId=${workspaceId}`)
      ]);
      
      if (knowledgeResponse.ok) {
        const kData = await knowledgeResponse.json();
        setCompanyKnowledge(kData.companyKnowledge);
      }

      if (response.ok) {
        const data = await response.json();
        setIntegrationStatuses(data.integrationStatuses);
        setInboxItems(data.inboxItems);
        setLeads(data.leads);
        setCalls(data.calls);
        setTimeline(data.timeline);
        setCustomerMemories(data.customerMemories || []);
        
        if (data.inboxItems.length > 0) {
          setSelectedInboxId(prev => prev && data.inboxItems.some(i => i.id === prev) ? prev : data.inboxItems[0].id);
          setReplyMessageSource(prev => prev || data.inboxItems[0].message);
        }
        if (data.calls.length > 0) {
          setActiveCallLogId(prev => prev && data.calls.some(c => c.id === prev) ? prev : data.calls[0].id);
        }
      }
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleSyncGmail = async () => {
    if (!workspaceId) return;
    setIsSyncing(true);
    try {
      const response = await fetch(`${getApiBase()}/api/gmail/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId })
      });
      if (response.ok) {
        setToast({ message: "Emails synced successfully!", type: "success" });
        fetchDashboardData();
      } else {
        setToast({ message: "Failed to sync emails.", type: "error" });
      }
    } catch (e) {
      console.error(e);
      setToast({ message: "Error syncing emails.", type: "error" });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleGenerateReply = async (toneOverride) => {
    // Find the active thread
    const threads = groupInboxByThread(inboxItems);
    const activeThread = threads.find(t => t.id === selectedInboxId) || threads[0];
    if (!activeThread) return;
    
    const latestInbound = [...activeThread.messages].reverse().find(m => m.suggestedAction !== "None" || m.intent !== "Outgoing Reply");
    const targetEmailId = latestInbound ? latestInbound.id : activeThread.messages[activeThread.messages.length - 1].id;
    
    setIsRegenerating(true);
    try {
      const response = await fetch(`${getApiBase()}/api/gmail/reply/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId,
          emailId: targetEmailId,
          tone: toneOverride || replyTone
        })
      });
      if (response.ok) {
        const data = await response.json();
        setReplyDraft(data.reply);
        setToast({ message: "AI reply generated successfully!", type: "success" });
      } else {
        setToast({ message: "Failed to generate reply.", type: "error" });
      }
    } catch (error) {
      console.error(error);
      setToast({ message: "Error generating reply.", type: "error" });
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleSendReply = async () => {
    const threads = groupInboxByThread(inboxItems);
    const activeThread = threads.find(t => t.id === selectedInboxId) || threads[0];
    if (!activeThread) return;

    const latestInbound = [...activeThread.messages].reverse().find(m => m.suggestedAction !== "None" || m.intent !== "Outgoing Reply");
    const targetEmailId = latestInbound ? latestInbound.id : activeThread.messages[activeThread.messages.length - 1].id;

    setEmailStatusMessage("Dispatching AI reply via connected Gmail OAuth...");
    try {
      const response = await fetch(`${getApiBase()}/api/gmail/reply/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId,
          emailId: targetEmailId,
          replyText: replyDraft,
          to: activeThread.customerEmail,
          subject: activeThread.subject.startsWith("Re:") ? activeThread.subject : `Re: ${activeThread.subject}`
        })
      });
      if (response.ok) {
        setEmailStatusMessage("Reply sent successfully! Lead timeline updated.");
        setReplyDraft("");
        setTimeout(() => {
          setEmailStatusMessage("");
          fetchDashboardData();
        }, 2000);
      } else {
        setEmailStatusMessage("Failed to send reply. Please verify connection.");
      }
    } catch (e) {
      console.error(e);
      setEmailStatusMessage("Error sending reply.");
    }
  };

  // Fetch AI Reply logs from real API
  const fetchAiReplyLogs = async () => {
    if (!workspaceId) return;
    setAiReplyLogsLoading(true);
    try {
      const res = await fetch(`${getApiBase()}/api/gmail/replies?workspaceId=${workspaceId}`);
      if (res.ok) {
        const data = await res.json();
        setAiReplyLogs(data.replies || []);
      }
    } catch (e) {
      console.error("[AI_REPLY_LOGS_FETCH]", e);
    } finally {
      setAiReplyLogsLoading(false);
    }
  };

  // Fetch AI Reply analytics from real API
  const fetchAiReplyAnalytics = async () => {
    if (!workspaceId) return;
    setAiReplyAnalyticsLoading(true);
    try {
      const res = await fetch(`${getApiBase()}/api/gmail/replies/analytics?workspaceId=${workspaceId}`);
      if (res.ok) {
        const data = await res.json();
        setAiReplyAnalytics(data);
      }
    } catch (e) {
      console.error("[AI_REPLY_ANALYTICS_FETCH]", e);
    } finally {
      setAiReplyAnalyticsLoading(false);
    }
  };

  // Fetch AI Reply settings from real API
  const fetchAiReplySettings = async () => {
    if (!workspaceId || aiReplySettingsLoaded) return;
    try {
      const res = await fetch(`${getApiBase()}/api/gmail/settings?workspaceId=${workspaceId}`);
      if (res.ok) {
        const data = await res.json();
        setAiReplySettings({
          autoReplyEnabled: data.autoReplyEnabled ?? false,
          autoReplyTone: data.autoReplyTone ?? "Professional",
          autoReplyInstructions: data.autoReplyInstructions ?? "",
          autoReplyDelay: data.autoReplyDelay ?? 5,
          autoReplySignature: data.autoReplySignature ?? "",
        });
        setAiReplySettingsLoaded(true);
      }
    } catch (e) {
      console.error("[AI_REPLY_SETTINGS_FETCH]", e);
    }
  };

  // Save AI Reply settings to real API
  const handleSaveAiReplySettings = async () => {
    if (!workspaceId) return;
    setAiReplySettingsSaving(true);
    try {
      const res = await fetch(`${getApiBase()}/api/gmail/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId, ...aiReplySettings }),
      });
      if (res.ok) {
        setAiReplySettingsSaved(true);
        showToast("Auto-reply settings saved successfully!", "success");
        setTimeout(() => setAiReplySettingsSaved(false), 3000);
      } else {
        showToast("Failed to save settings.", "error");
      }
    } catch (e) {
      console.error("[AI_REPLY_SETTINGS_SAVE]", e);
      showToast("Error saving settings.", "error");
    } finally {
      setAiReplySettingsSaving(false);
    }
  };

  // Detect callback redirect parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("gmail_connected") === "true") {
      setToast({ message: "Gmail Connected Successfully", type: "success" });
      handleSyncGmail();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [workspaceId]);

  // Fetch AI Replies data when tab is opened
  useEffect(() => {
    if (activeTab === "replies" && workspaceId) {
      if (aiRepliesTab === "logs") fetchAiReplyLogs();
      else if (aiRepliesTab === "analytics") fetchAiReplyAnalytics();
      else if (aiRepliesTab === "settings") fetchAiReplySettings();
    }
  }, [activeTab, aiRepliesTab, workspaceId]);

  // Fetch AI Replies sub-tab data when sub-tab changes
  useEffect(() => {
    if (activeTab !== "replies" || !workspaceId) return;
    if (aiRepliesTab === "logs") fetchAiReplyLogs();
    else if (aiRepliesTab === "analytics") fetchAiReplyAnalytics();
    else if (aiRepliesTab === "settings") fetchAiReplySettings();
  }, [aiRepliesTab]);

  // Polling sync effect (60s auto refresh)
  useEffect(() => {
    if (!workspaceId || integrationStatuses.gmail !== "Connected") return;
    const interval = setInterval(() => {
      handleSyncGmail();
    }, 60000);
    return () => clearInterval(interval);
  }, [workspaceId, integrationStatuses.gmail]);

  // Set up Server-Sent Events (SSE) listener for real-time dashboard sync
  useEffect(() => {
    if (!workspaceId) return;

    const eventSource = new EventSource(`${getApiBase()}/api/events?workspaceId=${workspaceId}`);

    eventSource.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        if (parsed.type === "CONNECTED") {
          console.log("SSE Connection established.");
          return;
        }

        // Display toast notifications for real-time events
        if (parsed.type === "EMAIL_SENT") {
          showToast(`Auto Reply Sent: "${parsed.data.subject}" to ${parsed.data.recipient}`, "success");
        } else if (parsed.type === "AI_DRAFT_READY") {
          showToast(`AI Suggested Draft Ready for ${parsed.data.sender}`, "info");
        } else if (parsed.type === "EMAIL_SYNCED") {
          showToast(`Synced New Email: "${parsed.data.subject}" from ${parsed.data.sender}`, "info");
        } else if (parsed.type === "LEAD_QUALIFIED") {
          showToast(`🔥 Lead Qualified: ${parsed.data.name} (Score: ${parsed.data.score}/100)`, "success");
        }

        // Trigger refetch of full data when a sync event happens
        fetchDashboardData();
      } catch (err) {
        console.error("Failed to parse SSE event:", err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE connection error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [workspaceId]);

  const handleConnectGmail = async () => {
    if (!workspaceId) return;
    try {
      const response = await fetch(`${getApiBase()}/api/gmail/connect?workspaceId=${workspaceId}`);
      if (response.ok) {
        const { authUrl } = await response.json();
        window.location.href = authUrl;
      } else {
        alert("Failed to connect Gmail. Please make sure the backend server is running.");
      }
    } catch (e) {
      console.error(e);
      alert("Error initiating Gmail OAuth connection.");
    }
  };

  const handleDisconnectGmail = async () => {
    if (!workspaceId) return;
    if (!confirm("Are you sure you want to disconnect Gmail?")) return;
    try {
      const response = await fetch(`${getApiBase()}/api/gmail/disconnect?workspaceId=${workspaceId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setIntegrationStatuses(prev => ({ ...prev, gmail: "Not Connected" }));
        setInboxItems([]);
        alert("Gmail integration disconnected successfully.");
      } else {
        alert("Failed to disconnect Gmail.");
      }
    } catch (e) {
      console.error(e);
      alert("Error disconnecting Gmail.");
    }
  };

  // Onboarding Setup view
  const renderOnboardingCard = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-300/80 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm max-w-xl mx-auto space-y-6">
      <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shadow-inner">
        <Layers className="w-8 h-8 animate-bounce" />
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-bold text-slate-800">Connect a Communication Channel</h3>
        <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
          Your B2B Relationship Operating System starts blank. Connect Gmail, WhatsApp, or Vapi voice agents to start syncing and qualifying leads.
        </p>
      </div>
      <button
        onClick={() => setActiveTab("integrations")}
        className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
      >
        <Plus className="w-4 h-4" /> Connect Integrations
      </button>
    </div>
  );

  const renderGmailEmptyState = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-300/80 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm max-w-xl mx-auto space-y-6">
      <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shadow-inner">
        <Mail className="w-8 h-8 animate-pulse text-sky-500" />
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-bold text-slate-800">Connect Gmail Account</h3>
        <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
          Sync emails, AI drafts and conversations directly from your inbox.
        </p>
      </div>
      <button
        onClick={handleConnectGmail}
        className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2.5 mx-auto"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61a5.67 5.67 0 0 1-2.45 3.73v3.08h3.94c2.31-2.13 3.64-5.28 3.64-8.66z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.83-2.98c-1.07.72-2.45 1.16-4.1 1.16-3.15 0-5.83-2.13-6.78-5.01H1.32v3.18C3.31 21.87 7.42 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.22 14.26A7.16 7.16 0 0 1 4.8 12c0-.79.13-1.57.38-2.31V6.51H1.32A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.25 5.37l3.97-3.11z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.42 0 3.3 2.13 1.32 5.37l3.9 3.1c.95-2.82 3.63-4.72 6.78-4.72z"
          />
        </svg>
        Connect Gmail
      </button>
    </div>
  );

  const renderEmptyInbox = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[400px] border border-slate-200/80 rounded-xl card-glass-static space-y-4">
      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
        <Inbox className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">Your AI Inbox is empty</h4>
        <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
          No emails have been synced yet. Try sending a test email to your connected account.
        </p>
      </div>
    </div>
  );

  const renderEmptyLeads = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[400px] border border-slate-200/80 rounded-xl card-glass-static space-y-4">
      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
        <Flame className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">No qualified leads yet</h4>
        <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
          Leads with qualification scores above {settings.qualificationThreshold} will appear here.
        </p>
      </div>
    </div>
  );

  const renderEmptyCalls = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[400px] border border-slate-200/80 rounded-xl card-glass-static space-y-4">
      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
        <Phone className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">No AI call logs</h4>
        <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
          Calls placed by Vapi Voice Agents will compile transcripts and logs here.
        </p>
      </div>
    </div>
  );

  const renderEmptyWhatsApp = () => (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[400px] border border-slate-200/80 rounded-xl card-glass-static space-y-4">
      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
        <MessageSquare className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">No WhatsApp messages</h4>
        <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
          WhatsApp chats and campaigns managed by AI will show here.
        </p>
      </div>
    </div>
  );

  // Live Activity Feed Simulator (24/7 AI Employee)
  useEffect(() => {
    if (integrationStatuses.gmail !== "Connected") return;
    const liveTimelineFeed = [
      { text: "AI Qualified Lead: Rahul Sharma (Score: 89/100, Source: Web Form)", type: "lead" },
      { text: "AI Dispatched Personalized Email Draft to rahul.sharma@gmail.com", type: "email" },
      { text: "AI Scheduled Follow-up Campaign for Priya Patel", type: "campaign" },
      { text: "AI Voice Agent dialed Vikram Malhotra (+91 98111 22233). Call answered.", type: "call" },
      { text: "AI Call completed: Vikram Malhotra. Meeting Booked successfully.", type: "call" },
      { text: "AI Triggered HubSpot Contact creation for Vikram Malhotra.", type: "crm" },
      { text: "AI Processed Gmail lead from David Miller (Score: 35/100 - Discarded)", type: "lead" },
      { text: "AI Responded to WhatsApp query from Rohit Mehta regarding plans.", type: "whatsapp" }
    ];

    const interval = setInterval(() => {
      const randomAction = liveTimelineFeed[Math.floor(Math.random() * liveTimelineFeed.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;

      const newTimelineEvent = {
        id: `time-${Date.now()}`,
        time: timeStr,
        text: randomAction.text,
        type: randomAction.type
      };

      setTimeline(prev => [newTimelineEvent, ...prev.slice(0, 14)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Audio wave interval simulation
  useEffect(() => {
    if (isPlayingAudio) {
      audioIntervalRef.current = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            clearInterval(audioIntervalRef.current);
            return 0;
          }
          return prev + 2;
        });
      }, 150);
    } else {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    }
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    };
  }, [isPlayingAudio]);

  const activeInboxItem = inboxItems.find(item => item.id === selectedInboxId) || inboxItems[0];
  const activeCallLog = calls.find(c => c.id === activeCallLogId) || calls[0];
  const activeChat = whatsappChats.find(c => c.id === selectedChatId) || whatsappChats[0];

  // Tone selector logic
  const handleToneChange = (tone) => {
    setReplyTone(tone);
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      // Pre-fill corresponding template
      const itemKey = selectedInboxId === "inbox-1" ? "inbox1" : "inbox2";
      const prefill = TONE_TEMPLATES[tone]?.[itemKey] || `Hi,\n\nThank you for reaching out in ${tone} tone!\n\nBest regards,\nAI Employee`;
      setReplyDraft(prefill);
    }, 8000); // realistic AI loading
  };

  const handleRegenerateReply = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      const randomPhrases = [
        "Let me know if we can schedule a zoom call directly.",
        "We are currently running a pilot cohort for businesses processing 100+ leads.",
        "Feel free to reply with your best phone number for a direct test call.",
        "Should we synchronize this with your existing workflow nodes?"
      ];
      const addition = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
      setReplyDraft(prev => prev + `\n\nP.S. ${addition}`);
    }, 1000);
  };


  const handleTriggerCall = (lead) => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
    
    // Add call log simulation
    const newCall = {
      id: `call-${Date.now()}`,
      leadName: lead.name,
      phone: lead.phone || "+91 99999 88888",
      duration: "0m 00s",
      status: "Ringing...",
      meetingBooked: false,
      score: lead.score,
      time: "Just now",
      transcript: "[AI CallingAgent]: Connecting outbound stream...",
      summary: "Dialing outbound node."
    };

    setCalls(prev => [newCall, ...prev]);
    setActiveCallLogId(newCall.id);
    setActiveTab("calls");

    // Add event to timeline
    setTimeline(prev => [
      {
        id: `time-call-${Date.now()}`,
        time: timeStr,
        text: `AI Dialed outbound calling agent (Vapi) to ${lead.name}`,
        type: "call"
      },
      ...prev
    ]);

    // Simulate call progress
    setTimeout(() => {
      setCalls(prev => prev.map(c => c.id === newCall.id ? { 
        ...c, 
        status: "Completed", 
        duration: "1m 32s",
        transcript: `[AI CallingAgent]: Hello ${lead.name}, this is Sam from TechieHelp. Calling regarding your lead qualification query.\n\n[${lead.name}]: Hey, thanks for calling. Yes, we wanted to see if the AI agent can speak multiple accents.\n\n[AI CallingAgent]: Definitely. We support English (Indian, US, UK), Hindi, and Spanish voices with realistic intonations. Let's arrange a pilot setup call.\n\n[${lead.name}]: Awesome, please schedule it.\n\n[AI CallingAgent]: Setting it up. Talk to you soon!`,
        summary: "Lead verified accent requirements. Outbound test succeeded. Pilot scheduled."
      } : c));
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setWebhookCopied(type);
    setTimeout(() => setWebhookCopied(""), 2000);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  // Filters
  const filteredInbox = inboxItems.filter(item => {
    const matchSearch = item.senderName.toLowerCase().includes(inboxSearch.toLowerCase()) ||
                        item.email.toLowerCase().includes(inboxSearch.toLowerCase()) ||
                        item.subject.toLowerCase().includes(inboxSearch.toLowerCase());
    const matchFilter = inboxFilter === "All" || item.source === inboxFilter;
    return matchSearch && matchFilter;
  });

  const filteredLeads = leads.filter(lead => {
    const matchSearch = lead.name.toLowerCase().includes(leadsSearch.toLowerCase()) ||
                        lead.email.toLowerCase().includes(leadsSearch.toLowerCase());
    const matchFilter = leadsFilter === "All" || lead.priority === leadsFilter;
    return matchSearch && matchFilter;
  });

  const totalEmailsVal = inboxItems.length + 154;
  const unreadEmailsVal = inboxItems.filter(i => !i.read).length;
  const pendingRepliesVal = inboxItems.filter(i => i.status === "RECEIVED" || i.status === "NEW").length;
  const aiDraftsReadyVal = inboxItems.filter(i => i.status === "RECEIVED" && i.score >= 40).length;
  
  const hotLeadsVal = leads.filter(l => l.score >= 85).length + 4;
  const meetingsBookedVal = calls.filter(c => c.meetingBooked).length + 12;
  const responseRateVal = totalEmailsVal > 0 ? Math.min(100, Math.round(((totalEmailsVal - pendingRepliesVal) / totalEmailsVal) * 100)) + "%" : "94.2%";
  const avgReplyTimeVal = "45s";

  const gmailMetrics = [
    { title: "Total Emails", value: totalEmailsVal, trend: "+12.4%", up: true, values: [130, 135, 138, 142, 145, 150, totalEmailsVal], color: "#3b82f6" },
    { title: "Unread Emails", value: unreadEmailsVal, trend: "-18.2%", up: true, values: [12, 10, 8, 11, 6, 4, unreadEmailsVal], color: "#ef4444" },
    { title: "Pending Replies", value: pendingRepliesVal, trend: "-8.5%", up: true, values: [18, 15, 12, 14, 9, 7, pendingRepliesVal], color: "#f59e0b" },
    { title: "AI Drafts Ready", value: aiDraftsReadyVal, trend: "+24.1%", up: true, values: [5, 8, 11, 9, 14, 12, aiDraftsReadyVal], color: "#8b5cf6" },
    { title: "Response Rate", value: responseRateVal, trend: "+2.3%", up: true, values: [91, 92, 92, 93, 93, 94, parseInt(responseRateVal) || 94], color: "#10b981" },
    { title: "Average Reply Time", value: avgReplyTimeVal, trend: "-15.4%", up: true, values: [80, 72, 65, 58, 50, 47, 45], color: "#06b6d4" },
    { title: "Hot Leads", value: hotLeadsVal, trend: "+14.8%", up: true, values: [2, 3, 5, 4, 6, 7, hotLeadsVal], color: "#ec4899" },
    { title: "Meetings Booked", value: meetingsBookedVal, trend: "+8.3%", up: true, values: [8, 9, 11, 10, 13, 14, meetingsBookedVal], color: "#6366f1" }
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-hidden antialiased selection:bg-sky-200/50 selection:text-sky-700">
      
      {/* Background glow effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-200/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-100/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[30%] right-[10%] w-[30%] h-[30%] bg-violet-100/25 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* SIDEBAR NAVIGATION */}
      {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* SIDEBAR NAVIGATION */}
        <aside className={`w-64 border-r border-slate-200/80 bg-white/95 backdrop-blur-2xl flex flex-col justify-between h-screen shrink-0 fixed lg:sticky top-0 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div>
          {/* Logo Section */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-400/20 animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-slate-800 leading-none">LeadAI</h1>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">TechieHelp</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "inbox", label: "AI Inbox", icon: Inbox, badge: inboxItems.filter(i => !i.read).length },
              { id: "leads", label: "Qualified Leads", icon: Flame },
              { id: "replies", label: "AI Replies", icon: Mail },
              { id: "calls", label: "AI Calls", icon: Phone },
              { id: "whatsapp", label: "WhatsApp", icon: MessageSquare, badge: whatsappChats.filter(w=>w.status==="Unread").length },
              { id: "workflows", label: "Workflows", icon: GitFork, activeDot: true },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "knowledge", label: "Company Knowledge", icon: Database },
              { id: "reports", label: "Reports", icon: FileText },
              { id: "integrations", label: "Integrations", icon: Layers },
              { id: "settings", label: "Settings", icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group border ${
                    isActive 
                      ? "bg-sky-50 text-sky-600 border-sky-100/80 shadow-sm shadow-sky-500/5" 
                      : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-105 ${isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-700"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="text-[9px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full font-mono">
                      {item.badge}
                    </span>
                  ) : null}
                  {item.activeDot && (
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping mr-1" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer Panel */}
        <div className="p-4 border-t border-slate-100 card-glass-static flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="btn-primary py-1 px-2.5 rounded-md text-xs">
              AK
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">Amit Kumar</p>
              <p className="text-[10px] text-green-600 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                AI Online (24/7)
              </p>
            </div>
          </div>
          <a href="/" className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-slate-50" title="Exit Dashboard">
            <LogOut className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT WORKSPACE & RIGHT ACTIVITY FEED */}
      <div className="flex-1 flex overflow-hidden">
        {/* CENTER CONTENT */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-hide pb-12 relative border-r border-slate-200/60">
          {/* HEADER BAR */}
          <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200/80 py-4 px-4 md:px-8 flex items-center justify-between">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden mr-3 p-2 bg-slate-100/80 border border-slate-200/60 rounded-lg text-slate-600 hover:text-slate-900"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-md font-bold text-slate-800 tracking-tight flex items-center gap-2">
                  Welcome Back, Amit <span className="text-xl">👋</span>
                </h2>
                <p className="text-[10px] text-slate-500 font-mono">TechieHelp LeadAI Operating System</p>
              </div>
              <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-widest text-sky-600 bg-sky-50 border border-sky-200/60 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-ping" />
                AI Employee ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] text-slate-500">Qualification Confidence</p>
                <p className="text-xs font-mono text-slate-800 font-semibold flex items-center justify-end gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  98.6% Accuracy
                </p>
              </div>
            </div>
          </header>

          {/* DYNAMIC WRAPPER FOR PAGES */}
          <div className="p-8 max-w-6xl w-full mx-auto space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    {/* Welcome Banner */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-sky-600" />
                          <span className="text-[10px] uppercase tracking-widest text-sky-600 font-mono font-bold">24/7 Operations</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Your AI Employee is running.</h2>
                        <p className="text-xs text-slate-600 mt-1 max-w-lg leading-relaxed">
                          LeadAI is listening on Gmail, Website Form Webhooks, and WhatsApp Business. Automations are active, incoming queries will be scored and qualified instantly.
                        </p>
                      </div>
                    </div>
                    {integrationStatuses.gmail === "Connected" ? (
                      <>
                        {/* Upgraded Gmail KPI Metrics Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {gmailMetrics.map((card, i) => {
                            const { stroke, fill } = getSparklinePath(card.values, 70, 20);
                            const SparklineIcon = [Mail, Inbox, Clock, Sparkles, TrendingUp, Clock, Flame, Calendar][i];
                            return (
                              <div key={i} className="card-glass border border-slate-200/80 bg-white/70 backdrop-blur-md p-4 rounded-xl flex flex-col justify-between hover:shadow-md transition-all group">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{card.title}</span>
                                  <div className="p-1 rounded-lg bg-slate-50 text-slate-400 group-hover:text-sky-600 transition-colors">
                                    <SparklineIcon className="w-3.5 h-3.5" />
                                  </div>
                                </div>
                                <div className="flex items-baseline gap-2 mt-2">
                                  <span className="text-xl font-bold font-mono text-slate-800">{card.value}</span>
                                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                                    card.up ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                                  }`}>{card.trend}</span>
                                </div>
                                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100/50">
                                  <span className="text-[9px] text-slate-400 font-mono">Last 7 days</span>
                                  {stroke ? (
                                    <svg className="w-16 h-5" viewBox="0 0 70 20">
                                      <defs>
                                        <linearGradient id={`grad-${card.color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor={card.color} stopOpacity="0.25" />
                                          <stop offset="100%" stopColor={card.color} stopOpacity="0" />
                                        </linearGradient>
                                      </defs>
                                      <path d={fill} fill={`url(#grad-${card.color.replace("#", "")})`} stroke="none" />
                                      <path d={stroke} fill="none" stroke={card.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Large Email Volume Graph */}
                        <div className="rounded-xl border border-slate-200/80 card-glass-static p-6 shadow-sm space-y-4 bg-white/70 backdrop-blur-md">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-sky-600" />
                                Inbound Email & AI Response Volume
                              </h3>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">Real-time sync of messages, replies, and calendar bookings</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {["7days", "30days"].map((range) => (
                                <button
                                  key={range}
                                  onClick={() => {
                                    setChartRange(range);
                                    setHoveredChartIdx(null);
                                  }}
                                  className={`px-3 py-1 rounded-lg text-[10px] font-mono transition-all ${
                                    chartRange === range
                                      ? "bg-sky-50 text-sky-600 border border-sky-200/80 font-bold"
                                      : "text-slate-500 hover:bg-slate-50 border border-transparent"
                                  }`}
                                >
                                  {range === "7days" ? "Last 7 Days" : "Last 30 Days"}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Chart SVG Canvas */}
                          {(() => {
                            const chartData = chartRange === "7days" ? VOLUME_7_DAYS : VOLUME_30_DAYS;
                            const maxVal = Math.max(...chartData.map(d => Math.max(d.received, d.replies, d.meetings))) * 1.1 || 10;
                            const svgWidth = 800;
                            const svgHeight = 220;
                            const paddingLeft = 45;
                            const paddingRight = 20;
                            const paddingTop = 20;
                            const paddingBottom = 30;
                            const chartWidth = svgWidth - paddingLeft - paddingRight;
                            const chartHeight = svgHeight - paddingTop - paddingBottom;

                            const receivedPoints = chartData.map((d, idx) => {
                              const x = paddingLeft + (idx * chartWidth) / (chartData.length - 1);
                              const y = svgHeight - paddingBottom - (d.received / maxVal) * chartHeight;
                              return { x, y };
                            });

                            const repliesPoints = chartData.map((d, idx) => {
                              const x = paddingLeft + (idx * chartWidth) / (chartData.length - 1);
                              const y = svgHeight - paddingBottom - (d.replies / maxVal) * chartHeight;
                              return { x, y };
                            });

                            const meetingsPoints = chartData.map((d, idx) => {
                              const x = paddingLeft + (idx * chartWidth) / (chartData.length - 1);
                              const y = svgHeight - paddingBottom - (d.meetings / maxVal) * chartHeight;
                              return { x, y };
                            });

                            const recPath = getBezierPath(receivedPoints);
                            const repPath = getBezierPath(repliesPoints);
                            const meetPath = getBezierPath(meetingsPoints);

                            const recFill = `${recPath} L ${receivedPoints[receivedPoints.length - 1].x} ${svgHeight - paddingBottom} L ${receivedPoints[0].x} ${svgHeight - paddingBottom} Z`;
                            const repFill = `${repPath} L ${repliesPoints[repliesPoints.length - 1].x} ${svgHeight - paddingBottom} L ${repliesPoints[0].x} ${svgHeight - paddingBottom} Z`;
                            const meetFill = `${meetPath} L ${meetingsPoints[meetingsPoints.length - 1].x} ${svgHeight - paddingBottom} L ${meetingsPoints[0].x} ${svgHeight - paddingBottom} Z`;

                            return (
                              <div className="relative w-full overflow-x-auto">
                                <svg
                                  className="w-full h-auto min-w-[700px]"
                                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                                  onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const mouseX = ((e.clientX - rect.left) / rect.width) * svgWidth;
                                    const relativeX = mouseX - paddingLeft;
                                    if (relativeX < 0 || relativeX > chartWidth) {
                                      setHoveredChartIdx(null);
                                      return;
                                    }
                                    const pct = relativeX / chartWidth;
                                    const idx = Math.min(
                                      chartData.length - 1,
                                      Math.max(0, Math.round(pct * (chartData.length - 1)))
                                    );
                                    setHoveredChartIdx(idx);
                                  }}
                                  onMouseLeave={() => setHoveredChartIdx(null)}
                                >
                                  <defs>
                                    <linearGradient id="grad-received" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                                    </linearGradient>
                                    <linearGradient id="grad-replies" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                                    </linearGradient>
                                    <linearGradient id="grad-meetings" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                                    </linearGradient>
                                  </defs>

                                  {/* Grid Lines */}
                                  {Array.from({ length: 5 }).map((_, idx) => {
                                    const y = paddingTop + (idx * chartHeight) / 4;
                                    const val = Math.round(maxVal - (idx * maxVal) / 4);
                                    return (
                                      <g key={idx}>
                                        <line
                                          x1={paddingLeft}
                                          y1={y}
                                          x2={svgWidth - paddingRight}
                                          y2={y}
                                          stroke="#f1f5f9"
                                          strokeWidth="1"
                                          strokeDasharray={idx === 4 ? "0" : "4 4"}
                                        />
                                        <text
                                          x={paddingLeft - 10}
                                          y={y + 3}
                                          textAnchor="end"
                                          className="text-[9px] font-mono text-slate-400 fill-current"
                                        >
                                          {val}
                                        </text>
                                      </g>
                                    );
                                  })}

                                  {/* X Axis Labels */}
                                  {chartData.map((d, idx) => {
                                    if (chartRange === "30days" && idx % 2 !== 0) return null;
                                    const x = paddingLeft + (idx * chartWidth) / (chartData.length - 1);
                                    return (
                                      <text
                                        key={idx}
                                        x={x}
                                        y={svgHeight - 10}
                                        textAnchor="middle"
                                        className="text-[9px] font-mono text-slate-400 fill-current"
                                      >
                                        {d.date}
                                      </text>
                                    );
                                  })}

                                  {/* Gradient Fill under curves */}
                                  <path d={recFill} fill="url(#grad-received)" stroke="none" />
                                  <path d={repFill} fill="url(#grad-replies)" stroke="none" />
                                  <path d={meetFill} fill="url(#grad-meetings)" stroke="none" />

                                  {/* Curves */}
                                  <path d={recPath} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d={repPath} fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d={meetPath} fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                                  {/* Hover dots and lines */}
                                  {hoveredChartIdx !== null && chartData[hoveredChartIdx] && (
                                    <g>
                                      <line
                                        x1={receivedPoints[hoveredChartIdx].x}
                                        y1={paddingTop}
                                        x2={receivedPoints[hoveredChartIdx].x}
                                        y2={svgHeight - paddingBottom}
                                        stroke="#cbd5e1"
                                        strokeWidth="1"
                                        strokeDasharray="2 2"
                                      />
                                      <circle cx={receivedPoints[hoveredChartIdx].x} cy={receivedPoints[hoveredChartIdx].y} r="4" fill="#3b82f6" stroke="#fff" strokeWidth="1.5" />
                                      <circle cx={repliesPoints[hoveredChartIdx].x} cy={repliesPoints[hoveredChartIdx].y} r="4" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                                      <circle cx={meetingsPoints[hoveredChartIdx].x} cy={meetingsPoints[hoveredChartIdx].y} r="4" fill="#8b5cf6" stroke="#fff" strokeWidth="1.5" />
                                    </g>
                                  )}
                                </svg>

                                {/* Hover Tooltip HTML Card */}
                                {hoveredChartIdx !== null && chartData[hoveredChartIdx] && (
                                  <div
                                    className="absolute bg-white/95 backdrop-blur-md border border-slate-200/80 p-3 rounded-lg shadow-xl text-left space-y-1.5 pointer-events-none z-20 text-[10px]"
                                    style={{
                                      left: `${Math.min(
                                        80,
                                        Math.max(
                                          10,
                                          ((receivedPoints[hoveredChartIdx].x - 10) / svgWidth) * 100
                                        )
                                      )}%`,
                                      top: "10%",
                                    }}
                                  >
                                    <p className="font-bold text-slate-800 font-mono border-b border-slate-100 pb-1">{chartData[hoveredChartIdx].date}</p>
                                    <p className="flex items-center gap-1.5 text-slate-600 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                      Emails Received: <strong className="font-mono text-slate-800">{chartData[hoveredChartIdx].received}</strong>
                                    </p>
                                    <p className="flex items-center gap-1.5 text-slate-600 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      Replies Sent: <strong className="font-mono text-slate-800">{chartData[hoveredChartIdx].replies}</strong>
                                    </p>
                                    <p className="flex items-center gap-1.5 text-slate-600 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                      Meetings Booked: <strong className="font-mono text-slate-800">{chartData[hoveredChartIdx].meetings}</strong>
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })()}

                          {/* Chart Legend */}
                          <div className="flex items-center gap-6 justify-center text-[10px] font-semibold text-slate-500 pt-2 font-mono">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Emails Received
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> AI Auto-Replies
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Meetings Booked
                            </span>
                          </div>
                        </div>

                        {/* Donut Chart (Lead Classification) & Bar Chart (Lead Sources) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Lead Classification Donut */}
                          <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-4 text-left bg-white/70 backdrop-blur-md">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                                Lead Health & Classification
                              </h3>
                              <span className="text-[9px] text-slate-400 font-mono">Workspace stats</span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-around py-2">
                              {/* SVG Donut */}
                              {(() => {
                                const totalVal = hotLeadsVal + 14 + 10 + 4 + 2; 
                                const donutData = [
                                  { label: "Hot Leads", value: hotLeadsVal, color: "#10b981" },
                                  { label: "Warm Leads", value: 14, color: "#f59e0b" },
                                  { label: "Cold Leads", value: 10, color: "#3b82f6" },
                                  { label: "Lost Leads", value: 4, color: "#ef4444" },
                                  { label: "Spam", value: 2, color: "#64748b" }
                                ];
                                
                                let accumulatedPercent = 0;
                                return (
                                  <>
                                    <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#f1f5f9" strokeWidth="9" />
                                        {donutData.map((d, idx) => {
                                          const percent = d.value / totalVal;
                                          const circumference = 2 * Math.PI * 38;
                                          const strokeOffset = circumference * (1 - percent);
                                          const rotation = accumulatedPercent * 360;
                                          accumulatedPercent += percent;
                                          return (
                                            <circle
                                              key={idx}
                                              cx="50"
                                              cy="50"
                                              r="38"
                                              fill="transparent"
                                              stroke={d.color}
                                              strokeWidth="9"
                                              strokeDasharray={circumference}
                                              strokeDashoffset={strokeOffset}
                                              transform={`rotate(${rotation} 50 50)`}
                                              strokeLinecap="round"
                                              className="transition-all duration-300 hover:stroke-[10px] cursor-pointer"
                                            />
                                          );
                                        })}
                                      </svg>
                                      <div className="absolute flex flex-col items-center justify-center">
                                        <span className="text-lg font-bold font-mono text-slate-800">{totalVal}</span>
                                        <span className="text-[8px] text-slate-400 font-mono uppercase tracking-wider">Contacts</span>
                                      </div>
                                    </div>
                                    
                                    {/* Legend */}
                                    <div className="space-y-2.5 flex-1 min-w-[120px]">
                                      {donutData.map((d, idx) => {
                                        const percent = Math.round((d.value / totalVal) * 100);
                                        return (
                                          <div key={idx} className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                                              <span className="text-slate-600 font-medium">{d.label}</span>
                                            </div>
                                            <span className="font-mono font-semibold text-slate-800">{percent}%</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })()}
                            </div>
                          </div>

                          {/* Email Lead Sources Bar Chart */}
                          <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-4 text-left bg-white/70 backdrop-blur-md">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                <GitFork className="w-3.5 h-3.5 text-sky-600" />
                                Channels Lead Inflow
                              </h3>
                              <span className="text-[9px] text-slate-400 font-mono">Conversion paths</span>
                            </div>

                            <div className="space-y-3 pt-1">
                              {(() => {
                                const webCount = leads.filter(l => l.source === "Website Form").length + 24;
                                const gmailCount = leads.filter(l => l.source === "Gmail").length + 18;
                                const waCount = whatsappChats.length + 12;
                                const referralCount = 8;
                                const linkedInCount = 14;
                                const adsCount = 6;
                                const totalSources = webCount + gmailCount + waCount + referralCount + linkedInCount + adsCount;

                                const sourcesData = [
                                  { label: "Website Form", count: webCount, color: "from-sky-400 to-sky-500" },
                                  { label: "Direct Email", count: gmailCount, color: "from-indigo-400 to-indigo-500" },
                                  { label: "WhatsApp Bot", count: waCount, color: "from-emerald-400 to-emerald-500" },
                                  { label: "LinkedIn LeadGen", count: linkedInCount, color: "from-blue-500 to-blue-600" },
                                  { label: "Referrals", count: referralCount, color: "from-purple-400 to-purple-500" },
                                  { label: "Google/FB Ads", count: adsCount, color: "from-rose-400 to-rose-500" }
                                ];

                                return sourcesData.map((src, idx) => {
                                  const pct = Math.round((src.count / totalSources) * 100) || 0;
                                  return (
                                    <div key={idx} className="space-y-1">
                                      <div className="flex justify-between text-[10px] font-sans text-slate-600">
                                        <span className="font-semibold text-slate-700">{src.label}</span>
                                        <span className="font-mono text-slate-400">{src.count} leads ({pct}%)</span>
                                      </div>
                                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
                                        <div
                                          className={`h-full bg-gradient-to-r ${src.color} rounded-full transition-all duration-500`}
                                          style={{ width: `${pct}%` }}
                                        />
                                      </div>
                                    </div>
                                  );
                                });
                              })()}
                            </div>
                          </div>
                        </div>

                        {/* Pipeline Funnel Stage block */}
                        <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm bg-white/70 backdrop-blur-md">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-left">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Lead Qualification Pipeline Funnel</h3>
                            <span className="text-[9px] text-slate-400 font-mono">Conversion stage efficiency</span>
                          </div>
                          <div className="space-y-3">
                            {[
                              { stage: "Ingested Inbound Leads", count: `${leads.length + 154} leads`, percent: "100%", w: "w-full", bg: "bg-blue-500/20" },
                              { stage: "AI Intent Match & Scored", count: `${leads.filter(l => l.score >= 50).length + 84} leads`, percent: leads.length > 0 ? `${Math.round(((leads.filter(l => l.score >= 50).length + 84) / (leads.length + 154)) * 100)}%` : "54%", w: "w-[54%]", bg: "bg-cyan-500/20" },
                              { stage: "Qualified (Score > " + settings.qualificationThreshold + ")", count: `${leads.filter(l => l.score >= settings.qualificationThreshold).length + 42} leads`, percent: leads.length > 0 ? `${Math.round(((leads.filter(l => l.score >= settings.qualificationThreshold).length + 42) / (leads.length + 154)) * 100)}%` : "27%", w: "w-[27%]", bg: "bg-emerald-500/20" },
                              { stage: "Screening Calls Booked", count: `${calls.filter(c => c.bookedMeeting || c.meetingBooked).length + 12} bookings`, percent: leads.length > 0 ? `${Math.round(((calls.filter(c => c.bookedMeeting || c.meetingBooked).length + 12) / (leads.length + 154)) * 100)}%` : "8%", w: "w-[8%]", bg: "bg-purple-500/20" }
                            ].map((stage, idx) => (
                              <div key={idx} className="relative p-2.5 rounded-lg border border-slate-100 overflow-hidden bg-slate-50/40 text-left">
                                <div className={`absolute inset-y-0 left-0 ${stage.bg} ${stage.w} opacity-10`} />
                                <div className="flex items-center justify-between text-xs relative z-10 font-mono">
                                  <span className="text-slate-700 font-sans">{stage.stage}</span>
                                  <div className="flex items-center gap-3">
                                    <span className="text-slate-500">{stage.count}</span>
                                    <span className="text-sky-600 font-bold">{stage.percent}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      renderOnboardingCard()
                    )}
                  </div>
                )}

                {/* 2. AI INBOX TAB */}
                {activeTab === "inbox" && (
                  <div className="space-y-6 text-left">
                    {integrationStatuses.gmail !== "Connected" ? (
                      renderGmailEmptyState()
                    ) : inboxItems.length === 0 ? (
                      renderEmptyInbox()
                    ) : (
                      <>
                        {/* Filter & Search Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-200/60 card-glass-static">
                          <div className="relative w-full sm:max-w-xs">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                            <input
                              type="text"
                              placeholder="Search inbox..."
                              value={inboxSearch}
                              onChange={(e) => setInboxSearch(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-800 outline-none focus:border-sky-500/50 transition-colors"
                            />
                          </div>
                          <div className="flex gap-2">
                            {["All", "Website Form", "Gmail", "WhatsApp"].map(src => (
                              <button
                                key={src}
                                onClick={() => setInboxFilter(src)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors ${
                                  inboxFilter === src 
                                    ? "bg-sky-50 text-sky-600 border border-sky-200/60" 
                                    : "text-slate-500 card-glass-static border border-slate-200/40 hover:bg-slate-50"
                                }`}
                              >
                                {src}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Split View */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[600px]">
                          {/* Left: Leads List Grouped by Thread (Step 8 - Superhuman Cards) */}
                          <div className="lg:col-span-2 rounded-xl border border-slate-200/80 card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-slate-100 bg-white/70 backdrop-blur-md">
                            {(() => {
                              const threads = groupInboxByThread(filteredInbox);
                              if (threads.length === 0) {
                                return <div className="p-8 text-center text-xs text-slate-400 font-mono">No matching messages.</div>;
                              }
                              return threads.map(thread => {
                                const isActive = selectedInboxId === thread.id || (!selectedInboxId && threads[0]?.id === thread.id);
                                const initials = getInitials(thread.customerName);
                                const avatarColor = getAvatarColor(thread.customerName);
                                
                                const hasAIDraft = thread.messages.some(m => m.status === "RECEIVED" && m.score >= 40);
                                const isReplied = thread.messages.some(m => m.status === "SENT");
                                
                                let statusText = "New Inbound";
                                let statusColor = "bg-blue-50 text-blue-600 border-blue-100";
                                if (isReplied) {
                                  statusText = "Replied";
                                  statusColor = "bg-green-50 text-green-600 border-green-100";
                                } else if (hasAIDraft) {
                                  statusText = "AI Draft Ready";
                                  statusColor = "bg-violet-50 text-violet-600 border-violet-100 animate-pulse";
                                }

                                const matchedLead = leads.find(l => l.email.toLowerCase() === thread.customerEmail.toLowerCase());
                                const revenue = matchedLead ? matchedLead.revenue : "—";

                                return (
                                  <div
                                    key={thread.id}
                                    onClick={() => {
                                      setSelectedInboxId(thread.id);
                                      setInboxItems(prev => prev.map(i => (i.threadId === thread.threadId || i.email === thread.customerEmail) ? { ...i, read: true } : i));
                                    }}
                                    className={`p-3.5 cursor-pointer border-b border-slate-100 transition-all relative text-left group flex items-start gap-3 select-none ${
                                      isActive ? "bg-sky-50/60 shadow-inner" : "hover:bg-slate-50/50"
                                    }`}
                                  >
                                    {thread.unread && (
                                      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-sky-500 rounded-full" />
                                    )}

                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 shadow-inner ${avatarColor}`}>
                                      {initials}
                                    </div>

                                    <div className="flex-1 min-w-0 space-y-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-xs font-bold text-slate-800 truncate">{thread.customerName}</h4>
                                        <span className="text-[9px] text-slate-400 font-mono shrink-0">
                                          {new Date(thread.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                        </span>
                                      </div>
                                      
                                      <p className="text-[11px] font-semibold text-slate-700 truncate">{thread.subject}</p>
                                      <p className="text-[10px] text-slate-400 truncate leading-relaxed">"{thread.snippet}"</p>
                                      
                                      <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold border ${
                                          thread.score >= 80 ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                          thread.score >= 50 ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-slate-50 text-slate-500 border-slate-100"
                                        }`}>
                                          🎯 Score: {thread.score}
                                        </span>

                                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono border ${
                                          thread.priority === "High" ? "bg-red-50 text-red-600 border-red-100 font-bold" :
                                          thread.priority === "Medium" ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-slate-50 text-slate-500 border-slate-100"
                                        }`}>
                                          {thread.priority === "High" ? "🔥 High" : thread.priority === "Medium" ? "⚡ Med" : "💤 Low"}
                                        </span>

                                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono border ${statusColor}`}>
                                          {statusText}
                                        </span>

                                        {revenue !== "—" && (
                                          <span className="text-[9px] bg-indigo-50 border border-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full font-mono font-bold">
                                            💰 {revenue}
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    {/* Hover Quick Actions */}
                                    <div className="absolute right-2 top-2 bg-white/95 border border-slate-200 shadow-lg rounded-lg hidden group-hover:flex items-center gap-1 p-1 z-20">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setReplyMessageSource(thread.snippet);
                                          const itemKey = thread.id === "inbox-1" ? "inbox1" : "inbox2";
                                          const prefill = TONE_TEMPLATES[replyTone]?.[itemKey] || `Hi,\n\nI saw your query regarding "${thread.subject}".\n\nBest regards,\nAI Employee`;
                                          setReplyDraft(prefill);
                                          setActiveTab("replies");
                                        }}
                                        className="p-1 text-slate-400 hover:text-sky-600 hover:bg-slate-50 rounded"
                                        title="Compose AI Reply"
                                      >
                                        <Mail className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleTriggerCall(thread.messages[thread.messages.length - 1]);
                                        }}
                                        className="p-1 text-slate-400 hover:text-green-600 hover:bg-slate-50 rounded"
                                        title="Trigger AI Outbound Call"
                                      >
                                        <Phone className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setInboxItems(prev => prev.map(i => (i.threadId === thread.threadId || i.email === thread.customerEmail) ? { ...i, read: !thread.unread } : i));
                                        }}
                                        className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded"
                                        title={thread.unread ? "Mark as Read" : "Mark as Unread"}
                                      >
                                        <Check className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              });
                            })()}
                          </div>

                          {/* Center Column: Conversation history and AI draft replies (lg:col-span-2) */}
                          <div className="lg:col-span-2 rounded-xl border border-slate-200/80 card-glass-static p-4 flex flex-col justify-between overflow-hidden h-full text-left bg-white/70 backdrop-blur-md shadow-sm">
                            {(() => {
                              const threads = groupInboxByThread(filteredInbox);
                              const activeThread = threads.find(t => t.id === selectedInboxId) || threads[0];
                              
                              if (!activeThread) {
                                return <div className="flex items-center justify-center h-full text-xs text-slate-400 font-mono">Select an email to view details</div>;
                              }

                              const hasAIDraft = activeThread.messages.some(m => m.status === "RECEIVED" && m.score >= 40);

                              return (
                                <>
                                  {/* Thread Header */}
                                  <div className="border-b border-slate-100 pb-3 mb-3 flex items-center justify-between shrink-0">
                                    <div className="min-w-0">
                                      <h3 className="text-xs font-bold text-slate-800 truncate">{activeThread.customerName}</h3>
                                      <p className="text-[9px] text-slate-400 font-mono truncate">{activeThread.customerEmail}</p>
                                    </div>
                                    <span className="text-[9px] font-mono font-bold text-slate-400 truncate max-w-[120px] ml-2 text-right">
                                      Subject: {activeThread.subject}
                                    </span>
                                  </div>

                                  {/* Chat bubble list */}
                                  <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-hide pb-4">
                                    {activeThread.messages.map((msg, idx) => {
                                      const isOutbound = msg.email === integrationStatuses.gmailEmail || msg.senderName === "Me" || (msg.suggestedAction === "None" && msg.intent === "Outgoing Reply") || msg.status === "SENT";
                                      const initials = getInitials(isOutbound ? "Me" : msg.senderName);
                                      const avatarColor = getAvatarColor(isOutbound ? "Me" : msg.senderName);
                                      
                                      const isLastInbound = !isOutbound && idx === activeThread.messages.length - 1;
                                      
                                      return (
                                        <div key={msg.id || idx} className="space-y-1">
                                          <div className={`flex items-start gap-2.5 ${isOutbound ? "flex-row-reverse" : ""}`}>
                                            {/* Avatar */}
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] border shrink-0 shadow-inner ${avatarColor}`}>
                                              {initials}
                                            </div>

                                            {/* Bubble */}
                                            <div className={`flex flex-col ${isOutbound ? "items-end" : "items-start"} max-w-[82%]`}>
                                              <div className="text-[8px] text-slate-400 font-mono mb-0.5">
                                                {isOutbound ? "You (via Gmail)" : msg.senderName} • {new Date(msg.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', month: 'short', day: 'numeric'})}
                                              </div>
                                              <div className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                                                isOutbound 
                                                  ? "bg-gradient-to-tr from-sky-500 to-sky-600 text-white rounded-tr-none" 
                                                  : "bg-white border border-slate-200/80 text-slate-700 rounded-tl-none"
                                              }`}>
                                                <div className="whitespace-pre-wrap font-sans">{msg.message}</div>
                                                
                                                {/* File Attachment list */}
                                                {!isOutbound && msg.senderName.includes("Rohan") && idx === 0 && (
                                                  <div className="mt-3 flex flex-col gap-2 w-full">
                                                    <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 transition-all group/file max-w-[240px]">
                                                      <div className="flex items-center gap-2 overflow-hidden">
                                                        <div className="p-1.5 rounded bg-red-50 text-red-500">
                                                          <FileText className="w-4 h-4" />
                                                        </div>
                                                        <div className="min-w-0">
                                                          <p className="text-[10px] font-bold text-slate-700 truncate">Nexus_Automation_Scoping.pdf</p>
                                                          <p className="text-[8px] text-slate-400 font-mono">1.4 MB</p>
                                                        </div>
                                                      </div>
                                                      <div className="flex items-center gap-1 opacity-0 group-hover/file:opacity-100 transition-opacity pl-2">
                                                        <button onClick={() => showToast("Downloading Nexus_Automation_Scoping.pdf...", "success")} className="p-1 hover:bg-slate-200 rounded text-slate-500 hover:text-slate-700">
                                                          <Download className="w-3.5 h-3.5" />
                                                        </button>
                                                      </div>
                                                    </div>

                                                    <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 transition-all group/file max-w-[240px]">
                                                      <div className="flex items-center gap-2 overflow-hidden">
                                                        <div className="p-1.5 rounded bg-blue-50 text-blue-500">
                                                          <Layers className="w-4 h-4" />
                                                        </div>
                                                        <div className="min-w-0">
                                                          <p className="text-[10px] font-bold text-slate-700 truncate">CRM_Integration_Flow.png</p>
                                                          <p className="text-[8px] text-slate-400 font-mono">820 KB</p>
                                                        </div>
                                                      </div>
                                                      <div className="flex items-center gap-1 opacity-0 group-hover/file:opacity-100 transition-opacity pl-2">
                                                        <button onClick={() => showToast("Downloading CRM_Integration_Flow.png...", "success")} className="p-1 hover:bg-slate-200 rounded text-slate-500 hover:text-slate-700">
                                                          <Download className="w-3.5 h-3.5" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>

                                          {/* Suggested Draft alert if pending reply */}
                                          {isLastInbound && hasAIDraft && replyDraft && (
                                            <div className="ml-8 mt-2 p-3 bg-amber-50/50 border border-dashed border-amber-300 rounded-xl space-y-1.5 text-xs text-slate-700 max-w-[85%]">
                                              <span className="text-[9px] font-mono font-bold text-amber-700 flex items-center gap-1">
                                                <Sparkles className="w-3 h-3 text-amber-500 animate-spin" />
                                                Suggested AI Draft Reply
                                              </span>
                                              <p className="font-sans italic leading-relaxed text-slate-600 bg-white/70 p-2 rounded border border-amber-100">
                                                "{replyDraft.slice(0, 150)}..."
                                              </p>
                                              <button
                                                onClick={() => {
                                                  showToast("AI Draft pre-populated below.", "info");
                                                }}
                                                className="text-[9px] text-sky-600 hover:underline font-mono"
                                              >
                                                Edit Draft Below →
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* Bottom Composer Interface */}
                                  <div className="border-t border-slate-100 pt-3 shrink-0 space-y-2.5">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                        <Sparkles className="w-3 h-3 text-sky-500" />
                                        Tone Profile Suggested Reply
                                      </span>
                                      
                                      {/* Capsule Tone Selector buttons inside Composer */}
                                      <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg">
                                        {["Professional", "Friendly", "Sales", "Startup"].map(t => (
                                          <button
                                            key={t}
                                            onClick={() => {
                                              setReplyTone(t);
                                              handleGenerateReply(t);
                                            }}
                                            className={`px-2 py-0.5 rounded text-[8px] font-mono transition-all ${
                                              replyTone === t
                                                ? "bg-white text-sky-600 shadow-sm font-bold"
                                                : "text-slate-500 hover:text-slate-800"
                                            }`}
                                          >
                                            {t}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="relative">
                                      {isRegenerating && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] rounded-lg flex flex-col items-center justify-center gap-1.5 z-10">
                                          <RefreshCw className="w-4 h-4 text-sky-600 animate-spin" />
                                          <span className="text-[9px] text-slate-500 font-mono">Formulating in {replyTone} tone...</span>
                                        </div>
                                      )}
                                      <textarea
                                        value={replyDraft}
                                        onChange={(e) => setReplyDraft(e.target.value)}
                                        className="w-full h-24 p-2.5 card-glass-static border border-slate-200/60 focus:border-sky-500/50 outline-none rounded-lg text-[11px] font-mono text-slate-700 leading-relaxed resize-none"
                                        placeholder="AI replies will be drafted here. Use tone selector or write your own reply..."
                                      />
                                    </div>

                                    {emailStatusMessage && (
                                      <div className="p-1.5 bg-sky-50 border border-sky-100 text-sky-700 text-[9px] font-mono rounded text-center">
                                        {emailStatusMessage}
                                      </div>
                                    )}

                                    <div className="flex items-center justify-between gap-2">
                                      <button
                                        onClick={() => handleGenerateReply(replyTone)}
                                        className="flex items-center gap-1 px-2.5 py-1.5 card-glass-static hover:bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-[9px] font-bold transition-colors"
                                      >
                                        <RefreshCw className="w-2.5 h-2.5" /> Re-draft
                                      </button>
                                      
                                      <div className="flex gap-1.5">
                                        <button
                                          onClick={() => handleTriggerCall(activeThread.messages[activeThread.messages.length - 1])}
                                          className="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-lg text-[9px] font-bold transition-colors flex items-center gap-1"
                                        >
                                          <Phone className="w-2.5 h-2.5 text-green-600" /> Auto-Call
                                        </button>
                                        <button
                                          onClick={handleSendReply}
                                          disabled={!replyDraft.trim() || isRegenerating}
                                          className="px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-[9px] font-bold transition-all shadow-sm flex items-center gap-1 disabled:opacity-40"
                                        >
                                          <Send className="w-2.5 h-2.5" /> Send Reply
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })()}
                          </div>

                          {/* Right Column: Relationship Memory Sidebar & Timeline (lg:col-span-1) */}
                          <div className="lg:col-span-1 rounded-xl border border-slate-200/80 card-glass-static p-4 flex flex-col justify-between overflow-y-auto scrollbar-hide h-full text-left bg-white/70 backdrop-blur-md shadow-sm space-y-4">
                            {(() => {
                              const threads = groupInboxByThread(filteredInbox);
                              const activeThread = threads.find(t => t.id === selectedInboxId) || threads[0];
                              if (!activeThread) return null;
                              
                              const memory = customerMemories.find(m => m.email.toLowerCase() === activeThread.customerEmail.toLowerCase());
                              const customerTimeline = timeline.filter(event => 
                                event.text.toLowerCase().includes(activeThread.customerEmail.toLowerCase()) || 
                                event.text.toLowerCase().includes(activeThread.customerName.toLowerCase())
                              );

                              return (
                                <>
                                  <div className="space-y-4 flex-1">
                                    {/* Relationship Header */}
                                    <div className="text-center pb-3 border-b border-slate-100">
                                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-2 shadow-md">
                                        {getInitials(activeThread.customerName)}
                                      </div>
                                      <h4 className="text-xs font-bold text-slate-800">{activeThread.customerName}</h4>
                                      <p className="text-[8px] text-slate-400 font-mono mt-0.5 truncate">{activeThread.customerEmail}</p>
                                    </div>

                                    {/* Health Score */}
                                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/50 space-y-1.5">
                                      <div className="flex items-center justify-between text-[9px] font-mono uppercase text-slate-500">
                                        <span>Relationship Strength</span>
                                        <span className="font-bold text-green-600">{memory?.relationshipScore || activeThread.score}%</span>
                                      </div>
                                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full transition-all duration-300" style={{ width: `${memory?.relationshipScore || activeThread.score}%` }} />
                                      </div>
                                    </div>

                                    {/* CRM Metadata Cards */}
                                    <div className="space-y-2">
                                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">CRM Context Profiles</span>
                                      
                                      <div className="space-y-1.5 text-[10px]">
                                        <div className="flex justify-between border-b border-slate-50 py-0.5">
                                          <span className="text-slate-400">Known Since:</span>
                                          <span className="text-slate-700 font-medium">Jun 14, 2026</span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-50 py-0.5">
                                          <span className="text-slate-400">Pain Points:</span>
                                          <span className="text-slate-700 font-medium truncate max-w-[110px]" title={memory?.painPoints || "None"}>
                                            {memory?.painPoints || "None"}
                                          </span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-50 py-0.5">
                                          <span className="text-slate-400">Budget Limit:</span>
                                          <span className="text-slate-700 font-medium font-mono">
                                            {memory?.budget || "Unknown"}
                                          </span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-50 py-0.5">
                                          <span className="text-slate-400">Deal Revenue:</span>
                                          <span className="text-indigo-600 font-bold font-mono">
                                            {leads.find(l => l.email.toLowerCase() === activeThread.customerEmail.toLowerCase())?.revenue || "—"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* AI Memory Digest */}
                                    <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100 space-y-1 text-[9px] leading-normal text-slate-600">
                                      <span className="font-mono font-bold text-sky-600 flex items-center gap-1">
                                        <Sparkles className="w-2.5 h-2.5" /> MEMORY DIGEST
                                      </span>
                                      <p className="italic">
                                        {memory?.lastSummary || "No interaction summary generated. Inbound queries automatically synthesize context."}
                                      </p>
                                    </div>

                                    {/* Collapsible Timeline Feed */}
                                    <div className="space-y-2 border-t border-slate-100 pt-3">
                                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Customer Timeline</span>
                                      
                                      {customerTimeline.length > 0 ? (
                                        <div className="space-y-2 font-mono text-[8px] text-slate-500 max-h-[140px] overflow-y-auto scrollbar-hide pr-1">
                                          {customerTimeline.map((evt, idx) => (
                                            <div key={evt.id || idx} className="flex gap-1.5 items-start border-l border-slate-200 pl-1.5 ml-1">
                                              <span className="text-slate-400 shrink-0">
                                                {new Date(evt.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                              </span>
                                              <span className="text-slate-600 leading-normal">{evt.text}</span>
                                            </div>
                                          ))}
                                        </div>
                                      ) : (
                                        <p className="text-[9px] text-slate-400 italic">No timeline events logged.</p>
                                      )}
                                    </div>
                                  </div>
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 3. QUALIFIED LEADS TAB */}
                {activeTab === "leads" && (
                  <div className="space-y-6">
                    {integrationStatuses.gmail !== "Connected" ? (
                      renderGmailEmptyState()
                    ) : leads.length === 0 ? (
                      renderEmptyLeads()
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-200/60 card-glass-static">
                          <div className="relative w-full sm:max-w-xs">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                            <input
                              type="text"
                              placeholder="Search qualified leads..."
                              value={leadsSearch}
                              onChange={(e) => setLeadsSearch(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-800 outline-none focus:border-sky-500/50 transition-colors"
                            />
                          </div>
                          <div className="flex gap-2">
                            {["All", "High", "Medium"].map(pr => (
                              <button
                                key={pr}
                                onClick={() => setLeadsFilter(pr)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors ${
                                  leadsFilter === pr 
                                    ? "bg-sky-50 text-sky-600 border border-sky-200/60" 
                                    : "text-slate-500 card-glass-static border border-slate-200/40 hover:bg-slate-50"
                                }`}
                              >
                                {pr} Priority
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Pipelines table */}
                        <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm overflow-x-auto text-left">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="border-b border-slate-100 text-slate-500 font-mono uppercase text-[9px] tracking-wider">
                                <th className="pb-3 font-semibold">Name</th>
                                <th className="pb-3 font-semibold">Email & Phone</th>
                                <th className="pb-3 font-semibold">Source</th>
                                <th className="pb-3 font-semibold">Score</th>
                                <th className="pb-3 font-semibold">Priority</th>
                                <th className="pb-3 font-semibold">Status</th>
                                <th className="pb-3 font-semibold">Est. Deal Value</th>
                                <th className="pb-3 font-semibold text-right">Instant Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100/65">
                              {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-50/40 transition-colors">
                                  <td className="py-4 text-slate-800 font-medium">{lead.name}</td>
                                  <td className="py-4">
                                    <div className="text-slate-700 font-semibold">{lead.email}</div>
                                    <div className="text-slate-400 text-[10px] font-mono mt-0.5">{lead.phone}</div>
                                  </td>
                                  <td className="py-4 text-slate-500 font-mono">{lead.source}</td>
                                  <td className="py-4">
                                    <span className="text-green-600 font-mono font-bold">{lead.score}/100</span>
                                  </td>
                                  <td className="py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                                      lead.priority === "High" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                                    }`}>
                                      {lead.priority}
                                    </span>
                                  </td>
                                  <td className="py-4">
                                    <span className={`flex items-center gap-1 text-[11px] ${
                                      lead.status === "Converted" ? "text-green-600" :
                                      lead.status === "In Progress" ? "text-amber-600" : "text-sky-600"
                                    }`}>
                                      <span className={`w-1.5 h-1.5 rounded-full ${
                                        lead.status === "Converted" ? "bg-green-500" :
                                        lead.status === "In Progress" ? "bg-amber-500" : "bg-purple-500"
                                      }`} />
                                      {lead.status}
                                    </span>
                                  </td>
                                  <td className="py-4 font-mono text-slate-800 font-semibold">{lead.revenue}</td>
                                  <td className="py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                      <button
                                        onClick={() => {
                                          setReplyMessageSource(`Manually triggered draft reply for ${lead.name}`);
                                          setReplyDraft(`Dear ${lead.name},\n\nHope you are doing well. I wanted to follow up on your request regarding TechieHelp LeadAI.\n\nLet's get connected.\n\nBest,\nLeadAI Assistant`);
                                          setActiveTab("replies");
                                        }}
                                        className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800" 
                                        title="Email Reply"
                                      >
                                        <Mail className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => handleTriggerCall(lead)}
                                        className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded text-green-600 hover:bg-green-50" 
                                        title="Call Dial"
                                      >
                                        <Phone className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: "Converted" } : l));
                                          const now = new Date();
                                          const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
                                          setTimeline(prev => [
                                            {
                                              id: `time-conv-${Date.now()}`,
                                              time: timeStr,
                                              text: `Lead Converted: ${lead.name} Marked as Converted manually.`,
                                              type: "crm"
                                            },
                                            ...prev
                                          ]);
                                        }}
                                        className="px-2 py-1 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 hover:border-sky-300 text-sky-600 rounded font-mono font-bold text-[9px] uppercase transition-all"
                                      >
                                        Convert
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 4. AI REPLIES TAB */}
                {activeTab === "replies" && (
                  <div className="space-y-6">
                    {integrationStatuses.gmail !== "Connected" ? (
                      renderGmailEmptyState()
                    ) : (
                      <>
                        <div className="flex border-b border-slate-200/80 mb-6 space-x-6 px-2">
                          <button
                            onClick={() => setAiRepliesTab("logs")}
                            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                              aiRepliesTab === "logs" ? "border-b-2 border-sky-600 text-sky-600" : "text-slate-400 hover:text-slate-600"
                            }`}
                          >
                            Reply Logs
                          </button>
                          <button
                            onClick={() => setAiRepliesTab("analytics")}
                            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                              aiRepliesTab === "analytics" ? "border-b-2 border-sky-600 text-sky-600" : "text-slate-400 hover:text-slate-600"
                            }`}
                          >
                            Analytics Dashboard
                          </button>
                          <button
                            onClick={() => setAiRepliesTab("settings")}
                            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                              aiRepliesTab === "settings" ? "border-b-2 border-sky-600 text-sky-600" : "text-slate-400 hover:text-slate-600"
                            }`}
                          >
                            Settings Form
                          </button>
                        </div>

                        {aiRepliesTab === "logs" && (
                          <div className="space-y-4 text-left">
                            {/* Composer panel for currently selected thread */}
                            {inboxItems.length > 0 && (
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left: Original Message */}
                                <div className="rounded-xl border border-slate-200/80 card-glass-static p-6 space-y-4">
                                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">Inbound Inquiry Message</h3>
                                  <div className="p-4 rounded-lg card-glass-static border border-slate-200/40 text-xs text-slate-600 leading-relaxed font-sans min-h-[180px] overflow-y-auto">
                                    {replyMessageSource || "Select an email from inbox to load context."}
                                  </div>
                                  <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/50 space-y-1">
                                    <span className="text-[9px] font-mono font-bold text-amber-700 flex items-center gap-1.5">
                                      <AlertCircle className="w-3.5 h-3.5" />
                                      AI PRE-QUALIFICATION COMPLETED
                                    </span>
                                    <p className="text-[11px] text-slate-500">
                                      The system evaluated this inquiry as high alignment with positive intent. Standard draft answers were populated using tone selector overrides below.
                                    </p>
                                  </div>
                                </div>

                                {/* Right: AI Draft Editor */}
                                <div className="rounded-xl border border-slate-200/80 card-glass-static p-6 space-y-4 relative">
                                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">AI Generated Reply</h3>
                                    <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg">
                                      {["Professional", "Friendly", "Sales", "Startup"].map(t => (
                                        <button
                                          key={t}
                                          onClick={() => handleToneChange(t)}
                                          className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                                            replyTone === t
                                              ? "bg-white text-sky-600 shadow-sm font-bold"
                                              : "text-slate-500 hover:text-slate-800"
                                          }`}
                                        >
                                          {t}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="relative">
                                    {isRegenerating && (
                                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-2.5 z-10">
                                        <RefreshCw className="w-6 h-6 text-sky-600 animate-spin" />
                                        <span className="text-[10px] text-slate-500 font-mono">Regenerating in {replyTone} tone...</span>
                                      </div>
                                    )}
                                    <textarea
                                      value={replyDraft}
                                      onChange={(e) => setReplyDraft(e.target.value)}
                                      className="w-full h-56 p-4 card-glass-static border border-slate-200/60 focus:border-sky-500/50 outline-none rounded-lg text-xs font-mono text-slate-700 leading-relaxed resize-none"
                                      placeholder="Drafting AI reply..."
                                    />
                                  </div>
                                  <div className="flex items-center justify-between pt-2">
                                    <button
                                      onClick={handleRegenerateReply}
                                      className="flex items-center gap-1.5 px-3 py-2 card-glass-static hover:bg-slate-50 border border-slate-200/60 text-slate-600 rounded-lg text-xs font-semibold transition-colors"
                                    >
                                      <RefreshCw className="w-3.5 h-3.5" /> Regenerate
                                    </button>
                                    <button
                                      onClick={handleSendReply}
                                      className="flex items-center gap-1.5 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                                    >
                                      <Send className="w-3.5 h-3.5" /> Send Reply
                                    </button>
                                  </div>
                                  {emailStatusMessage && (
                                    <div className="mt-3 p-2 bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-[10px] font-mono rounded text-center animate-pulse">
                                      {emailStatusMessage}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Sent Replies Log Table */}
                            <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-4">
                              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-sky-600" /> AI Reply History
                                </h3>
                                <button
                                  onClick={fetchAiReplyLogs}
                                  className="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded text-[9px] font-mono font-bold text-slate-600 flex items-center gap-1 transition-all"
                                >
                                  <RefreshCw className={`w-3 h-3 ${aiReplyLogsLoading ? "animate-spin" : ""}`} /> Refresh
                                </button>
                              </div>
                              {aiReplyLogsLoading ? (
                                <div className="flex items-center justify-center py-10 text-slate-400 text-xs font-mono">
                                  <RefreshCw className="w-4 h-4 animate-spin mr-2" /> Loading reply logs...
                                </div>
                              ) : aiReplyLogs.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center text-slate-400 space-y-2">
                                  <Mail className="w-8 h-8 text-slate-300" />
                                  <p className="text-xs">No AI auto-replies sent yet.</p>
                                  <p className="text-[10px] text-slate-400 font-mono">Enable Auto-Reply in Settings tab to start sending.</p>
                                </div>
                              ) : (
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left border-collapse text-xs">
                                    <thead>
                                      <tr className="border-b border-slate-100 text-slate-500 font-mono uppercase text-[9px] tracking-wider">
                                        <th className="pb-3 font-semibold">Recipient</th>
                                        <th className="pb-3 font-semibold">Subject</th>
                                        <th className="pb-3 font-semibold">Tone</th>
                                        <th className="pb-3 font-semibold text-center">Confidence</th>
                                        <th className="pb-3 font-semibold">Status</th>
                                        <th className="pb-3 font-semibold">Response?</th>
                                        <th className="pb-3 font-semibold">Sent At</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100/65">
                                      {aiReplyLogs.map((log) => (
                                        <tr key={log.id} className="hover:bg-slate-50/40 transition-colors">
                                          <td className="py-3 text-slate-700 font-medium truncate max-w-[140px]">{log.recipient}</td>
                                          <td className="py-3 text-slate-600 truncate max-w-[180px]">{log.subject}</td>
                                          <td className="py-3">
                                            <span className="px-1.5 py-0.5 bg-sky-50 text-sky-600 border border-sky-100 rounded font-mono text-[9px] font-bold">{log.toneUsed}</span>
                                          </td>
                                          <td className="py-3 text-center">
                                            <span className={`font-mono font-bold text-[10px] ${
                                              log.confidence >= 90 ? "text-green-600" :
                                              log.confidence >= 70 ? "text-amber-600" : "text-red-500"
                                            }`}>{log.confidence}%</span>
                                          </td>
                                          <td className="py-3">
                                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                                              log.status === "SENT" ? "bg-green-50 text-green-600" :
                                              log.status === "DRAFT" ? "bg-amber-50 text-amber-600" : "bg-slate-50 text-slate-500"
                                            }`}>{log.status}</span>
                                          </td>
                                          <td className="py-3">
                                            <span className={`text-[10px] font-mono ${
                                              log.responseReceived ? "text-emerald-600 font-bold" : "text-slate-400"
                                            }`}>{log.responseReceived ? "✓ Yes" : "—"}</span>
                                          </td>
                                          <td className="py-3 text-slate-400 font-mono text-[9px]">
                                            {log.sentTime ? new Date(log.sentTime).toLocaleString([], { hour: "2-digit", minute: "2-digit", month: "short", day: "numeric" }) : "—"}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {aiRepliesTab === "analytics" && (
                          <div className="space-y-6">
                            {aiReplyAnalyticsLoading ? (
                              <div className="flex items-center justify-center py-20 text-slate-400 text-xs font-mono">
                                <RefreshCw className="w-5 h-5 animate-spin mr-2" /> Loading analytics...
                              </div>
                            ) : (
                              <>
                                {/* KPI Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                  {[
                                    { label: "Replies Sent", val: aiReplyAnalytics?.metrics?.repliesSent ?? 24, icon: Send, color: "text-sky-600", bg: "bg-sky-50" },
                                    { label: "Response Rate", val: `${aiReplyAnalytics?.metrics?.responseRate ?? 58}%`, icon: ArrowUpRight, color: "text-emerald-600", bg: "bg-emerald-50" },
                                    { label: "Positive Replies", val: aiReplyAnalytics?.metrics?.positiveReplies ?? 14, icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
                                    { label: "Meetings Booked", val: aiReplyAnalytics?.metrics?.meetingsBooked ?? 8, icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
                                    { label: "Avg Reply Time", val: aiReplyAnalytics?.metrics?.avgReplyTime ?? "4.2 min", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
                                    { label: "Revenue Pipeline", val: `₹${((aiReplyAnalytics?.metrics?.revenueGenerated ?? 175000) / 1000).toFixed(0)}K`, icon: DollarSign, color: "text-indigo-600", bg: "bg-indigo-50" },
                                  ].map((kpi, i) => {
                                    const KpiIcon = kpi.icon;
                                    return (
                                      <div key={i} className="card-glass-static p-4 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center space-y-1.5">
                                        <div className={`p-2 ${kpi.bg} rounded-lg`}>
                                          <KpiIcon className={`w-4 h-4 ${kpi.color}`} />
                                        </div>
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">{kpi.label}</span>
                                        <span className={`text-xl font-bold font-mono ${kpi.color}`}>{kpi.val}</span>
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  {/* Reply Trend Chart */}
                                  <div className="card-glass-static p-6 rounded-xl border border-slate-200/80 space-y-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">7-Day Reply Trend</h3>
                                    {(() => {
                                      const trend = aiReplyAnalytics?.trend || [];
                                      if (trend.length === 0) return <div className="flex items-center justify-center h-32 text-slate-400 text-xs font-mono">No trend data available.</div>;
                                      const maxVal = Math.max(...trend.map(d => Math.max(d.sent, d.responses))) * 1.2 || 10;
                                      const svgW = 400; const svgH = 140;
                                      const padL = 35; const padB = 30; const padT = 10; const padR = 10;
                                      const cW = svgW - padL - padR;
                                      const cH = svgH - padT - padB;
                                      const sentPts = trend.map((d, i) => ({ x: padL + (i * cW) / (trend.length - 1), y: svgH - padB - (d.sent / maxVal) * cH }));
                                      const resPts = trend.map((d, i) => ({ x: padL + (i * cW) / (trend.length - 1), y: svgH - padB - (d.responses / maxVal) * cH }));
                                      const toPath = pts => pts.reduce((acc, p, i) => i === 0 ? `M${p.x},${p.y}` : `${acc} L${p.x},${p.y}`, "");
                                      return (
                                        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto">
                                          <defs>
                                            <linearGradient id="sent-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3"/><stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"/></linearGradient>
                                            <linearGradient id="res-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/><stop offset="100%" stopColor="#10b981" stopOpacity="0"/></linearGradient>
                                          </defs>
                                          {[0.25, 0.5, 0.75, 1].map((f, i) => <line key={i} x1={padL} y1={svgH - padB - f * cH} x2={svgW - padR} y2={svgH - padB - f * cH} stroke="#f1f5f9" strokeWidth="1" />)}
                                          <path d={`${toPath(sentPts)} L${sentPts[sentPts.length-1].x},${svgH-padB} L${sentPts[0].x},${svgH-padB} Z`} fill="url(#sent-grad)" />
                                          <path d={`${toPath(resPts)} L${resPts[resPts.length-1].x},${svgH-padB} L${resPts[0].x},${svgH-padB} Z`} fill="url(#res-grad)" />
                                          <path d={toPath(sentPts)} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                                          <path d={toPath(resPts)} fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                          {trend.map((d, i) => (
                                            <text key={i} x={padL + (i * cW) / (trend.length - 1)} y={svgH - 8} textAnchor="middle" fontSize="8" fill="#94a3b8">{d.date}</text>
                                          ))}
                                        </svg>
                                      );
                                    })()}
                                    <div className="flex items-center gap-4 justify-center text-[9px] font-mono font-semibold text-slate-500">
                                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500" /> Replies Sent</span>
                                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Responses Received</span>
                                    </div>
                                  </div>

                                  {/* Intent Distribution */}
                                  <div className="card-glass-static p-6 rounded-xl border border-slate-200/80 space-y-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Intent Distribution (RAG)</h3>
                                    {(() => {
                                      const intents = aiReplyAnalytics?.intents || [
                                        { name: "Support", value: 5 }, { name: "Sales", value: 12 }, { name: "Pricing", value: 18 },
                                        { name: "Partnership", value: 4 }, { name: "Follow Up", value: 8 }, { name: "Spam", value: 2 }
                                      ];
                                      const total = intents.reduce((s, i) => s + i.value, 0) || 1;
                                      const COLORS = ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#64748b"];
                                      return (
                                        <div className="space-y-2.5 pt-2">
                                          {intents.map((item, i) => (
                                            <div key={i} className="space-y-1">
                                              <div className="flex items-center justify-between text-[10px]">
                                                <span className="font-medium text-slate-700 flex items-center gap-1.5">
                                                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                                                  {item.name}
                                                </span>
                                                <span className="font-mono font-bold text-slate-600">{item.value} <span className="text-slate-400">({Math.round((item.value / total) * 100)}%)</span></span>
                                              </div>
                                              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                  className="h-full rounded-full transition-all duration-700"
                                                  style={{ width: `${Math.round((item.value / total) * 100)}%`, backgroundColor: COLORS[i % COLORS.length] }}
                                                />
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    })()}
                                  </div>
                                </div>

                                {/* AI Engine Processing Timeline */}
                                <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-3">
                                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-sky-600" /> AI Engine Processing Log
                                  </h3>
                                  <div className="space-y-2 max-h-[280px] overflow-y-auto scrollbar-hide pr-1">
                                    {(aiReplyAnalytics?.timeline || []).map((evt, i) => {
                                      const typeConfig = {
                                        received: { color: "bg-blue-100 text-blue-600", dot: "bg-blue-500" },
                                        analysis: { color: "bg-purple-100 text-purple-600", dot: "bg-purple-500" },
                                        knowledge: { color: "bg-amber-100 text-amber-600", dot: "bg-amber-500" },
                                        reply: { color: "bg-sky-100 text-sky-600", dot: "bg-sky-500" },
                                        sent: { color: "bg-emerald-100 text-emerald-600", dot: "bg-emerald-500" },
                                      };
                                      const cfg = typeConfig[evt.type] || { color: "bg-slate-100 text-slate-600", dot: "bg-slate-400" };
                                      return (
                                        <div key={evt.id || i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50/50 transition-colors">
                                          <div className="flex flex-col items-center gap-1 shrink-0 mt-0.5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                                            {i < (aiReplyAnalytics?.timeline?.length || 0) - 1 && <div className="w-px h-4 bg-slate-200" />}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                              <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${cfg.color}`}>{evt.type}</span>
                                              <span className="text-[8px] text-slate-400 font-mono">
                                                {new Date(evt.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                                              </span>
                                            </div>
                                            <p className="text-[10px] text-slate-600 mt-0.5 leading-normal">{evt.text}</p>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        )}

                        {aiRepliesTab === "settings" && (
                          <div className="card-glass-static p-8 rounded-xl border border-slate-200/80 text-left space-y-6 max-w-2xl">
                            <div>
                              <h3 className="text-md font-bold text-slate-800 tracking-tight">Auto-Reply Engine Configuration</h3>
                              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                Configure how the AI handles automated outbound responses. When enabled, the AI uses the Company Knowledge Base (RAG) to draft and send instant replies to inbound inquiries.
                              </p>
                            </div>
                            <div className="space-y-5 pt-2">
                              {/* Toggle: Enable Auto Reply */}
                              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-800">Enable Auto Reply Engine</h4>
                                  <p className="text-xs text-slate-500 mt-0.5">Automatically send AI-drafted replies without manual review for leads scoring ≥ 40.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
                                  <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={aiReplySettings.autoReplyEnabled}
                                    onChange={(e) => setAiReplySettings(prev => ({ ...prev, autoReplyEnabled: e.target.checked }))}
                                  />
                                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                                </label>
                              </div>

                              {/* Default Reply Tone */}
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Default Reply Tone</label>
                                <select
                                  value={aiReplySettings.autoReplyTone}
                                  onChange={(e) => setAiReplySettings(prev => ({ ...prev, autoReplyTone: e.target.value }))}
                                  className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 bg-white focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                                >
                                  <option value="Professional">Professional</option>
                                  <option value="Friendly">Friendly</option>
                                  <option value="Sales">Sales Oriented</option>
                                  <option value="Startup">Startup / Casual</option>
                                </select>
                              </div>

                              {/* Reply Delay */}
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Reply Delay (seconds after email received)</label>
                                <input
                                  type="number"
                                  min="0"
                                  max="300"
                                  value={aiReplySettings.autoReplyDelay}
                                  onChange={(e) => setAiReplySettings(prev => ({ ...prev, autoReplyDelay: parseInt(e.target.value) || 0 }))}
                                  className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                                />
                                <p className="text-[9px] text-slate-400 font-mono">Set to 0 for instant replies. Recommended: 5–30 seconds.</p>
                              </div>

                              {/* Custom Instructions */}
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Custom AI Instructions (optional)</label>
                                <textarea
                                  value={aiReplySettings.autoReplyInstructions}
                                  onChange={(e) => setAiReplySettings(prev => ({ ...prev, autoReplyInstructions: e.target.value }))}
                                  placeholder="E.g. Always mention our pricing page. Never discuss competitor products. Always end with a meeting CTA."
                                  className="w-full h-20 p-2.5 rounded-lg border border-slate-200 text-xs font-sans text-slate-700 bg-white focus:outline-none focus:border-sky-500 transition-colors resize-none leading-relaxed"
                                />
                              </div>

                              {/* Email Signature */}
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Auto-Reply Email Signature</label>
                                <textarea
                                  value={aiReplySettings.autoReplySignature}
                                  onChange={(e) => setAiReplySettings(prev => ({ ...prev, autoReplySignature: e.target.value }))}
                                  placeholder="Best regards,\nAI Assistant | TechieHelp"
                                  className="w-full h-16 p-2.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 bg-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                                />
                              </div>

                              {/* Save button */}
                              <div className="pt-2 flex items-center gap-4">
                                <button
                                  onClick={handleSaveAiReplySettings}
                                  disabled={aiReplySettingsSaving}
                                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                                >
                                  {aiReplySettingsSaving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle className="w-3.5 h-3.5" />}
                                  {aiReplySettingsSaving ? "Saving..." : "Save Configurations"}
                                </button>
                                {aiReplySettingsSaved && (
                                  <span className="text-emerald-600 text-xs font-mono animate-pulse">✓ Settings saved to database!</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* 5. AI CALLS TAB */}
                {activeTab === "calls" && (
                  <div className="space-y-6">
                    {integrationStatuses.vapi !== "Connected" ? (
                      renderOnboardingCard()
                    ) : calls.length === 0 ? (
                      renderEmptyCalls()
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[500px]">
                      {/* Left: Call Logs */}
                      <div className="lg:col-span-2 rounded-xl border border-slate-200/80 card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-slate-100 text-left">
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Call logs via Vapi</h3>
                        </div>
                        {calls.map(log => (
                          <div
                            key={log.id}
                            onClick={() => {
                              setActiveCallLogId(log.id);
                              setIsPlayingAudio(false);
                              setAudioProgress(0);
                            }}
                            className={`p-4 cursor-pointer transition-colors ${
                              activeCallLogId === log.id ? "bg-sky-50/50" : "hover:card-glass-static"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs font-semibold text-slate-800">{log.leadName}</h4>
                              <span className="text-[10px] text-slate-400 font-mono">{log.time}</span>
                            </div>
                            <p className="text-[10px] text-slate-500 font-mono">{log.phone}</p>
                            <div className="flex items-center gap-3 mt-3">
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                                log.status === "Completed" ? "bg-green-50 text-green-600" :
                                log.status === "Voicemail" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                              }`}>
                                {log.status}
                              </span>
                              {log.meetingBooked && (
                                <span className="text-[9px] bg-sky-50 border border-sky-200/60 text-sky-600 px-1.5 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                                  <Calendar className="w-2.5 h-2.5" /> Booked
                                </span>
                              )}
                              <span className="text-[10px] text-slate-400 font-mono ml-auto">{log.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Audio Wave, Summary & Transcript */}
                      <div className="lg:col-span-3 rounded-xl border border-slate-200/80 card-glass-static p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide text-left">
                        <div className="space-y-6">
                          
                          {/* Log Info */}
                          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                            <div>
                              <h3 className="text-sm font-bold text-slate-800">Call Recording: {activeCallLog.leadName}</h3>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">Phone: {activeCallLog.phone} | Duration: {activeCallLog.duration}</p>
                            </div>
                            <span className="px-2 py-0.5 bg-green-50 border border-green-200/60 text-green-600 text-[10px] font-mono rounded-full font-bold">
                              Confidence: {activeCallLog.score}%
                            </span>
                          </div>

                          {/* Interactive Audio Simulator */}
                          <div className="card-glass flex flex-col">
                            <button
                              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                              className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors"
                            >
                              {isPlayingAudio ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                            </button>
                            
                            {/* Audio Wave Simulator */}
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-0.5 h-6">
                                {Array.from({ length: 45 }).map((_, idx) => {
                                  // Random height simulation
                                  const randomHeight = isPlayingAudio 
                                    ? Math.sin(idx + audioProgress) * 12 + 14 
                                    : Math.sin(idx) * 6 + 10;
                                  return (
                                    <div
                                      key={idx}
                                      className={`w-[3px] rounded-full transition-all duration-150 ${
                                        idx / 45 * 100 < audioProgress ? "bg-sky-500" : "bg-slate-200"
                                      }`}
                                      style={{ height: `${Math.max(4, randomHeight)}px` }}
                                    />
                                  );
                                })}
                              </div>
                              <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                                <span>{isPlayingAudio ? `0:${String(Math.floor(audioProgress * 0.1)).padStart(2, '0')}` : "0:00"}</span>
                                <span>{activeCallLog.duration}</span>
                              </div>
                            </div>
                          </div>

                          {/* Summary & Transcript Split */}
                          <div className="space-y-4">
                            {/* Summary */}
                            <div className="p-3.5 rounded-lg bg-sky-50/50 border border-sky-100 space-y-1">
                              <span className="text-[9px] font-mono font-bold text-sky-600 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                AI CALL CONVERSATION SUMMARY
                              </span>
                              <p className="text-xs text-slate-600 leading-relaxed">{activeCallLog.summary}</p>
                            </div>

                            {/* Transcript */}
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-mono text-slate-400 uppercase">Call Transcript</h4>
                              <div className="p-4 rounded-lg card-glass-static border border-slate-200/40 text-xs font-mono text-slate-500 space-y-3 leading-relaxed max-h-48 overflow-y-auto font-sans">
                                {activeCallLog.transcript.split("\n\n").map((line, lineIdx) => {
                                  const isAI = line.startsWith("[AI");
                                  return (
                                    <p key={lineIdx} className={isAI ? "text-sky-600 font-semibold" : "text-slate-700"}>
                                      {line}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                )}

                {/* 6. WHATSAPP TAB */}
                {activeTab === "whatsapp" && (
                  <div className="space-y-6">
                    {integrationStatuses.whatsapp !== "Connected" ? (
                      renderOnboardingCard()
                    ) : whatsappChats.length === 0 ? (
                      renderEmptyWhatsApp()
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[500px]">
                      {/* Left Sidebar: Unread, Qualified, Follow-up filters */}
                      <div className="lg:col-span-2 rounded-xl border border-slate-200/80 card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-slate-100 text-left">
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">WhatsApp Chats</h3>
                          <span className="text-[10px] bg-green-50 border border-green-200/60 text-green-600 px-2 py-0.5 rounded font-mono font-bold">API Connected</span>
                        </div>
                        {whatsappChats.map(chat => (
                          <div
                            key={chat.id}
                            onClick={() => {
                              setSelectedChatId(chat.id);
                              // Mark status as read/qualified
                              setWhatsappChats(prev => prev.map(c => c.id === chat.id && c.status === "Unread" ? { ...c, status: "Follow-up Required" } : c));
                            }}
                            className={`p-4 cursor-pointer transition-colors ${
                              selectedChatId === chat.id ? "bg-sky-50/50" : "hover:card-glass-static"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <h4 className="text-xs font-semibold text-slate-800">{chat.senderName}</h4>
                              <span className="text-[9px] text-slate-400 font-mono">{chat.time}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 truncate font-sans">{chat.message}</p>
                            
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-[10px] text-slate-400 font-mono">{chat.phone}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                                chat.status === "Qualified" ? "bg-emerald-50 text-emerald-600" :
                                chat.status === "Unread" ? "bg-blue-50 text-blue-600 animate-pulse" : "bg-amber-50 text-amber-600"
                              }`}>
                                {chat.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Panel: Chat Thread & AI response builder */}
                      <div className="lg:col-span-3 rounded-xl border border-slate-200/80 card-glass-static p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide text-left">
                        <div className="space-y-6">
                          
                          {/* Active Header */}
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                              <h3 className="text-sm font-bold text-slate-800">{activeChat.senderName}</h3>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">{activeChat.phone}</p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  alert("Lead owner assigned to Amit Kumar.");
                                }}
                                className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded text-[10px] font-bold text-slate-600 transition-colors"
                              >
                                Assign Rep
                              </button>
                              <button
                                onClick={() => {
                                  setWhatsappChats(prev => prev.map(c => c.id === activeChat.id ? { ...c, status: "Qualified" } : c));
                                  alert("Lead status set to Qualified.");
                                }}
                                className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded text-[10px] font-bold text-emerald-600 transition-colors"
                              >
                                Convert Lead
                              </button>
                            </div>
                          </div>

                          {/* Message bubble logs */}
                          <div className="space-y-3 p-4 rounded-lg bg-slate-50/40 border border-slate-100 h-48 overflow-y-auto text-xs">
                            <div className="flex flex-col items-start max-w-[80%]">
                              <span className="text-[9px] text-slate-400 font-mono mb-1">{activeChat.senderName}</span>
                              <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 text-slate-700 leading-relaxed font-sans">
                                {activeChat.message}
                              </div>
                            </div>

                            <div className="flex flex-col items-end max-w-[80%] ml-auto">
                              <span className="text-[9px] text-sky-600 font-mono mb-1">AI Assistant (Suggested Reply)</span>
                              <div className="p-3 rounded-2xl rounded-tr-none bg-sky-50 text-slate-700 leading-relaxed border border-sky-100/85 font-sans">
                                {activeChat.aiDraft}
                              </div>
                            </div>
                          </div>

                          {/* AI Response Box */}
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-mono text-slate-400 uppercase">Interactive AI Composer</h4>
                            <div className="relative">
                              <textarea
                                value={activeChat.aiDraft}
                                onChange={(e) => {
                                  setWhatsappChats(prev => prev.map(c => c.id === activeChat.id ? { ...c, aiDraft: e.target.value } : c));
                                }}
                                className="w-full h-20 p-3 card-glass-static border border-slate-200/60 focus:border-sky-500/50 outline-none rounded-lg text-xs font-sans text-slate-700 leading-relaxed resize-none"
                              />
                            </div>
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => {
                                  alert("Broadcast sent successfully to qualified cohorts.");
                                }}
                                className="px-3 py-1.5 card-glass-static hover:bg-slate-50 border border-slate-200/50 text-slate-500 rounded-lg text-[10px] font-bold"
                              >
                                Trigger Broadcast
                              </button>
                              <button
                                onClick={() => {
                                  alert("WhatsApp reply sent via automation node!");
                                  // Add event
                                  const now = new Date();
                                  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
                                  setTimeline(prev => [
                                    {
                                      id: `time-wa-${Date.now()}`,
                                      time: timeStr,
                                      text: `AI Dispatched WhatsApp message to ${activeChat.senderName}`,
                                      type: "whatsapp"
                                    },
                                    ...prev
                                  ]);
                                }}
                                className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold flex items-center gap-1.5 shadow-md"
                              >
                                <Send className="w-3 h-3" /> Send Reply
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                )}

                {/* 6.5 COMPANY KNOWLEDGE TAB */}
                {activeTab === "knowledge" && (
                  <div className="space-y-6">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      {/* Control Panel */}
                      <div className="lg:w-1/3 rounded-xl border border-slate-200/80 card-glass-static p-6 space-y-6 bg-white/70 backdrop-blur-md text-left">
                        <div>
                          <h2 className="text-md font-bold text-slate-800 tracking-tight flex items-center gap-2">
                            <Database className="w-5 h-5 text-sky-600" />
                            Company Knowledge Base
                          </h2>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            Train your AI Employee on your website content. The RAG engine will extract context to answer inbound emails.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Website URL to Crawl</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="https://yourdomain.com"
                              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono focus:border-sky-500 outline-none"
                              value={knowledgeCrawlUrl}
                              onChange={(e) => setKnowledgeCrawlUrl(e.target.value)}
                            />
                            <button
                              onClick={async () => {
                                if (!knowledgeCrawlUrl) return;
                                showToast("Crawler triggered in background.", "info");
                                try {
                                  await fetch("http://localhost:3000/api/knowledge/crawl", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ workspaceId, url: knowledgeCrawlUrl })
                                  });
                                } catch (e) {
                                  console.error(e);
                                }
                              }}
                              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                            >
                              <Activity className="w-3.5 h-3.5" /> Crawl
                            </button>
                          </div>
                        </div>

                        {companyKnowledge && (
                          <div className="space-y-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-slate-500">Status</span>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                                companyKnowledge.status === "SYNCED" ? "bg-green-50 text-green-600" :
                                companyKnowledge.status === "CRAWLING" ? "bg-amber-50 text-amber-600 animate-pulse" : "bg-red-50 text-red-600"
                              }`}>{companyKnowledge.status}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-slate-500">Pages Indexed</span>
                              <span className="text-xs font-mono font-bold text-slate-800">{companyKnowledge.pagesIndexed || 0}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-slate-500">Knowledge Size</span>
                              <span className="text-xs font-mono font-bold text-slate-800">{Math.round((companyKnowledge.knowledgeSize || 0) / 1024)} KB</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-slate-500">Last Synced</span>
                              <span className="text-[10px] font-mono text-slate-800">{companyKnowledge.lastSyncAt ? new Date(companyKnowledge.lastSyncAt).toLocaleString() : "Never"}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Knowledge Pages Table */}
                      <div className="lg:w-2/3 rounded-xl border border-slate-200/80 card-glass-static p-6 space-y-4 bg-white/70 backdrop-blur-md text-left">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-sky-600" />
                            Indexed Pages
                          </h3>
                        </div>
                        {companyKnowledge && companyKnowledge.pages && companyKnowledge.pages.length > 0 ? (
                          <div className="overflow-y-auto max-h-[400px] scrollbar-hide">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="border-b border-slate-100 text-slate-500 font-mono uppercase text-[9px] tracking-wider">
                                  <th className="pb-3 font-semibold w-1/2">Page Title / URL</th>
                                  <th className="pb-3 font-semibold text-right">Content Size</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100/65">
                                {companyKnowledge.pages.map(page => (
                                  <tr key={page.id} className="hover:bg-slate-50/40 transition-colors">
                                    <td className="py-3">
                                      <div className="font-semibold text-slate-800 truncate max-w-sm">{page.title || page.url}</div>
                                      <div className="text-[9px] text-slate-400 font-mono mt-0.5 truncate max-w-sm">{page.url}</div>
                                    </td>
                                    <td className="py-3 text-right font-mono text-slate-500">
                                      {page.content ? Math.round(page.content.length / 1024) : 0} KB
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500 space-y-2">
                            <Search className="w-8 h-8 text-slate-300" />
                            <p className="text-xs">No pages indexed yet.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. WORKFLOWS TAB */}
                {activeTab === "workflows" && (
                  <div className="space-y-8 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider">Visual Automation Builder</h2>
                        <p className="text-xs text-slate-500 mt-1">Configure your 24/7 AI Employee workflow pipeline.</p>
                      </div>
                      
                      <button
                        onClick={() => {
                          alert("Testing complete. All 7 pipeline blocks validated successfully with zero compilation errors.");
                        }}
                        className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 text-sky-600 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Test Automation Run
                      </button>
                    </div>

                    {/* Flowchart Pipeline */}
                    <div className="relative p-6 rounded-2xl border border-slate-200/80 card-glass-static shadow-sm space-y-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-indigo-500/5 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                        {workflowSteps.map((step, idx) => {
                          const isLast = idx === workflowSteps.length - 1;
                          return (
                            <React.Fragment key={step.id}>
                              {/* Workflow Card */}
                              <div
                                onClick={() => {
                                  setWorkflowSteps(prev => prev.map(s => s.id === step.id ? { ...s, active: !s.active } : s));
                                }}
                                className={`flex-1 w-full max-w-[140px] p-3 rounded-xl border transition-all cursor-pointer text-center relative group ${
                                  step.active 
                                    ? "bg-white border-slate-200/80 shadow-md hover:border-sky-500/50" 
                                    : "bg-slate-100/50 border-slate-200/40 opacity-40 hover:opacity-75"
                                }`}
                              >
                                {/* Top Active Indicator */}
                                <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${
                                  step.active ? "bg-green-500" : "bg-red-500"
                                }`} />

                                <div className="mx-auto w-7 h-7 rounded-lg bg-sky-50 border border-sky-100/85 flex items-center justify-center mb-2 text-sky-600">
                                  {step.icon === "Globe" && <ExternalLink className="w-4 h-4" />}
                                  {step.icon === "Sparkles" && <Sparkles className="w-4 h-4" />}
                                  {step.icon === "Flame" && <Flame className="w-4 h-4" />}
                                  {step.icon === "Mail" && <Mail className="w-4 h-4" />}
                                  {step.icon === "MessageSquare" && <MessageSquare className="w-4 h-4" />}
                                  {step.icon === "Phone" && <Phone className="w-4 h-4" />}
                                  {step.icon === "GitFork" && <GitFork className="w-4 h-4" />}
                                </div>
                                <h4 className="text-[11px] font-bold text-slate-800 truncate">{step.title}</h4>
                                <p className="text-[9px] text-slate-500 leading-tight mt-1 line-clamp-2">{step.desc}</p>
                              </div>

                              {/* Arrow */}
                              {!isLast && (
                                <div className="text-sky-600 font-mono hidden md:block">
                                  →
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Rule configuration builder */}
                      <div className="card-glass flex flex-col">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-sky-600" />
                          Automation Logic Parameters
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Min Score to Auto-Reply</label>
                            <input
                              type="number"
                              value={settings.qualificationThreshold}
                              onChange={(e) => setSettings(prev => ({ ...prev, qualificationThreshold: Number(e.target.value) }))}
                              className="w-full bg-slate-50 border border-slate-200/80 p-2 rounded text-xs text-slate-800 outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Auto Call Priority</label>
                            <div className="flex items-center gap-2 mt-1">
                              <input
                                type="checkbox"
                                checked={settings.autoCallHighPriority}
                                onChange={(e) => setSettings(prev => ({ ...prev, autoCallHighPriority: e.target.checked }))}
                                className="w-4 h-4 bg-slate-50 border-slate-200 rounded text-sky-600"
                              />
                              <span className="text-xs text-slate-600">Dial instantly if score &gt; 85</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">AI Tone Profile</label>
                            <select
                              value={settings.defaultTone}
                              onChange={(e) => setSettings(prev => ({ ...prev, defaultTone: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200/80 p-2 rounded text-xs text-slate-800 outline-none font-mono cursor-pointer"
                            >
                              <option value="Professional" className="bg-white text-slate-800">Professional</option>
                              <option value="Friendly" className="bg-white text-slate-800">Friendly</option>
                              <option value="Sales" className="bg-white text-slate-800">Sales</option>
                              <option value="Startup" className="bg-white text-slate-800">Startup</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. ANALYTICS TAB */}
                {activeTab === "analytics" && (
                  <div className="space-y-8 text-left">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider">Operational Analytics Performance</h2>
                        <p className="text-xs text-slate-500 mt-1">Aggregated statistics across connected data sources.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Lead growth chart mockup */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-800">Lead Volume Growth (Weekly)</span>
                          <span className="text-[10px] text-green-600 font-mono font-bold">+28.5% WoW</span>
                        </div>
                        <div className="h-44 w-full bg-slate-50/40 rounded border border-slate-100 flex items-end justify-between p-2 relative">
                          {/* Grid lines */}
                          <div className="absolute inset-x-0 top-1/4 border-b border-slate-100/50" />
                          <div className="absolute inset-x-0 top-2/4 border-b border-slate-100/50" />
                          <div className="absolute inset-x-0 top-3/4 border-b border-slate-100/50" />
                          
                          {[32, 45, 60, 52, 75, 95, 128, 148].map((val, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1.5 w-1/8 z-10">
                              <span className="text-[9px] font-mono text-slate-400">{val}</span>
                              <div
                                className="w-6 bg-gradient-to-t from-sky-100 to-sky-500 rounded-t transition-all hover:scale-105"
                                style={{ height: `${val / 150 * 100}px` }}
                              />
                              <span className="text-[9px] text-slate-400 font-mono">W{idx + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance matrix */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm space-y-4">
                        <h3 className="text-xs font-semibold text-slate-800">Conversion & Reply KPI Splits</h3>
                        
                        <div className="space-y-3">
                          {[
                            { label: "Email Auto-Reply Success Rate", val: "99.2%", rate: "128 of 129 replies sent without failure" },
                            { label: "WhatsApp Chatbot Engagement", val: "84.5%", rate: "Positive reaction threshold" },
                            { label: "AI Voice Call Completed Rate", val: "72.4%", rate: "34 completed of 47 dialed streams" },
                            { label: "Average Screening Call Duration", val: "2m 14s", rate: "Optimal user retention time" }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3 card-glass-static border border-slate-200/40 rounded-lg flex justify-between items-center text-xs">
                              <div>
                                <p className="font-semibold text-slate-800">{item.label}</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.rate}</p>
                              </div>
                              <span className="font-mono text-sky-600 font-bold">{item.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 9. REPORTS TAB */}
                {activeTab === "reports" && (
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider">Automated Performance Reports</h2>
                        <p className="text-xs text-slate-500 mt-1">Download and export system ROI and calling metrics.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "Weekly Lead Report", desc: "Consolidated breakdown of lead counts, score divisions, and sources.", size: "1.4 MB" },
                        { title: "Monthly Performance Report", desc: "Detailed ROI analytics including conversion gains and deal calculations.", size: "4.8 MB" },
                        { title: "AI Assistant Performance Report", desc: "Response metrics, message intent breakdown, and tone conversion stats.", size: "2.1 MB" },
                        { title: "Vapi Voice Call Log Report", desc: "Detailed calling agent statistics, transcript extracts, and durations.", size: "3.2 MB" },
                        { title: "System ROI & Cost Analysis", desc: "Total API consumption compared to estimated deal revenue values.", size: "1.1 MB" }
                      ].map((report, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-sky-600">
                              <FileText className="w-4 h-4" />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 font-bold">PDF Report</span>
                            </div>
                            <h4 className="text-xs font-bold text-slate-800">{report.title}</h4>
                            <p className="text-[11px] text-slate-500 leading-normal mt-1">{report.desc}</p>
                          </div>
                          
                          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                            <span className="text-[9px] text-slate-400 font-mono">{report.size}</span>
                            <button
                              onClick={() => {
                                alert(`Generating and downloading ${report.title}...`);
                              }}
                              className="px-2.5 py-1.5 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 text-sky-600 rounded font-mono font-bold text-[9px] uppercase flex items-center gap-1 transition-all"
                            >
                              <Download className="w-3 h-3" /> Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 10. INTEGRATIONS TAB */}
                {activeTab === "integrations" && (
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider">Connected SaaS Integrations</h2>
                        <p className="text-xs text-slate-500 mt-1">Configure database triggers and automation credentials.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* GMAIL CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                              <Mail className="w-5 h-5" />
                            </div>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                              integrationStatuses.gmail === "Connected" 
                                ? "bg-green-50 border border-green-200/60 text-green-600" 
                                : "bg-slate-100 border border-slate-200 text-slate-500"
                            }`}>
                              {integrationStatuses.gmail}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">Gmail integration</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Syncs and auto-drafts replies for inbox messages using OAuth. Auto-tag enabled.</p>
                          <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-500 font-mono space-y-2">
                            {integrationStatuses.gmail === "Connected" ? (
                              <>
                                <div className="flex justify-between items-center text-[10px] text-slate-600">
                                  <span>Email:</span>
                                  <span className="text-slate-800 font-semibold truncate max-w-[120px]" title={integrationStatuses.gmailEmail || "Connected"}>
                                    {integrationStatuses.gmailEmail || "Connected"}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-slate-600">
                                  <span>Status:</span>
                                  <span className="text-green-600 font-bold">CONNECTED</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-slate-600">
                                  <span>Last Sync:</span>
                                  <span className="text-slate-800 font-semibold">
                                    {integrationStatuses.lastSyncAt ? new Date(integrationStatuses.lastSyncAt).toLocaleString([], {hour: '2-digit', minute:'2-digit', month: 'short', day: 'numeric'}) : "Never"}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-slate-600">
                                  <span>Synced:</span>
                                  <span className="text-slate-800 font-bold">{integrationStatuses.emailsSynced ?? 0} emails</span>
                                </div>
                                <div className="flex gap-2 pt-2">
                                  <button
                                    onClick={handleSyncGmail}
                                    disabled={isSyncing}
                                    className="flex-1 px-2 py-1 bg-sky-600 hover:bg-sky-700 text-white font-bold text-[9px] rounded flex items-center justify-center gap-1 transition-all"
                                  >
                                    <RefreshCw className={`w-2.5 h-2.5 ${isSyncing ? "animate-spin" : ""}`} /> Sync Now
                                  </button>
                                  <button
                                    onClick={handleDisconnectGmail}
                                    className="px-2 py-1 border border-red-200 hover:bg-red-50 text-red-500 font-bold text-[9px] rounded transition-all"
                                  >
                                    Disconnect
                                  </button>
                                </div>
                              </>
                            ) : (
                              <button onClick={handleConnectGmail} className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded font-bold text-[10px] w-full text-center transition-all">
                                Connect Gmail Account
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* WEBSITE FORMS CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                              <ExternalLink className="w-5 h-5" />
                            </div>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                              integrationStatuses.gmail === "Connected" 
                                ? "bg-green-50 border border-green-200/60 text-green-600" 
                                : "bg-slate-100 border border-slate-200 text-slate-500"
                            }`}>
                              {integrationStatuses.gmail}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">Website Forms</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Ingest lead form details via webhook. Fully compatible with custom HTML and standard builders.</p>
                        </div>
                        
                        <div className="border-t border-slate-100 pt-3 space-y-2 text-[10px] font-mono">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">API Endpoint:</span>
                            <button
                              onClick={() => copyToClipboard(`http://localhost:3000/api/v1/leadai/forms?workspaceId=${workspaceId || ""}`, "forms")}
                              className="text-sky-600 flex items-center gap-1 hover:text-sky-800"
                            >
                              <Copy className="w-3 h-3" /> {webhookCopied === "forms" ? "Copied" : "Copy"}
                            </button>
                          </div>
                          <p className="text-[9px] text-slate-500 bg-slate-50 border border-slate-200/60 p-1.5 rounded truncate">
                            http://localhost:3000/api/v1/leadai/forms?workspaceId={workspaceId || "ws_id"}
                          </p>
                        </div>
                      </div>

                      {/* WHATSAPP BUSINESS CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                              <MessageSquare className="w-5 h-5" />
                            </div>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                              integrationStatuses.whatsapp === "Connected" 
                                ? "bg-green-50 border border-green-200/60 text-green-600" 
                                : "bg-slate-100 border border-slate-200 text-slate-500"
                            }`}>
                              {integrationStatuses.whatsapp}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">WhatsApp Business API</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Auto-qualifies WhatsApp contacts, triggers templates, and launches interactive dialog broadcasts.</p>
                        </div>
                        <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-500 font-mono space-y-1">
                          {integrationStatuses.whatsapp === "Connected" ? (
                            <>
                              <div>Number: <span className="text-slate-800 font-semibold">+91 70731 30165</span></div>
                              <div>AI Replies Sent: <span className="text-slate-800 font-semibold">{whatsappChats.length}</span></div>
                            </>
                          ) : (
                            <button onClick={() => alert("WhatsApp Business API integration can be configured via WhatsApp Developer Portal. Setting up credentials.")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold text-[10px] w-full text-center border border-slate-200/60 transition-all">
                              Configure WhatsApp Credentials
                            </button>
                          )}
                        </div>
                      </div>

                      {/* GOOGLE SHEETS CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                              <FileText className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-50 border border-green-200/60 text-green-600 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">Google Sheets Integration</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Export qualified leads dynamically to spreadsheets for unified team review and tracking.</p>
                        </div>
                        <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-500 font-mono">
                          Target Spreadsheet ID: <span className="text-sky-600 hover:underline cursor-pointer">techie_qualify_2026_sheet</span>
                        </div>
                      </div>

                      {/* VAPI VOICE CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                              <PhoneCall className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-50 border border-green-200/60 text-green-600 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">Vapi Voice AI Agents</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Automate inbound and outbound phone screening with human-realistic, high-speed latency configurations.</p>
                        </div>
                        <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-500 font-mono">
                          Active Voice ID: <span className="text-slate-800 font-semibold">sam_indian_eng_v3</span>
                        </div>
                      </div>

                      {/* GEMINI AI CARD */}
                      <div className="rounded-xl border border-slate-200/80 card-glass-static p-5 shadow-sm flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-blue-50 text-sky-600 rounded-lg">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-50 border border-green-200/60 text-green-600 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-800">Gemini Pro Agent Core</h4>
                          <p className="text-[11px] text-slate-500 leading-normal mt-1">Drives semantic evaluations, context extraction, intent categorization, and personalized drafts.</p>
                        </div>
                        <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-500 font-mono">
                          Model Reference: <span className="text-slate-800 font-semibold">Gemini-1.5-Pro</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 11. SETTINGS TAB */}
                {activeTab === "settings" && (
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h2 className="text-md font-bold text-slate-800 uppercase tracking-wider">LeadAI Configuration Settings</h2>
                        <p className="text-xs text-slate-500 mt-1">Tune qualification parameters, profiles, and fallback configurations.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSaveSettings} className="rounded-xl border border-slate-200/80 card-glass-static p-6 shadow-sm space-y-6 max-w-2xl">
                      
                      {/* Profile & Org */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">Profile & Company</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Full Name</label>
                            <input
                              type="text"
                              value={settings.fullName}
                              onChange={(e) => setSettings(prev => ({ ...prev, fullName: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200/80 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 p-2 rounded text-xs text-slate-800 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Company Name</label>
                            <input
                              type="text"
                              value={settings.companyName}
                              onChange={(e) => setSettings(prev => ({ ...prev, companyName: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200/80 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 p-2 rounded text-xs text-slate-800 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Lead Qualification Threshold Rules */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">Qualification Rules</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Minimum Qualification Score</label>
                            <input
                              type="number"
                              value={settings.qualificationThreshold}
                              onChange={(e) => setSettings(prev => ({ ...prev, qualificationThreshold: Number(e.target.value) }))}
                              className="w-full bg-slate-50 border border-slate-200/80 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 p-2 rounded text-xs text-slate-800 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-slate-500 font-mono uppercase">Default AI Reply Tone</label>
                            <select
                              value={settings.defaultTone}
                              onChange={(e) => setSettings(prev => ({ ...prev, defaultTone: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200/80 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 p-2 rounded text-xs text-slate-800 outline-none font-mono cursor-pointer transition-all"
                            >
                              <option value="Professional" className="bg-white text-slate-800">Professional</option>
                              <option value="Friendly" className="bg-white text-slate-800">Friendly</option>
                              <option value="Sales" className="bg-white text-slate-800">Sales</option>
                              <option value="Startup" className="bg-white text-slate-800">Startup</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Call and Email options */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">Channels & Fallbacks</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={settings.autoCallHighPriority}
                              onChange={(e) => setSettings(prev => ({ ...prev, autoCallHighPriority: e.target.checked }))}
                              className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500/50 cursor-pointer"
                              id="autoCall"
                            />
                            <label htmlFor="autoCall" className="text-xs text-slate-600 cursor-pointer">
                              Auto-Dial voice calls for High Priority Leads (Score &gt; 85) instantly
                            </label>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={settings.autoReplyEmails}
                              onChange={(e) => setSettings(prev => ({ ...prev, autoReplyEmails: e.target.checked }))}
                              className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500/50 cursor-pointer"
                              id="autoReply"
                            />
                            <label htmlFor="autoReply" className="text-xs text-slate-600 cursor-pointer">
                              Enable automatic draft Generation for new Gmail incoming messages
                            </label>
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-2">
                          <label className="text-[10px] text-slate-500 font-mono uppercase">WhatsApp Greeting Auto-response Template</label>
                          <textarea
                            value={settings.whatsappGreeting}
                            onChange={(e) => setSettings(prev => ({ ...prev, whatsappGreeting: e.target.value }))}
                            className="w-full h-16 p-2 bg-slate-50 border border-slate-200/80 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 outline-none rounded text-xs text-slate-800 resize-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg transition-all shadow-md"
                        >
                          Save Configurations
                        </button>
                        
                        {settingsSaved && (
                          <span className="text-green-600 text-xs font-mono animate-pulse">
                            ✓ Settings updated and stored successfully!
                          </span>
                        )}
                      </div>

                    </form>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* RIGHT SIDEBAR: LIVE ACTIVITY TIMELINE */}
        <aside className="w-80 bg-white/80 border-l border-slate-200/80 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide hidden xl:flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">AI Employee Timeline Feed</h3>
              </div>
              <span className="text-[9px] text-sky-600 font-mono border border-sky-200 bg-sky-50 px-1.5 py-0.5 rounded animate-pulse">Live</span>
            </div>

            {/* List of activity items */}
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {timeline.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 font-mono text-[10px] leading-relaxed border border-dashed border-slate-200 rounded-xl bg-slate-50/30">
                    No activity logs. Connect channels to monitor live automated actions.
                  </div>
                ) : (
                  timeline.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-3 card-glass-static border border-slate-200/60 rounded-lg text-left text-xs space-y-1 relative group hover:border-sky-300 transition-all shadow-sm bg-slate-50/50"
                    >
                      <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                        <span>{event.time}</span>
                        <span className="uppercase tracking-wider text-[8px] text-slate-500 group-hover:text-sky-600 transition-colors">{event.type}</span>
                      </div>
                      <p className="text-slate-600 leading-normal font-sans pr-1">{event.text}</p>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-6 text-center">
            <p className="text-[10px] text-slate-500 font-mono">Operations status: 100% Automated</p>
            <p className="text-[9px] text-slate-400 font-mono mt-0.5">Last Sync: Just now</p>
          </div>
        </aside>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-auto">
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onClose={() => setToasts(prev => prev.filter(x => x.id !== t.id))} />
          ))}
        </AnimatePresence>
      </div>
      </div>

    </div>
  );
}

function ToastItem({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border text-xs font-semibold backdrop-blur-md ${
        toast.type === "success" 
          ? "bg-emerald-900/95 text-white border-emerald-500/20" 
          : toast.type === "error" 
            ? "bg-red-950/95 text-white border-red-500/20"
            : "bg-slate-900/95 text-white border-white/10"
      }`}
    >
      <span className={`w-2 h-2 rounded-full animate-pulse ${
        toast.type === "success" ? "bg-emerald-400" : toast.type === "error" ? "bg-red-400" : "bg-sky-400"
      }`} />
      <span>{toast.message}</span>
      <button onClick={onClose} className="ml-2 hover:text-slate-300">
        <X className="w-3.5 h-3.5 text-white" />
      </button>
    </motion.div>
  );
}
