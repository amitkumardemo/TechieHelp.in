import React from "react";
import { motion } from "framer-motion";
import {
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
  FaGlobe,
  FaDatabase,
  FaShoppingCart,
  FaCogs,
  FaRocket,
  FaUser,
  FaNewspaper,
  FaUserGraduate,
  FaBuilding,
  FaChartLine,
  FaCalendarAlt,
  FaHandsHelping,
  FaFileAlt,
  FaUtensils,
  FaHome,
  FaBriefcase,
  FaPlane,
  FaCalendarCheck,
  FaRedo,
} from "react-icons/fa";

import {
  webDevelopment,
  basic,
  classic,
  premium,
  choose,
} from "../assets";

import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";

/* -------------------- FEATURES -------------------- */
const features = [
  {
    id: 1,
    title: "Experienced & Skilled Team",
    description:
      "Our developers, designers, and strategists are well-versed in modern technologies and frameworks, delivering high-quality solutions with industry best practices.",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Client-Centric Approach",
    description:
      "We listen first. Every project is customized to your specific goals, vision, and target audience — ensuring a personalized and impactful web presence.",
    icon: <FaHeadset className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Affordable & Transparent Pricing",
    description:
      "We offer competitive pricing for startups, students, and businesses — with no hidden charges and clear deliverables.",
    icon: <FaMoneyBillWave className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Fast Turnaround Time",
    description:
      "We value your time. Our streamlined development process ensures timely delivery without compromising on quality.",
    icon: <FaClock className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Mobile & SEO-Friendly Designs",
    description:
      "We build websites that look great and perform well across all devices — with built-in SEO practices to help your site rank better.",
    icon: <FaMobile className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "End-to-End Service",
    description:
      "From design to deployment, domain to hosting, and code to content — we provide complete web solutions.",
    icon: <FaServer className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Support & Maintenance",
    description:
      "Enjoy free bug fixes, content updates, and premium post-launch support.",
    icon: <FaTools className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Custom Web Development",
    description:
      "Responsive, SEO-friendly, and high-performance websites tailored to your needs.",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "Modern Tools & Tech Stack",
    description:
      "React, Node.js, Firebase, MongoDB, Tailwind CSS, and more.",
    icon: <FaLaptopCode className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "100% Satisfaction Guarantee",
    description:
      "We focus on long-term relationships and complete client satisfaction.",
    icon: <FaHeart className="w-6 h-6" />,
  },
];

/* -------------------- SERVICES -------------------- */
const webServices = [
  {
    title: "Static Website Development",
    desc: `Up to 5 responsive pages\nContact form\nSEO-friendly design`,
    price: "₹ 10,000",
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    title: "Dynamic Website Development",
    desc: `Admin dashboard\nDatabase connectivity\nLogin system`,
    price: "₹ 20,000",
    icon: <FaDatabase className="w-6 h-6" />,
  },
  {
    title: "E-Commerce Website",
    desc: `Product pages\nShopping cart\nPayment integration`,
    price: "₹ 30,000",
    icon: <FaShoppingCart className="w-6 h-6" />,
  },
  {
    title: "Custom Web Applications",
    desc: `CRM, CMS, Dashboards\nAnalytics & reports`,
    price: "₹ 40,000",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    title: "Landing Pages",
    desc: `High conversion design\nLead capture\nCTA buttons`,
    price: "₹ 15,000",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    title: "Portfolio Website",
    desc: `Projects\nResume download\nContact section`,
    price: "₹ 15,000",
    icon: <FaUser className="w-6 h-6" />,
  },
  {
    title: "Blog / News Website",
    desc: `Admin panel\nSEO tools\nComments`,
    price: "₹ 20,000",
    icon: <FaNewspaper className="w-6 h-6" />,
  },
  {
    title: "Educational Website",
    desc: `Courses\nPayments\nVideo content`,
    price: "₹ 25,000",
    icon: <FaUserGraduate className="w-6 h-6" />,
  },
  {
    title: "Admin Dashboard",
    desc: `Analytics\nUser roles\nSecure login`,
    price: "₹ 30,000",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    title: "Appointment Booking",
    desc: `Time slots\nNotifications\nAdmin panel`,
    price: "₹ 20,000",
    icon: <FaCalendarAlt className="w-6 h-6" />,
  },
  {
    title: "NGO / Charity Website",
    desc: `Donations\nVolunteers\nGallery`,
    price: "₹ 20,000",
    icon: <FaHandsHelping className="w-6 h-6" />,
  },
];

/* -------------------- ANIMATION -------------------- */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const WebDevelopmentServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* content unchanged */}
      <Platform />
      <OurProcess />
      <ServiceFAQ />
    </div>
  );
};

export default WebDevelopmentServices;
