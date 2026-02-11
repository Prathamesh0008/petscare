import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimalById } from '@/lib/animals';
import { 
  FaArrowLeft, FaHeart, FaPaw, FaStethoscope, 
  FaSyringe, FaHome, FaCheckCircle, FaVenusMars,
  FaCalendarAlt, FaTag, FaDog, FaCat, FaUserMd,
  FaShieldAlt, FaStar, FaInfoCircle
} from 'react-icons/fa';

export default async function AnimalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const animal = getAnimalById(id);

  if (!animal) return notFound();

  const typeIcon = animal.type === 'dog' ? <FaDog /> : <FaCat />;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/animals"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
        >
          <FaArrowLeft /> Back to Animals
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mt-4">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <Image
            src={animal.imageUrls[0]}
            alt={animal.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {typeIcon}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">{animal.name}</h1>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <FaTag />
                    <span>{animal.breed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{animal.age}</span>
                  </div>
                </div>
              </div>
              
              {animal.isUrgent && (
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                    <FaHeart /> Urgent Adoption
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FaInfoCircle className="text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">About {animal.name}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {animal.story}
              </p>
            </div>

            {/* Personality */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <FaPaw className="text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Personality & Traits</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {animal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <FaStar className="text-amber-500 text-xs" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Health & Care */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaUserMd className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Health & Care</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaSyringe className="text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Vaccination</div>
                      <p className="text-gray-700 capitalize text-sm">{animal.vaccinationStatus}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <FaHeart className="text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Health Status</div>
                      <p className="text-gray-700 capitalize text-sm">{animal.healthStatus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaHome className="text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {animal.imageUrls.slice(1).map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${animal.name} photo ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Adoption Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Adoption Details</h3>
              
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      {typeIcon}
                      <span>Type</span>
                    </div>
                    <span className="font-medium text-gray-900 capitalize">{animal.type}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaVenusMars />
                      <span>Gender</span>
                    </div>
                    <span className="font-medium text-gray-900 capitalize">{animal.gender}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt />
                      <span>Age</span>
                    </div>
                    <span className="font-medium text-gray-900">{animal.age}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaTag />
                      <span>Breed</span>
                    </div>
                    <span className="font-medium text-gray-900">{animal.breed}</span>
                  </div>
                </div>

                {/* Fee Section */}
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Adoption Fee</span>
                    <span className="text-2xl font-bold text-emerald-600">₹{animal.adoptionFee}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Includes vaccination, deworming, microchipping, and spay/neuter
                  </p>
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">What's Included</h4>
                  <div className="space-y-3">
                    {[
                      { text: 'Complete Vaccination', icon: FaSyringe },
                      { text: 'Health Check-up', icon: FaStethoscope },
                      { text: 'Basic Training', icon: FaPaw },
                      { text: '1 Month Pet Insurance', icon: FaShieldAlt },
                      { text: 'Adoption Kit', icon: FaHome }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <service.icon className="text-emerald-600 text-sm" />
                        </div>
                        <span className="text-gray-700 text-sm">{service.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adoption Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaHeart />
                    Adopt {animal.name}
                  </Link>
                  <p className="text-center text-gray-600 text-sm mt-3">
                    Need help? <a href="/contact" className="text-emerald-600 hover:text-emerald-700">Contact us</a>
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <FaCalendarAlt className="text-emerald-500" />
                      <div className="text-lg font-bold text-emerald-600">30-day</div>
                    </div>
                    <div className="text-xs text-gray-600">Trial Period</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <FaShieldAlt className="text-emerald-500" />
                      <div className="text-lg font-bold text-emerald-600">24/7</div>
                    </div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}