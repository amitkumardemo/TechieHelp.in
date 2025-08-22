import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { sagarKumar } from '../../assets';

const SagarKumar = () => {
  const student = {
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
    skills: "Web Development:- HTML5, CSS3, JavaScript React.js, Tailwind CSS Basic Node.js, Express.js (MERN backend exposure) RESTful APIs, JSON handling Responsive design & deployment (Vercel, Netlify)",
    personalQuote: "I am a curious learner and aspiring web developer, passionate about building clean, interactive websites that help people. I focus on improving myself every day while exploring new opportunities to learn, grow, and contribute meaningfully wherever I work.",
    profileImage: sagarKumar,
    verified: true,
    resumeLink: "https://drive.google.com/file/d/1Nyc-hq90rhIGVzSpy91RYZkOYqRFZzB_/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1v5XvnaUZH6H6qtiuwdWEIuM1apO9JgEa/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/10ob9IgbT7Mvt9qxAxdb7L7C96paK2FE9/view?usp=sharing",
    feedback: "Dedicated web developer with strong MERN stack skills.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI,极致的动画效果, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact",
      "Built responsive websites using HTML5, CSS3, and JavaScript",
      "Developed React.js applications with modern UI frameworks",
      "Created RESTful APIs with Node.js and Express.js",
      "Deployed applications on Vercel and Netlify",
      "Implemented responsive design principles"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default SagarKumar;
