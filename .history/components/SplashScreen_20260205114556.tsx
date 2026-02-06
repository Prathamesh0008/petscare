'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Change loading text randomly
    const textInterval = setInterval(() => {
      const texts = [
        'Preparing shelter...',
        'Warming up cuddles...',
        'Loading wagging tails...',
        'Getting treats ready...',
        'Preparing adoption forms...',
      ];
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setLoadingText(randomText);
    }, 500);

    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Wait for fade out animation
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Paws */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-200/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <FaPaw />
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-200/10 to-amber-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
          
          {/* Logo */}
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-4 border-amber-100 transform transition-all duration-700 hover:scale-105 hover:rotate-6">
            {/* Logo Image or Icon */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative">
              {/* You can replace this with your actual logo image */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <FaPaw className="text-white text-6xl md:text-8xl" />
              </div>
              
              {/* Optional: If you have a logo image */}
              {/* <Image
                src="/logo.png"
                alt="PawHaven Vashi Logo"
                fill
                className="object-contain"
                priority
              /> */}
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              PawHaven
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md">
            Where every animal finds love and a forever home
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-64 md:w-96 mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{loadingText}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Hint Text */}
        <p className="text-gray-500 text-sm mt-12 animate-pulse">
          Opening the gates to happiness...
        </p>
      </div>

      {/* Add animations to tailwind.config.js */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}