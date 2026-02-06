'use client';

import { AnimalType } from '@/types';

interface ARViewerProps {
  animalType: AnimalType;
}

export default function ARViewer({ animalType }: ARViewerProps) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-bold mb-2">
        View {animalType === 'dog' ? 'Dog' : 'Cat'} in AR
      </h3>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-10">
        <p className="text-gray-600 mb-4">
          Augmented Reality preview coming soon
        </p>

        <div className="text-6xl">
          {animalType === 'dog' ? '🐕' : '🐈'}
        </div>
      </div>
    </div>
  );
}
