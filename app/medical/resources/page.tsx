export default function MedicalResourcesPage() {
  const resources = [
    {
      category: 'First Aid',
      items: [
        { title: 'Basic Pet First Aid Guide', type: 'PDF', pages: 12 },
        { title: 'Emergency CPR for Pets', type: 'Video', duration: '8:45' },
        { title: 'Common Household Toxins', type: 'Infographic' },
        { title: 'Wound Care Instructions', type: 'PDF', pages: 6 },
      ],
    },
    {
      category: 'Preventive Care',
      items: [
        { title: 'Vaccination Schedule Guide', type: 'PDF', pages: 8 },
        { title: 'Parasite Prevention Chart', type: 'Infographic' },
        { title: 'Dental Care at Home', type: 'Video', duration: '12:30' },
        { title: 'Nutrition & Diet Guide', type: 'PDF', pages: 15 },
      ],
    },
    {
      category: 'Common Conditions',
      items: [
        { title: 'Skin Problems in Pets', type: 'PDF', pages: 10 },
        { title: 'Digestive Issues Guide', type: 'PDF', pages: 8 },
        { title: 'Senior Pet Care', type: 'PDF', pages: 14 },
        { title: 'Allergy Management', type: 'PDF', pages: 9 },
      ],
    },
    {
      category: 'Emergency Preparedness',
      items: [
        { title: 'Disaster Preparedness Kit', type: 'Checklist' },
        { title: 'Emergency Evacuation Plan', type: 'Template' },
        { title: 'Pet First Aid Kit Checklist', type: 'Checklist' },
        { title: 'Emergency Contacts Template', type: 'Template' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Medical Resources</h1>
      <p className="text-gray-600 mb-8">Educational materials for pet health and care</p>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <div className="text-red-500">⚠️</div>
          <div className="ml-3">
            <p className="font-bold">Important Disclaimer</p>
            <p className="text-sm">
              These resources are for educational purposes only. Always consult a 
              veterinarian for medical advice and emergencies.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((category, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-600">
                      {item.type} {item.pages && `• ${item.pages} pages`} 
                      {item.duration && `• ${item.duration}`}
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Veterinary Partner Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Vashi Pet Hospital', discount: '20%', phone: '022-2789-1234' },
            { name: 'Navi Mumbai Vet Clinic', discount: '15%', phone: '022-2765-4321' },
            { name: 'Animal Care Center', discount: '10%', phone: '022-2743-9876' },
          ].map((clinic, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-2">{clinic.name}</h3>
              <div className="mb-4">
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">
                  {clinic.discount} discount for PawHaven adopters
                </span>
              </div>
              <div className="text-gray-600">Phone: {clinic.phone}</div>
              <button className="mt-4 text-blue-600 hover:underline">
                Book Appointment →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}