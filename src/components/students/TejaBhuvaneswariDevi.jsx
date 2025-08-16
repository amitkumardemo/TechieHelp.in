import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { tejabhuvaneswarideviDuba } from '../../assets';

const TejaBhuvaneswariDevi = () => {
  const studentData = {
    timestamp: "7/21/2025 17:57:35",
    fullName: "DUBA TEJA BHUVANESWARI DEVI",
    email: "tejabhuvaneswaridevi@gmail.com",
    collegeName: "NATIONAL INSTITUTE OF TECHNOLOGY WARANGAL",
    techieHelpStudentID: "TECHIE454149",
    linkedInProfile: "https://www.linkedin.com/in/tbd-4847a12a0/",
    githubProfile: "https://github.com/bhuvi1906-git",
    address: "cheepurupalli, vizianagaram district, Andhra Pradesh",
    phoneNumber: "8885005619",
    internshipDomain: "FULL STACK DEVELOPER",
    currentYearBatch: "3rd YEAR ,2027 batch",
    passingYear: "2027",
    skills: "c,c++,python,HTML",
    personalQuote: "B.Tech Civil Engineering student at NIT Warangal with a strong foundation in structural and geotechnical engineering.",
    profileImage: tejabhuvaneswarideviDuba,
    verified: true,
    resumeLink: "#",
    offerLetterLink: "#",
    completionCertificationsLink: "#",
    feedback: "Excellent full-stack developer with strong engineering background.",
    projectsGitHubLink: "https://github.com/bhuvi1906-git/projects"
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default TejaBhuvaneswariDevi;
