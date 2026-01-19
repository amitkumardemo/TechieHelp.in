import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { adityaKumar } from '../../assets';

const AdityaKumarComponent = () => {
  const employee = {
    id: 4,
    fullName: "Aditya Kumar",
    role: "Content & Media Specialist",
    email: "adityakumar020306@gmail.com",
    phoneNumber: "+91-9973021001",
    skills: "Capcut, Canva editor, Canva picture creater",
    personalQuote: "Transforming ideas into compelling stories that connect brands with their audience",
    profileImage: adityaKumar,
    linkedInProfile: "https://www.linkedin.com/in/aditya-kumar-40a256291",
    githubProfile: "https://github.com/adityakumr03",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AdityaKumarComponent;
