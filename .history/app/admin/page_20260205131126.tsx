'use client';

import { useState, useEffect } from 'react';
import { 
  FaUsers, FaHeart, FaPaw, FaRupeeSign, FaChartLine, 
  FaCalendarAlt, FaStethoscope, FaHome, FaExclamationTriangle,
  FaArrowUp, FaArrowDown, FaCheckCircle, FaClock
} from 'react-icons/fa';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalAnimals: 156,
    adoptedThisMonth: 24,
    pendingAdoptions: 12,
    activeVolunteers: 45,
    totalDonations: 1250000,
    monthlyExpenses: 85000,
    urgentCases: 7,
    availableCapacity: 32
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Adoption Approved', user: 'Rajesh Kumar', animal: 'Max', time: '2 hours ago', status: 'completed' },
    { id: 2, action: 'New Volunteer', user: 'Priya Sharma', role: 'Animal Care', time: '5 hours ago', status: 'pending' },
    { id: 3, action: 'Donation Received', user: 'Anonymous', amount: '₹5,000', time: '1 day ago', status: 'completed' },
    { id: 4, action: 'Medical Treatment', animal: 'Luna', treatment: 'Vaccination', time: '2 days ago', status: 'completed' },
    { id: 5, action: 'Adoption Application', user: 'Ananya Singh', animal: 'Rocky', time: '3 days ago', status: 'pending' },
  ]);

  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    adoptions: [15, 20, 18, 25, 22, 24],
    donations: [85000, 92000, 78000, 105000, 98000, 112000],
    expenses: [72000, 68000, 75000, 82000, 79000, 85000]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, Shelter Manager</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Last updated</p>
                <p className="font-medium">Just now</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                AM
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: 'Total Animals', 
              value: stats.totalAnimals, 
              icon: <FaPaw />, 
              color: 'from-blue-500 to-cyan-500',
              change: '+5 this week',
              trend: 'up'
            },
            { 
              title: 'Adopted This Month', 
              value: stats.adoptedThisMonth, 
              icon: <FaHome />, 
              color: 'from-green-500 to-emerald-500',
              change: '+3 from last month',
              trend: 'up'
            },
            { 
              title: 'Active Volunteers', 
              value: stats.activeVolunteers, 
              icon: <FaUsers />, 
              color: 'from-purple-500 to-pink-500',
              change: '+2 new volunteers',
              trend: 'up'
            },
            { 
              title: 'Urgent Cases', 
              value: stats.urgentCases, 
              icon: <FaExclamationTriangle />, 
              color: 'from-red-500 to-rose-500',
              change: 'Need attention',
              trend: 'critical'
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? <FaArrowUp /> : <FaExclamationTriangle />}
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Financial Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Financial Overview</h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800 mb-1">₹{stats.totalDonations.toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">Total Donations</div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800 mb-1">₹{stats.monthlyExpenses.toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">Monthly Expenses</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800 mb-1">₹{(stats.totalDonations - stats.monthlyExpenses).toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">Net Balance</div>
                </div>
              </div>
              {/* Simple Chart */}
              <div className="h-64 bg-gray-50 rounded-xl p-4">
                <div className="flex items-end h-40 gap-2 mb-4">
                  {chartData.adoptions.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t-lg"
                        style={{ height: `${(value / 30) * 100}%` }}
                      />
                      <div className="text-xs text-gray-600 mt-2">{chartData.labels[index]}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-gray-600">Monthly Adoptions</div>
              </div>
            </div>

            {/* Capacity & Resources */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Shelter Capacity</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Kennel Occupancy</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Medical Supplies</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Food Inventory</span>
                    <span className="font-bold">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {activity.status === 'completed' ? <FaCheckCircle /> : <FaClock />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{activity.action}</div>
                      <div className="text-sm text-gray-600">
                        {activity.user && <span>{activity.user} • </span>}
                        {activity.animal && <span>{activity.animal} • </span>}
                        {activity.amount && <span>{activity.amount} • </span>}
                        {activity.treatment && <span>{activity.treatment} • </span>}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl text-center transition-colors">
                  <FaPaw className="text-xl mb-2 mx-auto" />
                  <span className="text-sm">Add Animal</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl text-center transition-colors">
                  <FaUsers className="text-xl mb-2 mx-auto" />
                  <span className="text-sm">Manage Staff</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl text-center transition-colors">
                  <FaRupeeSign className="text-xl mb-2 mx-auto" />
                  <span className="text-sm">Add Donation</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl text-center transition-colors">
                  <FaStethoscope className="text-xl mb-2 mx-auto" />
                  <span className="text-sm">Medical Log</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <FaCalendarAlt className="text-blue-500" />
                  <div>
                    <div className="font-medium">Adoption Drive</div>
                    <div className="text-sm text-gray-600">Mar 15 • 10 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <FaCalendarAlt className="text-green-500" />
                  <div>
                    <div className="font-medium">Volunteer Training</div>
                    <div className="text-sm text-gray-600">Mar 16 • 11 AM</div>
                  </div>
                </div>
                <div className="flex itemsCenter gap-3 p-3 bg-purple-50 rounded-lg">
                  <FaCalendarAlt className="text-purple-500" />
                  <div>
                    <div className="font-medium">Fundraiser Meeting</div>
                    <div className="text-sm text-gray-600">Mar 18 • 2 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}