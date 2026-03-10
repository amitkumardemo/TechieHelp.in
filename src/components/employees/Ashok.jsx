import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { ashok } from '../../assets';

const AshokComponent = () => {
  const employee = {
    id: "TH-INT-2026-001",
    fullName: "Ashok",
    role: "Frontend Developer Intern",
    email: "ashokbishnoi0408@gmail.com",
    phoneNumber: "+91-7877865977",
    skills: "HTML, CSS, JavaScript, Bootstrap, Responsive Design, Frontend Optimization, Web Accessibility",
    personalQuote: "Designing the future of the web, one pixel and one line of code at a time.",
    professionalSummary: "Ashok is a talented Frontend Developer Intern at TechieHelp. He focuses on building clean, accessible, and user-friendly web interfaces. His fast-learning ability and passion for modern frontend technologies make him a vital part of our development pipeline.",
    profileImage: ashok,
    linkedInProfile: "https://www.linkedin.com/in/ashok-bishnoi-b19389257",
    githubProfile: "https://github.com/Ashokmaal0051",
    address: "Jodhpur Rajasthan",
    experience: "Intern",
    department: "Development"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AshokComponent;
