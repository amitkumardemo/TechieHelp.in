import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { rohanThurady } from '../../assets';

const RohanT = () => {
  const student = {
    timestamp: "7/21/2025 22:38:00",
    fullName: "Rohan T",
    email: "rohanptu97@gmail.com",
    collegeName: "Puducherry Technological University",
    techieHelpStudentID: "TECHIE121136",
    linkedInProfile: "https://www.linkedin.com/in/rohan-t-a6b860269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/rohan-t97",
    address: "No 18 Adhiparasakthi Nagar, 2nd Cross, Thengaithittu Road, Marapalam, Puducherry-4.",
    phoneNumber: "9092023660",
    internshipDomain: "Front End Development",
    currentYearBatch: "2025 & July Batch",
    passingYear: "2028",
    skills: "Java and Python",
    personalQuote: "Optional",
    profileImage: rohanThurady,
    verified: true,
    resumeLink: "https://drive.google.com/file/d/1NQyiBfjF3UoXYc59z5RIAMOgw3X-Akkt/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1aRvQ41XML_-EhuUgkatAR36aLHIjjpzB/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1PT5ZTRYP7jpW381oSYInoB54PKClI13z/view?usp=sharing",
    feedback: "Skilled frontend developer with strong Java and Python programming skills.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact",
      
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default RohanT;
