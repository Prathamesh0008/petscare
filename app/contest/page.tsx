// app/contest/page.tsx
export default function ContestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Pet Photo Contest</h1>
      <p className="text-gray-600 mb-8">Submit your pet's photo for a chance to win prizes!</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Current Contest: "Best Trick"</h2>
            <p className="mb-4">Show us your pet's most impressive trick! Winner gets a year's supply of pet food.</p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div>Days Left</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">342</div>
                <div>Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$500</div>
                <div>Grand Prize</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
              <div key={photo} className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-4xl">🐶</div>
                    <div className="text-sm">Entry #{photo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Submit Your Entry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pet's Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <div>Drag & drop or click to upload</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full p-2 border rounded" rows={3} />
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                Submit Entry
              </button>
            </form>
          </div>
          
          <div className="mt-8">
            <h4 className="font-bold mb-4">Previous Winners</h4>
            <div className="space-y-4">
              {['March: Cutest Puppy', 'February: Best Friends', 'January: Sleeping Beauty'].map((winner) => (
                <div key={winner} className="flex items-center bg-gray-50 p-3 rounded">
                  <div className="text-2xl mr-3">🏆</div>
                  <div>{winner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}