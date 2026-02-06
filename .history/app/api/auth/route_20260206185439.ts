import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// Mock users database
const users = [
  {
    id: '1',
    email: 'admin@pawhaven.org',
    password: '$2a$10$hashedpasswordhere',
    name: 'Admin User',
    role: 'admin',
    phone: '+91 98765 43210',
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, password, ...userData } = body;

    // LOGIN
    if (action === 'login') {
      const user = users.find(u => u.email === email);

      if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      // TEMP password check (demo only)
      const validPassword = password === 'password';

      if (!validPassword) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      return NextResponse.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          phone: user.phone,
        },
      });
    }

    // SIGNUP
    if (action === 'signup') {
      const existingUser = users.find(u => u.email === userData.email);

      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const newUser = {
        id: `USR${Date.now()}`,
        email: userData.email,
        password: hashedPassword,
        name: userData.name,
        role: 'user',
        phone: userData.phone,
      };

      users.push(newUser);

      return NextResponse.json({
        success: true,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          phone: newUser.phone,
        },
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Auth failed' }, { status: 500 });
  }
}
