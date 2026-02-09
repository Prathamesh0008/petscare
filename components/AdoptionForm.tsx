//petscare\components\AdoptionForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adoptionFormSchema, AdoptionFormValues } from '@/lib/validation';
import { FaCheck, FaUser, FaHome, FaPaw } from 'react-icons/fa';

interface AdoptionFormProps {
  animalId?: string;
  animalName?: string;
}

export default function AdoptionForm({ animalId, animalName }: AdoptionFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AdoptionFormValues>({
    resolver: zodResolver(adoptionFormSchema),
    defaultValues: {
      animalId: animalId || '',
      animalName: animalName || '',
      experienceWithPets: 'no',
      houseType: 'apartment',
      hasGarden: false,
      hasChildren: false,
      hoursAlone: 8,
    },
  });

  const hasExperience = watch('experienceWithPets');
  const hasChildren = watch('hasChildren');

  const onSubmit = async (data: AdoptionFormValues) => {
    // In a real app, this would send data to your backend
    console.log('Adoption form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: <FaUser /> },
    { number: 2, title: 'Living Situation', icon: <FaHome /> },
    { number: 3, title: 'Pet Experience', icon: <FaPaw /> },
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-3xl text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your adoption application. We will review it and contact you within 2-3 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Adoption Application</h2>
      <p className="text-gray-600 mb-8">
        {animalName ? `Applying to adopt ${animalName}` : 'Find your perfect companion'}
      </p>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center z-10">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
              currentStep >= step.number 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step.icon}
            </div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
          </div>
        ))}
        <div className="absolute top-6 left-12 right-12 h-1 bg-gray-200 -z-10">
          <div 
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  {...register('fullName')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="9876543210"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Occupation *</label>
                <input
                  type="text"
                  {...register('occupation')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your profession"
                />
                {errors.occupation && (
                  <p className="mt-1 text-sm text-red-600">{errors.occupation.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Address *</label>
              <textarea
                {...register('address')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your complete address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  {...register('city')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Pincode *</label>
                <input
                  type="text"
                  {...register('pincode')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="400703"
                />
                {errors.pincode && (
                  <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800">Living Situation</h3>
            
            <div>
              <label className="block text-gray-700 mb-2">Type of Residence *</label>
              <div className="grid grid-cols-3 gap-4">
                {['apartment', 'house', 'villa'].map((type) => (
                  <label key={type} className="cursor-pointer">
                    <input
                      type="radio"
                      value={type}
                      {...register('houseType')}
                      className="hidden peer"
                    />
                    <div className="p-4 border-2 border-gray-300 rounded-lg text-center peer-checked:border-amber-500 peer-checked:bg-amber-50 transition-all">
                      <span className="capitalize">{type}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.houseType && (
                <p className="mt-1 text-sm text-red-600">{errors.houseType.message}</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('hasGarden')}
                    className="w-5 h-5 text-amber-500 rounded"
                  />
                  <span className="text-gray-700">Do you have a garden/yard?</span>
                </label>
              </div>
              
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('hasChildren')}
                    className="w-5 h-5 text-amber-500 rounded"
                  />
                  <span className="text-gray-700">Do you have children?</span>
                </label>
              </div>
            </div>
            
            {hasChildren && (
              <div className="animate-fade-in">
                <label className="block text-gray-700 mb-2">Children's Ages</label>
                <input
                  type="text"
                  {...register('childrenAges')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="e.g., 5 and 8 years old"
                />
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 mb-2">
                Hours the pet will be alone daily *
              </label>
              <input
                type="range"
                min="0"
                max="12"
                step="1"
                {...register('hoursAlone', { valueAsNumber: true })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 hours</span>
                <span className="font-semibold">{watch('hoursAlone')} hours</span>
                <span>12+ hours</span>
              </div>
              {errors.hoursAlone && (
                <p className="mt-1 text-sm text-red-600">{errors.hoursAlone.message}</p>
              )}
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800">Pet Experience & References</h3>
            
            <div>
              <label className="block text-gray-700 mb-2">Previous pet experience? *</label>
              <div className="grid grid-cols-2 gap-4">
                {['yes', 'no'].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      type="radio"
                      value={option}
                      {...register('experienceWithPets')}
                      className="hidden peer"
                    />
                    <div className="p-4 border-2 border-gray-300 rounded-lg text-center peer-checked:border-amber-500 peer-checked:bg-amber-50 transition-all">
                      <span className="capitalize">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.experienceWithPets && (
                <p className="mt-1 text-sm text-red-600">{errors.experienceWithPets.message}</p>
              )}
            </div>
            
            {hasExperience === 'yes' && (
              <div className="animate-fade-in">
                <label className="block text-gray-700 mb-2">Current/Previous Pets</label>
                <textarea
                  {...register('currentPets')}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us about your current or previous pets"
                />
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 mb-2">Why do you want to adopt? *</label>
              <textarea
                {...register('reasonForAdoption')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Please share your reasons for adoption..."
              />
              {errors.reasonForAdoption && (
                <p className="mt-1 text-sm text-red-600">{errors.reasonForAdoption.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">References *</label>
              <textarea
                {...register('references')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Please provide 2-3 references with contact information"
              />
              {errors.references && (
                <p className="mt-1 text-sm text-red-600">{errors.references.message}</p>
              )}
            </div>
            
            {!animalId && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Animal ID (if known)</label>
                  <input
                    type="text"
                    {...register('animalId')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="e.g., DOG-001"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Animal Name (if known)</label>
                  <input
                    type="text"
                    {...register('animalName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="e.g., Max"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-between pt-6 border-t">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="btn-primary px-8"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}