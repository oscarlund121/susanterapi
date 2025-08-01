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
    <section className="py-20 md:py-32">
      <div className="w-full px-4 md:px-0">
        {/* Header */}
        <div className="mb-10 md:mb-20 w-full text-left md:pl-4">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Hvordan foregår en session?
          </h2>
          <p className="text-base md:text-lg italic font-light text-gray-500 mb-8 max-w-2xl">
            En fleksibel tilgang hvor du bestemmer tempoet og dybden
          </p>
        </div>

        {/* Timeline/Flow */}
        <div className="relative w-full">
          {/* Hero Image */}
          <div className="w-full mb-12 md:mb-25">
            <div className="w-full h-32 md:h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Session Forløb Banner</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full items-center ">
            {/* Session steps navigation */}
            <div className="w-full mb-8 md:mb-12">
              <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 md:gap-6">
                {sessionSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`md:flex-1 text-left p-4 md:p-6 transition-all duration-300 border-2 ${
                      activeStep === index
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-lg md:text-xl font-extralight bg-gray-800 md:bg-gray-800/50 text-white px-2 tracking-wider">
                        {step.nummer}
                      </span>
                      <div>
                        <h3 className="font-light text-sm md:text-base mb-1">
                          {step.titel}
                        </h3>
                        <p className={`text-xs italic ${
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

            {/* Active step content */}
            <div className="w-full">
              <div className="w-full max-w-4xl ">
                {/* Nummer */}
                <div className="mb-6 md:mb-8 text-left pl-0 md:pl-4">
                  <span className="text-6xl lg:text-7xl font-extralight bg-gray-800/50 text-white px-2 tracking-wider drop-shadow-md">
                    {sessionSteps[activeStep].nummer}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl pl-0 md:pl-4 font-light mb-2 w-full">
                  {sessionSteps[activeStep].titel}
                </h3>
                <p className="pl-0 md:pl-4 text-gray-500 italic mb-2 text-base md:text-lg w-full">
                  {sessionSteps[activeStep].varighed}
                </p>
                <p className="pl-0 md:pl-4 text-gray-600 mb-6 text-base md:text-lg w-full">
                  {sessionSteps[activeStep].beskrivelse}
                </p>
                
                <ul className="flex flex-col w-full border-y divide-y">
                  {sessionSteps[activeStep].detaljer.map((detalje, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-between w-full py-6 md:py-8 px-0 text-left">
                      <span className="pl-0 md:pl-4 font-light text-sm md:text-md">
                        {detalje}
                      </span>
                      <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-300 inline-block mr-0 md:mr-2" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-left mt-12 w-full">
          <p className="text-gray-500 pl-0 md:pl-4 w-full mb-8 font-light text-sm md:text-base">
            Min anbefaling er typisk <strong>2 til 10 sessioner</strong> afhængig af det du ønsker at arbejde med. 
            Vi tager det helt i dit tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebVertical;
