// app/visit/book/page.tsx
'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaPaw } from 'react-icons/fa';

export default function BookVisitPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a3e] mb-4">
              Schedule a <span className="text-[#b87d5e]">Visit</span>
            </h1>
            <p className="text-gray-600">
              Come meet our animals in person and find your new best friend
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-[#2c4a3e] mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-[#b87d5e]" />
                Select Date
              </h2>
              
              {/* Simplified calendar - you can replace with a proper calendar component */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(`${i + 1}`)}
                    className={`p-2 text-sm rounded-lg transition-colors ${
                      selectedDate === `${i + 1}`
                        ? 'bg-[#b87d5e] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <h2 className="text-lg font-semibold text-[#2c4a3e] mb-4 mt-6 flex items-center gap-2">
                <FaClock className="text-[#b87d5e]" />
                Select Time
              </h2>
              
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-[#b87d5e] text-white border-[#b87d5e]'
                        : 'border-gray-200 hover:border-[#b87d5e] text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-[#2c4a3e] mb-6">
                Your Information
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Any specific animal you'd like to meet?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Ninja Warrior, Madam Mimi"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    selectedDate && selectedTime
                      ? 'bg-[#b87d5e] text-white hover:bg-[#9e6a4f]'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FaCalendarAlt />
                  Book Visit
                </button>
              </form>
            </div>
          </div>

          {/* Info Card */}
          <div className="mt-8 bg-[#2c4a3e] rounded-2xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaPaw className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Visit Information</h3>
                <p className="text-sm text-white/80 mb-2">
                  • Visits last approximately 30-45 minutes
                </p>
                <p className="text-sm text-white/80 mb-2">
                  • Please arrive 10 minutes before your scheduled time
                </p>
                <p className="text-sm text-white/80">
                  • Children under 12 must be accompanied by an adult
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}