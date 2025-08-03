"use client";
import React from "react";

const ProblomOmraader = () => {
  const målgrupper = [
    {
      titel: "Børn (6-12 år)",
      problemer: [
        "Skolefravær og læringsvanskeligheder",
        "ADHD og koncentrationsbesvær", 
        "Angst og bekymringer",
        "Sociale udfordringer",
        "Følelsesmæssige udbrud",
        "Traumeoplevelser",
        "Søvnproblemer",
        "Lavt selvværd"
      ]
    },
    {
      titel: "Unge (13-25 år)",
      problemer: [
        "Præstationsangst og eksamenstress",
        "Sociale fobier og usikkerhed", 
        "Identitetskriser",
        "Spiseforstyrrelser",
        "Selvskade og depression",
        "Familiekonflikter",
        "Kærlighedssorg",
        "Fremtidsangst"
      ]
    },
    {
      titel: "Voksne (25+ år)",
      problemer: [
        "Stress og udbrændthed",
        "Angst og panikattakker",
        "Depression og tristhed",
        "Traumer og PTSD",
        "Parforhold og skilsmisse", 
        "Sorg og tab",
        "Arbejdsrelaterede problemer",
        "Livskriser og overgangsperioder"
      ]
    },
    {
      titel: "Familier og par",
      problemer: [
        "Kommunikationsvanskeligheder",
        "Konflikter og uenigheder",
        "Tillidssprød",
        "Forældreguidning",
        "Blended family udfordringer",
        "Seksuelle problemer",
        "Økonomi og stress",
        "Forskellige værdier"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
            Hvem arbejder jeg med?
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Jeg tilbyder terapi til alle aldersgrupper og arbejder med en bred vifte af udfordringer. 
            Her er nogle af de mest almindelige problemer jeg hjælper med.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {målgrupper.map((gruppe, index) => (
            <div key={index} className="bg-white shadow-sm p-8 space-y-6">
              <h3 className="text-2xl font-light text-gray-800">{gruppe.titel}</h3>
              
              <div className="space-y-3">
                {gruppe.problemer.map((problem, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-600 text-sm">{problem}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblomOmraader;
