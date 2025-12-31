import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaUsers,
  FaHeadset,
  FaMoneyBillWave,
  FaClock,
  FaMobile,
  FaServer,
  FaTools,
  FaGraduationCap,
  FaLaptopCode,
  FaHeart,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaShoppingCart,
  FaCogs,
  FaRocket,
  FaUser,
  FaNewspaper,
  FaBuilding,
  FaChartLine,
  FaCalendarAlt,
  FaHandsHelping,
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
  FaWrench,
  FaPaintBrush,
  FaSync
} from "react-icons/fa";
import { uiux, technology, basic, classic, premium, choose, apps } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "User-Centered Design",
    description:
      "We focus on creating intuitive and engaging user experiences tailored to your audience.",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Prototyping & Wireframing",
    description:
      "Using Figma and Adobe XD, we develop interactive prototypes to visualize your product.",
    icon: <FaLaptopCode className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Brand Identity & Visual Design",
    description:
      "Crafting cohesive brand identities that resonate and stand out in the market.",
    icon: <FaPaintBrush className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Responsive & Accessible",
    description:
      "Designs that work seamlessly across devices and are accessible to all users.",
    icon: <FaMobile className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Usability Testing",
    description:
      "Conducting thorough usability tests to ensure optimal user satisfaction and performance.",
    icon: <FaHeadset className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Design System Creation",
    description:
      "Building scalable design systems for consistent and efficient UI/UX across platforms.",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Iterative Design Process",
    description:
      "Implementing agile design methodologies for continuous improvement and refinement.",
    icon: <FaSync className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Cross-Platform Design",
    description:
      "Designing unified experiences that work flawlessly on web, mobile, and desktop.",
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "User Research & Analysis",
    description:
      "In-depth user research to inform design decisions and create data-driven solutions.",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "Design Consultation",
    description:
      "Expert guidance and consultation to elevate your design strategy and execution.",
    icon: <FaHandsHelping className="w-6 h-6" />,
  },
];

const uiuxServices = [
  {
    title: "UI Design",
    desc: `Creating visually appealing and user-friendly interfaces for web and mobile applications.

Includes:

High-fidelity mockups

Design system creation

Interactive elements`,
    price: "₹ 12,000",
    icon: <FaPaintBrush className="w-6 h-6" />
  },
  {
    title: "UX Research",
    desc: `Conducting user research and usability testing to inform design decisions.

Includes:

User interviews

Persona development

Journey mapping`,
    price: "₹ 15,000",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    title: "Branding & Identity",
    desc: `Developing logos, color schemes, and brand guidelines to establish your brand presence.

Includes:

Logo design

Color palette

Typography`,
    price: "₹ 10,000",
    icon: <FaRocket className="w-6 h-6" />
  },
  {
    title: "Prototyping & Testing",
    desc: `Building interactive prototypes and conducting usability tests to refine user experience.

Includes:

Clickable prototypes

User feedback sessions

Iterative improvements`,
    price: "₹ 18,000",
    icon: <FaLaptopCode className="w-6 h-6" />
  },
  {
    title: "Mobile App UI/UX",
    desc: `Designing intuitive mobile interfaces for iOS and Android applications.

Includes:

Touch-friendly designs

Gesture interactions

Platform-specific guidelines`,
    price: "₹ 20,000",
    icon: <FaMobile className="w-6 h-6" />
  },
  {
    title: "Web Design",
    desc: `Crafting responsive and engaging web experiences across all devices.

Includes:

Responsive layouts

Cross-browser compatibility

Performance optimization`,
    price: "₹ 16,000",
    icon: <FaGlobe className="w-6 h-6" />
  },
  {
    title: "Design Consultation",
    desc: `Expert guidance to improve your existing designs and user experience.

Includes:

Design audits

Strategy recommendations

Implementation support`,
    price: "₹ 8,000",
    icon: <FaHandsHelping className="w-6 h-6" />
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

const UIUXServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">UI/UX Design Services</h1>
            <p className="text-lg mb-6">
              We create engaging user interfaces and brand identities using Figma and Adobe XD to enhance your digital presence.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20UI%2FUX%20Design%20Services.%20Please%20provide%20more%20details."
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
              src={uiux}
              alt="UI/UX Design Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
                src={choose}
                alt="Why Choose TechieHelp"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 relative overflow-hidden md:w-1/2"
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
                Why Choose Us?
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We provide exceptional UI/UX design services tailored to your needs with cutting-edge technology and expert team
              </motion.p>
            </motion.div>
          </div>

          <div className="relative w-full">
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-purple-300 rounded-full opacity-20"
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
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-300 rounded-full opacity-20"
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
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
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
                        ease: "backOut"
                      }
                    }
                  }}
                  className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center text-gray-800 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360
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
              Services We <span className="text-blue-500">Offer</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our UI/UX Design Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive UI/UX design services to create engaging and user-friendly digital experiences tailored to your needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={uiux}
              alt="UI/UX Design Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {uiuxServices.map(({ title, desc, price, icon }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
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
                    ease: "backOut"
                  }
                }
              }}
              custom={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center text-gray-800 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  rotate: 360
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
              <div className="font-bold text-green-600 mb-3">{price}</div>
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

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-blue-600">use?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Driving Innovation and User Engagement
            </h1>
            <p className="text-lg mb-6">
              We leverage modern design tools and frameworks to deliver seamless and impactful UI/UX solutions.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
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
              src={technology}
              alt="Technology Illustration"
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
              price: "₹4999",
              features: [
                "User research and analysis",
                "Wireframing and prototyping",
                "Basic UI design",
                "Responsive layouts",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹7999",
              features: [
                "Comprehensive UI/UX design",
                "Interactive prototypes",
                "User testing and feedback",
                "Mobile and desktop responsive",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹11999",
              features: [
                "End-to-end UI/UX design",
                "High-fidelity prototypes",
                "Usability testing",
                "Cross-platform design",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20UI%2FUX%20Design%20Services.%20Please%20provide%20more%20details."
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

export default UIUXServices;