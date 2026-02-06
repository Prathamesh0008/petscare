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
  FaShieldAlt
} from 'react-icons/fa';

export default function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const urgentAnimals = getUrgentAnimals();
  const availableAnimals = getAvailableAnimals().slice(0, 6);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  // Quick actions for users
  const quickActions = [
    { icon: <FaPaw />, label: 'Find a Pet', link: '/matchmaker', color: 'bg-amber-500' },
    { icon: <FaCalendarAlt />, label: 'Book Visit', link: '/visit/book', color: 'bg-blue-500' },
    { icon: <FaVideo />, label: 'Live Cams', link: '/live-cams', color: 'bg-green-500' },
    { icon: <FaUsers />, label: 'Join Community', link: '/community', color: 'bg-purple-500' },
    { icon: <FaShieldAlt />, label: 'Emergency', link: '/emergency', color: 'bg-red-500' },
  ];

  // Features
  const features = [
    {
      title: 'Smart Matchmaking',
      description: 'Find your perfect pet match with our AI-powered system',
      link: '/matchmaker',
    },
    {
      title: 'Virtual Tours',
      description: 'Explore our shelter from the comfort of your home',
      link: '/virtual-tour',
    },
    {
      title: 'AR Pet Viewer',
      description: 'See how pets look in your space using augmented reality',
      link: '/ar-viewer',
    },
    {
      title: 'Live Animal Cams',
      description: 'Watch our animals in real-time 24/7',
      link: '/live-cams',
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
      {/* Website Intro Animation */}
      <WebsiteIntro onIntroComplete={handleIntroComplete} />

      {/* Main Website Content - Hidden until intro completes */}
      <div className={`transition-all duration-500 ${
        isIntroComplete ? 'opacity-100' : 'opacity-0'
      }`}>
        <Hero />
        
        {/* Quick Actions Bar */}
        <div className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-center flex-wrap gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.link}
                  className={`${action.color} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity`}
                >
                  {action.icon}
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Live Stats */}
          <div className="mb-12">
            <LiveStats />
          </div>

          {/* Urgent Cases */}
          {urgentAnimals.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <span className="text-red-500">⚠️</span>
                    Urgent Cases Need Homes
                  </h2>
                  <p className="text-gray-600">These animals need immediate adoption. Can you help?</p>
                </div>
                <Link 
                  href="/animals?urgent=true" 
                  className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
                >
                  View all urgent cases <FaArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {urgentAnimals.slice(0, 3).map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} urgent />
                ))}
              </div>
            </div>
          )}

          {/* Available Animals */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Animals</h2>
                <p className="text-gray-600">Looking for a new furry friend? Meet our available animals.</p>
              </div>
              <Link 
                href="/animals" 
                className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
              >
                View all animals <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>

          {/* How You Can Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How You Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHome className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Adopt</h3>
                <p className="text-gray-600 mb-6">
                  Give a homeless animal a second chance at love and happiness. Browse our available pets and start your adoption journey.
                </p>
                <div className="space-y-3">
                  <Link href="/adopt" className="btn-primary inline-block w-full">
                    Start Adoption Process
                  </Link>
                  <Link href="/foster" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                    Or consider fostering →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHandsHelping className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our team and make a difference in animals' lives. We need help with walking, feeding, and caring for our animals.
                </p>
                <div className="space-y-3">
                  <Link href="/volunteer" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block w-full">
                    Become a Volunteer
                  </Link>
                  <Link href="/volunteer/events" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View upcoming events →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">
                  Support our mission with a one-time or monthly donation. Every contribution helps us rescue and care for more animals.
                </p>
                <div className="space-y-3">
                  <Link href="/donate" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block w-full">
                    Make a Donation
                  </Link>
                  <Link href="/donate/sponsor" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Sponsor an animal →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Progress */}
          <div className="mb-16">
            <DonationProgress />
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Innovative Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-amber-600 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && '🤖'}
                    {index === 1 && '🏠'}
                    {index === 2 && '📱'}
                    {index === 3 && '📹'}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <span className="text-amber-600 font-semibold text-sm flex items-center gap-1">
                    Try it now <FaArrowRight className="text-xs" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mb-16">
            <EmailSubscription />
          </div>

          {/* Success Stories Preview */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Happy Endings</h2>
                <p className="text-gray-600">See how our animals found their forever homes</p>
              </div>
              <Link 
                href="/success-stories" 
                className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
              >
                Read all stories <FaArrowRight />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((story) => (
                <div key={story} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Max's New Family</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      After 6 months at our shelter, Max found his perfect home with the Sharma family...
                    </p>
                    <Link href={`/success-stories/${story}`} className="text-amber-600 font-medium text-sm">
                      Read full story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-16">
            <Statistics />
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <Testimonials />
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
                <p className="text-gray-600">Join us for adoption drives, workshops, and community events</p>
              </div>
              <Link 
                href="/events" 
                className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
              >
                View calendar <FaArrowRight />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((event) => (
                <div key={event} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-sm text-gray-500 mb-2">Jan 28, 2024 • 10:00 AM</div>
                  <h3 className="font-bold text-lg mb-2">Adoption Drive at Phoenix Mall</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Meet adoptable pets and learn about responsible pet ownership.
                  </p>
                  <div className="flex gap-3">
                    <Link 
                      href={`/events/${event}`} 
                      className="text-amber-600 font-medium text-sm"
                    >
                      Learn More
                    </Link>
                    <button className="text-blue-600 font-medium text-sm">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mb-16">
            <EmergencyBanner />
          </div>

          {/* Final CTA */}
          <div className="text-center py-12 px-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to adopt, volunteer, or donate, your support helps us save more lives every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/adopt" 
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Adopt a Pet
              </Link>
              <Link 
                href="/volunteer" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Become a Volunteer
              </Link>
              <Link 
                href="/donate" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}