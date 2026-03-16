'use client';

type DonationType = 'one-time' | 'monthly' | 'yearly';

interface DonationFormProps {
  donationType: DonationType;
  defaultAmount?: number;
}

export default function DonationForm({ donationType, defaultAmount }: DonationFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <h3 className="text-xl font-bold mb-1 text-[#223d7c]">
          {donationType === 'one-time' && 'One-Time Donation'}
          {donationType === 'monthly' && 'Monthly Donation'}
          {donationType === 'yearly' && 'Yearly Donation'}
        </h3>

        <p className="text-[#223d7c]/60 text-sm">
          Thank you for supporting PawHaven Vashi ❤️
        </p>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#223d7c]">
          Donation Amount (₹)
        </label>
        <input
          type="number"
          min={100}
          step={100}
          defaultValue={defaultAmount}
          className="w-full border border-[#223d7c]/10 rounded-lg px-4 py-2.5 text-[#223d7c] placeholder-[#223d7c]/40 focus:border-[#1b93d1] focus:ring-2 focus:ring-[#1b93d1]/20 focus:outline-none transition-all"
          placeholder="Enter amount"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#223d7c]">
          Full Name
        </label>
        <input
          type="text"
          className="w-full border border-[#223d7c]/10 rounded-lg px-4 py-2.5 text-[#223d7c] placeholder-[#223d7c]/40 focus:border-[#1b93d1] focus:ring-2 focus:ring-[#1b93d1]/20 focus:outline-none transition-all"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#223d7c]">
          Email Address
        </label>
        <input
          type="email"
          className="w-full border border-[#223d7c]/10 rounded-lg px-4 py-2.5 text-[#223d7c] placeholder-[#223d7c]/40 focus:border-[#1b93d1] focus:ring-2 focus:ring-[#1b93d1]/20 focus:outline-none transition-all"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone (Optional) */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#223d7c]">
          Phone Number <span className="text-[#1b93d1] text-xs">(Optional)</span>
        </label>
        <input
          type="tel"
          className="w-full border border-[#223d7c]/10 rounded-lg px-4 py-2.5 text-[#223d7c] placeholder-[#223d7c]/40 focus:border-[#1b93d1] focus:ring-2 focus:ring-[#1b93d1]/20 focus:outline-none transition-all"
          placeholder="+91 00000 00000"
        />
      </div>

      {/* Payment Method Selection */}
      <div>
        <label className="block text-sm font-medium mb-2 text-[#223d7c]">
          Payment Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['Card', 'UPI', 'NetBanking'].map((method) => (
            <button
              key={method}
              type="button"
              className="px-3 py-2 border border-[#223d7c]/10 rounded-lg text-xs font-medium text-[#223d7c] hover:border-[#1b93d1] hover:bg-[#1b93d1]/5 transition-all"
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#1b93d1] to-[#223d7c] text-white py-3 rounded-lg font-medium hover:from-[#1680b5] hover:to-[#1a2f60] transition-all shadow-md hover:shadow-lg"
      >
        Donate Now
      </button>

      {/* Secure Payment Note */}
      <p className="text-xs text-center text-[#223d7c]/40 flex items-center justify-center gap-1">
        <span>🔒</span>
        Secure payment powered by Razorpay
      </p>
    </form>
  );
}