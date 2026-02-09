/* ---------- Animal domain ---------- */
// import type { AnimalType } from './index';
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
/* ---------- Testimonial domain ---------- */

export interface Testimonial {
  id: string;

  adopterName: string;
  animalName: string;
  animalType: 'dog' | 'cat';
 size?: 'Small' | 'Medium' | 'Large';
  quote: string;

  rating?: 1 | 2 | 3 | 4 | 5;
  adopterImage?: string;
}
