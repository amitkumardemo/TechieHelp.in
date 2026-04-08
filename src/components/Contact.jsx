import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const SERVICE_ID = "service_qpkvjaa";
  const TEMPLATE_ID = "template_i2ir334";
  const PUBLIC_KEY = "lD0Mvi6Nqbvb1pF01";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setPopupMessage("Thank you! We will get back to you shortly.");
        setPopupType("success");
        setShowPopup(true);
        formRef.current.reset();
      })
      .catch(() => {
        setPopupMessage("Something went wrong. Please try again or reach out directly.");
        setPopupType("error");
        setShowPopup(true);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-3 text-center">Get in Touch</h2>
      <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto">
        Tell us about your business and what you want to automate. We'll get back to you quickly.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12">

        {/* Left Info */}
        <div className="md:w-1/2 mb-12 md:mb-0 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">What happens after you reach out?</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                We review your requirement and respond quickly
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                Our team connects to understand your business
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                We design a custom AI plan for your specific needs
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-800 space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-600/20 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Direct Contact</p>
                <p className="text-gray-400 text-sm">+91 7073130165</p>
                <a href="mailto:support@techiehelp.in" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">support@techiehelp.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-600/20 flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-400 text-sm">Jodhpur Institute of Engineering & Technology<br />Jodhpur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-400">
              <p className="text-white font-semibold mb-1">Response time</p>
              Within minutes
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-400">
              <p className="text-white font-semibold mb-1">Confidential</p>
              100% private discussion
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-400">
              <p className="text-white font-semibold mb-1">No spam</p>
              Only business talk
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-400">
              <p className="text-white font-semibold mb-1">Custom built</p>
              Not generic solutions
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="md:w-1/2 space-y-5 bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
          <div>
            <label htmlFor="fullname" className="block mb-1.5 font-medium text-sm text-gray-300">Full Name</label>
            <input type="text" id="fullname" name="fullname" required placeholder="Your name" className="w-full p-3.5 rounded-xl border border-gray-700 bg-[#0a0a0a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="block mb-1.5 font-medium text-sm text-gray-300">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full p-3.5 rounded-xl border border-gray-700 bg-[#0a0a0a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block mb-1.5 font-medium text-sm text-gray-300">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" className="w-full p-3.5 rounded-xl border border-gray-700 bg-[#0a0a0a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1.5 font-medium text-sm text-gray-300">What do you want to automate?</label>
            <input type="text" id="subject" name="subject" required placeholder="e.g. Lead follow-up, customer calls..." className="w-full p-3.5 rounded-xl border border-gray-700 bg-[#0a0a0a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1.5 font-medium text-sm text-gray-300">Tell us about your business</label>
            <textarea id="message" name="message" rows="4" required placeholder="Describe your business and what you're looking to automate..." className="w-full p-3.5 rounded-xl border border-gray-700 bg-[#0a0a0a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Get My AI System
          </button>

          <p className="text-center text-xs text-gray-600 pt-1">Limited onboarding slots available this week.</p>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 text-center text-white flex items-center justify-center">
              {popupType === 'success' && <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
              TechieHelp
            </h3>
            <p className={`text-center mb-4 ${popupType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {popupMessage}
            </p>
            <button onClick={() => setShowPopup(false)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
