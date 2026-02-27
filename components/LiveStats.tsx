// components/LiveStats.tsx
'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaPaw, FaHeart, FaUsers, FaHome, FaStethoscope, FaBullseye } from 'react-icons/fa';

const LiveStats = () => {
  const [stats, setStats] = useState({
    animalsInShelter: 24,
    adoptedToday: 3,
    volunteersActive: 8,
    urgentCases: 5,
    donationsToday: 12500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        animalsInShelter: prev.animalsInShelter + (Math.random() > 0.7 ? 1 : 0),
        adoptedToday: prev.adoptedToday + (Math.random() > 0.9 ? 1 : 0),
        donationsToday: prev.donationsToday + Math.floor(Math.random() * 1000),
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: <FaPaw />,
      value: stats.animalsInShelter,
      label: 'In Shelter',
      trend: '+2 this week',
      color: 'text-[#b87d5e]',
      bgColor: 'bg-[#b87d5e]/10'
    },
    {
      icon: <FaHome />,
      value: stats.adoptedToday,
      label: 'Adopted Today',
      trend: 'Just now',
      color: 'text-[#2c4a3e]',
      bgColor: 'bg-[#2c4a3e]/10'
    },
    {
      icon: <FaUsers />,
      value: stats.volunteersActive,
      label: 'Active Volunteers',
      trend: 'Currently helping',
      color: 'text-[#b87d5e]',
      bgColor: 'bg-[#b87d5e]/10'
    },
    {
      icon: <FaStethoscope />,
      value: stats.urgentCases,
      label: 'Urgent Cases',
      trend: 'Needs attention',
      color: 'text-[#2c4a3e]',
      bgColor: 'bg-[#2c4a3e]/10'
    },
    {
      icon: <FaHeart />,
      value: `₹${stats.donationsToday.toLocaleString()}`,
      label: 'Donated Today',
      trend: '+₹1,250 recently',
      color: 'text-[#b87d5e]',
      bgColor: 'bg-[#b87d5e]/10'
    },
  ];

  return (
    <div className="bg-[#f5f7f0] py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4">
            Live Shelter Statistics
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto px-4">
            Real-time updates on our shelter operations and impact
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-10 sm:mb-12 md:mb-14">
          {statCards.map((stat, index) => (
            <div key={index} className="relative group h-full">
              <div className={`${stat.bgColor} rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col justify-between border border-[#2c4a3e]/10 bg-white/80 backdrop-blur-sm`}>
                
                {/* Icon */}
                <div className={`${stat.color} text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-5 lg:mb-6`}>
                  {stat.icon}
                </div>
                
                {/* Value and Label */}
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c4a3e] mb-1 sm:mb-2 md:mb-3 break-words">
                    {stat.value}
                  </div>
                  
                  <div className="text-xs sm:text-sm md:text-base font-medium text-[#2c4a3e]/80 mb-1 sm:mb-2">
                    {stat.label}
                  </div>
                  
                  <div className={`text-[10px] sm:text-xs md:text-sm ${stat.color} font-medium`}>
                    {stat.trend}
                  </div>
                </div>
                
                {/* Live Indicator */}
                {index < 2 && (
                  <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#b87d5e] rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#b87d5e] font-medium">Live</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Goal Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 mb-8 sm:mb-10 border border-[#2c4a3e]/20 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            
            {/* Left Section */}
            <div className="lg:w-3/5">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 md:gap-6 text-center xs:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#b87d5e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaBullseye className="text-[#b87d5e] text-base sm:text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e] mb-1 sm:mb-2">
                    Monthly Adoption Goal
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/70 max-w-xl">
                    Help us reach our target for this month. Every adoption creates space for another animal in need.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Section - Progress & Button */}
            <div className="lg:w-2/5">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="flex justify-between mb-1 sm:mb-2 md:mb-3">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-[#2c4a3e]/80">Progress</span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-[#2c4a3e]">15/25 (60%)</span>
                </div>
                
                <div className="w-full bg-[#f0f2e8] rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden mb-2 sm:mb-3 md:mb-4">
                  <div 
                    className="bg-gradient-to-r from-[#2c4a3e] to-[#b87d5e] h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                <div className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/60">
                  10 more adoptions needed this month
                </div>
              </div>
              
              <Link href="/animals">
  <button className="w-full py-2.5 sm:py-3 md:py-4 bg-[#2c4a3e] text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-[#1e352b] transition-colors shadow-md hover:shadow-lg cursor-pointer">
    Help Reach Our Goal
  </button>
</Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/50">
            Statistics update in real-time • Last updated: Just now
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;