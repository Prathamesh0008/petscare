import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAnimalById } from '@/lib/animals';

interface PageProps {
  params: { id: string };
}

export default function AnimalGalleryPage({ params }: PageProps) {
  const animal = getAnimalById(params.id);

  if (!animal) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        {animal.name} Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animal.imageUrls.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-square rounded-lg overflow-hidden shadow"
          >
            <Image
              src={img}
              alt={`${animal.name} ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
