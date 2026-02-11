//petscare\types\animal.ts

export interface Animal {
  id: string;
  name: string;
  type: string;
  description?: string;
  images?: string[];
  size: 'Medium',
}
