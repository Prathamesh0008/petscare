'use client';

import { useState } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { animals, getAnimalsByType, getUrgentAnimals } from '@/lib/animals';
import { FaFilter, FaDog, FaCat, FaExclamationTriangle } from 'react-icons/fa';

export default function AnimalsPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'dog' | 'cat'>('all');
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);

  const filteredAnimals = showUrgentOnly
    ? getUrgentAnimals()
    : getAnimalsByType(selectedType).filter(animal => !animal.isAdopted);

  const urgentAnimals = getUrgentAnimals();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Furry Friends</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Each animal at PawHaven Vashi is waiting for a loving home. 
            Browse through our rescues and find your perfect companion.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold">{animals.filter(a => !a.isAdopted).length}</div>
              <div className="text-sm">Available</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold">{urgentAnimals.length}</div>
              <div className="text-sm">Urgent</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm">Adopted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <FaFilter className="text-gray-500" />
              <h3 className="text-lg font-bold text-gray-800">Filter Animals</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedType === 'all'
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedType('dog')}
                  className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all ${
                    selectedType === 'dog'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaDog /> Dogs
                </button>
                <button
                  onClick={() => setSelectedType('cat')}
                  className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all ${
                    selectedType === 'cat'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaCat /> Cats
                </button>
              </div>
              
              {/* Urgent Filter */}
              <button
                onClick={() => setShowUrgentOnly(!showUrgentOnly)}
                className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all ${
                  showUrgentOnly
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaExclamationTriangle /> Urgent Only
              </button>
            </div>
          </div>
        </div>
        
        {/* Urgent Cases Banner */}
        {urgentAnimals.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaExclamationTriangle className="text-xl" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-red-700">Urgent Cases Need Homes</h3>
                <p className="text-red-600">
                  These animals need immediate adoption. Please consider giving them a forever home.
                </p>
              </div>
              <div className="text-red-700 font-bold">
                {urgentAnimals.length} urgent {urgentAnimals.length === 1 ? 'case' : 'cases'}
              </div>
            </div>
          </div>
        )}

        {/* Animal Grid */}
        {filteredAnimals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
            
            {/* Results Count */}
            <div className="mt-8 text-center text-gray-600">
              Showing {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal' : 'animals'}
              {selectedType !== 'all' && ` (${selectedType}s)`}
              {showUrgentOnly && ' (urgent cases only)'}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No animals found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters to see more animals</p>
            <button
              onClick={() => {
                setSelectedType('all');
                setShowUrgentOnly(false);
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Adoption Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Ready to Adopt?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Meet & Greet</h3>
              <p className="text-gray-600">Schedule a visit to meet your potential pet</p>
            </div>
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Application</h3>
              <p className="text-gray-600">Fill out our adoption application form</p>
            </div>
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Home Visit</h3>
              <p className="text-gray-600">We ensure your home is pet-ready</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/adopt"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Start Adoption Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}