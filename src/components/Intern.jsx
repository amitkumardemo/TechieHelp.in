import React, { useState, useMemo } from 'react';
import DotGrid from './DotGrid';
import { Link } from 'react-router-dom';
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
          <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TechieHelp Interns
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet our talented interns shaping the future of technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search by name, college, or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 placeholder-gray-400 focus:outline-none focus:border-purple-400 w-full max-w-md text-white"
            />
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.techieHelpStudentID}
                className="p-4 rounded-lg shadow-lg hover:shadow-blue-600/70 transition-shadow duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-900 via-blue-900 to-black"
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
              </div>
            ))}
          </div>
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