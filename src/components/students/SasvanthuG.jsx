import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { sasvanthuG } from '../../assets/index.js';

const SasvanthuG = () => {
  const student = {
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
    verified: true,
    resumeLink: "#",
    offerLetterLink: "https://drive.google.com/file/d/1ka6aB1cofWFtvDkNvj8jicOPp2uPI2vx/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1tlIQjBCGoXbDMWaTcE_u3kPRCNtZbtUl/view?usp=sharing",
    feedback: "Creative and dedicated frontend developer.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact",
      
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default SasvanthuG;
