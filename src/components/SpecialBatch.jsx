import React from "react";
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import { hod, swag } from "../assets"; 
import { 
  Sparkles, 
  Rocket, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Trophy, 
  Globe, 
  Linkedin, 
  IdCard, 
  ChevronRight,
  CheckCircle2,
  Clock
} from "lucide-react";

const SpecialBatch = () => {
  const benefits = [
    { icon: <Sparkles className="w-6 h-6 text-yellow-400" />, title: "Welcome Kit", desc: "Exclusive merchandise upon enrollment" },
    { icon: <Rocket className="w-6 h-6 text-blue-400" />, title: "Live Projects", desc: "Work on real client work, no dummy tasks" },
    { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, title: "Certification", desc: "ISO Certified internship certificate" },
    { icon: <TrendingUp className="w-6 h-6 text-purple-400" />, title: "Stipend", desc: "Based on performance & client satisfaction" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "Profile Feature", desc: "Get featured on our official website" },
    { icon: <Linkedin className="w-6 h-6 text-blue-600" />, title: "LinkedIn Badge", desc: "Exclusive digital badge for your profile" },
  ];

  const domains = [
    { icon: "📱", title: "App Developer", desc: "Master Flutter or React Native with real-world app deployments." },
    { icon: "💻", title: "Frontend Developer", desc: "Build high-performance React architectures for global clients." },
    { icon: "🔧", title: "Full Stack Developer", desc: "The ultimate path. Master MERN stack and cloud deployments." }
  ];

  const steps = [
    { title: "Enroll & Get Gear", desc: "Secure your spot and receive your exclusive welcome kit." },
    { title: "Client Assignment", desc: "Get onboarded to a live project with dedicated mentors." },
    { title: "Collaborate & Build", desc: "Work in a professional environment and submit high-quality code." },
    { title: "Certify & Launch", desc: "Earn your certificate and get referred to our hiring partners." }
  ];

  return (
    <div className="bg-primary text-white min-h-screen font-poppins overflow-hidden pt-48">
      {/* Hero Section */}
      <section className={`${layout.section} ${styles.paddingX} pt-12 pb-16 relative overflow-hidden`}>
        {/* Ambient Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className={`${layout.sectionInfo} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md w-fit"
          >
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[3px] text-blue-300">Limited-Time Special Batch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${styles.heading2} mb-6`}
          >
            Transform Your Career with <br className="sm:block hidden" />
            <span className="text-gradient">Real-World Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className={`${styles.paragraph} max-w-[550px] mb-10 text-lg border-l-2 border-blue-500/30 pl-6 bg-gradient-to-r from-blue-500/5 to-transparent`}
          >
            Join our exclusive Special Batch. Gain hands-on experience on live client projects, build a premium portfolio, and launch your career with industry-proven skills.
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 border-t border-white/5 pt-8 w-full max-w-[500px]">
            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-[10px] text-dimWhite uppercase tracking-widest mt-1">Students</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-secondary">95%</h3>
              <p className="text-[10px] text-dimWhite uppercase tracking-widest mt-1">Hired</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">12LPA</h3>
              <p className="text-[10px] text-dimWhite uppercase tracking-widest mt-1">Highest PKG</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href="https://forms.gle/MUSBDGVVap4eqH418"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-5 px-10 bg-blue-gradient text-primary font-black text-lg rounded-2xl shadow-xl shadow-blue-500/10 flex items-center gap-3 group"
            >
              Enroll Now – ₹3000
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="flex items-center gap-2 text-dimWhite text-sm font-medium">
              <Clock className="w-4 h-4 text-blue-400" />
              Offer ends soon • Limited seats
            </p>
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${layout.sectionImg} relative`}
        >
          <div className="relative group perspective-1000">
             {/* Background glow for image */}
             <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75 animate-pulse" />
             
             <motion.img
               src={hod}
               alt="Technical Head"
               className="w-full h-auto max-w-[500px] relative z-10 drop-shadow-2xl"
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* Floating Info Cards */}
             <motion.div
               animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-10 -left-10 md:-left-20 glass-morphism p-5 rounded-2xl border-white/5 z-20 backdrop-blur-3xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-blue-400 font-black">Success Rate</p>
                    <p className="text-xl font-black text-white">99.2%</p>
                  </div>
                </div>
             </motion.div>

             <motion.div
               animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
               transition={{ duration: 5, delay: 1, repeat: Infinity }}
               className="absolute bottom-10 -right-10 glass-morphism p-5 rounded-2xl border-white/5 z-20 backdrop-blur-3xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-purple-400 font-black">Elite Batch</p>
                    <p className="text-xl font-black text-white">Top 5% Talent</p>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className={`${styles.paddingY} ${styles.paddingX} border-t border-white/5 bg-[#05050a]`}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-[42px] font-black text-white uppercase tracking-tighter mb-4">The Elite <span className="text-gradient">Advantage</span></h2>
             <p className="text-dimWhite font-mono text-[11px] uppercase tracking-[4px]">Why our special batch stands out</p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] glass-morphism border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-secondary transition-colors">{benefit.title}</h4>
                <p className="text-dimWhite text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className={`${styles.paddingY} ${styles.paddingX} relative`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-secondary/5 blur-[120px] rounded-full" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex md:flex-row flex-col items-center gap-10 mb-20">
            <div className="flex-1">
               <h2 className={styles.heading2}>Available <span className="text-gradient">Specializations</span></h2>
            </div>
            <div className="flex-1">
               <p className={styles.paragraph}>We've curated the most high-demand domains for the special batch to ensure maximum employability and technical depth.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-black-gradient-2 border border-white/5 shadow-2xl text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full opacity-50 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:opacity-10 duration-700" />
                <span className="text-6xl mb-8 block grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110">{domain.icon}</span>
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">{domain.title}</h3>
                <p className="text-dimWhite leading-relaxed group-hover:text-white transition-colors">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`${styles.paddingY} ${styles.paddingX} bg-[#05050a]`}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-[40px] font-black text-white uppercase tracking-tighter">Roadmap to <span className="text-gradient">Excellence</span></h2>
             <div className="mt-4 flex items-center justify-center gap-2">
               <span className="h-[2px] w-12 bg-secondary/30" />
               <p className="text-secondary font-mono tracking-[5px] text-[10px] uppercase">4-Phase Transformation</p>
               <span className="h-[2px] w-12 bg-secondary/30" />
             </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 relative">
            {/* Horizontal line for desktop */}
            <div className="absolute top-24 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-white/5 flex items-center justify-center mb-8 relative z-20 group">
                   <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="text-xl font-black text-secondary">{i + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 px-4">{step.title}</h4>
                <p className="text-dimWhite text-sm leading-relaxed px-6">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Callout */}
      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <div className="max-w-[900px] mx-auto p-12 rounded-[3.5rem] bg-blue-500/5 border border-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
          <div className="absolute -inset-2 bg-blue-500/5 blur-[100px] pointer-events-none" />
          <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase italic">Who is this for?</h2>
          <p className="text-xl text-dimWhite leading-relaxed mb-10 max-w-[700px] mx-auto">
            Open to students from <span className="text-white font-bold">Any Year</span> with basic domain knowledge and a passion for building enterprise-grade software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              {["Any Academic Year", "Basic Knowledge Needed", "Industry Passion"].map((tag) => (
                <div key={tag} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest text-blue-300">
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Replicated Professional Style */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[40px] shadow-2xl border border-white/5 backdrop-blur-3xl relative overflow-hidden group min-h-[350px]`}>
          <div className="absolute -inset-2 bg-blue-500/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 right-0 w-[40% ] h-full bg-secondary opacity-5 blur-[100px] rounded-full translate-x-1/2" />

          <div className="flex-1 flex flex-col relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
               <p className="text-secondary font-mono tracking-[4px] text-[10px] uppercase">Immediate Enrollment</p>
            </div>
            <h2 className={`${styles.heading2} tracking-tighter`}>Secure Your Spot in the <br className="hidden sm:block" /> <span className="text-gradient">Special Batch.</span></h2>
            <p className={`${styles.paragraph} max-w-[500px] mt-8 text-white/50`}>
              Grab the exclusive ₹2000 discount. Join the elite team working on projects that actually matter.
            </p>
            <div className="mt-8 flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`w-10 h-10 rounded-full border-2 border-primary bg-zinc-800 flex items-center justify-center text-[10px] font-bold`}>{String.fromCharCode(64 + i)}</div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-primary bg-blue-600 flex items-center justify-center text-[10px] font-bold">+12</div>
               </div>
               <p className="text-dimWhite font-bold text-xs uppercase tracking-[2px]">Joining Now</p>
            </div>
          </div>

          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-12 relative z-10`}>
            <motion.a
                href="https://forms.gle/MUSBDGVVap4eqH418"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-6 px-12 bg-white text-primary font-black text-xl rounded-[2rem] shadow-2xl flex items-center gap-4 hover:shadow-white/10 transition-all"
            >
              Enroll Now
              <ChevronRight className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Footer is already rendered in App.jsx */}
    </div>
  );
};

export default SpecialBatch;
