import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { chatbot, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Smart Q&A Bots",
    description:
      "Develop intelligent question and answer bots to enhance customer support.",
  },
  {
    id: 2,
    title: "Lead Generation Bots",
    description:
      "Create bots that capture and qualify leads automatically across channels.",
  },
  {
    id: 3,
    title: "Multichannel Integration",
    description:
      "Integrate chatbots seamlessly across multiple platforms for consistent user experience.",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    description:
      "Leverage NLP to understand and respond to user queries effectively.",
  },
  {
    id: 5,
    title: "24/7 Customer Support",
    description:
      "Provide round-the-clock assistance to your customers with AI chatbots.",
  },
  {
    id: 6,
    title: "Customizable Workflows",
    description:
      "Design chatbot workflows tailored to your business needs.",
  },
  {
    id: 7,
    title: "Analytics & Reporting",
    description:
      "Track chatbot interactions and performance to optimize user experience.",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
  },
];

const aiChatbotsServices = [
  {
    title: "Customer Support Chatbots",
    desc: `Build AI chatbots to handle customer inquiries and support tasks.

Includes:

FAQ automation

Ticketing integration

Live chat handoff`,
    price: "₹ 20,000",
  },
  {
    title: "Lead Generation Chatbots",
    desc: `Create chatbots that capture and qualify leads automatically.

Includes:

Form integration

Lead scoring

CRM integration`,
    price: "₹ 18,000",
  },
  {
    title: "E-commerce Chatbots",
    desc: `Develop chatbots to assist customers with product selection and purchases.

Includes:

Product recommendations

Order tracking

Payment integration`,
    price: "₹ 22,000",
  },
  {
    title: "Multilingual Chatbots",
    desc: `Support multiple languages to serve a diverse customer base.

Includes:

Language detection

Translation services

Localized responses`,
    price: "₹ 25,000",
  },
  {
    title: "Voice-enabled Chatbots",
    desc: `Integrate voice recognition for hands-free user interactions.

Includes:

Speech-to-text

Text-to-speech

Voice commands`,
    price: "₹ 30,000",
  },
  {
    title: "Chatbot Analytics",
    desc: `Monitor chatbot performance and user engagement.

Includes:

Interaction tracking

Conversion analysis

User feedback collection`,
    price: "₹ 15,000",
  },
  {
    title: "Custom Chatbot Development",
    desc: `Tailor chatbots to your unique business workflows and requirements.

Includes:

Requirement analysis

Custom scripting

Deployment & support`,
    price: "₹ 28,000",
  },
  {
    title: "Chatbot Maintenance & Support",
    desc: `Ongoing updates and support to keep your chatbots running smoothly.

Includes:

Bug fixes

Feature enhancements

Performance monitoring`,
    price: "₹ 12,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate chatbots with your existing platforms and tools.

Includes:

API integration

CRM and ERP connectivity

Testing & validation`,
    price: "₹ 18,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on chatbot implementation and optimization.

Includes:

Needs assessment

Strategy development

Roadmap planning`,
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

const AIChatbotsServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">AI Chatbots & Virtual Assistants</h1>
            <p className="text-lg mb-6">
              Build smart chatbots and virtual assistants that improve customer engagement and automate support.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Chatbots%20Services.%20Please%20provide%20more%20details."
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
              src={chatbot}
              alt="AI Chatbots Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI Chatbots?</h2>
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
              Our AI Chatbots Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive AI chatbot solutions to enhance customer engagement and automate business processes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={chatbot}
              alt="AI Chatbots Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiChatbotsServices.map(({ title, desc, price }, index) => (
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
              We use advanced AI frameworks and automation tools to build scalable and efficient AI chatbots for your business.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Chatbots%20Services.%20Please%20provide%20more%20details."
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
              src={chatbot}
              alt="AI Chatbots Illustration"
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
                "Smart Q&A bot development",
                "Lead generation bot setup",
                "Multichannel integration",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹24999",
              features: [
                "Advanced chatbot development",
                "NLP integration",
                "Voice-enabled chatbots",
                "Analytics and reporting",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹39999",
              features: [
                "Full chatbot lifecycle management",
                "Custom chatbot workflows",
                "Multilingual support",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Chatbots%20Services.%20Please%20provide%20more%20details."
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

export default AIChatbotsServices;