'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationFormSchema, DonationFormValues } from '@/lib/validation';
import { DONATION_TIERS } from '@/lib/constants';
import { FaCheck, FaRupeeSign, FaHeart } from 'react-icons/fa';

export default function DonationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      frequency: 'one-time',
      anonymous: false,
      amount: 1000,
    },
  });

  const onSubmit = async (data: DonationFormValues) => {
    // In a real app, this would integrate with payment gateway
    console.log('Donation submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    setIsSubmitted(true);
  };

  const handleTierSelect = (amount: number) => {
    setSelectedTier(amount);
    setValue('amount', amount);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaHeart className="text-3xl text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Donation!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Your contribution will help us provide food, medical care, and shelter to animals in need.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  const amount = watch('amount');

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Make a Donation</h2>
      <p className="text-gray-600 mb-8">
        Your donation helps us rescue, rehabilitate, and find homes for animals
      </p>
      
      {/* Donation Tiers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {DONATION_TIERS.map((tier) => (
          <button
            key={tier.amount}
            onClick={() => handleTierSelect(tier.amount)}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              selectedTier === tier.amount
                ? 'border-amber-500 bg-amber-50'
                : 'border-gray-200 hover:border-amber-300'
            }`}
          >
            <div className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-1">
              <FaRupeeSign className="text-lg" /> {tier.amount}
            </div>
            <div className="font-semibold text-gray-800 mb-1">{tier.name}</div>
            <div className="text-sm text-gray-600">{tier.description}</div>
          </button>
        ))}
      </div>
      
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
            <label className="block text-gray-700 mb-2">Donation Amount (₹) *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                ₹
              </span>
              <input
                type="number"
                {...register('amount', { valueAsNumber: true })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter amount"
                min="100"
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
            )}
            <div className="text-sm text-gray-600 mt-2">
              Minimum donation: ₹100
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Donation Frequency *</label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'one-time', label: 'One Time' },
              { value: 'monthly', label: 'Monthly' },
              { value: 'quarterly', label: 'Quarterly' },
            ].map((option) => (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  value={option.value}
                  {...register('frequency')}
                  className="hidden peer"
                />
                <div className="p-4 border-2 border-gray-300 rounded-lg text-center peer-checked:border-amber-500 peer-checked:bg-amber-50 transition-all">
                  {option.label}
                </div>
              </label>
            ))}
          </div>
          {errors.frequency && (
            <p className="mt-1 text-sm text-red-600">{errors.frequency.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Message (Optional)</label>
          <textarea
            {...register('message')}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Add a personal message with your donation..."
          />
        </div>
        
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="anonymous"
            {...register('anonymous')}
            className="w-5 h-5 text-amber-500 rounded"
          />
          <label htmlFor="anonymous" className="text-gray-700 cursor-pointer">
            Make this donation anonymous
          </label>
        </div>
        
        {/* Donation Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-4">Donation Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold">₹{amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frequency</span>
              <span className="font-semibold capitalize">{watch('frequency')?.replace('-', ' ')}</span>
            </div>
            {watch('frequency') !== 'one-time' && (
              <div className="flex justify-between text-amber-600">
                <span>Estimated annual contribution</span>
                <span className="font-bold">
                  ₹{amount * (watch('frequency') === 'monthly' ? 12 : 4)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg"
        >
          {isSubmitting ? 'Processing...' : `Donate ₹${amount}`}
        </button>
        
        <p className="text-center text-sm text-gray-600">
          Your donation is secure and tax-deductible. You will receive a receipt via email.
        </p>
      </form>
    </div>
  );
}