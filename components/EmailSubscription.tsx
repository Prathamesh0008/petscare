'use client';

import { useState } from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaEnvelope className="text-amber-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-600">
            Get adoption stories and pet care tips.
          </p>
        </div>
      </div>

      {subscribed ? (
        <div className="text-center py-3 bg-emerald-50 rounded-lg">
          <div className="text-emerald-700 font-medium text-sm">
            ✓ Thank you for subscribing!
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-sm min-w-0"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="px-4 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>...</span>
                </div>
              ) : (
                <>
                  <span>Join</span>
                  <FaArrowRight className="text-xs" />
                </>
              )}
            </button>
          </div>
          
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-0.5 w-3.5 h-3.5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
            />
            <label htmlFor="consent" className="text-xs text-gray-600">
              I agree to receive updates. Unsubscribe anytime.
            </label>
          </div>
        </form>
      )}
    </div>
  );
}