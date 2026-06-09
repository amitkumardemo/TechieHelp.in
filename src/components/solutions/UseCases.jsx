import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Briefcase, ShoppingBag, Wrench, ArrowUpRight } from "lucide-react";

const useCases = [
  { 
    title: "Coaching Institutes", 
    desc: "Admissions automation. Captures student lead inquiries from ads, triggers instant qualification calls, and schedules counseling slots automatically.", 
    icon: <GraduationCap className="w-10 h-10 text-blue-400" />,
    stats: "90% Admissions Increase"
  },
  { 
    title: "Startups", 
    desc: "Autonomous sales dialer. Instantly contacts and qualifies demo sign-ups, booking qualified leads on the founding team's calendar 24/7.", 
    icon: <Rocket className="w-10 h-10 text-purple-400" />,
    stats: "10x Meetings Booked"
  },
  { 
    title: "Agencies", 
    desc: "Onboarding and billing flows. Automatically generates client contracts, sets up internal communication channels, and logs reporting metrics.", 
    icon: <Briefcase className="w-10 h-10 text-green-400" />,
    stats: "0% Manual Administrative Work"
  },
  { 
    title: "E-commerce", 
    desc: "Abandonment and support recovery. AI phone agents contact high-value abandoned carts and process order tracking requests instantly.", 
    icon: <ShoppingBag className="w-10 h-10 text-red-400" />,
    stats: "35% Recovered Abandoned Sales"
  },
  { 
    title: "Service Businesses", 
    desc: "Instant quoting and booking. AI captures project requirements, emails quotes automatically, and follows up until a deposit is paid.", 
    icon: <Wrench className="w-10 h-10 text-orange-400" />,
    stats: "Zero Missed Client Calls"
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-[#0a0a1a] px-6 relative" id="use-cases">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            Built for <span className="text-gradient">Every Business</span>
          </motion.h2>
          <p className="text-gray-500 font-black text-xs uppercase tracking-[5px]">Scalable AI Systems Across Industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-700 backdrop-blur-2xl flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              <div className="w-24 h-24 shrink-0 rounded-[2rem] bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/5 shadow-xl">
                {item.icon}
              </div>
              <div className="flex-1">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
                    <motion.div whileHover={{ scale: 1.2 }} className="text-white/20 group-hover:text-white transition-colors cursor-pointer">
                       <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 font-bold italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                 </p>
                 <div className="inline-block px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest shadow-lg">
                    {item.stats}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
