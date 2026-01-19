import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { ashok } from '../../assets';

const AshokComponent = () => {
  const employee = {
    id: 5,
    fullName: "Ashok",
    role: "Frontend Developer",
    email: "ashokbishnoi0408@gmail.com",
    phoneNumber: "+91-7877865977",
    skills: "HTML, CSS, JavaScript, Bootstrap",
    personalQuote: "Transforming ideas into compelling stories that connect brands with their audience",
    profileImage: ashok,
    linkedInProfile: "https://www.linkedin.com/in/ashok-bishnoi-b19389257",
    githubProfile: "https://github.com/Ashokmaal0051",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AshokComponent;
