// app/success-stories/page.tsx
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { FaHeart, FaHome, FaStar, FaArrowRight, FaPaw, FaCheckCircle } from 'react-icons/fa';

const successStories = [
  {
    id: '1',
    before: 'Found on streets with severe malnutrition',
    after: 'Now a healthy, happy family member',
    animalName: 'Buddy',
    adopterName: 'The Sharma Family',
    image: '/success/buddy.jpg',
    duration: '6 months ago',
  },
  {
    id: '2',
    before: 'Rescued from abusive situation',
    after: 'Now enjoys daily walks and cuddles',
    animalName: 'Daisy',
    adopterName: 'Mrs. Mehta',
    image: '/success/daisy.jpg',
    duration: '3 months ago',
  },
  {
    id: '3',
    before: 'Abandoned kitten found in a box',
    after: 'Now the queen of her new home',
    animalName: 'Misty',
    adopterName: 'The Patil Family',
    image: '/success/misty.jpg',
    duration: '8 months ago',
  },
  {
    id: '4',
    before: 'Injured in road accident',
    after: 'Fully recovered and living her best life',
    animalName: 'Roxy',
    adopterName: 'The Singh Family',
    image: '/success/roxy.jpg',
    duration: '1 year ago',
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FaHeart className="text-[#b87d5e]" />
            <span className="text-sm font-medium">Happy Endings</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Success <span className="text-[#b87d5e]">Stories</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Heartwarming tales of transformation and love. See how our rescued animals have found their forever homes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
       

        {/* Transformation Stories */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-semibold text-sm mb-4">
              Transformations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c4a3e] mb-4">
              Before & After
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every pet deserves a second chance. See their incredible journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#2c4a3e]/10 group"
              >
                <div className="h-48 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#b87d5e] rounded-full blur-3xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30" />
                      <FaPaw className="relative text-6xl text-white opacity-50" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-[#b87d5e]" />
                      <span className="text-sm text-gray-500">{story.duration}</span>
                    </div>
                    <div className="bg-[#b87d5e]/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-[#b87d5e]">Success Story</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2c4a3e] mb-4">{story.animalName}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-[#b87d5e] font-medium mb-2">
                        <span className="w-2 h-2 bg-[#b87d5e] rounded-full"></span>
                        <span className="text-sm uppercase tracking-wider">Before</span>
                      </div>
                      <p className="text-gray-600">{story.before}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-[#2c4a3e] font-medium mb-2">
                        <FaStar className="text-[#b87d5e] text-sm" />
                        <span className="text-sm uppercase tracking-wider">After</span>
                      </div>
                      <p className="text-gray-600">{story.after}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Adopted by</div>
                      <div className="font-semibold text-[#2c4a3e] flex items-center gap-2">
                        <FaCheckCircle className="text-[#b87d5e] text-sm" />
                        {story.adopterName}
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-[#b87d5e]/10 cursor-pointer rounded-full flex items-center justify-center group-hover:bg-[#b87d5e] transition-colors duration-300">
                      <FaHome className="text-[#b87d5e] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] p-8 md:p-12 mb-16 md:mb-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Adoption Success Rate
            </h2>
            <div className="text-7xl md:text-8xl font-bold text-white mb-4">98%</div>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Of our adoptions result in successful, long-term placements
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">120+</div>
                <div className="text-[#b87d5e] text-sm md:text-base">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15</div>
                <div className="text-[#b87d5e] text-sm md:text-base">Days Trial Period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-[#b87d5e] text-sm md:text-base">Post-Adoption Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-[#b87d5e] text-sm md:text-base">Satisfaction Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-[#2c4a3e]/10 p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#2c4a3e] rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-[#b87d5e]/10 px-4 py-2 rounded-full mb-6">
              <FaHeart className="text-[#b87d5e]" />
              <span className="text-sm font-semibold text-[#b87d5e]">Start Your Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c4a3e] mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Join the hundreds of families who have found their perfect companions at PawHeaven Vashi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/animals"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <FaPaw className="group-hover:scale-110 transition-transform" />
                <span>Meet Available Animals</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/adopt"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-lg hover:bg-[#2c4a3e] hover:text-white transition-all duration-300"
              >
                <FaHome />
                <span>Start Adoption Process</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-[#b87d5e] text-xs" />
                </div>
                <span className="text-sm text-gray-600">No-Kill Shelter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-[#b87d5e] text-xs" />
                </div>
                <span className="text-sm text-gray-600">Vet Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-[#b87d5e] text-xs" />
                </div>
                <span className="text-sm text-gray-600">Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}