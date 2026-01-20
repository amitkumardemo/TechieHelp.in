import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { bsdenephom } from '../../assets';

const Bsdenephom = () => {
  const student = {
    timestamp: "11/27/2025 17:00:02",
    fullName: "B S DEN E PHOM",
    email: "bsdenephom@gmail.com",
    collegeName: "St. Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE111066",
    linkedInProfile: "https://www.linkedin.com/in/bsden-ephom-49695039b/",
    githubProfile: "https://github.com/bsdenephom",
    address: "Ward-7, Chumukedima,Nagaland",
    phoneNumber: "9362795347",
    internshipDomain: "Full Stack",
    currentYearBatch: "3rd year (2023-2027)",
    passingYear: "2027",
    skills: "C, Python, MySQL, HTML, CSS, DBMS, DS, Algorithms",
    personalQuote: "Motivated to learn new stuffs and technologies",
    profileImage: bsdenephom,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1y0WFB-_vLbfUtnvZhle2skrmIefTN8ky",
    offerLetterLink: "https://drive.google.com/open?id=17ZgYza3NdjQFkx4zgbWjqqKGKgCVjDXH",
    completionCertificationsLink: "https://drive.google.com/file/d/12Br-4Ch1YsELUv8vnfTVBkbmPzqA96L5/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1BpTJnm0y6rBs7pPKoTITVt5JOpMF9dsa/view?usp=drive_link",
    feedback: "Motivated full stack developer with comprehensive technical skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default Bsdenephom;
