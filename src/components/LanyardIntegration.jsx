import React, { useState } from 'react';
import AnimatedLanyardCard from './AnimatedLanyardCard';

const LanyardIntegration = ({ student }) => {
  const [showLanyard, setShowLanyard] = useState(false);

  const handleVisitProfile = () => {
    setShowLanyard(true);
  };

  const handleCloseLanyard = () => {
    setShowLanyard(false);
  };

  return (
    <>
      <div className="relative">
        {/* Visit Profile Button */}
        <button
          onClick={handleVisitProfile}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View ID Card
        </button>
      </div>

      {/* Animated Lanyard Modal */}
      <AnimatedLanyardCard
        student={student}
        isOpen={showLanyard}
        onClose={handleCloseLanyard}
      />
    </>
  );
};

export default LanyardIntegration;
