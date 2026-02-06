export default function EmergencyContactsPage() {
  const contacts = [
    {
      category: '24/7 Emergency Vets',
      items: [
        { name: 'Vashi Emergency Pet Hospital', phone: '022-2789-4567', hours: '24/7' },
        { name: 'Navi Mumbai Animal ER', phone: '022-2768-9012', hours: '24/7' },
        { name: 'Mumbai Pet Emergency Center', phone: '022-2643-7890', hours: '24/7' },
      ],
    },
    {
      category: 'Specialist Referrals',
      items: [
        { name: 'Cardiology Specialist', phone: '022-2789-3456', hours: 'Mon-Fri 9-6' },
        { name: 'Dermatology Clinic', phone: '022-2765-2345', hours: 'Mon-Sat 10-7' },
        { name: 'Oncology Center', phone: '022-2743-6789', hours: 'Mon-Fri 9-5' },
        { name: 'Orthopedic Surgeon', phone: '022-2721-4567', hours: 'Mon-Sat 9-6' },
      ],
    },
    {
      category: 'Government & Control',
      items: [
        { name: 'Animal Control Department', phone: '100', hours: '24/7' },
        { name: 'Forest Department', phone: '022-2678-1234', hours: 'Mon-Fri 9-5' },
        { name: 'Municipal Corporation', phone: '1916', hours: '24/7' },
      ],
    },
    {
      category: 'Helplines',
      items: [
        { name: 'Animal Poison Control', phone: '1800-425-4732', hours: '24/7' },
        { name: 'Pet Loss Support', phone: '1800-456-7890', hours: '9am-9pm' },
        { name: 'Animal Welfare Board', phone: '1800-112-800', hours: 'Mon-Fri 9-6' },
      ],
    },
  ];

  const emergencyChecklist = [
    'Keep calm and assess the situation',
    'Ensure your safety first',
    'Check if animal is breathing',
    'Look for obvious injuries or bleeding',
    'Check mouth for obstructions',
    'Feel for pulse (inside thigh)',
    'Check gums (should be pink, not white/blue)',
    'Keep animal warm and quiet',
    'Call emergency number immediately',
    'Do not give food or water',
    'Prepare for transport to vet',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Emergency Contacts</h1>
      <p className="text-gray-600 mb-8">Immediate help for pet emergencies</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {contacts.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((contact, contactIdx) => (
                  <div key={contactIdx} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-bold">{contact.name}</div>
                      <div className="text-sm text-gray-600">{contact.hours}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">{contact.phone}</div>
                      <button className="text-sm bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 mt-1">
                        Call Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">Emergency Checklist</h3>
            <ul className="space-y-2">
              {emergencyChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Save These Numbers</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">022-2789-4567</div>
                <div className="text-sm text-gray-600">PawHaven Emergency Line</div>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
                Add to Phone Contacts
              </button>
              <button className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-50">
                Print Emergency Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}