// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import WebsiteIntro from '@/components/WebsiteIntro';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import EmergencyBanner from '@/components/EmergencyBanner';
import AnimalCard from '@/components/AnimalCard';
import LiveStats from '@/components/LiveStats';
import DonationProgress from '@/components/DonationProgress';
import EmailSubscription from '@/components/EmailSubscription';
import { getUrgentAnimals, getAvailableAnimals } from '@/lib/animals';
import Link from 'next/link';
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaHeart, 
  FaHome, 
  FaPaw,
  FaCalendarAlt,
  FaVideo,
  FaUsers,
  FaShieldAlt,
  FaRobot,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaCamera,
  FaDog,
  FaCat,
  FaPaw as FaPawSolid,
  FaStar,
  FaCheck,
  FaGift,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,
} from 'react-icons/fa';

export default function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);  
  const urgentAnimals = getUrgentAnimals();
  const availableAnimals = getAvailableAnimals().slice(0, 6);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subject: "",
    terms: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  const features = [
    {
      title: 'Smart Matchmaking',
      description: 'Find your perfect pet match with our AI-powered system',
      link: '/matchmaker',
      icon: <FaRobot />
    },
    {
      title: 'Virtual Tours',
      description: 'Explore our shelter from the comfort of your home',
      link: '/virtual-tour',
      icon: <FaMapMarkedAlt />
    },
    {
      title: 'AR Pet Viewer',
      description: 'See how pets look in your space using augmented reality',
      link: '/ar-viewer',
      icon: <FaMobileAlt />
    },
    {
      title: 'Live Daycare Updates',
      description: 'Receive live updates and photos while your pet enjoys daycare',
      link: '/daycare',
      icon: <FaCamera />
    },
  ];

  const successStories = [
    {
      title: 'Bella Found Her Forever Home',
      description: 'After 3 months of recovery, Bella was adopted by a loving family in Vashi.',
      link: '/success-stories/bella',
      icon: <FaDog />
    },
    {
      title: 'Max\'s Second Chance',
      description: 'Rescued from the streets, Max now enjoys long walks and belly rubs.',
      link: '/success-stories/max',
      icon: <FaPawSolid />
    },
    {
      title: 'Luna\'s Happy Ending',
      description: 'Once injured and scared, Luna now thrives in her new forever home.',
      link: '/success-stories/luna',
      icon: <FaCat />
    },
  ];

  const faqs = [
    {
      question: 'Is There Any Adoption Fee?',
      answer: 'You can donate to us before or after you adopt your pup, but this is not a requirement to have our pet going home with you.'
    },
    {
      question: 'Can I Retain My Pet?',
      answer: 'Yes, we provide ongoing support and resources to help you and your new pet adjust to life together.'
    },
    {
      question: 'Can I Adopt More Than One?',
      answer: 'Absolutely! Many of our adopters find that their pets enjoy having a companion.'
    },
    {
      question: 'How Do I Take Care Of My Pet?',
      answer: 'We provide comprehensive care guides and our team is always available to answer questions.'
    }
  ];

  const subjectOptions = [
    { value: "adoption", label: "Adoption Inquiry", icon: <FaPaw /> },
    { value: "daycare", label: "Daycare Booking", icon: <FaHome /> },
    { value: "emergency", label: "Emergency Assistance", icon: <FaShieldAlt /> },
    { value: "general", label: "General Question", icon: <FaQuestionCircle /> },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-[#223d7c] mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading PawHeaven...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.subject || !formData.terms) {
      alert("Please fill all fields and accept terms.");
      return;
    }
    alert("Message sent successfully!");
  };

  return (
    <>
      <WebsiteIntro onIntroComplete={handleIntroComplete} />

      <div className={`transition-all duration-500 bg-[#f8f6f2] ${isIntroComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />

        {/* Quick Actions - Matte finish */}
        <div className="bg-[#223d7c]">
          <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaPaw />, label: 'Adopt a Pet', link: '/animals' },
                { icon: <FaHome />, label: 'Pet Daycare', link: '/daycare' },
                { icon: <FaCalendarAlt />, label: 'Book Daycare', link: '/daycare#booking' },
                { icon: <FaShieldAlt />, label: 'Emergency Care', link: '/emergency' },
              ].map((action, index) => (
                <Link
                  key={index}
                  href={action.link}
                  className="group relative py-4 sm:py-5 lg:py-7 rounded-lg font-semibold flex flex-col items-center justify-center gap-2 transition-all duration-300 bg-white text-[#223d7c] hover:bg-[#f0f0f0] border border-[#223d7c]/10"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 text-[#1b93d1]">
                    {action.icon}
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium">
                    {action.label}
                  </span>
                  <FaArrowRight className="absolute bottom-3 right-3 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#1b93d1]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Live Stats */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <LiveStats />
          </div>

          {/* How It Works Section - Matte finish */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                Simple Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-4">
                How It Works
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#223d7c]/70 max-w-2xl mx-auto px-4">
                Choose between adoption or professional daycare in just a few simple steps
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b93d1]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1b93d1]">1</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#223d7c] mb-2 sm:mb-3">
                      Find Your Pet
                    </h3>
                    <p className="text-sm sm:text-base text-[#223d7c]/70 leading-relaxed">
                      Browse through our available animals and find your perfect match.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b93d1]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1b93d1]">2</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#223d7c] mb-2 sm:mb-3">
                      Have A Meeting
                    </h3>
                    <p className="text-sm sm:text-base text-[#223d7c]/70 leading-relaxed">
                      Schedule a visit to meet your potential new family member in person.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group sm:col-span-2 lg:col-span-1"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b93d1]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1b93d1]">3</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#223d7c] mb-2 sm:mb-3">
                      Take Them Home
                    </h3>
                    <p className="text-sm sm:text-base text-[#223d7c]/70 leading-relaxed">
                      Complete the adoption process and welcome your new friend home.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8 sm:mt-10 md:mt-12"
            >
              <Link href="/animals">
                <button className="inline-flex cursor-pointer items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1b93d1] text-white rounded-lg font-medium hover:bg-[#157bb0] transition-all duration-300 group text-sm sm:text-base">
                  <span>Start Your Journey</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Email Subscription Section */}
          <div className="mb-12 sm:mb-16 md:mb-24">
            <EmailSubscription />
          </div>

          {/* Featured Pets Section - Matte finish */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                Meet Our Friends
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-4">
                Featured Pets
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#223d7c]/70 max-w-2xl mx-auto px-4">
                Meet loving pets available for adoption or learn how we care for them in our daycare facility.
              </p>
            </motion.div>
            
            {/* Top Row - Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
              {/* Card 1 - Ninja Warrior */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#223d7c]/10">
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80" 
                    alt="Dog - Ninja Warrior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223d7c] via-[#223d7c]/70 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <span className="bg-[#1b93d1] text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-white/20 text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm">
                        Male • 2 years
                      </span>
                    </div>
                    
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 flex flex-wrap items-center gap-2">
                      Ninja Warrior
                      <span className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">Dog</span>
                    </h3>
                    
                    <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-2 hidden sm:block">
                      This fun and energetic dog is always ready for an adventure.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                      <span className="bg-white/10 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Energetic</span>
                      <span className="bg-white/10 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Playful</span>
                    </div>
                    
                    <Link href="/animals/7">
                      <button className="px-4 cursor-pointer sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium bg-white text-[#223d7c] hover:bg-[#1b93d1] hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-xs sm:text-sm">
                        Meet Ninja
                        <FaArrowRight className="text-xs" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 2 - Madam Mimi */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#223d7c]/10">
                  <img 
                    src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80" 
                    alt="CAT - Madam Mimi"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223d7c] via-[#223d7c]/70 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <span className="bg-[#1b93d1] text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-white/20 text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm">
                        Female • 1.5 years
                      </span>
                    </div>
                    
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 flex flex-wrap items-center gap-2">
                      Madam Mimi
                      <span className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">Cat</span>
                    </h3>
                    
                    <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-2 hidden sm:block">
                      This elegant and curious cat loves to explore every corner.
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                      <span className="bg-white/10 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Elegant</span>
                      <span className="bg-white/10 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Curious</span>
                    </div>
                    
                    <Link href="/animals/8">
                      <button className="px-4 sm:px-5 md:px-6 py-2 cursor-pointer sm:py-2.5 md:py-3 rounded-lg font-medium bg-white text-[#223d7c] hover:bg-[#1b93d1] hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-xs sm:text-sm">
                        Meet Mimi
                        <FaArrowRight className="text-xs" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom Row - Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative mb-6 sm:mb-8"
            >
              <div className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#223d7c]/10">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&auto=format&fit=crop&q=80" 
                  alt="DOG - T-Rex"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#223d7c] via-[#223d7c]/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <span className="bg-[#1b93d1] text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium">
                      ❤️ Urgent: Needs Home
                    </span>
                    <span className="bg-white/20 text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm">
                      Male • 2 years
                    </span>
                  </div>
                  
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                    T-Rex
                    <span className="text-xs sm:text-sm md:text-base bg-white/20 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full">Dog</span>
                  </h3>
                  
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 max-w-2xl hidden sm:block">
                    He may be a shy pup, but with time and kindness, T-Rex will slowly come out of his shell.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <span className="bg-white/10 text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full text-xs border border-white/20">
                      Shy but loving
                    </span>
                    <span className="bg-white/10 text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full text-xs border border-white/20">
                      Loyal companion
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link href="/animals/9">
                      <button className="bg-[#1b93d1] cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-medium hover:bg-[#157bb0] transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base">
                        <FaHeart className="text-sm sm:text-base" />
                        <span className="hidden xs:inline">Meet T-Rex</span>
                        <FaArrowRight className="text-sm sm:text-base" />
                      </button>
                    </Link>
                    
                    <Link href="/animals" className="text-white/80 hover:text-white transition-colors underline underline-offset-4 text-xs sm:text-sm">
                      View all animals
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* View All Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Link href="/animals">
                <button className="inline-flex cursor-pointer items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#223d7c] text-[#223d7c] rounded-lg sm:rounded-xl font-medium hover:bg-[#1b93d1] hover:text-white hover:border-[#1b93d1] transition-all duration-300 group text-sm sm:text-base">
                  <span>Browse All Pets</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* FAQ Section - Matte finish */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto px-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden cursor-pointer"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-4 cursor-pointer sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#223d7c] text-left">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <FaChevronDown className="w-4 h-4 text-[#1b93d1]" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                        <p className="text-sm sm:text-base text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Section - Matte finish */}
          <div className="mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20 md:mb-24">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#223d7c] mb-3">
                  We'd Love to <span className="text-[#1b93d1]">Hear From You</span>
                </h2>
                <p className="text-sm sm:text-base text-[#223d7c]/70 max-w-2xl mx-auto px-4">
                  Have questions about adoption, daycare, or want to get involved? Reach out to our friendly team.
                </p>
              </motion.div>
            </div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto px-4"
            >
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
                {/* Decorative Header */}
                <div className="h-1 bg-[#1b93d1]" />
                
                <div className="p-6 sm:p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                          <FaPaw className="text-[#1b93d1] text-xs" />
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="John"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                   focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 
                                   focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                          <FaPaw className="text-[#223d7c] text-xs" />
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Doe"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                   focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 
                                   focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <FaEnvelope className="text-[#1b93d1] text-xs" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john.doe@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                 focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 
                                 focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <FaQuestionCircle className="text-[#223d7c] text-xs" />
                        Subject
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                   flex items-center justify-between 
                                   focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20
                                   transition-all duration-200 text-left"
                        >
                          {formData.subject ? (
                            <div className="flex items-center gap-2 text-gray-700">
                              {subjectOptions.find(opt => opt.value === formData.subject)?.icon}
                              <span>{subjectOptions.find(opt => opt.value === formData.subject)?.label}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">Select a subject</span>
                          )}
                          <FaChevronDown
                            className={`transition-transform duration-300 ${
                              isSubjectOpen ? "rotate-180 text-[#1b93d1]" : "text-gray-400"
                            }`}
                          />
                        </button>

                        {isSubjectOpen && (
                          <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                            {subjectOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, subject: option.value });
                                  setIsSubjectOpen(false);
                                }}
                                className="w-full px-4 py-3 flex items-center gap-3 text-left 
                                         hover:bg-gray-50 transition-colors duration-200"
                              >
                                <span className="text-[#1b93d1]">{option.icon}</span>
                                <span className="text-gray-700">{option.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <FaHeart className="text-[#1b93d1] text-xs" />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                 focus:outline-none focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 
                                 focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
                      />
                      <div className="text-right">
                        <span className={`text-xs ${formData.message.length > 400 ? 'text-[#1b93d1]' : 'text-gray-400'}`}>
                          {formData.message.length}/500 characters
                        </span>
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                      <div className="relative flex items-center h-5">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                          className="w-4 h-4 border-2 border-gray-300 rounded 
                                   checked:bg-[#1b93d1] checked:border-[#1b93d1] 
                                   focus:ring-1 focus:ring-[#1b93d1]/20 focus:outline-none
                                   transition-all duration-200 cursor-pointer"
                        />
                      </div>
                      <label className="text-sm text-gray-600 leading-relaxed">
                        I agree to the{' '}
                        <button type="button" className="text-[#1b93d1] hover:text-[#157bb0] font-medium underline underline-offset-2 transition-colors">
                          terms and conditions
                        </button>
                        {' '}and{' '}
                        <button type="button" className="text-[#1b93d1] hover:text-[#157bb0] font-medium underline underline-offset-2 transition-colors">
                          privacy policy
                        </button>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group w-full sm:w-auto px-8 py-3.5 bg-[#1b93d1] text-white 
                                 font-medium rounded-lg hover:bg-[#157bb0] transition-all duration-300
                                 focus:outline-none focus:ring-2 focus:ring-[#1b93d1] focus:ring-offset-2
                                 active:transform active:scale-[0.98] cursor-pointer"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <FaHeart className="group-hover:scale-110 transition-transform" />
                          Send Message
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </form>

                  {/* Alternative Contact Info */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1b93d1]/10 rounded-full flex items-center justify-center">
                          <FaPhone className="text-[#1b93d1] text-xs" />
                        </div>
                        <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-[#1b93d1] transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                      
                      <div className="hidden sm:block w-px h-4 bg-gray-200" />
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#223d7c]/10 rounded-full flex items-center justify-center">
                          <FaEnvelope className="text-[#223d7c] text-xs" />
                        </div>
                        <a href="mailto:info@pawheaven.com" className="text-sm text-gray-600 hover:text-[#223d7c] transition-colors">
                          info@pawheaven.com
                        </a>
                      </div>
                      
                      <div className="hidden sm:block w-px h-4 bg-gray-200" />
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1b93d1]/10 rounded-full flex items-center justify-center">
                          <FaMapMarkerAlt className="text-[#1b93d1] text-xs" />
                        </div>
                        <span className="text-sm text-gray-600">Vashi, Navi Mumbai</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Donation Progress */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <DonationProgress />
          </div>

          {/* Features Section - Matte finish */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b93d1] text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                Innovative Technology
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-4">
                Modern Pet Care <span className="text-[#1b93d1]">Tools</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#223d7c]/70 max-w-2xl mx-auto px-4">
                Leverage modern tools to adopt, book daycare, and stay connected with your pet's care.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={feature.link}
                    className="group relative block h-full"
                  >
                    <div className="relative h-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300">
                      
                      <div className="relative mb-4 sm:mb-5 md:mb-6">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1b93d1]/10 rounded-lg sm:rounded-xl md:rounded-xl flex items-center justify-center text-[#1b93d1] text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#223d7c] mb-2 sm:mb-3 group-hover:text-[#1b93d1] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#223d7c]/70 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                        {feature.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-1 sm:gap-2 text-[#1b93d1] font-medium text-xs sm:text-sm group/link">
                        <span>Explore feature</span>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1b93d1]/10 flex items-center justify-center group-hover/link:bg-[#1b93d1] group-hover/link:translate-x-1 transition-all duration-300">
                          <FaArrowRight className="text-[10px] sm:text-xs text-[#1b93d1] group-hover/link:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8 sm:mt-10 md:mt-12"
            >
              <Link href="/features">
                <button className="inline-flex cursor-pointer items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#223d7c] text-[#223d7c] rounded-lg sm:rounded-xl font-medium hover:bg-[#1b93d1] hover:text-white hover:border-[#1b93d1] transition-all duration-300 group text-sm sm:text-base">
                  <span>View All Features</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <Statistics />
          </div>

          {/* Success Stories - Matte finish */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              <div>
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#1b93d1]/10 rounded-full flex items-center justify-center">
                    <FaStar className="text-sm sm:text-base md:text-lg text-[#1b93d1]" />
                  </div>
                  <span className="text-[#1b93d1] font-medium uppercase tracking-wider text-xs sm:text-sm">
                    Happy Endings
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-3">
                  Success <span className="text-[#1b93d1]">Stories</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#223d7c]/70 max-w-2xl">
                  Heartwarming tales of animals who found their forever homes.
                </p>
              </div>
              
              <Link href="/success-stories" className="hidden sm:block">
                <button className="group cursor-pointer inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-[#223d7c] text-[#223d7c] rounded-lg sm:rounded-xl font-medium hover:bg-[#1b93d1] hover:text-white hover:border-[#1b93d1] transition-all duration-300 text-xs sm:text-sm">
                  <span>View All Stories</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={story.link} className="group block h-full">
                    <div className="relative h-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#223d7c]/10 hover:border-[#1b93d1]/30 transition-all duration-300">
                      
                      <div className="relative h-36 sm:h-40 md:h-48 bg-[#223d7c]">
                        <div className="absolute inset-0 bg-[#223d7c] opacity-90" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                            {story.icon}
                          </div>
                        </div>

                        <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white rounded-full">
                          {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#223d7c] mb-2 sm:mb-3 group-hover:text-[#1b93d1] transition-colors duration-300">
                          {story.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-[#223d7c]/70 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                          {story.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#1b93d1]/10 text-[#1b93d1] text-[10px] sm:text-xs rounded-full">
                            Adopted
                          </span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#223d7c]/10 text-[#223d7c] text-[10px] sm:text-xs rounded-full">
                            Happy Ending
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile View All Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6 sm:hidden"
            >
              <Link href="/success-stories">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-[#223d7c] text-[#223d7c] rounded-lg font-medium hover:bg-[#1b93d1] hover:text-white hover:border-[#1b93d1] transition-all duration-300 text-sm">
                  <span>View All Stories</span>
                  <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <Testimonials />
          </div>

          {/* Final CTA - Matte finish */}
          <div className="relative py-12 sm:py-16 md:py-20">
            <div className="absolute inset-0 bg-[#223d7c]" />

            <div className="relative container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-[#223d7c]/10">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="relative inline-block mb-4 sm:mb-6 md:mb-8"
                    >
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#1b93d1] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center transform rotate-3">
                        <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#223d7c] mb-2 sm:mb-3 md:mb-4"
                    >
                      Ready to Make an{' '}
                      <span className="text-[#1b93d1] relative inline-block">
                        Impact?
                      </span>
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-xs sm:text-sm md:text-base lg:text-lg text-[#223d7c]/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
                    >
                      Your support transforms lives and gives rescued animals a second chance at life.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
                    >
                      <Link href="/adopt" className="w-full sm:w-auto">
                        <button className="group cursor-pointer w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#223d7c] text-white font-medium rounded-lg sm:rounded-xl hover:bg-[#1a2f60] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                          <FaHeart className="group-hover:scale-110 transition-transform" />
                          <span>Adopt a Pet</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>

                      <div className="hidden sm:flex items-center gap-2">
                        <div className="w-8 md:w-12 h-px bg-[#223d7c]/20" />
                        <span className="text-xs font-medium text-[#223d7c]/40">or</span>
                        <div className="w-8 md:w-12 h-px bg-[#223d7c]/20" />
                      </div>

                      <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
                        <Link href="/volunteer" className="flex-1 xs:flex-initial">
                          <button className="w-full cursor-pointer px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#223d7c] text-[#223d7c] font-medium rounded-lg sm:rounded-xl hover:bg-[#1b93d1] hover:text-white hover:border-[#1b93d1] transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
                            <FaUsers className="group-hover:scale-110 transition-transform" />
                            <span>Volunteer</span>
                          </button>
                        </Link>
                        
                        <Link href="/donate" className="flex-1 xs:flex-initial">
                          <button className="w-full cursor-pointer px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#1b93d1] text-[#1b93d1] font-medium rounded-lg sm:rounded-xl hover:bg-[#1b93d1] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
                            <FaGift className="group-hover:scale-110 transition-transform" />
                            <span>Donate</span>
                          </button>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="pt-6 sm:pt-7 md:pt-8 border-t border-[#223d7c]/10"
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#1b93d1]/10 rounded-full flex items-center justify-center">
                            <FaCheck className="text-[#1b93d1] text-[10px] sm:text-xs" />
                          </div>
                          <span className="text-[#223d7c]/70">Trusted by 5,000+ members</span>
                        </div>
                        
                        <div className="hidden sm:block w-px h-4 bg-[#223d7c]/20" />
                        
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#223d7c]/10 rounded-full flex items-center justify-center">
                            <FaHeart className="text-[#223d7c] text-[10px] sm:text-xs" />
                          </div>
                          <span className="text-[#223d7c]/70">100% non-profit</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <EmergencyBanner />
      </div>
    </>
  );
}


// // app/page.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import WebsiteIntro from '@/components/WebsiteIntro';
// import Hero from '@/components/Hero';
// import Statistics from '@/components/Statistics';
// import Testimonials from '@/components/Testimonials';
// import EmergencyBanner from '@/components/EmergencyBanner';
// import AnimalCard from '@/components/AnimalCard';
// import LiveStats from '@/components/LiveStats';
// import DonationProgress from '@/components/DonationProgress';
// import EmailSubscription from '@/components/EmailSubscription';
// import { getUrgentAnimals, getAvailableAnimals } from '@/lib/animals';
// import Link from 'next/link';
// import { motion } from "framer-motion";
// import { 
//   FaArrowRight, 
//   FaHeart, 
//   FaHandsHelping, 
//   FaHome, 
//   FaPaw,
//   FaCalendarAlt,
//   FaVideo,
//   FaUsers,
//   FaShieldAlt,
//   FaRobot,
//   FaMapMarkedAlt,
//   FaMobileAlt,
//   FaCamera,
//   FaDog,
//   FaCat,
//   FaPaw as FaPawSolid,
//   FaStar,
//   FaCheckCircle,
//   FaGift,
//   FaCheck,
//   FaQuestionCircle,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaChevronDown ,
  
// } from 'react-icons/fa';

// export default function HomePage() {
//   const [isIntroComplete, setIsIntroComplete] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
// const [openIndex, setOpenIndex] = useState<number | null>(null);  
//   const urgentAnimals = getUrgentAnimals();
//   const availableAnimals = getAvailableAnimals().slice(0, 6);
//   const [isSubjectOpen, setIsSubjectOpen] = useState(false);
// const [formData, setFormData] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   message: "",
//   subject: "",
//   terms: false,
// });

// const [errors, setErrors] = useState({});
// const handleChange = (e: any) => {
//   const { name, value, type, checked } = e.target;

//   setFormData((prev) => ({
//     ...prev,
//     [name]: type === "checkbox" ? checked : value,
//   }));
// };
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleIntroComplete = () => {
//     setIsIntroComplete(true);
//   };

//   const features = [
//     {
//       title: 'Smart Matchmaking',
//       description: 'Find your perfect pet match with our AI-powered system',
//       link: '/matchmaker',
//       icon: <FaRobot />
//     },
//     {
//       title: 'Virtual Tours',
//       description: 'Explore our shelter from the comfort of your home',
//       link: '/virtual-tour',
//       icon: <FaMapMarkedAlt />
//     },
//     {
//       title: 'AR Pet Viewer',
//       description: 'See how pets look in your space using augmented reality',
//       link: '/ar-viewer',
//       icon: <FaMobileAlt />
//     },
//      {
//     title: 'Live Daycare Updates',
//     description: 'Receive live updates and photos while your pet enjoys daycare',
//     link: '/daycare',
//     icon: <FaCamera />
//   },
  
//   ];

//   const successStories = [
//     {
//       title: 'Bella Found Her Forever Home',
//       description: 'After 3 months of recovery, Bella was adopted by a loving family in Vashi.',
//       link: '/success-stories/bella',
//       icon: <FaDog />
//     },
//     {
//       title: 'Max\'s Second Chance',
//       description: 'Rescued from the streets, Max now enjoys long walks and belly rubs.',
//       link: '/success-stories/max',
//       icon: <FaPawSolid />
//     },
//     {
//       title: 'Luna\'s Happy Ending',
//       description: 'Once injured and scared, Luna now thrives in her new forever home.',
//       link: '/success-stories/luna',
//       icon: <FaCat />
//     },
//   ];

//   const faqs = [
//     {
//       question: 'Is There Any Adoption Fee?',
//       answer: 'You can donate to us before or after you adopt your pup, but this is not a requirement to have our pet going home with you.'
//     },
//     {
//       question: 'Can I Retain My Pet?',
//       answer: 'Yes, we provide ongoing support and resources to help you and your new pet adjust to life together.'
//     },
//     {
//       question: 'Can I Adopt More Than One?',
//       answer: 'Absolutely! Many of our adopters find that their pets enjoy having a companion.'
//     },
//     {
//       question: 'How Do I Take Care Of My Pet?',
//       answer: 'We provide comprehensive care guides and our team is always available to answer questions.'
//     }
//   ];
// const subjectOptions = [
//   { value: "adoption", label: "Adoption Inquiry", icon: <FaPaw /> },
//   { value: "daycare", label: "Daycare Booking", icon: <FaHome /> },
//   { value: "emergency", label: "Emergency Assistance", icon: <FaShieldAlt /> },
//   { value: "general", label: "General Question", icon: <FaQuestionCircle /> },
// ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
//           <p className="text-gray-600 text-sm sm:text-base">Loading PawHeaven...</p>
//         </div>
//       </div>
//     );
//   }
// const handleSubmit = (e: any) => {
//   e.preventDefault();

//   if (
//     !formData.firstName ||
//     !formData.lastName ||
//     !formData.email ||
//     !formData.message ||
//     !formData.subject ||
//     !formData.terms
//   ) {
//     alert("Please fill all fields and accept terms.");
//     return;
//   }

//   alert("Message sent successfully!");
// };
//   return (
//     <>
//       <WebsiteIntro onIntroComplete={handleIntroComplete} />

//       <div className={`transition-all duration-500 bg-[#f8f6f2] ${isIntroComplete ? 'opacity-100' : 'opacity-0'}`}>
//         <Hero />
        

// <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b]">
//   <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
//       {[
//         { icon: <FaPaw />, label: 'Adopt a Pet', link: '/animals' },
//         { icon: <FaHome />, label: 'Pet Daycare', link: '/daycare' },
//         { icon: <FaCalendarAlt />, label: 'Book Daycare', link: '/daycare#booking' },
//         { icon: <FaShieldAlt />, label: 'Emergency Care', link: '/emergency' },
//       ].map((action, index) => (
//         <Link
//           key={index}
//           href={action.link}
//           className="group relative 
//                      py-4 sm:py-5 lg:py-7 
//                      rounded-xl 
//                      font-semibold 
//                      flex flex-col items-center justify-center gap-2 
//                      transition-all duration-300 
//                      bg-white/95 backdrop-blur-sm text-[#2c4a3e] 
//                      hover:bg-white 
//                      shadow-lg hover:shadow-xl"
//         >
//           <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 text-[#b87d5e]">
//             {action.icon}
//           </span>
//           <span className="text-sm sm:text-base lg:text-lg font-medium">
//             {action.label}
//           </span>
//           <FaArrowRight className="absolute bottom-3 right-3 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#b87d5e]" />
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>

// {/* Final CTA - Updated with better colors */}
// <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-br from-[#2c4a3e]/90 to-[#1e352b]/90">
//     <div className="absolute inset-0 opacity-10">
//       <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#b87d5e] rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-white rounded-full blur-3xl" />
//     </div>
//   </div>

//   <div className="relative container mx-auto px-4">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="max-w-4xl mx-auto"
//     >
//       <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20">
//         <div className="text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
//             className="relative inline-block mb-4 sm:mb-6 md:mb-8"
//           >
//             <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-30 animate-pulse" />
//             <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#b87d5e] to-[#2c4a3e] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
//               <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
//             </div>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4"
//           >
//             Ready to Make an{' '}
//             <span className="text-[#b87d5e] relative inline-block">
//               Impact?
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2c4a3e]/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
//           >
//             Your support transforms lives and gives rescued animals a second chance at life.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
//           >
//             <Link href="/adopt" className="w-full sm:w-auto">
//               <button className="group cursor-pointer w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
//                 <FaHeart className="group-hover:scale-110 transition-transform" />
//                 <span>Adopt a Pet</span>
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </Link>

//             <div className="hidden sm:flex items-center gap-2">
//               <div className="w-8 md:w-12 h-px bg-[#2c4a3e]/20" />
//               <span className="text-xs font-medium text-[#2c4a3e]/40">or</span>
//               <div className="w-8 md:w-12 h-px bg-[#2c4a3e]/20" />
//             </div>

//             <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
//               <Link href="/volunteer" className="flex-1 xs:flex-initial">
//                 <button className="w-full cursor-pointer px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-lg sm:rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
//                   <FaUsers className="group-hover:scale-110 transition-transform" />
//                   <span>Volunteer</span>
//                 </button>
//               </Link>
              
//               <Link href="/donate" className="flex-1 xs:flex-initial">
//                 <button className="w-full cursor-pointer px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-[#b87d5e] text-[#b87d5e] font-semibold rounded-lg sm:rounded-xl hover:bg-[#b87d5e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
//                   <FaGift className="group-hover:scale-110 transition-transform" />
//                   <span>Donate</span>
//                 </button>
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//             className="pt-6 sm:pt-7 md:pt-8 border-t border-[#2c4a3e]/10"
//           >
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//                   <FaCheck className="text-[#b87d5e] text-[10px] sm:text-xs" />
//                 </div>
//                 <span className="text-[#2c4a3e]/70">Trusted by 5,000+ members</span>
//               </div>
              
//               <div className="hidden sm:block w-px h-4 bg-[#2c4a3e]/20" />
              
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#2c4a3e]/10 rounded-full flex items-center justify-center">
//                   <FaHeart className="text-[#2c4a3e] text-[10px] sm:text-xs" />
//                 </div>
//                 <span className="text-[#2c4a3e]/70">100% non-profit</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </div>

//         <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
//           {/* Live Stats */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <LiveStats />
//           </div>

//           {/* How It Works Section - Updated */}
//           <div className="mb-16 sm:mb-20 md:mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-8 sm:mb-12 md:mb-16"
//             >
//               <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b87d5e] rounded-full text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
//                 Simple Process
//               </span>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
//                 How It Works
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto px-4">
//                 Choose between adoption or professional daycare in just a few simple steps
//               </p>
//             </motion.div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
//               {/* Step 1 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="relative group"
//               >
//                 <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 hover:border-[#b87d5e]/30">
//                   <div className="relative">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-2xl sm:text-3xl font-bold text-[#b87d5e]">1</span>
//                     </div>
                    
//                     <h3 className="text-xl sm:text-2xl font-bold text-[#2c4a3e] mb-2 sm:mb-3">
//                       Find Your Pet
//                     </h3>
//                     <p className="text-sm sm:text-base text-[#2c4a3e]/70 leading-relaxed">
//                       Browse through our available animals and find your perfect match.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
              
//               {/* Step 2 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="relative group"
//               >
//                 <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 hover:border-[#b87d5e]/30">
//                   <div className="relative">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-2xl sm:text-3xl font-bold text-[#b87d5e]">2</span>
//                     </div>
                    
//                     <h3 className="text-xl sm:text-2xl font-bold text-[#2c4a3e] mb-2 sm:mb-3">
//                       Have A Meeting
//                     </h3>
//                     <p className="text-sm sm:text-base text-[#2c4a3e]/70 leading-relaxed">
//                       Schedule a visit to meet your potential new family member in person.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
              
//               {/* Step 3 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="relative group sm:col-span-2 lg:col-span-1"
//               >
//                 <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300 hover:border-[#b87d5e]/30">
//                   <div className="relative">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b87d5e]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-2xl sm:text-3xl font-bold text-[#b87d5e]">3</span>
//                     </div>
                    
//                     <h3 className="text-xl sm:text-2xl font-bold text-[#2c4a3e] mb-2 sm:mb-3">
//                       Take Them Home
//                     </h3>
//                     <p className="text-sm sm:text-base text-[#2c4a3e]/70 leading-relaxed">
//                       Complete the adoption process and welcome your new friend home.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
            
//             {/* Bottom CTA - Working link */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-center mt-8 sm:mt-10 md:mt-12"
//             >
//               <Link href="/animals">
//                 <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group text-sm sm:text-base cursor-pointer">
//                   <span>Start Your Journey</span>
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Email Subscription Section */}
//           <div className="mb-12 sm:mb-16 md:mb-24">
//             <EmailSubscription />
//           </div>

//           {/* Featured Pets Section */}
//           <div className="mb-16 sm:mb-20 md:mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-8 sm:mb-12 md:mb-16"
//             >
//               <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b87d5e] rounded-full text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
//                 Meet Our Friends
//               </span>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
//                 Featured Pets
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto px-4">
//                 Meet loving pets available for adoption or learn how we care for them in our daycare facility.
//               </p>
//             </motion.div>
            
//             {/* Top Row - Cards with working links */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
//               {/* Card 1 - Ninja Warrior */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="group relative"
//               >
//                 <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
//                   <img 
//                     src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80" 
//                     alt="Dog - Ninja Warrior"
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/50 to-transparent opacity-80" />
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
//                     <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
//                       <span className="bg-[#b87d5e] text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
//                         Featured
//                       </span>
//                       <span className="bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm">
//                         Male • 2 years
//                       </span>
//                     </div>
                    
//                     <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 flex flex-wrap items-center gap-2">
//                       Ninja Warrior
//                       <span className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">Dog</span>
//                     </h3>
                    
//                     <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-2 hidden sm:block">
//                       This fun and energetic dog is always ready for an adventure.
//                     </p>
                    
//                     <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
//                       <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Energetic</span>
//                       <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Playful</span>
//                     </div>
                    
//                     <Link href="/animals/7">
//                       <button className="px-4 cursor-pointer sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold bg-white text-[#2c4a3e] hover:bg-[#b87d5e] hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-xs sm:text-sm">
//                         Meet Ninja
//                         <FaArrowRight className="text-xs" />
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
              
//               {/* Card 2 - Madam Mimi */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="group relative"
//               >
//                 <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
//                   <img 
//                     src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80" 
//                     alt="CAT - Madam Mimi"
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/50 to-transparent opacity-80" />
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
//                     <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
//                       <span className="bg-[#b87d5e] text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
//                         Featured
//                       </span>
//                       <span className="bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs sm:text-sm">
//                         Female • 1.5 years
//                       </span>
//                     </div>
                    
//                     <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 flex flex-wrap items-center gap-2">
//                       Madam Mimi
//                       <span className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">Cat</span>
//                     </h3>
                    
//                     <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-2 hidden sm:block">
//                       This elegant and curious cat loves to explore every corner.
//                     </p>
                    
//                     <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
//                       <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Elegant</span>
//                       <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">Curious</span>
//                     </div>
                    
//                     <Link href="/animals/8">
//                       <button className="px-4 cursor-pointer sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold bg-white text-[#2c4a3e] hover:bg-[#b87d5e] hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-xs sm:text-sm">
//                         Meet Mimi
//                         <FaArrowRight className="text-xs" />
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
            
//             {/* Bottom Row - Featured Large Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="group relative mb-6 sm:mb-8"
//             >
//               <div className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&auto=format&fit=crop&q=80" 
//                   alt="DOG - T-Rex"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
                
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/60 to-transparent" />
                
//                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 transform group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px] transition-transform duration-300">
//                   <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
//                     <span className="bg-[#b87d5e] text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold">
//                       ❤️ Urgent: Needs Home
//                     </span>
//                     <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm">
//                       Male • 2 years
//                     </span>
//                   </div>
                  
//                   <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
//                     T-Rex
//                     <span className="text-xs sm:text-sm md:text-base bg-white/20 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full">Dog</span>
//                   </h3>
                  
//                   <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 max-w-2xl hidden sm:block">
//                     He may be a shy pup, but with time and kindness, T-Rex will slowly come out of his shell.
//                   </p>
                  
//                   <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
//                     <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full text-xs border border-white/20">
//                       Shy but loving
//                     </span>
//                     <span className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full text-xs border border-white/20">
//                       Loyal companion
//                     </span>
//                   </div>
                  
//                   <div className="flex flex-wrap items-center gap-3 sm:gap-4">
//                     <Link href="/animals/9">
//                       <button className="bg-[#b87d5e] cursor-pointer text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-[#9e6a4f] transition-all duration-300 inline-flex items-center gap-2 shadow-xl text-sm sm:text-base">
//                         <FaHeart className="text-sm sm:text-base" />
//                         <span className="hidden xs:inline">Meet T-Rex</span>
//                         <FaArrowRight className="text-sm sm:text-base" />
//                       </button>
//                     </Link>
                    
//                     <Link href="/animals" className="text-white/80 hover:text-white transition-colors underline underline-offset-4 text-xs sm:text-sm">
//                       View all animals
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* View All Link - Working */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="text-center"
//             >
//               <Link href="/animals">
//                 <button className="inline-flex cursor-pointer items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#2c4a3e] text-white rounded-lg sm:rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 group text-sm sm:text-base">
//                   <span>Browse All Pets</span>
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </motion.div>
//           </div>

//          {/* FAQ Section with Staggered Animation */}
// <div className="mt-16 sm:mt-20 md:mt-24">
//   <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto px-4">
//   {faqs.map((faq, index) => {
//     const isOpen = openIndex === index;

//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 overflow-hidden"
//       >
//         <button
//           onClick={() =>
//             setOpenIndex(isOpen ? null : index)
//           }
//           className="w-full cursor-pointer px-4 sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200 group"
//         >
//           <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c4a3e] text-left">
//             {faq.question}
//           </h3>

//           <motion.div
//             animate={{ rotate: isOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
//           >
//             <svg
//               className="w-4 h-4 text-[#b87d5e]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </motion.div>
//         </button>

//         <motion.div
//           initial={false}
//           animate={{
//             height: isOpen ? "auto" : 0,
//             opacity: isOpen ? 1 : 0,
//           }}
//           transition={{ duration: 0.3 }}
//           className="overflow-hidden"
//         >
//           <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
//             <p className="text-sm sm:text-base text-gray-600">
//               {faq.answer}
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   })}
// </div>
// </div>

//         {/* Contact Form Section - Updated with better styling */}
// <div className="mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20 md:mb-24">
//   {/* Header */}
//   <div className="text-center mb-10 sm:mb-12">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b87d5e] rounded-full text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
//         Get In Touch
//       </span>
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b87d5e] mb-3">
//         We'd Love to <span className="text-[#b87d5e]">Hear From You</span>
//       </h2>
//       <p className="text-sm sm:text-base text-white max-w-2xl mx-auto px-4">
//         Have questions about adoption, daycare, or want to get involved? Reach out to our friendly team.
//       </p>
//     </motion.div>
//   </div>

//   {/* Form Container */}
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay: 0.2 }}
//     className="max-w-3xl mx-auto px-4"
//   >
//     <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//       {/* Decorative Header */}
//       <div className="h-2 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e]" />
      
//       <div className="p-6 sm:p-8 md:p-10">
//         <form onSubmit={handleSubmit} className="space-y-5">
          
//           {/* Name Row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-1.5">
//               <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
//                 <FaPaw className="text-[#b87d5e] text-xs" />
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="John"
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
//                          focus:outline-none focus:border-[#b87d5e] focus:ring-2 focus:ring-[#b87d5e]/20 
//                          focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
//                 <FaPaw className="text-[#2c4a3e] text-xs" />
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Doe"
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
//                          focus:outline-none focus:border-[#b87d5e] focus:ring-2 focus:ring-[#b87d5e]/20 
//                          focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
//               />
//             </div>
//           </div>

//           {/* Email Field */}
//           <div className="space-y-1.5">
//             <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
//               <FaEnvelope className="text-[#b87d5e] text-xs" />
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="john.doe@example.com"
//               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
//                        focus:outline-none focus:border-[#b87d5e] focus:ring-2 focus:ring-[#b87d5e]/20 
//                        focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
//             />
//           </div>

//           {/* Subject Dropdown */}
//           <div className="space-y-1.5">
//             <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
//               <FaQuestionCircle className="text-[#2c4a3e] text-xs" />
//               Subject
//             </label>
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setIsSubjectOpen(!isSubjectOpen)}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
//                          flex items-center justify-between 
//                          focus:outline-none focus:border-[#b87d5e] focus:ring-2 focus:ring-[#b87d5e]/20
//                          transition-all duration-200 text-left"
//               >
//                 {formData.subject ? (
//                   <div className="flex items-center gap-2 text-gray-700">
//                     {subjectOptions.find(opt => opt.value === formData.subject)?.icon}
//                     <span>{subjectOptions.find(opt => opt.value === formData.subject)?.label}</span>
//                   </div>
//                 ) : (
//                   <span className="text-gray-400">Select a subject</span>
//                 )}

//                 <FaChevronDown
//                   className={`transition-transform duration-300 ${
//                     isSubjectOpen ? "rotate-180 text-[#b87d5e]" : "text-gray-400"
//                   }`}
//                 />
//               </button>

//               {isSubjectOpen && (
//                 <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
//                   {subjectOptions.map((option) => (
//                     <button
//                       key={option.value}
//                       type="button"
//                       onClick={() => {
//                         setFormData({ ...formData, subject: option.value });
//                         setIsSubjectOpen(false);
//                       }}
//                       className="w-full px-4 py-3 flex items-center gap-3 text-left 
//                                hover:bg-gradient-to-r hover:from-[#b87d5e]/5 hover:to-[#2c4a3e]/5 
//                                transition-colors duration-200"
//                     >
//                       <span className="text-[#b87d5e]">{option.icon}</span>
//                       <span className="text-gray-700">{option.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Message Field */}
//           <div className="space-y-1.5">
//             <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
//               <FaHeart className="text-[#b87d5e] text-xs" />
//               Your Message
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={5}
//               placeholder="Tell us how we can help you..."
//               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
//                        focus:outline-none focus:border-[#b87d5e] focus:ring-2 focus:ring-[#b87d5e]/20 
//                        focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
//             />
//             <div className="text-right">
//               <span className={`text-xs ${formData.message.length > 400 ? 'text-[#b87d5e]' : 'text-gray-400'}`}>
//                 {formData.message.length}/500 characters
//               </span>
//             </div>
//           </div>

//           {/* Terms Checkbox */}
//           <div className="flex items-start gap-3 pt-2">
//             <div className="relative flex items-center h-5">
//               <input
//                 type="checkbox"
//                 name="terms"
//                 checked={formData.terms}
//                 onChange={handleChange}
//                 className="w-4 h-4 border-2 border-gray-300 rounded 
//                          checked:bg-[#b87d5e] checked:border-[#b87d5e] 
//                          focus:ring-2 focus:ring-[#b87d5e]/20 focus:outline-none
//                          transition-all duration-200 cursor-pointer"
//               />
//             </div>
//             <label className="text-sm text-gray-600 leading-relaxed">
//               I agree to the{' '}
//               <button type="button" className="text-[#b87d5e] hover:text-[#9e6a4f] font-medium underline underline-offset-2 transition-colors">
//                 terms and conditions
//               </button>
//               {' '}and{' '}
//               <button type="button" className="text-[#b87d5e] hover:text-[#9e6a4f] font-medium underline underline-offset-2 transition-colors">
//                 privacy policy
//               </button>.
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="group relative w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#b87d5e] to-[#2c4a3e] text-white 
//                        font-semibold rounded-lg overflow-hidden transition-all duration-300
//                        hover:shadow-lg hover:shadow-[#b87d5e]/20 hover:scale-[1.02]
//                        focus:outline-none focus:ring-2 focus:ring-[#b87d5e] focus:ring-offset-2
//                        active:transform active:scale-[0.98]"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 <FaHeart className="group-hover:scale-110 transition-transform" />
//                 Send Message
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         </form>

//         {/* Alternative Contact Info */}
//         <div className="mt-8 pt-6 border-t border-gray-100">
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//                 <FaPhone className="text-[#b87d5e] text-xs" />
//               </div>
//               <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-[#b87d5e] transition-colors">
//                 +91 98765 43210
//               </a>
//             </div>
            
//             <div className="hidden sm:block w-px h-4 bg-gray-200" />
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-[#2c4a3e]/10 rounded-full flex items-center justify-center">
//                 <FaEnvelope className="text-[#2c4a3e] text-xs" />
//               </div>
//               <a href="mailto:info@pawheaven.com" className="text-sm text-gray-600 hover:text-[#2c4a3e] transition-colors">
//                 info@pawheaven.com
//               </a>
//             </div>
            
//             <div className="hidden sm:block w-px h-4 bg-gray-200" />
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//                 <FaMapMarkerAlt className="text-[#b87d5e] text-xs" />
//               </div>
//               <span className="text-sm text-gray-600">Vashi, Navi Mumbai</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// </div>

//           {/* Donation Progress */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <DonationProgress />
//           </div>

//           {/* Features Section */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-8 sm:mb-12 md:mb-16"
//             >
//               <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b87d5e] rounded-full text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
//                 Innovative Technology
//               </span>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#b87d5e] mb-2 sm:mb-4">
//                 Modern Pet Care <span className="text-[#b87d5e]">Tools</span>
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto px-4">
//                 Leverage modern tools to adopt, book daycare, and stay connected with your pet’s care.
//               </p>
//             </motion.div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Link
//                     href={feature.link}
//                     className="group relative block h-full"
//                   >
//                     <div className="relative h-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-2xl transition-all duration-500">
                      
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
//                       <div className="relative mb-4 sm:mb-5 md:mb-6">
//                         <div className="absolute inset-0 bg-[#b87d5e] rounded-xl sm:rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
//                         <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                           {feature.icon}
//                         </div>
//                       </div>
                      
//                       <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 group-hover:text-[#b87d5e] transition-colors duration-300">
//                         {feature.title}
//                       </h3>
                      
//                       <p className="text-xs sm:text-sm text-[#2c4a3e]/70 leading-relaxed mb-4 sm:mb-5 md:mb-6">
//                         {feature.description}
//                       </p>
                      
//                       <div className="inline-flex items-center gap-1 sm:gap-2 text-[#b87d5e] font-semibold text-xs sm:text-sm group/link">
//                         <span>Explore feature</span>
//                         <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#b87d5e]/10 flex items-center justify-center group-hover/link:bg-[#b87d5e] group-hover/link:translate-x-1 transition-all duration-300">
//                           <FaArrowRight className="text-[10px] sm:text-xs text-[#b87d5e] group-hover/link:text-white transition-colors duration-300" />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Bottom CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.5 }}
//               className="text-center mt-8 sm:mt-10 md:mt-12"
//             >
//               <Link href="/features">
//                 <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#2c4a3e] text-white rounded-lg sm:rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 group text-sm sm:text-base">
//                   <span>View All Features</span>
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Statistics */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <Statistics />
//           </div>

//           {/* Success Stories */}
//           <div className="mb-16 sm:mb-20 md:mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
//             >
//               <div>
//                 <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
//                   <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//                     <FaStar className="text-sm sm:text-base md:text-lg text-[#b87d5e]" />
//                   </div>
//                   <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-xs sm:text-sm">
//                     Happy Endings
//                   </span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#b87d5e] mb-2 sm:mb-3">
//                   Success <span className="text-[#b87d5e]">Stories</span>
//                 </h2>
//                 <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl">
//                   Heartwarming tales of animals who found their forever homes.
//                 </p>
//               </div>
              
//               <Link href="/success-stories" className="hidden sm:block">
//                 <button className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] rounded-lg sm:rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 text-xs sm:text-sm">
//                   <span>View All Stories</span>
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </motion.div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
//               {successStories.map((story, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Link href={story.link} className="group block h-full">
//                     <div className="relative h-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#2c4a3e]/10 hover:shadow-2xl transition-all duration-500">
                      
//                       <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] opacity-90" />
                        
//                         <div className="absolute inset-0 opacity-10">
//                           <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#b87d5e] rounded-full blur-2xl" />
//                           <div className="absolute bottom-0 left-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-white rounded-full blur-3xl" />
//                         </div>
                        
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
//                             <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-2 border-white/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                               {story.icon}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white border border-white/30">
//                           {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                         </div>
//                       </div>
                      
//                       <div className="p-4 sm:p-5 md:p-6 lg:p-8">
//                         <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 group-hover:text-[#b87d5e] transition-colors duration-300">
//                           {story.title}
//                         </h3>
                        
//                         <p className="text-xs sm:text-sm text-[#2c4a3e]/70 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6">
//                           {story.description}
//                         </p>
                        
//                         <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
//                           <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#b87d5e]/10 text-[#b87d5e] text-[10px] sm:text-xs rounded-full">
//                             Adopted
//                           </span>
//                           <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#2c4a3e]/10 text-[#2c4a3e] text-[10px] sm:text-xs rounded-full">
//                             Happy Ending
//                           </span>
//                         </div>
                        
//                         {/* <div className="inline-flex items-center gap-1 sm:gap-2 text-[#b87d5e] font-semibold text-xs sm:text-sm group/link">
//                           <span>Read their story</span>
//                           <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#b87d5e]/10 flex items-center justify-center group-hover/link:bg-[#b87d5e] group-hover/link:translate-x-1 transition-all duration-300">
//                             <FaArrowRight className="text-[10px] sm:text-xs text-[#b87d5e] group-hover/link:text-white transition-colors duration-300" />
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Mobile View All Link */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="text-center mt-6 sm:hidden"
//             >
//               <Link href="/success-stories">
//                 <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] rounded-lg font-semibold hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 text-sm">
//                   <span>View All Stories</span>
//                   <FaArrowRight />
//                 </button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Testimonials */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <Testimonials />
//           </div>

//           {/* Final CTA */}
//           <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]">
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#b87d5e] rounded-full blur-3xl" />
//                 <div className="absolute bottom-0 left-0 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-white rounded-full blur-3xl" />
//               </div>
//             </div>

//             <div className="relative container mx-auto px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="max-w-4xl mx-auto"
//               >
//                 <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20">
//                   <div className="text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
//                       className="relative inline-block mb-4 sm:mb-6 md:mb-8"
//                     >
//                       <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-30 animate-pulse" />
//                       <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
//                         <FaHeart className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
//                       </div>
//                     </motion.div>

//                     <motion.h2
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.2 }}
//                       className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2c4a3e] mb-2 sm:mb-3 md:mb-4"
//                     >
//                       Ready to Make an{' '}
//                       <span className="text-[#b87d5e] relative inline-block">
//                         Impact?
//                       </span>
//                     </motion.h2>

//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 }}
//                       className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2c4a3e]/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
//                     >
//                       Your support transforms lives and gives rescued animals a second chance at life.
//                     </motion.p>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.4 }}
//                       className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
//                     >
//                       <Link href="/adopt" className="w-full sm:w-auto">
//                         <button className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white font-semibold rounded-lg sm:rounded-xl hover:from-[#1e352b] hover:to-[#0f1f18] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
//                           <FaHeart className="group-hover:scale-110 transition-transform" />
//                           <span>Adopt a Pet</span>
//                           <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                         </button>
//                       </Link>

//                       <div className="hidden sm:flex items-center gap-2">
//                         <div className="w-8 md:w-12 h-px bg-[#2c4a3e]/20" />
//                         <span className="text-xs font-medium text-[#2c4a3e]/40">or</span>
//                         <div className="w-8 md:w-12 h-px bg-[#2c4a3e]/20" />
//                       </div>

//                       <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
//                         <Link href="/volunteer" className="flex-1 xs:flex-initial">
//                           <button className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
//                             <FaUsers className="group-hover:scale-110 transition-transform" />
//                             <span>Volunteer</span>
//                           </button>
//                         </Link>
                        
//                         <Link href="/donate" className="flex-1 xs:flex-initial">
//                           <button className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#b87d5e] text-[#b87d5e] font-semibold rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[#b87d5e] hover:to-[#2c4a3e] hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
//                             <FaGift className="group-hover:scale-110 transition-transform" />
//                             <span>Donate</span>
//                           </button>
//                         </Link>
//                       </div>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.5 }}
//                       className="pt-6 sm:pt-7 md:pt-8 border-t border-[#2c4a3e]/10"
//                     >
//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
//                         <div className="flex items-center gap-2">
//                           <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
//                             <FaCheck className="text-[#b87d5e] text-[10px] sm:text-xs" />
//                           </div>
//                           <span className="text-[#2c4a3e]/70">Trusted by 5,000+ members</span>
//                         </div>
                        
//                         <div className="hidden sm:block w-px h-4 bg-[#2c4a3e]/20" />
                        
//                         <div className="flex items-center gap-2">
//                           <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#2c4a3e]/10 rounded-full flex items-center justify-center">
//                             <FaHeart className="text-[#2c4a3e] text-[10px] sm:text-xs" />
//                           </div>
//                           <span className="text-[#2c4a3e]/70">100% non-profit</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Emergency Banner */}
//         <EmergencyBanner />
//       </div>
//     </>
//   );
// }