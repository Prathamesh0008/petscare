// petscare/components/Hero.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPaw, FaHeart, FaUsers, FaArrowRight, FaHandsHelping, FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1920&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <FaPaw />, value: '150+', label: 'Rescued Animals' },
    { icon: <FaHeart />, value: '120+', label: 'Happy Adoptions' },
    { icon: <FaUsers />, value: '50+', label: 'Active Volunteers' },
    { icon: <FaHome />, value: '200+', label: 'Families Created' }
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background - Light sage to cream */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]" />
        
        {/* Image Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${heroImages[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f0]/70 via-[#f5f7f0]/50 to-[#f5f7f0]/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-[#2c4a3e] rounded-full flex items-center justify-center shadow-md">
                <FaPaw className="text-2xl text-white" />
              </div>
              <span className="text-2xl font-bold text-[#2c4a3e]">PawHaven</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c4a3e] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A Safe Haven for{' '}
              <span className="text-[#b87d5e]">Every Soul</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-[#2c4a3e]/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We rescue, rehabilitate, and find loving homes for stray animals in Navi Mumbai. 
              Join our mission to create a world where every animal is valued and protected.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/animals">
                <button className="px-8 py-3.5 bg-[#2c4a3e] text-white rounded-lg font-semibold hover:bg-[#1e352b] transition-colors">
                  <span className="flex items-center gap-2">
                    Meet Our Animals
                    <FaArrowRight className="text-sm" />
                  </span>
                </button>
              </Link>

              <Link href="/donate">
                <button className="px-8 py-3.5 bg-transparent border border-[#2c4a3e] text-[#2c4a3e] rounded-lg font-semibold hover:bg-[#2c4a3e]/5 transition-colors">
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-[#b87d5e]" />
                    Support Our Work
                  </span>
                </button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-lg p-4 shadow-sm border border-[#2c4a3e]/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-[#b87d5e]">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#2c4a3e]">{stat.value}</div>
                  </div>
                  <div className="text-sm text-[#2c4a3e]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#2c4a3e]/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    className="aspect-[3/4] w-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                    style={{
                      backgroundImage: `url(${heroImages[currentImage]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e]/10 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Image Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-[#2c4a3e]' : 'bg-[#2c4a3e]/30 hover:bg-[#2c4a3e]/50'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg max-w-xs border border-[#b87d5e]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                    <FaHeart className="text-[#b87d5e]" />
                  </div>
                  <div className="font-semibold text-[#2c4a3e]">120+ Happy Families</div>
                </div>
                <p className="text-sm text-[#2c4a3e]/70">
                  Join our community of happy pet owners
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-[#2c4a3e]/60">READY TO MAKE A DIFFERENCE?</span>
          </div>
          
          <Link href="/volunteer">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#b87d5e] text-white rounded-lg font-semibold hover:bg-[#9e6a4f] transition-colors">
              <FaHandsHelping />
              Become a Volunteer
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}