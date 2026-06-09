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
  Twitter,
} from "lucide-react";

const serviceLinks = [
  { title: "AI Lead Capture Engine", path: "/services/ai-lead-engine" },
  { title: "AI Phone Calling Agents", path: "/services/ai-calling-agents" },
  { title: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
  { title: "Voice AI Systems", path: "/services/voice-ai-system" },
  { title: "QualifyAI Dashboard", path: "/qualifyai-dashboard" },
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

const companyLinks = [
  { title: "About Us", path: "/about-us" },
  { title: "Our Portfolio", path: "/project-portfolio" },
  { title: "Contact Us", path: "/contacts" },
  { title: "Founder & CEO Profile", path: "/team/amit-kumar-founder-ceo-techiehelp" },
];


const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="TechieHelp Logo" className="w-48 h-20 mb-2" />
          <p className="text-gray-400 mt-1">Empowering Your Business & Tech Journey</p>

          <div className="flex justify-center gap-4 text-white text-2xl mt-4">
            <a href="https://www.facebook.com/techiehelp" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/techiehelp" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/techiehelp" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://www.youtube.com/@techiehelp" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
            <a href="https://twitter.com/techiehelp" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
                className="hover:underline text-blue-400 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner — Book Discussion
              </a>
            </li>
            <li className="pt-2">
              <a
                href="https://t90161611204.p.clickup-attachments.com/t90161611204/1b036e48-f883-4ba1-9812-bdcf04a65796/techiehelp.apk"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-xs rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.523 15.3c-.149 0-.29-.059-.4-.165l-4.14-4.14v8.305c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.305l-4.14 4.14c-.105.105-.246.165-.4.165-.313 0-.565-.252-.565-.565 0-.15.06-.29.165-.4l5.29-5.29c.105-.105.25-.165.4-.165s.295.06.4.165l5.29 5.29c.105.11.165.25.165.4 0 .313-.252.565-.565.565zm-11.023-5.3c-.276 0-.5-.224-.5-.5v-4c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5 1.57 3.5 3.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-1.378-1.122-2.5-2.5-2.5h-5c-1.378 0-2.5 1.122-2.5 2.5v4c0 .276-.224.5-.5.5z"/>
                </svg>
                <span>Download Android App</span>
              </a>
            </li>
          </ul>
        </div>

        {/* AI Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">AI Solutions</h4>
          <ul className="space-y-2">
            {serviceLinks.map((item) => (
              <li key={item.title}>
                {item.path.startsWith("http") ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.path} className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Resources</h4>
          <ul className="space-y-2">
            {resourceLinks.map((item) => (
              <li key={item.title}>
                {item.path.startsWith("http") ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.path} className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((item) => (
              <li key={item.title}>
                {item.path.startsWith("http") ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.path} className="hover:underline text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & Legal */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-6">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} TechieHelp. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link to="/policy" className="hover:text-blue-400 hover:underline transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-400 hover:underline transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
