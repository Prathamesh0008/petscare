// petscare/app/donate/page.tsx
'use client';

import { useState } from 'react';
import DonationForm from '@/components/DonationForm';
import DonationProgress from '@/components/DonationProgress';
import { 
  FaHeart, FaShieldAlt, FaGift, FaUsers, FaAward, 
  FaArrowRight, FaHandHoldingHeart, FaChartPie, 
  FaCertificate, FaBuilding, FaCheckCircle, FaStar,
  FaRupeeSign, FaPercentage, FaLock, FaReceipt, FaPlayCircle, FaChartLine, FaPaw, FaRocket, FaHandsHelping
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
      color: '#1b93d1'
    },
    {
      type: 'monthly',
      title: 'Monthly Support',
      icon: <FaShieldAlt />,
      description: 'Sustained impact',
      color: '#223d7c'
    },
    {
      type: 'yearly',
      title: 'Annual Sponsor',
      icon: <FaAward />,
      description: 'Major commitment',
      color: '#1b93d1'
    },
  ];

  const whereMoneyGoes = [
    { category: 'Medical Care', percentage: 40, color: 'bg-gradient-to-r from-[#1b93d1] to-[#1680b5]' },
    { category: 'Food & Nutrition', percentage: 30, color: 'bg-gradient-to-r from-[#223d7c] to-[#1a2f60]' },
    { category: 'Shelter Operations', percentage: 15, color: 'bg-gradient-to-r from-[#1b93d1] to-[#1b93d1]/70' },
    { category: 'Rescue Missions', percentage: 10, color: 'bg-gradient-to-r from-[#223d7c] to-[#223d7c]/70' },
    { category: 'Community Programs', percentage: 5, color: 'bg-gradient-to-r from-[#1b93d1] to-[#1680b5]' },
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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7fa] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#223d7c] via-[#1b93d1] to-[#1a2f60]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#1b93d1]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#223d7c]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14 lg:py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 sm:gap-3 bg-gradient-to-r from-[#1b93d1]/30 to-[#223d7c]/30 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg mx-auto lg:mx-0">
                  <FaHandHoldingHeart className="text-white/80 text-sm sm:text-base md:text-xl animate-pulse" />
                  <span className="font-bold tracking-wide text-xs sm:text-sm md:text-base">Transform Lives Today</span>
                  <FaArrowRight className="text-white/80 ml-1 sm:ml-2 text-xs sm:text-sm" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 lg:px-0">
                  Your <span className="text-[#B6D3DE]">Kindness</span> Fuels Their <span className="text-[#B6D3DE]">Future</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0 px-4 lg:px-0">
                  Every contribution powers emergency rescues, vital medical treatments, 
                  and safe shelter for animals who depend on us.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button className="group bg-[#1b93d1] hover:bg-[#1680b5] text-white font-bold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 hover:-translate-y-1 text-sm sm:text-base">
                    <FaHeart className="group-hover:scale-110 transition-transform text-sm sm:text-base" />
                    <span>Donate Now</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform text-xs sm:text-sm" />
                  </button>
                  
                  <button className="group bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 text-white font-bold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <FaPlayCircle className="text-sm sm:text-base" />
                    <span>Watch Our Story</span>
                  </button>
                </div>
              </div>
              
              {/* Right Stats */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 lg:mt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <FaPaw className="text-[#B6D3DE] text-lg sm:text-xl md:text-2xl" />
                      <FaChartLine className="text-white/50 text-xs sm:text-sm" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">2,500+</div>
                    <div className="text-white/80 font-medium text-xs sm:text-sm">Animals Rescued</div>
                    <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#B6D3DE] to-transparent rounded-full mt-2 sm:mt-3"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <FaRupeeSign className="text-[#B6D3DE] text-lg sm:text-xl md:text-2xl" />
                      <FaRocket className="text-white/50 text-xs sm:text-sm" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">₹25L+</div>
                    <div className="text-white/80 font-medium text-xs sm:text-sm">Raised This Year</div>
                    <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#B6D3DE] to-transparent rounded-full mt-2 sm:mt-3"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl col-span-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                          <FaHandsHelping className="text-[#B6D3DE] text-lg sm:text-xl md:text-2xl" />
                          <FaStar className="text-white/50 text-xs sm:text-sm" />
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">95%</div>
                        <div className="text-white/80 font-medium text-xs sm:text-sm">Direct Impact Rate</div>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1b93d1] to-[#223d7c] rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">
                          <span>Administration</span>
                          <span>Animal Care</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Trust Badge */}
                <div className="bg-gradient-to-r from-[#223d7c]/30 to-[#1b93d1]/30 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-[#1b93d1]/20 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                      <FaShieldAlt className="text-[#B6D3DE] text-lg sm:text-xl md:text-2xl" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">Trust & Transparency</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/70">Verified nonprofit • Monthly impact reports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 md:h-20 lg:h-24">
            <path fill="#FFFFFF" fillOpacity="0.1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-7 md:space-y-8">
            {/* Donation Type Selection */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#223d7c]/10 p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-[#1b93d1] text-base sm:text-lg md:text-xl" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#223d7c]">Choose Your Support</h2>
                  <p className="text-xs sm:text-sm text-[#223d7c]/60">Select how you'd like to make a difference</p>
                </div>
              </div>

              {/* Donation Types */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                {donationTypes.map((type) => (
                  <button
                    key={type.type}
                    onClick={() => setSelectedOption(type.type as any)}
                    className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                      selectedOption === type.type 
                        ? 'border-[#1b93d1] border-2 bg-white shadow-lg' 
                        : 'border-[#223d7c]/10 bg-gradient-to-b from-[#f5f7fa]/50 to-white hover:bg-white'
                    }`}
                  >
                    <div 
                      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4"
                      style={{ backgroundColor: `${type.color}10` }}
                    >
                      <div style={{ color: type.color }} className="text-sm sm:text-base md:text-lg">
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-[#223d7c] text-sm sm:text-base mb-1">{type.title}</h3>
                    <p className="text-[#223d7c]/60 text-xs sm:text-sm">{type.description}</p>
                  </button>
                ))}
              </div>

              {/* Donation Amounts */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#223d7c] mb-4 sm:mb-5 md:mb-6">Select Amount (₹)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => option.amount > 0 ? setSelectedAmount(option.amount) : setSelectedAmount(0)}
                      className={`p-4 sm:p-5 rounded-lg sm:rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                        selectedAmount === option.amount
                          ? 'border-[#1b93d1] bg-gradient-to-b from-[#1b93d1]/5 to-white shadow-md'
                          : 'border-[#223d7c]/10 bg-gradient-to-b from-white to-[#f5f7fa]/30 hover:bg-white'
                      } ${option.amount === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                    >
                      <div className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 ${
                        selectedAmount === option.amount ? 'text-[#1b93d1]' : 'text-[#223d7c]'
                      }`}>
                        {option.amount === 0 ? 'Custom' : `₹${option.amount.toLocaleString('en-IN')}`}
                      </div>
                      <div className="text-xs sm:text-sm text-[#223d7c]/60">{option.description}</div>
                      {option.popular && (
                        <div className="mt-2 sm:mt-3">
                          <span className="bg-[#1b93d1] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donation Form */}
              <div className="bg-gradient-to-b from-[#1b93d1]/5 to-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-[#1b93d1]/20">
                <DonationForm 
                  donationType={selectedOption} 
                  defaultAmount={selectedAmount}
                />
              </div>
            </div>

            {/* Financial Transparency */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#223d7c]/10 p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaChartPie className="text-[#1b93d1] text-base sm:text-lg md:text-xl" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#223d7c]">Financial Transparency</h2>
                  <p className="text-xs sm:text-sm text-[#223d7c]/60">See exactly where your money goes</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {whereMoneyGoes.map((item, index) => (
                  <div key={index} className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-[#223d7c] text-sm sm:text-base">{item.category}</div>
                      <div className="text-base sm:text-lg font-bold text-[#1b93d1]">{item.percentage}%</div>
                    </div>
                    <div className="w-full bg-[#1b93d1]/10 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#1b93d1]/5 to-[#223d7c]/5 rounded-lg sm:rounded-xl border border-[#1b93d1]/20">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCertificate className="text-[#1b93d1] text-base sm:text-lg md:text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#223d7c] text-sm sm:text-base mb-2 sm:mb-3">Our Transparency Promise</h4>
                    <p className="text-[#223d7c]/70 text-xs sm:text-sm mb-3 sm:mb-4">
                      Administrative costs capped at 5%, ensuring 95% goes directly to animal welfare.
                    </p>
                    <button className="inline-flex items-center gap-1 sm:gap-2 text-[#1b93d1] font-medium hover:text-[#1680b5] text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all duration-300">
                      View Annual Report
                      <FaArrowRight className="text-[10px] sm:text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 sm:space-y-6">
            {/* Donation Progress */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                <DonationProgress />
              </div>

              {/* Your Impact */}
              <div className="bg-gradient-to-br from-[#1b93d1] to-[#1680b5] text-white rounded-xl p-4 sm:p-5 md:p-6 mt-5 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaStar className="text-sm sm:text-base" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg">Your Impact</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {impactMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={`p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300 ${
                        selectedAmount === (index === 0 ? 1000 : index === 1 ? 5000 : 10000) 
                          ? 'ring-2 ring-white/50' 
                          : ''
                      }`}
                      onClick={() => setSelectedAmount(index === 0 ? 1000 : index === 1 ? 5000 : 10000)}
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{metric.label}</div>
                      <div className="text-white/80 text-xs sm:text-sm">{metric.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-white rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 mt-5 sm:mt-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center">
                    <FaGift className="text-[#1b93d1] text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#223d7c] text-sm sm:text-base">Tax Benefits</h3>
                    <p className="text-[#223d7c]/60 text-xs">Maximize your giving</p>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-[#1b93d1] text-xs sm:text-sm flex-shrink-0" />
                    <span className="text-[#223d7c]/70 text-xs sm:text-sm">50% tax deduction under 80G</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-[#223d7c] text-xs sm:text-sm flex-shrink-0" />
                    <span className="text-[#223d7c]/70 text-xs sm:text-sm">Valid for individuals & companies</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-[#1b93d1] text-xs sm:text-sm flex-shrink-0" />
                    <span className="text-[#223d7c]/70 text-xs sm:text-sm">CSR compliance certificates</span>
                  </div>
                </div>
                
                <button className="w-full bg-[#1b93d1] hover:bg-[#1680b5] text-white font-semibold py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm">
                  Download 80G Certificate
                </button>
              </div>

              {/* Corporate Partnerships */}
              <div className="bg-white rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 mt-5 sm:mt-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center">
                    <FaBuilding className="text-[#1b93d1] text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#223d7c] text-sm sm:text-base">Corporate Partnerships</h3>
                    <p className="text-[#223d7c]/60 text-xs">Meaningful CSR opportunities</p>
                  </div>
                </div>
                
                <p className="text-[#223d7c]/70 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">
                  Partner with us for CSR initiatives, employee volunteering programs, 
                  and cause marketing campaigns.
                </p>
                
                <button className="w-full bg-[#1b93d1] hover:bg-[#1680b5] text-white font-semibold py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm">
                  Explore Partnership
                </button>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 mt-5 sm:mt-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-[#223d7c] text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">Secure Giving</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-b from-[#1b93d1]/5 to-white rounded-lg flex items-center justify-center flex-shrink-0 border border-[#1b93d1]/20">
                        <div className="text-[#1b93d1] text-xs sm:text-sm">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-[#223d7c] text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[10px] sm:text-xs text-[#223d7c]/60">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Ways to Support */}
              <div className="bg-gradient-to-br from-[#1b93d1]/5 to-white rounded-xl border border-[#1b93d1]/20 p-4 sm:p-5 md:p-6 mt-5 sm:mt-6">
                <h3 className="font-bold text-[#223d7c] text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">Other Ways to Support</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <a 
                    href="/volunteer" 
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-lg border border-[#223d7c]/10 bg-white hover:border-[#1b93d1] hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center">
                        <FaUsers className="text-[#1b93d1] text-xs sm:text-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-[#223d7c] text-xs sm:text-sm">Volunteer</div>
                        <div className="text-[10px] sm:text-xs text-[#223d7c]/60">Donate your time</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#1b93d1] group-hover:translate-x-1 transition-all duration-300 text-[10px] sm:text-xs" />
                  </a>
                  
                  <a 
                    href="/foster" 
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-lg border border-[#223d7c]/10 bg-white hover:border-[#223d7c] hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#223d7c]/10 to-[#1b93d1]/10 rounded-lg flex items-center justify-center">
                        <FaHeart className="text-[#223d7c] text-xs sm:text-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-[#223d7c] text-xs sm:text-sm">Foster Care</div>
                        <div className="text-[10px] sm:text-xs text-[#223d7c]/60">Provide temporary home</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#223d7c] group-hover:translate-x-1 transition-all duration-300 text-[10px] sm:text-xs" />
                  </a>
                  
                  <a 
                    href="/wishlist" 
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-lg border border-[#223d7c]/10 bg-white hover:border-[#1b93d1] hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#1b93d1]/10 to-[#223d7c]/10 rounded-lg flex items-center justify-center">
                        <FaGift className="text-[#1b93d1] text-xs sm:text-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-[#223d7c] text-xs sm:text-sm">Wishlist</div>
                        <div className="text-[10px] sm:text-xs text-[#223d7c]/60">Donate supplies</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#1b93d1] group-hover:translate-x-1 transition-all duration-300 text-[10px] sm:text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-12 sm:mt-14 md:mt-16 bg-gradient-to-br from-[#1b93d1]/5 to-[#223d7c]/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-[#1b93d1]/20">
          <div className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#223d7c] mb-2 sm:mb-3">Secure & Trusted Giving</h2>
            <p className="text-xs sm:text-sm md:text-base text-[#223d7c]/60 max-w-2xl mx-auto px-4">
              Your donation is protected with bank-level security and complete transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#1b93d1] to-[#223d7c] rounded-lg flex items-center justify-center text-white mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#223d7c] text-xs sm:text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-[10px] sm:text-xs text-[#223d7c]/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}