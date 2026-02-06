'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center">Reset Password</h2>
          <p className="mt-2 text-center text-gray-600">
            Enter your email to reset your password
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold">Check Your Email</h3>
            <p className="text-gray-600">
              We've sent password reset instructions to {email}
            </p>
            <Link
              href="/auth/login"
              className="inline-block text-blue-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </button>

            <div className="text-center text-sm">
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                ← Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}