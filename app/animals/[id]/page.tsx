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
      <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-5 md:pt-6">
        <Link
          href="/animals"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[#2c4a3e]/70 hover:text-[#b87d5e] transition-colors text-xs sm:text-sm font-medium group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs sm:text-sm" /> 
          Back to Animals
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 mt-3 sm:mt-4">
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-[#2c4a3e]/10">
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
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-3 sm:left-4 md:left-5 lg:left-6 right-3 sm:right-4 md:right-5 lg:right-6 text-white">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 md:p-2.5 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10">
                    <span className="text-base sm:text-lg md:text-xl">{typeIcon}</span>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{animal.name}</h1>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-white/80 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <FaTag className="text-[#b87d5e] text-[10px] sm:text-xs" />
                        <span>{animal.breed}</span>
                      </div>
                      <span className="w-1 h-1 bg-white/40 rounded-full hidden xs:inline" />
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#b87d5e] text-[10px] sm:text-xs" />
                        <span>{animal.age}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {animal.isUrgent && (
                <div className="mt-2 md:mt-0">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#b87d5e] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg">
                    <FaHeart className="animate-pulse text-xs sm:text-sm" /> Urgent Adoption Needed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 mt-6 sm:mt-7 md:mt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* About Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaInfoCircle className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]">Meet {animal.name}</h2>
                  <p className="text-xs sm:text-sm text-[#2c4a3e]/60">Here's {animal.name}'s story</p>
                </div>
              </div>
              
              {/* Quote Card */}
              <div className="bg-[#2c4a3e]/5 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 relative">
                <FaQuoteLeft className="absolute top-3 sm:top-4 right-3 sm:right-4 text-3xl sm:text-4xl text-[#b87d5e]/10" />
                <p className="text-sm sm:text-base text-[#2c4a3e]/80 italic leading-relaxed relative z-10">
                  {animal.story}
                </p>
              </div>
            </div>

            {/* Personality */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPaw className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]">Personality & Traits</h2>
                  <p className="text-xs sm:text-sm text-[#2c4a3e]/60">What makes {animal.name} special</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {animal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5 bg-[#2c4a3e]/5 text-[#2c4a3e] rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-[#b87d5e] hover:text-white transition-all duration-300 flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <FaStar className="text-[#b87d5e] group-hover:text-white text-[8px] sm:text-xs transition-colors" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Health & Care */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUserMd className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]">Health & Care</h2>
                  <p className="text-xs sm:text-sm text-[#2c4a3e]/60">Medical history and current status</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 md:p-5 bg-[#2c4a3e]/5 rounded-lg sm:rounded-xl border border-[#2c4a3e]/10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaSyringe className="text-[#b87d5e] text-xs sm:text-sm" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-[#2c4a3e]/60">Vaccination</div>
                      <div className="font-semibold text-[#2c4a3e] text-xs sm:text-sm capitalize truncate">{animal.vaccinationStatus}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 bg-[#2c4a3e]/5 rounded-lg sm:rounded-xl border border-[#2c4a3e]/10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaHeart className="text-[#b87d5e] text-xs sm:text-sm" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-[#2c4a3e]/60">Health Status</div>
                      <div className="font-semibold text-[#2c4a3e] text-xs sm:text-sm capitalize truncate">{animal.healthStatus}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaHome className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b87d5e]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]">Photo Gallery</h2>
                  <p className="text-xs sm:text-sm text-[#2c4a3e]/60">More moments with {animal.name}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {animal.imageUrls.slice(1).map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group">
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
            <div className="lg:sticky lg:top-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg border border-[#2c4a3e]/10 p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e] mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className="w-1 h-5 sm:h-6 bg-[#b87d5e] rounded-full" />
                  Adoption Details
                </h3>
                
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Quick Info */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[#2c4a3e]/70 text-xs sm:text-sm">
                        {typeIcon}
                        <span>Type</span>
                      </div>
                      <span className="font-semibold text-[#2c4a3e] text-xs sm:text-sm capitalize">{animal.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[#2c4a3e]/70 text-xs sm:text-sm">
                        <FaVenusMars />
                        <span>Gender</span>
                      </div>
                      <span className="font-semibold text-[#2c4a3e] text-xs sm:text-sm capitalize">{animal.gender}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[#2c4a3e]/70 text-xs sm:text-sm">
                        <FaCalendarAlt />
                        <span>Age</span>
                      </div>
                      <span className="font-semibold text-[#2c4a3e] text-xs sm:text-sm">{animal.age}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[#2c4a3e]/70 text-xs sm:text-sm">
                        <FaTag />
                        <span>Breed</span>
                      </div>
                      <span className="font-semibold text-[#2c4a3e] text-xs sm:text-sm">{animal.breed}</span>
                    </div>
                  </div>

                  {/* Fee Section */}
                  <div className="p-3 sm:p-4 md:p-5 bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-lg sm:rounded-xl border border-[#b87d5e]/20">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <span className="font-medium text-[#2c4a3e] text-xs sm:text-sm">Adoption Fee</span>
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b87d5e]">₹{animal.adoptionFee}</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-[#2c4a3e]/60">
                      Includes vaccination, deworming, microchipping, and spay/neuter
                    </p>
                  </div>

                  {/* Included Services */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-[#2c4a3e] text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                      <FaCheckCircle className="text-[#b87d5e] text-xs sm:text-sm" />
                      What's Included
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { text: 'Complete Vaccination', icon: FaSyringe },
                        { text: 'Health Check-up', icon: FaStethoscope },
                        { text: 'Basic Training', icon: FaPaw },
                        
                        { text: 'Adoption Kit', icon: FaHome }
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 hover:bg-[#2c4a3e]/5 rounded-lg transition-colors">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="text-[#b87d5e] text-[10px] sm:text-xs" />
                          </div>
                          <span className="text-[#2c4a3e]/80 text-xs sm:text-sm">{service.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Adoption Button */}
                  <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#b87d5e] hover:bg-[#9e6a4f] text-white py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <FaHeart className="group-hover:scale-110 transition-transform text-xs sm:text-sm" />
                      Adopt {animal.name}
                    </Link>
                    <p className="text-center text-[#2c4a3e]/60 text-xs sm:text-sm">
                      Have questions? <a href="/contact" className="text-[#b87d5e] hover:text-[#9e6a4f] font-medium">Contact us</a>
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-[#2c4a3e]/10">
                    <div className="text-center p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                        <FaCalendarAlt className="text-[#b87d5e] text-xs sm:text-sm" />
                        <div className="text-base sm:text-lg font-bold text-[#2c4a3e]">30-day</div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#2c4a3e]/60">Trial Period</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#2c4a3e]/5 rounded-lg">
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                        <FaShieldAlt className="text-[#b87d5e] text-xs sm:text-sm" />
                        <div className="text-base sm:text-lg font-bold text-[#2c4a3e]">24/7</div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#2c4a3e]/60">Support</div>
                    </div>
                  </div>

                  {/* Success Badge */}
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#2c4a3e]/50">
                    <FaCheckCircle className="text-[#b87d5e] text-xs sm:text-sm" />
                    <span>Verified by PawHeaven</span>
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