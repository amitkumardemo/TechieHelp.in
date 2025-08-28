import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';

const KaviyaranP = () => {
  const student = {
    timestamp: "7/21/2025 21:59:41",
    fullName: "Kaviyaran P",
    email: "kaviyaran@example.com",
    collegeName: "Puducherry Technological University",
    techieHelpStudentID: "TECHIE418413",
    linkedInProfile: "https://www.linkedin.com/in/kaviyaran-p",
    githubProfile: "Not yet",
    address: "Puducherry",
    phoneNumber: "1234567890",
    internshipDomain: "Front end development",
    currentYearBatch: "2nd year",
    passingYear: "2028",
    skills: "Technical Skills • Frontend Development (React, HTML, CSS) • Problem Solving • Teamwork",
    personalQuote: "Learning is a continuous journey.",
    // profileImage: kaviyaranPImage, // Removed image as per user request
    verified: true,
    resumeLink: "https://drive.google.com/file/d/example",
    offerLetterLink: "https://drive.google.com/file/d/example",
    completionCertificationsLink: "https://drive.google.com/file/d/example",
    feedback: "Enthusiastic frontend developer with a passion for learning.",
    workDone: [
      "Developed a responsive website for a local business using React.",
      "Created a personal portfolio website showcasing projects.",
      "Contributed to an open-source project on GitHub."
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default KaviyaranP;
