'use client'
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

const HjaelpeMedTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  const livsområder = [
    {
      område: "Følelsesliv",
      beskrivelse: "Når følelser tager over",
      problemer: ["Angst og fobier", "Vrede og frustration", "Tristhed/depression", "Følelsesmæssig ustabilitet"],
      ikon: "💙"
    },
    {
      område: "Stress & Energi", 
      beskrivelse: "Når kroppen siger stop",
      problemer: ["Stress og udbrændthed", "Søvnproblemer", "Tankemylder", "Præstationsangst"],
      ikon: "⚡"
    },
    {
      område: "Identitet & Selvværd",
      beskrivelse: "Når du ikke kan finde dig selv",
      problemer: ["Lavt selvværd", "Usikkerhed", "Fastlåsthed", "Sensitivitet"],
      ikon: "🌱"
    },
    {
      område: "Relationer & Sociale",
      beskrivelse: "Når forbindelser går i stykker",
      problemer: ["Parforhold problemer", "Skolefravær", "Familiekonflikter", "Social angst"],
      ikon: "👥"
    },
    {
      område: "Traumer & Fortid",
      beskrivelse: "Når fortiden hjemsøger nutiden",
      problemer: ["Traumer", "Sorg og tab", "ADHD", "Chok og kriser"],
      ikon: "🕊️"
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((step, index) => {
      if (!step) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(step);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getStepClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleSteps.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-8`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
            eller fastlåst i en situation? Jeg hjælper med at finde vej videre.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {livsområder.map((område, index) => (
              <div
                key={index}
                ref={el => stepRefs.current[index] = el}
                className={`${getStepClasses(index)} relative`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="max-w-md mx-auto md:mx-0">
                      <div className="mb-4">
                        <span className="text-4xl">{område.ikon}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-2 tracking-wide leading-tight">
                        {område.område}
                      </h3>
                      <p className="text-gray-500 italic mb-6 text-sm">
                        {område.beskrivelse}
                      </p>
                      <div className="space-y-2">
                        {område.problemer.map((problem, problemIndex) => (
                          <div key={problemIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{problem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 bg-white border-2 border-gray-300 rounded-full relative z-10 flex-shrink-0">
                    <div className={`w-2 h-2 bg-gray-400 rounded-full m-auto transition-all duration-500 ${
                      visibleSteps.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
            det du ønsker at arbejde med.
          </p>
          <Button href="/kontakt">
            Book session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedTimeline;
