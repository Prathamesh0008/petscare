// app/foster/stories/page.tsx
export default function FosterStoriesPage() {
  const stories = [
    { name: 'Sarah M.', duration: '2 years', pets: 15, quote: 'Fostering has changed my life as much as it has changed theirs.' },
    { name: 'The Chen Family', duration: '8 months', pets: 7, quote: 'Our children have learned so much about responsibility and compassion.' },
    { name: 'James R.', duration: '5 years', pets: 42, quote: 'Every goodbye is hard, but knowing they found forever homes makes it worth it.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Foster Success Stories</h1>
      <p className="text-gray-600 mb-8">Meet the amazing people who open their homes and hearts to animals in need.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">{story.name}</h3>
              <div className="text-gray-600">Fostering for {story.duration}</div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-blue-600">{story.pets}</div>
              <div className="text-gray-600">pets fostered</div>
            </div>
            
            <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
              "{story.quote}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}