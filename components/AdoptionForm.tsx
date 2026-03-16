// petscare/components/AdoptionForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adoptionFormSchema, AdoptionFormValues } from '@/lib/validation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCheck, 
  FaUser, 
  FaHome, 
  FaPaw, 
  FaArrowRight, 
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCity,
  FaBuilding,
  FaTree,
  FaChild,
  FaClock,
  FaHeart,
  FaFileAlt,
  FaIdCard,
  FaQuestionCircle
} from 'react-icons/fa';

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
    trigger,
    reset,
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
  const houseType = watch('houseType');

  const steps = [
    { 
      number: 1, 
      title: 'Personal Info', 
      icon: <FaUser />,
      description: 'Tell us about yourself'
    },
    { 
      number: 2, 
      title: 'Living Situation', 
      icon: <FaHome />,
      description: 'Your home environment'
    },
    { 
      number: 3, 
      title: 'Pet Experience', 
      icon: <FaPaw />,
      description: 'Your experience & motivation'
    },
  ];

  const nextStep = async () => {
    let fieldsToValidate: (keyof AdoptionFormValues)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'email', 'phone', 'occupation', 'address', 'city', 'pincode'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['houseType', 'hoursAlone'];
    } else if (currentStep === 3) {
      fieldsToValidate = ['experienceWithPets', 'reasonForAdoption', 'references'];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: AdoptionFormValues) => {
    console.log('Adoption form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg border border-[#223d7c]/10 p-8 md:p-12 text-center"
      >
        <div className="w-24 h-24 bg-[#223d7c]/5 rounded-lg flex items-center justify-center mx-auto mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FaCheck className="text-4xl text-[#1b93d1]" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold text-[#223d7c] mb-3">Application Submitted!</h3>
        <p className="text-[#223d7c]/60 mb-8 max-w-md mx-auto">
          Thank you for your adoption application. Our team will review it and contact you within 2-3 business days.
        </p>
        
        <div className="bg-[#223d7c]/5 rounded-lg p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center">
              <FaClock className="text-[#1b93d1]" />
            </div>
            <div>
              <p className="text-sm text-[#223d7c]/60">What happens next?</p>
              <p className="font-medium text-[#223d7c]">We'll call you within 48 hours</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex cursor-pointer items-center gap-2 bg-[#223d7c] hover:bg-[#1a2f60] text-white px-8 py-3 rounded-lg font-medium transition-all"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#223d7c]/10 overflow-hidden">
      {/* Header - Matte finish */}
      <div className="bg-[#223d7c] p-6 text-white">
        <h2 className="text-xl font-bold mb-1">Adoption Application</h2>
        <p className="text-white/70 text-sm">
          {animalName 
            ? `You're applying to adopt ${animalName}` 
            : 'Find your perfect companion'}
        </p>
      </div>
      
      {/* Progress Steps - Simplified */}
      <div className="px-6 pt-6 pb-4 bg-[#f5f7fa] border-b border-[#223d7c]/10">
        <div className="flex justify-between relative max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-base transition-all ${
                  currentStep >= step.number 
                    ? 'bg-[#1b93d1] text-white' 
                    : 'bg-white text-[#223d7c]/40 border border-[#223d7c]/10'
                }`}
              >
                {step.icon}
              </div>
              <span className={`mt-2 text-xs font-medium ${
                currentStep >= step.number ? 'text-[#223d7c]' : 'text-[#223d7c]/40'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
          
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#223d7c]/10 rounded-full mx-12">
            <motion.div 
              className="h-full bg-[#1b93d1] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Full Name <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="text"
                      {...register('fullName')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Email <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Phone Number <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                {/* Occupation */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Occupation <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="text"
                      {...register('occupation')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="Software Engineer"
                    />
                  </div>
                  {errors.occupation && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.occupation.message}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c]">
                  Address <span className="text-[#1b93d1]">*</span>
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-[#223d7c]/40 text-sm" />
                  <textarea
                    {...register('address')}
                    rows={2}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40 resize-none"
                    placeholder="Your complete address"
                  />
                </div>
                {errors.address && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.address.message}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                {/* City */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    City <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaCity className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="text"
                      {...register('city')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="Mumbai"
                    />
                  </div>
                  {errors.city && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.city.message}
                    </p>
                  )}
                </div>
                
                {/* Pincode */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Pincode <span className="text-[#1b93d1]">*</span>
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#223d7c]/40 text-sm" />
                    <input
                      type="text"
                      {...register('pincode')}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="400703"
                    />
                  </div>
                  {errors.pincode && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.pincode.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c] mb-2">
                  Type of Residence <span className="text-[#1b93d1]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'apartment', label: 'Apartment', icon: <FaBuilding /> },
                    { value: 'house', label: 'House', icon: <FaHome /> },
                    { value: 'villa', label: 'Villa', icon: <FaTree /> }
                  ].map((type) => (
                    <label key={type.value} className="cursor-pointer">
                      <input
                        type="radio"
                        value={type.value}
                        {...register('houseType')}
                        className="hidden peer"
                      />
                      <div className={`p-3 border rounded-lg text-center transition-all ${
                        houseType === type.value
                          ? 'border-[#1b93d1] bg-[#1b93d1]/5'
                          : 'border-[#223d7c]/10 hover:border-[#1b93d1]/30'
                      }`}>
                        <div className={`text-lg mb-1 ${
                          houseType === type.value ? 'text-[#1b93d1]' : 'text-[#223d7c]/40'
                        }`}>
                          {type.icon}
                        </div>
                        <span className={`text-xs font-medium ${
                          houseType === type.value ? 'text-[#1b93d1]' : 'text-[#223d7c]/60'
                        }`}>
                          {type.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.houseType && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                    <FaQuestionCircle className="text-xs" />
                    {errors.houseType.message}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 border border-[#223d7c]/10 rounded-lg cursor-pointer hover:border-[#1b93d1]/30 transition-all">
                  <input
                    type="checkbox"
                    {...register('hasGarden')}
                    className="w-4 h-4 text-[#1b93d1] rounded focus:ring-[#1b93d1] cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-medium text-[#223d7c]">Garden/Yard</span>
                    <p className="text-xs text-[#223d7c]/40">Outdoor space for pets</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-[#223d7c]/10 rounded-lg cursor-pointer hover:border-[#1b93d1]/30 transition-all">
                  <input
                    type="checkbox"
                    {...register('hasChildren')}
                    className="w-4 h-4 text-[#1b93d1] rounded focus:ring-[#1b93d1] cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-medium text-[#223d7c]">Children at Home</span>
                    <p className="text-xs text-[#223d7c]/40">Kids in the household</p>
                  </div>
                </label>
              </div>
              
              {hasChildren && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Children's Ages
                  </label>
                  <input
                    type="text"
                    {...register('childrenAges')}
                    className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                    placeholder="e.g., 5 and 8 years old"
                  />
                </motion.div>
              )}
              
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c]">
                  Hours pet will be alone daily <span className="text-[#1b93d1]">*</span>
                </label>
                <div className="bg-[#f5f7fa] p-4 rounded-lg">
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="1"
                    {...register('hoursAlone', { valueAsNumber: true })}
                    className="w-full h-1.5 bg-[#223d7c]/10 rounded-lg appearance-none cursor-pointer accent-[#1b93d1]"
                  />
                  <div className="flex justify-between text-xs mt-3">
                    <span className="text-[#223d7c]/40">0 hours</span>
                    <span className="font-medium text-[#1b93d1] bg-[#1b93d1]/10 px-3 py-1 rounded-full text-xs">
                      {watch('hoursAlone')} hours
                    </span>
                    <span className="text-[#223d7c]/40">12+ hours</span>
                  </div>
                </div>
                {errors.hoursAlone && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.hoursAlone.message}
                  </p>
                )}
              </div>
            </motion.div>
          )}
          
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c] mb-2">
                  Previous pet experience? <span className="text-[#1b93d1]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Yes, I have experience', icon: <FaCheck /> },
                    { value: 'no', label: 'No, first time', icon: <FaQuestionCircle /> }
                  ].map((option) => (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="radio"
                        value={option.value}
                        {...register('experienceWithPets')}
                        className="hidden peer"
                      />
                      <div className={`p-3 border rounded-lg text-center transition-all ${
                        hasExperience === option.value
                          ? 'border-[#1b93d1] bg-[#1b93d1]/5'
                          : 'border-[#223d7c]/10 hover:border-[#1b93d1]/30'
                      }`}>
                        <div className={`text-lg mb-1 ${
                          hasExperience === option.value ? 'text-[#1b93d1]' : 'text-[#223d7c]/40'
                        }`}>
                          {option.icon}
                        </div>
                        <span className={`text-xs font-medium ${
                          hasExperience === option.value ? 'text-[#1b93d1]' : 'text-[#223d7c]/60'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.experienceWithPets && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                    <FaQuestionCircle className="text-xs" />
                    {errors.experienceWithPets.message}
                  </p>
                )}
              </div>
              
              {hasExperience === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="block text-sm font-medium text-[#223d7c]">
                    Current/Previous Pets
                  </label>
                  <textarea
                    {...register('currentPets')}
                    rows={2}
                    className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40 resize-none"
                    placeholder="Tell us about your current or previous pets"
                  />
                </motion.div>
              )}
              
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c]">
                  Why do you want to adopt? <span className="text-[#1b93d1]">*</span>
                </label>
                <textarea
                  {...register('reasonForAdoption')}
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40 resize-none"
                  placeholder="Please share your reasons for adoption..."
                />
                {errors.reasonForAdoption && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.reasonForAdoption.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#223d7c]">
                  References <span className="text-[#1b93d1]">*</span>
                </label>
                <textarea
                  {...register('references')}
                  rows={2}
                  className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40 resize-none"
                  placeholder="Please provide 2-3 references with contact information"
                />
                {errors.references && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.references.message}
                  </p>
                )}
              </div>
              
              {!animalId && (
                <div className="grid md:grid-cols-2 gap-5 pt-4 border-t border-[#223d7c]/10">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-[#223d7c]">
                      Animal ID (if known)
                    </label>
                    <input
                      type="text"
                      {...register('animalId')}
                      className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="e.g., DOG-001"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-[#223d7c]">
                      Animal Name (if known)
                    </label>
                    <input
                      type="text"
                      {...register('animalName')}
                      className="w-full px-3 py-2.5 text-sm border border-[#223d7c]/10 rounded-lg focus:border-[#1b93d1] focus:outline-none focus:ring-2 focus:ring-[#1b93d1]/20 transition-all text-[#223d7c] placeholder-[#223d7c]/40"
                      placeholder="e.g., Max"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 mt-6 border-t border-[#223d7c]/10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 border border-[#223d7c]/10 text-[#223d7c]/60 rounded-lg text-sm font-medium hover:bg-[#223d7c]/5 hover:border-[#223d7c]/20 transition-all"
            >
              <FaArrowLeft className="text-xs" />
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex cursor-pointer items-center gap-2 bg-[#1b93d1] hover:bg-[#1680b5] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              Next Step
              <FaArrowRight className="text-xs" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center gap-2 bg-[#223d7c] hover:bg-[#1a2f60] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FaHeart className="text-white/80" />
                  Submit Application
                </>
              )}
            </button>
          )}
        </div>
        
        {/* Form Progress Indicator */}
        <div className="mt-4 text-center">
          <p className="text-xs text-[#223d7c]/40">
            Step {currentStep} of 3 • {steps[currentStep - 1].description}
          </p>
        </div>
      </form>
    </div>
  );
}