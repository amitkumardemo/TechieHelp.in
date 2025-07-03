import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { predictive, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Data Modeling",
    description:
      "Build predictive models to analyze data and forecast trends effectively.",
  },
  {
    id: 2,
    title: "Forecasting Trends",
    description:
      "Use advanced analytics to predict market and customer behavior.",
  },
  {
    id: 3,
    title: "Behavior Insights",
    description:
      "Gain actionable insights into customer behavior to drive business decisions.",
  },
  {
    id: 4,
    title: "Custom Analytics Solutions",
    description:
      "Tailor predictive analytics to your specific business needs.",
  },
  {
    id: 5,
    title: "Real-time Data Processing",
    description:
      "Analyze streaming data for timely decision-making.",
  },
  {
    id: 6,
    title: "Scalability & Performance",
    description:
      "Design scalable analytics systems optimized for performance.",
  },
  {
    id: 7,
    title: "Integration Support",
    description:
      "Integrate analytics solutions with your existing data infrastructure.",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with industry standards.",
  },
];

const predictiveAnalyticsServices = [
  {
    title: "Data Modeling & Forecasting",
    desc: `Develop predictive models to forecast trends and behaviors.

Includes:

Statistical modeling

Machine learning algorithms

Validation & testing`,
    price: "₹ 30,000",
  },
  {
    title: "Customer Behavior Analytics",
    desc: `Analyze customer data to gain insights and improve engagement.

Includes:

Segmentation

Churn prediction

Personalization`,
    price: "₹ 28,000",
  },
  {
    title: "Real-time Analytics",
    desc: `Process streaming data for immediate insights and actions.

Includes:

Data ingestion

Stream processing

Alerting`,
    price: "₹ 25,000",
  },
  {
    title: "Custom Analytics Dashboards",
    desc: `Create interactive dashboards for data visualization and reporting.

Includes:

Dashboard design

KPI tracking

User access control`,
    price: "₹ 22,000",
  },
  {
    title: "Big Data Integration",
    desc: `Integrate predictive analytics with big data platforms.

Includes:

Data pipeline setup

Data lake integration

Scalable storage`,
    price: "₹ 35,000",
  },
  {
    title: "AI-powered Insights",
    desc: `Leverage AI to uncover hidden patterns and opportunities.

Includes:

Deep learning models

Natural language processing

Recommendation systems`,
    price: "₹ 40,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on predictive analytics adoption and strategy.

Includes:

Needs assessment

Roadmap development

Implementation planning`,
    price: "₹ 18,000",
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for analytics solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 15,000",
  },
  {
    title: "Compliance & Security Audits",
    desc: `Ensure analytics systems meet regulatory and security standards.

Includes:

Audit planning

Risk assessment

Remediation`,
    price: "₹ 20,000",
  },
  {
    title: "Performance Optimization",
    desc: `Optimize analytics models and infrastructure for speed and accuracy.

Includes:

Model tuning

Hardware acceleration

Load balancing`,
    price: "₹ 25,000",
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

const PredictiveAnalyticsServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Predictive Analytics Services</h1>
            <p className="text-lg mb-6">
              Leverage data modeling and forecasting to gain deep insights and make informed business decisions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Predictive%20Analytics%20Services.%20Please%20provide%20more%20details."
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
              src={predictive}
              alt="Predictive Analytics Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Predictive Analytics?</h2>
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
              Our Predictive Analytics Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide advanced predictive analytics solutions to help you make data-driven decisions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={predictive}
              alt="Predictive Analytics Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {predictiveAnalyticsServices.map(({ title, desc, price }, index) => (
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
              Leveraging Advanced Analytics Technologies
            </h1>
            <p className="text-lg mb-6">
              We use cutting-edge analytics tools and machine learning models to deliver actionable insights.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Predictive%20Analytics%20Services.%20Please%20provide%20more%20details."
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
              src={predictive}
              alt="Predictive Analytics Illustration"
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
                "Data modeling and forecasting",
                "Basic customer behavior analytics",
                "Real-time data processing",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹39999",
              features: [
                "Advanced predictive models",
                "Customer segmentation",
                "Custom analytics dashboards",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹59999",
              features: [
                "Full predictive analytics solutions",
                "AI-powered insights",
                "Big data integration",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Predictive%20Analytics%20Services.%20Please%20provide%20more%20details."
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

export default PredictiveAnalyticsServices;
