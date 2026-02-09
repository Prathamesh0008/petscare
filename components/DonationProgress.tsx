'use client';

import { useState, useEffect } from 'react';
import { FaHeart, FaUsers, FaCalendarAlt, FaShareAlt, FaBell, FaGift, FaArrowRight } from 'react-icons/fa';

export default function DonationProgress() {
  const [donations, setDonations] = useState({
    current: 45000,
    target: 100000,
    donors: 234,
    daysLeft: 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDonations(prev => ({
        ...prev,
        current: prev.current + Math.floor(Math.random() * 250),
        donors: prev.donors + Math.floor(Math.random() * 1),
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const progress = (donations.current / donations.target) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Medical Fund Progress</h3>
          <p className="text-sm text-gray-600">Support animal healthcare</p>
        </div>
        <div className="flex items-center gap-1 text-sm text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">
          <FaCalendarAlt className="text-xs" />
          <span className="font-medium">{donations.daysLeft} days left</span>
        </div>
      </div>

      {/* Progress Bar - Clear and Readable */}
      <div className="mb-7">
        <div className="flex justify-between mb-2">
          <div className="text-lg font-bold text-gray-900">₹{donations.current.toLocaleString()}</div>
          <div className="text-lg font-bold text-gray-900">₹{donations.target.toLocaleString()}</div>
        </div>
        
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-400" />
              <span className="font-medium">{Math.round(progress)}% funded</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="text-blue-400" />
            <span className="font-medium">{donations.donors} donors</span>
          </div>
        </div>
      </div>

      {/* Stats - Clear and Organized */}
      <div className="grid grid-cols-3 gap-4 mb-7">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">{Math.floor(donations.current / 500)}</div>
          <div className="text-sm text-gray-600">Medical Kits</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">Funded</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
          <div className="text-sm text-gray-600">Animals Helped</div>
          <div className="text-xs text-blue-600 font-medium mt-1">This month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">₹4.2k</div>
          <div className="text-sm text-gray-600">Avg. Donation</div>
          <div className="text-xs text-purple-600 font-medium mt-1">Per donor</div>
        </div>
      </div>

      {/* Milestones - Clean Visual */}
      <div className="mb-7">
        <h4 className="text-base font-semibold text-gray-900 mb-4">Fund Milestones</h4>
        
        <div className="relative pt-2">
          {/* Progress line */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200"></div>
          
          <div className="relative flex justify-between">
            {[
              { amount: 5000, label: 'Kits', icon: '🩹' },
              { amount: 15000, label: 'Vaccine', icon: '💉' },
              { amount: 25000, label: 'Surgery', icon: '⚕️' },
              { amount: 50000, label: 'Van', icon: '🚐' },
            ].map((milestone, index) => {
              const isCompleted = donations.current >= milestone.amount;
              const isNext = donations.current < milestone.amount && 
                           (index === 0 || donations.current >= [5000, 15000, 25000][index - 1] || index === 3);
              
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 z-10 ${
                    isCompleted 
                      ? 'bg-emerald-100 border-2 border-emerald-500' 
                      : isNext
                      ? 'bg-amber-100 border-2 border-amber-500'
                      : 'bg-gray-100 border-2 border-gray-300'
                  }`}>
                    <span className="text-sm">{milestone.icon}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">₹{milestone.amount.toLocaleString()}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{milestone.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Current progress indicator */}
          <div 
            className="absolute top-5 h-1 bg-emerald-500 transition-all duration-300"
            style={{ width: `${Math.min(progress / 2, 50)}%` }}
          ></div>
        </div>
        
        {/* Next goal */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg">
            <FaArrowRight className="text-xs" />
            <span className="font-medium">
              Next: ₹{(50000 - donations.current).toLocaleString()} for Rescue Van
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button - Prominent but Clean */}
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2">
          <FaHeart />
          Donate Now
          <FaArrowRight className="text-sm" />
        </button>
        
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors">
            <FaShareAlt />
            <span>Share Campaign</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors">
            <FaBell />
            <span>Set Reminder</span>
          </button>
        </div>
      </div>

      {/* Footer - Subtle */}
      <div className="mt-6 pt-5 border-t border-gray-100 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>Updated just now • Donations are tax-deductible</span>
        </div>
      </div>
    </div>
  );
}