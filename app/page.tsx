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
  FaCheck
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

  // Quick actions for users
  const quickActions = [
    { icon: <FaPaw />, label: 'Find a Pet', link: '/matchmaker', color: 'bg-gradient-to-r from-amber-500 to-amber-600' },
    { icon: <FaCalendarAlt />, label: 'Book Visit', link: '/visit/book', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { icon: <FaVideo />, label: 'Live Cams', link: '/live-cams', color: 'bg-gradient-to-r from-emerald-500 to-emerald-600' },
    { icon: <FaUsers />, label: 'Community', link: '/community', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { icon: <FaShieldAlt />, label: 'Emergency', link: '/emergency', color: 'bg-gradient-to-r from-red-500 to-red-600' },
  ];

  // Features with Font Awesome icons
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

  // Success stories with Font Awesome icons
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
        
        {/* Quick Actions Bar - Updated */}
     
<div className="bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {quickActions.map((action, index) => (
        <Link
          key={index}
          href={action.link}
          className={`
            group relative
            px-6 py-3 
            rounded-lg 
            font-medium 
            flex items-center gap-3 
            transition-all duration-300 
            text-sm
            ${action.color.includes('bg-white') 
              ? 'bg-white text-amber-700 border border-amber-200 hover:border-amber-300 hover:shadow-md' 
              : 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow-md'
            }
          `}
        >
          {/* Subtle shine effect on hover for colored buttons */}
          {!action.color.includes('bg-white') && (
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
          )}
          
          <span className="relative z-10">
            {action.icon}
          </span>
          <span className="relative z-10">{action.label}</span>
          
          {/* Subtle arrow for colored buttons */}
          {!action.color.includes('bg-white') && (
            <FaArrowRight className="relative z-10 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          )}
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

       {/* Urgent Cases - Clean Professional Version */}
{urgentAnimals.length > 0 && (
  <div className="mb-24">
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2.5 rounded-full text-sm font-medium mb-5">
        <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        Urgent Attention Needed
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-5">
        Animals in Need of Immediate Homes
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        These animals require urgent adoption. Your help can save a life today.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {urgentAnimals.slice(0, 3).map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
    
    <div className="text-center">
      <Link 
        href="/animals?urgent=true" 
        className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
      >
        View All Urgent Cases
        <FaArrowRight className="text-sm" />
      </Link>
    </div>
  </div>
)}

{/* Available Animals - Clean Professional Version */}
<div className="mb-24">
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-5">
      Meet Our Furry Friends
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
      Browse through our adorable animals looking for their forever homes.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
    {availableAnimals.map((animal) => (
      <AnimalCard key={animal.id} animal={animal} />
    ))}
  </div>
  
  <div className="text-center">
    <Link 
      href="/animals" 
      className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
    >
      View All Animals
      <FaArrowRight />
    </Link>
  </div>
</div>

{/* How You Can Help - Clean Professional Version */}
<div className="mb-24">
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-5">
      Ways to Make a Difference
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
      Choose how you'd like to support our mission and help animals in need.
    </p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-10">
    {/* Adopt Card */}
    <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-md">
        <FaHome className="text-white text-3xl" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-5 text-center">Adopt</h3>
      <p className="text-gray-600 mb-7 text-center leading-relaxed text-base">
        Give a homeless animal a loving home and create a forever bond.
      </p>
      
      <div className="space-y-4">
        <Link 
          href="/adopt" 
          className="block w-full py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors text-center text-lg shadow-sm hover:shadow-md"
        >
          Start Adoption Process
        </Link>
        <Link 
          href="/foster" 
          className="block text-center text-amber-600 hover:text-amber-700 font-medium text-base"
        >
          Or consider fostering →
        </Link>
      </div>
    </div>
    
    {/* Volunteer Card */}
    <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-md">
        <FaHandsHelping className="text-white text-3xl" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-5 text-center">Volunteer</h3>
      <p className="text-gray-600 mb-7 text-center leading-relaxed text-base">
        Join our team and make a direct impact on animals' lives through hands-on care.
      </p>
      
      <div className="space-y-4">
        <Link 
          href="/volunteer" 
          className="block w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center text-lg shadow-sm hover:shadow-md"
        >
          Become a Volunteer
        </Link>
        <Link 
          href="/volunteer/events" 
          className="block text-center text-blue-600 hover:text-blue-700 font-medium text-base"
        >
          View upcoming events →
        </Link>
      </div>
    </div>
    
    {/* Donate Card */}
    <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-md">
        <FaHeart className="text-white text-3xl" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-5 text-center">Donate</h3>
      <p className="text-gray-600 mb-7 text-center leading-relaxed text-base">
        Support our mission with a financial contribution to help rescue and care for animals.
      </p>
      
      <div className="space-y-4">
        <Link 
          href="/donate" 
          className="block w-full py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-center text-lg shadow-sm hover:shadow-md"
        >
          Make a Donation
        </Link>
        <Link 
          href="/donate/sponsor" 
          className="block text-center text-emerald-600 hover:text-emerald-700 font-medium text-base"
        >
          Sponsor an animal →
        </Link>
      </div>
    </div>
  </div>
</div>

          {/* Donation Progress */}
          <div className="mb-20">
            <DonationProgress />
          </div>

          {/* Features Section - Updated with FA icons */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
                Modern Adoption Tools
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Leverage technology to find and connect with your perfect pet companion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                  className="group relative overflow-hidden bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                      <div className="text-2xl text-amber-700">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center gap-1 text-amber-600 font-medium text-sm">
                      Explore feature
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mb-20">
            <EmailSubscription />
          </div>

 {/* Statistics */}
          <div className="mb-20">
            <Statistics />
          </div>
          {/* Success Stories - Updated with FA icons */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white-900 mb-2">Success Stories</h2>
                <p className="text-gray-600">Animals who found their forever homes</p>
              </div>
              <Link 
                href="/success-stories" 
                className="text-amber-600 hover:text-amber-700 font-medium text-sm"
              >
                View all →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <Link key={index} href={story.link}>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl mb-3 text-amber-500">
                      {story.icon}
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {story.description}
                    </p>
                    
                    <div className="text-amber-600 text-xs font-medium">
                      Read story →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

         

          {/* Testimonials */}
          <div className="mb-20">
            <Testimonials />
          </div>

          {/* Upcoming Events - Updated */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for adoption drives, workshops, and community events
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((event) => (
                <div key={event} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FaCalendarAlt />
                    <span>Jan 28, 2024 • 10:00 AM</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Adoption Drive at Phoenix Mall</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Meet adoptable pets and learn about responsible pet ownership.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href={`/events/${event}`} 
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      Learn More
                    </Link>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/events" 
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                View Calendar
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mb-20">
            <EmergencyBanner />
          </div>

          {/* Final CTA - Updated */}
  {/* Final CTA - Minimal & Elegant */}
<div className="text-center py-12 px-6">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-white-900 mb-4">
      Ready to Make an Impact?
    </h2>
    <p className="text-gray-600 text-base mb-8 leading-relaxed">
      Join our community of animal lovers. Your support transforms lives and creates happy endings.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Link 
        href="/adopt" 
        className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <FaHeart className="group-hover:scale-110 transition-transform" />
        Adopt a Pet
      </Link>
      
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative px-4 text-sm text-gray-500 bg-white">or</div>
      </div>
      
      <div className="flex gap-3 justify-center">
        <Link 
          href="/volunteer" 
          className="px-4 py-3.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
        >
          Volunteer
        </Link>
        <Link 
          href="/donate" 
          className="px-4 py-3.5 border border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
        >
          Donate
        </Link>
      </div>
    </div>
    
    {/* Trust Indicators */}
    <div className="mt-8 pt-6 border-t border-gray-100">
      <p className="text-sm text-gray-500">
        <span className="inline-flex items-center gap-1">
          <FaCheck className="text-emerald-500 text-xs" />
          Trusted by 5,000+ community members
        </span>
        <span className="mx-2">•</span>
        <span>100% non-profit organization</span>
      </p>
    </div>
  </div>
</div>
          
        </div>
      </div>
    </>
  );
}