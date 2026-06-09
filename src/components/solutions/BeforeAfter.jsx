import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-[#050510] px-6 relative" id="before-after">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            The Difference <span className="text-gradient">Automation Makes</span>
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">
            Traditional follow-ups leak leads. TechieHelp closes every gap in your sales pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Before TechieHelp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3.5rem] bg-red-950/10 border border-red-500/20 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px]" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-500/20 text-red-500 rounded-2xl">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Before TechieHelp</h3>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-sm font-semibold text-gray-300">100 Inbound Leads</span>
                <span className="text-xs bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full font-mono font-bold">100% Received</span>
              </div>
              
              <div className="flex justify-center py-1 text-red-500/40">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between p-4 bg-red-500/5 rounded-2xl border border-red-500/10">
                <span className="text-sm font-semibold text-red-300">20 Contacted</span>
                <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-mono font-bold">80 Lost due to delay</span>
              </div>

              <div className="flex justify-center py-1 text-red-500/40">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center justify-between p-4 bg-red-950/20 rounded-2xl border border-red-500/20">
                <span className="text-sm font-semibold text-red-400">5 Converted</span>
                <span className="text-xs bg-red-950/50 text-red-400 px-3 py-1 rounded-full font-mono font-bold">5% Conversion Rate</span>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-red-400 font-bold uppercase tracking-wider">
              ❌ Average 5-Hour Response Time
            </div>
          </motion.div>

          {/* After TechieHelp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3.5rem] bg-blue-950/10 border border-blue-500/20 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px]" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">After TechieHelp</h3>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-sm font-semibold text-gray-300">100 Inbound Leads</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-mono font-bold">100% Captured</span>
              </div>
              
              <div className="flex justify-center py-1 text-blue-500/40">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                <span className="text-sm font-semibold text-blue-300">100 Contacted</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-mono font-bold">100% In Under 60s</span>
              </div>

              <div className="flex justify-center py-1 text-blue-500/40">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center justify-between p-4 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                <span className="text-sm font-semibold text-purple-300">40 Qualified</span>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full font-mono font-bold">AI Screened & Booked</span>
              </div>

              <div className="flex justify-center py-1 text-blue-500/40">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-2xl border border-green-500/25">
                <span className="text-sm font-semibold text-green-300">15 Converted</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-mono font-bold">15% Conversion Rate (3x Increase)</span>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-green-400 font-bold uppercase tracking-wider animate-pulse">
              ⚡ Average 45-Second Response Time
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
