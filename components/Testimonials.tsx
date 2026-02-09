'use client';

import { FaQuoteLeft, FaStar, FaHeart, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const testimonials = [
  {
    id: '1',
    adopterName: 'Priya Sharma',
    animalName: 'Max',
    animalType: 'Dog',
    quote: 'Adopting Max was the best decision we ever made. He has brought so much joy to our family. The shelter staff were incredibly supportive throughout the adoption process.',
    rating: 5,
    location: 'Vashi, Navi Mumbai',
    date: 'Adopted 3 months ago'
  },
  {
    id: '2',
    adopterName: 'Rahul Mehta',
    animalName: 'Luna',
    animalType: 'Cat',
    quote: 'Luna fit into our home perfectly. She is calm, affectionate, and has made our house feel complete. The adoption process was smooth and well-guided.',
    rating: 5,
    location: 'Kharghar, Navi Mumbai',
    date: 'Adopted 2 months ago'
  },
  {
    id: '3',
    adopterName: 'Anjali Patel',
    animalName: 'Rocky',
    animalType: 'Dog',
    quote: 'Rocky was a perfect match for our active family. His energy and love have transformed our home. Thank you PawHaven for this beautiful addition to our family.',
    rating: 5,
    location: 'Seawoods, Navi Mumbai',
    date: 'Adopted 5 months ago'
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaHeart />
            <span>Happy Families</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Adopters Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from families who found their perfect companions through PawHaven.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="text-amber-100 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Adopter Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.adopterName}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Adopted {testimonial.animalName} • {testimonial.animalType}
                    </p>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                
                {/* Location & Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.location}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl px-8 py-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">120+</div>
              <div className="text-gray-700 font-medium">Happy Adoptions</div>
            </div>
            
            <div className="h-12 w-px bg-amber-200 hidden sm:block"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Read More Stories
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              href="/adopt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Start Your Adoption Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}