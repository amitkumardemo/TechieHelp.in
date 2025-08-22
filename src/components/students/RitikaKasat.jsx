import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { ritikaKasat } from '../../assets/index.js';

const RitikaKasat = () => {
  const student = {
    timestamp: "7/21/2025 19:35:25",
    fullName: "Ritika kasat",
    email: "ritika.24jics166@jietjodhpur.ac.in",
    collegeName: "Jiet",
    techieHelpStudentID: "TECHIE650134",
    linkedInProfile: "https://www.linkedin.com/in/ritika-kasat-296a86333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "",
    address: "lala laj pat rai colony,chotti idgha road,jodhpur",
    phoneNumber: "949893772",
    internshipDomain: "Frontend Devlopment",
    currentYearBatch: "2 year 2C3 batch",
    passingYear: "2028",
    skills: "i have learned c ,python , html, css language",
    personalQuote: "I'm RITIKA KASAT Currently pursuing B.Tech in CSE from JIET .I'm passionate about tech, and always eager to learn new skills. I enjoy blogging ,dancing, music, traveling, I'm also actively involved in college events and management, which has helped me build leadership, confidence and teamwork skills. Thank you!",
    profileImage: ritikaKasat,
    verified: true,
    resumeLink: "https://docs.google.com/document/d/1kLSdZhmzWSKPj4iWXK2VNfrsI01Yi-Df/edit?usp=sharing&ouid=107759550110218559812&rtpof=true&sd=true",
    offerLetterLink: "https://drive.google.com/file/d/1gzJC0n3nyyrSlu9dz2BG0T334cPG6H0n/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1n5ckhQh3o311jUt_z7juy8i9VLMZWE24/view?usp=sharing",
    feedback: "Creative and dedicated frontend developer.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default RitikaKasat;
