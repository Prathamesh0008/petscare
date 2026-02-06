import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Animal } from '@/types/animal';

const animals: Animal[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'Dog',
    description: 'Friendly rescued dog',
    images: ['/animals/dog1.jpg', '/animals/dog2.jpg'],
  },
  {
    id: '2',
    name: 'Mittens',
    type: 'Cat',
    description: 'Calm indoor cat',
    images: ['/animals/cat1.jpg'],
  },
];

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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        {animal.name} Gallery
      </h1>

      {animal.images && animal.images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animal.images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow"
            >
              <Image
                src={img}
                alt={`${animal.name} image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No images available for this animal.
        </p>
      )}
    </div>
  );
}
