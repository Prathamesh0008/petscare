'use client';

import EmergencySOS from '@/components/EmergencySOS';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function EmergencyPage() {
  const emergencyContacts = [
    { name: '24/7 Emergency Vet', number: '022-2789-4567', description: 'For critical medical emergencies' },
    { name: 'Animal Control', number: '100', description: 'Police emergency line' },
    { name: 'Fire & Rescue', number: '101', description: 'For trapped or injured animals' },
    { name: 'Ambulance', number: '102', description: 'Medical emergencies' },
    { name: 'Animal Poison Control', number: '1800-425-4732', description: '24/7 poison helpline' },
  ];

  const emergencyProcedures = [
    {
      title: 'Found Injured Animal',
      steps: [
        'Approach carefully - injured animals may bite',
        'Call our emergency number immediately',
        'Do not attempt to move unless in immediate danger',
        'Keep warm with blanket if possible',
        'Wait for professional help',
      ],
    },
    {
      title: 'Animal Attack',
      steps: [
        'Separate animals immediately if safe to do so',
        'Check for injuries',
        'Clean wounds with soap and water',
        'Seek medical attention for bites',
        'Report incident to animal control',
      ],
    },
    {
      title: 'Lost Pet',
      steps: [
        'Check local area immediately',
        'Contact nearby shelters and vet clinics',
        'Post on social media and local groups',
        'Put up flyers in the neighborhood',
        'Check our lost & found page',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <EmergencyBanner />
      
      <h1 className="text-3xl font-bold mb-2">Emergency Resources</h1>
      <p className="text-gray-600 mb-8">Immediate help for animals in distress</p>

      <div className="mb-8">
        <EmergencySOS />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Emergency Contacts */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Emergency Contacts</h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, idx) => (
                <div key={idx} className="border-l-4 border-red-500 pl-4 py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{contact.name}</h3>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-red-600">{contact.number}</div>
                      <button className="text-sm text-blue-600 hover:underline mt-1">
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/emergency/lost-pet"
                className="block bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700"
              >
                Report Lost Pet
              </a>
              <a
                href="/emergency/found-pet"
                className="block bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700"
              >
                Report Found Pet
              </a>
              <a
                href="/emergency/stray-report"
                className="block bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700"
              >
                Report Stray Animal
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Download Emergency Guide</h3>
            <p className="text-gray-600 text-sm mb-4">
              Save this guide for offline access
            </p>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900">
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Procedures */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Emergency Procedures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyProcedures.map((procedure, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">{procedure.title}</h3>
              <ol className="space-y-2">
                {procedure.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                      {stepIdx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}