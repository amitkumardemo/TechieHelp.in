import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { AmitPhoto } from '../../assets';

const AmitKumar = () => {
  const employee = {
    id: 2,
    fullName: "Amit Kumar",
    role: "Founder & CEO",
    email: "amit@techiehelp.in",
    phoneNumber: "+91-7673825079",
    skills: "Leadership, Business Strategy, Technology Innovation",
    personalQuote: "Building the future of tech education and innovation",
    profileImage: AmitPhoto,
    linkedInProfile: "https://www.linkedin.com/in/amit-kumar-686196225/",
    githubProfile: "https://github.com/amitkumardemo",
    address: "Jodhpur, Rajasthan",
    experience: "2+ years in tech industry"
  };

  return <EmployeeProfile employee={employee} />;
};

export default AmitKumar;
