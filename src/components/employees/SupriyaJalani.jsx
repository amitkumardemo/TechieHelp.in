import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { SupriyaJalani } from '../../assets';

const SupriyaJalaniComponent = () => {
  const employee = {
    id: 3,
    fullName: "Supriya Jalani",
    role: "Employee",
    email: "supriya@techiehelp.in",
    phoneNumber: "+91-XXXXXXXXXX",
    skills: "Placeholder skills",
    personalQuote: "Placeholder quote",
    profileImage: SupriyaJalani,
    linkedInProfile: "#",
    githubProfile: "#",
    address: "Placeholder address",
    experience: "Placeholder experience"
  };

  return <EmployeeProfile employee={employee} />;
};

export default SupriyaJalaniComponent;
