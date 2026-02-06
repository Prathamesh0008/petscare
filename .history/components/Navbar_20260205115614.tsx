'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHeart, FaHandsHelping } from 'react-icons/fa';

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
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - This is where the intro image becomes the logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500">
              {/* This image should be the same as the intro image */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=60')`,
                }}
              />
            </div>
            <span className="text-2xl font-bold text-amber-700">PawHaven Vashi</span>
          </Link>

          {/* Rest of navbar... */}
        </div>
      </div>
    </nav>
  );
}