import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { automation, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Workflow Automation",
    description:
      "Automate your business workflows to increase efficiency and reduce manual effort.",
  },
  {
    id: 2,
    title: "CRM & HR Tools",
    description:
      "Integrate automation with CRM and HR systems for seamless operations.",
  },
  {
    id: 3,
    title: "Email & Task Bots",
    description:
      "Deploy bots to handle email management and task automation effectively.",
  },
  {
    id: 4,
    title: "Custom Automation Solutions",
    description:
      "Tailor automation solutions to your unique business processes and needs.",
  },
  {
    id: 5,
    title: "Scalability & Flexibility",
    description:
      "Design automation systems that grow with your business and adapt to changes.",
  },
  {
    id: 6,
    title: "Integration Support",
    description:
      "Seamlessly connect automation tools with your existing software ecosystem.",
  },
  {
    id: 7,
    title: "Security & Compliance",
    description:
      "Ensure your automation processes comply with industry standards and regulations.",
  },
  {
    id: 8,
    title: "24/7 Monitoring & Support",
    description:
      "Continuous monitoring and support to keep your automation running smoothly.",
  },
];

const aiAutomationServices = [
  {
    title: "Business Workflow Automation",
    desc: `Automate repetitive business processes to improve efficiency and accuracy.

Includes:

Process mapping

Automation design

Implementation & testing`,
    price: "₹ 25,000",
  },
  {
    title: "CRM Automation",
    desc: `Integrate and automate customer relationship management tasks.

Includes:

Lead management

Customer segmentation

Automated follow-ups`,
    price: "₹ 20,000",
  },
  {
    title: "HR Process Automation",
    desc: `Streamline HR tasks such as onboarding, payroll, and attendance.

Includes:

Employee data management

Payroll automation

Leave management`,
    price: "₹ 22,000",
  },
  {
    title: "Email & Task Automation",
    desc: `Automate email responses and task assignments to boost productivity.

Includes:

Email filtering

Auto-responses

Task scheduling`,
    price: "₹ 18,000",
  },
  {
    title: "Custom Bot Development",
    desc: `Develop custom bots to automate specific tasks and workflows.

Includes:

Requirement analysis

Bot development

Deployment & support`,
    price: "₹ 30,000",
  },
  {
    title: "Integration Services",
    desc: `Connect automation tools with your existing platforms and software.

Includes:

API integration

System compatibility

Testing & validation`,
    price: "₹ 15,000",
  },
  {
    title: "Monitoring & Maintenance",
    desc: `Ensure smooth operation of automation systems with ongoing support.

Includes:

Performance tracking

Issue resolution

Updates & upgrades`,
    price: "₹ 12,000",
  },
  {
    title: "Consultation & Strategy",
    desc: `Expert advice on automation implementation and optimization.

Includes:

Needs assessment

Strategy development

Roadmap planning`,
    price: "₹ 15,000",
  },
  {
    title: "Scalability Planning",
    desc: `Plan for scaling automation solutions as your business grows.

Includes:

Capacity planning

Resource allocation

Load balancing`,
    price: "₹ 20,000",
  },
  {
    title: "Security & Compliance Audits",
    desc: `Regular audits to ensure automation systems meet security and compliance standards.

Includes:

Vulnerability assessments

Compliance checks

Remediation planning`,
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

const AIAutomationServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">AI Automation Solutions</h1>
            <p className="text-lg mb-6">
              Enhance your business processes with AI-powered workflow automation, CRM and HR tool integration, and task bots.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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
              src={automation}
              alt="AI Automation Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI Automation?</h2>
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
              Our AI Automation Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we provide comprehensive AI automation solutions to streamline your business processes and improve efficiency.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={automation}
              alt="AI Automation Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiAutomationServices.map(({ title, desc, price }, index) => (
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
              Leveraging AI-powered Automation Technologies
            </h1>
            <p className="text-lg mb-6">
              We use state-of-the-art AI and automation tools to deliver scalable and efficient solutions tailored to your business needs.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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
              src={automation}
              alt="AI Automation Illustration"
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
                "Workflow automation setup",
                "CRM & HR tool integration",
                "Email & task bot deployment",
                "Monthly performance reports",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹24999",
              features: [
                "Comprehensive automation solutions",
                "Custom bot development",
                "Integration services",
                "Advanced analytics",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹39999",
              features: [
                "End-to-end automation lifecycle management",
                "Dedicated support team",
                "Scalability planning",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20AI%20Automation%20Services.%20Please%20provide%20more%20details."
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

export default AIAutomationServices;
