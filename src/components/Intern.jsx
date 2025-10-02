import React, { useState, useMemo } from 'react';
import DotGrid from './DotGrid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  aarshdeepKaur,
  abhayRajSingh,
  ritikaKasat,
  rohanThurady,
  rohitSharm,
  sagarKumar,
  sasvanthuG,
  simranKanwar,
  tanuSingh,
  tejabhuvaneswarideviDuba,
  simran,
  sasvanthu,
  Ankit,
} from '../assets/index.js';

const studentData = [
  {
    timestamp: "7/21/2025 14:30:09",
    fullName: "Sasvanthu G",
    email: "sasvanthu.g.2006@gmail.com",
    collegeName: "SIMATS Engineering",
    techieHelpStudentID: "TECHIE310559",
    linkedInProfile: "https://www.linkedin.com/in/sasvanthu-g-b104b632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/sasvanthu",
    address: "Chennai",
    phoneNumber: "8610873714",
    internshipDomain: "Front end Development",
    currentYearBatch: "2nd",
    passingYear: "2028",
    skills: "Artificial intelligence",
    personalQuote: "BTech IT Aspirant",
    profileImage: sasvanthuG,
    idCardStyle: "blue-gradient",
    cardColor: "from-blue-600 to-blue-800",
    profilePath: "/intern/sasvanthu-g"
  },
  {
    timestamp: "7/21/2025 14:55:53",
    fullName: "Abhay Raj Singh",
    email: "abhayrajsingh28334@gmail.com",
    collegeName: "IILM University Greater Noida",
    techieHelpStudentID: "TECHIE560518",
    linkedInProfile: "https://www.linkedin.com/in/abhay-raj-singh-6152ba27a/",
    githubProfile: "https://github.com/ABHAYRAJSINGH11",
    address: "Greater Noida, Uttarpradesh",
    phoneNumber: "9634189961",
    internshipDomain: "MERN STACK DEVELOPER",
    currentYearBatch: "3rd Year, 2023-2027",
    passingYear: "2027",
    skills: "HTML,CSS,JAVASCRIPT,JAVA",
    personalQuote: "Motivated Computer Science undergraduate with practical experience in web development, software engineering, and artificial intelligence.",
    profileImage: abhayRajSingh,
    idCardStyle: "purple-gradient",
    cardColor: "from-purple-600 to-purple-800",
    profilePath: "/intern/abhay-raj-singh"
  },
  {
    timestamp: "7/21/2025 17:57:35",
    fullName: "DUBA TEJA BHUVANESWARI DEVI",
    email: "tejabhuvaneswaridevi@gmail.com",
    collegeName: "NATIONAL INSTITUTE OF TECHNOLOGY WARANGAL",
    techieHelpStudentID: "TECHIE454149",
    linkedInProfile: "https://www.linkedin.com/in/tbd-4847a12a0/",
    githubProfile: "https://github.com/bhuvi1906-git",
    address: "cheepurupalli, vizianagaram district, Andhra Pradesh",
    phoneNumber: "8885005619",
    internshipDomain: "FULL STACK DEVELOPER",
    currentYearBatch: "3rd YEAR ,2027 batch",
    passingYear: "2027",
    skills: "c,c++,python,HTML",
    personalQuote: "B.Tech Civil Engineering student at NIT Warangal with a strong foundation in structural and geotechnical engineering.",
    profileImage: tejabhuvaneswarideviDuba,
    idCardStyle: "green-gradient",
    cardColor: "from-green-600 to-green-800",
    profilePath: "/intern/teja-bhuvaneswari-devi"
  },
  {
    timestamp: "7/21/2025 18:03:42",
    fullName: "Sagar Kumar",
    email: "pandeysagar7991@gmail.com",
    collegeName: "Lakshmi Narain College of Technology Excellence Bhopal",
    techieHelpStudentID: "TECHIE439595",
    linkedInProfile: "https://www.linkedin.com/in/sagar-kumarcs/",
    githubProfile: "https://github.com/sagarkumar62",
    address: "Vill.:-Bodro, P.O.:-Bhendra, P.S.:- Nawadih, Dist.:- Bokaro Jharkhand 828401",
    phoneNumber: "6202823710",
    internshipDomain: "Web development",
    currentYearBatch: "2nd",
    passingYear: "2027",
    skills: "Web Development: HTML5, CSS3, JavaScript, React.js, Tailwind CSS",
    personalQuote: "I am a curious learner and aspiring web developer, passionate about building clean, interactive websites.",
    profileImage: sagarKumar,
    idCardStyle: "orange-gradient",
    cardColor: "from-orange-600 to-orange-800",
    profilePath: "/intern/sagar-kumar"
  },
  {
    timestamp: "7/21/2025 19:35:25",
    fullName: "Ritika kasat",
    email: "ritika.24jics166@jietjodhpur.ac.in",
    collegeName: "Jiet",
    techieHelpStudentID: "TECHIE650134",
    linkedInProfile: "https://www.linkedin.com/in/ritika-kasat-296a86333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "",
    address: "Jodhpur",
    phoneNumber: "lala laj pat rai colony,chotti idgha road,jodhpur",
    internshipDomain: "Frontend Development",
    currentYearBatch: "2 year 2C3 batch",
    passingYear: "2028",
    skills: "C, Python, HTML, CSS",
    personalQuote: "I'm RITIKA KASAT Currently pursuing B.Tech in CSE from JIET.",
    profileImage: ritikaKasat,
    idCardStyle: "pink-gradient",
    cardColor: "from-pink-600 to-pink-800",
    profilePath: "/intern/ritika-kasat"
  },
  {
    timestamp: "7/21/2025 20:05:30",
    fullName: "SIMRAN KANWAR",
    email: "simran.24jics181@jietjodhpur.ac.in",
    collegeName: "JIET",
    techieHelpStudentID: "TECHIE357794",
    linkedInProfile: "https://www.linkedin.com/in/simran-kanwar-9b4117335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/Simran-Kanwar-15",
    address: "JODHPUR",
    phoneNumber: "6367812002",
    internshipDomain: "WEB DEVELOPMENT",
    currentYearBatch: "2 YEAR & 2C3",
    passingYear: "2028",
    skills: "HTML, CSS, JavaScript, Python, C",
    personalQuote: "Simran Kanwar – Web Developer | Python Enthusiast | NCC Cadet",
    profileImage: simranKanwar,
    idCardStyle: "indigo-gradient",
    cardColor: "from-indigo-600 to-indigo-800",
    profilePath: "/intern/simran-kanwar"
  },
  {
    timestamp: "7/21/2025 20:56:53",
    fullName: "Aarshdeep Kaur",
    email: "aarshdeep.24jids001@jietjodhpur.ac.in",
    collegeName: "JIET UNIVERSE",
    techieHelpStudentID: "TECHIE787247",
    linkedInProfile: "https://www.linkedin.com/in/aarshdeep-kaur-5426a7333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "",
    address: "Jodhpur",
    phoneNumber: "B.J.S COLONY",
    internshipDomain: "Web development",
    currentYearBatch: "2nd year (3H2)",
    passingYear: "2028",
    skills: "C programming, Web development (Frontend), Video/Photo Editor",
    personalQuote: "Discipline and consistency is the key that opens every door",
    profileImage: aarshdeepKaur,
    idCardStyle: "teal-gradient",
    cardColor: "from-teal-600 to-teal-800",
    profilePath: "/intern/aarshdeep-kaur"
  },
  {
    timestamp: "7/21/2025 21:09:05",
    fullName: "Tanu Singh",
    email: "tanusinghmhp18@gmail.com",
    collegeName: "Ewing Christian College Prayagraj",
    techieHelpStudentID: "TECHIE822090",
    linkedInProfile: "https://www.linkedin.com/in/tanu-singh-763a49215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/Tanucoder-stack",
    address: "Jrahi Road Mihinpurwa Bahraich",
    phoneNumber: "9198277927",
    internshipDomain: "Information Technology",
    currentYearBatch: "Passout 2021",
    passingYear: "2021",
    skills: "Java, HTML, CSS, JavaScript, OOP, DBMS",
    personalQuote: "Completed B.Voc in IT from Ewing Christian College, passionate about creativity and innovation.",
    profileImage: tanuSingh,
    idCardStyle: "red-gradient",
    cardColor: "from-red-600 to-red-800",
    profilePath: "/intern/tanu-singh"
  },
  {
    timestamp: "7/21/2025 21:59:41",
    fullName: "Rohit Sharma",
    email: "rohit.24jics167@jietjodhpur.ac.in",
    collegeName: "JIET",
    techieHelpStudentID: "TECHIE323097",
    linkedInProfile: "https://www.linkedin.com/in/rohit-sharma-codes/",
    githubProfile: "https://github.com/NeonSync",
    address: "Gopal Bhawan, Inside Nagori Gate, Jodhpur",
    phoneNumber: "7619719601",
    internshipDomain: "Web Development",
    currentYearBatch: "2nd Year (C3)",
    passingYear: "2028",
    skills: "Python, HTML, CSS, Java, Computer skills",
    personalQuote: "Computer Science student passionate about building smart digital solutions.",
    profileImage: rohitSharm,
    idCardStyle: "yellow-gradient",
    cardColor: "from-yellow-600 to-yellow-800",
    profilePath: "/intern/rohit-sharma"
  },
  {
    timestamp: "7/21/2025 22:38:00",
    fullName: "Rohan T",
    email: "rohanptu97@gmail.com",
    collegeName: "Puducherry Technological University",
    techieHelpStudentID: "TECHIE121136",
    linkedInProfile: "https://www.linkedin.com/in/rohan-t-a6b860269",
    githubProfile: "",
    address: "Puducherry",
    phoneNumber: "9092023660",
    internshipDomain: "Front End Development",
    currentYearBatch: "2025 & July Batch",
    passingYear: "2025",
    skills: "Java and Python",
    personalQuote: "Passionate about frontend development and creating beautiful user experiences.",
    profileImage: rohanThurady,
    idCardStyle: "cyan-gradient",
    cardColor: "from-cyan-600 to-cyan-800",
    profilePath: "/intern/rohan-t"
  },
  {
  "timestamp": "20/08/2025",
  "fullName": "KAVIYARASAN P",
  "email": "",
  "collegeName": "PUDUCHERRY TECHNOLOGICAL UNIVERSITY",
  "techieHelpStudentID": "TECHIE418413",
  "linkedInProfile": "",
  "githubProfile": "",
  "address": "",
  "phoneNumber": "",
  "internshipDomain": "Front End Development",
  "currentYearBatch": "July 2025 Batch",
  "passingYear": "2025",
  "skills": "",
  "personalQuote": "",
  "profileImage": "",
  "idCardStyle": "default",
  "cardColor": "from-gray-600 to-gray-800",
  "profilePath": "/intern/kaviyaran-p"
},
  {
  "timestamp": "20/08/2025",
  "fullName": "GANGA DHAR SHARMA",
  "email": "2401109070@ptuniv.edu.in",
  "collegeName": "PUDUCHERRY TECHNOLOGICAL UNIVERSITY",
  "techieHelpStudentID": "TECHIE426947",
  "linkedInProfile": "",
  "githubProfile": "https://github.com/monkeykavi",
  "address": "Pondicherry ",
  "phoneNumber": "8883802327",
  "internshipDomain": "Front End Development",
  "currentYearBatch": "July 2025 Batch",
  "passingYear": "2025",
  "skills": "",
  "personalQuote": "",
  "profileImage": "",
  "idCardStyle": "default",
  "cardColor": "from-gray-600 to-gray-800",
  "profilePath": "/intern/ganga-dhar-sharma"
},
  {
    timestamp: "8/20/2025 20:06:40",
    fullName: "ANKIT KUMAR KESHARI",
    email: "ankitkeshari550@gmail.com",
    collegeName: "Indian Institute of Information Technology Dharwad",
    techieHelpStudentID: "TH123456",
    linkedInProfile: "https://www.linkedin.com/in/ankit-keshri-0150b12ba/",
    githubProfile: "https://github.com/AnkitKeshri018",
    address: "IIIT Dharwad ,Ittigatti Rd, near Sattur Colony, Karnataka 580009",
    phoneNumber: "9693594630",
    internshipDomain: "Frontend Web Development",
    currentYearBatch: "3rd Year Btech Computer Science",
    passingYear: "2027",
    skills: "Html ,CSS, Javascript,ReactJs, Tailwind Css, Bootstrap",
    personalQuote: "Web development is about solving problems step by step and making ideas work on the screen.",
    profileImage: Ankit,
    idCardStyle: "default",
    cardColor: "from-teal-600 to-teal-800",
    profilePath: "/intern/ankit-kumar-keshari"
  }

];


const Intern = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [viewMode, setViewMode] = React.useState('cards'); // 'cards' or 'id-cards'

  const filteredStudents = React.useMemo(() => {
    return studentData.filter(student =>
      student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.techieHelpStudentID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.internshipDomain.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen">
      {/* DotGrid Background - Fixed position behind everything */}
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
      
      {/* Content Overlay - Higher z-index */}
      <div className="relative z-10 min-h-screen pt-32">
        <div className="container mx-auto px-4 py-12">

          {/* Our Internship & Training Program Section */}
          <motion.div
            className="text-center mb-20 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Floating Background Elements */}
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

            {/* Main Title with Typing Effect */}
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
                Our Internship & Training Program
              </motion.h2>

              {/* Animated Underline */}
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Description with Word-by-Word Animation */}
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
                Welcome to the TechieHelp Internship and Training Program, a premier platform designed to bridge the gap between academic learning and industry requirements by providing hands-on experience, expert mentorship, and professional development opportunities.
              </motion.p>

              {/* Join Our Team Section with Unique Animations */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 100 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >




                  Join Our Team
                </motion.h3>

                {/* Animated Stats Cards */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  {[
                    { number: "1000+", label: "Interns Trained", color: "from-blue-500 to-cyan-500" },
                    { number: "100+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
                    { number: "99%", label: "Success Rate", color: "from-green-500 to-teal-500" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl bg-gradient-to-r ${stat.color} shadow-2xl relative overflow-hidden`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                    >
                      {/* Animated Background Pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />

                      <motion.div
                        className="text-center relative z-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 + index * 0.2, type: "spring" }}
                      >
                        <motion.div
                          className="text-4xl md:text-5xl font-bold text-white mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.2 + index * 0.2 }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-white/90 font-medium">{stat.label}</div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition mt-4"
              >
                <a href="https://drive.google.com/drive/folders/1RZNZqh30r5m22BulrzJthEnrb9aTiQrI?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Completion Certificate
                </a>
              </motion.button>
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
              TechieHelp Interns
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Meet our talented interns shaping the future of technology
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <input
                type="text"
                placeholder="Search by name, college, or domain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 placeholder-gray-400 focus:outline-none focus:border-purple-400 w-full max-w-md text-white"
              />
            </motion.div>

            {/* Enhanced Sliding Images Section with Unique Animations */}
            <motion.div
              className="mt-16 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Background Wave Animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
              >
                <motion.div
                  className="absolute top-1/2 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating Particles */}
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${20 + (i % 4) * 15}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <div className="flex justify-center items-center gap-12 overflow-hidden relative">
                {/* Left sliding images with enhanced animations */}
                <motion.div
                  className="flex gap-6"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                >
                  {studentData.slice(0, 3).map((student, index) => (
                    <motion.div
                      key={student.techieHelpStudentID}
                      className="relative group"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.5 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        z: 50,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.img
                        src={student.profileImage}
                        alt={student.fullName}
                        className="w-20 h-20 rounded-full border-3 border-blue-400 shadow-2xl relative z-10"
                        whileHover={{
                          borderColor: "#06b6d4",
                          boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)"
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 30px rgba(6, 182, 212, 0.5)",
                            "0 0 20px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Status Indicator with Pulse */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-3 border-white z-20"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-green-400 rounded-full"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>

                      {/* Floating Name Tag */}
                      <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                          {student.fullName.split(' ')[0]}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Center animated element with enhanced effects */}
                <motion.div
                  className="flex flex-col items-center relative"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8, type: "spring", stiffness: 150 }}
                >
                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                      borderRadius: '50%',
                      width: '120px',
                      height: '120px',
                    }}
                  />

                  {/* Pulsing Center Circle */}
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl relative z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 40px rgba(147, 51, 234, 0.7)",
                        "0 0 20px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 180,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>

                  <motion.p
                    className="text-sm text-gray-300 mt-4 font-medium text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                  >
                    <motion.span
                      animate={{
                        color: ["#9ca3af", "#60a5fa", "#9ca3af"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {studentData.length} Talented Interns
                    </motion.span>
                  </motion.p>
                </motion.div>

                {/* Right sliding images with enhanced animations */}
                <motion.div
                  className="flex gap-6"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                >
                  {studentData.slice(3, 6).map((student, index) => (
                    <motion.div
                      key={student.techieHelpStudentID}
                      className="relative group"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.5 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: -10,
                        z: 50,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.img
                        src={student.profileImage}
                        alt={student.fullName}
                        className="w-20 h-20 rounded-full border-3 border-purple-400 shadow-2xl relative z-10"
                        whileHover={{
                          borderColor: "#ec4899",
                          boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)"
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(147, 51, 234, 0.3)",
                            "0 0 30px rgba(236, 72, 153, 0.5)",
                            "0 0 20px rgba(147, 51, 234, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Status Indicator with Pulse */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-3 border-white z-20"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-green-400 rounded-full"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>

                      {/* Floating Name Tag */}
                      <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                          {student.fullName.split(' ')[0]}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Continuous Carousel Effect */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 text-sm text-gray-400"
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span>← Scroll to see more interns</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        {viewMode === 'cards' ? (
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
            {filteredStudents.map((student) => (
              <motion.div
                key={student.techieHelpStudentID}
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
                      src={student.profileImage}
                      alt={student.fullName}
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
                  <h3 className="text-xl font-bold text-white">{`Name: ${student.fullName}`}</h3>
                  <p className="text-gray-300">{`College Name: ${student.collegeName}`}</p>
                  <p className="text-gray-300">{`TechieHelp Student Id: ${student.techieHelpStudentID}`}</p>
                  <p className="text-gray-300">{`Internship Domain: ${student.internshipDomain}`}</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={student.profilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-500/50 text-white"
                  >
                    Visit Profile
                  </a>
                  <a
                    href={student.linkedInProfile || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition shadow-md shadow-blue-600/60 text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={student.githubProfile || '#'}
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.techieHelpStudentID}
                className="p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 flex flex-col items-center bg-black/70 rounded-lg p-6 border border-purple-700">
                  <img
                    src={student.profileImage}
                    alt={student.fullName}
                    className="w-20 h-20 rounded-full border-4 border-purple-500 mb-4"
                  />
                  <h3 className="text-lg font-bold">{`Name: ${student.fullName}`}</h3>
                  <p>{`College Name: ${student.collegeName}`}</p>
                  <p>{`TechieHelp Student Id: ${student.techieHelpStudentID}`}</p>
                  <p>{`Internship Domain: ${student.internshipDomain}`}</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={student.profilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                  >
                    Visit Profile
                  </a>
                  <a
                    href={student.linkedInProfile || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-800 rounded hover:bg-blue-900 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={student.githubProfile || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Intern;