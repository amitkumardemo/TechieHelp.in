import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { kameshwarPatel } from '../../assets/index.js';

const KameshwarPatel = () => {
  const student = {
    timestamp: "12/17/2025 15:00:00",
    fullName: "Kameshwar Patel",
    email: "patelkameshwar01@gmail.com",
    collegeName: "Jodhpur Institute of Engineering & Technology",
    techieHelpStudentID: "TECHIE161085",
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar/",
    githubProfile: "https://github.com/patelkameshwar",
    address: "Jodhpur, Rajasthan",
    phoneNumber: "8877396336",
    internshipDomain: "Mern Stack",
    currentYearBatch: "2nd Year, 2024-2026",
    passingYear: "2026",
    skills: "ReactJs, HTML5, CSS, JavaScript, MS Office, Canva, Git & Github",
    personalQuote: "Aspiring Frontend-focused Full Stack Developer with a strong foundation in UI development and a good understanding of Backend technologies. ",
    profileImage: kameshwarPatel,
    verified: true,
    resumeLink: "",
    offerLetterLink: "",
    completionCertificationsLink: "",
    feedback: "Enthusiastic full-stack developer with a strong understanding of frontend concepts, actively contributing to UI-related projects. Demonstrates excellent problem-solving and debugging skills, quick issue resolution, logical thinking, adaptability, and a strong willingness to learn",
    projectsGitHubLink: "https://github.com/patelkameshwar/TechieHelp.in",
    workDone: [
      "MeetDoc: Online doctor booking web app with responsive UI using ReactJs and tailwind CSS. Implemented backend APIs with NodeJs and Express, used MongoDb to store and manage data. Deployed on vercel to make this project live.",
      "Chat Application: This app enables real-time chat between users with a responsive interface. Socket.IO was used to handle instant message delivery, while NodeJs & Express managed server-side logic and APIs. MongoDB was used for storing user and chat data."
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default KameshwarPatel;
