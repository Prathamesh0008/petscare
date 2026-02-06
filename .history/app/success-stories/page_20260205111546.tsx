import Testimonials from '@/components/Testimonials';
import { FaHeart, FaHome, FaStar } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Heartwarming tales of transformation and love. See how our rescued animals have found their forever homes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Testimonials Component */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* Transformation Stories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Transformations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaHeart className="text-red-500" />
                    <span className="text-sm text-gray-500">{story.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{story.animalName}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-red-600 font-medium mb-1">
                        <span>Before</span>
                      </div>
                      <p className="text-gray-600">{story.before}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 text-green-600 font-medium mb-1">
                        <FaStar className="text-yellow-500" />
                        <span>After</span>
                      </div>
                      <p className="text-gray-600">{story.after}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-gray-500 text-sm">Adopted by</div>
                      <div className="font-semibold text-gray-800">{story.adopterName}</div>
                    </div>
                    <div className="text-amber-600">
                      <FaHome className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Adoption Success Rate</h2>
            <div className="text-8xl font-bold mb-4">98%</div>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Of our adoptions result in successful, long-term placements
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">120+</div>
                <div className="text-green-100">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-green-100">Days Trial Period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-green-100">Post-Adoption Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-green-100">Satisfaction Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Create Your Own Success Story?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the hundreds of families who have found their perfect companions at PawHaven Vashi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/animals"
              className="btn-primary px-8 py-4"
            >
              Meet Available Animals
            </a>
            <a
              href="/adopt"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Start Adoption Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}