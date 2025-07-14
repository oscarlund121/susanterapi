'use client'
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

const KlientUdtalelserMinimal = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [visibleQuote, setVisibleQuote] = useState(false);
  const quoteRef = useRef(null);

  const udtalelser = [
    {
      tekst: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde.",
      navn: "Dorte"
    },
    {
      tekst: "Jeg har haft psoriasis siden jeg var 14 år gammel. Efter at have bearbejdet de underliggende chok, var jeg fri for sygdommen.",
      navn: "Birthe"
    },
    {
      tekst: "Susan hjalp mig gennem en svær periode med angst. Hun skabte et trygt rum hvor jeg kunne være åben om mine følelser.",
      navn: "Maria"
    },
    {
      tekst: "Min datter begyndte at blomstre igen efter nogle sessioner med Susan. Jeg er så taknemmelig for den hjælp vi fik.",
      navn: "Thomas"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleQuote(true);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % udtalelser.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [udtalelser.length]);

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
            Klient udtalelser
          </h2>
        </div>

        {/* Single rotating quote */}
        <div 
          ref={quoteRef}
          className={`text-center transition-all duration-1000 ease-out ${
            visibleQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed italic mb-8 min-h-[120px] flex items-center justify-center">
              "{udtalelser[currentQuote].tekst}"
            </blockquote>
            <cite className="text-lg font-light text-gray-800 tracking-wide not-italic">
              — {udtalelser[currentQuote].navn}
            </cite>
          </div>

          {/* Quote indicators */}
          <div className="flex justify-center gap-2 mb-16">
            {udtalelser.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-gray-400' : 'bg-gray-200'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <div className="w-12 h-px bg-gray-200 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Vil du også opleve transformation?
          </p>
          <Button href="/kontakt">
            Book din første session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KlientUdtalelserMinimal;
