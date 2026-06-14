import React, { useState, useEffect } from "react";
import {
  ChevronDown, ChevronUp, Download, Star, Award, Users, CheckCircle,
  Briefcase, GraduationCap, FileText, Brain, Code, Building,
  MessageSquare, Video, Trophy, Zap, Sparkles, ArrowRight, Linkedin
} from "lucide-react";

const PlacementBoosterLanding = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    promo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      question: "Who is this program for?",
      answer: "Designed for final-year students, recent graduates, and early-career professionals aiming for top tech companies. No prior experience is required.",
    },
    {
      question: "What is the mode of delivery?",
      answer: "Delivered through live interactive sessions, premium recorded modules, and 1-on-1 mentoring. Access all content 24/7 on our platform.",
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, you receive a verified, industry-recognized certificate of completion from TechieHelp to boost your LinkedIn and resume.",
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 100% money-back guarantee within the first 7 days if you're not fully satisfied with the program quality.",
    },
    {
      question: "Is there any placement assistance?",
      answer: "Absolutely. We provide direct referrals, resume forwarding to our partner companies, and guaranteed paid internship opportunities for top performers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-900 dark:text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center relative">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-8 hover:bg-gray-100 dark:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Enrollments Open for 2026 Batch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Crack Your Dream Job <br />
            <span className="text-cyan-gradient font-bold">
              A→Z Interview Program
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Master <span className="text-gray-900 dark:text-white font-medium">DSA</span>, optimize your <span className="text-gray-900 dark:text-white font-medium">LinkedIn</span>, and ace <span className="text-gray-900 dark:text-white font-medium">system design</span> with 1-on-1 mock interviews and guaranteed placement support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              <span>Enroll Now — ₹999</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <Download className="w-5 h-5 text-blue-400" />
              <span>Download Syllabus</span>
            </button>
          </div>

          {/* Glassmorphic Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:-translate-y-1 transition duration-300 group">
              <Trophy className="w-8 h-8 text-yellow-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">₹12 LPA</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Highest Package</div>
            </div>
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:-translate-y-1 transition duration-300 group">
              <Briefcase className="w-8 h-8 text-green-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">300+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Top Campus Hires</div>
            </div>
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:-translate-y-1 transition duration-300 group">
              <Star className="w-8 h-8 text-[#33bbcf] mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Curriculum Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-blue-900/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              A→Z Interview <span className="text-blue-400">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to crack top product and service-based companies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Linkedin className="w-8 h-8 text-blue-400" />, title: "LinkedIn & GitHub Profile Enhancement", desc: "Optimize your profiles for recruiters with professional branding and project showcases." },
              { icon: <FileText className="w-8 h-8 text-green-400" />, title: "Personal Portfolio / Elevator Pitch", desc: "Build a stunning portfolio website and craft compelling 30-second pitches." },
              { icon: <GraduationCap className="w-8 h-8 text-yellow-400" />, title: "Resume & Cover Letter Templates", desc: "ATS-friendly templates with industry-specific examples and tips." },
              { icon: <Brain className="w-8 h-8 text-[#33bbcf]" />, title: "Aptitude & Logical Reasoning Practice", desc: "300+ questions with solutions and time-saving strategies." },
              { icon: <Code className="w-8 h-8 text-red-400" />, title: "DSA Foundations & Problem-Solving", desc: "Master data structures, algorithms, and coding interview patterns." },
              { icon: <Building className="w-8 h-8 text-pink-400" />, title: "System Design & Mini Projects", desc: "Learn scalable architecture and build mini-projects for your portfolio." },
              { icon: <Briefcase className="w-8 h-8 text-[#33bbcf]" />, title: "Domain Specific Interview Prep", desc: "Tailored prep for FAANG, product-based, and service-based companies." },
              { icon: <MessageSquare className="w-8 h-8 text-teal-400" />, title: "Behavioral & HR Coaching", desc: "Master STAR method, common questions, and cultural fit interviews." },
              { icon: <Video className="w-8 h-8 text-orange-400" />, title: "1:1 Recorded Mock Interviews", desc: "Real interview simulations with detailed feedback and improvement plans." },
            ].map((module, index) => (
              <div key={index} className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:bg-gray-100 dark:bg-white/10 transition duration-300 group">
                <div className="bg-black/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{module.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Internship Opportunity Section */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-[#0a0a0a] border border-blue-500/30 rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg z-20 shadow-yellow-500/20">
              <Sparkles size={14} className="animate-pulse" />
              Paid Internship Available
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white relative z-20">Exclusive Paid Internship Opportunity</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto relative z-20">
              Top-performing students in our A→Z Interview Program are eligible for paid internships at leading tech companies. Gain real-world experience, build your network, and earn while you learn.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-8 relative z-20">
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-gray-100 dark:bg-white/10 transition-colors">
                <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                <span className="text-gray-300">Stipend ranging from ₹15,000 - ₹30,000 per month</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-gray-100 dark:bg-white/10 transition-colors">
                <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                <span className="text-gray-300">Work on live projects with industry mentorship</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-gray-100 dark:bg-white/10 transition-colors">
                <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                <span className="text-gray-300">Letter of recommendation upon completion</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-gray-100 dark:bg-white/10 transition-colors">
                <CheckCircle className="text-green-400 mt-1 shrink-0" size={20} />
                <span className="text-gray-300">Potential for full-time conversion (PPO)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Outcomes Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Proven <span className="text-blue-400">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Join hundreds of students who transformed their careers with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shrink-0">
                  <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Rahul&backgroundColor=transparent" alt="Student 1" className="w-full h-full rounded-full bg-black/50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Rahul Sharma</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                    <Building size={14} /> Placed at Google | ₹12 LPA
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic relative z-10 leading-relaxed">
                "The A→Z program completely transformed my approach to interviews. The 1:1 mock interviews and system design sessions gave me the confidence to ace my Google loops. Unmatched quality."
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shrink-0">
                  <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Priya&backgroundColor=transparent" alt="Student 2" className="w-full h-full rounded-full bg-black/50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Priya Patel</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                    <Building size={14} /> Placed at Microsoft | ₹10 LPA
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic relative z-10 leading-relaxed">
                "From completely rebuilding my resume to providing paid internship opportunities, TechieHelp's program covers every single blind spot a student has. The ROI is incredible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Add-ons Section */}
      <section className="py-24 px-6 bg-[#050505] relative w-full overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent <span className="text-blue-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Invest in your career. Select the add-ons that fit your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Base Plan */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl flex flex-col hover:border-gray-300 dark:border-white/20 transition-all duration-300 transform hover:-translate-y-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">Base Program</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium relative z-10">Core Interview Prep</p>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 relative z-10">₹999</div>
              <p className="text-sm text-blue-400 font-semibold mb-8 relative z-10">One-time payment</p>
              
              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                <li className="flex items-start gap-3"><CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">Live & Recorded grouped sessions</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">Lifetime access to materials</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">2 Mock Interviews</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">LinkedIn & GitHub Optimization</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-green-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">Verified Certificate of Completion</span></li>
              </ul>
              <button onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })} className="w-full relative z-10 bg-gray-100 dark:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white font-bold py-4 rounded-xl transition duration-300">
                Enroll Base
              </button>
            </div>

            {/* Popular Plan */}
            <div className="bg-[#0f172a] border-2 border-blue-500 rounded-3xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col transform hover:-translate-y-2 transition-transform duration-300 relative lg:scale-105 z-20">
              <div className="btn-primary">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Placement Pack</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Total Career Transformation</p>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">₹2,999 <span className="text-lg text-gray-500 line-through ml-2 font-medium">₹5,000</span></div>
              <p className="text-sm text-green-400 font-semibold mb-8">Save ₹2,001</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3"><CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-200 font-medium">Everything in Base</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-200">Personalized 1:1 Resume Build</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-200">5 Premium Mock Interviews</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-200 font-bold">Direct Company Referrals</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-200 font-bold">Placement Guarantee Support</span></li>
              </ul>
              <button onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                Get Placement Pack
              </button>
            </div>

            {/* Add-ons */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl flex flex-col hover:border-gray-300 dark:border-white/20 transition-all duration-300 transform hover:-translate-y-2 relative group z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">Interview Add-on</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium relative z-10">Extra Mock Sessions</p>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 relative z-10">₹1,499</div>
              <p className="text-sm text-[#33bbcf] font-semibold mb-8 relative z-10">Optional Upgrade</p>
              
              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                <li className="flex items-start gap-3"><CheckCircle className="text-gray-600 dark:text-gray-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">3 Additional 1:1 Mock Interviews</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-gray-600 dark:text-gray-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">Detailed algorithmic breakdown</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-gray-600 dark:text-gray-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">System Design dedicated review</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="text-gray-600 dark:text-gray-400 shrink-0 mt-0.5" size={18} /><span className="text-gray-300">Improvement tracking plan</span></li>
              </ul>
              <button onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })} className="w-full relative z-10 bg-gray-100 dark:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white font-bold py-4 rounded-xl transition duration-300">
                Add to Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 dark:bg-white/5 transition duration-300 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg text-gray-900 dark:text-white">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 ${faqOpen[index] ? 'rotate-180 bg-blue-500/20 text-blue-400' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`px-6 text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ${faqOpen[index] ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="enroll" className="py-24 px-6 bg-[#050505] relative overflow-hidden flex flex-col justify-center">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Reserve Your <span className="text-blue-400">Spot</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Next batch starts soon. Limited seats available.</p>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">College Name</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Delhi University"
                      required
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Course & Year</label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      placeholder="B.Tech CS / 3rd Year"
                      required
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Promo Code (Optional)</label>
                    <input
                      type="text"
                      name="promo"
                      value={formData.promo}
                      onChange={handleInputChange}
                      placeholder="SAVE20"
                      className="w-full p-4 bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-600"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Pay & Enroll Now — ₹999
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                    <CheckCircle size={12} className="text-green-500" />
                    100% Secure Checkout via Razorpay
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-400" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Enrollment Initialized!</h3>
                <p className="text-gray-300 text-lg mb-2">
                  Thank you, <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>. We've received your details.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Please check your email <b className="text-gray-900 dark:text-white">{formData.email}</b> for the secure payment link and batch orientation schedule.
                </p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-2 border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:bg-white/5 rounded-lg text-sm text-gray-300 transition-colors">
                  Submit another application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlacementBoosterLanding;
