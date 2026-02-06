'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WebsiteIntro() {
  const [stage, setStage] = useState<'initial' | 'transition' | 'complete'>('initial');

  useEffect(() => {
    // Show initial image for 2 seconds
    const timer1 = setTimeout(() => {
      setStage('transition');
    }, 2000);

    // Complete transition after animation
    const timer2 = setTimeout(() => {
      setStage('complete');
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === 'complete') return null;

  return (
    <>
      {/* Full-screen overlay that fades to website */}
      <div className={`fixed inset-0 z-[9999] transition-all duration-1000 ${
        stage === 'initial' ? 'bg-white' : 
        stage === 'transition' ? 'bg-white/0' : 
        'bg-transparent'
      }`}>
        
        {/* The main image that transforms */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          stage === 'initial' ? 'scale-100 opacity-100' : 
          stage === 'transition' ? 'scale-110 opacity-0' : 
          'scale-125 opacity-0'
        }`}>
          {/* Replace with your image */}
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1920&auto=format&fit=crop&q=80"
            alt="Welcome to PawHaven"
            fill
            className="object-cover"
            priority
          />
          
          {/* Welcome text overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            stage === 'initial' ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="text-center p-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                Welcome to PawHaven
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
                Where every tail wags with happiness
              </p>
            </div>
          </div>
        </div>

        {/* This becomes the website background after transition */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          stage === 'initial' ? 'opacity-0 scale-95' : 
          stage === 'transition' ? 'opacity-100 scale-100' : 
          'opacity-100'
        }`}>
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1920&auto=format&fit=crop&q=80"
            alt="Website Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>
      </div>

      {/* Website content that appears */}
      <div className={`relative transition-all duration-1000 ${
        stage === 'initial' ? 'opacity-0 translate-y-10' : 
        stage === 'transition' ? 'opacity-100 translate-y-0' : 
        'opacity-100'
      }`}>
        {/* Your website content here */}
        <div className="relative z-10">
          {/* This is where your Hero/Navbar will appear */}
        </div>
      </div>
    </>
  );
}