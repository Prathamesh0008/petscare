'use client';

import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    adopterName: 'Priya Sharma',
    animalName: 'Max',
    animalType: 'dog',
    quote:
      'Adopting Max was the best decision we ever made. He has brought so much joy to our family. The shelter staff were incredibly supportive throughout the adoption process.',
    rating: 5,
    adopterImage: '/testimonials/priya.jpg',
  },
  {
    id: '2',
    adopterName: 'Rahul Mehta',
    animalName: 'Luna',
    animalType: 'cat',
    quote:
      'Luna fit into our home perfectly. She is calm, affectionate, and has made our house feel complete.',
    rating: 5,
    adopterImage: '/testimonials/rahul.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Happy Adoption Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <FaQuoteLeft className="text-blue-100 text-4xl absolute top-6 left-6" />

              <p className="text-gray-700 mb-6 relative z-10">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                {t.adopterImage ? (
                  <Image
                    src={t.adopterImage}
                    alt={t.adopterName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    👤
                  </div>
                )}

                <div>
                  <p className="font-semibold">
                    {t.adopterName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Adopted {t.animalType === 'dog' ? '🐕' : '🐈'} {t.animalName}
                  </p>

                  {t.rating && (
                    <div className="flex mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 text-sm"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
