import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { kameshwarPatel } from '../../assets/index.js';

const KameshwarPatel = () => {
  const student = {
    timestamp: "12/17/2025 00:00:00",
    fullName: "Kameshwar Patel",
    email: "patelkameshwar01@gmail.com",
    collegeName: "Jodhpur Institute of Engineering & Technology",
    techieHelpStudentID: "TECHIE161085",
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    address: "Jodhpur, Rajasthan",
    phoneNumber: "8877396336",
    internshipDomain: "Frontend Developer",
    currentYearBatch: "MCA 2nd Year",
    passingYear: "2026",
    skills: "HTML5, CSS3, JavaScript, React, Node.JS, Express.JS, Tailwind CSS, MySQL, Vite, Git & GitHub, MongoDB, Postman, Vercel, Render, Canva, MS Office",
    personalQuote: "I live at the intersection of logic and design. As a Fullstack Developer, I don't just build websites; I craft digital experiences that work beautifully under the hood and look stunning on the surface. Whether I'm optimizing a SQL query or fine-tuning a CSS transition, I'm driven by a curiosity to understand how things work and a desire to make them better.",
    profileImage: kameshwarPatel,
    verified: true,
    resumeLink: "https://drive.google.com/file/d/16bUca6zsCIKUg_oKArobzNw_kw7m9288/view?usp=drive_link",
    offerLetterLink: "https://drive.google.com/file/d/1s0NfdhzDzfxicl5EP7Xbfemla8ccq2yA/view?usp=drive_link",
    completionCertificationsLink: "#",
    feedback: "A reliable open-source contributor who consistently delivers clean, scalable solutions while improving features, fixing bugs, and enhancing user experience.",
    projectsGitHubLink: "https://github.com/patelkameshwar/TechieHelp.in",
    workDone: [
      "TechieHelp – Open-source contribution to TechieHelp, my work focuses on enhancing existing features, implementing new functionalities, and fixing bugs to improve overall stability and performance. I actively contribute to improving the user experience by refining UI components, ensuring responsiveness, and maintaining clean, scalable, and maintainable code.",
      "MeetDoc-Doctor Appointment – Implemented three-level authentication for Patients, Doctors, and Admin. Patients can book and manage appointments, doctors can view appointments, earnings, and update profile, while admin can manage doctors and appointments through a dedicated dashboard.",
      "OnlineChat – Developed a full-stack chat application using Socket.IO for real-time messaging. The app allows users to send and receive messages instantly without page reloads, supporting seamless one-on-one communication. Implemented user authentication, message storage, and dynamic updates.",
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default KameshwarPatel;
