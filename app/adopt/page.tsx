// petscare/app/adopt/page.tsx
'use client';

import AdoptionForm from '@/components/AdoptionForm';
import { FaPaw, FaHeart, FaHome, FaCheckCircle, FaUsers, FaHandsHelping, FaStethoscope, FaShieldAlt, FaQuestionCircle, FaPhone, FaEnvelope, FaClock, FaCalendarAlt, FaStar, FaArrowRight, FaHandHoldingHeart, FaDog, FaCat } from 'react-icons/fa';

const adoptionSteps = [
  {
    number: '01',
    icon: <FaUsers />,
    title: 'Browse & Connect',
    description: 'Explore our animals online or visit in person. Meet potential matches.',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    number: '02',
    icon: <FaHandsHelping />,
    title: 'Application & Review',
    description: 'Submit your adoption form. Our team reviews within 24-48 hours.',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    number: '03',
    icon: <FaHome />,
    title: 'Home Visit & Meet',
    description: 'Virtual or in-person home assessment and meet with your chosen pet.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    number: '04',
    icon: <FaHeart />,
    title: 'Finalize & Bring Home',
    description: 'Complete paperwork and welcome your new family member home!',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600'
  },
];

const benefits = [
  {
    icon: <FaPaw className="text-xl" />,
    title: 'Save a Life',
    description: 'Every adoption creates space to rescue another animal in need.',
    stats: '2,500+ lives saved',
    color: 'bg-amber-500'
  },
  {
    icon: <FaStethoscope className="text-xl" />,
    title: 'Health Ready',
    description: 'All pets are vaccinated, dewormed, and health-checked.',
    stats: '100% vaccinated',
    color: 'bg-emerald-500'
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: 'Ethical Choice',
    description: 'Support animal welfare over unethical breeding practices.',
    stats: 'Against puppy mills',
    color: 'bg-blue-500'
  },
  {
    icon: <FaHandHoldingHeart className="text-xl" />,
    title: 'Lifetime Support',
    description: 'Post-adoption guidance and support whenever you need.',
    stats: 'Free consultations',
    color: 'bg-purple-500'
  },
];

const faqs = [
  {
    question: 'What is included in the adoption fee?',
    answer: 'Our adoption fee (₹1,000 - ₹2,500) includes complete vaccination, deworming, microchipping, spay/neuter surgery, basic training, and one month of free pet insurance.',
    icon: '💰'
  },
  {
    question: 'How long does the adoption process take?',
    answer: 'The process typically takes 3-7 days. We expedite applications for urgent cases and work around your schedule for home visits.',
    icon: '⏱️'
  },
  {
    question: 'Can I adopt if I live in a rental apartment?',
    answer: 'Absolutely! We have many apartment-friendly pets. We just require landlord approval documentation to ensure your new friend has a stable home.',
    icon: '🏢'
  },
  {
    question: 'What if the adoption doesn\'t work out?',
    answer: 'We offer a 30-day trial period with full support. If adjustments don\'t help, we take the animal back - no questions asked. Adoption fee is refundable.',
    icon: '🤝'
  },
  {
    question: 'Do you provide post-adoption support?',
    answer: 'Yes! We provide free vet consultation for 1 month, training tips, behavior support, and a 24/7 helpline for any concerns.',
    icon: '📞'
  },
  {
    question: 'Can I adopt more than one animal?',
    answer: 'Yes, we encourage bonded pairs and often offer discounts for adopting two animals together. We assess compatibility for multi-pet homes.',
    icon: '🐾'
  },
];

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/10"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-2/3 text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                  <FaPaw className="text-xl" />
                  <span className="font-semibold">Find Your Forever Friend</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Ready to <span className="text-amber-100">Adopt?</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl">
                  Every adoption creates space to rescue another. Find your perfect match 
                  among our 200+ animals waiting for their forever homes.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                    <div className="text-3xl font-bold">250+</div>
                    <div className="text-white/80">Adoptions This Year</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-white/80">Success Rate</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                    <div className="text-3xl font-bold">30-day</div>
                    <div className="text-white/80">Trial Period</div>
                  </div>
                </div>
                
                <a 
                  href="#adoption-form" 
                  className="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Application
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              
              {/* Hero Image/Illustration */}
              <div className="lg:w-1/3 relative">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-8xl">
                      🐶
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-6xl shadow-xl">
                    🐱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,197.3C672,192,768,224,864,218.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 pb-20">
        {/* Adoption Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 4-Step <span className="text-amber-600">Adoption</span> Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures you find the perfect match with full support every step of the way
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-rose-400 -z-10"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {adoptionSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full ${step.bgColor}`}>
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="mt-8 mb-6">
                      <div className={`w-20 h-20 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                        <div className={`text-3xl ${step.iconColor}`}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                    </div>
                    
                    <div className="text-sm font-medium text-gray-500">
                      {index === 0 && 'Start here'}
                      {index === 3 && 'Complete process'}
                      {index > 0 && index < 3 && 'Continue'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-2 space-y-8">
            {/* Why Adopt Section */}
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl p-10 border border-amber-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Why Choose <span className="text-amber-600">Adoption?</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-6 text-white`}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-gray-500">
                      {benefit.stats}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl shadow-2xl p-10 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Happy Tails</h2>
                <p className="text-emerald-100 mb-8 max-w-2xl">
                  Hear from families who found their perfect companions through us
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FaStar />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Raj & Family</div>
                        <div className="text-emerald-200 text-sm">Adopted Bruno in 2023</div>
                      </div>
                    </div>
                    <p className="italic">
                      "Bruno filled our home with joy. The adoption process was smooth and the post-adoption support incredible!"
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FaHeart />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Priya Sharma</div>
                        <div className="text-emerald-200 text-sm">Adopted Luna in 2024</div>
                      </div>
                    </div>
                    <p className="italic">
                      "Best decision ever! Luna is perfect for my apartment lifestyle. Thank you for matching us so well!"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 opacity-10">
                <FaDog className="text-[200px] text-white" />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <FaQuestionCircle className="text-purple-600 text-2xl" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Common Questions
                  </h2>
                  <p className="text-gray-600">Everything you need to know about adoption</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="group border border-gray-200 hover:border-amber-300 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-3xl flex-shrink-0">{faq.icon}</div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-amber-700 transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-amber-600 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form & Info */}
          <div className="space-y-8">
            {/* Adoption Form */}
            <div className="sticky top-8" id="adoption-form">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-20">
                    <FaPaw className="text-[100px] rotate-12" />
                  </div>
                  <h2 className="text-2xl font-bold relative z-10">Ready to Adopt?</h2>
                  <p className="text-amber-100 mt-2 relative z-10">Your new best friend is waiting</p>
                </div>
                <div className="p-6">
                  <AdoptionForm />
                </div>
              </div>
            </div>

            {/* Contact & Info Cards */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-8 border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Need Assistance?</h3>
                    <p className="text-gray-600 text-sm">Our adoption counselors are here to help</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <FaPhone className="text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500">Call us at</div>
                      <a href="tel:+919876543210" className="font-bold text-gray-900 hover:text-blue-600">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <FaEnvelope className="text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500">Email us</div>
                      <a href="mailto:adopt@petscare.org" className="font-bold text-gray-900 hover:text-blue-600">
                        adopt@petscare.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <FaClock className="text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500">Shelter Hours</div>
                      <div className="font-bold text-gray-900">9 AM - 6 PM, Tue-Sun</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Card */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl shadow-lg p-8 border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl">
                    <FaHome />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Visit Our Shelter</h3>
                    <p className="text-gray-600 text-sm">Meet our animals in person</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="font-medium">PetsCare Animal Shelter</p>
                  <p className="text-sm">Sector 17, Vashi</p>
                  <p className="text-sm">Navi Mumbai - 400703</p>
                  
                  <div className="pt-4">
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Adoption Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">95%</div>
                    <div className="text-sm text-gray-600">Adoption Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">30</div>
                    <div className="text-sm text-gray-600">Day Trial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">₹0</div>
                    <div className="text-sm text-gray-600">Return Fee</div>
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