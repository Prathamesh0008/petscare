// components/Statistics.tsx
'use client';

import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaHeart, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <FaPaw />,
    value: 150,
    suffix: '+',
    label: 'Animals Rescued',
    description: 'From the streets of Navi Mumbai',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaHome />,
    value: 120,
    suffix: '+',
    label: 'Forever Homes',
    description: 'Happy families created',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
  {
    icon: <FaHeartbeat />,
    value: 45,
    suffix: '',
    label: 'Medical Treatments',
    description: 'Lives saved through care',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaUsers />,
    value: 50,
    suffix: '+',
    label: 'Active Volunteers',
    description: 'Dedicated community members',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
  {
    icon: <FaCalendarAlt />,
    value: 5,
    suffix: '',
    label: 'Years of Service',
    description: 'Serving since 2019',
    color: 'from-[#b87d5e] to-[#9e6a4f]'
  },
  {
    icon: <FaStar />,
    value: 4.9,
    suffix: '',
    label: 'Satisfaction',
    description: 'Community rating',
    color: 'from-[#2c4a3e] to-[#1e352b]'
  },
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2c4a3e] rounded-full blur-3xl" />
      </div>

      {/* Paw Print Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm20-30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5z" fill="%232c4a3e" fill-opacity="0.2"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
              <FaHandHoldingHeart className="text-2xl text-[#b87d5e]" />
            </div>
            <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
              Our Impact
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
            By The <span className="text-[#b87d5e]">Numbers</span>
          </h2>
          
          <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
            Our collective impact on animal welfare in Navi Mumbai, made possible by your support.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#b87d5e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors duration-300">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        decimals={stat.value === 4.9 ? 1 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl font-bold text-[#2c4a3e]/60">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-[#2c4a3e] mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-[#2c4a3e]/60 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Number */}
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#2c4a3e]/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Fundraising Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mb-12"
        >
          <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center">
                    <FaHeart className="text-4xl text-[#b87d5e]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#2c4a3e]/60 mb-2">2024 Fundraising</div>
                    <div className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-1">
                      ₹250,000+
                    </div>
                    <p className="text-[#2c4a3e]/70">
                      Raised for animal welfare this year
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full md:w-64">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#2c4a3e]">Goal: ₹500,000</span>
                    <span className="text-[#b87d5e] font-semibold">50%</span>
                  </div>
                  <div className="w-full h-3 bg-[#2c4a3e]/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/donate">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] text-white font-semibold rounded-xl hover:from-[#9e6a4f] hover:to-[#8a5a42] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
              <FaHeart className="group-hover:scale-110 transition-transform" />
              <span>Make a Donation</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="/volunteer">
            <button className="group px-8 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <FaUsers />
              <span>Join Our Team</span>
            </button>
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#2c4a3e]/50">
            <FaStar className="text-[#b87d5e]" />
            <span>Trusted by 5,000+ community members</span>
            <FaStar className="text-[#b87d5e]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}








// //components\Statistics.tsx
// import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaHeart } from 'react-icons/fa';

// const stats = [
//   {
//     icon: <FaPaw />,
//     value: '150+',
//     label: 'Animals Rescued',
//     description: 'From the streets of Navi Mumbai',
//   },
//   {
//     icon: <FaHome />,
//     value: '120+',
//     label: 'Forever Homes',
//     description: 'Happy families created',
//   },
//   {
//     icon: <FaHeartbeat />,
//     value: '45',
//     label: 'Medical Treatments',
//     description: 'Lives saved through care',
//   },
//   {
//     icon: <FaUsers />,
//     value: '50+',
//     label: 'Active Volunteers',
//     description: 'Dedicated community members',
//   },
//   {
//     icon: <FaCalendarAlt />,
//     value: '5',
//     label: 'Years of Service',
//     description: 'Serving since 2019',
//   },
//   {
//     icon: <FaStar />,
//     value: '4.9',
//     label: 'Satisfaction',
//     description: 'Community rating',
//   },
// ];

// export default function Statistics() {
//   return (
//     <div className="bg-gray-50 py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             By The Numbers
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our collective impact on animal welfare in Navi Mumbai.
//           </p>
//         </div>
        
//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <div className="text-amber-600 text-xl">
//                     {stat.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-900 font-medium mb-2">
//                     {stat.label}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     {stat.description}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* CTA */}
//         <div className="text-center">
//           <div className="inline-block bg-white border border-amber-200 rounded-xl px-8 py-6 mb-8">
//             <div className="text-3xl font-bold text-amber-600 mb-2">
//               ₹250,000+
//             </div>
//             <div className="text-gray-600">
//               Raised for animal welfare in 2024
//             </div>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/donate"
//               className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
//             >
//               <FaHeart />
//               Make a Donation
//             </a>
//             <a
//               href="/volunteer"
//               className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
//             >
//               Join Our Team
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }