import React, { useState, useEffect } from "react";
import {
  webdevelopment,
  intern,
  overview,
  swag,
  certificate,
  recommendation,
  AmitPhoto,
  mdAmzad,
  aarshdeepcertificate,
  aarshdeepdiary,
  aarshdeeptrophy,
  groups,
  hod,
  rohitdiary,
  rohittrophy,
  simrancertificate,
  simrandiary,
  simrantrophy,
  simrantshirt,
  aryan1,
  aryan2,
  sixty,
  coreTeam,
  amazad,
  tit,
  delhiJudge,
  recon,
  kitInt,
  kit,
  kitNodha,
  kitCert,
  aryanp,
} from "../assets";
import InternshipFAQ from "./InternshipFAQ";
import { Calendar, IndianRupee, Clock, CheckCircle, Briefcase, Star, Download, QrCode, Shield, Award, Linkedin } from 'lucide-react';

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

const TypingAnimation = () => {
  const roles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Deep Learning Specialist",
    "AI Research Analyst",
    "Computer Vision Engineer",
    "NLP Engineer",
    "AI Product Manager"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText(prev => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 min-h-[120px] flex items-center justify-center">
        Become a <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {currentText}
        </span>
        <span className="animate-pulse text-blue-600">|</span>
      </h1>
    </div>
  );
};

const AI = () => {
  const [loading, setLoading] = useState(true);
  const [activeMonth, setActiveMonth] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

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

  const timelineData = [
    [
      {
        week: 'Week 1',
        rows: [
          {
            timeline: 'Day First',
            includes: [
              { type: 'normal', text: 'Program orientation & onboarding' },
              { type: 'normal', text: 'Program overview & expectations' },
              { type: 'normal', text: 'AI tools setup guidance (Python, Jupyter, Google Colab)' },
              { type: 'normal', text: 'Introduction to internship workflow' },
              { type: 'project', level: 'beginner', title: 'Basic AI Environment Setup Task', subtitle: 'Hands-on task with Python and AI libraries setup' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Monday to Saturday', includes: [] },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 2',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Introduction to AI fundamentals' },
              { type: 'normal', text: 'Understanding machine learning concepts' },
              { type: 'normal', text: 'Python programming for AI' },
              { type: 'normal', text: 'Weekly doubt-solving session with mentor' },
              { type: 'project', level: 'beginner', title: 'Python AI Basics Project', subtitle: 'Build simple AI programs using Python' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 3',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Data preprocessing and analysis' },
              { type: 'normal', text: 'Supervised learning algorithms' },
              { type: 'normal', text: 'Model training and evaluation' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'intermediate', title: 'ML Model Training Project', subtitle: 'Train and evaluate machine learning models' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 4',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Deep learning fundamentals' },
              { type: 'normal', text: 'Neural networks and TensorFlow' },
              { type: 'normal', text: 'Computer vision basics' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'hard', title: 'Deep Learning Image Classification', subtitle: 'Build CNN models for image recognition' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
    ],
    [
      {
        week: 'Week 5-8',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Natural Language Processing (NLP) fundamentals' },
              { type: 'normal', text: 'Computer Vision and image processing' },
              { type: 'normal', text: 'Reinforcement learning basics' },
              { type: 'normal', text: 'AI ethics and responsible AI practices' },
              { type: 'project', level: 'intermediate', title: 'NLP Text Analysis Project', subtitle: 'Build sentiment analysis and text classification models' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 9-12',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Deep learning architectures and frameworks' },
              { type: 'normal', text: 'Model deployment and production' },
              { type: 'normal', text: 'AI model optimization and performance tuning' },
              { type: 'normal', text: 'Cloud AI services (AWS, GCP, Azure)' },
              { type: 'project', level: 'intermediate', title: 'AI Model Deployment Project', subtitle: 'Deploy and monitor AI models in production environment' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 13-16',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Advanced AI applications and case studies' },
              { type: 'normal', text: 'AI research and latest trends' },
              { type: 'normal', text: 'AI product development and strategy' },
              { type: 'normal', text: 'AI career guidance and job preparation' },
              { type: 'project', level: 'hard', title: 'Complete AI Solution Implementation', subtitle: 'Develop and implement a full AI solution for a real-world problem' },
              { type: 'normal', text: 'HR Placement Preparation Sessions' }
            ]
          },
          { timeline: 'Sunday', includes: [] },
          { timeline: 'Last Day', includes: [] }
        ]
      },
    ],
    [
      {
        week: 'Week 1-4',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'AI applications in healthcare and finance' },
              { type: 'normal', text: 'AI for autonomous systems and robotics' },
              { type: 'normal', text: 'AI in gaming and entertainment' },
              { type: 'normal', text: 'AI-powered recommendation systems' },
              { type: 'project', level: 'intermediate', title: 'AI Application Development', subtitle: 'Build AI solutions for real-world industry problems' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 5-8',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'AI in cybersecurity and threat detection' },
              { type: 'normal', text: 'AI for predictive analytics and forecasting' },
              { type: 'normal', text: 'AI-powered chatbots and virtual assistants' },
              { type: 'normal', text: 'AI in supply chain and logistics' },
              { type: 'project', level: 'hard', title: 'Advanced AI System Implementation', subtitle: 'Develop complex AI systems with multiple components' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 9-12',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'AI research methodologies and papers' },
              { type: 'normal', text: 'AI model interpretability and explainability' },
              { type: 'normal', text: 'AI governance and regulatory compliance' },
              { type: 'normal', text: 'Future trends in AI and machine learning' },
              { type: 'project', level: 'hard', title: 'AI Research and Innovation Project', subtitle: 'Conduct AI research and develop innovative solutions' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
    ],
    [
      {
        week: 'Week 1-4',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'AI for startups and SMEs' },
              { type: 'normal', text: 'Budget-constrained AI solutions' },
              { type: 'normal', text: 'Quick AI implementations and long-term AI strategy' },
              { type: 'normal', text: 'AI ROI measurement and business impact' },
              { type: 'project', level: 'hard', title: 'Startup AI Solution', subtitle: 'Develop AI solution for a startup with limited resources' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 5-8',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Advanced AI analytics and monitoring' },
              { type: 'normal', text: 'AI automation and workflow optimization' },
              { type: 'normal', text: 'Competitor AI analysis and benchmarking' },
              { type: 'normal', text: 'AI trend forecasting and future predictions' },
              { type: 'project', level: 'hard', title: 'Advanced AI Analytics Dashboard', subtitle: 'Implement advanced AI tracking and competitor analysis' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 9-12',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'AI consulting and client engagement' },
              { type: 'normal', text: 'AI project proposal writing and pricing' },
              { type: 'normal', text: 'AI team leadership and management' },
              { type: 'normal', text: 'Building AI solution processes and methodologies' },
              { type: 'project', level: 'hard', title: 'AI Consulting Project', subtitle: 'Lead an AI project as a consultant' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 13-16',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Internship performance evaluation' },
              { type: 'normal', text: 'Recommendation letter & certificate eligibility' },
              { type: 'normal', text: 'Mock interviews & HR preparation sessions' },
              { type: 'normal', text: 'Placement guidance & referral support' },
              { type: 'project', level: 'hard', title: 'Final AI Project Submission', subtitle: 'Complete and submit final AI solution project' },
              { type: 'normal', text: 'HR Placement Sessions' }
            ]
          },
          { timeline: 'Sunday', includes: [] },
          { timeline: 'Last Day', includes: [] }
        ]
      },
    ],
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black min-h-screen">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <section className="relative w-full min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 text-white flex items-center justify-center px-6 md:px-12 pt-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <header>
              <div className="inline-block bg-yellow-500 text-black px-5 py-1 rounded-full text-xs font-medium mb-1">
                Most Trusted Internship Program • AICTE & NIP Aligned
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-snug max-w-4xl">
                <span className="text-yellow-300 font-bold">AI</span> Internship & Training Program
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                Master artificial intelligence, machine learning, deep learning, and AI tools to build intelligent systems and earn a verified internship certificate that helps in placements.
              </h2>
              <p className="text-base mb-2 leading-relaxed">
                This is not just a course. It's a structured internship experience with live AI projects, mentor guidance, recommendation letter, and placement-focused support.
              </p>
              <ul className="flex flex-wrap gap-3 mb-3">
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">✔ Live AI Projects</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">✔ Beginner Friendly (No Prior Experience Needed)</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">✔ Certificate + Recommendation Letter</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">✔ Placement & Career Support</li>
              </ul>

              {/* Inline Feature Row */}
              <div className="flex flex-wrap items-center gap-8 mb-4">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium">10–16 Weeks Internship</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Placement-Oriented Learning</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">24/7 Mentor & Doubt Support</span>
                </div>
              </div>

              {/* Inline Reviews Row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-white">⭐ 4.6/5 Rated by 2,000+ Students | Trusted by Colleges & Recruiters</span>
              </div>

              {/* Inline CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-gray-100">
                    Start Internship – ₹499/-
                  </button>
                </a>
                <a
  href="https://drive.google.com/file/d/1KMG5JObcneMBHqcKw_JZmCC2l9lEI3s6/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white text-white px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-white hover:text-blue-900 flex items-center gap-2"
>
  <Download className="w-4 h-4" />
  Download Internship Syllabus
</a>

              </div>
              <p className="text-xs text-gray-300 mt-1">Limited seats • Certificate + Projects Included • Beginner Friendly</p>
            </header>
          </div>
          {/* Right Stats Card */}
          <div className="lg:w-1/2 max-w-lg">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                  <div className="text-sm text-blue-700">Industry-Level Live Projects</div>
                </div>
                <div className="bg-green-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-900 mb-2">95%</div>
                  <div className="text-sm text-green-700">Students Improved Placement Readiness</div>
                </div>
                <div className="bg-indigo-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-900 mb-2">24/7</div>
                  <div className="text-sm text-indigo-700">Mentor & Career Support</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-900 mb-2">₹12 LPA</div>
                  <div className="text-sm text-yellow-700">Highest Reported Package</div>
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
              <p className="text-xs text-gray-500 mt-4">Based on past learner outcomes & placement support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full bg-slate-50 py-4 border-t border-b border-slate-200 overflow-hidden">
        <div className="animate-marquee flex items-center space-x-4 whitespace-nowrap">
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Highest Package ₹12 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">₹8 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">₹6 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">MSME Registered Training Partner</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">National Internship Portal Certified</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">ISO 9001:2015 Certified</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">15,000+ Students Trained</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Industry Expert Trainers</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Live Project Based Training</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Career Support & Job Assistance</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Welcome Kit Provided</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">4.6/5 Rating by 2,000+ Learners</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Highest Package ₹12 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">₹8 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">₹6 LPA</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">MSME Registered Training Partner</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">National Internship Portal Certified</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">ISO 9001:2015 Certified</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">15,000+ Students Trained</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Industry Expert Trainers</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Live Project Based Training</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Career Support & Job Assistance</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">Welcome Kit Provided</span>
          <span className="bg-slate-200 rounded-full px-4 py-2 text-sm font-medium border border-slate-300 text-slate-800">4.6/5 Rating by 2,000+ Learners</span>
        </div>
      </section>

      {/* Why Choose TechieHelp Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TechieHelp Internship?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Practical, industry-focused internship programs designed to help students and freshers build real-world skills and career readiness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">MSME Recognized & Verified on AICTE Internship Portal</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Offer Letter & Completion Certificate</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">LinkedIn Badge & Public Verification</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Live Classes & Expert Mentor Guidance</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <Download className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Real-World Projects & Hackathons</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-teal-100 rounded-full p-3 flex-shrink-0">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Resume Review & GitHub Hosting Support</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Intern ID with Public Records on TechieHelp Website</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">Top Performers Get Goodies & Certificate of Excellence</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">LinkedIn & YouTube Feature Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Overview Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🚀 Internship Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Flexible online & offline internship programs designed for students, freshers, and working professionals to build career-ready skills with industry experts.
            </p>
          </div>

          {/* Internship Duration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1 Month</h3>
                <p className="text-gray-600 font-medium mb-2">Beginner Level</p>
                <p className="text-sm text-gray-500">For students starting from scratch</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2 Months</h3>
                <p className="text-gray-600 font-medium mb-2">Intermediate Level</p>
                <p className="text-sm text-gray-500">Project-based skill development</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Months</h3>
                <p className="text-gray-600 font-medium mb-2">Advanced + Full-Stack Level</p>
                <p className="text-sm text-gray-500">Career-ready training with real-world projects</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Duration</h3>
                <p className="text-gray-600 font-medium mb-2">As Per Student Requirement</p>
                <p className="text-sm text-gray-500">Flexible timeline based on learning pace, college schedule, or goals</p>
              </div>
            </div>
          </div>

          {/* Mode & Learning Format */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Learning Modes & Formats</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Online Internship</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Offline Classroom Training (Limited Seats)</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Live Sessions</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Recorded Videos</span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Doubt Solving Support</span>
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">Hackathons & Assessments</span>
            </div>
          </div>

          {/* Trust & Certification Block */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Trust & Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-900 font-medium">MSME Recognized Training Program</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-900 font-medium">Offer Letter & Completion Certificate</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-gray-900 font-medium">Intern ID with Public Verification</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-gray-900 font-medium">Mentorship by Industry Experts</p>
              </div>
            </div>
          </div>

          {/* Career Outcomes Strip */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Career Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <Download className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Resume Review</p>
              </div>
              <div>
                <Star className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">GitHub Portfolio Setup</p>
              </div>
              <div>
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Career & Placement Guidance</p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Top Performer Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Achieve Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🌟 What You Will Achieve</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Gain tangible career outcomes, industry-recognized certificates, and real-world experience that sets you apart in the competitive job market.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-World AI Projects for Portfolio</h3>
                  <p className="text-gray-600 text-sm">Build comprehensive AI portfolios with machine learning models and performance reports</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Model Reports & Analytics Dashboards</h3>
                  <p className="text-gray-600 text-sm">Professional AI reports with data-driven insights and model recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 group-hover:bg-purple-200 transition-colors flex-shrink-0">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Internship Offer Letter</h3>
                  <p className="text-gray-600 text-sm">Official internship offer letter for your professional records</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Training Certificate</h3>
                  <p className="text-gray-600 text-sm">Industry-recognized training completion certificate</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 rounded-full p-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Course Completion Certificate</h3>
                  <p className="text-gray-600 text-sm">Verified course completion certificate from TechieHelp</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3 group-hover:bg-pink-200 transition-colors flex-shrink-0">
                  <IndianRupee className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Internship Completion Certificate</h3>
                  <p className="text-gray-600 text-sm">Official internship completion certificate with performance details</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-full p-3 group-hover:bg-indigo-200 transition-colors flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn Badge & Certificate of Excellence (Top Performers)</h3>
                  <p className="text-gray-600 text-sm">LinkedIn verification badge and excellence certificate for outstanding performance</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 rounded-full p-3 group-hover:bg-yellow-200 transition-colors flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Topic-Wise Quizzes with Quiz Completion Certificates</h3>
                  <p className="text-gray-600 text-sm">Individual certificates for each topic quiz you complete successfully</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Letter of Recommendation (Performance Based)</h3>
                  <p className="text-gray-600 text-sm">Professional recommendation letter from industry mentors</p>
                </div>
              </div>
            </div>

            {/* Full-width final item */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white md:col-span-2 lg:col-span-3 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 rounded-full p-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Networking with Like-Minded AI Professionals & Public Recognition</h3>
                <p className="text-lg opacity-90">Connect with fellow AI experts, build lasting professional relationships, and get featured on TechieHelp platforms for outstanding AI achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Placement Support</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Structured career assistance to help you prepare, apply, and succeed in your job journey.
            </p>
          </div>

          {/* Placement Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Company-Wise DSA Preparation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Curated DSA sheets based on real hiring patterns of top companies.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Resume Review & Optimization</h3>
                <p className="text-gray-300 text-sm leading-relaxed">One-to-one resume reviews to make your profile recruiter-ready.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mentor-Led Interview Guidance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Mock interviews, feedback sessions, and expert mentor support.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hiring & Placement Assistance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Access to job opportunities, referrals, and partner hiring drives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Guidance & Placement Support Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mentor Guidance & Placement Support</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get direct guidance from industry mentors to prepare for internships and placements.
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{/* Mentor 1 */}
<div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
  {/* Profile */}
  <div className="text-center mb-4">
    <img
      src={mdAmzad}
      alt="MD Amzad - AI Instructor"
      className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg object-cover"
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">
      MD Amzad
    </h3>
    <p className="text-sm text-blue-600 font-medium">
      AI Instructor • 2+ Years Experience
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-center text-sm leading-relaxed">
    AI Instructor at <span className="font-medium">TechieHelp</span> with 2+ years of
    hands-on experience in artificial intelligence, machine learning, deep learning,
    and guiding students in real-world AI practices.
  </p>

  {/* Support Highlights */}
  <div className="mb-4">
    <h4 className="text-base font-semibold text-gray-900 mb-2">
      Support Highlights:
    </h4>
    <ul className="space-y-2 text-gray-700 text-sm">
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Practical AI concepts & fundamentals</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Hands-on machine learning, deep learning & AI guidance</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Project-based mentoring aligned with industry AI standards</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Career guidance for AI & ML roles</span>
      </li>
    </ul>
  </div>

  {/* LinkedIn */}
  <div className="text-center">
    <a
      href="https://www.linkedin.com/in/cyberaryan/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      aria-label="LinkedIn Profile"
    >
      <Linkedin className="w-5 h-5" />
      <span className="text-sm font-medium">Connect on LinkedIn</span>
    </a>
  </div>
</div>



            {/* Mentor 2 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
  {/* Profile */}
  <div className="text-center mb-4">
    <img
      src={AmitPhoto}
      alt="Amit Kumar - Founder TechieHelp"
      className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg object-cover"
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">
      Amit Kumar
    </h3>
    <p className="text-sm text-blue-600 font-medium">
      Founder & Placement Lead Mentor – TechieHelp
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-center text-sm leading-relaxed">
    Founder of <span className="font-medium">TechieHelp</span> with hands-on experience in
    building internship programs, mentoring students, and preparing
    candidates for real-world placements across tech domains.
  </p>

  {/* Support Highlights */}
  <div className="mb-4">
    <h4 className="text-base font-semibold text-gray-900 mb-2">
      Support Highlights:
    </h4>
    <ul className="space-y-2 text-gray-700 text-sm">
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>End-to-end placement & internship guidance</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Resume building, LinkedIn optimization & portfolio strategy</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Project selection & real-world internship roadmap planning</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Interview preparation & career decision mentoring</span>
      </li>
    </ul>
  </div>

  {/* LinkedIn */}
  <div className="text-center">
    <a
      href="https://www.linkedin.com/in/amit-kumar-686196225/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      aria-label="LinkedIn Profile"
    >
      <Linkedin className="w-5 h-5" />
      <span className="text-sm font-medium">Connect on LinkedIn</span>
    </a>
  </div>
</div>


          
            
          </div>
        </div>
      </section>

      {/* Career Outcome Section with Typing Animation */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              Your Future Career Roles
            </span>
          </div>

          {/* Dynamic Typing Heading */}
          <TypingAnimation />

          {/* Supporting Content */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Through TechieHelp's comprehensive training, real-world projects, and expert mentorship, you'll be prepared for high-demand roles in AI across startups and established companies.
            </p>
          </div>

          {/* Career Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth & Skill Progression</h3>
                <p className="text-gray-600">Industry-relevant skills aligned with hiring needs and future tech trends.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Roles Across Startups & IT Companies</h3>
                <p className="text-gray-600">Prepared for internships, entry-level, and junior positions in diverse organizations.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <CheckCircle className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project-Based Learning Advantage</h3>
                <p className="text-gray-600">Practical experience that recruiters actually value in technical interviews.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105">
                  Start Your Tech Career
                </button>
              </a>
              <button onClick={() => document.getElementById('student-reviews').scrollIntoView({ behavior: 'smooth' })} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300">
                View Student Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies & Tools You Will Learn</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Master industry-standard AI tools and platforms used by professionals to build intelligent systems and solve real-world problems.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" alt="scikit-learn" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">scikit-learn</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="TensorFlow" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">TensorFlow</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pytorch_logo.png/1200px-Pytorch_logo.png" alt="PyTorch" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">PyTorch</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" alt="pandas" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">pandas</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png" alt="NumPy" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">NumPy</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="Python" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Python</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png" alt="Jupyter" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Jupyter</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Google_Colaboratory_SVG_Logo.svg/1200px-Google_Colaboratory_SVG_Logo.svg.png" alt="Google Colab" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Google Colab</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pandas_logo.svg/1200px-Pandas_logo.svg.png" alt="matplotlib" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">matplotlib</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png" alt="seaborn" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">seaborn</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matplotlib_logo.svg/1200px-Matplotlib_logo.svg.png" alt="Keras" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Keras</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/OpenCV_Logo_with_text.png/1200px-OpenCV_Logo_with_text.png" alt="OpenCV" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">OpenCV</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/NLTK_logo.svg/1200px-NLTK_logo.svg.png" alt="NLTK" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">NLTK</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png" alt="Apache Spark" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Apache Spark</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png" alt="Flask" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Flask</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="FastAPI" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">FastAPI</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews & Success Stories Section */}
      <section id="student-reviews" className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🎓 Student Reviews & Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hear directly from our students about their learning experience, projects, and career growth with TechieHelp.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
  <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
  <div className="aspect-[9/16]">
    <iframe
      src="https://www.youtube.com/embed/Ia1EOzjVwEY"
      title="Student Review"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full rounded-md"
    ></iframe>
  </div>
</div>

<div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
  <div className="aspect-[9/16]">
    <iframe
      src="https://www.youtube.com/embed/l5Ox9Z1AJow"
      title="Student Review"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full rounded-md"
    ></iframe>
  </div>
</div>




            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/ywZ-_qpzRNY"
                  title="Student Review 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Certificate Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Certificate Image */}
            <div className="md:w-1/2">
              <img
                src={certificate}
                alt="Completion Certificate"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            {/* Right: Content */}
            <div className="md:w-1/2 text-gray-900">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Completion Certificate</h2>
              <p className="text-lg mb-6">We provide an industry-recognized certification that validates your skills, internship experience, and project work through verified and trusted channels.</p>
              <h3 className="text-xl font-semibold mb-2">TechieHelp AI Internship Certificate</h3>
              <p className="text-base mb-6">This certificate is issued after successful completion of training, projects, and assessments. It is designed to validate real skills, not just course attendance. Each certificate is verifiable and transparent for recruiters and institutions.</p>
              {/* Trust Points */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Trust & Verification Points</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>National Internship Portal (NIP) Listed Internship</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>AICTE-Recognized Internship Program</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>QR Code / Scanner-Based Verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Public Profile Verification on TechieHelp Website</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Unique Certificate ID for Every Intern</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span>Linked to Internship Duration & Projects Completed</span>
                  </li>
                </ul>
              </div>
              {/* Verification Note */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-blue-800">Every certificate can be verified by scanning the QR code or visiting the intern’s public profile on the TechieHelp website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Letter Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Content */}
            <div className="md:w-1/2 text-gray-900">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommendation Letter (Placement Support)</h2>
              <p className="text-lg mb-6">This recommendation letter strengthens your resume and supports internship-to-placement transitions by highlighting your performance, skills, and project contributions.</p>
              <h3 className="text-xl font-semibold mb-2">TechieHelp Internship Letter of Recommendation</h3>
              {/* Trust Points */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Placement-Focused Trust Points</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Issued based on intern performance & project quality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Helps in resume shortlisting and HR screening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Linked to the intern’s public TechieHelp profile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>QR Code / ID-based verification for recruiters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Suitable for jobs, internships, and higher studies</span>
                  </li>
                </ul>
              </div>
              {/* Verification Note */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-blue-800">Recruiters and institutions can verify this recommendation letter via QR code or the intern’s public TechieHelp profile.</p>
              </div>
            </div>
            {/* Right: Recommendation Letter Image */}
            <div className="md:w-1/2">
              <img
                src={recommendation}
                alt="Recommendation Letter"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements & Certification Moments Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Achievements & Certification Moments</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real students. Real certificates. Real internship outcomes. A glimpse of our interns receiving verified certificates, goodies, and recognition after completing live projects.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-end mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setAutoScroll(true)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  autoScroll ? 'bg-blue-600 text-white' : 'text-blue-600'
                }`}
              >
                Auto Scroll
              </button>
              <button
                onClick={() => setAutoScroll(false)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  !autoScroll ? 'bg-blue-600 text-white' : 'text-blue-600'
                }`}
              >
                Manual Scroll
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className={autoScroll ? 'overflow-hidden' : 'overflow-x-auto'}>
            <div
              className={`flex gap-4 ${autoScroll ? 'animate-scroll' : ''} hover:pause`}
              style={{ width: '200%' }}
            >
              {[aryan1, aryan2, sixty, coreTeam, amazad, tit, delhiJudge, recon, kitInt, kit, kitNodha, kitCert, aarshdeepcertificate, aarshdeepdiary, aarshdeeptrophy, groups, hod, rohitdiary, rohittrophy, simrancertificate, simrandiary, simrantrophy, simrantshirt].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Achievement ${index + 1}`}
                  className="w-64 h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0"
                />
              ))}
              {[aryan1, aryan2, sixty, coreTeam, amazad, tit, delhiJudge, recon, kitInt, kit, kitNodha, kitCert, aarshdeepcertificate, aarshdeepdiary, aarshdeeptrophy, groups, hod, rohitdiary, rohittrophy, simrancertificate, simrandiary, simrantrophy, simrantshirt].map((img, index) => (
                <img
                  key={`dup-${index}`}
                  src={img}
                  alt={`Achievement ${index + 1}`}
                  className="w-64 h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Trust Line */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              All certificates and recognitions are awarded after successful completion of real internship projects and milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Program Timeline Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Timeline</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real experiences from learners who achieved their goals and transformed careers with our guidance and support.
            </p>
          </div>

          {/* Month Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Month 1', 'Month 2', 'Month 3', 'Month 4'].map((month, index) => (
              <button
                key={index}
                onClick={() => setActiveMonth(index)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeMonth === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Timeline Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <th className="px-4 py-2 border border-gray-300 text-left font-semibold">Weeks</th>
                  <th className="px-4 py-2 border border-gray-300 text-left font-semibold">Timeline</th>
                  <th className="px-4 py-2 border border-gray-300 text-left font-semibold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {timelineData[activeMonth] && timelineData[activeMonth].length > 0 ? (
                  timelineData[activeMonth].map((week, weekIdx) => (
                    <React.Fragment key={weekIdx}>
                      {week.rows.map((row, rowIdx) => (
                        <tr key={`${weekIdx}-${rowIdx}`} className={rowIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                          {rowIdx === 0 && (
                            <td rowSpan={week.rows.length} className="px-4 py-2 border border-gray-300 font-semibold">
                              {week.week}
                            </td>
                          )}
                          <td className="px-4 py-2 border border-gray-300">{row.timeline}</td>
                          {rowIdx === 0 && <td rowSpan={week.rows.length} className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col gap-1">
                              {Array.isArray(row.includes) ? row.includes.map((item, idx) => (
                                <div key={idx} className={item.type === 'project' ? `p-2 rounded border-l-4 ${item.level === 'beginner' ? 'bg-yellow-50 border-yellow-400' : item.level === 'intermediate' ? 'bg-blue-50 border-blue-400' : 'bg-red-50 border-red-400'}` : item.text.includes('Mentor') ? 'text-gray-600' : ''}>
                                  {item.type === 'project' ? (
                                    <div>
                                      <div className={`font-bold ${item.level === 'beginner' ? 'text-yellow-800' : item.level === 'intermediate' ? 'text-blue-800' : 'text-red-800'}`}>
                                        {item.level === 'beginner' ? '🟡 Beginner Project' : item.level === 'intermediate' ? '🔵 Intermediate Project' : '🔴 Hard Project'}
                                      </div>
                                      <div className="text-gray-700 font-medium">{item.title}</div>
                                      <div className="text-gray-600 text-sm">{item.subtitle}</div>
                                    </div>
                                  ) : (
                                    <div>{item.text}</div>
                                  )}
                                </div>
                              )) : row.includes.split('\n').map((item, idx) => (
                                <div key={idx} className={item.includes('⭐') ? 'font-semibold text-gray-800' : ''}>
                                  {item}
                                </div>
                              ))}
                            </div>
                          </td>}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-4 py-8 text-center text-gray-500">
                      Coming Soon
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="bg-black-gradient">
        <InternshipFAQ />
      </div>
    </div>
  );
};

export default AI;