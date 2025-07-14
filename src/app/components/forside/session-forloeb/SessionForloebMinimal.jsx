'use client'
import React, { useState } from 'react';

const SessionForloebMinimal = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      titel: "Kontakt",
      beskrivelse: "Du ringer eller sender SMS når du er klar til at tale",
      detaljer: "Ring 24 29 81 28 eller send en besked. Beskriv kort dit behov.",
      tid: "Få minutter"
    },
    {
      titel: "Første møde", 
      beskrivelse: "Vi skaber en tryg ramme for din historie",
      detaljer: "Du deler det du har brug for at tale om. Jeg lytter uden at dømme.",
      tid: "1,5-2 timer"
    },
    {
      titel: "Forløb",
      beskrivelse: "Vi arbejder sammen med konkrete teknikker",
      detaljer: "EMDR, meditation og mentalisering tilpasset dine behov.",
      tid: "1-1,5 time"
    },
    {
      titel: "Afslutning",
      beskrivelse: "Du bestemmer selv hvornår du er klar",
      detaljer: "Ingen binding. Du kan stoppe, tage pause eller fortsætte efter behov.",
      tid: "Når du ønsker"
    }
  ];

  return (
    <section className="py-40 lg:py-48 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight tracking-[0.02em] mb-6">
            Hvordan foregår en session?
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer transition-all duration-500 ease-out ${
                activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <div className="border-b border-gray-100 pb-16">
                {/* Step number and title */}
                <div className="flex items-baseline gap-8 mb-8">
                  <span className={`text-7xl font-extralight transition-colors duration-300 ${
                    activeStep === index ? 'text-gray-800' : 'text-gray-300'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl font-light text-gray-800 tracking-wide mb-2">
                      {step.titel}
                    </h3>
                    <p className="text-sm text-gray-500 tracking-[0.1em] uppercase">
                      {step.tid}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={`transition-all duration-500 ${
                  activeStep === index ? 'max-h-96 opacity-100' : 'max-h-20 opacity-60'
                }`}>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                    {step.beskrivelse}
                  </p>
                  
                  {activeStep === index && (
                    <div className="transition-all duration-300 delay-200">
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {step.detaljer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 text-center">
          <div className="w-8 h-px bg-gray-200 mx-auto mb-12"></div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            Et forløb er typisk 2 til 10 sessioner. 
            <br />
            Du bestemmer tempoet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebMinimal;
