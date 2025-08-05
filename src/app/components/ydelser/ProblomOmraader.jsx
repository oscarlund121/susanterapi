"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col items-start mb-2 md:mb-6">
          <SectionBadge>
            Målgrupper
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Hvem arbejder jeg med?
          </h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed">
            Jeg tilbyder terapi til alle aldersgrupper og arbejder med en bred vifte af udfordringer. 
            Her er nogle af de mest almindelige problemer jeg hjælper med.
          </h6>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {målgrupper.map((gruppe, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-light text-gray-800">{gruppe.titel}</h3>
              <BulletList items={gruppe.problemer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblomOmraader;
