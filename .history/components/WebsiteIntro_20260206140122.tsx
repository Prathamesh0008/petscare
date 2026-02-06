'use client';

import { useEffect, useState } from 'react';
import { FaPaw } from 'react-icons/fa';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0); // 0: full, 1: moving, 2: done

  useEffect(() => {
    // Total intro duration: 3 seconds
    const timer1 = setTimeout(() => {
      setStage(1); // Start moving to navbar
    }, 2000);

    const timer2 = setTimeout(() => {
      setStage(2); // Complete
      setIsVisible(false);
      setTimeout(() => {
        onIntroComplete();
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onIntroComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50" />

      {/* Main logo container */}
      <div
        className={`absolute transition-all duration-700 ease-out ${
          stage === 0
            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            : 'top-6 left-6'
        }`}
        style={{
          width: stage === 0 ? '200px' : '40px',
          height: stage === 0 ? '200px' : '40px',
        }}
      >
        {/* Logo circle */}
        <div
          className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
            stage === 0
              ? 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-2xl'
              : 'bg-amber-500 shadow-md'
          }`}
        >
          <FaPaw
            className={`text-white transition-all duration-500 ${
              stage === 0 ? 'text-8xl' : 'text-xl'
            }`}
          />
        </div>
      </div>

      {/* Welcome text - only shows in initial stage */}
      {stage === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 animate-pulse">
            PawHaven Vashi
          </h1>
          <p className="text-gray-600">Animal Shelter & Rescue</p>
          
          {/* Loading dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      )}

      {/* Loading text at bottom */}
      {stage === 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      )}
    </div>
  );
}