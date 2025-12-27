import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import LMSLayout from './LMSLayout';
import { BookOpen, Play, CheckCircle, Clock, Award, TrendingUp, FileQuestion, FileText, GraduationCap } from 'lucide-react';

const StudentDashboard = () => {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userProfile?.batchId) {
      fetchCoursesAndProgress();
    }
  }, [userProfile]);

  const fetchCoursesAndProgress = async () => {
    try {
      const coursesQuery = query(
        collection(db, 'courses'),
        where('batchId', '==', userProfile.batchId)
      );
      const coursesSnapshot = await getDocs(coursesQuery);
      const coursesData = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setCourses(coursesData);

      const progressData = {};
      for (const course of coursesData) {
        const progressRef = doc(db, 'progress', `${user.uid}_${course.id}`);
        const progressSnap = await getDoc(progressRef);
        if (progressSnap.exists()) {
          progressData[course.id] = progressSnap.data();
        }
      }
      setProgress(progressData);
    } catch (error) {
      console.error('Error fetching courses and progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCourseProgress = (courseId) => {
    const courseProgress = progress[courseId];
    if (!courseProgress) return 0;

    const totalVideos = courseProgress.totalVideos || 0;
    const completedVideos = courseProgress.completedVideos || 0;
    return totalVideos > 0 ? (completedVideos / totalVideos) * 100 : 0;
  };

  const getTotalProgress = () => {
    if (courses.length === 0) return 0;
    const totalProgress = courses.reduce((sum, course) => sum + getCourseProgress(course.id), 0);
    return totalProgress / courses.length;
  };

  const getCompletedCourses = () => {
    return courses.filter(course => getCourseProgress(course.id) === 100).length;
  };

  const handleCourseClick = (courseId) => {
    navigate(`/lms/student/courses/${courseId}`);
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
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, {userProfile?.displayName || user?.displayName}!
          </h1>
          <p className="text-blue-100">
            Continue your learning journey in the {userProfile?.batchId} batch
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{courses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{getCompletedCourses()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{getTotalProgress().toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Certificates</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{getCompletedCourses()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Courses</h2>
          {courses.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses available</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Courses will be added to your batch soon. Check back later!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => {
                const courseProgress = getCourseProgress(course.id);
                const totalVideos = course.modules?.reduce((total, module) => 
                  total + (module.videos?.length || 0), 0) || 0;
                const totalQuizzes = course.modules?.reduce((total, module) => 
                  total + (module.quizzes?.length || 0), 0) || 0;
                const totalAssignments = course.modules?.reduce((total, module) => 
                  total + (module.assignments?.length || 0), 0) || 0;
                const totalExams = course.modules?.reduce((total, module) => 
                  total + (module.exams?.length || 0), 0) || 0;

                return (
                  <div 
                    key={course.id} 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    {course.thumbnail && (
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {course.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>{courseProgress.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${courseProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Course Stats */}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          <span>{course.modules?.length || 0} modules</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration || 'TBD'}</span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1 text-red-600" />
                          <span>{totalVideos} videos</span>
                        </div>
                        <div className="flex items-center">
                          <FileQuestion className="h-4 w-4 mr-1 text-purple-600" />
                          <span>{totalQuizzes} quizzes</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1 text-green-600" />
                          <span>{totalAssignments} tasks</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1 text-orange-600" />
                          <span>{totalExams} exams</span>
                        </div>
                      </div>

                      {/* Continue Button */}
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        {courseProgress > 0 ? 'Continue Learning' : 'Start Course'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Access */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/student/youtube-resources"
              className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              <Youtube className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">YouTube Resources</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Browse curated learning videos</p>
              </div>
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className="flex items-center">
                  <Play className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {getCourseProgress(course.id) > 0 ? 'Studying' : 'Started'} {course.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {getCourseProgress(course.id) > 0 ? `${getCourseProgress(course.id).toFixed(1)}% complete` : 'Just started'}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default StudentDashboard;