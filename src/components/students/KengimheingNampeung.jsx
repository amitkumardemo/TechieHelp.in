import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { kengimheingNampeung } from '../../assets/index.js';

const KengimheingNampeung = () => {
  const student = {
    timestamp: "11/30/2025 6:52:01",
    fullName: "Kengimheing Nampeung",
    email: "scottnamps@gmail.com",
    collegeName: "St Joseph University Nagaland",
    techieHelpStudentID: "TECHIE288942",
    linkedInProfile: "https://www.linkedin.com/in/kengimheing-namps-921649254/",
    githubProfile: "https://github.com/Newbie-arch-lab",
    address: "Jalukie town, Peren, Nagaland",
    phoneNumber: "8787523557",
    internshipDomain: "Front end developer",
    currentYearBatch: "CSE 2nd year 2024 Batch",
    passingYear: "2028",
    skills: "Python, C, HTML, DBMS, AI Fundamentals",
    personalQuote: "My brain has too many tabs open. Most are frozen, a few are playing music I hate, and one is quiet",
    profileImage: kengimheingNampeung,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=17Gc7qlcXj4uAUoDaDgiKtDn3yflpUQgo",
    offerLetterLink: "https://drive.google.com/open?id=1PG_a7zlkAH0akX0Tk_m1_xs7Af5BnfJ3",
    completionCertificationsLink: "https://drive.google.com/file/d/1XU4gHckrTT-DJyUF_WUZN0oDatMiGwPl/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1bkMjFZr1vs-3nAeJ_WxKMt2LIcNmw3fr/view?usp=drive_link",
    feedback: "Creative thinker with a unique perspective on technology.",
    projectsGitHubLink: "https://github.com/Newbie-arch-lab",
    workDone: [
      "Learning front-end development with HTML and modern frameworks",
      "Exploring AI fundamentals and database management systems",
      "Building programming skills with Python and C"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default KengimheingNampeung;