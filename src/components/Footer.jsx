import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
} from "../assets";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const F6SIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="bold">F6S</text>
  </svg>
);

const companyLinks = [
  { title: "About Us", path: "/about-us" },
  { title: "Our Portfolio", path: "/project-portfolio" },
  { title: "Contact Us", path: "/contacts" },
  { title: "Founder & CEO Profile", path: "/team/amit-kumar-founder-ceo-techiehelp" },
];

const legalLinks = [
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-and-conditions" },
  { title: "Cookie Policy", path: "/cookie-policy" },
  { title: "Pricing Policy", path: "/pricing-policy" },
  { title: "Refund Policy", path: "/refund-policy" },
  { title: "Acceptable Use Policy", path: "/acceptable-use-policy" },
  { title: "Data Processing Agreement", path: "/data-processing-agreement" },
];

const solutionLinks = [
  { title: "AI Lead Capture Engine", path: "/services/ai-lead-engine" },
  { title: "AI Phone Calling Agents", path: "/services/ai-calling-agents" },
  { title: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
  { title: "Voice AI Systems", path: "/services/voice-ai-system" },
  { title: "LeadAI Dashboard", path: "/leadai-dashboard" },
  { title: "AI Business Dashboard", path: "/services/ai-business-dashboard" },
  { title: "All AI Services", path: "/services" },
];

const resourceLinks = [
  { title: "Download Android App", path: "https://t90161611204.p.clickup-attachments.com/t90161611204/1b036e48-f883-4ba1-9812-bdcf04a65796/techiehelp.apk" },
  { title: "Training & Internships", path: "/careers/training-internships" },
  { title: "Career Opportunities", path: "/careers/jobs" },
  { title: "Verify Certificate", path: "/verify-certificate" },
  { title: "Campus Ambassador", path: "/campus-ambassador" },
  { title: "Community Partnership", path: "/community-partnership" },
];

const trustLinks = [
  { title: "Security Overview", path: "/security" },
  { title: "Compliance", path: "/compliance" },
  { title: "Data Processing Agreement", path: "/data-processing-agreement" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#02000a] text-gray-900 dark:text-gray-300 pt-20 relative overflow-hidden transition-colors duration-300 border-t border-gray-200 dark:border-white/10">
      
      {/* Background glow effects for premium dark mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#33bbcf]/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Logo, Description, Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-12 border-b border-gray-200 dark:border-white/10">
          <div className="flex flex-col items-start max-w-sm">
            <img src={logo} alt="TechieHelp Logo" className="w-48 h-auto object-contain mb-2 filter dark:brightness-110" />
            <span className="text-[#33bbcf] font-bold text-sm tracking-wide uppercase mb-6">
              AI Workforce Platform
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-[15px] mb-8 leading-relaxed font-medium">
              Deploy <span className="text-[#33bbcf] font-semibold">AI Employees</span> that capture leads, engage customers, automate workflows, and help businesses scale operations 24/7.
            </p>
            
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <a href="https://www.linkedin.com/company/techiehelp" target="_blank" rel="noopener noreferrer" className="hover:text-[#33bbcf] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.f6s.com/company/techiehelp" target="_blank" rel="noopener noreferrer" className="hover:text-[#33bbcf] transition-colors">
                <F6SIcon size={20} />
              </a>
              <a href="https://www.youtube.com/@techiehelp" target="_blank" rel="noopener noreferrer" className="hover:text-[#33bbcf] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61564958817014#" target="_blank" rel="noopener noreferrer" className="hover:text-[#33bbcf] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/techiehelp.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#33bbcf] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-auto max-w-md">
            <h5 className="text-xs font-bold text-gray-900 dark:text-white tracking-wider uppercase mb-3">Get Product Updates</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              Receive hiring updates, internship opportunities, AI industry insights, product announcements, startup programs, and exclusive TechieHelp news directly in your inbox.
            </p>
            
            <div className="flex w-full mb-5">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-l-lg px-4 py-3 text-sm outline-none focus:border-[#33bbcf] transition-colors text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button className="bg-[#33bbcf] hover:bg-[#2cb2c6] text-gray-900 font-bold px-6 py-3 rounded-r-lg transition-colors flex items-center justify-center">
                Subscribe
              </button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
              {[
                "Hiring Opportunities",
                "Internship Updates",
                "AI Industry Insights",
                "Product Announcements",
                "Startup Programs"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#33bbcf]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">
              Weekly Updates • No Spam • Unsubscribe Anytime
            </p>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  {item.path.startsWith("http") ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors flex items-center gap-2 group">
                    {item.title === "Data Processing Agreement" && <ShieldCheck className="w-3 h-3 text-gray-400 group-hover:text-[#33bbcf]" />}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4">
              {solutionLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.title}>
                  {item.path.startsWith("http") ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Trust & Security */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Trust & Security</h4>
            <ul className="space-y-4">
              {trustLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#33bbcf] dark:hover:text-[#33bbcf] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Horizontal Links & Copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 pb-16 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-500 text-sm">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/acceptable-use-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">AUP</Link>
            <Link to="/data-processing-agreement" className="hover:text-gray-900 dark:hover:text-white transition-colors">DPA</Link>
          </div>
          <div className="text-center md:text-right font-medium">
            &copy; {new Date().getFullYear()} TechieHelp. All rights reserved.
          </div>
        </div>
      </div>

      {/* Massive Bottom Text */}
      <div className="w-full flex flex-col items-center justify-end overflow-hidden relative pb-4">
        <div className="absolute top-4 w-full flex justify-center items-center z-10">
          <div className="bg-white dark:bg-[#02000a] px-4 md:px-8 text-center flex flex-col items-center">
             <p className="text-gray-600 dark:text-gray-400 tracking-widest text-xs md:text-sm font-bold uppercase mb-1">
               Empowering Your Business & Tech Journey
             </p>
             <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-500 font-semibold">
               <ShieldCheck className="w-4 h-4 text-[#33bbcf]" />
               <span>Enterprise Grade Security & Compliance</span>
             </div>
          </div>
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-100 dark:border-white/5 -z-10"></div>
        </div>
        <h1 className="text-[14vw] sm:text-[16vw] md:text-[18vw] font-black text-gray-100 dark:text-white/5 leading-[0.8] tracking-tighter select-none text-center whitespace-nowrap mt-8">
          TECHIEHELP
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
