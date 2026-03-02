// components/WebsiteIntro.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaPaw, FaHeart, FaDog, FaCat } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onIntroComplete, 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b93d1]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#223d7c]/5 rounded-full blur-2xl" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4">
            {/* Animated Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b93d1]/10 rounded-xl flex items-center justify-center"
              >
                <FaDog className="text-[#1b93d1] text-lg sm:text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1b93d1] to-[#223d7c] rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaPaw className="text-white text-xl sm:text-2xl" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#223d7c]/10 rounded-xl flex items-center justify-center"
              >
                <FaCat className="text-[#223d7c] text-lg sm:text-xl" />
              </motion.div>
            </motion.div>

            {/* Main Logo/Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block mb-4 sm:mb-6"
            >
              <div className="absolute inset-0 bg-[#1b93d1] rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#1b93d1] to-[#223d7c] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3">
                <FaHeart className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3"
            >
              <span className="text-[#223d7c]">Paw</span>
              <span className="text-[#1b93d1]">Heaven</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8"
            >
              Where Every Pet Finds a Home
            </motion.p>

            {/* Loading Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-[#1b93d1] to-[#223d7c] rounded-full max-w-[200px] sm:max-w-[250px] mx-auto origin-left"
            />

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs text-gray-400 mt-3"
            >
              Loading your experience...
            </motion.p>
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-1 h-1 rounded-full bg-[#1b93d1]"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




// // components/WebsiteIntro.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { FaPaw } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// interface WebsiteIntroProps {
//   onIntroComplete: () => void;
// }

// export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(onIntroComplete, 1000);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, [onIntroComplete]);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f5f7f0] to-[#eaede2]"
//         >
//           <motion.div
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-center"
//           >
//             <motion.div
//               animate={{ 
//                 rotate: [0, 10, -10, 10, 0],
//                 scale: [1, 1.2, 1]
//               }}
//               transition={{ delay: 1, duration: 1 }}
//               className="mb-6"
//             >
//               <FaPaw className="text-8xl mx-auto text-[#2c4a3e]" />
//             </motion.div>
            
//             <motion.h1
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold mb-4 text-[#2c4a3e]"
//             >
//               PawHeaven
//             </motion.h1>
            
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//               className="text-xl text-[#b87d5e]"
//             >
//               Where Every Pet Finds a Home
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }