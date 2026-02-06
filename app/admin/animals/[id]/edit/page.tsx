'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditAnimalPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [animal, setAnimal] = useState<any>(null);

  useEffect(() => {
    // Fetch animal data
    fetch(`/api/animals/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setAnimal(data.animal);
        setLoading(false);
      })
      .catch(console.error);
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAnimal({
      ...animal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/animals/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(animal),
      });

      if (response.ok) {
        router.push('/admin/animals');
      } else {
        alert('Failed to update animal');
      }
    } catch (error) {
      console.error('Error updating animal:', error);
      alert('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Animal not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/admin/animals" className="text-blue-600 hover:underline">
          ← Back to Animals
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Edit Animal: {animal.name}</h1>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={animal.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  name="type"
                  value={animal.type}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Breed</label>
                <input
                  type="text"
                  name="breed"
                  value={animal.breed}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Age (years)</label>
                <input
                  type="number"
                  name="age"
                  value={animal.age}
                  onChange={handleChange}
                  required
                  min="0"
                  max="30"
                  step="0.5"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={animal.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select
                  name="size"
                  value={animal.size}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={animal.status}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="available">Available</option>
                  <option value="pending">Pending</option>
                  <option value="adopted">Adopted</option>
                  <option value="fostered">Fostered</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Adoption Fee (₹)</label>
                <input
                  type="number"
                  name="adoptionFee"
                  value={animal.adoptionFee}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={animal.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href="/admin/animals"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}