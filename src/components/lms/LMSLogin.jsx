import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, Eye, EyeOff, UserCheck, Shield } from "lucide-react";

const LMSLogin = () => {
  const { loginWithEmail, user, userProfile } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Role-based redirection
  useEffect(() => {
    if (user && userProfile) {
      console.log('LMSLogin - User Profile:', userProfile);
      console.log('LMSLogin - User Role:', userProfile.role);
      console.log('LMSLogin - User Email:', user.email);
      
      // Add a small delay to ensure profile is fully loaded
      const timer = setTimeout(() => {
        if (userProfile.role === 'admin') {
          console.log('LMSLogin - Redirecting admin to admin dashboard');
          navigate('/lms/admin/dashboard', { replace: true });
        } else if (userProfile.role === 'student') {
          console.log('LMSLogin - Redirecting student to student dashboard');
          if (userProfile.batchId) {
            navigate('/lms/student/dashboard', { replace: true });
          } else {
            navigate('/lms/batch-selection', { replace: true });
          }
        } else {
          console.log('LMSLogin - Unknown role, redirecting to student batch selection');
          navigate('/lms/batch-selection', { replace: true });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      console.log('LMSLogin - Waiting for user and profile:', { user: !!user, userProfile: !!userProfile });
    }
  }, [user, userProfile, navigate]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      await loginWithEmail(formData.email, formData.password);
    } catch (err) {
      setError(err.message || "Failed to login");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPlaceholderCredentials = () => {
    if (activeTab === 'admin') {
      return {
        email: "support@techiehelp.in",
        password: "amitkumar12@"
      };
    }
    return {
      email: "",
      password: ""
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            TechieHelp LMS
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to continue learning
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('student')}
            className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'student'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <UserCheck className="h-4 w-4 mr-2" />
            Student Login
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'admin'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <Shield className="h-4 w-4 mr-2" />
            Admin Login
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Auth Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {activeTab === 'admin' ? 'Admin Portal' : 'Student Portal'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeTab === 'admin'
                ? 'Access administrative features'
                : 'Access your learning dashboard'
              }
            </p>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={activeTab === 'admin' ? "support@techiehelp.in" : "Enter your email"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={activeTab === 'admin' ? "amitkumar12@" : "Enter your password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-medium py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed ${
                activeTab === 'admin'
                  ? 'bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white'
              }`}
            >
              {loading ? "Signing in..." : `Sign In as ${activeTab === 'admin' ? 'Admin' : 'Student'}`}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LMSLogin;
