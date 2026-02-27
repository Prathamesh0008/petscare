// components/Statistics.tsx
'use client';

import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaHeart, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <FaPaw />,
    value: 150,
    suffix: '+',
    label: 'Animals Rescued',
    description: 'From the streets of Navi Mumbai',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaHome />,
    value: 120,
    suffix: '+',
    label: 'Forever Homes',
    description: 'Happy families created',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
  {
    icon: <FaHeartbeat />,
    value: 45,
    suffix: '',
    label: 'Medical Treatments',
    description: 'Lives saved through care',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaUsers />,
    value: 50,
    suffix: '+',
    label: 'Active Volunteers',
    description: 'Dedicated community members',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
  {
    icon: <FaCalendarAlt />,
    value: 5,
    suffix: '',
    label: 'Years of Service',
    description: 'Serving since 2019',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaStar />,
    value: 4.9,
    suffix: '',
    label: 'Satisfaction',
    description: 'Community rating',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 lg:top-20 left-5 lg:left-10 w-48 lg:w-64 h-48 lg:h-64 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-10 lg:bottom-20 right-5 lg:right-10 w-64 lg:w-96 h-64 lg:h-96 bg-[#2c4a3e] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
              <FaHandHoldingHeart className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#b87d5e]" />
            </div>
            <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Impact
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4">
            By The <span className="text-[#b87d5e]">Numbers</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto px-4">
            Our collective impact on animal welfare in Navi Mumbai, made possible by your support.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className="absolute inset-0 bg-[#b87d5e] rounded-lg sm:rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value */}
                <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors duration-300">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        decimals={stat.value === 4.9 ? 1 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  {stat.suffix && (
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]/60">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c4a3e] mb-1 sm:mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2c4a3e]/60 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Number - Visible on all screens but smaller on mobile */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c4a3e]/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Fundraising Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 w-full">
                
                {/* Left Section */}
               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full lg:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#b87d5e]" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xs sm:text-sm text-[#2c4a3e]/60 mb-1">2024 Fundraising</div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c4a3e] mb-1">
                      ₹250,000+
                    </div>
                    <p className="text-xs sm:text-sm text-[#2c4a3e]/70">
                      Raised for animal welfare this year
                    </p>
                  </div>
                </div>

                {/* Progress Bar Section */}
            <div className="w-full lg:max-w-[260px]">
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <span className="text-[#2c4a3e]">Goal: ₹500k</span>
                    <span className="text-[#b87d5e] font-semibold">50%</span>
                  </div>
                  <div className="w-full h-2 sm:h-2.5 md:h-3 bg-[#2c4a3e]/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link href="/donate" className="w-full sm:w-auto">
            <button className="group w-full cursor-pointer sm:w-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] text-white font-semibold rounded-lg sm:rounded-xl hover:from-[#9e6a4f] hover:to-[#8a5a42] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
              <FaHeart className="group-hover:scale-110 transition-transform" />
              <span>Make a Donation</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
            </button>
          </Link>
          
          <Link href="/volunteer" className="w-full sm:w-auto">
            <button className="group w-full cursor-pointer sm:w-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-lg sm:rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <FaUsers className="text-base" />
              <span>Join Our Team</span>
            </button>
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#2c4a3e]/50">
            <FaStar className="text-[#b87d5e] text-xs sm:text-sm" />
            <span>Trusted by 5,000+ community members</span>
            <FaStar className="text-[#b87d5e] text-xs sm:text-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}