'use client';

import { useState, useEffect } from 'react';
import { FaPaw, FaHeart, FaUsers, FaHome, FaStethoscope } from 'react-icons/fa';

const LiveStats = () => {
  const [stats, setStats] = useState({
    animalsInShelter: 24,
    adoptedToday: 3,
    volunteersActive: 8,
    urgentCases: 5,
    donationsToday: 12500,
  });

  // Simulate live updates
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

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        Live Shelter Statistics
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaPaw className="text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.animalsInShelter}</div>
              <div className="text-sm text-gray-600">In Shelter</div>
            </div>
          </div>
          <div className="text-xs text-green-600">+2 this week</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <FaHome className="text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.adoptedToday}</div>
              <div className="text-sm text-gray-600">Adopted Today</div>
            </div>
          </div>
          <div className="text-xs text-green-600">🎉 Just now!</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FaUsers className="text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.volunteersActive}</div>
              <div className="text-sm text-gray-600">Active Now</div>
            </div>
          </div>
          <div className="text-xs text-blue-600">Helping now</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-red-100 p-2 rounded-lg">
              <FaStethoscope className="text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.urgentCases}</div>
              <div className="text-sm text-gray-600">Urgent Cases</div>
            </div>
          </div>
          <div className="text-xs text-red-600">Need immediate help</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-amber-100 p-2 rounded-lg">
              <FaHeart className="text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">₹{stats.donationsToday.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Donated Today</div>
            </div>
          </div>
          <div className="text-xs text-green-600">+₹1,250 recently</div>
        </div>
      </div>

      {/* Goal Progress */}
      <div className="mt-6 bg-white p-4 rounded-xl">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-700">Monthly Adoption Goal</span>
          <span className="font-bold text-amber-600">15/25</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>10 more to go!</span>
          <span>60% complete</span>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;