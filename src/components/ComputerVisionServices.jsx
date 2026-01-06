import React from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaUser,
  FaFileAlt,
  FaChartLine,
  FaCogs,
  FaLink,
  FaRocket,
  FaLock,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { computer, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Object Detection",
    description:
      "Implement advanced object detection algorithms for various applications.",
    icon: <FaEye className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Face Recognition",
    description:
      "Develop face recognition systems for security and personalization.",
    icon: <FaUser className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Smart Scanning Tools",
    description:
      "Create intelligent scanning solutions for document and image processing.",
    icon: <FaFileAlt className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Real-time Analytics",
    description:
      "Analyze visual data in real-time for actionable insights.",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Custom Solutions",
    description:
      "Tailor computer vision applications to your specific business needs.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly integrate computer vision systems with existing platforms.",
    icon: <FaLink className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Scalability & Performance",
    description:
      "Design scalable solutions optimized for high performance.",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
    icon: <FaLock className="w-6 h-6" />,
  },
];

const computerVisionServices = [
  {
    title: "Object Detection Systems",
    desc: `Develop systems to detect and classify objects in images and videos.

Includes:

Real-time detection

Custom model training

Deployment support`,
    price: "₹ 30,000",
    icon: <FaEye className="w-6 h-6" />,
  },
  {
    title: "Face Recognition Solutions",
    desc: `Implement face recognition for access control and personalization.

Includes:

Face database management

Recognition algorithms

Security features`,
    price: "₹ 35,000",
    icon: <FaUser className="w-6 h-6" />,
  },
  {
    title: "Image & Document Scanning",
    desc: `Create smart scanning tools for digitizing and processing documents.

Includes:

OCR integration

Image enhancement

Data extraction`,
    price: "₹ 25,000",
    icon: <FaFileAlt className="w-6 h-6" />,
  },
  {
    title: "Video Analytics",
    desc: `Analyze video streams for security and business intelligence.

Includes:

Motion detection

Event recognition

Alert systems`,
    price: "₹ 28,000",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    title: "Custom Computer Vision Apps",
    desc: `Build tailored computer vision applications for unique use cases.

Includes:

Requirement analysis

Custom development

Testing & deployment`,
    price: "₹ 40,000",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    title: "Integration Services",
    desc: `Integrate computer vision solutions with your existing infrastructure.

Includes:

API development

System compatibility

Support & maintenance`,
    price: "₹ 20,000",
    icon: <FaLink className="w-6 h-6" />,
  },
  {
    title: "Performance Optimization",
    desc: `Optimize computer vision models and systems for speed and accuracy.

Includes:

Model tuning

Hardware acceleration

Load balancing`,
    price: "₹ 22,000",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure your computer vision systems meet security and regulatory standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
    price: "₹ 18,000",
    icon: <FaLock className="w-6 h-6" />,
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for your computer vision solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on computer vision technology adoption and strategy.

Includes:

Needs assessment

Technology roadmap

Implementation planning`,
    price: "₹ 20,000",
    icon: <FaCalendarAlt className="w-6 h-6" />,
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

const ComputerVisionServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Computer Vision Services</h1>
            <p className="text-lg mb-6">
              Build intelligent computer vision applications including object detection, face recognition, and smart scanning tools.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Computer%20Vision%20Services.%20Please%20provide%20more%20details."
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
              src={computer}
              alt="Computer Vision Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                src={computer}
                alt="Why Choose Us"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
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
                We provide exceptional services tailored to your needs with
                cutting-edge technology and expert team
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
                ease: "linear",
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
                ease: "linear",
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
              Our Computer Vision Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide advanced computer vision solutions tailored to your business needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={computer}
              alt="Computer Vision Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {computerVisionServices.map(({ title, desc, price, icon }, index) => (
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
              Leveraging Advanced Computer Vision Technologies
            </h1>
            <p className="text-lg mb-6">
              We use state-of-the-art computer vision algorithms and tools to deliver innovative and scalable solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Computer%20Vision%20Services.%20Please%20provide%20more%20details."
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
              src={computer}
              alt="Computer Vision Illustration"
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
              price: "₹24999",
              features: [
                "Object detection implementation",
                "Basic face recognition",
                "Smart scanning tools",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹39999",
              features: [
                "Advanced computer vision algorithms",
                "Face recognition with high accuracy",
                "Document scanning and OCR",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹59999",
              features: [
                "Custom computer vision solutions",
                "Real-time video analytics",
                "Integration with AI and IoT",
                "Dedicated support team",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Computer%20Vision%20Services.%20Please%20provide%20more%20details."
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

export default ComputerVisionServices;
