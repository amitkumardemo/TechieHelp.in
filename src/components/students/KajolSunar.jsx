import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { kajolSunar } from '../../assets';

const KajolSunar = () => {
  const student = {
    timestamp: "11/26/2025 23:36:39",
    fullName: "Kajol Sunar",
    email: "kajolsunar1292@gmail.com",
    collegeName: "St. Joseph University",
    techieHelpStudentID: "TECHIE460978",
    linkedInProfile: "www.linkedin.com/in/kajol-sunar-ks",
    githubProfile: "https://github.com/Ks1540",
    address: "3rd mile, Dimapur, Nagaland",
    phoneNumber: "9366124046",
    internshipDomain: "App Development",
    currentYearBatch: "3rd Year 5th Semester(2023)",
    passingYear: "2027",
    skills: "C and C++ programing Python Html Css Javascript Data Structures and algorithm Fundamentals of AI MySQL",
    personalQuote: "Tech Enthusiast",
    profileImage: kajolSunar,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1k-zk3GU6dIe369xNpWwMbgfzBwDCgLFj",
    offerLetterLink: "https://drive.google.com/open?id=1QNiJl2zJuzTE94qjVDlOuMxseS5NkWzK",
    completionCertificationsLink: "",
    feedback: "Skilled app developer with strong programming fundamentals.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default KajolSunar;
