'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';

export default function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [logoPosition, setLogoPosition] = useState<'center' | 'navbar'>('center');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timers = [
      // Initial image shows for 2 seconds
      setTimeout(() => {
        setLogoPosition('navbar');
      }, 2000),
      
      // After moving to navbar, show website content
      setTimeout(() => {
        setIsIntroComplete(true);
        setTimeout(() => setShowContent(true), 300);
      }, 2500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Intro Overlay */}
      {!isIntroComplete && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-amber-900 to-orange-900">
          {/* Background Image */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ${
              logoPosition === 'center' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70" />
          </div>

          {/* Logo that moves */}
          <div className={`
            absolute transition-all duration-700 ease-out z-50
            ${logoPosition === 'center' 
              ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80' 
              : 'top-4 left-4 w-12 h-12'
            }
          `}>
            <div className="relative w-full h-full">
              {/* Outer glow */}
              <div className={`absolute -inset-4 rounded-full transition-all duration-700 ${
                logoPosition === 'center' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 blur-2xl' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 blur-sm scale-50'
              }`} />
              
              {/* Logo */}
              <div className={`
                relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl
                ${logoPosition === 'navbar' ? 'border-2 border-amber-500' : ''}
              `}>
                {/* Your logo image here - this becomes the navbar logo */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60')`,
                  }}
                />
              </div>

              {/* Welcome Text */}
              {logoPosition === 'center' && (
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
                    Welcome
                  </h1>
                  <p className="text-xl text-white/90">Opening shelter gates...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Website Content */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <Statistics />
          {/* Rest of your website */}
        </main>
      </div>
    </div>
  );
}