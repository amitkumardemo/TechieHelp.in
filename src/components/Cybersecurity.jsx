import React, { useState, useEffect } from "react";
import {
  cyber,
  intern,
  overview,
  swag,
} from "../assets";
import InternshipFAQ from "./InternshipFAQ";
import { Calendar, IndianRupee, Clock, CheckCircle, Briefcase, Star, Download } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-500"></div>
  </div>
);

const Section = ({ title, children, imgSrc, imgLeft = true }) => {
  return (
    <section className="flex flex-col md:flex-row items-center my-12 md:my-20 max-w-7xl mx-auto px-6 md:px-12">
      {imgSrc && imgLeft && (
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
          <img
            src={imgSrc}
            alt={title}
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            loading="lazy"
          />
        </div>
      )}
      <div className="md:w-1/2 text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="space-y-4 text-lg leading-relaxed">{children}</div>
      </div>
      {imgSrc && !imgLeft && (
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <img
            src={imgSrc}
            alt={title}
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

const Cybersecurity = () => {
  const [loading, setLoading] = useState(true);

  // Calculate next batch start date (1st of next month in 2026)
  const nextBatchDate = new Date(2026, new Date().getMonth() + 1, 1);
  const formattedDate = nextBatchDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black min-h-screen">
      <section className="relative w-full min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 text-white flex items-center justify-center px-6 md:px-12 pt-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <header>
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-2">
                Most Popular Training Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                Cyber Security Training & Internship Program in Rajasthan
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Industry-Focused Training with Ethical Hacking, Vulnerability Assessment, and Career Support
              </h2>
              <p className="text-lg mb-3 leading-tight">
                Learn ethical hacking, protect systems from cyber threats, and get career support in Jodhpur, Jaipur, and Rajasthan.
              </p>
              <ul className="flex flex-wrap gap-4 mb-5">

                <li className="bg-white/10 px-4 py-2 rounded-full text-sm">Hands-on Ethical Hacking</li>
                <li className="bg-white/10 px-4 py-2 rounded-full text-sm">Beginner Friendly</li>
                <li className="bg-white/10 px-4 py-2 rounded-full text-sm">Career Support</li>
              </ul>

              {/* Inline Feature Row */}
              <div className="flex flex-wrap items-center gap-10 mb-7">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-base font-medium">10 Weeks</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-base font-medium">Beginner Friendly</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-base font-medium">Job Assistance</span>
                </div>
              </div>

              {/* Inline Reviews Row */}
              <div className="flex items-center gap-3 mb-9">
                <div className="flex gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-sm text-white">4.6/5 • 2k+ Reviews</span>
              </div>

              {/* Inline CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-gray-100">
                    Enroll Now – ₹499/-
                  </button>
                </a>
                <button className="border border-white text-white px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-white hover:text-blue-900 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Syllabus
                </button>
              </div>
            </header>
          </div>
          {/* Right Stats Card */}
          <div className="lg:w-1/2 max-w-lg">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">12+</div>
                  <div className="text-sm text-blue-700">Security Labs</div>
                </div>
                <div className="bg-green-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-900 mb-2">90%</div>
                  <div className="text-sm text-green-700">Placement Rate</div>
                </div>
                <div className="bg-indigo-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-900 mb-2">24/7</div>
                  <div className="text-sm text-indigo-700">Mentor Support</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-900 mb-2">₹10L</div>
                  <div className="text-sm text-yellow-700">Avg. Salary</div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 mb-6" />

              {/* Card Footer */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Next Batch Starts:</span>
                  <span className="text-sm font-semibold text-blue-600">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Pricing start from:</span>
                  <span className="text-sm font-semibold text-green-600">₹499/-</span>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 px-6 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105">
                  Enroll Now – ₹499/-
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section imgSrc={overview} imgLeft={false} title="🔥 Why Choose TechieHelp?">
        <p>
          At TechieHelp, we believe in learning by doing. Our cybersecurity internship program is designed for students, freshers, and aspiring security professionals who want to gain practical experience in ethical hacking and cybersecurity under the guidance of experienced mentors.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✔️ Recognized by MSME & Verified on AICTE Internship Portal</li>
          <li>✔️ Offer Letter + Completion Certificate + LinkedIn Badge</li>
          <li>✔️ Live Classes + Mentor Guidance + CTF Challenges + Labs</li>
          <li>✔️ Resume Review & Portfolio Building Support</li>
          <li>✔️ Intern ID with Public Records on TechieHelp Website</li>
          <li>✔️ Best Interns Get Goodies + Certificate of Excellence + LinkedIn/YouTube Feature</li>
        </ul>
      </Section>

      <Section imgSrc={cyber} imgLeft={true} title="🚀 Internship Overview">
        <p><strong>Internship Duration Options:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 Month (Beginner Level - Fundamentals)</li>
          <li>2 Months (Intermediate Level - Tools & Techniques)</li>
          <li>3 Months (Advanced Level - Real-world Scenarios)</li>
        </ul>
        <p className="mt-4">
          <strong>Mode:</strong> Online<br />
          <strong>Format:</strong> Live Sessions, Recordings, Doubt Solving, CTF Challenges<br />
          <strong>Tools Covered:</strong> Kali Linux, Metasploit, Wireshark, Burp Suite, Nmap, and More
        </p>
      </Section>

      <Section imgSrc={swag} imgLeft={false} title="🌟 What You Will Achieve">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📌 Real-World Cybersecurity Projects for Resume</li>
          <li>🛠 Ethical Hacking Portfolio + Lab Reports</li>
          <li>🎖 Certificate, Badge, and Offer Letter</li>
          <li>🤝 Networking with Security Professionals</li>
          <li>🏁 Eligibility for Excellence Awards + Public Recognition</li>
        </ul>
      </Section>

      {/* 1-Month Internship */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 1-Month Cyber Security Internship — ₹999</h2>
        <p className="text-center mb-6 font-semibold">
          Best for Beginners • Learn Fundamentals • Certificate + Badge
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full text-left text-white border border-cyan-500 rounded-lg">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-4 py-3 font-semibold border border-cyan-500">Week</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">Activity</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">What You’ll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 1</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🚀 Orientation & Platform Setup<br />
                  🛠️ Introduction to Cyber Security & Ethical Hacking
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Set up your LMS & learning environment<br />
                  ✅ Understand cybersecurity fundamentals<br />
                  ✅ Learn about ethical hacking principles
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 Network Security Basics<br />
                  🎯 Footprinting & Reconnaissance
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn network fundamentals<br />
                  ✅ Practice information gathering techniques<br />
                  ✅ Submit your first reconnaissance report
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🔍 Scanning & Enumeration<br />
                  🌐 Vulnerability Assessment Introduction
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Master scanning tools like Nmap<br />
                  ✅ Learn enumeration techniques<br />
                  ✅ Perform basic vulnerability scans
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project & Certification<br />
                  🎓 Certificate Distribution + Portfolio Review
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Complete your security assessment project<br />
                  ✅ Get personal review by mentors<br />
                  ✅ Receive your verified certificate and badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2-Month Internship */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 2-Month Cyber Security Internship — ₹1499</h2>
        <p className="text-center mb-6 font-semibold">
          Intermediate Level • Advanced Tools • Build Strong Portfolio
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full text-left text-white border border-cyan-500 rounded-lg">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-4 py-3 font-semibold border border-cyan-500">Week</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">Activity</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">What You’ll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 1</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🎯 Advanced Reconnaissance<br />
                  📦 Kali Linux Environment Setup
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Set up professional security environment<br />
                  ✅ Master advanced information gathering<br />
                  ✅ Learn OSINT techniques
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧠 Web Application Security<br />
                  🔁 SQL Injection & XSS Attacks
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Understand web vulnerabilities<br />
                  ✅ Practice common web attacks ethically<br />
                  ✅ Learn prevention techniques
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧱 Wireless Network Security<br />
                  🔍 WiFi Penetration Testing
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn wireless security concepts<br />
                  ✅ Practice WiFi hacking techniques<br />
                  ✅ Submit wireless security assessment
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚛️ Social Engineering<br />
                  🔧 Phishing Attack Simulations
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Understand social engineering principles<br />
                  ✅ Learn phishing techniques and prevention<br />
                  ✅ Create awareness materials
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 5</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧱 Cryptography Fundamentals<br />
                  🎨 Digital Forensics Introduction
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn encryption and decryption<br />
                  ✅ Introduction to digital forensics<br />
                  ✅ Practice basic forensic analysis
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 6</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧑‍🏫 Incident Response<br />🔄 Mid-term Evaluation & CTF Challenge
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn incident response procedures<br />✅ Participate in Capture The Flag challenges<br />✅ Submit project progress report
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 7</td>
                <td className="px-4 py-3 border border-cyan-500">
                  📦 Advanced Penetration Testing<br />🛠 Metasploit Framework
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Master Metasploit for penetration testing<br />✅ Learn exploit development basics<br />
                  ✅ Practice ethical exploitation techniques
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 8</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💬 Security Auditing & Reporting<br />📢 Final Project Presentations
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn to write security reports<br />✅ Present findings to mentors<br />✅ Portfolio and resume review session
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-black-gradient">
        <InternshipFAQ />
      </div>
    </div>
  );
};

export default Cybersecurity;
