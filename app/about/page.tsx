// petscare\app\about\page.tsx
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
    color: 'amber'
  },
  {
    name: 'Rohan Mehta',
    role: 'Shelter Manager',
    image: 'RM',
    bio: 'Oversees daily operations and coordinates volunteer activities.',
    specialty: ['Operations', 'Logistics'],
    color: 'orange'
  },
  {
    name: 'Anjali Desai',
    role: 'Adoption Coordinator',
    image: 'AD',
    bio: 'Specializes in matching animals with compatible forever families.',
    specialty: ['Adoption Counseling', 'Family Matching'],
    color: 'amber'
  },
  {
    name: 'Karan Patel',
    role: 'Volunteer Coordinator',
    image: 'KP',
    bio: 'Manages community outreach and volunteer training programs.',
    specialty: ['Community Engagement', 'Training'],
    color: 'orange'
  },
];

const milestones = [
  { 
    year: '2018', 
    event: 'PawHaven Founded', 
    description: 'Started with 5 animals in a small Vashi facility',
    icon: '🏠',
    color: 'from-amber-500/10 to-amber-100 border-amber-200'
  },
  { 
    year: '2019', 
    event: 'First 100 Adoptions', 
    description: 'Achieved 100 successful adoptions milestone',
    icon: '🎯',
    color: 'from-orange-500/10 to-orange-100 border-orange-200'
  },
  { 
    year: '2020', 
    event: 'New Facility', 
    description: 'Expanded to current 5,000 sq.ft. location',
    icon: '📈',
    color: 'from-amber-500/10 to-amber-100 border-amber-200'
  },
  { 
    year: '2021', 
    event: 'Medical Wing', 
    description: 'Established full-service veterinary clinic',
    icon: '🏥',
    color: 'from-orange-500/10 to-orange-100 border-orange-200'
  },
  { 
    year: '2022', 
    event: '500+ Adoptions', 
    description: 'Surpassed 500 successful adoptions',
    icon: '🏆',
    color: 'from-amber-500/10 to-amber-100 border-amber-200'
  },
  { 
    year: '2023', 
    event: 'Community Programs', 
    description: 'Launched educational outreach initiatives',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-orange-500/10 to-orange-100 border-orange-200'
  },
];

const values = [
  {
    title: 'Compassion First',
    description: 'Every animal receives unconditional love, dignity, and respect in our care.',
    icon: FaHeart,
    color: 'bg-gradient-to-br from-amber-50 to-white border-amber-100'
  },
  {
    title: 'Commitment',
    description: 'Unwavering dedication to our mission and the animals we serve.',
    icon: FaBullseye,
    color: 'bg-gradient-to-br from-orange-50 to-white border-orange-100'
  },
  {
    title: 'Community',
    description: 'Collaborating with Navi Mumbai to build a humane ecosystem.',
    icon: FaHandsHelping,
    color: 'bg-gradient-to-br from-amber-50 to-white border-amber-100'
  },
  {
    title: 'Excellence in Care',
    description: 'Providing medical and emotional care at the highest standards.',
    icon: FaShieldAlt,
    color: 'bg-gradient-to-br from-orange-50 to-white border-orange-100'
  }
];

const impactNumbers = [
  { number: '500+', label: 'Animals Adopted', icon: FaHeart, color: 'text-amber-600' },
  { number: '2000+', label: 'Animals Rescued', icon: FaPaw, color: 'text-orange-600' },
  { number: '100+', label: 'Active Volunteers', icon: FaUsers, color: 'text-amber-600' },
  { number: '24/7', label: 'Rescue Service', icon: FaRibbon, color: 'text-orange-600' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/10 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-amber-100 rounded-full mb-8">
              <FaPaw className="text-amber-600" />
              <span className="text-amber-700 font-medium">Since 2018</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Creating <span className="text-amber-600">Haven</span> for Every <span className="text-orange-600">Paw</span>
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
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
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
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <FaMapMarkerAlt className="text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Vashi, Navi Mumbai</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FaCalendarAlt className="text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Operating Since</div>
                      <div className="text-gray-600">2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 lg:p-16 flex items-center justify-center border-l border-gray-100">
              <div className="text-center max-w-md">
                <div className="text-7xl mb-8 opacity-20">🐾</div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-6 text-amber-300 text-2xl" />
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
            <div className="inline-block px-4 py-1.5 bg-amber-100 rounded-full text-amber-700 font-medium mb-4">
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
                  <div className={`p-4 rounded-xl ${value.color.includes('amber') ? 'bg-amber-100' : 'bg-orange-100'}`}>
                    <value.icon className={`text-2xl ${value.color.includes('amber') ? 'text-amber-600' : 'text-orange-600'}`} />
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
      <div className="bg-gradient-to-b from-white to-amber-50/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-orange-700 font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Milestones & Growth</h2>
            <p className="text-gray-600">Key moments in our evolving story</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-200 to-orange-200 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-12' : 'lg:pl-1/2 lg:pr-12'}`}
                >
                  <div className={`p-8 rounded-2xl bg-white border ${milestone.color} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl ${milestone.color.includes('amber') ? 'bg-amber-100' : 'bg-orange-100'}`}>
                        <span className="text-2xl">{milestone.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`px-3 py-1 rounded-full ${milestone.color.includes('amber') ? 'bg-amber-100 text-amber-700' : 'bg-orange-100 text-orange-700'} font-medium`}>
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
            <div className="inline-block px-4 py-1.5 bg-amber-100 rounded-full text-amber-700 font-medium mb-4">
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
                <div className={`h-40 ${member.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} relative`}>
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 rounded-2xl border-4 border-white bg-white shadow-lg flex items-center justify-center">
                      <span className={`text-2xl font-bold ${member.color === 'amber' ? 'text-amber-600' : 'text-orange-600'}`}>
                        {member.image}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-16 px-6 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className={`text-sm font-medium ${member.color === 'amber' ? 'text-amber-600' : 'text-orange-600'} mb-4`}>
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
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-amber-600">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your support helps us provide medical care, shelter, and love to animals 
                in need. Together, we can create more happy endings.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FaDog, title: 'Adopt', desc: 'Give a forever home to a rescued animal', color: 'amber', href: '/adopt' },
                  { icon: FaUsers, title: 'Volunteer', desc: 'Share your time and skills with our animals', color: 'orange', href: '/volunteer' },
                  { icon: FaHeart, title: 'Donate', desc: 'Support medical care and shelter operations', color: 'amber', href: '/donate' },
                ].map((action, index) => (
                  <a 
                    key={index}
                    href={action.href}
                    className="group flex items-center justify-between p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${action.color === 'amber' ? 'bg-amber-100' : 'bg-orange-100'}`}>
                        <action.icon className={`text-xl ${action.color === 'amber' ? 'text-amber-600' : 'text-orange-600'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{action.title}</h3>
                        <p className="text-gray-600 text-sm">{action.desc}</p>
                      </div>
                    </div>
                    <FaArrowRight className={`text-lg ${action.color === 'amber' ? 'text-amber-500' : 'text-orange-500'} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-6">
                  <FaPaw className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Difference</h3>
                <p className="text-gray-600 mb-8">
                  Every contribution, whether through adoption, volunteering, or donations, 
                  helps us save more lives and create lasting impact.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:gap-3"
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
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full translate-y-32 -translate-x-32" />
            
            <div className="relative">
              <div className="text-6xl text-amber-500/20 mb-8">"</div>
              <p className="text-2xl text-white mb-10 leading-relaxed italic">
                In rescuing animals, we save more than lives—we restore dignity, 
                nurture hope, and build a more compassionate community.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
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