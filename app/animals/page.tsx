//petscare\app\animals\page.tsx
'use client';

import { useState } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { animals, getAnimalsByType, getUrgentAnimals } from '@/lib/animals';
import { FaFilter, FaDog, FaCat, FaExclamationTriangle, FaSearch, FaHeart, FaHome, FaCalendar, FaCheck } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Cleaner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Companion
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Each rescue at our shelter is waiting for a loving home. 
              Browse our available animals and find your new best friend.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                <input
                  type="text"
                  placeholder="Search by name, breed, or traits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-xl font-bold">{animals.filter(a => !a.isAdopted).length}</div>
                <div className="text-sm text-white/80">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-xl font-bold">{animals.filter(a => a.isAdopted).length}</div>
                <div className="text-sm text-white/80">Adopted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-xl font-bold">42</div>
                <div className="text-sm text-white/80">This Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Filter Animals</h3>
              <p className="text-sm text-gray-600">Find your perfect match</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Type Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === 'all'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedType('dog')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                    selectedType === 'dog'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaDog /> Dogs
                </button>
                <button
                  onClick={() => setSelectedType('cat')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                    selectedType === 'cat'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaCat /> Cats
                </button>
              </div>
              
              {/* Urgent Filter */}
              <button
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                  showUrgentOnly
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaExclamationTriangle /> Urgent Only
              </button>
            </div>
          </div>
        </div>
        
        {/* Urgent Cases Alert */}
        {urgentAnimals.length > 0 && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-5 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <FaExclamationTriangle className="text-red-600 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 mb-1">Urgent Cases Need Homes</h3>
                <p className="text-red-700 text-sm">
                  These animals require immediate adoption. Your help could save a life.
                </p>
              </div>
              <div className="text-red-700 font-semibold whitespace-nowrap">
                {urgentAnimals.length} urgent {urgentAnimals.length === 1 ? 'case' : 'cases'}
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Available Animals
            </h2>
            <p className="text-sm text-gray-600">
              {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal' : 'animals'} found
              {selectedType !== 'all' && ` • ${selectedType}s only`}
              {showUrgentOnly && ' • Urgent cases'}
            </p>
          </div>
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Animal Grid */}
        {filteredAnimals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="text-gray-300 text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No animals match your criteria</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Try adjusting your filters or search term to see more animals
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setShowUrgentOnly(false);
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Adoption Process */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Adoption Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure every animal finds the perfect forever home through a careful, loving process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <FaHeart className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Meet & Greet</h3>
              <p className="text-gray-600 text-sm">
                Visit our shelter to meet potential pets and find your perfect match
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <FaHome className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Home Check</h3>
              <p className="text-gray-600 text-sm">
                We ensure your home is safe and ready for a new family member
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <FaCheck className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Finalize</h3>
              <p className="text-gray-600 text-sm">
                Complete paperwork and welcome your new companion home
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white font-medium rounded-lg transition-colors"
            >
              <FaCalendar />
              Schedule a Visit
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Appointments recommended for personalized attention
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-gray-50 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What are the adoption fees?</h4>
              <p className="text-gray-600 text-sm">
                Fees cover vaccinations, spay/neuter, microchipping, and medical care. They typically range from ₹1,500-₹4,000.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Can I adopt if I rent?</h4>
              <p className="text-gray-600 text-sm">
                Yes, with landlord approval. We'll need written permission from your landlord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}