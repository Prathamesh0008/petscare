// petscare/app/animals/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimalById } from '@/lib/animals';
import { 
  FaArrowLeft, FaHeart, FaPaw, FaStethoscope, 
  FaSyringe, FaHome, FaCheckCircle, FaVenusMars,
  FaCalendarAlt, FaTag, FaDog, FaCat, FaUserMd,
  FaShieldAlt, FaStar, FaInfoCircle, FaQuoteLeft
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
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/animals"
          className="inline-flex items-center gap-2 text-[#2c4a3e]/70 hover:text-[#b87d5e] transition-colors text-sm font-medium group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Animals
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mt-4">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#2c4a3e]/10">
          <Image
            src={animal.imageUrls[0]}
            alt={animal.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e]/90 via-[#2c4a3e]/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="text-xl">{typeIcon}</span>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold">{animal.name}</h1>
                    <div className="flex items-center gap-3 mt-2 text-white/80">
                      <div className="flex items-center gap-1">
                        <FaTag className="text-[#b87d5e]" />
                        <span>{animal.breed}</span>
                      </div>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#b87d5e]" />
                        <span>{animal.age}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {animal.isUrgent && (
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 bg-[#b87d5e] text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                    <FaHeart className="animate-pulse" /> Urgent Adoption Needed
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
                  <FaInfoCircle className="text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c4a3e]">Meet {animal.name}</h2>
                  <p className="text-sm text-[#2c4a3e]/60">Here's {animal.name}'s story</p>
                </div>
              </div>
              
              {/* Quote Card */}
              <div className="bg-[#2c4a3e]/5 rounded-xl p-6 mb-6 relative">
                <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-[#b87d5e]/10" />
                <p className="text-[#2c4a3e]/80 italic leading-relaxed relative z-10">
                  {animal.story}
                </p>
              </div>
            </div>

            {/* Personality */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
                  <FaPaw className="text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c4a3e]">Personality & Traits</h2>
                  <p className="text-sm text-[#2c4a3e]/60">What makes {animal.name} special</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {animal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2.5 bg-[#2c4a3e]/5 text-[#2c4a3e] rounded-xl text-sm font-medium hover:bg-[#b87d5e] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <FaStar className="text-[#b87d5e] group-hover:text-white text-xs transition-colors" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Health & Care */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
                  <FaUserMd className="text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c4a3e]">Health & Care</h2>
                  <p className="text-sm text-[#2c4a3e]/60">Medical history and current status</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-[#2c4a3e]/5 rounded-xl border border-[#2c4a3e]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
                      <FaSyringe className="text-[#b87d5e]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#2c4a3e]/60">Vaccination</div>
                      <div className="font-semibold text-[#2c4a3e] capitalize">{animal.vaccinationStatus}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-[#2c4a3e]/5 rounded-xl border border-[#2c4a3e]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
                      <FaHeart className="text-[#b87d5e]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#2c4a3e]/60">Health Status</div>
                      <div className="font-semibold text-[#2c4a3e] capitalize">{animal.healthStatus}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
                  <FaHome className="text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c4a3e]">Photo Gallery</h2>
                  <p className="text-sm text-[#2c4a3e]/60">More moments with {animal.name}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {animal.imageUrls.slice(1).map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                    <Image
                      src={img}
                      alt={`${animal.name} photo ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Adoption Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-8 sticky top-6">
              <h3 className="text-2xl font-bold text-[#2c4a3e] mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#b87d5e] rounded-full" />
                Adoption Details
              </h3>
              
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#2c4a3e]/70">
                      {typeIcon}
                      <span>Type</span>
                    </div>
                    <span className="font-semibold text-[#2c4a3e] capitalize">{animal.type}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#2c4a3e]/70">
                      <FaVenusMars />
                      <span>Gender</span>
                    </div>
                    <span className="font-semibold text-[#2c4a3e] capitalize">{animal.gender}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#2c4a3e]/70">
                      <FaCalendarAlt />
                      <span>Age</span>
                    </div>
                    <span className="font-semibold text-[#2c4a3e]">{animal.age}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#2c4a3e]/70">
                      <FaTag />
                      <span>Breed</span>
                    </div>
                    <span className="font-semibold text-[#2c4a3e]">{animal.breed}</span>
                  </div>
                </div>

                {/* Fee Section */}
                <div className="p-5 bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-xl border border-[#b87d5e]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-[#2c4a3e]">Adoption Fee</span>
                    <span className="text-3xl font-bold text-[#b87d5e]">₹{animal.adoptionFee}</span>
                  </div>
                  <p className="text-xs text-[#2c4a3e]/60">
                    Includes vaccination, deworming, microchipping, and spay/neuter
                  </p>
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#2c4a3e] flex items-center gap-2">
                    <FaCheckCircle className="text-[#b87d5e]" />
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    {[
                      { text: 'Complete Vaccination', icon: FaSyringe },
                      { text: 'Health Check-up', icon: FaStethoscope },
                      { text: 'Basic Training', icon: FaPaw },
                      { text: '1 Month Pet Insurance', icon: FaShieldAlt },
                      { text: 'Adoption Kit', icon: FaHome }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 hover:bg-[#2c4a3e]/5 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
                          <service.icon className="text-[#b87d5e] text-sm" />
                        </div>
                        <span className="text-[#2c4a3e]/80 text-sm">{service.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adoption Button */}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 w-full bg-[#b87d5e] hover:bg-[#9e6a4f] text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <FaHeart className="group-hover:scale-110 transition-transform" />
                    Adopt {animal.name}
                  </Link>
                  <p className="text-center text-[#2c4a3e]/60 text-sm">
                    Have questions? <a href="/contact" className="text-[#b87d5e] hover:text-[#9e6a4f] font-medium">Contact us</a>
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#2c4a3e]/10">
                  <div className="text-center p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaCalendarAlt className="text-[#b87d5e]" />
                      <div className="text-lg font-bold text-[#2c4a3e]">30-day</div>
                    </div>
                    <div className="text-xs text-[#2c4a3e]/60">Trial Period</div>
                  </div>
                  <div className="text-center p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaShieldAlt className="text-[#b87d5e]" />
                      <div className="text-lg font-bold text-[#2c4a3e]">24/7</div>
                    </div>
                    <div className="text-xs text-[#2c4a3e]/60">Support</div>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#2c4a3e]/50">
                  <FaCheckCircle className="text-[#b87d5e]" />
                  <span>Verified by PawHaven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}