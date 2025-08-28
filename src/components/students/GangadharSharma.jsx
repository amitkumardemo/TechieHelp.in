import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';

const KaviyaranP = () => {
  const student = {
    timestamp: "20/08/2025",
    fullName: "GANGA DHAR SHARMA",
    email: "2401109070@ptuniv.edu.in",
    collegeName: "PUDUCHERRY TECHNOLOGICAL UNIVERSITY",
    techieHelpStudentID: "TECHIE426947",
    linkedInProfile: "",
    githubProfile: "https://github.com/monkeykavi",
    address: "Pondicherry",
    phoneNumber: "8883802327",
    internshipDomain: "Front End Development",
    currentYearBatch: "July 2025 Batch",
    passingYear: "2025",
    skills: "",
    personalQuote: "",
    profileImage: "",
    idCardStyle: "default",
    cardColor: "from-gray-600 to-gray-800",
    profilePath: "/intern/ganga-dhar-sharma",
    verified: true,
    resumeLink: "",
    offerLetterLink: "",
    completionCertificationsLink: "",
    feedback: "Successfully completed internship in Front End Development under mentorship of TechieHelp.",
    workDone: [
      "Completed internship training in Front End Development.",
      "Worked on responsive web design tasks.",
      "Learned and practiced real-world frontend technologies."
    ],
    internshipTenure: "20th July 2025 to 20th Aug 2025"
  };

  return <StudentProfileTemplate student={student} />;
};

export default KaviyaranP;
