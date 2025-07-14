'use client'
import React, { useEffect, useRef, useState } from 'react';

const TjenesterMinimal = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const tjenester = [
    "Psykoterapi",
    "Chok- og traumeforløsning", 
    "Meditation",
    "Familie- og parterapi"
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -20px 0px'
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getCardClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleCards.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-4`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
            Hvad jeg tilbyder
          </h2>
        </div>

        {/* Simple list */}
        <div className="space-y-16">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} text-center`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <h3 className="text-2xl lg:text-3xl font-light text-gray-800 tracking-wide">
                {tjeneste}
              </h3>
              
              {/* Subtle separator */}
              {index < tjenester.length - 1 && (
                <div className="mt-16 mx-auto w-px h-8 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TjenesterMinimal;
