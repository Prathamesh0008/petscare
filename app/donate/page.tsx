// petscare/app/donate/page.tsx
'use client';

import { useState } from 'react';
import DonationForm from '@/components/DonationForm';
import DonationProgress from '@/components/DonationProgress';
import { 
  FaHeart, FaShieldAlt, FaGift, FaUsers, FaAward, 
  FaArrowRight, FaHandHoldingHeart, FaChartPie, 
  FaCertificate, FaBuilding, FaCheckCircle, FaStar 
} from 'react-icons/fa';

export default function DonatePage() {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);

  const donationOptions = [
    {
      amount: 500,
      description: 'Feeds one animal for a week',
      impact: 'Provides 7 days of nutrition',
      popular: false,
      icon: '🍗'
    },
    {
      amount: 1000,
      description: 'Covers vaccinations for one animal',
      impact: 'Protects against diseases',
      popular: true,
      icon: '💉'
    },
    {
      amount: 2500,
      description: 'Sponsors medical treatment',
      impact: 'Emergency care for injured animals',
      popular: false,
      icon: '🏥'
    },
    {
      amount: 5000,
      description: 'Supports rescue operations',
      impact: 'One complete rescue mission',
      popular: false,
      icon: '🚑'
    },
    {
      amount: 10000,
      description: 'Funds spay/neuter surgeries',
      impact: 'Prevents unwanted litters',
      popular: false,
      icon: '❤️'
    },
    {
      amount: 0,
      description: 'Custom Amount',
      impact: 'Choose your impact',
      popular: false,
      icon: '✏️'
    },
  ];

  const donationTypes = [
    {
      type: 'one-time',
      title: 'One-Time Gift',
      icon: <FaHeart />,
      description: 'Make a single donation',
      color: 'bg-gradient-to-br from-blue-500 to-emerald-500',
      borderColor: 'border-blue-100 hover:border-blue-200',
      selectedBorder: 'border-blue-500'
    },
    {
      type: 'monthly',
      title: 'Monthly Support',
      icon: <FaShieldAlt />,
      description: 'Sustained impact every month',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-100 hover:border-emerald-200',
      selectedBorder: 'border-emerald-500'
    },
    {
      type: 'yearly',
      title: 'Annual Sponsor',
      icon: <FaAward />,
      description: 'Major yearly commitment',
      color: 'bg-gradient-to-br from-amber-500 to-orange-500',
      borderColor: 'border-amber-100 hover:border-amber-200',
      selectedBorder: 'border-amber-500'
    },
  ];

  const whereMoneyGoes = [
    { category: 'Medical Care', percentage: 40, icon: '🏥', description: 'Vaccinations, surgeries, treatments' },
    { category: 'Food & Nutrition', percentage: 30, icon: '🍗', description: 'Quality food and supplements' },
    { category: 'Shelter Operations', percentage: 15, icon: '🏠', description: 'Utilities, maintenance, staff' },
    { category: 'Rescue Missions', percentage: 10, icon: '🚑', description: 'Emergency response and transport' },
    { category: 'Community Programs', percentage: 5, icon: '👥', description: 'Education and outreach' },
  ];

  const impactMetrics = [
    { 
      value: '₹1,000', 
      label: 'Vaccinates 2 animals', 
      icon: '💉',
      detail: 'Complete vaccination protocol'
    },
    { 
      value: '₹5,000', 
      label: 'Sponsors 1 rescue operation', 
      icon: '🚑',
      detail: 'Emergency response team'
    },
    { 
      value: '₹10,000', 
      label: 'Funds medical care for 5 animals', 
      icon: '❤️',
      detail: 'Surgery and recovery'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-emerald-600 to-blue-700">
       <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <FaHandHoldingHeart className="text-lg" />
              <span className="font-medium">Transform Lives</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Every Rupee <span className="text-blue-100">Creates Hope</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Your donation directly supports rescue operations, medical care, and 
              rehabilitation for animals in need. 100% transparency guaranteed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-white/80 text-sm">Animals Helped</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold">₹25L+</div>
                <div className="text-white/80 text-sm">Raised This Year</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-white/80 text-sm">Direct to Programs</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,197.3C672,192,768,224,864,218.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </div>

      <div className="relative z-10 container mx-auto px-4 -mt-20 pb-20">

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Donation Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Donation Type Selection */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white">
                  <FaHeart className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Choose Your Support</h2>
                  <p className="text-gray-600">Select how you'd like to make a difference</p>
                </div>
              </div>

              {/* Donation Types */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {donationTypes.map((type) => (
                  <button
                    key={type.type}
                    onClick={() => setSelectedOption(type.type as any)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 ${type.borderColor} ${
                      selectedOption === type.type 
                        ? `${type.selectedBorder} ring-2 ring-blue-100 bg-gradient-to-br from-white to-blue-50` 
                        : 'bg-white'
                    }`}
                  >
                    <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </button>
                ))}
              </div>

              {/* Donation Amounts */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Select Amount (₹)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => option.amount > 0 ? setSelectedAmount(option.amount) : setSelectedAmount(null)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-200 ${
                        selectedAmount === option.amount
                          ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-white shadow-md'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                      } ${option.amount === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                      <div className="text-4xl mb-3">{option.icon}</div>
                      <div className={`text-2xl font-bold mb-2 ${
                        selectedAmount === option.amount ? 'text-emerald-600' : 'text-gray-900'
                      }`}>
                        {option.amount === 0 ? 'Custom' : `₹${option.amount.toLocaleString('en-IN')}`}
                      </div>
                      <div className="text-gray-700 mb-2">{option.description}</div>
                      <div className="text-sm text-emerald-600 font-medium">{option.impact}</div>
                      {option.popular && (
                        <div className="mt-4">
                          <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm px-4 py-1.5 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donation Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <DonationForm 
                  donationType={selectedOption} 
                  defaultAmount={selectedAmount || undefined}
                />
              </div>
            </div>

            {/* Financial Transparency */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white">
                  <FaChartPie className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Financial Transparency</h2>
                  <p className="text-gray-600">See exactly where your money goes</p>
                </div>
              </div>

              <div className="space-y-8">
                {whereMoneyGoes.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-bold text-gray-900">{item.category}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{item.percentage}%</div>
                        <div className="text-sm text-gray-500">of every rupee</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FaCertificate className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Our Transparency Promise</h4>
                    <p className="text-gray-700 mb-6">
                      We maintain complete financial transparency with annual audited reports. 
                      Administrative costs are capped at just 5%, ensuring 95% of your donation 
                      goes directly to animal welfare programs.
                    </p>
                    <button className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700">
                      View Annual Financial Report
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-8">
            {/* Donation Progress */}
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <DonationProgress />
              </div>

              {/* Your Impact */}
              <div className="bg-gradient-to-br from-blue-500 to-emerald-600 text-white rounded-3xl p-8 mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <FaStar className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Your Impact</h3>
                </div>
                
                <div className="space-y-6">
                  {impactMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl bg-white/10 backdrop-blur-sm ${
                        selectedAmount === (index === 0 ? 1000 : index === 1 ? 5000 : 10000) 
                          ? 'ring-2 ring-white/50' 
                          : ''
                      }`}
                      onClick={() => setSelectedAmount(index === 0 ? 1000 : index === 1 ? 5000 : 10000)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{metric.icon}</div>
                        <div>
                          <div className="text-2xl font-bold">{metric.value}</div>
                          <div className="font-medium mb-1">{metric.label}</div>
                          <div className="text-white/80 text-sm">{metric.detail}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white">
                    <FaGift className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Tax Benefits</h3>
                    <p className="text-gray-600 text-sm">Maximize your giving impact</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-gray-700">50% tax deduction under 80G</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-gray-700">Valid for individuals & companies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-gray-700">CSR compliance certificates</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all">
                  Download 80G Certificate
                </button>
              </div>

              {/* Corporate Partnerships */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white">
                    <FaBuilding className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Corporate Partnerships</h3>
                    <p className="text-gray-600 text-sm">Meaningful CSR opportunities</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8">
                  Partner with us for CSR initiatives, employee volunteering programs, 
                  and cause marketing campaigns that make a real difference.
                </p>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all">
                  Explore Partnership
                </button>
              </div>

              {/* Other Ways to Support */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Support</h3>
                
                <div className="space-y-4">
                  <a 
                    href="/volunteer" 
                    className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FaUsers className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Volunteer</div>
                        <div className="text-sm text-gray-600">Donate your time and skills</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </a>
                  
                  <a 
                    href="/foster" 
                    className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <FaHeart className="text-emerald-600 text-xl" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Foster Care</div>
                        <div className="text-sm text-gray-600">Provide temporary home</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
                  </a>
                  
                  <a 
                    href="/wishlist" 
                    className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <FaGift className="text-amber-600 text-xl" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Wishlist</div>
                        <div className="text-sm text-gray-600">Donate essential supplies</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-lg p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure & Trusted Giving</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your donation is protected with bank-level security and complete transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Bank-Level Security</h3>
              <p className="text-gray-600">256-bit SSL encrypted transactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Multiple Payment Options</h3>
              <p className="text-gray-600">Cards, UPI, Net Banking, Wallets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <FaGift className="text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Instant Receipt</h3>
              <p className="text-gray-600">Immediate email confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}