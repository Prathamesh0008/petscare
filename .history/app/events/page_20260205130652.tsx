'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaRegCalendarCheck, FaPaw } from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: 'Weekend Adoption Drive',
    date: '2024-03-15',
    time: '10:00 AM - 4:00 PM',
    location: 'PawHaven Vashi Shelter',
    description: 'Meet our adorable dogs and cats looking for forever homes. Special discounts on adoption fees.',
    type: 'adoption',
    spotsLeft: 12,
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Volunteer Orientation',
    date: '2024-03-16',
    time: '11:00 AM - 1:00 PM',
    location: 'Community Hall, Sector 17',
    description: 'New volunteer training session. Learn about animal care and shelter operations.',
    type: 'volunteer',
    spotsLeft: 8,
    image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Fundraising Gala',
    date: '2024-03-20',
    time: '7:00 PM - 10:00 PM',
    location: 'Grand Hotel, Vashi',
    description: 'Annual fundraising dinner with special guests, auctions, and entertainment.',
    type: 'fundraiser',
    spotsLeft: 45,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'Pet First Aid Workshop',
    date: '2024-03-22',
    time: '2:00 PM - 5:00 PM',
    location: 'PawHaven Training Center',
    description: 'Learn essential first aid skills for pets. Certificate provided.',
    type: 'workshop',
    spotsLeft: 5,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60',
  },
];

const eventTypes = [
  { id: 'all', label: 'All Events', color: 'bg-gray-100 text-gray-800' },
  { id: 'adoption', label: 'Adoption Drives', color: 'bg-green-100 text-green-800' },
  { id: 'volunteer', label: 'Volunteer', color: 'bg-blue-100 text-blue-800' },
  { id: 'fundraiser', label: 'Fundraiser', color: 'bg-purple-100 text-purple-800' },
  { id: 'workshop', label: 'Workshop', color: 'bg-amber-100 text-amber-800' },
];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const filteredEvents = selectedType === 'all' 
    ? events 
    : events.filter(event => event.type === selectedType);

  const handleRegister = (eventId: number) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert('Successfully registered for the event!');
    } else {
      alert('You are already registered for this event.');
    }
  };

  const isPastEvent = (date: string) => {
    return new Date(date) < new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our community events, adoption drives, and workshops to support animal welfare.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Event Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-8">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedType === type.id
                    ? `${type.color} scale-105 shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <FaCalendarAlt className="text-amber-500 text-3xl mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800">{events.length}</div>
              <div className="text-gray-600">Total Events</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <FaUsers className="text-blue-500 text-3xl mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800">120+</div>
              <div className="text-gray-600">Monthly Participants</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <FaRegCalendarCheck className="text-green-500 text-3xl mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800">85%</div>
              <div className="text-gray-600">Event Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <FaPaw className="text-purple-500 text-3xl mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800">45</div>
              <div className="text-gray-600">Adoptions at Events</div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const isPast = isPastEvent(event.date);
            const isRegistered = registeredEvents.includes(event.id);

            return (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Event Image */}
                <div className="h-48 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  {isPast && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      PAST EVENT
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                    {event.spotsLeft} spots left
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'adoption' ? 'bg-green-100 text-green-800' :
                      event.type === 'volunteer' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'fundraiser' ? 'bg-purple-100 text-purple-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <div className="text-amber-600 font-bold">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleRegister(event.id)}
                    disabled={isPast || isRegistered}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      isPast
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isRegistered
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-amber-500 text-white hover:bg-amber-600 hover:scale-105'
                    }`}
                  >
                    {isPast 
                      ? 'Event Ended' 
                      : isRegistered 
                      ? '✓ Registered' 
                      : 'Register Now'}
                  </button>

                  {/* Reminder Option */}
                  {!isPast && !isRegistered && (
                    <button className="w-full mt-3 text-amber-600 hover:text-amber-700 text-sm font-medium">
                      + Add to Calendar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500">Check back later for upcoming events!</p>
          </div>
        )}

        {/* Event Calendar Preview */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Monthly Calendar</h2>
          <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-semibold text-gray-600 p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const hasEvent = events.some(event => 
                new Date(event.date).getDate() === day
              );
              return (
                <div
                  key={day}
                  className={`text-center p-3 rounded-lg ${
                    hasEvent
                      ? 'bg-amber-100 text-amber-700 font-bold'
                      : 'text-gray-700'
                  }`}
                >
                  {day}
                  {hasEvent && <div className="w-1 h-1 bg-amber-500 rounded-full mx-auto mt-1"></div>}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}