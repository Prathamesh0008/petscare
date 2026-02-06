import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface Animal {
  id: string;
  name: string;
  type: string;
}

const animals: Animal[] = [
  { id: '1', name: 'Buddy', type: 'Dog' },
  { id: '2', name: 'Mittens', type: 'Cat' },
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await context.params;

  const animal = animals.find(a => a.id === id);

  if (!animal) {
    return NextResponse.json(
      { error: 'Animal not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ animal });
}
