import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ClipboardList, Send, CheckCircle } from "lucide-react";

const AIAssessmentForm = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = "service_qpkvjaa";
  const TEMPLATE_ID = "template_i2ir334";
  const PUBLIC_KEY = "lD0Mvi6Nqbvb1pF01";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setPopupMessage("Thank you! Your AI Automation Assessment has been submitted. Our team will contact you shortly.");
        setPopupType("success");
        setShowPopup(true);
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch(() => {
        setPopupMessage("Something went wrong. Please try again or book a call directly.");
        setPopupType("error");
        setShowPopup(true);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="assessment" className="py-24 px-6 text-white max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md"
        >
          <ClipboardList className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-mono tracking-[3px] text-blue-300 uppercase">Assessment</span>
        </motion.div>

        <h2 className="text-4xl font-bold mb-3 text-center">AI Automation Assessment</h2>
        <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto">
          Analyze your current workflow and get a custom implementation blueprint.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left Info Column */}
        <div className="lg:w-1/2 space-y-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">What You'll Receive</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 font-bold text-xs mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-white">Custom Flow Diagram</p>
                  <p className="text-sm">A visual outline of exactly how leads will route through your system.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 font-bold text-xs mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-white">Pricing Blueprint</p>
                  <p className="text-sm">A line-by-line itemized quote based on your lead volume and CRM requirements.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 font-bold text-xs mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-white">Deployment Timeline</p>
                  <p className="text-sm">A 5-7 day transition schedule outlining onboarding and testing steps.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-800 space-y-4">
            <p className="text-sm text-gray-500">
              🔒 100% Secure &amp; Confidential. We do not sell your data or spam you. Only custom systems engineering advice.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">Response Time</span>
                <span className="text-sm font-semibold text-white">Under 60 Seconds</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">Evaluation Fee</span>
                <span className="text-sm font-semibold text-green-400">₹0 (Free Strategy Call)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <form ref={formRef} onSubmit={sendEmail} className="lg:w-1/2 space-y-6 bg-white/5 p-8 md:p-10 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullname" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Full Name</label>
              <input type="text" id="fullname" name="fullname" required placeholder="Your name" className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
            <div>
              <label htmlFor="businessname" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Business Name</label>
              <input type="text" id="businessname" name="businessname" required placeholder="Company LLC" className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
          </div>

          <div>
            <label htmlFor="monthlyleads" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Monthly Lead Volume</label>
            <select id="monthlyleads" name="monthlyleads" required className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm">
              <option value="" disabled selected className="bg-[#050510]">Select lead range</option>
              <option value="0-50" className="bg-[#050510]">Less than 50 leads / month</option>
              <option value="50-200" className="bg-[#050510]">50 to 200 leads / month</option>
              <option value="200-1000" className="bg-[#050510]">200 to 1,000 leads / month</option>
              <option value="1000+" className="bg-[#050510]">1,000+ leads / month</option>
            </select>
          </div>

          <div>
            <label htmlFor="currentprocess" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">Current Lead Process</label>
            <textarea id="currentprocess" name="currentprocess" rows="3" required placeholder="Describe how leads currently reach you and how fast you respond..." className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"></textarea>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold text-xs text-gray-400 uppercase tracking-wider">What would you like to automate?</label>
            <textarea id="subject" name="subject" rows="3" required placeholder="e.g. Capture form leads, trigger AI calls, log to HubSpot..." className="w-full p-4 rounded-2xl border border-white/10 bg-black/40 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-2xl font-black text-base hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2">
            <span>{isSubmitting ? "Submitting..." : "Get My AI Automation Blueprint"}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6">
          <div className="bg-[#0a0a20] border border-white/10 p-8 rounded-[2.5rem] max-w-md w-full text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/15 blur-[60px]" />
            <h3 className="text-xl font-bold mb-4 text-white flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Submission Received
            </h3>
            <p className={`mb-6 text-sm ${popupType === 'success' ? 'text-gray-300' : 'text-red-400'}`}>
              {popupMessage}
            </p>
            <button onClick={() => setShowPopup(false)} className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl w-full transition-all">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIAssessmentForm;
