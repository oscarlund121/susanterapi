'use client'
import React, { useEffect, useRef, useState } from 'react';

const MetodeHorizontal = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const mobileStepRefs = useRef([]);
  const desktopStepRefs = useRef([]);

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
    // Check screen size and use appropriate refs
    const isDesktop = window.innerWidth >= 768;
    const currentStepRefs = isDesktop ? desktopStepRefs.current : mobileStepRefs.current;
    
    const observers = currentStepRefs.map((step, index) => {
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

    // Add horizontal scroll listener for desktop (md+)
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

    // Add vertical scroll listener for mobile (<md)
    const handleVerticalScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      if (sectionBottom > 0 && sectionTop < windowHeight) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
        setScrollProgress(progress);
      }
    };

    // Check screen size and add appropriate listener
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      
      if (isDesktop && scrollContainer) {
        scrollContainer.addEventListener('scroll', handleHorizontalScroll);
        window.removeEventListener('scroll', handleVerticalScroll);
      } else {
        window.addEventListener('scroll', handleVerticalScroll);
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', handleHorizontalScroll);
        }
        handleVerticalScroll();
      }
    };

    // Initial check
    checkScreenSize();
    
    // Listen for resize
    window.addEventListener('resize', checkScreenSize);

    return () => {
      observers.forEach(observer => observer?.disconnect());
      window.removeEventListener('scroll', handleVerticalScroll);
      window.removeEventListener('resize', checkScreenSize);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleHorizontalScroll);
      }
    };
  }, []);

  const getStepClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleSteps.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 md:translate-x-0 md:translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-8 md:translate-x-8 md:translate-y-0`;
  };

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-left mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Min tilgang - Horizontal
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl">
            En rejse gennem terapiprocessen - fra første kontakt til varig transformation
          </p>
        </div>

        {/* Desktop: Horizontal progress bar */}
        <div className="hidden md:block mb-16">
          <div className="relative w-full h-px bg-gray-200">
            <div 
              className="absolute top-0 left-0 h-px bg-gray-400 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            {terapiRejse.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className={`w-2 h-2 rounded-full mx-auto mb-2 transition-all duration-500 ${
                  visibleSteps.has(index) ? 'bg-gray-400' : 'bg-gray-200'
                }`}></div>
                <span className="text-xs font-light text-gray-400 tracking-wider">
                  {step.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile: Vertical stack with progress bar */}
          <div className="md:hidden">
            <div className="relative flex">
              {/* Vertical progress line */}
              <div className="relative flex flex-col items-center mr-8 flex-shrink-0 z-30">
                {/* Full height line */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px bg-gray-200 z-30" 
                     style={{ height: `calc(100% - 24px)` }}>
                  <div 
                    className="absolute top-0 left-0 w-px bg-gray-400 transition-all duration-300 ease-out z-30"
                    style={{ height: `${scrollProgress * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Steps */}
              <div className="flex-1 space-y-16">
                {terapiRejse.map((step, index) => (
                  <div key={`mobile-${step.id}`} className="relative">
                    {/* Progress dot */}
                    <div className="absolute -left-12 top-6 flex items-center justify-center z-40">
                      <div className={`w-3 h-3 rounded-full transition-all duration-500 border-2 border-white z-40 ${
                        visibleSteps.has(index) ? 'bg-gray-400' : 'bg-gray-200'
                      }`}></div>
                    </div>
                    
                    <div
                      ref={el => mobileStepRefs.current[index] = el}
                      className={`${getStepClasses(index)}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="bg-white p-6">
                        {/* Number */}
                        <div className="mb-4">
                          <span className="text-3xl font-extralight text-gray-300 tracking-wider">
                            {step.number}
                          </span>
                        </div>

                        {/* Phase */}
                        <div className="mb-3">
                          <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                            {step.phase}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide leading-tight">
                          {step.title}
                        </h3>

                        {/* Method badge */}
                        <div className="mb-4">
                          <span className="text-sm text-gray-600 font-light tracking-wide">
                            {step.method}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>

                        {/* Subtle line */}
                        <div className="mt-6">
                          <div className="w-12 h-px bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal scroll container */}
          <div 
            ref={scrollContainerRef}
            className="hidden md:flex gap-8 lg:gap-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300"
            style={{ scrollbarWidth: 'thin' }}
          >
            {terapiRejse.map((step, index) => (
                <div
                  key={`desktop-${step.id}`}
                  ref={el => desktopStepRefs.current[index] = el}
                  className={`flex-none w-72 lg:w-80 ${getStepClasses(index)}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white p-8 lg:p-10 h-full">
                    {/* Number */}
                    <div className="mb-6">
                      <span className="text-4xl lg:text-5xl font-extralight text-gray-300 tracking-wider">
                        {step.number}
                      </span>
                    </div>

                    {/* Phase */}
                    <div className="mb-4">
                      <span className="text-xs font-light text-gray-400 tracking-[0.15em] uppercase">
                        {step.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4 tracking-wide leading-tight">
                      {step.title}
                    </h3>

                    {/* Method badge */}
                    <div className="mb-6">
                      <span className="text-sm text-gray-600 font-light tracking-wide">
                        {step.method}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
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

        {/* Quote */}
        <div className="mt-24 lg:mt-32 text-left">
          <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6 italic max-w-3xl mx-auto">
            "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra 
            ren ubetinget kærlighed."
          </blockquote>
          <cite className="text-sm font-light text-gray-400 tracking-[0.15em] not-italic">
            — KAREN AAES, ESSENTIELT INSTITUT
          </cite>
        </div>
      </div>
    </section>
  );
};

export default MetodeHorizontal;
