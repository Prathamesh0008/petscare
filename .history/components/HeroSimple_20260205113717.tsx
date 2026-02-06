'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSimple() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Out Effect */}
      <div className="absolute inset-0 z-0">
        {/* Background image that zooms out */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-7000 ease-out ${isLoaded ? 'scale-100' : 'scale-150'}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        
        {/* Dark overlay that fades in */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-60'}`}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold">
            Welcome to{' '}
            <span className="text-amber-300">PawHaven Vashi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200">
            A sanctuary for abandoned dogs and cats. We provide medical care, 
            rehabilitation, and loving forever homes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/animals"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Animals
            </Link>
            <Link 
              href="/adopt"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              How to Adopt
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}