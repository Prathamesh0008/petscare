// petscare/app/adopt/page.tsx
'use client';

import AdoptionForm from '@/components/AdoptionForm';
import { 
  FaPaw, FaHeart, FaHome, FaCheckCircle, FaUsers, 
  FaHandsHelping, FaStethoscope, FaShieldAlt, 
  FaQuestionCircle, FaPhone, FaEnvelope, FaClock, 
  FaCalendarAlt, FaStar, FaArrowRight, FaHandHoldingHeart, 
  FaDog, FaCat, FaMapMarkerAlt, FaQuoteLeft, FaCheck
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from "react";

const adoptionSteps = [
  {
    number: '01',
    icon: <FaUsers />,
    title: 'Browse & Connect',
    description: 'Explore our animals online or visit in person. Meet potential matches and find your perfect companion.',
    color: '#1b93d1'
  },
  {
    number: '02',
    icon: <FaHandsHelping />,
    title: 'Application & Review',
    description: 'Submit your adoption form. Our team carefully reviews applications within 24-48 hours.',
    color: '#223d7c'
  },
  {
    number: '03',
    icon: <FaHome />,
    title: 'Home Visit & Meet',
    description: 'Virtual or in-person home assessment to ensure a safe, loving environment for your new friend.',
    color: '#1b93d1'
  },
  {
    number: '04',
    icon: <FaHeart />,
    title: 'Finalize & Bring Home',
    description: 'Complete the paperwork, pay the adoption fee, and welcome your new family member home!',
    color: '#223d7c'
  },
];

const benefits = [
  {
    icon: <FaPaw className="text-xl" />,
    title: 'Save a Life',
    description: 'Every adoption creates space to rescue another animal in need. You become part of the solution.',
    stats: '2,500+ lives saved'
  },
  {
    icon: <FaStethoscope className="text-xl" />,
    title: 'Health Ready',
    description: 'All pets are fully vaccinated, dewormed, microchipped, and health-checked by our vets.',
    stats: '100% vaccinated'
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: 'Ethical Choice',
    description: 'Support animal welfare over unethical breeding practices. Every adoption fights against puppy mills.',
    stats: 'Against puppy mills'
  },
  {
    icon: <FaHandHoldingHeart className="text-xl" />,
    title: 'Lifetime Support',
    description: 'Post-adoption guidance, training tips, and veterinary support whenever you need it.',
    stats: 'Free consultations'
  },
];

const faqs = [
  {
    question: 'What is included in the adoption fee?',
    answer: 'Our adoption fee (₹1,500 - ₹4,000) includes complete vaccination, deworming, microchipping, spay/neuter surgery, and one month of post-adoption support.',
  },
  {
    question: 'How long does the adoption process take?',
    answer: 'The process typically takes 3-7 days. We expedite applications for urgent cases and work around your schedule for home visits.',
  },
  {
    question: 'Can I adopt if I live in a rental apartment?',
    answer: 'Absolutely! We have many apartment-friendly pets. We just require landlord approval documentation to ensure your new friend has a stable home.',
  },
  {
    question: 'What if the adoption doesn\'t work out?',
    answer: 'We offer a 30-day trial period with full support. If adjustments don\'t help, we take the animal back - no questions asked. Your adoption fee is fully refundable within this period.',
  },
  {
    question: 'Do you provide post-adoption support?',
    answer: 'Yes! We provide free vet consultation for 1 month, training tips, behavior support, and access to our private community of adopters.',
  },
  {
    question: 'Can I adopt more than one animal?',
    answer: 'Yes, we encourage bonded pairs and offer a 15% discount for adopting two animals together. We assess compatibility for multi-pet homes.',
  },
];

const successStories = [
  {
    name: 'Raj & Family',
    pet: 'Bruno',
    story: '"Bruno filled our home with joy. The adoption process was smooth and the post-adoption support has been incredible!"',
    year: '2023'
  },
  {
    name: 'Priya Sharma',
    pet: 'Luna',
    story: '"Best decision ever! Luna is perfect for my apartment lifestyle. Thank you for matching us so well!"',
    year: '2024'
  }
];

export default function AdoptPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero Section - Matching Hero component style */}
      <section className="relative bg-[#B6D3DE] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Subtle badge - matte finish */}
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-6">
              <span className="text-sm text-[#223d7c] font-medium">🐾 Find Your Forever Friend</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#223d7c] leading-tight">
              Ready to <span className="text-[#1b93d1]">Adopt?</span>
            </h1>

            <p className="mt-4 text-lg text-[#223d7c]/70 max-w-3xl mx-auto">
              Every adoption creates space to rescue another. Find your perfect match 
              among our 200+ animals waiting for their forever homes in Navi Mumbai.
            </p>

            {/* Stats - Matte finish */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">250+</div>
                <div className="text-sm text-[#223d7c]/60">Adoptions This Year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">98%</div>
                <div className="text-sm text-[#223d7c]/60">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#223d7c]">30-day</div>
                <div className="text-sm text-[#223d7c]/60">Trial Period</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10"
            >
              <Link 
                href="#adoption-form" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#223d7c] hover:bg-[#1a2f60] text-white rounded-lg font-medium transition-all group"
              >
                Start Your Application
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-white/80" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Adoption Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-4">
            <span className="text-sm text-[#223d7c] font-medium">🐾 Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#223d7c] mb-4">
            Your 4-Step <span className="text-[#1b93d1]">Adoption</span> Journey
          </h2>
          
          <p className="text-lg text-[#223d7c]/70 max-w-2xl mx-auto">
            Our streamlined process ensures you find the perfect match with full support every step of the way
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adoptionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border border-[#223d7c]/10 p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1b93d1] mb-1">Step {step.number}</div>
                  <h3 className="text-lg font-semibold text-[#223d7c] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#223d7c]/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Adopt Section */}
      <div className="bg-white py-20 border-t border-[#223d7c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#223d7c]/5 rounded-lg mb-4">
              <span className="text-sm text-[#223d7c] font-medium">❤️ Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#223d7c] mb-4">
              Benefits of <span className="text-[#1b93d1]">Adoption</span>
            </h2>
            
            <p className="text-lg text-[#223d7c]/70 max-w-2xl mx-auto">
              Every adoption makes a difference in more ways than one
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f5f7fa] rounded-lg border border-[#223d7c]/10 p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#223d7c]/5 rounded-lg flex items-center justify-center text-[#1b93d1] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#223d7c] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#223d7c]/60 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1b93d1]">
                      <FaCheck className="text-xs" />
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Success Stories & FAQ */}
          <div className="lg:col-span-2 space-y-8">
            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#223d7c] rounded-lg p-8 text-white relative overflow-hidden"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 text-7xl">🐾</div>
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaStar className="text-[#1b93d1] text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Happy Tails</h2>
                    <p className="text-white/60 text-sm">Success stories from our adopters</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#1b93d1] rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaQuoteLeft className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="font-medium">{story.name}</div>
                          <div className="text-white/50 text-xs">Adopted {story.pet} • {story.year}</div>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm italic leading-relaxed">
                        {story.story}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ Section with Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-[#223d7c]/10 p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#223d7c]/5 rounded-lg flex items-center justify-center">
                  <FaQuestionCircle className="text-xl text-[#1b93d1]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#223d7c]">Common Questions</h2>
                  <p className="text-sm text-[#223d7c]/60">Everything you need to know about adoption</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-[#223d7c]/10 rounded-lg overflow-hidden"
                    >
                      <div
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="p-5 cursor-pointer hover:bg-[#223d7c]/5 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-medium text-[#223d7c] text-sm flex-1">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-6 bg-[#223d7c]/5 rounded flex items-center justify-center flex-shrink-0"
                          >
                            <FaArrowRight className="text-[#1b93d1] text-xs" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-[#223d7c]/10">
                          <p className="text-sm text-[#223d7c]/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Help Card */}
              <div className="mt-6 p-4 bg-[#223d7c]/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHandHoldingHeart className="text-[#1b93d1]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#223d7c]">Still have questions?</p>
                    <p className="text-xs text-[#223d7c]/60">Our adoption counselors are here to help</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-[#1b93d1] hover:bg-[#1680b5] text-white text-sm rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form & Info */}
          <div className="space-y-8">
            {/* Adoption Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              id="adoption-form"
            >
              <div className="bg-white rounded-lg border border-[#223d7c]/10 overflow-hidden">
                <div className="bg-[#223d7c] p-8 text-white text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg mb-4">
                    <FaHeart className="text-2xl text-[#1b93d1]" />
                  </div>
                  <h2 className="text-xl font-bold">Ready to Adopt?</h2>
                  <p className="text-white/60 text-sm mt-1">Your new best friend is waiting</p>
                </div>
                <div className="p-6">
                  <AdoptionForm />
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg border border-[#223d7c]/10 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#223d7c]/5 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-[#1b93d1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#223d7c] text-sm">Need Assistance?</h3>
                    <p className="text-xs text-[#223d7c]/60">Our counselors are here to help</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 p-3 bg-[#223d7c]/5 rounded-lg hover:bg-[#223d7c]/10 transition-colors">
                    <FaPhone className="text-[#1b93d1] text-sm" />
                    <div>
                      <div className="text-xs text-[#223d7c]/60">Call us at</div>
                      <div className="font-medium text-[#223d7c] text-sm">+91 98765 43210</div>
                    </div>
                  </a>
                  
                  <a href="mailto:adopt@petscare.org" className="flex items-center gap-3 p-3 bg-[#223d7c]/5 rounded-lg hover:bg-[#223d7c]/10 transition-colors">
                    <FaEnvelope className="text-[#1b93d1] text-sm" />
                    <div>
                      <div className="text-xs text-[#223d7c]/60">Email us</div>
                      <div className="font-medium text-[#223d7c] text-sm">adopt@petscare.org</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 bg-[#223d7c]/5 rounded-lg">
                    <FaClock className="text-[#1b93d1] text-sm" />
                    <div>
                      <div className="text-xs text-[#223d7c]/60">Shelter Hours</div>
                      <div className="font-medium text-[#223d7c] text-sm">9 AM - 6 PM, Tue-Sun</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visit Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg border border-[#223d7c]/10 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#223d7c]/5 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#1b93d1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#223d7c] text-sm">Visit Our Shelter</h3>
                    <p className="text-xs text-[#223d7c]/60">Meet our animals in person</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="font-medium text-[#223d7c] text-sm">PawHaven Animal Shelter</p>
                  <p className="text-xs text-[#223d7c]/60">Sector 17, Vashi, Navi Mumbai - 400703</p>
                </div>
                
                <button className="w-full bg-[#223d7c] hover:bg-[#1a2f60] text-white font-medium py-3 rounded-lg transition-colors text-sm">
                  Get Directions
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg border border-[#223d7c]/10 p-6"
              >
                <h3 className="font-semibold text-[#223d7c] text-sm mb-4">Adoption Impact</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-[#223d7c]/5 rounded-lg">
                    <div className="text-lg font-bold text-[#1b93d1]">95%</div>
                    <div className="text-xs text-[#223d7c]/60">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-[#223d7c]/5 rounded-lg">
                    <div className="text-lg font-bold text-[#223d7c]">30</div>
                    <div className="text-xs text-[#223d7c]/60">Day Trial</div>
                  </div>
                  <div className="text-center p-3 bg-[#223d7c]/5 rounded-lg">
                    <div className="text-lg font-bold text-[#1b93d1]">24/7</div>
                    <div className="text-xs text-[#223d7c]/60">Support</div>
                  </div>
                  <div className="text-center p-3 bg-[#223d7c]/5 rounded-lg">
                    <div className="text-lg font-bold text-[#223d7c]">100%</div>
                    <div className="text-xs text-[#223d7c]/60">Vaccinated</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-20"
      >
        <div className="bg-[#223d7c] rounded-lg p-12 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 text-8xl">🐾</div>
            <div className="absolute bottom-0 left-0 text-8xl">🐾</div>
          </div>
          
          <div className="relative">
            <div className="text-6xl text-white/10 mb-4">"</div>
            <p className="text-xl text-white mb-6 leading-relaxed italic max-w-3xl mx-auto">
              Adoption isn't just about saving an animal—it's about gaining a family member 
              who will love you unconditionally and fill your home with joy.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#1b93d1] rounded-lg flex items-center justify-center">
                <FaPaw className="text-white text-lg" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Dr. Priya Sharma</div>
                <div className="text-white/60 text-sm">Founder, PawHaven Vashi</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}