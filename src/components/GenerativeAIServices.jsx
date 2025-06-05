import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
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
  },
  {
    id: 2,
    title: "Content Automation",
    description:
      "Automate content creation processes to save time and increase productivity.",
  },
  {
    id: 3,
    title: "AI Creativity Tools",
    description:
      "Leverage AI-powered tools to enhance creativity and innovation in your projects.",
  },
  {
    id: 4,
    title: "Custom AI Models",
    description:
      "Develop tailored generative AI models to meet your specific business needs.",
  },
  {
    id: 5,
    title: "Scalability & Performance",
    description:
      "Design scalable AI solutions optimized for high performance.",
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly integrate generative AI models with your existing systems.",
  },
  {
    id: 7,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
  },
  {
    id: 8,
    title: "24/7 Support",
    description:
      "Provide continuous support and maintenance for your AI solutions.",
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
  },
  {
    title: "Image Generation Models",
    desc: `Create AI models that generate realistic images for marketing and design.

Includes:

Style transfer

Image synthesis

Customization`,
    price: "₹ 35,000",
  },
  {
    title: "Content Automation",
    desc: `Automate content creation workflows to increase efficiency.

Includes:

Template generation

Content scheduling

Quality control`,
    price: "₹ 25,000",
  },
  {
    title: "Creative AI Tools",
    desc: `Leverage AI-powered tools to enhance creativity in your projects.

Includes:

Design assistance

Idea generation

Collaboration tools`,
    price: "₹ 28,000",
  },
  {
    title: "Custom Model Development",
    desc: `Build generative AI models tailored to your business requirements.

Includes:

Data preparation

Model training

Deployment`,
    price: "₹ 40,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate generative AI solutions with your existing platforms.

Includes:

API development

System compatibility

Testing & validation`,
    price: "₹ 20,000",
  },
  {
    title: "Performance Optimization",
    desc: `Optimize AI models for speed and accuracy.

Includes:

Model tuning

Hardware acceleration

Load balancing`,
    price: "₹ 22,000",
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure your AI solutions meet security and regulatory standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
    price: "₹ 18,000",
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for generative AI solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on generative AI adoption and strategy.

Includes:

Needs assessment

Roadmap development

Implementation planning`,
    price: "₹ 20,000",
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

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Generative AI?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          {generativeAIServices.map(({ title, desc, price }, index) => (
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
