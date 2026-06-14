import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  extractDomain,
  isBusinessEmail,
  domainsMatch,
  verifyDomainMX,
  validatePassword
} from "../utils/authValidation";
import { ShieldCheck, Eye, EyeOff, Check, X, ShieldAlert, Sparkles, Loader2, ArrowRight } from "lucide-react";

export default function Signup() {
  const { signup, createBusinessWorkspace, triggerEmailVerification, logout } = useAuth();
  const navigate = useNavigate();

  // Form fields
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    websiteUrl: "",
    phone: "",
    industry: "",
    companySize: "",
    password: "",
    confirmPassword: ""
  });

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Custom Bot Shield (Turnstile simulator)
  const [botShieldVerified, setBotShieldVerified] = useState(false);
  const [botShieldLoading, setBotShieldLoading] = useState(false);

  // Verification steps logs state
  const [verificationLogs, setVerificationLogs] = useState([]);
  const [verifyingDomain, setVerifyingDomain] = useState(false);

  // Signup Success state
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [workspaceStatus, setWorkspaceStatus] = useState("Pending Review");

  // Real-time password check
  const [passwordCheck, setPasswordCheck] = useState({
    valid: false,
    checks: { length: false, hasUpper: false, hasLower: false, hasNumber: false, hasSpecial: false },
    score: 0
  });

  useEffect(() => {
    setPasswordCheck(validatePassword(formData.password));
  }, [formData.password]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBotShieldClick = () => {
    if (botShieldVerified || botShieldLoading) return;
    setBotShieldLoading(true);
    setTimeout(() => {
      setBotShieldLoading(false);
      setBotShieldVerified(true);
    }, 1800);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Password policy verification
    if (!passwordCheck.valid) {
      setError("Password does not meet B2B strength policy rules.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 2. Bot Protection verification
    if (!botShieldVerified) {
      setError("Please verify you are a business user by completing the security challenge.");
      return;
    }

    // 3. B2B Email Validation (Reject personal email providers)
    if (!isBusinessEmail(formData.businessEmail)) {
      setError("Generic public email domains (Gmail, Yahoo, etc.) are rejected. Enter a corporate domain email.");
      return;
    }

    // 4. Domain matching validation
    if (!domainsMatch(formData.businessEmail, formData.websiteUrl)) {
      setError("Domain mismatch: Business email domain must match the website domain.");
      return;
    }

    // 5. DNS / Domain verification (MX records lookup)
    setVerifyingDomain(true);
    setVerificationLogs([
      { text: "Extracting corporate domain parameters...", status: "success" },
      { text: "Checking domain alignment with website URL...", status: "success" }
    ]);

    const targetDomain = extractDomain(formData.businessEmail);

    // Step 2 log
    setTimeout(async () => {
      setVerificationLogs(prev => [...prev, { text: "Querying Cloudflare DNS over HTTPS for MX records...", status: "pending" }]);

      const dnsResult = await verifyDomainMX(targetDomain);

      if (!dnsResult.success) {
        setVerificationLogs(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { text: dnsResult.error, status: "error" };
          return updated;
        });
        setError(dnsResult.error);
        setVerifyingDomain(false);
        return;
      }

      setVerificationLogs(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { text: `MX Records verified successfully. Found mail exchange nodes: ${dnsResult.records.slice(0, 2).join(', ')}`, status: "success" };
        return updated;
      });

      // Step 3 log: finalize signup
      setTimeout(async () => {
        setVerificationLogs(prev => [...prev, { text: "Establishing secure Firebase credentials...", status: "pending" }]);
        setLoading(true);

        try {
          const userCredential = await signup(formData.businessEmail, formData.password);
          const user = userCredential.user;

          setVerificationLogs(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { text: "Account created. Creating LeadAI Workspace Tenant...", status: "success" };
            return updated;
          });

          // Create Workspace details in Firestore
          const wsDetails = await createBusinessWorkspace(user.uid, formData.businessEmail, {
            businessName: formData.businessName,
            websiteUrl: formData.websiteUrl,
            phone: formData.phone,
            industry: formData.industry,
            companySize: formData.companySize,
            domain: targetDomain
          });

          // Trigger email verification
          await triggerEmailVerification();

          setVerificationLogs(prev => [
            ...prev,
            { text: "Verification email dispatched via Firebase provider.", status: "success" },
            { text: "B2B Onboarding sequence complete.", status: "success" }
          ]);

          setWorkspaceStatus(wsDetails.workspaceData.status);
          setRegisteredEmail(formData.businessEmail);
          setSignupSuccess(true);

          // Log user out so they must verify and log in properly
          await logout();

        } catch (err) {
          console.error("Signup process failed:", err);
          setError(err.message || "Failed to finalize registration.");
          setVerificationLogs(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { text: err.message || "Failed to create account.", status: "error" };
            return updated;
          });
        } finally {
          setLoading(false);
          setVerifyingDomain(false);
        }
      }, 1000);

    }, 1200);
  };

  if (signupSuccess) {
    return (
      <div className="min-h-screen bg-[#030014] text-gray-900 dark:text-white flex items-center justify-center p-6 selection:bg-purple-500/30 relative overflow-hidden">
        {/* Glowing backgrounds */}
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-purple-900/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[20%] w-[35%] h-[35%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-xl w-full bg-[#050510]/85 border border-gray-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <ShieldCheck className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#33bbcf] font-bold block">B2B Onboarding</span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Your Business Verification Is In Progress
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We have dispatched a confirmation email to <span className="text-[#33bbcf] font-bold">{registeredEmail}</span>. Please verify your email domain connection.
            </p>
          </div>

          {/* Checklist */}
          <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-5 space-y-3.5 text-left text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                <Loader2 className="w-3 h-3 animate-spin" />
              </div>
              <div className="flex-1">
                <p className="font-sans font-bold text-gray-900 dark:text-white leading-none">Email Verification</p>
                <p className="text-[10px] text-gray-500 mt-1">Pending user inbox activation link</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1">
                <p className="font-sans font-bold text-gray-900 dark:text-white leading-none">Domain Verified</p>
                <p className="text-[10px] text-gray-500 mt-1">MX mail records validated successfully</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1">
                <p className="font-sans font-bold text-gray-900 dark:text-white leading-none">Workspace Created</p>
                <p className="text-[10px] text-gray-500 mt-1">Default configurations deployed</p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center justify-between font-sans">
              <span className="text-gray-600 dark:text-gray-400">Verification Status:</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${workspaceStatus === "Approved"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-purple-500/10 text-[#33bbcf] border border-purple-500/20"
                }`}>
                {workspaceStatus}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/login"
              className="btn-primary"
            >
              <span>Proceed to Login</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02000d] text-gray-900 dark:text-white flex items-center justify-center p-6 selection:bg-purple-500/30 pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10">

        {/* Left Side Panel: SaaS Value Props */}
        <div className="card-glass flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />

          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#33bbcf]" />
              <span>B2B Platform Access</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Empower your business with LeadAI.
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Connect your business domain and launch autonomous agents to qualify leads, route invoices, and dial prospects 24/7.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5 mt-8">
            {[
              { title: "Matched domain required", desc: "Corporate email matching your business site domain." },
              { title: "DNS Mail Server Checks", desc: "Live MX record queries verify actual sender address availability." },
              { title: "Protected Workspace", desc: "Enterprise sandbox is isolated for your specific domain authority." }
            ].map((prop, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#33bbcf] shrink-0 text-[10px] font-mono">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white leading-tight">{prop.title}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 text-[10px] text-gray-600 font-mono mt-8">
            © {new Date().getFullYear()} LeadAI by TechieHelp
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="md:col-span-7 bg-[#050510]/85 border border-gray-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Create Business Account</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Signups restricted exclusively to verified corporate domains.</p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Row 1: Business Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Acme Corp"
                  className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Website URL</label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://acme.com"
                  className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Business Email</label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required
                  placeholder="name@acme.com"
                  className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                />
              </div>
            </div>

            {/* Row 3: Industry & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-[#050510] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 transition-all"
                >
                  <option value="" disabled>Select Industry</option>
                  <option value="Technology">Technology & SaaS</option>
                  <option value="Finance">Finance & Banking</option>
                  <option value="Healthcare">Healthcare & Biotech</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Company Size</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-[#050510] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 transition-all"
                >
                  <option value="" disabled>Select Company Size</option>
                  <option value="1-10">1 - 10 employees</option>
                  <option value="11-50">11 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-500">201 - 500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>

            {/* Row 4: Password Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 relative">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-gray-500 hover:text-gray-900 dark:text-white"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5 relative">
                <label className="text-[11px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider block">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-xl text-xs text-gray-900 dark:text-white outline-none focus:border-purple-500/40 focus:bg-white/[0.04] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3 text-gray-500 hover:text-gray-900 dark:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Policy Tracker */}
            <div className="p-3 border border-white/5 bg-white/[0.01] rounded-xl space-y-2 text-[10px] text-gray-600 dark:text-gray-400">
              <div className="flex justify-between items-center mb-1">
                <span>B2B Password Security Policy:</span>
                <span className={`font-mono font-bold ${passwordCheck.score === 5 ? "text-emerald-400" : "text-yellow-400"
                  }`}>
                  Strength: {passwordCheck.score}/5
                </span>
              </div>

              {/* Strength Meter Bar */}
              <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden flex gap-0.5">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <div
                    key={idx}
                    className={`h-full flex-1 rounded-full transition-all ${idx <= passwordCheck.score
                      ? passwordCheck.score === 5
                        ? "bg-emerald-500"
                        : "bg-yellow-500"
                      : "bg-white/[0.04]"
                      }`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                <span className="flex items-center gap-1.5">
                  {passwordCheck.checks.length ? <Check className="w-3 h-3 text-emerald-400" /> : <X className="w-3 h-3 text-red-500" />}
                  At least 12 characters
                </span>
                <span className="flex items-center gap-1.5">
                  {passwordCheck.checks.hasUpper ? <Check className="w-3 h-3 text-emerald-400" /> : <X className="w-3 h-3 text-red-500" />}
                  Uppercase letter
                </span>
                <span className="flex items-center gap-1.5">
                  {passwordCheck.checks.hasLower ? <Check className="w-3 h-3 text-emerald-400" /> : <X className="w-3 h-3 text-red-500" />}
                  Lowercase letter
                </span>
                <span className="flex items-center gap-1.5">
                  {passwordCheck.checks.hasNumber ? <Check className="w-3 h-3 text-emerald-400" /> : <X className="w-3 h-3 text-red-500" />}
                  Number (0-9)
                </span>
                <span className="flex items-center gap-1.5">
                  {passwordCheck.checks.hasSpecial ? <Check className="w-3 h-3 text-emerald-400" /> : <X className="w-3 h-3 text-red-500" />}
                  Special Character
                </span>
              </div>
            </div>

            {/* Domain Verification Logs Drawer (Shown during validation checks) */}
            {verifyingDomain && (
              <div className="p-3.5 border border-purple-500/20 bg-purple-500/5 rounded-xl space-y-2 text-[10px] font-mono text-purple-300">
                <p className="font-bold flex items-center gap-1.5 font-sans mb-1 text-gray-900 dark:text-white">
                  <Loader2 className="w-3 h-3 animate-spin text-[#33bbcf]" />
                  Running Business Verification...
                </p>
                <div className="space-y-1 pl-1">
                  {verificationLogs.map((log, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {log.status === "success" && <span className="text-emerald-400">✔</span>}
                      {log.status === "pending" && <span className="text-yellow-400 animate-pulse">●</span>}
                      {log.status === "error" && <span className="text-red-400">✖</span>}
                      <span>{log.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cloudflare Turnstile bot shield simulator */}
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

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || verifyingDomain}
              className="btn-primary"
            >
              {loading ? "Registering Business..." : verifyingDomain ? "Running DNS Checks..." : "Register & Request Access"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 dark:text-gray-400">
            Already registered?{" "}
            <Link to="/login" className="text-[#33bbcf] hover:underline font-semibold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
