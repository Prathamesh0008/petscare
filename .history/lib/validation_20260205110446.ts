import { z } from 'zod';

export const adoptionFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  city: z.string().min(2, 'City is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Invalid pincode'),
  occupation: z.string().min(2, 'Occupation is required'),
  experienceWithPets: z.enum(['yes', 'no']),
  currentPets: z.string().optional(),
  houseType: z.enum(['apartment', 'house', 'villa']),
  hasGarden: z.boolean(),
  hasChildren: z.boolean(),
  childrenAges: z.string().optional(),
  hoursAlone: z.number().min(0).max(24),
  animalId: z.string(),
  animalName: z.string(),
  reasonForAdoption: z.string().min(20, 'Please provide a detailed reason'),
  references: z.string().min(10, 'Please provide references'),
});

export const volunteerFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  age: z.number().min(18, 'Must be at least 18 years old').max(70, 'Maximum age is 70'),
  occupation: z.string().min(2, 'Occupation is required'),
  availability: z.array(z.enum(['weekday-morning', 'weekday-evening', 'weekend'])).min(1, 'Select at least one availability'),
  skills: z.array(z.string()).optional(),
  experience: z.string().min(10, 'Please describe your experience'),
  emergencyContact: z.string().min(10, 'Emergency contact is required'),
  medicalConditions: z.string().optional(),
});

export const donationFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  amount: z.number().min(100, 'Minimum donation is ₹100'),
  frequency: z.enum(['one-time', 'monthly', 'quarterly']),
  message: z.string().optional(),
  anonymous: z.boolean(),
});

export type AdoptionFormValues = z.infer<typeof adoptionFormSchema>;
export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;
export type DonationFormValues = z.infer<typeof donationFormSchema>;    