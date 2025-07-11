import React from 'react';

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
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Venstre side - Titel */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Hvad kan jeg<br />
              hjælpe med?
            </h2>
          </div>

          {/* Højre side - Indhold */}
          <div className="space-y-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
              eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
            </p>

            {/* Problem områder */}
            <div>
              <h3 className="text-lg font-light mb-8 text-gray-800">Jeg arbejder ofte med:</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {problemområder.map((problem, index) => (
                  <div key={index} className="text-gray-600 text-sm py-2 border-b border-gray-200">
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6">
                En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
                det du ønsker at arbejde med.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block border border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Book session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedSektion;
