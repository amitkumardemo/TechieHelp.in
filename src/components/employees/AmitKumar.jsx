import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { AmitPhoto } from '../../assets';

const AmitKumar = () => {
  const employee = {
    id: "TH-FND-001",
    fullName: "Amit Kumar",
    role: "Founder & CEO",
    email: "amitkumar.techiehelp@gmail.com",
    phoneNumber: "+91-7073130165",
    skills: "Software Architecture, Strategic Planning, Business Development, AI Implementation, Cross-functional Leadership, Tech Innovation",
    personalQuote: "Leading tech innovation to solve real-world problems and empower the next generation of engineers.",
    professionalSummary: "Founder and visionary leader at TechieHelp, specializing in building scalable AI solutions and driving digital transformation. With over 2 years of experience in the tech industry, Amit has a proven track record of architecting complex systems and leading high-performing teams to deliver exceptional value to clients worldwide.",
    profileImage: AmitPhoto,
    linkedInProfile: "https://www.linkedin.com/in/amit-kumar-686196225/",
    githubProfile: "https://github.com/amitkumardemo",
    address: "Jodhpur",
    experience: "2+ years in tech industry",
    department: "Leadership"
  };

  return <EmployeeProfile employee={employee} />;
};


export default AmitKumar;
