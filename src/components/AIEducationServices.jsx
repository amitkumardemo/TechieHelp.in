import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { education, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "AI Tutors & Quiz Bots",
    description:
      "Develop AI-powered tutors and quiz bots to enhance personalized learning experiences.",
  },
  {
    id: 2,
    title: "Smart Grading Tools",
    description:
      "Implement intelligent grading systems to automate assessments and feedback.",
  },
  {
    id: 3,
    title: "Personalized Learning",
    description:
      "Create adaptive learning paths tailored to individual student needs and progress.",
  },
  {
    id: 4,
    title: "Content Recommendation",
    description:
      "Provide personalized content recommendations to improve learning outcomes.",
  },
  {
    id: 5,
    title: "Learning Analytics",
    description:
      "Analyze student data to identify trends and optimize teaching strategies.",
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Integrate AI education tools with existing learning management systems.",
  },
  {
    id: 7,
    title: "Scalability & Performance",
    description:
      "Design scalable AI education solutions optimized for performance.",
  },
  {
    id: 8,
    title: "Security & Compliance",
    description:
      "Ensure data privacy and compliance with educational standards.",
  },
];

const aiEducationServices = [
  {
    title: "AI Tutor Development",
    desc: `Build AI tutors that provide personalized instruction and feedback.

Includes:

Adaptive learning algorithms

Interactive lessons

Performance tracking`,
    price: "₹ 25,000",
  },
  {
    title: "Quiz Bot Solutions",
    desc: `Create quiz bots to automate assessments and provide instant feedback.

Includes:

Question generation

Automated grading

Result analytics`,
    price: "₹ 20,000",
  },
  {
    title: "Smart Grading Systems",
    desc: `Implement AI-powered grading tools to streamline evaluation.

Includes:

Essay scoring

Multiple-choice grading

Plagiarism detection`,
    price: "₹ 22,000",
  },
  {
    title: "Personalized Learning Paths",
    desc: `Design adaptive learning paths tailored to individual student needs.

Includes:

Data-driven customization

Progress monitoring

Content recommendations`,
    price: "₹ 28,000",
  },
  {
    title: "Content Recommendation Engines",
    desc: `Develop AI systems to recommend relevant learning materials.

Includes:

User profiling

Recommendation algorithms

Feedback loops`,
    price: "₹ 18,000",
  },
  {
    title: "Learning Analytics Dashboards",
    desc: `Create dashboards to visualize student performance and engagement.

Includes:

Data visualization

KPI tracking

User access control`,
    price: "₹ 20,000",
  },
  {
    title: "Integration Services",
    desc: `Integrate AI education tools with existing LMS and platforms.

Includes:

API development

System compatibility

Testing & validation`,
    price: "₹ 15,000",
  },
  {
    title: "Training & Support",
    desc: `Provide training and ongoing support for AI education solutions.

Includes:

User training

Technical support

Updates & upgrades`,
    price: "₹ 12,000",
  },
  {
    title: "Security & Compliance Audits",
    desc: `Ensure AI education tools meet security and regulatory standards.

Includes:

Audit planning

Risk assessment

Remediation`,
    price: "₹ 18,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert guidance on AI education technology adoption and strategy.

Includes:

Needs assessment

Roadmap development

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

const AIEducationServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">AI for Education Services</h1>
            <p className="text-lg mb-6">
              Build AI-powered educational tools including tutors, quiz bots, smart grading, and personalized learning systems.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
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
              src={education}
              alt="AI for Education Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI for Education?</h2>
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
              Our AI for Education Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide AI-powered educational solutions to enhance learning and assessment.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={education}
              alt="AI for Education Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiEducationServices.map(({ title, desc, price }, index) => (
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
              Leveraging AI Technologies for Education
            </h1>
            <p className="text-lg mb-6">
              We use advanced AI tools and platforms to deliver personalized and effective educational solutions.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
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
              src={education}
              alt="AI for Education Illustration"
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
                "AI tutor development",
                "Quiz bot solutions",
                "Smart grading systems",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹29999",
              features: [
                "Personalized learning paths",
                "Content recommendation engines",
                "Learning analytics dashboards",
                "Quarterly performance reviews",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹44999",
              features: [
                "Full AI education solutions",
                "Integration support",
                "Training & support",
                "Security & compliance audits",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Education%20Services.%20Please%20provide%20more%20details."
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

export default AIEducationServices;
