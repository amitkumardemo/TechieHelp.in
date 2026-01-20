import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { mdAmzad } from '../../assets';

const MdAmzadComponent = () => {
  const employee = {
    id: 6,
    fullName: "Supriya Jalani",
    role: "AI/ML Developer",
    email: "amzadcp8406@gmail.com",
    phoneNumber: "+91-8406841048",
    skills: "AI/ML, HTML, CSS, Javascript, Java, React, NodeJS, Python, MySQL, MongoDB, Git & GitHub",
    personalQuote: "Aspiring AI/ML developer with a solid foundation in machine learning concepts and practical data analysis",
    profileImage: mdAmzad,
    linkedInProfile: "https://www.linkedin.com/in/md-amzad-b8547a296",
    githubProfile: "https://github.com/Md-Amzad-313",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default MdAmzadComponent;
