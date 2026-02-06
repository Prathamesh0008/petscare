import { NextRequest, NextResponse } from 'next/server';
import { animals } from '@/lib/animals';

interface RouteProps {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const animal = animals.find(a => a.id === params.id);
  
  if (!animal) {
    return NextResponse.json(
      { error: 'Animal not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ animal });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const animalIndex = animals.findIndex(a => a.id === params.id);
    
    if (animalIndex === -1) {
      return NextResponse.json(
        { error: 'Animal not found' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    
    // Update animal
    const updatedAnimal = {
      ...animals[animalIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    // In a real app, you would update in database here
    // animals[animalIndex] = updatedAnimal;
    
    return NextResponse.json({
      success: true,
      animal: updatedAnimal,
      message: 'Animal updated successfully',
    });
    
  } catch (error) {
    console.error('Error updating animal:', error);
    return NextResponse.json(
      { error: 'Failed to update animal' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const animalIndex = animals.findIndex(a => a.id === params.id);
    
    if (animalIndex === -1) {
      return NextResponse.json(
        { error: 'Animal not found' },
        { status: 404 }
      );
    }
    
    // In a real app, you would delete from database here
    // animals.splice(animalIndex, 1);
    
    return NextResponse.json({
      success: true,
      message: 'Animal deleted successfully',
    });
    
  } catch (error) {
    console.error('Error deleting animal:', error);
    return NextResponse.json(
      { error: 'Failed to delete animal' },
      { status: 500 }
    );
  }
}