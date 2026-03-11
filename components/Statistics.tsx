// components/Statistics.tsx
'use client';

import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <FaPaw />,
    value: 180,
    suffix: '+',
    label: 'Pets Adopted',
    description: 'Loving homes created in Navi Mumbai',
    iconColor: 'text-[#1b93d1]',
    bgColor: 'bg-[#1b93d1]/5'
  },
  {
    icon: <FaHome />,
    value: 95,
    suffix: '%',
    label: 'Adoption Success Rate',
    description: 'Successful long-term placements',
    iconColor: 'text-[#223d7c]',
    bgColor: 'bg-[#223d7c]/5'
  },
  {
    icon: <FaCalendarAlt />,
    value: 3200,
    suffix: '+',
    label: 'Daycare Visits',
    description: 'Happy stays at PawHeaven',
    iconColor: 'text-[#1b93d1]',
    bgColor: 'bg-[#1b93d1]/5'
  },
  {
    icon: <FaHeartbeat />,
    value: 24,
    suffix: '/7',
    label: 'Care Monitoring',
    description: 'Round-the-clock supervision',
    iconColor: 'text-[#223d7c]',
    bgColor: 'bg-[#223d7c]/5'
  },
  {
    icon: <FaUsers />,
    value: 1200,
    suffix: '+',
    label: 'Happy Pet Parents',
    description: 'Families who trust our care',
    iconColor: 'text-[#1b93d1]',
    bgColor: 'bg-[#1b93d1]/5'
  },
  {
    icon: <FaStar />,
    value: 4.9,
    suffix: '',
    label: 'Customer Rating',
    description: 'Average satisfaction score',
    iconColor: 'text-[#223d7c]',
    bgColor: 'bg-[#223d7c]/5'
  },
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-3">
            By The <span className="text-[#1b93d1]">Numbers</span>
          </h2>
          <p className="text-sm sm:text-base text-[#223d7c]/70 max-w-2xl mx-auto">
            Delivering trusted adoption and professional daycare services across Navi Mumbai.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300 relative">
                
                {/* Icon */}
                <div className={`${stat.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`${stat.iconColor} text-lg sm:text-xl`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#223d7c]">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        decimals={stat.value === 4.9 ? 1 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  {stat.suffix && (
                    <span className="text-lg sm:text-xl font-bold text-[#1b93d1]">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label & Description */}
                <h3 className="text-base sm:text-lg font-semibold text-[#223d7c] mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#223d7c]/60">
                  {stat.description}
                </p>

                {/* Decorative Number - Matte */}
                <div className="absolute bottom-3 right-3 text-3xl sm:text-4xl font-bold text-[#223d7c]/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link href="/animals" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#1b93d1] text-white font-medium rounded-lg hover:bg-[#157bb0] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaPaw className="group-hover:scale-110 transition-transform" />
              <span>Adopt a Pet</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link href="/daycare" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-[#223d7c]/20 text-[#223d7c] font-medium rounded-lg hover:bg-[#223d7c]/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaHome className="group-hover:scale-110 transition-transform" />
              <span>Book Daycare</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Badge - Matte */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#223d7c]/10">
            <FaStar className="text-[#1b93d1] text-xs sm:text-sm" />
            <span className="text-xs sm:text-sm text-[#223d7c]/70">Trusted by 5,000+ pet parents across Navi Mumbai</span>
            <FaStar className="text-[#1b93d1] text-xs sm:text-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



// // components/Statistics.tsx
// 'use client';

// import { FaPaw, FaHome, FaHeartbeat, FaUsers, FaCalendarAlt, FaStar, FaHeart, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const stats = [
//   {
//     icon: <FaPaw />,
//     value: 180,
//     suffix: '+',
//     label: 'Pets Adopted',
//     description: 'Loving homes created in Navi Mumbai',
//     color: 'from-[#b87d5e] to-[#9e6a4f]'
//   },
//   {
//     icon: <FaHome />,
//     value: 95,
//     suffix: '%',
//     label: 'Adoption Success Rate',
//     description: 'Successful long-term placements',
//     color: 'from-[#2c4a3e] to-[#1e352b]'
//   },
//   {
//     icon: <FaCalendarAlt />,
//     value: 3200,
//     suffix: '+',
//     label: 'Daycare Visits',
//     description: 'Happy stays at PawHeaven',
//     color: 'from-[#b87d5e] to-[#9e6a4f]'
//   },
//   {
//     icon: <FaHeartbeat />,
//     value: 24,
//     suffix: '/7',
//     label: 'Care Monitoring',
//     description: 'Round-the-clock supervision',
//     color: 'from-[#2c4a3e] to-[#1e352b]'
//   },
//   {
//     icon: <FaUsers />,
//     value: 1200,
//     suffix: '+',
//     label: 'Happy Pet Parents',
//     description: 'Families who trust our care',
//     color: 'from-[#b87d5e] to-[#9e6a4f]'
//   },
//   {
//     icon: <FaStar />,
//     value: 4.9,
//     suffix: '',
//     label: 'Customer Rating',
//     description: 'Average satisfaction score',
//     color: 'from-[#2c4a3e] to-[#1e352b]'
//   },
// ];

// export default function Statistics() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]" />
      
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 lg:top-20 left-5 lg:left-10 w-48 lg:w-64 h-48 lg:h-64 bg-[#b87d5e] rounded-full blur-3xl" />
//         <div className="absolute bottom-10 lg:bottom-20 right-5 lg:right-10 w-64 lg:w-96 h-64 lg:h-96 bg-[#2c4a3e] rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-12 lg:mb-16"
//         >
//           <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//               <FaHandHoldingHeart className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#b87d5e]" />
//             </div>
//             <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
//               Our Impact
//             </span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4">
//             By The <span className="text-[#b87d5e]">Numbers</span>
//           </h2>
          
//           <p className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto px-4">
//            Delivering trusted adoption and professional daycare services across Navi Mumbai.
//           </p>
//         </motion.div>
        
//         {/* Stats Grid */}
//         <div 
//           ref={ref}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative"
//             >
//               <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                
//                 {/* Gradient Overlay on Hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
//                 {/* Icon */}
//                 <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
//                   <div className="absolute inset-0 bg-[#b87d5e] rounded-lg sm:rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
//                   <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                     {stat.icon}
//                   </div>
//                 </div>
                
//                 {/* Value */}
//                 <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
//                   <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors duration-300">
//                     {inView ? (
//                       <CountUp
//                         end={stat.value}
//                         duration={2.5}
//                         decimals={stat.value === 4.9 ? 1 : 0}
//                       />
//                     ) : (
//                       stat.value
//                     )}
//                   </span>
//                   {stat.suffix && (
//                     <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]/60">
//                       {stat.suffix}
//                     </span>
//                   )}
//                 </div>
                
//                 {/* Label */}
//                 <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c4a3e] mb-1 sm:mb-2">
//                   {stat.label}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-xs sm:text-sm text-[#2c4a3e]/60 leading-relaxed">
//                   {stat.description}
//                 </p>

//                 {/* Decorative Number - Visible on all screens but smaller on mobile */}
//                 <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c4a3e]/5 select-none">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Fundraising Highlight */}
       
        
//         {/* CTA Buttons */}
//         <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ delay: 0.5 }}
//   className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
// >
//   <Link href="/animals" className="w-full sm:w-auto">
//     <button className="group cursor-pointer w-full sm:w-auto px-6 py-3 bg-[#2c4a3e] text-white font-semibold rounded-xl hover:bg-[#1e352b] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
//       <FaPaw />
//       <span>Adopt a Pet</span>
//       <FaArrowRight />
//     </button>
//   </Link>

//   <Link href="/daycare" className="w-full sm:w-auto">
//     <button className="group cursor-pointer w-full sm:w-auto px-6 py-3 bg-[#b87d5e] text-white font-semibold rounded-xl hover:bg-[#9e6a4f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
//       <FaHome />
//       <span>Book Daycare</span>
//       <FaArrowRight />
//     </button>
//   </Link>
// </motion.div>

//         {/* Trust Badge */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="text-center mt-6 sm:mt-8"
//         >
//           <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#2c4a3e]/50">
//             <FaStar className="text-[#b87d5e] text-xs sm:text-sm" />
//             <span>Trusted by 5,000+ pet parents across Navi Mumbai</span>
//             <FaStar className="text-[#b87d5e] text-xs sm:text-sm" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }