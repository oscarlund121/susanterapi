"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import CardHeader from "../ui/CardHeader";
import CallToActionBox from "../layout/CallToActionBox";
import StaticButton from "../ui/StaticButton";

const LandingProblemer = () => {
  const problemAreas = [
    {
      category: "Følelser & Angst",
      description: "Når følelser bliver overvældende eller styrende for dit liv",
      color: "from-soft-peach-200/30 to-soft-peach-100/20",
      icon: "💭",
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
      color: "from-sage-200/30 to-sage-100/20",
      icon: "🌿",
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
      color: "from-warm-beige-200/30 to-warm-beige-100/20", 
      icon: "🦋",
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
      description: "Når forbindelser til andre bliver vanskelige eller smertefulde",
      color: "from-soft-peach-200/30 to-warm-beige-100/20",
      icon: "🤝",
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
      description: "Når tidligere oplevelser påvirker dit nuværende liv negativt",
      color: "from-sage-200/30 to-soft-peach-100/20",
      icon: "🌱",
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
      color: "from-warm-beige-200/30 to-sage-100/20",
      icon: "🎓",
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
    <section className="section-padding bg-gradient-to-br from-warm-beige-100 via-warm-beige-50 to-sage-100 relative overflow-hidden">
      {/* Organic background shapes - more dynamic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sage-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-warm-beige-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-60 h-60 bg-soft-peach-200/25 rounded-full blur-2xl"></div>
      </div>

      {/* Full width container */}
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Centered header */}
        <div className="text-center mb-16">
          <SectionHeader
            badgeText="Find din løsning"
            title="Få hjælp til disse udfordringer"
            description="Uanset hvilke udfordringer du står med, er der hjælp at hente. Jeg arbejder holistisk med både krop og sind for at hjælpe dig videre."
            buttonText="Book en uforpligtende samtale"
            buttonHref="/kontakt"
            buttonDirection="left"
            buttonVariant="green"
            buttonSize="large"
            showButton={true}
          />
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {problemAreas.map((area, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6"
            >
              <div className={`bg-gradient-to-br ${area.color} backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group`}>
                {/* Icon and category */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{area.icon}</div>
                  <div>
                    <h4 className="text-text-primary group-hover:text-sage-600 transition-colors">
                      {area.category}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Problems list */}
                <div className="space-y-3">
                  {area.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {problem}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover call-to-action */}
                <div className="mt-6 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sage-600 text-sm font-medium">
                    Genkender du dig selv? →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-sage-200/30">
            <h3 className="text-text-primary mb-4">Klar til at tage det første skridt?</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Uanset hvilket problemområde du kæmper med, er der altid håb om forandring. 
              Jeg er her for at guide dig gennem processen med empati, professionalisme og ægte omtanke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <StaticButton
                href="/kontakt"
                text="Book gratis konsultation"
                variant="green"
                size="large"
                direction="left"
              />
              <StaticButton
                href="/ydelser"
                text="Se mine metoder"
                variant="outline"
                size="large"
                direction="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProblemer;
