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
    resumeLink: "https://drive.google.com/file/d/194CGdPZrm39vJnxHC_wBm0F2rhOnm72v/view?usp=sharing",
    offerLetterLink: "https://drive.google.com/file/d/1i7qXH1E39BYbc3LNiQlCe7vQWL8gY1Ea/view?usp=sharing",
    completionCertificationsLink: "https://drive.google.com/file/d/1PjPvvzXqAEOCNMdxuDiaNmPlqLESb0us/view?usp=sharing",
    feedback: "Excellent full-stack developer with strong engineering background.",
    projectsGitHubLink: "https://github.com/bhuvi1906-git/projects",
    workDone: [
      "Doctors Appointment Platform – Built a Full Stack Doctors Appointment App with Video Call in React 19 + Next JS 15 with Tailwind CSS, NeonDB, Prisma, Clerk Authentication, Vonage Shadcn UI",
      "Job Portal – Built a Full Stack Job Portal in React JS with Tailwind CSS, Supabase, Clerk Authentication Shadcn UI",
      "AI Finance Platform – Built a Full Stack AI Finance Platform in React 19 + Next JS 15 with Tailwind CSS, Supabase, Prisma, Clerk Authentication, Inngest, Arcjet Shadcn UI",
      "Game Development Agency – A fully animated gaming-style website with interactive UI, smooth animations, and responsive design using HTML, CSS, and JavaScript",
      "Portfolio Website – A modern developer portfolio built with React JS & Tailwind CSS, featuring auto-updated GitHub & LeetCode achievements",
      "Restaurant Website – A responsive and animated website for restaurants using HTML, CSS, and JavaScript, with sections for menu, gallery, and contact"
    ]
  };

  return <StudentProfileTemplate student={studentData} />;
};

export default TejaBhuvaneswariDevi;
