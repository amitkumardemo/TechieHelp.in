import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, CheckCircle, ArrowRight, Zap, PhoneCall, Mic, Bot, MessageSquare } from "lucide-react";

const VoiceAISystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050510] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30 pt-28 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed top-[20%] left-[10%] w-[45%] h-[40%] bg-red-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] right-[10%] w-[35%] h-[35%] bg-pink-700/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <span>Home</span>
          <span className="text-blue-500">→</span>
          <span>Services</span>
          <span className="text-blue-500">→</span>
          <span className="text-white font-semibold">Voice AI System</span>
        </div>

        {/* Hero Banner */}
        <section className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
            >
              <Volume2 className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-300">Human-Like Voice AI</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
              Human-Like Conversational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">AI Voice Receptionist</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              Answer customer phone calls, solve complex inquiries, and provide support with natural, warm AI voices that talk exactly like your top employees. Zero wait times, 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-500 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
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
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">Voice AI Engine v1.0</span>
                </div>
                <span className="text-xs font-mono text-gray-500">Live Voice Stream</span>
              </div>
              
              {/* Waveform Visualization */}
              <div className="h-20 flex items-center justify-center gap-1.5 mb-6 bg-black/20 rounded-2xl border border-white/5 p-4">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [15, Math.random() * 50 + 15, 15] }}
                    transition={{ duration: 0.8 + Math.random() * 0.5, repeat: Infinity }}
                    className="w-1.5 bg-gradient-to-t from-red-500 to-pink-500 rounded-full"
                  />
                ))}
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 text-red-400 rounded-lg"><PhoneCall className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-gray-500">Call Type</p>
                      <p className="text-sm font-semibold text-white">Inbound Support / FAQ</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Speech Processing Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">See how spoken words are converted, processed, and replied to in under a second.</p>
          </div>

          {/* Interactive SVG Flowchart */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-16 flex items-center justify-center overflow-x-auto min-h-[300px]">
            <svg width="800" height="200" viewBox="0 0 800 200" className="min-w-[800px]">
              <defs>
                <linearGradient id="glowGradRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>

              {/* Connecting paths with animated dashoffsets */}
              <path d="M140 100 H280" fill="none" stroke="url(#glowGradRed)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M380 100 H520" fill="none" stroke="url(#glowGradRed)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />
              <path d="M620 100 H680" fill="none" stroke="url(#glowGradRed)" strokeWidth="4" strokeDasharray="10, 5" className="animate-[marquee_10s_linear_infinite]" />

              {/* Node 1: Call Inbound */}
              <circle cx="80" cy="100" r="45" fill="#0f172a" stroke="#ef4444" strokeWidth="3" />
              <text x="80" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">User Voice</text>
              <text x="80" y="115" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Speech Audio</text>

              {/* Node 2: STT Conversion */}
              <circle cx="330" cy="100" r="45" fill="#0f172a" stroke="#ec4899" strokeWidth="3" />
              <text x="330" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">STT Engine</text>
              <text x="330" y="115" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Audio-to-Text</text>

              {/* Node 3: LLM Reasoning */}
              <circle cx="570" cy="100" r="45" fill="#0f172a" stroke="#f43f5e" strokeWidth="3" />
              <text x="570" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AI Bot</text>
              <text x="570" y="115" textAnchor="middle" fill="#f43f5e" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Determines Reply</text>

              {/* Node 4: TTS Reply */}
              <circle cx="730" cy="100" r="35" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
              <text x="730" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TTS Voice</text>
              <text x="730" y="115" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Spoken Output</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">1. Live Audio Stream</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Captures the customer's voice feed, converting speech to text (STT) in real-time with high-accuracy voice parsing.
              </p>
            </div>
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">2. Semantic Intent Resolution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Processes the query text through our conversational LLM model, retrieving precise data from your company FAQs or logs.
              </p>
            </div>
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">3. Text-To-Speech Output</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Converts the text response back into natural, friendly, human-like voice audio (TTS) and plays it back to the customer instantly.
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
                <h3 className="text-xl font-bold text-white mb-2">Inbound Setup</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Inbound Receptionist Only</p>
                <div className="text-4xl font-bold text-white mb-8">₹30,000</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Inbound Calling Bot</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> FAQ Responses Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Transfer to Human Support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 5 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 hover:border-red-500 hover:text-white py-3 rounded-xl text-center font-bold transition-all text-sm"
              >
                Book Setup Call
              </a>
            </div>

            {/* Standard */}
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/10 border border-red-500/30 p-8 rounded-3xl relative flex flex-col justify-between shadow-2xl">
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded">Popular</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Standard Engine</h3>
                <p className="text-xs text-red-400 mb-6 uppercase tracking-wider">Voice Cloning & Bookings</p>
                <div className="text-4xl font-bold text-white mb-8">₹50,000</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> High-Accuracy Voice Cloning</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Inbound & Outbound Calling</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Calendar Booking Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Multilingual Call Handling</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 7 Days Deployment</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 hover:bg-red-500 py-3 rounded-xl text-center font-bold transition-all text-sm text-white shadow-lg"
              >
                Book Setup Call
              </a>
            </div>

            {/* Custom */}
            <div className="bg-[#0a0a14] border border-gray-800 p-8 rounded-3xl relative flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Voice</h3>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Live Database Queries</p>
                <div className="text-4xl font-bold text-white mb-8">Custom</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Live DB Query Call Handling</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Unlimited Parallel Call Lines</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Dedicated Voice Channel APIs</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom Voice Customization</li>
                </ul>
              </div>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 hover:border-red-500 hover:text-white py-3 rounded-xl text-center font-bold transition-all text-sm"
              >
                Book Setup Call
              </a>
            </div>
          </div>
        </section>

        {/* Visual Showcase / Stats */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-30 -z-10" />
          <h2 className="text-3xl font-extrabold text-white mb-6">Revolutionize Customer Support</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Book a strategy session and listen to a real-time live demo of our conversational AI bots.
          </p>
          <a
            href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center gap-2"
          >
            Schedule Free Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default VoiceAISystem;
