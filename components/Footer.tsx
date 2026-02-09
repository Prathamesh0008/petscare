//petscare\components\Footer.tsx
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { SHELTER_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
         {/* Newsletter */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for updates on new arrivals and events.</p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-amber-400">PawHaven</span> Vashi
            </h3>
            <p className="text-gray-400 mb-6">
              A safe haven for stray dogs and cats in Navi Mumbai since 2019. 
              We rescue, rehabilitate, and find forever homes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Our Animals
                </Link>
              </li>
              <li>
                <Link href="/adopt" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Adopt
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <span className="text-gray-400">{SHELTER_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-400" />
                <a href={`tel:${SHELTER_INFO.phone}`} className="text-gray-400 hover:text-amber-400 transition-colors">
                  {SHELTER_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <a href={`mailto:${SHELTER_INFO.email}`} className="text-gray-400 hover:text-amber-400 transition-colors">
                  {SHELTER_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

       

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} PawHaven Vashi. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}