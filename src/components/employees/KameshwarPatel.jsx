import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { kameshwarPatel } from '../../assets';

const KameshwarPatelComponent = () => {
  const employee = {
    id: 3,
    fullName: "Kameshwar Patel",
    role: "Frontend Developer",
    email: "patelkameshwar01@gmail.com",
    phoneNumber: "+91-8877396336",
    skills: "HTML5, CSS3, JavaScript, React, Node.JS, Express.JS, Tailwind CSS, MySQL, Vite, Git & GitHub, MongoDB, Postman, Vercel, Render, Canva, MS Office",
    personalQuote: "From UI to APIs — and everything in between.",
    profileImage: kameshwarPatel,
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default KameshwarPatelComponent;
