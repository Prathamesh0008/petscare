// components/Testimonials.tsx
'use client';

import { FaQuoteLeft, FaStar, FaHeart, FaArrowRight, FaPaw, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    id: '1',
    type: 'Adoption',
    name: 'Priya Sharma',
    petName: 'Max',
    petType: 'Dog',
    quote: 'Adopting Max was the best decision we ever made. The team guided us perfectly, and he has filled our home with happiness.',
    rating: 5,
    location: 'Vashi, Navi Mumbai',
    date: 'Adopted 3 months ago',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    type: 'Daycare',
    name: 'Rahul Mehta',
    petName: 'Luna',
    petType: 'Cat',
    quote: 'The daycare service is amazing. I can go to work stress-free knowing Luna is safe, monitored, and cared for all day.',
    rating: 5,
    location: 'Kharghar, Navi Mumbai',
    date: 'Daycare client for 6 months',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100&h=100&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    type: 'Daycare',
    name: 'Anjali Patel',
    petName: 'Rocky',
    petType: 'Dog',
    quote: 'Rocky absolutely loves the daycare! The staff is professional, caring, and always keeps us updated.',
    rating: 5,
    location: 'Seawoods, Navi Mumbai',
    date: 'Daycare client for 1 year',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1]/10 text-[#1b93d1] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Happy Families
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-3">
            What Our <span className="text-[#1b93d1]">Pet Parents</span> Say
          </h2>
          <p className="text-sm sm:text-base text-[#223d7c]/60 max-w-2xl mx-auto">
            Real experiences from families who adopted with us or trust our professional daycare services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-3xl sm:text-4xl text-[#1b93d1]/10 group-hover:text-[#1b93d1]/20 transition-colors duration-300">
                  <FaQuoteLeft />
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#223d7c] group-hover:text-[#1b93d1] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-600 italic leading-relaxed mb-4 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#1b93d1]/10 rounded-full text-xs font-medium text-[#1b93d1]">
                    <FaPaw className="text-[10px]" />
                    {testimonial.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#223d7c]/10 rounded-full text-xs font-medium text-[#223d7c]">
                    {testimonial.petName} • {testimonial.petType}
                  </span>
                </div>

                {/* Location & Date */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[10px]" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[10px]" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>

                {/* Decorative Number */}
                <div className="absolute bottom-2 right-2 text-2xl font-bold text-gray-100 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Stats Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Happy Adoptions */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUserCheck className="text-lg sm:text-xl text-[#1b93d1]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#223d7c]">120+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Successful Adoptions</div>
                </div>
              </div>

              {/* Average Rating */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#223d7c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-bold text-[#223d7c]">4.9</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Average Rating</div>
                </div>
              </div>

              {/* Years of Service */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-lg sm:text-xl text-[#1b93d1]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#223d7c]">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Years of Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/success-stories" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#1b93d1] to-[#223d7c] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Read More Stories</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/adopt" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white border-2 border-[#223d7c] text-[#223d7c] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaHeart className="group-hover:scale-110 transition-transform" />
                <span>Start Your Adoption Journey</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





// // components/Testimonials.tsx
// 'use client';

// import { FaQuoteLeft, FaStar, FaHeart, FaArrowRight, FaPaw, FaUserCheck, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const testimonials = [
//   {
//     id: '1',
//     type: 'Adoption',
//     name: 'Priya Sharma',
//     petName: 'Max',
//     petType: 'Dog',
//     quote: 'Adopting Max was the best decision we ever made. The team guided us perfectly, and he has filled our home with happiness.',
//     rating: 5,
//     location: 'Vashi, Navi Mumbai',
//     date: 'Adopted 3 months ago',
//     image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&auto=format&fit=crop&q=80'
//   },
//   {
//     id: '2',
//     type: 'Daycare',
//     name: 'Rahul Mehta',
//     petName: 'Luna',
//     petType: 'Cat',
//     quote: 'The daycare service is amazing. I can go to work stress-free knowing Luna is safe, monitored, and cared for all day.',
//     rating: 5,
//     location: 'Kharghar, Navi Mumbai',
//     date: 'Daycare client for 6 months',
//     image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100&h=100&auto=format&fit=crop&q=80'
//   },
//   {
//     id: '3',
//     type: 'Daycare',
//     name: 'Anjali Patel',
//     petName: 'Rocky',
//     petType: 'Dog',
//     quote: 'Rocky absolutely loves the daycare! The staff is professional, caring, and always keeps us updated.',
//     rating: 5,
//     location: 'Seawoods, Navi Mumbai',
//     date: 'Daycare client for 1 year',
//     image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&auto=format&fit=crop&q=80'
//   }
// ];

// export default function Testimonials() {
//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]">
//       {/* Decorative Background Elements - Responsive */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[#b87d5e] rounded-full blur-2xl sm:blur-3xl" />
//         <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-[#2c4a3e] rounded-full blur-2xl sm:blur-3xl" />
//       </div>

//       {/* Paw Print Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute top-0 left-0 w-full h-full" style={{
//           backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm20-30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5z" fill="%232c4a3e" fill-opacity="0.2"/%3E%3C/svg%3E")',
//           backgroundRepeat: 'repeat',
//         }} />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
//         >
//           <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//               <FaHeart className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#b87d5e]" />
//             </div>
//             <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
//               Happy Families
//             </span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4">
//             What Our <span className="text-[#b87d5e]">Pet Parents</span> Say
//           </h2>
          
//           <p className="text-sm sm:text-base md:text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto px-4">
//            Real experiences from families who adopted with us or trust our professional daycare services.
//           </p>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative"
//             >
//              <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl 
//                 p-6 shadow-lg border border-[#2c4a3e]/10 
//                 hover:shadow-2xl transition-all duration-500 
//                 overflow-hidden h-full flex flex-col">
                
//                 {/* Gradient Overlay on Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 {/* Quote Icon */}
//                 <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 text-4xl sm:text-5xl md:text-6xl text-[#b87d5e]/10 group-hover:text-[#b87d5e]/20 transition-colors duration-500">
//                   <FaQuoteLeft />
//                 </div>

//                 {/* Adopter Image & Rating */}
//                 <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
//                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                     <div className="relative flex-shrink-0">
//                       <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
//                       <img 
//                         src={testimonial.image} 
//                      alt={testimonial.name}
//                         className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-lg"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#2c4a3e] group-hover:text-[#b87d5e] transition-colors duration-300">
//                       {testimonial.name}
//                       </h4>
//                       <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <FaStar key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#b87d5e]" />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quote */}
//                 <p className="text-sm text-[#2c4a3e]/80 italic leading-relaxed 
//               mb-6 relative z-10 flex-grow line-clamp-4">
//                   "{testimonial.quote}"
//                 </p>

//                 {/* Pet Info */}
//                 <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#b87d5e]/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
//                   <FaPaw className="text-[#b87d5e] text-[10px] sm:text-xs" />
//                   <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#b87d5e]">
//                {testimonial.type} • {testimonial.petName} • {testimonial.petType}
//                   </span>
//                 </div>

//                 {/* Location & Date */}
//                 <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm text-[#2c4a3e]/60">
//                   <div className="flex items-center gap-1">
//                     <FaMapMarkerAlt className="text-[8px] sm:text-[10px] md:text-xs" />
//                     <span>{testimonial.location}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <FaCalendarAlt className="text-[8px] sm:text-[10px] md:text-xs" />
//                     <span>{testimonial.date}</span>
//                   </div>
//                 </div>

//                 {/* Decorative Number - Hidden on mobile */}
//                 <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c4a3e]/5 select-none">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats & CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           {/* Stats Card */}
//           <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 sm:p-1 mb-6 sm:mb-8">
//             <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
//               <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                
//                 {/* Happy Adoptions */}
//                 <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-[200px]">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <FaUserCheck className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#b87d5e]" />
//                   </div>
//                   <div>
//                     <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c4a3e]">120+</div>
//                     <div className="text-xs sm:text-sm text-[#2c4a3e]/70">Successful Adoptions</div>
//                   </div>
//                 </div>

//                 {/* Divider - Hidden on mobile */}
//                 <div className="hidden sm:block w-px h-8 sm:h-10 md:h-12 bg-[#2c4a3e]/10 self-center" />

//                 {/* Average Rating */}
//                 <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-[200px]">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <div className="flex flex-col items-center">
//                       <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-[#b87d5e]">4.9</span>
//                       <FaStar className="text-[8px] sm:text-[10px] md:text-xs text-[#b87d5e]" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2c4a3e]">★★★★★</div>
//                     <div className="text-xs sm:text-sm text-[#2c4a3e]/70">Average Rating</div>
//                   </div>
//                 </div>

//                 {/* Divider - Hidden on mobile */}
//                 <div className="hidden sm:block w-px h-8 sm:h-10 md:h-12 bg-[#2c4a3e]/10 self-center" />

//                 {/* Years of Service */}
//                 <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-[200px]">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
//                     <FaCalendarAlt className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#b87d5e]" />
//                   </div>
//                   <div>
//                     <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c4a3e]">5+</div>
//                     <div className="text-xs sm:text-sm text-[#2c4a3e]/70">Years of Service</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
//             <Link href="/success-stories" className="w-full xs:w-auto">
//               <button className="group cursor-pointer w-full xs:w-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] text-white font-semibold rounded-lg sm:rounded-xl hover:from-[#9e6a4f] hover:to-[#8a5a42] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base">
//                 <span>Read More Stories</span>
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
//               </button>
//             </Link>
            
//             <Link href="/adopt" className="w-full xs:w-auto">
//               <button className="group cursor-pointer w-full xs:w-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-lg sm:rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
//                 <FaHeart className="text-sm sm:text-base" />
//                 <span>Start Your Adoption Journey</span>
//               </button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }