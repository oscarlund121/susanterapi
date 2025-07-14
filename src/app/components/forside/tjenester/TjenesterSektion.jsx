'use client'
import React, { useEffect, useRef, useState } from 'react';

const TjenesterSektion = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const tjenester = [
    {
      title: "Psykoterapi",
      description: "Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi."
    },
    {
      title: "Chok- og traumeforløsning",
      description: "EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed."
    },
    {
      title: "Meditation",
      description: "Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl."
    },
    {
      title: "Familie- og parterapi",
      description: "Mentaliserende tilgang til relationer. Forstå dynamikker og skab sikkerhed i familien og parforhold."
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
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
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
    const baseClasses = "transition-all duration-1000 ease-out transform";
    const isVisible = visibleCards.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-8`;
  };

  const getAlignmentClasses = (index) => {
    // Asymmetrisk layout - vekslende indrykning
    const isEven = index % 2 === 0;
    if (isEven) {
      return "lg:mr-auto lg:ml-0 lg:max-w-2xl"; // Venstre side
    }
    return "lg:ml-auto lg:mr-0 lg:max-w-2xl lg:text-right"; // Højre side
  };

  const getNumberAlignment = (index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      return "text-left";
    }
    return "lg:text-right";
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Titel */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
            Hvad jeg tilbyder
          </h2>
        </div>
        
        {/* Tjenester stack */}
        <div className="space-y-24 lg:space-y-32">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} ${getAlignmentClasses(index)}`}
            >
              {/* Nummerering */}
              <div className={`mb-8 ${getNumberAlignment(index)}`}>
                <span className="text-6xl lg:text-7xl font-extralight text-gray-200 tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Indhold */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
                  {tjeneste.title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  {tjeneste.description}
                </p>
              </div>

              {/* Subtil divider linje for symmetri */}
              <div className={`mt-12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <div className="w-16 h-px bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TjenesterSektion;
