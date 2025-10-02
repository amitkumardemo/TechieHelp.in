import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { Ankit } from '../../assets';


const AnkitKumarKeshari = () => {
  const student = {
    timestamp: "8/20/2025 20:06:40",
    fullName: "ANKIT KUMAR KESHARI",
    email: "ankitkeshari550@gmail.com",
    collegeName: "Indian Institute of Information Technology Dharwad",
    techieHelpStudentID: "TH123456",
    linkedInProfile: "https://www.linkedin.com/in/ankit-keshri-0150b12ba/",
    githubProfile: "https://github.com/AnkitKeshri018",
    address: "IIIT Dharwad ,Ittigatti Rd, near Sattur Colony, Karnataka 580009",
    phoneNumber: "9693594630",
    internshipDomain: "Frontend Web Development",
    currentYearBatch: "3rd Year Btech Computer Science",
    passingYear: "2027",
    skills: "Html ,CSS, Javascript,ReactJs, Tailwind Css, Bootstrap",
    personalQuote: "Web development is about solving problems step by step and making ideas work on the screen.",
    profileImage: Ankit,
    idCardStyle: "default",
    cardColor: "from-teal-600 to-teal-800",
    profilePath: "/intern/ankit-kumar-keshari",
    verified: true,
    resumeLink: "https://drive.google.com/open?id=1mPw0nkrK3vFApxdGQ3vG5_fcBPRgXHHc",
    offerLetterLink: "https://drive.google.com/file/d/1z6aMfKxD9VLC5p5yep1PbJYlhttNWjto/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1FKime_OowGG0vufynRrgbtHYkFwqJVBP/view?usp=sharing",
    feedback: "",
    workDone: [],
    internshipTenure: ""
  };

  return <StudentProfileTemplate student={student} />;
};

export default AnkitKumarKeshari;
