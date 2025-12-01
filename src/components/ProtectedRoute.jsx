import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, userProfile, loading } = useAuth();

  console.log('ProtectedRoute check:', {
    loading,
    user: user?.email,
    userProfile,
    requiredRole,
    currentPath: window.location.pathname
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    console.log('No user, redirecting to login');
    return <Navigate to="/lms/login" replace />;
  }

  if (!userProfile) {
    console.log('No userProfile, showing loading');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user profile...</p>
        </div>
      </div>
    );
  }

  console.log('Role check:', {
    userRole: userProfile.role,
    requiredRole,
    roleMatch: userProfile.role === requiredRole
  });

  if (requiredRole && userProfile.role !== requiredRole) {
    console.log('Role mismatch, redirecting based on actual role');
    // Redirect to appropriate dashboard based on actual role
    if (userProfile.role === 'admin') {
      console.log('Redirecting admin to admin dashboard');
      return <Navigate to="/lms/admin/dashboard" replace />;
    } else if (userProfile.role === 'student') {
      console.log('Redirecting student to student dashboard');
      if (userProfile.batchId) {
        return <Navigate to="/lms/student/dashboard" replace />;
      } else {
        return <Navigate to="/lms/batch-selection" replace />;
      }
    } else {
      console.log('Unknown role, redirecting to login');
      return <Navigate to="/lms/login" replace />;
    }
  }

  console.log('Access granted to protected route');
  return children;
};

export default ProtectedRoute;
