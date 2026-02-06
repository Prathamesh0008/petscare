import VolunteerForm from '@/components/VolunteerForm';
import { FaHandsHelping, FaCalendarCheck, FaUsers, FaHeartbeat } from 'react-icons/fa';

const volunteerRoles = [
  {
    icon: <FaHandsHelping />,
    title: 'Animal Care',
    description: 'Feeding, grooming, and providing basic care to animals.',
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Event Support',
    description: 'Help organize and run adoption events and fundraisers.',
  },
  {
    icon: <FaUsers />,
    title: 'Socialization',
    description: 'Spend time with animals to help them become more social.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Medical Support',
    description: 'Assist with basic medical care under supervision.',
  },
];

const benefits = [
  'Make a tangible difference in animals\' lives',
  'Learn about animal care and welfare',
  'Meet like-minded animal lovers',
  'Gain valuable experience for animal-related careers',
  'Receive volunteer recognition and certificates',
  'Flexible scheduling options',
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become a Volunteer</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help us make a difference in the lives of animals in need.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Volunteer Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Volunteer Roles */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Volunteer Roles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {volunteerRoles.map((role, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                    <div className="text-amber-500 text-3xl mb-4">{role.icon}</div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{role.title}</h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Must Have</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">Minimum 18 years of age</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">Love for animals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">Commitment to regular hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">Ability to follow instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Nice to Have</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-700">Previous animal care experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-700">Veterinary or medical background</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-700">Experience with shy/fearful animals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-700">Photography or social media skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Volunteering</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Volunteer Form */}
          <div>
            <VolunteerForm />
            
            {/* Orientation Info */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Orientation & Training</h3>
              <p className="text-gray-600 mb-6">
                All volunteers must attend a mandatory orientation session before starting.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Next Orientation</div>
                  <p className="text-gray-600">Every Saturday at 10:00 AM</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Duration</div>
                  <p className="text-gray-600">2 hours (includes shelter tour)</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Location</div>
                  <p className="text-gray-600">PawHaven Vashi Shelter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}