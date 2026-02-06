import AdoptionForm from '@/components/AdoptionForm';
import { FaCheck, FaUsers, FaHome, FaHeart } from 'react-icons/fa';

const adoptionSteps = [
  {
    icon: <FaUsers />,
    title: 'Meet the Animals',
    description: 'Visit our shelter or browse online profiles to find your perfect match.',
  },
  {
    icon: <FaCheck />,
    title: 'Submit Application',
    description: 'Fill out our detailed adoption application form.',
  },
  {
    icon: <FaHome />,
    title: 'Home Visit',
    description: 'Our team visits to ensure your home is safe and suitable.',
  },
  {
    icon: <FaHeart />,
    title: 'Finalize Adoption',
    description: 'Complete paperwork and bring your new friend home!',
  },
];

const faqs = [
  {
    question: 'What are the adoption fees?',
    answer: 'Adoption fees range from ₹1,000 to ₹2,500 depending on the animal. This covers vaccination, deworming, microchipping, and basic medical care.',
  },
  {
    question: 'How long does the adoption process take?',
    answer: 'Typically 3-7 days from application to final adoption, depending on home visit scheduling.',
  },
  {
    question: 'Can I adopt if I live in an apartment?',
    answer: 'Yes! Many of our animals adapt well to apartment living. We will help you choose a pet suitable for your living situation.',
  },
  {
    question: 'What if the adoption doesn\'t work out?',
    answer: 'We have a 15-day trial period. If it doesn\'t work out, you can return the animal to us.',
  },
];

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Adopt a Friend</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Give a homeless animal a second chance at love and happiness. Find your perfect companion today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Adoption Process */}
          <div className="lg:col-span-2 space-y-12">
            {/* Adoption Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Adoption Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adoptionSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                      {step.icon}
                    </div>
                    <div className="text-amber-500 font-bold text-lg mb-2">Step {index + 1}</div>
                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Adopt */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Adopt?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Save a Life</h3>
                  <p className="text-gray-600">
                    You're giving an animal a second chance at a happy life. Each adoption opens up space for us to rescue another animal in need.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Health Benefits</h3>
                  <p className="text-gray-600">
                    Pets reduce stress, lower blood pressure, and increase physical activity. They provide companionship and unconditional love.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Cost Effective</h3>
                  <p className="text-gray-600">
                    Adopted pets are already vaccinated, dewormed, and often spayed/neutered, saving you on initial veterinary costs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Support Ethical Practices</h3>
                  <p className="text-gray-600">
                    By adopting, you're supporting animal welfare and taking a stand against unethical breeding practices.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Adoption Form */}
          <div>
            <AdoptionForm />
            
            {/* Contact Info */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Our adoption counselors are here to help you through the process.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-amber-600 hover:text-amber-700">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Email</div>
                  <a href="mailto:adopt@pawhavenvashi.org" className="text-amber-600 hover:text-amber-700">
                    adopt@pawhavenvashi.org
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 mb-1">Shelter Hours</div>
                  <p className="text-gray-600">9:00 AM - 6:00 PM, Tuesday to Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}