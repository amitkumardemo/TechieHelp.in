import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, BookOpen, Home } from 'lucide-react';

const LMSLayout = ({ children }) => {
  const { user, userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/lms/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const isAdmin = userProfile?.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  TechieHelp LMS
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {userProfile?.displayName || user?.displayName || 'User'}
                  </span>
                </button>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white dark:bg-gray-800 shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              {isAdmin ? (
                // Admin Navigation
                <>
                  <a
                    href="/lms/admin/dashboard"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="/lms/admin/courses"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Course Management</span>
                  </a>
                  <a
                    href="/lms/admin/users"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span>User Management</span>
                  </a>
                </>
              ) : (
                // Student Navigation
                <>
                  <a
                    href="/lms/student/dashboard"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="/lms/student/courses"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>My Courses</span>
                  </a>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LMSLayout;
