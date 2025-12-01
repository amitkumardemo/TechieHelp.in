import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import LMSLayout from './LMSLayout';
import VideoPlayer from './VideoPlayer';
import CertificateGenerator from './CertificateGenerator';
import { Play, CheckCircle, Lock, Award, ArrowLeft, BookOpen, Clock } from 'lucide-react';

const CourseView = () => {
  const { courseId } = useParams();
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState({});
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    if (courseId && user) {
      fetchCourseAndProgress();
    }
  }, [courseId, user]);

  const fetchCourseAndProgress = async () => {
    try {
      // Fetch course
      const courseRef = doc(db, 'courses', courseId);
      const courseSnap = await getDoc(courseRef);

      if (courseSnap.exists()) {
        const courseData = courseSnap.data();
        setCourse({ id: courseSnap.id, ...courseData });

        // Fetch progress
        const progressRef = doc(db, 'progress', `${user.uid}_${courseId}`);
        const progressSnap = await getDoc(progressRef);

        if (progressSnap.exists()) {
          const progressData = progressSnap.data();
          setProgress(progressData);

          // Set current video (first incomplete or first video)
          const videos = getAllVideos(courseData.modules || []);
          const currentVideoIndex = findCurrentVideo(videos, progressData.videos || {});
          if (videos[currentVideoIndex]) {
            setCurrentVideo(videos[currentVideoIndex]);
          }
        } else {
          // No progress, start with first video
          const videos = getAllVideos(courseData.modules || []);
          if (videos[0]) {
            setCurrentVideo(videos[0]);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAllVideos = (modules) => {
    const videos = [];
    modules.forEach(module => {
      if (module.videos) {
        module.videos.forEach(video => {
          videos.push({
            ...video,
            moduleId: module.id,
            moduleTitle: module.title
          });
        });
      }
    });
    return videos;
  };

  const findCurrentVideo = (videos, progressData) => {
    // Find first incomplete video
    for (let i = 0; i < videos.length; i++) {
      const videoProgress = progressData[videos[i].id];
      if (!videoProgress || !videoProgress.completed) {
        return i;
      }
    }
    // All videos completed, return last video
    return videos.length - 1;
  };

  const handleVideoProgress = (videoId, progressPercent, completed) => {
    setProgress(prev => ({
      ...prev,
      videos: {
        ...prev.videos,
        [videoId]: {
          progress: progressPercent,
          completed,
          lastWatched: new Date()
        }
      }
    }));
  };

  const handleVideoComplete = (videoId) => {
    // Update progress in database
    const progressRef = doc(db, 'progress', `${user.uid}_${courseId}`);
    const updatedProgress = {
      ...progress,
      videos: {
        ...progress.videos,
        [videoId]: {
          ...progress.videos?.[videoId],
          completed: true,
          progress: 100,
          completedAt: new Date()
        }
      }
    };

    updateDoc(progressRef, updatedProgress).catch(error => {
      console.error('Error updating progress:', error);
    });
  };

  const selectVideo = (video) => {
    setCurrentVideo(video);
    setShowCertificate(false);
  };

  const getCourseProgress = () => {
    if (!course || !progress.videos) return 0;

    const videos = getAllVideos(course.modules || []);
    if (videos.length === 0) return 0;

    const completedVideos = videos.filter(video => progress.videos[video.id]?.completed).length;
    return (completedVideos / videos.length) * 100;
  };

  const isCourseCompleted = () => {
    return getCourseProgress() === 100;
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
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

  if (!course) {
    return (
      <LMSLayout>
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Course Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The course you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/student/dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </LMSLayout>
    );
  }

  const allVideos = getAllVideos(course.modules || []);
  const courseProgress = getCourseProgress();

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/lms/student/dashboard')}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
          </div>

          {isCourseCompleted() && (
            <button
              onClick={() => setShowCertificate(!showCertificate)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Award className="h-5 w-5" />
              <span>{showCertificate ? 'Hide' : 'View'} Certificate</span>
            </button>
          )}
        </div>

        {/* Course Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {course.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Progress</div>
              <div className="text-2xl font-bold text-blue-600">{courseProgress.toFixed(0)}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{allVideos.filter(v => progress.videos?.[v.id]?.completed).length} of {allVideos.length} videos completed</span>
            {isCourseCompleted() && (
              <span className="text-green-600 dark:text-green-400 font-medium">✓ Course Completed!</span>
            )}
          </div>
        </div>

        {/* Certificate Section */}
        {showCertificate && isCourseCompleted() && (
          <CertificateGenerator
            courseId={course.id}
            courseTitle={course.title}
            onCertificateGenerated={(url, certId) => {
              console.log('Certificate generated:', url, certId);
            }}
          />
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2">
            {currentVideo ? (
              <VideoPlayer
                video={currentVideo}
                courseId={course.id}
                moduleId={currentVideo.moduleId}
                onProgress={handleVideoProgress}
                onComplete={handleVideoComplete}
              />
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Select a video to start learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a video from the course content on the right.
                </p>
              </div>
            )}
          </div>

          {/* Course Content */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Course Content</h3>

            {course.modules?.map((module, moduleIndex) => (
              <div key={module.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {module.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {module.videos?.length || 0} videos
                  </p>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {module.videos?.map((video, videoIndex) => {
                    const videoProgress = progress.videos?.[video.id];
                    const isCompleted = videoProgress?.completed;
                    const isCurrent = currentVideo?.id === video.id;

                    return (
                      <button
                        key={video.id}
                        onClick={() => selectVideo({...video, moduleId: module.id, moduleTitle: module.title})}
                        className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                          isCurrent ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            isCompleted
                              ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                              : isCurrent
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Play className="h-3 w-3 ml-0.5" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${
                              isCompleted
                                ? 'text-green-700 dark:text-green-400'
                                : isCurrent
                                ? 'text-blue-700 dark:text-blue-400'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {video.title}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {formatDuration(video.duration || 0)}
                              </span>
                              {videoProgress && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  • {videoProgress.progress?.toFixed(0)}% watched
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default CourseView;
