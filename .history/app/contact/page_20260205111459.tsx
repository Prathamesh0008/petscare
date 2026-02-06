'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { SHELTER_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help! Reach out for adoptions, volunteering, donations, or any questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">{SHELTER_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FaPhoneAlt className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <div className="space-y-2">
                      <a href={`tel:${SHELTER_INFO.phone}`} className="text-gray-600 hover:text-amber-600 block">
                        {SHELTER_INFO.phone}
                      </a>
                      <div>
                        <span className="text-red-600 font-bold">Emergency: </span>
                        <a href={`tel:${SHELTER_INFO.emergencyPhone}`} className="text-gray-600 hover:text-red-600">
                          {SHELTER_INFO.emergencyPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FaEnvelope className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <div className="space-y-2">
                      <a href={`mailto:${SHELTER_INFO.email}`} className="text-gray-600 hover:text-amber-600 block">
                        {SHELTER_INFO.email}
                      </a>
                      <a href="mailto:adopt@pawhavenvashi.org" className="text-gray-600 hover:text-amber-600 block">
                        adopt@pawhavenvashi.org
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FaClock className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">{SHELTER_INFO.workingHours}</p>
                    <p className="text-gray-500 text-sm">Tuesday to Sunday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Emergency Rescue</h2>
              <p className="mb-6">
                Found an injured or distressed animal? Contact us immediately.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${SHELTER_INFO.emergencyPhone}`}
                  className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt />
                    <span>Emergency Phone</span>
                  </div>
                  <span className="font-bold">{SHELTER_INFO.emergencyPhone}</span>
                </a>
                
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </div>
                  <span className="font-bold">Message Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="9876543210"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="adoption">Adoption Inquiry</option>
                        <option value="volunteer">Volunteer Inquiry</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="emergency">Emergency Rescue</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
                <div className="aspect-video bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <p className="text-gray-700 font-medium">{SHELTER_INFO.address}</p>
                    <p className="text-gray-600 mt-2">Click for directions on Google Maps</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(SHELTER_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}