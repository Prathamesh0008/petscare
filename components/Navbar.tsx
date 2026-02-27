'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaHeart, FaHandsHelping, FaPaw } from 'react-icons/fa';

interface NavbarProps {
  isIntroComplete?: boolean;
}

export default function Navbar({ isIntroComplete = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Animals', href: '/animals' },
    { name: 'Adopt', href: '/adopt' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f5f7f0]/95 backdrop-blur-md shadow-lg' : 'bg-[#f5f7f0]/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`transition-all duration-500 ${
              isIntroComplete ? 'w-10 h-10' : 'w-0 h-0 opacity-0'
            } overflow-hidden rounded-full border-2 border-[#2c4a3e] shadow-lg`}>
              <div className="w-full h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=60"
                  alt="Pawheaven Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
            <div className={`transition-all duration-500 ${
              isIntroComplete ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="text-2xl font-bold text-[#2c4a3e] block">PawHeaven</span>
              <span className="text-sm text-[#b87d5e] block">Vashi Shelter</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
            isIntroComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#2c4a3e] hover:text-[#b87d5e] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-3">
              <Link
                href="/donate"
                className="bg-[#2c4a3e] hover:bg-[#1e352b] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all font-medium"
              >
                <FaHeart /> Donate
              </Link>
              <Link
                href="/volunteer"
                className="bg-[#b87d5e] hover:bg-[#9e6a4f] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all font-medium"
              >
                <FaHandsHelping /> Volunteer
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden text-[#2c4a3e] text-2xl transition-all duration-500 ${
              isIntroComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-[#2c4a3e] hover:text-[#b87d5e] hover:bg-[#e8ebe0] px-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/donate"
                className="bg-[#2c4a3e] text-white py-3 px-4 rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaHeart className="inline mr-2" />
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="bg-[#b87d5e] text-white py-3 px-4 rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaHandsHelping className="inline mr-2" />
                Join as Volunteer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}