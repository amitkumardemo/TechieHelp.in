import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { agents, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Research Bots",
    description:
      "Develop intelligent bots for research and data gathering tasks.",
  },
  {
    id: 2,
    title: "Data Automation",
    description:
      "Automate repetitive data processing and management tasks efficiently.",
  },
  {
    id: 3,
    title: "Custom Task Agents",
    description:
      "Create tailored AI agents to handle specific business workflows and tasks.",
  },
  {
    id: 4,
    title: "Scalable Solutions",
    description:
      "Build AI agents that scale with your business needs and growth.",
  },
  {
    id: 5,
    title: "Integration Support",
    description:
      "Seamlessly integrate AI agents with your existing systems and workflows.",
  },
  {
    id: 6,
    title: "24/7 Availability",
    description:
      "Ensure continuous operation of AI agents for uninterrupted business processes.",
  },
  {
    id: 7,
    title: "Customizable Workflows",
    description:
      "Design AI agents with flexible workflows tailored to your unique requirements.",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Implement robust security measures to protect data and ensure compliance.",
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
  },
  {
    title: "Data Automation Agents",
    desc: `Automate repetitive data processing tasks to improve efficiency.

Includes:

Data entry automation

Workflow automation

Error reduction`,
    price: "₹ 20,000",
  },
  {
    title: "Custom AI Agents",
    desc: `Develop AI agents tailored to your specific business workflows.

Includes:

Requirement analysis

Custom development

Deployment & support`,
    price: "₹ 30,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate AI agents with your existing software and platforms.

Includes:

API integration

System compatibility

Testing & validation`,
    price: "₹ 15,000",
  },
  {
    title: "Monitoring & Maintenance",
    desc: `Ensure AI agents operate smoothly with ongoing monitoring and support.

Includes:

Performance tracking

Issue resolution

Updates & upgrades`,
    price: "₹ 12,000",
  },
  {
    title: "Security & Compliance",
    desc: `Implement security protocols and ensure compliance with regulations.

Includes:

Data encryption

Access controls

Audit trails`,
    price: "₹ 18,000",
  },
  {
    title: "Scalability Planning",
    desc: `Plan for scaling AI agent capabilities as your business grows.

Includes:

Capacity planning

Resource allocation

Load balancing`,
    price: "₹ 22,000",
  },
  {
    title: "Custom Workflow Design",
    desc: `Design flexible workflows for AI agents to meet unique business needs.

Includes:

Process mapping

Workflow automation

User training`,
    price: "₹ 20,000",
  },
  {
    title: "AI Agent Training",
    desc: `Train AI agents with domain-specific data for improved performance.

Includes:

Data preparation

Model training

Validation & testing`,
    price: "₹ 25,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on AI agent implementation and strategy.

Includes:

Needs assessment

Technology roadmap

Implementation planning`,
    price: "₹ 15,000",
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

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI Agents?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ id, title, description }) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Services We <span className="text-red-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our AI Agents Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we develop intelligent AI agents tailored to your business needs to automate workflows and enhance productivity.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={agents}
              alt="AI Agents Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiAgentsServices.map(({ title, desc, price }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{desc}</p>
              <div className="font-bold text-green-600">{price}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Used Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-red-600">use?</span>
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
