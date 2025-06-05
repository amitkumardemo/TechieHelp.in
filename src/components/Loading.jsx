import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative w-24 h-24">
        <img
          src="/src/assets/icon.png"
          alt="icon"
          className="w-full h-full object-contain"
        />
        <svg
          className="absolute top-0 left-0 w-full h-full animate-spin"
          viewBox="0 0 50 50"
        >
          <circle
            className="opacity-25"
            cx="25"
            cy="25"
            r="20"
            stroke="cyan"
            strokeWidth="4"
            fill="none"
          />
          <circle
            className="opacity-75"
            cx="25"
            cy="25"
            r="20"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="90,150"
            strokeDashoffset="0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
