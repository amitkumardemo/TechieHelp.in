import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaUsers,
  FaHeadset,
  FaMoneyBillWave,
  FaClock,
  FaMobile,
  FaServer,
  FaTools,
  FaGraduationCap,
  FaLaptopCode,
  FaHeart,
  FaCode,
  FaApple,
  FaAndroid,
  FaBuilding,
  FaGamepad,
  FaPalette,
  FaWrench
} from "react-icons/fa";
import { appDevelopment, technology, basic, classic, premium, android, apps } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Expert Mobile Developers",
    description:
      "Our team specializes in building high-quality native and cross-platform mobile applications tailored to your business needs.",
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    id: 2,
    title: "User-Centered Design",
    description:
      "We focus on creating intuitive and engaging mobile experiences that delight users and drive engagement.",
    icon: <FaHeadset className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "Competitive and clear pricing models with no hidden fees, designed to fit startups, enterprises, and individual clients.",
    icon: <FaMoneyBillWave className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Rapid Development Cycles",
    description:
      "Agile methodologies ensure fast delivery without compromising quality or performance.",
    icon: <FaClock className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Performance & Security",
    description:
      "We build apps optimized for speed, reliability, and security across all devices and platforms.",
    icon: <FaMobile className="w-6 h-6" />
  },
  {
    id: 6,
    title: "End-to-End Solutions",
    description:
      "From concept and design to deployment and maintenance, we provide comprehensive app development services.",
    icon: <FaServer className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Post-launch support including updates, bug fixes, and feature enhancements to keep your app competitive.",
    icon: <FaTools className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Student & Startup Friendly",
    description:
      "Special packages and mentorship for students and startups to help bring ideas to life affordably.",
    icon: <FaGraduationCap className="w-6 h-6" />
  },
  {
    id: 9,
    title: "Modern Tech Stack",
    description:
      "We use React Native, Flutter, Swift, Kotlin, Firebase, and other cutting-edge technologies for scalable apps.",
    icon: <FaLaptopCode className="w-6 h-6" />
  },
  {
    id: 10,
    title: "Satisfaction Guaranteed",
    description:
      "Our commitment is to deliver apps that exceed expectations and foster long-term partnerships.",
    icon: <FaHeart className="w-6 h-6" />
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
    icon: <FaMobile className="w-6 h-6" />
  },
  {
    title: "Native iOS App Development",
    desc: `Custom iOS apps built with Swift or Objective-C for optimal performance and user experience.

Includes:

- App Store deployment
- Push notifications
- In-app purchases`,
    price: "₹ 30,000",
    icon: <FaApple className="w-6 h-6" />
  },
  {
    title: "Native Android App Development",
    desc: `Robust Android apps developed with Kotlin or Java tailored to your business requirements.

Includes:

- Google Play deployment
- Background services
- Material Design UI`,
    price: "₹ 30,000",
    icon: <FaAndroid className="w-6 h-6" />
  },
  {
    title: "Enterprise Mobile Solutions",
    desc: `Secure and scalable mobile apps for enterprise workflows, CRM, and internal tools.

Includes:

- Authentication & roles
- Data synchronization
- Offline capabilities`,
    price: "₹ 40,000",
    icon: <FaBuilding className="w-6 h-6" />
  },
  {
    title: "Mobile Game Development",
    desc: `Engaging 2D and 3D mobile games with smooth graphics and interactive gameplay.

Includes:

- Unity or Unreal Engine
- Multiplayer support
- Monetization integration`,
    price: "₹ 35,000",
    icon: <FaGamepad className="w-6 h-6" />
  },
  {
    title: "App UI/UX Design",
    desc: `User-friendly and visually appealing mobile app designs crafted with Figma and Adobe XD.

Includes:

- Wireframes & prototypes
- User testing
- Brand consistency`,
    price: "₹ 15,000",
    icon: <FaPalette className="w-6 h-6" />
  },
  {
    title: "App Maintenance & Updates",
    desc: `Keep your app up-to-date with regular updates, bug fixes, and performance improvements.

Includes:

- OS compatibility updates
- Feature enhancements
- Security patches`,
    price: "₹ 10,000 / month",
    icon: <FaWrench className="w-6 h-6" />
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
              From startups to enterprises, we design and develop high-quality mobile applications tailored to your unique business needs. Our team specializes in creating intuitive, scalable, and feature-rich apps that provide seamless user experiences across iOS and Android. With a focus on performance, security, and innovation, we transform your ideas into powerful mobile solutions that engage users and accelerate growth.
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
              alt="Apps Illustration"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
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
                src={android}
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
                We provide exceptional services tailored to your needs with cutting-edge technology and expert team
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
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
              src={apps}
              alt="Apps Illustration"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {appServices.map(({ title, desc, price, icon }, index) => (
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
              custom={index}
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
                className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 whitespace-pre-line mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {desc}
              </motion.p>
                <div className="font-bold text-green-600 mb-3">{price}</div>
                <a
                  href="https://calendar.app.google/vX3iT9r8XvV9bUqr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 inline-block text-center text-sm"
                >
                  Book a Strategy Call
                </a>
              {/* Hover effect line */}
              <motion.div
                className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full"
                whileHover={{ width: "50%" }}
                transition={{ duration: 0.3 }}
              />
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
                <div className="font-bold text-green-600 mb-4">{price}</div>
                <ul className="text-left list-disc list-inside space-y-1 mb-4">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={
                    index === 0
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20am%20interested%20in%20TechieHelp%27s%20Basic%20Plan.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20get%20started."
                      : index === 1
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20TechieHelp%27s%20Standard%20Plan.%20Please%20provide%20the%20complete%20information%20and%20benefits."
                      : "https://wa.me/917673825079?text=Hi%2C%20I%27m%20interested%20in%20TechieHelp%27s%20Premium%20Plan.%20Could%20you%20please%20guide%20me%20through%20the%20features%2C%20pricing%2C%20and%20enrollment%20process%3F"
                  }
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

export default AppDevelopmentServices;
