'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPaw, FaHeart, FaDog, FaCat } from 'react-icons/fa';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [stage, setStage] = useState<'initial' | 'moving' | 'complete'>('initial');
  const [logoPosition, setLogoPosition] = useState({ x: '50%', y: '50%', size: '320px' });
  const [showText, setShowText] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Start loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Stage 1: Initial welcome screen (2.5 seconds)
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setStage('moving');
      setLogoPosition({ 
        x: '24px', 
        y: '20px', 
        size: 'clamp(40px, 10vw, 60px)' 
      });
    }, 2500);

    // Stage 2: Complete transition
    const timer3 = setTimeout(() => {
      setStage('complete');
      setTimeout(() => {
        onIntroComplete();
      }, 600);
    }, 3100);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onIntroComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        stage === 'initial' 
          ? 'bg-gradient-to-br from-amber-600 via-orange-500 to-red-500' 
          : 'bg-transparent'
      }`}>
        {/* Animated gradient overlay */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            stage === 'initial' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(45deg, rgba(245, 158, 11, 0.9) 0%, rgba(251, 146, 60, 0.9) 50%, rgba(239, 68, 68, 0.9) 100%)',
          }}
        >
          {/* Animated floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Hearts */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`heart-${i}`}
                className="absolute text-white/20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${clamp(24, 48)}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${4 + Math.random() * 6}s`,
                }}
              >
                <FaHeart />
              </div>
            ))}

            {/* Floating Paws */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`paw-${i}`}
                className="absolute text-white/15 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${clamp(20, 40)}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 5}s`,
                }}
              >
                <FaPaw />
              </div>
            ))}

            {/* Floating Animals */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`animal-${i}`}
                className="absolute text-white/10 animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${clamp(32, 64)}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${6 + Math.random() * 8}s`,
                }}
              >
                {i % 2 === 0 ? <FaDog /> : <FaCat />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Logo Container */}
      <div 
        className="absolute transition-all duration-700 ease-out-cubic z-50 pointer-events-auto"
        style={{
          left: logoPosition.x,
          top: logoPosition.y,
          width: logoPosition.size,
          height: logoPosition.size,
          transform: stage === 'initial' ? 'translate(-50%, -50%)' : 'none',
        }}
      >
        <div className="relative w-full h-full">
          {/* Glowing Ring */}
          <div className={`absolute -inset-2 md:-inset-4 rounded-full transition-all duration-700 ${
            stage === 'initial' 
              ? 'bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 animate-pulse ring-8 ring-white/30' 
              : 'opacity-0'
          }`} />
          
          {/* Outer Ring Animation */}
          <div className={`absolute -inset-6 md:-inset-8 rounded-full border-4 border-white/20 transition-all duration-1000 ${
            stage === 'initial' ? 'animate-spin-slow opacity-100' : 'opacity-0'
          }`} />

          {/* Logo Image Container */}
          <div className={`
            relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700
            ${stage === 'initial' 
              ? 'border-4 md:border-8 border-white/90 shadow-[0_0_60px_rgba(245,158,11,0.5)]' 
              : 'border-2 border-amber-500 shadow-lg'
            }
          `}>
            {/* Background Pattern */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${
              stage === 'initial' ? 'opacity-20' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            </div>

            {/* Logo Image */}
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPaw className="text-white text-[60%]" />
              </div>
            </div>

            {/* Inner Glow */}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
              stage === 'initial' 
                ? 'bg-gradient-to-r from-amber-200/30 to-orange-200/30 opacity-100' 
                : 'opacity-0'
            }`} />
          </div>

          {/* Welcome Text Animation */}
          {stage === 'initial' && showText && (
            <div className="absolute -bottom-[180px] md:-bottom-[220px] left-1/2 transform -translate-x-1/2 text-center space-y-4 min-w-max animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                Welcome
              </h1>
              <div className="relative">
                <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mb-6 md:mb-8">
                  to <span className="font-bold text-white">PawHaven</span>
                </p>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-md mx-auto px-4">
                  A safe haven for stray dogs and cats in Vashi, Navi Mumbai
                </p>
              </div>

              {/* Loading Dots */}
              <div className="flex items-center justify-center space-x-2 mt-6 md:mt-8">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md transition-opacity duration-500 ${
        stage === 'initial' ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="mb-3 text-center">
          <p className="text-white/90 text-sm md:text-base">
            {loadingProgress < 100 ? 'Loading shelter experience...' : 'Ready!'}
          </p>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-2">
          <span className="text-white/70 text-xs">0%</span>
          <span className="text-white text-xs font-medium">{loadingProgress}%</span>
          <span className="text-white/70 text-xs">100%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setStage('complete');
          setTimeout(() => onIntroComplete(), 100);
        }}
        className={`absolute top-4 right-4 z-50 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto ${
          stage === 'initial' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Skip Intro
      </button>

      {/* Bottom Gradient Fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
        stage === 'initial' ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}

// Helper function for responsive sizing
function clamp(min: number, max: number): string {
  return `clamp(${min}px, 5vw, ${max}px)`;
}