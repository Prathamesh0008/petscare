'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnimalSearch() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/animals?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for pets by name, breed, or description..."
          className="w-full p-4 pl-12 pr-12 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-gray-600">Quick search:</span>
        {['Puppies', 'Kittens', 'Golden Retriever', 'Senior Dogs', 'Cats'].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSearch(tag)}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
          >
            {tag}
          </button>
        ))}
      </div>
    </form>
  );
}