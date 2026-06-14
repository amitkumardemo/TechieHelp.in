import { useState, useEffect, useCallback, useRef } from "react";
import {
  Mail, RefreshCw, Search, Filter, ChevronRight, Inbox,
  Star, AlertCircle, Zap, MessageSquare, Send, RotateCcw,
  Edit3, Archive, Clock, ExternalLink, X, Loader2, CheckCircle,
  TrendingUp, Shield
} from "lucide-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3001";

const TABS = [
  { id: "all", label: "All", icon: Inbox },
  { id: "unread", label: "Unread", icon: Mail },
  { id: "high", label: "High Priority", icon: AlertCircle },
  { id: "hot", label: "Hot Leads", icon: Zap },
  { id: "replied", label: "Replied", icon: MessageSquare },
  { id: "archived", label: "Archived", icon: Archive },
];

const TONES = ["Professional", "Friendly", "Sales", "Formal", "Startup"];

function getPriorityColor(priority) {
  if (priority === "HIGH") return "text-red-400 border-red-500/30 bg-red-500/[0.06]";
  if (priority === "MEDIUM") return "text-amber-400 border-amber-500/30 bg-amber-500/[0.06]";
  return "text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 bg-white/[0.02]";
}

function getSentimentIcon(sentiment) {
  if (sentiment === "POSITIVE") return "�";
  if (sentiment === "NEGATIVE") return "�";
  return "�";
}

function getScoreColor(score) {
  if (score >= 80) return "text-green-400";
  if (score >= 60) return "text-amber-400";
  if (score >= 40) return "text-blue-400";
  return "text-gray-500";
}

function formatTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now - d;
  if (diff < 60000) return "Just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
}

export default function GmailInbox({ workspaceId, gmailEmail, onConnect }) {
  const [activeTab, setActiveTab] = useState("all");
  const [emails, setEmails] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [aiReplyId, setAiReplyId] = useState(null);
  const [editingReply, setEditingReply] = useState(false);
  const [generatingReply, setGeneratingReply] = useState(false);
  const [sendingReply, setSendingReply] = useState(false);
  const [replySent, setReplySent] = useState(false);
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [syncResult, setSyncResult] = useState(null);
  const replyRef = useRef(null);

  const fetchEmails = useCallback(async () => {
    if (!workspaceId) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({
        workspaceId,
        tab: activeTab,
        ...(search && { search }),
        limit: "25",
      });
      const res = await fetch(`${BACKEND}/api/gmail/emails?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setEmails(data.emails ?? []);
      setTotal(data.total ?? 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [workspaceId, activeTab, search]);

  useEffect(() => { fetchEmails(); }, [fetchEmails]);

  const handleSync = async () => {
    if (!workspaceId || syncing) return;
    setSyncing(true);
    setSyncResult(null);
    try {
      const res = await fetch(`${BACKEND}/api/gmail/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId, maxResults: 25 }),
      });
      const data = await res.json();
      setSyncResult(data);
      await fetchEmails();
    } catch (err) {
      console.error(err);
    } finally {
      setSyncing(false);
    }
  };

  const handleSelectEmail = async (email) => {
    setSelectedEmail(email);
    setAiReply("");
    setAiReplyId(null);
    setReplySent(false);
    setEditingReply(false);

    // Mark as read locally
    if (!email.isRead) {
      setEmails(prev => prev.map(e => e.id === email.id ? { ...e, isRead: true } : e));
    }

    // Fetch full email detail
    try {
      const res = await fetch(
        `${BACKEND}/api/gmail/emails/${email.id}?workspaceId=${workspaceId}`
      );
      if (res.ok) {
        const full = await res.json();
        setSelectedEmail(full);
        // Load existing draft reply if any
        if (full.aiReplies?.[0]?.status === "DRAFT") {
          setAiReply(full.aiReplies[0].generatedReply);
          setAiReplyId(full.aiReplies[0].id);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateReply = async () => {
    if (!selectedEmail) return;
    setGeneratingReply(true);
    setAiReply("");
    try {
      const res = await fetch(`${BACKEND}/api/gmail/reply/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId,
          emailId: selectedEmail.id,
          tone: selectedTone,
        }),
      });
      const data = await res.json();
      if (data.reply) {
        setAiReply(data.reply);
        setAiReplyId(data.id);
        setEditingReply(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingReply(false);
    }
  };

  const handleSendReply = async () => {
    if (!selectedEmail || !aiReply) return;
    setSendingReply(true);
    try {
      const senderEmail = selectedEmail.sender.match(/<([^>]+)>/)?.[1] ?? selectedEmail.sender;
      const res = await fetch(`${BACKEND}/api/gmail/reply/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId,
          emailId: selectedEmail.id,
          aiReplyId,
          replyText: aiReply,
          to: senderEmail,
          subject: `Re: ${selectedEmail.subject}`,
        }),
      });
      if (res.ok) {
        setReplySent(true);
        setEmails(prev => prev.map(e => e.id === selectedEmail.id ? { ...e, status: "REPLIED" } : e));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSendingReply(false);
    }
  };

  const handleArchive = async (emailId) => {
    try {
      await fetch(`${BACKEND}/api/gmail/emails/${emailId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId, isArchived: true }),
      });
      setEmails(prev => prev.filter(e => e.id !== emailId));
      if (selectedEmail?.id === emailId) setSelectedEmail(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  // If Gmail not connected — show connect CTA
  if (!gmailEmail) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Mail className="w-10 h-10 text-[#33bbcf]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Connect Your Gmail</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Connect your Gmail account to automatically sync emails, get AI lead scoring, and generate professional replies — all inside LeadAI.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { icon: TrendingUp, label: "Lead Scoring" },
              { icon: Zap, label: "AI Replies" },
              { icon: Shield, label: "Secure OAuth" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="card-glass flex flex-col">
                <Icon className="w-4 h-4 text-[#38bdf8] mx-auto mb-1" />
                <p className="text-[10px] text-gray-500">{label}</p>
              </div>
            ))}
          </div>
          <button
            onClick={onConnect}
            className="w-full py-3 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Connect Gmail with Google
          </button>
          <p className="text-[10px] text-gray-600">
            We only request read + send permissions. Your credentials are never stored on our servers without encryption.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <div>
          <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">AI Inbox</h2>
          <p className="text-[10px] text-gray-500 mt-0.5 font-mono">
            {gmailEmail} · {total} emails
          </p>
        </div>
        <div className="flex items-center gap-2">
          {syncResult && (
            <span className="text-[10px] text-green-400 font-mono">
              ✓ {syncResult.synced} new synced
            </span>
          )}
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-gray-900 dark:text-white rounded-lg text-[10px] font-mono transition-all"
          >
            <RefreshCw className={`w-3 h-3 ${syncing ? "animate-spin" : ""}`} />
            {syncing ? "Syncing..." : "Sync Now"}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="relative mb-3 flex-shrink-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600" />
        <input
          type="text"
          placeholder="Search sender, subject, keyword..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className="w-full pl-9 pr-20 py-2 bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-[#38bdf8]/10 text-[#38bdf8] rounded text-[9px] font-mono">
          Search
        </button>
      </form>

      {/* Sub-tabs */}
      <div className="flex gap-1 mb-4 flex-shrink-0 overflow-x-auto scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSelectedEmail(null); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-mono whitespace-nowrap transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                : "text-gray-500 hover:text-gray-900 dark:text-white hover:bg-white/[0.04]"
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main split layout */}
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0 overflow-y-auto md:overflow-y-hidden">
        {/* Email List */}
        <div className={`flex flex-col ${selectedEmail ? "max-h-64 md:max-h-none md:w-2/5" : "w-full"} min-h-0 flex-shrink-0 md:flex-shrink`}>
          <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-5 h-5 text-[#38bdf8] animate-spin" />
              </div>
            ) : emails.length === 0 ? (
              <div className="text-center py-20">
                <Inbox className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                <p className="text-xs text-gray-600">No emails in this view</p>
                <button onClick={handleSync} className="mt-3 text-[10px] text-[#38bdf8] hover:underline">
                  Sync Now
                </button>
              </div>
            ) : (
              emails.map(email => (
                <button
                  key={email.id}
                  onClick={() => handleSelectEmail(email)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    selectedEmail?.id === email.id
                      ? "border-[#38bdf8]/30 bg-[#38bdf8]/[0.05]"
                      : "border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        {!email.isRead && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                        )}
                        <p className={`text-[11px] truncate ${email.isRead ? "text-gray-600 dark:text-gray-400" : "text-gray-900 dark:text-white font-semibold"}`}>
                          {email.sender.replace(/<[^>]+>/, "").trim() || email.sender}
                        </p>
                      </div>
                      <p className="text-[10px] text-gray-600 dark:text-gray-400 truncate mb-1">
                        {email.subject ?? "(no subject)"}
                      </p>
                      <p className="text-[9px] text-gray-600 truncate">
                        {email.snippet}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-[9px] text-gray-600 font-mono">
                        {formatTime(email.receivedAt)}
                      </span>
                      {email.leadScore > 0 && (
                        <span className={`text-[9px] font-bold font-mono ${getScoreColor(email.leadScore)}`}>
                          {email.leadScore}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {email.priority && (
                      <span className={`text-[8px] font-mono px-1 py-0.5 rounded border ${getPriorityColor(email.priority)}`}>
                        {email.priority}
                      </span>
                    )}
                    {email.intent && (
                      <span className="text-[8px] text-gray-600 font-mono truncate">
                        {email.intent}
                      </span>
                    )}
                    {email.status === "REPLIED" && (
                      <span className="text-[8px] text-[#38bdf8] font-mono ml-auto">Replied ✓</span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Email Detail Panel */}
        {selectedEmail && (
          <div className="flex-1 min-w-0 flex flex-col border-l border-white/[0.04] pl-4 min-h-0">
            {/* Email header */}
            <div className="flex items-start justify-between mb-4 flex-shrink-0">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                  {selectedEmail.subject ?? "(no subject)"}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {selectedEmail.sender}
                  </span>
                  <span>
                    <Clock className="w-3 h-3 inline mr-1" />
                    {formatTime(selectedEmail.receivedAt)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleArchive(selectedEmail.id)}
                  title="Archive"
                  className="p-1.5 hover:bg-white/[0.04] text-gray-600 hover:text-amber-400 rounded-lg transition-all"
                >
                  <Archive className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="p-1.5 hover:bg-white/[0.04] text-gray-600 hover:text-gray-900 dark:text-white rounded-lg transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* AI Analysis Bar */}
            <div className="grid grid-cols-4 gap-2 mb-4 flex-shrink-0">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                <p className={`text-lg font-black ${getScoreColor(selectedEmail.leadScore)}`}>
                  {selectedEmail.leadScore}
                </p>
                <p className="text-[9px] text-gray-600 font-mono">LEAD SCORE</p>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                <p className={`text-xs font-bold ${
                  selectedEmail.priority === "HIGH" ? "text-red-400" :
                  selectedEmail.priority === "MEDIUM" ? "text-amber-400" : "text-gray-600 dark:text-gray-400"
                }`}>{selectedEmail.priority ?? "—"}</p>
                <p className="text-[9px] text-gray-600 font-mono">PRIORITY</p>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                <p className="text-xs font-bold text-[#38bdf8] truncate">{selectedEmail.intent ?? "—"}</p>
                <p className="text-[9px] text-gray-600 font-mono">INTENT</p>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                <p className="text-lg">{getSentimentIcon(selectedEmail.sentiment)}</p>
                <p className="text-[9px] text-gray-600 font-mono">SENTIMENT</p>
              </div>
            </div>

            {/* AI Summary */}
            {selectedEmail.aiSummary && (
              <div className="mb-4 p-3 rounded-xl bg-[#38bdf8]/[0.04] border border-[#38bdf8]/[0.12] flex-shrink-0">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-3 h-3 text-[#38bdf8]" />
                  <span className="text-[9px] font-mono text-[#38bdf8] uppercase">AI Summary</span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">{selectedEmail.aiSummary}</p>
              </div>
            )}

            {/* Email body */}
            <div className="flex-1 overflow-y-auto scrollbar-hide mb-4 min-h-0">
              <div className="card-glass flex flex-col">
                <p className="text-[10px] text-gray-500 font-mono uppercase mb-2">Email Content</p>
                <pre className="text-[11px] text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedEmail.body || selectedEmail.snippet}
                </pre>
              </div>
            </div>

            {/* AI Reply Section */}
            {!replySent ? (
              <div className="flex-shrink-0 border-t border-white/[0.04] pt-4 space-y-3">
                {!aiReply ? (
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedTone}
                      onChange={e => setSelectedTone(e.target.value)}
                      className="bg-white/[0.03] border border-white/[0.06] text-gray-600 dark:text-gray-400 text-[10px] font-mono py-1.5 px-2 rounded-lg outline-none cursor-pointer"
                    >
                      {TONES.map(t => (
                        <option key={t} value={t} className="bg-[#05050a]">{t}</option>
                      ))}
                    </select>
                    <button
                      onClick={handleGenerateReply}
                      disabled={generatingReply}
                      className="flex-1 py-2 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/20 text-[#38bdf8] rounded-lg text-[11px] font-bold font-mono transition-all flex items-center justify-center gap-1.5"
                    >
                      {generatingReply ? (
                        <><Loader2 className="w-3 h-3 animate-spin" /> Generating with Gemini...</>
                      ) : (
                        <><Zap className="w-3.5 h-3.5" /> Generate AI Reply</>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#38bdf8] uppercase flex items-center gap-1">
                        <Zap className="w-3 h-3" /> AI Generated Reply
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingReply(!editingReply)}
                          className="flex items-center gap-1 px-2 py-1 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white rounded text-[9px] font-mono transition-all"
                        >
                          <Edit3 className="w-2.5 h-2.5" /> Edit
                        </button>
                        <button
                          onClick={handleGenerateReply}
                          disabled={generatingReply}
                          className="flex items-center gap-1 px-2 py-1 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white rounded text-[9px] font-mono transition-all"
                        >
                          <RotateCcw className="w-2.5 h-2.5" /> Regenerate
                        </button>
                      </div>
                    </div>
                    <textarea
                      ref={replyRef}
                      value={aiReply}
                      onChange={e => setAiReply(e.target.value)}
                      readOnly={!editingReply}
                      rows={8}
                      className={`w-full p-3 rounded-xl text-[11px] text-gray-200 leading-relaxed resize-none font-mono outline-none transition-all ${
                        editingReply
                          ? "bg-white/[0.04] border border-[#38bdf8]/30 focus:border-[#38bdf8]/60"
                          : "bg-white/[0.02] border border-white/[0.04]"
                      }`}
                    />
                    <button
                      onClick={handleSendReply}
                      disabled={sendingReply}
                      className="w-full py-2.5 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] font-black text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {sendingReply ? (
                        <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-3.5 h-3.5" /> Send Reply via Gmail</>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-shrink-0 border-t border-white/[0.04] pt-4">
                <div className="flex items-center gap-2 justify-center py-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-400 font-bold">Reply sent successfully!</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
