import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.SERVICES, label: 'Services' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.GALLERY, label: 'Gallery' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // scroll-padding-top in CSS handles the offset automatically
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(SectionId.HOME)}>
          <div className="flex flex-col items-center">
             {/* Custom SVG Logo Implementation */}
            <svg width="240" height="60" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
              {/* Roof Line - Left Gray Part */}
              <path d="M20 50 L80 10" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" />
              {/* Checkmark integrated into Roof - Blue */}
              <path d="M70 25 L95 45 L140 5" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Right Roof Line - Gray */}
              <path d="M130 15 L190 50" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" />
              
              {/* MIL-SPEC Text */}
              <text x="10" y="75" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="#1e3a8a" letterSpacing="1">MIL-SPEC</text>
              
              {/* ROOFING Text (Small) */}
              <text x="205" y="55" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#4b5563" letterSpacing="0.5">ROOFING</text>
              <text x="205" y="72" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#4b5563" letterSpacing="0.5">& CONST.</text>
            </svg>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                activeSection === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleNavClick(SectionId.CONTACT)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-bold uppercase text-xs tracking-wider transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Get Estimate
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm font-bold uppercase tracking-wide ${
                  activeSection === link.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick(SectionId.CONTACT)}
              className="bg-blue-600 text-white px-5 py-3 rounded-sm font-bold uppercase text-center w-full shadow-md"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;