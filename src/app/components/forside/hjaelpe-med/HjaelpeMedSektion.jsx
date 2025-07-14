import React from 'react';

import Button from '../../ui/Button';

const HjaelpeMedSektion = () => {
  const problemområder = [
    "Angst og fobier",
    "Stress og udbrændthed", 
    "Sorg og tab",
    "Lavt selvværd",
    "Traumer",
    "Vrede og frustration",
    "ADHD",
    "Skolefravær",
    "Præstationsangst",
    "Usikkerhed",
    "Fastlåsthed",
    "Søvnproblemer",
    "Tristhed/depression",
    "Sensitivitet",
    "Tankemylder",
    "Parforhold problemer"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Titel og beskrivelse */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Venstre side - Titel */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Hvad kan jeg<br />
              hjælpe med?
            </h2>
          </div>

          {/* Højre side - Beskrivelse */}
          <div className="space-y-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
              eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
            </p>

            {/* Call to action */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
                det du ønsker at arbejde med.
              </p>
              <Button href="/kontakt">
                Book session
              </Button>
            </div>
          </div>
        </div>

        {/* Problem områder - fuld bredde */}
        <div className="py-8">
          <h3 className="text-xl lg:text-2xl font-light mb-12 text-gray-800 tracking-wide">Jeg arbejder ofte med:</h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-4">
            {problemområder.map((problem, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600 text-sm py-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></div>
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedSektion;
