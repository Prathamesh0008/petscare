// components/Footer.tsx
'use client';

import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPaw,
  FaHeart,
  FaArrowRight,
  FaPaperPlane
} from 'react-icons/fa';
import Link from 'next/link';
import { SHELTER_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
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
    <footer className="relative bg-gradient-to-b from-[#2c4a3e] to-[#1e352b] text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#b87d5e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Paw Print Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm20-30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5zm0 30c-2.5 0-5-2-5-5s2.5-5 5-5 5 2 5 5-2.5 5-5 5z" fill="%23b87d5e" fill-opacity="0.3"/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
      }} />

      <div className="relative container mx-auto px-4">
        {/* Newsletter Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#b87d5e]/20 to-[#2c4a3e]/20 rounded-3xl p-1 backdrop-blur-sm">
            <div className="bg-[#2c4a3e]/90 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#b87d5e] rounded-full blur-xl opacity-50" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center shadow-xl">
                      <FaPaperPlane className="text-2xl text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Stay <span className="text-[#b87d5e]">Updated</span>
                    </h3>
                    <p className="text-white/70 max-w-md">
                      Subscribe to our newsletter for updates on new arrivals, events, and success stories.
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full sm:w-80 pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b87d5e] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 cursor-pointer py-4 bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] text-white font-semibold rounded-xl hover:from-[#9e6a4f] hover:to-[#8a5a42] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                    >
                      <span>Subscribe</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-green-300 text-sm flex items-center gap-2"
                    >
                      <FaHeart />
                      Thanks for subscribing! Check your inbox for updates.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* About Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#b87d5e]/20 rounded-xl flex items-center justify-center">
                <FaPaw className="text-2xl text-[#b87d5e]" />
              </div>
              <h3 className="text-2xl font-bold">
                Paw<span className="text-[#b87d5e]">Heaven</span>
              </h3>
            </div>
            
            <p className="text-white/60 mb-6 leading-relaxed">
              A safe haven for stray dogs and cats in Navi Mumbai since 2019. 
              We rescue, rehabilitate, and find forever homes for animals in need.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook />, href: '#', label: 'Facebook' },
                { icon: <FaInstagram />, href: '#', label: 'Instagram' },
                { icon: <FaTwitter />, href: '#', label: 'Twitter' },
                { icon: <FaYoutube />, href: '#', label: 'Youtube' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/60 hover:bg-[#b87d5e] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#b87d5e] rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Animals', href: '/animals' },
                { label: 'Adopt', href: '/adopt' },
                { label: 'Volunteer', href: '/volunteer' },
                { label: 'Donate', href: '/donate' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-[#b87d5e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#b87d5e]/60 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#b87d5e] rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Success Stories', href: '/success-stories' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQs', href: '/faqs' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-[#b87d5e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#b87d5e]/60 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#b87d5e] rounded-full" />
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#b87d5e] transition-colors duration-300">
                  <FaMapMarkerAlt className="text-[#b87d5e] text-sm group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {SHELTER_INFO.address}
                </span>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#b87d5e] transition-colors duration-300">
                  <FaPhone className="text-[#b87d5e] text-sm group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href={`tel:${SHELTER_INFO.phone}`} 
                  className="text-white/60 hover:text-[#b87d5e] transition-colors duration-300"
                >
                  {SHELTER_INFO.phone}
                </a>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#b87d5e] transition-colors duration-300">
                  <FaEnvelope className="text-[#b87d5e] text-sm group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href={`mailto:${SHELTER_INFO.email}`} 
                  className="text-white/60 hover:text-[#b87d5e] transition-colors duration-300"
                >
                  {SHELTER_INFO.email}
                </a>
              </li>
            </ul>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-[#b87d5e] mb-1">
                <FaHeart className="text-sm" />
                <span className="text-sm font-semibold">Emergency?</span>
              </div>
              <p className="text-white/60 text-sm">
                24/7 Helpline: <a href="tel:+919876543210" className="text-[#b87d5e] hover:underline">+91 98765 43210</a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} PawHaven Vashi. Crafted with <FaHeart className="inline text-[#b87d5e] text-xs mx-1" /> for animals.
            </p>
            
            <div className="flex gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Sitemap', href: '/sitemap' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-[#b87d5e] text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Made with love note */}
          <div className="mt-4 text-center">
            <p className="text-white/20 text-xs">
              Registered NGO • All donations are tax-exempt under Section 80G
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}