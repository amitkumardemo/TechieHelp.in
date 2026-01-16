import React, { useState, useMemo } from 'react';
import DotGrid from './DotGrid';
import { motion } from 'framer-motion';
import { AmitPhoto, kameshwarPatel, SupriyaJalani, AdityaKumar, MdAmzad } from '../assets/index.js';

export const employeeData = [
  {
    id: 1,
    fullName: "Amit Kumar",
    role: "Founder & CEO",
    profileImage: AmitPhoto,
    linkedInProfile: "https://www.linkedin.com/in/amit-kumar-686196225/",
    githubProfile: "https://github.com/amitkumardemo",
    experience: "2+ years in tech industry",
    profilePath: "/employee/amit-kumar"
  },
  {
    id: 2,
    fullName: "Kameshwar Patel",
    role: "Frontend Developer",
    profileImage: kameshwarPatel,
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    experience: "Fresher",
    profilePath: "/employee/kameshwar-patel"
  },
  {
    id: 3,
    fullName: "Supriya Jalani",
    role: "Employee",
    profileImage: SupriyaJalani,
    linkedInProfile: "https://www.linkedin.com/in/supriya-jalani",
    githubProfile: "https://github.com/Suprirya-Jalani",
    experience: "Fresher",
    profilePath: "/employee/supriya-jalani"
  },
  {
    id: 4,
    fullName: "Aditya Kumar",
    role: "Content & Media Specialist",
    profileImage: AdityaKumar,
    linkedInProfile: "https://www.linkedin.com/in/aditya-kumar-40a256291",
    githubProfile: "https://github.com/adityakumr03",
    experience: "Fresher",
    profilePath: "/employee/aditya-kumar"
  },
  {
    id: 5,
    fullName: "Md Amzad",
    role: "AI/ML Developer",
    profileImage: MdAmzad,
    linkedInProfile: "https://www.linkedin.com/in/md-amzad-b8547a296",
    githubProfile: "https://github.com/Md-Amzad-313",
    experience: "Fresher",
    profilePath: "/employee/md-amzad"
  }
];

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = useMemo(() => {
    return employeeData.filter(employee =>
      employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#5227FF"
          activeColor="#00D9FF"
          proximity={100}
          shockRadius={150}
          shockStrength={3}
          resistance={500}
          returnDuration={1.2}
        />
      </div>

      <div className="relative z-10 min-h-screen pt-32">
        <div className="container mx-auto px-4 py-12">

          <motion.div
            className="text-center mb-20 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                Meet Our Team
              </motion.h2>

              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Our diverse team of passionate professionals brings together expertise in technology, design, and innovation. Each member contributes unique skills and perspectives to deliver exceptional solutions for our clients.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              TechieHelp Employees
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Meet the talented professionals driving innovation at TechieHelp
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <input
                type="text"
                placeholder="Search by name, role, or employee ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 placeholder-gray-400 focus:outline-none focus:border-purple-400 w-full max-w-md text-white"
              />
            </motion.div>
          </motion.div>

          {/* Employee Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredEmployees.map((employee) => (
              <motion.div
                key={employee.id}
                className="p-4 rounded-lg shadow-lg hover:shadow-blue-600/70 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-purple-900 via-blue-900 to-black"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex flex-col items-center rounded-lg p-6 border border-blue-700 bg-gradient-to-r from-purple-700 via-blue-700 to-black shadow-lg relative">
                  <div className="relative">
                    <img
                      src={employee.profileImage}
                      alt={employee.fullName}
                      className="w-28 h-28 rounded-full border-4 border-blue-500 mb-4"
                    />
                    {/* Verified Blue Tick */}
                    <div className="absolute top-0 right-0 bg-white rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{`Name: ${employee.fullName}`}</h3>
                  <p className="text-gray-300">{`Employee ID: ${employee.id}`}</p>
                  <p className="text-gray-300">{`Role: ${employee.role}`}</p>
                  <p className="text-gray-300">{`Experience: ${employee.experience}`}</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={employee.profilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-500/50 text-white"
                  >
                    View Profile
                  </a>
                  <a
                    href={employee.linkedInProfile || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition shadow-md shadow-blue-600/60 text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={employee.githubProfile || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-900 rounded-full hover:bg-blue-950 transition shadow-md shadow-blue-700/70 text-white"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
