import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { adityaKumar } from '../../assets';

const AdityaKumarComponent = () => {
  const employee = {
    id: "TH-EMP-2026-003",
    fullName: "Aditya Kumar",
    role: "Content & Media Specialist",
    email: "adityakumar020306@gmail.com",
    phoneNumber: "+91-9973021001",
    skills: "Capcut, Canva Expert, Content Strategy, Brand Identity, Media Production, Creative Storytelling, Visual Communication",
    personalQuote: "Transforming ideas into compelling stories that connect brands with their audience and drive meaningful engagement.",
    professionalSummary: "Aditya is a creative powerhouse at TechieHelp, serving as a Content & Media Specialist. He bridges the gap between technology and human connection through visual storytelling and strategic media planning. His work ensures that the TechieHelp brand stays at the forefront of digital trends.",
    profileImage: adityaKumar,
    linkedInProfile: "https://www.linkedin.com/in/aditya-kumar-40a256291",
    githubProfile: "https://github.com/adityakumr03",
    address: "Jodhpur",
    experience: "Full Time Team Member",
    department: "Content"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AdityaKumarComponent;
