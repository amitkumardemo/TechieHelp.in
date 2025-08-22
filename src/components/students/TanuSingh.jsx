import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { tanuSingh } from '../../assets';

const TanuSingh = () => {
  const studentData = {
    timestamp: "7/21/2025 21:09:05",
    fullName: "Tanu Singh",
    email: "tanusinghmhp18@gmail.com",
    collegeName: "Ewing Christian College Prayagraj",
    techieHelpStudentID: "TECHIE822090",
    linkedInProfile: "https://www.linkedin.com/in/tanu-singh-763a49215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/Tanucoder-stack",
    address: "Jrahi Road Mihinpurwa Bahraich",
    phoneNumber: "9198277927",
    internshipDomain: "Information Technology",
    currentYearBatch: "Passout 2021",
    passingYear: "2021",
    skills: "Java, HTML, CSS, JavaScript, OOP, DBMS",
    personalQuote: "Completed B.Voc in IT from Ewing Christian College, passionate about creativity and innovation.",
    profileImage: tanuSingh,
    verified: true,
    resumeLink: "https://drive.google.com/file/d/1nzJ5tWxTfB8nWN9RM95CJ7g46oXhpomT/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1cdFKmirN6TSJjbJGXy0uiFHqPB1I3MPx/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1EJc8NQxVurPI_QqFzaPvzL4Ncb33rmAo/view?usp=sharing",
    feedback: "Experienced IT professional with strong technical foundation.",
    projectsGitHubLink: "https://github.com/Tanucoder-stack/projects",
    workDone: [
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default TanuSingh;
