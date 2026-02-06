'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPaw, FaHeart, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/70 to-amber-900/80 z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-100'}`}></div>
        
        {/* Main Background Image */}
        <div className={`absolute inset-0 transition-all duration-7000 ${isLoaded ? 'scale-100' : 'scale-125'} transform-gpu`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')`,
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        {/* Secondary Background Images for layered effect */}
        <div className={`absolute inset-0 transition-all duration-5000 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-110'} transform-gpu delay-300`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1920&auto=format&fit=crop&q=80')`,
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-orange-900/10 z-20"></div>
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div 
          className="absolute inset-0 animate-pulse-slow"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo/Brand Animation */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <div className={`bg-white/20 backdrop-blur-md p-5 rounded-2xl border border-white/30 transition-all duration-1000 ${isLoaded ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}>
              <FaPaw className="text-5xl animate-bounce-slow" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className={`inline-block transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Welcome to{' '}
            </span>
            <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300 font-extrabold transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              PawHaven Vashi
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          A safe haven for stray dogs and cats in Navi Mumbai. 
          We rescue, rehabilitate, and find forever homes for our furry friends.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link 
            href="/animals" 
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Meet Our Animals
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
          <Link 
            href="/adopt" 
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Adopt a Friend</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaPaw className="text-2xl text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-amber-100">Animals Rescued</div>
            </div>
          </div>
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaHeart className="text-2xl text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-amber-100">Successful Adoptions</div>
            </div>
          </div>
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaUsers className="text-2xl text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-amber-100">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div> */}

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 z-20 animate-float-slow">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 right-16 z-20 animate-float-slower">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-sm"></div>
      </div>
    </section>
  );
}