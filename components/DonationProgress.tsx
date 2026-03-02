// components/DonationProgress.tsx
'use client';

import { FaHeart, FaGift, FaPaw, FaArrowRight, FaFire, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DonationProgress() {
  const goalAmount = 500000;
  const currentAmount = 325000;
  const percentage = (currentAmount / goalAmount) * 100;
  const daysLeft = 15;
  const donorsCount = 247;

  // Format amounts with K/M suffix for better display
  const formatAmount = (amount: number) => {
    if (amount >= 1000000) return `₹${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${amount}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#b87d5e] rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#2c4a3e] rounded-full blur-2xl sm:blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-0.5">
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
          
          {/* Header */}
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 w-full xs:w-auto">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-md opacity-30 animate-pulse" />
                <div className="relative w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <FaGift className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white" />
                </div>
              </div>
              <div className="flex-1 xs:flex-none">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2c4a3e] mb-0.5 break-words">
                  Monthly Donation Goal
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-[#2c4a3e]/60 break-words">
                  Help us reach our target
                </p>
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="bg-[#b87d5e]/10 px-2 xs:px-3 py-1 xs:py-1.5 sm:py-2 rounded-full flex items-center gap-1 xs:gap-1.5 sm:gap-2 self-start xs:self-auto">
              <FaFire className="text-[#b87d5e] text-[10px] xs:text-xs sm:text-sm" />
              <span className="text-[#b87d5e] font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{daysLeft} days left</span>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 xs:grid-cols-4 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
            <div className="bg-[#f5f7f0] rounded-lg p-1.5 xs:p-2 sm:p-3">
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60 mb-0.5">Current</div>
            <div className="font-bold text-[#2c4a3e] text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
  {formatAmount(currentAmount)}
</div>
            </div>
            <div className="bg-[#f5f7f0] rounded-lg p-1.5 xs:p-2 sm:p-3">
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60 mb-0.5">Goal</div>
              <div className="text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-base font-bold text-[#2c4a3e] break-words truncate">
                {formatAmount(goalAmount)}
              </div>
            </div>
            <div className="bg-[#f5f7f0] rounded-lg p-1.5 xs:p-2 sm:p-3">
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60 mb-0.5">Donors</div>
              <div className="text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-base font-bold text-[#2c4a3e]">{donorsCount}</div>
            </div>
            <div className="bg-[#f5f7f0] rounded-lg p-1.5 xs:p-2 sm:p-3">
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60 mb-0.5">Progress</div>
              <div className="text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-base font-bold text-[#b87d5e]">{Math.round(percentage)}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 xs:mb-5 sm:mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-[#2c4a3e]">Monthly Progress</span>
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-[#b87d5e] break-words text-right">
                {formatAmount(goalAmount - currentAmount)} needed
              </span>
            </div>
            
            <div className="relative w-full h-2 xs:h-2.5 sm:h-3 md:h-4 bg-[#2c4a3e]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] rounded-full"
              />
              
              {/* Milestone Markers */}
              <div className="absolute top-0 left-1/4 w-0.5 h-full bg-white/30" />
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/30" />
              <div className="absolute top-0 left-3/4 w-0.5 h-full bg-white/30" />
            </div>

            {/* Milestone Labels */}
            <div className="flex justify-between mt-1 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs text-[#2c4a3e]/40">
              <span>₹125k</span>
              <span>₹250k</span>
              <span>₹375k</span>
              <span>₹500k</span>
            </div>
          </div>

          {/* Impact Preview */}
          <div className="grid grid-cols-2 xs:grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
            <div className="text-center p-1 xs:p-1.5 sm:p-2 md:p-3">
              <div className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-bold text-[#2c4a3e]">50+</div>
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-xs text-[#2c4a3e]/60 break-words">Meals Daily</div>
            </div>
            <div className="text-center p-1 xs:p-1.5 sm:p-2 md:p-3">
              <div className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-bold text-[#2c4a3e]">15</div>
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-xs text-[#2c4a3e]/60 break-words">Medical Checkups</div>
            </div>
            <div className="text-center p-1 xs:p-1.5 sm:p-2 md:p-3">
              <div className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-bold text-[#2c4a3e]">8</div>
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-xs text-[#2c4a3e]/60 break-words">New Beds</div>
            </div>
            <div className="text-center p-1 xs:p-1.5 sm:p-2 md:p-3">
              <div className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-bold text-[#2c4a3e]">120+</div>
              <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-xs text-[#2c4a3e]/60 break-words">Vaccinations</div>
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/5 rounded-lg p-2 xs:p-3 sm:p-4 mb-4 xs:mb-5 sm:mb-6 border border-[#b87d5e]/20">
            <div className="flex items-start gap-1.5 xs:gap-2 sm:gap-3">
              <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#b87d5e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaHeart className="text-[#b87d5e] text-[10px] xs:text-xs sm:text-sm" />
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-sm text-[#2c4a3e]/70 break-words">
                Your donation helps provide food, medical care, and love to animals in need.
              </p>
            </div>
          </div>
{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

  <Link href="/donate">
    <button
      className="
        px-6 sm:px-8 lg:px-10
        py-2.5 sm:py-3.5
        bg-gradient-to-r from-[#2c4a3e] to-[#1e352b]
        text-white font-semibold
        rounded-lg
        hover:from-[#1e352b] hover:to-[#0f1f18]
        transition-all duration-300
        flex items-center justify-center gap-2
        shadow-lg
        text-xs sm:text-sm md:text-base
        min-w-[160px] sm:min-w-[200px] cursor-pointer
      "
    >
      <FaHeart className="text-sm" />
      Donate Now
      <FaArrowRight className="text-xs" />
    </button>
  </Link>

  <Link href="/donate/monthly">
    <button
      className="
        px-6 sm:px-8 lg:px-10
        py-2.5 sm:py-3.5
        bg-transparent
        border-2 border-[#2c4a3e]
        text-[#2c4a3e] font-semibold
        rounded-lg
        hover:bg-[#2c4a3e]/5
        transition-all duration-300
        flex items-center justify-center gap-2
        text-xs sm:text-sm md:text-base
        min-w-[160px] sm:min-w-[200px] cursor-pointer
      "
    >
      <FaCalendarAlt className="text-sm" />
      Monthly Giving
    </button>
  </Link>

</div>

          {/* Recent Donors */}
          <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 pt-3 xs:pt-4 sm:pt-5 md:pt-6 border-t border-[#2c4a3e]/10">
            <div className="flex flex-col xs:flex-row items-center xs:items-center justify-between gap-2 xs:gap-3 sm:gap-4">
              <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 flex-wrap justify-center">
                <div className="flex -space-x-1.5 xs:-space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] border-2 border-white flex items-center justify-center text-white text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60">
                  +{donorsCount} supporters
                </span>
              </div>
              <Link href="/donate/impact" className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-[#b87d5e] hover:text-[#9e6a4f] transition-colors">
                See impact →
              </Link>
            </div>
          </div>

          {/* Paw Print Decoration */}
          <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none hidden sm:block">
            <FaPaw className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#2c4a3e]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}