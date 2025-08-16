import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { ritikaKasat } from '../../assets/index.js';

const RitikaKasat = () => {
  const student = {
    timestamp: "7/21/2025 19:35:25",
    fullName: "Ritika kasat",
    email: "ritika.24jics166@jietjodhpur.ac.in",
    collegeName: "Jiet",
    techieHelpStudentID: "TECHIE650134",
    linkedInProfile: "https://www.linkedin.com/in/ritika-kasat-296a86333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "",
    address: "lala laj pat rai colony,chotti idgha road,jodhpur",
    phoneNumber: "949893772",
    internshipDomain: "Frontend Devlopment",
    currentYearBatch: "2 year 2C3 batch",
    passingYear: "2028",
    skills: "i have learned c ,python , html, css language",
    personalQuote: "I'm RITIKA KASAT Currently pursuing B.Tech in CSE from JIET .I'm passionate about tech, and always eager to learn new skills. I enjoy blogging ,dancing, music, traveling, I'm also actively involved in college events and management, which has helped me build leadership, confidence and teamwork skills. Thank you!",
    profileImage: ritikaKasat,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1AtOxlfQgmjEDkt2WhVSlkKcgMzynzBcR",
    offerLetterLink: "https://drive.google.com/open?id=1iO4DYy9IsGJfk6-MzO7Jtl8MVq7RkUdA",
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

export default RitikaKasat;
