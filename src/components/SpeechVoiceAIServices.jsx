import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { voice, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Voice Commands",
    description:
      "Implement voice command systems for hands-free control and interaction.",
  },
  {
    id: 2,
    title: "Speech-to-Text",
    description:
      "Convert spoken language into text accurately for various applications.",
  },
  {
    id: 3,
    title: "Smart Transcription",
    description:
      "Develop intelligent transcription tools for meetings, interviews, and more.",
  },
  {
    id: 4,
    title: "Natural Language Understanding",
    description:
      "Enable systems to understand and respond to spoken language contextually.",
  },
  {
    id: 5,
    title: "Multilingual Support",
    description:
      "Support multiple languages and dialects for global reach.",
  },
  {
    id: 6,
    title: "Real-time Processing",
    description:
      "Process voice data in real-time for immediate responses.",
  },
  {
    id: 7,
    title: "Integration Support",
    description:
      "Integrate speech and voice AI with existing applications and devices.",
  },
  {
    id: 8,
    title: "Security & Privacy",
    description:
      "Ensure secure handling of voice data with privacy compliance.",
  },
];

const speechVoiceAIServices = [
  {
    title: "Voice Command Systems",
    desc: `Develop voice-controlled applications for hands-free operation.

Includes:

Command recognition

Custom vocabulary

Device integration`,
    price: "₹ 25,000",
  },
  {
    title: "Speech-to-Text Solutions",
    desc: `Convert spoken language into accurate text for transcription and analysis.

Includes:

Noise reduction

Language models

Real-time transcription`,
    price: "₹ 22,000",
  },
  {
    title: "Smart Transcription Tools",
    desc: `Create transcription tools for meetings, interviews, and content creation.

Includes:

Speaker diarization

Timestamping

Editing interface`,
    price: "₹ 28,000",
  },
  {
    title: "Natural Language Understanding",
    desc: `Enable systems to understand and respond to voice commands contextually.

Includes:

Intent recognition

Context management

Dialogue systems`,
    price: "₹ 30,000",
  },
  {
    title: "Multilingual Voice Solutions",
    desc: `Support multiple languages and dialects for diverse user bases.

Includes:

Language detection

Translation services

Localized responses`,
    price: "₹ 27,000",
  },
  {
    title: "Real-time Voice Processing",
    desc: `Process voice data instantly for applications requiring immediate feedback.

Includes:

Low latency processing

Streaming APIs

Edge computing support`,
    price: "₹ 32,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate speech and voice AI with your existing platforms and devices.

Includes:

API development

System compatibility

Testing & validation`,
    price: "₹ 18,000",
  },
  {
    title: "Security & Privacy Audits",
    desc: `Ensure voice data handling complies with security and privacy standards.

Includes:

Risk assessment

Compliance checks

Remediation planning`,
    price: "₹ 20,000",
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for speech and voice AI solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on speech and voice AI implementation and strategy.

Includes:

Needs assessment

Roadmap development

Implementation planning`,
    price: "₹ 18,000",
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

const SpeechVoiceAIServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Speech & Voice AI Services</h1>
            <p className="text-lg mb-6">
              Build advanced voice command, speech-to-text, and smart transcription systems to enhance user interaction.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Speech%20%26%20Voice%20AI%20Services.%20Please%20provide%20more%20details."
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
              src={voice}
              alt="Speech & Voice AI Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Speech & Voice AI?</h2>
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
              Our Speech & Voice AI Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide advanced speech and voice AI solutions to enhance user interaction and accessibility.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={voice}
              alt="Speech & Voice AI Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speechVoiceAIServices.map(({ title, desc, price }, index) => (
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
              Leveraging Advanced Speech & Voice AI Technologies
            </h1>
            <p className="text-lg mb-6">
              We use cutting-edge speech recognition and voice processing technologies to deliver innovative solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Speech%20%26%20Voice%20AI%20Services.%20Please%20provide%20more%20details."
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
              src={voice}
              alt="Speech & Voice AI Illustration"
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
                "Voice command system development",
                "Speech-to-text solutions",
                "Smart transcription tools",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹29999",
              features: [
                "Natural language understanding",
                "Multilingual voice solutions",
                "Real-time voice processing",
                "Integration services",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹44999",
              features: [
                "Full speech & voice AI lifecycle management",
                "Dedicated support team",
                "Security & privacy audits",
                "Custom AI model development",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Speech%20%26%20Voice%20AI%20Services.%20Please%20provide%20more%20details."
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

export default SpeechVoiceAIServices;
