'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { animals } from '@/lib/animals';
import { Animal } from '@/types/animal';

import AdoptionForm from '@/components/AdoptionForm';
import ShareButtons from '@/components/ShareButtons';
import ARViewer from '@/components/ARViewer';

interface PageProps {
  params: {
    id: string;
  };
}

const statusColors: Record<Animal['status'], string> = {
  available: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  adopted: 'bg-blue-100 text-blue-800',
  fostered: 'bg-purple-100 text-purple-800',
};

export default function AnimalPage({ params }: PageProps) {
  const animal = animals.find(a => a.id === params.id);

  if (!animal) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <div className="mb-6">
        <Link href="/animals" className="text-blue-600 hover:underline">
          ← Back to All Animals
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{animal.name}</h1>

                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[animal.status]}`}
                  >
                    {animal.status.charAt(0).toUpperCase() +
                      animal.status.slice(1)}
                  </span>
                  <span className="text-gray-600">
                    ID: {animal.id}
                  </span>
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
                  <div className="flex items-center justify-center h-full text-6xl">
                    {animal.type === 'dog' ? '🐕' : '🐈'}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {animal.images && (
                <div className="flex gap-2 overflow-x-auto">
                  {animal.images.map((img, idx) => (
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
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Stat label="Years Old" value={animal.age} />
              <Stat label="Breed" value={animal.breed} />
              <Stat label="Gender" value={animal.gender} />
              <Stat label="Adoption Fee" value={`₹${animal.adoptionFee}`} />
            </div>

            {/* Description */}
            <Section title={`About ${animal.name}`}>
              <p className="text-gray-700">{animal.description}</p>
            </Section>

            {/* Traits & Care */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <TagSection
                title="Personality Traits"
                items={animal.traits}
                color="blue"
              />
              <TagSection
                title="Special Care Needs"
                items={animal.careNeeds}
                color="yellow"
              />
            </div>

            {/* Medical */}
            <Section title="Medical Information">
              <ul className="space-y-2">
                <li>✓ Vaccinations up to date</li>
                <li>✓ Spayed / Neutered</li>
                <li>✓ Dewormed</li>
              </ul>

              <Link
                href={`/animals/${animal.id}/medical`}
                className="inline-block mt-3 text-blue-600 hover:underline text-sm"
              >
                View full medical records →
              </Link>
            </Section>
          </div>

          {/* AR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ARViewer animalType={animal.type} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
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
              <ActionButton label="Schedule a Visit" color="green" />
              <ActionButton label="Add to Favorites" outline="blue" />
              <ActionButton label="Foster Instead" outline="purple" />

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

/* ---------- Small UI helpers ---------- */

function Stat({ label, value }: { label: string; value: any }) {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg">
      <div className="text-2xl font-bold text-blue-600">
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      {children}
    </div>
  );
}

function TagSection({
  title,
  items,
  color,
}: {
  title: string;
  items?: string[];
  color: 'blue' | 'yellow';
}) {
  if (!items?.length) return null;

  const colorMap = {
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-sm ${colorMap[color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ActionButton({
  label,
  color,
  outline,
}: {
  label: string;
  color?: 'green';
  outline?: 'blue' | 'purple';
}) {
  if (outline) {
    return (
      <button
        className={`w-full border-2 border-${outline}-600 text-${outline}-600 py-3 rounded-lg hover:bg-${outline}-50`}
      >
        {label}
      </button>
    );
  }

  return (
    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
      {label}
    </button>
  );
}
