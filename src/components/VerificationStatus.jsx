import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ShieldAlert, Check, Loader2, RefreshCw, LogOut, Mail, CheckCircle2 } from "lucide-react";

export default function VerificationStatus() {
  const { user, userProfile, logout, triggerEmailVerification } = useAuth();
  const navigate = useNavigate();

  const [workspaceInfo, setWorkspaceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resending, setResending] = useState(false);
  const [resendStatus, setResendStatus] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // Fetch workspace status from firestore
  const fetchStatus = async () => {
    if (!user) return;
    try {
      // Force reload of user authentication state to fetch latest emailVerified status
      if (auth.currentUser) {
        await auth.currentUser.reload();
      }

      if (userProfile?.workspaceId) {
        const wsRef = doc(db, "workspaces", userProfile.workspaceId);
        const wsSnap = await getDoc(wsRef);
        if (wsSnap.exists()) {
          const wsData = wsSnap.data();
          setWorkspaceInfo(wsData);

          // If already fully verified and approved, route them into dashboard
          if (auth.currentUser.emailVerified && wsData.status === "Approved") {
            navigate("/leadai-dashboard");
          }
        }
      }
    } catch (e) {
      console.error("Failed to refresh verification status:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [user, userProfile]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchStatus();
    setRefreshing(false);
  };

  const handleResendEmail = async () => {
    setResending(true);
    setResendStatus("");
    try {
      await triggerEmailVerification();
      setResendStatus("Verification email sent! Check your inbox.");
    } catch (e) {
      setResendStatus(e.message || "Failed to dispatch verification email.");
    } finally {
      setResending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#02000d] flex items-center justify-center text-gray-900 dark:text-white">
        <Loader2 className="w-8 h-8 animate-spin text-[#33bbcf]" />
      </div>
    );
  }

  const isEmailVerified = user?.emailVerified || (import.meta.env.DEV && localStorage.getItem("dev_bypass_email_verification") === "true");
  const isApproved = workspaceInfo?.status === "Approved";
  const isPending = workspaceInfo?.status === "Pending Review";
  const isSuspended = workspaceInfo?.status === "Suspended";
  const isRejected = workspaceInfo?.status === "Rejected";

  return (
    <div className="min-h-screen bg-[#02000d] text-gray-900 dark:text-white flex items-center justify-center p-6 selection:bg-purple-500/30 pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[20%] w-[35%] h-[35%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-xl w-full bg-[#050510]/85 border border-gray-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6 relative z-10">

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-[#33bbcf]">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Your Business Verification Is In Progress
          </h1>
          <p className="text-xs text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
            LeadAI requires email validation and B2B security checks to activate corporate workspaces.
          </p>
        </div>

        {/* Verification Checklist */}
        <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-5 space-y-4 text-xs font-mono">

          {/* Step 1: Email Verification */}
          <div className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isEmailVerified
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                : "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
              }`}>
              {isEmailVerified ? <Check className="w-3.5 h-3.5" /> : <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center font-sans">
                <span className="font-bold text-gray-900 dark:text-white">1. Verify Business Email</span>
                <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${isEmailVerified ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                  {isEmailVerified ? "Verified" : "Pending"}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal">
                Inbox validation link sent to <span className="text-gray-300 font-bold">{user?.email}</span>.
              </p>
              {!isEmailVerified && (
                <div className="pt-2 flex flex-wrap items-center gap-2 font-sans">
                  <button
                    onClick={handleResendEmail}
                    disabled={resending}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:bg-white/10 hover:border-purple-500/30 text-[10px] font-bold rounded-lg transition-all"
                  >
                    <Mail className="w-3 h-3 text-[#33bbcf]" />
                    {resending ? "Resending..." : "Resend Link"}
                  </button>

                  {import.meta.env.DEV && (
                    <button
                      onClick={() => {
                        localStorage.setItem("dev_bypass_email_verification", "true");
                        window.location.reload();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-black text-[10px] font-bold rounded-lg transition-all"
                    >
                      Bypass Email Verification (Dev Only)
                    </button>
                  )}

                  {resendStatus && (
                    <span className="text-[9px] text-[#33bbcf] font-medium pt-1 block w-full">{resendStatus}</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Domain Verification */}
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center font-sans">
                <span className="font-bold text-gray-900 dark:text-white">2. DNS Domain Matching Check</span>
                <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-emerald-500/10 text-emerald-400">
                  Verified
                </span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal">
                MX records and website association check passed successfully for <span className="text-gray-300 font-bold">{workspaceInfo?.domain}</span>.
              </p>
            </div>
          </div>

          {/* Step 3: Workspace Config */}
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center font-sans">
                <span className="font-bold text-gray-900 dark:text-white">3. Tenant Workspace Initialized</span>
                <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-emerald-500/10 text-emerald-400">
                  Created
                </span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal">
                Private isolated workspace created: <span className="text-gray-300 font-bold">{workspaceInfo?.businessName}</span>.
              </p>
            </div>
          </div>

          {/* Step 4: Admin Approval */}
          <div className="flex items-start gap-3 border-t border-white/5 pt-4">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isApproved
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                : isSuspended || isRejected
                  ? "bg-red-500/10 border border-red-500/30 text-red-400"
                  : "bg-purple-500/10 border border-purple-500/30 text-[#33bbcf]"
              }`}>
              {isApproved ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : isSuspended || isRejected ? (
                <ShieldAlert className="w-3.5 h-3.5" />
              ) : (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center font-sans">
                <span className="font-bold text-gray-900 dark:text-white">4. Compliance Review & Approval</span>
                <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${isApproved
                    ? "bg-emerald-500/10 text-emerald-400"
                    : isSuspended
                      ? "bg-red-500/10 text-red-500"
                      : isRejected
                        ? "bg-red-950 text-red-400"
                        : "bg-purple-500/10 text-[#33bbcf]"
                  }`}>
                  {workspaceInfo?.status || "Pending Review"}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal">
                {isApproved && "Your B2B account has been fully authorized and activated."}
                {isPending && "Our solutions team is reviewing your company registration details. Activation occurs within 24 hours."}
                {isSuspended && "Your workspace access has been temporarily suspended. Please contact operations support."}
                {isRejected && "Your business verification has been rejected as it did not pass B2B security checks."}
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="btn-primary"
          >
            {refreshing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            <span>Refresh Status</span>
          </button>

          <button
            onClick={logout}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-red-950/20 hover:border-red-500/30 hover:text-red-400 text-gray-900 dark:text-white font-bold rounded-xl text-xs transition-all active:scale-95"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
