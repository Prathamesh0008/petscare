'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [stage, setStage] = useState<'initial' | 'moving' | 'complete'>('initial');
  const [logoPosition, setLogoPosition] = useState({ 
    x: '50%', 
    y: '50%', 
    size: 'min(320px, 70vw)' // Responsive sizing
  });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 300);

    // Stage 1: Initial welcome screen (2 seconds)
    const timer1 = setTimeout(() => {
      setStage('moving');
      setLogoPosition({ 
        x: '24px', 
        y: '20px', 
        size: '48px' 
      });
    }, 2000);

    // Stage 2: Complete transition
    const timer2 = setTimeout(() => {
      setStage('complete');
      setTimeout(() => {
        onIntroComplete();
      }, 500);
    }, 2800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onIntroComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Background Overlay */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        stage === 'initial' 
          ? 'bg-gradient-to-br from-amber-700 via-orange-600 to-red-600' 
          : 'bg-transparent'
      }`}>
        {/* Background Image with better fallback */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            stage === 'initial' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Animated floating paws - improved */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${24 + Math.random() * 32}px`,
                  animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.3 + Math.random() * 0.4,
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
        className="absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-50 pointer-events-auto"
        style={{
          left: logoPosition.x,
          top: logoPosition.y,
          width: logoPosition.size,
          height: logoPosition.size,
          transform: stage === 'initial' ? 'translate(-50%, -50%)' : 'none',
        }}
      >
        <div className="relative w-full h-full">
          {/* Outer glow - improved */}
          <div className={`absolute -inset-3 sm:-inset-4 rounded-full transition-all duration-700 ${
            stage === 'initial' 
              ? 'bg-gradient-to-r from-amber-400/60 via-orange-400/60 to-red-400/60 blur-xl' 
              : 'opacity-0 scale-95'
          }`} />
          
          {/* Pulsing ring */}
          <div className={`absolute -inset-2 sm:-inset-3 rounded-full border-4 border-white/30 transition-all duration-700 ${
            stage === 'initial' ? 'animate-ping opacity-70' : 'opacity-0'
          }`} />

          {/* Logo Container */}
          <div className={`
            relative w-full h-full rounded-full overflow-hidden transition-all duration-700
            ${stage === 'initial' 
              ? 'shadow-[0_0_40px_rgba(245,158,11,0.5)] border-4 sm:border-6 border-white/80' 
              : 'shadow-lg border-2 border-amber-400'
            }
          `}>
            {/* Logo Image with fallback */}
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <FaPaw className="text-white text-[60%]" />
              </div>
              {/* Optional: Uncomment for actual image */}
              {/* <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60"
                alt="PawHaven Logo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 320px"
              /> */}
            </div>
            
            {/* Inner shine effect */}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
              stage === 'initial' 
                ? 'bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-100' 
                : 'opacity-0'
            }`} />
          </div>
        </div>
      </div>

      {/* Welcome Text - Improved with responsive design */}
      {stage === 'initial' && showText && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-6 min-w-max"
          style={{
            marginTop: `calc(${logoPosition.size} / 2 + 80px)`
          }}
        >
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
              Welcome
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-amber-300 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wider">
              to <span className="font-bold text-white">PawHaven</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-md mx-auto px-4">
              Animal Shelter & Rescue Center
            </p>
          </div>

          {/* Animated loading dots */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Loading text at bottom */}
      <div className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
        stage === 'initial' ? 'opacity-100' : 'opacity-0'
      }`}>
        <p className="text-white/80 text-sm sm:text-base font-light tracking-wide">
          Loading shelter experience...
        </p>
      </div>

      {/* Skip button for better UX */}
      <button
        onClick={() => {
          setStage('complete');
          setTimeout(() => onIntroComplete(), 100);
        }}
        className={`absolute top-4 right-4 z-50 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm 
          text-white text-xs sm:text-sm rounded-full hover:bg-white/20 transition-all duration-300 
          pointer-events-auto border border-white/20 ${stage === 'initial' ? 'opacity-100' : 'opacity-0'}`}
      >
        Skip Intro
      </button>

      {/* Bottom fade gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent 
        transition-opacity duration-500 ${stage === 'initial' ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
}