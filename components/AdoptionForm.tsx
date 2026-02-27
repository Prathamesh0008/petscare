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
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FaCheck className="text-4xl text-green-600" />
          </motion.div>
        </div>
        
        <h3 className="text-3xl font-bold text-[#2c4a3e] mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your adoption application. Our team will review it and contact you within 2-3 business days.
        </p>
        
        <div className="bg-[#b87d5e]/5 rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
              <FaClock className="text-[#b87d5e]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">What happens next?</p>
              <p className="font-medium text-[#2c4a3e]">We'll call you within 48 hours</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex cursor-pointer items-center gap-2 bg-[#b87d5e] hover:bg-[#9e6a4f] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Adoption Application</h2>
        <p className="text-white/80">
          {animalName 
            ? `You're applying to adopt ${animalName}` 
            : 'Find your perfect companion'}
        </p>
      </div>
      
      {/* Progress Steps */}
      <div className="px-8 pt-8 pb-4 bg-gray-50 border-b border-gray-100">
        <div className="flex justify-between relative max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center relative z-10">
              <motion.div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-semibold transition-all duration-300 cursor-pointer ${
                  currentStep >= step.number 
                    ? 'bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] text-white shadow-lg' 
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {step.icon}
              </motion.div>
              <span className={`mt-2 text-sm font-medium ${
                currentStep >= step.number ? 'text-[#2c4a3e]' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
              <span className="text-xs text-gray-400 hidden md:block">{step.description}</span>
            </div>
          ))}
          
          {/* Progress Line */}
          <div className="absolute top-7 left-0 right-0 h-1 bg-gray-200 rounded-full mx-16">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Full Name <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('fullName')}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none text-black"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Email <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Phone Number <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                {/* Occupation */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Occupation <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('occupation')}
                      className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="Software Engineer"
                    />
                  </div>
                  {errors.occupation && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.occupation.message}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e]">
                  Address <span className="text-[#b87d5e]">*</span>
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none resize-none"
                    placeholder="Your complete address"
                  />
                </div>
                {errors.address && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.address.message}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* City */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    City <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('city')}
                      className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="Mumbai"
                    />
                  </div>
                  {errors.city && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <FaQuestionCircle className="text-xs" />
                      {errors.city.message}
                    </p>
                  )}
                </div>
                
                {/* Pincode */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Pincode <span className="text-[#b87d5e]">*</span>
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('pincode')}
                      className="w-full text-black pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="400703"
                    />
                  </div>
                  {errors.pincode && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
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
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e] mb-3">
                  Type of Residence <span className="text-[#b87d5e]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
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
                      <div className={`p-4 border-2 rounded-xl text-center transition-all cursor-pointer ${
                        houseType === type.value
                          ? 'border-[#b87d5e] bg-[#b87d5e]/5'
                          : 'border-gray-200 hover:border-[#b87d5e]/30'
                      }`}>
                        <div className={`text-2xl mb-2 ${
                          houseType === type.value ? 'text-[#b87d5e]' : 'text-gray-400'
                        }`}>
                          {type.icon}
                        </div>
                        <span className={`text-sm font-medium ${
                          houseType === type.value ? 'text-[#b87d5e]' : 'text-gray-600'
                        }`}>
                          {type.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.houseType && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-2">
                    <FaQuestionCircle className="text-xs" />
                    {errors.houseType.message}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#b87d5e]/30 transition-all">
                  <input
                    type="checkbox"
                    {...register('hasGarden')}
                    className="w-5 h-5 text-[#b87d5e] rounded focus:ring-[#b87d5e] cursor-pointer"
                  />
                  <div>
                    <span className="font-medium text-[#2c4a3e]">Garden/Yard</span>
                    <p className="text-xs text-gray-500">Outdoor space for pets</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#b87d5e]/30 transition-all">
                  <input
                    type="checkbox"
                    {...register('hasChildren')}
                    className="w-5 h-5 text-[#b87d5e] rounded focus:ring-[#b87d5e] cursor-pointer"
                  />
                  <div>
                    <span className="font-medium text-[#2c4a3e]">Children at Home</span>
                    <p className="text-xs text-gray-500">Kids in the household</p>
                  </div>
                </label>
              </div>
              
              {hasChildren && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Children's Ages
                  </label>
                  <input
                    type="text"
                    {...register('childrenAges')}
                    className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                    placeholder="e.g., 5 and 8 years old"
                  />
                </motion.div>
              )}
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e]">
                  Hours pet will be alone daily <span className="text-[#b87d5e]">*</span>
                </label>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="1"
                    {...register('hoursAlone', { valueAsNumber: true })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#b87d5e]"
                  />
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-gray-500">0 hours</span>
                    <motion.span 
                      key={watch('hoursAlone')}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="font-semibold text-[#b87d5e] bg-[#b87d5e]/10 px-4 py-1 rounded-full"
                    >
                      {watch('hoursAlone')} hours
                    </motion.span>
                    <span className="text-gray-500">12+ hours</span>
                  </div>
                </div>
                {errors.hoursAlone && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
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
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e] mb-3">
                  Previous pet experience? <span className="text-[#b87d5e]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
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
                      <div className={`p-4 border-2 rounded-xl text-center transition-all cursor-pointer ${
                        hasExperience === option.value
                          ? 'border-[#b87d5e] bg-[#b87d5e]/5'
                          : 'border-gray-200 hover:border-[#b87d5e]/30'
                      }`}>
                        <div className={`text-2xl mb-2 ${
                          hasExperience === option.value ? 'text-[#b87d5e]' : 'text-gray-400'
                        }`}>
                          {option.icon}
                        </div>
                        <span className={`text-sm font-medium ${
                          hasExperience === option.value ? 'text-[#b87d5e]' : 'text-gray-600'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.experienceWithPets && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-2">
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
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-[#2c4a3e]">
                    Current/Previous Pets
                  </label>
                  <textarea
                    {...register('currentPets')}
                    rows={3}
                    className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none resize-none"
                    placeholder="Tell us about your current or previous pets (type, age, temperament)"
                  />
                </motion.div>
              )}
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e]">
                  Why do you want to adopt? <span className="text-[#b87d5e]">*</span>
                </label>
                <textarea
                  {...register('reasonForAdoption')}
                  rows={4}
                  className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none resize-none"
                  placeholder="Please share your reasons for adoption and what kind of home you can provide..."
                />
                {errors.reasonForAdoption && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.reasonForAdoption.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2c4a3e]">
                  References <span className="text-[#b87d5e]">*</span>
                </label>
                <textarea
                  {...register('references')}
                  rows={3}
                  className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none resize-none"
                  placeholder="Please provide 2-3 references with names and contact information"
                />
                {errors.references && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <FaQuestionCircle className="text-xs" />
                    {errors.references.message}
                  </p>
                )}
              </div>
              
              {!animalId && (
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#2c4a3e]">
                      Animal ID (if known)
                    </label>
                    <input
                      type="text"
                      {...register('animalId')}
                      className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="e.g., DOG-001"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#2c4a3e]">
                      Animal Name (if known)
                    </label>
                    <input
                      type="text"
                      {...register('animalName')}
                      className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b87d5e]/20 focus:border-[#b87d5e] transition-all outline-none"
                      placeholder="e.g., Max"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 mt-8 border-t border-gray-100">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <FaArrowLeft className="text-sm" />
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] hover:from-[#9e6a4f] hover:to-[#b87d5e] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Next Step
              <FaArrowRight className="text-sm" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] hover:from-[#9e6a4f] hover:to-[#b87d5e] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FaHeart />
                  Submit Application
                </>
              )}
            </button>
          )}
        </div>
        
        {/* Form Progress Indicator */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Step {currentStep} of 3 • {steps[currentStep - 1].description}
          </p>
        </div>
      </form>
    </div>
  );
}