import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            404
          </div>
          <div className="text-2xl text-gray-400 mb-4">Oops! Page not found</div>
        </div>

        {/* TechieHelp Branding */}
        <div className="mb-8">
          <img src="/logo.png" alt="TechieHelp" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">TechieHelp</h1>
          <p className="text-gray-400">Empowering Your Tech Journey</p>
        </div>

        {/* Message */}
        <div className="mb-8">
          <p className="text-lg text-gray-300 mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500">
          <p>© 2024 TechieHelp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
