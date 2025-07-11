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
    <section className="py-32 bg-white">
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
            <div className="bg-white/70 backdrop-blur-sm p-8 border border-gray-100/50 shadow-lg">
              <h3 className="text-lg font-light mb-8 text-gray-800 tracking-wide">Jeg arbejder ofte med:</h3>
              <div className="grid grid-cols-1 gap-3">
                {problemområder.map((problem, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60 hover:bg-gray-100/60 transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
                det du ønsker at arbejde med.
              </p>
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 hover:shadow-lg transition-all duration-500 font-light tracking-wide group"
              >
                <span>Book session</span>
                <span className="transform transition-transform group-hover:translate-x-1 text-sm opacity-70 group-hover:opacity-100">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedSektion;
