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
    resumeLink: "https://drive.google.com/file/d/1x5BMD8CQJAEfg9FSqPagxxOLu4TOelD1/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1sgyNY6XqK5i3MLm8EiQHnWDcaNck1XBt/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1hnVQvhD7FrE0dPWRIZOic2DphlsnClJ6/view?usp=sharing",
    feedback: "Promising developer with strong problem-solving skills.",
    projectsGitHubLink: "https://github.com/NeonSync/projects",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default RohitSharma;
