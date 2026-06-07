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

const internshipLinks = [
  { title: "Web Development", path: "/webdevelopment" },
  { title: "App Development", path: "/androiddevelopment" },
  { title: "UI/UX Design", path: "/uiux" },
  { title: "SEO & Digital Marketing", path: "/seo" },
  { title: "Artificial Intelligence", path: "/ai" },
  { title: "Machine Learning", path: "/machinelearning" },
  { title: "Front-End Developer", path: "/frontend" },
  { title: "Back-End Developer", path: "/backend" },
  { title: "Full Stack Developer", path: "/fullstack" },
  { title: "MERN Stack Developer", path: "/mern" },
  { title: "Python Developer", path: "/python" },
  { title: "Java Developer", path: "/java" },
  { title: "Java Full Stack Developer", path: "/javafull" },
  { title: "React Developer", path: "/react" },
  { title: "JavaScript Developer", path: "/javascript" },
  { title: "Node.js Developer", path: "/node" },
  { title: "AI/ML Developer", path: "/aiml" },
  { title: "DevOps", path: "/devops" },
];

const jobsLinks = [
  { title: "Web Developer", path: "/careers/jobs" },
  { title: "App Developer", path: "/careers/jobs" },
  { title: "UI/UX Designer", path: "/careers/jobs" },
  { title: "SEO Specialist", path: "/careers/jobs" },
  { title: "Digital Marketing Specialist", path: "/careers/jobs" },
  { title: "Tech Consultant", path: "/careers/jobs" },
  { title: "Maintenance & Support Engineer", path: "/careers/jobs" },
  { title: "AI Agent Developer", path: "/careers/jobs" },
  { title: "AI Chatbot Developer", path: "/careers/jobs" },
  { title: "AI Automation Engineer", path: "/careers/jobs" },
  { title: "Computer Vision Engineer", path: "/careers/jobs" },
  { title: "Predictive Analytics Specialist", path: "/careers/jobs" },
  { title: "Generative AI Specialist", path: "/careers/jobs" },
  { title: "AI Education Specialist", path: "/careers/jobs" },
  { title: "Speech & Voice AI Specialist", path: "/careers/jobs" },
];

const serviceLinks = [
  { title: "Web Development", path: "/webdevelopment" },
  { title: "App Development", path: "/app-development-services" },
  { title: "UI/UX Design", path: "/uiuxservices" },
  { title: "SEO Optimization", path: "/seooptimizationservices" },
  { title: "Digital Marketing", path: "/digitalmarketingservices" },
  { title: "Tech Consulting", path: "/techconsultingservices" },
  { title: "Maintenance & Support", path: "/maintenancesupportservices" },
  { title: "AI Agents", path: "/aiagentsservices" },
  { title: "AI Chatbots & Virtual Assistants", path: "/aichatbotsservices" },
  { title: "AI Automation Solutions", path: "/aiautomationservices" },
  { title: "Computer Vision", path: "/computervisionservices" },
  { title: "Predictive Analytics", path: "/predictiveanalyticsservices" },
  { title: "Generative AI Solutions", path: "/generativeaiservices" },
  { title: "AI for Education", path: "/aieducationservices" },
  { title: "Speech & Voice AI", path: "/speechvoiceaiservices" },
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
            <a href="https://www.facebook.com/techiehelp" target="_blank" rel="noopener noreferrer" aria-label="TechieHelp Facebook">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/techiehelp" target="_blank" rel="noopener noreferrer" aria-label="TechieHelp Instagram">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/techiehelp" target="_blank" rel="noopener noreferrer" aria-label="TechieHelp LinkedIn">
              <Linkedin />
            </a>
            <a href="https://www.youtube.com/@techiehelp" target="_blank" rel="noopener noreferrer" aria-label="TechieHelp YouTube">
              <Youtube />
            </a>
            <a href="https://twitter.com/techiehelp" target="_blank" rel="noopener noreferrer" aria-label="TechieHelp Twitter">
              <Twitter />
            </a>
          </div>

          <ul className="mt-4">
            <li>
              <a
                href="https://wa.me/7073130165?text=Hello%2C%20I%20am%20interested%20in%20becoming%20a%20partner%20with%20TechieHelp."
                className="hover:underline text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner
              </a>
            </li>
          </ul>
        </div>

        {/* Internships */}
        <div><Link to="/careers/training-internships">
  <h4 className="text-lg font-semibold mb-4 hover:underline">Training / Internships</h4>
</Link>

          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2">
              {internshipLinks.slice(0, Math.ceil(internshipLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {internshipLinks.slice(Math.ceil(internshipLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Jobs */}
        
          <div><Link to="/careers/jobs">
  <h4 className="text-lg font-semibold mb-4 hover:underline">Career / Jobs</h4>
</Link>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2">
              {jobsLinks.slice(0, Math.ceil(jobsLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {jobsLinks.slice(Math.ceil(jobsLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2">
              {serviceLinks.slice(0, Math.ceil(serviceLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <a href={item.path} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {serviceLinks.slice(Math.ceil(serviceLinks.length / 2)).map((item) => (
                <li key={item.title}>
                  <a href={item.path} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
