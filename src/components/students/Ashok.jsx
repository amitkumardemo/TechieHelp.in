import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { ashok } from '../../assets/index.js';

const Ashok = () => {
  const student = {
    timestamp: "12/01/2025 10:05:00",
    fullName: "Ashok",
    email: "patelkameshwar01@gmail.com",
    collegeName: "Mahatma Gandhi Kashi Vidyapith University, Varanasi",
    techieHelpStudentID: "TECHIE123457",
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    address: "Varanasi",
    phoneNumber: "8877396336",
    internshipDomain: "Full Stack Developer",
    currentYearBatch: "2nd Year",
    passingYear: "2028",
    skills: "HTML5, CSS, JavaScript, React, MySQL, C, C++, Canva, MS Office, UI/UX",
    personalQuote: "Aspiring Frontend-focused Full Stack Developer with a strong foundation in UI development and a good understanding of backend technologies. A quick learner with hands-on coding experience and a strong problem-solving mindset, passionate about building responsive and user-friendly web applications.",
    profileImage: ashok,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Dedicated student with strong foundation in programming.",
    workDone: [
      "Worked as a Full Stack Developer Intern at Swaastik Solutions with a primary focus on frontend development, where I contributed to live projects and built responsive, user-friendly web interfaces. Gained hands-on experience in backend technologies, and acquired practical knowledge of Figma for UI/UX design and prototyping.",
      "Online Doctor Appointment Frontend – Easily book appointments with licensed doctors online—quick, convenient, and hassle-free.",
      "Weather Report System – It focuses on providing the current weather information for a user-specified city and state.",
      "Online Chat Application – This offers chatting with friends and colleague with feature user login, registration, profile update and sharing text as well as media in chat."
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default Ashok;
