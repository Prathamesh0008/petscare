'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    adopterName: 'Priya Sharma',
    animalName: 'Max',
    animalType: 'dog',
    quote: 'Adopting Max was the best decision we ever made. He has brought so much joy to our family. The shelter staff were incredibly supportive throughout the adoption process.',
    date: '2024-01-15',
    imageUrl: '/testimonials/priya.jpg',
    rating: 5,
  },
  {
    id: '2',
    adopterName: 'Rajesh Patel',
    animalName: 'Luna',
    animalType: 'cat',
    quote: 'Luna has settled into our home perfectly. She is such a gentle soul. Thank you PawHaven for taking such good care of her before we met.',
    date: '2024-02-20',
    imageUrl: '/testimonials/rajesh.jpg',
    rating: 5,
  },
  {
    id: '3',
    adopterName: 'Ananya Singh',
    animalName: 'Rocky',
    animalType: 'dog',
    quote: 'Rocky was shy at first, but with patience and love, he has become the most loyal companion. The adoption process was smooth and transparent.',
    date: '2024-03-10',
    imageUrl: '/testimonials/ananya.jpg',
    rating: 5,
  },
  {
    id: '4',
    adopterName: 'Vikram Mehta',
    animalName: 'Mittens',
    animalType: 'cat',
    quote: 'Mittens is exactly what our family needed. She is playful, affectionate, and gets along great with our kids. Highly recommend adopting from PawHaven!',
    date: '2024-01-30',
    imageUrl: '/testimonials/vikram.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Happy Tails & Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read heartwarming stories from families who found their perfect companions at PawHaven
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.imageUrl || '/placeholder-avatar.jpg'}
                  alt={currentTestimonial.adopterName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 192px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white p-3 rounded-full">
                {currentTestimonial.animalType === 'dog' ? '🐕' : '🐈'}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xl ${i < currentTestimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-3xl text-amber-200 mb-4" />
              
              <p className="text-gray-700 text-lg mb-6 italic">
                "{currentTestimonial.quote}"
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {currentTestimonial.adopterName}
                </h4>
                <p className="text-gray-600">
                  Adopted {currentTestimonial.animalName} ({currentTestimonial.animalType})
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {new Date(currentTestimonial.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-8 border-t">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">120+</div>
            <div className="text-gray-600">Adoptions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Volunteers</div>
          </div>
        </div>
      </div>
    </div>
  );
}