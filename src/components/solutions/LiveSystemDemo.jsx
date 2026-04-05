import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Terminal, Cpu, Database, Bell } from "lucide-react";

const LiveSystemDemo = () => {
  return (
    <section className="py-32 bg-[#050510] px-6 relative overflow-hidden" id="live-demo">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            See AI System <span className="text-gradient">in Action</span>
          </motion.h2>
          <p className="text-gray-500 font-black text-xs uppercase tracking-[5px]">This is not theory. This is live automation.</p>
        </div>

        <div className="relative max-w-5xl mx-auto p-1 rounded-[3rem] bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 shadow-[0_0_100px_rgba(59,130,246,0.1)]">
           <div className="bg-[#0a0a1a] rounded-[2.9rem] overflow-hidden border border-white/10 p-4 md:p-8">
              {/* Dashboard Style Mockup */}
              <div className="flex items-center justify-between mb-8 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="text-[10px] font-black text-white/20 uppercase tracking-[4px]">TechieHelp AI Dashboard v2.0</div>
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Terminal className="w-4 h-4" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Left: Terminal Log */}
                 <div className="md:col-span-2 space-y-4 p-6 bg-black/40 rounded-3xl border border-white/5 font-mono text-[10px] md:text-xs leading-relaxed">
                    <div className="flex gap-4">
                       <span className="text-green-500">[3:00:01 PM]</span>
                       <span className="text-white/80">New lead detected: "Aditya Kumar"</span>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-blue-400">[3:00:02 PM]</span>
                       <span className="text-white/80 animate-pulse">→ AI storing data in CRM... Done.</span>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-purple-400">[3:00:04 PM]</span>
                       <span className="text-white/80">→ AI initiating call to +91 767XXXXXXX</span>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-orange-400">[3:00:05 PM]</span>
                       <span className="text-white/80">→ Call Connected. Extracting requirements...</span>
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                       <span className="text-white/20 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white/40 font-bold uppercase tracking-widest text-[9px]">Analyzing intent... High Potential</span>
                    </div>
                 </div>

                 {/* Right: Live Stats Pulse */}
                 <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-between group overflow-hidden relative">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-[30px]" />
                       <div>
                          <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Queue Status</div>
                          <div className="text-2xl font-black text-white">ACTIVE</div>
                       </div>
                       <Cpu className="w-8 h-8 text-blue-400 animate-spin-slow" />
                    </div>

                    <div className="p-6 rounded-3xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-between relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 blur-[30px]" />
                       <div>
                          <div className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-1">Database</div>
                          <div className="text-2xl font-black text-white">SYNCED</div>
                       </div>
                       <Database className="w-8 h-8 text-purple-400" />
                    </div>

                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between relative">
                       <div>
                          <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Action Ready</div>
                          <div className="text-2xl font-black text-white animate-pulse">NOTIFY</div>
                       </div>
                       <Bell className="w-8 h-8 text-white/20" />
                    </div>
                 </div>
              </div>

              {/* Overlay Play CTA */}
              <div className="mt-10 flex justify-center">
                 <button className="flex items-center gap-4 px-10 py-5 rounded-full bg-white text-[#050510] font-black text-lg hover:scale-105 transition-all shadow-2xl">
                    <PlayCircle className="w-8 h-8" />
                    <span>Watch Full Workflow</span>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSystemDemo;
