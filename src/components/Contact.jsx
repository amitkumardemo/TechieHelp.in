import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Calendar, CheckCircle2, Clock, Users, Zap, ArrowRight, Phone } from "lucide-react";

const SERVICE_ID = "service_qpkvjaa";
const TEMPLATE_ID = "template_i2ir334";
const PUBLIC_KEY = "lD0Mvi6Nqbvb1pF01";

const challenges = [
  "Slow lead response times",
  "Manual follow-up taking hours",
  "Losing leads to competitors",
  "CRM not updating automatically",
  "No visibility into conversations",
  "Missing sales opportunities",
];

const meetingSlots = [
  { time: "10:00 AM", label: "Mon, Jun 23", status: "booked" },
  { time: "11:30 AM", label: "Mon, Jun 23", status: "available" },
  { time: "2:00 PM",  label: "Tue, Jun 24", status: "available" },
  { time: "4:00 PM",  label: "Tue, Jun 24", status: "booked" },
  { time: "9:30 AM",  label: "Wed, Jun 25", status: "available" },
];

const liveActivity = [
  { text: "Rahul S. just booked a demo", time: "2 min ago", color: "#10b981" },
  { text: "Priya D. submitted strategy form", time: "5 min ago", color: "#6366f1" },
  { text: "Amit K. from Bangalore joined call", time: "11 min ago", color: "#f59e0b" },
  { text: "Sneha R. booked a demo call", time: "18 min ago", color: "#33bbcf" },
];

const CalendarAnimation = () => {
  const [activeSlot, setActiveSlot] = useState(1);
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveSlot((p) => (p + 1) % meetingSlots.length), 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActivityIdx((p) => (p + 1) % liveActivity.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Live status pill */}
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-emerald-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-xs font-semibold text-emerald-600">Live booking system active</span>
      </div>

      {/* Calendar slots */}
      <div className="bg-white dark:bg-[#0c0d14] border border-gray-100 dark:border-white/5 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Availability</span>
        </div>
        <div className="space-y-2">
          {meetingSlots.map((slot, i) => (
            <motion.div
              key={i}
              className={`flex items-center justify-between px-3 py-2 rounded-xl border text-sm transition-all duration-300 ${
                i === activeSlot 
                  ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/30" 
                  : "bg-gray-50 dark:bg-[#161824] border-gray-100 dark:border-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">{slot.time}</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs">{slot.label}</span>
              </div>
              {slot.status === "booked" ? (
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full">Booked</span>
              ) : (
                <span className={`text-[10px] font-bold text-emerald-600 dark:text-emerald-400 ${i === activeSlot ? "bg-emerald-100 dark:bg-emerald-500/20" : "bg-emerald-50 dark:bg-emerald-500/10"} px-2 py-0.5 rounded-full`}>
                  {i === activeSlot ? "✓ Selecting..." : "Open"}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live activity feed */}
      <div className="bg-white dark:bg-[#0c0d14] border border-gray-100 dark:border-white/5 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Recent Bookings</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activityIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-3"
          >
            <div
              className="w-2 h-2 rounded-full mt-1.5 shrink-0 animate-pulse"
              style={{ backgroundColor: liveActivity[activityIdx].color }}
            />
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{liveActivity[activityIdx].text}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{liveActivity[activityIdx].time}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-3 flex gap-1">
          {liveActivity.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full flex-1 transition-all duration-300"
              style={{ backgroundColor: i === activityIdx ? liveActivity[activityIdx].color : (document.documentElement.classList.contains("dark") ? "#1e293b" : "#e5e7eb") }}
            />
          ))}
        </div>
      </div>

      {/* Trust chips */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Zap, label: "Response in < 2s" },
          { icon: CheckCircle2, label: "No credit card" },
          { icon: Clock, label: "Setup in 30 min" },
          { icon: Phone, label: "Phone support" },
        ].map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-50 dark:bg-[#0c0d14] border border-gray-100 dark:border-white/5 rounded-xl px-3 py-2">
            <Icon className="w-3 h-3 text-gray-400 dark:text-gray-500 shrink-0" />
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setPopupMessage("Your strategy session request has been received. We'll reach out within minutes.");
        setPopupType("success");
        setShowPopup(true);
        formRef.current.reset();
      })
      .catch(() => {
        setPopupMessage("Something went wrong. Please try again or reach out directly.");
        setPopupType("error");
        setShowPopup(true);
      })
      .finally(() => setIsSubmitting(false));
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0c0d14] text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-300 dark:focus:border-white/20 focus:bg-white dark:focus:bg-[#0c0d14] focus:ring-2 focus:ring-[#33bbcf]/10 transition-all duration-200";
  const labelClass = "block mb-1.5 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider";

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/50 dark:bg-[#090a0f] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[#33bbcf]/4 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-5"
          >
            <Calendar className="w-3 h-3 text-[#33bbcf]" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">BOOK YOUR AI STRATEGY SESSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            See LeadAI{' '}
            <span className="bg-gradient-to-r from-[#33bbcf] to-blue-500 bg-clip-text text-transparent">
              In Action.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            Book a free strategy call and discover how LeadAI can automate replies, calls, CRM updates, and customer relationships — starting today.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullname" className={labelClass}>Name</label>
                  <input type="text" id="fullname" name="fullname" required placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@company.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Company</label>
                  <input type="text" id="subject" name="subject" required placeholder="Your company name" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Current Challenge</label>
                <select id="message" name="message" required className={inputClass}>
                  <option value="" disabled selected>Select your biggest challenge...</option>
                  {challenges.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden group flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#33bbcf] to-[#5ce1e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                    {isSubmitting ? "Sending..." : "Book Demo"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <a
                  href="tel:+917073130165"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Talk To Sales
                </a>
              </div>

              <p className="text-center text-xs text-gray-400">No spam. No pressure. Just a focused 30-minute strategy call.</p>
            </form>
          </motion.div>

          {/* RIGHT: Animated Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:pt-2"
          >
            <CalendarAnimation />
          </motion.div>
        </div>
      </div>

      {/* Success/Error Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-gray-100"
            >
              <div className="flex items-center justify-center mb-4">
                {popupType === "success" ? (
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-red-500" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">
                {popupType === "success" ? "You're on the list!" : "Oops!"}
              </h3>
              <p className={`text-center mb-6 text-sm ${popupType === "success" ? "text-gray-500" : "text-red-500"}`}>
                {popupMessage}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
