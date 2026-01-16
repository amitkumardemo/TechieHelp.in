import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { SupriyaJalani } from '../../assets';

const SupriyaJalaniComponent = () => {
  const employee = {
    id: 3,
    fullName: "Supriya Jalani",
    role: "UI/UX Designer",
    email: "Supriyaj66705@gmail.com",
    phoneNumber: "+91-7014245775",
    skills: "Unity, Blender, Figma, Python, Java, AR/VR Development, 3D Modeling, UI/UX Design, AI/ML, HTML, CSS, Javascript",
    personalQuote: "Placeholder quote",
    profileImage: SupriyaJalani,
    linkedInProfile: "https://www.linkedin.com/in/supriya-jalani",
    githubProfile: "https://github.com/Suprirya-Jalani",
    address: "Jodhpur, Rajasthan",
    experience: "Fresher"
  };

  return <EmployeeProfile employee={employee} />;
};

export default SupriyaJalaniComponent;
