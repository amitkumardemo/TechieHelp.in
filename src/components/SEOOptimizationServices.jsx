import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaSearch,
  FaChartLine,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";
import { seo, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Organic Traffic Boost",
    description:
      "Increase your website’s visibility and attract more organic visitors through proven SEO strategies.",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Keyword Strategy",
    description:
      "Target the right keywords to reach your ideal audience and improve search engine rankings.",
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Technical SEO",
    description:
      "Optimize your website’s technical aspects to ensure fast loading, mobile-friendliness, and crawlability.",
    icon: <FaCog className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Content Optimization",
    description:
      "Enhance your website content to be engaging, relevant, and SEO-friendly.",
    icon: <FaFileAlt className="w-6 h-6" />
  },
];

const seoServices = [
  {
    title: "On-Page SEO",
    desc: `Optimize individual web pages to rank higher and earn more relevant traffic.

Includes:

Meta tags optimization

Header tags structuring

Image alt text optimization`,
    price: "₹ 12,000",
  },
  {
    title: "Off-Page SEO",
    desc: `Improve your website’s authority and reputation through external efforts.

Includes:

Backlink building

Social media marketing

Guest blogging`,
    price: "₹ 15,000",
  },
  {
    title: "Technical SEO",
    desc: `Ensure your website meets the technical requirements of search engines.

Includes:

Site speed optimization

Mobile-friendliness

XML sitemap and robots.txt`,
    price: "₹ 18,000",
  },
  {
    title: "Local SEO",
    desc: `Optimize your online presence to attract local customers.

Includes:

Google My Business setup

Local citations

Review management`,
    price: "₹ 10,000",
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

const SEOOptimizationServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">SEO Optimization Services</h1>
            <p className="text-lg mb-6">
              Enhance your website’s search engine ranking and drive more organic traffic with our expert SEO services.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20SEO%20Optimization%20Services.%20Please%20provide%20more%20details."
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
              src={seo}
              alt="SEO Optimization Illustration"
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
                src={seo}
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
                Why Choose Our SEO Optimization?
              </motion.h2>
              <motion.p
                className="mt-4 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We provide exceptional SEO services tailored to your needs with cutting-edge technology and expert team
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
              Services We <span className="text-red-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our SEO Optimization Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive SEO services to improve your online visibility and drive targeted traffic.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={seo}
              alt="SEO Optimization Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoServices.map(({ title, desc, price }, index) => (
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
              Driving Innovation and Results
            </h1>
            <p className="text-lg mb-6">
              We utilize the latest SEO tools and techniques to maximize your website’s performance and ranking.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20SEO%20Optimization%20Services.%20Please%20provide%20more%20details."
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
                "Keyword research and analysis",
                "On-page SEO optimization",
                "Basic backlink building",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹7999",
              features: [
                "Comprehensive SEO strategy",
                "Technical SEO improvements",
                "Content optimization",
                "Local SEO setup",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹11999",
              features: [
                "Full SEO audit and implementation",
                "Advanced backlink strategy",
                "Content marketing",
                "Conversion rate optimization",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20SEO%20Optimization%20Services.%20Please%20provide%20more%20details."
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

export default SEOOptimizationServices;
