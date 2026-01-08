import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { GraduationCap, Code, Database, Smartphone, Brain, Cpu, Palette } from 'lucide-react';

const BatchSelection = () => {
  const { user, userProfile, setUserBatch } = useAuth();
  const navigate = useNavigate();
  const [selectedBatch, setSelectedBatch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userProfile && userProfile.role === 'student') {
      const timer = setTimeout(() => {
        navigate('/lms/student/dashboard', { replace: true });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [userProfile, navigate]);

  const batches = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript, React, and modern frontend technologies',
      icon: Code,
      color: 'bg-blue-500',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Learn Node.js, Python, databases, APIs, and server-side development',
      icon: Database,
      color: 'bg-green-500',
    },
    {
      id: 'java',
      title: 'Java Development',
      description: 'Complete Java programming, Spring Boot, and enterprise applications',
      icon: Cpu,
      color: 'bg-red-500',
    },
    {
      id: 'python',
      title: 'Python Development',
      description: 'Python programming, Django, data science, and automation',
      icon: Brain,
      color: 'bg-yellow-500',
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      description: 'AI, machine learning algorithms, and data science with Python',
      icon: Brain,
      color: 'bg-purple-500',
    },
    {
      id: 'ds',
      title: 'Data Science & AI',
      description: 'Advanced data analysis, AI models, and predictive analytics',
      icon: Brain,
      color: 'bg-indigo-500',
    },
    {
      id: 'flutter',
      title: 'Flutter Development',
      description: 'Cross-platform mobile app development with Flutter and Dart',
      icon: Smartphone,
      color: 'bg-teal-500',
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'User interface design, user experience, and design tools',
      icon: Palette,
      color: 'bg-pink-500',
    },
  ];

  const handleBatchSelection = async () => {
    if (!selectedBatch) return;

    setLoading(true);
    try {
      await setUserBatch(selectedBatch);
      navigate('/student/dashboard');
    } catch (error) {
      console.error('Error selecting batch:', error);
      setLoading(false);
    }
  };

  if (!user || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Internship Batch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select the technology stack you want to specialize in. This will determine your learning path and course content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {batches.map((batch) => {
            const Icon = batch.icon;
            const isSelected = selectedBatch === batch.id;

            return (
              <div
                key={batch.id}
                onClick={() => setSelectedBatch(batch.id)}
                className={`relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer transition-all duration-200 hover:shadow-xl ${
                  isSelected
                    ? 'ring-2 ring-blue-500 transform scale-105'
                    : 'hover:transform hover:scale-102'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${batch.color} mr-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {batch.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {batch.description}
                </p>
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleBatchSelection}
            disabled={!selectedBatch || loading}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Setting up your batch...
              </>
            ) : (
              <>
                Continue with {selectedBatch ? batches.find(b => b.id === selectedBatch)?.title : 'Selected Batch'}
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Not sure which batch to choose? Contact our team for guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BatchSelection;
