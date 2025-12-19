import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { supriyaJalani } from '../../assets/index.js';

const SupriyaJalani = () => {
  const student = {
    timestamp: "12/20/2025 10:00:00",
    fullName: "Supriya Jalani",
    email: "Supriyaj66705@gmail.com",
    collegeName: "Jodhpur Institute of Engineering & Technology",
    techieHelpStudentID: "TH-EMP-25-002",
    linkedInProfile: "https://www.linkedin.com/in/supriya-jalani/",
    githubProfile: "https://github.com/Suprirya-Jalani",
    address: "Jodhpur, Rajasthan",
    phoneNumber: "7014245775",
    internshipDomain: "UI/UX Designer",
    currentYearBatch: "CSE 3rd Year",
    passingYear: "2027",
    skills: "Python, Java, HTML, CSS, Javascript, Unity, Blender, Figma",
    personalQuote: "A Computer Science student and tech enthusiast with a passion for AI/ML, 3D modeling, and UI/UX design. Possesses basic knowledge of Unity and Blender, along with hands-on experience in immersive technologies and low-level programming. A proactive learner, problem-solver, and disciplined team player eager to create impactful digital experiences.",
    profileImage: supriyaJalani,
    verified: true,
    resumeLink: "",
    offerLetterLink: "",
    completionCertificationsLink: "",
    feedback: "Dedicated and skilled developer with strong problem-solving abilities.",
    projectsGitHubLink: "",
    workDone: [
      "A WEB DEVELOPMENT PROJECT: Created a responsive web page withHTML and CSS, ensuring a clean layoutand cross-device compatibility.",
      "3D Modeling Project (Ongoing): Developing a 3D model using Blender, focusing on creating detailed structures and optimizing design for immersive environments."
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default SupriyaJalani;
