import React, { useEffect } from 'react';
import Squares from '../../Reactsbit/Squares/Squares';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NAVBAR_HEIGHT = 'pt-28';

const EmployeeProfile = ({ employee }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <Helmet>
          <title>Employee Not Found - TechieHelp</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Employee not found</h1>
          <p className="text-gray-400">The profile you are looking for does not exist or has been moved.</p>
        </div>
      </div>
    );
  }

  // Schema.org Structured Data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": employee.fullName,
    "jobTitle": employee.role,
    "worksFor": {
      "@type": "Organization",
      "name": "TechieHelp"
    },
    "description": employee.professionalSummary || employee.personalQuote,
    "image": employee.profileImage,
    "url": window.location.href,
    "sameAs": [
      employee.linkedInProfile,
      employee.githubProfile
    ].filter(Boolean)
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-blue-500/30">
      <Helmet>
        <title>{employee.fullName} - {employee.role} at TechieHelp</title>
        <meta name="description" content={`${employee.fullName} is working as a ${employee.role} at TechieHelp, contributing to technology innovation and digital solutions.`} />
        <meta name="keywords" content={`${employee.fullName}, ${employee.role}, TechieHelp team, TechieHelp employees`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${employee.fullName} - ${employee.role} at TechieHelp`} />
        <meta property="og:description" content={`${employee.fullName} is a ${employee.role} at TechieHelp.`} />
        <meta property="og:image" content={employee.profileImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(59, 130, 246, 0.05)"
          hoverFillColor="rgba(59, 130, 246, 0.1)"
        />
      </div>

      <div className={`${NAVBAR_HEIGHT} relative z-10 px-6 pb-20`}>
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full opacity-50"></div>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl">
              
              {/* Profile Image with Animated Border */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 ring-8 ring-blue-500/5">
                  <img
                    src={employee.profileImage}
                    alt={employee.fullName}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.607.27 1.154.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Bio Header */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    {employee.department} Team
                  </span>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                    {employee.fullName}
                  </h1>
                  <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                    {employee.role}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-gray-300">
                      <span className="text-blue-500 font-mono text-sm">ID:</span>
                      <span className="font-mono text-sm font-bold tracking-widest">{employee.id}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-gray-300">
                      <span className="text-purple-500 font-bold text-sm">EXP:</span>
                      <span className="text-sm italic">{employee.experience}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Content Grid */}
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left Column: Summary & Expertise */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8 space-y-10"
            >
              {/* Professional Summary */}
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                  Professional Summary
                </h2>
                <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                  <p>
                    {employee.professionalSummary || employee.personalQuote || "Highly skilled professional dedicated to driving innovation at TechieHelp. Leveraging extensive expertise to deliver state-of-the-art solutions and maintain the highest standards of digital excellence."}
                  </p>
                  <p className="italic text-gray-500 text-base">
                    "{employee.personalQuote || "Committed to excellence and continuous innovation."}"
                  </p>
                </div>
              </div>

              {/* Key Expertise */}
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-purple-500 rounded-full"></span>
                  Technical Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {employee.skills.split(',').map((skill, index) => (
                    <motion.span
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      key={index}
                      className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-gray-300 text-sm font-medium transition-colors"
                    >
                      {skill.trim()}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact & Socials */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 space-y-10"
            >
              {/* Contact Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-blue-500/20">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm text-gray-300 break-all">{employee.email}</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-purple-500/20">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm text-gray-300">{employee.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="bg-[#0077b5]/5 backdrop-blur-xl rounded-[2rem] border border-blue-500/10 p-8 shadow-[0_0_20px_rgba(0,119,181,0.05)]">
                <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
                <div className="grid grid-cols-1 gap-4">
                  {employee.linkedInProfile && (
                    <a
                      href={employee.linkedInProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#0077b5] text-gray-300 hover:text-white rounded-2xl transition-all border border-white/5 group"
                    >
                      <span className="font-bold tracking-wide">LinkedIn Profile</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  )}
                  {employee.githubProfile && (
                    <a
                      href={employee.githubProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#24292e] text-gray-300 hover:text-white rounded-2xl transition-all border border-white/5 group"
                    >
                      <span className="font-bold tracking-wide">GitHub Archive</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
