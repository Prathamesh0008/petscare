'use client';

import { useState } from 'react';
import { 
  FaSearch, FaCheckCircle, FaTimesCircle, FaClock, 
  FaUser, FaHome, FaPhone, FaEnvelope, FaCalendarAlt,
  FaFilter, FaDownload, FaEye
} from 'react-icons/fa';

const adoptions = [
  { 
    id: 1, 
    applicant: 'Rajesh Kumar', 
    animal: 'Max', 
    animalType: 'dog',
    submitted: '2024-03-10', 
    status: 'pending',
    contact: '+91 98765 43210',
    email: 'rajesh@email.com',
    lastUpdate: '2 days ago'
  },
  { 
    id: 2, 
    applicant: 'Priya Sharma', 
    animal: 'Luna', 
    animalType: 'cat',
    submitted: '2024-03-08', 
    status: 'approved',
    contact: '+91 87654 32109',
    email: 'priya@email.com',
    lastUpdate: '1 day ago'
  },
  { 
    id: 3, 
    applicant: 'Ananya Singh', 
    animal: 'Rocky', 
    animalType: 'dog',
    submitted: '2024-03-05', 
    status: 'rejected',
    contact: '+91 76543 21098',
    email: 'ananya@email.com',
    lastUpdate: '3 days ago'
  },
  { 
    id: 4, 
    applicant: 'Vikram Patel', 
    animal: 'Mittens', 
    animalType: 'cat',
    submitted: '2024-03-01', 
    status: 'pending',
    contact: '+91 65432 10987',
    email: 'vikram@email.com',
    lastUpdate: '5 days ago'
  },
  { 
    id: 5, 
    applicant: 'Sneha Reddy', 
    animal: 'Bruno', 
    animalType: 'dog',
    submitted: '2024-02-28', 
    status: 'approved',
    contact: '+91 54321 09876',
    email: 'sneha@email.com',
    lastUpdate: '1 week ago'
  },
];

const statusColors = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  'home-visit': 'bg-blue-100 text-blue-800',
};

const statusIcons = {
  pending: FaClock,
  approved: FaCheckCircle,
  rejected: FaTimesCircle,
  'home-visit': FaHome,
};

export default function AdminAdoptionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAdoption, setSelectedAdoption] = useState<number | null>(null);

  const filteredAdoptions = adoptions.filter(adoption => {
    const matchesSearch = 
      adoption.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      adoption.animal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      adoption.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || adoption.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusCount = (status: string) => {
    return adoptions.filter(a => a.status === status).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Adoption Applications</h1>
            <p className="text-gray-600">Review and manage adoption requests</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <FaDownload /> Export Data
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-gray-800 mb-2">{adoptions.length}</div>
            <div className="text-gray-600">Total Applications</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">{getStatusCount('approved')}</div>
            <div className="text-gray-600">Approved</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">{getStatusCount('pending')}</div>
            <div className="text-gray-600">Pending Review</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-red-600 mb-2">{getStatusCount('rejected')}</div>
            <div className="text-gray-600">Rejected</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by applicant, animal, or email..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="home-visit">Home Visit</option>
              </select>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FaFilter /> More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applications List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Applicant</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Animal</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Submitted</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Status</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredAdoptions.map((adoption) => {
                      const StatusIcon = statusIcons[adoption.status as keyof typeof statusIcons];
                      return (
                        <tr 
                          key={adoption.id} 
                          className={`hover:bg-gray-50 cursor-pointer ${
                            selectedAdoption === adoption.id ? 'bg-amber-50' : ''
                          }`}
                          onClick={() => setSelectedAdoption(adoption.id)}
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white">
                                <FaUser />
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">{adoption.applicant}</div>
                                <div className="text-sm text-gray-600">{adoption.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                adoption.animalType === 'dog' 
                                  ? 'bg-blue-100 text-blue-600' 
                                  : 'bg-purple-100 text-purple-600'
                              }`}>
                                {adoption.animalType === 'dog' ? '🐕' : '🐈'}
                              </span>
                              <div>
                                <div className="font-medium text-gray-800">{adoption.animal}</div>
                                <div className="text-sm text-gray-600 capitalize">{adoption.animalType}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-gray-800">
                              {new Date(adoption.submitted).toLocaleDateString('en-IN')}
                            </div>
                            <div className="text-sm text-gray-600">{adoption.lastUpdate}</div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <StatusIcon className={`${
                                adoption.status === 'approved' ? 'text-green-500' :
                                adoption.status === 'rejected' ? 'text-red-500' :
                                'text-amber-500'
                              }`} />
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                statusColors[adoption.status as keyof typeof statusColors]
                              }`}>
                                {adoption.status.charAt(0).toUpperCase() + adoption.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg">
                              <FaEye />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Application Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {selectedAdoption ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Application Details</h3>
                  {(() => {
                    const adoption = adoptions.find(a => a.id === selectedAdoption);
                    if (!adoption) return null;
                    
                    return (
                      <div className="space-y-6">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            statusColors[adoption.status as keyof typeof statusColors]
                          }`}>
                            {adoption.status.charAt(0).toUpperCase() + adoption.status.slice(1)}
                          </span>
                          <div className="text-sm text-gray-600">ID: #{adoption.id.toString().padStart(3, '0')}</div>
                        </div>

                        {/* Applicant Info */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Applicant Information</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <FaUser className="text-gray-400" />
                              <span className="text-gray-800">{adoption.applicant}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <FaPhone className="text-gray-400" />
                              <a href={`tel:${adoption.contact}`} className="text-gray-800 hover:text-amber-600">
                                {adoption.contact}
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <FaEnvelope className="text-gray-400" />
                              <a href={`mailto:${adoption.email}`} className="text-gray-800 hover:text-amber-600">
                                {adoption.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Animal Info */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Animal Information</h4>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              adoption.animalType === 'dog' 
                                ? 'bg-blue-100 text-blue-600' 
                                : 'bg-purple-100 text-purple-600'
                            }`}>
                              {adoption.animalType === 'dog' ? '🐕' : '🐈'}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{adoption.animal}</div>
                              <div className="text-sm text-gray-600 capitalize">{adoption.animalType}</div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-3">Timeline</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <FaCalendarAlt className="text-gray-400" />
                              <div>
                                <div className="text-gray-800">Submitted</div>
                                <div className="text-gray-600">{new Date(adoption.submitted).toLocaleDateString('en-IN')}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <FaClock className="text-gray-400" />
                              <div>
                                <div className="text-gray-800">Last Updated</div>
                                <div className="text-gray-600">{adoption.lastUpdate}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-6 border-t">
                          <div className="flex gap-3">
                            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium">
                              Approve
                            </button>
                            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium">
                              Reject
                            </button>
                          </div>
                          <button className="w-full mt-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium">
                            Schedule Home Visit
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📋</div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Select an application</h3>
                  <p className="text-gray-500">Click on any application to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}