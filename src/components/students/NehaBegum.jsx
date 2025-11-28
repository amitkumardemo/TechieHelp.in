import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { nehaBegum } from '../../assets';

const NehaBegum = () => {
  const student = {
    timestamp: "11/27/2025 4:15:37",
    fullName: "Neha Begum",
    email: "nehabegum@gmail.com",
    collegeName: "St. Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE598999",
    linkedInProfile: "https://www.linkedin.com/in/neha-begum-9999a0396",
    githubProfile: "https://github.com/nehabegum-max",
    address: "Chumoukedima, Nagaland",
    phoneNumber: "9863287047",
    internshipDomain: "Frontend",
    currentYearBatch: "3rd year 5th semester",
    passingYear: "2027",
    skills: "Python, C, HTML, CSS, MySQL",
    personalQuote: "I want to create beautiful web pages",
    profileImage: nehaBegum,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1Cf-1F91ZK7L1oJAsg391Ocgvgr4-unTZ",
    offerLetterLink: "https://drive.google.com/open?id=1Tm1sG0g7WeXN9JlifTQ829LQ4ALL5wZA",
    completionCertificationsLink: "",
    feedback: "Creative frontend developer with passion for beautiful web design.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default NehaBegum;
