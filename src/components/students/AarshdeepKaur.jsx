import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { aarshdeepKaur } from '../../assets';

const AarshdeepKaur = () => {
  const student = {
    timestamp: "7/21/2025 21:59:41",
    fullName: "Aarshdeep Kaur",
    email: "aarshdeep.24jids001@jietjodhpur.ac.in",
    collegeName: "JIET UNIVERSE",
    techieHelpStudentID: "TECHIE787247",
    linkedInProfile: "https://www.linkedin.com/in/aarshdeep-kaur-5426a7333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "Not yet",
    address: "B.J.S COLONY",
    phoneNumber: "9079864625",
    internshipDomain: "Web development",
    currentYearBatch: "2nd year (3H2)",
    passingYear: "2028",
    skills: "Technical Skills • Programming Language- Basics of C programming • Platform (Dev c++) • Video/ Photo Editor • Web development (Frontend) Soft Skills • Problem solving • Creative • Optimistic • Enthusiasm • Management",
    personalQuote: "Discipline and consistency is the key that opens every door",
    profileImage: aarshdeepKaur,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Dedicated frontend developer with strong technical and soft skills.",
    workDone: [
      "Learned basics of C programming",
      "Worked with Dev C++ platform",
      "Gained experience in video and photo editing",
      "Developed frontend web development skills",
      "Applied problem-solving and creative thinking"
    ]
  };

  return <StudentProfileTemplate student={student} />;
};

export default AarshdeepKaur;
