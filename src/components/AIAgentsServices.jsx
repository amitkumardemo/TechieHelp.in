import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaRocket, FaEye, FaBug, FaShieldAlt, FaSave, FaEdit, FaClock, FaChartLine, FaWrench, FaBrain, FaRobot, FaMagic, FaCog, FaDatabase, FaUserCog, FaLightbulb, FaCode } from "react-icons/fa";
import { agents, technology, basic, classic, premium, logo } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Research Bots",
    description:
      "Develop intelligent bots for research and data gathering tasks.",
    icon: <FaBrain className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Data Automation",
    description:
      "Automate repetitive data processing and management tasks efficiently.",
    icon: <FaRobot className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Custom Task Agents",
    description:
      "Create tailored AI agents to handle specific business workflows and tasks.",
    icon: <FaMagic className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Scalable Solutions",
    description:
      "Build AI agents that scale with your business needs and growth.",
    icon: <FaCog className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Integration Support",
    description:
      "Seamlessly integrate AI agents with your existing systems and workflows.",
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    id: 6,
    title: "24/7 Availability",
    description:
      "Ensure continuous operation of AI agents for uninterrupted business processes.",
    icon: <FaUserCog className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Customizable Workflows",
    description:
      "Design AI agents with flexible workflows tailored to your unique requirements.",
    icon: <FaLightbulb className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Implement robust security measures to protect data and ensure compliance.",
    icon: <FaCode className="w-6 h-6" />
  },
];

const aiAgentsServices = [
  {
    title: "Research Bot Development",
    desc: `Create AI bots that automate research and data collection tasks.

Includes:

Data scraping

Information aggregation

Report generation`,
    price: "₹ 25,000",
    icon: <FaBrain className="w-6 h-6" />
  },
  {
    title: "Data Automation Agents",
    desc: `Automate repetitive data processing tasks to improve efficiency.

Includes:

Data entry automation

Workflow automation

Error reduction`,
    price: "₹ 20,000",
    icon: <FaRobot className="w-6 h-6" />
  },
  {
    title: "Custom AI Agents",
    desc: `Develop AI agents tailored to your specific business workflows.

Includes:

Requirement analysis

Custom development

Deployment & support`,
    price: "₹ 30,000",
    icon: <FaMagic className="w-6 h-6" />
  },
  {
    title: "Integration Services",
    desc: `Integrate AI agents with your existing software and platforms.

Includes:

API integration

System compatibility

Testing & validation`,
    price: "₹ 15,000",
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    title: "Monitoring & Maintenance",
    desc: `Ensure AI agents operate smoothly with ongoing monitoring and support.

Includes:

Performance tracking

Issue resolution

Updates & upgrades`,
    price: "₹ 12,000",
    icon: <FaUserCog className="w-6 h-6" />
  },
  {
    title: "Security & Compliance",
    desc: `Implement security protocols and ensure compliance with regulations.

Includes:

Data encryption

Access controls

Audit trails`,
    price: "₹ 18,000",
    icon: <FaCode className="w-6 h-6" />
  },
  {
    title: "Scalability Planning",
    desc: `Plan for scaling AI agent capabilities as your business grows.

Includes:

Capacity planning

Resource allocation

Load balancing`,
    price: "₹ 22,000",
    icon: <FaCog className="w-6 h-6" />
  },
  {
    title: "Custom Workflow Design",
    desc: `Design flexible workflows for AI agents to meet unique business needs.

Includes:

Process mapping

Workflow automation

User training`,
    price: "₹ 20,000",
    icon: <FaLightbulb className="w-6 h-6" />
  },
  {
    title: "AI Agent Training",
    desc: `Train AI agents with domain-specific data for improved performance.

Includes:

Data preparation

Model training

Validation & testing`,
    price: "₹ 25,000",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on AI agent implementation and strategy.

Includes:

Needs assessment

Technology roadmap

Implementation planning`,
    price: "₹ 15,000",
    icon: <FaRocket className="w-6 h-6" />
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

const AIAgentsServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">AI Agents Services</h1>
            <p className="text-lg mb-6">
              Build intelligent AI agents for research, data automation, and custom task handling to optimize your business processes.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Agents%20Services.%20Please%20provide%20more%20details."
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
              src={agents}
              alt="AI Agents Illustration"
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
                src={agents}
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
                Why Choose Our AI Agents?
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We provide exceptional AI agent services tailored to your needs with cutting-edge technology and expert team
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
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

      {/* Services Offered Section - Enhanced with Animations */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-10 mb-16"
          >
            <div className="md:w-1/2">
              <motion.h2
                className="text-3xl font-bold mb-12 text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Services We <span className="text-blue-500">offer?</span>
              </motion.h2>
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our AI Agents Services
              </motion.h1>
              <motion.p
                className="text-lg mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At TechieHelp, we develop intelligent AI agents tailored to your business needs to automate workflows and enhance productivity.
              </motion.p>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={agents}
                alt="AI Agents Illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Animated background elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Logo animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img src={logo} alt="Logo" className="w-48 h-48" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {aiAgentsServices.map(({ title, desc, price, icon }, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
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
                  className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center text-gray-800 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Card background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 relative z-10 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-3 relative z-10 text-gray-800 group-hover:text-purple-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10 group-hover:text-gray-800 transition-colors duration-300 whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {desc}
                  </motion.p>
                  <motion.div
                    className="font-bold text-green-600 text-lg relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {price}
                  </motion.div>

                  {/* Hover effect line */}
                  <motion.div
                    className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full"
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Used Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-blue-500">use?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Leveraging AI and Automation Technologies
            </h1>
            <p className="text-lg mb-6">
              We use advanced AI frameworks and automation tools to build scalable and efficient AI agents for your business.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Agents%20Services.%20Please%20provide%20more%20details."
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
              src={agents}
              alt="AI Agents Illustration"
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
                "Research bot development",
                "Basic data automation",
                "Custom task agent setup",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹29999",
              features: [
                "Advanced AI agent development",
                "Integration support",
                "Monitoring and maintenance",
                "Security and compliance",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹49999",
              features: [
                "Full AI agent lifecycle management",
                "Dedicated support team",
                "Custom workflow design",
                "AI agent training",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Agents%20Services.%20Please%20provide%20more%20details."
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

export default AIAgentsServices;
