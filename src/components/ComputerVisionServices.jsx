import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
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
  },
  {
    id: 2,
    title: "Face Recognition",
    description:
      "Develop face recognition systems for security and personalization.",
  },
  {
    id: 3,
    title: "Smart Scanning Tools",
    description:
      "Create intelligent scanning solutions for document and image processing.",
  },
  {
    id: 4,
    title: "Real-time Analytics",
    description:
      "Analyze visual data in real-time for actionable insights.",
  },
  {
    id: 5,
    title: "Custom Solutions",
    description:
      "Tailor computer vision applications to your specific business needs.",
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly integrate computer vision systems with existing platforms.",
  },
  {
    id: 7,
    title: "Scalability & Performance",
    description:
      "Design scalable solutions optimized for high performance.",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
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
  },
  {
    title: "Face Recognition Solutions",
    desc: `Implement face recognition for access control and personalization.

Includes:

Face database management

Recognition algorithms

Security features`,
    price: "₹ 35,000",
  },
  {
    title: "Image & Document Scanning",
    desc: `Create smart scanning tools for digitizing and processing documents.

Includes:

OCR integration

Image enhancement

Data extraction`,
    price: "₹ 25,000",
  },
  {
    title: "Video Analytics",
    desc: `Analyze video streams for security and business intelligence.

Includes:

Motion detection

Event recognition

Alert systems`,
    price: "₹ 28,000",
  },
  {
    title: "Custom Computer Vision Apps",
    desc: `Build tailored computer vision applications for unique use cases.

Includes:

Requirement analysis

Custom development

Testing & deployment`,
    price: "₹ 40,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate computer vision solutions with your existing infrastructure.

Includes:

API development

System compatibility

Support & maintenance`,
    price: "₹ 20,000",
  },
  {
    title: "Performance Optimization",
    desc: `Optimize computer vision models and systems for speed and accuracy.

Includes:

Model tuning

Hardware acceleration

Load balancing`,
    price: "₹ 22,000",
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure your computer vision systems meet security and regulatory standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
    price: "₹ 18,000",
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for your computer vision solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on computer vision technology adoption and strategy.

Includes:

Needs assessment

Technology roadmap

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
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Computer Vision?</h2>
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
          {computerVisionServices.map(({ title, desc, price }, index) => (
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
