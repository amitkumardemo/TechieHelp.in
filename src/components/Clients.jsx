import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckSquare, ShieldCheck, Award, MapPin, Trophy } from 'lucide-react';

const achievements = [
  {
    id: "ach-1",
    label: "Global Reach",
    value: "16+ Countries",
    desc: "Building and deploying advanced AI solutions globally.",
    icon: Globe,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "ach-2",
    label: "Proven Delivery",
    value: "100+ Projects",
    desc: "AI calling agents, lead systems, and workflows active.",
    icon: CheckSquare,
    color: "from-[#38bdf8] to-[#6366f1]"
  },
  {
    id: "ach-3",
    label: "Quality Standard",
    value: "ISO 9001 Verified",
    desc: "Certified quality management and operational delivery.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "ach-4",
    label: "Rajasthan Startup Summit",
    value: "Selected in 2026",
    desc: "Honored for innovation and startup excellence in 2026.",
    icon: Award,
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "ach-5",
    label: "Seaside Startup Summit",
    value: "Armenia 2026",
    desc: "Selected globally for the prestigious 2026 summit cohort.",
    icon: MapPin,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "ach-6",
    label: "JIET Universe Jodhpur",
    value: "Startup of the Year",
    desc: "Awarded Startup of the Year by JIET Universe Jodhpur.",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500"
  }
];

const Clients = () => (
  <section className="w-full py-16 relative overflow-hidden">
    {/* Subtle backdrop glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
    </div>

    <div className="max-w-[1280px] mx-auto px-6">
      
      {/* Impressive Section Header */}
      <div className="mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
        >
          <Trophy className="w-3 h-3 text-secondary animate-pulse" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-secondary font-bold">Proven Credentials</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-poppins font-bold text-white text-[32px] sm:text-[40px] leading-tight tracking-tighter uppercase"
        >
          Global Trust, Scale & <span className="text-gradient">Startup Milestones</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-poppins text-dimWhite text-[14px] sm:text-[16px] max-w-xl mx-auto mt-4 leading-relaxed"
        >
          From certified quality processes to international recognition and award-winning deployments, we build high-impact AI systems you can trust.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col justify-between text-left h-full shadow-xl"
            >
              {/* Top Accent Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} p-2 flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Verified</span>
              </div>

              <div>
                <h3 className="text-white font-poppins font-black text-[20px] mb-1 group-hover:text-secondary transition-colors">
                  {item.value}
                </h3>
                <p className="text-secondary font-poppins font-bold text-[11px] tracking-wide uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-white/50 font-poppins text-[12px] leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 h-0.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Clients;
