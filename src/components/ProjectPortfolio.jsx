import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaPython,
  FaBootstrap,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiRazorpay,
  SiGooglemaps,
  SiPrisma,
  SiGoogle,
  SiClerk,
  SiPostgresql,
} from "react-icons/si";

import {
  restaurant,
  food,
  web,
  custom,
  doctor,
  ecom,
  webdev,
  fullstack2,
  mobileapp,
  nhRestaurant,
  raiConstruction,
  workEra,
  invitationWala,
  ujjawalLibrary,
  edgeCareer,
  techiehelpInstitute,
  dentEase,
} from "../assets";
import Contact from "./Contact";
import CTA from "./CTA";

const projectsData = [
  {
    id: 9,
    title: "Food Delivery App",
    description: `🚚 Real-time food delivery tracking system\n📍 Location-based restaurant discovery\n💳 Secure payment processing\n⭐ Review and rating system`,
    image: food,
    category: "Mobile App",
    technologies: ["React Native", "Firebase"],
    link: "#",
    year: "2023",
    headline: "Real-Time Food Delivery",
    personality: "Efficient and User-Friendly",
    techStack: ["Native", "Firebase"],
    industry: "Food App",
  },
  {
    id: 1,
    title: "Rai Construction Solutions",
    description: `🏗️ Enterprise-grade construction consultancy website
    🌍 Global-ready UI/UX with modern layouts &   trust-driven design
    💼 Service-focused structure optimized for leads & conversions
    📱 Fully responsive, pixel-perfect across all devices
    📩 Smart contact system with validation & location mapping
    🚀 Scalable, high-performance platform built for brand authority`,
    image: raiConstruction,
    category: "Web Development",
    link: "https://www.raiconstructionsolutions.com/",
    year: "2024",
    techStack: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Lucide Icons"
    ],
    industry: "Construction & Real Estate",
  },
  {
    id: 2,
    title: "DentEase (Dentwise)",
    description: `🦷 AI-powered dental platform with smart appointment booking
    🗣️ Voice-based AI agent for automated patient interaction
    🔐 Secure authentication with Clerk (Google, GitHub & Email)
    📅 3-step dentist appointment booking flow with email notifications
    💳 Subscription plans with smart upgrades & automatic invoicing
    📊 Admin dashboard for managing appointments and users`,
    image: dentEase,
    category: "Web Development",
    link: "https://dent-ease-life.vercel.app",
    year: "2024",
    techStack: [
      "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Shadcn UI", "Clerk Auth", "Vapi AI", "Resend Email"
    ],
    industry: "Healthcare",
  },
  {
    id: 3,
    title: "TechieHelp Institute of AI",
    description: `🎓 AI-powered career & skill institute for industry-ready talent
    🤖 End-to-end learning with guidance, internships & placements
    🌍 Global platform for students, professionals & switchers
    📊 AI tools for roadmaps, skill gaps, ATS resumes & interviews
    🏫 College-ready solutions with dashboards & placement support
    🚀 Scalable, automated & outcome-focused`,
    image: techiehelpInstitute, 
    category: "Web Development",
    link: "https://techiehelpinstituteofai.in/",
    year: "2024",
    techStack: [
      "Next.js", "React", "Tailwind", "Prisma ORM", "NeonDB", "Clerk Auth", "Gemini AI", "Inngest", "Vercel" 
    ],
    industry: "EdTech & AI Education",
  },
  {
    id: 4,
    title: "EdgeCareer: AI-Powered Career Assistant",
    description: `🚀 AI-powered career platform for job seekers and professionals
    🤖 ATS-optimized resumes, cover letters & mock interviews
    📊 Real-time insights on salaries, jobs & in-demand skills
    🎯 Personalized job matching and learning recommendations
    🧠 Recruiter-ready tools for resume screening and shortlisting
    🌍 Scalable global SaaS focused on real hiring outcomes`,
    image: edgeCareer, 
    category: "Web Development",
    link: "https://www.edgecareer.online/",
    year: "2024",
    techStack: [ "Next.js", "React", "Tailwind", 
      "Prisma ORM", "NeonDB", "Clerk Auth", "Gemini AI", "Inngest", "Vercel" 
    ],
    industry: "AI CareerTech / HRTech",
  },
  {
    id: 5,
    title: "Ujjawal Library",
    description: `📚 Official website for a real-world community library serving students and exam aspirants
    🌍 Clean, responsive design tailored for rural and semi-urban users
    📍 Integrated Google Maps for easy location access and local discovery
    📝 Contact & admission system designed to support student onboarding
    💳 Razorpay payment gateway for admissions and monthly fee collection`,
    image: ujjawalLibrary, 
    category: "Web Development",
    link: "https://ujjawal-libraray.vercel.app/",
    year: "2023",
    techStack: ["React", "Tailwind", 
      "Google Maps", "Razorpay"
    ],
    industry: "Education / Community Services",
  },
  {
    id: 6,
    title: "InvitationWala",
    description: `💌 Premium digital invitation platform for weddings & special celebrations
    🎥 Bespoke video invitations designed to be minimal, memorable & eco-friendly
    🎨 Custom-crafted designs reflecting each couple’s unique story and vibe
    🌍 Pan-India & online delivery trusted by hundreds of happy clients
    🚀 Built to save time, reduce cost, and elevate the invitation experience`,
    image: invitationWala, 
    category: "Web Development",
    link: "https://invitation-wala.vercel.app/",
    year: "2024",
    techStack: [ "HTML5", "CSS3", "JavaScript"],
    industry: "Wedding & Event Services",
  },
  {
    id: 7,
    title: "Work Era – Co-WorkingSpace Website",
    description: `🏢 Modern business website for a co-working space designed to attract startups & professionals
    🎨 Professional UI, highlighting workspace interiors, services & team
    📞 Lead-focused contact & enquiry pages for client acquisition
    🌍 Built to strengthen local brand presence and increase walk-in & online leads
    🚀 Ideal for co-working spaces, offices & commercial real-estate`,
    image: workEra, 
    category: "Web Development",
    link: "https://work-era-co-working-space.vercel.app/",
    year: "2024",
    techStack: [ "HTML5", "CSS3", "JavaScript",
      "Bootstrap" 
    ],
    industry: "Real Estate / Co-Working & Office Spaces",
  },
  {
    id: 8,
    title: "NH Restaurant",
    description: `🍽️ Premium restaurant website   showcasing menu, ambience & customer trust
    ⭐ Highly rated dining experience highlighting strong brand credibility
    📖 Complete digital menu with categories, pricing & signature specials
    📅 Online table reservation system for dine-in and private events
    📍 Location, contact & gallery integration to increase walk-ins
    🚀 Designed to convert visitors into loyal dining customers`,
    image: nhRestaurant, 
    category: "Web Development",
    link: "https://nh-restaurant-jodhpur.netlify.app/",
    year: "2024",
    techStack: [ "HTML5", "CSS3", "JavaScript", 
      "Bootstrap"
    ],
    industry: "Food & Hospitality",
  },
];

const techIcons = {
  React: { icon: FaReact, color: "text-cyan-400" },
  Native: { icon: FaReact, color: "text-indigo-400" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "Node.js": { icon: FaNodeJs, color: "text-green-500" },
  "Express.js": { icon: SiExpress, color: "text-gray-300" },
  JavaScript: { icon: FaJs, color: "text-yellow-400" },
  HTML5: { icon: FaHtml5, color: "text-orange-500" },
  CSS3: { icon: FaCss3, color: "text-blue-500" },
  TypeScript: { icon: SiTypescript, color: "text-blue-400" },
  Python: { icon: FaPython, color: "text-yellow-400" },
  Bootstrap: { icon: FaBootstrap, color: "text-purple-500" },
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-300" },
  Firebase: { icon: SiFirebase, color: "text-yellow-500" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  MySQL: { icon: FaDatabase, color: "text-blue-300" },
  Vite: { icon: SiVite, color: "text-purple-400" },
  Git: { icon: SiGit, color: "text-orange-500" },
  GitHub: { icon: SiGithub, color: "text-white" },
  Postman: { icon: SiPostman, color: "text-orange-400" },
  Vercel: { icon: SiVercel, color: "text-neutral-200" },
  Render: { icon: SiRender, color: "text-blue-400" },
  Razorpay: { icon: SiRazorpay, color: "text-blue-500" },
  "Google Maps": { icon: SiGooglemaps, color: "text-red-500" },
  "Prisma ORM": { icon: SiPrisma, color: "text-teal-400" },
  NeonDB: { icon: SiPostgresql, color: "text-green-400" },
  "Gemini AI": { icon: SiGoogle, color: "text-blue-500" },
  Inngest: { icon: FaProjectDiagram, color: "text-purple-400" },
  "Clerk Auth": { icon: SiClerk, color: "text-indigo-400" },
};

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

const TechStackGrid = ({ techStack }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
      {techStack.map((tech, index) => {
        const TechIcon = techIcons[tech]?.icon;
        const color = techIcons[tech]?.color || "text-gray-300";

        return (
          <div
            key={index}
            className="bg-white/10 border border-white/10 rounded-2xl p-4
                       flex flex-col items-center justify-center
                       hover:border-purple-500 hover:shadow-lg
                       transition-all duration-300"
          >
            {TechIcon && <TechIcon className={`text-4xl mb-1 ${color}`} />}
            <p className="text-sm text-gray-300 text-center font-medium">
              {tech}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const ProjectPortfolio = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const gridRef = useRef(null);
  const [mobileProgress, setMobileProgress] = useState(0);
  const [webProgress, setWebProgress] = useState(0);
  const [mobileDragging, setMobileDragging] = useState(false);
  const [webDragging, setWebDragging] = useState(false);
  const [mobileRect, setMobileRect] = useState(null);
  const [webRect, setWebRect] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const slidingImages = [
    webdev,
    fullstack2,
    mobileapp,
    restaurant,
    web,
    custom,
    doctor,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slidingImages.length,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slidingImages.length]);

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    // Remove hash from URL on component mount to ensure clean URL
    window.history.replaceState(null, null, window.location.pathname);

    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowArrow(window.scrollY < heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gridRef.current) {
        gridRef.current.scrollLeft += 1; // Adjust speed as needed
        handleScroll(gridRef, setMobileProgress);
        handleScroll(gridRef, setWebProgress);
      }
    }, 50); // Adjust interval as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(gridRef, setMobileProgress);
      handleScroll(gridRef, setWebProgress);
    };

    if (gridRef.current) {
      gridRef.current.addEventListener("scroll", handleScrollEvent);
    }

    return () => {
      if (gridRef.current) {
        gridRef.current.removeEventListener("scroll", handleScrollEvent);
      }
    };
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (mobileDragging) {
        handleMouseMove(
          e,
          mobileDragging,
          setMobileDragging,
          gridRef,
          mobileProgress,
          setMobileProgress,
          mobileRect,
        );
      }
      if (webDragging) {
        handleMouseMove(
          e,
          webDragging,
          setWebDragging,
          gridRef,
          webProgress,
          setWebProgress,
          webRect,
        );
      }
    };

    const handleGlobalMouseUp = () => {
      setMobileDragging(false);
      setWebDragging(false);
      setMobileRect(null);
      setWebRect(null);
    };

    if (mobileDragging || webDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [
    mobileDragging,
    webDragging,
    mobileProgress,
    webProgress,
    mobileRect,
    webRect,
  ]);

  const handleScroll = (ref, setProgress) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setProgress(progress);
    }
  };

  const handleMouseDown = (e, setDragging, setRect, ref, progress) => {
    setDragging(true);
    const rect = e.target.getBoundingClientRect();
    setRect(rect);
    const x = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = (x / width) * 100;
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
      ref.current.scrollLeft = (newProgress / 100) * scrollWidth;
    }
  };

  const handleMouseMove = (
    e,
    isDragging,
    setDragging,
    ref,
    progress,
    setProgress,
    rect,
  ) => {
    if (!isDragging || !rect) return;
    const x = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = Math.max(0, Math.min(100, (x / width) * 100));
    setProgress(newProgress);
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
      ref.current.scrollLeft = (newProgress / 100) * scrollWidth;
    }
  };

  const handleMouseUp = (setDragging) => {
    setDragging(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

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
                scale: index === currentImageIndex ? 1 : 0.9,
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
                  index === currentImageIndex ? "bg-blue-500" : "bg-white/50"
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
            Explore our diverse collection of successful projects spanning web
            development, mobile applications, and full-stack solutions. Each
            project showcases our commitment to innovation, quality, and client
            satisfaction.
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
          <motion.button
            onClick={() => {
              setSelectedCategory("Mobile App");
              window.location.hash = "#mobile-apps";
              setTimeout(
                () =>
                  document
                    .getElementById("mobile-apps")
                    .scrollIntoView({ behavior: "smooth" }),
                100,
              );
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Mobile Apps
            <span className="text-lg">→</span>
          </motion.button>
          <motion.button
            onClick={() => {
              setSelectedCategory("Web Development");
              window.location.hash = "#web-apps";
              setTimeout(
                () =>
                  document
                    .getElementById("web-apps")
                    .scrollIntoView({ behavior: "smooth" }),
                100,
              );
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Web Apps
            <span className="text-lg">→</span>
          </motion.button>
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
          <div className="px-8">
            {(() => {
              const filteredMobile = projectsData.filter(
                (project) => project.category === "Mobile App",
              );
              return (
                <>
                  {filteredMobile.length > 0 && (
                    <div className="flex flex-col lg:flex-row gap-4 mb-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={0}
                        className="bg-white/10 text-gray-800 rounded-2xl shadow-lg p-2 lg:w-2/3 flex-shrink-0"
                        style={{ height: 'fit-content' }}
                      >
                        {/* Large Image */}
                        <div className="relative mt-10 overflow-hidden rounded-xl p-0 h-[480px]">
                          <img
                            src={
                              selectedProject &&
                              selectedProject.category === "Mobile App"
                                ? selectedProject.image
                                : filteredMobile[0].image
                            }
                            alt={
                              selectedProject &&
                              selectedProject.category === "Mobile App"
                                ? selectedProject.title
                                : filteredMobile[0].title
                            }
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {selectedProject &&
                            selectedProject.category === "Mobile App"
                              ? selectedProject.category
                              : filteredMobile[0].category}
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <Link
                              to={
                                selectedProject &&
                                selectedProject.category === "Mobile App"
                                  ? selectedProject.link
                                  : filteredMobile[0].link
                              }
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              <span>Visit Live</span>
                              <motion.span
                                className="text-lg"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={1}
                        className="bg-black text-white rounded-2xl shadow-lg p-1 flex-1"
                      >
                        <div className="mb-8 flex gap-2 justify-start">
                          <div className="p-2 bg-gradient-to-r from-blue-600 to-green-500 border border-white/10 rounded-full text-center w-35 flex items-center justify-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-sm font-bold text-white ">
                              {selectedProject &&
                              selectedProject.category === "Mobile App"
                                ? selectedProject.industry
                                : filteredMobile[0].industry}
                            </p>
                          </div>
                          <div className="p-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-center w-16 flex items-center justify-center">
                            <p className="text-sm font-bold text-white-900">
                              {selectedProject &&
                              selectedProject.category === "Mobile App"
                                ? selectedProject.year
                                : filteredMobile[0].year}
                            </p>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold mb-1">
                          {selectedProject &&
                          selectedProject.category === "Mobile App"
                            ? selectedProject.title
                            : filteredMobile[0].title}
                        </h4>
                        <div className="mb-8 p-4 bg-gray/10 rounded-lg">
                          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {selectedProject &&
                            selectedProject.category === "Mobile App"
                              ? selectedProject.description
                              : filteredMobile[0].description}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white/5 rounded-xl px-3 py-2">
                            <p className="font-semibold">Tech Stack:</p>
                            <TechStackGrid
                              techStack={
                                selectedProject &&
                                selectedProject.category === "Mobile App"
                                  ? selectedProject.techStack
                                  : filteredMobile[0].techStack
                              }
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {filteredMobile.length > 1 && (
                    <>
                      <div
                        ref={gridRef}
                        className="overflow-x-auto overflow-y-hidden scrollbar-hide flex flex-nowrap gap-8 ml-20 mr-20 px-12"
                      >
                        {filteredMobile.map((project, i) => (
                          <motion.div
                            key={project.id}
                            custom={i + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{
                              y: -6,
                              transition: { duration: 0.3 },
                            }}
                            onClick={() => handleProjectClick(project)}
                            className="group relative bg-white/10 text-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-white/10 hover:border-green-400 transition-all duration-300 flex flex-col overflow-hidden min-w-[200px] cursor-pointer"
                          >
                            {/* Image */}
                            <div className="relative mb-1 overflow-hidden rounded-xl">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                {project.industry}
                              </div>
                            </div>
                            {/* Title */}
                            <h3 className="text-l font-bold mb-1 text-center text-white">
                              {project.title}
                            </h3>
                          </motion.div>
                        ))}
                      </div>

                      <div className="w-1/2 h-1 bg-gray-400 mt-4 ml-80 relative">
                        <div
                          className="h-full bg-green-500 transition-all duration-100"
                          style={{ width: `${mobileProgress}%` }}
                        ></div>
                      </div>
                    </>
                  )}
                </>
              );
            })()}
          </div>
        </section>
      )}

      {/* --------------------- Web Apps Section --------------------- */}
      {(selectedCategory === "All" ||
        selectedCategory === "Web Development") && (
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
          <div className="px-8">
            {(() => {
              const filteredWeb = projectsData.filter(
                (project) => project.category === "Web Development",
              );
              return (
                <>
                  {filteredWeb.length > 0 && (
                    <div className="flex flex-col lg:flex-row gap-4 mb-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={0}
                        className="bg-white/10 text-gray-800 rounded-2xl shadow-lg p-2 lg:w-2/3 flex-shrink-0 flex-grow-0"
                        style={{ height: 'fit-content' }}
                      >
                        {/* Large Image */}
                        <div className="relative mt-10 overflow-hidden rounded-xl p-0 h-[480px]">
                          <img
                            src={
                              selectedProject &&
                              selectedProject.category === "Web Development"
                                ? selectedProject.image
                                : filteredWeb[0].image
                            }
                            alt={
                              selectedProject &&
                              selectedProject.category === "Web Development"
                                ? selectedProject.title
                                : filteredWeb[0].title
                            }
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {selectedProject &&
                            selectedProject.category === "Web Development"
                              ? selectedProject.category
                              : filteredWeb[0].category}
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <Link
                              to={
                                selectedProject &&
                                selectedProject.category === "Web Development"
                                  ? selectedProject.link
                                  : filteredWeb[0].link
                              }
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              <span>Visit Live</span>
                              <motion.span
                                className="text-lg"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={1}
                        className="bg-gray-900 text-white rounded-2xl shadow-lg p-1 flex-1"
                      >
                        <div className="mb-8 flex gap-2 justify-start">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 border border-white/10 rounded-full text-center w-35 flex items-center justify-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-sm font-bold text-white">
                              {selectedProject &&
                              selectedProject.category === "Web Development"
                                ? selectedProject.industry
                                : filteredWeb[0].industry}
                            </p>
                          </div>
                          <div className="p-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-center w-16 flex items-center justify-center">
                            <p className="text-sm font-bold text-white-900">
                              {selectedProject &&
                              selectedProject.category === "Web Development"
                                ? selectedProject.year
                                : filteredWeb[0].year}
                            </p>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold mb-1">
                          {selectedProject &&
                          selectedProject.category === "Web Development"
                            ? selectedProject.title
                            : filteredWeb[0].title}
                        </h4>
                        <div className="mb-8 p-4 bg-gray/10 rounded-lg">
                          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {selectedProject &&
                            selectedProject.category === "Web Development"
                              ? selectedProject.description
                              : filteredWeb[0].description}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white/5 rounded-xl px-3 py-2">
                            <p className="font-semibold">Tech Stack:</p>
                            <TechStackGrid
                              techStack={
                                selectedProject &&
                                selectedProject.category === "Web Development"
                                  ? selectedProject.techStack
                                  : filteredWeb[0].techStack
                              }
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {filteredWeb.length > 0 && (
                    <>
                      <div
                        ref={gridRef}
                        className="overflow-x-auto overflow-y-hidden scrollbar-hide flex flex-nowrap gap-8 ml-20 mr-20 px-12"
                      >
                        {filteredWeb.map((project, i) => (
                          <motion.div
                            key={project.id}
                            custom={i + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{
                              y: -6,
                              transition: { duration: 0.3 },
                            }}
                            onClick={() => handleProjectClick(project)}
                            className="group relative bg-blue/10 text-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-white/10 hover:border-purple-400 transition-all duration-300 flex flex-col overflow-hidden min-w-[200px] cursor-pointer"
                          >
                            {/* Image */}
                            <div className="relative mb-1 overflow-hidden rounded-xl">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                {project.industry}
                              </div>
                            </div>
                            {/* Title */}
                            <h3 className="text-l font-bold mb-1 text-center text-white">
                              {project.title}
                            </h3>
                          </motion.div>
                        ))}
                      </div>
                      <div className="w-1/2 h-1 bg-gray-400 mt-4 ml-80 relative">
                        <div
                          className="h-full bg-purple-500 transition-all duration-100"
                          style={{ width: `${webProgress}%` }}
                        ></div>
                      </div>
                    </>
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
