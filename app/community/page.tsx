// app/community/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  FaUsers, FaHeart, FaComment, FaShare, FaStar, FaDog, FaCat, FaPaw,
  FaCalendarAlt, FaMapMarkerAlt, FaRegClock, FaRegBookmark, FaBookmark,
  FaRegSmile, FaCamera, FaVideo, FaTimes, FaEllipsisH, FaFlag,
  FaRegHeart, FaHeart as FaHeartSolid, FaRegComment, FaRegShareSquare
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Types
type Story = {
  id: number;
  author: string;
  authorImage: string;
  authorId: string;
  pet: string;
  petType: 'dog' | 'cat' | 'other';
  petImage?: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  isLiked: boolean;
  isSaved: boolean;
  tags: string[];
};

type Question = {
  id: number;
  author: string;
  authorImage: string;
  title: string;
  content: string;
  answers: number;
  likes: number;
  timeAgo: string;
  category: string;
  isAnswered: boolean;
};

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
  isAttending: boolean;
};

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('stories');
  const [stories, setStories] = useState<Story[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPostModal, setShowPostModal] = useState(false);
  const [newPost, setNewPost] = useState({ content: '', image: '' });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStories([
        {
          id: 1,
          author: 'Sarah Johnson',
          authorImage: 'https://images.unsplash.com/photo-1494790108777-466d3e05c337?w=100&auto=format&fit=crop&q=80',
          authorId: '@sarahj',
          pet: 'Bella',
          petType: 'dog',
          content: 'Bella has been with us for 6 months now and she\'s brought so much joy to our family! From a shy rescue to the most loving companion. 🐾',
          image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80',
          likes: 234,
          comments: 45,
          shares: 12,
          timeAgo: '2 hours ago',
          isLiked: false,
          isSaved: false,
          tags: ['adoption', 'rescuedog', 'happytails']
        },
        {
          id: 2,
          author: 'Michael Chen',
          authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
          authorId: '@mikec',
          pet: 'Whiskers',
          petType: 'cat',
          content: 'Whiskers finally came out of his shell! It took 3 months but now he\'s the king of the house. Patience pays off! 😻',
          image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80',
          likes: 156,
          comments: 23,
          shares: 8,
          timeAgo: '5 hours ago',
          isLiked: true,
          isSaved: false,
          tags: ['catlover', 'rescuestory', 'patience']
        },
        {
          id: 3,
          author: 'Priya Patel',
          authorImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&auto=format&fit=crop&q=80',
          authorId: '@priyap',
          pet: 'Max',
          petType: 'dog',
          content: 'First day home vs 3 months later. The transformation is incredible! Thank you PawHeaven for bringing us together. ❤️',
          image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&auto=format&fit=crop&q=80',
          likes: 412,
          comments: 67,
          shares: 34,
          timeAgo: '1 day ago',
          isLiked: false,
          isSaved: true,
          tags: ['transformation', 'gratitude', 'adoption']
        }
      ]);

      setQuestions([
        {
          id: 1,
          author: 'Emily Wilson',
          authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
          title: 'How to introduce a new cat to resident dog?',
          content: 'We just adopted a cat and our 3-year-old lab seems anxious. Any tips for a smooth introduction?',
          answers: 12,
          likes: 34,
          timeAgo: '3 hours ago',
          category: 'behavior',
          isAnswered: true
        },
        {
          id: 2,
          author: 'David Kim',
          authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
          title: 'Recommended vet in South Delhi?',
          content: 'Looking for a good veterinarian for my newly adopted puppy. Any recommendations?',
          answers: 8,
          likes: 15,
          timeAgo: '1 day ago',
          category: 'health',
          isAnswered: false
        }
      ]);

      setEvents([
        {
          id: 1,
          title: 'Adoption Drive @ Vashi',
          date: 'March 15, 2024',
          time: '10:00 AM - 4:00 PM',
          location: 'Vashi Ground, Navi Mumbai',
          attendees: 45,
          image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=800&auto=format&fit=crop&q=80',
          category: 'adoption',
          isAttending: false
        },
        {
          id: 2,
          title: 'Pet Parenting Workshop',
          date: 'March 20, 2024',
          time: '3:00 PM - 5:00 PM',
          location: 'Online (Zoom)',
          attendees: 120,
          image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80',
          category: 'workshop',
          isAttending: true
        }
      ]);

      setLoading(false);
    };

    loadData();
  }, []);

  // Handle like
  const handleLike = (storyId: number) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { ...story, likes: story.isLiked ? story.likes - 1 : story.likes + 1, isLiked: !story.isLiked }
        : story
    ));
  };

  // Handle save
  const handleSave = (storyId: number) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { ...story, isSaved: !story.isSaved }
        : story
    ));
  };

  // Handle share
  const handleShare = (storyId: number) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { ...story, shares: story.shares + 1 }
        : story
    ));
    // Show share options
    alert('Share options would appear here');
  };

  // Handle event attendance
  const handleAttendEvent = (eventId: number) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, attendees: event.isAttending ? event.attendees - 1 : event.attendees + 1, isAttending: !event.isAttending }
        : event
    ));
  };

  // Handle post submission
  const handleSubmitPost = () => {
    if (!newPost.content.trim()) return;

    const newStory: Story = {
      id: stories.length + 1,
      author: 'You',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      authorId: '@currentuser',
      pet: 'New Friend',
      petType: 'other',
      content: newPost.content,
      image: newPost.image || undefined,
      likes: 0,
      comments: 0,
      shares: 0,
      timeAgo: 'Just now',
      isLiked: false,
      isSaved: false,
      tags: ['newpost']
    };

    setStories(prev => [newStory, ...prev]);
    setShowPostModal(false);
    setNewPost({ content: '', image: '' });
  };

  // Filter stories based on search and category
  const filteredStories = stories.filter(story => {
    const matchesSearch = story.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.pet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || story.petType === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b87d5e] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading community...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] text-sm font-medium mb-4">
            <FaUsers />
            PawHeaven Community
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4a3e] mb-4">
            Connect with Fellow <span className="text-[#b87d5e]">Pet Lovers</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Share stories, ask questions, and celebrate the joy of pet adoption with our growing community
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search stories, questions, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b87d5e] bg-white"
            >
              <option value="all">All Categories</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="other">Other Pets</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'stories', label: 'Stories', icon: FaStar },
              { id: 'questions', label: 'Questions', icon: FaComment },
              { id: 'events', label: 'Events', icon: FaCalendarAlt }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 font-medium capitalize transition-colors relative flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-[#b87d5e]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="text-sm" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b87d5e]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-2xl mx-auto">
          {/* Create Post - Stories Tab */}
          {activeTab === 'stories' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-[#b87d5e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPaw className="text-[#b87d5e]" />
                </div>
                <button
                  onClick={() => setShowPostModal(true)}
                  className="flex-1 text-left px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-[#b87d5e] transition-colors"
                >
                  Share your pet story...
                </button>
              </div>
            </motion.div>
          )}

          {/* Stories Feed */}
          {activeTab === 'stories' && (
            <AnimatePresence>
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Author */}
                  <div className="p-4 flex items-center gap-3">
                    <img
                      src={story.authorImage}
                      alt={story.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{story.author}</h3>
                        <span className="text-xs text-gray-500">{story.authorId}</span>
                      </div>
                      <p className="text-xs text-gray-500">{story.timeAgo}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
                        {story.petType === 'dog' ? <FaDog className="text-[#b87d5e] text-xs" /> : 
                         story.petType === 'cat' ? <FaCat className="text-[#b87d5e] text-xs" /> : 
                         <FaPaw className="text-[#b87d5e] text-xs" />}
                        <span className="text-xs font-medium text-gray-600">{story.pet}</span>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <FaEllipsisH className="text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="px-4 pb-3 text-sm text-gray-700">{story.content}</p>

                  {/* Tags */}
                  <div className="px-4 pb-3 flex flex-wrap gap-2">
                    {story.tags.map(tag => (
                      <span key={tag} className="text-xs text-[#b87d5e] bg-[#b87d5e]/10 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Image */}
                  {story.image && (
                    <div className="relative aspect-video">
                      <img
                        src={story.image}
                        alt="Pet story"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => handleLike(story.id)}
                          className="flex items-center gap-2 transition-colors group"
                        >
                          {story.isLiked ? (
                            <FaHeartSolid className="text-lg text-rose-500" />
                          ) : (
                            <FaRegHeart className="text-lg text-gray-500 group-hover:text-rose-500" />
                          )}
                          <span className={`text-sm ${story.isLiked ? 'text-rose-500' : 'text-gray-500'}`}>
                            {story.likes}
                          </span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#b87d5e] transition-colors group">
                          <FaRegComment className="text-lg" />
                          <span className="text-sm">{story.comments}</span>
                        </button>
                        <button
                          onClick={() => handleShare(story.id)}
                          className="flex items-center gap-2 text-gray-500 hover:text-[#2c4a3e] transition-colors group"
                        >
                          <FaRegShareSquare className="text-lg" />
                          <span className="text-sm">{story.shares}</span>
                        </button>
                      </div>
                      <button
                        onClick={() => handleSave(story.id)}
                        className={`p-2 rounded-full transition-colors ${
                          story.isSaved ? 'text-[#b87d5e]' : 'text-gray-400 hover:text-[#b87d5e]'
                        }`}
                      >
                        {story.isSaved ? <FaBookmark /> : <FaRegBookmark />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {/* Questions Tab */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              {/* Ask Question Button */}
              <button className="w-full py-3 bg-[#b87d5e] text-white rounded-lg font-semibold hover:bg-[#9e6a4f] transition-colors mb-6">
                Ask a Question
              </button>

              {questions.map(question => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={question.authorImage}
                      alt={question.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{question.author}</h3>
                      <p className="text-xs text-gray-500">{question.timeAgo}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2c4a3e] mb-2">{question.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{question.content}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {question.category}
                    </span>
                    {question.isAnswered && (
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        ✓ Answered
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{question.answers} answers</span>
                    <span className="text-sm text-gray-500">{question.likes} likes</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              {events.map(event => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#2c4a3e]">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2c4a3e] mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCalendarAlt className="text-[#b87d5e]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaRegClock className="text-[#b87d5e]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-[#b87d5e]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{event.attendees} attending</span>
                      <button
                        onClick={() => handleAttendEvent(event.id)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          event.isAttending
                            ? 'bg-[#b87d5e] text-white'
                            : 'border-2 border-[#b87d5e] text-[#b87d5e] hover:bg-[#b87d5e] hover:text-white'
                        }`}
                      >
                        {event.isAttending ? 'Attending ✓' : 'Attend'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Create Post Modal */}
        <AnimatePresence>
          {showPostModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowPostModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-lg w-full p-6"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#2c4a3e]">Create Post</h2>
                  <button
                    onClick={() => setShowPostModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="What's on your mind about your pet?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                />

                {newPost.image && (
                  <div className="relative mb-4">
                    <img src={newPost.image} alt="Preview" className="w-full rounded-lg" />
                    <button
                      onClick={() => setNewPost({ ...newPost, image: '' })}
                      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70"
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Image URL (optional)"
                    value={newPost.image}
                    onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b87d5e]"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitPost}
                    disabled={!newPost.content.trim()}
                    className="flex-1 py-3 bg-[#b87d5e] text-white rounded-lg font-semibold hover:bg-[#9e6a4f] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                  <button
                    onClick={() => setShowPostModal(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}