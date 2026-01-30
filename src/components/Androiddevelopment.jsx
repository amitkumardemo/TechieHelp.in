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
    "Android Developer",
    "Mobile App Developer",
    "Android Engineer",
    "Kotlin Developer",
    "Java Android Developer",
    "UI/UX Mobile Developer",
    "Cross-Platform Developer"
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

const Androiddevelopment = () => {
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
              { type: 'normal', text: 'Tool setup guidance' },
              { type: 'normal', text: 'Introduction to internship workflow' },
              { type: 'project', level: 'beginner', title: 'Basic Tool & Workflow Setup Task', subtitle: 'Hands-on task submitted on GitHub' },
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
              { type: 'normal', text: 'Git basics (version control concepts)' },
              { type: 'normal', text: 'Commits, branches & workflows' },
              { type: 'normal', text: 'Weekly doubt-solving session with mentor' },
              { type: 'project', level: 'beginner', title: 'Git Workflow Practice Project', subtitle: 'Real-world Git usage with commits & branches' }
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
              { type: 'normal', text: 'GitHub advanced concepts' },
              { type: 'normal', text: 'Repositories, pull requests & issues' },
              { type: 'normal', text: 'Collaboration workflow used in companies' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'intermediate', title: 'GitHub Collaboration Mini Project', subtitle: 'Team-based PR & issue workflow simulation' }
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
              { type: 'normal', text: 'Open-source contribution guidance' },
              { type: 'normal', text: 'Finding beginner-friendly projects' },
              { type: 'normal', text: 'Contribution rules & best practices' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'hard', title: 'Open-Source Contribution Simulation Project', subtitle: 'Real contribution-style workflow with review process' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
    ],
    [
      {
        week: 'Week 1',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Android fundamentals (activities, intents, layouts)' },
              { type: 'normal', text: 'Android Studio setup & project structure' },
              { type: 'normal', text: 'Basic UI components (TextView, Button, EditText)' },
              { type: 'normal', text: 'Introduction to Android development' },
              { type: 'project', level: 'beginner', title: 'Hello World Android App', subtitle: 'Build your first Android application' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 2',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Java/Kotlin basics for Android' },
              { type: 'normal', text: 'Variables, data types, control structures' },
              { type: 'normal', text: 'Object-oriented programming concepts' },
              { type: 'normal', text: 'Event handling in Android' },
              { type: 'project', level: 'beginner', title: 'Calculator App', subtitle: 'Create a functional calculator with basic operations' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'Advanced UI components (RecyclerView, ListView)' },
              { type: 'normal', text: 'Layouts (Linear, Relative, Constraint)' },
              { type: 'normal', text: 'Material Design principles' },
              { type: 'normal', text: 'User interface best practices' },
              { type: 'project', level: 'intermediate', title: 'To-Do List App', subtitle: 'Build an app with lists and user interactions' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'Data storage (SharedPreferences, SQLite)' },
              { type: 'normal', text: 'Room database basics' },
              { type: 'normal', text: 'File I/O operations' },
              { type: 'normal', text: 'Data persistence patterns' },
              { type: 'project', level: 'intermediate', title: 'Notes App with Database', subtitle: 'Create an app that saves and retrieves data' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 5',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Networking basics (HTTP requests)' },
              { type: 'normal', text: 'REST API integration' },
              { type: 'normal', text: 'JSON parsing and handling' },
              { type: 'normal', text: 'AsyncTask and background processing' },
              { type: 'project', level: 'hard', title: 'Weather App with API', subtitle: 'Fetch and display real-time weather data' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 6',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Firebase integration (Authentication, Firestore)' },
              { type: 'normal', text: 'Real-time database concepts' },
              { type: 'normal', text: 'Cloud messaging basics' },
              { type: 'normal', text: 'App optimization techniques' },
              { type: 'project', level: 'hard', title: 'Social Media App Prototype', subtitle: 'Build a complete Android application with multiple features' },
              { type: 'normal', text: 'HR Placement Session' }
            ]
          },
          { timeline: 'Sunday', includes: [] },
          { timeline: 'Last Day', includes: [] }
        ]
      },
    ],
    [
      {
        week: 'Week 1',
        rows: [
          {
            timeline: 'Day First',
            includes: [
              { type: 'normal', text: 'Advanced Android concepts recap' },
              { type: 'normal', text: 'Architecture patterns (MVVM, MVP)' },
              { type: 'project', level: 'intermediate', title: 'Advanced UI Module', subtitle: 'Implement complex user interfaces' },
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
              { type: 'normal', text: 'Fragments and navigation' },
              { type: 'normal', text: 'ViewPager and TabLayout' },
              { type: 'project', level: 'intermediate', title: 'Multi-Screen App', subtitle: 'Create an app with multiple screens and navigation' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'Advanced Firebase features' },
              { type: 'normal', text: 'Push notifications' },
              { type: 'project', level: 'intermediate', title: 'Chat Application', subtitle: 'Build real-time messaging functionality' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'App publishing process' },
              { type: 'normal', text: 'Google Play Store guidelines' },
              { type: 'project', level: 'hard', title: 'Production-Ready App', subtitle: 'Prepare and optimize app for deployment' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 5',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Performance optimization' },
              { type: 'normal', text: 'Memory management' },
              { type: 'project', level: 'hard', title: 'App Testing & Debugging', subtitle: 'Implement testing and fix issues' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 6–12',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Full-scale Android project development' },
              { type: 'normal', text: 'Code reviews & mentor feedback' },
              { type: 'normal', text: 'Portfolio project mapping' },
              { type: 'project', level: 'hard', title: 'Final Industry-Level Android Project', subtitle: 'Complete professional Android application' },
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
        week: 'Week 1',
        rows: [
          {
            timeline: 'Day First',
            includes: [
              { type: 'normal', text: 'Internship roadmap & expectations for final phase' },
              { type: 'normal', text: 'Advanced project planning & task distribution' },
              { type: 'project', level: 'hard', title: 'Industry-Grade Android Application', subtitle: 'Hard project kickoff' },
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
              { type: 'normal', text: 'Backend integration for Android apps' },
              { type: 'normal', text: 'API authentication & security' },
              { type: 'project', level: 'hard', title: 'Backend + Android Integration', subtitle: 'Connect Android app to backend services' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'App monetization strategies' },
              { type: 'normal', text: 'User analytics & tracking' },
              { type: 'project', level: 'hard', title: 'Feature Enhancement & Analytics', subtitle: 'Add advanced features and analytics' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
              { type: 'normal', text: 'App store optimization (ASO)' },
              { type: 'normal', text: 'Marketing and user acquisition' },
              { type: 'project', level: 'hard', title: 'App Launch Preparation', subtitle: 'Prepare app for market launch' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 5',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Resume project mapping (how to explain your work)' },
              { type: 'normal', text: 'GitHub portfolio finalization' },
              { type: 'project', level: 'hard', title: 'Final Project Review with Mentor', subtitle: 'Comprehensive review and feedback session' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
        ]
      },
      {
        week: 'Week 6–16',
        rows: [
          {
            timeline: 'Monday to Saturday',
            includes: [
              { type: 'normal', text: 'Internship performance evaluation' },
              { type: 'normal', text: 'Recommendation letter & certificate eligibility' },
              { type: 'normal', text: 'Mock interviews & HR preparation sessions' },
              { type: 'normal', text: 'Placement guidance & referral support' },
              { type: 'project', level: 'hard', title: 'Final Internship Project Submission', subtitle: 'Complete and submit final Android project' },
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
                <span className="text-yellow-300 font-bold">Android Development</span> Internship & Training Program
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                Build real-world Android apps, work like an industry developer, and earn a verified internship certificate that helps in placements.
              </h2>
              <p className="text-base mb-2 leading-relaxed">
                This is not just a course. It’s a structured internship experience with live Android projects, mentor guidance, recommendation letter, and placement-focused support.
              </p>
              <ul className="flex flex-wrap gap-3 mb-3">
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">✔ Live Internship Projects</li>
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
                <button className="border border-white text-white px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-white hover:text-blue-900 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Internship Syllabus
                </button>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-World Web Development Projects for Resume</h3>
                  <p className="text-gray-600 text-sm">Build portfolio-worthy projects that showcase your skills to employers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub Portfolio with Live Hosted Project Links</h3>
                  <p className="text-gray-600 text-sm">Professional GitHub profile with live demos of your work</p>
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
                <h3 className="text-2xl font-bold mb-2">Networking with Like-Minded Interns & Public Recognition</h3>
                <p className="text-lg opacity-90">Connect with fellow learners, build lasting professional relationships, and get featured on TechieHelp platforms for outstanding achievements</p>
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
              <div className="text-center mb-4">
                <img
                  src={AmitPhoto}
                  alt="Amit Kumar"
                  className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Amit Kumar</h3>
                <p className="text-sm text-blue-600 font-medium">Founder & Lead Mentor – TechieHelp</p>
              </div>
              <p className="text-gray-700 mb-4 text-center text-sm">
                Machine Learning Engineer & Full Stack Developer with hands-on mentoring experience.
              </p>
              <div className="mb-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Support Highlights:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Placement-oriented mentorship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Resume, LinkedIn & project guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Career & interview preparation</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <a href="https://www.linkedin.com/in/amit-kumar-686196225/" target="_blank" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mentor 2 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <img
                  src={mdAmzad}
                  alt="Amzad"
                  className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Amzad</h3>
                <p className="text-sm text-blue-600 font-medium">Machine Learning Engineer</p>
              </div>
              <p className="text-gray-700 mb-4 text-center text-sm">
                Machine Learning Engineer specializing in practical ML concepts and skill development.
              </p>
              <div className="mb-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Support Highlights:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Core Machine Learning guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Project-based ML mentoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Career guidance for ML roles</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <a href="https://www.linkedin.com/in/md-amzad-b8547a296/" target="_blank" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
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
              Through TechieHelp's comprehensive training, real-world projects, and expert mentorship, you'll be prepared for high-demand roles in web development across startups and established companies.
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
              Gain hands-on experience with industry-standard Android development tools used to build real-world mobile applications, integrate APIs, manage data, and deploy production-ready apps.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeCZRvirsQHMMJA8DzSlzHukOWBqkhq5Qhg&s" alt="Java" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Java</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kotlin_logo_%282016-2021%29.svg/1280px-Kotlin_logo_%282016-2021%29.svg.png" alt="Kotlin" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Kotlin</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/960px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Android Studio</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/11783/11783104.png" alt="XML" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">XML</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/960px-New_Firebase_logo.svg.png" alt="Firebase" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Firebase</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://i.pinimg.com/736x/78/a4/11/78a4117e9a95e25cb8ef1333c955d603.jpg" alt="REST API" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">REST API</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png" alt="Git" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Git</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh5SY3J2BsoecJ8TsxtGX-34_b5HCIG6PIA&s" alt="GitHub" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">GitHub</h3>
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
              <h3 className="text-xl font-semibold mb-2">TechieHelp Web Development Internship Certificate</h3>
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
            {['1 month', '2 month', '3 month', '4 month'].map((month, index) => (
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

export default Androiddevelopment;
