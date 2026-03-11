// components/EmailSubscription.tsx
'use client';

import { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f8f6f2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-[#223d7c]/10 overflow-hidden">
            
            {/* Simple Header Bar */}
            <div className="h-1 bg-[#1b93d1]" />

            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="text-center">
                
                {/* Simple Icon */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1b93d1]/5 rounded-lg mb-4 sm:mb-5"
                >
                  <FaEnvelope className="text-xl sm:text-2xl text-[#1b93d1]" />
                </motion.div>
                
                {/* Headings */}
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#223d7c] mb-2"
                >
                  Stay Updated
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-[#223d7c]/70 mb-6 sm:mb-8 max-w-lg mx-auto"
                >
                  Get the latest updates on new arrivals, success stories, and events.
                </motion.p>
                
                {/* Form */}
                <motion.form 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubmit} 
                  className="max-w-md mx-auto"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 transition-all text-sm"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#1b93d1] cursor-pointer text-white font-medium rounded-lg hover:bg-[#157bb0] transition-all duration-300 flex items-center justify-center gap-2 group text-sm whitespace-nowrap"
                    >
                      <FaPaperPlane className="text-xs group-hover:translate-x-0.5 transition-transform" />
                      Subscribe
                    </button>
                  </div>
                </motion.form>
                
                {/* Success Message */}
                <AnimatePresence>
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4"
                    >
                      <div className="inline-flex items-center gap-2 bg-[#1b93d1]/5 text-[#1b93d1] px-4 py-2 rounded-lg text-sm border border-[#1b93d1]/10">
                        <FaHeart className="text-[#1b93d1] text-xs" />
                        <span>Thanks for subscribing!</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Simple Privacy Note */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xs text-[#223d7c]/50 mt-4"
                >
                  No spam. Unsubscribe anytime.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// // components/EmailSubscription.tsx
// 'use client';

// import { useState } from 'react';
// import { FaEnvelope, FaPaperPlane, FaPaw, FaHeart } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function EmailSubscription() {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setEmail('');
//       setTimeout(() => setSubscribed(false), 3000);
//     }
//   };

//   return (
//     <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] p-0.5 sm:p-1">
      
//       {/* Decorative Pattern Overlay */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#b87d5e] rounded-full blur-2xl sm:blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#b87d5e] rounded-full blur-2xl sm:blur-3xl" />
        
//         {/* Paw Prints - Hidden on mobile, visible on larger screens */}
//         <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
//           {[...Array(12)].map((_, i) => (
//             <FaPaw 
//               key={i}
//               className="absolute text-white/5"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 transform: `rotate(${Math.random() * 360}deg)`,
//                 fontSize: `${Math.random() * 20 + 10}px`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative bg-gradient-to-br from-[#f5f7f0] to-[#eaede2] rounded-lg sm:rounded-xl md:rounded-2xl p-0.5 sm:p-1">
//         <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
//           <div className="max-w-3xl mx-auto text-center">
            
//             {/* Icon with Animation */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//               className="relative inline-block mb-4 sm:mb-5 md:mb-6 lg:mb-8"
//             >
//               <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-md sm:blur-lg md:blur-xl opacity-30 animate-pulse" />
//               <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-full flex items-center justify-center shadow-lg">
//                 <FaEnvelope className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" />
//               </div>
//             </motion.div>
            
//             {/* Headings */}
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4"
//             >
//               Stay Updated with <span className="text-[#b87d5e]">PawHeaven</span>
//             </motion.h2>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2c4a3e]/70 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-2 sm:px-4"
//             >
//               Join our newsletter to receive updates about new arrivals, 
//               adoption success stories, and upcoming events.
//             </motion.p>
            
//             {/* Form */}
//             <motion.form 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               onSubmit={handleSubmit} 
//               className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 max-w-xl mx-auto px-2 sm:px-4"
//             >
//               <div className="flex-1 relative">
//                 <FaEnvelope className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#2c4a3e]/30 text-sm sm:text-base" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="w-full pl-8 sm:pl-10 md:pl-12 pr-3 sm:pr-4 md:pr-6 py-2.5 sm:py-3 md:py-4 bg-white border border-[#2c4a3e]/20 rounded-lg text-[#2c4a3e] placeholder-[#2c4a3e]/40 focus:outline-none focus:ring-2 focus:ring-[#b87d5e] focus:border-transparent transition-all text-xs sm:text-sm md:text-base"
//                   required
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 className="px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-[#2c4a3e] text-white font-semibold rounded-lg hover:bg-[#1e352b] transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base cursor-pointer"
//               >
//                 <FaPaperPlane className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
//                 Subscribe
//               </button>
//             </motion.form>
            
//             {/* Success Message */}
//             <AnimatePresence>
//               {subscribed && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
//                 >
//                   <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-100 text-green-700 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm md:text-base">
//                     <FaHeart className="text-green-600 text-sm sm:text-base" />
//                     <span className="font-medium">Thanks for subscribing! Check your inbox for updates.</span>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
            
//             {/* Privacy Note */}
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-[10px] sm:text-xs md:text-sm mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-[#2c4a3e]/50 flex items-center justify-center gap-1 sm:gap-2 flex-wrap px-2"
//             >
//               <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#2c4a3e]/30 rounded-full" />
//               We respect your privacy. No spam, unsubscribe anytime.
//               <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#2c4a3e]/30 rounded-full" />
//             </motion.p>

//             {/* Stats Preview */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-[#2c4a3e]/10"
//             >
//               <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 text-[10px] sm:text-xs md:text-sm">
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#b87d5e] rounded-full" />
//                   <span className="text-[#2c4a3e]/60">Weekly Updates</span>
//                 </div>
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#b87d5e] rounded-full" />
//                   <span className="text-[#2c4a3e]/60">Success Stories</span>
//                 </div>
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#b87d5e] rounded-full" />
//                   <span className="text-[#2c4a3e]/60">Event Alerts</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }