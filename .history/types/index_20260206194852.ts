/* ---------- Animal domain ---------- */

export type AnimalType = 'dog' | 'cat';

export type HealthStatus =
  | 'excellent'
  | 'good'
  | 'needs-care';

export type VaccinationStatus =
  | 'fully'
  | 'partially'
  | 'none';

export interface Animal {
  id: string;
  name: string;

  type: AnimalType;
  breed: string;

  age: string;
  gender: 'male' | 'female';

  description: string;
  story: string;

  imageUrls: string[];

  isUrgent: boolean;
  isAdopted: boolean;

  healthStatus: HealthStatus;
  vaccinationStatus: VaccinationStatus;

  specialNeeds?: string;
  arrivalDate: string;
  personality: string[];

  adoptionFee: number;
}

/* ---------- Testimonial domain ---------- */

export interface Testimonial {
  id: string;
  name: string;
  role?: string;            // e.g. "Adopter", "Volunteer"
  message: string;

  rating: number;           // 1–5
  image?: string;           // avatar image (optional)
  date?: string;            // ISO or readable date
}

 // if split, otherwise ignore

/* ---------- Testimonial domain ---------- */

export interface Testimonial {
  id: string;

  adopterName: string;
  animalName: string;
  animalType: 'dog' | 'cat';

  quote: string;

  rating?: 1 | 2 | 3 | 4 | 5;
  adopterImage?: string; // avatar image (optional)
}
