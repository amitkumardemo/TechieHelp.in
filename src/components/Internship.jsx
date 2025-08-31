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
                  {/* Section Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      Internship Domains & Flexible Duration Options
                    </motion.h2>
                    <motion.p
                      className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      We offer comprehensive internship programs across diverse technical and professional domains. Participants may choose from 1-month, 2-months, or 3-months durations, enabling customized learning aligned with individual career goals. Each program comprises:
                    </motion.p>
                  </motion.div>

                  {/* Section 1 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          staggerChildren: 0.2
                        }
                      }
                    }}
                    className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-10"
                  >
                    {/* Left Features */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="w-full lg:w-1/3"
                    >
                      <motion.h3
                        className="text-2xl font-bold mb-4 text-blue-400 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        🚀 Key Features
                      </motion.h3>
                      <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.15
                            }
                          }
                        }}
                      >
                        {[
                          { icon: "📚", text: "Live Interactive Sessions" },
                          { icon: "💡", text: "Project-Based Learning" },
                          { icon: "❓", text: "Doubt Clearing Sessions" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg cursor-pointer hover:bg-opacity-40 transition-colors flex items-center gap-4"
                            whileHover={{ scale: 1.05, x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-lg font-semibold">{item.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Center Image */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="w-full lg:w-1/3 flex justify-center"
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            y: [0, -10, 0]
                          }}
                          transition={{
                            duration: 1,
                            y: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          src={domain}
                          alt="Internship Domains"
                          className="w-80 h-80 rounded-2xl shadow-2xl object-cover border-4 border-blue-500"
                        />
                        {/* Floating elements */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-2xl"
                          animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity }
                          }}
                        >
                          ⭐
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-lg"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          🎯
                        </motion.div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                      </motion.div>
                    </motion.div>

                    {/* Right Features */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="w-full lg:w-1/3"
                    >
                      <motion.h3
                        className="text-2xl font-bold mb-4 text-green-400 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        🌟 More Benefits
                      </motion.h3>
                      <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.15
                            }
                          }
                        }}
                      >
                        {[
                          { icon: "👨‍🏫", text: "Dedicated Mentorship" },
                          { icon: "🏆", text: "Hackathons & Competitions" },
                          { icon: "⏰", text: "Choose from 1, 2, or 3 months flexible durations tailored to your career goals!" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg cursor-pointer hover:bg-opacity-40 transition-colors flex items-center gap-4"
                            whileHover={{ scale: 1.05, x: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-lg font-semibold">{item.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>

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

                <div className="relative max-w-5xl mx-auto overflow-x-auto pb-8">
                  {/* Progress line */}
                  <motion.div
                    className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  ></motion.div>

                  {/* Step items */}
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
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      viewport={{ once: true }}
                      className="inline-block mx-8"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full shadow-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer relative"
                      >


                        <motion.span
                          className="text-4xl mb-2"
                          whileHover={{
                            scale: 1.3,
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.4 }
                          }}
                        >
                          {item.emoji}
                        </motion.span>

                        <motion.p
                          className="text-sm text-white font-bold leading-tight"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                        >
                          {item.title}
                        </motion.p>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out rounded-full"></div>

                        {/* Pulse effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 opacity-0"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        ></motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3: Recognition & Rewards for Top Performers */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full relative"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl -z-10"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce"></div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white/10 via-yellow-500/5 to-orange-500/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                  >
                    {/* Animated Heading */}
                    <motion.div
                      className="relative mb-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{
                          backgroundPosition: "200% center",
                          transition: { duration: 0.5 }
                        }}
                      >
                        🏆 Recognition & Rewards for Top Performers
                      </motion.h2>

                      {/* Animated underline */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>

                    {/* Animated List */}
                    <motion.ul
                      className="space-y-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.6
                          }
                        }
                      }}
                    >
                      {[
                        { icon: "🎁", text: "Exclusive TechieHelp Merchandise and Swag", color: "from-pink-400 to-rose-500" },
                        { icon: "⭐", text: "Featured Portfolio Placement on the TechieHelp Platform and Partner Networks", color: "from-yellow-400 to-orange-500" },
                        { icon: "📝", text: "Permanent Letter of Recommendation highlighting achievements and skills", color: "from-blue-400 to-cyan-500" },
                        { icon: "🏅", text: "Certificate of Excellence recognizing outstanding performance", color: "from-purple-400 to-pink-500" }
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -30, scale: 0.9 },
                            visible: { opacity: 1, x: 0, scale: 1 }
                          }}
                          whileHover={{
                            scale: 1.05,
                            x: 10,
                            transition: { duration: 0.2 }
                          }}
                          className="group relative"
                        >
                          <motion.div
                            className={`flex items-center gap-4 p-4 bg-gradient-to-r ${item.color} bg-opacity-10 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                            whileHover={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                            }}
                          >
                            {/* Animated Icon */}
                            <motion.span
                              className="text-3xl"
                              whileHover={{
                                scale: 1.2,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.5 }
                              }}
                            >
                              {item.icon}
                            </motion.span>

                            {/* Text */}
                            <motion.span
                              className="text-lg font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {item.text}
                            </motion.span>

                            {/* Hover effect line */}
                            <motion.div
                              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color}`}
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="mt-8"
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        🚀 Aim for Excellence
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex justify-center relative"
                  >
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Yellow Box */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-xl"></div>

                      {/* Swag Image inside Yellow Box */}
                      <motion.img
                        src={swag}
                        alt="Recognition & Rewards"
                        className="relative w-full max-w-md h-auto rounded-2xl object-cover border-4 border-transparent"
                        whileHover={{
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.6 }
                        }}
                      />

                      {/* Floating Trophy */}
                      <motion.div
                        className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <span className="text-2xl">🏆</span>
                      </motion.div>

                      {/* Floating Star */}
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: 360,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <span className="text-xl">⭐</span>
                      </motion.div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom motivational text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <motion.p
                    className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    🌟 Excellence is not just rewarded, it's celebrated! 🌟
                  </motion.p>
                </motion.div>
              </motion.div>

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
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  🎓 Why Partner with TechieHelp?
                </motion.h2>
                <div className="relative max-w-4xl mx-auto">
                  {/* Vertical line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-600 h-full rounded-full"></div>

                  {/* Timeline items */}
                  {[
                    { emoji: "✅", text: "Official AICTE and MSME Recognition: Ensuring credibility and acceptance of your internship credentials across academia and industry.", side: "left", color: "from-green-400 to-emerald-500" },
                    { emoji: "👨‍💼", text: "Mentorship from Founders & Industry Experts: Access to leadership and domain experts committed to your professional success.", side: "right", color: "from-blue-400 to-cyan-500" },
                    { emoji: "🔍", text: "Transparent & Trackable Internship Records: Publicly verifiable internship documentation for academic and career use.", side: "left", color: "from-purple-400 to-pink-500" },
                    { emoji: "📜", text: "Formal Offer Letters & Certificates: Empowering your job applications with official documentation.", side: "right", color: "from-orange-400 to-red-500" },
                    { emoji: "🎓", text: "Access to Premium Career Resources: Including free and paid tools, learning materials, and exclusive networking opportunities.", side: "left", color: "from-indigo-400 to-purple-500" },
                    { emoji: "🌐", text: "Vibrant Community Engagement: Active participation on LinkedIn, Discord, GitHub, and YouTube to foster continuous learning and professional networking.", side: "right", color: "from-teal-400 to-green-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`flex items-center mb-12 ${item.side === "left" ? "justify-start" : "justify-end"}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className={`w-80 bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-xl relative cursor-pointer`}
                      >
                        {/* Dot on the line */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br ${item.color} rounded-full border-2 border-white ${item.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}></div>

                        <motion.span
                          className="text-4xl mb-2 block"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.emoji}
                        </motion.span>

                        <motion.p
                          className="text-sm text-white leading-tight"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {item.text}
                        </motion.p>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out rounded-xl"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
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
