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
  FaHandsHelping, 
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
  FaCheckCircle,
  FaGift,
  FaCheck,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const urgentAnimals = getUrgentAnimals();
  const availableAnimals = getAvailableAnimals().slice(0, 6);

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
      title: 'Live Animal Cams',
      description: 'Watch our animals in real-time 24/7',
      link: '/live-cams',
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PawHaven...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <WebsiteIntro onIntroComplete={handleIntroComplete} />

      <div className={`transition-all duration-500 ${isIntroComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
  {/* Quick Actions Bar */}
<div className="bg-[#2c4a3e]">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {[
        { icon: <FaPaw />, label: 'Find a Pet', link: '/matchmaker' },
        { icon: <FaCalendarAlt />, label: 'Book Visit', link: '/visit/book' },
        { icon: <FaVideo />, label: 'Live Cams', link: '/live-cams' },
        { icon: <FaUsers />, label: 'Community', link: '/community' },
        { icon: <FaShieldAlt />, label: 'Emergency', link: '/emergency' },
      ].map((action, index) => (
        <Link
          key={index}
          href={action.link}
          className="group relative px-6 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300 text-sm bg-white text-[#2c4a3e] hover:bg-[#f5f7f0] shadow-sm hover:shadow-md"
        >
          <span className="relative z-10">{action.icon}</span>
          <span className="relative z-10">{action.label}</span>
          <FaArrowRight className="relative z-10 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      ))}
    </div>
  </div>
</div>

        <div className="container mx-auto px-4 py-16">
          {/* Live Stats */}
          <div className="mb-20">
            <LiveStats />
          </div>

       {/* How It Works Section */}
<div className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <span className="inline-block px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-semibold text-sm mb-4">
      Simple Process
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
      How It Works
    </h2>
    <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
      Your journey to finding a loving companion in three simple steps
    </p>
  </motion.div>
  
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Step 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Step Number */}
        <div className="relative">
          <div className="w-20 h-20 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-[#b87d5e]">1</span>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-[#2c4a3e] mb-3">
            Find Your Pet
          </h3>
          <p className="text-[#2c4a3e]/70 leading-relaxed">
            Browse through our available animals and find your perfect match. 
            Each profile includes photos, personality traits, and medical history.
          </p>
          
          {/* Decorative Icon */}
          <div className="absolute top-0 right-0 text-6xl text-[#b87d5e]/5 font-bold">
            01
          </div>
        </div>
      </div>
      
      {/* Connector Line (hidden on mobile) */}
      <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-[#b87d5e]/30" />
    </motion.div>
    
    {/* Step 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="w-20 h-20 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-[#b87d5e]">2</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#2c4a3e] mb-3">
            Have A Meeting
          </h3>
          <p className="text-[#2c4a3e]/70 leading-relaxed">
            Schedule a visit to meet your potential new family member in person. 
            Get to know their personality and see if you're a perfect match.
          </p>
          
          <div className="absolute top-0 right-0 text-6xl text-[#b87d5e]/5 font-bold">
            02
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-[#b87d5e]/30" />
    </motion.div>
    
    {/* Step 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="w-20 h-20 bg-[#b87d5e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-[#b87d5e]">3</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#2c4a3e] mb-3">
            Take Them Home
          </h3>
          <p className="text-[#2c4a3e]/70 leading-relaxed">
            Complete the adoption process and welcome your new friend home. 
            We provide ongoing support to ensure a smooth transition.
          </p>
          
          <div className="absolute top-0 right-0 text-6xl text-[#b87d5e]/5 font-bold">
            03
          </div>
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
    className="text-center mt-12"
  >
    <Link href="/animals">
      <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c4a3e] text-white rounded-lg font-semibold hover:bg-[#1e352b] transition-colors group">
        <span>Start Your Journey</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </motion.div>
</div>
          {/* Email Subscription Section */}
          <div className="mb-24">
            <EmailSubscription />
          </div>

         {/* Featured Pets Section */}
<div className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <span className="inline-block px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-semibold text-sm mb-4">
      Meet Our Friends
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
      Featured Pets
    </h2>
    <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
      Each of our rescues has a unique personality waiting to shine in a loving home
    </p>
  </motion.div>
  
  {/* Top Row - Two Cards */}
  <div className="grid md:grid-cols-2 gap-8 mb-8">
    {/* Card 1 - Ninja Warrior */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
        {/* Image */}
        <img 
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80" 
          alt="Dog - Ninja Warrior"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/50 to-transparent opacity-80" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-10px] transition-transform duration-300">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#b87d5e] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Featured
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm">
              Male • 2 years
            </span>
          </div>
          
          <h3 className="text-white text-3xl font-bold mb-2 flex items-center gap-2">
            Ninja Warrior
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Dog</span>
          </h3>
          
          <p className="text-white/90 mb-4 line-clamp-2">
            This fun and energetic dog is always ready for an adventure, from chasing toys to running around the house with endless curiosity.
          </p>
          
          {/* Personality Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Energetic</span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Playful</span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Adventurous</span>
          </div>
          
          {/* View Details Button */}
          <Link href="/animals/ninja-warrior">
            <button className=" px-6 py-3 rounded-lg font-semibold bg-white text-[#2c4a3e] hover:bg-[#b87d5e] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              Meet Ninja
              <FaArrowRight className="text-sm" />
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
      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80" 
          alt="CAT - Madam Mimi"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/50 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-10px] transition-transform duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#b87d5e] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Featured
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm">
              Female • 1.5 years
            </span>
          </div>
          
          <h3 className="text-white text-3xl font-bold mb-2 flex items-center gap-2">
            Madam Mimi
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Cat</span>
          </h3>
          
          <p className="text-white/90 mb-4 line-clamp-2">
            This elegant and curious cat loves to explore every corner of her environment and will charm you with her playful antics.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Elegant</span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Curious</span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Playful</span>
          </div>
          
          <Link href="/animals/madam-mimi">
            <button className="bg-white text-[#2c4a3e] px-6 py-3 rounded-lg font-semibold hover:bg-[#b87d5e] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              Meet Mimi
              <FaArrowRight className="text-sm" />
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
    className="group relative mb-8"
  >
    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
      <img 
        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&auto=format&fit=crop&q=80" 
        alt="DOG - T-Rex"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a3e] via-[#2c4a3e]/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-10 transform group-hover:translate-y-[-10px] transition-transform duration-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#b87d5e] text-white px-5 py-2 rounded-full text-sm font-semibold">
            ❤️ Urgent: Needs Home
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm">
            Male • 2 years
          </span>
        </div>
        
        <h3 className="text-white text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3">
          T-Rex
          <span className="text-base bg-white/20 px-4 py-1.5 rounded-full">Dog</span>
        </h3>
        
        <p className="text-white/90 text-lg mb-6 max-w-2xl">
          He may be a shy pup, but with time and kindness, T-Rex will slowly come out of his shell 
          and reward you with a lifetime of loyalty and love.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
            Shy but loving
          </span>
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
            Loyal companion
          </span>
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
            Needs patience
          </span>
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
            Good with kids
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/animals/t-rex">
            <button className="bg-[#b87d5e] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#9e6a4f] transition-all duration-300 inline-flex items-center gap-2 shadow-xl">
              <FaHeart />
              Meet T-Rex
              <FaArrowRight />
            </button>
          </Link>
          
          <Link href="/animals" className="text-white/80 hover:text-white transition-colors underline underline-offset-4">
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
      <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] rounded-xl font-semibold hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 group">
        <span>Browse All Pets</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </motion.div>
</div>

          {/* FAQ Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2c4a3e] mb-4">Frequent Ask Questions</h2>
              <p className="text-lg text-[#2c4a3e] max-w-3xl mx-auto">We've gathered information to help make your experience as smooth as possible. If you don't find what you're looking for, don't hesitate to reach out to us directly.</p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2c4a3e] mb-4">Get In Touch</h2>
              <p className="text-lg text-[#2c4a3e] max-w-3xl mx-auto">If you have any further questions or would like to start your adoption process, please reach out to us with the form below:</p>
            </div>
            
            <form className="space-y-6 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="John Smith@gmail.com" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              
              <textarea 
                placeholder="I'm reaching out because..." 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Subject</span>
                <select className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Adoption</option>
                  <option>Volunteer</option>
                  <option>Donation</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-5 h-5 text-amber-600" />
                <label htmlFor="terms" className="text-gray-700">I agree with the terms and conditions.</label>
              </div>
              
              <button className="w-full py-4 bg-amber-600 text-black font-semibold rounded-lg bg-white text-[#2c4a3e] hover:bg-[#b87d5e] hover:text-white transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Donation Progress */}
          <div className="mb-20">
            <DonationProgress />
          </div>

        {/* Features Section */}
<div className="mb-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <span className="inline-block px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] font-semibold text-sm mb-4">
      Innovative Technology
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
      Modern Adoption <span className="text-[#b87d5e]">Tools</span>
    </h2>
    <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
      Leverage cutting-edge technology to find and connect with your perfect pet companion.
    </p>
  </motion.div>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          {/* Card Container */}
          <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg border border-[#2c4a3e]/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#b87d5e] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-[#2c4a3e] mb-3 group-hover:text-[#b87d5e] transition-colors duration-300">
              {feature.title}
            </h3>
            
            <p className="text-[#2c4a3e]/70 text-sm leading-relaxed mb-6">
              {feature.description}
            </p>
            
            {/* Explore Link */}
            <div className="inline-flex items-center gap-2 text-[#b87d5e] font-semibold text-sm group/link">
              <span>Explore feature</span>
              <div className="w-6 h-6 rounded-full bg-[#b87d5e]/10 flex items-center justify-center group-hover/link:bg-[#b87d5e] group-hover/link:translate-x-1 transition-all duration-300">
                <FaArrowRight className="text-xs text-[#b87d5e] group-hover/link:text-white transition-colors duration-300" />
              </div>
            </div>

            {/* Feature Number (Decorative) */}
            <div className="absolute bottom-4 right-4 text-5xl font-bold text-[#2c4a3e]/5 select-none">
              {String(index + 1).padStart(2, '0')}
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
    className="text-center mt-12"
  >
    <Link href="/features">
      <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] rounded-xl font-semibold hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 group">
        <span>View All Features</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </motion.div>
</div>
          {/* Statistics */}
          <div className="mb-20">
            <Statistics />
          </div>

        {/* Success Stories */}
<div className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"
  >
    <div>
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
          <FaStar className="text-lg text-[#b87d5e]" />
        </div>
        <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
          Happy Endings
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-3">
        Success <span className="text-[#b87d5e]">Stories</span>
      </h2>
      <p className="text-lg text-[#2c4a3e]/70 max-w-2xl">
        Heartwarming tales of animals who found their forever homes and the families who love them.
      </p>
    </div>
    
    <Link href="/success-stories">
      <button className="group inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] rounded-xl font-semibold hover:bg-[#2c4a3e] hover:text-white transition-all duration-300">
        <span>View All Stories</span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </motion.div>
  
  <div className="grid md:grid-cols-3 gap-8">
    {successStories.map((story, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link href={story.link} className="group block h-full">
          <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-[#2c4a3e]/10 hover:shadow-2xl transition-all duration-500">
            
            {/* Image/Icon Section */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] opacity-90" />
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b87d5e] rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>
              
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="relative w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl text-white border-2 border-white/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {story.icon}
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/30">
                {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-[#2c4a3e] mb-3 group-hover:text-[#b87d5e] transition-colors duration-300">
                {story.title}
              </h3>
              
              <p className="text-[#2c4a3e]/70 text-sm leading-relaxed mb-6">
                {story.description}
              </p>
              
              {/* Tags/Metadata */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#b87d5e]/10 text-[#b87d5e] text-xs rounded-full">
                  Adopted
                </span>
                <span className="px-3 py-1 bg-[#2c4a3e]/10 text-[#2c4a3e] text-xs rounded-full">
                  Happy Ending
                </span>
              </div>
              
              {/* Read Story Link */}
              <div className="inline-flex items-center gap-2 text-[#b87d5e] font-semibold text-sm group/link">
                <span>Read their story</span>
                <div className="w-6 h-6 rounded-full bg-[#b87d5e]/10 flex items-center justify-center group-hover/link:bg-[#b87d5e] group-hover/link:translate-x-1 transition-all duration-300">
                  <FaArrowRight className="text-xs text-[#b87d5e] group-hover/link:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#b87d5e]/10 to-transparent rounded-tl-[100px]" />
          </div>
        </Link>
      </motion.div>
    ))}
  </div>

  {/* Featured Success Story */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="mt-12"
  >
    <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] rounded-3xl p-1">
      <div className="bg-white rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#b87d5e] rounded-2xl blur-xl opacity-30" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center text-white text-4xl">
              <FaHeart />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-sm font-semibold text-[#b87d5e] mb-2 block">Featured Story</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2c4a3e] mb-3">
              Bella's Journey Home
            </h3>
            <p className="text-[#2c4a3e]/70 mb-4">
              After three months of recovery and love, Bella found her perfect family. Read her inspiring journey from the streets to a loving home.
            </p>
            <Link href="/success-stories/featured">
              <button className="inline-flex items-center gap-2 text-[#b87d5e] font-semibold hover:text-[#9e6a4f] transition-colors">
                Read Full Story
                <FaArrowRight />
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-6 flex-shrink-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c4a3e]">2.5k</div>
              <div className="text-xs text-[#2c4a3e]/60">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c4a3e]">150</div>
              <div className="text-xs text-[#2c4a3e]/60">Shares</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c4a3e]">45</div>
              <div className="text-xs text-[#2c4a3e]/60">Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</div>

          {/* Testimonials */}
          <div className="mb-20">
            <Testimonials />
          </div>

         {/* Final CTA */}
<div className="relative py-20 overflow-hidden">
  {/* Background with Gradient and Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b87d5e] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
    </div>
    
    {/* Paw Print Pattern */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm20-30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5z" fill="%23b87d5e" fill-opacity="0.3"/%3E%3C/svg%3E")',
      backgroundRepeat: 'repeat',
    }} />
  </div>

  <div className="relative container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Main Content Card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
        <div className="text-center">
          {/* Heart Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <FaHeart className="text-4xl text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4a3e] mb-4"
          >
            Ready to Make an{' '}
            <span className="text-[#b87d5e] relative inline-block">
              Impact?
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#b87d5e" strokeWidth="2" fill="none" strokeOpacity="0.3" />
              </svg>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#2c4a3e]/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join our community of animal lovers. Your support transforms lives, 
            creates happy endings, and gives rescued animals a second chance at life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            {/* Adopt Button */}
            <Link href="/adopt" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] text-white font-semibold rounded-xl hover:from-[#1e352b] hover:to-[#0f1f18] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                <FaHeart className="group-hover:scale-110 transition-transform" />
                <span>Adopt a Pet</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Or Divider - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-12 h-px bg-[#2c4a3e]/20" />
              <span className="text-sm font-medium text-[#2c4a3e]/40">or</span>
              <div className="w-12 h-px bg-[#2c4a3e]/20" />
            </div>

            {/* Mobile Or Divider */}
            <div className="flex sm:hidden items-center gap-3 w-full">
              <div className="flex-1 h-px bg-[#2c4a3e]/20" />
              <span className="text-sm font-medium text-[#2c4a3e]/40">or</span>
              <div className="flex-1 h-px bg-[#2c4a3e]/20" />
            </div>

            {/* Volunteer & Donate Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/volunteer" className="flex-1 sm:flex-initial">
                <button className="w-full px-6 py-4 bg-transparent border-2 border-[#2c4a3e] text-[#2c4a3e] font-semibold rounded-xl hover:bg-[#2c4a3e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <FaUsers className="group-hover:scale-110 transition-transform" />
                  <span>Volunteer</span>
                </button>
              </Link>
              
              <Link href="/donate" className="flex-1 sm:flex-initial">
                <button className="w-full px-6 py-4 bg-transparent border-2 border-[#b87d5e] text-[#b87d5e] font-semibold rounded-xl hover:bg-[#b87d5e] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <FaGift className="group-hover:scale-110 transition-transform" />
                  <span>Donate</span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-[#2c4a3e]/10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
                  <FaCheck className="text-[#b87d5e] text-xs" />
                </div>
                <span className="text-[#2c4a3e]/70">Trusted by 5,000+ community members</span>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-[#2c4a3e]/20" />
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2c4a3e]/10 rounded-full flex items-center justify-center">
                  <FaHeart className="text-[#2c4a3e] text-xs" />
                </div>
                <span className="text-[#2c4a3e]/70">100% non-profit organization</span>
              </div>
            </div>

            {/* Additional Trust Badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-[#f5f7f0] rounded-full px-6 py-3">
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
              <span className="text-sm text-[#2c4a3e] font-medium">
                Join 200+ active volunteers
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#b87d5e]/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#2c4a3e]/10 rounded-full blur-2xl" />
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












