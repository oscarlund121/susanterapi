'use client'
import React, { useEffect, useRef, useState } from 'react';

const PriserCards = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const pristyper = [
    {
      kategori: "Individuel",
      beskrivelse: "Personlig terapi tilpasset dine behov",
      pakker: [
        { type: "Enkelt session", pris: "1.400 kr.", varighed: "1-1,5 time", populær: false },
        { type: "3 sessioner", pris: "4.000 kr.", varighed: "Spar 500 kr.", populær: true },
        { type: "5 sessioner", pris: "6.000 kr.", varighed: "Spar 1.000 kr.", populær: false },
        { type: "10 sessioner", pris: "12.500 kr.", varighed: "Spar 1.500 kr.", populær: false }
      ]
    },
    {
      kategori: "Familie & Par",
      beskrivelse: "Terapi for relationer og familier",
      pakker: [
        { type: "Par-session", pris: "1.900 kr.", varighed: "1,5-2 timer", populær: false },
        { type: "Familie session", pris: "1.600 kr.", varighed: "1-1,5 time", populær: false }
      ]
    },
    {
      kategori: "Studerende",
      beskrivelse: "Særpris for studerende med studiekort",
      pakker: [
        { type: "Studerende", pris: "900 kr.", varighed: "1-1,5 time", populær: false }
      ]
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
            Priser
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Alle priser er inklusiv moms. Jeg har ingen overenskomst med sygesikringen.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {pristyper.map((pristype, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} bg-gray-50 p-8 lg:p-10`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                  {pristype.kategori}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pristype.beskrivelse}
                </p>
              </div>

              {/* Packages */}
              <div className="space-y-4">
                {pristype.pakker.map((pakke, pakkeIndex) => (
                  <div 
                    key={pakkeIndex} 
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      pakke.populær 
                        ? 'border-gray-300 bg-white shadow-sm' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {pakke.populær && (
                      <div className="mb-2">
                        <span className="text-xs font-light text-gray-500 tracking-[0.1em] uppercase">
                          Populær
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-light text-gray-800 tracking-wide">{pakke.type}</div>
                        <div className="text-xs text-gray-500 mt-1">{pakke.varighed}</div>
                      </div>
                      <div className="text-lg font-light text-gray-800">{pakke.pris}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Praktisk info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Booking</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Send en SMS til 25 39 25 39 eller skriv en e-mail til susanalbertsen69@gmail.com
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Afbudsregler</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Afbud meldes senest dagen før kl. 17.00. Ved for sent afbud opkræves fuldt honorar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriserCards;
