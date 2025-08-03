"use client";
import React from "react";

const SessionForloeb = () => {
  const forloebsSteps = [
    {
      nummer: "01",
      titel: "Første samtale",
      beskrivelse: "Vi starter med en snak om dig og det du gerne vil arbejde med. Jeg lytter og stiller spørgsmål, så vi sammen finder ud af, hvordan jeg bedst kan hjælpe dig.",
      varighed: "1-1,5 time",
      fokus: "Tillid og tryghed"
    },
    {
      nummer: "02", 
      titel: "Forløbsplan",
      beskrivelse: "Baseret på første samtale laver vi en plan tilpasset dine behov. Vi aftaler antal sessioner og hvilke metoder der vil være mest effektive for dig.",
      varighed: "Del af 2. session",
      fokus: "Målsætning og struktur"
    },
    {
      nummer: "03",
      titel: "Aktiv terapi",
      beskrivelse: "Her går vi i dybden med det du ønsker at arbejde med. Vi bruger forskellige metoder som EMDR, mentalisering eller meditation alt efter dine behov.",
      varighed: "2-8 sessioner",
      fokus: "Transformation og healing"
    },
    {
      nummer: "04",
      titel: "Integration",
      beskrivelse: "Vi arbejder med at integrere de nye indsigter og værktøjer i din hverdag. Du lærer teknikker du kan bruge selv fremadrettet.",
      varighed: "1-2 sessioner",
      fokus: "Selvstændighed og vedligeholdelse"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
            Sådan foregår et terapiforløb
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Hvert forløb er individuelt tilpasset, men følger generelt denne struktur 
            for at sikre den bedste udvikling og transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {forloebsSteps.map((step, index) => (
            <div key={index} className="bg-white shadow-sm p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800/50 text-white flex items-center justify-center text-lg font-light">
                  {step.nummer}
                </div>
                <h3 className="text-2xl font-light text-gray-800">{step.titel}</h3>
              </div>
              
              <p className="text-gray-600 font-light">{step.beskrivelse}</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Varighed:</span> {step.varighed}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Fokus:</span> {step.fokus}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionForloeb;
