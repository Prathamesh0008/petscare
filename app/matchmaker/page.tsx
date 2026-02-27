// app/matchmaker/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaDog, FaCat, FaPaw, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function MatchmakerPage() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    petType: '',
    size: '',
    energy: '',
    goodWithKids: false,
    goodWithPets: false,
    livingSpace: '',
  });

  const updatePreferences = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] text-sm font-medium mb-4">
            <FaRobot />
            AI-Powered Matchmaking
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a3e] mb-4">
            Find Your Perfect <span className="text-[#b87d5e]">Companion</span>
          </h1>
          <p className="text-gray-600">
            Answer a few questions and our AI will find your ideal pet match
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= step 
                    ? 'bg-[#b87d5e] text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-[#b87d5e] rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Cards */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2c4a3e] mb-6">
                  What type of pet are you looking for?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { type: 'dog', icon: <FaDog />, label: 'Dog' },
                    { type: 'cat', icon: <FaCat />, label: 'Cat' },
                    { type: 'both', icon: <FaPaw />, label: 'Both' },
                    { type: 'any', icon: <FaHeart />, label: 'Any' },
                  ].map(option => (
                    <button
                      key={option.type}
                      onClick={() => {
                        updatePreferences('petType', option.type);
                        nextStep();
                      }}
                      className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#b87d5e] transition-colors group"
                    >
                      <div className="text-3xl text-gray-400 group-hover:text-[#b87d5e] mb-2">
                        {option.icon}
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-[#b87d5e]">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2c4a3e] mb-6">
                  What size pet do you prefer?
                </h2>
                <div className="space-y-3">
                  {['Small (under 20 lbs)', 'Medium (20-50 lbs)', 'Large (50+ lbs)', 'No preference'].map(size => (
                    <button
                      key={size}
                      onClick={() => {
                        updatePreferences('size', size);
                        nextStep();
                      }}
                      className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#b87d5e] transition-colors"
                    >
                      <span className="font-medium text-gray-700">{size}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2c4a3e] mb-6">
                  What's your living situation?
                </h2>
                <div className="space-y-3">
                  {['Apartment', 'House with yard', 'House without yard', 'Flexible'].map(space => (
                    <button
                      key={space}
                      onClick={() => {
                        updatePreferences('livingSpace', space);
                        nextStep();
                      }}
                      className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#b87d5e] transition-colors"
                    >
                      <span className="font-medium text-gray-700">{space}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold text-[#2c4a3e] mb-6">
                          Almost done! Any special considerations?
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-[#b87d5e]"
                      onChange={(e) => updatePreferences('goodWithKids', e.target.checked)}
                    />
                    <span className="text-gray-700">Good with children</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-[#b87d5e]"
                      onChange={(e) => updatePreferences('goodWithPets', e.target.checked)}
                    />
                    <span className="text-gray-700">Good with other pets</span>
                  </label>
                </div>

                <button
                  onClick={() => {/* Submit and show matches */}}
                  className="w-full mt-6 px-6 py-4 bg-[#b87d5e] text-white rounded-xl font-semibold hover:bg-[#9e6a4f] transition-colors flex items-center justify-center gap-2"
                >
                  Find My Matches
                  <FaArrowRight />
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-4 py-2 text-gray-600 hover:text-[#2c4a3e] transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}