'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhotoGalleryProps {
  images: string[];
  title?: string;
}

export default function PhotoGallery({ images, title = 'Photo Gallery' }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex !== null) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    }
  };

  // Add keyboard event listener
  useState(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown as any);
      return () => window.removeEventListener('keydown', handleKeyDown as any);
    }
  });

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl z-10"
          >
            ✕
          </button>
          
          <button
            onClick={goToPrevious}
            disabled={selectedIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl disabled:opacity-50"
          >
            ←
          </button>
          
          <button
            onClick={goToNext}
            disabled={selectedIndex === images.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl