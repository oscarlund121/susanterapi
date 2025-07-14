'use client'
import React, { useEffect, useRef, useState } from 'react';

const TjenesterGrid = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const tjenester = [
    {
      title: "Psykoterapi",
      description: "Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi.",
      icon: "💙"
    },
    {
      title: "Chok- og traumeforløsning",
      description: "EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed.",
      icon: "🌱"
    },
    {
      title: "Meditation",
      description: "Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl.",
      icon: "🧘"
    },
    {
      title: "Familie- og parterapi",
      description: "Mentaliserende tilgang til relationer. Forstå dynamikker og skab sikkerhed i familien og parforhold.",
      icon: "👥"
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
            Hvad jeg tilbyder
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Helbredende terapiformer der skaber varig transformation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} p-8 lg:p-12`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="mb-8">
                <span className="text-4xl">{tjeneste.icon}</span>
              </div>

              {/* Number */}
              <div className="mb-6">
                <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-6 tracking-wide leading-tight">
                {tjeneste.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {tjeneste.description}
              </p>

              {/* Subtle line */}
              <div className="w-12 h-px bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TjenesterGrid;
