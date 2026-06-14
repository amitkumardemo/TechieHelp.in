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
          className="btn-primary"
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
