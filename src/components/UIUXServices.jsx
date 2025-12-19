import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { uiux, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "User-Centered Design",
    description:
      "We focus on creating intuitive and engaging user experiences tailored to your audience.",
  },
  {
    id: 2,
    title: "Prototyping & Wireframing",
    description:
      "Using Figma and Adobe XD, we develop interactive prototypes to visualize your product.",
  },
  {
    id: 3,
    title: "Brand Identity & Visual Design",
    description:
      "Crafting cohesive brand identities that resonate and stand out in the market.",
  },
  {
    id: 4,
    title: "Responsive & Accessible",
    description:
      "Designs that work seamlessly across devices and are accessible to all users.",
  },
];

const uiuxServices = [
  {
    title: "UI Design",
    desc: `Creating visually appealing and user-friendly interfaces for web and mobile applications.

Includes:

High-fidelity mockups

Design system creation

Interactive elements`,
    price: "₹ 12,000",
  },
  {
    title: "UX Research",
    desc: `Conducting user research and usability testing to inform design decisions.

Includes:

User interviews

Persona development

Journey mapping`,
    price: "₹ 15,000",
  },
  {
    title: "Branding & Identity",
    desc: `Developing logos, color schemes, and brand guidelines to establish your brand presence.

Includes:

Logo design

Color palette

Typography`,
    price: "₹ 10,000",
  },
  {
    title: "Prototyping & Testing",
    desc: `Building interactive prototypes and conducting usability tests to refine user experience.

Includes:

Clickable prototypes

User feedback sessions

Iterative improvements`,
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

const UIUXServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">UI/UX Design Services</h1>
            <p className="text-lg mb-6">
              We create engaging user interfaces and brand identities using Figma and Adobe XD to enhance your digital presence.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20UI%2FUX%20Design%20Services.%20Please%20provide%20more%20details."
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
              src={uiux}
              alt="UI/UX Design Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our UI/UX Design?</h2>
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
              Our UI/UX Design Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive UI/UX design services to create engaging and user-friendly digital experiences tailored to your needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={uiux}
              alt="UI/UX Design Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {uiuxServices.map(({ title, desc, price }, index) => (
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
              Driving Innovation and User Engagement
            </h1>
            <p className="text-lg mb-6">
              We leverage modern design tools and frameworks to deliver seamless and impactful UI/UX solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20UI%2FUX%20Design%20Services.%20Please%20provide%20more%20details."
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
              price: "₹4999",
              features: [
                "User research and analysis",
                "Wireframing and prototyping",
                "Basic UI design",
                "Responsive layouts",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹7999",
              features: [
                "Comprehensive UI/UX design",
                "Interactive prototypes",
                "User testing and feedback",
                "Mobile and desktop responsive",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹11999",
              features: [
                "End-to-end UI/UX design",
                "High-fidelity prototypes",
                "Usability testing",
                "Cross-platform design",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20UI%2FUX%20Design%20Services.%20Please%20provide%20more%20details."
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

export default UIUXServices;
