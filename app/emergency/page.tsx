// app/emergency/page.tsx
'use client';

import { FaShieldAlt, FaPhone, FaMapMarkerAlt, FaClock, FaAmbulance, FaHeartbeat, FaFire } from 'react-icons/fa';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            <FaShieldAlt />
            24/7 Emergency Support
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a3e] mb-4">
            Emergency <span className="text-rose-500">Assistance</span>
          </h1>
          <p className="text-gray-600">
            Immediate help for your pet in critical situations
          </p>
        </div>

        {/* Emergency Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 rounded-2xl p-8 border-2 border-rose-200 mb-8 text-center">
            <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <FaPhone className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-rose-600 mb-2">Emergency Hotline</h2>
            <a 
              href="tel:+18005551234" 
              className="text-4xl sm:text-5xl font-bold text-[#2c4a3e] hover:text-rose-500 transition-colors block mb-4"
            >
              1-800-555-1234
            </a>
            <p className="text-gray-600">Available 24/7 for urgent situations</p>
          </div>

          {/* Emergency Services Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <FaAmbulance className="text-2xl" />,
                title: 'Veterinary Emergency',
                contact: '(555) 123-4567',
                address: '123 Pet Care Ave',
                hours: '24/7',
                color: 'rose'
              },
              {
                icon: <FaFire className="text-2xl" />,
                title: 'Animal Poison Control',
                contact: '(888) 426-4435',
                address: '24/7 Hotline',
                hours: '24/7',
                color: 'amber'
              },
              {
                icon: <FaHeartbeat className="text-2xl" />,
                title: 'Pet Ambulance',
                contact: '(555) 987-6543',
                address: 'Emergency Transport',
                hours: '24/7',
                color: 'emerald'
              }
            ].map((service, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-${service.color}-500`}>
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center text-${service.color}-600 mb-4`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <a href={`tel:${service.contact}`} className="text-rose-500 font-medium block mb-2">
                  {service.contact}
                </a>
                <p className="text-xs text-gray-500 mb-1">{service.address}</p>
                <p className="text-xs text-gray-500">{service.hours}</p>
              </div>
            ))}
          </div>

          {/* First Aid Guide */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-[#2c4a3e] mb-4">Emergency First Aid Tips</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Keep your pet calm and warm',
                'Do not give food or water unless instructed',
                'Apply gentle pressure to bleeding wounds',
                'Keep emergency numbers handy',
                'Know the nearest 24/7 vet clinic',
                'Have your pet\'s medical records ready'
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-500 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 bg-gray-900 rounded-2xl overflow-hidden">
            <div className="p-4 bg-gray-800">
              <h4 className="text-white font-medium flex items-center gap-2">
                <FaMapMarkerAlt className="text-rose-500" />
                Nearest 24/7 Emergency Vet
              </h4>
            </div>
            <div className="aspect-video bg-gray-700 flex items-center justify-center">
              <p className="text-gray-400">Map would be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}