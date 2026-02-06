'use client';

import { useEffect, useState } from 'react';

export default function LogoIntro() {
  const [stage, setStage] = useState(0); // 0=fullscreen, 1=shrinking, 2=in navbar, 3=complete

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000), // Start shrinking after 2s
      setTimeout(() => setStage(2), 2500), // Move to navbar position
      setTimeout(() => setStage(3), 3000), // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Full-screen intro */}
      <div className={`fixed inset-0 z-[9999] transition-all duration-500 ${
        stage >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Background that fades */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          stage >= 1 ? 'opacity-0' : 'opacity-100'
        }`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Logo that transforms */}
        <div className={`
          absolute transition-all duration-700 ease-out
          ${stage === 0 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96' : 
            stage === 1 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16' :
            stage === 2 ? 'top-4 left-4 w-12 h-12' :
            'top-4 left-4 w-12 h-12'}
        `}>
          {/* Outer glow */}
          <div className={`absolute -inset-4 rounded-full transition-all duration-700 ${
            stage === 0 ? 'bg-gradient-to-r from-amber-500 to-orange-500 blur-xl' :
            stage === 1 ? 'bg-gradient-to-r from-amber-500 to-orange-500 blur-md scale-50' :
            'opacity-0'
          }`} />

          {/* Logo image/container */}
          <div className={`
            relative rounded-full overflow-hidden transition-all duration-700
            ${stage === 0 ? 'border-8 border-white shadow-2xl' :
              stage === 1 ? 'border-4 border-white shadow-lg' :
              'border-2 border-amber-500 shadow'}
          `}>
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60')`,
              }}
            />
          </div>

          {/* Welcome text */}
          <div className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-8 text-center transition-all duration-500
            ${stage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome</h1>
            <p className="text-xl text-white/90">PawHaven Vashi Shelter</p>
          </div>
        </div>
      </div>

      {/* Fade in website content */}
      <div className={`
        transition-all duration-1000
        ${stage >= 2 ? 'opacity-100' : 'opacity-0'}
      `}>
        {/* Your website will render here */}
      </div>
    </>
  );
}