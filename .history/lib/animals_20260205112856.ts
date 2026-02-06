import { Animal } from '@/types';
import { getAnimalImage } from './utils';

export const animals: Animal[] = [
  {
    id: '1',
    name: 'Max',
    type: 'dog',
    breed: 'Indian Pariah',
    age: '2 years',
    gender: 'male',
    description: 'A friendly and energetic young dog who loves playing fetch',
    story: 'Max was found wandering the streets of Vashi, malnourished and scared. After months of care, he has transformed into a loving companion.',
    imageUrls: [
      getAnimalImage(0),
      'https://images.unsplash.com/photo-1558280391-5d61d1c1ee30?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: true,
    isAdopted: false,
    healthStatus: 'good',
    vaccinationStatus: 'fully',
    specialNeeds: 'Needs regular exercise',
    arrivalDate: '2024-01-15',
    personality: ['Friendly', 'Playful', 'Energetic', 'Loyal'],
    adoptionFee: 1500,
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    breed: 'Domestic Shorthair',
    age: '1.5 years',
    gender: 'female',
    description: 'A gentle and affectionate cat who loves cuddles',
    story: 'Luna was rescued from a construction site where she was hiding from the rain. She is now ready for a quiet home.',
    imageUrls: [
      getAnimalImage(1),
      'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: false,
    isAdopted: false,
    healthStatus: 'excellent',
    vaccinationStatus: 'fully',
    arrivalDate: '2024-02-20',
    personality: ['Gentle', 'Affectionate', 'Calm', 'Curious'],
    adoptionFee: 1200,
  },
  {
    id: '3',
    name: 'Rocky',
    type: 'dog',
    breed: 'Labrador Mix',
    age: '4 months',
    gender: 'male',
    description: 'An adorable puppy full of energy and curiosity',
    story: 'Rocky was found abandoned in a cardboard box. He is now a happy, healthy puppy looking for his forever family.',
    imageUrls: [
      getAnimalImage(2),
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: false,
    isAdopted: false,
    healthStatus: 'excellent',
    vaccinationStatus: 'partially',
    arrivalDate: '2024-03-10',
    personality: ['Playful', 'Curious', 'Energetic', 'Friendly'],
    adoptionFee: 2000,
  },
  {
    id: '4',
    name: 'Mittens',
    type: 'cat',
    breed: 'Siamese Mix',
    age: '3 years',
    gender: 'female',
    description: 'A beautiful cat with striking blue eyes and a calm demeanor',
    story: 'Mittens was surrendered by her previous owners who could no longer care for her. She is well-behaved and litter-trained.',
    imageUrls: [
      getAnimalImage(3),
      'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: true,
    isAdopted: false,
    healthStatus: 'good',
    vaccinationStatus: 'fully',
    specialNeeds: 'Prefers quiet environment',
    arrivalDate: '2024-01-05',
    personality: ['Calm', 'Independent', 'Gentle', 'Intelligent'],
    adoptionFee: 1800,
  },
  {
    id: '5',
    name: 'Bruno',
    type: 'dog',
    breed: 'German Shepherd Mix',
    age: '5 years',
    gender: 'male',
    description: 'A loyal and protective companion who forms strong bonds',
    story: 'Bruno was rescued from an abusive situation. With patience and love, he has learned to trust humans again.',
    imageUrls: [
      getAnimalImage(4),
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: false,
    isAdopted: false,
    healthStatus: 'needs-care',
    vaccinationStatus: 'partially',
    specialNeeds: 'Needs experienced owner',
    arrivalDate: '2023-11-30',
    personality: ['Loyal', 'Protective', 'Intelligent', 'Calm'],
    adoptionFee: 1000,
  },
  {
    id: '6',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Persian Mix',
    age: '2 years',
    gender: 'male',
    description: 'A fluffy and regal cat who enjoys being the center of attention',
    story: 'Whiskers was found as a stray with matted fur. After grooming and care, he has become a handsome and confident cat.',
    imageUrls: [
      getAnimalImage(5),
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60',
    ],
    isUrgent: false,
    isAdopted: false,
    healthStatus: 'excellent',
    vaccinationStatus: 'fully',
    arrivalDate: '2024-02-15',
    personality: ['Affectionate', 'Playful', 'Curious', 'Independent'],
    adoptionFee: 2200,
  },
];

export function getAnimalById(id: string): Animal | undefined {
  return animals.find(animal => animal.id === id);
}

export function getAnimalsByType(type: 'dog' | 'cat' | 'all'): Animal[] {
  if (type === 'all') return animals;
  return animals.filter(animal => animal.type === type);
}

export function getUrgentAnimals(): Animal[] {
  return animals.filter(animal => animal.isUrgent && !animal.isAdopted);
}

export function getAvailableAnimals(): Animal[] {
  return animals.filter(animal => !animal.isAdopted);
}