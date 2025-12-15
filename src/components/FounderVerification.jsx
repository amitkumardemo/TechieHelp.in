import React from 'react';
import { logo, AmitPhoto, linkedin } from '../assets';

const FounderVerification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Logo */}
        <div className="text-center mb-10">
          <img src={logo} alt="TechieHelp Logo" className="h-20 mx-auto drop-shadow-md" />
        </div>

        {/* Verification Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 mb-10 border border-blue-100">
          <h1 className="text-4xl font-extrabold text-center text-blue-900 tracking-tight">
            ✔ Founder Identity Verification
          </h1>
          <p className="text-center text-gray-600 mt-3 text-lg">
            Official Digital Verification Page for TechieHelp Founder
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src={AmitPhoto}
                alt="Amit Kumar - Founder & CEO"
                className="w-52 h-52 rounded-full object-cover border-4 border-blue-200 shadow-xl"
              />
            </div>

            {/* Details Panel */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Founder Details */}
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-5 border-b pb-2 border-blue-200">
                    Founder Details
                  </h2>

                  <div className="space-y-4">
                    <Detail label="Name" value="Amit Kumar" />
                    <Detail label="Title" value="Founder & CEO – TechieHelp" />
                    <Detail label="Email" value="amitk25783@gmail.com" />
                    <Detail label="Website" value="www.techiehelp.in" />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        LinkedIn
                      </label>
                      <div className="flex items-center mt-1">
                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
                        <p className="text-gray-800 font-medium">LinkedIn Profile</p>
                      </div>
                    </div>

                    <Detail label="Location" value="Jodhpur, Rajasthan, India" />
                  </div>
                </div>

                {/* Company Credentials */}
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-5 border-b pb-2 border-blue-200">
                    Company Credentials
                  </h2>

                  <div className="space-y-4">
                    <Detail label="ISO Certification No" value="QMS/251180" />
                    <Detail label="MSME Registration No" value="UDYAM-RJ-22-012-6904" />
                    <Detail
                      label="National Internship Portal Ref ID"
                      value="CORPORATEe85161cf2301743278433"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 p-8 bg-blue-50 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              About TechieHelp
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              TechieHelp is an AI-first software development and automation company 
              empowering organizations and students with intelligent digital solutions, 
              modern AI technologies, and real-world skill-based training programs.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-green-100 border border-green-300 rounded-full shadow-md">
              <span className="text-green-700 text-xl font-semibold">
                ✔ Verified Founder Identity
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          © 2025 TechieHelp — Official Verification Page
        </p>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <p className="text-gray-900 font-medium text-lg mt-0.5">{value}</p>
  </div>
);

export default FounderVerification;
