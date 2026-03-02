'use client';

import { useState } from 'react';
import { FaPaw, FaHome, FaClock, FaHeart, FaShieldAlt, FaDog, FaCat, FaArrowRight, FaCalendarAlt, FaUserFriends, FaTree, FaBath, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DaycarePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>('Full Day'); // Default selected

  const features = [
    {
      icon: <FaHome className="text-2xl" />,
      title: 'Safe Environment',
      description: 'Clean, secure and monitored spaces with 24/7 CCTV surveillance for all pets.',
      color: 'brown'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Flexible Timings',
      description: 'Half-day, full-day, and extended care options to suit your schedule.',
      color: 'green'
    },
    {
      icon: <FaPaw className="text-2xl" />,
      title: 'Loving Care',
      description: 'Trained staff ensuring comfort, playtime, and individual attention.',
      color: 'brown'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Vet on Call',
      description: 'Immediate access to veterinary care if needed.',
      color: 'green'
    },
    {
      icon: <FaUserFriends className="text-2xl" />,
      title: 'Socialization',
      description: 'Structured group play sessions for healthy social development.',
      color: 'brown'
    },
    {
      icon: <FaBath className="text-2xl" />,
      title: 'Grooming Included',
      description: 'Basic grooming and hygiene maintenance during their stay.',
      color: 'green'
    }
  ];

  const packages = [
    {
      id: 'half-day',
      name: 'Half Day',
      price: '₹499',
      duration: 'Up to 4 hours',
      features: ['Supervised play', 'Fresh water', '1 meal included', 'Basic care'],
      color: 'brown'
    },
    {
      id: 'full-day',
      name: 'Full Day',
      price: '₹899',
      duration: '8-10 hours',
      features: ['All Half Day features', '2 meals included', 'Nap time', 'Grooming'],
      color: 'green',
      popular: true
    },
    {
      id: 'extended',
      name: 'Extended',
      price: '₹1299',
      duration: '10+ hours',
      features: ['All Full Day features', 'Evening walk', 'Bath service', 'Report card'],
      color: 'brown'
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7f0]/30 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5" />
        <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#b87d5e]/10 rounded-full mb-6 sm:mb-8">
              <FaPaw className="text-[#b87d5e] text-xs sm:text-sm" />
              <span className="text-[#b87d5e] font-medium text-xs sm:text-sm">Daycare Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-[#b87d5e]">Pet Daycare</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Safe, loving, and supervised daycare for your furry family members. 
              Give your pets a fun-filled day while you're away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="group cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                  <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                  Book a Visit
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#b87d5e]">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Happy Pets Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#2c4a3e]">5+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#b87d5e]">10+</div>
              <div className="text-xs sm:text-sm text-gray-600">Trained Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#2c4a3e]">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#2c4a3e]/10 rounded-full text-[#2c4a3e] font-medium text-xs sm:text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Pet Needs
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive daycare services designed for your pet's comfort and happiness
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                feature.color === 'brown' 
                  ? 'bg-white border-[#b87d5e]/20 hover:border-[#b87d5e]' 
                  : 'bg-white border-[#2c4a3e]/20 hover:border-[#2c4a3e]'
              }`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'brown' ? 'bg-[#b87d5e]/10 text-[#b87d5e]' : 'bg-[#2c4a3e]/10 text-[#2c4a3e]'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-b from-white to-[#f5f7f0] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-medium text-xs sm:text-sm mb-4">
              Pricing Plans
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Daycare <span className="text-[#b87d5e]">Packages</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your pet's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => {
              const isSelected = selectedPackage === pkg.name;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative cursor-pointer"
                  onClick={() => handlePackageSelect(pkg.name)}
                >
                  {pkg.popular && !isSelected && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-[#b87d5e] text-white px-4 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {isSelected && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-[#2c4a3e] text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaCheckCircle className="text-xs" />
                        Selected
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-full bg-white rounded-xl sm:rounded-2xl border-4 overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? 'border-[#2c4a3e] shadow-2xl scale-105 ring-4 ring-[#2c4a3e]/20'
                      : pkg.popular 
                        ? 'border-[#b87d5e] shadow-xl scale-105 hover:shadow-2xl' 
                        : pkg.color === 'brown' 
                          ? 'border-[#b87d5e]/20 hover:border-[#b87d5e] hover:shadow-xl' 
                          : 'border-[#2c4a3e]/20 hover:border-[#2c4a3e] hover:shadow-xl'
                  } ${isSelected ? 'bg-gradient-to-br from-[#2c4a3e]/5 to-[#b87d5e]/5' : ''}`}>
                    
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-[#2c4a3e] rounded-full flex items-center justify-center">
                          <FaCheckCircle className="text-white text-sm" />
                        </div>
                      </div>
                    )}
                    
                    <div className={`p-6 sm:p-8 ${
                      pkg.popular && !isSelected ? 'bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5' : ''
                    }`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        {pkg.name}
                        {isSelected && (
                          <span className="text-xs bg-[#2c4a3e] text-white px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl sm:text-4xl font-bold text-[#b87d5e]">{pkg.price}</span>
                        <span className="text-gray-600 text-sm">/day</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                        <FaClock className={`${isSelected ? 'text-[#2c4a3e]' : 'text-[#2c4a3e]'}`} />
                        <span>{pkg.duration}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <FaHeart className={`text-xs flex-shrink-0 ${
                              isSelected 
                                ? 'text-[#2c4a3e]' 
                                : pkg.color === 'brown' 
                                  ? 'text-[#b87d5e]' 
                                  : 'text-[#2c4a3e]'
                            }`} />
                            <span className={`${isSelected ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
                              {feature}
                            </span>
                            {isSelected && (
                              <FaCheckCircle className="text-[#2c4a3e] text-xs ml-auto" />
                            )}
                          </li>
                        ))}
                      </ul>

                      <button 
                        className={`w-full cursor-pointer py-3 rounded-lg font-semibold transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#2c4a3e] text-white hover:bg-[#1e352b] ring-2 ring-[#2c4a3e]/50'
                            : pkg.popular
                              ? 'bg-[#b87d5e] text-white hover:bg-[#9e6a4f]'
                              : pkg.color === 'brown'
                                ? 'bg-[#b87d5e]/10 text-[#b87d5e] hover:bg-[#b87d5e] hover:text-white'
                                : 'bg-[#2c4a3e]/10 text-[#2c4a3e] hover:bg-[#2c4a3e] hover:text-white'
                        }`}
                      >
                        {isSelected ? 'Selected Package' : 'Choose Plan'}
                      </button>

                      {isSelected && (
                        <div className="mt-4 text-center">
                          <Link href="/contact">
                            <span className="text-xs text-[#2c4a3e] underline underline-offset-2 hover:text-[#b87d5e] transition-colors cursor-pointer">
                              Proceed with this package →
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Package Summary */}
          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#2c4a3e]/10 px-4 py-2 rounded-full">
                <FaCheckCircle className="text-[#2c4a3e] text-sm" />
                <span className="text-sm text-gray-700">
                  You've selected: <span className="font-bold text-[#2c4a3e]">{selectedPackage}</span> package
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-24 translate-x-24" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#b87d5e] rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                <FaDog className="text-white text-2xl sm:text-3xl" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Give Your Pet a <span className="text-[#b87d5e]">Fun Day?</span>
              </h2>
              
              <p className="text-sm sm:text-base text-white/80 mb-8 max-w-2xl mx-auto">
                Visit our facility, meet our team, and see why pets love spending time with us.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                 
                </Link>
                
                <Link href="/contact">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg sm:rounded-xl hover:bg-white hover:text-[#2c4a3e] transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-white/60">
                  📍 Vashi, Navi Mumbai | 📞 +91 98765 43210 | ✉️ daycare@pawheaven.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}