'use client';

import { useState } from 'react';
import { FaSearch, FaHome, FaUsers, FaPaw, FaHeart, FaStar, FaCheck } from 'react-icons/fa';

const questions = [
  {
    id: 1,
    question: 'What type of living space do you have?',
    options: [
      { value: 'apartment', label: 'Apartment', icon: '🏢' },
      { value: 'house', label: 'House with Yard', icon: '🏠' },
      { value: 'villa', label: 'Villa with Garden', icon: '🏡' },
      { value: 'farm', label: 'Farm/Rural', icon: '🌾' },
    ]
  },
  {
    id: 2,
    question: 'How much time can you spend with a pet daily?',
    options: [
      { value: '2-4', label: '2-4 hours', icon: '⏰' },
      { value: '4-6', label: '4-6 hours', icon: '🕐' },
      { value: '6-8', label: '6-8 hours', icon: '🕒' },
      { value: '8+', label: '8+ hours', icon: '🕓' },
    ]
  },
  {
    id: 3,
    question: 'Do you have experience with pets?',
    options: [
      { value: 'none', label: 'First-time owner', icon: '🎯' },
      { value: 'some', label: 'Some experience', icon: '📚' },
      { value: 'experienced', label: 'Experienced', icon: '🎓' },
      { value: 'expert', label: 'Expert/Professional', icon: '👨‍⚕️' },
    ]
  },
  {
    id: 4,
    question: 'What energy level are you looking for?',
    options: [
      { value: 'low', label: 'Low (Couch potato)', icon: '🛋️' },
      { value: 'medium', label: 'Medium (Balanced)', icon: '⚖️' },
      { value: 'high', label: 'High (Very active)', icon: '⚡' },
      { value: 'very-high', label: 'Very High (Athletic)', icon: '🏃' },
    ]
  },
  {
    id: 5,
    question: 'Are there children in your home?',
    options: [
      { value: 'none', label: 'No children', icon: '👤' },
      { value: 'young', label: 'Young children (0-5)', icon: '👶' },
      { value: 'kids', label: 'Children (6-12)', icon: '🧒' },
      { value: 'teens', label: 'Teenagers', icon: '👨‍🎓' },
    ]
  },
];

const animals = [
  {
    id: 1,
    name: 'Max',
    type: 'dog',
    breed: 'Indian Pariah',
    age: '2 years',
    matchScore: 95,
    traits: ['Family-friendly', 'Moderate energy', 'Easy to train'],
    description: 'Perfect for first-time owners, loves cuddles and walks.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Luna',
    type: 'cat',
    breed: 'Domestic Shorthair',
    age: '1.5 years',
    matchScore: 88,
    traits: ['Independent', 'Quiet', 'Low maintenance'],
    description: 'Ideal for apartment living, enjoys quiet environments.',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'dog',
    breed: 'Labrador Mix',
    age: '4 months',
    matchScore: 82,
    traits: ['Playful', 'Energetic', 'Good with kids'],
    description: 'Great for active families, loves playing and learning.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Mittens',
    type: 'cat',
    breed: 'Siamese Mix',
    age: '3 years',
    matchScore: 76,
    traits: ['Affectionate', 'Vocal', 'Intelligent'],
    description: 'Loves attention and conversation, very social cat.',
    image: 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w=800&auto=format&fit=crop&q=60',
  },
];

export default function MatchmakerPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Match</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take our personality quiz to discover which animal best matches your lifestyle
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {!showResults ? (
          /* Quiz Section */
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="font-semibold text-amber-600">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">🤔</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {questions[currentQuestion].question}
                </h2>
                <p className="text-gray-600">
                  Select the option that best describes your situation
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                      answers[questions[currentQuestion].id] === option.value
                        ? 'border-amber-500 bg-amber-50 scale-105'
                        : 'border-gray-200 hover:border-amber-300 hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{option.icon}</div>
                      <div>
                        <div className="text-lg font-semibold text-gray-800 mb-1">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          Click to select
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <div className="text-gray-600">
                  {currentQuestion + 1} / {questions.length}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaStar className="text-amber-500" /> Quiz Tips
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span>Be honest about your lifestyle and availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span>Consider all family members' preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span>Think about long-term commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1" />
                  <span>Remember that every animal is unique</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Results Section */
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Perfect Matches</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your answers, we found these amazing companions who would love to meet you!
              </p>
            </div>

            {/* Match Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {animals.map((animal) => (
                <div 
                  key={animal.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedAnimal === animal.id ? 'ring-2 ring-amber-500' : ''
                  }`}
                  onClick={() => setSelectedAnimal(animal.id)}
                >
                  {/* Match Score Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {animal.matchScore}% Match
                    </div>
                  </div>

                  {/* Animal Image */}
                  <div className="h-48 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                      style={{ backgroundImage: `url(${animal.image})` }}
                    />
                  </div>

                  {/* Animal Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        animal.type === 'dog' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
                      </span>
                    </div>
                    
                    <div className="text-gray-600 mb-4">
                      {animal.breed} • {animal.age}
                    </div>

                    <p className="text-gray-700 mb-6 line-clamp-2">{animal.description}</p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {animal.traits.map((trait, index) => (
                        <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                          {trait}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                      Meet {animal.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Animal Details */}
            {selectedAnimal && (() => {
              const animal = animals.find(a => a.id === selectedAnimal);
              if (!animal) return null;
              
              return (
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Why {animal.name} is a Great Match for You
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Lifestyle Compatibility</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {['Energy Level', 'Space Needs', 'Time Commitment', 'Experience Required'].map((item, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">{item}</div>
                                <div className="text-lg font-semibold text-gray-800">Excellent Match</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Personality Match</h4>
                          <p className="text-gray-600">
                            Based on your quiz answers, {animal.name}'s personality traits align perfectly with 
                            your lifestyle. Their {animal.traits.map((t, i) => 
                              i === animal.traits.length - 1 ? `and ${t.toLowerCase()}` : 
                              i === animal.traits.length - 2 ? `${t.toLowerCase()} ` : 
                              `${t.toLowerCase()}, `
                            ).join('')} nature makes them an ideal companion for someone with your preferences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-700 mb-4">Next Steps</h4>
                        <div className="space-y-4">
                          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold">
                            Schedule a Visit
                          </button>
                          <button className="w-full border-2 border-amber-500 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-semibold">
                            Virtual Meet & Greet
                          </button>
                          <button className="w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium">
                            Save for Later
                          </button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-700 mb-4">Match Breakdown</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600">Compatibility</span>
                              <span className="text-sm font-semibold">{animal.matchScore}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                                style={{ width: `${animal.matchScore}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600">Activity Match</span>
                              <span className="text-sm font-semibold">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '92%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600">Temperament Match</span>
                              <span className="text-sm font-semibold">88%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '88%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Restart Quiz */}
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                  setSelectedAnimal(null);
                }}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold"
              >
                Take Quiz Again
              </button>
              <p className="text-gray-600 mt-4">
                Want different results? Try adjusting your answers!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}