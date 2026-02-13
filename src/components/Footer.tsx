import { Trash2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TrashCash</span>
            </Link>
            <p className="text-sm text-gray-400">
              Revolutionizing waste management through technology and payments. Making cities cleaner, one bin at a time.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link to="/business" className="text-sm hover:text-primary-500 transition-colors">Business</Link></li>
              <li><Link to="/cleaners" className="text-sm hover:text-primary-500 transition-colors">Cleaners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/report" className="text-sm hover:text-primary-500 transition-colors">Report Full Bin</Link></li>
              <li><Link to="/signup" className="text-sm hover:text-primary-500 transition-colors">Become a Cleaner</Link></li>
              <li><Link to="/signup" className="text-sm hover:text-primary-500 transition-colors">Register Business</Link></li>
              <li><Link to="/payments" className="text-sm hover:text-primary-500 transition-colors">Payments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>123 Clean Street, Green City</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>hello@trashcash.com</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TrashCash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
