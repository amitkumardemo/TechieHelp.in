import React, { useRef, useState, useEffect } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import Loading from "./Loading";
import Particles from '../../Reactsbit/Particles/Particles';

// Updated links to actual routes

import { arrowUp, webDevelopment,appDevelopment,seo,uiux,digital,tech,maintance,agents, chatbot, automation, computer,predictive,generative,education,voice, gamedevelopment, library, portfolio, product, restaurant,food,web,custom,organic,portfoli,doctor,home,zym,sports,er,junk,face, plant,store, health, ecom, producer} from "../assets";

const services = [
  {
    id: 1,

    icon: chatbot,
    title: "AI Software Development",
    description: [
      "Custom AI solutions & applications",
      "Machine learning integration",
      "Intelligent automation systems"
    ],
    link: "/ai",
  },
  {
    id: 2,
    icon: generative,
    title: "Generative AI Solutions",
    description: [
      "Text generation & content creation",
      "Image synthesis & processing",
      "Creative AI applications"
    ],
    link: "/generativeaiservices",
  },
  {
    id: 3,
    icon: predictive,
    title: "Predictive Analytics",
    description: [
      "Data-driven insights & forecasting",
      "Business intelligence tools",
      "Advanced analytics platforms"
    ],
    link: "/predictiveanalyticsservices",
  },
  {
    id: 4,
    icon: computer,
    title: "Computer Vision",
    description:
      "Building intelligent visual recognition systems for object detection, facial recognition, and automated image analysis.",
    link: "/computervisionservices",
  },
  {
    id: 5,
    icon: automation,
    title: "AI Automation Solutions",
    description:
      "Streamlining workflows with AI-driven automation for process optimization, task automation, and efficiency gains.",
    link: "/aiautomationservices",
  },
  {
    id: 6,
    icon: agents,
    title: "Intelligent AI Agents",
    description:
      "Deploying autonomous AI agents for research, data analysis, customer service, and operational intelligence.",
    link: "/aiagentsservices",
  },
  {
    id: 7,
    icon: voice,
    title: "Speech & Voice AI",
    description:
      "Developing voice-enabled applications with speech recognition, natural language processing, and voice synthesis.",
    link: "/speechvoiceaiservices",
  },
  {
    id: 8,
    icon: webDevelopment,
    title: "AI-Powered Web Applications",
    description:
      "Creating intelligent web platforms with AI integration, smart recommendations, and automated user experiences.",
    link: "/web-development-services",
  },
  {
    id: 9,
    icon: appDevelopment,
    title: "AI Mobile Applications",
    description:
      "Building smart mobile apps with AI capabilities, personalized experiences, and intelligent features.",
    link: "/app-development-services",
  },
  {
    id: 10,
    icon: tech,
    title: "AI Consulting & Strategy",
    description:
      "Strategic AI implementation guidance, technology roadmap planning, and digital transformation consulting.",
    link: "/techconsultingservices",
  },
  {
    id: 11,
    icon: maintance,
    title: "AI Model Training & Deployment",
    description:
      "End-to-end AI model development, training, optimization, and production deployment with monitoring.",
    link: "/maintenancesupportservices",
  },
  {
    id: 12,
    icon: education,
    title: "AI for Enterprise Solutions",
    description:
      "Custom AI solutions for healthcare, finance, retail, manufacturing, and other enterprise applications.",
    link: "/aieducationservices",
  },
  {
    id: 13,
    icon: uiux,
    title: "AI-Enhanced UX Design",
    description:
      "Designing user experiences with AI-powered personalization, adaptive interfaces, and intelligent interactions.",
    link: "/uiuxservices",
  },
  {
    id: 14,
    icon: seo,
    title: "AI Content & Marketing",
    description:
      "AI-driven content creation, personalized marketing campaigns, and automated customer engagement solutions.",
    link: "/digitalmarketingservices",
  },
  {
    id: 15,
    icon: digital,
    title: "AI Data Analytics",
    description:
      "Advanced data processing, pattern recognition, anomaly detection, and actionable business insights.",
    link: "/predictiveanalyticsservices",
  }
];

const serviceFlowSteps = [
  {
    id: 1,
    icon: "🌐",
    title: "Business Profile Creation",
    description: "Setting up professional online presence with modern, responsive websites and digital identity that represents your brand effectively."
  },
  {
    id: 2,
    icon: "📝",
    title: "Smart Contact Forms",
    description: "Automatically transferring form data to email/CRM systems with intelligent lead capture and instant notifications."
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Automation Setup",
    description: "Handling workflows like email follow-ups, lead management, and notifications to streamline your business processes."
  },
  {
    id: 4,
    icon: "🔍",
    title: "SEO & Google Ranking",
    description: "Strategies to rank on the first page of Google and grow traffic through proven optimization techniques and content strategies."
  },
  {
    id: 5,
    icon: "🎨",
    title: "Branding & Development",
    description: "Building unique digital identity and solutions with custom designs, user experience optimization, and brand consistency."
  },
  {
    id: 6,
    icon: "🔄",
    title: "Ongoing Support",
    description: "Regular updates, monitoring, and client communication to ensure your digital presence stays current and effective."
  }
];

const OurServices = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const mockupImages = [gamedevelopment, library, portfolio, product, restaurant, food, web, custom, organic, portfoli, doctor, home, zym, sports,er,junk,face,plant,store,health,ecom,producer];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Determine slides per view based on screen size
  const slidesPerView = isMobile ? 1 : 3;
  const maxIndex = mockupImages.length - slidesPerView;

  const scroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;
      if (direction === "left") {
        newIndex = prevIndex === 0 ? maxIndex : prevIndex - 1;
      } else {
        newIndex = prevIndex === maxIndex ? 0 : prevIndex + 1;
      }
      return newIndex;
    });
  };

  // Auto-slide functionality for carousel with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > maxIndex) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  if (loading) {
    return <Loading />;
  }

  return (
    <section className={`${styles.paddingY} text-white relative`} style={{ minHeight: '100vh' }}>
      <style>
        {`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className={`${styles.boxWidth} mx-auto relative z-10`}>
        {/* New What we offer section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Delivered Solutions</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry-ready SaaS, responsive websites, and intuitive mobile apps crafted with cutting-edge technology.
          </p>
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
              >
                {mockupImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 px-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <img
                      src={image}
                      alt={`Mockup ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dot indicators for mockup carousel */}
            <div className="flex justify-center space-x-2 mt-4">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* How We Handle Your Services Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How We Handle Your Services
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach ensures your digital transformation journey is smooth, effective, and results-driven.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceFlowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Step {step.id}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow connector line */}
          <motion.div
            className="hidden lg:block mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex justify-center items-center space-x-4">
              {serviceFlowSteps.map((_, index) => (
                <React.Fragment key={index}>
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  {index < serviceFlowSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Existing Our Services content */}
        <h2 className={`${styles.heading2} text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6`}>
          AI Software Development Services
        </h2>
        <p className="text-center text-gray-200 mb-12 text-xl font-light max-w-4xl mx-auto leading-relaxed">
          Transforming Businesses with Cutting-Edge AI Solutions, Intelligent Automation, and Next-Generation Software Development
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6 pb-4"
            animate={{
              x: [0, -100 * (services.length - 3)], // Adjust based on number of visible items
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...services, ...services].map(({ id, icon, title, description, link }, index) => (
              <motion.div
                key={`${id}-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => {
                  // Pause animation on hover
                  const container = document.querySelector('.services-container');
                  if (container) {
                    container.style.animationPlayState = 'paused';
                  }
                }}
                onMouseLeave={() => {
                  // Resume animation when mouse leaves
                  const container = document.querySelector('.services-container');
                  if (container) {
                    container.style.animationPlayState = 'running';
                  }
                }}
                className="w-[320px] h-[400px] flex-shrink-0 rounded-2xl p-6 text-left cursor-pointer bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col h-full">
                  <div className="relative mb-6">
                    <img
                      src={icon}
                      alt={title}
                      className="w-full h-48 object-cover rounded-2xl shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = arrowUp;
                      }}
                    />
                    {id <= 3 && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300 flex-shrink-0">{title}</h3>
                  <div className="flex-1 mb-4">
                    {Array.isArray(description) ? (
                      <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 leading-relaxed">
                        {description.map((item, idx) => (
                          <li key={idx} className="hover:text-gray-800 transition-colors duration-200">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{description}</p>
                    )}
                  </div>
                <a
                  href={link.startsWith('/') ? link : `/${link}`}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold inline-flex items-center justify-center px-5 py-2 rounded-full transition-all duration-300 group text-sm shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
