import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // or "emailjs/browser"

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
        setPopupMessage("Thank you for contacting TechieHelp! Your message has been sent successfully. We will get back to you soon.");
        setPopupType("success");
        setShowPopup(true);
        formRef.current.reset();
      })
      .catch(() => {
        setPopupMessage("Sorry, we couldn't send your message at TechieHelp. Please try again later or contact us directly.");
        setPopupType("error");
        setShowPopup(true);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact TechieHelp</h2>
      <p className="text-center mb-12 text-gray-300">
        Have questions or ideas? Let’s connect and build something amazing together.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="mb-6">
            Whether you're looking for internship opportunities, need help with software, web development, or want to collaborate — we're here to support you.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-gray-400">Jodhpur Institute of Engineering & Technology<br />Jodhpur, Rajasthan, India</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Contact Info</h3>
                <p className="text-gray-400">Phone: +91 7073130165 <br />Email: support@techiehelp.in</p>
              </div>
            </div>

            {/* Support Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Support Hours</h3>
                <p className="text-gray-400">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="md:w-1/2 space-y-6">
          <div>
            <label htmlFor="fullname" className="block mb-2 font-semibold">Full Name</label>
            <input type="text" id="fullname" name="fullname" required placeholder="Your full name" className="w-full p-3 rounded border border-gray-700 bg-gray-900 text-white" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full p-3 rounded border border-gray-700 bg-gray-900 text-white" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" className="w-full p-3 rounded border border-gray-700 bg-gray-900 text-white" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder="How can we help you?" className="w-full p-3 rounded border border-gray-700 bg-gray-900 text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Your message" className="w-full p-3 rounded border border-gray-700 bg-gray-900 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
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
