import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { appDevelopment, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Expert Mobile Developers",
    description:
      "Our team specializes in building high-quality native and cross-platform mobile applications tailored to your business needs.",
  },
  {
    id: 2,
    title: "User-Centered Design",
    description:
      "We focus on creating intuitive and engaging mobile experiences that delight users and drive engagement.",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "Competitive and clear pricing models with no hidden fees, designed to fit startups, enterprises, and individual clients.",
  },
  {
    id: 4,
    title: "Rapid Development Cycles",
    description:
      "Agile methodologies ensure fast delivery without compromising quality or performance.",
  },
  {
    id: 5,
    title: "Performance & Security",
    description:
      "We build apps optimized for speed, reliability, and security across all devices and platforms.",
  },
  {
    id: 6,
    title: "End-to-End Solutions",
    description:
      "From concept and design to deployment and maintenance, we provide comprehensive app development services.",
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Post-launch support including updates, bug fixes, and feature enhancements to keep your app competitive.",
  },
  {
    id: 8,
    title: "Student & Startup Friendly",
    description:
      "Special packages and mentorship for students and startups to help bring ideas to life affordably.",
  },
  {
    id: 9,
    title: "Modern Tech Stack",
    description:
      "We use React Native, Flutter, Swift, Kotlin, Firebase, and other cutting-edge technologies for scalable apps.",
  },
  {
    id: 10,
    title: "Satisfaction Guaranteed",
    description:
      "Our commitment is to deliver apps that exceed expectations and foster long-term partnerships.",
  },
];

const appServices = [
  {
    title: "Cross-Platform Mobile Apps",
    desc: `Build apps that run seamlessly on both iOS and Android platforms using React Native or Flutter.

Includes:

- Shared codebase
- Native performance
- Fast development cycles`,
    price: "₹ 25,000",
  },
  {
    title: "Native iOS App Development",
    desc: `Custom iOS apps built with Swift or Objective-C for optimal performance and user experience.

Includes:

- App Store deployment
- Push notifications
- In-app purchases`,
    price: "₹ 30,000",
  },
  {
    title: "Native Android App Development",
    desc: `Robust Android apps developed with Kotlin or Java tailored to your business requirements.

Includes:

- Google Play deployment
- Background services
- Material Design UI`,
    price: "₹ 30,000",
  },
  {
    title: "Enterprise Mobile Solutions",
    desc: `Secure and scalable mobile apps for enterprise workflows, CRM, and internal tools.

Includes:

- Authentication & roles
- Data synchronization
- Offline capabilities`,
    price: "₹ 40,000",
  },
  {
    title: "Mobile Game Development",
    desc: `Engaging 2D and 3D mobile games with smooth graphics and interactive gameplay.

Includes:

- Unity or Unreal Engine
- Multiplayer support
- Monetization integration`,
    price: "₹ 35,000",
  },
  {
    title: "App UI/UX Design",
    desc: `User-friendly and visually appealing mobile app designs crafted with Figma and Adobe XD.

Includes:

- Wireframes & prototypes
- User testing
- Brand consistency`,
    price: "₹ 15,000",
  },
  {
    title: "App Maintenance & Updates",
    desc: `Keep your app up-to-date with regular updates, bug fixes, and performance improvements.

Includes:

- OS compatibility updates
- Feature enhancements
- Security patches`,
    price: "₹ 10,000 / month",
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

const AppDevelopmentServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              We Build Mobile Apps That Drive Your Business Forward!
            </h1>
            <p className="text-lg mb-6">
              From startups to enterprises, we deliver high-quality mobile applications tailored to your unique needs.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20app%20development%20services.%20Please%20provide%20more%20details."
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
              src={appDevelopment}
              alt="App Development Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose <span className="text-blue-500">Us?</span>
        </h2>
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
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Services We <span className="text-blue-500">Offer</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our App Development Services
            </h1>
            <p className="text-lg mb-6">
              We provide end-to-end mobile app development solutions for businesses, startups, and individuals.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={appDevelopment}
              alt="App Development Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {appServices.map(({ title, desc, price }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{desc}</p>
              <div className="font-bold text-green-600">{price}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-blue-500">Use</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Driving Innovation and Performance
            </h1>
            <p className="text-lg mb-6">
              Leveraging the latest tools and frameworks, we build scalable and high-performance mobile applications.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20app%20development%20services.%20Please%20provide%20more%20details."
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
            {[ 
              {
                title: "Basic Plan",
                price: "₹7999",
                features: [
                  "Cross-platform app development",
                  "Up to 5 screens",
                  "Basic UI/UX design",
                  "Push notifications",
                  "App Store & Google Play submission",
                  "1 month support",
                ],
                imgSrc: basic,
                alt: "Basic Plan",
              },
              {
                title: "Standard Plan",
                price: "₹14999",
                features: [
                  "Cross-platform app development",
                  "Up to 15 screens",
                  "Advanced UI/UX design",
                  "Push notifications & analytics",
                  "App Store & Google Play submission",
                  "3 months support",
                ],
                imgSrc: classic,
                alt: "Standard Plan",
              },
              {
                title: "Premium Plan",
                price: "₹24999",
                features: [
                  "Native iOS and Android apps",
                  "Unlimited screens",
                  "Custom UI/UX design",
                  "Push notifications, analytics & monetization",
                  "App Store & Google Play submission",
                  "6 months support",
                ],
                imgSrc: premium,
                alt: "Premium Plan",
              },
            ].map(({ title, price, features, imgSrc, alt }, index) => (
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
                <ul className="text-left list-disc list-inside space-y-1 mb-4">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="font-bold text-green-600">{price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ />
    </div>
  );
};

export default AppDevelopmentServices;
