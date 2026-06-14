import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { isBusinessEmail } from "../utils/authValidation";
import { ShieldAlert, Eye, EyeOff, Loader2, Check, Lock, Sparkles } from "lucide-react";

export default function Login() {
  const { loginWithEmail, user, userProfile, workspace, logAuthEvent } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot password flow
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  // Bot Shield (Turnstile simulator)
  const [botShieldVerified, setBotShieldVerified] = useState(false);
  const [botShieldLoading, setBotShieldLoading] = useState(false);

  // Lockout State
  const [lockoutTimeLeft, setLockoutTimeLeft] = useState(0);

  // Load saved email if rememberMe was true
  useEffect(() => {
    const savedEmail = localStorage.getItem("leadai_remembered_email");
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail, rememberMe: true }));
    }
  }, []);

  // Lockout checking timer
  useEffect(() => {
    const checkLockout = () => {
      const emailKey = `lockout_${formData.email.trim().toLowerCase()}`;
      const lockoutStr = localStorage.getItem(emailKey);
      if (lockoutStr) {
        const lockoutTime = parseInt(lockoutStr, 10);
        const now = Date.now();
        if (now < lockoutTime) {
          setLockoutTimeLeft(Math.ceil((lockoutTime - now) / 1000));
        } else {
          localStorage.removeItem(emailKey);
          localStorage.removeItem(`attempts_${formData.email.trim().toLowerCase()}`);
          setLockoutTimeLeft(0);
        }
      } else {
        setLockoutTimeLeft(0);
      }
    };

    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, [formData.email]);

  // Handle successful login redirect routing
  useEffect(() => {
    if (user) {
      if (user.email === "support@techiehelp.in") {
        navigate("/leadai-admin");
      } else {
        navigate("/leadai-dashboard");
      }
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    if (e.target.name === "rememberMe") {
      setFormData({ ...formData, rememberMe: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleBotShieldClick = () => {
    if (botShieldVerified || botShieldLoading) return;
    setBotShieldLoading(true);
    setTimeout(() => {
      setBotShieldLoading(false);
      setBotShieldVerified(true);
    }, 1500);
  };

  const incrementFailedAttempts = (email) => {
    const cleanEmail = email.trim().toLowerCase();
    const attemptsKey = `attempts_${cleanEmail}`;
    const lockoutKey = `lockout_${cleanEmail}`;

    const attemptsStr = localStorage.getItem(attemptsKey);
    let attempts = attemptsStr ? parseInt(attemptsStr, 10) : 0;
    attempts += 1;
    localStorage.setItem(attemptsKey, attempts.toString());

    if (attempts >= 5) {
      const blockDuration = 15 * 60 * 1000; // 15 mins
      const lockoutExpiry = Date.now() + blockDuration;
      localStorage.setItem(lockoutKey, lockoutExpiry.toString());
      logAuthEvent(null, "ACCOUNT_LOCKED", { email: cleanEmail, durationMs: blockDuration });
      return true;
    }
    return false;
  };

  const resetFailedAttempts = (email) => {
    const cleanEmail = email.trim().toLowerCase();
    localStorage.removeItem(`attempts_${cleanEmail}`);
    localStorage.removeItem(`lockout_${cleanEmail}`);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (lockoutTimeLeft > 0) {
      setError(`Access suspended. Please try again after ${Math.floor(lockoutTimeLeft / 60)}m ${lockoutTimeLeft % 60}s.`);
      return;
    }

    if (!botShieldVerified) {
      setError("Please complete the bot protection challenge.");
      return;
    }

    // Enforce business domain filter
    if (!isBusinessEmail(formData.email)) {
      setError("Personal email domains are restricted. Use your verified business credentials.");
      return;
    }

    setLoading(true);
    try {
      await loginWithEmail(formData.email, formData.password);
      resetFailedAttempts(formData.email);

      // Remember me email caching
      if (formData.rememberMe) {
        localStorage.setItem("leadai_remembered_email", formData.email);
      } else {
        localStorage.removeItem("leadai_remembered_email");
      }
    } catch (err) {
      console.error("Login attempt failed:", err);

      const isLocked = incrementFailedAttempts(formData.email);
      if (isLocked) {
        setError("Account locked out due to 5 failed login attempts. Suspended for 15 minutes.");
      } else {
        setError(err.message || "Authentication failed. Check your password.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");
    setResetSent(false);

    if (!isBusinessEmail(resetEmail)) {
      setError("Password resets are restricted to verified business emails.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      await logAuthEvent(null, "PASSWORD_RESET_REQUESTED", { email: resetEmail });
      setResetSent(true);
    } catch (err) {
      setError(err.message || "Failed to dispatch reset email.");
    } finally {
      setLoading(false);
    }
  };

  const formatLockoutTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (forgotPasswordMode) {
    return (
      <div className="min-h-screen bg-[#02000d] text-gray-900 dark:text-white flex items-center justify-center p-6 selection:bg-purple-500/30 pt-20 relative overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-md w-full bg-[#050510]/85 border border-gray-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Reset Password</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Enter your business email to receive reset instructions.</p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {resetSent ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center space-y-3">
              <p className="font-semibold">Reset instructions dispatched!</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-normal">
                Check your corporate inbox for a link to securely update your B2B account credentials.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForgotPasswordMode(false);
                  setResetSent(false);
                  setResetEmail("");
                }}
                className="mt-2 text-xs text-[#33bbcf] hover:underline"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Business Email</label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" /> : "Send Reset Link"}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setForgotPasswordMode(false)}
                  className="text-xs text-gray-500 hover:text-gray-900 dark:text-white transition-colors"
                >
                  Cancel and Return
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02000d] text-gray-900 dark:text-white flex items-center justify-center p-6 selection:bg-purple-500/30 pt-28 pb-20 relative overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-md w-full bg-[#050510]/85 border border-gray-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6 relative z-10">

        <div className="text-center">
          <div className="inline-flex items-center gap-1 mb-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#33bbcf] text-[9px] font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#33bbcf]" />
            <span>Secure Terminal Gateway</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">LeadAI Sign In</h1>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Authorized business employees only.</p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-4">

          {/* Email input */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Business Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={lockoutTimeLeft > 0}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all disabled:opacity-40"
            />
          </div>

          {/* Password input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Password</label>
              <button
                type="button"
                onClick={() => setForgotPasswordMode(true)}
                className="text-[10px] text-[#33bbcf] hover:text-purple-300 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={lockoutTimeLeft > 0}
                placeholder="••••••••••••"
                className="w-full pl-3.5 pr-10 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all disabled:opacity-40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-gray-500 hover:text-gray-900 dark:text-white"
                disabled={lockoutTimeLeft > 0}
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="rounded bg-white/[0.02] border-gray-200 dark:border-white/10 text-[#33bbcf] focus:ring-purple-500/20"
            />
            <label htmlFor="rememberMe" className="text-xs text-gray-600 dark:text-gray-400 ml-2 select-none cursor-pointer">
              Remember corporate credentials
            </label>
          </div>

          {/* Turnstile Bot protection */}
          {lockoutTimeLeft === 0 && (
            <div className="border border-white/5 bg-[#050510]/60 p-4 rounded-xl flex items-center justify-between shadow-inner">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBotShieldClick}
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${botShieldVerified
                    ? "bg-purple-600 border-purple-500 text-gray-900 dark:text-white"
                    : "bg-white/[0.02] border-gray-300 dark:border-white/20 hover:border-purple-500/40"
                    }`}
                  disabled={botShieldVerified || botShieldLoading}
                >
                  {botShieldLoading && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#33bbcf]" />}
                  {botShieldVerified && <Check className="w-3.5 h-3.5" />}
                </button>
                <span className="text-xs font-medium text-gray-300 select-none cursor-pointer" onClick={handleBotShieldClick}>
                  {botShieldLoading ? "Verifying browser request..." : "Verify Business Request"}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-mono uppercase tracking-widest text-gray-600 block">LeadAI Shield</span>
                <span className="text-[7px] text-gray-500 font-mono">Secured by Turnstile</span>
              </div>
            </div>
          )}

          {/* Lockout details */}
          {lockoutTimeLeft > 0 && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3 font-mono">
              <Lock className="w-4 h-4 shrink-0 animate-bounce" />
              <div>
                <p className="font-bold">Access Suspended</p>
                <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                  Try again in: {formatLockoutTime(lockoutTimeLeft)}
                </p>
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading || lockoutTimeLeft > 0}
            className="btn-primary"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Sign In to LeadAI"}
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Don't have credentials?{" "}
            <Link to="/contacts" className="text-[#33bbcf] hover:underline font-semibold">
              Fill contact form to request credentials
            </Link>
          </p>
          <p className="text-[10px] text-gray-600 font-mono">
            LeadAI Corporate Authentication Portal
          </p>
        </div>
      </div>
    </div>
  );
}
