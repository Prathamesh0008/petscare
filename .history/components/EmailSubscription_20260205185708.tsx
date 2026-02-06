'use client';

import { useState } from 'react';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubscribed(true);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8">
      <div className="text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="mb-6 opacity-90">
          Get the latest adoption stories, events, and pet care tips
        </p>
      </div>

      {subscribed ? (
        <div className="text-center">
          <div className="text-green-300 text-4xl mb-4">✓</div>
          <h4 className="text-xl font-bold mb-2">Thank You!</h4>
          <p>You've been subscribed to our newsletter</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full p-4 rounded-lg text-gray-900"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              required
              className="mr-3"
            />
            <label htmlFor="consent" className="text-sm">
              I agree to receive emails about adoptions and events
            </label>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-sm opacity-80">
        <p>Join 5,000+ pet lovers in our community</p>
        <p className="mt-1">No spam, unsubscribe anytime</p>
      </div>
    </div>
  );
}