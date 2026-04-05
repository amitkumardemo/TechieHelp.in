import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, AlertTriangle, Timer } from "lucide-react";

import Hero from "./internship/Hero";
import TrustSection from "./internship/TrustSection";
import DomainGrid from "./internship/DomainGrid";
import USPPreview from "./internship/USPPreview";
import Pricing from "./internship/Pricing";
import AddOns from "./internship/AddOns";
import HowItWorks from "./internship/HowItWorks";
import UrgencySection from "./internship/UrgencySection";
import Outcomes from "./internship/Outcomes";
import FinalCTA from "./internship/FinalCTA";
import InternshipFAQ from "./InternshipFAQ";

const Internship = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [showUrgencyToast, setShowUrgencyToast] = useState(false);
  const [showSocialToast, setShowSocialToast] = useState(false);
  const [currentSocial, setCurrentSocial] = useState({ name: "", city: "", domain: "" });

  const socialData = {
    names: ["Rahul Singh", "Priyanka Sharma", "Amit Patel", "Sneha Rao", "Rohan Gupta", "Ananya Verma", "Vikas Reddy", "Ishita Malik", "Arjun Das", "Megha Kapoor", "Sahil Khan", "Tanvi Joshi", "Karan Malhotra", "Pooja Hegde", "Nitin Gadkari", "Riya Sen"],
    cities: ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"],
    domains: ["Web Development", "AI & ML", "Cyber Security", "Data Science", "Fullstack Development", "Android Development", "UI/UX Design", "MERN Stack"]
  };

  const handleMouseLeave = useCallback((e) => {
    if (e.clientY <= 0 && !hasShownPopup) {
      setShowExitPopup(true);
      setHasShownPopup(true);
    }
  }, [hasShownPopup]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  useEffect(() => {
    // Urgency Toast Timer
    const toastTimer = setInterval(() => {
      setShowUrgencyToast(true);
      setTimeout(() => setShowUrgencyToast(false), 4000);
    }, 12000); 

    // Social Proof Timer
    const socialTimer = setInterval(() => {
      const name = socialData.names[Math.floor(Math.random() * socialData.names.length)];
      const city = socialData.cities[Math.floor(Math.random() * socialData.cities.length)];
      const domain = socialData.domains[Math.floor(Math.random() * socialData.domains.length)];
      
      setCurrentSocial({ name, city, domain });
      setShowSocialToast(true);
      setTimeout(() => setShowSocialToast(false), 4000);
    }, 7000); // Every 7 seconds

    return () => {
      clearInterval(toastTimer);
      clearInterval(socialTimer);
    };
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen font-poppins selection:bg-blue-500/30">
      <Helmet>
        <title>Start Your Internship at Just ₹499 | TechieHelp Institute of AI</title>
        <meta name="description" content="Join TechieHelp Institute of AI - High-quality internships in Web Dev, App Dev, AI/ML & more starting at just ₹499. Work on real projects, get certified, and boost your career." />
        <meta property="og:title" content="Start Your Internship at Just ₹499 | TechieHelp Institute of AI" />
        <meta property="og:description" content="High-quality internships starting at just ₹499. Real projects + ISO Certification." />
        <meta property="og:url" content="https://www.techiehelp.in/careers/training-internships" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Content Sections */}
      <Hero />
      <TrustSection />
      <DomainGrid />
      <USPPreview />
      <Pricing />
      <AddOns />
      <HowItWorks />
      <UrgencySection />
      <Outcomes />
      <FinalCTA />
      
      {/* FAQ Section */}
      <div className="py-20 bg-primary">
         <InternshipFAQ />
      </div>

      {/* Exit-Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
              
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10 text-center">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-6" />
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
                  Wait! Don't Go
                </h3>
                <p className="text-xl md:text-2xl font-bold text-white/90 mb-8 leading-tight">
                  Get <span className="text-yellow-300 text-3xl font-black">₹100 Off</span> instantly on any internship plan!
                </p>
                <p className="text-sm text-white/60 mb-10 font-bold uppercase tracking-widest italic font-poppins">
                  Coupon Code: TECHIE100
                </p>
                
                <a 
                  href="https://forms.gle/N8kk845Lbfds6Pwj6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-white text-blue-600 font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 text-center"
                >
                  <span>Apply Now – Get ₹100 Off</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="mt-6 text-[10px] text-white/40 uppercase tracking-[2px] font-bold">Offer expires in 10 minutes</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Social Proof Toast */}
      <AnimatePresence>
        {showSocialToast && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            className="fixed bottom-10 left-6 md:left-10 z-[60] w-full max-w-[320px]"
          >
            <div className="relative p-5 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-inner">
                  {currentSocial.name.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-primary animate-pulse" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  {currentSocial.name} <span className="text-[10px] font-medium text-gray-400 font-poppins">from {currentSocial.city}</span>
                </p>
                <p className="text-[11px] text-gray-400 leading-tight">
                  Just enrolled in <span className="text-blue-400 font-bold">{currentSocial.domain}</span>
                </p>
                <div className="mt-1 flex items-center gap-1 text-[9px] font-bold text-green-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Verified Enrollment
                </div>
              </div>
              
              <button 
                onClick={() => setShowSocialToast(false)}
                className="p-1 rounded-full hover:bg-white/5 text-white/30 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recurring Urgency Toast */}
      <AnimatePresence>
        {showUrgencyToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            className="fixed bottom-10 right-6 md:right-10 z-[60] w-full max-w-[320px]"
          >
            <div className="relative p-6 rounded-3xl bg-[#11111a] border border-red-500/30 shadow-[0_20px_50px_rgba(220,38,38,0.2)] overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl -z-10 group-hover:bg-red-600/20 transition-all" />
              
              <button 
                onClick={() => setShowUrgencyToast(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/5 text-gray-500 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-xl bg-red-600/20 text-red-500 animate-pulse">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Only 50 Seats Left!</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    Next Batch Starts on <span className="text-white font-bold">{
                      (() => {
                        const date = new Date();
                        date.setDate(date.getDate() + 2);
                        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
                      })()
                    }</span>. Don't miss your chance!
                  </p>
                  <a 
                    href="https://forms.gle/N8kk845Lbfds6Pwj6"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-[10px] font-black text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors"
                  >
                    Apply Before Deadline <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles for Marquee (if not already in global CSS) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .rounded-24 { border-radius: 1.5rem; }
          .rounded-32 { border-radius: 2rem; }
        `}
      </style>
    </div>
  );
};

export default Internship;