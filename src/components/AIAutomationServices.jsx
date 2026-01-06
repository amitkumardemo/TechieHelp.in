import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaCogs,
  FaUsers,
  FaEnvelope,
  FaRobot,
  FaPlug,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaLightbulb,
  FaExpandArrowsAlt,
  FaLock,
  FaHeadset,
  FaWrench,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { automation, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Workflow Automation",
    description:
      "Automate your business workflows to increase efficiency and reduce manual effort.",
    icon: <FaCogs className="w-6 h-6" />
  },
  {
    id: 2,
    title: "CRM & HR Tools",
    description:
      "Integrate automation with CRM and HR systems for seamless operations.",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Email & Task Bots",
    description:
      "Deploy bots to handle email management and task automation effectively.",
    icon: <FaEnvelope className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Custom Automation Solutions",
    description:
      "Tailor automation solutions to your unique business processes and needs.",
    icon: <FaRobot className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Scalability & Flexibility",
    description:
      "Design automation systems that grow with your business and adapt to changes.",
    icon: <FaExpandArrowsAlt className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly connect automation tools with your existing software ecosystem.",
    icon: <FaPlug className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Security & Compliance",
    description:
      "Ensure your automation processes comply with industry standards and regulations.",
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    id: 8,
    title: "24/7 Monitoring & Support",
    description:
      "Continuous monitoring and support to keep your automation running smoothly.",
    icon: <FaClock className="w-6 h-6" />
  },
];

const aiAutomationServices = [
  {
    title: "Business Workflow Automation",
    desc: `Automate repetitive business processes to improve efficiency and accuracy.

Includes:

Process mapping

Automation design

Implementation & testing`,
    price: "₹ 25,000",
    icon: <FaCogs className="w-6 h-6" />
  },
  {
    title: "CRM Automation",
    desc: `Integrate and automate customer relationship management tasks.

Includes:

Lead management

Customer segmentation

Automated follow-ups`,
    price: "₹ 20,000",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    title: "HR Process Automation",
    desc: `Streamline HR tasks such as onboarding, payroll, and attendance.

Includes:

Employee data management

Payroll automation

Leave management`,
    price: "₹ 22,000",
    icon: <FaHeadset className="w-6 h-6" />
  },
  {
    title: "Email & Task Automation",
    desc: `Automate email responses and task assignments to boost productivity.

Includes:

Email filtering

Auto-responses

Task scheduling`,
    price: "₹ 18,000",
    icon: <FaEnvelope className="w-6 h-6" />
  },
  {
    title: "Custom Bot Development",
    desc: `Develop custom bots to automate specific tasks and workflows.

Includes:

Requirement analysis

Bot development

Deployment & support`,
    price: "₹ 30,000",
    icon: <FaRobot className="w-6 h-6" />
  },
  {
    title: "Integration Services",
    desc: `Connect automation tools with your existing platforms and software.

Includes:

API integration

System compatibility

Testing & validation`,
    price: "₹ 15,000",
    icon: <FaPlug className="w-6 h-6" />
  },
  {
    title: "Monitoring & Maintenance",
    desc: `Ensure smooth operation of automation systems with ongoing support.

Includes:

Performance tracking

Issue resolution

Updates & upgrades`,
    price: "₹ 12,000",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on automation implementation and optimization.

Includes:

Needs assessment

Strategy development

Roadmap planning`,
    price: "₹ 15,000",
    icon: <FaLightbulb className="w-6 h-6" />
  },
  {
    title: "Scalability Planning",
    desc: `Plan for scaling automation solutions as your business grows.

Includes:

Capacity planning

Resource allocation

Load balancing`,
    price: "₹ 20,000",
    icon: <FaExpandArrowsAlt className="w-6 h-6" />
  },
  {
    title: "Security & Compliance Audits",
    desc: `Regular audits to ensure automation systems meet security and compliance standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
    price: "₹ 18,000",
    icon: <FaLock className="w-6 h-6" />
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

const AIAutomationServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">AI Automation Solutions</h1>
            <p className="text-lg mb-6">
              Enhance your business processes with AI-powered workflow automation, CRM and HR tool integration, and task bots.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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
              src={automation}
              alt="AI Automation Illustration"
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
                src={automation}
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
              Our AI Automation Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive AI automation solutions to streamline your business processes and improve efficiency.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={automation}
              alt="AI Automation Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiAutomationServices.map(({ title, desc, price, icon }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{desc}</p>
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
              Leveraging AI-powered Automation Technologies
            </h1>
            <p className="text-lg mb-6">
              We use state-of-the-art AI and automation tools to deliver scalable and efficient solutions tailored to your business needs.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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
              src={automation}
              alt="AI Automation Illustration"
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
              price: "₹14999",
              features: [
                "Workflow automation setup",
                "CRM & HR tool integration",
                "Email & task bot deployment",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹24999",
              features: [
                "Comprehensive automation solutions",
                "Custom bot development",
                "Integration services",
                "Advanced analytics",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹39999",
              features: [
                "End-to-end automation lifecycle management",
                "Dedicated support team",
                "Scalability planning",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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

export default AIAutomationServices;
