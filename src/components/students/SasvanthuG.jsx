import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { sasvanthuG } from '../../assets/index.js';

const SasvanthuG = () => {
  const student = {
    timestamp: "7/21/2025 14:30:09",
    fullName: "Sasvanthu G",
    email: "sasvanthu.g.2006@gmail.com",
    collegeName: "SIMATS Engineering",
    techieHelpStudentID: "TECHIE310559",
    linkedInProfile: "https://www.linkedin.com/in/sasvanthu-g-b104b632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/sasvanthu",
    address: "Chennai",
    phoneNumber: "8610873714",
    internshipDomain: "Front end Development",
    currentYearBatch: "2nd",
    passingYear: "2028",
    skills: "Artificial intelligence",
    personalQuote: "BTech IT Aspirant",
    profileImage: sasvanthuG,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Creative and dedicated frontend developer.",
    workDone: [
      "Created responsive web pages using HTML5 and CSS3",
      "Developed interactive components with JavaScript",
      "Worked with modern CSS frameworks like Tailwind CSS",
      "Collaborated on team projects and code reviews"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default SasvanthuG;
