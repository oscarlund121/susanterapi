'use client'
import React, { useEffect, useRef, useState } from 'react';

const SessionForloebFlow = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementRefs = useRef([]);

  const forloebsSteps = [
    {
      fase: "Indledning",
      handling: "Tag kontakt",
      beskrivelse: "Ring eller send SMS for at booke din første session",
      tid: "Få minutter",
      fokus: "Dit behov"
    },
    {
      fase: "Første møde", 
      handling: "Del din historie",
      beskrivelse: "Vi skaber en tryg ramme hvor du kan dele det du har brug for",
      tid: "1,5-2 timer",
      fokus: "Tillid og forståelse"
    },
    {
      fase: "Terapiforløb",
      handling: "Arbejd målrettet", 
      beskrivelse: "Vi bruger konkrete teknikker til at håndtere dine udfordringer",
      tid: "1-1,5 time pr. session",
      fokus: "Forandring og udvikling"
    },
    {
      fase: "Integration",
      handling: "Anvend i hverdagen",
      beskrivelse: "Du tager de nye værktøjer med dig ud i dit daglige liv",
      tid: "Løbende proces",
      fokus: "Selvstændighed"
    },
    {
      fase: "Afslutning",
      handling: "Beslut selv",
      beskrivelse: "Du bestemmer hvornår du har fået det du kom for",
      tid: "Når du er klar",
      fokus: "Din autonomi"
    }
  ];

  useEffect(() => {
    const observers = elementRefs.current.map((element, index) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getElementClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleElements.has(index);
    
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
            Hvordan foregår en session?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Et naturligt forløb der tilpasser sig dit tempo og dine behov
          </p>
        </div>

        {/* Flow */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {forloebsSteps.map((step, index) => (
              <div
                key={index}
                ref={el => elementRefs.current[index] = el}
                className={`${getElementClasses(index)} relative`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-lg font-light text-gray-600">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-light text-gray-800 mb-2 tracking-wide">
                    {step.fase}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3 text-sm">
                    {step.handling}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.beskrivelse}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 tracking-[0.1em] uppercase">
                      Tid: {step.tid}
                    </div>
                    <div className="text-xs text-gray-500 tracking-[0.1em] uppercase">
                      Fokus: {step.fokus}
                    </div>
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < forloebsSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="w-16 h-px bg-gray-200 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Hvert forløb er unikt. Nogle har brug for få sessioner, andre for længere tid. 
            <strong> Du bestemmer selv</strong> hvornår du har fået det du kom for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebFlow;
