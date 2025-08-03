"use client";
import React from "react";

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
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Hvad jeg kan hjælpe med
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-4xl mx-auto">
            Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag. 
            Et chok er bredt defineret og individuelt - mærker du dig fastlåst, ude af 
            dig selv eller ved siden af dig selv, kan vi arbejde med det.
          </p>
          <div className="w-16 h-px bg-gray-800 mx-auto mt-8"></div>
        </div>

        {/* Problem kategorier */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemAreas.map((area, index) => (
            <div key={index} className="bg-white shadow-sm p-8 h-full">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-gray-800/50 text-white px-3 py-1 text-sm font-light tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-light text-gray-800">
                      {area.category}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Problem liste */}
                <div className="space-y-3">
                  {area.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
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
