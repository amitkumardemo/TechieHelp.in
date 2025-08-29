import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';

const KaviyaranP = () => {
  const student = {
    timestamp: "7/21/2025 21:59:41",
    fullName: "Kaviyaran P",
    email: "kaviobito@gmail.com",
    collegeName: "Puducherry Technological University",
    techieHelpStudentID: "TECHIE418413",
    linkedInProfile: "https://www.linkedin.com/in/kaviyarasan-perumal-849996368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/monkeykavi",
    address: "Puducherry",
    phoneNumber: "1234567890",
    internshipDomain: "Front end development",
    currentYearBatch: "2nd year",
    passingYear: "2028",
    skills: "Technical Skills • Frontend Development (React, HTML, CSS) • Problem Solving • Teamwork",
    personalQuote: "Learning is a continuous journey.",
    // profileImage: kaviyaranPImage, // Removed image as per user request
    verified: true,
    resumeLink: "https://drive.google.com/file/d/166pDIbqM3T_wFyKgmnFEifg5NZXiUxhC/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1vHc-nF-xotNDIsUYX3wMWFGunNVZAasz/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1SUqRKu6r0TMhrt6n3zDQl1A5Z2SSjoSL/view?usp=sharing",
    feedback: "Enthusiastic frontend developer with a passion for learning.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default KaviyaranP;
