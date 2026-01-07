import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaQuestionCircle,
  FaGraduationCap,
  FaBookOpen,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaHandsHelping,
  FaClipboardCheck,
  FaLightbulb,
  FaCheck,
  FaUsers,
  FaHeadset,
  FaMoneyBillWave,
  FaClock,
  FaMobile,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaHeart,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaShoppingCart,
  FaRocket,
  FaUser,
  FaNewspaper,
  FaBuilding,
  FaCalendarAlt,
  FaFileAlt,
  FaUtensils,
  FaHome,
  FaBriefcase,
  FaPlane,
  FaCalendarCheck,
  FaRedo,
  FaApple,
  FaAndroid,
  FaGamepad,
  FaPalette,
  FaWrench
} from "react-icons/fa";
import { education, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "AI Tutors & Quiz Bots",
    description:
      "Develop AI-powered tutors and quiz bots to enhance personalized learning experiences.",
    icon: <FaRobot className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Smart Grading Tools",
    description:
      "Implement intelligent grading systems to automate assessments and feedback.",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Personalized Learning",
    description:
      "Create adaptive learning paths tailored to individual student needs and progress.",
    icon: <FaBookOpen className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Content Recommendation",
    description:
      "Provide personalized content recommendations to improve learning outcomes.",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Learning Analytics",
    description:
      "Analyze student data to identify trends and optimize teaching strategies.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Integrate AI education tools with existing learning management systems.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Scalability & Performance",
    description:
      "Design scalable AI education solutions optimized for performance.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with educational standards.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
];

const aiEducationServices = [
  {
    title: "AI Tutor Development",
    desc: `Build AI tutors that provide personalized instruction and feedback.

Includes:

Adaptive learning algorithms

Interactive lessons

Performance tracking`,
    price: "₹ 25,000",
    icon: <FaRobot className="w-6 h-6" />,
  },
  {
    title: "Quiz Bot Solutions",
    desc: `Create quiz bots to automate assessments and provide instant feedback.

Includes:

Question generation

Automated grading

Result analytics`,
    price: "₹ 20,000",
    icon: <FaQuestionCircle className="w-6 h-6" />,
  },
  {
    title: "Smart Grading Systems",
    desc: `Implement AI-powered grading tools to streamline evaluation.

Includes:

Essay scoring

Multiple-choice grading

Plagiarism detection`,
    price: "₹ 22,000",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    title: "Personalized Learning Paths",
    desc: `Design adaptive learning paths tailored to individual student needs.

Includes:

Data-driven customization

Progress monitoring

Content recommendations`,
    price: "₹ 28,000",
    icon: <FaBookOpen className="w-6 h-6" />,
  },
  {
    title: "Content Recommendation Engines",
    desc: `Develop AI systems to recommend relevant learning materials.

Includes:

User profiling

Recommendation algorithms

Feedback loops`,
    price: "₹ 18,000",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    title: "Learning Analytics Dashboards",
    desc: `Create dashboards to visualize student performance and engagement.

Includes:

Data visualization

KPI tracking

User access control`,
    price: "₹ 20,000",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    title: "Integration Services",
    desc: `Integrate AI education tools with existing LMS and platforms.

Includes:

API development

System compatibility

Testing & validation`,
    price: "₹ 15,000",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for AI education solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 12,000",
    icon: <FaHandsHelping className="w-6 h-6" />,
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure AI education tools meet security and regulatory standards.

Includes:

Audit planning

Risk assessment

Remediation`,
    price: "₹ 18,000",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on AI education technology adoption and strategy.

Includes:

Needs assessment

Roadmap development

Implementation planning`,
    price: "₹ 15,000",
    icon: <FaLightbulb className="w-6 h-6" />,
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

const AIEducationServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Page Navigation/Breadcrumb */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-3">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">AI Education Services</h2>
                  <p className="text-blue-300 text-sm">Transform your educational institution with AI-powered solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span>Home</span>
                <span className="text-blue-400">→</span>
                <span>Services</span>
                <span className="text-blue-400">→</span>
                <span className="text-cyan-400 font-semibold">AI Education</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <motion.h1
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionize Education with AI
            </motion.h1>
            <motion.p
              className="text-xl mb-4 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your educational institution with cutting-edge AI solutions. From intelligent tutoring systems to automated grading and personalized learning paths, we build comprehensive AI-powered educational tools that enhance student engagement and learning outcomes.
            </motion.p>
            <motion.p
              className="text-lg mb-6 text-blue-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-semibold text-cyan-400">🤖 Automation Features:</span> Smart content generation, automated assessment creation, real-time performance analytics, and intelligent feedback systems that work 24/7 to support both educators and learners.
            </motion.p>
            <motion.a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                🚀 Get AI Education Consultation
              </button>
            </motion.a>
          </div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src={education}
                alt="AI for Education Illustration"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced with Animations */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img
                src={education}
                alt="Why Choose Our AI for Education"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl p-8 relative overflow-hidden md:w-1/2"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
              <motion.h2
                className="text-3xl font-bold text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Why Choose Our AI for Education?
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We provide exceptional AI education services with cutting-edge technology and expert implementation
              </motion.p>
            </motion.div>
          </div>

          <div className="relative w-full">
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-blue-300 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-300 rounded-full opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {features.map(({ id, title, description, icon }) => (
                <motion.div
                  key={id}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: id * 0.1,
                        duration: 0.6,
                        ease: "backOut",
                      },
                    },
                  }}
                  className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center text-gray-800 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: id * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {description}
                  </motion.p>

                  {/* Hover effect line */}
                  <motion.div
                    className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full"
                    whileHover={{ width: "50%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Services We <span className="text-blue-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our AI for Education Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide AI-powered educational solutions to enhance learning and assessment.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={education}
              alt="AI for Education Illustration"
              className="w-full rounded-lg shadow-lg pt-8"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiEducationServices.map(({ title, desc, price, icon }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              custom={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center text-gray-800 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                transition={{ duration: 0.4 }}
              >
                {icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 whitespace-pre-line mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {desc}
              </motion.p>
              <div className="font-bold text-green-600 mb-4">{price}</div>
              <a
                href="https://calendar.app.google/vX3iT9r8XvV9bUqr9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 text-sm">
                  Book a Strategy Call
                </button>
              </a>
              {/* Hover effect line */}
              <motion.div
                className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full"
                whileHover={{ width: "50%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Used Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-blue-600">use?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Leveraging AI Technologies for Education
            </h1>
            <p className="text-lg mb-6">
              We use advanced AI tools and platforms to deliver personalized and effective educational solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
                Get Consultation
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={education}
              alt="AI for Education Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Platform />
      <OurProcess />

      {/* Pricing Plans Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Basic Plan",
              price: "₹19999",
              features: [
                "AI tutor development",
                "Quiz bot solutions",
                "Smart grading systems",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹29999",
              features: [
                "Personalized learning paths",
                "Content recommendation engines",
                "Learning analytics dashboards",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹44999",
              features: [
                "Full AI education solutions",
                "Integration support",
                "Training & support",
                "Security & compliance audits",
                "Unlimited revisions",
              ],
              imgSrc: premium,
              alt: "Premium Plan",
            }].map(({ title, price, features, imgSrc, alt }, index) => (
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
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

      <ServiceFAQ />
    </div>
  );
};

export default AIEducationServices;
