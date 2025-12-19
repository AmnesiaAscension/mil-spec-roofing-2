import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              {/* Custom SVG Logo - White Version for Footer */}
              <svg width="240" height="60" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto opacity-90">
                {/* Roof Line */}
                <path d="M20 50 L80 10" stroke="white" strokeWidth="6" strokeLinecap="round" />
                {/* Checkmark integrated into Roof */}
                <path d="M70 25 L95 45 L140 5" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Right Roof Line */}
                <path d="M130 15 L190 50" stroke="white" strokeWidth="6" strokeLinecap="round" />
                
                {/* MIL-SPEC Text */}
                <text x="10" y="75" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="white" letterSpacing="1">MIL-SPEC</text>
                
                {/* ROOFING Text */}
                <text x="205" y="55" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#94a3b8" letterSpacing="0.5">ROOFING</text>
                <text x="205" y="72" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#94a3b8" letterSpacing="0.5">& CONST.</text>
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to providing military-grade roofing solutions with precision, integrity, and unmatched durability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Residential Roofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Storm Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gutters & Siding</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Stay Informed</h4>
            <p className="text-sm mb-4">Subscribe for maintenance tips and seasonal alerts.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-l-md outline-none focus:border-blue-600 w-full" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Mil-Spec Roofing & Construction. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;