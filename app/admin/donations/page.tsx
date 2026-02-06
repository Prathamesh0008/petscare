'use client';

import { useState } from 'react';
import { 
  FaSearch, FaFilter, FaDownload, FaRupeeSign, 
  FaUser, FaCalendarAlt, FaCheckCircle, FaClock,
  FaChartLine, FaReceipt, FaPrint, FaEye
} from 'react-icons/fa';

const donations = [
  { 
    id: 1, 
    donor: 'Rajesh Kumar', 
    amount: 5000, 
    type: 'one-time',
    date: '2024-03-12', 
    status: 'completed',
    paymentMethod: 'UPI',
    receipt: 'RC-2024-001'
  },
  { 
    id: 2, 
    donor: 'Anonymous', 
    amount: 10000, 
    type: 'monthly',
    date: '2024-03-11', 
    status: 'completed',
    paymentMethod: 'Bank Transfer',
    receipt: 'RC-2024-002'
  },
  { 
    id: 3, 
    donor: 'TechCorp India', 
    amount: 50000, 
    type: 'corporate',
    date: '2024-03-10', 
    status: 'completed',
    paymentMethod: 'Cheque',
    receipt: 'RC-2024-003'
  },
  { 
    id: 4, 
    donor: 'Priya Sharma', 
    amount: 2500, 
    type: 'one-time',
    date: '2024-03-09', 
    status: 'pending',
    paymentMethod: 'Credit Card',
    receipt: 'RC-2024-004'
  },
  { 
    id: 5, 
    donor: 'Sunil Patel', 
    amount: 1000, 
    type: 'monthly',
    date: '2024-03-08', 
    status: 'completed',
    paymentMethod: 'UPI',
    receipt: 'RC-2024-005'
  },
  { 
    id: 6, 
    donor: 'Green Energy Ltd.', 
    amount: 75000, 
    type: 'corporate',
    date: '2024-03-07', 
    status: 'completed',
    paymentMethod: 'Bank Transfer',
    receipt: 'RC-2024-006'
  },
];

const donationTypes = ['one-time', 'monthly', 'corporate', 'sponsorship'];
const paymentMethods = ['UPI', 'Credit Card', 'Debit Card', 'Bank Transfer', 'Cheque', 'Cash'];

export default function AdminDonationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = 
      donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.receipt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || donation.type === filterType;
    const matchesStatus = filterStatus === 'all' || donation.status === filterStatus;
    
    // Date filtering (simplified)
    const donationDate = new Date(donation.date);
    const now = new Date();
    let matchesDate = true;
    
    if (dateRange === 'today') {
      matchesDate = donationDate.toDateString() === now.toDateString();
    } else if (dateRange === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      matchesDate = donationDate >= weekAgo;
    } else if (dateRange === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      matchesDate = donationDate >= monthAgo;
    }
    
    return matchesSearch && matchesType && matchesStatus && matchesDate;
  });

  const getStats = () => {
    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
    const completed = donations.filter(d => d.status === 'completed').length;
    const pending = donations.filter(d => d.status === 'pending').length;
    const monthlyRecurring = donations
      .filter(d => d.type === 'monthly' && d.status === 'completed')
      .reduce((sum, d) => sum + d.amount, 0);
    
    return { totalAmount, completed, pending, monthlyRecurring };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Donation Management</h1>
            <p className="text-gray-600">Track and manage all donations</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <FaDownload /> Export Report
            </button>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
              <FaRupeeSign /> Add Donation
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-gray-800 mb-2">₹{stats.totalAmount.toLocaleString()}</div>
            <div className="text-gray-600">Total Donations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.completed}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">{stats.pending}</div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹{stats.monthlyRecurring.toLocaleString()}</div>
            <div className="text-gray-600">Monthly Recurring</div>
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
                placeholder="Search by donor name or receipt number..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                {donationTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FaFilter /> More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Donations Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Donor</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Amount</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Type</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Date</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Status</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Payment</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Receipt</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white">
                          <FaUser />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{donation.donor}</div>
                          <div className="text-sm text-gray-600">ID: {donation.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-xl font-bold text-gray-800">₹{donation.amount.toLocaleString()}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        donation.type === 'corporate' ? 'bg-purple-100 text-purple-800' :
                        donation.type === 'monthly' ? 'bg-green-100 text-green-800' :
                        donation.type === 'sponsorship' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {new Date(donation.date).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {donation.status === 'completed' ? (
                          <FaCheckCircle className="text-green-500" />
                        ) : (
                          <FaClock className="text-amber-500" />
                        )}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          donation.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{donation.paymentMethod}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-gray-800">{donation.receipt}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="View">
                          <FaEye />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="Receipt">
                          <FaReceipt />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg" title="Print">
                          <FaPrint />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Trend Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Donation Trends</h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 flex items-end gap-2">
              {[45000, 52000, 38000, 61000, 49000, 72000].map((amount, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-amber-400 to-orange-400 rounded-t-lg"
                    style={{ height: `${(amount / 80000) * 100}%` }}
                  />
                  <div className="text-xs text-gray-600 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                  </div>
                  <div className="text-xs font-medium text-gray-800">₹{(amount/1000).toFixed(0)}k</div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Types Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Donation Types Distribution</h3>
            <div className="space-y-4">
              {[
                { type: 'One-time', amount: 125000, percentage: 45, color: 'from-amber-400 to-amber-500' },
                { type: 'Monthly', amount: 85000, percentage: 30, color: 'from-green-400 to-green-500' },
                { type: 'Corporate', amount: 50000, percentage: 18, color: 'from-blue-400 to-blue-500' },
                { type: 'Sponsorship', amount: 20000, percentage: 7, color: 'from-purple-400 to-purple-500' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{item.type}</span>
                    <span className="font-medium">₹{item.amount.toLocaleString()} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Large Donations */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Large Donations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donations
              .filter(d => d.amount >= 10000)
              .slice(0, 3)
              .map((donation) => (
                <div key={donation.id} className="bg-white rounded-xl p-6 shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-gray-800">₹{donation.amount.toLocaleString()}</div>
                    <FaRupeeSign className="text-amber-500 text-2xl" />
                  </div>
                  <div className="font-medium text-gray-800 mb-2">{donation.donor}</div>
                  <div className="text-sm text-gray-600 mb-4">{donation.type.charAt(0).toUpperCase() + donation.type.slice(1)} Donation</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{new Date(donation.date).toLocaleDateString('en-IN')}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      donation.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {donation.status}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}