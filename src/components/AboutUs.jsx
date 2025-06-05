import React from "react";
import {
  Smartphone,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import AmitPhoto from "../assets/AmitPhoto.jpg";
import YashasviPhoto from "../assets/yashasvi photos.jpg";

// You can add more images for sections here:
import AboutImage from "../assets/About us.webp";
import WhoWeAreImage from "../assets/who.webp";
import MissionImage from "../assets/mission.webp";
import VisionImage from "../assets/vision.webp";
import LocationImage from "../assets/location.webp";
import ConnectImage from "../assets/connect.webp";
import TrainingImage from "../assets/training.webp"; // Example image for training section
import Footer from "./Footer";

const AboutUs = () => {
  return (
<div className="min-h-screen bg-gray-900 text-white px-6 py-20">
  <div className="max-w-7xl mx-auto">
    {/* About Us Section with image above text */}
    <section className="mb-20 pt-28 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
      <img
        src={AboutImage}
        alt="About TechieHelp"
        className="w-full md:w-4/12 rounded-xl object-cover shadow-lg"
      />
      <div className="md:w-8/12 text-gray-300 leading-relaxed text-lg">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-16 text-center">
          About Us
        </h1>
        <p>
          Welcome to <span className="text-blue-400 font-semibold">TechieHelp</span>, where innovation meets excellence in software and product development. Founded on <strong>December 10, 2023</strong>, we are a tech-first company based in Jodhpur, Rajasthan, empowering businesses with smart, scalable, and custom digital solutions.
          <br /><br />
          Our passionate team merges technical expertise with creative insight to build solutions that transform businesses and enhance lives.
        </p>
      </div>
    </section>
  




        {/* Who We Are - Image left, text right */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={WhoWeAreImage}
            alt="Who We Are"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
           <p>
  Originally envisioned as a tech education platform, <span className="text-blue-400 font-semibold">TechieHelp</span> has evolved into a full-fledged software development, training, and consulting company. From startups to large enterprises, we collaborate with clients across diverse domains to deliver high-impact results through innovative technology.
  <br /><br />
  Our journey reflects a strong commitment to quality, continuous learning, and cutting-edge innovation. With every line of code, we strive to build solutions that are robust, future-ready, and tailored to client needs.
</p>


          </div>
        </section>

        {/* Our Mission - Image right, text left */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p>
              To empower learners, startups, and enterprises with transformative
              technology that fuels growth, productivity, and meaningful digital
              presence.
            </p>
          </div>
          <img
            src={MissionImage}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
          />
        </section>

        {/* Our Vision - Image left, text right */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={VisionImage}
            alt="Our Vision"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p>
              To be India’s most trusted tech partner and innovation hub—building
              future-ready solutions and shaping digital careers.
            </p>
          </div>
        </section>

        {/* Training & Development - Image right, text left */}
<section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
  <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
    <h2 className="text-3xl font-semibold mb-4">🚀 Training & Development</h2>
    <p className="mb-4">
      At <span className="text-blue-400 font-semibold">TechieHelp</span>, we don't just build software — we empower the next generation of tech leaders through hands-on education and mentorship.
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>💻 <strong>Live Project Training</strong></li>
      <li>🎓 <strong>Internship Programs</strong></li>
      <li>📚 <strong>School & College Coaching</strong></li>
      <li>🏠 <strong>Home Tutoring in Tech Domains</strong></li>
    </ul>
    <p className="mt-4">
      We've proudly trained <strong>10,000+ students</strong>, guided <strong>1,000+ projects</strong>, and helped place countless candidates in top tech companies.
      <br />
      <span className="text-blue-400 font-semibold">TechieHelp</span> is your trusted career partner for the future.
    </p>
  </div>
  <img
    src={TrainingImage}
    alt="Training and Development"
    className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
  />
</section>


        {/* Where We Work - Image right, text left */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Where We Work</h2>
            <p>
              📍 <strong>Jodhpur, Rajasthan</strong> <br />
              🌐 Providing digital services across India and globally
            </p>
          </div>
          <img
            src={LocationImage}
            alt="Where We Work"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg order-1 md:order-2"
          />
        </section>

        {/* Let’s Connect - Image left, text right */}
        <section className="mb-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
          <img
            src={ConnectImage}
            alt="Let's Connect"
            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
          />
          <div className="md:w-1/2 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
            <p>
              Whether you're a founder, developer, learner, or an enterprise—TechieHelp is your trusted partner in building scalable, smart, and success-driven solutions.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Meet the Founders</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">

            {/* Co-Founder */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg w-full md:w-1/2 flex flex-col items-center text-center">
              <img
                src={YashasviPhoto}
                alt="Yashasvi Bhati"
                className="w-40 h-40 rounded-full mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">Yashasvi Bhati</h3>
              <p className="text-blue-300 italic mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300">
                “At TechieHelp, we are driven by purpose. Every line of code, every design decision, and every system we deploy reflects our passion for quality, security, and user-focused solutions.”
              </p>
            </div>

            {/* Founder */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg w-full md:w-1/2 flex flex-col items-center text-center">
              <img
                src={AmitPhoto}
                alt="Amit Kumar"
                className="w-40 h-40 rounded-full mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">Amit Kumar</h3>
              <p className="text-blue-300 italic mb-4">Founder & CEO</p>
              <p className="text-gray-300">
                “TechieHelp is more than just a tech company—it's a mission to enable people and businesses to grow through innovation. We prioritize clarity, mentorship, and high-impact development for every client.”
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Core Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300">
            <li className="flex items-center gap-3">
              <Smartphone className="text-blue-400" />
              Android & iOS App Development
            </li>
            <li className="flex items-center gap-3">
              <Monitor className="text-green-400" />
              Web Design & Development
            </li>
            <li className="flex items-center gap-3">
              <Server className="text-yellow-400" />
              SaaS & Custom Software Solutions
            </li>
            <li className="flex items-center gap-3">
              <Database className="text-pink-400" />
              Database Architecture & API Integration
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-purple-400" />
              Software Testing & Quality Assurance
            </li>
            <li className="flex items-center gap-3">
              <BrainCircuit className="text-red-400" />
              AI/ML Solutions & Automation
            </li>
          </ul>
        </section>

        
      </div>
    </div>
  );
};

export default AboutUs;
