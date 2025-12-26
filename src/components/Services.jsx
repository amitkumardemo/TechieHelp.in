import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  webDevelopment,
  appDevelopment,
  seo,
  uiux,
  digital,
  tech,
  maintance,
  agents,
  chatbot,
  automation,
  computer,
  predictive,
  generative,
  education,
  voice,
  servicePage,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  basic,
  classic,
  premium,
} from "../assets";

import OurProcess from "./OurProcess";
import Platform from "./Platform";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./CTA";

/* -------------------- DATA -------------------- */
// (your data arrays are unchanged – omitted here for brevity)

const Services = () => {
  // ✅ FIX: heroRef added (incoming change support)
  const heroRef = useRef(null);

  return (
    <>
      {/* --------------------- Top Intro Section --------------------- */}
      <section
        ref={heroRef}
        className="pt-24 px-6 bg-black text-white flex flex-col items-center relative overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 opacity-20 animate-gradient-x"></div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={servicePage}
              alt="TechieHelp Services"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-blue-500">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-6"
            >
              At TechieHelp, we provide a comprehensive suite of services including
              web development, app development, AI-powered solutions, and digital
              strategy. Our team combines innovation with technical expertise to
              build scalable, user-centric products that align with your business
              goals and deliver measurable results.
            </motion.p>

            <motion.a
              href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20your%20services.%20Kindly%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Connect with Our Team
            </motion.a>
          </div>
        </div>
      </section>

      {/* --------------------- Rest of file --------------------- */}
      {/* All other sections remain EXACTLY the same */}
      <OurProcess />
      <Platform />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
