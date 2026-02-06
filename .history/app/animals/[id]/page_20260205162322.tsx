'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { animals } from '@/lib/animals';
import AdoptionForm from '@/components/AdoptionForm';
import ShareButtons from '@/components/ShareButtons';
import ARViewer from '@/components/ARViewer';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function AnimalPage({ params }: PageProps) {
  const animal = animals.find(a => a.id === params.id);
  
  if (!animal) {
    notFound();
  }

  const statusColors = {
    available: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    adopted: 'bg-blue-100 text-blue-800',
    fostered: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/animals" className="text-blue-600 hover:underline">
          ← Back to All Animals
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Animal Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{animal.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[animal.status as keyof typeof statusColors]}`}>
                    {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
                  </span>
                  <span className="text-gray-600">ID: {animal.id}</span>
                </div>
              </div>
              <ShareButtons animal={animal} />
            </div>

            {/* Main Image */}
            <div className="mb-6">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {animal.images?.[0] ? (
                  <Image
                    src={animal.images[0]}
                    alt={animal.name}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-6xl">
                      {animal.type === 'dog' ? '🐕' : '🐈'}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {animal.images?.map((img, idx) => (
                  <div key={idx} className="w-20 h-20 bg-gray-300 rounded overflow-hidden flex-shrink-0">
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

            {/* Animal Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{animal.age}</div>
                <div className="text-sm text-gray-600">Years Old</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{animal.breed}</div>
                <div className="text-sm text-gray-600">Breed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{animal.gender}</div>
                <div className="text-sm text-gray-600">Gender</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">₹{animal.adoptionFee}</div>
                <div className="text-sm text-gray-600">Adoption Fee</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">About {animal.name}</h2>
              <p className="text-gray-700">{animal.description}</p>
            </div>

            {/* Personality & Care */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Personality Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {animal.traits?.map((trait, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Special Care Needs</h3>
                <div className="flex flex-wrap gap-2">
                  {animal.careNeeds?.map((need, idx) => (
                    <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Medical Info */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Medical Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Vaccinations up to date</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Spayed/Neutered</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Dewormed</span>
                  </li>
                </ul>
                <Link 
                  href={`/animals/${animal.id}/medical`}
                  className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                >
                  View full medical records →
                </Link>
              </div>
            </div>
          </div>

          {/* AR Viewer */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ARViewer animalType={animal.type} />
          </div>
        </div>

        {/* Right Column - Adoption Form */}
        <div>
          <div className="sticky top-6">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Adopt {animal.name}</h2>
              <AdoptionForm animalId={animal.id} animalName={animal.name} />
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Schedule a Visit
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
                Add to Favorites
              </button>
              <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50">
                Foster Instead
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