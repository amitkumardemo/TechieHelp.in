import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { puloviKChishi } from '../../assets/index.js';

const PuloviKChishi = () => {
  const student = {
    timestamp: "11/30/2025 0:50:44",
    fullName: "Pulovi k Chishi",
    email: "apulochishi19@gmail.com",
    collegeName: "St.joseph University, Nagaland",
    techieHelpStudentID: "TECHIE390903",
    linkedInProfile: "https://linkedin.com/in/pulovi",
    githubProfile: "https://github.com/Apulo-chishi",
    address: "NZP, Nagaland, Chumoukedima",
    phoneNumber: "6009749948",
    internshipDomain: "Front-End developer",
    currentYearBatch: "3rd year, 2023",
    passingYear: "2027",
    skills: "HTML, CSS, C, Python, Java",
    personalQuote: "Enthusiastic intern eager to learn, contribute, and grow. Passionate about developing new skills and delivering quality work",
    profileImage: puloviKChishi,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1quuvUQ2qiw1FD8VUbFoM7FG-jT27VGZS",
    offerLetterLink: "https://drive.google.com/open?id=1CxD2TOJqqTVZFL9ke31Pmr_zIaKCB05o",
    completionCertificationsLink: "https://drive.google.com/file/d/1cGi-QH0C3vqE9SmiU8VP2iND8fIElqLY/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1LKoXXDtDxlRrKmQ9gYOflmrRoLMtCrNM/view?usp=drive_link",
    feedback: "Passionate about learning and delivering quality work.",
    projectsGitHubLink: "https://github.com/Apulo-chishi",
    workDone: [
      "Creating responsive front-end interfaces with HTML and CSS",
      "Learning programming fundamentals with C, Python, and Java",
      "Developing web development skills"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default PuloviKChishi;