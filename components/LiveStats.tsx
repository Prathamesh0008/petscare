// components/LiveStats.tsx
'use client';

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
    <div className="bg-[#f5f7f0] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#2c4a3e] mb-4">Live Shelter Statistics</h2>
          <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">Real-time updates on our shelter operations and impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
          {statCards.map((stat, index) => (
            <div key={index} className="relative group h-full">
              <div className={`${stat.bgColor} rounded-xl p-8 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col justify-between min-h-[200px] border border-[#2c4a3e]/10 bg-white/80 backdrop-blur-sm`}>
                <div className={`${stat.color} text-3xl mb-6`}>
                  {stat.icon}
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-[#2c4a3e] mb-3">
                    {stat.value}
                  </div>
                  
                  <div className="text-base font-medium text-[#2c4a3e]/80 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className={`text-sm ${stat.color} font-medium`}>
                    {stat.trend}
                  </div>
                </div>
                
                {index < 2 && (
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#b87d5e] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#b87d5e] font-medium">Live</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Goal Section */}
        <div className="bg-white rounded-2xl p-10 mb-10 border border-[#2c4a3e]/20 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-[#b87d5e] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2c4a3e] mb-2">Monthly Adoption Goal</h3>
                  <p className="text-[#2c4a3e]/70 text-lg">
                    Help us reach our target for this month. Every adoption creates space for another animal in need.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-base font-medium text-[#2c4a3e]/80">Progress</span>
                  <span className="text-base font-bold text-[#2c4a3e]">15/25 (60%)</span>
                </div>
                
                <div className="w-full bg-[#f0f2e8] rounded-full h-3 overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-[#2c4a3e] to-[#b87d5e] h-3 rounded-full transition-all duration-500"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                <div className="text-base text-[#2c4a3e]/60">
                  10 more adoptions needed this month
                </div>
              </div>
              
              <button className="w-full py-4 bg-[#2c4a3e] text-white text-lg font-semibold rounded-lg hover:bg-[#1e352b] transition-colors shadow-md hover:shadow-lg">
                Help Reach Our Goal
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-base text-[#2c4a3e]/50">
            Statistics update in real-time • Last updated: Just now
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;