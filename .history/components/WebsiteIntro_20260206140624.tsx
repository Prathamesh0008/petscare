'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [stage, setStage] = useState<'initial' | 'moving' | 'complete'>('initial');
  const [logoPosition, setLogoPosition] = useState({ x: '50%', y: '50%', size: '320px' });

  useEffect(() => {
    // Stage 1: Initial welcome screen (2 seconds)
    const timer1 = setTimeout(() => {
      setStage('moving');
      setLogoPosition({ x: '32px', y: '28px', size: '40px' });
    }, 2000);

    // Stage 2: Complete transition (0.5 seconds after moving starts)
    const timer2 = setTimeout(() => {
      setStage('complete');
      setTimeout(() => {
        onIntroComplete();
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onIntroComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Background Overlay */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        stage === 'initial' 
          ? 'bg-gradient-to-br from-amber-900 to-orange-900' 
          : 'bg-transparent'
      }`}>
        {/* Background Image - Only visible during initial stage */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            stage === 'initial' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          
          {/* Animated floating paws */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <FaPaw />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Logo Container */}
      <div 
        className="absolute transition-all duration-700 ease-out z-50 pointer-events-auto"
        style={{
          left: logoPosition.x,
          top: logoPosition.y,
          width: logoPosition.size,
          height: logoPosition.size,
          transform: stage === 'initial' ? 'translate(-50%, -50%)' : 'none',
        }}
      >
        <div className="relative w-full h-full">
          {/* Outer glow */}
          <div className={`absolute -inset-4 rounded-full transition-all duration-700 ${
            stage === 'initial' 
              ? 'bg-gradient-to-r from-amber-500/80 to-orange-500/80 blur-2xl' 
              : 'opacity-0'
          }`} />
          
          {/* Logo Image */}
          <div className={`
            relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700
            ${stage === 'initial' ? 'border-8 border-white/90' : 'border-2 border-amber-500'}
          `}>
            <div className="w-full h-full relative">
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60"
                alt="PawHaven Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Welcome Text - Only shows during initial stage */}
          {stage === 'initial' && (
            <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 text-center space-y-4 min-w-max">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
                Welcome
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                to PawHaven Vashi
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Loading text */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
        stage === 'initial' ? 'opacity-100' : 'opacity-0'
      }`}>
        <p className="text-white/80 text-lg">Loading shelter...</p>
      </div>
    </div>
  );
}