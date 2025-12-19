import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaRocket, FaCode, FaChartLine, FaUsers, FaDollarSign, FaShieldAlt, FaLightbulb, FaLock, FaSearch, FaCloud, FaNetworkWired, FaCogs, FaUserShield, FaChartBar, FaCog, FaChalkboardTeacher, FaRoad, FaHandshake } from "react-icons/fa";
import { tech, technology, basic, classic, premium, logo } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Digital Transformation",
    description:
      "Guide your business through digital transformation with scalable and modern technology solutions.",
    icon: <FaRocket className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Scalable Tech Stack",
    description:
      "Implement technology stacks that grow with your business needs and future goals.",
    icon: <FaCode className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Strategic Planning",
    description:
      "Develop strategic technology plans aligned with your business objectives for maximum impact.",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Expert Consultation",
    description:
      "Receive expert advice tailored to your industry and business challenges.",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Cost Optimization",
    description:
      "Optimize your technology investments to maximize ROI and reduce waste.",
    icon: <FaDollarSign className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Risk Management",
    description:
      "Identify and mitigate technology risks to ensure business continuity.",
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Innovation Enablement",
    description:
      "Leverage emerging technologies to drive innovation and competitive advantage.",
    icon: <FaLightbulb className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Compliance & Security",
    description:
      "Ensure your technology solutions meet regulatory requirements and security standards.",
    icon: <FaLock className="w-6 h-6" />
  },
];

const techConsultingServices = [
  {
    title: "Technology Assessment",
    desc: `Comprehensive evaluation of your current technology landscape.

Includes:

Infrastructure review

Application portfolio analysis

Gap identification`,
    price: "₹ 25,000",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "Cloud Strategy & Migration",
    desc: `Plan and execute cloud adoption tailored to your business needs.

Includes:

Cloud readiness assessment

Migration planning

Implementation support`,
    price: "₹ 40,000",
    icon: <FaCloud className="w-6 h-6" />
  },
  {
    title: "IT Infrastructure Design",
    desc: `Design scalable and resilient IT infrastructure.

Includes:

Network architecture

Server setup

Disaster recovery planning`,
    price: "₹ 35,000",
    icon: <FaNetworkWired className="w-6 h-6" />
  },
  {
    title: "Software Selection & Implementation",
    desc: `Assist in selecting and deploying software solutions.

Includes:

Vendor evaluation

Customization

Training & support`,
    price: "₹ 30,000",
    icon: <FaCogs className="w-6 h-6" />
  },
  {
    title: "Cybersecurity Consulting",
    desc: `Protect your business with robust cybersecurity strategies.

Includes:

Risk assessment

Security policy development

Incident response planning`,
    price: "₹ 28,000",
    icon: <FaUserShield className="w-6 h-6" />
  },
  {
    title: "Data Analytics & BI",
    desc: `Leverage data to drive informed decision-making.

Includes:

Data strategy

Dashboard development

Advanced analytics`,
    price: "₹ 32,000",
    icon: <FaChartBar className="w-6 h-6" />
  },
  {
    title: "DevOps & Automation",
    desc: `Improve software delivery with DevOps practices and automation.

Includes:

CI/CD pipeline setup

Infrastructure as code

Monitoring & alerting`,
    price: "₹ 30,000",
    icon: <FaCog className="w-6 h-6" />
  },
  {
    title: "Technology Training & Workshops",
    desc: `Empower your team with the latest technology skills.

Includes:

Customized training programs

Hands-on workshops

Ongoing support`,
    price: "₹ 20,000",
    icon: <FaChalkboardTeacher className="w-6 h-6" />
  },
  {
    title: "Digital Transformation Roadmap",
    desc: `Develop a strategic plan for digital transformation.

Includes:

Vision & goals definition

Technology roadmap

Change management`,
    price: "₹ 45,000",
    icon: <FaRoad className="w-6 h-6" />
  },
  {
    title: "Vendor Management",
    desc: `Manage relationships with technology vendors effectively.

Includes:

Contract negotiation

Performance monitoring

Issue resolution`,
    price: "₹ 22,000",
    icon: <FaHandshake className="w-6 h-6" />
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

const TechConsultingServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Tech Consulting Services</h1>
            <p className="text-lg mb-6">
              We provide expert technology consulting to help your business adopt scalable and strategic tech solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Tech%20Consulting%20Services.%20Please%20provide%20more%20details."
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
              src={tech}
              alt="Tech Consulting Illustration"
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
                src={tech}
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
                Why Choose Our Tech Consulting?
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We provide exceptional technology consulting services tailored to your needs with cutting-edge technology and expert team
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

      {/* Services Offered Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Services We <span className="text-blue-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our Tech Consulting Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we offer comprehensive technology consulting services to help your business innovate and grow.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={tech}
              alt="Tech Consulting Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {techConsultingServices.map(({ title, desc, price, icon }, index) => (
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
                  className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {desc}
                </motion.p>

                {/* Hover effect line */}
                <motion.div
                  className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full"
                  whileHover={{ width: "50%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="font-bold text-green-600 mt-3 mb-2.5">{price}</div>
                <a
                  href="https://calendar.app.google/vX3iT9r8XvV9bUqr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 inline-block text-center text-sm"
                >
                  Book a Strategy Call
                </a>
              </motion.div>
            ))}
          </div>
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
              Leveraging Modern Technology for Business Success
            </h1>
            <p className="text-lg mb-6">
              We utilize cutting-edge tools and platforms to deliver innovative and scalable technology consulting solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Tech%20Consulting%20Services.%20Please%20provide%20more%20details."
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
              price: "₹7999",
              features: [
                "Initial technology assessment",
                "Basic strategic planning",
                "Scalable tech stack recommendations",
                "Monthly progress reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹14999",
              features: [
                "Comprehensive technology consulting",
                "Digital transformation roadmap",
                "Risk management strategies",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹24999",
              features: [
                "End-to-end technology strategy and implementation",
                "Dedicated consultant",
                "Advanced analytics and reporting",
                "Continuous optimization",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Tech%20Consulting%20Services.%20Please%20provide%20more%20details."
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

export default TechConsultingServices;
