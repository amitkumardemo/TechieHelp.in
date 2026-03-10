import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { charchitaSaini } from '../../assets';

const CharchitaSaini = () => {
  const employee = {
    id: "TH-EMP-2026-006",
    fullName: "Charchita Saini",
    role: "Software Engineer",
    email: "charchitasaini@gmail.com",
    phoneNumber: "8619103229",
    skills: "Software Development, Problem Solving, Algorithms, Java, C++, System Design, Agile Methodologies",
    personalQuote: "Engineering robust and scalable solutions for a progressively better tomorrow.",
    professionalSummary: "Charchita is a Software Engineer at TechieHelp, known for her strong algorithmic thinking and problem-solving skills. She contributes to building core system functionalities and ensuring technical excellence across our software products.",
    profileImage: charchitaSaini,
    linkedInProfile: "",
    githubProfile: "",
    address: "Jodhpur",
    experience: "Full Time Team Member",
    department: "Development"
  };

  return <EmployeeProfile employee={employee} />;
};

export default CharchitaSaini;
