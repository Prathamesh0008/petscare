'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { animals } from '@/lib/animals';
import { Animal } from '@/types';

import AdoptionForm from '@/components/AdoptionForm';
import ShareButtons from '@/components/ShareButtons';
import ARViewer from '@/components/ARViewer';

interface PageProps {
  params: {
    id: string;
  };
}

/* ------------------ STATUS HELPERS ------------------ */

type DerivedStatus = 'available' | 'urgent' | 'adopted';

const statusColors: Record<DerivedStatus, string> = {
  available: 'bg-green-100 text-green-800',
  urgent: 'bg-red-100 text-red-800',
  adopted: 'bg-blue-100 text-blue-800',
};

function getAnimalStatus(animal: Animal): DerivedStatus {
  if (animal.isAdopted) return 'adopted';
  if (animal.isUrgent) return 'urgent';
  return 'available';
}

/* ------------------ PAGE ------------------ */

export default function AnimalPage({ params }: PageProps) {
  const animal = animals.find(a => a.id === params.id);

  if (!animal) {
    notFound();
  }

  const status = getAnimalStatus(animal);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back */}
      <div className="mb-6">
        <Link href="/animals" className="text-blue-600 hover:underline">
          ← Back to All Animals
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{animal.name}</h1>

                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>

                  <span className="text-gray-600">ID: {animal.id}</span>
                </div>
              </div>

              <ShareButtons animal={animal} />
            </div>

            {/* Main Image */}
            <div className="mb-6">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {animal.imageUrls?.[0] ? (
                  <Image
                    src={animal.imageUrls[0]}
                    alt={animal.name}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">
                    {animal.type === 'dog' ? '🐕' : '🐈'}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto">
                {animal.imageUrls.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 bg-gray-300 rounded overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={img}
                      alt={`${animal.name} ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">
                About {animal.name}
              </h2>
              <p className="text-gray-700">{animal.description}</p>
            </div>
          </div>

          {/* AR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ARViewer animalType={animal.type} />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="sticky top-6">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                Adopt {animal.name}
              </h2>
              <AdoptionForm
                animalId={animal.id}
                animalName={animal.name}
              />
            </div>

            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Schedule a Visit
              </button>

              <Link
                href={`/animals/${animal.id}/gallery`}
                className="block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 text-center"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
