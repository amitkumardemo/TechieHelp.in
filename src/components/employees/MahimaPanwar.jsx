import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { mahimaPanwar } from '../../assets';

const MahimaPanwar = () => {
  const employee = {
    id: "TH-EMP-2026-005",
    fullName: "Mahima Panwar",
    role: "Content Creator",
    email: "mahimapanwar240@gmail.com",
    phoneNumber: "6377232837",
    skills: "Content Creation, Media Strategy, Digital Marketing, Brand Communication, Social Media Management, Creative Writing",
    personalQuote: "Creating impactful content that speaks louder than words and resonates with global audiences.",
    professionalSummary: "Mahima is a professional Content Creator at TechieHelp. She specializes in crafting engaging narratives and strategic content that elevates brand presence. Her ability to translate complex tech concepts into relatable media is a key asset to our communication team.",
    profileImage: mahimaPanwar,
    linkedInProfile: "",
    githubProfile: "",
    address: "Pipliya kallan",
    experience: "Part Time Team Member",
    department: "Content"
  };

  return <EmployeeProfile employee={employee} />;
};

export default MahimaPanwar;
