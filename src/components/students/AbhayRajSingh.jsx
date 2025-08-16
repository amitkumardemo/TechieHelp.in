import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { abhayRajSingh } from '../../assets/index.js';

const AbhayRajSingh = () => {
  const student = {
    timestamp: "7/21/2025 14:55:53",
    fullName: "Abhay Raj Singh",
    email: "abhayrajsingh28334@gmail.com",
    collegeName: "IILM University Greater Noida",
    techieHelpStudentID: "TECHIE560518",
    linkedInProfile: "https://www.linkedin.com/in/abhay-raj-singh-6152ba27a/",
    githubProfile: "https://github.com/ABHAYRAJSINGH11",
    address: "Greater Noida, Uttarpradesh",
    phoneNumber: "9634189961",
    internshipDomain: "MERN STACK DEVELOPER",
    currentYearBatch: "3rd Year, 2023-2027",
    passingYear: "2027",
    skills: "HTML,CSS,JAVASCRIPT,JAVA",
    personalQuote: "Motivated Computer Science undergraduate with practical experience in web development, software engineering, and artificial intelligence. Passionate about building secure, efficient, and responsive applications.",
    profileImage: abhayRajSingh,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Highly motivated and skilled developer.",
    projectsGitHubLink: "https://github.com/ABHAYRAJSINGH11/projects",
    workDone: [
      "Built full-stack MERN applications with MongoDB, Express.js, React, and Node.js",
      "Developed RESTful APIs with authentication and authorization",
      "Created responsive web applications with modern UI/UX design",
      "Implemented real-time features using Socket.io",
      "Deployed applications on cloud platforms like Heroku and Netlify"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default AbhayRajSingh;
