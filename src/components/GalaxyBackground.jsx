import React from 'react';
import Galaxy from '../../Reactsbit/Galaxy/Galaxy';

const GalaxyBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <Galaxy 
          transparent={true}
          density={0.8}
          speed={0.5}
          glowIntensity={0.4}
          hueShift={200}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GalaxyBackground;
