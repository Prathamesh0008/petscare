'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AnimalFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    breed: searchParams.get('breed') || '',
    age: searchParams.get('age') || '',
    size: searchParams.get('size') || '',
    gender: searchParams.get('gender') || '',
    status: searchParams.get('status') || 'available',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL with new filters
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    
    router.push(`/animals?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      breed: '',
      age: '',
      size: '',
      gender: '',
      status: 'available',
    });
    router.push('/animals');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Filter Animals</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Animal Type</label>
          <div className="flex gap-2">
            {['', 'dog', 'cat'].map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange('type', type)}
                className={`px-4 py-2 rounded ${filters.type === type ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {type || 'All'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Size</label>
          <div className="flex gap-2">
            {['', 'small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => handleFilterChange('size', size)}
                className={`px-4 py-2 rounded ${filters.size === size ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {size || 'All'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Age</label>
          <div className="flex gap-2">
            {['', 'puppy/kitten', 'young', 'adult', 'senior'].map((age) => (
              <button
                key={age}
                onClick={() => handleFilterChange('age', age)}
                className={`px-4 py-2 rounded ${filters.age === age ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {age || 'All'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <div className="flex gap-2">
            {['', 'male', 'female'].map((gender) => (
              <button
                key={gender}
                onClick={() => handleFilterChange('gender', gender)}
                className={`px-4 py-2 rounded ${filters.gender === gender ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {gender || 'All'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Breed (Optional)</label>
          <input
            type="text"
            value={filters.breed}
            onChange={(e) => handleFilterChange('breed', e.target.value)}
            placeholder="Enter breed..."
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
}