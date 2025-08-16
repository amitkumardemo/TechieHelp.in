import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { tanuSingh } from '../../assets';

const TanuSingh = () => {
  const studentData = {
    timestamp: "7/21/2025 21:09:05",
    fullName: "Tanu Singh",
    email: "tanusinghmhp18@gmail.com",
    collegeName: "Ewing Christian College Prayagraj",
    techieHelpStudentID: "TECHIE822090",
    linkedInProfile: "https://www.linkedin.com/in/tanu-singh-763a49215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubProfile: "https://github.com/Tanucoder-stack",
    address: "Jrahi Road Mihinpurwa Bahraich",
    phoneNumber: "9198277927",
    internshipDomain: "Information Technology",
    currentYearBatch: "Passout 2021",
    passingYear: "2021",
    skills: "Java, HTML, CSS, JavaScript, OOP, DBMS",
    personalQuote: "Completed B.Voc in IT from Ewing Christian College, passionate about creativity and innovation.",
    profileImage: tanuSingh,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Experienced IT professional with strong technical foundation.",
    projectsGitHubLink: "https://github.com/Tanucoder-stack/projects"
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default TanuSingh;
