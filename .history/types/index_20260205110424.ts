export interface Animal {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  description: string;
  story: string;
  imageUrls: string[];
  isUrgent: boolean;
  isAdopted: boolean;
  healthStatus: 'excellent' | 'good' | 'needs-care';
  vaccinationStatus: 'fully' | 'partially' | 'none';
  specialNeeds?: string;
  arrivalDate: string;
  personality: string[];
  adoptionFee?: number;
}

export interface AdoptionFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  occupation: string;
  experienceWithPets: 'yes' | 'no';
  currentPets: string;
  houseType: 'apartment' | 'house' | 'villa';
  hasGarden: boolean;
  hasChildren: boolean;
  childrenAges?: string;
  hoursAlone: number;
  animalId: string;
  animalName: string;
  reasonForAdoption: string;
  references: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  occupation: string;
  availability: ('weekday-morning' | 'weekday-evening' | 'weekend')[];
  skills: string[];
  experience: string;
  emergencyContact: string;
  medicalConditions?: string;
}

export interface DonationFormData {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  frequency: 'one-time' | 'monthly' | 'quarterly';
  message?: string;
  anonymous: boolean;
}

export interface Testimonial {
  id: string;
  adopterName: string;
  animalName: string;
  animalType: string;
  quote: string;
  date: string;
  imageUrl: string;
  rating: number;
}