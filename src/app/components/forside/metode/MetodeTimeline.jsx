'use client'
import React, { useEffect, useRef, useState } from 'react';

const MetodeTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef([]);

  const terapiRejse = [
    {
      id: 'start',
      title: 'Første kontakt',
      method: 'Samtale',
      description: 'Vi skaber en tryg ramme og får et overblik over dine udfordringer',
      phase: 'Begyndelse',
      icon: '🌱'
    },
    {
      id: 'understanding',
      title: 'Forståelse',
      method: 'Mentalisering',
      description: 'Vi udforsker mentale tilstande og skaber sikkerhed i relationer',
      phase: 'Udforskning',
      icon: '🧠'
    },
    {
      id: 'processing',
      title: 'Bearbejdning',
      method: 'EMDR',
      description: 'WHO-anerkendt metode til at forløse chok og traumer lagret i kroppen',
      phase: 'Transformation',
      icon: '👁️'
    },
    {
      id: 'integration',
      title: 'Integration',
      method: 'Meditation',
      description: 'Dyb indadvendt fokuseret opmærksomhed for varig forandring',
      phase: 'Helbredelse',
      icon: '🪷'
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
          threshold: 0.3,
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
      return `${baseClasses} opacity-100 translate-x-0`;
    }
    return `${baseClasses} opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Min tilgang - Timeline
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            En rejse gennem terapiprocessen - fra første kontakt til varig transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

          {/* Timeline steps */}
          <div className="space-y-24">
            {terapiRejse.map((step, index) => (
              <div
                key={step.id}
                ref={el => stepRefs.current[index] = el}
                className={`relative ${getStepClasses(index)}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <div className="mb-4">
                        <span className="text-2xl mb-2 block">{step.icon}</span>
                        <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <div className="mb-4">
                        <span className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-600 font-light">
                          {step.method}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Expanded info on hover */}
                      {activeStep === step.id && (
                        <div className="mt-6 pt-6 border-t border-gray-100 transition-all duration-300">
                          <p className="text-sm text-gray-500 italic">
                            Klik for at læse mere om denne fase i processen
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                      visibleSteps.has(index) ? 'bg-gray-400 scale-125' : 'bg-gray-200'
                    }`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Destination quote */}
          <div className="mt-24 text-center">
            <div className="inline-block bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-lg border border-gray-100">
              <div className="text-4xl mb-6">✨</div>
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6 italic">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra 
                ren ubetinget kærlighed."
              </blockquote>
              <cite className="text-sm font-light text-gray-400 tracking-[0.15em] not-italic">
                — KAREN AAES, ESSENTIELT INSTITUT
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodeTimeline;
