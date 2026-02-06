import Statistics from '@/components/Statistics';
import { FaHeart, FaUsers, FaTarget, FaHandsHelping } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Veterinarian',
    bio: 'With 15 years of veterinary experience, Dr. Priya founded PawHaven to address the growing stray animal problem in Vashi.',
    image: '/team/priya.jpg',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Shelter Manager',
    bio: 'Manages daily operations and coordinates with volunteers. Has been with PawHaven since its inception.',
    image: '/team/rajesh.jpg',
  },
  {
    name: 'Ananya Singh',
    role: 'Adoption Coordinator',
    bio: 'Helps match animals with perfect families and manages the adoption process.',
    image: '/team/ananya.jpg',
  },
  {
    name: 'Vikram Patel',
    role: 'Rescue Coordinator',
    bio: 'Leads emergency rescue operations and coordinates with local authorities.',
    image: '/team/vikram.jpg',
  },
];

const values = [
  {
    icon: <FaHeart />,
    title: 'Compassion',
    description: 'We treat every animal with kindness, respect, and dignity.',
  },
  {
    icon: <FaUsers />,
    title: 'Community',
    description: 'We believe in working together with our community to create lasting change.',
  },
  {
    icon: <FaTarget />,
    title: 'Integrity',
    description: 'We maintain transparency in all our operations and financial matters.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Responsibility',
    description: 'We are committed to responsible pet ownership and animal welfare.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About PawHaven Vashi</h1>
            <p className="text-xl mb-6">
              A safe haven for stray dogs and cats in Navi Mumbai since 2019. 
              We rescue, rehabilitate, and find forever homes for animals in need.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg mb-6">
                PawHaven Vashi was founded in 2019 by Dr. Priya Sharma, a local veterinarian who 
                witnessed the growing population of stray animals in Navi Mumbai and the lack of 
                resources available to help them.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                What started as a small initiative to provide medical care to injured street animals 
                has grown into a full-fledged animal shelter that rescues, rehabilitates, and rehomes 
                hundreds of animals every year.
              </p>
              <p className="text-gray-700 text-lg">
                Today, we operate a modern shelter facility in Vashi with dedicated medical care, 
                rehabilitation programs, and a team of passionate staff and volunteers committed to 
                improving the lives of animals in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To rescue, rehabilitate, and rehome stray and abandoned animals while promoting 
              responsible pet ownership and animal welfare through community education and engagement.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A society where every animal is treated with compassion and respect, and no animal 
              has to suffer from neglect, abuse, or homelessness.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <Statistics />

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-amber-500 text-4xl mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to adopt, volunteer, donate, or just learn more, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/volunteer"
              className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}