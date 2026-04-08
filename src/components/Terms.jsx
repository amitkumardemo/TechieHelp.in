import React, { useEffect } from "react";
import { Scale, CheckCircle, AlertTriangle, FileText } from "lucide-react";

const SiteTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 mb-6 border border-purple-500/20">
            <Scale className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="text-blue-400" size={24} />
              1. Agreement to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TechieHelp ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, connected internship portal, or LMS. You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle className="text-green-400" size={24} />
              2. Intellectual Property Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use (e.g., educational and internship purposes).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" size={24} />
              3. User Representations
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>By using the Site and our LMS platforms, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>You are entirely responsible for the confidentiality of your LMS portal credentials.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Internship and Certificate Policies</h2>
            <p className="text-gray-300 leading-relaxed">
              Enrollment in our internship programs constitutes an agreement to follow the professional guidelines outlined by your respective mentor. Certificates, Offer Letters, and Letters of Recommendation are awarded strictly based on task completion, attendance, and performance metrics. TechieHelp reserves the right to terminate an internship on grounds of misconduct, plagiarism, or severe inactivity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: support@techiehelp.in
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SiteTerms;
