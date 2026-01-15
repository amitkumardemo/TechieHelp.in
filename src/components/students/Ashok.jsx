import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { ashok } from '../../assets/index.js';

const Ashok = () => {
  const student = {
    timestamp: "12/17/2025 00:00:00",
    fullName: "Ashok",
    email: "ashokbishnoi0408@gmail.com",
    collegeName: "Jodhpur Institute of Engineering & Technology",
    techieHelpStudentID: "TECHIE117045",
    linkedInProfile: "https://www.linkedin.com/in/ashok-bishnoi-b19389257/",
    githubProfile: "https://github.com/Ashokmaal0051",
    address: "Jodhpur, Rajasthan",
    phoneNumber: "7877865977",
    internshipDomain: "Frontend Developer",
    currentYearBatch: "MCA 2nd Year",
    passingYear: "2026",
    skills: "HTML, CSS, JavaScript, Bootstrap",
    personalQuote: "Passionate about technology and innovation.",
    profileImage: ashok,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Dedicated and hardworking intern.",
    projectsGitHubLink: "https://github.com/Ashokmaal0051/Ms-Sou",
    workDone: [
      "Ms-Sou Construction – Manage the constructions, renovation, site planning",
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default Ashok;
