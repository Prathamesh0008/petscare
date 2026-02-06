import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import EmergencyBanner from '@/components/EmergencyBanner';
import AnimalCard from '@/components/AnimalCard';
import Link from 'next/link';
import { getUrgentAnimals, getAvailableAnimals } from '@/lib/animals';
import { FaArrowRight, FaHeart, FaHandsHelping, FaHome } from 'react-icons/fa';

export default function HomePage() {
  const urgentAnimals = getUrgentAnimals();
  const availableAnimals = getAvailableAnimals().slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Urgent Cases */}
        {urgentAnimals.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Urgent Cases Need Homes</h2>
                <p className="text-gray-600">These animals need immediate adoption. Can you help?</p>
              </div>
              <Link 
                href="/animals?urgent=true" 
                className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
              >
                View all urgent cases <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {urgentAnimals.slice(0, 3).map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>
        )}

        {/* Available Animals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Animals</h2>
              <p className="text-gray-600">Looking for a new furry friend? Meet our available animals.</p>
            </div>
            <Link 
              href="/animals" 
              className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
            >
              View all animals <FaArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>

        {/* How You Can Help */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How You Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Adopt</h3>
              <p className="text-gray-600 mb-6">
                Give a homeless animal a second chance at love and happiness.
              </p>
              <Link href="/adopt" className="btn-primary inline-block">
                Adopt Now
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team and make a difference in animals' lives.
              </p>
              <Link href="/volunteer" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block">
                Volunteer
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our mission with a one-time or monthly donation.
              </p>
              <Link href="/donate" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block">
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <Statistics />

        {/* Testimonials */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* Emergency Banner */}
        <EmergencyBanner />
      </div>
    </div>
  );
}