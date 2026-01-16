import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { MdAmzad } from '../../assets'; 

const MdAmzadComponent = () => {
  const employee = {
    id: 5,
    fullName: "Md Amzad",
    role: "AI/ML Developer",
    email: "amzadcp8406@gmail.com",
    phoneNumber: "+91-8406841048",
    skills: "Html, CSS, JavaScript, React, Node.JS, MySQL, MongoDB, Python, Java, ML",
    personalQuote: "Passionate AI/ML developer focused on creating data-driven and scalable solutions",
    profileImage: MdAmzad, 
    linkedInProfile: "https://www.linkedin.com/in/md-amzad-b8547a296",
    githubProfile: "https://github.com/Md-Amzad-313",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default MdAmzadComponent;
