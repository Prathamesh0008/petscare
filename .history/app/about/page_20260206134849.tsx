import Statistics from '@/components/Statistics';
import { FaHeart, FaUsers, FaBullseye, FaHandsHelping, FaStar, FaAward, FaShieldAlt } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Head Veterinarian',
    image: 'PS',
    bio: 'With 15 years of veterinary experience, Dr. Sharma started PawHaven to create a safe space for stray animals in Navi Mumbai.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Shelter Manager',
    image: 'RM',
    bio: 'Manages daily shelter operations and coordinates with volunteers and adopters.',
  },
  {
    name: 'Anjali Desai',
    role: 'Adoption Coordinator',
    image: 'AD',
    bio: 'Helps match animals with loving families and oversees the adoption process.',
  },
  {
    name: 'Karan Patel',
    role: 'Volunteer Coordinator',
    image: 'KP',
    bio: 'Organizes volunteer activities and community outreach programs.',
  },
];

const milestones = [
  { year: '2018', event: 'PawHaven Founded', description: 'Started with just 5 animals in a small facility' },
  { year: '2019', event: 'First 100 Adoptions', description: 'Reached milestone of 100 successful adoptions' },
  { year: '2020', event: 'New Facility', description: 'Moved to current larger facility in Vashi' },
  { year: '2021', event: 'Medical Wing Added', description: 'Established in-house veterinary clinic' },
  { year: '2022', event: '500+ Adoptions', description: 'Crossed 500 successful adoptions' },
  { year: '2023', event: 'Community Programs', description: 'Launched educational programs for schools' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About PawHaven Vashi</h1>
      
      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
            <FaHeart className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">To rescue, rehabilitate, and rehome stray animals with compassion and care</p>
          </div>
        </div>
        <p className="text-gray-700 text-lg">
          PawHaven Vashi is a non-profit animal shelter dedicated to providing a safe haven for stray dogs and cats 
          in Navi Mumbai. Founded in 2018, we work tirelessly to rescue abandoned animals, provide them with medical 
          care, and find them loving forever homes.
        </p>
      </div>

      {/* What We Do */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rescue & Rehabilitation</h3>
            <p className="text-gray-600">
              We rescue injured and abandoned animals from the streets, provide medical treatment, 
              and help them recover in our safe shelter environment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-green-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Adoption Services</h3>
            <p className="text-gray-600">
              Our careful adoption process ensures that every animal finds a compatible, 
              loving home where they will be cherished forever.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community Education</h3>
            <p className="text-gray-600">
              We conduct workshops, school visits, and community programs to promote 
              responsible pet ownership and animal welfare awareness.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-16">
        <Statistics />
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.image}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold my-4 md:my-0 relative z-10">
                  <FaStar />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="text-gray-400 text-sm">
                    {/* Empty space for alignment */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-amber-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
            <p className="text-gray-600">
              We treat every animal with the love, respect, and care they deserve.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBullseye className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Commitment</h3>
            <p className="text-gray-600">
              We are dedicated to our mission of animal welfare and never give up on an animal in need.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandsHelping className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
            <p className="text-gray-600">
              We believe in working together with our community to create a better world for animals.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Whether you want to adopt, volunteer, donate, or just learn more, 
          there's a place for you in the PawHaven family.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/volunteer" 
            className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Volunteer With Us
          </a>
          <a 
            href="/donate" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-colors"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  );
}