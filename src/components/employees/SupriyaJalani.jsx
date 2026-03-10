import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { supriyaJalani } from '../../assets';

const SupriyaJalaniComponent = () => {
  const employee = {
    id: 3,
    fullName: "Supriya Jalani",
    role: "UI/UX Designer",
    email: "Supriyaj66705@gmail.com",
    phoneNumber: "+91-7014245775",
    skills: "UI/UX Design, Figma, Adobe XD, Prototyping, User Research, Interaction Design, Visual Design Systems",
    personalQuote: "Designing intuitive and aesthetically stunning digital paths that users love to follow.",
    professionalSummary: "Supriya is a dedicated UI/UX Designer at TechieHelp, specializing in user-centric design and high-fidelity prototyping. She transforms complex user journeys into seamless, visually engaging experiences, ensuring that every TechieHelp product is both functional and beautiful.",
    profileImage: supriyaJalani,
    linkedInProfile: "https://www.linkedin.com/in/supriya-jalani",
    githubProfile: "https://github.com/Suprirya-Jalani",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default SupriyaJalaniComponent;
