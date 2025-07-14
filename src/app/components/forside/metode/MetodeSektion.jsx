import React from 'react';

const MetodeSektion = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Venstre side - Indhold */}
          <div className="lg:col-span-5 px-8 lg:pl-8 xl:pl-16 2xl:pl-20 space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
                Min tilgang - Original
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition og energier, 
                og anvender en mentaliserende tilgang.
              </p>
            </div>

            {/* Metoder */}
            <div className="space-y-8">
              <div className="py-4">
                <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide">EMDR</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  WHO-anerkendt metode til chok- og traumeforløsning
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide">Mentalisering</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Forstå mentale tilstande og skab sikkerhed i relationer
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide">Meditation</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Dyb indadvendt fokuseret opmærksomhed
                </p>
              </div>
            </div>
          </div>

          {/* Højre side - Billede */}
          <div className="lg:col-span-7 lg:pl-16">
            <div className="relative h-96 lg:h-screen bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-light">Billede af Susan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Citat sektion */}
        <div className="mt-24 lg:mt-32 max-w-4xl px-8 lg:pl-8 xl:pl-16 2xl:pl-20">
          <div className="py-8 lg:py-12 text-center">
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
    </section>
  );
};

export default MetodeSektion;
