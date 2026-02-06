'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    address: '123 Main St, Vashi, Navi Mumbai',
    notifications: {
      email: true,
      sms: false,
      whatsapp: true,
    },
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic would go here
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/profile" className="text-blue-600 hover:underline">
          ← Back to Profile
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
      <p className="text-gray-600 mb-8">Manage your account preferences</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {saved && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                Settings saved successfully!
              </div>
            )}

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({...user, phone: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea
                  value={user.address}
                  onChange={(e) => setUser({...user, address: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Notification Preferences</h3>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={user.notifications.email}
                    onChange={(e) => setUser({
                      ...user,
                      notifications: {...user.notifications, email: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={user.notifications.sms}
                    onChange={(e) => setUser({
                      ...user,
                      notifications: {...user.notifications, sms: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <span>SMS notifications</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={user.notifications.whatsapp}
                    onChange={(e) => setUser({
                      ...user,
                      notifications: {...user.notifications, whatsapp: e.target.checked}
                    })}
                    className="mr-3"
                  />
                  <span>WhatsApp notifications</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Account Security</h3>
            <Link
              href="/auth/forgot-password"
              className="block text-blue-600 hover:underline mb-3"
            >
              Change Password
            </Link>
            <button className="text-red-600 hover:text-red-800">
              Delete Account
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Export Data</h3>
            <p className="text-sm text-gray-600 mb-4">
              Download all your data from PawHaven
            </p>
            <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
              Request Data Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}