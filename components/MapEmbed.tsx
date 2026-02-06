'use client';

import { useState } from 'react';

export default function MapEmbed() {
  const [showDirections, setShowDirections] = useState(false);

  const shelterLocation = {
    lat: 19.0760,
    lng: 72.8777,
    address: 'Sector 17, Vashi, Navi Mumbai, Maharashtra 400703',
  };

  const getDirectionsUrl = () => {
    const destination = encodeURIComponent(shelterLocation.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Visit Our Shelter</h3>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="text-red-600 mr-2">📍</div>
            <div>
              <div className="font-medium">PawHaven Vashi</div>
              <div className="text-gray-600">{shelterLocation.address}</div>
            </div>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="text-blue-600 mr-2">📞</div>
            <div>(022) 2789-4567</div>
          </div>
          
          <div className="flex items-center">
            <div className="text-green-600 mr-2">🕒</div>
            <div>Mon-Sat: 10AM-6PM, Sun: 10AM-4PM</div>
          </div>
        </div>

        {/* Map Container */}
        <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="font-bold">Google Maps</div>
              <div className="text-gray-600">Interactive map would appear here</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setShowDirections(!showDirections)}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {showDirections ? 'Hide' : 'Get'} Directions
          </button>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 py-2 rounded text-center hover:bg-blue-50"
          >
            Open in Maps
          </a>
        </div>

        {showDirections && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2">Directions from Mumbai:</h4>
            <ol className="space-y-2 text-sm">
              <li>1. Take Sion-Panvel Expressway towards Navi Mumbai</li>
              <li>2. Take exit toward Vashi</li>
              <li>3. Continue on Palm Beach Road</li>
              <li>4. Turn left into Sector 17</li>
              <li>5. Look for PawHaven sign on right</li>
            </ol>
          </div>
        )}

        <div className="mt-6">
          <h4 className="font-bold mb-2">Parking Information</h4>
          <div className="text-sm text-gray-600">
            Free parking available in front of shelter. 
            Bus routes: 101, 102, 103 stop nearby.
          </div>
        </div>
      </div>
    </div>
  );
}