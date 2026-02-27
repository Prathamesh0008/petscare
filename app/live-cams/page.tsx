// app/live-cams/page.tsx
'use client';

import { useState } from 'react';
import { FaVideo, FaPaw, FaDog, FaCat, FaExpand, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function LiveCamsPage() {
  const [muted, setMuted] = useState(true);
  const [selectedCam, setSelectedCam] = useState('dog-park');

  const cameras = [
    { id: 'dog-park', name: 'Dog Park', icon: <FaDog />, viewers: 234, animal: 'dogs' },
    { id: 'cat-room', name: 'Cat Lounge', icon: <FaCat />, viewers: 189, animal: 'cats' },
    { id: 'puppy-room', name: 'Puppy Playpen', icon: <FaPaw />, viewers: 456, animal: 'puppies' },
    { id: 'kitten-room', name: 'Kitten Corner', icon: <FaCat />, viewers: 312, animal: 'kittens' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f0] to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b87d5e]/10 rounded-full text-[#b87d5e] text-sm font-medium mb-4">
            <FaVideo />
            Live 24/7 Streaming
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a3e] mb-4">
            Watch Our Animals <span className="text-[#b87d5e]">Live</span>
          </h1>
          <p className="text-gray-600">
            Get to know our animals through live cameras before you visit
          </p>
        </div>

        {/* Main Cam View */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Cam Controls */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">LIVE</span>
                <span className="text-gray-400 text-sm ml-2">
                  {cameras.find(c => c.id === selectedCam)?.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMuted(!muted)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <FaExpand />
                </button>
              </div>
            </div>

            {/* Video Placeholder - Replace with actual video stream */}
            <div className="aspect-video bg-gray-800 relative">
              <img
                src={`https://images.unsplash.com/photo-${
                  selectedCam === 'dog-park' ? '1548199973-03cce0bbc87b' :
                  selectedCam === 'cat-room' ? '1574158622682-e40e69881006' :
                  selectedCam === 'puppy-room' ? '1543466835-00a7907e9de1' :
                  '1511044098243-b547b9ab2f0b'
                }?w=1200&auto=format&fit=crop&q=80`}
                alt="Live cam feed"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  👁️ {cameras.find(c => c.id === selectedCam)?.viewers} watching
                </div>
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Camera Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {cameras.map(cam => (
              <button
                key={cam.id}
                onClick={() => setSelectedCam(cam.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedCam === cam.id
                    ? 'border-[#b87d5e] bg-[#b87d5e]/5'
                    : 'border-gray-200 hover:border-[#b87d5e] bg-white'
                }`}
              >
                <div className={`text-2xl mb-2 ${
                  selectedCam === cam.id ? 'text-[#b87d5e]' : 'text-gray-600'
                }`}>
                  {cam.icon}
                </div>
                <div className={`font-medium text-sm ${
                  selectedCam === cam.id ? 'text-[#b87d5e]' : 'text-gray-700'
                }`}>
                  {cam.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  👁️ {cam.viewers} watching
                </div>
              </button>
            ))}
          </div>

          {/* Schedule */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2c4a3e] mb-4">Feeding Schedule</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Morning</div>
                <div className="font-medium text-[#2c4a3e]">8:00 AM - 9:00 AM</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Afternoon</div>
                <div className="font-medium text-[#2c4a3e]">12:00 PM - 1:00 PM</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500">Evening</div>
                <div className="font-medium text-[#2c4a3e]">5:00 PM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}