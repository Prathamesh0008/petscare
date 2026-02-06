import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Animal {
  id: string;
  name: string;
  type: string;
  description?: string;
  images?: string[];
}

// MOCK DATA (replace with API later)
const animals: Animal[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'Dog',
    description: 'Friendly and playful rescued dog.',
    images: ['/animals/dog1.jpg', '/animals/dog2.jpg'],
  },
  {
    id: '2',
    name: 'Mittens',
    type: 'Cat',
    description: 'Calm and loving indoor cat.',
    images: ['/animals/cat1.jpg'],
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function AnimalDetailsPage({ params }: PageProps) {
  const animal = animals.find(a => a.id === params.id);

  if (!animal) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
      <p className="text-gray-600 mb-6">{animal.type}</p>

      {animal.description && (
        <p className="max-w-2xl text-gray-700 mb-10">
          {animal.description}
        </p>
      )}

      {/* Images */}
      {animal.images && animal.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
