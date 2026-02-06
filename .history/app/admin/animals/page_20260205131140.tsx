'use client';

import { useState } from 'react';
import { 
  FaSearch, FaPlus, FaEdit, FaTrash, FaFilter, 
  FaPaw, FaDog, FaCat, FaStethoscope, FaHeart
} from 'react-icons/fa';

const animals = [
  { id: 1, name: 'Max', type: 'dog', breed: 'Indian Pariah', age: '2 years', status: 'available', health: 'good', arrival: '2024-01-15' },
  { id: 2, name: 'Luna', type: 'cat', breed: 'Domestic Shorthair', age: '1.5 years', status: 'pending', health: 'excellent', arrival: '2024-02-20' },
  { id: 3, name: 'Rocky', type: 'dog', breed: 'Labrador Mix', age: '4 months', status: 'available', health: 'excellent', arrival: '2024-03-10' },
  { id: 4, name: 'Mittens', type: 'cat', breed: 'Siamese Mix', age: '3 years', status: 'urgent', health: 'needs care', arrival: '2024-01-05' },
  { id: 5, name: 'Bruno', type: 'dog', breed: 'German Shepherd Mix', age: '5 years', status: 'medical', health: 'needs care', arrival: '2023-11-30' },
  { id: 6, name: 'Whiskers', type: 'cat', breed: 'Persian Mix', age: '2 years', status: 'available', health: 'excellent', arrival: '2024-02-15' },
  { id: 7, name: 'Charlie', type: 'dog', breed: 'Beagle Mix', age: '3 years', status: 'adopted', health: 'good', arrival: '2024-01-20' },
  { id: 8, name: 'Daisy', type: 'cat', breed: 'Indian Billi', age: '1 year', status: 'available', health: 'good', arrival: '2024-02-28' },
];

const statusColors = {
  available: 'bg-green-100 text-green-800',
  pending: 'bg-amber-100 text-amber-800',
  urgent: 'bg-red-100 text-red-800',
  medical: 'bg-blue-100 text-blue-800',
  adopted: 'bg-purple-100 text-purple-800',
};

export default function AdminAnimalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAnimals, setSelectedAnimals] = useState<number[]>([]);

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || animal.type === filterType;
    const matchesStatus = filterStatus === 'all' || animal.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const toggleSelectAnimal = (id: number) => {
    setSelectedAnimals(prev => 
      prev.includes(id) ? prev.filter(animalId => animalId !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedAnimals.length === filteredAnimals.length) {
      setSelectedAnimals([]);
    } else {
      setSelectedAnimals(filteredAnimals.map(animal => animal.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Animal Management</h1>
            <p className="text-gray-600">Manage all animals in the shelter</p>
          </div>
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
            <FaPlus /> Add New Animal
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaDog className="text-blue-600 text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">42</div>
                <div className="text-gray-600">Dogs</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaCat className="text-purple-600 text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">28</div>
                <div className="text-gray-600">Cats</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaStethoscope className="text-red-600 text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">7</div>
                <div className="text-gray-600">Needs Care</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaHeart className="text-green-600 text-xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">24</div>
                <div className="text-gray-600">Adopted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search animals by name or breed..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="urgent">Urgent</option>
                <option value="medical">Medical</option>
                <option value="adopted">Adopted</option>
              </select>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FaFilter /> More Filters
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedAnimals.length > 0 && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">{selectedAnimals.length} animals selected</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Bulk Actions</option>
                  <option>Mark as Available</option>
                  <option>Update Health Status</option>
                  <option>Export Data</option>
                  <option className="text-red-600">Delete Selected</option>
                </select>
              </div>
              <button 
                onClick={() => setSelectedAnimals([])}
                className="text-gray-600 hover:text-gray-800"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>

        {/* Animals Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedAnimals.length === filteredAnimals.length && filteredAnimals.length > 0}
                      onChange={selectAll}
                    />
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Animal</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Type</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Breed & Age</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Health Status</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Status</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Arrival Date</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAnimals.map((animal) => (
                  <tr key={animal.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedAnimals.includes(animal.id)}
                        onChange={() => toggleSelectAnimal(animal.id)}
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white">
                          <FaPaw />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{animal.name}</div>
                          <div className="text-sm text-gray-600">ID: {animal.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        animal.type === 'dog' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-800">{animal.breed}</div>
                      <div className="text-sm text-gray-600">{animal.age}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          animal.health === 'excellent' ? 'bg-green-500' :
                          animal.health === 'good' ? 'bg-amber-500' :
                          'bg-red-500'
                        }`} />
                        <span className="capitalize">{animal.health}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[animal.status as keyof typeof statusColors]}`}>
                        {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {new Date(animal.arrival).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <FaEdit />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="text-gray-600">
              Showing {filteredAnimals.length} of {animals.length} animals
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No animals found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
                setFilterStatus('all');
              }}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}