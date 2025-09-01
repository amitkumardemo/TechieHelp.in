import React from "react";
import {
  Bot,
  BrainCircuit,
  Workflow,
  LineChart,
  ShieldCheck,
  Database,
  Cloud,
  Cpu,
  Lock,
  Sparkles,
} from "lucide-react";

import AmitPhoto from "../assets/AmitPhoto.jpg";
import YashasviPhoto from "../assets/yashasvi photos.jpg";

// Images (reuse your assets)
import AboutImage from "../assets/About us.webp";
import WhoWeAreImage from "../assets/who.webp";
import MissionImage from "../assets/mission.webp";
import VisionImage from "../assets/vision.webp";
import LocationImage from "../assets/location.webp";
import ConnectImage from "../assets/connect.webp";
import TrainingImage from "../assets/training.webp";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-gray-800/60 border border-gray-700 px-3 py-1 text-xs md:text-sm">
    {children}
  </span>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Hero / About */}
        <section className="mb-20 pt-28 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={AboutImage}
            alt="About TechieHelp"
            className="w-full md:w-4/12 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-8/12 leading-relaxed">
            <h1 className="text-5xl font-extrabold text-blue-500 mb-6">
              About TechieHelp
            </h1>
            <p className="text-gray-300 text-lg">
              <span className="text-blue-400 font-semibold">TechieHelp</span> is an
              AI-first software development company helping organizations automate
              operations, unlock data-driven decisions, and build intelligent digital
              products. Founded on <strong>December 10, 2023</strong> in Jodhpur,
              Rajasthan, we engineer production-ready AI—fast, secure, and scalable.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>AI Agents & Chatbots</Pill>
              <Pill>Intelligent Automation</Pill>
              <Pill>Predictive Analytics</Pill>
              <Pill>Computer Vision</Pill>
              <Pill>Data Platforms & MLOps</Pill>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={WhoWeAreImage}
            alt="Who We Are"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">
              Who We Are — AI at the Core
            </h2>
            <p>
              We partner with startups and enterprises to ship measurable AI outcomes:
              automate repetitive work, enhance customer experiences, and scale with
              confidence. Our teams blend deep engineering with product thinking to
              deliver results—on time and on budget.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white text-base">
              <li><span className="text-blue-400 font-semibold">Automation-first</span> approach to remove manual bottlenecks</li>
              <li><span className="font-semibold">Data→Insight</span> pipelines for real-time decisions</li>
              <li>Secure, compliant, and <span className="font-semibold">cloud-native</span> architectures</li>
              <li>Iterative delivery with <span className="font-semibold">ROI-focused</span> milestones</li>
            </ul>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p>
              To make advanced AI accessible and practical—designing automation and
              intelligence that measurably grows revenue, reduces cost, and elevates
              user experience for organizations of every size.
            </p>
          </div>
          <img
            src={MissionImage}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
          />
        </section>

        {/* Vision */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={VisionImage}
            alt="Our Vision"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p>
              To become India’s most trusted AI partner—building future-ready
              platforms, products, and talent that power the next generation of
              digital businesses.
            </p>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">What We Build with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="text-blue-400" />
                <h3 className="text-xl font-semibold">AI Agents & Chatbots</h3>
              </div>
              <p className="text-gray-300">
                Domain-trained assistants for support, sales, onboarding, and internal ops—24/7.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Workflow className="text-green-400" />
                <h3 className="text-xl font-semibold">Intelligent Automation</h3>
              </div>
              <p className="text-gray-300">
                Automate CRM, HR, finance, and back-office workflows with human-in-the-loop control.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="text-yellow-400" />
                <h3 className="text-xl font-semibold">Predictive Analytics</h3>
              </div>
              <p className="text-gray-300">
                Forecast demand, detect churn, and optimize inventory with ML models that learn over time.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <BrainCircuit className="text-pink-400" />
                <h3 className="text-xl font-semibold">Computer Vision & NLP</h3>
              </div>
              <p className="text-gray-300">
                Document scanning, ID/KYC, quality checks, summarization, and search over unstructured data.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-purple-400" />
                <h3 className="text-xl font-semibold">Data Platforms & MLOps</h3>
              </div>
              <p className="text-gray-300">
                Warehouses, pipelines, feature stores, CI/CD for models, monitoring, and retraining.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-red-400" />
                <h3 className="text-xl font-semibold">Security & Compliance</h3>
              </div>
              <p className="text-gray-300">
                Encryption, RBAC, audit logs, and privacy-by-design across cloud and on-prem deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Approach — TH-5X</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-300">
            <div className="bg-gray-800/70 rounded-lg p-5">
              <Sparkles className="mb-2" /> <strong>Discover</strong>
              <p className="text-sm mt-1">Audit processes, data, and goals; define ROI hypotheses.</p>
            </div>
            <div className="bg-gray-800/70 rounded-lg p-5">
              <Cpu className="mb-2" /> <strong>Design</strong>
              <p className="text-sm mt-1">Blueprint, data flows, security model, success metrics.</p>
            </div>
            <div className="bg-gray-800/70 rounded-lg p-5">
              <Workflow className="mb-2" /> <strong>Develop</strong>
              <p className="text-sm mt-1">Short sprints; human-in-the-loop; demo every ship.</p>
            </div>
            <div className="bg-gray-800/70 rounded-lg p-5">
              <Cloud className="mb-2" /> <strong>Deploy</strong>
              <p className="text-sm mt-1">Cloud/on-prem, training, change management, analytics.</p>
            </div>
            <div className="bg-gray-800/70 rounded-lg p-5">
              <Lock className="mb-2" /> <strong>Drive</strong>
              <p className="text-sm mt-1">Monitor, improve, and scale—securely and compliantly.</p>
            </div>
          </div>
        </section>

        {/* Training / AI Academy */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">AI Academy & Talent</h2>
            <p className="mb-4">
              We upskill teams and students with hands-on AI programs—turning theory into production impact.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Live project training & internships</li>
              <li>AI/ML, Data Engineering, and MLOps tracks</li>
              <li>Workshops for colleges and enterprises</li>
              <li>Mentorship and portfolio guidance</li>
            </ul>
          </div>
          <img
            src={TrainingImage}
            alt="AI Academy"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
          />
        </section>

        {/* Where We Work */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Where We Work</h2>
            <p>
              📍 <strong>Jodhpur, Rajasthan</strong> <br />
              🌐 Serving clients across India and globally
            </p>
          </div>
          <img
            src={LocationImage}
            alt="Where We Work"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
          />
        </section>

        {/* Founders */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Meet the Founders</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg w-full md:w-1/2 flex flex-col items-center text-center">
              <img
                src={YashasviPhoto}
                alt="Yashasvi Bhati"
                className="w-40 h-40 rounded-full mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">Yashasvi Bhati</h3>
              <p className="text-blue-300 italic mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300">
                “Every AI system we deploy is engineered for security, reliability, and user impact—no buzzwords, just outcomes.”
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 shadow-lg w-full md:w-1/2 flex flex-col items-center text-center">
              <img
                src={AmitPhoto}
                alt="Amit Kumar"
                className="w-40 h-40 rounded-full mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">Amit Kumar</h3>
              <p className="text-blue-300 italic mb-4">Founder & CEO</p>
              <p className="text-gray-300">
                “TechieHelp exists to turn ambitious ideas into durable products—faster go-lives, clearer ROI, and lasting partnerships.”
              </p>
            </div>
          </div>
        </section>

        {/* Connect CTA */}
        <section className="mb-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={ConnectImage}
            alt="Let's Connect"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">Let’s Build with AI</h2>
            <p>
              Ready to automate, optimize, and scale? Share your challenge—we’ll map your fastest path to value.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Book a Demo</Pill>
              <Pill>Get a Strategy Call</Pill>
              <Pill>Download TH-5X Framework</Pill>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
