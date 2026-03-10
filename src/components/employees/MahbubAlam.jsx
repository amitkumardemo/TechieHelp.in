import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { mahbubAlam } from '../../assets';

const MahbubAlam = () => {
  const employee = {
    id: "TH-EMP-2026-007",
    fullName: "Mahbub Alam",
    role: "Full Stack Developer",
    email: "mahbub.23jiaiml033@jietjodhpur.ac.in",
    phoneNumber: "8603051059",
    skills: "Full Stack Development, Web Technologies, React, Node.js, Database Management, API Design, Deployment Pipelines",
    personalQuote: "Building the modern web, one robust and scalable line of code at a time.",
    professionalSummary: "Mahbub is a versatile Full Stack Developer at TechieHelp. He bridges the gap between client expectations and technical reality, delivering end-to-end web solutions that are as efficient as they are innovative.",
    profileImage: mahbubAlam,
    linkedInProfile: "",
    githubProfile: "",
    address: "Muzaffarpur, Bihar",
    experience: "Full Time Team Member",
    department: "Development"
  };

  return <EmployeeProfile employee={employee} />;
};

export default MahbubAlam;
