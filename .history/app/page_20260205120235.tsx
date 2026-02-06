'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import EmergencyBanner from '@/components/EmergencyBanner';
import AnimalCard from '@/components/AnimalCard';
import { getUrgentAnimals, getAvailableAnimals } from '@/lib/animals';
import Link from 'next/link';
import { FaArrowRight, FaHeart, FaHandsHelping, FaHome, FaPaw, FaBars, FaTimes } from 'react-icons/fa';

export default function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [logoPosition, setLogoPosition] = useState<'center' | 'navbar'>('center');
  const [showContent, setShowContent] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const urgentAnimals = getUrgentAnimals();
  const availableAnimals = getAvailableAnimals().slice(0, 6);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Animals', href: '/animals' },
    { name: 'Adopt', href: '/adopt' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

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
      {/* Intro Overlay - Full Screen Welcome */}
      {!isIntroComplete && (
        <div className="fixed inset-0 z-[9999]">
          {/* Background Image - Full screen dog image */}
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
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            
            {/* Animated background elements */}
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

          {/* Logo Container that moves from center to navbar */}
          <div className={`
            absolute transition-all duration-700 ease-out z-50
            ${logoPosition === 'center' 
              ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96' 
              : 'top-4 left-4 w-10 h-10'
            }
          `}>
            <div className="relative w-full h-full">
              {/* Outer glow - only visible when centered */}
              <div className={`absolute -inset-4 rounded-full transition-all duration-700 ${
                logoPosition === 'center' 
                  ? 'bg-gradient-to-r from-amber-500/80 to-orange-500/80 blur-2xl' 
                  : 'opacity-0'
              }`} />
              
              {/* Logo Image Container */}
              <div className={`
                relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700
                ${logoPosition === 'center' ? 'border-8 border-white/90' : 'border-2 border-amber-500'}
              `}>
                {/* This image becomes the navbar logo */}
                <Image
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60"
                  alt="PawHaven Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Welcome Text - Only shows when centered */}
              {logoPosition === 'center' && (
                <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 text-center space-y-4">
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

          {/* Loading text at bottom */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
            logoPosition === 'center' ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-white/80 text-lg">Loading shelter...</p>
          </div>
        </div>
      )}

      {/* Main Website Content */}
      <div className={`transition-all duration-500 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Navbar - With the same logo image */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo - Same image from intro */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <div className="w-full h-full relative">
                    <Image
                      src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=60"
                      alt="PawHaven Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-amber-700 block">PawHaven</span>
                  <span className="text-sm text-gray-600 block">Vashi Shelter</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gap-3">
                  <Link
                    href="/donate"
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
                  >
                    <FaHeart /> Donate
                  </Link>
                  <Link
                    href="/volunteer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
                  >
                    <FaHandsHelping /> Volunteer
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-700 text-2xl"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isNavOpen && (
              <div className="md:hidden mt-4 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-2 rounded transition-colors"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    href="/donate"
                    className="bg-amber-500 text-white py-3 px-4 rounded-lg text-center font-medium"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <FaHeart className="inline mr-2" />
                    Donate Now
                  </Link>
                  <Link
                    href="/volunteer"
                    className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center font-medium"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <FaHandsHelping className="inline mr-2" />
                    Join as Volunteer
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Urgent Cases */}
          {urgentAnimals.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Urgent Cases Need Homes</h2>
                  <p className="text-gray-600">These animals need immediate adoption. Can you help?</p>
                </div>
                <Link 
                  href="/animals?urgent=true" 
                  className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
                >
                  View all urgent cases <FaArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {urgentAnimals.slice(0, 3).map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          )}

          {/* Available Animals */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Animals</h2>
                <p className="text-gray-600">Looking for a new furry friend? Meet our available animals.</p>
              </div>
              <Link 
                href="/animals" 
                className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
              >
                View all animals <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>

          {/* How You Can Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How You Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHome className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Adopt</h3>
                <p className="text-gray-600 mb-6">
                  Give a homeless animal a second chance at love and happiness.
                </p>
                <Link href="/adopt" className="btn-primary inline-block">
                  Adopt Now
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHandsHelping className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our team and make a difference in animals' lives.
                </p>
                <Link href="/volunteer" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block">
                  Volunteer
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">
                  Support our mission with a one-time or monthly donation.
                </p>
                <Link href="/donate" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <Statistics />

          {/* Testimonials */}
          <Testimonials />

          {/* Emergency Banner */}
          <EmergencyBanner />
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-amber-400">PawHaven</span> Vashi
                </h3>
                <p className="text-gray-400 mb-6">
                  A safe haven for stray dogs and cats in Navi Mumbai since 2019. 
                  We rescue, rehabilitate, and find forever homes.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className="text-gray-400 hover:text-amber-400 transition-colors">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="text-gray-400">
                    Sector 17, Vashi, Navi Mumbai
                  </li>
                  <li className="text-gray-400">
                    +91 98765 43210
                  </li>
                  <li className="text-gray-400">
                    contact@pawhavenvashi.org
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} PawHaven Vashi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Add custom animations */}
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