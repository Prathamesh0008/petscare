import { NextRequest, NextResponse } from 'next/server';
import { animals } from '@/lib/animals';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Filtering
  let filteredAnimals = [...animals];
  
  const type = searchParams.get('type');
  if (type) {
    filteredAnimals = filteredAnimals.filter(animal => animal.type === type);
  }
  
  const status = searchParams.get('status');
  if (status) {
    filteredAnimals = filteredAnimals.filter(animal => animal.status === status);
  }
  
  const breed = searchParams.get('breed');
  if (breed) {
    filteredAnimals = filteredAnimals.filter(animal => 
      animal.breed.toLowerCase().includes(breed.toLowerCase())
    );
  }
  
  const age = searchParams.get('age');
  if (age) {
    filteredAnimals = filteredAnimals.filter(animal => animal.age <= parseInt(age));
  }
  
  const size = searchParams.get('size');
  if (size) {
    filteredAnimals = filteredAnimals.filter(animal => animal.size === size);
  }
  
  const gender = searchParams.get('gender');
  if (gender) {
    filteredAnimals = filteredAnimals.filter(animal => animal.gender === gender);
  }
  
  // Sorting
  const sortBy = searchParams.get('sortBy') || 'name';
  const sortOrder = searchParams.get('sortOrder') || 'asc';
  
  filteredAnimals.sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'age') {
      return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
    } else if (sortBy === 'date') {
      return sortOrder === 'asc' 
        ? new Date(a.dateRescued).getTime() - new Date(b.dateRescued).getTime()
        : new Date(b.dateRescued).getTime() - new Date(a.dateRescued).getTime();
    }
    return 0;
  });
  
  // Pagination
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedAnimals = filteredAnimals.slice(startIndex, endIndex);
  
  return NextResponse.json({
    animals: paginatedAnimals,
    pagination: {
      page,
      limit,
      total: filteredAnimals.length,
      totalPages: Math.ceil(filteredAnimals.length / limit),
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'type', 'breed', 'age', 'gender', 'size'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Create new animal object
    const newAnimal = {
      id: `ANI${Date.now()}`,
      name: body.name,
      type: body.type,
      breed: body.breed,
      age: parseInt(body.age),
      gender: body.gender,
      size: body.size,
      status: body.status || 'available',
      description: body.description || '',
      medicalHistory: body.medicalHistory || [],
      behaviorNotes: body.behaviorNotes || [],
      images: body.images || [],
      adoptionFee: body.adoptionFee || 0,
      dateRescued: body.dateRescued || new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // In a real app, you would save to database here
    // animals.push(newAnimal);
    
    return NextResponse.json(
      { 
        success: true, 
        animal: newAnimal,
        message: 'Animal added successfully' 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error creating animal:', error);
    return NextResponse.json(
      { error: 'Failed to create animal' },
      { status: 500 }
    );
  }
}