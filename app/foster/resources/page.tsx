// app/foster/resources/page.tsx
export default function FosterResourcesPage() {
  const resources = [
    { title: 'Foster Care Handbook', description: 'Complete guide to fostering' },
    { title: 'Medical Care Guide', description: 'Common medical procedures' },
    { title: 'Behavior Training', description: 'Working with shy or anxious animals' },
    { title: 'Emergency Contacts', description: '24/7 support numbers' },
    { title: 'Supply Checklist', description: 'Everything you need' },
    { title: 'Adoption Process', description: 'How adoptions work' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Foster Resources</h1>
      <p className="text-gray-600 mb-8">Everything you need to be a successful foster parent.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 text-2xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <button className="text-blue-600 hover:underline">Download PDF →</button>
          </div>
        ))}
      </div>
    </div>
  );
}