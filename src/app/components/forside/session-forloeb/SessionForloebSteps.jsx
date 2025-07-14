'use client'
import React, { useState } from 'react';

const SessionForloebSteps = () => {
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
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvordan foregår en session?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto">
            En fleksibel tilgang hvor du bestemmer tempoet og dybden
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sessionSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                activeStep === index
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="text-sm font-light tracking-wide">
                {step.nummer} - {step.titel}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="max-w-4xl mx-auto">
          {sessionSteps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                activeStep === index ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              style={{ display: activeStep === index ? 'block' : 'none' }}
            >
              <div className="bg-gray-50 p-12 rounded-lg">
                <div className="text-center mb-8">
                  <div className="text-6xl font-light text-gray-300 mb-4">{step.nummer}</div>
                  <h3 className="text-3xl font-light text-gray-800 mb-2 tracking-wide">
                    {step.titel}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-[0.1em] uppercase mb-6">
                    {step.varighed}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {step.beskrivelse}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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

export default SessionForloebSteps;
