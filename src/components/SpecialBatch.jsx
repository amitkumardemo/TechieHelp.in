import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"; // Assuming Footer is exported from Footer.jsx
import { hod, swag } from "../assets"; // Reusing existing assets for consistency

const SpecialBatch = () => {
  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 px-4 bg-gradient-to-br from-primary via-blue-900 to-purple-900">
        <div className="container mx-auto">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4"
              >
                🚀 Limited Time Special Batch
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transform Your Career with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Real-World Projects</span>
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Join our exclusive Special Batch Internship program and gain hands-on experience working on live client projects. Build your portfolio, learn from industry experts, and launch your tech career with confidence.
              </motion.p>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎁</span>
                  </div>
                  <span className="text-gray-300">Welcome Kit upon enrollment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <span className="text-gray-300">Work on real client projects (no dummy tasks)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <span className="text-gray-300">Industry-ready skills through practical exposure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👨‍🏫</span>
                  </div>
                  <span className="text-gray-300">Mentorship from experienced professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📜</span>
                  </div>
                  <span className="text-gray-300">Internship Certificate from TechieHelp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💰</span>
                  </div>
                  <span className="text-gray-300">Stipend opportunity (based on client satisfaction)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🌐</span>
                  </div>
                  <span className="text-gray-300">Your Profile Featured on TechieHelp's Official Website</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                  <span className="text-gray-300">Exclusive LinkedIn Badge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🆔</span>
                  </div>
                  <span className="text-gray-300">TechieHelp Student ID Card</span>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-sm text-gray-400">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">12LPA</div>
                  <div className="text-sm text-gray-400">Highest Package</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://forms.gle/MUSBDGVVap4eqH418"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-lg text-center"
                >
                  Enroll Now - ₹3000
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition text-center"
                >
                  Learn More
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-sm text-gray-400 mt-4"
              >
                ⏰ Limited seats available. Original price: ₹5000 | Special offer ends soon!
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={hod}
                  alt="Special Batch Internship HOD"
                  className="w-full h-full object-contain"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                >
                  <div className="text-sm font-semibold text-gray-800">Live Projects</div>
                  <div className="text-xs text-gray-600">Real Client Work</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-8 left-8 bg-blue-500/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-white"
                >
                  <div className="text-sm font-semibold">Expert Mentors</div>
                  <div className="text-xs">Industry Leaders</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Details Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Why Join This Internship?
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
          >
            {[
              { icon: "💼", title: "Real Client Projects", desc: "Learn by doing on actual client work" },
              { icon: "🎯", title: "Industry-Ready Experience", desc: "Gain practical skills for your career" },
              { icon: "📦", title: "Welcome Kit Included", desc: "Get exclusive merchandise and resources" },
              { icon: "💰", title: "Special Pricing", desc: "Original ₹5000 | Limited Offer: ₹3000" },
              { icon: "👨‍🏫", title: "Professional Mentorship", desc: "Guidance from industry experts" }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white/20"
              >
                <motion.span className="text-4xl mb-4 block" whileHover={{ scale: 1.2 }}>
                  {item.icon}
                </motion.span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Domains Available Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Available Domains
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: "📱", title: "Android Developer", desc: "Build mobile applications for Android platform using modern technologies." },
              { icon: "💻", title: "Frontend Developer", desc: "Create stunning user interfaces and experiences with web technologies." },
              { icon: "🔧", title: "Full Stack Developer", desc: "Master both frontend and backend development for complete web solutions." }
            ].map((domain, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white/20 text-center"
              >
                <motion.span className="text-6xl mb-6 block" whileHover={{ scale: 1.2 }}>
                  {domain.icon}
                </motion.span>
                <h3 className="text-2xl font-bold mb-4">{domain.title}</h3>
                <p className="text-gray-300 leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Who Is Eligible?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white/20"
          >
            <motion.p
              className="text-xl mb-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              This internship is open to students from any academic year who possess a foundational understanding of the chosen domain. Whether you're in your first year or final year, if you have basic knowledge and a passion for learning, you're welcome to join our program.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 font-semibold">
                Any Year Students
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 font-semibold">
                Basic Domain Knowledge
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 font-semibold">
                Passion for Learning
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <div className="relative max-w-4xl mx-auto space-y-8">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full rounded-full"></div>
            {[
              { step: "1. Enroll & Get Welcome Kit", desc: "Sign up and receive your exclusive internship kit to kickstart your journey." },
              { step: "2. Get Assigned Client Projects", desc: "Dive into real-world projects tailored to build your skills." },
              { step: "3. Work with Mentors & Submit Work", desc: "Collaborate with experts, get feedback, and showcase your progress." },
              { step: "4. Gain Experience & Certificate", desc: "Complete projects, earn certification, and boost your portfolio." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 shadow-xl relative text-white"
                >
                  {/* Step dot */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}></div>
                  <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Limited Time Offer – Enroll Today!
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Secure your spot in the Special Batch at the discounted price of ₹3000 (Original ₹5000). 
            Deadline: [Optional: Add deadline here, e.g., End of Month]
          </motion.p>
          <motion.a
            href="https://forms.gle/MUSBDGVVap4eqH418"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition shadow-lg"
          >
            Enroll Now
          </motion.a>
          {/* Welcome Kit Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <img
              src={swag} // Reusing swag for welcome kit illustration
              alt="Welcome Kit"
              className="max-w-md rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SpecialBatch;
