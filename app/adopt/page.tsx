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
    color: 'from-[#b87d5e] to-[#9e6a4f]',
    bgColor: 'bg-gradient-to-br from-[#b87d5e]/5 to-transparent',
    iconColor: 'text-[#b87d5e]'
  },
  {
    number: '02',
    icon: <FaHandsHelping />,
    title: 'Application & Review',
    description: 'Submit your adoption form. Our team carefully reviews applications within 24-48 hours.',
    color: 'from-[#2c4a3e] to-[#1e352b]',
    bgColor: 'bg-gradient-to-br from-[#2c4a3e]/5 to-transparent',
    iconColor: 'text-[#2c4a3e]'
  },
  {
    number: '03',
    icon: <FaHome />,
    title: 'Home Visit & Meet',
    description: 'Virtual or in-person home assessment to ensure a safe, loving environment for your new friend.',
    color: 'from-[#b87d5e] to-[#9e6a4f]',
    bgColor: 'bg-gradient-to-br from-[#b87d5e]/5 to-transparent',
    iconColor: 'text-[#b87d5e]'
  },
  {
    number: '04',
    icon: <FaHeart />,
    title: 'Finalize & Bring Home',
    description: 'Complete the paperwork, pay the adoption fee, and welcome your new family member home!',
    color: 'from-[#2c4a3e] to-[#1e352b]',
    bgColor: 'bg-gradient-to-br from-[#2c4a3e]/5 to-transparent',
    iconColor: 'text-[#2c4a3e]'
  },
];

const benefits = [
  {
    icon: <FaPaw className="text-xl" />,
    title: 'Save a Life',
    description: 'Every adoption creates space to rescue another animal in need. You become part of the solution.',
    stats: '2,500+ lives saved',
    bgColor: 'bg-[#b87d5e]/10',
    iconColor: 'text-[#b87d5e]'
  },
  {
    icon: <FaStethoscope className="text-xl" />,
    title: 'Health Ready',
    description: 'All pets are fully vaccinated, dewormed, microchipped, and health-checked by our vets.',
    stats: '100% vaccinated',
    bgColor: 'bg-[#2c4a3e]/10',
    iconColor: 'text-[#2c4a3e]'
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: 'Ethical Choice',
    description: 'Support animal welfare over unethical breeding practices. Every adoption fights against puppy mills.',
    stats: 'Against puppy mills',
    bgColor: 'bg-[#b87d5e]/10',
    iconColor: 'text-[#b87d5e]'
  },
  {
    icon: <FaHandHoldingHeart className="text-xl" />,
    title: 'Lifetime Support',
    description: 'Post-adoption guidance, training tips, and veterinary support whenever you need it.',
    stats: 'Free consultations',
    bgColor: 'bg-[#2c4a3e]/10',
    iconColor: 'text-[#2c4a3e]'
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
    year: '2023',
    bgColor: 'from-[#b87d5e]/5 to-[#2c4a3e]/5'
  },
  {
    name: 'Priya Sharma',
    pet: 'Luna',
    story: '"Best decision ever! Luna is perfect for my apartment lifestyle. Thank you for matching us so well!"',
    year: '2024',
    bgColor: 'from-[#2c4a3e]/5 to-[#b87d5e]/5'
  }
];

export default function AdoptPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] py-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl">🐾</div>
          <div className="absolute bottom-20 right-10 text-8xl">🐾</div>
        </div>
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <FaPaw className="text-[#b87d5e]" />
              <span className="text-white font-medium">Find Your Forever Friend</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-[#b87d5e]">Adopt?</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Every adoption creates space to rescue another. Find your perfect match 
              among our 200+ animals waiting for their forever homes in Navi Mumbai.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-[#b87d5e]">250+</div>
                <div className="text-white/80">Adoptions This Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-[#b87d5e]">98%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-[#b87d5e]">30-day</div>
                <div className="text-white/80">Trial Period</div>
              </div>
            </div>
            
            <Link 
              href="#adoption-form" 
              className="inline-flex items-center gap-3 bg-[#b87d5e] hover:bg-[#9e6a4f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Start Your Application
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Adoption Process */}
   <div className="container mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-full flex items-center justify-center">
              <FaPaw className="text-2xl text-[#b87d5e]" />
            </div>
            <span className="text-[#b87d5e] font-semibold uppercase tracking-wider text-sm">
              Simple Process
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
            Your 4-Step <span className="text-[#b87d5e]">Adoption</span> Journey
          </h2>
          
          <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
            Our streamlined process ensures you find the perfect match with full support every step of the way
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {adoptionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                      <div className="text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#b87d5e] mb-2">Step {step.number}</div>
                      <h3 className="text-lg font-bold text-[#2c4a3e] mb-3">{step.title}</h3>
                      <p className="text-sm text-[#2c4a3e]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Adopt Section */}
      <div className="bg-white/90 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#2c4a3e]/10 rounded-full flex items-center justify-center">
                <FaHeart className="text-2xl text-[#2c4a3e]" />
              </div>
              <span className="text-[#2c4a3e] font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
              Benefits of <span className="text-[#b87d5e]">Adoption</span>
            </h2>
            
            <p className="text-lg text-[#2c4a3e]/70 max-w-2xl mx-auto">
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
                className="group"
              >
                <div className="relative p-8 bg-white rounded-2xl border border-[#2c4a3e]/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className={`p-4 rounded-xl ${benefit.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`text-2xl ${benefit.iconColor}`}>
                          {benefit.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c4a3e] mb-3">{benefit.title}</h3>
                        <p className="text-[#2c4a3e]/70 leading-relaxed mb-4">{benefit.description}</p>
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#b87d5e]">
                          <FaCheck className="text-xs" />
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Success Stories & FAQ */}
          <div className="lg:col-span-2 space-y-8">
            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-2xl p-8 text-white relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-32 -translate-x-32" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#b87d5e]/20 rounded-xl flex items-center justify-center">
                    <FaStar className="text-[#b87d5e] text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Happy Tails</h2>
                    <p className="text-white/60">Success stories from our adopters</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg flex items-center justify-center">
                          <FaQuoteLeft className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="font-semibold">{story.name}</div>
                          <div className="text-white/60 text-xs">Adopted {story.pet} • {story.year}</div>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm italic leading-relaxed">
                        "{story.story}"
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
  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-8"
>
  <div className="flex items-center gap-4 mb-8">
    <div className="w-12 h-12 bg-[#b87d5e]/10 rounded-xl flex items-center justify-center">
      <FaQuestionCircle className="text-2xl text-[#b87d5e]" />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-[#2c4a3e]">Common Questions</h2>
      <p className="text-[#2c4a3e]/60">Everything you need to know about adoption</p>
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
          className="group"
        >
          <div
           onClick={() =>
  setOpenIndex(isOpen ? null : index)
}
            className="relative border border-[#2c4a3e]/10 rounded-xl hover:border-[#b87d5e]/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Question Header */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="font-semibold text-[#2c4a3e] text-lg group-hover:text-[#b87d5e] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center group-hover:bg-[#b87d5e]/20 transition-colors"
                >
                  <FaArrowRight className="text-[#b87d5e] text-sm" />
                </motion.div>
              </div>
            </div>
            
            {/* Answer with Animation */}
            <motion.div
              initial={false}
              animate={{ 
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
                marginBottom: isOpen ? 16 : 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="border-t border-[#2c4a3e]/10 pt-4">
                  <p className="text-[#2c4a3e]/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                  
                  {/* Optional: Add helpful tags based on question content */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {faq.question.includes('fee') && (
                      <span className="px-3 py-1 bg-[#b87d5e]/10 text-[#b87d5e] text-xs rounded-full">
                        💰 Fee Details
                      </span>
                    )}
                    {faq.question.includes('time') && (
                      <span className="px-3 py-1 bg-[#2c4a3e]/10 text-[#2c4a3e] text-xs rounded-full">
                        ⏱️ Timeline
                      </span>
                    )}
                    {faq.question.includes('apartment') && (
                      <span className="px-3 py-1 bg-[#b87d5e]/10 text-[#b87d5e] text-xs rounded-full">
                        🏢 Apartment Friendly
                      </span>
                    )}
                    {faq.question.includes('support') && (
                      <span className="px-3 py-1 bg-[#2c4a3e]/10 text-[#2c4a3e] text-xs rounded-full">
                        🤝 Post-Adoption
                      </span>
                    )}
                    {faq.question.includes('work') && (
                      <span className="px-3 py-1 bg-[#b87d5e]/10 text-[#b87d5e] text-xs rounded-full">
                        🔄 Trial Period
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background effect when open */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-[#b87d5e]/5 to-[#2c4a3e]/5 pointer-events-none"
              />
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
  
  {/* Additional Help Card */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="mt-6 p-4 bg-gradient-to-r from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-xl"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
        <FaHandHoldingHeart className="text-[#b87d5e]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#2c4a3e]">Still have questions?</p>
        <p className="text-xs text-[#2c4a3e]/60">Our adoption counselors are here to help</p>
      </div>
      <Link
  href="/contact"
  className="px-4 py-2 bg-[#b87d5e] hover:bg-[#9e6a4f] text-white text-sm rounded-lg transition-colors inline-block text-center"
>
  Contact Us
</Link>
    </div>
  </motion.div>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 overflow-hidden">
                <div className="bg-gradient-to-r from-[#2c4a3e] to-[#1e352b] p-8 text-white text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b87d5e]/20 rounded-full mb-4">
                    <FaHeart className="text-2xl text-[#b87d5e]" />
                  </div>
                  <h2 className="text-2xl font-bold">Ready to Adopt?</h2>
                  <p className="text-white/70 mt-2">Your new best friend is waiting</p>
                </div>
                <div className="p-6">
                  <AdoptionForm />
                </div>
              </div>
            </motion.div>

            {/* Contact & Info Cards */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-[#b87d5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c4a3e]">Need Assistance?</h3>
                    <p className="text-xs text-[#2c4a3e]/60">Our adoption counselors are here to help</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 p-3 bg-[#2c4a3e]/5 rounded-lg hover:bg-[#b87d5e]/10 transition-colors">
                    <FaPhone className="text-[#b87d5e] text-sm" />
                    <div>
                      <div className="text-xs text-[#2c4a3e]/60">Call us at</div>
                      <div className="font-medium text-[#2c4a3e] text-sm">+91 98765 43210</div>
                    </div>
                  </a>
                  
                  <a href="mailto:adopt@petscare.org" className="flex items-center gap-3 p-3 bg-[#2c4a3e]/5 rounded-lg hover:bg-[#b87d5e]/10 transition-colors">
                    <FaEnvelope className="text-[#b87d5e] text-sm" />
                    <div>
                      <div className="text-xs text-[#2c4a3e]/60">Email us</div>
                      <div className="font-medium text-[#2c4a3e] text-sm">adopt@petscare.org</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 bg-[#2c4a3e]/5 rounded-lg">
                    <FaClock className="text-[#b87d5e] text-sm" />
                    <div>
                      <div className="text-xs text-[#2c4a3e]/60">Shelter Hours</div>
                      <div className="font-medium text-[#2c4a3e] text-sm">9 AM - 6 PM, Tue-Sun</div>
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
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#b87d5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c4a3e]">Visit Our Shelter</h3>
                    <p className="text-xs text-[#2c4a3e]/60">Meet our animals in person</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <p className="font-medium text-[#2c4a3e] text-sm">PawHaven Animal Shelter</p>
                  <p className="text-xs text-[#2c4a3e]/70">Sector 17, Vashi</p>
                  <p className="text-xs text-[#2c4a3e]/70">Navi Mumbai - 400703</p>
                </div>
                
                <button className="w-full bg-[#b87d5e] hover:bg-[#9e6a4f] text-white font-medium py-3 rounded-lg transition-colors text-sm">
                  Get Directions
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#2c4a3e]/10 p-6"
              >
                <h3 className="font-semibold text-[#2c4a3e] mb-4">Adoption Impact</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-[#b87d5e]/10 rounded-lg">
                    <div className="text-xl font-bold text-[#b87d5e]">95%</div>
                    <div className="text-xs text-[#2c4a3e]/60">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-[#2c4a3e]/10 rounded-lg">
                    <div className="text-xl font-bold text-[#2c4a3e]">30</div>
                    <div className="text-xs text-[#2c4a3e]/60">Day Trial</div>
                  </div>
                  <div className="text-center p-3 bg-[#b87d5e]/10 rounded-lg">
                    <div className="text-xl font-bold text-[#b87d5e]">24/7</div>
                    <div className="text-xs text-[#2c4a3e]/60">Support</div>
                  </div>
                  <div className="text-center p-3 bg-[#2c4a3e]/10 rounded-lg">
                    <div className="text-xl font-bold text-[#2c4a3e]">100%</div>
                    <div className="text-xs text-[#2c4a3e]/60">Vaccinated</div>
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
        className="container mx-auto px-4 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-32 -translate-x-32" />
            
            <div className="relative">
              <div className="text-6xl text-[#b87d5e]/20 mb-6">"</div>
              <p className="text-2xl text-white mb-8 leading-relaxed italic">
                Adoption isn't just about saving an animal—it's about gaining a family member 
                who will love you unconditionally and fill your home with joy.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-full flex items-center justify-center">
                  <FaPaw className="text-white text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Dr. Priya Sharma</div>
                  <div className="text-white/60 text-sm">Founder, PawHaven Vashi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}