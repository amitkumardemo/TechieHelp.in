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
    "AI/ML Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning Specialist",
    "Computer Vision Engineer",
    "Natural Language Processing Expert",
    "Generative AI Developer"
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

const AIML = () => {
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
              { type: 'normal', text: 'Program orientation & AI/ML roadmap' },
              { type: 'normal', text: 'Python for Data Science setup (Anaconda/Jupyter)' },
              { type: 'normal', text: 'Introduction to NumPy and Pandas' },
              { type: 'normal', text: 'Internship workflow & GitHub for AI' },
              { type: 'project', level: 'beginner', title: 'Exploratory Data Analysis (EDA) Task', subtitle: 'Analyze a real dataset using Pandas & Seaborn' },
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
              { type: 'normal', text: 'Statistics for Machine Learning' },
              { type: 'normal', text: 'Probability, Distributions, and Hypothesis Testing' },
              { type: 'normal', text: 'Weekly doubt-solving session with mentor' },
              { type: 'project', level: 'beginner', title: 'Statistical Analysis Report', subtitle: 'Perform hypothesis testing on a business dataset' }
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
              { type: 'normal', text: 'Linear Regression & Cost Functions' },
              { type: 'normal', text: 'Gradient Descent implementation' },
              { type: 'normal', text: 'Feature Engineering & Scaling' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'intermediate', title: 'House Price Prediction Model', subtitle: 'Build and optimize a linear regression model' }
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
              { type: 'normal', text: 'Logistic Regression & Classification' },
              { type: 'normal', text: 'Evaluation Metrics (Precision, Recall, F1)' },
              { type: 'normal', text: 'Bias-Variance Tradeoff' },
              { type: 'normal', text: 'Mentor doubt-solving session' },
              { type: 'project', level: 'hard', title: 'Diabetes Prediction System', subtitle: 'Create a classification system with complete evaluation' }
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
              { type: 'normal', text: 'Decision Trees & Entropy' },
              { type: 'normal', text: 'Information Gain & Gini Impurity' },
              { type: 'normal', text: 'Random Forest Ensembles' },
              { type: 'normal', text: 'Introduction to Ensemble Learning' },
              { type: 'project', level: 'beginner', title: 'Loan Approval Classifier', subtitle: 'Build a decision tree based classifier' },
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
              { type: 'normal', text: 'Boosting Techniques (XGBoost, AdaBoost)' },
              { type: 'normal', text: 'Hyperparameter Tuning (GridSearchCV)' },
              { type: 'normal', text: 'Cross-Validation Strategies' },
              { type: 'normal', text: 'Handing Imbalanced Data (SMOTE)' },
              { type: 'project', level: 'beginner', title: 'Customer Churn Prediction', subtitle: 'Optimize a Gradient Boosting model for churn' },
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
              { type: 'normal', text: 'Unsupervised Learning (K-Means)' },
              { type: 'normal', text: 'Principal Component Analysis (PCA)' },
              { type: 'normal', text: 'Dimentionality Reduction' },
              { type: 'normal', text: 'User segmentation best practices' },
              { type: 'project', level: 'intermediate', title: 'Market Basket Analysis', subtitle: 'Apply clustering algorithms for customer segmentation' },
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
              { type: 'normal', text: 'Recommendation Systems' },
              { type: 'normal', text: 'Collaborative vs Content-based filtering' },
              { type: 'normal', text: 'Matrix Factorization' },
              { type: 'normal', text: 'Hybrid Recommendation Models' },
              { type: 'project', level: 'intermediate', title: 'Movie Recommendation Engine', subtitle: 'Build a personalized recommendation system' },
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
              { type: 'normal', text: 'Natural Language Processing (NLP) Basics' },
              { type: 'normal', text: 'Tokenization, Stemming, Lemmatization' },
              { type: 'normal', text: 'TF-IDF & Word Embeddings' },
              { type: 'normal', text: 'Sentiment Analysis' },
              { type: 'project', level: 'hard', title: 'Twitter Sentiment Analyzer', subtitle: 'Analyze real-time sentiment from social media data' },
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
              { type: 'normal', text: 'Model Deployment (Flask/FastAPI)' },
              { type: 'normal', text: 'Saving Models (Pickle/Joblib)' },
              { type: 'normal', text: 'Docker for ML Basics' },
              { type: 'normal', text: 'MLOps Introduction' },
              { type: 'project', level: 'hard', title: 'End-to-End ML Web App', subtitle: 'Deploy an ML model as a functional web application' },
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
              { type: 'normal', text: 'Introduction to Neural Networks' },
              { type: 'normal', text: 'Activation Functions & Backpropagation' },
              { type: 'project', level: 'intermediate', title: 'Perceptron from Scratch', subtitle: 'Implement a basic neural network without libraries' },
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
              { type: 'normal', text: 'Feedforward Neural Networks (ANN)' },
              { type: 'normal', text: 'Optimizers (Adam, SGD) & Loss Functions' },
              { type: 'project', level: 'intermediate', title: 'Digit Recognizer (MNIST)', subtitle: 'Build an ANN to recognize handwritten digits' },
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
              { type: 'normal', text: 'Convolutional Neural Networks (CNN)' },
              { type: 'normal', text: 'Pooling, Padding & Strides' },
              { type: 'project', level: 'intermediate', title: 'Image Classifier (CIFAR-10)', subtitle: 'Build a CNN for multi-class image classification' },
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
              { type: 'normal', text: 'Object Detection & YOLO Basics' },
              { type: 'normal', text: 'Transfer Learning (VGG, ResNet)' },
              { type: 'project', level: 'hard', title: 'Real-time Object Detector', subtitle: 'Implement object detection using pre-trained models' },
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
              { type: 'normal', text: 'Recurrent Neural Networks (RNN & LSTM)' },
              { type: 'normal', text: 'Time Series Analysis & Forecasting' },
              { type: 'project', level: 'hard', title: 'Stock Price Predictor', subtitle: 'Forecast prices using LSTM neural networks' },
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
              { type: 'normal', text: 'Full-scale AI/ML project development' },
              { type: 'normal', text: 'Hyperparameter optimization (Optuna/Ray)' },
              { type: 'normal', text: 'Portfolio project mapping' },
              { type: 'project', level: 'hard', title: 'Final Industry-Level AI Project', subtitle: 'Complete a professional deep learning application' },
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
              { type: 'normal', text: 'Generative AI & LLM Roadmap' },
              { type: 'normal', text: 'Transformer Architectures (Attention Mechanism)' },
              { type: 'project', level: 'hard', title: 'Custom GPT-style model', subtitle: 'Build a small-scale language model' },
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
              { type: 'normal', text: 'Working with OpenAI & Hugging Face APIs' },
              { type: 'normal', text: 'Prompt Engineering & RAG Systems' },
              { type: 'project', level: 'hard', title: 'AI Knowledge Bot', subtitle: 'Build a RAG system for custom documents' },
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
              { type: 'normal', text: 'Fine-tuning LLMs (Llama, BERT)' },
              { type: 'normal', text: 'Quantization & Efficient Fine-tuning' },
              { type: 'project', level: 'hard', title: 'Specialized AI Assistant', subtitle: 'Fine-tune a model for a specific domain' },
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
              { type: 'normal', text: 'AI Model Monitoring & Ethics' },
              { type: 'normal', text: 'Scaling AI applications on Cloud' },
              { type: 'project', level: 'hard', title: 'Production-Ready AI API', subtitle: 'Deploy an LLM-based service with monitoring' },
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
              { type: 'normal', text: 'Resume project mapping (AI specific)' },
              { type: 'normal', text: 'Kaggle portfolio finalization' },
              { type: 'project', level: 'hard', title: 'AI Portfolio Review', subtitle: 'Comprehensive review of your AI/ML projects' },
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
              { type: 'normal', text: 'AI Developer interview prep' },
              { type: 'normal', text: 'Case studies & System design for AI' },
              { type: 'normal', text: 'Mock interviews & Referral support' },
              { type: 'normal', text: 'Placement guidance' },
              { type: 'project', level: 'hard', title: 'Final AI/ML Internship Capstone', subtitle: 'Submit your end-to-end AI/ML solution' },
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
      <section className="btn-primary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <header>
              <div className="inline-block bg-yellow-500 text-black px-5 py-1 rounded-full text-xs font-medium mb-1">
                Most Trusted AI/ML Program • National Internship Portal Aligned
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-snug max-w-4xl">
                <span className="text-yellow-300 font-bold">AI/ML (Artificial Intelligence)</span> Internship & Training Program
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                Build intelligent models, work on real-world datasets, and master Machine Learning architecture like an industry expert.
              </h2>
              <p className="text-base mb-2 leading-relaxed">
                This is not just a theory course. It’s a structured internship experience with live AI projects, data science workflows, mentor guidance, and placement-focused support.
              </p>
              <ul className="flex flex-wrap gap-3 mb-3">
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Real-World AI Projects</li>
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Python for Data Science</li>
                <li className="bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-sm">✔ Deep Learning & Neural Networks</li>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-World AI/ML and Data Science Projects for Resume</h3>
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
              Through TechieHelp's comprehensive training, real-world projects, and expert mentorship, you'll be prepared for high-demand roles in Artificial Intelligence across startups and established tech giants.
            </p>
          </div>

          {/* Career Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core AI/ML Concepts</h3>
                <p className="text-gray-600">Master the mathematics and logic behind top-tier AI systems.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-8 h-8 text-[#33bbcf]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Science Prowess</h3>
                <p className="text-gray-600">Expertise in cleaning, analyzing, and visualizing complex datasets.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <CheckCircle className="w-8 h-8 text-[#33bbcf]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Learning Expertise</h3>
                <p className="text-gray-600">Hands-on experience with Neural Networks and Generative AI.</p>
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
              Gain hands-on experience with industry-standard AI/ML tools used to build intelligent models, process complex datasets, and deploy production-ready AI services.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Python</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Scikit-learn</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">TensorFlow</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">PyTorch</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" alt="Pandas" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Pandas</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" alt="NumPy" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">NumPy</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png" alt="Kaggle" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Kaggle</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-200 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg" alt="Matplotlib" className="w-8 h-8 object-contain mx-auto mb-2" />
              <h3 className="text-xs font-semibold text-gray-800">Matplotlib</h3>
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
              <p className="text-lg mb-6">We provide an industry-recognized certification that validates your AI/ML skills, internship experience, and project work through verified and trusted channels.</p>
              <h3 className="text-xl font-semibold mb-2">TechieHelp AI/ML Development Internship Certificate</h3>
              <p className="text-base mb-6">This certificate is issued after successful completion of training, AI projects, and model evaluations. It is designed to validate real skills in Data Science and Machine Learning. Each certificate is verifiable and transparent for recruiters.</p>
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
            {['1 month', '2 month', '3 month', '4 month'].map((month, index) => (
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

export default AIML;
