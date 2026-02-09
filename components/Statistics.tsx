import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaHeart } from 'react-icons/fa';

const stats = [
  {
    icon: <FaPaw />,
    value: '150+',
    label: 'Animals Rescued',
    description: 'From the streets of Navi Mumbai',
  },
  {
    icon: <FaHome />,
    value: '120+',
    label: 'Forever Homes',
    description: 'Happy families created',
  },
  {
    icon: <FaHeartbeat />,
    value: '45',
    label: 'Medical Treatments',
    description: 'Lives saved through care',
  },
  {
    icon: <FaUsers />,
    value: '50+',
    label: 'Active Volunteers',
    description: 'Dedicated community members',
  },
  {
    icon: <FaCalendarAlt />,
    value: '5',
    label: 'Years of Service',
    description: 'Serving since 2019',
  },
  {
    icon: <FaStar />,
    value: '4.9',
    label: 'Satisfaction',
    description: 'Community rating',
  },
];

export default function Statistics() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            By The Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our collective impact on animal welfare in Navi Mumbai.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-amber-600 text-xl">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white border border-amber-200 rounded-xl px-8 py-6 mb-8">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              ₹250,000+
            </div>
            <div className="text-gray-600">
              Raised for animal welfare in 2024
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaHeart />
              Make a Donation
            </a>
            <a
              href="/volunteer"
              className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}