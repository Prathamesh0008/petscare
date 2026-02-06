'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LostPetPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'dog',
    breed: '',
    color: '',
    lastSeen: '',
    lastLocation: '',
    ownerName: '',
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
    
    // Submit form data
    const response = await fetch('/api/emergency/lost-pet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Lost pet report submitted successfully! We will contact you soon.');
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

      <h1 className="text-3xl font-bold mb-2">Report Lost Pet</h1>
      <p className="text-gray-600 mb-8">Help us help you find your missing companion</p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <div className="flex">
            <div className="text-yellow-500">⚠️</div>
            <div className="ml-3">
              <p className="text-sm">
                <strong>Important:</strong> Also contact local shelters, post on social media, 
                and check nearby areas immediately.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pet Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pet's Name *</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
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
                <label className="block text-sm font-medium mb-2">Breed</label>
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
                <label className="block text-sm font-medium mb-2">Last Seen Date *</label>
                <input
                  type="datetime-local"
                  name="lastSeen"
                  value={formData.lastSeen}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Last Location *</label>
                <input
                  type="text"
                  name="lastLocation"
                  value={formData.lastLocation}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Area, Landmark, Street"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border rounded-lg"
                placeholder="Distinctive features, collar color, microchip info..."
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Owner Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
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
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Upload Photo</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-gray-600 mb-4">Drag and drop or click to upload photo</p>
              <input
                type="file"
                accept="image/*"
                className="block mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">Max file size: 5MB</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 text-lg"
            >
              Submit Lost Pet Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}