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
    currentYearBatch: "2nd Year, 2024-2026",
    passingYear: "2026",
    skills: "HTML, CSS, JavaScript, Python, Mysql",
    personalQuote: "Passionate about technology and innovation.",
    profileImage: ashok,
    verified: true,
    resumeLink: "",
    offerLetterLink: "",
    completionCertificationsLink: "",
    feedback: "Highly motivated and skilled developer.",
    projectsGitHubLink: "",
    workDone: [
      "JCR CAB & CAR Website",
      "Weather App-Python Project"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default Ashok;
