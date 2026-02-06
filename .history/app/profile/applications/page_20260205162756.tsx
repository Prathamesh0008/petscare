'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([
    {
      id: 'APP001',
      animalId: '1',
      animalName: 'Max',
      date: '2024-01-15',
      status: 'under-review',
      statusText: 'Under Review',
      nextStep: 'Interview scheduled for Jan 20',
    },
    {
      id: 'APP002',
      animalId: '2',
      animalName: 'Luna',
      date: '2024-01-10',
      status: 'approved',
      statusText: 'Approved',
      nextStep: 'Pickup scheduled for Jan 25',
    },
    {
      id: 'APP003',
      animalId: '3',
      animalName: 'Rocky',
      date: '2023-12-20',
      status: 'rejected',
      statusText: 'Not Approved',
      nextStep: 'Consider other animals',
    },
  ]);

  const statusColors = {
    'under-review': 'bg-yellow-100 text-yellow-800',
    'approved': 'bg-green-100 text-green-800',
    'rejected': 'bg-red-100 text-red-800',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/profile" className="text-blue-600 hover:underline">
          ← Back to Profile
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">My Applications</h1>
      <p className="text-gray-600 mb-8">Track your adoption applications</p>

      <div className="space-y-6">
        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{app.animalName}</h3>
                <div className="text-gray-600">
                  Application ID: {app.id} • Submitted: {app.date}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[app.status as keyof typeof statusColors]}`}>
                {app.statusText}
              </span>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Next Step:</div>
              <div className="font-medium">{app.nextStep}</div>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/animals/${app.animalId}`}
                className="text-blue-600 hover:underline"
              >
                View Animal →
              </Link>
              <button className="text-gray-600 hover:text-gray-800">
                Cancel Application
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/animals"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Apply for Another Pet
        </Link>
      </div>
    </div>
  );
}