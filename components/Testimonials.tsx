import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael R.",
    role: "Homeowner",
    content: "The level of discipline this crew showed was incredible. They arrived at 0700 sharp, worked efficiently, and left my yard cleaner than they found it. The roof looks amazing.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Property Manager",
    content: "I manage 15 commercial properties. Mil-Spec is the only team I trust. Their reports are detailed, their pricing is transparent, and their work holds up to Texas storms.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    role: "Business Owner",
    content: "We had a massive leak during the spring rains. Their rapid response team was onsite within 2 hours. They tarped it, quoted it, and fixed it within the week.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
            After Action <span className="text-blue-600">Reports</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            {/* Background Decoration */}
            <Quote className="absolute top-8 left-8 text-blue-100 h-24 w-24 -z-0 transform rotate-180" />
            
            <div className="relative z-10 transition-opacity duration-500 ease-in-out">
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 text-center font-medium leading-relaxed italic mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-slate-900">{testimonials[activeIndex].name}</h4>
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;