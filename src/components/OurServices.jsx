import React, { useRef, useState, useEffect } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import Loading from "./Loading";
import Particles from '../../Reactsbit/Particles/Particles';

import { arrowUp, webDevelopment,appDevelopment,seo,uiux,digital,tech,maintance,agents, chatbot, automation, computer,predictive,generative,education,voice, gamedevelopment, library, portfolio, product, restaurant,food,web,custom,organic,portfoli,doctor,home,zym,sports,er,junk,face, plant,store, health, ecom, producer} from "../assets";

const services = [
  {
    id: 1,
    icon: webDevelopment,
    title: "Web Development",
    description: [
      "High-performance & scalable",
      "Responsive UI",
      "Business-focused designs"
    ],
    link: "/webdevelopment",
  },
  {
    id: 2,
    icon: appDevelopment,
    title: "App Development",
    description: [
      "Cross-platform apps",
      "Native Android/iOS",
      "Seamless UX"
    ],
    link: "/app-development-services",
  },
  {
    id: 3,
    icon: uiux,
    title: "UI/UX Design",
    description: [
      "Engaging interfaces",
      "Figma & Adobe XD",
      "Brand identity design"
    ],
    link: "/uiuxservices",
  },
  {
    id: 4,
    icon: seo,
    title: "SEO Optimization",
    description:
      "Enhancing your website's visibility, traffic, and ranking through strategic keyword optimization and technical SEO.",
    link: "/seooptimizationservices",
  },
  {
    id: 5,
    icon: digital,
    title: "Digital Marketing",
    description:
      "Driving growth with targeted digital marketing campaigns, content strategies, and performance analytics.",
    link: "/digitalmarketingservices",
  },

  {
    id: 7,
    icon: tech,
    title: "Tech Consulting",
    description:
      "Empowering businesses with strategic technology insights and solutions for digital transformation.",
    link: "/techconsultingservices",
  },
  {
    id: 8,
    icon: maintance,
    title: "Maintenance & Support",
    description:
      "Providing reliable, ongoing technical support and maintenance to ensure business continuity.",
    link: "/maintenancesupportservices",
  },
  {
    id: 9,
    icon: agents,
    title: "AI Agents",
    description:
      "Deploying intelligent AI agents to automate tasks, conduct research, and enhance operational efficiency.",
    link: "/aiagentsservices",
  },
  {
    id: 10,
    icon: chatbot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Building conversational AI bots for customer service, lead generation, and business automation.",
    link: "/aichatbotsservices",
  },
  {
    id: 11,
    icon: automation,
    title: "AI Automation Solutions",
    description:
      "Streamlining workflows with AI-driven automation for email processing, HR, CRM, and more.",
    link: "/aiautomationservices",
  },
  {
    id: 12,
    icon: computer,
    title: "Computer Vision",
    description:
      "Creating smart visual recognition systems for object detection, facial recognition, and document scanning.",
    link: "/computervisionservices",
  },
  
  {
    id: 14,
    icon: predictive,
    title: "Predictive Analytics",
    description:
      "Building intelligent models to forecast trends, customer behavior, and business outcomes.",
    link: "/predictiveanalyticsservices",
  },
  {
    id: 15,
    icon: generative,
    title: "Generative AI Solutions",
    description:
      "Delivering cutting-edge AI tools for text generation, image synthesis, and content automation.",
    link: "/generativeaiservices",
  },
  {
    id: 16,
    icon: education,
    title: "AI for Education",
    description:
      "Developing AI-based educational tools including tutors, quiz generators, and automatic graders for smarter learning.",
    link: "/aieducationservices",
  },
  {
    id: 17,
    icon: voice,
    title: "Speech & Voice AI",
    description:
      "Enabling voice-based applications through speech recognition, transcription, and voice command technologies.",
    link: "/speechvoiceaiservices",
  },
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
          <h2 className="text-3xl font-bold mb-2">Our Delivered Solutions</h2>
          <p className="text-lg text-gray-300 mb-6">
            Industry-ready SaaS, responsive websites, and intuitive mobile apps.
          </p>
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
              >
                {mockupImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                    <img
                      src={image}
                      alt={`Mockup ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
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
        {/* Existing Our Services content */}
        <h2 className={`${styles.heading2} text-center text-blue-400 mb-4`}>
          Our Services
        </h2>
        <p className="text-center text-gray-300 mb-8 text-lg font-light">
          Empowering Your Vision with Scalable Tech Solutions
        </p>
        <div className="flex items-center">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="text-white p-2 focus:outline-none"
          >
            &#8249;
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {services.map(({ id, icon, title, description, link }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-2xl p-6 text-left cursor-pointer bg-white shadow-lg"
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-2xl mb-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = arrowUp;
                  }}
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
                {Array.isArray(description) ? (
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    {description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm">{description}</p>
                )}
                <a
                  href={link}
                  className="text-blue-600 mt-3 inline-block hover:underline font-medium"
                >
                  more details
                </a>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="text-white p-2 focus:outline-none"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

