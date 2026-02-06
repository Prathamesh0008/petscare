'use client';

import { useState } from 'react';
import { FaExclamationTriangle, FaTimes, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce-slow">
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-2xl p-6 max-w-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <FaExclamationTriangle className="text-2xl" />
            <h3 className="text-xl font-bold">Emergency Rescue</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white text-lg"
            aria-label="Close banner"
          >
            <FaTimes />
          </button>
        </div>
        
        <p className="mb-6">
          Found an injured or distressed animal? Contact us immediately for emergency rescue.
        </p>
        
        <div className="space-y-3">
          <a
            href="tel:+919876543210"
            className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>Emergency Phone</span>
            </div>
            <span className="font-bold">+91 98765 43210</span>
          </a>
          
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </div>
            <span className="font-bold">Message Now</span>
          </a>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20">
          <Link
            href="/contact"
            className="block w-full bg-white text-red-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-100 transition-colors"
          >
            View All Contacts
          </Link>
        </div>
      </div>
    </div>
  );
}