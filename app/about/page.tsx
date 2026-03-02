// petscare/app/about/page.tsx
'use client';

import Statistics from '@/components/Statistics';
import { 
  FaHeart, FaUsers, FaBullseye, FaHandsHelping, 
  FaShieldAlt, FaPaw, FaRibbon, FaMapMarkerAlt, 
  FaCalendarAlt, FaDog, FaArrowRight, FaQuoteLeft, FaHome,
FaChartLine,
FaClinicMedical,
FaTrophy,
FaBookOpen
} from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Head Veterinarian',
    image: 'PS',
    bio: '15 years of veterinary experience. Founded PawHaven to create a sanctuary for stray animals.',
    specialty: ['Veterinary Care', 'Shelter Management'],
    color: 'brown'
  },
  {
    name: 'Rohan Mehta',
    role: 'Shelter Manager',
    image: 'RM',
    bio: 'Oversees daily operations and coordinates volunteer activities.',
    specialty: ['Operations', 'Logistics'],
    color: 'green'
  },
  {
    name: 'Anjali Desai',
    role: 'Adoption Coordinator',
    image: 'AD',
    bio: 'Specializes in matching animals with compatible forever families.',
    specialty: ['Adoption Counseling', 'Family Matching'],
    color: 'brown'
  },
  {
    name: 'Karan Patel',
    role: 'Volunteer Coordinator',
    image: 'KP',
    bio: 'Manages community outreach and volunteer training programs.',
    specialty: ['Community Engagement', 'Training'],
    color: 'green'
  },
];

const milestones = [
  { 
    year: '2018', 
    event: 'PawHeaven Founded', 
    description: 'Started with ethical adoption services in Vashi',
    icon: FaHome,
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20'
  },
  { 
    year: '2019', 
    event: 'First 100 Adoptions', 
    description: 'Successfully matched 100 pets with loving families',
    icon: FaHeart,
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20'
  },
  { 
    year: '2020', 
    event: 'Daycare Launched', 
    description: 'Introduced structured pet daycare programs',
    icon: FaPaw,
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20'
  },
  { 
    year: '2021', 
    event: 'Veterinary Supervision Added', 
    description: 'In-house vet consultations for adoption & daycare pets',
    icon: FaClinicMedical,
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20'
  },
  { 
    year: '2022', 
    event: '500+ Happy Families', 
    description: 'Surpassed 500 successful adoptions',
    icon: FaTrophy,
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20'
  },
  { 
    year: '2023', 
    event: 'Expanded Daycare Facility', 
    description: 'Added dedicated play zones & training areas',
    icon: FaChartLine,
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20'
  },
];

const values = [
  {
    title: 'Responsible Adoption',
    description: 'We carefully match pets with families to ensure lifelong companionship and compatibility.',
    icon: FaHeart,
    color: 'bg-gradient-to-br from-[#b87d5e]/5 to-white border-[#b87d5e]/20'
  },
  {
    title: 'Safe Daycare',
    description: 'Structured play, supervised interaction, and a secure environment for every pet.',
    icon: FaShieldAlt,
    color: 'bg-gradient-to-br from-[#2c4a3e]/5 to-white border-[#2c4a3e]/20'
  },
  {
    title: 'Community Care',
    description: 'Supporting Navi Mumbai pet families through guidance, education, and ongoing support.',
    icon: FaUsers,
    color: 'bg-gradient-to-br from-[#b87d5e]/5 to-white border-[#b87d5e]/20'
  },
  {
    title: 'Professional Standards',
    description: 'Veterinary supervision, trained staff, and structured routines ensure excellence in care.',
    icon: FaClinicMedical,
    color: 'bg-gradient-to-br from-[#2c4a3e]/5 to-white border-[#2c4a3e]/20'
  }
];

const impactNumbers = [
  { number: '500+', label: 'Successful Adoptions', icon: FaHeart, color: 'text-[#b87d5e]' },
  { number: '1000+', label: 'Daycare Sessions', icon: FaPaw, color: 'text-[#2c4a3e]' },
  { number: '100+', label: 'Trusted Families', icon: FaUsers, color: 'text-[#b87d5e]' },
  { number: '7 Days', label: 'Daycare Availability', icon: FaCalendarAlt, color: 'text-[#2c4a3e]' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7f0]/10 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5" />
        <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#b87d5e]/10 rounded-full mb-4 sm:mb-6 md:mb-8">
              <FaPaw className="text-[#b87d5e] text-xs sm:text-sm" />
              <span className="text-[#b87d5e] font-medium text-xs sm:text-sm">Since 2018</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              Creating <span className="text-[#b87d5e]">Heaven</span> for Every <span className="text-[#2c4a3e]">Paw</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
             PawHeaven Vashi is Navi Mumbai’s trusted pet adoption and daycare center, 
providing loving homes for animals and safe, professional daycare services 
for pets in our community.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 mb-12 sm:mb-16 md:mb-20">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-lg sm:rounded-xl">
                  <FaHeart className="text-white text-base sm:text-lg md:text-xl lg:text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Redefining animal welfare in Navi Mumbai</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Founded in 2018, PawHeaven was created with a simple vision — 
to connect loving families with adoptable pets and provide 
safe, structured daycare services for busy pet parents. 

Today, we operate a modern 5,000 sq.ft. facility in Vashi offering 
ethical adoption, supervised daycare, and professional veterinary oversight.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-[#b87d5e]/10 rounded-lg">
                      <FaMapMarkerAlt className="text-[#b87d5e] text-xs sm:text-sm md:text-base" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">Location</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Vashi, Navi Mumbai</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-[#2c4a3e]/10 rounded-lg">
                      <FaCalendarAlt className="text-[#2c4a3e] text-xs sm:text-sm md:text-base" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">Operating Since</div>
                      <div className="text-gray-600 text-xs sm:text-sm">2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Quote */}
            <div className="bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="text-center max-w-md">
                <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 md:mb-8 opacity-20">🐾</div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-1 sm:-top-2 -left-4 sm:-left-6 text-[#b87d5e]/30 text-base sm:text-lg md:text-xl lg:text-2xl" />
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 italic leading-relaxed px-4 sm:px-6">
                    Every rescue is a story of hope, every adoption a new beginning.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">Dr. Priya Sharma</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Founder & Head Veterinarian</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
       
        <Statistics />
      </div>

      {/* Values Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              Our Values
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Guiding Principles</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              The core beliefs that shape every decision and action at PawHaven
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border ${value.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl ${value.color.includes('b87d5e') ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'} flex-shrink-0`}>
                    <value.icon className={`text-base sm:text-lg md:text-xl lg:text-2xl ${value.color.includes('b87d5e') ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'}`} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 {/* Timeline */}
<div className="bg-gradient-to-b from-white to-[#f5f7f0] py-12 sm:py-16 md:py-20">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#2c4a3e]/10 rounded-full text-[#2c4a3e] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
        Our Journey
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Milestones & Growth</h2>
      <p className="text-sm sm:text-base text-gray-600">Key moments in our evolving story</p>
    </div>
    
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#b87d5e] to-[#2c4a3e]" />

      <div className="relative space-y-12 lg:space-y-16">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;
          const IconComponent = milestone.icon;
          
          return (
            <div key={index} className="relative grid lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4">
                <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                  milestone.color.includes('b87d5e') ? 'bg-[#b87d5e]' : 'bg-[#2c4a3e]'
                }`} />
              </div>

              {/* Content Column */}
              <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                <div className={`bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                  isEven ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="flex items-start gap-4">
                    {/* Icon - Now rendering React Icon component */}
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                      milestone.color.includes('b87d5e') ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'
                    }`}>
                      <IconComponent className={`text-xl sm:text-2xl ${
                        milestone.color.includes('b87d5e') ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <span className={`text-xs sm:text-sm font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                          milestone.color.includes('b87d5e') 
                            ? 'bg-[#b87d5e]/10 text-[#b87d5e]' 
                            : 'bg-[#2c4a3e]/10 text-[#2c4a3e]'
                        }`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                          {milestone.event}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty column for spacing */}
              <div className="hidden lg:block" />
            </div>
          );
        })}
      </div>

      {/* Mobile timeline indicators */}
      <div className="lg:hidden mt-8 flex justify-center gap-2">
        {milestones.map((_, idx) => (
          <div 
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx % 2 === 0 ? 'bg-[#b87d5e]' : 'bg-[#2c4a3e]'
            } opacity-50`}
          />
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Team Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              Our Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Leadership & Expertise</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Passionate professionals dedicated to animal welfare excellence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg sm:rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-28 sm:h-32 md:h-36 lg:h-40 ${
                  member.color === 'brown' 
                    ? 'bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f]' 
                    : 'bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]'
                } relative`}>
                  <div className="absolute -bottom-8 sm:-bottom-9 md:-bottom-10 lg:-bottom-12 left-4 sm:left-5 md:left-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl md:rounded-2xl border-4 border-white bg-white shadow-lg flex items-center justify-center">
                      <span className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${
                        member.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'
                      }`}>
                        {member.image}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 md:pb-8">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className={`text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${
                    member.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'
                  }`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {member.specialty.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-50 text-gray-700 text-[10px] sm:text-xs font-medium rounded-full border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 px-4 lg:px-0">
                Be Part of the <span className="text-[#b87d5e]">PawHeaven Family</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
                Whether you’re looking to adopt a loving companion 
or need a safe and structured daycare for your pet, 
we’re here to support you every step of the way.
              </p>
              
              <div className="space-y-3 sm:space-y-4 px-4 lg:px-0">
                {[
                  { icon: FaDog, title: 'Adopt', desc: 'Give a forever home to a rescued animal', color: 'brown', href: '/adopt' },
                  { icon: FaUsers, title: 'Volunteer', desc: 'Share your time and skills with our animals', color: 'green', href: '/volunteer' },
                  { icon: FaHeart, title: 'Donate', desc: 'Support medical care and shelter operations', color: 'brown', href: '/donate' },
                ].map((action, index) => (
                  <a 
                    key={index}
                    href={action.href}
                    className="group flex items-center justify-between p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg ${
                        action.color === 'brown' ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'
                      }`}>
                        <action.icon className={`text-sm sm:text-base md:text-lg ${
                          action.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{action.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{action.desc}</p>
                      </div>
                    </div>
                    <FaArrowRight className={`text-sm sm:text-base md:text-lg ${
                      action.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'
                    } opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100 mx-4 lg:mx-0">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-5 md:mb-6">
                  <FaPaw className="text-white text-base sm:text-lg md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Make a Difference</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 md:mb-8">
                  Every contribution, whether through adoption, volunteering, or donations, 
                  helps us save more lives and create lasting impact.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:gap-3 text-xs sm:text-sm"
                >
                  Get Involved Today
                  <FaArrowRight className="text-xs sm:text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-24 sm:-translate-y-28 md:-translate-y-32 translate-x-24 sm:translate-x-28 md:translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-24 sm:translate-y-28 md:translate-y-32 -translate-x-24 sm:-translate-x-28 md:-translate-x-32" />
            
            <div className="relative">
              <div className="text-4xl sm:text-5xl md:text-6xl text-[#b87d5e]/20 mb-4 sm:mb-6 md:mb-8">"</div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 md:mb-10 leading-relaxed italic px-4">
                In rescuing animals, we save more than lives—we restore dignity, 
                nurture hope, and build a more compassionate community.
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPaw className="text-white text-xs sm:text-sm md:text-base lg:text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xs sm:text-sm md:text-base">Dr. Priya Sharma</div>
                  <div className="text-gray-300 text-[10px] sm:text-xs">Founder, PawHaven Vashi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}