import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  portfolio,
  portfoli,
  product,
  restaurant,
  food,
  web,
  custom,
  organic,
  doctor,
  home,
  zym,
  sports,
  er,
  junk,
  face,
  plant,
  store,
  health,
  ecom,
  producer,
  gamedevelopment,
  library,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  webdev,
  fullstack2,
  mobileapp,
  computer,
} from "../assets";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./CTA";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: `🎨 Modern developer portfolio with React & Tailwind CSS\n📊 Auto-updated GitHub & LeetCode achievements\n⚡ Responsive design with smooth animations\n🔗 Live project links and contact integration`,
    image: portfolio,
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    year: "2023",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    industry: "Education",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: `🛒 Full-featured online store with payment integration\n📦 Product catalog with advanced filtering\n🛡️ Secure checkout process with multiple payment options\n📊 Admin dashboard for inventory management`,
    image: ecom,
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    year: "2023",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: `🚚 Real-time food delivery tracking system\n📍 Location-based restaurant discovery\n💳 Secure payment processing\n⭐ Review and rating system`,
    image: food,
    category: "Mobile App",
    technologies: ["React Native", "Firebase"],
    link: "#",
    year: "2023",
    headline: "Real-Time Food Delivery",
    personality: "Efficient and User-Friendly",
    techStack: ["React Native", "Firebase"],
  },
];



const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectPortfolio = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slidingImages = [webdev, fullstack2, mobileapp, restaurant, web, custom, doctor];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidingImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slidingImages.length]);

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowArrow(window.scrollY < heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --------------------- Top Intro Section --------------------- */}
      <section className="bg-primary text-white flex flex-col items-center relative overflow-hidden h-screen">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-20 animate-gradient-x"></div>

        {/* Sliding Image Container */}
        <div className="relative w-full h-full">
          {slidingImages.map((image, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 0.9
              }}
              transition={{ duration: 0.8 }}
              src={image}
              alt={`Project Portfolio ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slidingImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-blue-500">Project Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-6 max-w-2xl"
          >
            Explore our diverse collection of successful projects spanning web development,
            mobile applications, and full-stack solutions. Each project showcases our
            commitment to innovation, quality, and client satisfaction.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Discuss Your Project
          </motion.a>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-20">
          <motion.a
            href="#mobile-apps"
            onClick={() => setSelectedCategory("Mobile App")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Mobile Apps
            <span className="text-lg">→</span>
          </motion.a>
          <motion.a
            href="#web-apps"
            onClick={() => setSelectedCategory("Web Development")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Web Apps
            <span className="text-lg">→</span>
          </motion.a>
        </div>
      </section>



      {/* --------------------- Mobile Apps Section --------------------- */}
      {(selectedCategory === "All" || selectedCategory === "Mobile App") && (
        <section id="mobile-apps" className="py-16 bg-black text-white">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Featured <span className="text-green-500">Mobile Apps</span>
            </motion.h2>
          </div>
          <div className="px-6">
            {(() => {
              const filteredMobile = projectsData.filter(project => project.category === "Mobile App");
              return (
                <>
                  {filteredMobile.length > 0 && (
                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={0}
                        className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 flex-1"
                      >
                        {/* Large Image */}
                        <div className="relative mb-6 overflow-hidden rounded-xl">
                          <img src={filteredMobile[0].image} alt={filteredMobile[0].title} className="w-full h-64 object-cover" />
                          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {filteredMobile[0].category}
                          </div>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{filteredMobile[0].title}</h3>
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {filteredMobile[0].technologies.map((tech, index) => (
                            <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                          ))}
                        </div>
                        {/* Description */}
                        <p className="text-gray-600 text-base leading-relaxed mb-6 whitespace-pre-line">{filteredMobile[0].description}</p>
                        {/* Button */}
                        <Link to={filteredMobile[0].link} className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                          <span>View Project</span>
                          <motion.span className="text-lg" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>→</motion.span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={1}
                        className="bg-black text-white rounded-2xl shadow-lg p-6 lg:w-1/3"
                      >
                        <div className="mb-4 flex gap-2 justify-start">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 border border-gray-300 rounded-xl text-center w-20 flex items-center justify-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm font-bold text-white">{filteredMobile[0].industry}</p>
                          </div>
                          <div className="p-2 bg-gray-100/60 backdrop-blur-sm border border-gray-300 rounded-xl text-center w-16 flex items-center justify-center">
                            <p className="text-sm font-bold text-gray-900">{filteredMobile[0].year}</p>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{filteredMobile[0].title}</h4>
                        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{filteredMobile[0].description}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <p className="font-semibold">Headline:</p>
                            <p>{filteredMobile[0].headline}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Personality:</p>
                            <p>{filteredMobile[0].personality}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                              {filteredMobile[0].techStack.map((tech, index) => (
                                <span key={index} className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {filteredMobile.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredMobile.slice(1).map(({ id, title, description, image, category, technologies, link }, i) => (
                        <motion.div
                          key={id}
                          custom={i + 1}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={cardVariants}
                          whileHover={{ y: -6, transition: { duration: 0.3 } }}
                          className="group relative bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-green-400 p-6 transition-all duration-300 flex flex-col overflow-hidden"
                        >
                          {/* Image */}
                          <div className="relative mb-4 overflow-hidden rounded-xl">
                            <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">{category}</div>
                          </div>
                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {technologies.map((tech, index) => (
                              <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{tech}</span>
                            ))}
                          </div>
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">{description}</p>
                          {/* Button */}
                          <Link to={link} className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span>View Project</span>
                            <motion.span className="text-lg" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>→</motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </section>
      )}

      {/* --------------------- Web Apps Section --------------------- */}
      {(selectedCategory === "All" || selectedCategory === "Web Development") && (
        <section id="web-apps" className="py-16 bg-gray-900 text-white">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Featured <span className="text-purple-500">Web Apps</span>
            </motion.h2>
          </div>
          <div className="px-6">
            {(() => {
              const filteredWeb = projectsData.filter(project => project.category === "Web Development");
              return (
                <>
                  {filteredWeb.length > 0 && (
                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={0}
                        className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 flex-1"
                      >
                        {/* Large Image */}
                        <div className="relative mb-6 overflow-hidden rounded-xl">
                          <img src={filteredWeb[0].image} alt={filteredWeb[0].title} className="w-full h-64 object-cover" />
                          <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {filteredWeb[0].category}
                          </div>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{filteredWeb[0].title}</h3>
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {filteredWeb[0].technologies.map((tech, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* Description */}
                        <p className="text-gray-600 text-base leading-relaxed mb-6 whitespace-pre-line">{filteredWeb[0].description}</p>
                        {/* Button */}
                        <Link to={filteredWeb[0].link} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                          <span>View Project</span>
                          <motion.span className="text-lg" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>→</motion.span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={1}
                        className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 lg:w-1/3"
                      >
                        <div className="mb-8 flex gap-2 justify-start">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 border border-white/10 rounded-full text-center w-35 flex items-center justify-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm font-bold text-white">{filteredWeb[0].industry}</p>
                          </div>
                          <div className="p-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-center w-16 flex items-center justify-center">
                            <p className="text-sm font-bold text-white-900">{filteredWeb[0].year}</p>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold mb-1">{filteredWeb[0].title}</h4>
                        <div className="mb-8 p-4 bg-gray/10 rounded-lg">
                          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{filteredWeb[0].description}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <p className="font-semibold">Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                              {filteredWeb[0].techStack.map((tech, index) => (
                                <span key={index} className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded-full flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {filteredWeb.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredWeb.slice(1).map(({ id, title, description, image, category, technologies, link }, i) => (
                        <motion.div
                          key={id}
                          custom={i + 1}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={cardVariants}
                          whileHover={{ y: -6, transition: { duration: 0.3 } }}
                          className="group relative bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-purple-400 p-6 transition-all duration-300 flex flex-col overflow-hidden"
                        >
                          {/* Image */}
                          <div className="relative mb-4 overflow-hidden rounded-xl">
                            <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">{category}</div>
                          </div>
                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {technologies.map((tech, index) => (
                              <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">{description}</p>
                          {/* Button */}
                          <Link to={link} className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span>View Project</span>
                            <motion.span className="text-lg" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>→</motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </section>
      )}

      {/* --------------------- Call to Action --------------------- */}
      <CTA />
      <Contact />
    </>
  );
};

export default ProjectPortfolio;
