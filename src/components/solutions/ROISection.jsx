import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, DollarSign } from "lucide-react";

const ROISection = () => {
  return (
    <section className="py-24 bg-[#050510] px-6 relative overflow-hidden" id="roi">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md"
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-[10px] font-mono tracking-[3px] text-green-300 uppercase">Return On Investment</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            One Customer Can Pay <br />
            <span className="text-gradient">For The Entire System</span>
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">
            Our systems don't cost money — they make money. Eliminate lost leads and multiply your customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Comparison Cards */}
          <div className="space-y-6">
            {/* Without AI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between backdrop-blur-xl"
            >
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Standard Sales Flow</span>
                <h4 className="text-2xl font-bold text-white">Without AI Automation</h4>
                <p className="text-sm text-red-400 mt-2">Slow manual follow-up logs only 5 clients.</p>
              </div>
              <div className="text-right">
                <span className="text-4xl md:text-6xl font-black text-white/50">5</span>
                <span className="text-xs text-gray-500 block">Customers</span>
              </div>
            </motion.div>

            {/* With AI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 p-8 rounded-[2.5rem] flex items-center justify-between backdrop-blur-xl shadow-[0_0_40px_rgba(34,197,94,0.15)]"
            >
              <div>
                <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest block mb-1">TechieHelp Systems</span>
                <h4 className="text-2xl font-bold text-white">With TechieHelp AI</h4>
                <p className="text-sm text-green-400 mt-2">Instant dial-back qualifiers convert 15 clients.</p>
              </div>
              <div className="text-right">
                <span className="text-4xl md:text-6xl font-black text-green-400">15</span>
                <span className="text-xs text-green-500 block">Customers</span>
              </div>
            </motion.div>
          </div>

          {/* Revenue chart mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a20] border border-white/10 p-8 rounded-[3.5rem] relative flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-[80px]" />
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-wider">Estimated Revenue Growth</span>
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>

            <div className="space-y-6">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Standard Funnel Revenue</span>
                  <span className="font-semibold text-white">₹1,50,000</span>
                </div>
                <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-red-500/30 h-full w-[33%] rounded-full" />
                </div>
              </div>

              {/* Bar 2 */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>AI Automated Revenue (300% Increase)</span>
                  <span className="font-semibold text-green-400">₹4,50,000</span>
                </div>
                <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-green-500/5 border border-green-500/10 flex items-center gap-3">
              <Award className="w-5 h-5 text-green-400 shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                By capturing and replying to 100% of lead inquiries within 60s, you typically triple client bookings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
