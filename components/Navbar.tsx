// petscare/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaHandsHelping,
  FaHome,
  FaDog,
  FaInfoCircle,
  FaEnvelope,
  FaUserFriends
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Our Animals', href: '/animals', icon: <FaDog /> },
    { name: 'Adopt', href: '/adopt', icon: <FaHeart /> },
    { name: 'Daycare', href: '/daycare', icon: <FaUserFriends /> },
    { name: 'About', href: '/about', icon: <FaInfoCircle /> },
    { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#B6D3DE] shadow-lg py-2'
          : 'bg-[#B6D3DE] py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-white">
            PawHeaven
          </span>
          <span className="text-xs text-white/80">
            Vashi Shelter
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                pathname === link.href
                  ? 'bg-[#223d7c] text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="text-white">{link.icon}</span>
              {link.name}
            </Link>
          ))}

          {/* Buttons */}
          <Link
            href="/donate"
            className="ml-4 bg-[#223d7c] hover:bg-[#1a2f60] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Donate
          </Link>

          <Link
            href="/volunteer"
            className="bg-white text-[#1b93d1] hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Volunteer
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1b93d1] shadow-md px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-white hover:text-white/80"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// //petscare\components\Navbar.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { 
//   FaBars, 
//   FaTimes, 
//   FaHeart, 
//   FaHandsHelping, 
//   FaPaw,
//   FaChevronDown,
//   FaHome,
//   FaInfoCircle,
//   FaEnvelope,
//   FaDog,
//   FaUserFriends
// } from 'react-icons/fa';

// interface NavbarProps {
//   isIntroComplete?: boolean;
// }

// export default function Navbar({ isIntroComplete = true }: NavbarProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Close mobile menu on resize if screen becomes larger
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '/', icon: <FaHome className="text-sm" /> },
//     { name: 'Our Animals', href: '/animals', icon: <FaDog className="text-sm" /> },
//     { name: 'Adopt', href: '/adopt', icon: <FaHeart className="text-sm" /> },
//     { name: 'Daycare', href: '/daycare', icon: <FaUserFriends className="text-sm" /> },
//     { name: 'About', href: '/about', icon: <FaInfoCircle className="text-sm" /> },
//     { name: 'Contact', href: '/contact', icon: <FaEnvelope className="text-sm" /> },
//   ];

//   // Split into main nav and action buttons for better organization
//   const mainNavLinks = navLinks.slice(0, 4); // Home, Our Animals, Adopt, Daycare
//   const secondaryNavLinks = navLinks.slice(4); // About, Contact

//   return (
//     <nav 
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-[#f5f7f0]/95 backdrop-blur-md shadow-lg py-2' 
//           : 'bg-[#f5f7f0]/90 backdrop-blur-sm py-3'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo - Responsive sizing */}
//           <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
//             <div className={`transition-all duration-500 overflow-hidden rounded-full border-2 border-[#2c4a3e] shadow-lg ${
//               isIntroComplete 
//                 ? 'w-8 h-8 sm:w-10 sm:h-10 opacity-100' 
//                 : 'w-0 h-0 opacity-0'
//             }`}>
//               <div className="w-full h-full relative">
//                 <Image
//                   src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&auto=format&fit=crop&q=60"
//                   alt="Pawheaven Logo"
//                   width={40}
//                   height={40}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//             <div className={`transition-all duration-500 ${
//               isIntroComplete ? 'opacity-100' : 'opacity-0'
//             }`}>
//               <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4a3e] leading-tight block">
//                 PawHeaven
//               </span>
//               <span className="text-[10px] sm:text-xs md:text-sm text-[#b87d5e] leading-tight block">
//                 Vashi Shelter
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation - Hidden on mobile/tablet */}
//           <div className={`hidden lg:flex items-center gap-1 xl:gap-2 transition-all duration-500 ${
//             isIntroComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}>
//             {/* Main Navigation Links */}
//             <div className="flex items-center">
//               {mainNavLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all text-sm xl:text-base flex items-center gap-2 ${
//                     pathname === link.href
//                       ? 'bg-[#2c4a3e] text-white'
//                       : 'text-[#2c4a3e] hover:text-[#b87d5e] hover:bg-[#e8ebe0]'
//                   }`}
//                 >
//                   <span className="text-[#b87d5e]">{link.icon}</span>
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Secondary Navigation Links */}
//             <div className="flex items-center ml-2 pl-2 border-l border-[#2c4a3e]/20">
//               {secondaryNavLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all text-sm xl:text-base flex items-center gap-2 ${
//                     pathname === link.href
//                       ? 'bg-[#2c4a3e] text-white'
//                       : 'text-[#2c4a3e] hover:text-[#b87d5e] hover:bg-[#e8ebe0]'
//                   }`}
//                 >
//                   <span className="text-[#b87d5e]">{link.icon}</span>
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-2 ml-4">
//               <Link
//                 href="/donate"
//                 className="bg-[#2c4a3e] hover:bg-[#1e352b] text-white px-4 xl:px-6 py-2 rounded-full flex items-center gap-2 transition-all font-medium text-sm xl:text-base whitespace-nowrap"
//               >
//                 <FaHeart className="text-xs xl:text-sm" /> 
//                 <span className="hidden xl:inline">Donate</span>
//                 <span className="xl:hidden">Give</span>
//               </Link>
//               <Link
//                 href="/volunteer"
//                 className="bg-[#b87d5e] hover:bg-[#9e6a4f] text-white px-4 xl:px-6 py-2 rounded-full flex items-center gap-2 transition-all font-medium text-sm xl:text-base whitespace-nowrap"
//               >
//                 <FaHandsHelping className="text-xs xl:text-sm" /> 
//                 <span className="hidden xl:inline">Volunteer</span>
//                 <span className="xl:hidden">Help</span>
//               </Link>
//             </div>
//           </div>

//           {/* Tablet Navigation - Visible on medium screens */}
//           <div className={`hidden md:flex lg:hidden items-center gap-2 transition-all duration-500 ${
//             isIntroComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}>
//             {/* Simplified nav for tablet - just icons with tooltips */}
//             <div className="flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`p-2.5 rounded-lg font-medium transition-all relative group ${
//                     pathname === link.href
//                       ? 'bg-[#2c4a3e] text-white'
//                       : 'text-[#2c4a3e] hover:text-[#b87d5e] hover:bg-[#e8ebe0]'
//                   }`}
//                   title={link.name}
//                 >
//                   <span className="text-lg">{link.icon}</span>
//                   {/* Tooltip */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#2c4a3e] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                     {link.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>
            
//             <div className="flex items-center gap-1 ml-2">
//               <Link
//                 href="/donate"
//                 className="bg-[#2c4a3e] hover:bg-[#1e352b] text-white p-2.5 rounded-lg transition-all"
//                 title="Donate"
//               >
//                 <FaHeart className="text-lg" />
//               </Link>
//               <Link
//                 href="/volunteer"
//                 className="bg-[#b87d5e] hover:bg-[#9e6a4f] text-white p-2.5 rounded-lg transition-all"
//                 title="Volunteer"
//               >
//                 <FaHandsHelping className="text-lg" />
//               </Link>
//             </div>
//           </div>

//           {/* Mobile menu button - Visible only on small screens */}
//           <button
//             className={`md:hidden text-[#2c4a3e] text-2xl p-2 hover:bg-[#e8ebe0] rounded-lg transition-all ${
//               isIntroComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
//             }`}
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label={isOpen ? 'Close menu' : 'Open menu'}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Navigation - Slide down menu */}
//         <div 
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="bg-white rounded-xl shadow-lg border border-[#2c4a3e]/10 p-3">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
//                     pathname === link.href
//                       ? 'bg-[#2c4a3e] text-white'
//                       : 'text-[#2c4a3e] hover:text-[#b87d5e] hover:bg-[#e8ebe0]'
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <span className={`text-lg ${
//                     pathname === link.href ? 'text-white' : 'text-[#b87d5e]'
//                   }`}>
//                     {link.icon}
//                   </span>
//                   <span className="font-medium">{link.name}</span>
//                   {pathname === link.href && (
//                     <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
//                       Current
//                     </span>
//                   )}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Action Buttons */}
//             <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#2c4a3e]/10">
//               <Link
//                 href="/donate"
//                 className="bg-[#2c4a3e] hover:bg-[#1e352b] text-white py-3 px-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 transition-all"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <FaHeart className="text-sm" />
//                 <span>Donate</span>
//               </Link>
//               <Link
//                 href="/volunteer"
//                 className="bg-[#b87d5e] hover:bg-[#9e6a4f] text-white py-3 px-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 transition-all"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <FaHandsHelping className="text-sm" />
//                 <span>Volunteer</span>
//               </Link>
//             </div>

//             {/* Quick Info */}
//             <div className="mt-4 pt-4 border-t border-[#2c4a3e]/10 text-center">
//               <p className="text-xs text-gray-500">
//                 <span className="text-[#b87d5e] font-semibold">PawHeaven Vashi</span> — Every life matters
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }