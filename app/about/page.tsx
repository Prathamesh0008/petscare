// petscare/app/about/page.tsx
'use client';

import Statistics from '@/components/Statistics';
import { 
  FaHeart, FaUsers, FaBullseye, FaHandsHelping, 
  FaShieldAlt, FaPaw, FaRibbon, FaMapMarkerAlt, 
  FaCalendarAlt, FaDog, FaArrowRight, FaQuoteLeft
} from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Head Veterinarian',
    image: 'PS',
    bio: '15 years of veterinary experience. Founded PawHaven to create a sanctuary for stray animals.',
    specialty: ['Veterinary Care', 'Shelter Management'],
    color: 'brown' // Changed from 'amber'
  },
  {
    name: 'Rohan Mehta',
    role: 'Shelter Manager',
    image: 'RM',
    bio: 'Oversees daily operations and coordinates volunteer activities.',
    specialty: ['Operations', 'Logistics'],
    color: 'green' // Changed from 'orange'
  },
  {
    name: 'Anjali Desai',
    role: 'Adoption Coordinator',
    image: 'AD',
    bio: 'Specializes in matching animals with compatible forever families.',
    specialty: ['Adoption Counseling', 'Family Matching'],
    color: 'brown' // Changed from 'amber'
  },
  {
    name: 'Karan Patel',
    role: 'Volunteer Coordinator',
    image: 'KP',
    bio: 'Manages community outreach and volunteer training programs.',
    specialty: ['Community Engagement', 'Training'],
    color: 'green' // Changed from 'orange'
  },
];

const milestones = [
  { 
    year: '2018', 
    event: 'PawHaven Founded', 
    description: 'Started with 5 animals in a small Vashi facility',
    icon: '🏠',
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20' // Changed from amber
  },
  { 
    year: '2019', 
    event: 'First 100 Adoptions', 
    description: 'Achieved 100 successful adoptions milestone',
    icon: '🎯',
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20' // Changed from orange
  },
  { 
    year: '2020', 
    event: 'New Facility', 
    description: 'Expanded to current 5,000 sq.ft. location',
    icon: '📈',
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20'
  },
  { 
    year: '2021', 
    event: 'Medical Wing', 
    description: 'Established full-service veterinary clinic',
    icon: '🏥',
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20'
  },
  { 
    year: '2022', 
    event: '500+ Adoptions', 
    description: 'Surpassed 500 successful adoptions',
    icon: '🏆',
    color: 'from-[#b87d5e]/10 to-[#b87d5e]/5 border-[#b87d5e]/20'
  },
  { 
    year: '2023', 
    event: 'Community Programs', 
    description: 'Launched educational outreach initiatives',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-[#2c4a3e]/10 to-[#2c4a3e]/5 border-[#2c4a3e]/20'
  },
];

const values = [
  {
    title: 'Compassion First',
    description: 'Every animal receives unconditional love, dignity, and respect in our care.',
    icon: FaHeart,
    color: 'bg-gradient-to-br from-[#b87d5e]/5 to-white border-[#b87d5e]/20' // Changed from amber
  },
  {
    title: 'Commitment',
    description: 'Unwavering dedication to our mission and the animals we serve.',
    icon: FaBullseye,
    color: 'bg-gradient-to-br from-[#2c4a3e]/5 to-white border-[#2c4a3e]/20' // Changed from orange
  },
  {
    title: 'Community',
    description: 'Collaborating with Navi Mumbai to build a humane ecosystem.',
    icon: FaHandsHelping,
    color: 'bg-gradient-to-br from-[#b87d5e]/5 to-white border-[#b87d5e]/20'
  },
  {
    title: 'Excellence in Care',
    description: 'Providing medical and emotional care at the highest standards.',
    icon: FaShieldAlt,
    color: 'bg-gradient-to-br from-[#2c4a3e]/5 to-white border-[#2c4a3e]/20'
  }
];

const impactNumbers = [
  { number: '500+', label: 'Animals Adopted', icon: FaHeart, color: 'text-[#b87d5e]' }, // Changed from amber
  { number: '2000+', label: 'Animals Rescued', icon: FaPaw, color: 'text-[#2c4a3e]' }, // Changed from orange
  { number: '100+', label: 'Active Volunteers', icon: FaUsers, color: 'text-[#b87d5e]' },
  { number: '24/7', label: 'Rescue Service', icon: FaRibbon, color: 'text-[#2c4a3e]' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7f0]/10 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5" /> {/* Changed from amber/orange */}
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#b87d5e]/10 rounded-full mb-8">
              <FaPaw className="text-[#b87d5e]" />
              <span className="text-[#b87d5e] font-medium">Since 2018</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Creating <span className="text-[#b87d5e]">Haven</span> for Every <span className="text-[#2c4a3e]">Paw</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              PawHaven Vashi is Navi Mumbai's premier animal sanctuary, dedicated to rescuing, 
              rehabilitating, and rehoming animals with compassion and professional care.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement - Elegant Card */}
      <div className="container mx-auto px-4 -mt-10 mb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-xl">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  <p className="text-gray-600">Redefining animal welfare in Navi Mumbai</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded by Dr. Priya Sharma in 2018, PawHaven began as a small initiative 
                  with 5 rescued animals. Today, we operate a state-of-the-art 5,000 sq.ft. 
                  facility in Vashi, providing comprehensive care and rehabilitation.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#b87d5e]/10 rounded-lg">
                      <FaMapMarkerAlt className="text-[#b87d5e]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Vashi, Navi Mumbai</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#2c4a3e]/10 rounded-lg">
                      <FaCalendarAlt className="text-[#2c4a3e]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Operating Since</div>
                      <div className="text-gray-600">2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 p-12 lg:p-16 flex items-center justify-center border-l border-gray-100">
              <div className="text-center max-w-md">
                <div className="text-7xl mb-8 opacity-20">🐾</div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-6 text-[#b87d5e]/30 text-2xl" />
                  <p className="text-2xl text-gray-800 italic leading-relaxed">
                    Every rescue is a story of hope, every adoption a new beginning.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="font-bold text-gray-900">Dr. Priya Sharma</div>
                  <div className="text-gray-600">Founder & Head Veterinarian</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Impact in Numbers</h2>
          <p className="text-gray-600">Measurable change for animals in need</p>
        </div>
        <Statistics />
      </div>

      {/* Values Section - Clean Grid */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core beliefs that shape every decision and action at PawHaven
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border ${value.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl ${value.color.includes('b87d5e') ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'}`}>
                    <value.icon className={`text-2xl ${value.color.includes('b87d5e') ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline - Clean Vertical Layout */}
      <div className="bg-gradient-to-b from-white to-[#f5f7f0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#2c4a3e]/10 rounded-full text-[#2c4a3e] font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Milestones & Growth</h2>
            <p className="text-gray-600">Key moments in our evolving story</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#b87d5e] to-[#2c4a3e] hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-12' : 'lg:pl-1/2 lg:pr-12'}`}
                >
                  <div className={`p-8 rounded-2xl bg-white border ${milestone.color} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl ${milestone.color.includes('b87d5e') ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'}`}>
                        <span className="text-2xl">{milestone.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`px-3 py-1 rounded-full ${milestone.color.includes('b87d5e') ? 'bg-[#b87d5e]/10 text-[#b87d5e]' : 'bg-[#2c4a3e]/10 text-[#2c4a3e]'} font-medium`}>
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.event}</h3>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Professional Cards */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to animal welfare excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-40 ${member.color === 'brown' ? 'bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f]' : 'bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]'} relative`}>
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 rounded-2xl border-4 border-white bg-white shadow-lg flex items-center justify-center">
                      <span className={`text-2xl font-bold ${member.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'}`}>
                        {member.image}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-16 px-6 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className={`text-sm font-medium ${member.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'} mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialty.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
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

      {/* CTA Section - Clean Layout */}
      <div className="bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-[#b87d5e]">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your support helps us provide medical care, shelter, and love to animals 
                in need. Together, we can create more happy endings.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FaDog, title: 'Adopt', desc: 'Give a forever home to a rescued animal', color: 'brown', href: '/adopt' },
                  { icon: FaUsers, title: 'Volunteer', desc: 'Share your time and skills with our animals', color: 'green', href: '/volunteer' },
                  { icon: FaHeart, title: 'Donate', desc: 'Support medical care and shelter operations', color: 'brown', href: '/donate' },
                ].map((action, index) => (
                  <a 
                    key={index}
                    href={action.href}
                    className="group flex items-center justify-between p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${action.color === 'brown' ? 'bg-[#b87d5e]/10' : 'bg-[#2c4a3e]/10'}`}>
                        <action.icon className={`text-xl ${action.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{action.title}</h3>
                        <p className="text-gray-600 text-sm">{action.desc}</p>
                      </div>
                    </div>
                    <FaArrowRight className={`text-lg ${action.color === 'brown' ? 'text-[#b87d5e]' : 'text-[#2c4a3e]'} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-2xl mb-6">
                  <FaPaw className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Difference</h3>
                <p className="text-gray-600 mb-8">
                  Every contribution, whether through adoption, volunteering, or donations, 
                  helps us save more lives and create lasting impact.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:gap-3"
                >
                  Get Involved Today
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-2xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-32 -translate-x-32" />
            
            <div className="relative">
              <div className="text-6xl text-[#b87d5e]/20 mb-8">"</div>
              <p className="text-2xl text-white mb-10 leading-relaxed italic">
                In rescuing animals, we save more than lives—we restore dignity, 
                nurture hope, and build a more compassionate community.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-full flex items-center justify-center">
                  <FaPaw className="text-white text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Dr. Priya Sharma</div>
                  <div className="text-gray-300">Founder, PawHaven Vashi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}