// components/EmergencyBanner.tsx
'use client';

import { useState } from 'react';
import {
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaAmbulance,
  FaHeartbeat,
  FaShieldAlt
} from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 max-w-full sm:max-w-md"
      >
        <div className="relative">

          <div className="relative bg-white border border-[#223d7c]/10 rounded-lg shadow-lg overflow-hidden">

            {/* Top Accent */}
            <div className="h-1 bg-[#1b93d1]" />

            <div className="p-5 sm:p-6">

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center">
                    <FaAmbulance className="text-[#1b93d1] text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#223d7c]">
                      Emergency Rescue
                    </h3>
                    <p className="text-sm text-[#223d7c]/60">
                      24/7 Animal Response Team
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-[#223d7c]/40 hover:text-[#223d7c]/60 bg-[#223d7c]/5 hover:bg-[#223d7c]/10 rounded-lg p-2 transition"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Alert Box */}
              <div className="bg-[#1b93d1]/5 rounded-lg p-4 mb-4 border border-[#1b93d1]/10">
                <div className="flex items-start gap-3">
                  <FaHeartbeat className="text-[#1b93d1] text-lg mt-1" />
                  <p className="text-sm text-[#223d7c]/70 leading-relaxed">
                    Found an injured or distressed animal? Our emergency team
                    provides immediate rescue and medical attention across Navi Mumbai.
                  </p>
                </div>
              </div>

              {/* Call Button */}
              <a
                href="tel:+919876543210"
                className="group flex items-center justify-between bg-[#f8f6f2] hover:bg-[#f0eee8] p-4 rounded-lg border border-[#223d7c]/10 transition-all duration-300 mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1b93d1] rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="text-white text-xs" />
                  </div>
                  <span className="font-medium text-[#223d7c]">
                    Emergency Hotline
                  </span>
                </div>
                <span className="font-medium text-[#1b93d1]">
                  +91 98765 43210
                </span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[#f8f6f2] hover:bg-[#f0eee8] p-4 rounded-lg border border-[#223d7c]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#223d7c] rounded-lg flex items-center justify-center">
                    <FaWhatsapp className="text-white text-xs" />
                  </div>
                  <span className="font-medium text-[#223d7c]">
                    WhatsApp Support
                  </span>
                </div>
                <span className="font-medium text-[#1b93d1]">
                  Send Message
                </span>
              </a>

              {/* Trust Badge */}
              <div className="mt-4 pt-4 border-t border-[#223d7c]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#1b93d1] text-sm" />
                  <span className="text-xs text-[#223d7c]/50">
                    Verified Emergency Service
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="text-sm font-medium text-[#1b93d1] hover:text-[#223d7c] transition"
                >
                  All Contacts →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}



// // components/EmergencyBanner.tsx
// 'use client';

// import { useState } from 'react';
// import { FaExclamationTriangle, FaTimes, FaPhoneAlt, FaWhatsapp, FaAmbulance, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function EmergencyBanner() {
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, y: 20, scale: 0.9 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: 20, scale: 0.9 }}
//         transition={{ duration: 0.3 }}
//         className="fixed bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-5 left-3 sm:left-auto z-50 max-w-full sm:max-w-sm md:max-w-md lg:max-w-sm"
//       >
//         <div className="relative">
//           {/* Animated pulse effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] rounded-2xl opacity-20 blur-lg animate-pulse"></div>
          
//           <div className="relative bg-white border-2 border-[#b87d5e]/30 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
//             {/* Top accent bar */}
            
//             <div className="p-4 sm:p-5 md:p-6">
//               {/* Header */}
//               <div className="flex justify-between items-start mb-3 sm:mb-4">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-md opacity-50 animate-ping"></div>
//                     <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-full flex items-center justify-center">
//                       <FaAmbulance className="text-white text-sm sm:text-base md:text-lg" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Emergency Rescue</h3>
//                     <p className="text-xs sm:text-sm text-gray-600">24/7 Animal Emergency Response</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setIsVisible(false)}
//                   className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg p-1.5 transition-colors"
//                   aria-label="Close banner"
//                 >
//                   <FaTimes className="text-xs sm:text-sm" />
//                 </button>
//               </div>
              
//               {/* Emergency Alert */}
//               <div className="bg-gradient-to-r from-[#b87d5e]/5 to-[#2c4a3e]/5 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 border border-[#b87d5e]/20">
//                 <div className="flex items-start gap-2 sm:gap-3">
//                   <FaHeartbeat className="text-[#b87d5e] text-base sm:text-lg flex-shrink-0 mt-0.5" />
//                   <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                     Found an injured or distressed animal? Our emergency team is ready 24/7 for immediate rescue and medical attention.
//                   </p>
//                 </div>
//               </div>
              
//               {/* Contact Buttons */}
//               <div className="space-y-2 sm:space-y-3">
//                 <a
//                   href="tel:+919876543210"
//                   className="group flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-3 bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 hover:from-[#b87d5e]/20 hover:to-[#2c4a3e]/20 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#b87d5e]/20 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <div className="flex items-center gap-2 sm:gap-3">
//                     <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-full flex items-center justify-center">
//                       <FaPhoneAlt className="text-white text-[10px] sm:text-xs" />
//                     </div>
//                     <span className="text-xs sm:text-sm font-medium text-gray-700">Emergency Hotline</span>
//                   </div>
//                   <span className="text-sm sm:text-base font-bold text-[#b87d5e] group-hover:text-[#2c4a3e] transition-colors pl-8 xs:pl-0">
//                     +91 98765 43210
//                   </span>
//                 </a>
                
//                 <a
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-3 bg-gradient-to-r from-[#2c4a3e]/10 to-[#b87d5e]/10 hover:from-[#2c4a3e]/20 hover:to-[#b87d5e]/20 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#2c4a3e]/20 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <div className="flex items-center gap-2 sm:gap-3">
//                     <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#2c4a3e] to-[#b87d5e] rounded-full flex items-center justify-center">
//                       <FaWhatsapp className="text-white text-[10px] sm:text-xs" />
//                     </div>
//                     <span className="text-xs sm:text-sm font-medium text-gray-700">WhatsApp Support</span>
//                   </div>
//                   <span className="text-sm sm:text-base font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors pl-8 xs:pl-0">
//                     Send Message
//                   </span>
//                 </a>
//               </div>
              
//               {/* Trust Badge */}
//               <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <FaShieldAlt className="text-[#b87d5e] text-xs sm:text-sm" />
//                     <span className="text-[10px] sm:text-xs text-gray-500">Verified Emergency Response</span>
//                   </div>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center gap-1 text-[#b87d5e] hover:text-[#2c4a3e] font-medium text-xs sm:text-sm transition-colors group"
//                   >
//                     <span>All Contacts</span>
//                     <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }