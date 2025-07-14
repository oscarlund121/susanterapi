'use client'
import React, { useEffect, useRef, useState } from 'react';

const TjenesterFlow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const tjenester = [
    {
      title: "Psykoterapi",
      method: "Samtale",
      description: "Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi.",
      icon: "💙"
    },
    {
      title: "Chok- og traumeforløsning",
      method: "EMDR",
      description: "EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed.",
      icon: "🌱"
    },
    {
      title: "Meditation",
      method: "Fordybelse",
      description: "Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl.",
      icon: "🧘"
    },
    {
      title: "Familie- og parterapi",
      method: "Mentalisering",
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

    // Horizontal scroll listener
    const scrollContainer = scrollContainerRef.current;
    const handleHorizontalScroll = () => {
      if (!scrollContainer) return;
      
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      if (scrollWidth > clientWidth) {
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleHorizontalScroll);
    }

    return () => {
      observers.forEach(observer => observer?.disconnect());
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleHorizontalScroll);
      }
    };
  }, []);

  const getCardClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleCards.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0`;
    }
    return `${baseClasses} opacity-0 translate-x-8`;
  };

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad jeg tilbyder
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            En rejse gennem helbredende terapiformer
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-16">
          <div className="relative w-full h-px bg-gray-200">
            <div 
              className="absolute top-0 left-0 h-px bg-gray-400 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            {tjenester.map((_, index) => (
              <div key={index} className="text-center">
                <div className={`w-2 h-2 rounded-full mx-auto mb-2 transition-all duration-500 ${
                  visibleCards.has(index) ? 'bg-gray-400' : 'bg-gray-200'
                }`}></div>
                <span className="text-xs font-light text-gray-400 tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 lg:gap-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300"
          style={{ scrollbarWidth: 'thin' }}
        >
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`flex-none w-80 lg:w-96 ${getCardClasses(index)}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white p-8 lg:p-10 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <span className="text-4xl">{tjeneste.icon}</span>
                </div>

                {/* Number */}
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-extralight text-gray-300 tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Method */}
                <div className="mb-4">
                  <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                    {tjeneste.method}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-6 tracking-wide leading-tight">
                  {tjeneste.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {tjeneste.description}
                </p>

                {/* Subtle line */}
                <div className="mt-8">
                  <div className="w-12 h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TjenesterFlow;
