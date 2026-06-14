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
      <div className="md:w-1/2 text-gray-900 dark:text-white">
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
    "Backend Developer",
    "Python Engineer",
    "Django Developer",
    "Automation Expert",
    "API Developer",
    "Full Stack Logic Specialist",
    "Scraping & Data Extraction Pro",
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

const Python = () => {
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
              { type: 'normal', text: 'Program orientation & Python Developer roadmap' },
              { type: 'normal', text: 'Installation, Virtual Environments & IDE Setup' },
              { type: 'normal', text: 'Python Syntax, Variables & Dynamic Typing' },
              { type: 'project', level: 'beginner', title: 'Smart Calculator Script', subtitle: 'Build a basic CLI calculator with error handling' },
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
              { type: 'normal', text: 'Control Flow: Logic, Loops & List Comprehensions' },
              { type: 'normal', text: 'Functions, *args, **kwargs & Scope' },
              { type: 'normal', text: 'Weekly doubt-solving session with mentor' },
              { type: 'project', level: 'beginner', title: 'Number Guessing Game', subtitle: 'Implement game logic using loops and random module' }
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
              { type: 'normal', text: 'Data Structures: Lists, Tuples, Sets, Dicts' },
              { type: 'normal', text: 'Exception Handling & Input Validation' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'intermediate', title: 'Contact Management System', subtitle: 'Build a CRUD CLI app using nested data structures' }
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
              { type: 'normal', text: 'File I/O & Working with JSON/CSV' },
              { type: 'normal', text: 'Modules, Packages & Pip Management' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'hard', title: 'Automated Log Analyzer', subtitle: 'Parse system logs and export summaries to CSV' }
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
              { type: 'normal', text: 'Object-Oriented Programming (OOP) in Python' },
              { type: 'normal', text: 'Classes, Objects, Inheritance & Polymorphism' },
              { type: 'normal', text: 'Encapsulation & Decorators' },
              { type: 'project', level: 'beginner', title: 'Library Management Logic', subtitle: 'Design a library system using class inheritance' },
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
              { type: 'normal', text: 'Introduction to Web Frameworks (Flask)' },
              { type: 'normal', text: 'Routing, Templates & Jinja2' },
              { type: 'project', level: 'beginner', title: 'Personal Blog Site (Flask)', subtitle: 'Create a dynamic multi-page website' },
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
              { type: 'normal', text: 'Flask Extensions & Forms' },
              { type: 'normal', text: 'SQLite Integration with SQLAlchemy' },
              { type: 'project', level: 'intermediate', title: 'Task Tracker with DB', subtitle: 'Perform persistent CRUD operations with SQLite' },
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
              { type: 'normal', text: 'Modern Backend with FastAPI' },
              { type: 'normal', text: 'Async/Await & Type Hinting' },
              { type: 'project', level: 'hard', title: 'High-Performance API', subtitle: 'Build asynchronous endpoints for real-time data' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
            timeline: 'Day First',
            includes: [
              { type: 'normal', text: 'Enterprise Development with Django' },
              { type: 'normal', text: 'Django Project Structure & MVT Pattern' },
              { type: 'project', level: 'intermediate', title: 'Core Admin Dashboard', subtitle: 'Customize the Django admin for a CRM backend' },
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
              { type: 'normal', text: 'Django Models & Migrations' },
              { type: 'normal', text: 'Authentication & User Management' },
              { type: 'project', level: 'intermediate', title: 'Member Portal System', subtitle: 'Build a secure registration & login flow' },
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
              { type: 'normal', text: 'Django REST Framework (DRF)' },
              { type: 'normal', text: 'Serializers, Views & Routers' },
              { type: 'project', level: 'intermediate', title: 'Social Feed API', subtitle: 'Create endpoints for posting, liking and commenting' },
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
              { type: 'normal', text: 'Advanced DRF: Permissions & JWT' },
              { type: 'normal', text: 'Third-party API Integration (Razorpay/Twilio)' },
              { type: 'project', level: 'hard', title: 'E-commerce API Engine', subtitle: 'Build a backend for orders, carts and payments' },
              { type: 'normal', text: 'Mentor doubt-solving session' }
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
            timeline: 'Day First',
            includes: [
              { type: 'normal', text: 'Scalability & Background Tasks' },
              { type: 'normal', text: 'Celery, Redis & Task Queues' },
              { type: 'project', level: 'hard', title: 'Bulk Email Automator', subtitle: 'Send thousands of emails asynchronously' },
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
              { type: 'normal', text: 'Web Scraping & Data Extraction' },
              { type: 'normal', text: 'BeautifulSoup4 & Selenium Mastery' },
              { type: 'project', level: 'hard', title: 'Price Tracker Bot', subtitle: 'Scrape e-commerce sites and alert on price drops' },
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
              { type: 'normal', text: 'DevOps for Python: Docker & CI/CD' },
              { type: 'normal', text: 'Containerizing Django/Flask Apps' },
              { type: 'project', level: 'hard', title: 'Cloud-Ready Microservice', subtitle: 'Dockerize and deploy an API to AWS/Render' },
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
              { type: 'normal', text: 'Backend Optimization & Security Audit' },
              { type: 'normal', text: 'Resume & LinkedIn for Backend Roles' },
              { type: 'project', level: 'hard', title: 'Final Graduation Capstone', subtitle: 'Industry-level production backend submission' },
              { type: 'normal', text: 'Placement Guidance & HR Support' }
            ]
          },
          { timeline: 'Sunday', includes: [] }
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
      <section className="btn-primary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <header>
              <div className="inline-block bg-yellow-500 text-black px-5 py-1 rounded-full text-xs font-medium mb-1">
                Highly Rated Python Program • National Internship Portal Aligned
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-snug max-w-4xl">
                <span className="text-yellow-300 font-bold">Python Developer</span> Internship & Training Program
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                Build high-performance backends, automate workflows, and master Django & Flask like an industry pro.
              </h2>
              <p className="text-base mb-2 leading-relaxed">
                This is not just a theory course. It’s a specialized internship where you build scalable APIs, automate real-world tasks, and learn modern backend architecture.
              </p>
              <ul className="flex flex-wrap gap-3 mb-3">
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Scalable API Development</li>
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Django & Flask Mastery</li>
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Database & Security Architecture</li>
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Certificate + Letter of Recommendation</li>
              </ul>

              {/* Inline Feature Row */}
              <div className="flex flex-wrap items-center gap-8 mb-4">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium">1–4 Months Internship</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Industry-Level Datasets</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Career Support & Hackathons</span>
                  <span className="text-sm font-medium">10–16 Weeks Internship</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Placement-Oriented Learning</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">24/7 Mentor & Doubt Support</span>
                </div>
              </div>

              {/* Inline Reviews Row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-gray-900 dark:text-white">⭐ 4.6/5 Rated by 2,000+ Students | Trusted by Colleges & Recruiters</span>
              </div>

              {/* Inline CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-gray-100">
                    Start Internship – ₹499/-
                  </button>
                </a>
                <button className="border border-white text-gray-900 dark:text-white px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-white hover:text-blue-900 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Internship Syllabus
                </button>
                <a
  href="https://drive.google.com/file/d/1KMG5JObcneMBHqcKw_JZmCC2l9lEI3s6/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white text-gray-900 dark:text-white px-6 py-2 rounded-lg font-bold text-sm transition duration-300 hover:bg-white hover:text-blue-900 flex items-center gap-2"
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
                  <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                  <div className="text-sm text-blue-700">Backend Systems</div>
                </div>
                <div className="bg-green-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-900 mb-2">REST</div>
                  <div className="text-sm text-green-700">API Architecture</div>
                </div>
                <div className="bg-indigo-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-900 mb-2">Django</div>
                  <div className="text-sm text-indigo-700">Web Frameworks</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-900 mb-2">95%</div>
                  <div className="text-sm text-yellow-700">Tech Placement</div>
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
                <button className="btn-primary">
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
                <Star className="w-6 h-6 text-[#33bbcf]" />
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-medium">LinkedIn Badge & Public Verification</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-[#33bbcf]" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> Internship Overview</h2>
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
                  <Star className="w-8 h-8 text-[#33bbcf]" />
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
                  <Star className="w-8 h-8 text-[#33bbcf]" />
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
          <div className="btn-primary">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">� What You Will Achieve</h2>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Backend Systems for Resume</h3>
                  <p className="text-gray-600 text-sm">Build portfolio-worthy web applications and APIs that showcase your backend engineering skills.</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-World Frontend Development Projects for Resume</h3>
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
                  <Download className="w-6 h-6 text-[#33bbcf]" />
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
                  <Clock className="w-6 h-6 text-[#33bbcf]" />
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
            <div className="btn-primary">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 rounded-full p-4">
                    <CheckCircle className="w-8 h-8 text-gray-900 dark:text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Networking with Backend Engineers & Public Recognition</h3>
                <p className="text-lg opacity-90">Connect with fellow developers, build lasting professional relationships, and get featured on TechieHelp platforms for outstanding coding achievements</p>
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
            <div className="bg-gradient-to-br from-gray-100 dark:from-slate-800 to-gray-200 dark:to-slate-900 rounded-xl shadow-lg p-8 text-gray-900 dark:text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Company-Wise DSA Preparation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Curated DSA sheets based on real hiring patterns of top companies.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 dark:from-slate-800 to-gray-200 dark:to-slate-900 rounded-xl shadow-lg p-8 text-gray-900 dark:text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Download className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Resume Review & Optimization</h3>
                <p className="text-gray-300 text-sm leading-relaxed">One-to-one resume reviews to make your profile recruiter-ready.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 dark:from-slate-800 to-gray-200 dark:to-slate-900 rounded-xl shadow-lg p-8 text-gray-900 dark:text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <Star className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mentor-Led Interview Guidance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Mock interviews, feedback sessions, and expert mentor support.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 dark:from-slate-800 to-gray-200 dark:to-slate-900 rounded-xl shadow-lg p-8 text-gray-900 dark:text-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-gray-900 dark:text-white" />
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

{/* Mentor 1 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
  {/* Profile */}
  <div className="text-center mb-4">
    <img
      src={mdAmzad}
      alt="MERN Stack Developer Expert - TechieHelp"
      className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg object-cover"
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">
      Md Amzad
    </h3>
    <p className="text-sm text-blue-600 font-medium">
      MERN Stack Developer Expert • 2+ Years Experience
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-center text-sm leading-relaxed">
    MERN Stack Developer professional at <span className="font-medium">TechieHelp</span> with 2+ years of
    hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js,
    and guiding students in real-world MERN stack development practices.
  </p>

  {/* Support Highlights */}
  <div className="mb-4">
    <h4 className="text-base font-semibold text-gray-900 mb-2">
      Support Highlights:
    </h4>
    <ul className="space-y-2 text-gray-700 text-sm">
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Complete MERN stack development concepts & fundamentals</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Hands-on MongoDB, Express.js, React & Node.js guidance</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Full-stack project mentoring aligned with industry MERN standards</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <span>Career guidance for MERN Stack & Full-Stack development roles</span>
      </li>
    </ul>
  </div>

  {/* LinkedIn */}
  <div className="text-center">
    <a
      href="https://www.linkedin.com/in/md-amzad-b8547a296/"
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
              Through TechieHelp's comprehensive training, real-world projects, and expert mentorship, you'll be prepared for high-demand roles in Backend Development across startups and established tech giants.
              Through TechieHelp's comprehensive MERN stack training, real-world projects, and expert mentorship, you'll be prepared for high-demand full-stack development roles across startups and established companies like Google, Microsoft, and Amazon.
            </p>
          </div>

          {/* Career Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Architecture Foundations</h3>
                <p className="text-gray-600">Master the logic and design patterns behind scalable backend systems.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth & Skill Progression</h3>
                <p className="text-gray-600">Industry-relevant skills aligned with hiring needs and future tech trends.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-8 h-8 text-[#33bbcf]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Django & Flask Prowess</h3>
                <p className="text-gray-600">Expertise in developing, securing, and optimizing professional web backends.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Roles Across Startups & IT Companies</h3>
                <p className="text-gray-600">Prepared for internships, entry-level, and junior positions in diverse organizations.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <CheckCircle className="w-8 h-8 text-[#33bbcf]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">API & Automation</h3>
                <p className="text-gray-600">Hands-on experience with REST APIs, Task Queues, and Process Automation.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project-Based Learning Advantage</h3>
                <p className="text-gray-600">Practical experience that recruiters actually value in technical interviews.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary">
                  Start Your Tech Career
                </button>
              </a>
              <button onClick={() => document.getElementById('student-reviews').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
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
              Gain hands-on experience with industry-standard Python tools used to build web apps, automate processes, and manage production-ready databases.
              Master the complete MERN stack (MongoDB, Express.js, React, Node.js) - the most popular and in-demand technology stack for building modern web applications used by companies like Netflix, Uber, and Airbnb.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Python 3</h3>
              <h3 className="text-xs font-semibold text-gray-800">Python</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png" alt="Flask" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Flask</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="Django" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Django</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Flask</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt="FastAPI" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">FastAPI</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">MySQL</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Postman</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Docker</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg" alt="Redis" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Redis</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/512px-Heroku_logo.svg.png" alt="Heroku" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Heroku</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">AWS</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Docker</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">NumPy</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Pandas</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pytest_logo.svg/512px-Pytest_logo.svg.png" alt="Pytest" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Pytest</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" alt="REST API" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">REST API</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Tailwind CSS</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">MongoDB</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">PostgreSQL</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" alt="PyCharm" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">PyCharm</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Virtualenv" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Virtualenv</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Git</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="GitHub" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">GitHub</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">VS Code</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Bootstrap</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews & Success Stories Section */}
      <section id="student-reviews" className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> Student Reviews & Success Stories</h2>
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
              <p className="text-lg mb-6">We provide an industry-recognized certification that validates your Python Backend development skills, internship experience, and project work through verified and trusted channels.</p>
              <h3 className="text-xl font-semibold mb-2">TechieHelp Python Developer Internship Certificate</h3>
              <p className="text-base mb-6">This certificate is issued after successful completion of training, scalable backend projects, and API evaluations. It is designed to validate real skills in Django, Flask, and Database Architecture. Each certificate is verifiable and transparent for recruiters.</p>
              <p className="text-lg mb-6">We provide an industry-recognized certification that validates your skills, internship experience, and project work through verified and trusted channels.</p>
              <h3 className="text-xl font-semibold mb-2">TechieHelp MERN Stack Development Internship Certificate</h3>
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
                    <Shield className="w-5 h-5 text-[#33bbcf] flex-shrink-0" />
                    <span>Public Profile Verification on TechieHelp Website</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Unique Certificate ID for Every Intern</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#33bbcf] flex-shrink-0" />
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
                    <Shield className="w-5 h-5 text-[#33bbcf] flex-shrink-0" />
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
                  autoScroll ? 'bg-blue-600 text-gray-900 dark:text-white' : 'text-blue-600'
                }`}
              >
                Auto Scroll
              </button>
              <button
                onClick={() => setAutoScroll(false)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  !autoScroll ? 'bg-blue-600 text-gray-900 dark:text-white' : 'text-blue-600'
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
                    ? 'bg-blue-600 text-gray-900 dark:text-white'
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
                <tr className="btn-primary">
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
                                        {item.level === 'beginner' ? '� Beginner Project' : item.level === 'intermediate' ? '� Intermediate Project' : '� Hard Project'}
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

export default Python;