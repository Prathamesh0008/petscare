'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaAmbulance, FaMapMarkerAlt, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';

const EmergencySOS = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyContacts = [
    { name: 'Shelter Emergency', number: '+91 98765 43210', icon: <FaPhoneAlt />, color: 'bg-red-500' },
    { name: 'Animal Ambulance', number: '+91 87654 32109', icon: <FaAmbulance />, color: 'bg-orange-500' },
    { name: 'Nearest Vet', number: '+91 76543 21098', icon: <FaExclamationTriangle />, color: 'bg-blue-500' },
    { name: 'WhatsApp Rescue', number: '+91 98765 43210', icon: <FaWhatsapp />, color: 'bg-green-500' },
  ];

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmergencyWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}?text=Emergency%20Animal%20Rescue%20-%20Need%20immediate%20help`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* SOS Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <div className="absolute inset-0 bg-red-400 rounded-full blur-md group-hover:blur-lg transition-all"></div>
        <div className="relative z-10">
          <MdEmergency className="text-2xl" />
        </div>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          EMERGENCY
        </span>
      </button>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <MdEmergency className="text-2xl text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Emergency Rescue</h3>
              <p className="text-sm text-gray-600">Found an injured animal?</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {emergencyContacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => 
                  contact.name.includes('WhatsApp') 
                    ? handleEmergencyWhatsApp(contact.number.replace(/\D/g, ''))
                    : handleEmergencyCall(contact.number)
                }
                className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`${contact.color} p-3 rounded-full text-white`}>
                    {contact.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">{contact.name}</div>
                    <div className="text-gray-600">{contact.number}</div>
                  </div>
                </div>
                <div className="text-red-500 group-hover:scale-110 transition-transform">
                  →
                </div>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => window.open('https://maps.google.com/?q=animal+hospital+near+me', '_blank')}
              className="flex flex-col items-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <FaMapMarkerAlt className="text-blue-600 text-xl mb-2" />
              <span className="text-sm font-medium text-gray-800">Find Vet</span>
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="flex flex-col items-center p-3 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors"
            >
              <FaExclamationTriangle className="text-amber-600 text-xl mb-2" />
              <span className="text-sm font-medium text-gray-800">Report</span>
            </button>
          </div>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-xs text-gray-500">
              Click any number to call immediately. Available 24/7.
            </p>
          </div>
        </div>
      )}

      {/* Add animation */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EmergencySOS;