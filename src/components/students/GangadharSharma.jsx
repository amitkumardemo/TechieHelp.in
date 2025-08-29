import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';

const KaviyaranP = () => {
  const student = {
    timestamp: "20/08/2025",
    fullName: "GANGA DHAR SHARMA",
    email: "2401109070@ptuniv.edu.in",
    collegeName: "PUDUCHERRY TECHNOLOGICAL UNIVERSITY",
    techieHelpStudentID: "TECHIE426947",
    linkedInProfile: "",
    githubProfile: "https://github.com/monkeykavi",
    address: "Pondicherry",
    phoneNumber: "8883802327",
    internshipDomain: "Front End Development",
    currentYearBatch: "July 2025 Batch",
    passingYear: "2025",
    skills: "",
    personalQuote: "Aspiring front-end developer with a strong foundation in HTML, CSS, and JavaScript, passionate about building responsive and user-friendly web interfaces. Skilled in creating clean, accessible designs with attention to detail and eager to learn modern frameworks and industry best practices. Excited to contribute creativity and problem-solving skills to a dynamic development team.",
    profileImage: "",
    idCardStyle: "default",
    cardColor: "from-gray-600 to-gray-800",
    profilePath: "/intern/ganga-dhar-sharma",
    verified: true,
    resumeLink: "https://docs.google.com/document/d/1NlbRL-TntE1-8WjhtK9HAcs0QMe1uMtE/edit?usp=sharing&ouid=107759550110218559812&rtpof=true&sd=true",
    offerLetterLink: "https://drive.google.com/file/d/14D_gQRWTsdodJ2q6ysO1sgRSiIFRYMlj/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1YVPABD4MUt-VhsRP6PxvYqA_H4hUtx47/view?usp=sharing",
    feedback: "Successfully completed internship in Front End Development under mentorship of TechieHelp.",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ],
    internshipTenure: "20th July 2025 to 20th Aug 2025"
  };

  return <StudentProfileTemplate student={student} />;
};

export default KaviyaranP;
