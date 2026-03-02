'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaPaw, FaGift, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function DonationImpactPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f0] py-12 px-4">
      
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#2c4a3e] hover:text-[#b87d5e] transition-colors mb-8">
          <FaArrowLeft />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
            Your Donation <span className="text-[#b87d5e]">Impact</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every contribution directly supports rescued animals with food, shelter, and medical care.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <FaHeart className="text-3xl text-[#b87d5e] mx-auto mb-4" />
            <h3 className="font-bold text-[#2c4a3e] text-xl mb-2">Food Support</h3>
            <p className="text-gray-600 text-sm">
              Provides nutritious meals for over 50 rescued animals daily.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <FaGift className="text-3xl text-[#b87d5e] mx-auto mb-4" />
            <h3 className="font-bold text-[#2c4a3e] text-xl mb-2">Medical Care</h3>
            <p className="text-gray-600 text-sm">
              Covers vaccinations, treatments, and emergency surgeries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <FaPaw className="text-3xl text-[#b87d5e] mx-auto mb-4" />
            <h3 className="font-bold text-[#2c4a3e] text-xl mb-2">Shelter & Comfort</h3>
            <p className="text-gray-600 text-sm">
              Provides safe beds, clean spaces, and warm environments.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/donate">
            <button className="px-8 py-3 cursor-pointer bg-[#2c4a3e] text-white rounded-lg font-semibold hover:bg-[#1e352b] transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}