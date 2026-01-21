import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { beloKapfo } from '../../assets';

const BeloKapfo = () => {
  const student = {
    timestamp: "11/27/2025 16:59:02",
    fullName: "Belo Kapfo",
    email: "belokapfo1@gmail.com",
    collegeName: "St. Joseph University",
    techieHelpStudentID: "TECHIE111065",
    linkedInProfile: "https://www.linkedin.com/in/belo-kapfo-49695039a/",
    githubProfile: "https://github.com/0Yuki6",
    address: "Ward-6, Chumukedima,Nagaland",
    phoneNumber: "9362795346",
    internshipDomain: "Full Stack",
    currentYearBatch: "3rd year (2023-2027)",
    passingYear: "2027",
    skills: "C, Python, MySQL, HTML, CSS, DBMS, DS, Algorithms",
    personalQuote: "Motivated to learn new stuffs",
    profileImage: beloKapfo,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1y0WFB-_vLbfUtnvZhle2skrmIefTN8kx",
    offerLetterLink: "https://drive.google.com/open?id=17ZgYza3NdjQFkx4zgbWjqqKGKgCVjDXG",
    completionCertificationsLink: "https://drive.google.com/file/d/1ObS24pfjtWRiOPduA1ntQnRAJEXHi9I_/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1Qmz3rIOwc2SYMHsiRwEwy02z-Ayp_oha/view?usp=drive_link",
    feedback: "Motivated full stack developer with comprehensive technical skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default BeloKapfo;
