import React from 'react';

const MetodeSektion = () => {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Venstre side - Indhold */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
                Min tilgang
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition og energier, 
                og anvender en mentaliserende tilgang.
              </p>
            </div>

            {/* Metoder */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-gray-800 mb-3">EMDR</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  WHO-anerkendt metode til chok- og traumeforløsning
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-gray-800 mb-3">Mentalisering</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Forstå mentale tilstande og skab sikkerhed i relationer
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-gray-800 mb-3">Meditation</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Dyb indadvendt fokuseret opmærksomhed
                </p>
              </div>
            </div>
          </div>

          {/* Højre side - Billede */}
          <div className="lg:col-span-7">
            <div className="relative h-96 lg:h-[500px] bg-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-light">Billede af Susan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Citat sektion */}
        <div className="mt-24 lg:mt-32 max-w-4xl">
          <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6">
            "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra 
            ren ubetinget kærlighed."
          </blockquote>
          <cite className="text-sm font-light text-gray-400 tracking-wide">
            — KAREN AAES, ESSENTIELT INSTITUT
          </cite>
        </div>
      </div>
    </section>
  );
};

export default MetodeSektion;
