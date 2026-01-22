import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { dotsuTYimchunger } from '../../assets/index.js';

const DotsuTYimchunger = () => {
  const student = {
    timestamp: "11/29/2025 13:18:18",
    fullName: "Dotsu T Yimchunger",
    email: "inuyashadotsu@gmail.com",
    collegeName: "St Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE790271",
    linkedInProfile: "https://www.linkedin.com/in/dotsu",
    githubProfile: "https://github.com/Dotsu22",
    address: "Chumoukedima, Nagaland",
    phoneNumber: "9863235811",
    internshipDomain: "Android/App development",
    currentYearBatch: "2nd Year",
    passingYear: "2028",
    skills: "Python, C, HTML",
    personalQuote: "Life is like a Rollercoaster but mine looks more like a stairway to Heaven",
    profileImage: dotsuTYimchunger,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1nTu5_OiFI_CmyUxOyZ0NnYbSTKHToSze",
    offerLetterLink: "https://drive.google.com/open?id=1PtWO95L3_v4ZZ38OnyEyD1HxtRVk6sX7",
    completionCertificationsLink: "https://drive.google.com/file/d/1zO6hMNfEYcy63zg5VxomahS5cBiQElZt/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1IVYeil2dRGmjLgOhJXVaNW84OIA_r8Tr/view?usp=drive_link",
    feedback: "Enthusiastic student with a positive outlook on learning.",
    projectsGitHubLink: "https://github.com/Dotsu22",
    workDone: [
      "Learning Android/App development fundamentals",
      "Working with Python and C programming languages",
      "Building foundational web development skills with HTML"
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default DotsuTYimchunger;