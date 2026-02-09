// petscare/app/volunteer/page.tsx
'use client';

import VolunteerForm from '@/components/VolunteerForm';
import { 
  FaHandsHelping, FaCalendarAlt, FaUsers, FaHeart, 
  FaPaw, FaCamera, FaAward, FaSmile, FaBookOpen, 
  FaClock, FaMapMarkerAlt, FaCertificate, FaShieldAlt,
  FaArrowRight, FaQuoteRight, FaCheckCircle, FaUserFriends
} from 'react-icons/fa';

const volunteerOpportunities = [
  {
    name: 'Animal Care Specialist',
    role: 'Daily Care & Comfort',
    icon: '🐕',
    description: 'Provide nurturing care, feeding, and monitoring of rescued animals',
    commitment: '6-8 hours/week',
    skills: ['Animal Handling', 'Patience', 'Observation'],
    color: 'emerald'
  },
  {
    name: 'Adoption Ambassador',
    role: 'Family Matching Guide',
    icon: '🏠',
    description: 'Help families find their perfect match and guide through adoption process',
    commitment: '4-6 hours/week',
    skills: ['Communication', 'Empathy', 'Matching'],
    color: 'amber'
  },
  {
    name: 'Medical Support Team',
    role: 'Health & Wellness',
    icon: '🏥',
    description: 'Assist with medical care, medication, and recovery monitoring',
    commitment: '8-10 hours/week',
    skills: ['Medical Knowledge', 'Detail-oriented', 'Calmness'],
    color: 'rose'
  },
  {
    name: 'Event & Outreach',
    role: 'Community Engagement',
    icon: '🎪',
    description: 'Organize adoption events, fundraisers, and community awareness programs',
    commitment: 'Flexible hours',
    skills: ['Organization', 'Networking', 'Creativity'],
    color: 'indigo'
  },
  {
    name: 'Training Companion',
    role: 'Behavior & Socialization',
    icon: '🎓',
    description: 'Work with animals on basic training, socialization, and confidence building',
    commitment: '6-8 hours/week',
    skills: ['Training Techniques', 'Patience', 'Consistency'],
    color: 'blue'
  },
  {
    name: 'Content Creator',
    role: 'Storytelling & Media',
    icon: '📷',
    description: 'Capture stories, photos, and videos to help animals find homes faster',
    commitment: 'Flexible hours',
    skills: ['Photography', 'Storytelling', 'Social Media'],
    color: 'purple'
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
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-emerald-50/10">
      {/* Hero Section with Different Layout */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-400/20 via-amber-200/30 to-rose-300/20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-700 font-medium">Join Our Movement</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Share Your <span className="text-emerald-600">Heart</span>,<br />
                  Change Their <span className="text-amber-600">World</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Your time and compassion can create miracles for animals in need. 
                  Join our volunteer family and become part of stories that transform lives.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#opportunities"
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Roles
                  </a>
                  <a 
                    href="#apply"
                    className="px-8 py-4 bg-white border-2 border-amber-300 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 to-amber-400/30 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl">
                        <FaUsers className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Volunteer Community</h3>
                        <p className="text-gray-600">250+ active members</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-xl border border-emerald-100">
                          <div className="text-2xl font-bold text-emerald-600 mb-1">5,000+</div>
                          <div className="text-sm text-gray-600">Hours Contributed</div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-xl border border-amber-100">
                          <div className="text-2xl font-bold text-amber-600 mb-1">1,200+</div>
                          <div className="text-sm text-gray-600">Animals Helped</div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm">
                          <FaClock className="text-gray-400" />
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

      {/* Impact Stories - Different Layout */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stories That <span className="text-emerald-600">Inspire</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from volunteers who have found purpose and joy in their journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaQuoteRight className="text-emerald-500 text-xl" />
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4">
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

      {/* Opportunities Section - Different Design */}
      <div id="opportunities" className="bg-gradient-to-b from-white to-emerald-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
                <FaHandsHelping className="text-amber-600" />
                <span className="text-amber-700 font-medium">Multiple Roles Available</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your <span className="text-emerald-600">Perfect Role</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose a volunteer path that aligns with your skills, interests, and schedule
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerOpportunities.map((role, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`p-6 ${
                    role.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                    role.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-600' :
                    role.color === 'rose' ? 'bg-gradient-to-br from-rose-500 to-rose-600' :
                    role.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
                    role.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{role.icon}</div>
                      <span className="text-white/90 text-sm font-medium px-3 py-1 bg-white/20 rounded-full">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{role.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{role.role}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{role.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Ideal Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full py-3 rounded-xl font-medium bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 border border-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
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

      {/* Program Highlights - Different Layout */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
                  <FaAward className="text-rose-600" />
                  <span className="text-rose-700 font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  More Than Just <span className="text-emerald-600">Volunteering</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  We're committed to creating meaningful experiences that benefit both our 
                  volunteers and the animals they serve. Our program is designed for growth, 
                  learning, and genuine impact.
                </p>
                
                <div className="space-y-6">
                  {programHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl">
                        <highlight.icon className="text-emerald-600 text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{highlight.title}</h3>
                          <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
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
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-full -translate-y-24 translate-x-24"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full translate-y-24 -translate-x-24"></div>
                  
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-2xl mb-6 mx-auto">
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
                          <FaCheckCircle className="text-emerald-400" />
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

      {/* Application Section - Different Design */}
      <div id="apply" className="bg-gradient-to-br from-emerald-50 via-amber-50/30 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="sticky top-8">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Ready to <span className="text-emerald-600">Begin</span>?
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
                        duration: '10-15 minutes'
                      },
                      {
                        step: '2',
                        title: 'Virtual Orientation',
                        description: 'Learn about our mission, safety, and roles',
                        duration: '1 hour'
                      },
                      {
                        step: '3',
                        title: 'Role Placement',
                        description: 'Match with a role that fits your skills',
                        duration: '2-3 days'
                      },
                      {
                        step: '4',
                        title: 'On-site Training',
                        description: 'Hands-on training with experienced staff',
                        duration: '2-4 hours'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-200 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center">
                          <span className="text-emerald-700 font-bold text-lg">{step.step}</span>
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
                  
                  <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-xl">
                        <FaMapMarkerAlt className="text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Visit Our Center</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Come see our facility and meet our team before applying
                        </p>
                        <a 
                          href="#contact" 
                          className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800"
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
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <FaHandsHelping className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Volunteer Application</h3>
                        <p className="text-emerald-100">Start your journey today</p>
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
                    <div className="text-emerald-600 font-bold text-2xl mb-2">24-48h</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="text-amber-600 font-bold text-2xl mb-2">95%</div>
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