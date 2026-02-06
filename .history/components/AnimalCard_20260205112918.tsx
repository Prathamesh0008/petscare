import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaPaw, FaVenusMars, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';
import { Animal } from '@/types';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${animal.isUrgent ? 'border-2 border-red-500' : ''}`}>
      {animal.isUrgent && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse">
          <FaHeart /> URGENT HOME NEEDED
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <Image
          src={animal.imageUrls[0]}
          alt={animal.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
          <FaPaw className={`text-2xl ${animal.type === 'dog' ? 'text-amber-600' : 'text-gray-600'}`} />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-800">{animal.name}</h3>
          <div className="flex gap-2">
            <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
            </span>
            {animal.healthStatus === 'needs-care' && (
              <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full flex items-center gap-1">
                <FaStethoscope /> Needs Care
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{animal.breed}</p>
        
        <div className="flex items-center gap-4 text-gray-700 mb-4">
          <div className="flex items-center gap-2">
            <FaVenusMars className={animal.gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
            <span className="capitalize">{animal.gender}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-500" />
            <span>{animal.age}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{animal.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {animal.personality.slice(0, 3).map((trait) => (
            <span key={trait} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {trait}
            </span>
          ))}
        </div>
        
        <Link 
          href={`/animals/${animal.id}`}
          className="block w-full btn-primary text-center"
        >
          Meet {animal.name}
        </Link>
      </div>
    </div>
  );
}