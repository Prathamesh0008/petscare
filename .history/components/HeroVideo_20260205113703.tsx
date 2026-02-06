'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPaw, FaHeart, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {/* Video background */}
        <div className={`absolute inset-0 overflow-hidden transition-all duration-7000 ${isLoaded ? 'scale-100' : 'scale-125'}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full w-auto h-auto object-cover"
            poster="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80"
          >
            <source src="/videos/hero-dogs.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
              }}
            />
          </video>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-orange-900/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 z-10"></div>

        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Animated Logo */}
        <div className={`mb-12 transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-2xl border-2 border-white/30 backdrop-blur-sm">
                <FaPaw className="text-6xl text-white animate-bounce-slow" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-orange-200">
              PawHaven
            </span>
            <span className="block text-2xl md:text-4xl font-light text-amber-100 mt-4 tracking-wider">
              Vashi Animal Shelter
            </span>
          </h1>
        </div>

        {/* Tagline with typewriter effect */}
        <div className={`mb-12 transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-xl md:text-3xl mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="bg-gradient-to-r from-amber-100 to-white bg-clip-text text-transparent">
              Where every wag and purr finds a loving home
            </span>
          </div>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
            Rescuing, rehabilitating, and rehoming animals since 2019
          </p>
        </div>

        {/* CTA Buttons with glow effect */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link 
            href="/animals" 
            className="group relative overflow-hidden px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 hover:scale-105"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-4">
              <span className="text-white">Meet Our Animals</span>
              <FaArrowRight className="text-white text-lg group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <Link 
            href="/adopt" 
            className="group relative overflow-hidden px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 hover:scale-105"
          >
            {/* Glass effect button */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span className="relative z-10 text-white">Adopt a Friend</span>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: FaPaw, value: '150+', label: 'Rescued', color: 'from-amber-400 to-yellow-400' },
            { icon: FaHeart, value: '120+', label: 'Adopted', color: 'from-orange-400 to-red-400' },
            { icon: FaUsers, value: '50+', label: 'Volunteers', color: 'from-red-400 to-pink-400' },
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${stat.color}/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105`}>
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300`}>
                    <stat.icon className="text-xl text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-amber-100">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator with animation */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 transition-all duration-1500 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm tracking-wider animate-pulse">
            SCROLL TO EXPLORE
          </span>
          <div className="relative">
            <div className="w-1 h-16 bg-gradient-to-b from-amber-400/30 via-white/50 to-transparent rounded-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom scroll animation to tailwind.config.js */}
      <style jsx>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(60px);
            opacity: 0;
          }
        }
        .animate-scroll-dot {
          animation: scrollDot 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}