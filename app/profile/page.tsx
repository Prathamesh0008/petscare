'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    memberSince: '2023-01-15',
    role: 'Adopter',
    avatar: 'JD',
  };

  const stats = {
    applications: 2,
    favorites: 5,
    donations: 3,
    volunteerHours: 12,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {user.avatar}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.role}</p>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left p-3 rounded-lg ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`w-full text-left p-3 rounded-lg ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                Applications
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`w-full text-left p-3 rounded-lg ${activeTab === 'favorites' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                Favorites
              </button>
              <button
                onClick={() => setActiveTab('donations')}
                className={`w-full text-left p-3 rounded-lg ${activeTab === 'donations' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                Donations
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left p-3 rounded-lg ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                Settings
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/adopt"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Adopt a Pet
              </Link>
              <Link
                href="/donate"
                className="block text-center border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
              >
                Make a Donation
              </Link>
              <Link
                href="/volunteer"
                className="block text-center border-2 border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">{stats.applications}</div>
                  <div className="text-gray-600">Applications</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600">{stats.favorites}</div>
                  <div className="text-gray-600">Favorites</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600">{stats.donations}</div>
                  <div className="text-gray-600">Donations</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-yellow-600">{stats.volunteerHours}</div>
                  <div className="text-gray-600">Volunteer Hours</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <div>
                      <div className="font-bold">Application Submitted</div>
                      <div className="text-sm text-gray-600">For "Max" the Golden Retriever</div>
                    </div>
                    <div className="text-sm text-gray-600">2 days ago</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <div>
                      <div className="font-bold">Donation Made</div>
                      <div className="text-sm text-gray-600">₹2,500 for medical fund</div>
                    </div>
                    <div className="text-sm text-gray-600">1 week ago</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">My Applications</h3>
              <div className="space-y-4">
                {/* Application items will go here */}
                <p className="text-gray-600">No applications yet.</p>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Favorite Animals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Favorite animals will go here */}
                <p className="text-gray-600">No favorites yet.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}