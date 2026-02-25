// components/DonationProgress.tsx
'use client';

import { FaHeart, FaGift, FaPaw, FaArrowRight, FaFire, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DonationProgress() {
  const goalAmount = 500000;
  const currentAmount = 325000;
  const percentage = (currentAmount / goalAmount) * 100;
  const daysLeft = 15;
  const donorsCount = 247;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2c4a3e] rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-3xl p-1">
        <div className="bg-white rounded-3xl p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-lg opacity-30 animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center shadow-lg">
                  <FaGift className="text-3xl text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2c4a3e] mb-1">
                  Monthly Donation Goal
                </h3>
                <p className="text-[#2c4a3e]/60">
                  Help us reach our target to support more animals in need
                </p>
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="bg-[#b87d5e]/10 px-4 py-2 rounded-full flex items-center gap-2">
              <FaFire className="text-[#b87d5e]" />
              <span className="text-[#b87d5e] font-semibold">{daysLeft} days left</span>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#f5f7f0] rounded-xl p-4">
              <div className="text-sm text-[#2c4a3e]/60 mb-1">Current</div>
              <div className="text-xl font-bold text-[#2c4a3e]">₹{currentAmount.toLocaleString()}</div>
            </div>
            <div className="bg-[#f5f7f0] rounded-xl p-4">
              <div className="text-sm text-[#2c4a3e]/60 mb-1">Goal</div>
              <div className="text-xl font-bold text-[#2c4a3e]">₹{goalAmount.toLocaleString()}</div>
            </div>
            <div className="bg-[#f5f7f0] rounded-xl p-4">
              <div className="text-sm text-[#2c4a3e]/60 mb-1">Donors</div>
              <div className="text-xl font-bold text-[#2c4a3e]">{donorsCount}</div>
            </div>
            <div className="bg-[#f5f7f0] rounded-xl p-4">
              <div className="text-sm text-[#2c4a3e]/60 mb-1">Progress</div>
              <div className="text-xl font-bold text-[#b87d5e]">{Math.round(percentage)}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-[#2c4a3e]">Monthly Progress</span>
              <span className="text-sm font-medium text-[#b87d5e]">
                ₹{(goalAmount - currentAmount).toLocaleString()} needed
              </span>
            </div>
            
            <div className="relative w-full h-4 bg-[#2c4a3e]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] rounded-full"
              />
              
              {/* Milestone Markers */}
              <div className="absolute top-0 left-1/4 w-0.5 h-full bg-white/30" />
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/30" />
              <div className="absolute top-0 left-3/4 w-0.5 h-full bg-white/30" />
            </div>

            {/* Milestone Labels */}
            <div className="flex justify-between mt-1 text-xs text-[#2c4a3e]/40">
              <span>₹125k</span>
              <span>₹250k</span>
              <span>₹375k</span>
              <span>₹500k</span>
            </div>
          </div>

          {/* Impact Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="text-center">
              <div className="text-xl font-bold text-[#2c4a3e]">50+</div>
              <div className="text-xs text-[#2c4a3e]/60">Meals Daily</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#2c4a3e]">15</div>
              <div className="text-xs text-[#2c4a3e]/60">Medical Checkups</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#2c4a3e]">8</div>
              <div className="text-xs text-[#2c4a3e]/60">New Beds</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#2c4a3e]">120+</div>
              <div className="text-xs text-[#2c4a3e]/60">Vaccinations</div>
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/5 rounded-xl p-5 mb-6 border border-[#b87d5e]/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#b87d5e]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaHeart className="text-[#b87d5e] text-sm" />
              </div>
              <p className="text-sm text-[#2c4a3e]/70">
                Your donation helps provide food, medical care, and love to animals in need. 
                Every contribution makes a difference in their lives.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate" className="flex-1">
              <button className="w-full py-4 bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white font-semibold rounded-xl hover:from-[#1e352b] hover:to-[#0f1f18] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg">
                <FaHeart className="group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/donate/monthly" className="flex-1">
              <button className="w-full py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-xl hover:bg-[#2c4a3e]/5 transition-all duration-300 flex items-center justify-center gap-3">
                <FaCalendarAlt />
                <span>Monthly Giving</span>
              </button>
            </Link>
          </div>

          {/* Recent Donors */}
          <div className="mt-6 pt-6 border-t border-[#2c4a3e]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[#2c4a3e]/60">
                  +{donorsCount} supporters this month
                </span>
              </div>
              <Link href="/donate/impact" className="text-sm text-[#b87d5e] hover:text-[#9e6a4f] transition-colors">
                See impact →
              </Link>
            </div>
          </div>

          {/* Paw Print Decoration */}
          <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
            <FaPaw className="text-9xl text-[#2c4a3e]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}









// //components\DonationProgress.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { FaHeart, FaUsers, FaCalendarAlt, FaShareAlt, FaBell, FaGift, FaArrowRight } from 'react-icons/fa';

// export default function DonationProgress() {
//   const [donations, setDonations] = useState({
//     current: 45000,
//     target: 100000,
//     donors: 234,
//     daysLeft: 15,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDonations(prev => ({
//         ...prev,
//         current: prev.current + Math.floor(Math.random() * 250),
//         donors: prev.donors + Math.floor(Math.random() * 1),
//       }));
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   const progress = (donations.current / donations.target) * 100;

//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-1">Medical Fund Progress</h3>
//           <p className="text-sm text-gray-600">Support animal healthcare</p>
//         </div>
//         <div className="flex items-center gap-1 text-sm text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">
//           <FaCalendarAlt className="text-xs" />
//           <span className="font-medium">{donations.daysLeft} days left</span>
//         </div>
//       </div>

//       {/* Progress Bar - Clear and Readable */}
//       <div className="mb-7">
//         <div className="flex justify-between mb-2">
//           <div className="text-lg font-bold text-gray-900">₹{donations.current.toLocaleString()}</div>
//           <div className="text-lg font-bold text-gray-900">₹{donations.target.toLocaleString()}</div>
//         </div>
        
//         <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
//           <div 
//             className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full transition-all duration-300 shadow-sm"
//             style={{ width: `${Math.min(progress, 100)}%` }}
//           ></div>
//         </div>
        
//         <div className="flex justify-between text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1">
//               <FaHeart className="text-red-400" />
//               <span className="font-medium">{Math.round(progress)}% funded</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-1">
//             <FaUsers className="text-blue-400" />
//             <span className="font-medium">{donations.donors} donors</span>
//           </div>
//         </div>
//       </div>

//       {/* Stats - Clear and Organized */}
//       <div className="grid grid-cols-3 gap-4 mb-7">
//         <div className="bg-gray-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-gray-900 mb-1">{Math.floor(donations.current / 500)}</div>
//           <div className="text-sm text-gray-600">Medical Kits</div>
//           <div className="text-xs text-emerald-600 font-medium mt-1">Funded</div>
//         </div>
        
//         <div className="bg-gray-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
//           <div className="text-sm text-gray-600">Animals Helped</div>
//           <div className="text-xs text-blue-600 font-medium mt-1">This month</div>
//         </div>
        
//         <div className="bg-gray-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-gray-900 mb-1">₹4.2k</div>
//           <div className="text-sm text-gray-600">Avg. Donation</div>
//           <div className="text-xs text-purple-600 font-medium mt-1">Per donor</div>
//         </div>
//       </div>

//       {/* Milestones - Clean Visual */}
//       <div className="mb-7">
//         <h4 className="text-base font-semibold text-gray-900 mb-4">Fund Milestones</h4>
        
//         <div className="relative pt-2">
//           {/* Progress line */}
//           <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200"></div>
          
//           <div className="relative flex justify-between">
//             {[
//               { amount: 5000, label: 'Kits', icon: '🩹' },
//               { amount: 15000, label: 'Vaccine', icon: '💉' },
//               { amount: 25000, label: 'Surgery', icon: '⚕️' },
//               { amount: 50000, label: 'Van', icon: '🚐' },
//             ].map((milestone, index) => {
//               const isCompleted = donations.current >= milestone.amount;
//               const isNext = donations.current < milestone.amount && 
//                            (index === 0 || donations.current >= [5000, 15000, 25000][index - 1] || index === 3);
              
//               return (
//                 <div key={index} className="flex flex-col items-center text-center">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 z-10 ${
//                     isCompleted 
//                       ? 'bg-emerald-100 border-2 border-emerald-500' 
//                       : isNext
//                       ? 'bg-amber-100 border-2 border-amber-500'
//                       : 'bg-gray-100 border-2 border-gray-300'
//                   }`}>
//                     <span className="text-sm">{milestone.icon}</span>
//                   </div>
//                   <div className="text-sm font-medium text-gray-900">₹{milestone.amount.toLocaleString()}</div>
//                   <div className="text-xs text-gray-600 mt-0.5">{milestone.label}</div>
//                 </div>
//               );
//             })}
//           </div>
          
//           {/* Current progress indicator */}
//           <div 
//             className="absolute top-5 h-1 bg-emerald-500 transition-all duration-300"
//             style={{ width: `${Math.min(progress / 2, 50)}%` }}
//           ></div>
//         </div>
        
//         {/* Next goal */}
//         <div className="mt-4 text-center">
//           <div className="inline-flex items-center gap-2 text-sm bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg">
//             <FaArrowRight className="text-xs" />
//             <span className="font-medium">
//               Next: ₹{(50000 - donations.current).toLocaleString()} for Rescue Van
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* CTA Button - Prominent but Clean */}
//       <div className="space-y-3">
//         <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2">
//           <FaHeart />
//           Donate Now
//           <FaArrowRight className="text-sm" />
//         </button>
        
//         <div className="flex items-center justify-between">
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors">
//             <FaShareAlt />
//             <span>Share Campaign</span>
//           </button>
          
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors">
//             <FaBell />
//             <span>Set Reminder</span>
//           </button>
//         </div>
//       </div>

//       {/* Footer - Subtle */}
//       <div className="mt-6 pt-5 border-t border-gray-100 text-center">
//         <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
//           <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//           <span>Updated just now • Donations are tax-deductible</span>
//         </div>
//       </div>
//     </div>
//   );
// }