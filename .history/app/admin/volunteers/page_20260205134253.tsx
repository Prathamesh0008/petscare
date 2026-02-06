'use client';

import { useState } from 'react';
import { 
  FaSearch, FaPlus, FaUser, FaCalendar, FaClock, 
  FaPhone, FaEnvelope, FaStar, FaEdit, FaTrash,
  FaFilter, FaDownload, FaChartBar
} from 'react-icons/fa';

const volunteers = [
  { 
    id: 1, 
    name: 'Priya Sharma', 
    email: 'priya@email.com',
    phone: '+91 98765 43210',
    role: 'Animal Care',
    hours: 120,
    status: 'active',
    joinDate: '2023-11-15',
    rating: 4.8
  },
  { 
    id: 2, 
    name: 'Rajesh Kumar', 
    email: 'rajesh@email.com',
    phone: '+91 87654 32109',
    role: 'Adoption Counselor',
    hours: 85,
    status: 'active',
    joinDate: '2024-01-20',
    rating: 4.5
  },
  { 
    id: 3, 
    name: 'Ananya Singh', 
    email: 'ananya@email.com',
    phone: '+91 76543 21098',
    role: 'Event Coordinator',
    hours: 65,
    status: 'inactive',
    joinDate: '2024-02-10',
    rating: 4.9
  },
  { 
    id: 4, 
    name: 'Vikram Patel', 
    email: 'vikram@email.com',
    phone: '+91 65432 10987',
    role: 'Medical Assistant',
    hours: 95,
    status: 'active',
    joinDate: '2023-12-05',
    rating: 4.7
  },
  { 
    id: 5, 
    name: 'Sneha Reddy', 
    email: 'sneha@email.com',
    phone: '+91 54321 09876',
    role: 'Fundraising',
    hours: 45,
    status: 'pending',
    joinDate: '2024-03-01',
    rating: 4.6
  },
];

const roles = [
  'Animal Care', 'Adoption Counselor', 'Event Coordinator', 
  'Medical Assistant', 'Fundraising', 'Administration', 'Cleaning'
];

export default function AdminVolunteersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = 
      volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || volunteer.role === filterRole;
    const matchesStatus = filterStatus === 'all' || volunteer.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStats = () => {
    const active = volunteers.filter(v => v.status === 'active').length;
    const inactive = volunteers.filter(v => v.status === 'inactive').length;
    const pending = volunteers.filter(v => v.status === 'pending').length;
    const totalHours = volunteers.reduce((sum, v) => sum + v.hours, 0);
    
    return { active, inactive, pending, totalHours };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Volunteer Management</h1>
            <p className="text-gray-600">Manage and coordinate volunteers</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <FaDownload /> Export
            </button>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
              <FaPlus /> Add Volunteer
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-gray-800 mb-2">{volunteers.length}</div>
            <div className="text-gray-600">Total Volunteers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.active}</div>
            <div className="text-gray-600">Active</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">{stats.pending}</div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalHours}+</div>
            <div className="text-gray-600">Total Hours</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search volunteers..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FaFilter /> More
              </button>
            </div>
          </div>
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVolunteers.map((volunteer) => (
            <div key={volunteer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white">
                      <FaUser />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{volunteer.name}</h3>
                      <p className="text-sm text-gray-600">{volunteer.role}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    volunteer.status === 'active' ? 'bg-green-100 text-green-800' :
                    volunteer.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaPhone className="text-gray-400" />
                    <span>{volunteer.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="text-gray-400" />
                    <span>{volunteer.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendar className="text-gray-400" />
                    <span>Joined {new Date(volunteer.joinDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-gray-800 mb-1">{volunteer.hours}</div>
                    <div className="text-sm text-gray-600">Hours</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <FaStar className="text-amber-400" />
                      <span className="text-xl font-bold text-gray-800">{volunteer.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium text-sm">
                    View Details
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <FaEdit />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <FaTrash />
                  </button>
                </div>
              </div>

              {/* Hours Graph */}
              <div className="bg-gray-50 p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Weekly Hours</span>
                  <FaChartBar className="text-gray-400" />
                </div>
                <div className="flex items-end h-12 gap-1">
                  {[12, 8, 10, 6, 14, 9, 11].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-amber-400 to-orange-400 rounded-t"
                      style={{ height: `${(height / 15) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVolunteers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No volunteers found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Top Volunteers */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Volunteers This Month</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="pb-3">Volunteer</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Hours</th>
                  <th className="pb-3">Rating</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {volunteers
                  .sort((a, b) => b.hours - a.hours)
                  .slice(0, 5)
                  .map((volunteer) => (
                    <tr key={volunteer.id} className="border-b border-amber-100 last:border-0">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white">
                            <FaUser />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{volunteer.name}</div>
                            <div className="text-sm text-gray-600">{volunteer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-gray-700">{volunteer.role}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <FaClock className="text-amber-500" />
                          <span className="font-medium">{volunteer.hours} hours</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(volunteer.rating)
                                  ? 'text-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-gray-700">{volunteer.rating}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          volunteer.status === 'active' ? 'bg-green-100 text-green-800' :
                          volunteer.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}