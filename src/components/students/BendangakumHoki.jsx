import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { bendangakumHoki } from '../../assets/index.js';

const BendangakumHoki = () => {
  const student = {
    timestamp: "11/30/2025 0:50:30",
    fullName: "Bendangakum Hoki",
    email: "bubuyu675@gmail.com",
    collegeName: "St Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE234984",
    linkedInProfile: "https://linkedin.com/in/bendangakum-hoki",
    githubProfile: "https://github.com/Akum17",
    address: "Purana bazar, mount view colony",
    phoneNumber: "9362723213",
    internshipDomain: "Front-end developer",
    currentYearBatch: "3rd year, 2023",
    passingYear: "2027",
    skills: "Python, C, HTML, CSS, Java",
    personalQuote: "Young student eager and enthusiastic to learn and grow to develop new skills",
    profileImage: bendangakumHoki,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=192KHQpjHcgEnedZ5WoGpXM-keDqgVpGG",
    offerLetterLink: "https://drive.google.com/open?id=1MFuHCu5-pyL7MIAG38TSblw0QzBT6tQN",
    completionCertificationsLink: "https://drive.google.com/open?id=1_3xgAU_JL6sCQ0PRt3O-yRLp889pM_51",
    feedback: "Eager learner with strong enthusiasm for growth.",
    projectsGitHubLink: "https://github.com/Akum17",
    workDone: [
      "Developing front-end skills with HTML, CSS, and JavaScript",
      "Learning multiple programming languages including Python, C, and Java",
      "Building responsive web interfaces"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default BendangakumHoki;