'use client'
import React, { useEffect, useRef, useState } from 'react';

const SessionForloebCards = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const sessionTyper = [
    {
      type: "Første session",
      varighed: "1,5-2 timer",
      beskrivelse: "Vi skaber en tryg ramme og får et grundigt overblik over dine udfordringer",
      proces: [
        "Send SMS eller ring for at booke",
        "Beskriv kort hvad du gerne vil tale om", 
        "Vi finder et tidspunkt der passer dig",
        "Første møde tager lidt længere tid"
      ],
      ikon: "🌱"
    },
    {
      type: "Opfølgende sessioner",
      varighed: "1-1,5 time",
      beskrivelse: "Vi går i dybden med de emner du ønsker at arbejde med",
      proces: [
        "Vi fortsætter hvor vi slap",
        "Arbejder med specifikke teknikker",
        "EMDR, meditation eller mentalisering",
        "I dit eget tempo og rytme"
      ],
      ikon: "🧘"
    },
    {
      type: "Afslutning",
      varighed: "Når du er klar",
      beskrivelse: "Du beslutter selv hvornår du har fået det du har brug for",
      proces: [
        "Mærk efter hvordan du har det",
        "Ingen binding eller forpligtelser", 
        "Du kan altid vende tilbage",
        "Kontakt når du er klar til næste skridt"
      ],
      ikon: "🌸"
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
            Hvordan foregår en session?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            En fleksibel tilgang hvor du bestemmer tempoet
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {sessionTyper.map((session, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${getCardClasses(index)} bg-gray-50 p-8 lg:p-10 h-full`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <span className="text-4xl">{session.ikon}</span>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide">
                  {session.type}
                </h3>
                <div className="text-sm text-gray-500 tracking-[0.1em] uppercase">
                  {session.varighed}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {session.beskrivelse}
              </p>

              {/* Process steps */}
              <div className="space-y-3">
                {session.proces.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="w-12 h-px bg-gray-200 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Afhængig af det du ønsker at arbejde med, er min anbefaling at du har 
            <strong> 2 til 10 sessioner</strong> i et forløb. Vi tager det helt i dit tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebCards;
