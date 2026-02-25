// components/Testimonials.tsx
'use client';

import { FaQuoteLeft, FaStar, FaHeart, FaArrowRight, FaPaw, FaUserCheck, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
    date: 'Adopted 3 months ago',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    adopterName: 'Rahul Mehta',
    animalName: 'Luna',
    animalType: 'Cat',
    quote: 'Luna fit into our home perfectly. She is calm, affectionate, and has made our house feel complete. The adoption process was smooth and well-guided.',
    rating: 5,
    location: 'Kharghar, Navi Mumbai',
    date: 'Adopted 2 months ago',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100&h=100&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    adopterName: 'Anjali Patel',
    animalName: 'Rocky',
    animalType: 'Dog',
    quote: 'Rocky was a perfect match for our active family. His energy and love have transformed our home. Thank you PawHaven for this beautiful addition to our family.',
    rating: 5,
    location: 'Seawoods, Navi Mumbai',
    date: 'Adopted 5 months ago',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2c4a3e] rounded-full blur-3xl" />
      </div>

      {/* Paw Print Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm20-30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5z" fill="%232c4a3e" fill-opacity="0.2"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
              <FaHeart className="text-2xl text-[#b87d5e]" />
            </div>
            <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
              Happy Families
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
            What Our <span className="text-[#b87d5e]">Adopters</span> Say
          </h2>
          
          <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
            Hear from families who found their perfect companions through PawHaven and the joy they've brought to their homes.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-[#b87d5e]/10 group-hover:text-[#b87d5e]/20 transition-colors duration-500">
                  <FaQuoteLeft />
                </div>

                {/* Adopter Image & Rating */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.adopterName}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors duration-300">
                        {testimonial.adopterName}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-[#b87d5e]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#2c4a3e]/80 italic leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Pet Info */}
                <div className="inline-flex items-center gap-2 bg-[#b87d5e]/10 px-4 py-2 rounded-full mb-4">
                  <FaPaw className="text-[#b87d5e] text-xs" />
                  <span className="text-sm font-medium text-[#b87d5e]">
                    Adopted {testimonial.animalName} • {testimonial.animalType}
                  </span>
                </div>

                {/* Location & Date */}
                <div className="flex items-center gap-4 text-sm text-[#2c4a3e]/60">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-xs" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-xs" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>

                {/* Decorative Number */}
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#2c4a3e]/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Stats Card */}
          <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] rounded-3xl p-1 mb-8">
            <div className="bg-white rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Happy Adoptions */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center">
                    <FaUserCheck className="text-3xl text-[#b87d5e]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2c4a3e]">120+</div>
                    <div className="text-sm text-[#2c4a3e]/70">Happy Adoptions</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-[#2c4a3e]/10" />

                {/* Average Rating */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#b87d5e]">4.9</span>
                      <FaStar className="text-sm text-[#b87d5e]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2c4a3e]">★★★★★</div>
                    <div className="text-sm text-[#2c4a3e]/70">Average Rating</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-[#2c4a3e]/10" />

                {/* Years of Service */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center">
                    <FaCalendarAlt className="text-3xl text-[#b87d5e]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2c4a3e]">5+</div>
                    <div className="text-sm text-[#2c4a3e]/70">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/success-stories">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] text-white font-semibold rounded-xl hover:from-[#9e6a4f] hover:to-[#8a5a42] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                <span>Read More Stories</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/adopt">
              <button className="group px-8 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <FaHeart />
                <span>Start Your Adoption Journey</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




