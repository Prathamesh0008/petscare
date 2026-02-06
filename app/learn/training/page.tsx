// app/learn/training/page.tsx
export default function TrainingPage() {
  const videos = [
    { title: 'Basic Commands', instructor: 'Sarah Johnson', duration: '15:23' },
    { title: 'Leash Training', instructor: 'Mike Chen', duration: '22:10' },
    { title: 'Potty Training', instructor: 'Dr. Emily White', duration: '18:45' },
    { title: 'Socialization', instructor: 'Maria Garcia', duration: '25:30' },
    { title: 'Trick Training', instructor: 'Alex Turner', duration: '20:15' },
    { title: 'Behavior Issues', instructor: 'Dr. James Wilson', duration: '30:45' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Training Videos</h1>
      <p className="text-gray-600 mb-8">Professional training videos for pets of all ages and breeds.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-4xl mb-2">▶️</div>
                <div className="text-white">{video.duration}</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">with {video.instructor}</span>
                <button className="text-blue-600 hover:underline">Watch →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}