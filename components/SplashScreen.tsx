'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Show image
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 1500);

    // Stage 1: Zoom into logo position
    const timer2 = setTimeout(() => {
      setStage(2);
      setTimeout(onComplete, 300);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Full-screen Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
          stage === 0 ? 'opacity-100 scale-100' : 
          stage === 1 ? 'opacity-0 scale-150' : 
          'opacity-0 scale-200'
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1920&auto=format&fit=crop&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        
        {/* Welcome Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl">
              to PawHaven Vashi Shelter
            </p>
          </div>
        </div>
      </div>

      {/* Logo that appears and moves to corner */}
      <div 
        className={`absolute transition-all duration-700 ${
          stage === 0 ? 'opacity-0 scale-50' : 
          stage === 1 ? 'opacity-100 scale-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 
          'opacity-100 scale-75 top-4 left-4'
        }`}
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white text-2xl md:text-3xl font-bold">PH</span>
        </div>
      </div>
    </div>
  );
}