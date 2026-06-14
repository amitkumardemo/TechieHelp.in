import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Link2, Layout } from "lucide-react";

const outcomes = [
  {
    title: "Portfolio Projects",
    desc: "Build industry-level projects that stand out to recruiters and showcase your technical expertise.",
    icon: <Layout className="w-8 h-8 text-blue-400" />
  },
  {
    title: "LinkedIn Boost",
    desc: "Get verified digital badges and skill endorsements to attract more opportunities on LinkedIn.",
    icon: <Link2 className="w-8 h-8 text-[#33bbcf]" />
  },
  {
    title: "Internship Certificate",
    desc: "Receive MSME & ISO certified completion certificates that validate your hard work and skills.",
    icon: <GraduationCap className="w-8 h-8 text-green-400" />
  },
  {
    title: "Placement Opportunities",
    desc: "Access our network of hiring partners and get priority for job openings at TechieHelp.",
    icon: <Briefcase className="w-8 h-8 text-orange-400" />
  }
];

const Outcomes = () => {
  return (
    <section className="py-24 bg-white dark:bg-primary px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What You'll <span className="text-gradient">Achieve</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our internship program is designed to deliver real outcomes that help you transition from a student to a professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 p-8 rounded-32 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white/[0.07] transition-all group"
            >
              <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 group-hover:scale-110 transition-transform shadow-lg">
                {outcome.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
