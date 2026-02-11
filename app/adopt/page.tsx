// petscare/app/adopt/page.tsx
'use client';

import AdoptionForm from '@/components/AdoptionForm';
import { 
  FaPaw, FaHeart, FaHome, FaCheckCircle, FaUsers, 
  FaHandsHelping, FaStethoscope, FaShieldAlt, 
  FaQuestionCircle, FaPhone, FaEnvelope, FaClock, 
  FaCalendarAlt, FaStar, FaArrowRight, FaHandHoldingHeart, 
  FaDog, FaCat, FaMapMarkerAlt, FaQuoteLeft 
} from 'react-icons/fa';

const adoptionSteps = [
  {
    number: '01',
    icon: <FaUsers />,
    title: 'Browse & Connect',
    description: 'Explore our animals online or visit in person. Meet potential matches.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-white border-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    number: '02',
    icon: <FaHandsHelping />,
    title: 'Application & Review',
    description: 'Submit your adoption form. Our team reviews within 24-48 hours.',
    color: 'from-orange-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-orange-50 to-white border-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    number: '03',
    icon: <FaHome />,
    title: 'Home Visit & Meet',
    description: 'Virtual or in-person home assessment and meet with your chosen pet.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-white border-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    number: '04',
    icon: <FaHeart />,
    title: 'Finalize & Bring Home',
    description: 'Complete paperwork and welcome your new family member home!',
    color: 'from-orange-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-orange-50 to-white border-orange-100',
    iconColor: 'text-orange-600'
  },
];

const benefits = [
  {
    icon: <FaPaw className="text-xl" />,
    title: 'Save a Life',
    description: 'Every adoption creates space to rescue another animal in need.',
    stats: '2,500+ lives saved',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: <FaStethoscope className="text-xl" />,
    title: 'Health Ready',
    description: 'All pets are vaccinated, dewormed, and health-checked.',
    stats: '100% vaccinated',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: 'Ethical Choice',
    description: 'Support animal welfare over unethical breeding practices.',
    stats: 'Against puppy mills',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: <FaHandHoldingHeart className="text-xl" />,
    title: 'Lifetime Support',
    description: 'Post-adoption guidance and support whenever you need.',
    stats: 'Free consultations',
    color: 'from-orange-500 to-orange-600'
  },
];

const faqs = [
  {
    question: 'What is included in the adoption fee?',
    answer: 'Our adoption fee (₹1,000 - ₹2,500) includes complete vaccination, deworming, microchipping, spay/neuter surgery, basic training, and one month of free pet insurance.',
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
    answer: 'We offer a 30-day trial period with full support. If adjustments don\'t help, we take the animal back - no questions asked. Adoption fee is refundable.',
  },
  {
    question: 'Do you provide post-adoption support?',
    answer: 'Yes! We provide free vet consultation for 1 month, training tips, behavior support, and a 24/7 helpline for any concerns.',
  },
  {
    question: 'Can I adopt more than one animal?',
    answer: 'Yes, we encourage bonded pairs and often offer discounts for adopting two animals together. We assess compatibility for multi-pet homes.',
  },
];

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/10 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-amber-100 rounded-full mb-8">
              <FaPaw className="text-amber-600" />
              <span className="text-amber-700 font-medium">Find Your Forever Friend</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to <span className="text-amber-600">Adopt?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Every adoption creates space to rescue another. Find your perfect match 
              among our 200+ animals waiting for their forever homes.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="bg-white border border-amber-100 px-6 py-4 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-amber-600">250+</div>
                <div className="text-gray-600">Adoptions This Year</div>
              </div>
              <div className="bg-white border border-orange-100 px-6 py-4 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white border border-amber-100 px-6 py-4 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-amber-600">30-day</div>
                <div className="text-gray-600">Trial Period</div>
              </div>
            </div>
            
            <a 
              href="#adoption-form" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your Application
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Adoption Process */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple 4-Step <span className="text-amber-600">Adoption</span> Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you find the perfect match with full support every step of the way
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {adoptionSteps.map((step, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border ${step.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-xl ${step.color.includes('amber') ? 'bg-amber-100' : 'bg-orange-100'}`}>
                  <div className={`text-2xl ${step.iconColor}`}>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Step {step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Adopt Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-orange-700 font-medium mb-4">
              Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose <span className="text-amber-600">Adoption?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every adoption makes a difference in more ways than one
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border bg-gradient-to-br ${index % 2 === 0 ? 'from-amber-50 to-white border-amber-100' : 'from-orange-50 to-white border-orange-100'} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} text-white`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-gray-500">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full translate-y-32 -translate-x-32" />
              
              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <FaStar className="text-amber-300" />
                    <span className="font-medium">Happy Tails</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                  <p className="text-gray-300">Hear from families who found their perfect companions</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <FaHeart className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Raj & Family</div>
                        <div className="text-gray-300 text-sm">Adopted Bruno in 2023</div>
                      </div>
                    </div>
                    <p className="italic text-gray-200">
                      "Bruno filled our home with joy. The adoption process was smooth and the post-adoption support incredible!"
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <FaStar className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Priya Sharma</div>
                        <div className="text-gray-300 text-sm">Adopted Luna in 2024</div>
                      </div>
                    </div>
                    <p className="italic text-gray-200">
                      "Best decision ever! Luna is perfect for my apartment lifestyle. Thank you for matching us so well!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                    <FaQuestionCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
                    <p className="text-gray-600">Everything you need to know about adoption</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-amber-300"
                    >
                      <div className="flex items-start gap-6">
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
          </div>

          {/* Right Column - Form & Info */}
          <div className="space-y-8">
            {/* Adoption Form */}
            <div className="sticky top-8" id="adoption-form">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white text-center">
                  <h2 className="text-2xl font-bold">Ready to Adopt?</h2>
                  <p className="text-amber-100 mt-2">Your new best friend is waiting</p>
                </div>
                <div className="p-6">
                  <AdoptionForm />
                </div>
              </div>
            </div>

            {/* Contact & Info Cards */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <FaPhone className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Need Assistance?</h3>
                    <p className="text-gray-600 text-sm">Our adoption counselors are here to help</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <FaPhone className="text-amber-600" />
                    <div>
                      <div className="text-sm text-gray-500">Call us at</div>
                      <a href="tel:+919876543210" className="font-bold text-gray-900 hover:text-amber-600">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <FaEnvelope className="text-amber-600" />
                    <div>
                      <div className="text-sm text-gray-500">Email us</div>
                      <a href="mailto:adopt@petscare.org" className="font-bold text-gray-900 hover:text-amber-600">
                        adopt@petscare.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <FaClock className="text-amber-600" />
                    <div>
                      <div className="text-sm text-gray-500">Shelter Hours</div>
                      <div className="font-bold text-gray-900">9 AM - 6 PM, Tue-Sun</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Card */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
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
                    <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Adoption Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600">95%</div>
                    <div className="text-sm text-gray-600">Adoption Success</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600">30</div>
                    <div className="text-sm text-gray-600">Day Trial</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600">₹0</div>
                    <div className="text-sm text-gray-600">Return Fee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full translate-y-32 -translate-x-32" />
            
            <div className="relative">
              <div className="text-6xl text-amber-500/20 mb-8">"</div>
              <p className="text-2xl text-white mb-10 leading-relaxed italic">
                Adoption isn't just about saving an animal—it's about gaining a family member 
                who will love you unconditionally and fill your home with joy.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <FaPaw className="text-white text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Dr. Priya Sharma</div>
                  <div className="text-gray-300">Founder, PawHaven Vashi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}