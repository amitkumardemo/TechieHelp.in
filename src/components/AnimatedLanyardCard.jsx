import React, { useState, useEffect } from 'react';
import Lanyard from '../../Ractsbit/Lanyard/Lanyard';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLanyardCard = ({ student, isOpen, onClose }) => {
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay showing lanyard for smooth animation
      const timer = setTimeout(() => setShowLanyard(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowLanyard(false);
    }
  }, [isOpen]);

  const handleViewProfile = () => {
    onClose();
    // Navigate to the detailed profile page
    window.location.href = `/intern/${student.techieHelpStudentID}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl h-[80vh] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl border border-white/20 backdrop-blur-lg">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="p-6 text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">Intern ID Card</h2>
                  <p className="text-purple-300">TechieHelp Internship Program</p>
                </div>

                {/* Lanyard Display */}
                <div className="flex-1 relative">
                  {showLanyard && (
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-full"
                    >
                      <Lanyard />
                    </motion.div>
                  )}
                  
                  {/* ID Card Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-2xl w-80">
                      <div className="text-center">
                        <img
                          src={student.profileImage}
                          alt={student.fullName}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{student.fullName}</h3>
                        <p className="text-purple-600 font-semibold mb-2">{student.internshipDomain}</p>
                        <p className="text-sm text-gray-600 mb-1">ID: {student.techieHelpStudentID}</p>
                        <p className="text-sm text-gray-600 mb-1">{student.collegeName}</p>
                        <p className="text-sm text-gray-600">Batch: {student.currentYearBatch}</p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                          onClick={handleViewProfile}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                        >
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-400">
                    Click anywhere outside to close • Drag the lanyard to interact
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLanyardCard;
