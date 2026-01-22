import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { thujozoRhakho } from '../../assets/index.js';

const ThujozoRhakho = () => {
  const student = {
    timestamp: "11/29/2025 10:13:16",
    fullName: "Thujozo Rhakho",
    email: "thujozorhakho@gmail.com",
    collegeName: "St.Joseph University, Chumoukedima, Nagaland",
    techieHelpStudentID: "TECHIE848862",
    linkedInProfile: "https://www.linkedin.com/in/thujozo-rhakho-225a01397",
    githubProfile: "https://github.com/thujozorhakho-stack",
    address: "Dimapur, Nagaland",
    phoneNumber: "9863170762",
    internshipDomain: "Front End Developer",
    currentYearBatch: "3rd YEAR, 5th Semester 2025",
    passingYear: "2027",
    skills: "Programming Languages: Python, C, HTML, Database: MySQL",
    personalQuote: "To secure a challenging internship position where I can apply my foundational knowledge and learn more in Computer Science and Engineering, enhance my technical skills, and contribute meaningfully to real-world projects while gaining practical industry experience.",
    profileImage: thujozoRhakho,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1IVr0vxZ3-3sIdguwR0e1FNJbcjAazks_",
    offerLetterLink: "https://drive.google.com/open?id=1EU-zULLyLEBcii0_G-eNCBt_f31rHtWC",
    completionCertificationsLink: "https://drive.google.com/file/d/1leaAhQVMx8rGTl-uzrdAtDvXPILEU4FJ/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/18YPopHMTPLPLWa9iSTln4aUGB4tJWT04/view?usp=drive_link",
    projectsGitHubLink: "https://github.com/thujozorhakho-stack",
    workDone: [
      "Learning and applying foundational knowledge in Computer Science",
      "Working with Python, C, and HTML for various projects",
      "Database management using MySQL"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default ThujozoRhakho;