// app/learn/health/page.tsx
export default function HealthPage() {
  const topics = [
    { title: 'Vaccination Schedule', type: 'Preventative', urgency: 'Routine' },
    { title: 'Parasite Prevention', type: 'Preventative', urgency: 'Routine' },
    { title: 'Emergency Signs', type: 'Emergency', urgency: 'Urgent' },
    { title: 'Dental Care', type: 'Preventative', urgency: 'Routine' },
    { title: 'Common Illnesses', type: 'Educational', urgency: 'Important' },
    { title: 'Medication Guide', type: 'Medical', urgency: 'Important' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Health Information</h1>
      <p className="text-gray-600 mb-8">Medical information and resources for pet health.</p>
      
      <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4">
        <div className="font-bold">⚠️ Disclaimer</div>
        <p className="text-sm">This information is for educational purposes only. Always consult a veterinarian for medical advice.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="text-red-600 text-2xl">🏥</div>
              <span className={`px-2 py-1 text-xs rounded ${
                topic.urgency === 'Urgent' ? 'bg-red-100 text-red-800' :
                topic.urgency === 'Important' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {topic.urgency}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
            <p className="text-gray-600 mb-4">{topic.type} care information</p>
            <button className="text-red-600 hover:underline">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}