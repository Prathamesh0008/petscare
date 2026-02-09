// petscare\app\contact\page.tsx
'use client';

import { useState } from 'react';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaWhatsapp, FaHeart, FaPaw, FaPaperPlane, 
  FaUsers, FaDonate, FaCar, FaTrain, FaBus, FaParking,
  FaCheckCircle, FaCalendarAlt, FaUserFriends
} from 'react-icons/fa';
import { SHELTER_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    });
  };

  const contactChannels = [
    {
      title: "Direct Visit",
      description: "Meet us in person",
      icon: FaMapMarkerAlt,
      details: SHELTER_INFO.address,
      color: "emerald",
      action: "https://maps.google.com",
      cta: "Get Directions"
    },
    {
      title: "Phone Call",
      description: "Quick conversation",
      icon: FaPhone,
      details: SHELTER_INFO.phone,
      color: "amber",
      action: `tel:${SHELTER_INFO.phone}`,
      cta: "Call Now"
    },
    {
      title: "Email",
      description: "Detailed communication",
      icon: FaEnvelope,
      details: SHELTER_INFO.email,
      color: "blue",
      action: `mailto:${SHELTER_INFO.email}`,
      cta: "Send Email"
    },
    {
      title: "WhatsApp",
      description: "Instant messaging",
      icon: FaWhatsapp,
      details: "+91 98765 43210",
      color: "green",
      action: "https://wa.me/919876543210",
      cta: "Message"
    }
  ];

  const inquiryTypes = [
    {
      value: 'adoption',
      label: 'Adoption Inquiry',
      description: 'Learn about our adoption process',
      icon: '🏠'
    },
    {
      value: 'volunteer',
      label: 'Volunteer Program',
      description: 'Join our volunteer community',
      icon: '🙌'
    },
    {
      value: 'donation',
      label: 'Donation Support',
      description: 'Make a contribution',
      icon: '💝'
    },
    {
      value: 'foster',
      label: 'Foster Care',
      description: 'Provide temporary home',
      icon: '🏡'
    },
    {
      value: 'emergency',
      label: 'Emergency Rescue',
      description: 'Report animal in distress',
      icon: '🚨'
    },
    {
      value: 'general',
      label: 'General Inquiry',
      description: 'Other questions',
      icon: '💬'
    }
  ];

  const transportationOptions = [
    { icon: FaCar, label: 'Parking', value: 'Free on-site', color: 'emerald' },
    { icon: FaTrain, label: 'Nearest Metro', value: 'Vashi Station', distance: '10 min walk', color: 'blue' },
    { icon: FaBus, label: 'Bus Stop', value: 'Sector 17', distance: '3 min walk', color: 'amber' },
    { icon: FaParking, label: 'Auto Stand', value: 'Gate 1', distance: '2 min walk', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/20 to-amber-50/10">
      {/* Hero Banner - Reduced height */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-400 to-amber-400">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <FaHeart className="text-white" />
              <span className="text-white font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Connect With <span className="text-amber-200">PetsCare</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to adopt, volunteer, or just say hello - we're excited to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <FaClock className="text-amber-200" />
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">Visiting Hours</div>
                    <div className="text-white/80 text-xs">{SHELTER_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-emerald-200" />
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">Location</div>
                    <div className="text-white/80 text-xs">Vashi, Navi Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Grid - Removed negative margin */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`p-6 ${
                channel.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100' :
                channel.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100' :
                channel.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                'bg-gradient-to-br from-green-50 to-green-100'
              } rounded-t-2xl`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    channel.color === 'emerald' ? 'bg-emerald-100' :
                    channel.color === 'amber' ? 'bg-amber-100' :
                    channel.color === 'blue' ? 'bg-blue-100' :
                    'bg-green-100'
                  }`}>
                    <channel.icon className={`text-xl ${
                      channel.color === 'emerald' ? 'text-emerald-600' :
                      channel.color === 'amber' ? 'text-amber-600' :
                      channel.color === 'blue' ? 'text-blue-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-white/50 backdrop-blur-sm rounded-full">
                    {channel.description}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-700 font-medium text-sm">{channel.details}</p>
              </div>
              
              <div className="p-6">
                <a
                  href={channel.action}
                  target={channel.action.includes('http') ? '_blank' : '_self'}
                  className={`inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl font-medium ${
                    channel.color === 'emerald' 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : channel.color === 'amber'
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : channel.color === 'blue'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  } transition-colors`}
                >
                  {channel.cta}
                  <FaPaperPlane className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
              {isSubmitted ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="relative inline-flex mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-3xl md:text-4xl" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully! 🎉</h3>
                  <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="/"
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 md:p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <FaPaperPlane className="text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Send Your Message</h2>
                        <p className="text-emerald-100">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            placeholder="Enter your name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Inquiry Type *</label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all bg-white"
                          >
                            <option value="" disabled>Select inquiry type</option>
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value} className="py-2">
                                {type.icon} {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium text-sm">Your Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                          placeholder="Tell us how we can assist you..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
            
            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <FaHeart className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">Emergency Animal Rescue</h3>
                    <p className="text-rose-100 text-sm">24/7 helpline for injured or distressed animals</p>
                  </div>
                </div>
                <a
                  href={`tel:${SHELTER_INFO.emergencyPhone}`}
                  className="px-6 md:px-8 py-3 bg-white text-rose-600 font-bold rounded-xl hover:bg-rose-50 transition-colors whitespace-nowrap text-sm md:text-base"
                >
                  {SHELTER_INFO.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Location Details */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FaMapMarkerAlt className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Visit Our Shelter</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <div className="font-medium text-gray-800 mb-2">Address</div>
                  <p className="text-gray-600 text-sm">{SHELTER_INFO.address}</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="font-medium text-gray-800 mb-2">Hours</div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaClock />
                    {SHELTER_INFO.workingHours}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Closed on Mondays
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition-colors text-sm md:text-base"
                >
                  <FaMapMarkerAlt />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Getting Here</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {transportationOptions.map((option, index) => (
                  <div key={index} className="p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        option.color === 'emerald' ? 'bg-emerald-100' :
                        option.color === 'blue' ? 'bg-blue-100' :
                        option.color === 'amber' ? 'bg-amber-100' :
                        'bg-purple-100'
                      }`}>
                        <option.icon className={`${
                          option.color === 'emerald' ? 'text-emerald-600' :
                          option.color === 'blue' ? 'text-blue-600' :
                          option.color === 'amber' ? 'text-amber-600' :
                          'text-purple-600'
                        }`} />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-medium text-gray-800">{option.label}</div>
                        <div className="text-xs text-gray-600">{option.value}</div>
                      </div>
                    </div>
                    {option.distance && (
                      <div className="text-xs text-gray-500 mt-2">{option.distance}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              
              <div className="space-y-3">
                <a 
                  href="/adopt" 
                  className="flex items-center justify-between p-3 md:p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <FaHeart className="text-amber-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-sm md:text-base">Adoption Process</span>
                  </div>
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <a 
                  href="/volunteer" 
                  className="flex items-center justify-between p-3 md:p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FaUserFriends className="text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-sm md:text-base">Volunteer Program</span>
                  </div>
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <a 
                  href="/donate" 
                  className="flex items-center justify-between p-3 md:p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <FaDonate className="text-emerald-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-sm md:text-base">Support Our Work</span>
                  </div>
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Visit Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Before You Visit</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Check our working hours above</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaClock className="text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Plan for 1-2 hours for proper visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaPaw className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Wear comfortable clothing</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCar className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Free parking available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Promise */}
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Quick Response Guaranteed</h3>
                <p className="text-emerald-100 text-sm md:text-base">We aim to respond to all inquiries within 24 hours</p>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-emerald-100 text-xs md:text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-emerald-100 text-xs md:text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">7/7</div>
                  <div className="text-emerald-100 text-xs md:text-sm">Days Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}