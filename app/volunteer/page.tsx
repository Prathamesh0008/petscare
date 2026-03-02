// petscare/app/volunteer/page.tsx
'use client';

import VolunteerForm from '@/components/VolunteerForm';
import { 
  FaHandsHelping, FaCalendarAlt, FaUsers, FaHeart, 
  FaPaw, FaCamera, FaAward, FaBookOpen, 
  FaClock, FaMapMarkerAlt, FaCertificate, FaShieldAlt,
  FaArrowRight, FaQuoteRight, FaCheckCircle, FaUserFriends,
  FaStethoscope, FaHome, FaGraduationCap, FaBullhorn,
  FaDog, FaCat, FaHeartbeat, FaUsers as FaPeopleGroup,
  FaStar, FaChartLine
} from 'react-icons/fa';
import Link from 'next/link'

const volunteerOpportunities = [
  {
    name: 'Animal Care Specialist',
    role: 'Daily Care & Comfort',
    icon: <FaDog />,
    description: 'Provide nurturing care, feeding, and monitoring of rescued animals',
    commitment: '6-8 hours/week',
    skills: ['Animal Handling', 'Patience', 'Observation'],
    color: 'brown'
  },
  {
    name: 'Adoption Ambassador',
    role: 'Family Matching Guide',
    icon: <FaHome />,
    description: 'Help families find their perfect match and guide through adoption process',
    commitment: '4-6 hours/week',
    skills: ['Communication', 'Empathy', 'Matching'],
    color: 'green'
  },
  {
    name: 'Medical Support Team',
    role: 'Health & Wellness',
    icon: <FaStethoscope />,
    description: 'Assist with medical care, medication, and recovery monitoring',
    commitment: '8-10 hours/week',
    skills: ['Medical Knowledge', 'Detail-oriented', 'Calmness'],
    color: 'brown'
  },
  {
    name: 'Event & Outreach',
    role: 'Community Engagement',
    icon: <FaBullhorn />,
    description: 'Organize adoption events, fundraisers, and community awareness programs',
    commitment: 'Flexible hours',
    skills: ['Organization', 'Networking', 'Creativity'],
    color: 'green'
  },
  {
    name: 'Training Companion',
    role: 'Behavior & Socialization',
    icon: <FaGraduationCap />,
    description: 'Work with animals on basic training, socialization, and confidence building',
    commitment: '6-8 hours/week',
    skills: ['Training Techniques', 'Patience', 'Consistency'],
    color: 'brown'
  },
  {
    name: 'Content Creator',
    role: 'Storytelling & Media',
    icon: <FaCamera />,
    description: 'Capture stories, photos, and videos to help animals find homes faster',
    commitment: 'Flexible hours',
    skills: ['Photography', 'Storytelling', 'Social Media'],
    color: 'green'
  },
];

const impactStories = [
  {
    quote: "I never realized how much impact one person could make. Seeing animals transform from fearful to loving has changed my life.",
    author: "Aarav Sharma",
    role: "Volunteer for 18 months",
    avatar: "AS"
  },
  {
    quote: "The training and support from the PetsCare team gave me confidence to work with even the most timid animals. Now I'm training new volunteers!",
    author: "Neha Patel",
    role: "Senior Volunteer",
    avatar: "NP"
  },
  {
    quote: "Weekends at the shelter became my favorite part of the week. The joy in an animal's eyes when they trust you is priceless.",
    author: "Rohan Verma",
    role: "Weekend Volunteer",
    avatar: "RV"
  }
];

const programHighlights = [
  {
    icon: FaAward,
    title: 'Professional Development',
    description: 'Gain hands-on experience and skills for animal care careers',
    highlight: 'Certificate Program Available'
  },
  {
    icon: FaBookOpen,
    title: 'Comprehensive Training',
    description: 'We provide all necessary training - no prior experience needed',
    highlight: 'Learn From Experts'
  },
  {
    icon: FaUserFriends,
    title: 'Supportive Community',
    description: 'Join a network of passionate animal advocates and mentors',
    highlight: 'Team Environment'
  },
  {
    icon: FaClock,
    title: 'Flexible Scheduling',
    description: 'Choose shifts that fit your lifestyle - days, evenings, or weekends',
    highlight: 'Work-Life Balance'
  }
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7f0]/20 to-[#eaede2]/10 ">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2c4a3e]/20 via-[#b87d5e]/30 to-[#2c4a3e]/20 ">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-18">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                  <FaHeart className="text-[#b87d5e] text-xs sm:text-sm" />
                  <span className="text-[#b87d5e] font-medium text-xs sm:text-sm">Join Our Movement</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Share Your <span className="text-[#b87d5e]">Heart</span>,<br className="hidden sm:block" />
                  Change Their <span className="text-[#2c4a3e]">World</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Your time and compassion can create miracles for animals in need. 
                  Join our volunteer family and become part of stories that transform lives.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <a 
                    href="#opportunities"
                    className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#b87d5e] text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-[#9e6a4f] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Roles
                  </a>
                  <a 
                    href="#apply"
                    className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-[#b87d5e] text-[#b87d5e] font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-[#b87d5e]/5 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              
              {/* Right Stats Card */}
              <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto mt-8 lg:mt-0">
                <div className="relative">
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#b87d5e]/30 to-[#2c4a3e]/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl">
                        <FaUsers className="text-white text-lg sm:text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900">Volunteer Community</h3>
                        <p className="text-xs sm:text-sm text-gray-600">250+ active members</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-gradient-to-br from-[#b87d5e]/5 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#b87d5e]/20">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaClock className="text-[#b87d5e] text-xs sm:text-sm" />
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#b87d5e]">5,000+</div>
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Hours Contributed</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#2c4a3e]/5 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#2c4a3e]/20">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaHeart className="text-[#2c4a3e] text-xs sm:text-sm" />
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e]">1,200+</div>
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Animals Helped</div>
                        </div>
                      </div>
                      
                      <div className="pt-4 sm:pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                          <FaCalendarAlt className="text-gray-400" />
                          <span className="text-gray-600">Next orientation: <strong className="text-gray-900">This Saturday</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Stories That <span className="text-[#b87d5e]">Inspire</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Hear from volunteers who have found purpose and joy in their journey with us
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {impactStories.map((story, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 hover:border-[#b87d5e] hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaQuoteRight className="text-white text-base sm:text-lg md:text-xl" />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                    {story.avatar}
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">"{story.quote}"</p>
                </div>
                
                <div className="pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">{story.author}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{story.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div id="opportunities" className="bg-gradient-to-b from-white to-[#f5f7f0] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b87d5e]/10 rounded-full mb-3 sm:mb-4">
                <FaHandsHelping className="text-[#b87d5e] text-xs sm:text-sm" />
                <span className="text-[#b87d5e] font-medium text-xs sm:text-sm">Multiple Roles Available</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Find Your <span className="text-[#b87d5e]">Perfect Role</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Choose a volunteer path that aligns with your skills, interests, and schedule
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {volunteerOpportunities.map((role, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#b87d5e] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`p-4 sm:p-5 md:p-6 ${
                    role.color === 'brown' ? 'bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f]' :
                    'bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="text-xl sm:text-2xl md:text-3xl text-white">
                        {role.icon}
                      </div>
                      <span className="text-white/90 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 bg-white/20 rounded-full">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">{role.name}</h3>
                      <p className="text-xs sm:text-sm text-[#b87d5e] font-medium">{role.role}</p>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 leading-relaxed">{role.description}</p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <div className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 sm:mb-2">Ideal Skills</div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {role.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-50 text-gray-700 text-[10px] sm:text-xs font-medium rounded-full border border-gray-200 flex items-center gap-0.5 sm:gap-1"
                            >
                              <FaStar className="text-[#b87d5e] text-[8px] sm:text-[10px]" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                  <Link
  href="/contact"
  className="w-full py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium bg-gray-50 text-gray-700 hover:bg-[#b87d5e] hover:text-white hover:border-[#b87d5e] border border-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
>
  <span>Learn More</span>
  <FaArrowRight className="text-[10px] sm:text-xs" />
</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2c4a3e]/10 rounded-full mb-4 sm:mb-6">
                  <FaAward className="text-[#2c4a3e] text-xs sm:text-sm" />
                  <span className="text-[#2c4a3e] font-medium text-xs sm:text-sm">Why Choose Us</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 lg:px-0">
                  More Than Just <span className="text-[#b87d5e]">Volunteering</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
                  We're committed to creating meaningful experiences that benefit both our 
                  volunteers and the animals they serve. Our program is designed for growth, 
                  learning, and genuine impact.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {programHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-lg sm:rounded-xl flex-shrink-0">
                        <highlight.icon className="text-[#b87d5e] text-base sm:text-lg md:text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">{highlight.title}</h3>
                          <span className="text-[8px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 bg-[#b87d5e]/10 text-[#b87d5e] rounded-full">
                            {highlight.highlight}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Safety Card */}
              <div className="mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-16 sm:-translate-y-20 md:-translate-y-24 translate-x-16 sm:translate-x-20 md:translate-x-24"></div>
                  <div className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-16 sm:translate-y-20 md:translate-y-24 -translate-x-16 sm:-translate-x-20 md:-translate-x-24"></div>
                  
                  <div className="relative">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-[#b87d5e] rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-6">
                        <FaShieldAlt className="text-white text-xl sm:text-2xl md:text-3xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Your Safety First</h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8">
                        Comprehensive training, proper equipment, and expert supervision ensure 
                        a safe and rewarding experience for all volunteers.
                      </p>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      {[
                        'Complete safety orientation for all roles',
                        'Protective gear and equipment provided',
                        'Experienced staff supervision',
                        'Emergency protocols and training',
                        'Health and wellness support'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3 text-white">
                          <FaCheckCircle className="text-[#b87d5e] text-xs sm:text-sm md:text-base flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div id="apply" className="bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Left Steps */}
              <div>
                <div className="lg:sticky lg:top-8">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 lg:px-0">
                      Ready to <span className="text-[#b87d5e]">Begin</span>?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 px-4 lg:px-0">
                      Start your volunteer journey with us. The application process is simple, 
                      and our team is here to support you every step of the way.
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Complete Application',
                        description: 'Tell us about your interests and availability',
                        duration: '10-15 minutes',
                        icon: FaHandsHelping
                      },
                      {
                        step: '2',
                        title: 'Virtual Orientation',
                        description: 'Learn about our mission, safety, and roles',
                        duration: '1 hour',
                        icon: FaUsers
                      },
                      {
                        step: '3',
                        title: 'Role Placement',
                        description: 'Match with a role that fits your skills',
                        duration: '2-3 days',
                        icon: FaChartLine
                      },
                      {
                        step: '4',
                        title: 'On-site Training',
                        description: 'Hands-on training with experienced staff',
                        duration: '2-4 hours',
                        icon: FaGraduationCap
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-gray-200 hover:border-[#b87d5e] transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <step.icon className="text-[#b87d5e] text-sm sm:text-base" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">{step.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-1">{step.description}</p>
                          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                            <FaClock className="text-gray-400 text-[8px] sm:text-[10px]" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 rounded-xl sm:rounded-2xl border border-[#b87d5e]/20">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-[#b87d5e]/10 rounded-lg sm:rounded-xl flex-shrink-0">
                        <FaMapMarkerAlt className="text-[#b87d5e] text-sm sm:text-base" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Visit Our Center</h4>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          Come see our facility and meet our team before applying
                        </p>
                        <a 
                          href="#contact" 
                          className="inline-flex items-center gap-1 sm:gap-2 text-[#b87d5e] font-medium hover:text-[#9e6a4f] text-xs sm:text-sm"
                        >
                          Schedule a Tour
                          <FaArrowRight className="text-[10px] sm:text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Form */}
              <div>
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] p-5 sm:p-6 md:p-8 text-white">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl flex-shrink-0">
                        <FaHandsHelping className="text-lg sm:text-xl md:text-2xl" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Volunteer Application</h3>
                        <p className="text-white/80 text-xs sm:text-sm">Start your journey today</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                    <VolunteerForm />
                  </div>
                </div>
                
                {/* Quick Info */}
                <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <FaClock className="text-[#b87d5e] text-xs sm:text-sm" />
                      <div className="text-[#b87d5e] font-bold text-base sm:text-lg md:text-2xl">24-48h</div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <FaCheckCircle className="text-[#2c4a3e] text-xs sm:text-sm" />
                      <div className="text-[#2c4a3e] font-bold text-base sm:text-lg md:text-2xl">95%</div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Acceptance Rate</div>
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