'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimalCard from '@/components/AnimalCard';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    { id: '1', name: 'Max', type: 'dog', breed: 'Golden Retriever', age: 2, status: 'available' },
    { id: '2', name: 'Luna', type: 'cat', breed: 'Siamese', age: 1, status: 'available' },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/profile" className="text-blue-600 hover:underline">
          ← Back to Profile
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">My Favorite Animals</h1>
      <p className="text-gray-600 mb-8">Animals you've saved for later</p>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">❤️</div>
          <h3 className="text-xl font-bold mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-6">Start saving animals you're interested in!</p>
          <Link
            href="/animals"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Animals
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((animal) => (
              <div key={animal.id} className="relative">
                <AnimalCard animal={animal} />
                <button
                  onClick={() => removeFavorite(animal.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-50"
                  title="Remove from favorites"
                >
                  ❤️
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-gray-600">
              {favorites.length} {favorites.length === 1 ? 'animal' : 'animals'} saved
            </div>
            <Link
              href="/animals"
              className="text-blue-600 hover:underline"
            >
              Browse more animals →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}