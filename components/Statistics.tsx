import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';

const stats = [
  {
    icon: <FaPaw />,
    value: '150+',
    label: 'Animals Rescued',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: <FaHome />,
    value: '120+',
    label: 'Successful Adoptions',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: <FaHeartbeat />,
    value: '45',
    label: 'Medical Treatments',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: <FaUsers />,
    value: '50+',
    label: 'Active Volunteers',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: <FaCalendarAlt />,
    value: '5',
    label: 'Years of Service',
    color: 'from-red-400 to-rose-400',
  },
  {
    icon: <FaStar />,
    value: '4.9',
    label: 'Satisfaction Rating',
    color: 'from-yellow-400 to-amber-400',
  },
];

export default function Statistics() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Making a difference one animal at a time. Here's what we've accomplished together.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <div className="text-2xl text-white">{stat.icon}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-amber-100 mb-6">
                Every contribution helps us provide better care and find loving homes for animals in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/donate"
                  className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-center transition-colors"
                >
                  Donate Now
                </a>
                <a
                  href="/volunteer"
                  className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-3 rounded-full font-bold text-center transition-colors"
                >
                  Become a Volunteer
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">₹250K+</div>
                <div className="text-amber-100">Raised in 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}