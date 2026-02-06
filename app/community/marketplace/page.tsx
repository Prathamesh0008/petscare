// app/community/marketplace/page.tsx
export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Pet Supplies Marketplace</h1>
      <p className="text-gray-600 mb-8">Buy, sell, or trade pet supplies with local community members.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Pet Carriers', 'Food & Treats', 'Toys & Enrichment', 'Grooming Supplies', 'Bedding', 'Medications', 'Training Aids', 'Miscellaneous'].map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <p className="text-gray-600 text-sm mb-4">Browse listings</p>
            <button className="text-blue-600 text-sm hover:underline">View Items →</button>
          </div>
        ))}
      </div>
    </div>
  );
}