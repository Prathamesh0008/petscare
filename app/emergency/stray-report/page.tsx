'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StrayReportPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    animalType: 'dog',
    numberOfAnimals: '1',
    location: '',
    areaDescription: '',
    condition: 'healthy',
    behavior: 'friendly',
    duration: 'just-saw',
    reporterName: '',
    phone: '',
    email: '',
    urgency: 'medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/emergency/stray-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Stray animal report submitted! Our team will investigate.');
      router.push('/emergency');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/emergency" className="text-blue-600 hover:underline">
          ← Back to Emergency
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Report Stray Animal</h1>
      <p className="text-gray-600 mb-8">Help us rescue animals in need</p>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Animal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Animal Type *</label>
                <select
                  name="animalType"
                  value={formData.animalType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="cow">Cow</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Number of Animals *</label>
                <select
                  name="numberOfAnimals"
                  value={formData.numberOfAnimals}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3-5">3-5</option>
                  <option value="6-10">6-10</option>
                  <option value="10+">More than 10</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="healthy">Healthy</option>
                  <option value="injured">Injured</option>
                  <option value="sick">Sick</option>
                  <option value="malnourished">Malnourished</option>
                  <option value="pregnant">Pregnant</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Behavior *</label>
                <select
                  name="behavior"
                  value={formData.behavior}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="friendly">Friendly</option>
                  <option value="shy">Shy/Afraid</option>
                  <option value="aggressive">Aggressive</option>
                  <option value="unresponsive">Unresponsive</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">How long there? *</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="just-saw">Just saw today</option>
                  <option value="few-days">Few days</option>
                  <option value="week">About a week</option>
                  <option value="month">Month or more</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Urgency Level *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="low">Low - No immediate danger</option>
                  <option value="medium">Medium - Needs attention soon</option>
                  <option value="high">High - In immediate danger</option>
                  <option value="emergency">Emergency - Critical situation</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Location Details</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Exact Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Street address, landmark, GPS coordinates"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Area Description *</label>
              <textarea
                name="areaDescription"
                value={formData.areaDescription}
                onChange={handleChange}
                required
                rows={3}
                className="w-full p-3 border rounded-lg"
                placeholder="Near what building? Accessible by vehicle? Safe area?"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-sm">
                  I can stay with the animal until help arrives (if safe)
                </span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Upload Photos (Optional)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Photos help us identify the location and assess the situation
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-gray-600 mb-4">Drag and drop photos or click to upload</p>
              <input
                type="file"
                accept="image/*"
                multiple
                className="block mx-auto"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg"
            >
              Submit Stray Animal Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}