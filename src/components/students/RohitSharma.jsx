import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { rohitSharm } from '../../assets';

const RohitSharma = () => {
  const studentData = {
    timestamp: "7/21/2025 21:59:41",
    fullName: "Rohit Sharma",
    email: "rohit.24jics167@jietjodhpur.ac.in",
    collegeName: "JIET",
    techieHelpStudentID: "TECHIE323097",
    linkedInProfile: "https://www.linkedin.com/in/rohit-sharma-codes/",
    githubProfile: "https://github.com/NeonSync",
    address: "Gopal Bhawan, Inside Nagori Gate, Jodhpur",
    phoneNumber: "7619719601",
    internshipDomain: "Web Development",
    currentYearBatch: "2nd Year (C3)",
    passingYear: "2028",
    skills: "Python, HTML, CSS, Java, Computer skills",
    personalQuote: "Computer Science student passionate about building smart digital solutions.",
    profileImage: rohitSharm,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Promising developer with strong problem-solving skills.",
    projectsGitHubLink: "https://github.com/NeonSync/projects"
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default RohitSharma;
