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
      {/* Background Overlay - IMPROVED */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        stage === 'initial' 
          ? 'bg-gradient-to-br from-amber-800 via-orange-700 to-red-600' 
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
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.7)]" />
          
          {/* Animated floating paws - IMPROVED */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${24 + Math.random() * 40}px`,
                  animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                }}
              >
                <FaPaw />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Logo Container - EXACT SAME MOVEMENT */}
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
          {/* Enhanced Outer glow */}
          <div className={`absolute -inset-4 rounded-full transition-all duration-700 ${
            stage === 'initial' 
              ? 'bg-gradient-to-r from-amber-500/70 via-orange-500/70 to-red-500/70 blur-xl animate-pulse' 
              : 'opacity-0'
          }`} />
          
          {/* Pulsing ring effect */}
          <div className={`absolute -inset-3 rounded-full border-4 border-white/20 transition-all duration-700 ${
            stage === 'initial' ? 'animate-ping' : 'opacity-0'
          }`} />
          
          {/* Logo Image - IMPROVED */}
          <div className={`
            relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700
            ${stage === 'initial' ? 'border-8 border-white/90' : 'border-2 border-amber-500'}
            ${stage === 'initial' ? 'shadow-[0_0_50px_rgba(245,158,11,0.6)]' : 'shadow-md'}
          `}>
            {/* Gradient background fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600" />
            
            <div className="w-full h-full relative">
              {/* Paw icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPaw className="text-white text-[70%] drop-shadow-lg" />
              </div>
              
              {/* Optional: Uncomment to use image instead */}
              {/* <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60"
                alt="PawHaven Logo"
                fill
                className="object-cover"
                priority
              /> */}
            </div>
            
            {/* Inner shine effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent transition-opacity duration-700 ${
              stage === 'initial' ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
        </div>
      </div>

      {/* Welcome Text - IMPROVED DESIGN */}
      {stage === 'initial' && (
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 text-center space-y-6 min-w-max">
          {/* Main title with better typography */}
          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Welcome
            </h1>
            {/* Divider line */}
            <div className="h-1 w-40 bg-gradient-to-r from-amber-300 to-orange-400 mx-auto rounded-full opacity-80"></div>
          </div>
          
          {/* Subtitle with better spacing */}
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl text-white/90 font-light tracking-wide">
              to <span className="font-bold text-white">PawHaven Vashi</span>
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light mt-2">
              Animal Shelter & Rescue
            </p>
          </div>

          {/* Animated loading dots - IMPROVED */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      )}

      {/* Loading text - IMPROVED */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
        stage === 'initial' ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
          <p className="text-white/90 text-lg font-light tracking-wide">Loading shelter experience</p>
          <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        </div>
      </div>

      {/* Optional: Skip button */}
      <button
        onClick={() => {
          setStage('complete');
          setTimeout(() => onIntroComplete(), 100);
        }}
        className={`absolute top-6 right-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full 
          hover:bg-white/20 transition-all duration-300 pointer-events-auto border border-white/20 ${
            stage === 'initial' ? 'opacity-100' : 'opacity-0'
          }`}
      >
        Skip
      </button>

      {/* Enhanced bottom fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent 
        transition-opacity duration-500 ${stage === 'initial' ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
}