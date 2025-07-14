'use client'
import React, { useState } from 'react';
import Button from '../../ui/Button';

const HjaelpeMedAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const kategorier = [
    {
      titel: "Følelsesmæssige udfordringer",
      beskrivelse: "Når følelser bliver overvældende eller svære at håndtere",
      problemer: ["Angst og fobier", "Vrede og frustration", "Tristhed/depression", "Følelsesmæssig ustabilitet"]
    },
    {
      titel: "Stress og energimangel",
      beskrivelse: "Når kroppen og sindet er udmattet",
      problemer: ["Stress og udbrændthed", "Søvnproblemer", "Tankemylder", "Præstationsangst"]
    },
    {
      titel: "Selvværd og identitet",
      beskrivelse: "Når du kæmper med at finde og acceptere dig selv",
      problemer: ["Lavt selvværd", "Usikkerhed", "Fastlåsthed", "Sensitivitet"]
    },
    {
      titel: "Relationer og sociale udfordringer",
      beskrivelse: "Når forbindelser til andre bliver vanskelige",
      problemer: ["Parforhold problemer", "Skolefravær", "Familiekonflikter", "Social angst"]
    },
    {
      titel: "Traumer og fortidsoplevelser",
      beskrivelse: "Når tidligere oplevelser påvirker dit nuværende liv",
      problemer: ["Traumer", "Sorg og tab", "ADHD", "Chok og kriser"]
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
          </p>
          <Button href="/kontakt">
            Book session
          </Button>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {kategorier.map((kategori, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                className="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-1 tracking-wide">
                    {kategori.titel}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {kategori.beskrivelse}
                  </p>
                </div>
                <div className={`transform transition-transform duration-200 ${
                  openAccordion === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 py-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {kategori.problemer.map((problem, problemIndex) => (
                      <div key={problemIndex} className="flex items-center gap-3 text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <span>{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
            det du ønsker at arbejde med.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedAccordion;
