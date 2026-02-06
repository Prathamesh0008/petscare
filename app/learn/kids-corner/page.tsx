// app/learn/kids-corner/page.tsx
export default function KidsCornerPage() {
  const activities = [
    { title: 'Coloring Pages', age: '3+', type: 'Art' },
    { title: 'Pet Word Search', age: '6+', type: 'Puzzle' },
    { title: 'Animal Quiz', age: '8+', type: 'Game' },
    { title: 'Pet Care Chart', age: '5+', type: 'Educational' },
    { title: 'Match the Animal', age: '4+', type: 'Game' },
    { title: 'Story Time', age: '3+', type: 'Reading' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Kids Corner</h1>
      <p className="text-gray-600 mb-8">Fun and educational activities for children.</p>
      
      <div className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">🐾 Welcome Animal Friends! 🐾</h2>
        <p className="text-lg">Learn about pets through fun games, stories, and activities!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="text-yellow-500 text-3xl mb-4">
              {activity.type === 'Art' ? '🎨' :
               activity.type === 'Puzzle' ? '🧩' :
               activity.type === 'Game' ? '🎮' :
               activity.type === 'Educational' ? '📚' : '📖'}
            </div>
            <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Age {activity.age}</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{activity.type}</span>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Download Activity
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}