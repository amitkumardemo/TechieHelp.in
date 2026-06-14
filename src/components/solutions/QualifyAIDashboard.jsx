import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  DollarSign
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
    message: "Hi TechieHelp Team, I saw your QualifyAI page and wanted to know if this can integrate with our custom CRM. We get about 500 leads daily from website forms and need an AI employee to filter them and book calls. Can you share pricing and setup time?",
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
    message: "Hello, we are launching a new smart security system line. We need an AI Calling Agent to instantly phone leads that fill our form and pre-qualify their budget. Does QualifyAI support phone calls with customized AI voices?",
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
    transcript: "[AI QualifyAgent]: Hello Rohan, this is Sam from TechieHelp QualifyAI. I'm calling regarding your website inquiry about AI integration.\n\n[Rohan Mehta]: Oh yes! Thanks for calling. We have a lot of leads coming in, and we want to know if you can hook up to HubSpot.\n\n[AI QualifyAgent]: Absolutely. QualifyAI supports direct webhook outputs and HubSpot integrations. What CRM tier are you running?\n\n[Rohan Mehta]: We use HubSpot Enterprise. We need to qualify budget and timeline automatically.\n\n[AI QualifyAgent]: That fits perfectly. We can set up automated voice qualification based on budget. I see you qualify for our pilot launch. Can we book a 15-min demo with our solutions engineer tomorrow at 3 PM?\n\n[Rohan Mehta]: Yes, 3 PM works. Send me the calendar invite.\n\n[AI QualifyAgent]: Excellent. I've sent the meeting invite to rohan.mehta@nexusventures.in. Looking forward to it!",
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
    transcript: "[AI QualifyAgent]: Hi Michael, calling from TechieHelp QualifyAI...\n\n[Voicemail]: Hi, this is Michael Scott. Leave a message after the beep. If this is Dwight, please go back to work.",
    summary: "Call went to voicemail. Sent fallback WhatsApp automation."
  }
];

const INITIAL_WHATSAPP = [
  { id: "wa-1", senderName: "Aditya Sharma", phone: "+91 90123 45678", status: "Qualified", message: "Perfect, can you send over the setup instructions?", time: "5m ago", aiDraft: "Hi Aditya! Here is our standard integration document: https://docs.techiehelp.in/qualifyai. You can insert your API Key in the settings page to connect your database. Let me know if you want me to call you to assist with setup!" },
  { id: "wa-2", senderName: "Rohan Mehta", phone: "+91 98765 43210", status: "Follow-up Required", message: "Is there an additional charge for custom AI voice configurations?", time: "12m ago", aiDraft: "Hi Rohan, voice customization is included in our Growth and Enterprise packages. We support standard SSML adjustments. Let's schedule a brief 5-min voice demo if you are free!" },
  { id: "wa-3", senderName: "Vikram Malhotra", phone: "+91 98111 22233", status: "Unread", message: "Hi, I filled the form. Are you guys available for a quick call now?", time: "45m ago", aiDraft: "Hello Vikram, yes! I'm ready to dial you immediately. Please confirm if +91 98111 22233 is the correct number to reach you." },
  { id: "wa-4", senderName: "Dwight Schrute", phone: "+1 (555) 700-1234", status: "Qualified", message: "Beets are ready for harvest. Does your AI understand agricultural sales?", time: "2 hours ago", aiDraft: "Hello Dwight! Yes, TechieHelp QualifyAI is fully customizable. You can upload your beet pricing and inventory tables directly to the Lead Qualification Rules section, and the AI will answer clients accordingly." }
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
    inbox1: "Dear Rohan,\n\nThank you for reaching out to TechieHelp. We appreciate your interest in QualifyAI.\n\nOur system integrates seamlessly with HubSpot Enterprise via direct webhook nodes. Based on your volume of 500 daily leads, we suggest setting up our high-priority workflow, which automates email response, WhatsApp sequences, and voice qualification within 60 seconds of submission.\n\nI have scheduled our scoping session for tomorrow at 3 PM. Here is the confirmation link: https://meet.techiehelp.in/rohan-scoping.\n\nSincerely,\nQualifyAI Assistant",
    inbox2: "Dear Sarah,\n\nWe appreciate your inquiry. Yes, QualifyAI integrates Vapi voice agent capabilities to dial leads immediately. We can customize the voice parameters to match your brand requirements.\n\nI have pre-drafted a booking for tomorrow at 11 AM EST. Let me know if that works.\n\nBest regards,\nQualifyAI Team"
  },
  Friendly: {
    inbox1: "Hi Rohan!\n\nThanks for stopping by! It's great to hear about Nexus Ventures. QualifyAI will absolutely hook up to your HubSpot CRM in just a few clicks.\n\nHandling 500 leads a day is exactly what our AI Employee is built for. It will answer emails and book calendar dates in real-time, working 24/7 so your team can focus on closing deals.\n\nI've sent over a calendar invite for tomorrow at 3 PM so we can walk through it. Can't wait to chat!\n\nCheers,\nYour QualifyAI Pal",
    inbox2: "Hi Sarah!\n\nExciting news about your smart security line! Yes, our AI voice calls are fully operational. They dial your form leads within seconds, qualify them, and book appointments.\n\nLet's catch up tomorrow at 11 AM EST to run a live test. Let me know if that sounds good!\n\nWarmly,\nQualifyAI Assistant"
  },
  Sales: {
    inbox1: "Hey Rohan,\n\nDid you know that responding to leads within 5 minutes increases conversions by 391%? With QualifyAI, we slash that response time to 30 seconds across email, WhatsApp, and calls.\n\nOur HubSpot integration takes under 10 minutes to sync. Let's get Nexus Ventures onto our high-speed pilot program. I've locked in a demo slot for us tomorrow at 3 PM.\n\nLet's automate your pipeline today!\n\nGrowth Team,\nTechieHelp QualifyAI",
    inbox2: "Hey Sarah,\n\nYour competitors are taking hours to follow up with security leads. Our AI calling agents dial them *instantly* while they are still warm, qualify their budget, and book meetings directly into your sales reps' calendar.\n\nLet's run a live voice test on your phone tomorrow at 11 AM EST. Get ready to be amazed!\n\nSales Engine,\nQualifyAI"
  },
  Startup: {
    inbox1: "Hey Rohan! �\n\nLove what you guys are building at Nexus! Let's get those 500 daily leads handled by a supercharged AI employee. HubSpot sync? Done. Webhooks? 100% supported.\n\nLet's get this automated. I've blocked out a brief coffee-chat tomorrow at 3 PM to set it up.\n\nCatch you then,\nQualifyAI Team",
    inbox2: "Hey Sarah! \n\nSmart security meets smart AI calling agents! Yes, our Vapi pipeline will automatically trigger a custom outbound call to your leads within seconds.\n\nLet's kick things off tomorrow at 11 AM EST with a live dial demonstration.\n\nLet's go!,\nQualifyAI Builder"
  }
};

export default function QualifyAIDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Data States
  const [inboxItems, setInboxItems] = useState(INITIAL_INBOX);
  const [selectedInboxId, setSelectedInboxId] = useState(INITIAL_INBOX[0].id);
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [calls, setCalls] = useState(INITIAL_CALLS);
  const [whatsappChats, setWhatsappChats] = useState(INITIAL_WHATSAPP);
  const [selectedChatId, setSelectedChatId] = useState(INITIAL_WHATSAPP[0].id);

  // Workflow States
  const [workflowSteps, setWorkflowSteps] = useState(WORKFLOW_STEPS);

  // Timeline State
  const [timeline, setTimeline] = useState(INITIAL_TIMELINE);

  // AI Replies Tab Specific States
  const [replyMessageSource, setReplyMessageSource] = useState(INITIAL_INBOX[0].message);
  const [replyTone, setReplyTone] = useState("Professional");
  const [replyDraft, setReplyDraft] = useState(TONE_TEMPLATES.Professional.inbox1);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState("");

  // AI Calling Tab Specific States
  const [activeCallLogId, setActiveCallLogId] = useState(INITIAL_CALLS[0].id);
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
    gmail: "Connected",
    forms: "Connected",
    whatsapp: "Connected",
    sheets: "Connected",
    vapi: "Connected",
    gemini: "Connected"
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

  // Live Activity Feed Simulator (24/7 AI Employee)
  useEffect(() => {
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

  const handleSendReply = () => {
    setEmailStatusMessage("Dispatching AI reply via connected Gmail OAuth...");
    setTimeout(() => {
      setEmailStatusMessage("Reply sent successfully! Lead timeline updated.");
      setTimeout(() => {
        setEmailStatusMessage("");
        // Add activity
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
        setTimeline(prev => [
          {
            id: `time-${Date.now()}`,
            time: timeStr,
            text: `AI Dispatched Draft Reply to ${activeInboxItem.email} (Tone: ${replyTone})`,
            type: "email"
          },
          ...prev
        ]);
        // Set lead to contacted
        setLeads(prev => prev.map(l => l.email === activeInboxItem.email ? { ...l, status: "Contacted" } : l));
      }, 2000);
    }, 1500);
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

  return (
    <div className="flex h-screen bg-[#030307] text-[#ebebed] font-sans overflow-hidden antialiased selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">

      {/* Background glow effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0f172a]/30 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#0c4a6e]/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[30%] right-[10%] w-[30%] h-[30%] bg-[#581c87]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-white/[0.06] bg-[#05050a]/90 backdrop-blur-2xl flex flex-col justify-between h-screen shrink-0 sticky top-0">
        <div>
          {/* Logo Section */}
          <div className="p-6 flex items-center gap-3 border-b border-white/[0.04]">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#38bdf8] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#38bdf8]/20 animate-pulse">
              <Sparkles className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-gray-900 dark:text-white leading-none">QualifyAI</h1>
              <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-1">TechieHelp</p>
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
              { id: "whatsapp", label: "WhatsApp", icon: MessageSquare, badge: whatsappChats.filter(w => w.status === "Unread").length },
              { id: "workflows", label: "Workflows", icon: GitFork, activeDot: true },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group ${isActive
                      ? "bg-white/[0.05] text-[#38bdf8] border border-white/[0.04] shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:card-glass-static"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-105 ${isActive ? "text-[#38bdf8]" : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:text-white"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="text-[9px] bg-[#38bdf8]/10 text-[#38bdf8] px-1.5 py-0.5 rounded-full font-mono">
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
        <div className="p-4 border-t border-white/[0.04] card-glass-static flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="btn-primary">
              AK
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 dark:text-white">Amit Kumar</p>
              <p className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                AI Online (24/7)
              </p>
            </div>
          </div>
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-white/[0.03]" title="Exit Dashboard">
            <LogOut className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT WORKSPACE & RIGHT ACTIVITY FEED */}
      <div className="flex-1 flex overflow-hidden">

        {/* CENTER CONTENT */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-hide pb-12 relative border-r border-white/[0.04]">
          {/* HEADER BAR */}
          <header className="sticky top-0 bg-[#030307]/70 backdrop-blur-md z-40 border-b border-white/[0.05] py-4 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-md font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                  Welcome Back, Amit <span className="text-xl">�</span>
                </h2>
                <p className="text-[10px] text-gray-600 dark:text-gray-400 font-mono">TechieHelp QualifyAI Operating System</p>
              </div>
              <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full animate-ping" />
                AI Employee ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] text-gray-500">Qualification Confidence</p>
                <p className="text-xs font-mono text-gray-900 dark:text-white font-semibold flex items-center justify-end gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
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
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/5 to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-[#38bdf8]" />
                          <span className="text-[10px] uppercase tracking-widest text-[#38bdf8] font-mono font-bold">24/7 Operations</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Your AI Employee is running.</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-lg leading-relaxed">
                          QualifyAI is listening on Gmail, Website Form Webhooks, and WhatsApp Business. Automations are active, incoming queries will be scored and qualified instantly.
                        </p>
                      </div>
                    </div>

                    {/* KPI Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: "New Leads", value: "148", trend: "+12.4%", up: true, subtitle: "last 24 hours", icon: User },
                        { title: "Qualified Leads", value: "84", trend: "+18.2%", up: true, subtitle: "score > 75", icon: Flame },
                        { title: "AI Replies Sent", value: "128", trend: "+24.8%", up: true, subtitle: "auto-drafted & sent", icon: Mail },
                        { title: "AI Calls Completed", value: "34", trend: "+8.1%", up: true, subtitle: "via calling node", icon: Phone },
                        { title: "WhatsApp Conversations", value: "92", trend: "+14.6%", up: true, subtitle: "chats resolved", icon: MessageSquare },
                        { title: "Revenue Potential", value: "₹4,25,000", trend: "+15.4%", up: true, subtitle: "qualified leads pipeline", icon: DollarSign },
                        { title: "Conversion Rate", value: "56.7%", trend: "+3.1%", up: true, subtitle: "qualification ratio", icon: TrendingUp },
                        { title: "AI Active Time", value: "100%", trend: "Stable", up: true, subtitle: "24/7 coverage", icon: Clock }
                      ].map((card, i) => {
                        const CardIcon = card.icon;
                        return (
                          <div key={i} className="card-glass flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] text-gray-600 dark:text-gray-400 font-medium">{card.title}</span>
                              <CardIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#38bdf8] transition-colors" />
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">{card.value}</span>
                              <span className="text-[9px] font-mono text-green-400 font-bold">{card.trend}</span>
                            </div>
                            <p className="text-[9px] text-gray-500 font-mono mt-1">{card.subtitle}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Funnel & Conversion split */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                      {/* Left Block: Funnel */}
                      <div className="lg:col-span-2 rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">Lead Qualification Pipeline</h3>
                          <span className="text-[9px] text-gray-500 font-mono">Live View</span>
                        </div>
                        <div className="space-y-3">
                          {[
                            { stage: "Ingested Inbound Leads", count: "148 leads", percent: "100%", w: "w-full", bg: "bg-blue-500/20" },
                            { stage: "AI Intent Match & Scored", count: "112 leads", percent: "75%", w: "w-[75%]", bg: "bg-cyan-500/20" },
                            { stage: "Qualified (Score > 75)", count: "84 leads", percent: "56%", w: "w-[56%]", bg: "bg-emerald-500/20" },
                            { stage: "Screening Calls Booked", count: "34 bookings", percent: "23%", w: "w-[23%]", bg: "bg-purple-500/20" }
                          ].map((stage, idx) => (
                            <div key={idx} className="relative p-2.5 rounded-lg border border-white/[0.03] overflow-hidden bg-white/[0.005]">
                              <div className={`absolute inset-y-0 left-0 ${stage.bg} ${stage.w} opacity-10`} />
                              <div className="flex items-center justify-between text-xs relative z-10 font-mono">
                                <span className="text-gray-300 font-sans">{stage.stage}</span>
                                <div className="flex items-center gap-3">
                                  <span className="text-gray-600 dark:text-gray-400">{stage.count}</span>
                                  <span className="text-[#38bdf8] font-bold">{stage.percent}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Block: Sources */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">Inbound Lead Sources</h3>
                            <span className="text-[9px] text-[#38bdf8] font-mono">Monthly</span>
                          </div>
                          <div className="space-y-3.5">
                            {[
                              { label: "Website Forms", percentage: 55, color: "bg-[#38bdf8]" },
                              { label: "Gmail Mailbox", percentage: 30, color: "bg-[#6366f1]" },
                              { label: "WhatsApp Chatbot", percentage: 15, color: "bg-green-500" }
                            ].map((source, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-[11px]">
                                  <span className="text-gray-300">{source.label}</span>
                                  <span className="font-mono text-gray-900 dark:text-white">{source.percentage}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                                  <div className={`h-full ${source.color} rounded-full`} style={{ width: `${source.percentage}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveTab("analytics")}
                          className="w-full mt-6 text-center text-[10px] uppercase font-bold tracking-wider text-[#38bdf8] hover:text-gray-900 dark:text-white transition-colors"
                        >
                          View Full Analytics →
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. AI INBOX TAB */}
                {activeTab === "inbox" && (
                  <div className="space-y-6">
                    {/* Filter & Search Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-white/[0.04] card-glass-static">
                      <div className="relative w-full sm:max-w-xs">
                        <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Search inbox..."
                          value={inboxSearch}
                          onChange={(e) => setInboxSearch(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-gray-900 dark:text-white outline-none focus:border-[#38bdf8]/40 transition-colors"
                        />
                      </div>
                      <div className="flex gap-2">
                        {["All", "Website Form", "Gmail", "WhatsApp"].map(src => (
                          <button
                            key={src}
                            onClick={() => setInboxFilter(src)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors ${inboxFilter === src
                                ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                                : "text-gray-600 dark:text-gray-400 card-glass-static border border-white/[0.04] hover:bg-white/[0.04]"
                              }`}
                          >
                            {src}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Split View */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[500px]">
                      {/* Left: Leads List */}
                      <div className="lg:col-span-2 rounded-xl border border-white/[0.04] card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-white/[0.03]">
                        {filteredInbox.map(item => (
                          <div
                            key={item.id}
                            onClick={() => {
                              setSelectedInboxId(item.id);
                              // Mark read
                              setInboxItems(prev => prev.map(i => i.id === item.id ? { ...i, read: true } : i));
                            }}
                            className={`p-4 cursor-pointer transition-colors relative text-left ${selectedInboxId === item.id ? "bg-white/[0.03]" : "hover:card-glass-static"
                              }`}
                          >
                            {!item.read && (
                              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#38bdf8] rounded-full" />
                            )}
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${item.source === "Website Form" ? "bg-blue-500/10 text-blue-400" :
                                  item.source === "Gmail" ? "bg-purple-500/10 text-[#33bbcf]" : "bg-green-500/10 text-green-400"
                                }`}>
                                {item.source}
                              </span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${item.priority === "High" ? "bg-red-500/10 text-red-400 font-bold" :
                                  item.priority === "Medium" ? "bg-yellow-500/10 text-yellow-400" : "bg-blue-500/10 text-blue-400"
                                }`}>
                                {item.priority === "High" ? " High" : item.priority === "Medium" ? "� Medium" : "� Low"}
                              </span>
                              <span className="text-[10px] text-gray-500 font-mono ml-auto">{item.time}</span>
                            </div>
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white truncate">{item.senderName}</h4>
                            <p className="text-[11px] text-gray-600 dark:text-gray-400 font-medium truncate mt-0.5">{item.subject}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <span className="text-[10px] text-gray-500">Lead Score:</span>
                              <span className={`text-xs font-mono font-bold ${item.score >= 85 ? "text-green-400" : "text-yellow-400"
                                }`}>
                                {item.score}/100
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Detail Panel */}
                      <div className="lg:col-span-3 rounded-xl border border-white/[0.04] card-glass-static p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide text-left">
                        <div className="space-y-5">
                          {/* Sender details */}
                          <div className="flex items-start justify-between border-b border-white/[0.05] pb-4">
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{activeInboxItem.senderName}</h3>
                              <p className="text-[11px] text-gray-600 dark:text-gray-400 font-mono mt-0.5">{activeInboxItem.email}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] text-gray-500">Qualification Score</p>
                              <span className="text-lg font-bold font-mono text-green-400">{activeInboxItem.score}/100</span>
                            </div>
                          </div>

                          {/* Email Body */}
                          <div className="space-y-1">
                            <h4 className="text-[10px] font-mono text-gray-500 uppercase">Subject: {activeInboxItem.subject}</h4>
                            <div className="p-4 rounded-lg card-glass-static border border-white/[0.03] text-xs text-gray-300 leading-relaxed font-sans max-h-36 overflow-y-auto">
                              {activeInboxItem.message}
                            </div>
                          </div>

                          {/* AI Analysis Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Summary */}
                            <div className="p-3 rounded-lg bg-[#38bdf8]/5 border border-[#38bdf8]/10 space-y-1">
                              <span className="text-[9px] font-mono font-bold text-[#38bdf8] flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                AI OPERATION SUMMARY
                              </span>
                              <p className="text-[11px] text-gray-300 leading-relaxed">{activeInboxItem.aiSummary}</p>
                            </div>

                            {/* Intent & Sentiment */}
                            <div className="card-glass flex flex-col">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-gray-500">Intent:</span>
                                <span className="text-gray-900 dark:text-white font-mono font-semibold">{activeInboxItem.intent}</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-gray-500">Sentiment:</span>
                                <span className="text-[#38bdf8] font-mono font-semibold">{activeInboxItem.sentiment}</span>
                              </div>
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-gray-500">Suggested Action:</span>
                                <span className="text-green-400 font-mono text-right">{activeInboxItem.suggestedAction}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 mt-6 border-t border-white/[0.05] pt-4">
                          <button
                            onClick={() => {
                              // Prefill draft in AI Replies and switch tab
                              setReplyMessageSource(activeInboxItem.message);
                              const itemKey = activeInboxItem.id === "inbox-1" ? "inbox1" : "inbox2";
                              setReplyDraft(TONE_TEMPLATES[replyTone]?.[itemKey] || TONE_TEMPLATES.Professional.inbox1);
                              setActiveTab("replies");
                            }}
                            className="flex-1 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Mail className="w-4 h-4" /> Reply Draft
                          </button>
                          <button
                            onClick={() => handleTriggerCall(activeInboxItem)}
                            className="flex-1 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-gray-900 dark:text-white py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Phone className="w-4 h-4 text-green-400" /> Trigger AI Call
                          </button>
                          <button
                            onClick={() => {
                              alert("Note added to lead record successfully.");
                            }}
                            className="px-3 card-glass-static hover:bg-white/[0.04] border border-white/[0.04] text-gray-300 rounded-lg text-xs font-semibold"
                          >
                            + Add Note
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. QUALIFIED LEADS TAB */}
                {activeTab === "leads" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-white/[0.04] card-glass-static">
                      <div className="relative w-full sm:max-w-xs">
                        <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Search qualified leads..."
                          value={leadsSearch}
                          onChange={(e) => setLeadsSearch(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-gray-900 dark:text-white outline-none focus:border-[#38bdf8]/40 transition-colors"
                        />
                      </div>
                      <div className="flex gap-2">
                        {["All", "High", "Medium"].map(pr => (
                          <button
                            key={pr}
                            onClick={() => setLeadsFilter(pr)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors ${leadsFilter === pr
                                ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                                : "text-gray-600 dark:text-gray-400 card-glass-static border border-white/[0.04] hover:bg-white/[0.04]"
                              }`}
                          >
                            {pr} Priority
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pipelines table */}
                    <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl overflow-x-auto text-left">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.05] text-gray-600 dark:text-gray-400 font-mono uppercase text-[9px] tracking-wider">
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
                        <tbody className="divide-y divide-white/[0.02]">
                          {filteredLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-white/[0.005] transition-colors">
                              <td className="py-4 text-gray-900 dark:text-white font-medium">{lead.name}</td>
                              <td className="py-4">
                                <div className="text-gray-300 font-semibold">{lead.email}</div>
                                <div className="text-gray-500 text-[10px] font-mono mt-0.5">{lead.phone}</div>
                              </td>
                              <td className="py-4 text-gray-600 dark:text-gray-400 font-mono">{lead.source}</td>
                              <td className="py-4">
                                <span className="text-green-400 font-mono font-bold">{lead.score}/100</span>
                              </td>
                              <td className="py-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${lead.priority === "High" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                                  }`}>
                                  {lead.priority}
                                </span>
                              </td>
                              <td className="py-4">
                                <span className={`flex items-center gap-1 text-[11px] ${lead.status === "Converted" ? "text-green-400" :
                                    lead.status === "In Progress" ? "text-amber-400" : "text-[#33bbcf]"
                                  }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${lead.status === "Converted" ? "bg-green-400" :
                                      lead.status === "In Progress" ? "bg-amber-400" : "bg-purple-400"
                                    }`} />
                                  {lead.status}
                                </span>
                              </td>
                              <td className="py-4 font-mono text-gray-900 dark:text-white font-semibold">{lead.revenue}</td>
                              <td className="py-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => {
                                      setReplyMessageSource(`Manually triggered draft reply for ${lead.name}`);
                                      setReplyDraft(`Dear ${lead.name},\n\nHope you are doing well. I wanted to follow up on your request regarding TechieHelp QualifyAI.\n\nLet's get connected.\n\nBest,\nQualifyAI Assistant`);
                                      setActiveTab("replies");
                                    }}
                                    className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white"
                                    title="Email Reply"
                                  >
                                    <Mail className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleTriggerCall(lead)}
                                    className="p-1.5 bg-white/[0.03] hover:bg-white/[0.08] rounded text-green-400 hover:bg-green-500/10"
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
                                    className="px-2 py-1 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/20 hover:border-[#38bdf8]/40 text-[#38bdf8] rounded font-mono font-bold text-[9px] uppercase transition-all"
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
                  </div>
                )}

                {/* 4. AI REPLIES TAB */}
                {activeTab === "replies" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                      {/* Left: Original Message */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-6 space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-white/[0.05] pb-3">Inbound Inquiry Message</h3>
                        <div className="p-4 rounded-lg card-glass-static border border-white/[0.03] text-xs text-gray-300 leading-relaxed font-sans min-h-[180px] overflow-y-auto">
                          {replyMessageSource}
                        </div>

                        <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10 space-y-1">
                          <span className="text-[9px] font-mono font-bold text-[#33bbcf] flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            AI PRE-QUALIFICATION COMPLETED
                          </span>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400">
                            The system evaluated this inquiry as high alignment with positive intent. Standard draft answers were populated using tone selector overrides below.
                          </p>
                        </div>
                      </div>

                      {/* Right: AI Draft Editor */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-6 space-y-4 relative">
                        <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">AI Generated Reply</h3>

                          {/* Tone Selector */}
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-500 font-mono">Tone:</span>
                            <select
                              value={replyTone}
                              onChange={(e) => handleToneChange(e.target.value)}
                              className="bg-white/[0.03] border border-white/[0.06] text-[10px] text-gray-900 dark:text-white rounded p-1 outline-none font-mono cursor-pointer"
                            >
                              {["Professional", "Friendly", "Sales", "Startup"].map(t => (
                                <option key={t} value={t} className="bg-[#05050a]">{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Textarea */}
                        <div className="relative">
                          {isRegenerating && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-2.5 z-10">
                              <RefreshCw className="w-6 h-6 text-[#38bdf8] animate-spin" />
                              <span className="text-[10px] text-gray-600 dark:text-gray-400 font-mono">Regenerating in {replyTone} tone...</span>
                            </div>
                          )}
                          <textarea
                            value={replyDraft}
                            onChange={(e) => setReplyDraft(e.target.value)}
                            className="w-full h-56 p-4 card-glass-static border border-white/[0.04] focus:border-[#38bdf8]/40 outline-none rounded-lg text-xs font-mono text-gray-300 leading-relaxed resize-none"
                            placeholder="Drafting AI reply..."
                          />
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={handleRegenerateReply}
                            className="flex items-center gap-1.5 px-3 py-2 card-glass-static hover:bg-white/[0.04] border border-white/[0.04] text-gray-300 rounded-lg text-xs font-semibold transition-colors"
                          >
                            <RefreshCw className="w-3.5 h-3.5" /> Regenerate
                          </button>

                          <button
                            onClick={handleSendReply}
                            className="flex items-center gap-1.5 px-6 py-2 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] rounded-lg text-xs font-bold transition-all shadow-md"
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
                  </div>
                )}

                {/* 5. AI CALLS TAB */}
                {activeTab === "calls" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[500px]">
                      {/* Left: Call Logs */}
                      <div className="lg:col-span-2 rounded-xl border border-white/[0.04] card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-white/[0.03] text-left">
                        <div className="p-4 border-b border-white/[0.04] bg-white/[0.005]">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">Call logs via Vapi</h3>
                        </div>
                        {calls.map(log => (
                          <div
                            key={log.id}
                            onClick={() => {
                              setActiveCallLogId(log.id);
                              setIsPlayingAudio(false);
                              setAudioProgress(0);
                            }}
                            className={`p-4 cursor-pointer transition-colors ${activeCallLogId === log.id ? "bg-white/[0.03]" : "hover:card-glass-static"
                              }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs font-semibold text-gray-900 dark:text-white">{log.leadName}</h4>
                              <span className="text-[10px] text-gray-500 font-mono">{log.time}</span>
                            </div>
                            <p className="text-[10px] text-gray-600 dark:text-gray-400 font-mono">{log.phone}</p>
                            <div className="flex items-center gap-3 mt-3">
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${log.status === "Completed" ? "bg-green-500/10 text-green-400" :
                                  log.status === "Voicemail" ? "bg-yellow-500/10 text-yellow-400" : "bg-blue-500/10 text-blue-400"
                                }`}>
                                {log.status}
                              </span>
                              {log.meetingBooked && (
                                <span className="text-[9px] bg-[#38bdf8]/10 text-[#38bdf8] px-1.5 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                                  <Calendar className="w-2.5 h-2.5" /> Booked
                                </span>
                              )}
                              <span className="text-[10px] text-gray-500 font-mono ml-auto">{log.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Audio Wave, Summary & Transcript */}
                      <div className="lg:col-span-3 rounded-xl border border-white/[0.04] card-glass-static p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide text-left">
                        <div className="space-y-6">

                          {/* Log Info */}
                          <div className="flex items-start justify-between border-b border-white/[0.05] pb-4">
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Call Recording: {activeCallLog.leadName}</h3>
                              <p className="text-[10px] text-gray-500 font-mono mt-0.5">Phone: {activeCallLog.phone} | Duration: {activeCallLog.duration}</p>
                            </div>
                            <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono rounded-full font-bold">
                              Confidence: {activeCallLog.score}%
                            </span>
                          </div>

                          {/* Interactive Audio Simulator */}
                          <div className="card-glass flex flex-col">
                            <button
                              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                              className="w-10 h-10 rounded-full bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] flex items-center justify-center transition-colors"
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
                                      className={`w-[3px] rounded-full transition-all duration-150 ${idx / 45 * 100 < audioProgress ? "bg-[#38bdf8]" : "bg-white/[0.1]"
                                        }`}
                                      style={{ height: `${Math.max(4, randomHeight)}px` }}
                                    />
                                  );
                                })}
                              </div>
                              <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                                <span>{isPlayingAudio ? `0:${String(Math.floor(audioProgress * 0.1)).padStart(2, '0')}` : "0:00"}</span>
                                <span>{activeCallLog.duration}</span>
                              </div>
                            </div>
                          </div>

                          {/* Summary & Transcript Split */}
                          <div className="space-y-4">
                            {/* Summary */}
                            <div className="p-3.5 rounded-lg bg-[#38bdf8]/5 border border-[#38bdf8]/10 space-y-1">
                              <span className="text-[9px] font-mono font-bold text-[#38bdf8] flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                AI CALL CONVERSATION SUMMARY
                              </span>
                              <p className="text-xs text-gray-300 leading-relaxed">{activeCallLog.summary}</p>
                            </div>

                            {/* Transcript */}
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-mono text-gray-500 uppercase">Call Transcript Transcript</h4>
                              <div className="p-4 rounded-lg card-glass-static border border-white/[0.03] text-xs font-mono text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed max-h-48 overflow-y-auto font-sans">
                                {activeCallLog.transcript.split("\n\n").map((line, lineIdx) => {
                                  const isAI = line.startsWith("[AI");
                                  return (
                                    <p key={lineIdx} className={isAI ? "text-[#38bdf8]" : "text-gray-300"}>
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
                  </div>
                )}

                {/* 6. WHATSAPP TAB */}
                {activeTab === "whatsapp" && (
                  <div className="space-y-6">
                    {/* Unified Whatsapp Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[500px]">
                      {/* Left Sidebar: Unread, Qualified, Follow-up filters */}
                      <div className="lg:col-span-2 rounded-xl border border-white/[0.04] card-glass-static overflow-y-auto scrollbar-hide flex flex-col divide-y divide-white/[0.03] text-left">
                        <div className="p-4 border-b border-white/[0.04] bg-white/[0.005] flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">WhatsApp Chats</h3>
                          <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-mono font-bold">API Connected</span>
                        </div>
                        {whatsappChats.map(chat => (
                          <div
                            key={chat.id}
                            onClick={() => {
                              setSelectedChatId(chat.id);
                              // Mark status as read/qualified
                              setWhatsappChats(prev => prev.map(c => c.id === chat.id && c.status === "Unread" ? { ...c, status: "Follow-up Required" } : c));
                            }}
                            className={`p-4 cursor-pointer transition-colors ${selectedChatId === chat.id ? "bg-white/[0.03]" : "hover:card-glass-static"
                              }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <h4 className="text-xs font-semibold text-gray-900 dark:text-white">{chat.senderName}</h4>
                              <span className="text-[9px] text-gray-500 font-mono">{chat.time}</span>
                            </div>
                            <p className="text-[11px] text-gray-600 dark:text-gray-400 truncate font-sans">{chat.message}</p>

                            <div className="flex items-center justify-between mt-3">
                              <span className="text-[10px] text-gray-500 font-mono">{chat.phone}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${chat.status === "Qualified" ? "bg-emerald-500/10 text-emerald-400" :
                                  chat.status === "Unread" ? "bg-blue-500/10 text-blue-400 animate-pulse" : "bg-yellow-500/10 text-yellow-400"
                                }`}>
                                {chat.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Panel: Chat Thread & AI response builder */}
                      <div className="lg:col-span-3 rounded-xl border border-white/[0.04] card-glass-static p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide text-left">
                        <div className="space-y-6">

                          {/* Active Header */}
                          <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{activeChat.senderName}</h3>
                              <p className="text-[10px] text-gray-500 font-mono mt-0.5">{activeChat.phone}</p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  alert("Lead owner assigned to Amit Kumar.");
                                }}
                                className="px-2.5 py-1 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded text-[10px] font-bold text-gray-300 transition-colors"
                              >
                                Assign Rep
                              </button>
                              <button
                                onClick={() => {
                                  setWhatsappChats(prev => prev.map(c => c.id === activeChat.id ? { ...c, status: "Qualified" } : c));
                                  alert("Lead status set to Qualified.");
                                }}
                                className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[10px] font-bold text-emerald-400 transition-colors"
                              >
                                Convert Lead
                              </button>
                            </div>
                          </div>

                          {/* Message bubble logs */}
                          <div className="space-y-3 p-4 rounded-lg bg-white/[0.005] border border-white/[0.03] h-48 overflow-y-auto text-xs">
                            <div className="flex flex-col items-start max-w-[80%]">
                              <span className="text-[9px] text-gray-500 font-mono mb-1">{activeChat.senderName}</span>
                              <div className="p-3 rounded-2xl rounded-tl-none bg-white/[0.03] text-gray-300 leading-relaxed font-sans">
                                {activeChat.message}
                              </div>
                            </div>

                            <div className="flex flex-col items-end max-w-[80%] ml-auto">
                              <span className="text-[9px] text-[#38bdf8] font-mono mb-1">AI Assistant (Suggested Reply)</span>
                              <div className="p-3 rounded-2xl rounded-tr-none bg-[#38bdf8]/10 text-gray-300 leading-relaxed border border-[#38bdf8]/10 font-sans">
                                {activeChat.aiDraft}
                              </div>
                            </div>
                          </div>

                          {/* AI Response Box */}
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-mono text-gray-500 uppercase">Interactive AI Composer</h4>
                            <div className="relative">
                              <textarea
                                value={activeChat.aiDraft}
                                onChange={(e) => {
                                  setWhatsappChats(prev => prev.map(c => c.id === activeChat.id ? { ...c, aiDraft: e.target.value } : c));
                                }}
                                className="w-full h-20 p-3 card-glass-static border border-white/[0.04] focus:border-[#38bdf8]/40 outline-none rounded-lg text-xs font-sans text-gray-300 leading-relaxed resize-none"
                              />
                            </div>
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => {
                                  alert("Broadcast sent successfully to qualified cohorts.");
                                }}
                                className="px-3 py-1.5 card-glass-static hover:bg-white/[0.04] border border-white/[0.04] text-gray-600 dark:text-gray-400 rounded-lg text-[10px] font-bold"
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
                                className="px-5 py-1.5 bg-green-500 hover:bg-green-600 text-gray-900 dark:text-white rounded-lg text-[10px] font-bold flex items-center gap-1.5 shadow-md"
                              >
                                <Send className="w-3 h-3" /> Send Reply
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. WORKFLOWS TAB */}
                {activeTab === "workflows" && (
                  <div className="space-y-8 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-md font-bold text-gray-900 dark:text-white uppercase tracking-wider">Visual Automation Builder</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Configure your 24/7 AI Employee workflow pipeline.</p>
                      </div>

                      <button
                        onClick={() => {
                          alert("Testing complete. All 7 pipeline blocks validated successfully with zero compilation errors.");
                        }}
                        className="px-3 py-1.5 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Test Automation Run
                      </button>
                    </div>

                    {/* Flowchart Pipeline */}
                    <div className="relative p-6 rounded-2xl border border-white/[0.05] card-glass-static shadow-2xl space-y-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none" />

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
                                className={`flex-1 w-full max-w-[140px] p-3 rounded-xl border transition-all cursor-pointer text-center relative group ${step.active
                                    ? "bg-white/[0.03] border-white/[0.1] shadow-md hover:border-[#38bdf8]/50"
                                    : "bg-black/40 border-white/[0.03] opacity-40 hover:opacity-75"
                                  }`}
                              >
                                {/* Top Active Indicator */}
                                <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${step.active ? "bg-green-500" : "bg-red-500"
                                  }`} />

                                <div className="mx-auto w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-2 text-[#38bdf8]">
                                  {step.icon === "Globe" && <ExternalLink className="w-4 h-4" />}
                                  {step.icon === "Sparkles" && <Sparkles className="w-4 h-4" />}
                                  {step.icon === "Flame" && <Flame className="w-4 h-4" />}
                                  {step.icon === "Mail" && <Mail className="w-4 h-4" />}
                                  {step.icon === "MessageSquare" && <MessageSquare className="w-4 h-4" />}
                                  {step.icon === "Phone" && <Phone className="w-4 h-4" />}
                                  {step.icon === "GitFork" && <GitFork className="w-4 h-4" />}
                                </div>
                                <h4 className="text-[11px] font-bold text-gray-900 dark:text-white truncate">{step.title}</h4>
                                <p className="text-[9px] text-gray-500 leading-tight mt-1 line-clamp-2">{step.desc}</p>
                              </div>

                              {/* Arrow */}
                              {!isLast && (
                                <div className="text-[#38bdf8] font-mono hidden md:block">
                                  →
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Rule configuration builder */}
                      <div className="card-glass flex flex-col">
                        <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-[#38bdf8]" />
                          Automation Logic Parameters
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Min Score to Auto-Reply</label>
                            <input
                              type="number"
                              value={settings.qualificationThreshold}
                              onChange={(e) => setSettings(prev => ({ ...prev, qualificationThreshold: Number(e.target.value) }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] p-2 rounded text-xs text-gray-900 dark:text-white outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Auto Call Priority</label>
                            <div className="flex items-center gap-2 mt-1">
                              <input
                                type="checkbox"
                                checked={settings.autoCallHighPriority}
                                onChange={(e) => setSettings(prev => ({ ...prev, autoCallHighPriority: e.target.checked }))}
                                className="w-4 h-4 bg-white/[0.03] border-white/[0.06] rounded text-[#38bdf8]"
                              />
                              <span className="text-xs text-gray-300">Dial instantly if score &gt; 85</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">AI Tone Profile</label>
                            <select
                              value={settings.defaultTone}
                              onChange={(e) => setSettings(prev => ({ ...prev, defaultTone: e.target.value }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] p-2 rounded text-xs text-gray-900 dark:text-white outline-none font-mono cursor-pointer"
                            >
                              <option value="Professional" className="bg-[#05050a]">Professional</option>
                              <option value="Friendly" className="bg-[#05050a]">Friendly</option>
                              <option value="Sales" className="bg-[#05050a]">Sales</option>
                              <option value="Startup" className="bg-[#05050a]">Startup</option>
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
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                      <div>
                        <h2 className="text-md font-bold text-gray-900 dark:text-white uppercase tracking-wider">Operational Analytics Performance</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Aggregated statistics across connected data sources.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Lead growth chart mockup */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl space-y-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-gray-900 dark:text-white">Lead Volume Growth (Weekly)</span>
                          <span className="text-[10px] text-green-400 font-mono">+28.5% WoW</span>
                        </div>
                        <div className="h-44 w-full bg-white/[0.005] rounded border border-white/[0.02] flex items-end justify-between p-2 relative">
                          {/* Grid lines */}
                          <div className="absolute inset-x-0 top-1/4 border-b border-white/[0.02]" />
                          <div className="absolute inset-x-0 top-2/4 border-b border-white/[0.02]" />
                          <div className="absolute inset-x-0 top-3/4 border-b border-white/[0.02]" />

                          {[32, 45, 60, 52, 75, 95, 128, 148].map((val, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1.5 w-1/8 z-10">
                              <span className="text-[9px] font-mono text-gray-500">{val}</span>
                              <div
                                className="w-6 bg-gradient-to-t from-[#38bdf8]/10 to-[#38bdf8] rounded-t transition-all hover:scale-105"
                                style={{ height: `${val / 150 * 100}px` }}
                              />
                              <span className="text-[9px] text-gray-500 font-mono">W{idx + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance matrix */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl space-y-4">
                        <h3 className="text-xs font-semibold text-gray-900 dark:text-white">Conversion & Reply KPI Splits</h3>

                        <div className="space-y-3">
                          {[
                            { label: "Email Auto-Reply Success Rate", val: "99.2%", rate: "128 of 129 replies sent without failure" },
                            { label: "WhatsApp Chatbot Engagement", val: "84.5%", rate: "Positive reaction threshold" },
                            { label: "AI Voice Call Completed Rate", val: "72.4%", rate: "34 completed of 47 dialed streams" },
                            { label: "Average Screening Call Duration", val: "2m 14s", rate: "Optimal user retention time" }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3 card-glass-static border border-white/[0.03] rounded-lg flex justify-between items-center text-xs">
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                                <p className="text-[10px] text-gray-500 mt-0.5">{item.rate}</p>
                              </div>
                              <span className="font-mono text-gray-900 dark:text-white font-bold">{item.val}</span>
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
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                      <div>
                        <h2 className="text-md font-bold text-gray-900 dark:text-white uppercase tracking-wider">Automated Performance Reports</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Download and export system ROI and calling metrics.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { title: "Weekly Lead Report", desc: "Consolidated breakdown of lead counts, score divisions, and sources.", size: "1.4 MB" },
                        { title: "Monthly Performance Report", desc: "Detailed ROI analytics including conversion gains and deal calculations.", size: "4.8 MB" },
                        { title: "AI Assistant Performance Report", desc: "Response metrics, message intent breakdown, and tone conversion stats.", size: "2.1 MB" },
                        { title: "Vapi Voice Call Log Report", desc: "Detailed calling agent statistics, transcript extracts, and durations.", size: "3.2 MB" },
                        { title: "System ROI & Cost Analysis", desc: "Total API consumption compared to estimated deal revenue values.", size: "1.1 MB" }
                      ].map((report, idx) => (
                        <div key={idx} className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-[#38bdf8]">
                              <FileText className="w-4 h-4" />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-bold">PDF Report</span>
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">{report.title}</h4>
                            <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">{report.desc}</p>
                          </div>

                          <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
                            <span className="text-[9px] text-gray-500 font-mono">{report.size}</span>
                            <button
                              onClick={() => {
                                alert(`Generating and downloading ${report.title}...`);
                              }}
                              className="px-2.5 py-1.5 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/20 text-[#38bdf8] rounded font-mono font-bold text-[9px] uppercase flex items-center gap-1 transition-all"
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
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                      <div>
                        <h2 className="text-md font-bold text-gray-900 dark:text-white uppercase tracking-wider">Connected SaaS Integrations</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Configure database triggers and automation credentials.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                      {/* GMAIL CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-purple-500/10 text-[#33bbcf] rounded-lg">
                              <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">Gmail integration</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Syncs and auto-drafts replies for inbox messages using OAuth. Auto-tag enabled.</p>
                        </div>
                        <div className="border-t border-white/[0.04] pt-3 text-[10px] text-gray-500 font-mono">
                          Connected Email: <span className="text-gray-900 dark:text-white">amit@techiehelp.in</span>
                        </div>
                      </div>

                      {/* WEBSITE FORMS CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                              <ExternalLink className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">Website Forms</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Ingest lead form details via webhook. Fully compatible with custom HTML and standard builders.</p>
                        </div>

                        <div className="border-t border-white/[0.04] pt-3 space-y-2 text-[10px] font-mono">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500">API Endpoint:</span>
                            <button
                              onClick={() => copyToClipboard("https://api.techiehelp.in/v1/qualifyai/forms", "forms")}
                              className="text-[#38bdf8] flex items-center gap-1 hover:text-gray-900 dark:text-white"
                            >
                              <Copy className="w-3 h-3" /> {webhookCopied === "forms" ? "Copied" : "Copy"}
                            </button>
                          </div>
                          <p className="text-[9px] text-gray-600 dark:text-gray-400 card-glass-static p-1.5 rounded truncate">
                            https://api.techiehelp.in/v1/qualifyai/forms
                          </p>
                        </div>
                      </div>

                      {/* WHATSAPP BUSINESS CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                              <MessageSquare className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">WhatsApp Business API</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Auto-qualifies WhatsApp contacts, triggers templates, and launches interactive dialog broadcasts.</p>
                        </div>
                        <div className="border-t border-white/[0.04] pt-3 text-[10px] text-gray-500 font-mono space-y-1">
                          <div>Number: <span className="text-gray-900 dark:text-white">+91 70731 30165</span></div>
                          <div>AI Replies Sent: <span className="text-gray-900 dark:text-white">92</span></div>
                        </div>
                      </div>

                      {/* GOOGLE SHEETS CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-green-600/10 text-green-400 rounded-lg">
                              <FileText className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">Google Sheets Integration</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Export qualified leads dynamically to spreadsheets for unified team review and tracking.</p>
                        </div>
                        <div className="border-t border-white/[0.04] pt-3 text-[10px] text-gray-500 font-mono">
                          Target Spreadsheet ID: <span className="text-[#38bdf8] hover:underline cursor-pointer">techie_qualify_2026_sheet</span>
                        </div>
                      </div>

                      {/* VAPI VOICE CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
                              <PhoneCall className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">Vapi Voice AI Agents</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Automate inbound and outbound phone screening with human-realistic, high-speed latency configurations.</p>
                        </div>
                        <div className="border-t border-white/[0.04] pt-3 text-[10px] text-gray-500 font-mono">
                          Active Voice ID: <span className="text-gray-900 dark:text-white">sam_indian_eng_v3</span>
                        </div>
                      </div>

                      {/* GEMINI AI CARD */}
                      <div className="rounded-xl border border-white/[0.04] card-glass-static p-5 shadow-2xl flex flex-col justify-between space-y-4 relative">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="p-2 bg-blue-600/10 text-[#38bdf8] rounded-lg">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">Connected</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">Gemini Pro Agent Core</h4>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-normal mt-1">Drives semantic evaluations, context extraction, intent categorization, and personalized drafts.</p>
                        </div>
                        <div className="border-t border-white/[0.04] pt-3 text-[10px] text-gray-500 font-mono">
                          Model Reference: <span className="text-gray-900 dark:text-white">Gemini-1.5-Pro</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 11. SETTINGS TAB */}
                {activeTab === "settings" && (
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                      <div>
                        <h2 className="text-md font-bold text-gray-900 dark:text-white uppercase tracking-wider">QualifyAI Configuration Settings</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Tune qualification parameters, profiles, and fallback configurations.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSaveSettings} className="rounded-xl border border-white/[0.04] card-glass-static p-6 shadow-2xl space-y-6 max-w-2xl">

                      {/* Profile & Org */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-white/[0.03] pb-2">Profile & Company</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Full Name</label>
                            <input
                              type="text"
                              value={settings.fullName}
                              onChange={(e) => setSettings(prev => ({ ...prev, fullName: e.target.value }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded text-xs text-gray-900 dark:text-white outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Company Name</label>
                            <input
                              type="text"
                              value={settings.companyName}
                              onChange={(e) => setSettings(prev => ({ ...prev, companyName: e.target.value }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded text-xs text-gray-900 dark:text-white outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Lead Qualification Threshold Rules */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-white/[0.03] pb-2">Qualification Rules</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Minimum Qualification Score</label>
                            <input
                              type="number"
                              value={settings.qualificationThreshold}
                              onChange={(e) => setSettings(prev => ({ ...prev, qualificationThreshold: Number(e.target.value) }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded text-xs text-gray-900 dark:text-white outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] text-gray-500 font-mono uppercase">Default AI Reply Tone</label>
                            <select
                              value={settings.defaultTone}
                              onChange={(e) => setSettings(prev => ({ ...prev, defaultTone: e.target.value }))}
                              className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded text-xs text-gray-900 dark:text-white outline-none font-mono cursor-pointer"
                            >
                              <option value="Professional" className="bg-[#05050a]">Professional</option>
                              <option value="Friendly" className="bg-[#05050a]">Friendly</option>
                              <option value="Sales" className="bg-[#05050a]">Sales</option>
                              <option value="Startup" className="bg-[#05050a]">Startup</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Call and Email options */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-white/[0.03] pb-2">Channels & Fallbacks</h3>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={settings.autoCallHighPriority}
                              onChange={(e) => setSettings(prev => ({ ...prev, autoCallHighPriority: e.target.checked }))}
                              className="w-4 h-4 rounded border-white/[0.06] card-glass-static text-[#38bdf8] focus:ring-0 cursor-pointer"
                              id="autoCall"
                            />
                            <label htmlFor="autoCall" className="text-xs text-gray-300 cursor-pointer">
                              Auto-Dial voice calls for High Priority Leads (Score &gt; 85) instantly
                            </label>
                          </div>

                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={settings.autoReplyEmails}
                              onChange={(e) => setSettings(prev => ({ ...prev, autoReplyEmails: e.target.checked }))}
                              className="w-4 h-4 rounded border-white/[0.06] card-glass-static text-[#38bdf8] focus:ring-0 cursor-pointer"
                              id="autoReply"
                            />
                            <label htmlFor="autoReply" className="text-xs text-gray-300 cursor-pointer">
                              Enable automatic draft Generation for new Gmail incoming messages
                            </label>
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-2">
                          <label className="text-[10px] text-gray-500 font-mono uppercase">WhatsApp Greeting Auto-response Template</label>
                          <textarea
                            value={settings.whatsappGreeting}
                            onChange={(e) => setSettings(prev => ({ ...prev, whatsappGreeting: e.target.value }))}
                            className="w-full h-16 p-2 bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 outline-none rounded text-xs text-gray-900 dark:text-white resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] font-bold text-xs rounded-lg transition-all shadow-md"
                        >
                          Save Configurations
                        </button>

                        {settingsSaved && (
                          <span className="text-green-400 text-xs font-mono animate-pulse">
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
        <aside className="w-80 bg-[#05050a]/60 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">AI Employee Timeline Feed</h3>
              </div>
              <span className="text-[9px] text-[#38bdf8] font-mono border border-[#38bdf8]/20 bg-[#38bdf8]/5 px-1.5 py-0.5 rounded animate-pulse">Live</span>
            </div>

            {/* List of activity items */}
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {timeline.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-3 card-glass-static border border-white/[0.03] rounded-lg text-left text-xs space-y-1 relative group hover:border-[#38bdf8]/20 transition-all"
                  >
                    <div className="flex items-center justify-between text-[9px] text-gray-500 font-mono">
                      <span>{event.time}</span>
                      <span className="uppercase tracking-wider text-[8px] text-gray-600 group-hover:text-[#38bdf8] transition-colors">{event.type}</span>
                    </div>
                    <p className="text-gray-300 leading-normal font-sans pr-1">{event.text}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-white/[0.04] pt-4 mt-6 text-center">
            <p className="text-[10px] text-gray-500 font-mono">Operations status: 100% Automated</p>
            <p className="text-[9px] text-gray-600 font-mono mt-0.5">Last Sync: Just now</p>
          </div>
        </aside>

      </div>

    </div>
  );
}
