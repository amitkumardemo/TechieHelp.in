import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { khiasuthongT } from '../../assets';

const KhiasuthongT = () => {
  const student = {
    timestamp: "11/26/2025 22:55:20",
    fullName: "Khiasuthong T",
    email: "khiasu2vis@gmail.com",
    collegeName: "St Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE100988",
    linkedInProfile: "https://www.linkedin.com/in/khiasu2vis",
    githubProfile: "https://github.com/khiasu2vis",
    address: "Chumoukedima, Nagaland",
    phoneNumber: "9863765861",
    internshipDomain: "Full stack developer",
    currentYearBatch: "3rd year 5th semester (2023)",
    passingYear: "2027",
    skills: "Python, C, Javascript, html, css, MySQL, AI/ML, Computer Networks, Linux, Tailwind css",
    personalQuote: "Tech Enthusiast",
    profileImage: khiasuthongT,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1t9y2AFyCPtf_izLEmTP45YoxLSfnFsWb",
    offerLetterLink: "https://drive.google.com/open?id=1531cK_sXekeyALF4YHeD1S6L8kJY4dWo",
    completionCertificationsLink: "",
    feedback: "Dedicated full stack developer with strong technical skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default KhiasuthongT;
