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
      {/* Hero Section - Updated to match the warm, professional look */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white py-16">
        {/* Decorative Paw Prints */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-8xl">🐾</div>
          <div className="absolute bottom-10 right-10 text-8xl">🐾</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#b87d5e]/20 rounded-full flex items-center justify-center">
                  <FaPaw className="text-2xl text-[#b87d5e]" />
                </div>
                <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
                  Find Your Companion
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to <span className="text-[#b87d5e]">Welcome</span> a New Friend?
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Each rescue at PawHaven has a unique story and is waiting for a loving home. 
                Browse our available animals and find your perfect match.
              </p>
            </motion.div>
            
            {/* Search Bar - Updated styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-xl mx-auto mb-12"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2c4a3e]/40" />
                <input
                  type="text"
                  placeholder="Search by name, breed, or traits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-[#2c4a3e] placeholder-[#2c4a3e]/40 focus:outline-none focus:ring-2 focus:ring-[#b87d5e] shadow-lg"
                />
              </div>
            </motion.div>
            
            {/* Stats - Updated with new color scheme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#b87d5e]">{animals.filter(a => !a.isAdopted).length}</div>
                <div className="text-sm text-white/80">Available Now</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#b87d5e]">{animals.filter(a => a.isAdopted).length}+</div>
                <div className="text-sm text-white/80">Happy Adoptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#b87d5e]">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters Card - Updated styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
                <FaFilter className="text-xl text-[#b87d5e]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2c4a3e]">Find Your Perfect Match</h3>
                <p className="text-sm text-[#2c4a3e]/60">Filter animals based on your preferences</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Type Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedType === 'all'
                      ? 'bg-[#2c4a3e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  All Animals
                </button>
                <button
                  onClick={() => setSelectedType('dog')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                    selectedType === 'dog'
                      ? 'bg-[#b87d5e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  <FaDog /> Dogs
                </button>
                <button
                  onClick={() => setSelectedType('cat')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                    selectedType === 'cat'
                      ? 'bg-[#b87d5e] text-white shadow-md'
                      : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                  }`}
                >
                  <FaCat /> Cats
                </button>
              </div>
              
              {/* Urgent Filter */}
              <button
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                  showUrgentOnly
                    ? 'bg-[#b87d5e] text-white shadow-md'
                    : 'bg-[#2c4a3e]/5 text-[#2c4a3e] hover:bg-[#2c4a3e]/10'
                }`}
              >
                <FaExclamationTriangle /> Urgent Cases
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Urgent Cases Alert - Updated styling */}
        {urgentAnimals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 border border-[#b87d5e]/30 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#b87d5e] p-3 rounded-lg">
                <FaExclamationTriangle className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2c4a3e] mb-1">🐾 Urgent Cases Need Homes</h3>
                <p className="text-[#2c4a3e]/70 text-sm">
                  These animals require immediate adoption. Your help could save a life.
                </p>
              </div>
              <div className="bg-[#b87d5e] text-white px-4 py-2 rounded-lg font-semibold whitespace-nowrap text-sm">
                {urgentAnimals.length} urgent {urgentAnimals.length === 1 ? 'case' : 'cases'}
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#2c4a3e]">
              Available Animals
            </h2>
            <p className="text-sm text-[#2c4a3e]/60 flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
              {filteredAnimals.length} {filteredAnimals.length === 1 ? 'companion' : 'companions'} found
              {selectedType !== 'all' && ` • ${selectedType}s only`}
              {showUrgentOnly && ' • Urgent cases'}
            </p>
          </div>
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-[#b87d5e] hover:text-[#9e6a4f] font-medium flex items-center gap-2"
            >
              Clear search <span className="text-lg">×</span>
            </button>
          )}
        </div>

        {/* Animal Grid */}
        {filteredAnimals.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
            className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-16 text-center"
          >
            <div className="text-7xl mb-4 opacity-30">🐾</div>
            <h3 className="text-2xl font-semibold text-[#2c4a3e] mb-3">No animals match your criteria</h3>
            <p className="text-[#2c4a3e]/60 mb-8 max-w-md mx-auto">
              Try adjusting your filters or search term to see more animals
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setShowUrgentOnly(false);
                setSearchQuery('');
              }}
              className="px-8 py-3 bg-[#b87d5e] hover:bg-[#9e6a4f] text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Adoption Process - Updated to match the professional look */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                <FaHeart className="text-2xl text-[#b87d5e]" />
              </div>
              <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
                Simple Process
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#2c4a3e] mb-3">
              Your Journey to <span className="text-[#b87d5e]">Adoption</span>
            </h2>
            <p className="text-[#2c4a3e]/60 max-w-2xl mx-auto">
              We ensure every animal finds the perfect forever home through a careful, loving process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center relative">
              <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#b87d5e]/20 to-transparent hidden md:block" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b87d5e]/10 rounded-2xl mb-4 relative z-10">
                <FaHeart className="text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c4a3e] mb-3">1. Meet & Greet</h3>
              <p className="text-[#2c4a3e]/60 text-sm leading-relaxed">
                Visit our shelter to meet potential pets and find your perfect match
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#b87d5e]/20 to-transparent hidden md:block" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b87d5e]/10 rounded-2xl mb-4 relative z-10">
                <FaHome className="text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c4a3e] mb-3">2. Home Check</h3>
              <p className="text-[#2c4a3e]/60 text-sm leading-relaxed">
                We ensure your home is safe and ready for a new family member
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b87d5e]/10 rounded-2xl mb-4">
                <FaCheck className="text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c4a3e] mb-3">3. Finalize</h3>
              <p className="text-[#2c4a3e]/60 text-sm leading-relaxed">
                Complete paperwork and welcome your new companion home
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2c4a3e] hover:bg-[#1e352b] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <FaCalendar />
              Schedule a Visit
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-[#2c4a3e]/50 mt-4">
              Appointments recommended for personalized attention
            </p>
          </div>
        </div>

        {/* FAQ Section - Updated styling */}
        <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-8">
          <h3 className="text-xl font-semibold text-[#2c4a3e] mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-[#b87d5e] rounded-full" />
            Common Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2c4a3e]/5 rounded-xl p-5">
              <h4 className="font-medium text-[#2c4a3e] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
                What are the adoption fees?
              </h4>
              <p className="text-[#2c4a3e]/70 text-sm leading-relaxed">
                Fees cover vaccinations, spay/neuter, microchipping, and medical care. They typically range from ₹1,500-₹4,000.
              </p>
            </div>
            <div className="bg-[#2c4a3e]/5 rounded-xl p-5">
              <h4 className="font-medium text-[#2c4a3e] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
                Can I adopt if I rent?
              </h4>
              <p className="text-[#2c4a3e]/70 text-sm leading-relaxed">
                Yes, with landlord approval. We'll need written permission from your landlord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}