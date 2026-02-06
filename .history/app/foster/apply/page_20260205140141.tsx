// app/foster/apply/page.tsx
export default function FosterApplyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">Become a Foster Parent</h1>
      <p className="text-gray-600 mb-8">Temporarily care for animals while they wait for their forever homes.</p>
      
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Foster Application Form</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input type="text" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input type="text" className="w-full p-3 border rounded" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-3 border rounded" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Home Type</label>
            <select className="w-full p-3 border rounded">
              <option>Apartment</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Previous Experience</label>
            <textarea className="w-full p-3 border rounded" rows={4} />
          </div>
          
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}