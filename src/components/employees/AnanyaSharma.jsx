import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { ananyaSharma } from '../../assets';

const AnanyaSharma = () => {
  const employee = {
    id: "TH-EMP-2026-002",
    fullName: "Ananya Sharma",
    role: "HR Manager",
    email: "ananyasharma1.2007@gmail.com",
    phoneNumber: "8619195740",
    skills: "Human Resources, Talent Acquisition, Employee Engagement, Organizational Culture, Communication, Talent Management, Strategic HR",
    personalQuote: "Empowering our most valuable asset—our people—to reach their full professional potential.",
    professionalSummary: "Ananya is the HR Manager at TechieHelp, dedicated to fostering a positive and productive work environment. She leads talent acquisition and employee engagement initiatives, ensuring that TechieHelp remains a top destination for tech talent and maintains a world-class corporate culture.",
    profileImage: ananyaSharma,
    linkedInProfile: "",
    githubProfile: "",
    address: "Jodhpur",
    experience: "HR Lead",
    department: "HR"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AnanyaSharma;
