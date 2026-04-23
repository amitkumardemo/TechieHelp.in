import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Award, MessageSquare } from "lucide-react";

const Counter = ({ to, prefix = "", suffix = "", decimals = 0 }) => {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = to / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          clearInterval(timer);
          setCount(to);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, to]);

  return (
    <motion.span 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </motion.span>
  );
};

const TrustSection = () => {
  const testimonials = [
    {
      name: "ISHAAN SAHU",
      role: "Front-end Development Intern",
      text: "My name is ISHAAN SAHU, and I recently completed my internship at TechieHelp, and the experience has been truly wonderful. I gained real-world exposure, worked on live projects, and learned practical skills. The mentors were supportive, and I am extremely grateful. Special thanks to our Founder, Amit Kumar, for creating such an amazing platform!",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Bhanwar Mahipal Singh (INDA)",
      role: "Full Stack Intern",
      text: "TechieHelp is an excellent platform for learning and gaining real-world experience. The team is very supportive, and their helping nature makes the learning process smooth and enjoyable. I improved my skills in Full Stack Development and worked on practical projects. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "Khushi Parihar",
      role: "Data Science Intern",
      text: "Joining TechieHelp was a turning point for my career. The hands-on training and mentorship I received helped me build a stunning portfolio of real-world projects. The environment is incredibly motivating and perfectly structured for college students looking to stand out. Highly recommend to anyone serious about tech!",
      image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ];

  const badges = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, title: "MSME Registered", sub: "Govt. Recognized" },
    { icon: <Award className="w-8 h-8 text-purple-400" />, title: "ISO Certified", sub: "Quality Education" },
    { icon: <CheckCircle className="w-8 h-8 text-green-400" />, title: "AICTE Aligned", sub: "Standard Curriculum" }
  ];

  return (
    <section className="py-20 bg-[#05050f] px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[30%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>
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
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"><Counter to={15000} suffix="+" /></span> Students
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-yellow-500 text-2xl font-bold mb-1">
                <Counter to={4.6} decimals={1} /> <Star className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <p className="text-gray-400 text-sm font-medium">Over 2,000+ Reviews</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">
                <Counter to={12} prefix="₹" suffix=" LPA" />
              </div>
              <p className="text-gray-400 text-sm font-medium">Highest Package</p>
            </div>
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 relative group shadow-lg glass-morphism"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-orange-500/20 transition-colors z-10" />
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
