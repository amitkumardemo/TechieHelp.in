import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import LMSLayout from './LMSLayout';
import { Plus, Edit, Trash2, BookOpen, Video, Save, X, FolderPlus, Youtube, FileQuestion, FileText, GraduationCap, Link as LinkIcon } from 'lucide-react';

const AdminCourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showAddBatch, setShowAddBatch] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    batchId: '',
    thumbnail: '',
    duration: '',
    modules: []
  });
  
  const [batchForm, setBatchForm] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  const [moduleForm, setModuleForm] = useState({
    title: '',
    description: '',
    videos: [],
    quizzes: [],
    assignments: [],
    exams: []
  });

  const [videoForm, setVideoForm] = useState({
    title: '',
    youtubeUrl: '',
    duration: '',
    description: ''
  });

  const [quizForm, setQuizForm] = useState({
    title: '',
    description: '',
    questions: [],
    passingScore: 70,
    timeLimit: 30
  });

  const [assignmentForm, setAssignmentForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    maxScore: 100
  });

  const [examForm, setExamForm] = useState({
    title: '',
    description: '',
    questions: [],
    duration: 60,
    passingScore: 70,
    totalMarks: 100
  });

  useEffect(() => {
    fetchBatchesAndCourses();
  }, []);

  const fetchBatchesAndCourses = async () => {
    try {
      const batchesSnapshot = await getDocs(collection(db, 'batches'));
      const batchesData = batchesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBatches(batchesData);

      const coursesSnapshot = await getDocs(collection(db, 'courses'));
      const coursesData = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(coursesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractYouTubeThumbnail = (url) => {
    const videoId = extractYouTubeVideoId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '';
  };

  const extractYouTubeVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const handleAddCourse = async () => {
    if (!courseForm.title || !courseForm.batchId) return;

    try {
      await addDoc(collection(db, 'courses'), {
        ...courseForm,
        createdAt: new Date(),
        modules: []
      });
      setCourseForm({ title: '', description: '', batchId: '', thumbnail: '', duration: '', modules: [] });
      setShowAddCourse(false);
      fetchBatchesAndCourses();
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleUpdateCourse = async () => {
    if (!editingCourse || !courseForm.title || !courseForm.batchId) return;

    try {
      await updateDoc(doc(db, 'courses', editingCourse.id), {
        ...courseForm,
        updatedAt: new Date()
      });
      setEditingCourse(null);
      setCourseForm({ title: '', description: '', batchId: '', thumbnail: '', duration: '', modules: [] });
      fetchBatchesAndCourses();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      await deleteDoc(doc(db, 'courses', courseId));
      fetchBatchesAndCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleAddBatch = async () => {
    if (!batchForm.title) return;

    try {
      await addDoc(collection(db, 'batches'), {
        ...batchForm,
        createdAt: new Date(),
      });
      setBatchForm({ title: '', description: '', startDate: '', endDate: '' });
      setShowAddBatch(false);
      fetchBatchesAndCourses();
    } catch (error) {
      console.error('Error adding batch:', error);
    }
  };

  const handleAddModule = async () => {
    if (!moduleForm.title || !selectedCourse) return;

    try {
      const course = courses.find(c => c.id === selectedCourse);
      const updatedModules = [...(course.modules || []), moduleForm];
      
      await updateDoc(doc(db, 'courses', selectedCourse), {
        modules: updatedModules,
        updatedAt: new Date()
      });

      setModuleForm({
        title: '',
        description: '',
        videos: [],
        quizzes: [],
        assignments: [],
        exams: []
      });
      setShowModuleForm(false);
      setSelectedCourse(null);
      fetchBatchesAndCourses();
    } catch (error) {
      console.error('Error adding module:', error);
    }
  };

  const handleAddVideo = () => {
    if (!videoForm.title || !videoForm.youtubeUrl) return;

    const thumbnail = extractYouTubeThumbnail(videoForm.youtubeUrl);
    const videoId = extractYouTubeVideoId(videoForm.youtubeUrl);

    setModuleForm({
      ...moduleForm,
      videos: [...moduleForm.videos, { ...videoForm, thumbnail, videoId }]
    });
    setVideoForm({ title: '', youtubeUrl: '', duration: '', description: '' });
  };

  const handleAddQuiz = () => {
    if (!quizForm.title) return;
    setModuleForm({
      ...moduleForm,
      quizzes: [...moduleForm.quizzes, quizForm]
    });
    setQuizForm({ title: '', description: '', questions: [], passingScore: 70, timeLimit: 30 });
  };

  const handleAddAssignment = () => {
    if (!assignmentForm.title) return;
    setModuleForm({
      ...moduleForm,
      assignments: [...moduleForm.assignments, assignmentForm]
    });
    setAssignmentForm({ title: '', description: '', dueDate: '', maxScore: 100 });
  };

  const handleAddExam = () => {
    if (!examForm.title) return;
    setModuleForm({
      ...moduleForm,
      exams: [...moduleForm.exams, examForm]
    });
    setExamForm({ title: '', description: '', questions: [], duration: 60, passingScore: 70, totalMarks: 100 });
  };

  const startEditCourse = (course) => {
    setEditingCourse(course);
    setCourseForm({
      title: course.title,
      description: course.description || '',
      batchId: course.batchId,
      thumbnail: course.thumbnail || '',
      duration: course.duration || '',
      modules: course.modules || []
    });
  };

  const cancelEdit = () => {
    setEditingCourse(null);
    setCourseForm({ title: '', description: '', batchId: '', thumbnail: '', duration: '', modules: [] });
  };

  const filteredCourses = selectedBatch
    ? courses.filter(course => course.batchId === selectedBatch)
    : courses;

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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Course Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage courses, modules, videos, quizzes, assignments, and exams</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowAddBatch(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <FolderPlus className="h-5 w-5" />
              <span>Add Batch</span>
            </button>
            <button
              onClick={() => setShowAddCourse(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Course</span>
            </button>
          </div>
        </div>

        {/* Batch Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by Batch
          </label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full md:w-64 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Batches</option>
            {batches.map(batch => (
              <option key={batch.id} value={batch.id}>{batch.title}</option>
            ))}
          </select>
        </div>

        {/* Add Batch Form */}
        {showAddBatch && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add New Batch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Batch Title
                </label>
                <input
                  type="text"
                  value={batchForm.title}
                  onChange={(e) => setBatchForm({...batchForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter batch title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={batchForm.startDate}
                  onChange={(e) => setBatchForm({...batchForm, startDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={batchForm.endDate}
                  onChange={(e) => setBatchForm({...batchForm, endDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={batchForm.description}
                  onChange={(e) => setBatchForm({...batchForm, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter batch description"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddBatch(false);
                  setBatchForm({ title: '', description: '', startDate: '', endDate: '' });
                }}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleAddBatch}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Add Batch</span>
              </button>
            </div>
          </div>
        )}

        {/* Add/Edit Course Form */}
        {(showAddCourse || editingCourse) && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {editingCourse ? 'Edit Course' : 'Add New Course'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Course Title
                </label>
                <input
                  type="text"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter course title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Batch
                </label>
                <select
                  value={courseForm.batchId}
                  onChange={(e) => setCourseForm({...courseForm, batchId: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Batch</option>
                  {batches.map(batch => (
                    <option key={batch.id} value={batch.id}>{batch.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Course Thumbnail URL
                </label>
                <input
                  type="text"
                  value={courseForm.thumbnail}
                  onChange={(e) => setCourseForm({...courseForm, thumbnail: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter thumbnail URL"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={courseForm.duration}
                  onChange={(e) => setCourseForm({...courseForm, duration: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 10 hours"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={courseForm.description}
                  onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter course description"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={cancelEdit}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={editingCourse ? handleUpdateCourse : handleAddCourse}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{editingCourse ? 'Update' : 'Add'} Course</span>
              </button>
            </div>
          </div>
        )}

        {/* Module Form */}
        {showModuleForm && selectedCourse && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add Module to {courses.find(c => c.id === selectedCourse)?.title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Module Title
                </label>
                <input
                  type="text"
                  value={moduleForm.title}
                  onChange={(e) => setModuleForm({...moduleForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter module title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Module Description
                </label>
                <textarea
                  value={moduleForm.description}
                  onChange={(e) => setModuleForm({...moduleForm, description: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter module description"
                />
              </div>

              {/* Add Videos Section */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <Youtube className="h-5 w-5 mr-2 text-red-600" />
                  Add Videos from YouTube
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={videoForm.title}
                    onChange={(e) => setVideoForm({...videoForm, title: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Video title"
                  />
                  <input
                    type="text"
                    value={videoForm.youtubeUrl}
                    onChange={(e) => setVideoForm({...videoForm, youtubeUrl: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="YouTube URL"
                  />
                  <input
                    type="text"
                    value={videoForm.duration}
                    onChange={(e) => setVideoForm({...videoForm, duration: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Duration (e.g., 15:30)"
                  />
                  <button
                    onClick={handleAddVideo}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Video</span>
                  </button>
                </div>
                {moduleForm.videos.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Added Videos: {moduleForm.videos.length}</p>
                    {moduleForm.videos.map((video, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded">
                        <span className="text-sm text-gray-900 dark:text-white">{video.title}</span>
                        <button
                          onClick={() => setModuleForm({
                            ...moduleForm,
                            videos: moduleForm.videos.filter((_, i) => i !== idx)
                          })}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Add Quiz Section */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <FileQuestion className="h-5 w-5 mr-2 text-purple-600" />
                  Add Quiz
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={quizForm.title}
                    onChange={(e) => setQuizForm({...quizForm, title: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Quiz title"
                  />
                  <input
                    type="number"
                    value={quizForm.passingScore}
                    onChange={(e) => setQuizForm({...quizForm, passingScore: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Passing score %"
                  />
                  <input
                    type="number"
                    value={quizForm.timeLimit}
                    onChange={(e) => setQuizForm({...quizForm, timeLimit: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Time limit (minutes)"
                  />
                  <button
                    onClick={handleAddQuiz}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Quiz</span>
                  </button>
                </div>
                {moduleForm.quizzes.length > 0 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">Added Quizzes: {moduleForm.quizzes.length}</p>
                )}
              </div>

              {/* Add Assignment Section */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Add Assignment
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={assignmentForm.title}
                    onChange={(e) => setAssignmentForm({...assignmentForm, title: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Assignment title"
                  />
                  <input
                    type="date"
                    value={assignmentForm.dueDate}
                    onChange={(e) => setAssignmentForm({...assignmentForm, dueDate: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="number"
                    value={assignmentForm.maxScore}
                    onChange={(e) => setAssignmentForm({...assignmentForm, maxScore: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Max score"
                  />
                  <button
                    onClick={handleAddAssignment}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Assignment</span>
                  </button>
                </div>
                {moduleForm.assignments.length > 0 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">Added Assignments: {moduleForm.assignments.length}</p>
                )}
              </div>

              {/* Add Exam Section */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-orange-600" />
                  Add Exam
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={examForm.title}
                    onChange={(e) => setExamForm({...examForm, title: e.target.value})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Exam title"
                  />
                  <input
                    type="number"
                    value={examForm.duration}
                    onChange={(e) => setExamForm({...examForm, duration: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Duration (minutes)"
                  />
                  <input
                    type="number"
                    value={examForm.totalMarks}
                    onChange={(e) => setExamForm({...examForm, totalMarks: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Total marks"
                  />
                  <button
                    onClick={handleAddExam}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Exam</span>
                  </button>
                </div>
                {moduleForm.exams.length > 0 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">Added Exams: {moduleForm.exams.length}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
              <button
                onClick={() => {
                  setShowModuleForm(false);
                  setSelectedCourse(null);
                  setModuleForm({
                    title: '',
                    description: '',
                    videos: [],
                    quizzes: [],
                    assignments: [],
                    exams: []
                  });
                }}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleAddModule}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Save Module</span>
              </button>
            </div>
          </div>
        )}

        {/* Courses List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const batch = batches.find(b => b.id === course.batchId);
            const totalVideos = course.modules?.reduce((total, module) => 
              total + (module.videos?.length || 0), 0) || 0;
            const totalQuizzes = course.modules?.reduce((total, module) => 
              total + (module.quizzes?.length || 0), 0) || 0;
            const totalAssignments = course.modules?.reduce((total, module) => 
              total + (module.assignments?.length || 0), 0) || 0;
            const totalExams = course.modules?.reduce((total, module) => 
              total + (module.exams?.length || 0), 0) || 0;

            return (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                {course.thumbnail && (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {batch?.title}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditCourse(course)}
                        className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {course.description || 'No description'}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.modules?.length || 0} modules</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-1" />
                      <span>{totalVideos} videos</span>
                    </div>
                    <div className="flex items-center">
                      <FileQuestion className="h-4 w-4 mr-1" />
                      <span>{totalQuizzes} quizzes</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{totalAssignments} assignments</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>{totalExams} exams</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCourse(course.id);
                      setShowModuleForm(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Module</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedBatch ? 'No courses in this batch yet.' : 'Create your first course to get started.'}
            </p>
          </div>
        )}
      </div>
    </LMSLayout>
  );
};

export default AdminCourseManagement;