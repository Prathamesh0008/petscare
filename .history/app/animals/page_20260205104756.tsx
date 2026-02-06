import AnimalCard from '@/components/AnimalCard';
import AnimalFilters from '@/components/AnimalFilters';

// Mock data - replace with actual database
const animals = [
  {
    id: '1',
    name: 'Max',
    type: 'dog',
    breed: 'Indian Pariah',
    age: '2 years',
    gender: 'male',
    imageUrl: '/animals/max.jpg',
    isUrgent: true,
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    breed: 'Domestic Shorthair',
    age: '1.5 years',
    gender: 'female',
    imageUrl: '/animals/luna.jpg',
    isUrgent: false,
  },
  {
    id: '3',
    name: 'Rocky',
    type: 'dog',
    breed: 'Labrador Mix',
    age: '4 months',
    gender: 'male',
    imageUrl: '/animals/rocky.jpg',
    isUrgent: false,
  },
  {
    id: '4',
    name: 'Mittens',
    type: 'cat',
    breed: 'Siamese Mix',
    age: '3 years',
    gender: 'female',
    imageUrl: '/animals/mittens.jpg',
    isUrgent: true,
  },
  {
    id: '5',
    name: 'Bruno',
    type: 'dog',
    breed: 'German Shepherd Mix',
    age: '5 years',
    gender: 'male',
    imageUrl: '/animals/bruno.jpg',
    isUrgent: false,
  },
  {
    id: '6',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Persian Mix',
    age: '2 years',
    gender: 'male',
    imageUrl: '/animals/whiskers.jpg',
    isUrgent: false,
  },
];

export default function AnimalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Furry Friends</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Each animal at PawHaven Vashi is waiting for a loving home. 
            Browse through our rescues and find your perfect companion.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <AnimalFilters />
        
        {/* Urgent Cases Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.198 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700">Urgent Cases Need Homes</h3>
              <p className="text-red-600">
                These animals need immediate adoption. Please consider giving them a forever home.
              </p>
            </div>
          </div>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>

        {/* Empty State */}
        {animals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No animals found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more animals</p>
          </div>
        )}

        {/* Adoption Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Ready to Adopt?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Meet & Greet</h3>
              <p className="text-gray-600">Schedule a visit to meet your potential pet</p>
            </div>
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Application</h3>
              <p className="text-gray-600">Fill out our adoption application form</p>
            </div>
            <div className="text-center">
              <div className="text-amber-500 text-4xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Home Visit</h3>
              <p className="text-gray-600">We ensure your home is pet-ready</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/adopt"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Start Adoption Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}