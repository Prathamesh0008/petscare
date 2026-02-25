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

const volunteerOpportunities = [
  {
    name: 'Animal Care Specialist',
    role: 'Daily Care & Comfort',
    icon: <FaDog />,
    description: 'Provide nurturing care, feeding, and monitoring of rescued animals',
    commitment: '6-8 hours/week',
    skills: ['Animal Handling', 'Patience', 'Observation'],
    color: 'brown' // Changed from 'amber'
  },
  {
    name: 'Adoption Ambassador',
    role: 'Family Matching Guide',
    icon: <FaHome />,
    description: 'Help families find their perfect match and guide through adoption process',
    commitment: '4-6 hours/week',
    skills: ['Communication', 'Empathy', 'Matching'],
    color: 'green' // Changed from 'orange'
  },
  {
    name: 'Medical Support Team',
    role: 'Health & Wellness',
    icon: <FaStethoscope />,
    description: 'Assist with medical care, medication, and recovery monitoring',
    commitment: '8-10 hours/week',
    skills: ['Medical Knowledge', 'Detail-oriented', 'Calmness'],
    color: 'brown' // Changed from 'amber'
  },
  {
    name: 'Event & Outreach',
    role: 'Community Engagement',
    icon: <FaBullhorn />,
    description: 'Organize adoption events, fundraisers, and community awareness programs',
    commitment: 'Flexible hours',
    skills: ['Organization', 'Networking', 'Creativity'],
    color: 'green' // Changed from 'orange'
  },
  {
    name: 'Training Companion',
    role: 'Behavior & Socialization',
    icon: <FaGraduationCap />,
    description: 'Work with animals on basic training, socialization, and confidence building',
    commitment: '6-8 hours/week',
    skills: ['Training Techniques', 'Patience', 'Consistency'],
    color: 'brown' // Changed from 'amber'
  },
  {
    name: 'Content Creator',
    role: 'Storytelling & Media',
    icon: <FaCamera />,
    description: 'Capture stories, photos, and videos to help animals find homes faster',
    commitment: 'Flexible hours',
    skills: ['Photography', 'Storytelling', 'Social Media'],
    color: 'green' // Changed from 'orange'
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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f7f0]/20 to-[#eaede2]/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2c4a3e]/20 via-[#b87d5e]/30 to-[#2c4a3e]/20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
                  <FaHeart className="text-[#b87d5e]" />
                  <span className="text-[#b87d5e] font-medium">Join Our Movement</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Share Your <span className="text-[#b87d5e]">Heart</span>,<br />
                  Change Their <span className="text-[#2c4a3e]">World</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Your time and compassion can create miracles for animals in need. 
                  Join our volunteer family and become part of stories that transform lives.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#opportunities"
                    className="px-8 py-4 bg-[#b87d5e] text-white font-semibold rounded-xl hover:bg-[#9e6a4f] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Roles
                  </a>
                  <a 
                    href="#apply"
                    className="px-8 py-4 bg-white border-2 border-[#b87d5e] text-[#b87d5e] font-semibold rounded-xl hover:bg-[#b87d5e]/5 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#b87d5e]/30 to-[#2c4a3e]/30 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-xl">
                        <FaUsers className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Volunteer Community</h3>
                        <p className="text-gray-600">250+ active members</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-[#b87d5e]/5 to-white p-4 rounded-xl border border-[#b87d5e]/20">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-[#b87d5e]" />
                            <div className="text-2xl font-bold text-[#b87d5e]">5,000+</div>
                          </div>
                          <div className="text-sm text-gray-600">Hours Contributed</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#2c4a3e]/5 to-white p-4 rounded-xl border border-[#2c4a3e]/20">
                          <div className="flex items-center gap-2">
                            <FaHeart className="text-[#2c4a3e]" />
                            <div className="text-2xl font-bold text-[#2c4a3e]">1,200+</div>
                          </div>
                          <div className="text-sm text-gray-600">Animals Helped</div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm">
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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stories That <span className="text-[#b87d5e]">Inspire</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from volunteers who have found purpose and joy in their journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#b87d5e] hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaQuoteRight className="text-white text-xl" />
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f] rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {story.avatar}
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{story.quote}"</p>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900">{story.author}</div>
                  <div className="text-sm text-gray-600">{story.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div id="opportunities" className="bg-gradient-to-b from-white to-[#f5f7f0] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b87d5e]/10 rounded-full mb-4">
                <FaHandsHelping className="text-[#b87d5e]" />
                <span className="text-[#b87d5e] font-medium">Multiple Roles Available</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your <span className="text-[#b87d5e]">Perfect Role</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose a volunteer path that aligns with your skills, interests, and schedule
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerOpportunities.map((role, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#b87d5e] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`p-6 ${
                    role.color === 'brown' ? 'bg-gradient-to-br from-[#b87d5e] to-[#9e6a4f]' :
                    'bg-gradient-to-br from-[#2c4a3e] to-[#1e352b]'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl text-white">
                        {role.icon}
                      </div>
                      <span className="text-white/90 text-sm font-medium px-3 py-1 bg-white/20 rounded-full">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{role.name}</h3>
                      <p className="text-sm text-[#b87d5e] font-medium">{role.role}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{role.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Ideal Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200 flex items-center gap-1"
                            >
                              <FaStar className="text-[#b87d5e] text-xs" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full py-3 rounded-xl font-medium bg-gray-50 text-gray-700 hover:bg-[#b87d5e] hover:text-white hover:border-[#b87d5e] border border-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2c4a3e]/10 rounded-full mb-6">
                  <FaAward className="text-[#2c4a3e]" />
                  <span className="text-[#2c4a3e] font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  More Than Just <span className="text-[#b87d5e]">Volunteering</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  We're committed to creating meaningful experiences that benefit both our 
                  volunteers and the animals they serve. Our program is designed for growth, 
                  learning, and genuine impact.
                </p>
                
                <div className="space-y-6">
                  {programHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="p-3 bg-gradient-to-br from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-xl">
                        <highlight.icon className="text-[#b87d5e] text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{highlight.title}</h3>
                          <span className="text-xs font-medium px-2 py-1 bg-[#b87d5e]/10 text-[#b87d5e] rounded-full">
                            {highlight.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-[#2c4a3e] to-[#1e352b] rounded-2xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#b87d5e]/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                  
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#b87d5e] rounded-2xl mb-6 mx-auto">
                        <FaShieldAlt className="text-white text-3xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Your Safety First</h3>
                      <p className="text-gray-300 mb-8">
                        Comprehensive training, proper equipment, and expert supervision ensure 
                        a safe and rewarding experience for all volunteers.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'Complete safety orientation for all roles',
                        'Protective gear and equipment provided',
                        'Experienced staff supervision',
                        'Emergency protocols and training',
                        'Health and wellness support'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white">
                          <FaCheckCircle className="text-[#b87d5e]" />
                          <span>{item}</span>
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
      <div id="apply" className="bg-gradient-to-br from-[#f5f7f0] via-[#f0f2e8] to-[#eaede2] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="sticky top-8">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Ready to <span className="text-[#b87d5e]">Begin</span>?
                    </h2>
                    <p className="text-gray-700 text-lg">
                      Start your volunteer journey with us. The application process is simple, 
                      and our team is here to support you every step of the way.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
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
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#b87d5e] transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#b87d5e]/10 to-[#2c4a3e]/10 rounded-xl flex items-center justify-center">
                          <step.icon className="text-[#b87d5e]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FaClock className="text-gray-400" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-br from-[#b87d5e]/5 to-[#2c4a3e]/5 rounded-2xl border border-[#b87d5e]/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#b87d5e]/10 rounded-xl">
                        <FaMapMarkerAlt className="text-[#b87d5e]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Visit Our Center</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Come see our facility and meet our team before applying
                        </p>
                        <a 
                          href="#contact" 
                          className="inline-flex items-center gap-2 text-[#b87d5e] font-medium hover:text-[#9e6a4f]"
                        >
                          Schedule a Tour
                          <FaArrowRight className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#b87d5e] to-[#9e6a4f] p-8 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <FaHandsHelping className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Volunteer Application</h3>
                        <p className="text-white/80">Start your journey today</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <VolunteerForm />
                  </div>
                </div>
                
                {/* Quick Info */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FaClock className="text-[#b87d5e]" />
                      <div className="text-[#b87d5e] font-bold text-2xl">24-48h</div>
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-[#2c4a3e]" />
                      <div className="text-[#2c4a3e] font-bold text-2xl">95%</div>
                    </div>
                    <div className="text-sm text-gray-600">Acceptance Rate</div>
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