import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { senchumbeniCErui } from '../../assets';

const SenchumbeniCErui = () => {
  const student = {
    timestamp: "11/26/2025 23:20:25",
    fullName: "Senchumbeni C Erui",
    email: "senchumbenierui@gmail.com",
    collegeName: "St. Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE663665",
    linkedInProfile: "https://www.linkedin.com/in/senchumbeni-erui-9998a0396",
    githubProfile: "https://github.com/senchumbenierui-max",
    address: "Chumoukedima, Nagaland",
    phoneNumber: "9863287046",
    internshipDomain: "front end",
    currentYearBatch: "3th year 5th semester",
    passingYear: "2027",
    skills: "Html and python",
    personalQuote: "I want create a beautiful web page",
    profileImage: senchumbeniCErui,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1Cf-1F91ZK7L1oJAsg391Ocgvgr4-unTX",
    offerLetterLink: "https://drive.google.com/open?id=1Tm1sG0g7WeXN9JlifTQ829LQ4ALL5wWZ",
    completionCertificationsLink: "https://drive.google.com/file/d/1zsYCQdP0qgYRnMuOWt4hmUubCXwshZr3/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1VWkQ7ctE0hi6ITk17ZwfND00nbiQvFwi/view?usp=drive_link",
    feedback: "Creative frontend developer with passion for beautiful web design.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default SenchumbeniCErui;
