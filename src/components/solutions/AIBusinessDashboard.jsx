import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle, ArrowRight, Zap, Eye, RefreshCw, Smartphone, Monitor } from "lucide-react";

const AIBusinessDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050510] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30 pt-28 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed top-[20%] left-[10%] w-[45%] h-[40%] bg-orange-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] right-[10%] w-[35%] h-[35%] bg-yellow-700/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <span>Home</span>
          <span className="text-blue-500">→</span>
          <span>Services</span>
          <span className="text-blue-500">→</span>
          <span className="text-white font-semibold">AI Business Dashboard</span>
        </div>

        {/* Hero Banner */}
        <section className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
            >
              <BarChart3 className="w-4 h-4 text-orange-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-orange-300">Unified Analytics Control</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
              Track Your Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">In One Real-time Screen</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              A single beautiful dashboard showing your entire operational metrics. Track incoming leads, review AI calling agent transcripts, and check total revenue generated in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Book Your Free 1:1 Strategy Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative flex justify-center">
            {/* Visual HUD Mockup */}
            <div className="relative w-full max-w-[500px] bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-xs font-mono text-orange-400">Growth Control HUD</span>
                </div>
                <span className="text-xs font-mono text-gray-500">Live Sync</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><Monitor className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-gray-500">Active Viewers</p>
                      <p className="text-sm font-semibold text-white">Admins & Managers</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-mono">Synced</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg"><RefreshCw className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-gray-500">Data Feed Updates</p>
                      <p className="text-sm font-semibold text-white">Real-Time Streams</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded font-mono">1.2s lag</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Data Consolidates</h2>
            <p className="text-gray-400 max-w-xl mx-auto">See how your business operations feed into one visual UI.</p>
          </div>

          {/* Interactive SVG Flowchart */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-16 flex items-center justify-center overflow-x-auto min-h-[300px]">
            <svg width="800" height="200" viewBox="0 0 800 200" className="min-w-[800px]">
              <defs>
                <linearGradient id="glowGradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Connecting paths with animated dashoffsets */}
              <path d="M140 100 H280" fill="none" stroke="url(#glowGradOrange)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M380 100 H520" fill="none" stroke="url(#glowGradOrange)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M620 100 H680" fill="none" stroke="url(#glowGradOrange)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />

              {/* Node 1: Sources */}
              <circle cx="80" cy="100" r="45" fill="#0f172a" stroke="#ea580c" strokeWidth="3" />
              <text x="80" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Data Sources</text>
              <text x="80" y="115" textAnchor="middle" fill="#ea580c" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Leads / Calls</text>

              {/* Node 2: AI Processor */}
              <circle cx="330" cy="100" r="45" fill="#0f172a" stroke="#eab308" strokeWidth="3" />
              <text x="330" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AI Synthesis</text>
              <text x="330" y="115" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Aggregation Node</text>

              {/* Node 3: UI View */}
              <circle cx="570" cy="100" r="45" fill="#0f172a" stroke="#3b82f6" strokeWidth="3" />
              <text x="570" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Unified UI</text>
              <text x="570" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Visual Charts</text>

              {/* Node 4: Complete */}
              <circle cx="730" cy="100" r="35" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
              <text x="730" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Dashboard</text>
              <text x="730" y="115" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Live Control</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">1. Multi-stream Feed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aggregates API calls, sheets, and CRM databases from all your marketing campaigns, operations logs, and AI agents into one database.
              </p>
            </div>
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">2. AI Metric Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Calculates conversion rates, call durations, lead values, and ROI statistics dynamically with optimized backend queries.
              </p>
            </div>
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">3. High-End visual UI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shows you clean, custom dashboards accessible via desktop or mobile with password-protected role controls.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-400 max-w-xl mx-auto">One-time build fees with full ownership. No monthly subscriptions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-3xl relative flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Basic Dashboard</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Single Data Source</p>
                <div className="text-4xl font-bold text-white mb-8">₹15,000</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Google Sheets Data Source</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Up to 5 Core KPIs Tracked</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Clean Mobile & Web Layout</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 4 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-white py-3 rounded-xl text-center font-bold transition-all text-sm"
              >
                Book Setup Call
              </a>
            </div>

            {/* Standard */}
            <div className="bg-gradient-to-br from-orange-600/20 to-yellow-600/10 border border-orange-500/30 p-8 rounded-3xl relative flex flex-col justify-between shadow-2xl">
              <div className="absolute top-4 right-4 bg-orange-600 text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded">Popular</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Standard Dashboard</h3>
                <p className="text-xs text-orange-400 mb-6 uppercase tracking-wider">Real-time CRM Sync</p>
                <div className="text-4xl font-bold text-white mb-8">₹30,000</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Real-time Database Feeds</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AI Agent Call Logs & Recordings</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom Charting & Pipelines</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Automated Weekly Email Reports</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 6 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-600 hover:bg-orange-500 py-3 rounded-xl text-center font-bold transition-all text-sm text-white shadow-lg"
              >
                Book Setup Call
              </a>
            </div>

            {/* Custom */}
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-3xl relative flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Analytics</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Custom Complex Dashboards</p>
                <div className="text-4xl font-bold text-white mb-8">Custom</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Multiple Connected API Streams</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom Multi-department Login</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Customized UI Branding & Themes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Deep Analytics & Export Features</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-white py-3 rounded-xl text-center font-bold transition-all text-sm"
              >
                Book Setup Call
              </a>
            </div>
          </div>
        </section>

        {/* Visual Showcase / Stats */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-30 -z-10" />
          <h2 className="text-3xl font-extrabold text-white mb-6">See Your Growth Clearly</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Book a strategy session to outline your key metrics and view mockup dashboards.
          </p>
          <a
            href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center gap-2"
          >
            Schedule Free Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default AIBusinessDashboard;
