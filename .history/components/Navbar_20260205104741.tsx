'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPaw, FaBars, FaTimes, FaHeart, FaHandsHelping } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-amber-700">
            <FaPaw className="text-3xl" />
            <span>PawHaven Vashi</span>
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
                className="block py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/donate"
                className="bg-amber-500 text-white py-3 px-4 rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaHeart className="inline mr-2" />
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="bg-gray-800 text-white py-3 px-4 rounded-lg text-center font-medium"
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