import { NextRequest, NextResponse } from 'next/server';

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
) {
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




// import { NextRequest, NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// // Mock users database
// const users = [
//   {
//     id: '1',
//     email: 'admin@pawhaven.org',
//     password: '$2a$10$YourHashedPasswordHere', // In real app, use bcrypt hash
//     name: 'Admin User',
//     role: 'admin',
//     phone: '+91 98765 43210',
//   },
// ];

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { action, email, password, ...userData } = body;
    
//     if (action === 'login') {
//       // Login
//       const user = users.find(u => u.email === email);
      
//       if (!user) {
//         return NextResponse.json(
//           { error: 'Invalid credentials' },
//           { status: 401 }
//         );
//       }
      
//       // In real app, verify password with bcrypt
//       // const validPassword = await bcrypt.compare(password, user.password);
//       const validPassword = password === 'password'; // Temporary for demo
      
//       if (!validPassword) {
//         return NextResponse.json(
//           { error: 'Invalid credentials' },
//           { status: 401 }
//         );
//       }
      
//       // Create JWT token
//       const token = jwt.sign(
//         { 
//           userId: user.id, 
//           email: user.email,
//           role: user.role,
//           name: user.name 
//         },
//         JWT_SECRET,
//         { expiresIn: '7d' }
//       );
      
//       return NextResponse.json({
//         success: true,
//         token,
//         user: {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           role: user.role,
//           phone: user.phone,
//         },
//       });
      
//     } else if (action === 'signup') {
//       // Signup
//       const existingUser = users.find(u => u.email === userData.email);
      
//       if (existingUser) {
//         return NextResponse.json(
//           { error: 'User already exists' },
//           { status: 400 }
//         );
//       }
      
//       // Hash password
//       const hashedPassword = await bcrypt.hash(userData.password, 10);
      
//       const newUser = {
//         id: `USR${Date.now()}`,
//         email: userData.email,
//         password: hashedPassword,
//         name: userData.name,
//         role: 'user',
//         phone: userData.phone,
//         createdAt: new Date().toISOString(),
//       };
      
//       // In real app, save to database
//       users.push(newUser);
      
//       // Create token
//       const token = jwt.sign(
//         { 
//           userId: newUser.id, 
//           email: newUser.email,
//           role: newUser.role,
//           name: newUser.name 
//         },
//         JWT_SECRET,
//         { expiresIn: '7d' }
//       );
      
//       return NextResponse.json({
//         success: true,
//         token,
//         user: {
//           id: newUser.id,
//           email: newUser.email,
//           name: newUser.name,
//           role: newUser.role,
//           phone: newUser.phone,
//         },
//       });
      
//     } else {
//       return NextResponse.json(
//         { error: 'Invalid action' },
//         { status: 400 }
//       );
//     }
    
//   } catch (error) {
//     console.error('Auth error:', error);
//     return NextResponse.json(
//       { error: 'Authentication failed' },
//       { status: 500 }
//     );
//   }
// }