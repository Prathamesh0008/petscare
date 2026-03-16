// petscare/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaWhatsapp, FaHeart, FaPaperPlane, 
  FaUsers, FaDonate, FaCar, FaTrain, FaBus, FaParking, FaExclamationTriangle, FaHome, 
  FaCheckCircle, FaCalendarAlt, FaArrowRight, FaComment
} from 'react-icons/fa';

import { SHELTER_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      color: "#1b93d1",
      action: `https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`,
      cta: "Get Directions"
    },
    {
      title: "Call Us",
      description: "Quick conversation",
      icon: FaPhone,
      details: SHELTER_INFO.phone,
      color: "#223d7c",
      action: `tel:${SHELTER_INFO.phone}`,
      cta: "Call Now"
    },
    {
      title: "Email Us",
      description: "Detailed communication",
      icon: FaEnvelope,
      details: SHELTER_INFO.email,
      color: "#1b93d1",
      action: `mailto:${SHELTER_INFO.email}`,
      cta: "Send Email"
    },
    {
      title: "WhatsApp",
      description: "Instant messaging",
      icon: FaWhatsapp,
      details: "+91 98765 43210",
      color: "#223d7c",
      action: "https://wa.me/919876543210",
      cta: "Message"
    }
  ];
  
  const inquiryTypes = [
    { value: 'adoption', label: 'Adoption Inquiry', icon: FaHome },
    { value: 'volunteer', label: 'Volunteer Program', icon: FaUsers },
    { value: 'donation', label: 'Donation Support', icon: FaDonate },
    { value: 'foster', label: 'Foster Care', icon: FaHeart },
    { value: 'emergency', label: 'Emergency Rescue', icon: FaExclamationTriangle },
    { value: 'general', label: 'General Inquiry', icon: FaComment }
  ];
  
  const transportationOptions = [
    { icon: FaCar, label: 'Parking', value: 'Free on-site', color: '#1b93d1', distance: '' },
    { icon: FaTrain, label: 'Nearest Metro', value: 'Vashi Station', distance: '10 min walk', color: '#223d7c' },
    { icon: FaBus, label: 'Bus Stop', value: 'Sector 17', distance: '3 min walk', color: '#1b93d1' },
    { icon: FaParking, label: 'Auto Stand', value: 'Gate 1', distance: '2 min walk', color: '#223d7c' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7fa] to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#223d7c] to-[#1b93d1]">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6 cursor-pointer">
              <FaHeart className="text-white/80 text-xs sm:text-sm" />
              <span className="font-medium text-xs sm:text-sm">We're Here to Help</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-4">
              Get in <span className="text-[#B6D3DE]">Touch</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Whether you're looking to adopt, volunteer, or just say hello - we're excited to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl cursor-default">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaClock className="text-[#B6D3DE] text-xs sm:text-sm" />
                  <div className="text-left">
                    <div className="font-medium text-xs sm:text-sm">Visiting Hours</div>
                    <div className="text-white/80 text-[10px] sm:text-xs">{SHELTER_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl cursor-default">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaMapMarkerAlt className="text-[#B6D3DE] text-xs sm:text-sm" />
                  <div className="text-left">
                    <div className="font-medium text-xs sm:text-sm">Location</div>
                    <div className="text-white/80 text-[10px] sm:text-xs">Vashi, Navi Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {contactChannels.map((channel, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg sm:rounded-xl border border-[#223d7c]/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div 
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${channel.color}10` }}
                  >
                    <channel.icon className="text-base sm:text-lg" style={{ color: channel.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#223d7c] text-sm sm:text-base">{channel.title}</h3>
                    <p className="text-[#223d7c]/60 text-xs sm:text-sm">{channel.description}</p>
                  </div>
                </div>
                
                <p className="text-[#223d7c]/80 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm truncate">{channel.details}</p>
                
                <a
                  href={channel.action}
                  target={channel.action.includes('http') ? '_blank' : '_self'}
                  className="inline-flex items-center justify-center w-full gap-2 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm text-white transition-colors"
                  style={{ backgroundColor: channel.color }}
                  onMouseEnter={(e) => {
                    const darkenColor = channel.color === '#1b93d1' ? '#1680b5' : '#1a2f60';
                    e.currentTarget.style.backgroundColor = darkenColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = channel.color;
                  }}
                >
                  {channel.cta}
                  <FaPaperPlane className="text-[10px] sm:text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-14 md:pb-16">
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#223d7c]/10 shadow-sm overflow-hidden">
              {isSubmitted ? (
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center">
                  <div className="relative inline-flex mb-6 sm:mb-8 cursor-pointer">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#1b93d1] to-[#223d7c] rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xl sm:text-2xl md:text-3xl" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#223d7c] mb-3 sm:mb-4">Message Sent Successfully!</h3>
                  <p className="text-sm sm:text-base text-[#223d7c]/70 mb-6 sm:mb-8 max-w-md mx-auto px-4">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#1b93d1] to-[#223d7c] text-white font-medium rounded-lg text-sm sm:text-base hover:from-[#1680b5] hover:to-[#1a2f60] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="/"
                      className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#f5f7fa] text-[#223d7c]/70 font-medium rounded-lg text-sm sm:text-base hover:bg-[#e8ecf0] transition-colors cursor-pointer inline-block text-center"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-r from-[#1b93d1] to-[#223d7c] p-5 sm:p-6 md:p-8 text-white">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-lg cursor-pointer">
                        <FaPaperPlane className="text-base sm:text-lg md:text-xl" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Send Your Message</h2>
                        <p className="text-white/80 text-xs sm:text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        <div className="space-y-1 sm:space-y-2">
                          <label className="block text-[#223d7c] font-medium text-xs sm:text-sm">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full text-black px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-[#223d7c]/20 rounded-lg text-sm focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 transition-all cursor-text"
                            placeholder="Enter your name"
                          />
                        </div>
                        
                        <div className="space-y-1 sm:space-y-2">
                          <label className="block text-[#223d7c] font-medium text-xs sm:text-sm">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full text-black px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-[#223d7c]/20 rounded-lg text-sm focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 transition-all cursor-text"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        <div className="space-y-1 sm:space-y-2">
                          <label className="block text-[#223d7c] font-medium text-xs sm:text-sm">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full text-black px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-[#223d7c]/20 rounded-lg text-sm focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 transition-all cursor-text"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-2 relative w-full">
                          <label className="block text-[#223d7c] font-medium text-xs sm:text-sm">
                            Inquiry Type *
                          </label>

                          <button
                            type="button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full text-black px-4 py-3 border border-[#223d7c]/20 rounded-lg text-sm bg-white flex items-center justify-between"
                          >
                            {formData.inquiryType ? (
                              (() => {
                                const selected = inquiryTypes.find(
                                  (t) => t.value === formData.inquiryType
                                );
                                const Icon = selected?.icon;
                                return (
                                  <div className="flex items-center gap-2">
                                    {Icon && <Icon className="text-[#1b93d1]" />}
                                    <span className="text-[#223d7c]">{selected?.label}</span>
                                  </div>
                                );
                              })()
                            ) : (
                              <span className="text-[#223d7c]/40">Select inquiry type</span>
                            )}

                            <FaArrowRight
                              className={`transition-transform text-[#223d7c]/40 ${
                                dropdownOpen ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {dropdownOpen && (
                            <div className="absolute z-50 w-full mt-2 bg-white border border-[#223d7c]/10 rounded-lg shadow-lg max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1b93d1]/40 text-black">
                              {inquiryTypes.map((type) => {
                                const Icon = type.icon;
                                return (
                                  <div
                                    key={type.value}
                                    onClick={() => {
                                      setFormData({ ...formData, inquiryType: type.value });
                                      setDropdownOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f7fa] cursor-pointer"
                                  >
                                    <Icon className="text-[#1b93d1]" />
                                    <span className="text-[#223d7c]">{type.label}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-1 sm:space-y-2">
                        <label className="block text-[#223d7c] font-medium text-xs sm:text-sm">Your Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full text-black px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-[#223d7c]/20 rounded-lg bg-white text-[#223d7c] placeholder-[#223d7c]/40 text-sm focus:border-[#1b93d1] focus:ring-1 focus:ring-[#1b93d1]/20 focus:outline-none transition-all resize-none cursor-text"
                          placeholder="Tell us how we can assist you..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#1b93d1] to-[#223d7c] text-white font-bold rounded-lg text-sm sm:text-base hover:from-[#1680b5] hover:to-[#1a2f60] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs sm:text-sm">Sending...</span>
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-xs sm:text-sm" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-[#223d7c] to-[#1b93d1] rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/20 rounded-lg flex-shrink-0 cursor-pointer">
                    <FaHeart className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Emergency Animal Rescue</h3>
                    <p className="text-white/80 text-xs sm:text-sm">24/7 helpline for injured or distressed animals</p>
                  </div>
                </div>
                <a
                  href={`tel:${SHELTER_INFO.emergencyPhone}`}
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white text-[#223d7c] font-bold rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-colors text-center cursor-pointer"
                >
                  {SHELTER_INFO.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Location Details */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer">
                  <FaMapMarkerAlt className="text-[#1b93d1] text-sm sm:text-base" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#223d7c]">Visit Our Shelter</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6">
                <div className="p-3 sm:p-4 bg-[#1b93d1]/5 rounded-lg border border-[#1b93d1]/20 cursor-pointer">
                  <div className="font-medium text-[#223d7c] text-xs sm:text-sm mb-1 sm:mb-2">Address</div>
                  <p className="text-[#223d7c]/70 text-xs sm:text-sm">{SHELTER_INFO.address}</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-[#223d7c]/5 rounded-lg border border-[#223d7c]/20 cursor-pointer">
                  <div className="font-medium text-[#223d7c] text-xs sm:text-sm mb-1 sm:mb-2">Hours</div>
                  <div className="flex items-center gap-1 sm:gap-2 text-[#223d7c]/70 text-xs sm:text-sm">
                    <FaClock className="text-[10px] sm:text-xs" />
                    <span>{SHELTER_INFO.workingHours}</span>
                  </div>
                  <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#223d7c]/50">
                    Closed on Mondays
                  </div>
                </div>
              </div>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#1b93d1] to-[#223d7c] text-white font-medium rounded-lg text-xs sm:text-sm hover:from-[#1680b5] hover:to-[#1a2f60] transition-colors cursor-pointer"
              >
                <FaMapMarkerAlt className="text-xs sm:text-sm" />
                Open in Google Maps
              </a>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-[#223d7c]/10 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-base sm:text-lg font-bold text-[#223d7c] mb-4 sm:mb-5 md:mb-6">Getting Here</h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {transportationOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="p-3 sm:p-4 rounded-lg border cursor-pointer transition-colors"
                    style={{ 
                      backgroundColor: `${option.color}10`,
                      borderColor: `${option.color}20`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${option.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${option.color}10`;
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div 
                        className="p-1.5 sm:p-2 rounded-lg cursor-pointer"
                        style={{ backgroundColor: `${option.color}10` }}
                      >
                        <option.icon className="text-xs sm:text-sm" style={{ color: option.color }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-[#223d7c] truncate">{option.label}</div>
                        <div className="text-[10px] sm:text-xs text-[#223d7c]/60 truncate">{option.value}</div>
                      </div>
                    </div>
                    {option.distance && (
                      <div className="text-[10px] sm:text-xs text-[#223d7c]/50 mt-1 sm:mt-2">{option.distance}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-[#1b93d1]/5 to-white rounded-lg sm:rounded-xl border border-[#1b93d1]/20 p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#223d7c] mb-4 sm:mb-5 md:mb-6">Quick Links</h3>
              
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href="/adopt" 
                  className="group flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-[#223d7c]/10 hover:border-[#1b93d1] hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer">
                      <FaHeart className="text-[#1b93d1] text-xs sm:text-sm" />
                    </div>
                    <span className="font-medium text-[#223d7c] text-xs sm:text-sm">Adoption Process</span>
                  </div>
                  <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#1b93d1] group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm cursor-pointer" />
                </a>
                
                <a 
                  href="/volunteer" 
                  className="group flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-[#223d7c]/10 hover:border-[#223d7c] hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#223d7c]/10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer">
                      <FaUsers className="text-[#223d7c] text-xs sm:text-sm" />
                    </div>
                    <span className="font-medium text-[#223d7c] text-xs sm:text-sm">Volunteer Program</span>
                  </div>
                  <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#223d7c] group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm cursor-pointer" />
                </a>
                
                <a 
                  href="/donate" 
                  className="group flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-[#223d7c]/10 hover:border-[#1b93d1] hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#1b93d1]/10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer">
                      <FaDonate className="text-[#1b93d1] text-xs sm:text-sm" />
                    </div>
                    <span className="font-medium text-[#223d7c] text-xs sm:text-sm">Support Our Work</span>
                  </div>
                  <FaArrowRight className="text-[#223d7c]/30 group-hover:text-[#1b93d1] group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Promise */}
      <div className="bg-gradient-to-b from-white to-[#f5f7fa] py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#223d7c] mb-2 sm:mb-3">Quick Response Guaranteed</h3>
              <p className="text-sm sm:text-base text-[#223d7c]/70">We aim to respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center p-3 sm:p-4 cursor-pointer hover:bg-white/50 rounded-lg transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b93d1] mb-1 sm:mb-2">24h</div>
                <div className="text-xs sm:text-sm text-[#223d7c] font-medium">Response Time</div>
              </div>
              <div className="text-center p-3 sm:p-4 cursor-pointer hover:bg-white/50 rounded-lg transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#223d7c] mb-1 sm:mb-2">95%</div>
                <div className="text-xs sm:text-sm text-[#223d7c] font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4 cursor-pointer hover:bg-white/50 rounded-lg transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b93d1] mb-1 sm:mb-2">7/7</div>
                <div className="text-xs sm:text-sm text-[#223d7c] font-medium">Days Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}