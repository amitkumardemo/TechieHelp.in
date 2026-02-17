import React, { useState, useEffect, useRef } from "react";
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
  servicePage,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
} from "../assets";
import OurProcess from "./OurProcess";
import Platform from "./Platform";
import { basic, classic, premium } from "../assets";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./CTA";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: `🚀 High-performance & scalable web solutions\n✨ Modern responsive UI/UX design\n💼 Business-focused development approach\n⚡ Lightning-fast loading speeds\n🔒 Enterprise-grade security\n📱 Mobile-first responsive design`,
    image: webDevelopment,
    link: "/web-development-services",
  },
  {
    id: 2,
    title: "App Development",
    description: `📱 Cross-platform mobile applications\n🍎 Native iOS & Android development\n🎨 Seamless user experience design\n⚡ High-performance app optimization\n🔄 Real-time synchronization\n🛡️ Advanced security protocols`,
    image: appDevelopment,
    link: "/app-development-services",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: `🎯 Engaging & intuitive interfaces\n🛠️ Professional Figma & Adobe XD designs\n🎨 Complete brand identity solutions\n👥 User-centered design approach\n📊 Data-driven design decisions\n✨ Premium visual experiences`,
    image: uiux,
    link: "/uiuxservices",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: `📈 Organic traffic boost strategies\n🎯 Advanced keyword research & analysis\n⚡ Technical SEO optimization\n📊 Performance monitoring & analytics\n🔍 Local & global SEO campaigns\n🏆 First-page ranking guarantee`,
    image: seo,
    link: "/seooptimizationservices",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: `📢 Strategic campaign planning & execution\n📱 Social media marketing mastery\n📧 Email marketing automation\n📊 Advanced analytics & reporting\n🎯 Targeted audience engagement\n💰 ROI-driven marketing solutions`,
    image: digital,
    link: "/digitalmarketingservices",
  },
  {
    id: 6,
    title: "Tech Consulting",
    description: `🔄 Complete digital transformation\n🏗️ Scalable technology architecture\n📋 Strategic technology roadmaps\n💡 Innovation & modernization\n🔧 System optimization & integration\n📈 Business growth acceleration`,
    image: tech,
    link: "/techconsultingservices",
  },
  {
    id: 7,
    title: "Maintenance & Support",
    description: `🔧 24/7 technical support & monitoring\n🛡️ Proactive system maintenance\n🐛 Bug fixes & security updates\n⚡ Performance optimization\n📞 Dedicated support team\n🔄 Continuous system improvements`,
    image: maintance,
    link: "/maintenancesupportservices",
  },
  {
    id: 8,
    title: "AI Agents",
    description: `🤖 Intelligent research automation\n📊 Smart data processing & analysis\n🎯 Custom task automation\n⚡ AI-powered workflow optimization\n🔄 Autonomous system operations\n📈 Business intelligence enhancement`,
    image: agents,
    link: "/aiagentsservices",
  },
  {
    id: 9,
    title: "AI Chatbots & Virtual Assistants",
    description: `💬 Smart conversational AI interfaces\n🎯 Intelligent lead generation systems\n🔄 Multi-channel integration\n📞 24/7 customer support automation\n🧠 Natural language processing\n💼 Business process automation`,
    image: chatbot,
    link: "/aichatbotsservices",
  },
  {
    id: 10,
    title: "AI Automation Solutions",
    description: `⚙️ Intelligent workflow automation\n🔄 CRM & HR system optimization\n📧 Smart email & task management\n🤖 Robotic process automation\n⚡ Productivity enhancement\n💰 Cost reduction & efficiency gains`,
    image: automation,
    link: "/aiautomationservices",
  },
  {
    id: 11,
    title: "Computer Vision",
    description: `👁️ Advanced object detection systems\n📸 Facial recognition technology\n🔍 Smart image analysis & processing\n📊 Visual data interpretation\n🤖 Automated quality control\n🛡️ Security & surveillance solutions`,
    image: computer,
    link: "/computervisionservices",
  },
  {
    id: 12,
    title: "Predictive Analytics",
    description: `📊 Advanced data modeling & forecasting\n🔮 Future trend prediction\n📈 Business intelligence insights\n⚡ Real-time analytics dashboards\n🎯 Strategic decision support\n💡 Competitive advantage insights`,
    image: predictive,
    link: "/predictiveanalyticsservices",
  },
  {
    id: 13,
    title: "Generative AI Solutions",
    description: `🎨 AI-powered content creation\n📝 Smart text & image generation\n🎵 Creative content automation\n💡 Innovation acceleration\n⚡ Rapid prototyping\n🚀 Next-generation creative tools`,
    image: generative,
    link: "/generativeaiservices",
  },
  {
    id: 14,
    title: "AI for Education",
    description: `🎓 Personalized learning experiences\n📚 AI tutoring & quiz systems\n📊 Smart grading automation\n👨‍🏫 Adaptive learning platforms\n📈 Student performance analytics\n🔄 Continuous learning optimization`,
    image: education,
    link: "/aieducationservices",
  },
  {
    id: 15,
    title: "Speech & Voice AI",
    description: `🎤 Advanced voice command systems\n📝 Speech-to-text automation\n🎧 Smart audio processing\n📞 Voice-enabled applications\n🔊 Natural language interfaces\n🤖 Conversational AI technology`,
    image: voice,
    link: "/speechvoiceaiservices",
  },
];

const whyTechieHelp = [
  {
    id: 1,
    title: "Expert Team, Proven Expertise",
    description:
      "Our skilled professionals bring years of experience across web, app, AI, and cloud technologies. At TechieHelp, we don't just deliver code—we build future-proof solutions with confidence and creativity.",
    image: expertise,
  },
  {
    id: 2,
    title: "Tailored to Your Business",
    description:
      "We understand that no two businesses are alike. That's why we create custom solutions that align perfectly with your vision, operations, and long-term goals—ensuring you stand out from competitors.",
    image: customSolutions,
  },
  {
    id: 3,
    title: "Agile & Transparent Process",
    description:
      "We follow Agile methodology, ensuring fast iteration, continuous feedback, and full visibility. You stay in control, we keep you updated, and together we build a product that exceeds expectations.",
    image: agile,
  },
  {
    id: 4,
    title: "Uncompromised Quality",
    description:
      "Quality is not optional—it's built into everything we do. Our QA experts rigorously test each feature for functionality, performance, and security so you launch with confidence.",
    image: quality,
  },
  {
    id: 5,
    title: "Communication You Can Trust",
    description:
      "Expect regular updates, transparent timelines, and real conversations. We're your partner, not just a service provider. Your ideas are heard, and your success is our priority.",
    image: communication,
  },
  {
    id: 6,
    title: "Reliable Post-Launch Support",
    description:
      "Your journey doesn't end at deployment. We offer ongoing support, updates, and system monitoring to keep your product running smoothly and securely 24/7.",
    image: support,
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

const Services = () => {
  const [showArrow, setShowArrow] = useState(true);
  const heroRef = useRef(null);

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

  // Custom blink animation style
  const blinkStyle = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .blink {
      animation: blink 2s infinite;
    }
  `;

  return (
    <>
      <style>{blinkStyle}</style>
      {/* --------------------- Top Intro Section --------------------- */}
      <section className="pt-24 px-6 bg-primary text-white flex flex-col items-center relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0  opacity-20 animate-gradient-x"></div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={servicePage}
              alt="TechieHelp Services"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-blue-500">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-6"
            >
              At TechieHelp, we provide a comprehensive suite of services
              including web development, app development, AI-powered solutions,
              and digital strategy. Our team combines innovation with technical
              expertise to build scalable, user-centric products that align with
              your business goals and deliver measurable results.
            </motion.p>

            <motion.a
              href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20your%20services.%20Kindly%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Connect with Our Team
            </motion.a>
          </div>
        </div>
      </section>

      {/* Downscroll Arrow */}
      {showArrow && (
        <div className="flex justify-center py-4 bg-black">
          <button
            onClick={() => document.getElementById('how-we-handle').scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-blue-500 transition duration-300 blink"
            aria-label="Scroll to next section"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}

      {/* --------------------- How We Handle Your Services Section --------------------- */}
      <motion.section
        id="how-we-handle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-black text-white"
      >
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            How We Handle Your Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our comprehensive approach ensures your digital transformation
            journey is smooth, effective, and results-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          {[
            {
              id: 1,
              icon: "🌐",
              title: "Business Profile Creation",
              description:
                "Setting up professional online presence with modern, responsive websites and digital identity that represents your brand effectively.",
            },
            {
              id: 2,
              icon: "📝",
              title: "Smart Contact Forms",
              description:
                "Automatically transferring form data to email/CRM systems with intelligent lead capture and instant notifications.",
            },
            {
              id: 3,
              icon: "⚙️",
              title: "Automation Setup",
              description:
                "Handling workflows like email follow-ups, lead management, and notifications to streamline your business processes.",
            },
            {
              id: 4,
              icon: "🔍",
              title: "SEO & Google Ranking",
              description:
                "Strategies to rank on the first page of Google and grow traffic through proven optimization techniques and content strategies.",
            },
            {
              id: 5,
              icon: "🎨",
              title: "Branding & Development",
              description:
                "Building unique digital identity and solutions with custom designs, user experience optimization, and brand consistency.",
            },
            {
              id: 6,
              icon: "🔄",
              title: "Ongoing Support",
              description:
                "Regular updates, monitoring, and client communication to ensure your digital presence stays current and effective.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#101827] shadow-lg rounded-2xl p-6 hover:shadow-blue-500/50 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Step {step.id}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow connector line */}
        <div className="hidden lg:flex justify-center items-center mt-12 px-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                {index < 5 && <div className="w-12 h-0.5 bg-blue-500"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --------------------- Offer Section --------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center items-center text-center px-4 py-14 bg-black"
      >
        <div className="border border-blue-500 rounded-2xl p-8 max-w-3xl hover:shadow-blue-500/30 hover:shadow-lg transition duration-300">
          <h2 className="text-4xl font-bold text-white mb-4 hover:text-blue-400 transition">
            What we <span className="text-blue-500">offer</span>
          </h2>
          <p className="text-xl font-light italic text-gray-300 hover:text-white transition">
            Startup Brilliance: Crafting Trendsetting SaaS, Online, and Mobile
            Solutions with Expertise.
          </p>
        </div>
      </motion.div>

      {/* --------------------- Services Grid --------------------- */}
      {/* --------------------- Services Grid --------------------- */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 bg-black">
  {servicesData.map(({ id, title, description, image, link }, i) => (
    <motion.div
      key={id}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="
        group relative
        bg-white
        text-gray-800
        rounded-2xl
        shadow-lg hover:shadow-xl
        border border-gray-200 hover:border-blue-400
        p-6
        transition-all duration-300
        flex flex-col
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
        {description}
      </p>

      {/* Explore Button */}
      <Link
        to={link}
        className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <span>Learn More</span>
        <motion.span
          className="text-lg"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  ))}
</section>


      {/* --------------------- Popular Services Section --------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-black text-white"
      >
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Popular Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most sought-after AI-powered solutions that are
            transforming industries
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Featured Service - AI Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    AI for Education
                  </h3>
                  <p className="text-blue-300 text-sm">Most Popular</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your educational institution with cutting-edge AI
                solutions. From intelligent tutoring systems to automated
                grading and personalized learning paths, we build comprehensive
                AI-powered educational tools.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm text-gray-300">
                    AI Tutors & Quiz Bots
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm text-gray-300">
                    Smart Grading Tools
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm text-gray-300">
                    Personalized Learning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm text-gray-300">
                    Learning Analytics
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-gray-400">Starting from</p>
                  <p className="text-2xl font-bold text-green-400">₹15,000</p>
                </div>
                <Link
                  to="/aieducationservices"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Service Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={education}
                alt="AI for Education"
                className="w-full rounded-2xl shadow-2xl border-2 border-blue-500/30"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
            </motion.div>
          </div>

          {/* Additional Popular Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🤖",
                title: "AI Agents",
                description:
                  "Intelligent automation for research and data processing",
                link: "/aiagentsservices",
              },
              {
                icon: "💬",
                title: "AI Chatbots",
                description:
                  "Smart conversational interfaces for customer support",
                link: "/aichatbotsservices",
              },
              {
                icon: "⚙️",
                title: "AI Automation",
                description: "Workflow optimization and process automation",
                link: "/aiautomationservices",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#101827] rounded-xl p-6 hover:bg-[#1e293b] transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --------------------- Why Choose TechieHelp --------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-black text-white"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Why Choose TechieHelp?
          </h2>{" "}
          {/* Adjusted blue for better contrast */}
          <p className="text-gray-300 text-lg">
            {" "}
            {/* Lighter gray for readability */}
            Innovation. Precision. Partnership. Discover why startups and
            enterprises trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
          {whyTechieHelp.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#101827] shadow-lg rounded-2xl p-6 hover:shadow-blue-500 transition-all duration-300" // Dark bg to match services cards
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm text-center mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Process Section */}
      <OurProcess />

      {/* Platforms Section */}
      <Platform />

      {/* Pricing Plans Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plans",
                price: "₹5999",
                features: [
                  "Domain name registration",
                  "10 Pages (dynamic Website)",
                  "10 Creations",
                  "Business Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "Security and Maintenance",
                  "Annual Renewal Rs. 3000",
                ],
                imgSrc: basic,
                alt: "Basic Plan",
              },
              {
                title: "Classic Plans",
                price: "₹8999",
                features: [
                  "Domain name registration",
                  "15 Pages (dynamic Website)",
                  "15 Creations",
                  "Business Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "WhatsApp Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "eCommerce Website",
                  "Annual Renewal Rs. 4000",
                  "Security and maintenance",
                ],
                imgSrc: classic,
                alt: "Classic Plan",
              },
              {
                title: "Premium Plans",
                price: "₹11999",
                features: [
                  "Domain name registration",
                  "20 Pages (dynamic Website)",
                  "20 Creations",
                  "Unlimited Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "WhatsApp Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "eCommerce Website",
                  "cPanel* Access",
                  "Annual Renewal Rs. 5000",
                  "Security and maintenance",
                ],
                imgSrc: premium,
                alt: "Premium Plan",
              },
            ].map(({ title, price, features, imgSrc, alt }, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
              >
                <img src={imgSrc} alt={alt} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="font-bold text-green-600 mb-4">{price}</div>
                <ul className="text-left list-disc list-inside space-y-1 mb-4">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={
                    index === 0
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20am%20interested%20in%20TechieHelp%27s%20Basic%20Plan.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20get%20started."
                      : index === 1
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20TechieHelp%27s%20Classic%20Plan.%20Please%20provide%20the%20complete%20information%20and%20benefits."
                      : "https://wa.me/917673825079?text=Hi%2C%20I%27m%20interested%20in%20TechieHelp%27s%20Premium%20Plan.%20Could%20you%20please%20guide%20me%20through%20the%20features%2C%20pricing%2C%20and%20enrollment%20process%3F"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 inline-block text-center"
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------------- Call to Action --------------------- */}
      <CTA />
      <Contact />
    </>
  );
};

export default Services;