// petscare/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaWhatsapp, FaHeart, FaPaperPlane, 
  FaUsers, FaDonate, FaCar, FaTrain, FaBus, FaParking,
  FaCheckCircle, FaCalendarAlt, FaArrowRight
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
      title: "Visit Us",
      description: "Meet in person",
      icon: FaMapMarkerAlt,
      details: SHELTER_INFO.address,
      color: "amber",
      action: `https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`,
      cta: "Get Directions"
    },
    {
      title: "Call Us",
      description: "Quick conversation",
      icon: FaPhone,
      details: SHELTER_INFO.phone,
      color: "orange",
      action: `tel:${SHELTER_INFO.phone}`,
      cta: "Call Now"
    },
    {
      title: "Email Us",
      description: "Detailed communication",
      icon: FaEnvelope,
      details: SHELTER_INFO.email,
      color: "amber",
      action: `mailto:${SHELTER_INFO.email}`,
      cta: "Send Email"
    },
    {
      title: "WhatsApp",
      description: "Instant messaging",
      icon: FaWhatsapp,
      details: "+91 98765 43210",
      color: "orange",
      action: "https://wa.me/919876543210",
      cta: "Message"
    }
  ];

  const inquiryTypes = [
    { value: 'adoption', label: 'Adoption Inquiry', icon: '🏠' },
    { value: 'volunteer', label: 'Volunteer Program', icon: '🙌' },
    { value: 'donation', label: 'Donation Support', icon: '💝' },
    { value: 'foster', label: 'Foster Care', icon: '🏡' },
    { value: 'emergency', label: 'Emergency Rescue', icon: '🚨' },
    { value: 'general', label: 'General Inquiry', icon: '💬' }
  ];

  const transportationOptions = [
    { icon: FaCar, label: 'Parking', value: 'Free on-site', color: 'amber' },
    { icon: FaTrain, label: 'Nearest Metro', value: 'Vashi Station', distance: '10 min walk', color: 'orange' },
    { icon: FaBus, label: 'Bus Stop', value: 'Sector 17', distance: '3 min walk', color: 'amber' },
    { icon: FaParking, label: 'Auto Stand', value: 'Gate 1', distance: '2 min walk', color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/10 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-600 to-orange-500">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaHeart className="text-amber-100" />
              <span className="font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-amber-100">Touch</span>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to adopt, volunteer, or just say hello - we're excited to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <FaClock className="text-amber-200" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Visiting Hours</div>
                    <div className="text-white/80 text-xs">{SHELTER_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-200" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Location</div>
                    <div className="text-white/80 text-xs">Vashi, Navi Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${channel.color === 'amber' ? 'bg-amber-100' : 'bg-orange-100'} rounded-lg flex items-center justify-center`}>
                    <channel.icon className={`text-lg ${channel.color === 'amber' ? 'text-amber-600' : 'text-orange-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{channel.title}</h3>
                    <p className="text-gray-600 text-sm">{channel.description}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-sm">{channel.details}</p>
                
                <a
                  href={channel.action}
                  target={channel.action.includes('http') ? '_blank' : '_self'}
                  className={`inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg font-medium ${
                    channel.color === 'amber' 
                      ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  } transition-colors text-sm`}
                >
                  {channel.cta}
                  <FaPaperPlane className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {isSubmitted ? (
                <div className="p-12 text-center">
                  <div className="relative inline-flex mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-3xl" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="/"
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <FaPaperPlane className="text-xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Send Your Message</h2>
                        <p className="text-amber-100">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-all"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-all"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-all bg-white"
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
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 focus:outline-none transition-all resize-none"
                          placeholder="Tell us how we can assist you..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors disabled:opacity-70 flex items-center justify-center gap-3"
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
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <FaHeart className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Emergency Animal Rescue</h3>
                    <p className="text-orange-100 text-sm">24/7 helpline for injured or distressed animals</p>
                  </div>
                </div>
                <a
                  href={`tel:${SHELTER_INFO.emergencyPhone}`}
                  className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors whitespace-nowrap"
                >
                  {SHELTER_INFO.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Location Details */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Visit Our Shelter</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="font-medium text-gray-800 mb-2">Address</div>
                  <p className="text-gray-600 text-sm">{SHELTER_INFO.address}</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
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
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors"
              >
                <FaMapMarkerAlt />
                Open in Google Maps
              </a>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Getting Here</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {transportationOptions.map((option, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    option.color === 'amber' 
                      ? 'bg-amber-50 border-amber-100' 
                      : 'bg-orange-50 border-orange-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${option.color === 'amber' ? 'bg-amber-100' : 'bg-orange-100'}`}>
                        <option.icon className={option.color === 'amber' ? 'text-amber-600' : 'text-orange-600'} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{option.label}</div>
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
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
              
              <div className="space-y-3">
                <a 
                  href="/adopt" 
                  className="group flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaHeart className="text-amber-600" />
                    </div>
                    <span className="font-medium text-gray-800">Adoption Process</span>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                
                <a 
                  href="/volunteer" 
                  className="group flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-orange-600" />
                    </div>
                    <span className="font-medium text-gray-800">Volunteer Program</span>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                
                <a 
                  href="/donate" 
                  className="group flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaDonate className="text-amber-600" />
                    </div>
                    <span className="font-medium text-gray-800">Support Our Work</span>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Promise */}
      <div className="bg-gradient-to-b from-white to-amber-50/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Response Guaranteed</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">24h</div>
                <div className="text-gray-700 font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-700 font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">7/7</div>
                <div className="text-gray-700 font-medium">Days Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}