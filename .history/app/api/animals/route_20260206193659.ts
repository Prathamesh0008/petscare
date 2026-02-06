import { NextRequest, NextResponse } from 'next/server';
import { animals } from '@/lib/animals';
import { Animal } from '@/types';

export const runtime = 'nodejs';

/* ---------- Derived status ---------- */

type DerivedStatus = 'available' | 'urgent' | 'adopted';

function getAnimalStatus(animal: Animal): DerivedStatus {
  if (animal.isAdopted) return 'adopted';
  if (animal.isUrgent) return 'urgent';
  return 'available';
}

/* ---------- GET /api/animals ---------- */

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);

  let filteredAnimals = [...animals];

  // ✅ status filter (derived)
  const status = searchParams.get('status') as DerivedStatus | null;
  if (status) {
    filteredAnimals = filteredAnimals.filter(
      animal => getAnimalStatus(animal) === status
    );
  }

  // breed filter
  const breed = searchParams.get('breed');
  if (breed) {
    filteredAnimals = filteredAnimals.filter(
      animal =>
        animal.breed.toLowerCase() === breed.toLowerCase()
    );
  }

  // type filter
  const type = searchParams.get('type');
  if (type && (type === 'dog' || type === 'cat')) {
    filteredAnimals = filteredAnimals.filter(
      animal => animal.type === type
    );
  }

  return NextResponse.json({
    count: filteredAnimals.length,
    animals: filteredAnimals,
  });
}
