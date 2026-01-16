import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { AdityaKumar } from '../../assets';

const AdityaKumarComponent = () => {
  const employee = {
    id: 3,
    fullName: "Aditya Kumar",
    role: "Content & Media Specialist",
    email: "aditya@techiehelp.in",
    phoneNumber: "+91-XXXXXXXXXX",
    skills: "Placeholder Skills",
    personalQuote: "Quote",
    profileImage: AdityaKumar,
    linkedInProfile: "https://www.linkedin.com/in/aditya-kumar-placeholder/",
    githubProfile: "https://github.com/adityakumr03",
    address: "Placeholder Address",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AdityaKumarComponent;
