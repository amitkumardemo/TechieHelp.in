import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { simranKanwar } from '../../assets';

const SimranKanwar = () => {
  const student = {
    timestamp: "7/21/2025 20:05:30",
    fullName: "SIMRAN KANWAR",
    email: "simran.24jics181@jietjodhpur.ac.in",
    collegeName: "JIET",
    techieHelpStudentID: "TECHIE357794",
    linkedInProfile: "https://www.linkedin.com/in/simran-kanwar-9b4117335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/Simran-Kanwar-15",
    address: "PL 110/KH 12 SHRI RAM NAGAR NANDRI GHAUSHALA ROAD NANDRI JODHPUR",
    phoneNumber: "6367812002",
    internshipDomain: "WEB DEVELOPMENT",
    currentYearBatch: "2 YEAR & 2C3",
    passingYear: "2028",
    skills: "Technical Skills: HTML, CSS, JavaScript (Basics) ;Python ;Programming C Language ; WordPress ; Video Editing ; Starting DSA (Data Structures & Algorithms)",
    personalQuote: "SIMRAN KANWAR – Web Developer | Python Enthusiast | NCC Cadet",
    profileImage: simranKanwar,
    verified: true,
    resumeLink: "https://docs.google.com/document/d/1T63_9en0fovycgyWzerkAPkcLO0swfCs/edit?usp=sharing&ouid=107759550110218559812&rtpof=true&sd=true",
    offerLetterLink: "https://drive.google.com/file/d/13e3pM5Zm1cawGxzhK74opUrH8OAfltb1/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/15Sn5Tqvx2gCuV9Ww2dqtKqV-n2X7w11Q/view?usp=sharing",
    feedback: "Enthusiastic web developer with strong Python and C programming skills.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default SimranKanwar;
