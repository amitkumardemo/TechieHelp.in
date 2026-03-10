import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { aryanKumar } from '../../assets';

const AryanKumar = () => {
  const employee = {
    id: "TH-INT-2026-003",
    fullName: "Aryan Kumar",
    role: "Cyber Security Intern",
    email: "aryanmehtahjp@gmail.com",
    phoneNumber: "7050123649",
    skills: "Cyber Security, Network Security, Vulnerability Assessment, Penetration Testing, Risk Management, Digital Forensics",
    personalQuote: "Securing the modern digital frontier, one vulnerability and one line of defense at a time.",
    professionalSummary: "Aryan is a Cyber Security Intern at TechieHelp. He is passionate about auditing and securing complex network systems. His proactive approach to identifying and mitigating risks ensures that our clients' data and infrastructure remain safe from emerging threats.",
    profileImage: aryanKumar,
    linkedInProfile: "",
    githubProfile: "",
    address: "Jodhpur",
    experience: "Intern",
    department: "Security"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AryanKumar;
