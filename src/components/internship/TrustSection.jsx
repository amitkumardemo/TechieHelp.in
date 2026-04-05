import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Award, MessageSquare } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      name: "Sagar Kumar",
      role: "Web Development Intern",
      text: "The ₹499 internship was the best investment. I worked on a real project and got certified quickly!",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Simran Kanwar",
      role: "Data Science Intern",
      text: "TechieHelp Institute of AI platform is amazing. The task management kept me on track throughout.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Aarshdeep Kaur",
      role: "App Development Intern",
      text: "Got my MSME completion certificate and LOR. Highly recommended for college students!",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  const badges = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, title: "MSME Registered", sub: "Govt. Recognized" },
    { icon: <Award className="w-8 h-8 text-purple-400" />, title: "ISO Certified", sub: "Quality Education" },
    { icon: <CheckCircle className="w-8 h-8 text-green-400" />, title: "AICTE Aligned", sub: "Standard Curriculum" }
  ];

  return (
    <section className="py-20 bg-primary px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-24">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">{badge.title}</p>
                <p className="text-sm text-gray-400">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trusted by <span className="text-blue-400">15,000+</span> Students
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            <span className="text-white font-medium ml-2">4.6/5 (2,000+ Reviews)</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 relative group"
            >
              <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-4 h-4 opacity-50" alt="LinkedIn" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Verified on LinkedIn</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default TrustSection;
