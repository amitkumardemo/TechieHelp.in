import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaEye,
  FaBug,
  FaRocket,
  FaShieldAlt,
  FaSave,
  FaEdit,
  FaClock,
  FaChartBar,
  FaCog,
  FaHeadset,
  FaServer,
  FaSync,
  FaGraduationCap,
  FaRoad,
  FaHandshake
} from "react-icons/fa";
import { maintance, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

const features = [
  {
    id: 1,
    title: "Ongoing Technical Help",
    description:
      "Continuous support to keep your website and applications running smoothly.",
    icon: <FaTools className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Site Uptime Monitoring",
    description:
      "Proactive monitoring to ensure your site is always available to your users.",
    icon: <FaEye className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Bug Fixes",
    description:
      "Timely identification and resolution of bugs to maintain optimal performance.",
    icon: <FaBug className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Regular updates and optimizations to keep your site fast and efficient.",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Security Updates",
    description:
      "Implementing the latest security patches to protect your digital assets.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Backup & Recovery",
    description:
      "Scheduled backups and quick recovery options to prevent data loss.",
    icon: <FaSave className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Content Updates",
    description:
      "Keep your website content fresh and relevant with regular updates.",
    icon: <FaEdit className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "24/7 Support",
    description:
      "Round-the-clock support to address any issues promptly.",
    icon: <FaClock className="w-6 h-6" />,
  },
];

const maintenanceServices = [
  {
    title: "Technical Support",
    desc: `Provide ongoing technical assistance for your website and applications.

Includes:

Issue diagnosis

Troubleshooting

Resolution support`,
    price: "₹ 8,000",
    icon: <FaHeadset className="w-6 h-6" />,
  },
  {
    title: "Uptime Monitoring",
    desc: `Monitor your website’s availability and performance continuously.

Includes:

Real-time alerts

Downtime reports

Performance tracking`,
    price: "₹ 6,000",
    icon: <FaChartBar className="w-6 h-6" />,
  },
  {
    title: "Bug Fixing",
    desc: `Identify and fix bugs to ensure smooth operation.

Includes:

Bug tracking

Priority fixing

Testing and validation`,
    price: "₹ 7,000",
    icon: <FaBug className="w-6 h-6" />,
  },
  {
    title: "Performance Optimization",
    desc: `Optimize website speed and responsiveness.

Includes:

Code optimization

Caching strategies

Load testing`,
    price: "₹ 9,000",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    title: "Security Patching",
    desc: `Apply security updates to protect against vulnerabilities.

Includes:

Patch management

Vulnerability scanning

Security audits`,
    price: "₹ 8,500",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: "Backup & Recovery",
    desc: `Regular backups and quick recovery options.

Includes:

Scheduled backups

Data restoration

Disaster recovery planning`,
    price: "₹ 7,500",
    icon: <FaSave className="w-6 h-6" />,
  },
  {
    title: "Content Management",
    desc: `Update and manage website content regularly.

Includes:

Content updates

SEO content optimization

Media management`,
    price: "₹ 6,500",
    icon: <FaEdit className="w-6 h-6" />,
  },
  {
    title: "24/7 Support",
    desc: `Round-the-clock support for urgent issues.

Includes:

Helpdesk access

Emergency response

Issue escalation`,
    price: "₹ 10,000",
    icon: <FaClock className="w-6 h-6" />,
  },
  {
    title: "Analytics & Reporting",
    desc: `Provide insights on website performance and user behavior.

Includes:

Traffic analysis

Conversion tracking

Monthly reports`,
    price: "₹ 7,000",
    icon: <FaChartBar className="w-6 h-6" />,
  },
  {
    title: "Custom Maintenance Plans",
    desc: `Tailored maintenance packages to fit your specific needs.

Includes:

Flexible service options

Dedicated support

Regular reviews`,
    price: "₹ 12,000",
    icon: <FaCog className="w-6 h-6" />,
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

const MaintenanceSupportServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Maintenance & Support Services</h1>
            <p className="text-lg mb-6">
              We provide ongoing technical support, uptime monitoring, and bug fixes to ensure your digital assets perform flawlessly.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Maintenance%20%26%20Support%20Services.%20Please%20provide%20more%20details."
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
              src={maintance}
              alt="Maintenance & Support Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Maintenance & Support?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                {icon}
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
              Services We <span className="text-blue-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our Maintenance & Support Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we offer comprehensive maintenance and support services to keep your digital assets running smoothly and securely.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={maintance}
              alt="Maintenance & Support Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintenanceServices.map(({ title, desc, price, icon }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-4 mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{desc}</p>
              <div className="font-bold text-green-600 mb-4">{price}</div>
              <a
                href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Maintenance%20%26%20Support%20Services.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 text-sm">
                  Book a Strategy Call
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Used Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-blue-600">use?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Leveraging Technology for Reliable Maintenance
            </h1>
            <p className="text-lg mb-6">
              We use advanced monitoring and support tools to ensure your digital assets are secure, fast, and reliable.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Maintenance%20%26%20Support%20Services.%20Please%20provide%20more%20details."
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
              src={maintance}
              alt="Maintenance & Support Illustration"
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
                "Ongoing technical support",
                "Monthly uptime monitoring",
                "Bug fixes and patches",
                "Performance checks",
                "3 rounds of revisions",
              ],
              imgSrc: basic,
              alt: "Basic Plan",
            }, {
              title: "Standard Plan",
              price: "₹8999",
              features: [
                "Comprehensive maintenance",
                "Proactive monitoring",
                "Security updates",
                "Content updates",
                "5 rounds of revisions",
              ],
              imgSrc: classic,
              alt: "Standard Plan",
            }, {
              title: "Premium Plan",
              price: "₹13999",
              features: [
                "Full maintenance and support",
                "24/7 monitoring and alerts",
                "Priority bug fixes",
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
                  href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20Maintenance%20%26%20Support%20Services.%20Please%20provide%20more%20details."
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

export default MaintenanceSupportServices;
