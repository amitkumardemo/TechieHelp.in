import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { mdAmzad } from '../../assets';

const MdAmzadComponent = () => {
  const employee = {
    id: "TH-EMP-2026-004",
    fullName: "Md Amzad",
    role: "Machine Learning Engineer",
    email: "amzad.techiehelp@gmail.com",
    phoneNumber: "+91-XXXXX-XXXXX",
    skills: "Python, TensorFlow, PyTorch, Scikit-learn, Computer Vision, Natural Language Processing, Deep Learning, Data Analytics",
    personalQuote: "Turning complex data into intelligent, actionable insights that shape the future.",
    professionalSummary: "Md Amzad is a Machine Learning Engineer at TechieHelp, specialized in developing advanced AI models. He applies cutting-edge machine learning techniques to solve real-world problems, with a focus on computer vision and neural networks.",
    profileImage: mdAmzad,
    linkedInProfile: "https://www.linkedin.com/in/md-amzad-b8547a296",
    githubProfile: "https://github.com/Md-Amzad-313",
    address: "Jodhpur",
    experience: "AI/ML Developer",
    department: "AI/ML"
  };

  return <EmployeeProfile employee={employee} />;
};

export default MdAmzadComponent;
