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
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero Section - Matching the Hero component style */}
      <section className="relative bg-[#B6D3DE] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Subtle badge - matte finish */}
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-6">
              <span className="text-sm text-[#223d7c] font-medium">🐾 Find Your Perfect Companion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#223d7c] leading-tight">
              Ready to Welcome
              <br />
              <span className="text-[#1b93d1]">a New Friend?</span>
            </h1>

            <p className="mt-4 text-lg text-[#223d7c]/70 max-w-2xl mx-auto">
              Each rescue has a unique story and is waiting for a loving home. 
              Browse our available animals and find your perfect match.
            </p>

            {/* Stats - Matte finish */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">{animals.filter(a => !a.isAdopted).length}</div>
                <div className="text-sm text-[#223d7c]/60">Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">{animals.filter(a => a.isAdopted).length}+</div>
                <div className="text-sm text-[#223d7c]/60">Adoptions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">95%</div>
                <div className="text-sm text-[#223d7c]/60">Success Rate</div>
              </div>
            </div>

            {/* Search Bar - Matching the matte aesthetic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 max-w-xl mx-auto"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#223d7c]/40" />
                <input
                  type="text"
                  placeholder="Search by name, breed, or traits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-[#223d7c] placeholder-[#223d7c]/40 border border-[#223d7c]/10 focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Filters - Matching the Hero's matte aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-[#223d7c]/10 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#223d7c]/5 rounded-lg flex items-center justify-center">
                <FaFilter className="text-[#223d7c]/60" />
              </div>
              <div>
                <h3 className="font-semibold text-[#223d7c]">Filter Animals</h3>
                <p className="text-sm text-[#223d7c]/60">Find your perfect match</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedType === 'all'
                    ? 'bg-[#223d7c] text-white'
                    : 'bg-[#223d7c]/5 text-[#223d7c] hover:bg-[#223d7c]/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType('dog')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                  selectedType === 'dog'
                    ? 'bg-[#1b93d1] text-white'
                    : 'bg-[#223d7c]/5 text-[#223d7c] hover:bg-[#223d7c]/10'
                }`}
              >
                <FaDog /> Dogs
              </button>
              <button
                onClick={() => setSelectedType('cat')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                  selectedType === 'cat'
                    ? 'bg-[#1b93d1] text-white'
                    : 'bg-[#223d7c]/5 text-[#223d7c] hover:bg-[#223d7c]/10'
                }`}
              >
                <FaCat /> Cats
              </button>
              <button
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                  showUrgentOnly
                    ? 'bg-[#1b93d1] text-white'
                    : 'bg-[#223d7c]/5 text-[#223d7c] hover:bg-[#223d7c]/10'
                }`}
              >
                <FaExclamationTriangle /> Urgent Cases
              </button>
            </div>
          </div>
        </motion.div>

        {/* Urgent Cases Alert */}
        {urgentAnimals.length > 0 && !showUrgentOnly && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-[#1b93d1]/5 border border-[#1b93d1]/20 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1b93d1] rounded-lg flex items-center justify-center flex-shrink-0">
                <FaExclamationTriangle className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[#223d7c] font-medium">
                  {urgentAnimals.length} urgent {urgentAnimals.length === 1 ? 'case' : 'cases'} need homes
                </p>
                <p className="text-sm text-[#223d7c]/60">
                  These animals require immediate adoption. Your help could save a life.
                </p>
              </div>
              <button
                onClick={() => setShowUrgentOnly(true)}
                className="px-4 py-2 bg-[#1b93d1] hover:bg-[#1680b5] text-white text-sm rounded-lg transition-colors flex items-center gap-2"
              >
                View <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#223d7c]">Available Animals</h2>
            <p className="text-sm text-[#223d7c]/60">
              {filteredAnimals.length} {filteredAnimals.length === 1 ? 'companion' : 'companions'} found
            </p>
          </div>
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-[#1b93d1] hover:text-[#1680b5] font-medium"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Animal Grid */}
        {filteredAnimals.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
            className="bg-white rounded-lg border border-[#223d7c]/10 p-12 text-center"
          >
            <div className="text-6xl mb-4 opacity-30">🐾</div>
            <h3 className="text-xl font-semibold text-[#223d7c] mb-2">No animals match your criteria</h3>
            <p className="text-[#223d7c]/60 mb-6">Try adjusting your filters or search term</p>
            <button
              onClick={() => {
                setSelectedType('all');
                setShowUrgentOnly(false);
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#223d7c] hover:bg-[#1a2f60] text-white rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Adoption Process - Matching Hero aesthetic */}
        <div className="mt-16 bg-white rounded-lg border border-[#223d7c]/10 p-10">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-4">
              <span className="text-sm text-[#223d7c] font-medium">❤️ Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold text-[#223d7c] mb-3">
              Your Journey to <span className="text-[#1b93d1]">Adoption</span>
            </h2>
            <p className="text-[#223d7c]/60 max-w-2xl mx-auto">
              We ensure every animal finds the perfect forever home through a careful, loving process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: FaHeart, title: "Meet & Greet", desc: "Visit our shelter to meet potential pets and find your perfect match" },
              { icon: FaHome, title: "Home Check", desc: "We ensure your home is safe and ready for a new family member" },
              { icon: FaCheck, title: "Finalize", desc: "Complete paperwork and welcome your new companion home" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#223d7c]/5 rounded-xl mb-4">
                  <step.icon className="text-2xl text-[#1b93d1]" />
                </div>
                <h3 className="text-xl font-semibold text-[#223d7c] mb-2">{index + 1}. {step.title}</h3>
                <p className="text-sm text-[#223d7c]/60">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#223d7c] hover:bg-[#1a2f60] text-white rounded-lg transition-all group"
            >
              <FaCalendar className="text-white/80" />
              Schedule a Visit
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-white/80" />
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-lg border border-[#223d7c]/10 p-8">
          <h3 className="text-xl font-semibold text-[#223d7c] mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-[#1b93d1] rounded-full" />
            Common Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What are the adoption fees?", a: "Fees cover vaccinations, spay/neuter, microchipping, and medical care. They typically range from ₹1,500-₹4,000." },
              { q: "Can I adopt if I rent?", a: "Yes, with landlord approval. We'll need written permission from your landlord." }
            ].map((faq, index) => (
              <div key={index} className="bg-[#223d7c]/5 rounded-lg p-5">
                <h4 className="font-medium text-[#223d7c] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1b93d1] rounded-full" />
                  {faq.q}
                </h4>
                <p className="text-sm text-[#223d7c]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}