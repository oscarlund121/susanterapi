import React from 'react';

const SessionForloeb = () => {
  const steps = [
    {
      nummer: "01",
      titel: "Første kontakt",
      beskrivelse: "Send en SMS eller ring. Beskriv kort hvad du gerne vil tale om."
    },
    {
      nummer: "02", 
      titel: "Vi aftaler tid",
      beskrivelse: "Vi finder et tidspunkt der passer dig. Første session varer ofte lidt længere."
    },
    {
      nummer: "03",
      titel: "Samtalen",
      beskrivelse: "Vi finder sammen frem til det du ønsker at arbejde med. I dit eget tempo."
    },
    {
      nummer: "04",
      titel: "Efter sessionen",
      beskrivelse: "Mærk efter hvad du har brug for. Kontakt mig når du er klar til næste skridt."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
            Hvordan foregår<br />
            en session?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="text-2xl font-light text-gray-400">{step.nummer}</div>
              <h3 className="text-lg font-light text-gray-800">{step.titel}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.beskrivelse}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Afhængig af det du ønsker at arbejde med, er min anbefaling at du har 
            <strong> 2 til 10 sessioner</strong> i et forløb. Vi tager det helt i dit tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloeb;
