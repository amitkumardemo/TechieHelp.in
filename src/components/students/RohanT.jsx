import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { rohanThurady } from '../../assets';

const RohanT = () => {
  const student = {
    timestamp: "7/21/2025 22:38:00",
    fullName: "Rohan T",
    email: "rohanptu97@gmail.com",
    collegeName: "Puducherry Technological University",
    techieHelpStudentID: "TECHIE121136",
    linkedInProfile: "https://www.linkedin.com/in/rohan-t-a6b860269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/rohan-t97",
    address: "No 18 Adhiparasakthi Nagar, 2nd Cross, Thengaithittu Road, Marapalam, Puducherry-4.",
    phoneNumber: "9092023660",
    internshipDomain: "Front End Development",
    currentYearBatch: "2025 & July Batch",
    passingYear: "2028",
    skills: "Java and Python",
    personalQuote: "Optional",
    profileImage: rohanThurady,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Skilled frontend developer with strong Java and Python programming skills.",
    workDone: [
      "Developed frontend applications using Java and Python",
      "Created responsive web interfaces",
      "Worked with modern frontend frameworks",
      "Implemented user-friendly designs",
      "Collaborated on team development projects"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default RohanT;
