import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { manchalKumar } from '../../assets';

const ManchalKumar = () => {
  const employee = {
    id: "TH-EMP-2026-008",
    fullName: "Mr. Manchal Kumar",
    role: "Full Stack Developer",
    email: "manchalkumar55@gmail.com",
    phoneNumber: "6209380070",
    skills: "Fullstack Development, Scalable Architecture, Backend Systems, Cloud Integration, Performance Optimization, Database Architecture",
    personalQuote: "Designing high-performance systems that scale seamlessly with the speed of innovation.",
    professionalSummary: "Mr. Manchal Kumar is a seasoned Full Stack Developer at TechieHelp, specializing in high-scale backends and system architecture. He ensures that our applications remain stable and performant under heavy loads, providing a rock-solid foundation for our digital products.",
    profileImage: manchalKumar,
    linkedInProfile: "",
    githubProfile: "",
    address: "Sahebganj",
    experience: "Full Time Team Member",
    department: "Development"
  };

  return <EmployeeProfile employee={employee} />;
};

export default ManchalKumar;
