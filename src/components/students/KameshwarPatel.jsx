import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { KameshwarPatel } from '../../assets/index.js';

const KameshwarPatel = () => {
  const student = {
    timestamp: "12/17/2025 08:55:53",
    fullName: "Kameshwar Patel",
    email: "patelkameshwar01@gmail.com",
    collegeName: "Jodhpur Institute of Engineering & Technology",
    techieHelpStudentID: "TECHIE161085",
    linkedInProfile: "www.linkedin.com/in/patelkameshwar",
    githubProfile: "github.com/patelkameshwar",
    address: "Jodhpur, Rajasthan",
    phoneNumber: "8877396336",
    internshipDomain: "MERN STACK DEVELOPER",
    currentYearBatch: "2nd Year, 2024-2026",
    passingYear: "2026",
    skills: "ReactJs, HTML5, CSS, JAVASCRIPT, Git&Github, Canva, MS Office ",
    personalQuote: "Motivated Computer Science undergraduate with practical experience in web development, software engineering, and artificial intelligence. Passionate about building secure, efficient, and responsive applications.",
    profileImage: KameshwarPatel,
    verified: true,
    resumeLink: "",
    offerLetterLink: "",
    completionCertificationsLink: "",
    feedback: "",
    projectsGitHubLink: "https://github.com/patelkameshwar/TechieHelp.in",
    workDone: [
      "MeetDoc: Online Doctors Appointment, Built a Full Stack Doctors Appointment App in React 19 + Next JS 15 with Tailwind CSS, MongoDB ",
      "Online Chat Application: Built a Full Stack Online Chat App with real time in React JS with Tailwind CSS, MongoDb, Socket.IO",
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default KameshwarPatel;
