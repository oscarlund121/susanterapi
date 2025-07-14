'use client'
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

const KlientUdtalelserGrid = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const udtalelser = [
    {
      tekst: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde.",
      navn: "Dorte",
      baggrund: "Familie med 3 børn",
      rating: 5
    },
    {
      tekst: "Efter 43 år med psoriasis var jeg fri for sygdommen efter at have bearbejdet de underliggende chok.",
      navn: "Birthe", 
      baggrund: "Psoriasis behandling",
      rating: 5
    },
    {
      tekst: "Susan hjalp mig gennem en svær periode med angst. Hun skabte et trygt rum hvor jeg kunne være åben.",
      navn: "Maria",
      baggrund: "Angst og stress",
      rating: 5
    },
    {
      tekst: "Min datter begyndte at blomstre igen efter nogle sessioner med Susan. Så taknemmelig for hjælpen.",
      navn: "Thomas",
      baggrund: "Far til teenager",
      rating: 5
    }
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
          threshold: 0.3,
          rootMargin: '0px 0px -50px 0px'
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
    return `${baseClasses} opacity-0 translate-y-8`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Klient udtalelser
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Læs hvordan andre har oplevet transformation gennem terapien
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {udtalelser.map((udtalelse, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} bg-gray-50 p-8 lg:p-10`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Rating */}
              <div className="mb-6">
                <div className="flex gap-1">
                  {[...Array(udtalelse.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed italic text-lg mb-8">
                "{udtalelse.tekst}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <div className="font-medium text-gray-800 tracking-wide">{udtalelse.navn}</div>
                <div className="text-sm text-gray-500 mt-1">{udtalelse.baggrund}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vil du også opleve transformation? Jeg hjælper dig gerne med at finde 
            vej til mere glæde, frihed og lethed i livet.
          </p>
          <Button href="/kontakt">
            Book din første session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KlientUdtalelserGrid;
