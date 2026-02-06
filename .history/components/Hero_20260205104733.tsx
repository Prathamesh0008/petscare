import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Happy dogs and cats"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to PawHaven Vashi
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A safe haven for stray dogs and cats in Navi Mumbai. 
          We rescue, rehabilitate, and find forever homes for our furry friends.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/animals" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Meet Our Animals
          </Link>
          <Link 
            href="/adopt" 
            className="bg-white hover:bg-gray-100 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Adopt a Friend
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-lg">Animals Rescued</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-lg">Successful Adoptions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-lg">Active Volunteers</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}