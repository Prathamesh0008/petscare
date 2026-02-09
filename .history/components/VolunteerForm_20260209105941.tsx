'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { volunteerFormSchema, VolunteerFormValues } from '@/lib/validation';
import { VOLUNTEER_ROLES } from '@/lib/constants';
import { FaCheck, FaCalendar, FaClock, FaStar } from 'react-icons/fa';

export default function VolunteerForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      age: 25,
      availability: [],
      skills: [],
    },
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    // In a real app, this would send data to your backend
    console.log('Volunteer form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    setIsSubmitted(true);
  };

  const toggleAvailability = (value: VolunteerFormValues['availability'][0]) => {
    const current = watch('availability');
    if (current.includes(value)) {
      setValue('availability', current.filter(v => v !== value));
    } else {
      setValue('availability', [...current, value]);
    }
  };

  const toggleSkill = (skill: string) => {
    const current = watch('skills') || [];
    if (current.includes(skill)) {
      setValue('skills', current.filter(s => s !== skill));
    } else {
      setValue('skills', [...current, skill]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-3xl text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your interest in volunteering. We will contact you within 3-5 business days for an orientation session.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Apply Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Volunteer Application</h2>
      <p className="text-gray-600 mb-8">
        Join our team of dedicated volunteers and make a difference in animals' lives
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
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
            <label className="block text-gray-700 mb-2">Age *</label>
            <input
              type="number"
              {...register('age', { valueAsNumber: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="25"
              min="18"
              max="70"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
            )}
          </div>
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
        
        <div>
          <label className="block text-gray-700 mb-2">Availability *</label>
          <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'weekday-morning', label: 'Weekday Morning', icon: <FaCalendar /> },
              { value: 'weekday-evening', label: 'Weekday Evening', icon: <FaClock /> },
              { value: 'weekend', label: 'Weekends', icon: <FaStar /> },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleAvailability(option.value)}
                className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                  watch('availability').includes(option.value)
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 hover:border-amber-300'
                }`}
              >
                <span className="text-xl">{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          {errors.availability && (
            <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Skills & Interests</label>
          <p className="text-sm text-gray-600 mb-4">Select skills you have or want to learn</p>
          <div className="flex flex-wrap gap-2">
            {VOLUNTEER_ROLES.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  watch('skills')?.includes(skill)
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-amber-300'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Previous Experience *</label>
          <textarea
            {...register('experience')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Tell us about any previous volunteer or animal care experience..."
          />
          {errors.experience && (
            <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Emergency Contact *</label>
            <input
              type="text"
              {...register('emergencyContact')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Name and phone number"
            />
            {errors.emergencyContact && (
              <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Medical Conditions (if any)</label>
            <input
              type="text"
              {...register('medicalConditions')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Any allergies or medical conditions we should know about"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        
        <p className="text-center text-sm text-gray-600">
          Volunteers must be at least 18 years old. All volunteers will undergo a brief orientation and training.
        </p>
      </form>
    </div>
  );
}