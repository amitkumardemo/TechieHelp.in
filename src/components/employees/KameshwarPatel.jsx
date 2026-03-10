import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { kameshwarPatel } from '../../assets';

const KameshwarPatelComponent = () => {
  const employee = {
    id: "TH-EMP-2026-001",
    fullName: "Kameshwar Patel",
    role: "Frontend Developer Intern",
    email: "patelkameshwar01@gmail.com",
    phoneNumber: "+91-8877396336",
    skills: "HTML5, CSS3, JavaScript, React, Node.JS, Express.JS, Tailwind CSS, MySQL, Vite, Git & GitHub, MongoDB, Postman, Vercel, Render, Full-Stack Optimization",
    personalQuote: "From UI to APIs — crafting seamless digital experiences with precision and passion.",
    professionalSummary: "Kameshwar is a high-impact Frontend Developer and Full-Stack enthusiast. He specializes in creating responsive, high-performance web applications using modern JavaScript frameworks. His dedication to clean code and intuitive user interfaces makes him a cornerstone of the development team at TechieHelp.",
    profileImage: kameshwarPatel,
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    address: "Jodhpur",
    experience: "Full Time Team Member",
    department: "Development"
  };

  return <EmployeeProfile employee={employee} />;
};

export default KameshwarPatelComponent;
