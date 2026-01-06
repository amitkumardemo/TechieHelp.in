import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaCode,
  FaCogs,
  FaPalette,
  FaRocket,
  FaChartLine,
  FaHandsHelping,
  FaShieldAlt,
  FaHeadset,
  FaFileAlt,
  FaUser,
  FaNewspaper,
  FaDatabase,
  FaGlobe
} from "react-icons/fa";
import { generative, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Text & Image Generation",
    description:
      "Create AI models that generate high-quality text and images for diverse applications.",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Content Automation",
    description:
      "Automate content creation processes to save time and increase productivity.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "AI Creativity Tools",
    description:
      "Leverage AI-powered tools to enhance creativity and innovation in your projects.",
    icon: <FaPalette className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Custom AI Models",
    description:
      "Develop tailored generative AI models to meet your specific business needs.",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Scalability & Performance",
    description:
      "Design scalable AI solutions optimized for high performance.",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly integrate generative AI models with your existing systems.",
    icon: <FaHandsHelping className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "24/7 Support",
    description:
      "Provide continuous support and maintenance for your AI solutions.",
    icon: <FaHeadset className="w-6 h-6" />,
  },
];

const generativeAIServices = [
  {
    title: "Text Generation Models",
    desc: `Develop AI models that generate human-like text for various applications.

Includes:

Content creation

Chatbots

Summarization`,
    price: "₹ 30,000",
    icon: <FaFileAlt className="w-6 h-6" />
  },
  {
    title: "Image Generation Models",
    desc: `Create AI models that generate realistic images for marketing and design.

Includes:

Style transfer

Image synthesis

Customization`,
    price: "₹ 35,000",
    icon: <FaPalette className="w-6 h-6" />
  },
  {
    title: "Content Automation",
    desc: `Automate content creation workflows to increase efficiency.

Includes:

Template generation

Content scheduling

Quality control`,
    price: "₹ 25,000",
    icon: <FaCogs className="w-6 h-6" />
  },
  {
    title: "Creative AI Tools",
    desc: `Leverage AI-powered tools to enhance creativity in your projects.

Includes:

Design assistance

Idea generation

Collaboration tools`,
    price: "₹ 28,000",
    icon: <FaRocket className="w-6 h-6" />
  },
  {
    title: "Custom Model Development",
    desc: `Build generative AI models tailored to your business requirements.

Includes:

Data preparation

Model training

Deployment`,
    price: "₹ 40,000",
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    title: "Integration Services",
    desc: `Integrate generative AI solutions with your existing platforms.

Includes:

API development

System compatibility

Testing & validation`,
    price: "₹ 20,000",
    icon: <FaGlobe className="w-6 h-6" />
  },
  {
    title: "Performance Optimization",
    desc: `Optimize AI models for speed and accuracy.

Includes:

Model tuning

Hardware acceleration

Load balancing`,
    price: "₹ 22,000",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure your AI solutions meet security and regulatory standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
    price: "₹ 18,000",
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for generative AI solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
    icon: <FaUser className="w-6 h-6" />
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on generative AI adoption and strategy.

Includes:

Needs assessment

Roadmap development

Implementation planning`,
    price: "₹ 20,000",
    icon: <FaNewspaper className="w-6 h-6" />
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

const GenerativeAIServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Generative AI Solutions</h1>
            <p className="text-lg mb-6">
              Develop AI models for text and image generation, content automation, and creative AI tools to transform your business.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Generative%20AI%20Services.%20Please%20provide%20more%20details."
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
              src={generative}
              alt="Generative AI Illustration"
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
                src={generative}
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
              Our Generative AI Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide advanced generative AI solutions to enhance creativity and automate content generation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={generative}
              alt="Generative AI Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {generativeAIServices.map(({ title, desc, price, icon }, index) => (
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
              Leveraging Advanced AI Technologies
            </h1>
            <p className="text-lg mb-6">
              We use state-of-the-art AI models and tools to deliver innovative generative AI solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Generative%20AI%20Services.%20Please%20provide%20more%20details."
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
              src={generative}
              alt="Generative AI Illustration"
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
                "Text and image generation models",
                "Content automation workflows",
                "Basic AI creativity tools",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹39999",
              features: [
                "Advanced generative AI models",
                "Custom content automation",
                "Creative AI tools integration",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹59999",
              features: [
                "Full generative AI solution lifecycle",
                "Dedicated support team",
                "Custom AI model development",
                "Performance optimization",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Generative%20AI%20Services.%20Please%20provide%20more%20details."
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

export default GenerativeAIServices;
