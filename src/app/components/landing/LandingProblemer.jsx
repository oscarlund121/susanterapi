"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import CardHeader from "../ui/CardHeader";

const LandingProblemer = () => {
  const problemAreas = [
    {
      category: "Følelser & Angst",
      description:
        "Når følelser bliver overvældende eller styrende for dit liv",
      problems: [
        "Angst og fobier",
        "Panikangst og sociale angste",
        "Vrede og frustration",
        "Tristhed og depression",
        "Følelsesmæssig ustabilitet",
        "Sorg og tab",
      ],
    },
    {
      category: "Stress & Udmattelse",
      description: "Når kroppen og sindet er udmattet og har brug for hvile",
      problems: [
        "Stress og udbrændthed",
        "Søvnproblemer og søvnløshed",
        "Tankemylder og negative tankemønstre",
        "Præstationsangst",
        "Udmattelse og energimangel",
        "Koncentrationsvanskeligheder",
      ],
    },
    {
      category: "Selvværd & Identitet",
      description: "Når du kæmper med at finde og acceptere dig selv som du er",
      problems: [
        "Lavt selvværd og selvtillid",
        "Usikkerhed og selvtvivl",
        "Fastlåsthed i negative mønstre",
        "Sensitivitet og overfølsomhed",
        "Selvkritik og perfektionisme",
        "Følelse af at være forkert",
      ],
    },
    {
      category: "Relationer & Familie",
      description:
        "Når forbindelser til andre bliver vanskelige eller smertefulde",
      problems: [
        "Parforhold og kæresteproblematikker",
        "Familiekonflikter og uro i familien",
        "Social angst og ensomhed",
        "Kommunikationsproblemer",
        "Skilsmisse og separation",
        "Forældrevejledning",
      ],
    },
    {
      category: "Traumer & Kriser",
      description:
        "Når tidligere oplevelser påvirker dit nuværende liv negativt",
      problems: [
        "Traumer og PTSD",
        "ADHD og neuropsykiatriske udfordringer",
        "Chok og akutte kriser",
        "Skolefravær og uddannelsesproblemer",
        "Uforklarlige fysiske reaktioner",
        "Misbrug og afhængighed",
      ],
    },
    {
      category: "Unge & Studerende",
      description: "Særlige udfordringer for unge i udvikling og uddannelse",
      problems: [
        "Eksamensangst og studieproblemer",
        "Gruppedannelser og sociale udfordringer",
        "Identitetsudvikling og fremtidsangst",
        "Økonomi og livsstil stress",
        "Kærlighed og forhold",
        "Overgang til voksenliv",
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <SectionHeader
          badgeText="Problemområder"
          title="Hvad jeg kan hjælpe med"
          
          buttonText="Start din rejse"
          buttonHref="/kontakt"
          buttonDirection="left"
          buttonVariant="yellow"
          buttonSize="large"
          variant="horizontal"
        />
     
        <div className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {problemAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
                style={{ minHeight: "450px" }}
              >
                {/* Top badge - consistent height */}
                <CardHeader 
                  number={String(index + 1).padStart(2, "0")}
                  title={area.category}
                  description={area.description}
                  variant="light"
                />

                {/* Content - equal distribution */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <BulletList items={area.problems} />
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
       
        {/* Bundtekst */}
        <div className="text-center mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto bg-white shadow-md p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light text-[#333333] mb-6">
              Kender du fornemmelsen?
            </h3>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
              Ikke at føle dig anerkendt som den du er eller fastlåst i en
              situation, som du ikke kan komme ud af? Måske er du et sted i
              livet, hvor du føler dig alene og mærker sorg, angst, vrede eller
              frygt. Din krop føles som om, den konstant er i alarmberedskab og
              forhindrer dig i at leve livet fuldt ud.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 font-light">
                Ved at finde frem til dine blokeringer finder vi ind til roden
                af problemet, forløser det og hjælper dig til en bedre
                fornemmelse i kroppen.
              </p>
              <div className="w-12 h-px bg-gray-800 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProblemer;
