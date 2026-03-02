//petscare\components\Hero.tsx
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
  { icon: <FaPaw />, value: '150+', label: 'Animals Rescued' },
  { icon: <FaHeart />, value: '120+', label: 'Successful Adoptions' },
  { icon: <FaHome />, value: '80+', label: 'Daycare Pets Served' },
  { icon: <FaUsers />, value: '50+', label: 'Active Volunteers' }
];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]" />
        
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2c4a3e] rounded-full flex items-center justify-center shadow-md">
                <FaPaw className="text-lg sm:text-xl md:text-2xl text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#2c4a3e]">PawHeaven</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c4a3e] mb-3 sm:mb-4 md:mb-5 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A Safe Heaven for{' '}
              <span className="text-[#b87d5e]">You Can Trust</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/80 mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
             Whether you're looking to adopt a loving companion or need safe and professional daycare for your pet, PawHeaven provides trusted care, comfort, and compassion — all under one roof.
            </motion.p>

            {/* CTA Buttons */}
          <motion.div
  className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <Link href="/animals" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto cursor-pointer px-6 py-3 bg-[#2c4a3e] text-white rounded-lg font-semibold hover:bg-[#1e352b] transition-colors">
      <span className="flex items-center justify-center gap-2">
        Adopt a Pet
        <FaArrowRight />
      </span>
    </button>
  </Link>

  <Link href="/daycare" className="w-full sm:w-auto">
    <button className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-[#b87d5e] text-white rounded-lg font-semibold hover:bg-[#9e6a4f] transition-colors">
      <span className="flex items-center justify-center gap-2">
        Pet Daycare
        <FaHome />
      </span>
    </button>
  </Link>
</motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm border border-[#2c4a3e]/10"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-[#b87d5e] text-sm sm:text-base md:text-lg">
                      {stat.icon}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2c4a3e]">{stat.value}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-[#2c4a3e]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-[#2c4a3e]/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    className="aspect-[4/3] sm:aspect-[3/4] w-full"
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
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                        idx === currentImage ? 'bg-[#2c4a3e] w-3 sm:w-4' : 'bg-[#2c4a3e]/30 hover:bg-[#2c4a3e]/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -right-2 sm:-right-3 md:-right-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg max-w-[200px] sm:max-w-[240px] md:max-w-[280px] border border-[#b87d5e]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                    <FaHeart className="text-[#b87d5e] text-xs sm:text-sm md:text-base" />
                  </div>
                  <div className="font-semibold text-[#2c4a3e] text-xs sm:text-sm md:text-base">Adoption & Daycare Trusted</div>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/70">
                  Loved by pet families across Navi Mumbai
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="mb-2 sm:mb-3 md:mb-4">
            <span className="text-xs sm:text-sm font-medium text-[#2c4a3e]/60">READY TO MAKE A DIFFERENCE?</span>
          </div>
          
          <Link href="/volunteer">
            <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#b87d5e] text-white rounded-lg font-semibold hover:bg-[#9e6a4f] transition-colors text-sm sm:text-base cursor-pointer">
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