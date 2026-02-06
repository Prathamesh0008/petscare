'use client';

type DonationType = 'one-time' | 'monthly' | 'yearly';

interface DonationFormProps {
  donationType: DonationType;
}

export default function DonationForm({ donationType }: DonationFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <h3 className="text-xl font-bold mb-1">
          {donationType === 'one-time' && 'One-Time Donation'}
          {donationType === 'monthly' && 'Monthly Donation'}
          {donationType === 'yearly' && 'Yearly Donation'}
        </h3>

        <p className="text-gray-600 text-sm">
          Thank you for supporting PawHaven Vashi ❤️
        </p>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Donation Amount (₹)
        </label>
        <input
          type="number"
          min={100}
          step={100}
          className="w-full border rounded-md px-3 py-2"
          placeholder="Enter amount"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          className="w-full border rounded-md px-3 py-2"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          className="w-full border rounded-md px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Donate Now
      </button>
    </form>
  );
}
