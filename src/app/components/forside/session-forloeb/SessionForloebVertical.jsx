'use client'
import React, { useState } from 'react';

const SessionForloebVertical = () => {
  const [activeStep, setActiveStep] = useState(0);

  const sessionSteps = [
    {
      nummer: "01",
      titel: "Første kontakt",
      varighed: "Få minutter",
      beskrivelse: "Du ringer eller sender en SMS for at booke din første session",
      detaljer: [
        "Ring eller send SMS til 24 29 81 28",
        "Beskriv kort hvad du gerne vil tale om",
        "Vi finder et tidspunkt der passer dig",
        "Ingen forpligtelser eller lange forklaringer nødvendige"
      ]
    },
    {
      nummer: "02", 
      titel: "Første session",
      varighed: "1,5-2 timer",
      beskrivelse: "Vi skaber en tryg ramme og får et overblik over dine udfordringer",
      detaljer: [
        "Jeg lytter til din historie uden at dømme",
        "Vi identificerer de områder du ønsker at arbejde med",
        "Du bestemmer selv hvor meget du vil dele",
        "Vi lægger en plan for det videre forløb sammen"
      ]
    },
    {
      nummer: "03",
      titel: "Opfølgende sessioner", 
      varighed: "1-1,5 time",
      beskrivelse: "Vi arbejder fokuseret med de teknikker og emner der passer dig",
      detaljer: [
        "EMDR til behandling af traumer og ubehagelige minder",
        "Meditation og mindfulness teknikker",
        "Mentalisering for bedre selvforståelse",
        "Praktiske værktøjer du kan bruge i hverdagen"
      ]
    },
    {
      nummer: "04",
      titel: "Afslutning",
      varighed: "Når du er klar",
      beskrivelse: "Du beslutter selv hvornår du har fået det du har brug for",
      detaljer: [
        "Ingen binding eller langvarige forpligtelser",
        "Du kan altid tage en pause og vende tilbage senere",
        "Opfølgning efter behov", 
        "Døren står altid åben for fremtidige sessioner"
      ]
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvordan foregår en session?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto">
            En fleksibel tilgang hvor du bestemmer tempoet og dybden
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Steps Navigation - Vertikal på desktop */}
          <div className="lg:col-span-1">
            <div className="space-y-4 lg:space-y-6">
              {sessionSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 border ${
                    activeStep === index
                      ? 'bg-gray-800 text-white border-gray-800 shadow-lg'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-light ${
                      activeStep === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.nummer}
                    </span>
                    <div>
                      <h3 className="font-light tracking-wide text-lg mb-1">
                        {step.titel}
                      </h3>
                      <p className={`text-xs tracking-[0.1em] uppercase ${
                        activeStep === index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {step.varighed}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="relative min-h-[500px]">
              {sessionSteps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    activeStep === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="bg-gray-50 p-12 rounded-lg h-full">
                    <div className="mb-8">
                      <div className="text-6xl font-light text-gray-300 mb-6">{step.nummer}</div>
                      <h3 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
                        {step.titel}
                      </h3>
                      <p className="text-sm text-gray-500 tracking-[0.1em] uppercase mb-6">
                        {step.varighed}
                      </p>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {step.beskrivelse}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {step.detaljer.map((detalje, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{detalje}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-16 h-px bg-gray-200 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Min anbefaling er typisk <strong>2 til 10 sessioner</strong> afhængig af det du ønsker at arbejde med. 
            Vi tager det helt i dit tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebVertical;
