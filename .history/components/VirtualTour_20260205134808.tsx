'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause, FaVolumeUp, FaExpand, FaMapMarkerAlt } from 'react-icons/fa';

const tourPoints = [
  {
    id: 1,
    title: 'Entrance & Reception',
    description: 'Welcome area where visitors check-in and get information about the shelter.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&auto=format&fit=crop&q=80',
    hotspots: [
      { x: 30, y: 40, label: 'Information Desk' },
      { x: 70, y: 60, label: 'Waiting Area' },
    ]
  },
  {
    id: 2,
    title: 'Kennel Area - Dogs',
    description: 'Comfortable kennels for our canine friends with indoor and outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&auto=format&fit=crop&q=80',
    hotspots: [
      { x: 20, y: 30, label: 'Play Area' },
      { x: 80, y: 50, label: 'Feeding Station' },
    ]
  },
  {
    id: 3,
    title: 'Cat Sanctuary',
    description: 'Cozy spaces for cats with climbing trees and hiding spots.',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1200&auto=format&fit=crop&q=80',
    hotspots: [
      { x: 40, y: 40, label: 'Climbing Wall' },
      { x: 60, y: 70, label: 'Sun Deck' },
    ]
  },
  {
    id: 4,
    title: 'Medical Center',
    description: 'Fully equipped veterinary clinic for checkups and treatments.',
    image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=1200&auto=format&fit=crop&q=80',
    hotspots: [
      { x: 50, y: 30, label: 'Examination Room' },
      { x: 30, y: 70, label: 'Recovery Area' },
    ]
  },
  {
    id: 5,
    title: 'Outdoor Playground',
    description: 'Large outdoor space for animals to exercise and socialize.',
    image: 'https://images.unsplash.com/photo-1596276020582-8c6b71d715f5?w=1200&auto=format&fit=crop&q=80',
    hotspots: [
      { x: 40, y: 60, label: 'Agility Course' },
      { x: 70, y: 30, label: 'Swimming Pool' },
    ]
  },
];

export default function VirtualTour() {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextPoint = () => {
    setCurrentPoint((prev) => (prev + 1) % tourPoints.length);
  };

  const prevPoint = () => {
    setCurrentPoint((prev) => (prev - 1 + tourPoints.length) % tourPoints.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Auto-advance every 5 seconds
      const interval = setInterval(() => {
        if (isPlaying) {
          nextPoint();
        } else {
          clearInterval(interval);
        }
      }, 5000);
    }
  };

  const currentTourPoint = tourPoints[currentPoint];

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Controls Bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">Virtual Shelter Tour</h3>
          <span className="text-sm bg-amber-500 px-3 py-1 rounded-full">
            {currentPoint + 1} / {tourPoints.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <FaVolumeUp />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            <FaExpand />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {/* Main Tour Viewer */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
            {/* Tour Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${currentTourPoint.image})` }}
            />
            
            {/* Hotspots */}
            {currentTourPoint.hotspots.map((hotspot, index) => (
              <button
                key={index}
                onClick={() => setSelectedHotspot(selectedHotspot === index ? null : index)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  selectedHotspot === index
                    ? 'bg-amber-500 scale-125'
                    : 'bg-white/80 hover:bg-amber-500 hover:scale-110'
                }`}>
                  <FaMapMarkerAlt className={`${
                    selectedHotspot === index ? 'text-white' : 'text-gray-800'
                  }`} />
                </div>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                  selectedHotspot === index ? 'opacity-100' : ''
                }`}>
                  {hotspot.label}
                </div>
              </button>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevPoint}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <FaArrowLeft className="text-gray-800" />
            </button>
            <button
              onClick={nextPoint}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <FaArrowRight className="text-gray-800" />
            </button>
          </div>

          {/* Tour Points Navigation */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {tourPoints.map((point, index) => (
              <button
                key={point.id}
                onClick={() => setCurrentPoint(index)}
                className={`flex-shrink-0 p-3 rounded-lg transition-all ${
                  currentPoint === index
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-medium">{point.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tour Information Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              {currentTourPoint.title}
            </h4>
            <p className="text-gray-600 mb-6">
              {currentTourPoint.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Hotspots</h5>
                <div className="space-y-2">
                  {currentTourPoint.hotspots.map((hotspot, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        selectedHotspot === index
                          ? 'bg-amber-100 border border-amber-300'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedHotspot(index)}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        selectedHotspot === index
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{hotspot.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h5 className="font-semibold text-gray-700 mb-4">Shelter Facts</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Area</span>
                <span className="font-semibold">5,000 sq. ft.</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Capacity</span>
                <span className="font-semibold">100 Animals</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Temperature</span>
                <span className="font-semibold">24°C Controlled</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cleaning</span>
                <span className="font-semibold">3x Daily</span>
              </div>
            </div>
          </div>

          {/* Tour Controls */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h5 className="font-semibold text-gray-700 mb-4">Tour Controls</h5>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={prevPoint}
                className="flex items-center justify-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
              >
                <FaArrowLeft /> Previous
              </button>
              <button
                onClick={nextPoint}
                className="flex items-center justify-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
              >
                Next <FaArrowRight />
              </button>
              <button className="col-span-2 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium">
                Start Guided Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}