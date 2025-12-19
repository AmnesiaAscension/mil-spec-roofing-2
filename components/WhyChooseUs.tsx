import React, { useEffect, useState, useRef } from 'react';
import { SectionId } from '../types';

// Custom hook for counting up animation
const useCounter = (end: number, duration: number = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return count;
};

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearsExp = useCounter(18, 2000, isVisible);
  const projects = useCounter(2540, 2500, isVisible);
  const satisfaction = useCounter(100, 1500, isVisible);

  return (
    <section 
      id={SectionId.ABOUT} 
      ref={sectionRef}
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tight">
              The <span className="text-blue-500">Mil-Spec</span> Difference
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              We operate on a simple code: <strong>Mission First, People Always.</strong> Our team is comprised of skilled craftsmen who treat every home as if it were their own barracks. We don't cut corners, and we don't retreat until the job is done right.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Uncompromising Quality</h4>
                  <p className="text-slate-400 text-sm">We use only top-tier materials rated for extreme weather conditions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Disciplined Execution</h4>
                  <p className="text-slate-400 text-sm">On time, on budget, and site cleaned daily. No excuses.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Transparent Communication</h4>
                  <p className="text-slate-400 text-sm">Clear reporting and honest assessments. No hidden fees.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700 shadow-xl">
              <span className="block text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 font-mono">
                {yearsExp}+
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider text-slate-300 font-bold">Years Active</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700 shadow-xl mt-8">
              <span className="block text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 font-mono">
                {projects.toLocaleString()}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider text-slate-300 font-bold">Missions Complete</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700 shadow-xl">
              <span className="block text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 font-mono">
                {satisfaction}%
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider text-slate-300 font-bold">Satisfaction Rate</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700 shadow-xl mt-8">
              <span className="block text-4xl md:text-5xl font-extrabold text-blue-500 mb-2">A+</span>
              <span className="text-xs md:text-sm uppercase tracking-wider text-slate-300 font-bold">BBB Rating</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;