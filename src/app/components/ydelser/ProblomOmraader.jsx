"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
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
        <SectionHeader
          badge="Målgrupper"
          title="Hvem arbejder jeg med?"
          subtitle="Jeg tilbyder terapi til alle aldersgrupper og arbejder med en bred vifte af udfordringer. Her er nogle af de mest almindelige problemer jeg hjælper med."
          align="center"
        />
        
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
