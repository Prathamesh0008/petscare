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
