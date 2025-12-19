import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        >
          {/* Residential Drone Shot */}
          <source src="https://videos.pexels.com/video-files/1536304/1536304-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay - Darkened for text readability but transparent enough to see the video */}
        <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-white text-center md:text-left pt-20">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Veteran Owned & Operated</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl">
            Military Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 filter drop-shadow-lg">
              Roofing Standards
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
            We bring the precision, integrity, and durability of military specifications to your home. Protect your biggest investment with Mil-Spec Roofing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center transition-all shadow-lg hover:shadow-blue-500/25 group backdrop-blur-sm"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 border-2 border-white/80 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              Our Services
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-200 drop-shadow-md">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-blue-500 h-5 w-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-blue-500 h-5 w-5" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-blue-500 h-5 w-5" />
              <span>Free Inspections</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;