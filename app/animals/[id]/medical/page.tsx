//petscare\app\animals\[id]\medical\page.tsx
'use client';

import { notFound } from 'next/navigation';
import { getAnimalById } from '@/lib/animals';

import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function AnimalMedicalPage({ params }: PageProps) {
  const animal = getAnimalById(params.id);

  if (!animal) {
    notFound();
  }

  const medicalRecords = [
    { date: '2024-01-15', type: 'Vaccination', details: 'Rabies vaccine', vet: 'Dr. Sharma' },
    { date: '2024-01-10', type: 'Checkup', details: 'Annual health check', vet: 'Dr. Sharma' },
    { date: '2023-12-05', type: 'Surgery', details: 'Spay/Neuter procedure', vet: 'Dr. Patel' },
    { date: '2023-11-20', type: 'Medication', details: 'Deworming treatment', vet: 'Dr. Gupta' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/animals/${animal.id}`} className="text-blue-600 hover:underline">
          ← Back to {animal.name}
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{animal.name}'s Medical Records</h1>
        <p className="text-gray-600 mb-6">Confidential medical information</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Current Health Status</h3>
            <div className="text-green-600 font-bold">Excellent</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Last Checkup</h3>
            <div>January 10, 2024</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Primary Veterinarian</h3>
            <div>Dr. Sharma</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Vaccination History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Vaccine</th>
                  <th className="p-3 text-left">Next Due</th>
                  <th className="p-3 text-left">Administered By</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">2024-01-15</td>
                  <td className="p-3">Rabies</td>
                  <td className="p-3">2025-01-15</td>
                  <td className="p-3">Dr. Sharma</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">2024-01-10</td>
                  <td className="p-3">DHPP</td>
                  <td className="p-3">2025-01-10</td>
                  <td className="p-3">Dr. Sharma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Medical History</h2>
          <div className="space-y-4">
            {medicalRecords.map((record, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex justify-between">
                  <div className="font-bold">{record.type}</div>
                  <div className="text-gray-600">{record.date}</div>
                </div>
                <p className="text-gray-700">{record.details}</p>
                <div className="text-sm text-gray-600">Vet: {record.vet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}