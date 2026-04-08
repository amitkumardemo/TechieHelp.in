import React, { useEffect } from "react";
import { Shield, Lock, Eye, Database } from "lucide-react";

const SitePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 border border-blue-500/20">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="text-blue-400" size={24} />
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>At TechieHelp, we are committed to protecting your personal data. We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or participate in our internship programs.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-200">Personal Information:</strong> Name, email address, phone number, and educational background.</li>
                <li><strong className="text-gray-200">Credentials:</strong> Passwords and security information used for authentication in the LMS.</li>
                <li><strong className="text-gray-200">Performance Data:</strong> Internship assignments, assessments, and attendance logs.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-purple-400" size={24} />
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To issue official internship completion certificates and performance reports.</li>
                <li>To deliver and facilitate delivery of services and course content to the user.</li>
                <li>To respond to user inquiries/offer support to users.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-green-400" size={24} />
              3. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We securely process your data and do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or comments about this notice, you may email us at support@techiehelp.in or contact us via WhatsApp at +91 7073130165.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SitePolicy;
