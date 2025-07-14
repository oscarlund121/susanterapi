'use client'
import React, { useEffect, useRef, useState } from 'react';

const MetodeSteps = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  const terapiRejse = [
    {
      id: 'start',
      number: '01',
      title: 'Første kontakt',
      method: 'Samtale',
      description: 'Vi skaber en tryg ramme og får et overblik over dine udfordringer',
      phase: 'Begyndelse'
    },
    {
      id: 'understanding',
      number: '02',
      title: 'Forståelse',
      method: 'Mentalisering',
      description: 'Vi udforsker mentale tilstande og skaber sikkerhed i relationer',
      phase: 'Udforskning'
    },
    {
      id: 'processing',
      number: '03',
      title: 'Bearbejdning',
      method: 'EMDR',
      description: 'WHO-anerkendt metode til at forløse chok og traumer lagret i kroppen',
      phase: 'Transformation'
    },
    {
      id: 'integration',
      number: '04',
      title: 'Integration',
      method: 'Meditation',
      description: 'Dyb indadvendt fokuseret opmærksomhed for varig forandring',
      phase: 'Helbredelse'
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((step, index) => {
      if (!step) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps(prev => new Set([...prev, index]));
              }, index * 200);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
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

  const getStaggerClasses = (index) => {
    // Staggered indentation - alternating left/right with increasing offset
    const baseClasses = "max-w-2xl";
    
    switch (index % 4) {
      case 0: return `${baseClasses} lg:ml-0`; // Far left
      case 1: return `${baseClasses} lg:ml-32`; // Slightly right
      case 2: return `${baseClasses} lg:ml-16`; // Center-left
      case 3: return `${baseClasses} lg:ml-48`; // Far right
      default: return baseClasses;
    }
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Min tilgang - Steps
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl">
            En rejse gennem terapiprocessen - fra første kontakt til varig transformation
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24 lg:space-y-32">
          {terapiRejse.map((step, index) => (
            <div
              key={step.id}
              ref={el => stepRefs.current[index] = el}
              className={`${getStepClasses(index)} ${getStaggerClasses(index)}`}
            >
              <div className="relative py-12 lg:py-16">
                {/* Step indicator */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                  <span className="text-sm font-light text-gray-300 tracking-wider">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Phase */}
                  <div>
                    <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                      {step.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
                    {step.title}
                  </h3>

                  {/* Method */}
                  <div>
                    <span className="text-lg text-gray-600 font-light tracking-wide">
                      {step.method}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Subtle divider */}
                <div className="mt-12">
                  <div className="w-16 h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Quote as final step */}
          <div
            ref={el => stepRefs.current[4] = el}
            className={`${getStepClasses(4)} max-w-3xl lg:ml-24`}
          >
            <div className="relative py-12 lg:py-16">
              {/* Step indicator */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                <span className="text-sm font-light text-gray-300 tracking-wider">
                  05
                </span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Phase */}
                <div>
                  <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                    FILOSOFI
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed italic">
                  "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra 
                  ren ubetinget kærlighed."
                </blockquote>

                {/* Citation */}
                <cite className="text-sm font-light text-gray-400 tracking-[0.15em] not-italic">
                  — KAREN AAES, ESSENTIELT INSTITUT
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodeSteps;
