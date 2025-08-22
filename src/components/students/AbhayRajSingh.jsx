import React from 'react';
import StudentProfileTemplate from '../StudentProfileTemplate';
import { abhayRajSingh } from '../../assets/index.js';

const AbhayRajSingh = () => {
  const student = {
    timestamp: "7/21/2025 14:55:53",
    fullName: "Abhay Raj Singh",
    email: "abhayrajsingh28334@gmail.com",
    collegeName: "IILM University Greater Noida",
    techieHelpStudentID: "TECHIE560518",
    linkedInProfile: "https://www.linkedin.com/in/abhay-raj-singh-6152ba27a/",
    githubProfile: "https://github.com/ABHAYRAJSINGH11",
    address: "Greater Noida, Uttarpradesh",
    phoneNumber: "9634189961",
    internshipDomain: "MERN STACK DEVELOPER",
    currentYearBatch: "3rd Year, 2023-2027",
    passingYear: "2027",
    skills: "HTML,CSS,JAVASCRIPT,JAVA",
    personalQuote: "Motivated Computer Science undergraduate with practical experience in web development, software engineering, and artificial intelligence. Passionate about building secure, efficient, and responsive applications.",
    profileImage: abhayRajSingh,
    verified: true,
    resumeLink: "https://drive.google.com/file/d/1YJ1-i0jqbQBg5InHfKFYBkMMZpmYzeEr/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1xHhG6ZMghz587pKFNJdktF4kgwAdZYEi/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1zUvrfR3oMvVmJRCkESkWrheMajPCK587/view?usp=sharing",
    feedback: "Highly motivated and skilled developer.",
    projectsGitHubLink: "https://github.com/ABHAYRAJSINGH11/projects",
    workDone: [
      "Doctors Appointment Platform – Built a Full Stack Doctors Appointment App with Video Call in React 19 + Next JS 15 with Tailwind CSS, NeonDB, Prisma, Clerk Authentication, Vonage Shadcn UI",
      "Job Portal – Built a Full Stack Job Portal in React JS with Tailwind CSS, Supabase, Clerk Authentication Shadcn UI",
      "AI Finance Platform – Built a Full Stack AI Finance Platform in React 19 + Next JS 15 with Tailwind CSS, Supabase, Prisma, Clerk Authentication, Inngest, Arcjet Shadcn UI",
    ]
  };

  return (
    <StudentProfileTemplate student={student} />
  );
};

export default AbhayRajSingh;
