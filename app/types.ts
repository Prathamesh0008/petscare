// petscare/types.ts
export interface Animal {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  description: string;
  personality: string[];
  imageUrls: string[];
  isUrgent: boolean;
  isAdopted: boolean;
}