import { notFound } from 'next/navigation';
import AnimalGallery from '@/components/AnimalGallery';
import AdoptionForm from '@/components/AdoptionForm';
import { getAnimalById } from '@/lib/animals';
import { 
  FaVenusMars, 
  FaCalendarAlt, 
  FaStethoscope, 
  FaSyringe, 
  FaHome, 
  FaRupeeSign,
  FaHeart
} from 'react-icons/fa';

interface AnimalPageProps {
  params: {
    id: string;
  };
}

export default function AnimalPage({ params }: AnimalPageProps) {
  const animal = getAnimalById(params.id);
  
  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
              </span>
              {animal.isUrgent && (
                <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <FaHeart /> URGENT HOME NEEDED
                </span>
              )}
            </div>
            <h1 className="text-5xl font-bold mb-4">{animal.name}</h1>
            <p className="text-xl mb-6">{animal.breed}</p>
            <p className="text-amber-100 max-w-2xl">{animal.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Gallery & Details */}
          <div className="space-y-8">
            {/* Gallery */}
            <AnimalGallery images={animal.imageUrls} animalName={animal.name} />
            
            {/* Story */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Story</h2>
              <p className="text-gray-700 leading-relaxed">{animal.story}</p>
            </div>
            
            {/* Personality & Traits */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personality & Traits</h2>
              <div className="flex flex-wrap gap-3">
                {animal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Adoption Info & Form */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaVenusMars className={animal.gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
                    <span>Gender</span>
                  </div>
                  <span className="font-semibold capitalize">{animal.gender}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendarAlt className="text-gray-500" />
                    <span>Age</span>
                  </div>
                  <span className="font-semibold">{animal.age}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaStethoscope className={animal.healthStatus === 'excellent' ? 'text-green-500' : animal.healthStatus === 'good' ? 'text-amber-500' : 'text-red-500'} />
                    <span>Health Status</span>
                  </div>
                  <span className="font-semibold capitalize">{animal.healthStatus.replace('-', ' ')}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaSyringe className="text-green-500" />
                    <span>Vaccination</span>
                  </div>
                  <span className="font-semibold capitalize">{animal.vaccinationStatus} vaccinated</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaHome className="text-amber-500" />
                    <span>Arrival Date</span>
                  </div>
                  <span className="font-semibold">
                    {new Date(animal.arrivalDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                {animal.adoptionFee && (
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaRupeeSign className="text-green-500" />
                      <span>Adoption Fee</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">₹{animal.adoptionFee}</span>
                  </div>
                )}
              </div>
              
              {animal.specialNeeds && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-700 mb-2">Special Requirements</h3>
                  <p className="text-red-600">{animal.specialNeeds}</p>
                </div>
              )}
            </div>
            
            {/* Adoption Form */}
            <AdoptionForm animalId={animal.id} animalName={animal.name} />
            
            {/* Important Notes */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-blue-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>All adoptions require a home visit and background check</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Adoption fee covers vaccination, deworming, and microchipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>We provide post-adoption support and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Return policy: You can return the animal within 15 days if it doesn't work out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}