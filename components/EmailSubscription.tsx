// components/EmailSubscription.tsx
'use client';

import { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaPaw, FaHeart } from 'react-icons/fa';
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] p-1">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <FaPaw 
              key={i}
              className="absolute text-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 30 + 10}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative bg-gradient-to-br from-[#f5f7f0] to-[#eaede2] rounded-2xl p-1">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-full flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-3xl text-white" />
              </div>
            </motion.div>
            
            {/* Headings */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4a3e] mb-4"
            >
              Stay Updated with <span className="text-[#b87d5e]">PawHaven</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#2c4a3e]/70 mb-8 max-w-2xl mx-auto"
            >
              Join our newsletter to receive updates about new arrivals, 
              adoption success stories, and upcoming events.
            </motion.p>
            
            {/* Form */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2c4a3e]/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-6 py-4 bg-white border border-[#2c4a3e]/20 rounded-lg text-[#2c4a3e] placeholder-[#2c4a3e]/40 focus:outline-none focus:ring-2 focus:ring-[#b87d5e] focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="px-8 py-4 bg-[#2c4a3e] text-white font-semibold rounded-lg hover:bg-[#1e352b] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Subscribe
              </button>
            </motion.form>
            
            {/* Success Message */}
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6"
                >
                  <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-lg">
                    <FaHeart className="text-green-600" />
                    <span className="font-medium">Thanks for subscribing! Check your inbox for updates.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Privacy Note */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm mt-8 text-[#2c4a3e]/50 flex items-center justify-center gap-2"
            >
              <span className="w-1 h-1 bg-[#2c4a3e]/30 rounded-full" />
              We respect your privacy. No spam, unsubscribe anytime.
              <span className="w-1 h-1 bg-[#2c4a3e]/30 rounded-full" />
            </motion.p>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-6 border-t border-[#2c4a3e]/10"
            >
              <div className="flex justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#b87d5e] rounded-full" />
                  <span className="text-[#2c4a3e]/60">Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#b87d5e] rounded-full" />
                  <span className="text-[#2c4a3e]/60">Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#b87d5e] rounded-full" />
                  <span className="text-[#2c4a3e]/60">Event Alerts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}







// 'use client';

// import { useState } from 'react';
// import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

// export default function EmailSubscription() {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setLoading(false);
//     setSubscribed(true);
//     setEmail('');
//     setTimeout(() => setSubscribed(false), 5000);
//   };

//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-6">
//       <div className="flex items-start gap-4 mb-4">
//         <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
//           <FaEnvelope className="text-amber-600" />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-semibold text-gray-900 mb-1">
//             Stay Updated
//           </h3>
//           <p className="text-sm text-gray-600">
//             Get adoption stories and pet care tips.
//           </p>
//         </div>
//       </div>

//       {subscribed ? (
//         <div className="text-center py-3 bg-emerald-50 rounded-lg">
//           <div className="text-emerald-700 font-medium text-sm">
//             ✓ Thank you for subscribing!
//           </div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div className="flex gap-2">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               required
//               className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-sm min-w-0"
//             />
//             <button
//               type="submit"
//               disabled={loading || !email}
//               className="px-4 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
//             >
//               {loading ? (
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   <span>...</span>
//                 </div>
//               ) : (
//                 <>
//                   <span>Join</span>
//                   <FaArrowRight className="text-xs" />
//                 </>
//               )}
//             </button>
//           </div>
          
//           <div className="flex items-start gap-2">
//             <input
//               type="checkbox"
//               id="consent"
//               required
//               className="mt-0.5 w-3.5 h-3.5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
//             />
//             <label htmlFor="consent" className="text-xs text-gray-600">
//               I agree to receive updates. Unsubscribe anytime.
//             </label>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }