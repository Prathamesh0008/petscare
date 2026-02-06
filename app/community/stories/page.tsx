// app/community/stories/page.tsx
export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Success Stories</h1>
      <p className="text-gray-600 mb-8">Heartwarming stories from our adoption community.</p>
      
      <div className="space-y-8">
        {[1, 2, 3].map((story) => (
          <div key={story} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Max's Happy Home</h3>
                <p className="text-gray-600">Adopted 6 months ago by the Johnson family</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Max was shy when we first brought him home, but now he's the life of the party! 
              He loves playing fetch and cuddling on the couch. Best decision we ever made."
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}