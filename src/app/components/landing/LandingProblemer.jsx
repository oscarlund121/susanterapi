"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

const LandingProblemer = () => {
  const problemAreas = [
    {
      category: "Følelser & Angst",
      description: "Når følelser bliver overvældende eller styrende for dit liv",
      problems: [
        "Angst og fobier",
        "Panikangst og sociale angste", 
        "Vrede og frustration",
        "Tristhed og depression",
        "Følelsesmæssig ustabilitet",
        "Sorg og tab"
      ]
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
        "Koncentrationsvanskeligheder"
      ]
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
        "Følelse af at være forkert"
      ]
    },
    {
      category: "Relationer & Familie",
      description: "Når forbindelser til andre bliver vanskelige eller smertefulde",
      problems: [
        "Parforhold og kæresteproblematikker",
        "Familiekonflikter og uro i familien",
        "Social angst og ensomhed",
        "Kommunikationsproblemer",
        "Skilsmisse og separation",
        "Forældrevejledning"
      ]
    },
    {
      category: "Traumer & Kriser", 
      description: "Når tidligere oplevelser påvirker dit nuværende liv negativt",
      problems: [
        "Traumer og PTSD",
        "ADHD og neuropsykiatriske udfordringer",
        "Chok og akutte kriser",
        "Skolefravær og uddannelsesproblemer",
        "Uforklarlige fysiske reaktioner",
        "Misbrug og afhængighed"
      ]
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
        "Overgang til voksenliv"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>
            Problemområder
          </SectionBadge>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Hvad jeg kan hjælpe med
          </h2>
          <div className="w-20 h-0.5 bg-[#1cc18e] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-4xl mx-auto">
            Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag. 
            Et chok er bredt defineret og individuelt - mærker du dig fastlåst, ude af 
            dig selv eller ved siden af dig selv, kan vi arbejde med det.
          </p>
        </div>

        {/* OPTION 1: Modern Green Cards */}
        {/*
        <div className="mb-32">
          <h3 className="text-2xl font-light text-gray-800 mb-8 text-center">Option 1: Modern Green Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemAreas.map((area, index) => (
              <div key={index} className="bg-white border border-[#1cc18e]/20 rounded-lg p-8 h-full hover:shadow-md transition-shadow duration-200">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#1cc18e] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="w-8 h-0.5 bg-[#1cc18e]"></div>
                    </div>
                    <h3 className="text-xl font-light text-gray-800 mb-3">
                      {area.category}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {area.problems.map((problem, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-#1cc18e rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-light">
                          {problem}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* OPTION 2: Badge Header Cards */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemAreas.map((area, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
                {/* Top badge */}
                <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1  border rounded-md text-xs font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-gray-800 mb-2">
                    {area.category}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <BulletList items={area.problems} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OPTION 3: Minimal Border Cards */}
        {/*
        <div className="mb-32">
          <h3 className="text-2xl font-light text-gray-800 mb-8 text-center">Option 3: Minimal Border Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemAreas.map((area, index) => (
              <div key={index} className="bg-white border-l-4 border-#1cc18e shadow-sm p-8 h-full">
                <div className="space-y-6">
                  <div>
                    <div className="mb-4">
                      <span className="text-#1cc18e text-sm font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-gray-800 mb-3">
                      {area.category}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="w-12 h-0.5 bg-#1cc18e"></div>
                  </div>

                  <div className="space-y-3">
                    {area.problems.map((problem, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="text-#1cc18e text-xs mt-1">•</span>
                        <span className="text-sm text-gray-700 font-light">
                          {problem}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Bundtekst */}
        <div className="text-center mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
              Kender du fornemmelsen?
            </h3>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
              Ikke at føle dig anerkendt som den du er eller fastlåst i en situation, 
              som du ikke kan komme ud af? Måske er du et sted i livet, hvor du føler 
              dig alene og mærker sorg, angst, vrede eller frygt. Din krop føles som om, 
              den konstant er i alarmberedskab og forhindrer dig i at leve livet fuldt ud.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 font-light">
                Ved at finde frem til dine blokeringer finder vi ind til roden af problemet, 
                forløser det og hjælper dig til en bedre fornemmelse i kroppen.
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
