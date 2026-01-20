import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { banner } from '../assets';
import Particles from '../../Reactsbit/Particles/Particles';

const StudentProfileTemplate = ({ student }) => {
  return (
    <div className="min-h-screen bg-transparent py-8 px-4 pt-32 md:pt-36 relative">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles 
          particleCount={100}
          particleColors={["#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"]}
          speed={0.08}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={0.8}
          particleSpread={15}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden pt-24">
          <div
            className="h-48 md:h-56 lg:h-64 bg-cover bg-center bg-no-repeat hidden sm:block"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>

          <div className="relative px-8 pb-8 pt-16">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16">
              <div className="relative">
                <img
                  src={student.profileImage}
                  alt={student.fullName}
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {student.verified && (
                  <FaCheckCircle className="absolute bottom-0 right-0 text-green-500 bg-white rounded-full" size={24} />
                )}
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{student.fullName}</h1>
                <p className="text-lg text-gray-600">{student.internshipDomain}</p>
                <p className="text-sm text-gray-500">{student.collegeName} • Batch {student.currentYearBatch}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 break-words">
              {student.email && (
                <a href={`mailto:${student.email}`} className="flex items-center text-gray-600 hover:text-blue-600 break-words">
                  <FaEnvelope className="mr-2" /> {student.email}
                </a>
              )}
              {student.phoneNumber && student.phoneNumber !== "didn't made yet" && (
                <a href={`tel:${student.phoneNumber}`} className="flex items-center text-gray-600 hover:text-blue-600 break-words">
                  <FaPhone className="mr-2" /> {student.phoneNumber}
                </a>
              )}
              {student.address && (
                <span className="flex items-center text-gray-600 break-words">
                  <FaMapMarkerAlt className="mr-2" /> {student.address}
                </span>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              {student.linkedInProfile && (
                <a href={student.linkedInProfile} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
              )}
              {student.githubProfile && (
                <a href={student.githubProfile} target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-gray-900">
                  <FaGithub size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{student.personalQuote}</p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {student.skills.split(',').map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Done Section */}
            {student.workDone && student.workDone.length > 0 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Done</h2>
                <ul className="space-y-2">
                  {student.workDone.map((work, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Student ID Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Student ID</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-500">TechieHelp ID</span>
                  <p className="font-mono text-blue-600">{student.techieHelpStudentID}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">College</span>
                  <p className="font-medium">{student.collegeName}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Batch</span>
                  <p className="font-medium">{student.currentYearBatch}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Passing Year</span>
                  <p className="font-medium">{student.passingYear}</p>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documents</h3>
              <div className="space-y-3">
                {student.resumeLink && (
                  <a href={student.resumeLink} className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaDownload className="mr-2" /> Resume
                  </a>
                )}
                {student.offerLetterLink && (
                  <a href={student.offerLetterLink} className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaDownload className="mr-2" /> Offer Letter
                  </a>
                )}
                {student.completionCertificationsLink && (
                  <a href={student.completionCertificationsLink} className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaDownload className="mr-2" /> Certificates
                  </a>
                )}
                {student.recommendationLetterLink && (
                  <a href={student.recommendationLetterLink} className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaDownload className="mr-2" /> Recommendation Letter
                  </a>
                )}
              </div>
            </div>

            {/* Feedback Section */}
            {student.feedback && (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Feedback</h3>
                <p className="text-gray-700 italic">"{student.feedback}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileTemplate;
