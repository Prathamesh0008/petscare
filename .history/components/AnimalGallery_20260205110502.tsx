'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface AnimalGalleryProps {
  images: string[];
  animalName: string;
}

export default function AnimalGallery({ images, animalName }: AnimalGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 rounded-2xl overflow-hidden">
        <Image
          src={images[selectedImage] || '/placeholder-animal.jpg'}
          alt={`${animalName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => setIsModalOpen(true)}
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Next image"
        >
          <FaChevronRight className="text-gray-800" />
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {selectedImage + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index ? 'border-amber-500' : 'border-transparent'
            }`}
          >
            <Image
              src={image || '/placeholder-animal.jpg'}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 16vw"
            />
          </button>
        ))}
      </div>
      
      {/* Modal for fullscreen view */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl p-2 hover:text-amber-500"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-4 hover:text-amber-500"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
            <Image
              src={images[selectedImage] || '/placeholder-animal.jpg'}
              alt={`${animalName} - Fullscreen view`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-4 hover:text-amber-500"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}