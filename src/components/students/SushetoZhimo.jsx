import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { sushetoZhimo } from '../../assets';

const SushetoZhimo = () => {
  const student = {
    timestamp: "11/27/2025 4:45:37",
    fullName: "Susheto Zhimo",
    email: "sushetozhimo@gmail.com",
    collegeName: "St.Joseph University, Nagaland",
    techieHelpStudentID: "TECHIE422851",
    linkedInProfile: "https://in.linkedin.com/in/susheto-zhimo-888a55305",
    githubProfile: "https://github.com/sushetozhimo",
    address: "chumukedima, Nagaland",
    phoneNumber: "9863613968",
    internshipDomain: "Front-end",
    currentYearBatch: "3rd year 5th semester (2023)",
    passingYear: "2027",
    skills: "Python, HTML, CSS, C",
    personalQuote: "Every small step forward is a conversation between who you are and the dream you're reaching for.",
    profileImage: sushetoZhimo,
    verified: true,
    resumeLink: "https://drive.google.com/open?id=14drlMlZB896QNHGjNIUO4yiR-Zkg7lq3",
    offerLetterLink: "https://drive.google.com/open?id=19hueblmyFut4dCabLBa21kJS1yyyMNbW",
    completionCertificationsLink: "https://drive.google.com/file/d/1Ll1ocUslUhq4RUcfpEqH-pQj2z5J5ufC/view?usp=drive_link",
    recommendationLetterLink: "https://drive.google.com/file/d/1XkRkURi6roFUjZcqS9tg5gOeWYSmSIcP/view?usp=drive_link",
    feedback: "Motivated frontend developer with strong foundational skills.",
    workDone: []
  };

  return <StudentProfileTemplate student={student} />;
};

export default SushetoZhimo;
