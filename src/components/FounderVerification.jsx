import React from 'react';
import AmitPhoto from "../assets/AmitPhoto.jpg";

const FounderVerification = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={AmitPhoto}
            alt="Amit Kumar"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
        </div>

        {/* Name with Verified Badge */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            Amit Kumar
            <span className="text-green-600 text-xl">✅</span>
          </h1>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Role:</span>
            <span className="text-gray-900">Founder & CEO</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Organization:</span>
            <span className="text-gray-900">TechieHelp</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-900">founder@techiehelp.in</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/amit-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              linkedin.com/in/amit-kumar
            </a>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">GitHub:</span>
            <a
              href="https://github.com/amitkumardemo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              github.com/amitkumardemo
            </a>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Verification Status:</span>
            <span className="text-green-600 font-semibold">✅ Verified & Active</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Issued By:</span>
            <span className="text-gray-900">TechieHelp</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Verification ID:</span>
            <span className="text-gray-900">TH-FDR-001</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Date of Issue:</span>
            <span className="text-gray-900">{currentDate}</span>
          </div>
        </div>

        {/* Security Note */}
        <div className="text-center text-sm text-gray-600 border-t pt-4">
          This QR-based verification confirms the official identity issued by TechieHelp. Any modification invalidates this verification.
        </div>
      </div>
    </div>
  );
};

export default FounderVerification;
