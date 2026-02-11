// petscare/app/donate/page.tsx
'use client';

import { useState } from 'react';
import DonationForm from '@/components/DonationForm';
import DonationProgress from '@/components/DonationProgress';
import { 
  FaHeart, FaShieldAlt, FaGift, FaUsers, FaAward, 
  FaArrowRight, FaHandHoldingHeart, FaChartPie, 
  FaCertificate, FaBuilding, FaCheckCircle, FaStar,
  FaRupeeSign, FaPercentage, FaLock, FaReceipt,FaPlayCircle,FaChartLine,FaPaw,FaRocket,FaHandsHelping
} from 'react-icons/fa';

export default function DonatePage() {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);

  const donationOptions = [
    { amount: 500, description: 'Feeds one animal for a week', popular: false },
    { amount: 1000, description: 'Covers vaccinations', popular: true },
    { amount: 2500, description: 'Sponsors medical treatment', popular: false },
    { amount: 5000, description: 'Supports rescue operations', popular: false },
    { amount: 10000, description: 'Funds surgeries', popular: false },
    { amount: 0, description: 'Custom Amount', popular: false },
  ];

  const donationTypes = [
    {
      type: 'one-time',
      title: 'One-Time Gift',
      icon: <FaHeart />,
      description: 'Make a single donation',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
    {
      type: 'monthly',
      title: 'Monthly Support',
      icon: <FaShieldAlt />,
      description: 'Sustained impact',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      type: 'yearly',
      title: 'Annual Sponsor',
      icon: <FaAward />,
      description: 'Major commitment',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
  ];

  const whereMoneyGoes = [
    { category: 'Medical Care', percentage: 40, color: 'bg-gradient-to-r from-amber-500 to-orange-500' },
    { category: 'Food & Nutrition', percentage: 30, color: 'bg-gradient-to-r from-orange-400 to-amber-400' },
    { category: 'Shelter Operations', percentage: 15, color: 'bg-gradient-to-r from-amber-400 to-yellow-400' },
    { category: 'Rescue Missions', percentage: 10, color: 'bg-gradient-to-r from-orange-500 to-red-400' },
    { category: 'Community Programs', percentage: 5, color: 'bg-gradient-to-r from-amber-600 to-orange-600' },
  ];

  const impactMetrics = [
    { value: '₹1,000', label: 'Vaccinates 2 animals', detail: 'Complete vaccination protocol' },
    { value: '₹5,000', label: 'Sponsors 1 rescue', detail: 'Emergency response team' },
    { value: '₹10,000', label: 'Medical care for 5', detail: 'Surgery and recovery' },
  ];

  const securityFeatures = [
    { icon: <FaLock />, title: 'Bank-Level Security', description: '256-bit SSL encryption' },
    { icon: <FaCheckCircle />, title: 'Multiple Payment Options', description: 'Cards, UPI, Net Banking' },
    { icon: <FaReceipt />, title: 'Instant Receipt', description: 'Immediate email confirmation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/10 to-white">
    {/* Hero Section - Redesigned */}
<div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
  
  <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-lg px-6 py-3 rounded-2xl border border-amber-300/20 shadow-lg">
            <FaHandHoldingHeart className="text-amber-200 text-xl animate-pulse" />
            <span className="font-bold tracking-wide">Transform Lives Today</span>
            <FaArrowRight className="text-amber-200 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your <span className="text-amber-200">Kindness</span> Fuels Their <span className="text-amber-200">Future</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Every contribution powers emergency rescues, vital medical treatments, 
            and safe shelter for animals who depend on us.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:-translate-y-1">
              <FaHeart className="group-hover:scale-110 transition-transform" />
              <span>Donate Now</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3">
              <FaPlayCircle />
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>
        
        {/* Right Stats */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <FaPaw className="text-amber-300 text-2xl" />
                <FaChartLine className="text-amber-200/50" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">2,500+</div>
              <div className="text-amber-100/80 font-medium">Animals Rescued</div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-3"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <FaRupeeSign className="text-amber-300 text-2xl" />
                <FaRocket className="text-amber-200/50" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">₹25L+</div>
              <div className="text-amber-100/80 font-medium">Raised This Year</div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-3"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl col-span-2">
              <div className="flex items-center justify-between mb-4">
                <FaHandsHelping className="text-amber-300 text-2xl" />
                <FaStar className="text-amber-200/50" />
              </div>
              <div className="flex items-end gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-amber-100/80 font-medium">Direct Impact Rate</div>
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-amber-400 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/60 mt-2">
                    <span>Administration</span>
                    <span>Animal Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-lg border border-amber-300/30 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/20 p-3 rounded-xl">
                <FaShieldAlt className="text-amber-300 text-2xl" />
              </div>
              <div>
                <div className="font-bold text-white">Trust & Transparency</div>
                <div className="text-sm text-amber-100/70">Verified nonprofit • Monthly impact reports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Bottom wave divider */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
      <path fill="#FFFFFF" fillOpacity="0.1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
    </svg>
  </div>
</div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Donation Type Selection */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <FaHeart className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Choose Your Support</h2>
                  <p className="text-gray-600">Select how you'd like to make a difference</p>
                </div>
              </div>

              {/* Donation Types */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {donationTypes.map((type) => (
                  <button
                    key={type.type}
                    onClick={() => setSelectedOption(type.type as any)}
                    className={`p-6 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                      selectedOption === type.type 
                        ? `${type.borderColor} border-2 bg-white shadow-lg` 
                        : 'border-gray-200 bg-gradient-to-b from-amber-50/50 to-white hover:bg-white'
                    }`}
                  >
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                      <div className={type.textColor}>
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </button>
                ))}
              </div>

              {/* Donation Amounts */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Select Amount (₹)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => option.amount > 0 ? setSelectedAmount(option.amount) : setSelectedAmount(0)}
                      className={`p-5 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                        selectedAmount === option.amount
                          ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-white shadow-md'
                          : 'border-gray-200 bg-gradient-to-b from-white to-amber-50/30 hover:bg-white'
                      } ${option.amount === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                      <div className={`text-2xl font-bold mb-2 ${
                        selectedAmount === option.amount ? 'text-amber-600' : 'text-gray-900'
                      }`}>
                        {option.amount === 0 ? 'Custom' : `₹${option.amount.toLocaleString('en-IN')}`}
                      </div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                      {option.popular && (
                        <div className="mt-3">
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donation Form */}
              <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-xl p-6 border border-amber-100">
                <DonationForm 
                  donationType={selectedOption} 
                  defaultAmount={selectedAmount}
                />
              </div>
            </div>

            {/* Financial Transparency */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <FaChartPie className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Financial Transparency</h2>
                  <p className="text-gray-600">See exactly where your money goes</p>
                </div>
              </div>

              <div className="space-y-6">
                {whereMoneyGoes.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-900">{item.category}</div>
                      <div className="text-lg font-bold text-amber-600">{item.percentage}%</div>
                    </div>
                    <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-700 ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCertificate className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Our Transparency Promise</h4>
                    <p className="text-gray-700 mb-4">
                      Administrative costs capped at 5%, ensuring 95% goes directly to animal welfare.
                    </p>
                    <button className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 text-sm hover:gap-3 transition-all duration-300">
                      View Annual Report
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Donation Progress */}
            <div className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <DonationProgress />
              </div>

              {/* Your Impact */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-500 text-white rounded-xl p-6 mt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaStar />
                  </div>
                  <h3 className="font-bold text-lg">Your Impact</h3>
                </div>
                
                <div className="space-y-4">
                  {impactMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300 ${
                        selectedAmount === (index === 0 ? 1000 : index === 1 ? 5000 : 10000) 
                          ? 'ring-2 ring-white/50' 
                          : ''
                      }`}
                      onClick={() => setSelectedAmount(index === 0 ? 1000 : index === 1 ? 5000 : 10000)}
                    >
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="font-medium mb-2">{metric.label}</div>
                      <div className="text-white/80 text-sm">{metric.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <FaGift className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Tax Benefits</h3>
                    <p className="text-gray-600 text-sm">Maximize your giving</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-700 text-sm">50% tax deduction under 80G</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-700 text-sm">Valid for individuals & companies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-700 text-sm">CSR compliance certificates</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                  Download 80G Certificate
                </button>
              </div>

              {/* Corporate Partnerships */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <FaBuilding className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Corporate Partnerships</h3>
                    <p className="text-gray-600 text-sm">Meaningful CSR opportunities</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-6">
                  Partner with us for CSR initiatives, employee volunteering programs, 
                  and cause marketing campaigns.
                </p>
                
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                  Explore Partnership
                </button>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-6">Secure Giving</h3>
                
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-b from-amber-50 to-white rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-100">
                        <div className="text-amber-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Ways to Support */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 p-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-6">Other Ways to Support</h3>
                
                <div className="space-y-4">
                  <a 
                    href="/volunteer" 
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <FaUsers className="text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Volunteer</div>
                        <div className="text-sm text-gray-600">Donate your time</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </a>
                  
                  <a 
                    href="/foster" 
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                        <FaHeart className="text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Foster Care</div>
                        <div className="text-sm text-gray-600">Provide temporary home</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </a>
                  
                  <a 
                    href="/wishlist" 
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <FaGift className="text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Wishlist</div>
                        <div className="text-sm text-gray-600">Donate supplies</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50/30 rounded-xl p-10 border border-amber-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Secure & Trusted Giving</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your donation is protected with bank-level security and complete transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}