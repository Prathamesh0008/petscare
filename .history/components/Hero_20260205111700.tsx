import Link from 'next/link';
import { FaPaw, FaHeart, FaUsers } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <FaPaw className="text-5xl" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-amber-900">PawHaven</span> Vashi
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A safe haven for stray dogs and cats in Navi Mumbai. 
          We rescue, rehabilitate, and find forever homes for our furry friends.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/animals" 
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Meet Our Animals
          </Link>
          <Link 
            href="/adopt" 
            className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Adopt a Friend
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <FaPaw className="text-3xl mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-lg">Animals Rescued</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <FaHeart className="text-3xl mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-lg">Successful Adoptions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <FaUsers className="text-3xl mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-lg">Active Volunteers</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}