'use client';

import { useState } from 'react';
import DonationForm from '@/components/DonationForm';
import DonationProgress from '@/components/DonationProgress';
import { FaHeart, FaShieldAlt, FaGift, FaUsers, FaAward } from 'react-icons/fa';

export default function DonatePage() {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');

  const donationOptions = [
    {
      amount: 500,
      description: 'Feeds one animal for a week',
      popular: false,
    },
    {
      amount: 1000,
      description: 'Covers vaccinations for one animal',
      popular: true,
    },
    {
      amount: 2500,
      description: 'Sponsors medical treatment',
      popular: false,
    },
    {
      amount: 5000,
      description: 'Supports rescue operations',
      popular: false,
    },
    {
      amount: 10000,
      description: 'Funds spay/neuter surgeries',
      popular: false,
    },
    {
      amount: 0,
      description: 'Custom Amount',
      popular: false,
    },
  ];

  const donationTypes = [
    {
      type: 'one-time',
      title: 'One-Time Donation',
      icon: <FaHeart className="text-red-500" />,
      description: 'Make a single donation to support our work',
    },
    {
      type: 'monthly',
      title: 'Monthly Support',
      icon: <FaShieldAlt className="text-blue-500" />,
      description: 'Become a monthly donor and provide sustained support',
    },
    {
      type: 'yearly',
      title: 'Annual Sponsor',
      icon: <FaAward className="text-green-500" />,
      description: 'Make a yearly commitment to animal welfare',
    },
  ];

  const whereMoneyGoes = [
    { category: 'Medical Care', percentage: 40, color: 'bg-red-500' },
    { category: 'Food & Supplies', percentage: 30, color: 'bg-blue-500' },
    { category: 'Shelter Maintenance', percentage: 15, color: 'bg-green-500' },
    { category: 'Rescue Operations', percentage: 10, color: 'bg-purple-500' },
    { category: 'Community Programs', percentage: 5, color: 'bg-yellow-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Support Our Mission</h1>
      <p className="text-gray-600 text-lg mb-12 max-w-3xl">
        Your donation helps us rescue, rehabilitate, and find forever homes for stray animals in Navi Mumbai. 
        Every contribution, big or small, makes a difference.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Donation Options */}
        <div className="lg:col-span-2">
          {/* Donation Type Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Support Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {donationTypes.map((type) => (
                <button
                  key={type.type}
                  onClick={() => setSelectedOption(type.type as any)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    selectedOption === type.type
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-200'
                  }`}
                >
                  <div className="text-2xl mb-3">{type.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </button>
              ))}
            </div>

            {/* Quick Donation Amounts */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Select Amount (₹)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {donationOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {/* Handle amount selection */}}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      option.popular
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-200'
                    }`}
                  >
                    <div className="text-xl font-bold text-gray-800 mb-1">
                      {option.amount === 0 ? 'Custom' : `₹${option.amount}`}
                    </div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                    {option.popular && (
                      <div className="mt-2">
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Form */}
            <DonationForm donationType={selectedOption} />
          </div>

          {/* Where Your Money Goes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Where Your Money Goes</h2>
            <div className="space-y-6">
              {whereMoneyGoes.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{item.category}</span>
                    <span className="text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${item.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Transparency Promise:</strong> We publish annual financial reports and maintain 
                complete transparency about how every rupee is spent.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Info */}
        <div className="space-y-8">
          {/* Donation Progress */}
          <DonationProgress />

          {/* Tax Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaGift className="text-green-500 text-2xl" />
              <h3 className="text-lg font-bold text-gray-800">Tax Benefits</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Donations to PawHaven are eligible for tax exemption under Section 80G of the Income Tax Act.
            </p>
            <button className="w-full border-2 border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-50">
              Download 80G Certificate
            </button>
          </div>

          {/* Corporate Partnerships */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-blue-500 text-2xl" />
              <h3 className="text-lg font-bold text-gray-800">Corporate Partnerships</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Partner with us for CSR initiatives, employee volunteering, or cause marketing.
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Partner With Us
            </button>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Your Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  🐕
                </div>
                <div>
                  <div className="font-bold">₹1,000</div>
                  <div className="text-sm opacity-90">Vaccinates 2 animals</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  🏠
                </div>
                <div>
                  <div className="font-bold">₹5,000</div>
                  <div className="text-sm opacity-90">Sponsors 1 rescue operation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  ❤️
                </div>
                <div>
                  <div className="font-bold">₹10,000</div>
                  <div className="text-sm opacity-90">Funds medical treatment for 5 animals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Ways to Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Other Ways to Support</h3>
            <div className="space-y-3">
              <a href="/volunteer" className="block text-blue-600 hover:underline">
                Volunteer your time →
              </a>
              <a href="/foster" className="block text-green-600 hover:underline">
                Become a foster parent →
              </a>
              <a href="/wishlist" className="block text-purple-600 hover:underline">
                Donate supplies from our wishlist →
              </a>
              <a href="/sponsor" className="block text-amber-600 hover:underline">
                Sponsor an animal →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}