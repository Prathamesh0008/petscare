// app/community/advice/page.tsx
export default function AdvicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Pet Care Advice</h1>
      <p className="text-gray-600 mb-8">Expert advice and tips for pet owners.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {['Nutrition Guide', 'Training Basics', 'Health Checkups', 'Grooming Tips'].map((topic) => (
            <div key={topic} className="bg-white p-6 rounded-lg shadow mb-4">
              <h3 className="text-xl font-bold mb-2">{topic}</h3>
              <p className="text-gray-600 mb-4">Comprehensive guide covering all aspects...</p>
              <button className="text-blue-600 hover:underline">Read More →</button>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Ask an Expert</h3>
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-4">Submit Question</button>
            <p className="text-sm text-gray-600">Our veterinarians respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}