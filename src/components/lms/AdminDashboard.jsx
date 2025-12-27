import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import LMSLayout from './LMSLayout';
import { Users, BookOpen, Video, Award, TrendingUp, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalVideos: 0,
    totalCertificates: 0,
    activeUsers: 0,
    completionRate: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Fetch users
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const users = usersSnapshot.docs.map(doc => doc.data());

      // Fetch courses
      const coursesSnapshot = await getDocs(collection(db, 'courses'));
      const courses = coursesSnapshot.docs.map(doc => doc.data());

      // Fetch certificates
      const certificatesSnapshot = await getDocs(collection(db, 'certificates'));
      const certificates = certificatesSnapshot.docs.map(doc => doc.data());

      // Calculate stats
      const totalUsers = users.length;
      const totalCourses = courses.length;
      const totalVideos = courses.reduce((total, course) =>
        total + (course.modules?.reduce((moduleTotal, module) =>
          moduleTotal + (module.videos?.length || 0), 0) || 0), 0);
      const totalCertificates = certificates.length;

      // Calculate active users (users with progress in last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const activeUsers = users.filter(user => {
        const lastActivity = user.lastActivity?.toDate();
        return lastActivity && lastActivity > thirtyDaysAgo;
      }).length;

      // Calculate completion rate
      const completionRate = totalUsers > 0 ? (totalCertificates / totalUsers) * 100 : 0;

      setStats({
        totalUsers,
        totalCourses,
        totalVideos,
        totalCertificates,
        activeUsers,
        completionRate
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LMSLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </LMSLayout>
    );
  }

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-blue-100">Manage your learning management system</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Videos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalVideos}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Certificates Issued</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalCertificates}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.activeUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completionRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/admin/courses"
              className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Manage Courses</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Add, edit, or delete courses</p>
              </div>
            </a>

            <a
              href="/admin/users"
              className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <Users className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Manage Users</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">View and manage user accounts</p>
              </div>
            </a>

            <a
              href="/admin/analytics"
              className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">View Analytics</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Detailed performance reports</p>
              </div>
            </a>

            <a
              href="/admin/youtube-resources"
              className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              <Youtube className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">YouTube Resources</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage YouTube video resources</p>
              </div>
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    New certificate issued
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    John Doe completed "React Development" course
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                2 hours ago
              </span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    New user registered
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Jane Smith joined the platform
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                4 hours ago
              </span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Course updated
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    "Python Basics" course was modified
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                1 day ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default AdminDashboard;
