import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-primary p-12 text-white">
      <div className="max-w-5xl mx-auto bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6">Welcome back, {user?.displayName || "User"}!</h1>
        <p className="text-lg">
          This is your professional dashboard. Here you can view your profile, activities, and manage your account.
        </p>
        {/* Add more dashboard components or summaries here */}
      </div>
    </div>
  );
};

export default Dashboard;
