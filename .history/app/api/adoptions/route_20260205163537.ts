import { NextRequest, NextResponse } from 'next/server';

// Mock database
let adoptionApplications: any[] = [];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');
  const userId = searchParams.get('userId');
  
  let filtered = adoptionApplications;
  
  if (status) {
    filtered = filtered.filter(app => app.status === status);
  }
  
  if (userId) {
    filtered = filtered.filter(app => app.userId === userId);
  }
  
  return NextResponse.json({
    applications: filtered,
    total: filtered.length,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['animalId', 'userId', 'fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Create application
    const application = {
      id: `APP${Date.now()}`,
      animalId: body.animalId,
      userId: body.userId,
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      occupation: body.occupation,
      experience: body.experience,
      familyMembers: body.familyMembers,
      otherPets: body.otherPets,
      housingType: body.housingType,
      hasYard: body.hasYard,
      dailyHours: body.dailyHours,
      status: 'pending',
      applicationDate: new Date().toISOString(),
      notes: body.notes || '',
      interviewDate: null,
      decisionDate: null,
    };
    
    // In a real app, save to database
    adoptionApplications.push(application);
    
    // Send confirmation email (in a real app)
    
    return NextResponse.json(
      {
        success: true,
        application,
        message: 'Application submitted successfully',
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error submitting adoption application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}