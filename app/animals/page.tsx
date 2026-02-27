// petscare/app/animals/page.tsx
'use client';

import { useState } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { animals, getAnimalsByType, getUrgentAnimals } from '@/lib/animals';
import { 
  FaFilter, FaDog, FaCat, FaExclamationTriangle, FaSearch, 
  FaHeart, FaHome, FaCalendar, FaCheck, FaPaw, FaArrowRight 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimalsPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'dog' | 'cat'>('all');
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnimals = (showUrgentOnly
    ? getUrgentAnimals()
    : getAnimalsByType(selectedType)
  ).filter(animal => !animal.isAdopted && 
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const urgentAnimals = getUrgentAnimals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white py-12 md:py-16">
        {/* Decorative Paw Prints - Hidden on mobile */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="absolute top-10 left-10 text-8xl">🐾</div>
          <div className="absolute bottom-10 right-10 text-8xl">🐾</div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b87d5e]/20 rounded-full flex items-center justify-center">
                  <FaPaw className="text-lg sm:text-2xl text-[#b87d5e]" />
                </div>
                <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
                  Find Your Companion
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
                Ready to <span className="text-[#b87d5e]">Welcome</span> a New Friend?
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
                Each rescue at PawHaven has a unique story and is waiting for a loving home. 
                Browse our available animals and find your perfect match.
              </p>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-xl mx-auto mb-8 sm:mb-12 px-4"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2c4a3e]/40 text-sm sm:text-base" />
                <input
                  type="text"
                  placeholder="Search by name, breed, or traits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl text-[#2c4a3e] placeholder-[#2c4a3e]/40 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#b87d5e] shadow-lg"
                />
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto px-4"
            >
              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-white/10">
                <div className="text-lg sm:text-2xl font-bold text-[#b87d5e]">{animals.filter(a => !a.isAdopted).length}</div>
                <div className="text-[10px] sm:text-sm text-white/80">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-white/10">
                <div className="text-lg sm:text-2xl font-bold text-[#b87d5e]">{animals.filter(a => a.isAdopted).length}+</div>
                <div className="text-[10px] sm:text-sm text-white/80">Adoptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-white/10">
                <div className="text-lg sm:text-2xl font-bold text-[#b87d5e]">95%</div>
                <div className="text-[10px] sm:text-sm text-white/80">Success</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Filters Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <FaFilter className="text-base sm:text-xl text-[#b87d5e]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-[#2c4a3e] truncate">Find Your Perfect Match</h3>
                <p className="text-xs sm:text-sm text-[#2c4a3e]/60">Filter animals based on your preferences</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* Type Filter - Scrollable on mobile */}
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedType === 'all'
                      ? 'bg-[#2c4a3e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedType('dog')}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 whitespace-nowrap transition-all duration-300 ${
                    selectedType === 'dog'
                      ? 'bg-[#b87d5e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  <FaDog className="text-xs sm:text-sm" /> Dogs
                </button>
                <button
                  onClick={() => setSelectedType('cat')}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 whitespace-nowrap transition-all duration-300 ${
                    selectedType === 'cat'
                      ? 'bg-[#b87d5e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  <FaCat className="text-xs sm:text-sm" /> Cats
                </button>
              </div>
              
              {/* Urgent Filter */}
              <button
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 justify-center transition-all duration-300 ${
                  showUrgentOnly
                    ? 'bg-[#b87d5e] text-white shadow-md'
                    : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                }`}
              >
                <FaExclamationTriangle className="text-xs sm:text-sm" /> 
                <span className="hidden xs:inline">Urgent</span>
                <span className="xs:hidden">Urgent</span>
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Urgent Cases Alert */}
        {urgentAnimals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 border border-[#b87d5e]/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="bg-[#b87d5e] p-2 sm:p-3 rounded-lg flex-shrink-0">
                <FaExclamationTriangle className="text-white text-base sm:text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#2c4a3e] text-sm sm:text-base mb-1">🐾 Urgent Cases Need Homes</h3>
                <p className="text-[#2c4a3e]/70 text-xs sm:text-sm">
                  These animals require immediate adoption. Your help could save a life.
                </p>
              </div>
              <div className="bg-[#b87d5e] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold whitespace-nowrap text-xs sm:text-sm self-end sm:self-auto">
                {urgentAnimals.length} urgent
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Header */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-4 sm:mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a3e]">
              Available Animals
            </h2>
            <p className="text-xs sm:text-sm text-[#2c4a3e]/60 flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#b87d5e] rounded-full" />
              <span className="truncate">
                {filteredAnimals.length} {filteredAnimals.length === 1 ? 'companion' : 'companions'} found
                {selectedType !== 'all' && ` • ${selectedType}s`}
                {showUrgentOnly && ' • Urgent'}
              </span>
            </p>
          </div>
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs sm:text-sm text-[#b87d5e] hover:text-[#9e6a4f] font-medium flex items-center gap-1 sm:gap-2"
            >
              Clear <span className="hidden xs:inline">search</span> <span className="text-base sm:text-lg">×</span>
            </button>
          )}
        </div>

        {/* Animal Grid */}
        {filteredAnimals.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredAnimals.map((animal, index) => (
              <motion.div
                key={animal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimalCard animal={animal} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#2c4a3e]/10 p-8 sm:p-16 text-center"
          >
            <div className="text-5xl sm:text-7xl mb-3 sm:mb-4 opacity-30">🐾</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2c4a3e] mb-2 sm:mb-3">No animals match your criteria</h3>
            <p className="text-sm sm:text-base text-[#2c4a3e]/60 mb-6 sm:mb-8 max-w-md mx-auto px-4">
              Try adjusting your filters or search term to see more animals
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setShowUrgentOnly(false);
                setSearchQuery('');
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#b87d5e] hover:bg-[#9e6a4f] text-white text-sm sm:text-base font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Adoption Process */}
        <div className="mt-12 sm:mt-16 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#2c4a3e]/10 p-6 sm:p-10">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                <FaHeart className="text-lg sm:text-2xl text-[#b87d5e]" />
              </div>
              <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
                Simple Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 px-4">
              Your Journey to <span className="text-[#b87d5e]">Adoption</span>
            </h2>
            <p className="text-sm sm:text-base text-[#2c4a3e]/60 max-w-2xl mx-auto px-4">
              We ensure every animal finds the perfect forever home through a careful, loving process
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="text-center relative">
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#b87d5e]/20 to-transparent hidden sm:block" />
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative z-10">
                <FaHeart className="text-xl sm:text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2c4a3e] mb-2 sm:mb-3">1. Meet & Greet</h3>
              <p className="text-xs sm:text-sm text-[#2c4a3e]/60 leading-relaxed max-w-[200px] mx-auto">
                Visit our shelter to meet potential pets and find your perfect match
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#b87d5e]/20 to-transparent hidden sm:block" />
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative z-10">
                <FaHome className="text-xl sm:text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2c4a3e] mb-2 sm:mb-3">2. Home Check</h3>
              <p className="text-xs sm:text-sm text-[#2c4a3e]/60 leading-relaxed max-w-[200px] mx-auto">
                We ensure your home is safe and ready for a new family member
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                <FaCheck className="text-xl sm:text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2c4a3e] mb-2 sm:mb-3">3. Finalize</h3>
              <p className="text-xs sm:text-sm text-[#2c4a3e]/60 leading-relaxed max-w-[200px] mx-auto">
                Complete paperwork and welcome your new companion home
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#2c4a3e] hover:bg-[#1e352b] text-white text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <FaCalendar className="text-sm sm:text-base" />
              Schedule a Visit
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
            </Link>
            <p className="text-xs sm:text-sm text-[#2c4a3e]/50 mt-3 sm:mt-4">
              Appointments recommended for personalized attention
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 sm:mt-8 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#2c4a3e]/10 p-5 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-[#2c4a3e] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-1 h-5 sm:h-6 bg-[#b87d5e] rounded-full" />
            Common Questions
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#2c4a3e]/5 rounded-lg sm:rounded-xl p-4 sm:p-5">
              <h4 className="font-medium text-[#2c4a3e] text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#b87d5e] rounded-full" />
                What are the adoption fees?
              </h4>
              <p className="text-xs sm:text-sm text-[#2c4a3e]/70 leading-relaxed">
                Fees cover vaccinations, spay/neuter, microchipping, and medical care. They typically range from ₹1,500-₹4,000.
              </p>
            </div>
            <div className="bg-[#2c4a3e]/5 rounded-lg sm:rounded-xl p-4 sm:p-5">
              <h4 className="font-medium text-[#2c4a3e] text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#b87d5e] rounded-full" />
                Can I adopt if I rent?
              </h4>
              <p className="text-xs sm:text-sm text-[#2c4a3e]/70 leading-relaxed">
                Yes, with landlord approval. We'll need written permission from your landlord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}