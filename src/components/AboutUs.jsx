import React from "react";
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Bot,
  Workflow,
  LineChart,
  CheckCircle2,
  Zap,
  Target,
  Lightbulb,
  Sparkles,
  BarChart,
  Globe,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";

import AmitPhoto from "../assets/AmitPhoto.jpg";
import AboutImage from "../assets/About us.webp";
import MissionImage from "../assets/mission.webp";
import LocationImage from "../assets/location.webp";
import ConnectImage from "../assets/connect.webp";

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
  </div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#050510] text-gray-300 font-sans selection:bg-blue-500/30 pt-28 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-700/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[10%] right-[10%] w-[30%] h-[35%] bg-purple-700/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. About TechieHelp AI */}
        <section className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-gray-300">About TechieHelp AI</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Building AI Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Run Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              <span className="text-white font-semibold">TechieHelp is an AI-first software startup</span> focused on building intelligent systems that automate business operations end-to-end.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 py-1">
              We don’t just develop software — <br className="hidden md:block"/>
              <span className="text-blue-300 font-medium">👉 we design AI systems that capture leads, communicate with customers, and run workflows automatically.</span>
            </p>
            <p className="text-gray-500">
              Founded in 2023 in Jodhpur, TechieHelp is on a mission to help businesses eliminate manual work and scale faster using AI.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3 scale-105" />
            <img src={AboutImage} alt="About TechieHelp" className="w-full h-auto object-cover rounded-2xl relative z-10 shadow-2xl border border-white/10" />
          </div>
        </section>

        {/* 2. What We Actually Do */}
        <section className="mb-24 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-5/12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🧠 What We Actually Do</h2>
              <p className="text-xl text-gray-400 mb-4">
                Most businesses depend on people to run operations. 
              </p>
              <p className="text-2xl text-blue-400 font-semibold">
                We replace that dependency with AI.
              </p>
            </div>
            <div className="md:w-7/12">
              <p className="text-lg font-medium text-white mb-6">Our systems can:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Capture and respond to leads instantly",
                  "Call and qualify customers automatically",
                  "Manage workflows and data in real-time",
                  "Run 24/7 without human intervention"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Core Focus */}
        <section className="mb-24">
          <SectionHeading title="⚡ Our Core Focus" subtitle="We build 4 key AI systems:" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "AI Lead Engine", desc: "Automatically captures, responds, and manages leads." },
              { icon: PhoneCall, title: "AI Calling Agents", desc: "AI-powered voice agents that call and qualify customers." },
              { icon: Workflow, title: "AI Workflow Automation", desc: "End-to-end automation using tools like APIs, Zapier, n8n." },
              { icon: BarChart, title: "AI Business Dashboard", desc: "Real-time control over leads, performance, and operations." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#0a0a14] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 & 5. Mission and Vision */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="text-blue-400" /> Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To make AI practical, accessible, and result-driven — <br/><span className="text-blue-300">helping businesses automate operations, reduce costs, and increase conversions.</span>
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-purple-400" /> Our Vision
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To build India’s most trusted AI automation platform — <br/><span className="text-purple-300">where businesses can run entirely on AI systems without operational bottlenecks.</span>
            </p>
          </div>
        </section>

        {/* 6. Why TechieHelp Exists */}
        <section className="mb-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src={MissionImage} alt="Why AI" className="w-full h-auto rounded-3xl opacity-80" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">💡 Why TechieHelp Exists</h2>
            
            <p className="text-lg text-gray-300 mb-6 font-medium">Every business loses opportunities because of:</p>
            <ul className="space-y-3 mb-10 text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Slow response time</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Manual processes</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Human dependency</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Operational inefficiencies</li>
            </ul>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-lg text-white mb-5 font-semibold">We solve this by building AI systems that:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Respond instantly",
                  "Work continuously",
                  "Scale without limits",
                  "Deliver consistent results"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. How We Work */}
        <section className="mb-24">
          <SectionHeading title="⚙️ How We Work" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Understand", desc: "your business workflow" },
              { step: "2", title: "Design", desc: "your AI system architecture" },
              { step: "3", title: "Build", desc: "& integrate automation tools" },
              { step: "4", title: "Deploy", desc: "and optimize continuously" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg border-4 border-[#050510]">{item.step}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. What Makes Us Different */}
        <section className="mb-24 bg-gradient-to-r from-blue-900/20 to-[#050510] border border-blue-500/20 p-10 md:p-14 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">📊 What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {[
              "Not an agency — we build systems",
              "AI-first architecture",
              "Product-focused approach",
              "Built for scale (lakhs of users)",
              "Works even when you are offline"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-lg text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Where We Work */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-12 bg-white/5 p-8 rounded-3xl border border-white/10">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src={LocationImage} alt="Location" className="w-full max-w-sm rounded-2xl object-cover shadow-2xl" />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="text-blue-400" /> Where We Work
            </h2>
            <div className="text-xl text-gray-300 space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-2xl">📍</span> <strong>Jodhpur, Rajasthan</strong>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">🌐</span> Serving clients across India & globally
              </p>
            </div>
          </div>
        </section>

        {/* 10. Founder */}
        <section className="mb-24 text-center">
          <div className="inline-block bg-gray-900/50 p-12 rounded-3xl border border-gray-800 max-w-3xl w-full relative">
            <img src={AmitPhoto} alt="Amit Kumar" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500/30 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-1">Amit Kumar</h3>
            <p className="text-blue-400 font-medium mb-8">Founder & CEO, TechieHelp</p>
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic">
              “We don’t just build software. <br/>
              <span className="text-white font-semibold">We build AI systems that run businesses.</span>”
            </p>
          </div>
        </section>

        {/* 11. Let’s Build Your AI System (CTA) */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center text-white border border-white/20 shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">🚀 Let’s Build Your AI System</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ready to automate your business and scale faster? <br className="hidden md:block"/>
              Book a demo and see how AI can run your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="https://wa.me/917073130165?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2"
              >
                Book Free Demo <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+917073130165"
                className="bg-black/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-black/30 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> Get AI Strategy Call
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
