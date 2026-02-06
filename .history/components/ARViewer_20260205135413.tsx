'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  FaCamera, FaExpand, FaCompress, FaDownload, 
  FaShare, FaPaw, FaDog, FaCat, FaTimes,
  FaArrowsAlt, FaMousePointer, FaUndo, FaRedo
} from 'react-icons/fa';

const animalModels = [
  {
    id: 1,
    name: 'Max',
    type: 'dog',
    breed: 'Indian Pariah',
    size: 'Medium (15kg)',
    description: 'Perfect size for apartment living. See how Max fits in your space.',
    modelColor: '#f59e0b',
    scale: 1.0,
  },
  {
    id: 2,
    name: 'Luna',
    type: 'cat',
    breed: 'Domestic Shorthair',
    size: 'Small (4kg)',
    description: 'Compact size ideal for small spaces.',
    modelColor: '#8b5cf6',
    scale: 0.8,
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'dog',
    breed: 'Labrador Mix',
    size: 'Large (25kg)',
    description: 'See if Rocky has enough space to play in your home.',
    modelColor: '#3b82f6',
    scale: 1.3,
  },
  {
    id: 4,
    name: 'Mittens',
    type: 'cat',
    breed: 'Siamese Mix',
    size: 'Medium (5kg)',
    description: 'Elegant size for any living space.',
    modelColor: '#ec4899',
    scale: 0.9,
  },
];

export default function ARViewer() {
  const [selectedAnimal, setSelectedAnimal] = useState(0);
  const [isArActive, setIsArActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [mode, setMode] = useState<'view' | 'measure'>('view');
  const [showInstructions, setShowInstructions] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentAnimal = animalModels[selectedAnimal];

  // Simulate AR scene rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid floor
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animal model (simplified)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = 100 * scale * currentAnimal.scale;

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + size/2, size/2, size/4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Animal body
      ctx.fillStyle = currentAnimal.modelColor;
      ctx.beginPath();
      if (currentAnimal.type === 'dog') {
        // Dog shape
        ctx.ellipse(centerX, centerY, size/2, size/2, 0, 0, Math.PI * 2);
        // Ears
        ctx.ellipse(centerX - size/3, centerY - size/2, size/6, size/4, 0, 0, Math.PI * 2);
        ctx.ellipse(centerX + size/3, centerY - size/2, size/6, size/4, 0, 0, Math.PI * 2);
      } else {
        // Cat shape
        ctx.ellipse(centerX, centerY, size/2.5, size/2, 0, 0, Math.PI * 2);
        // Ears
        ctx.moveTo(centerX - size/2.5, centerY - size/2);
        ctx.lineTo(centerX - size/4, centerY - size/3);
        ctx.lineTo(centerX - size/3, centerY - size/2);
        
        ctx.moveTo(centerX + size/2.5, centerY - size/2);
        ctx.lineTo(centerX + size/4, centerY - size/3);
        ctx.lineTo(centerX + size/3, centerY - size/2);
      }
      ctx.fill();

      // Eyes
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(centerX - size/4, centerY - size/8, size/10, 0, Math.PI * 2);
      ctx.arc(centerX + size/4, centerY - size/8, size/10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(centerX - size/4, centerY - size/8, size/20, 0, Math.PI * 2);
      ctx.arc(centerX + size/4, centerY - size/8, size/20, 0, Math.PI * 2);
      ctx.fill();

      // Nose
      ctx.fillStyle = currentAnimal.type === 'dog' ? '#000' : '#f97316';
      ctx.beginPath();
      ctx.arc(centerX, centerY + size/10, size/15, 0, Math.PI * 2);
      ctx.fill();
    };

    render();
  }, [selectedAnimal, scale, currentAnimal]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button pressed
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setRotation({
        x: (y / rect.height) * 180 - 90,
        y: (x / rect.width) * 360 - 180,
      });
    }
  };

  const handleCapture = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `pawhaven-ar-${currentAnimal.name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const toggleArMode = () => {
    setIsArActive(!isArActive);
    if (!isArActive) {
      // Simulate AR activation
      alert('Point your camera at a flat surface to place the animal in your space.');
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
            <FaPaw />
          </div>
          <div>
            <h3 className="text-xl font-bold">AR Animal Viewer</h3>
            <div className="text-sm text-gray-300">See animals in your space</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isArActive && (
            <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-medium">
              AR Active
            </span>
          )}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          {isFullscreen && (
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {/* AR Viewer */}
        <div className="lg:col-span-2">
          <div 
            ref={containerRef}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden aspect-square"
          >
            <canvas
              ref={canvasRef}
              width={800}
              height={800}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              onMouseMove={handleMouseMove}
              onMouseDown={() => {}}
            />

            {/* Controls Overlay */}
            <div className="absolute top-4 left-4 flex gap-2">
              <button
                onClick={toggleArMode}
                className={`p-3 rounded-lg backdrop-blur-sm ${
                  isArActive
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {isArActive ? 'Exit AR' : 'Start AR'}
              </button>
              <button
                onClick={() => setMode(mode === 'view' ? 'measure' : 'view')}
                className={`p-3 rounded-lg backdrop-blur-sm ${
                  mode === 'measure'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {mode === 'measure' ? <FaMousePointer /> : <FaArrowsAlt />}
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button
                onClick={() => setScale(s => Math.min(s + 0.1, 2))}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20"
              >
                +
              </button>
              <div className="text-center text-white text-sm">
                {Math.round(scale * 100)}%
              </div>
              <button
                onClick={() => setScale(s => Math.max(s - 0.1, 0.5))}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20"
              >
                -
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={handleCapture}
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20"
                title="Capture"
              >
                <FaCamera />
              </button>
              <button
                onClick={() => setRotation({ x: 0, y: 0 })}
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20"
                title="Reset View"
              >
                <FaUndo />
              </button>
              <button
                onClick={() => setScale(1)}
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20"
                title="Reset Zoom"
              >
                <FaRedo />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20" title="Share">
                <FaShare />
              </button>
            </div>

            {/* Instructions */}
            {showInstructions && (
              <div className="absolute bottom-4 left-4 max-w-xs bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">How to use:</h4>
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="text-white/70 hover:text-white"
                  >
                    <FaTimes />
                  </button>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Drag to rotate the animal</li>
                  <li>• Use +/- to zoom in/out</li>
                  <li>• Click "Start AR" to view in your space</li>
                  <li>• Click camera to capture image</li>
                </ul>
              </div>
            )}
          </div>

          {/* Animal Selector */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {animalModels.map((animal, index) => (
              <button
                key={animal.id}
                onClick={() => setSelectedAnimal(index)}
                className={`flex-shrink-0 p-3 rounded-lg transition-all ${
                  selectedAnimal === index
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {animal.type === 'dog' ? <FaDog /> : <FaCat />}
                  <span className="font-medium">{animal.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Animal Details & Controls */}
        <div className="space-y-6">
          {/* Current Animal Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: currentAnimal.modelColor }}>
                {currentAnimal.type === 'dog' ? <FaDog /> : <FaCat />}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">{currentAnimal.name}</h4>
                <p className="text-gray-600">{currentAnimal.breed}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">Size in AR</div>
                <div className="text-lg font-semibold text-gray-800">{currentAnimal.size}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Description</div>
                <p className="text-gray-700">{currentAnimal.description}</p>
              </div>
            </div>
          </div>

          {/* Size Comparison */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h5 className="font-semibold text-gray-700 mb-4">Size Comparison</h5>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Shoe (US 9)</span>
                  <span className="font-medium">28cm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{currentAnimal.name}</span>
                  <span className="font-medium">{currentAnimal.size}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full"
                    style={{ 
                      width: currentAnimal.type === 'dog' ? '60%' : '40%',
                      backgroundColor: currentAnimal.modelColor 
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Average Human</span>
                  <span className="font-medium">170cm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-600 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* AR Features */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h5 className="font-semibold text-gray-700 mb-4">AR Features</h5>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={toggleArMode}
                className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                  isArActive
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="text-xl mb-2">
                  {isArActive ? '📱' : '👁️'}
                </div>
                <span className="text-sm font-medium">
                  {isArActive ? 'AR Active' : 'View in AR'}
                </span>
              </button>
              <button
                onClick={() => setMode('measure')}
                className={`p-3 rounded-lg flex flex-col items-center justify-center ${
                  mode === 'measure'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="text-xl mb-2">📐</div>
                <span className="text-sm font-medium">Measure</span>
              </button>
              <button
                onClick={handleCapture}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center"
              >
                <div className="text-xl mb-2">📸</div>
                <span className="text-sm font-medium">Capture</span>
              </button>
              <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center">
                <div className="text-xl mb-2">🔄</div>
                <span className="text-sm font-medium">Compare</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-white">
            <h5 className="font-semibold mb-4">Ready to meet {currentAnimal.name}?</h5>
            <div className="space-y-3">
              <button className="w-full bg-white text-amber-600 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Schedule Virtual Visit
              </button>
              <button className="w-full bg-transparent border-2 border-white py-3 rounded-lg font-semibold hover:bg-white/10">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}