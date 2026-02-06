'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { animals } from '@/lib/animals';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function AnimalGalleryPage({ params }: PageProps) {
  const animal = animals.find(a => a.id === params.id);
  
  if (!animal) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/animals/${animal.id}`} className="text-blue-600 hover:underline">
          ← Back to {animal.name}
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">{animal.name}'s Photo Gallery</h1>
      <p className="text-gray-600 mb-8">Photos of {animal.name} throughout their time at the shelter</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animal.images?.map((img, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-square bg-gray-200">
              <Image
                src={img}
                alt={`${animal.name} photo ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600">Photo {idx + 1}</div>
            </div>
          </div>
        ))}
        
        {/* Placeholder for more photos */}
        {[1, 2, 3].map((i) => (
          <div key={`placeholder-${i}`} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📷</div>
              <div className="text-gray-500">More photos coming soon</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}