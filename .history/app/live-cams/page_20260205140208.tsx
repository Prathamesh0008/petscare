// app/live-cams/page.tsx
'use client';

import LiveStats from '@/components/LiveStats';
import { useState } from 'react';

export default function LiveCamsPage() {
  const [activeCam, setActiveCam] = useState('playroom');

  const cameras = [
    { id: 'playroom', name: 'Play Room', description: 'Main play area' },
    { id: 'kennel', name: 'Kennel Area', description: 'Resting kennels' },
    { id: 'outdoor', name: 'Outdoor Yard', description: 'Sunny play yard' },
    { id: 'kittens', name: 'Kitten Corner', description: 'Kitten nursery' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Live Animal Cams</h1>
      <p className="text-gray-600 mb-8">Watch our animals in real-time from anywhere in the world.</p>
      
      <div className="mb-8">
        <LiveStats />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-4xl mb-4">📹</div>
                <div className="text-white">Live Stream: {cameras.find(c => c.id === activeCam)?.name}</div>
                <div className="text-gray-400 mt-2">Streaming live from our shelter</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Camera Feeds</h3>
          <div className="space-y-4">
            {cameras.map(cam => (
              <button
                key={cam.id}
                onClick={() => setActiveCam(cam.id)}
                className={`w-full p-4 rounded-lg text-left ${activeCam === cam.id ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                <div className="font-bold">{cam.name}</div>
                <div className="text-sm opacity-80">{cam.description}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-bold mb-2">📢 Adoption Events</h4>
            <p className="text-sm">Virtual adoption interviews every Friday at 2 PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}