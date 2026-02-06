'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalAnimals: 0,
    availableAnimals: 0,
    pendingApplications: 0,
    todayDonations: 0,
    totalVolunteers: 0,
    upcomingEvents: 0,
  });

  const [recentActivity, setRecentActivity] = useState([
    { type: 'adoption', name: 'Max', user: 'John Doe', time: '2 hours ago' },
    { type: 'donation', amount: '₹2,500', user: 'Jane Smith', time: '4 hours ago' },
    { type: 'new_animal', name: 'Luna', time: '1 day ago' },
    { type: 'application', user: 'Bob Wilson', animal: 'Rocky', time: '2 days ago' },
  ]);

  useEffect(() => {
    // Fetch stats from API
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600">{stats.totalAnimals}</div>
          <div className="text-gray-600">Total Animals</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600">{stats.availableAnimals}</div>
          <div className="text-gray-600">Available</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-yellow-600">{stats.pendingApplications}</div>
          <div className="text-gray-600">Pending Apps</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-purple-600">₹{stats.todayDonations}</div>
          <div className="text-gray-600">Today's Donations</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-red-600">{stats.totalVolunteers}</div>
          <div className="text-gray-600">Volunteers</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-indigo-600">{stats.upcomingEvents}</div>
          <div className="text-gray-600">Upcoming Events</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/admin/animals/add"
                className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700"
              >
                Add Animal
              </Link>
              <Link
                href="/admin/applications"
                className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700"
              >
                Review Apps
              </Link>
              <Link
                href="/admin/donations"
                className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700"
              >
                View Donations
              </Link>
              <Link
                href="/admin/users"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700"
              >
                Manage Users
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activity.type === 'adoption' ? 'bg-green-100' :
                      activity.type === 'donation' ? 'bg-purple-100' :
                      activity.type === 'new_animal' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      {activity.type === 'adoption' ? '🏠' :
                       activity.type === 'donation' ? '💰' :
                       activity.type === 'new_animal' ? '🐕' : '📝'}
                    </div>
                    <div>
                      <div className="font-medium">
                        {activity.type === 'adoption' && `${activity.name} adopted by ${activity.user}`}
                        {activity.type === 'donation' && `${activity.amount} donated by ${activity.user}`}
                        {activity.type === 'new_animal' && `New animal added: ${activity.name}`}
                        {activity.type === 'application' && `New application from ${activity.user} for ${activity.animal}`}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                <div>
                  <div className="font-medium">Medical Checkup</div>
                  <div className="text-sm text-gray-600">3 animals due tomorrow</div>
                </div>
                <button className="text-blue-600 text-sm">View</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                <div>
                  <div className="font-medium">Interviews</div>
                  <div className="text-sm text-gray-600">2 adoption interviews today</div>
                </div>
                <button className="text-blue-600 text-sm">Schedule</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                <div>
                  <div className="font-medium">Vaccinations</div>
                  <div className="text-sm text-gray-600">5 animals due this week</div>
                </div>
                <button className="text-blue-600 text-sm">Plan</button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Adoption Rate</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Donation Target</span>
                  <span>₹45,000/₹1,00,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Foster Homes</span>
                  <span>12/20 filled</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}