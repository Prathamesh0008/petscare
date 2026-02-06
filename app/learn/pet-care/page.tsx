// app/learn/pet-care/page.tsx
export default function PetCarePage() {
  const guides = [
    { title: 'Nutrition Basics', category: 'Feeding', duration: '10 min' },
    { title: 'Exercise Needs', category: 'Activity', duration: '8 min' },
    { title: 'Grooming Guide', category: 'Care', duration: '15 min' },
    { title: 'Socialization', category: 'Behavior', duration: '12 min' },
    { title: 'Senior Pet Care', category: 'Special Needs', duration: '20 min' },
    { title: 'First Aid Basics', category: 'Health', duration: '25 min' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Pet Care Guides</h1>
      <p className="text-gray-600 mb-8">Comprehensive guides for keeping your pet healthy and happy.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 text-2xl mb-4">📖</div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{guide.title}</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{guide.category}</span>
            </div>
            <p className="text-gray-600 mb-4">Complete guide covering all aspects of {guide.title.toLowerCase()}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{guide.duration} read</span>
              <button className="text-green-600 hover:underline">Read Guide →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}