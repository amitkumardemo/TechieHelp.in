import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { anutaluRhakho } from '../../assets';

const AnutaluRhakho = () => {
  const student = {
    timestamp: "11/27/2025 15:30:02",
    fullName: "Anutalu Rhakho",
    email: "anutalurhakho@gmail.com",
    collegeName: "St. Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE663666",
    linkedInProfile: "https://www.linkedin.com/in/anutalu-rhakho-aa7928393",
    githubProfile: "https://github.com/anutalurhakho",
    address: "Chumoukedema, Nagaland",
    phoneNumber: "9862780535",
    internshipDomain: "Front-End Developer",
    currentYearBatch: "3rd year 5th semester(2023)",
    passingYear: "2027",
    skills: "Python, C, Javascript, html, mySQL, AI/ML, Computer Networks, Linux",
    personalQuote: "Be like water making its way through cracks.",
    profileImage: anutaluRhakho,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1QwbklIXnYZKoeIMxBRqulaUxpKfa773v",
    offerLetterLink: "https://drive.google.com/open?id=1JlA4oX8EFJM5mbBw-V0qE_spikJT2cfB",
    completionCertificationsLink: "https://drive.google.com/file/d/1nG2A1TfC8olej-Uz5jZBxeYhJS0-XiAJ/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1jcEAPyZpXgh1U1A4FkoIyEIUlOSLG2MB/view?usp=drive_link",
    feedback: "Adaptable frontend developer with diverse technical skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default AnutaluRhakho;
