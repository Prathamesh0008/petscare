// petscare/components/LiveStats.tsx - Increased Height Version
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
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: <FaHome />,
      value: stats.adoptedToday,
      label: 'Adopted Today',
      trend: 'Just now',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <FaUsers />,
      value: stats.volunteersActive,
      label: 'Active Volunteers',
      trend: 'Currently helping',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FaStethoscope />,
      value: stats.urgentCases,
      label: 'Urgent Cases',
      trend: 'Needs attention',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: <FaHeart />,
      value: `₹${stats.donationsToday.toLocaleString()}`,
      label: 'Donated Today',
      trend: '+₹1,250 recently',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
  ];

  return (
    <div className="bg-white py-16"> {/* Increased vertical padding */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center"> {/* Increased margin */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Shelter Statistics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real-time updates on our shelter operations and impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-14"> {/* Increased gap and margin */}
          {statCards.map((stat, index) => (
            <div key={index} className="relative group h-full"> {/* Added h-full */}
              <div className={`${stat.bgColor} rounded-xl p-8 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col justify-between min-h-[200px]`}> {/* Increased padding, fixed height */}
                {/* Icon */}
                <div className={`${stat.color} text-3xl mb-6`}> {/* Increased icon size */}
                  {stat.icon}
                </div>
                
                <div>
                  {/* Value */}
                  <div className="text-4xl font-bold text-gray-900 mb-3"> {/* Increased font size */}
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-base font-medium text-gray-700 mb-2"> {/* Increased font size */}
                    {stat.label}
                  </div>
                  
                  {/* Trend */}
                  <div className={`text-sm ${stat.color} font-medium`}> {/* Increased font size */}
                    {stat.trend}
                  </div>
                </div>
                
                {/* Live indicator for first two cards */}
                {index < 2 && (
                  <div className="absolute top-6 right-6 flex items-center gap-2"> {/* Increased spacing */}
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-600 font-medium">Live</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Goal Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-10 mb-10"> {/* Increased padding, rounded corners */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"> {/* Increased gap */}
            <div className="lg:w-3/5">
              <div className="flex items-center gap-4 mb-6"> {/* Increased gap */}
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center"> {/* Increased size */}
                  <FaBullseye className="text-amber-600 text-xl" /> {/* Increased icon size */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Adoption Goal</h3>
                  <p className="text-gray-600 text-lg"> {/* Increased font size */}
                    Help us reach our target for this month. Every adoption creates space for another animal in need.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="mb-6"> {/* Increased margin */}
                <div className="flex justify-between mb-3"> {/* Increased margin */}
                  <span className="text-base font-medium text-gray-700">Progress</span>
                  <span className="text-base font-bold text-gray-900">15/25 (60%)</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-white rounded-full h-3 overflow-hidden mb-4"> {/* Increased height */}
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                <div className="text-base text-gray-500"> {/* Increased font size */}
                  10 more adoptions needed this month
                </div>
              </div>
              
              <button className="w-full py-4 bg-amber-600 text-white text-lg font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg">
                Help Reach Our Goal
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center"> {/* Increased margin */}
          <p className="text-base text-gray-500"> {/* Increased font size */}
            Statistics update in real-time • Last updated: Just now
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;