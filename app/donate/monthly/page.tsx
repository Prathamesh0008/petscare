'use client';

import { FaCalendarAlt, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function MonthlyDonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when preset is selected
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null); // Clear selected amount when custom is entered
    }
  };

  const handleSubmit = async () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    
    if (amount < 100) {
      alert('Minimum donation amount is ₹100');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      // Here you would integrate with your payment gateway (Razorpay, Stripe, etc.)
      console.log('Processing donation:', {
        amount,
        frequency,
        type: 'monthly'
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      alert(`Thank you for your ${frequency} support of ₹${amount}!`);
      
      // Reset form
      setSelectedAmount(null);
      setCustomAmount('');
      
    } catch (error) {
      console.error('Donation failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const donationAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link 
          href="/donate" 
          className="inline-flex items-center text-[#2c4a3e] hover:text-[#b87d5e] mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Donation Options
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCalendarAlt className="text-3xl text-[#b87d5e]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#2c4a3e] mb-4">
              Monthly Giving
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Become a monthly supporter and create lasting impact for animals in need. 
              Your regular donation helps us provide food, shelter, and medical care.
            </p>
          </div>

          {/* Frequency Selection */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setFrequency('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                frequency === 'monthly'
                  ? 'bg-[#2c4a3e] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setFrequency('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                frequency === 'yearly'
                  ? 'bg-[#2c4a3e] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Yearly <span className="text-sm opacity-75">(Save 10%)</span>
            </button>
          </div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[500, 1000, 2000].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`py-4 rounded-xl border-2 font-semibold transition-all ${
                  selectedAmount === amount
                    ? 'border-[#b87d5e] bg-[#b87d5e] text-white'
                    : 'border-[#b87d5e] text-[#b87d5e] hover:bg-[#b87d5e] hover:text-white'
                }`}
              >
                ₹{amount.toLocaleString()} / {frequency === 'monthly' ? 'month' : 'year'}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter custom amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter amount"
                className="w-full text-black pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#b87d5e] focus:outline-none transition-colors"
              />
            </div>
            {customAmount && parseInt(customAmount) < 100 && (
              <p className="text-red-500 text-sm mt-2">Minimum donation is ₹100</p>
            )}
          </div>

          {/* Impact Preview */}
          {donationAmount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-[#b87d5e]/5 rounded-xl p-6 mb-8"
            >
              <h3 className="font-semibold text-[#2c4a3e] mb-3">Your impact:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
                  Provides {Math.floor(donationAmount / 100)} meals for rescued animals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
                  Supports medical care for {Math.floor(donationAmount / 500)} animals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b87d5e] rounded-full" />
                  Helps maintain shelter facilities
                </li>
              </ul>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!donationAmount || donationAmount < 100 || isProcessing}
            className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              !donationAmount || donationAmount < 100 || isProcessing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#2c4a3e] text-white hover:bg-[#1e352b]'
            }`}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Start {frequency === 'monthly' ? 'Monthly' : 'Yearly'} Support 
                <FaHeart className={donationAmount ? 'animate-pulse' : ''} />
              </>
            )}
          </button>

          {/* Security Notice */}
          <p className="text-xs text-center text-gray-500 mt-6">
            🔒 Secure payment. You can cancel anytime.
            {frequency === 'yearly' && ' Save 10% with yearly commitment.'}
          </p>

          {/* Payment Methods */}
          <div className="flex justify-center gap-4 mt-6">
            <img src="/razorpay.svg" alt="Razorpay" className="h-8 opacity-50 grayscale" />
            <img src="/visa.svg" alt="Visa" className="h-8 opacity-50 grayscale" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8 opacity-50 grayscale" />
            <img src="/upi.svg" alt="UPI" className="h-8 opacity-50 grayscale" />
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-[#2c4a3e] mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-gray-600">Yes, you can pause or cancel your monthly donation at any time from your dashboard.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-[#2c4a3e] mb-2">Is my donation tax-exempt?</h3>
            <p className="text-sm text-gray-600">Yes, all donations are tax-exempt under Section 80G of the Income Tax Act.</p>
          </div>
        </div>
      </div>
    </div>
  );
}