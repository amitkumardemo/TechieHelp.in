import React from 'react';
import EmployeeProfile from '../EmployeeProfile';
import { AmitPhoto } from '../../assets';

const AmitKumar = () => {
  const employee = {
    id: 1,
    fullName: "Amit Kumar",
    role: "Founder & CEO",
    email: "amitk25783@gmail.com",
    phoneNumber: "+91-7673825079",
    skills: "Python, Java, JavaScript, C, React.js, Next.js, Tailwind CSS, Shadcn UI, Node.js, Prisma ORM, MySQL, NeonDB, Git, GitHub, Vercel, Clerk Auth, NumPy, Pandas, Matplotlib, Leadership, Teamwork, Mentorship, Communication",
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
