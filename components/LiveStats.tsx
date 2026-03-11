// components/LiveStats.tsx
'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaPaw, FaHeart, FaUsers, FaHome, FaStethoscope, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LiveStats = () => {
  const [stats, setStats] = useState({
    animalsInShelter: 24,
    adoptedToday: 3,
    volunteersActive: 8,
    urgentCases: 5,
    donationsToday: 12500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        animalsInShelter: prev.animalsInShelter + (Math.random() > 0.7 ? 1 : 0),
        adoptedToday: prev.adoptedToday + (Math.random() > 0.9 ? 1 : 0),
        donationsToday: prev.donationsToday + Math.floor(Math.random() * 1000),
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: <FaPaw />,
      value: stats.animalsInShelter,
      label: 'In Shelter',
      trend: '+2 this week',
      color: 'text-[#1b93d1]',
      bgColor: 'bg-[#1b93d1]/5',
      borderColor: 'border-[#1b93d1]/10'
    },
    {
      icon: <FaHome />,
      value: stats.adoptedToday,
      label: 'Adopted Today',
      trend: 'Just now',
      color: 'text-[#223d7c]',
      bgColor: 'bg-[#223d7c]/5',
      borderColor: 'border-[#223d7c]/10'
    },
    {
      icon: <FaUsers />,
      value: stats.volunteersActive,
      label: 'Active Volunteers',
      trend: 'Currently helping',
      color: 'text-[#1b93d1]',
      bgColor: 'bg-[#1b93d1]/5',
      borderColor: 'border-[#1b93d1]/10'
    },
    {
      icon: <FaStethoscope />,
      value: stats.urgentCases,
      label: 'Urgent Cases',
      trend: 'Needs attention',
      color: 'text-[#223d7c]',
      bgColor: 'bg-[#223d7c]/5',
      borderColor: 'border-[#223d7c]/10'
    },
    {
      icon: <FaHeart />,
      value: `₹${stats.donationsToday.toLocaleString()}`,
      label: 'Donated Today',
      trend: '+₹1,250 recently',
      color: 'text-[#1b93d1]',
      bgColor: 'bg-[#1b93d1]/5',
      borderColor: 'border-[#1b93d1]/10'
    },
  ];

  return (
    <div className="bg-[#f8f6f2] py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
            Real-Time Updates
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-3 md:mb-4">
            Live Shelter Statistics
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#223d7c]/70 max-w-2xl mx-auto px-4">
            Real-time updates on our shelter operations and impact
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-14">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className={`bg-white rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 h-full flex flex-col justify-between border ${stat.borderColor} hover:border-[#1b93d1]/30`}>
                
                {/* Icon */}
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <div className={`${stat.color} text-xl sm:text-2xl md:text-3xl`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value and Label */}
                <div className="relative">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#223d7c] mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-xs sm:text-sm md:text-base font-medium text-[#223d7c]/70 mb-1 sm:mb-2">
                    {stat.label}
                  </div>
                  
                  <div className={`text-[10px] sm:text-xs md:text-sm ${stat.color} font-medium flex items-center gap-1`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    {stat.trend}
                  </div>
                </div>
                
                {/* Live Indicator */}
                {index < 2 && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-[#1b93d1]/10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1b93d1] rounded-full"></div>
                    <span className="text-[10px] sm:text-xs text-[#1b93d1] font-medium">Live</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Goal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-lg p-5 sm:p-6 md:p-8 border border-[#223d7c]/10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 md:gap-8">
            
            {/* Left Section */}
            <div className="lg:w-3/5">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 text-center xs:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaBullseye className="text-[#1b93d1] text-base sm:text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#223d7c] mb-1 sm:mb-2">
                    Monthly Adoption Goal
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#223d7c]/70 max-w-xl">
                    Help us reach our target for this month. Every adoption creates space for another animal in need.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Section - Progress & Button */}
            <div className="lg:w-2/5">
              <div className="mb-4 sm:mb-5">
                <div className="flex justify-between mb-1 sm:mb-2">
                  <span className="text-xs sm:text-sm font-medium text-[#223d7c]/70">Progress</span>
                  <span className="text-xs sm:text-sm font-bold text-[#223d7c]">15/25 (60%)</span>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden mb-2 sm:mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-[#1b93d1] h-2 sm:h-2.5 rounded-full"
                  />
                </div>
                
                <div className="text-xs sm:text-sm text-[#223d7c]/60">
                  10 more adoptions needed this month
                </div>
              </div>
              
              <Link href="/animals">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 sm:py-3 bg-[#1b93d1] cursor-pointer text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#157bb0] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Help Reach Our Goal
                  <FaHeart className="text-sm" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-[#223d7c]/50 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#1b93d1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b93d1]"></span>
            </span>
            Statistics update in real-time • Last updated: Just now
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveStats;

// // components/LiveStats.tsx
// 'use client';
// import Link from "next/link";
// import { useState, useEffect } from 'react';
// import { FaPaw, FaHeart, FaUsers, FaHome, FaStethoscope, FaBullseye } from 'react-icons/fa';

// const LiveStats = () => {
//   const [stats, setStats] = useState({
//     animalsInShelter: 24,
//     adoptedToday: 3,
//     volunteersActive: 8,
//     urgentCases: 5,
//     donationsToday: 12500,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats(prev => ({
//         ...prev,
//         animalsInShelter: prev.animalsInShelter + (Math.random() > 0.7 ? 1 : 0),
//         adoptedToday: prev.adoptedToday + (Math.random() > 0.9 ? 1 : 0),
//         donationsToday: prev.donationsToday + Math.floor(Math.random() * 1000),
//       }));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const statCards = [
//     {
//       icon: <FaPaw />,
//       value: stats.animalsInShelter,
//       label: 'In Shelter',
//       trend: '+2 this week',
//       color: 'text-[#b87d5e]',
//       bgColor: 'bg-[#b87d5e]/10'
//     },
//     {
//       icon: <FaHome />,
//       value: stats.adoptedToday,
//       label: 'Adopted Today',
//       trend: 'Just now',
//       color: 'text-[#2c4a3e]',
//       bgColor: 'bg-[#2c4a3e]/10'
//     },
//     {
//       icon: <FaUsers />,
//       value: stats.volunteersActive,
//       label: 'Active Volunteers',
//       trend: 'Currently helping',
//       color: 'text-[#b87d5e]',
//       bgColor: 'bg-[#b87d5e]/10'
//     },
//     {
//       icon: <FaStethoscope />,
//       value: stats.urgentCases,
//       label: 'Urgent Cases',
//       trend: 'Needs attention',
//       color: 'text-[#2c4a3e]',
//       bgColor: 'bg-[#2c4a3e]/10'
//     },
//     {
//       icon: <FaHeart />,
//       value: `₹${stats.donationsToday.toLocaleString()}`,
//       label: 'Donated Today',
//       trend: '+₹1,250 recently',
//       color: 'text-[#b87d5e]',
//       bgColor: 'bg-[#b87d5e]/10'
//     },
//   ];

//   return (
//     <div className="bg-[#f5f7f0] py-12 sm:py-14 md:py-16">
//       <div className="container mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="mb-8 sm:mb-10 md:mb-12 text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4">
//             Live Shelter Statistics
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto px-4">
//             Real-time updates on our shelter operations and impact
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-10 sm:mb-12 md:mb-14">
//           {statCards.map((stat, index) => (
//             <div key={index} className="relative group h-full">
//               <div className={`${stat.bgColor} rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col justify-between border border-[#2c4a3e]/10 bg-white/80 backdrop-blur-sm`}>
                
//                 {/* Icon */}
//                 <div className={`${stat.color} text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-5 lg:mb-6`}>
//                   {stat.icon}
//                 </div>
                
//                 {/* Value and Label */}
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c4a3e] mb-1 sm:mb-2 md:mb-3 break-words">
//                     {stat.value}
//                   </div>
                  
//                   <div className="text-xs sm:text-sm md:text-base font-medium text-[#2c4a3e]/80 mb-1 sm:mb-2">
//                     {stat.label}
//                   </div>
                  
//                   <div className={`text-[10px] sm:text-xs md:text-sm ${stat.color} font-medium`}>
//                     {stat.trend}
//                   </div>
//                 </div>
                
//                 {/* Live Indicator */}
//                 {index < 2 && (
//                   <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 flex items-center gap-1 sm:gap-2">
//                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#b87d5e] rounded-full animate-pulse"></div>
//                     <span className="text-[10px] sm:text-xs md:text-sm text-[#b87d5e] font-medium">Live</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Monthly Goal Section */}
//         <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 mb-8 sm:mb-10 border border-[#2c4a3e]/20 shadow-sm">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            
//             {/* Left Section */}
//             <div className="lg:w-3/5">
//               <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 md:gap-6 text-center xs:text-left">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#b87d5e]/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaBullseye className="text-[#b87d5e] text-base sm:text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e] mb-1 sm:mb-2">
//                     Monthly Adoption Goal
//                   </h3>
//                   <p className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/70 max-w-xl">
//                     Help us reach our target for this month. Every adoption creates space for another animal in need.
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Section - Progress & Button */}
//             <div className="lg:w-2/5">
//               <div className="mb-4 sm:mb-5 md:mb-6">
//                 <div className="flex justify-between mb-1 sm:mb-2 md:mb-3">
//                   <span className="text-xs sm:text-sm md:text-base font-medium text-[#2c4a3e]/80">Progress</span>
//                   <span className="text-xs sm:text-sm md:text-base font-bold text-[#2c4a3e]">15/25 (60%)</span>
//                 </div>
                
//                 <div className="w-full bg-[#f0f2e8] rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden mb-2 sm:mb-3 md:mb-4">
//                   <div 
//                     className="bg-gradient-to-r from-[#2c4a3e] to-[#b87d5e] h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500"
//                     style={{ width: '60%' }}
//                   ></div>
//                 </div>
                
//                 <div className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/60">
//                   10 more adoptions needed this month
//                 </div>
//               </div>
              
//               <Link href="/animals">
//   <button className="w-full py-2.5 sm:py-3 md:py-4 bg-[#2c4a3e] text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-[#1e352b] transition-colors shadow-md hover:shadow-lg cursor-pointer">
//     Help Reach Our Goal
//   </button>
// </Link>
//             </div>
//           </div>
//         </div>

//         {/* Footer Note */}
//         <div className="mt-6 sm:mt-8 md:mt-10 text-center">
//           <p className="text-xs sm:text-sm md:text-base text-[#2c4a3e]/50">
//             Statistics update in real-time • Last updated: Just now
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveStats;