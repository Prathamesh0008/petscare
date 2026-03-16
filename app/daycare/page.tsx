'use client';

import { useState } from 'react';
import { FaPaw, FaHome, FaClock, FaHeart, FaShieldAlt, FaDog, FaCat, FaArrowRight, FaCalendarAlt, FaUserFriends, FaTree, FaBath, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DaycarePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>('Full Day');

  const features = [
    {
      icon: <FaHome className="text-xl" />,
      title: 'Safe Environment',
      description: 'Clean, secure and monitored spaces with 24/7 CCTV surveillance for all pets.',
      color: '#1b93d1'
    },
    {
      icon: <FaClock className="text-xl" />,
      title: 'Flexible Timings',
      description: 'Half-day, full-day, and extended care options to suit your schedule.',
      color: '#223d7c'
    },
    {
      icon: <FaPaw className="text-xl" />,
      title: 'Loving Care',
      description: 'Trained staff ensuring comfort, playtime, and individual attention.',
      color: '#1b93d1'
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: 'Vet on Call',
      description: 'Immediate access to veterinary care if needed.',
      color: '#223d7c'
    },
    {
      icon: <FaUserFriends className="text-xl" />,
      title: 'Socialization',
      description: 'Structured group play sessions for healthy social development.',
      color: '#1b93d1'
    },
    {
      icon: <FaBath className="text-xl" />,
      title: 'Grooming Included',
      description: 'Basic grooming and hygiene maintenance during their stay.',
      color: '#223d7c'
    }
  ];

  const packages = [
    {
      id: 'half-day',
      name: 'Half Day',
      price: '₹499',
      duration: 'Up to 4 hours',
      features: ['Supervised play', 'Fresh water', '1 meal included', 'Basic care'],
      color: '#1b93d1'
    },
    {
      id: 'full-day',
      name: 'Full Day',
      price: '₹899',
      duration: '8-10 hours',
      features: ['All Half Day features', '2 meals included', 'Nap time', 'Grooming'],
      color: '#223d7c',
      popular: true
    },
    {
      id: 'extended',
      name: 'Extended',
      price: '₹1299',
      duration: '10+ hours',
      features: ['All Full Day features', 'Evening walk', 'Bath service', 'Report card'],
      color: '#1b93d1'
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero Section - Matching Hero component style */}
      <section className="relative bg-[#B6D3DE] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Subtle badge - matte finish */}
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-6">
              <span className="text-sm text-[#223d7c] font-medium">🐾 Daycare Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#223d7c] leading-tight">
              Professional <span className="text-[#1b93d1]">Pet Daycare</span>
            </h1>

            <p className="mt-4 text-lg text-[#223d7c]/70 max-w-3xl mx-auto">
              Safe, loving, and supervised daycare for your furry family members. 
              Give your pets a fun-filled day while you're away.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10"
            >
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#223d7c] hover:bg-[#1a2f60] text-white rounded-lg font-medium transition-all group">
                  <FaCalendarAlt className="text-white/80" />
                  Book a Visit
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-white/80" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Matte finish */}
      <div className="bg-white border-b border-[#223d7c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#223d7c]">50+</div>
              <div className="text-sm text-[#223d7c]/60">Happy Pets Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1b93d1]">5+</div>
              <div className="text-sm text-[#223d7c]/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#223d7c]">10+</div>
              <div className="text-sm text-[#223d7c]/60">Trained Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1b93d1]">24/7</div>
              <div className="text-sm text-[#223d7c]/60">Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-4">
            <span className="text-sm text-[#223d7c] font-medium">✨ Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#223d7c] mb-4">
            Everything Your Pet Needs
          </h2>
          <p className="text-lg text-[#223d7c]/70 max-w-2xl mx-auto">
            Comprehensive daycare services designed for your pet's comfort and happiness
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-[#223d7c]/10 p-6 hover:shadow-md transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <div style={{ color: feature.color }}>{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-[#223d7c] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#223d7c]/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-20 border-t border-[#223d7c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-4">
              <span className="text-sm text-[#223d7c] font-medium">💰 Pricing Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#223d7c] mb-4">
              Flexible Daycare <span className="text-[#1b93d1]">Packages</span>
            </h2>
            <p className="text-lg text-[#223d7c]/70 max-w-2xl mx-auto">
              Choose the perfect plan for your pet's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => {
              const isSelected = selectedPackage === pkg.name;
              const isPopular = pkg.popular;
              
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
                  {isPopular && !isSelected && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-[#1b93d1] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div 
                    className={`bg-white rounded-lg border overflow-hidden transition-all ${
                      isSelected
                        ? 'border-[#1b93d1] ring-2 ring-[#1b93d1]/20 shadow-md'
                        : isPopular
                          ? 'border-[#1b93d1] shadow-md'
                          : 'border-[#223d7c]/10 hover:border-[#223d7c]/30 hover:shadow-md'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-[#223d7c]">{pkg.name}</h3>
                        {isSelected && (
                          <FaCheckCircle className="text-[#1b93d1]" />
                        )}
                      </div>
                      
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-[#223d7c]">{pkg.price}</span>
                        <span className="text-sm text-[#223d7c]/40">/day</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-[#223d7c]/60 mb-6">
                        <FaClock className="text-[#223d7c]/40" />
                        <span>{pkg.duration}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <FaHeart 
                              className="text-xs flex-shrink-0"
                              style={{ color: isSelected ? '#1b93d1' : '#223d7c40' }}
                            />
                            <span className="text-[#223d7c]/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button 
                        className={`w-full py-3 rounded-lg text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-[#1b93d1] text-white'
                            : isPopular
                              ? 'bg-[#1b93d1] text-white hover:bg-[#1680b5]'
                              : 'bg-[#223d7c]/5 text-[#223d7c] hover:bg-[#223d7c]/10'
                        }`}
                      >
                        {isSelected ? 'Selected Package' : 'Choose Plan'}
                      </button>

                      {isSelected && (
                        <div className="mt-4 text-center">
                          <Link href="/contact">
                            <span className="text-xs text-[#1b93d1] hover:text-[#223d7c] transition-colors cursor-pointer">
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
              <div className="inline-flex items-center gap-2 bg-[#223d7c]/5 px-4 py-2 rounded-lg">
                <FaCheckCircle className="text-[#1b93d1] text-sm" />
                <span className="text-sm text-[#223d7c]">
                  You've selected: <span className="font-semibold text-[#1b93d1]">{selectedPackage}</span> package
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-[#223d7c] rounded-lg p-12 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 text-8xl">🐾</div>
            <div className="absolute bottom-0 left-0 text-8xl">🐾</div>
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg mb-6">
              <FaDog className="text-white text-2xl" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Give Your Pet a <span className="text-[#1b93d1]">Fun Day?</span>
            </h2>
            
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Visit our facility, meet our team, and see why pets love spending time with us.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-[#1b93d1] hover:bg-[#1680b5] text-white rounded-lg font-medium transition-all">
                  Schedule a Visit
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all">
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
  );
}