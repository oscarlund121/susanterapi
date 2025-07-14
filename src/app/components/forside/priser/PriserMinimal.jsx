'use client'
import React, { useEffect, useRef, useState } from 'react';

const PriserMinimal = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const priser = [
    { type: "Enkelt session", pris: "1.400 kr." },
    { type: "Studerende", pris: "900 kr." },
    { type: "3 sessioner", pris: "4.000 kr." },
    { type: "5 sessioner", pris: "6.000 kr." },
    { type: "10 sessioner", pris: "12.500 kr." },
    { type: "Par-session", pris: "1.900 kr." },
    { type: "Familie session", pris: "1.600 kr." }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: '0px 0px -20px 0px'
        }
      );

      observer.observe(item);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getItemClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleItems.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-4`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-12">
            Priser
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed">
            Alle priser inkl. moms
          </p>
        </div>

        {/* Minimal Price List */}
        <div className="space-y-8">
          {priser.map((pris, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`${getItemClasses(index)} flex justify-between items-center py-6 border-b border-gray-100 last:border-b-0`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-xl font-light text-gray-800 tracking-wide">
                {pris.type}
              </span>
              <span className="text-xl font-light text-gray-800">
                {pris.pris}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="w-12 h-px bg-gray-200 mx-auto mb-8"></div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Ingen overenskomst med sygesikringen
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriserMinimal;
