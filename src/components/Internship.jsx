import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  cyber,
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
  simrantshirt,
  // Hero carousel images
  class1,
  class2,
  class3,
  class4,
  class5
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
  { id: 18, title: "DevOps Internship", description: "Implement CI/CD pipelines, containerization with Docker, and deploy scalable apps with cloud platforms.", image: devops, link: "/devops" },
  { id: 19, title: "Cyber Security Internship", description: "Protect systems, networks, and applications from cyber threats. Learn ethical hacking basics, vulnerability assessment, penetration testing, network security, and cybersecurity best practices through hands-on labs and real-world scenarios.", image: cyber, link: "/cybersecurity" }
];

const slides = [
  {
    image: class1,
    heading: "Best IT Training & Internship in Jodhpur – TechieHelp",
    sub: "Build real skills with industry-focused programs"
  },
  {
    image: class2,
    heading: "Industry-Oriented Internships for Students in Jodhpur",
    sub: "Learn by working on real-world projects"
  },
  {
    image: class3,
    heading: "From Learning to Career – Start Your Tech Journey with TechieHelp",
    sub: "Projects • Mentorship • Verified Certification"
  },
  {
    image: class4,
    heading: "Trusted Internship Programs Backed by Real Project Experience",
    sub: "Designed for students, freshers & career starters"
  },
  {
    image: class5,
    heading: "Learn. Build. Grow. Get Career-Ready with TechieHelp Jodhpur",
    sub: "Practical training that employers value"
  }
];

const Internship = () => {
  const specialBatchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Filter internships based on search term
  const [filteredInternships, setFilteredInternships] = useState(internships);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredInternships(internships);
    } else {
      setFilteredInternships(internships.filter(internship =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.description.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [searchTerm]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % internsOfMonths.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [internsOfMonths.length]);

  return (
    <div className="bg-primary text-white min-h-screen">
      <Helmet>
        <title>Best IT Training & Internship in Jodhpur | TechieHelp</title>
        <meta name="description" content="TechieHelp offers the best IT training and internship programs in Jodhpur with live projects, ISO-certified learning, AICTE-aligned internships, and placement-focused support for students and freshers." />
        <meta property="og:title" content="Best IT Training & Internship in Jodhpur | TechieHelp" />
        <meta property="og:description" content="TechieHelp offers the best IT training and internship programs in Jodhpur with live projects, ISO-certified learning, AICTE-aligned internships, and placement-focused support for students and freshers." />
        <meta property="og:url" content="https://www.techiehelp.in/careers/training-internships" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.techiehelp.in/assets/internship.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IT Training & Internship in Jodhpur | TechieHelp" />
        <meta name="twitter:description" content="TechieHelp offers the best IT training and internship programs in Jodhpur with live projects, ISO-certified learning, AICTE-aligned internships, and placement-focused support for students and freshers." />
        <meta name="twitter:image" content="https://www.techiehelp.in/assets/internship.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TechieHelp",
            "url": "https://www.techiehelp.in",
            "logo": "https://www.techiehelp.in/assets/logo.png",
            "description": "TechieHelp is a leading IT training and internship provider in Jodhpur, Rajasthan, offering hands-on learning, live projects, and verified certificates for college students and freshers.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jodhpur",
              "addressRegion": "Rajasthan",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TechieHelp - IT Training & Internship in Jodhpur",
            "url": "https://www.techiehelp.in/careers/training-internships",
            "description": "Best IT training and internship programs in Jodhpur with live projects, ISO-certified learning, AICTE-aligned internships, and placement-focused support for students and freshers.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jodhpur, Rajasthan",
              "addressLocality": "Jodhpur",
              "addressRegion": "Rajasthan",
              "postalCode": "342001",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.2389",
              "longitude": "73.0243"
            },
            "telephone": "+91-XXXXXXXXXX",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "15000"
            }
          })}
        </script>
      </Helmet>
      {/* Content */}
      <div className="relative pt-20 px-4">
        {/* Hero Section Carousel */}
        <div className="relative w-screen h-[95vh] overflow-hidden left-1/2 -translate-x-1/2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/85"></div>
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="bg-black/45 backdrop-blur-[6px] rounded-xl p-6 md:p-8 text-center">
                  {index === 0 ? (
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.heading}</h1>
                  ) : (
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.heading}</h2>
                  )}
                  <p className="text-lg md:text-xl font-light text-gray-300 mb-4">{slide.sub}</p>
                  <p className="text-sm text-gray-200">MSME Registered • AICTE/NIP Aligned • ISO Certified • 15,000+ Students Trained in Jodhpur, Rajasthan</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: scroll 30s linear infinite;
            }
            .hover\\:pause:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        {/* Marquee Section - Full Width */}
        <section className="w-screen bg-gray-950 py-4 border-b border-gray-900 overflow-hidden relative left-1/2 -translate-x-1/2">
          <div className="animate-marquee flex items-center space-x-4 whitespace-nowrap">
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Highest Package ₹12 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">₹8 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">₹6 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">MSME Registered Training Partner</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">National Internship Portal Certified</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">ISO 9001:2015 Certified</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">15,000+ Students Trained</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Industry Expert Trainers</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Live Project Based Training</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Career Support & Job Assistance</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Welcome Kit Provided</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">4.6/5 Rating by 2,000+ Learners</span>
            {/* Duplicate for seamless infinite loop */}
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Highest Package ₹12 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">₹8 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">₹6 LPA</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">MSME Registered Training Partner</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">National Internship Portal Certified</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">ISO 9001:2015 Certified</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">15,000+ Students Trained</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Industry Expert Trainers</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Live Project Based Training</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Career Support & Job Assistance</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">Welcome Kit Provided</span>
            <span className="bg-gray-600 rounded-full px-4 py-2 text-sm font-medium border border-gray-500 text-white">4.6/5 Rating by 2,000+ Learners</span>
          </div>
        </section>

        <div className="container mx-auto">
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center px-4 py-8">
            TechieHelp is a Jodhpur-based IT training and internship provider offering hands-on learning, live industry projects, and verified certificates for college students and freshers in Jodhpur and nearby regions of Rajasthan.
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-white my-8 px-8 py-10">
            Our Internship Programs in Jodhpur
          </h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search internships by domain (e.g., web, app, AI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

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
            {filteredInternships.length > 0 ? (
              filteredInternships.map((item, index) => (
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
              ))
            ) : (
              searchTerm.trim() !== '' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No internships available</h3>
                  <p className="text-gray-300">Try adjusting your search terms or browse all internships.</p>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Empowering Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-16 px-4"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              whileHover={{ scale: 1.02 }}
            >
              Empowering Students Across These Countries
            </motion.h2>
            <div className="flex flex-nowrap gap-4 justify-center items-center overflow-x-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/in.png" alt="India flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">India</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Nigeria</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/br.png" alt="Brazil flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Brazil</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/ke.png" alt="Kenya flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Kenya</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/lk.png" alt="Sri Lanka flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Sri Lanka</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/eg.png" alt="Egypt flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Egypt</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Bangladesh</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/cm.png" alt="Cameroon flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Cameroon</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/rw.png" alt="Rwanda flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Rwanda</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/et.png" alt="Ethiopia flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Ethiopia</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/ir.png" alt="Iran flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Iran</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="United States flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">America</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center gap-2"
              >
                <img src="https://flagcdn.com/w40/ae.png" alt="United Arab Emirates flag" className="w-8 h-6 rounded flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">United Arab Emirates</span>
              </motion.div>
            </div>
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

              {/* Special Batch Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full relative"
                ref={specialBatchRef}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl -z-10"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-bounce"></div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
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

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white/10 via-purple-500/5 to-blue-500/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
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
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{
                          backgroundPosition: "200% center",
                          transition: { duration: 0.5 }
                        }}
                      >
                        🚀 Special Batch Program
                      </motion.h2>

                      {/* Animated underline */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
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
                        { icon: "⚡", text: "Accelerated Learning Path with Intensive Training", color: "from-purple-400 to-blue-500" },
                        { icon: "👥", text: "Small Batch Size for Personalized Attention", color: "from-blue-400 to-indigo-500" },
                        { icon: "🎯", text: "Focused on Real-World Projects and Industry Standards", color: "from-indigo-400 to-purple-500" },
                        { icon: "🏆", text: "Priority Access to Premium Opportunities and Networking", color: "from-pink-400 to-purple-500" }
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
                              className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300"
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
                          boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        🚀 Join Special Batch
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
                      {/* Purple Box */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 shadow-xl"></div>

                      {/* Special Batch Image inside Purple Box */}
                      <motion.img
                        src={groups}
                        alt="Special Batch Program"
                        className="relative w-full max-w-md h-auto rounded-2xl object-cover border-4 border-transparent"
                        whileHover={{
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.6 }
                        }}
                      />

                      {/* Floating Rocket */}
                      <motion.div
                        className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
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
                        <span className="text-2xl">🚀</span>
                      </motion.div>

                      {/* Floating Star */}
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-xl"
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
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
                    className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
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
                    🌟 Unleash your potential with our Special Batch! 🌟
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
                    { emoji: "👨‍💼", text: "Mentorship from Founders & Industry Experts: Access to leadership and domain experts committed to your professional success in Jodhpur.", side: "right", color: "from-blue-400 to-cyan-500" },
                    { emoji: "🔍", text: "Transparent & Trackable Internship Records: Publicly verifiable internship documentation for academic and career use.", side: "left", color: "from-purple-400 to-pink-500" },
                    { emoji: "📜", text: "Formal Offer Letters & Certificates: Empowering your job applications with official documentation.", side: "right", color: "from-orange-400 to-red-500" },
                    { emoji: "🎓", text: "Access to Premium Career Resources: Including free and paid tools, learning materials, and exclusive networking opportunities.", side: "left", color: "from-indigo-400 to-purple-500" },
                    { emoji: "🌐", text: "Vibrant Community Engagement: Active participation on LinkedIn, Discord, GitHub, and YouTube to foster continuous learning and professional networking in Jodhpur.", side: "right", color: "from-teal-400 to-green-500" }
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