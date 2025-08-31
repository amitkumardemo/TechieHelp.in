import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  webDevelopment,
  appDevelopment,
  seo,
  uiux,
  digital,
  tech,
  maintance,
  agents,
  chatbot,
  automation,
  computer,
  predictive,
  generative,
  education,
  voice,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  domain,
  badges,
  swag,
  frontend,
  backend,
  fullstack,
  node,
  python,
  java,
  javafull,
  javascript,
  mern,
  react,
  aiml,
  devops,
  // Interns of Months photos
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
  simrantshirt
} from "../assets";
import InternshipFAQ from "./InternshipFAQ";

const internships = [
  { id: 1, title: "Web Development Internship", description: "Work on real-world websites using HTML, CSS, JavaScript & React. Get mentorship and project experience.", image: webDevelopment, link: "/webdevelopment" },
  { id: 2, title: "App Development Internship", description: "Build Android/iOS apps using Flutter or React Native. Hands-on learning with weekly challenges.", image: appDevelopment, link: "/androiddevelopment" },
  { id: 3, title: "UI/UX Design Internship", description: "Learn Figma, Adobe XD, and user research. Create real UI designs for clients & portfolio.", image: uiux, link: "/uiux" },
  { id: 4, title: "SEO & Digital Marketing Internship", description: "Explore keyword research, social media marketing, and Google Analytics tools.", image: seo, link: "/seo" },
  { id: 5, title: "Artificial Intelligence Internship", description: "Implement AI models in Python. Work on projects like image recognition, chatbots & data prediction.", image: chatbot, link: "/ai" },
  { id: 6, title: "Machine Learning Internship", description: "Learn regression, classification, clustering. Build ML models & deploy them.", image: predictive, link: "/machinelearning" },
  { id: 7, title: "Front-End Developer Internship", description: "Build responsive and modern UIs using HTML, CSS, and JavaScript frameworks.", image: frontend, link: "/frontend" },
  { id: 8, title: "Back-End Developer Internship", description: "Work with server-side logic, databases, and APIs using languages like Java, Python, or Node.js.", image: backend, link: "/backend" },
  { id: 9, title: "Full Stack Developer Internship", description: "Develop both front-end and back-end parts of web applications using modern tech stacks.", image: fullstack, link: "/fullstack" },
  { id: 10, title: "MERN Stack Developer Internship", description: "Work on full-stack applications using MongoDB, Express.js, React.js, and Node.js.", image: mern, link: "/mern" },
  { id: 11, title: "Python Developer Internship", description: "Develop scripts, automation, and backend logic using Python frameworks like Django or Flask.", image: python, link: "/python" },
  { id: 12, title: "Java Developer Internship", description: "Work on backend development using Java and frameworks like Spring Boot.", image: java, link: "/java" },
  { id: 13, title: "Java Full Stack Developer Internship", description: "Build full stack apps using Java (Spring) for backend and React/Angular for frontend.", image: javafull, link: "/javafull" },
  { id: 14, title: "React Developer Internship", description: "Create dynamic web interfaces using React.js and modern JavaScript libraries.", image: react, link: "/react" },
  { id: 15, title: "JavaScript Developer Internship", description: "Work on dynamic front-end projects using JavaScript, ES6+, and related libraries.", image: javascript, link: "/javascript" },
  { id: 16, title: "Node.js Developer Internship", description: "Build scalable server-side applications using Node.js and Express.", image: node, link: "/node" },
  { id: 17, title: "AI/ML Developer Internship", description: "Work on AI models, machine learning algorithms, and real-world datasets using Python and popular libraries.", image: aiml, link: "/aiml" },
  { id: 18, title: "DevOps Internship", description: "Implement CI/CD pipelines, containerization with Docker, and deploy scalable apps with cloud platforms.", image: devops, link: "/devops" }
];

const Internship = () => {
  // Interns of Months photos array
  const internsOfMonths = [
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
    simrantshirt
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % internsOfMonths.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [internsOfMonths.length]);

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Content */}
      <div className="relative pt-20 px-4">
        <div className="container mx-auto">
          {/* Hero Section with Slideshow */}
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            {/* Slideshow Container */}
            <div className="w-full md:w-1/2 relative h-96 md:h-[500px] rounded-xl overflow-hidden pt-10 md:pt-12">
              {internsOfMonths.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 pt-10 md:pt-12"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.05
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <img
                    src={image}
                    alt={`Intern of the Month ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Hero Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                Our <span className="text-blue-500">Internship & Training Program</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg mb-6"
              >
                Welcome to the TechieHelp Internship and Training Program, a premier platform designed to bridge the gap between academic learning and industry requirements by providing hands-on experience, expert mentorship, and professional development opportunities.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Join Our Team
              </motion.button>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-white my-12 px-8 py-20">
            Our Internship Programs
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {internships.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 rounded-3xl shadow-xl hover:shadow-2xl p-6 cursor-pointer transition-all duration-500 border border-gray-200 hover:border-blue-400 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/30 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-200"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping delay-100"></div>

                {/* Tech pattern overlay */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id={`tech-pattern-${index}`} patternUnits="userSpaceOnUse" width="20" height="20">
                        <rect width="20" height="20" fill="none"/>
                        <circle cx="10" cy="10" r="1" fill="currentColor"/>
                        <rect x="5" y="5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#tech-pattern-${index})`}/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="relative mb-4 overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {item.title.split(' ')[0]}
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span>Explore More</span>
                      <motion.span
                        className="text-lg"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Internship Domains & Flexible Duration Options Section */}
          <div className="text-white pt-20 px-4 mt-20">
            <div className="container mx-auto space-y-20">
              {/* Section 1 */}
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-6">
                    🎯 Internship Domains & Flexible Duration Options
                  </h2>
                  <p className="text-lg mb-6 whitespace-pre-line">
                    We offer comprehensive internship programs across diverse technical and professional domains. Participants may choose from 1-month, 2-months, or 3-months durations, enabling customized learning aligned with individual career goals. Each program comprises:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>📚 Live Interactive Sessions: Delivered by industry experts to cover core concepts and practical skills.</li>
                    <li>🛠️ Project-Based Learning: Real-world projects designed to develop problem-solving and technical proficiency.</li>
                    <li>❓ Doubt Clearing Sessions: Regular interactive sessions to address queries and reinforce learning.</li>
                    <li>👨‍🏫 Dedicated Mentorship: Continuous guidance from seasoned professionals and founders.</li>
                    <li>🏆 Hackathons & Competitions: Access to curated hackathon resources and challenges to stimulate innovation.</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    src={domain}
                    alt="Internship Domains"
                    className="w-full rounded-xl shadow-xl object-cover"
                  />
                </div>
              </div>


              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full"
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                  🎁 Exclusive Internship Benefits
                </motion.h2>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      }
                    }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg"
                >
                  {[
                    { emoji: "🏅", title: "AICTE-Verified Certificate", desc: "Official recognition ensuring your internship meets national educational standards." },
                    { emoji: "✅", title: "LinkedIn Digital Badge", desc: "Validate your internship experience to potential employers with verified credentials." },
                    { emoji: "💻", title: "GitHub Student Pack", desc: "Unlock powerful development tools and resources free of cost for students." },
                    { emoji: "🎓", title: "Live Training Sessions", desc: "Comprehensive sessions covering Git, GitHub, Docker, and Open Source contributions." },
                    { emoji: "🌟", title: "Leadership Programs", desc: "Join MLSA, GDSC, and GeeksforGeeks Campus Mantri for career advancement." },
                    { emoji: "🚀", title: "Project Portfolio", desc: "Showcase projects with GitHub repositories integrated into your professional portfolio." },
                    { emoji: "🤝", title: "Founder Mentorship", desc: "One-on-one mentoring sessions directly from TechieHelp founders." },
                    { emoji: "📄", title: "Resume Review", desc: "Industry-standard resume evaluation and feedback from professionals." },
                    { emoji: "🆔", title: "Trackable IDs", desc: "Unique identification for transparent and verifiable internship records." },
                    { emoji: "🎉", title: "Hackathon & Awards", desc: "Grand hackathon with ₹2000 cash prizes and featured exposure on social media." },
                    { emoji: "🛠️", title: "Specialized Workshops", desc: "No-code website builder and API masterclass with deployment guidance." },
                    { emoji: "🌐", title: "Open Source Guidance", desc: "Support for GSoC, GSSOC, SSOC, and WSOC participation." }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 overflow-hidden"
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Floating particles effect */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100"></div>

                      <div className="relative z-10">
                        <motion.div
                          className="text-5xl mb-4 text-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {benefit.emoji}
                        </motion.div>

                        <motion.h3
                          className="text-lg font-bold mb-3 text-center text-gray-900 group-hover:text-blue-700 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {benefit.title}
                        </motion.h3>

                        <motion.p
                          className="text-sm text-center text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {benefit.desc}
                        </motion.p>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Section 3 */}
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-6">
                    🏆 Recognition & Rewards for Top Performers
                  </h2>
                  <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>🎁 Exclusive TechieHelp Merchandise and Swag</li>
                    <li>⭐ Featured Portfolio Placement on the TechieHelp Platform and Partner Networks</li>
                    <li>📝 Permanent Letter of Recommendation highlighting achievements and skills</li>
                    <li>🏅 Certificate of Excellence recognizing outstanding performance</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    src={swag}
                    alt="Recognition & Rewards"
                    className="w-full rounded-xl shadow-xl object-cover"
                  />
                </div>
              </div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full"
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent"
                >
                  🎓 Why Partner with TechieHelp?
                </motion.h2>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.3
                      }
                    }
                  }}
                  className="relative h-96 md:h-[500px] flex items-center justify-center"
                >
                  {/* Central hub */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-full flex items-center justify-center"
                      >
                        <span className="text-2xl">🎯</span>
                      </motion.div>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-sm font-bold text-teal-300">TechieHelp</p>
                      <p className="text-xs text-cyan-400">Excellence</p>
                    </div>
                  </motion.div>

                  {/* Orbiting elements */}
                  {[
                    { emoji: "✅", title: "Recognition", desc: "AICTE & MSME verified credentials", angle: 0, color: "from-green-400 to-emerald-500", delay: 0.8 },
                    { emoji: "👨‍💼", title: "Mentorship", desc: "Direct founder guidance", angle: 60, color: "from-blue-400 to-cyan-500", delay: 1.0 },
                    { emoji: "🔍", title: "Transparency", desc: "Verifiable records", angle: 120, color: "from-purple-400 to-pink-500", delay: 1.2 },
                    { emoji: "📜", title: "Certificates", desc: "Official documentation", angle: 180, color: "from-orange-400 to-red-500", delay: 1.4 },
                    { emoji: "🎓", title: "Resources", desc: "Premium tools & materials", angle: 240, color: "from-indigo-400 to-purple-500", delay: 1.6 },
                    { emoji: "🌐", title: "Community", desc: "Active tech networking", angle: 300, color: "from-teal-400 to-green-500", delay: 1.8 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
                        visible: { opacity: 1, scale: 1, x: 0, y: 0 }
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-140px) rotate(-${item.angle}deg)`
                      }}
                    >
                      {/* Connecting line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: item.delay }}
                        className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-300 origin-left opacity-60"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${item.angle}deg)`,
                          transformOrigin: 'left center'
                        }}
                      ></motion.div>

                      {/* Orbital element */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: item.delay }}
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.6 }
                        }}
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-center`}
                      >
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Floating particles */}
                        <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                        <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100"></div>

                        <motion.span
                          className="text-2xl relative z-10"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {item.emoji}
                        </motion.span>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      </motion.div>

                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
                      >
                        <div className="font-bold text-cyan-300">{item.title}</div>
                        <div className="text-gray-300">{item.desc}</div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Orbital rings */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-400 rounded-full"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-teal-400 rounded-full"
                  ></motion.div>
                </motion.div>

                {/* Bottom description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Experience a revolutionary approach to internships where technology meets opportunity.
                    Our orbital system represents the interconnected benefits that will launch your career into orbit! 🚀
                  </p>
                </motion.div>
              </motion.div>

              {/* Section 5: Claim Your Internship Badge */}
              <div className="max-w-6xl w-full bg-blue-900 rounded-2xl p-10 mt-20 mx-auto text-white shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-center">
                  🎖️ Claim Your Internship Badge
                </h2>
                <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
                  Proudly showcase your achievement as a TechieHelp Intern on LinkedIn! The official badge unlocking process will be shared with you **via email**.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <ol className="list-decimal list-inside space-y-4 text-lg max-w-xl">
                    <li>Check your email inbox (the one you registered with TechieHelp).</li>
                    <li>Follow the personalized steps mentioned in the email.</li>
                    <li>Upload a professional photo (preferably formal attire).</li>
                    <li>Apply the internship badge as instructed in the guide.</li>
                    <li>Download your badge-enhanced image.</li>
                    <li>Update your LinkedIn profile picture with your new badge image.</li>
                    <li>Join our LinkedIn community of verified interns!</li>
                  </ol>
                  <div className="max-w-xs">
                    <img
                      src={badges}
                      alt="TechieHelp Internship Badge"
                      className="rounded-xl shadow-xl object-cover w-full"
                    />
                    <p className="text-center mt-2 text-sm italic">
                      Your official TechieHelp Internship Badge
                    </p>
                  </div>
                </div>
                <p className="text-center mt-8 text-xl font-semibold">
                  🎉 You're all set to shine! Watch for your badge instructions in your inbox and proudly represent TechieHelp.
                </p>
              </div>

            </div>
          </div>
          <InternshipFAQ />
        </div>
      </div>
    </div>
  );
};
export default Internship;
