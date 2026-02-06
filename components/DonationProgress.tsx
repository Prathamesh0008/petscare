'use client';

import { useState, useEffect } from 'react';

export default function DonationProgress() {
  const [donations, setDonations] = useState({
    current: 45000,
    target: 100000,
    donors: 234,
  });

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setDonations(prev => ({
        ...prev,
        current: prev.current + Math.floor(Math.random() * 1000),
        donors: prev.donors + Math.floor(Math.random() * 3),
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const progress = (donations.current / donations.target) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Monthly Donation Goal</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Medical Fund</span>
          <span className="font-bold">₹{donations.current.toLocaleString()}/₹{donations.target.toLocaleString()}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{Math.round(progress)}% reached</span>
          <span>{donations.donors} donors</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">₹5,000</div>
          <div className="text-sm text-gray-600">Medical Kit</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">₹15,000</div>
          <div className="text-sm text-gray-600">Vaccinations</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">₹25,000</div>
          <div className="text-sm text-gray-600">Surgery Fund</div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg hover:opacity-90">
          Donate Now
        </button>
        <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
          Become Monthly Sponsor
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Every donation helps save lives</p>
        <p className="mt-1">Last donation: 15 minutes ago</p>
      </div>
    </div>
  );
}