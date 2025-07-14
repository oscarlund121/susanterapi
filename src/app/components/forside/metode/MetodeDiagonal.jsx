'use client'
import React, { useEffect, useState } from 'react';

const MetodeDiagonal = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredMethod, setHoveredMethod] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const metoder = [
    {
      id: 'emdr',
      title: 'EMDR',
      description: 'WHO-anerkendt metode til chok- og traumeforløsning',
      position: { top: '20%', left: '15%' }
    },
    {
      id: 'mentalisering',
      title: 'Mentalisering',
      description: 'Forstå mentale tilstande og skab sikkerhed i relationer',
      position: { top: '45%', right: '20%' }
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'Dyb indadvendt fokuseret opmærksomhed',
      position: { top: '70%', left: '25%' }
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -top-20 -left-20 w-96 h-96 text-gray-50" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <path d="M100,200 C100,100 200,50 300,100 C400,150 350,250 250,300 C150,350 50,300 100,200 Z" fill="currentColor" />
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-80 h-80 text-gray-50" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
          <path d="M50,150 C50,75 125,25 200,75 C275,125 250,200 175,225 C100,250 25,200 50,150 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-none">
        <div className="relative min-h-screen">
          {/* Diagonal split container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
            {/* Venstre side - Diagonal shape */}
            <div 
              className="lg:col-span-6 relative bg-gray-50"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <div className="px-8 lg:pl-8 xl:pl-16 2xl:pl-20 py-16 lg:py-24 space-y-12 h-full flex flex-col justify-center">
                <div>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
                    Min tilgang - Diagonal
                  </h2>
                  <p className="text-lg font-light text-gray-600 leading-relaxed">
                    Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition og energier, 
                    og anvender en mentaliserende tilgang.
                  </p>
                </div>

                {/* Method details - appears on hover */}
                {hoveredMethod && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500">
                    <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                      {metoder.find(m => m.id === hoveredMethod)?.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {metoder.find(m => m.id === hoveredMethod)?.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Højre side - Image med floating badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-96 lg:h-screen bg-gradient-to-br from-gray-100 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-light">Billede af Susan</span>
                </div>

                {/* Floating method badges */}
                {metoder.map((metode, index) => (
                  <div
                    key={metode.id}
                    className={`absolute bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white ${
                      hoveredMethod === metode.id ? 'scale-110 bg-white shadow-xl' : ''
                    }`}
                    style={{
                      ...metode.position,
                      transform: `translateY(${scrollY * (0.02 * (index + 1))}px)`
                    }}
                    onMouseEnter={() => setHoveredMethod(metode.id)}
                    onMouseLeave={() => setHoveredMethod(null)}
                  >
                    <span className="text-sm font-light text-gray-800 tracking-wide">
                      {metode.title}
                    </span>
                  </div>
                ))}

                {/* Glassmorphism quote overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                  <blockquote className="text-lg font-light text-gray-800 leading-relaxed mb-4 italic">
                    "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra 
                    ren ubetinget kærlighed."
                  </blockquote>
                  <cite className="text-xs font-light text-gray-600 tracking-[0.15em] not-italic">
                    — KAREN AAES, ESSENTIELT INSTITUT
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodeDiagonal;
