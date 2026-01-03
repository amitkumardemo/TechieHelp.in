import React from 'react';
import Squares from '../../Reactsbit/Squares/Squares';

const NAVBAR_HEIGHT = 'pt-28'; 

const EmployeeProfile = ({ employee }) => {
  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Employee not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(39, 30, 55)"
          hoverFillColor="rgb(34, 34, 34)"
        />
      </div>
      <div className={`${NAVBAR_HEIGHT} relative z-10 min-h-screen flex items-center justify-center px-6 pb-8 text-white`}>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">

          {/* Profile Header */}
          <div className="text-center mb-10">
            <img
              src={employee.profileImage}
              alt={employee.fullName}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
            />
            <h1 className="text-4xl font-bold mb-2">{employee.fullName}</h1>
            <p className="text-xl text-gray-300">{employee.role}</p>
            <p className="text-sm text-gray-400">
              Employee ID: {employee.id}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">
                Contact Information
              </h2>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Phone:</strong> {employee.phoneNumber}</p>
              <p><strong>Address:</strong> {employee.address}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">
                Professional Details
              </h2>
              <p><strong>Experience:</strong> {employee.experience}</p>
              <p><strong>Skills:</strong> {employee.skills}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Personal Quote</h2>
            <blockquote className="text-lg italic text-gray-300 border-l-4 border-blue-500 pl-4">
              "{employee.personalQuote}"
            </blockquote>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-4">
            {employee.linkedInProfile && (
              <a
                href={employee.linkedInProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            )}

            {employee.githubProfile && (
              <a
                href={employee.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
