// app/community/forum/page.tsx
export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
      <p className="text-gray-600 mb-8">Join discussions, ask questions, and share experiences with other pet lovers.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Adoption Stories', 'Training Tips', 'Health Questions', 'Behavior Issues', 'Product Reviews', 'Local Events'].map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <p className="text-gray-600 mb-4">Latest discussions and questions</p>
            <button className="text-blue-600 hover:underline">Browse Topics →</button>
          </div>
        ))}
      </div>
    </div>
  );
}