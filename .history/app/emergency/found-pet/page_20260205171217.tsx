'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FoundPetPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    petType: 'dog',
    breed: '',
    color: '',
    foundDate: '',
    foundLocation: '',
    condition: 'good',
    yourName: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/emergency/found-pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Found pet report submitted! Thank you for helping.');
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

      <h1 className="text-3xl font-bold mb-2">Report Found Pet</h1>
      <p className="text-gray-600 mb-8">Help reunite a lost pet with its family</p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
          <div className="flex">
            <div className="text-green-500">ℹ️</div>
            <div className="ml-3">
              <p className="text-sm">
                <strong>Note:</strong> If the pet is injured, please call our emergency number first.
                Check for ID tags or microchip at a local vet.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Found Pet Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pet Type *</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Approximate Breed</label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Color/Markings</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="good">Good - Healthy, alert</option>
                  <option value="injured">Injured - Needs medical attention</option>
                  <option value="sick">Sick - Showing signs of illness</option>
                  <option value="malnourished">Malnourished - Very thin</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Found Date & Time *</label>
                <input
                  type="datetime-local"
                  name="foundDate"
                  value={formData.foundDate}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Found Location *</label>
                <input
                  type="text"
                  name="foundLocation"
                  value={formData.foundLocation}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Exact location where found"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Additional Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border rounded-lg"
                placeholder="Behavior, collar/tags, injuries, etc."
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
                  name="yourName"
                  value={formData.yourName}
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
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" required />
                <span className="text-sm">
                  I can temporarily care for this pet until help arrives
                </span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Upload Photo of Found Pet</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-gray-600 mb-4">Clear photos help identify the pet</p>
              <input
                type="file"
                accept="image/*"
                className="block mx-auto"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href="/emergency"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg"
            >
              Submit Found Pet Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}