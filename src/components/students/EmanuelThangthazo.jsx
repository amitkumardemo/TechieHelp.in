import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { emanuelThangthazo } from '../../assets';

const EmanuelThangthazo = () => {
  const student = {
    timestamp: "11/27/2025 15:02:02",
    fullName: "Emanuel Thangthazo",
    email: "emanuelthangthazo@gmail.com",
    collegeName: "St. Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE598998",
    linkedInProfile: "https://www.linkedin.com/in/emanuel-thangthazo-aa7928392",
    githubProfile: "https://github.com/emanuelthangthazo",
    address: "Chumoukedema, Nagaland",
    phoneNumber: "9362780534",
    internshipDomain: "Front-End Developer",
    currentYearBatch: "3rd year 5th semester(2023)",
    passingYear: "2027",
    skills: "Python, C, Javascript, html, mySQL, AI/ML, , Computer Networks, Linux",
    personalQuote: "Be like water.",
    profileImage: emanuelThangthazo,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1QwbklIXnYZKoeIMxBRqulaUxpKfa773u",
    offerLetterLink: "https://drive.google.com/open?id=1JlA4oX8EFJM5mbBw-V0qE_spikJT2cfA",
    completionCertificationsLink: "",
    feedback: "Adaptable frontend developer with diverse technical skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default EmanuelThangthazo;
