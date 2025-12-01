import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LMSLogin from './components/lms/LMSLogin';
import BatchSelection from './components/lms/BatchSelection';
import StudentDashboard from './components/lms/StudentDashboard';
import AdminDashboard from './components/lms/AdminDashboard';
import AdminCourseManagement from './components/lms/AdminCourseManagement';
import CourseView from './components/lms/CourseView';

const LMSRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LMSLogin />} />
        <Route path="/login" element={<LMSLogin />} />
        <Route path="/batch-selection" element={<BatchSelection />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses/:courseId" element={<CourseView />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<AdminCourseManagement />} />
      </Routes>
    </Router>
  );
};

export default LMSRouter;
