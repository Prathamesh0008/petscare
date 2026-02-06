import { NextRequest, NextResponse } from 'next/server';

// Mock database
let donations: any[] = [];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get('userId');
  const type = searchParams.get('type');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  
  let filtered = donations;
  
  if (userId) {
    filtered = filtered.filter(donation => donation.userId === userId);
  }
  
  if (type) {
    filtered = filtered.filter(donation => donation.type === type);
  }
  
  if (startDate) {
    filtered = filtered.filter(donation => new Date(donation.date) >= new Date(startDate));
  }
  
  if (endDate) {
    filtered = filtered.filter(donation => new Date(donation.date) <= new Date(endDate));
  }
  
  // Calculate totals
  const totalAmount = filtered.reduce((sum, donation) => sum + donation.amount, 0);
  const monthlyAmount = filtered
    .filter(d => {
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return new Date(d.date) >= monthAgo;
    })
    .reduce((sum, donation) => sum + donation.amount, 0);
  
  return NextResponse.json({
    donations: filtered,
    stats: {
      total: filtered.length,
      totalAmount,
      monthlyAmount,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate
    if (!body.amount || body.amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }
    
    // Create donation record
    const donation = {
      id: `DON${Date.now()}`,
      amount: parseFloat(body.amount),
      currency: body.currency || 'INR',
      type: body.type || 'one-time', // one-time, monthly, yearly
      method: body.method || 'card', // card, upi, netbanking
      userId: body.userId || 'anonymous',
      name: body.name || 'Anonymous',
      email: body.email,
      message: body.message || '',
      date: new Date().toISOString(),
      status: 'pending', // pending, completed, failed
      transactionId: body.transactionId,
    };
    
    // In a real app, process payment and save to database
    donations.push(donation);
    
    // Update donation status to completed (simulated)
    donation.status = 'completed';
    
    return NextResponse.json({
      success: true,
      donation,
      message: 'Donation processed successfully',
    });
    
  } catch (error) {
    console.error('Error processing donation:', error);
    return NextResponse.json(
      { error: 'Failed to process donation' },
      { status: 500 }
    );
  }
}