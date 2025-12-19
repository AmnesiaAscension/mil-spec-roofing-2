import React, { useState } from 'react';
import { SectionId } from '../types';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{img: string, title: string} | null>(null);

  // Using picsum but simulating real project shots
  const projects = [
    { id: 1, title: 'Modern Estate Replacement', type: 'Residential', img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, title: 'Commercial Complex', type: 'Commercial', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, title: 'Suburban Storm Repair', type: 'Repair', img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, title: 'Luxury Metal Seam', type: 'Specialty', img: 'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, title: 'Historic Restoration', type: 'Restoration', img: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, title: 'Industrial Flat Roof', type: 'Commercial', img: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  const openLightbox = (project: {img: string, title: string}) => {
    setSelectedImage(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id={SectionId.GALLERY} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
              Recent <span className="text-blue-600">Operations</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <button className="text-blue-600 font-bold uppercase tracking-wider hover:text-blue-800 transition-colors">
            View Full Portfolio &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openLightbox(project)}
              className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer h-72"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <ZoomIn className="text-white h-8 w-8" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1 block">{project.type}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh]">
             <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              className="w-full h-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center rounded-b-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;