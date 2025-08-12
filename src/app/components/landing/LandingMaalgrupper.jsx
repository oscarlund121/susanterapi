"use client";
import React, { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import YellowButton from "../ui/YellowButton";
import StaticButton from "../ui/StaticButton";
import MaalgruppeCard from "./MaalgruppeCard";
import MaalgruppeButtons from "./MaalgruppeButtons";

const LandingMaalgrupper = () => {
  const [activeCard, setActiveCard] = useState(0);
  // Data for de 4 målgrupper - Unge & Studerende først
  const maalgrupper = [
    {
      id: "unge",
      label: "Unge",
      title: "Unge & Studerende",
      description: "Specialiseret terapi for unge i udvikling og studerende",
      image: "/images/wheat.jpg",
      number: "01",
      items: [
        "Eksamensangst og studieproblemer",
        "Præstationsangst og perfektionisme",
        "Sociale udfordringer og ensomhed",
        "Identitetsudvikling og fremtidsangst",
      ],
    },
    {
      id: "boern",
      label: "Børn",
      title: "Børn & Terapi",
      description:
        "Specialiseret terapi for børn med fokus på tryghed og udvikling",
      image: "/images/flower.jpg",
      number: "02",
      imageBorderRadius: "rounded-tl-[50px] rounded-tr-xl rounded-b-xl",
      items: [
        "Angst og bekymringer",
        "Skolevægring og skoleproblemer",
        "Sociale udfordringer",
        "Selvværd og selvtillid",
      ],
    },
    {
      id: "voksne",
      label: "Voksne",
      title: "Voksne & Arbejdsliv",
      description: "Terapi for voksne med fokus på balance og velvære",
      image: "/images/tree-touch.jpg",
      number: "03",
      items: [
        "Stress og udbrændthed",
        "Arbejdsrelaterede udfordringer",
        "Angst og depression",
        "Parforhold og familieliv",
      ],
    },
    {
      id: "familier",
      label: "Familier",
      title: "Familie & Relationer",
      description: "Familieterapi med fokus på kommunikation og samhørighed",
      image: "/images/beach-walk.jpg",
      number: "04",
      items: [
        "Familiekonflikter",
        "Kommunikationsudfordringer",
        "Forældrerollen",
        "Søskenderivaliseringer",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Baggrund der starter 50% fra højre kun på lg+ skærme */}
      <div className="absolute inset-0 bg-[#1cc18e]/10 rounded-l-[150px] lg:left-1/2 left-0"></div>

      {/* Content */}
      <div className="relative">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            {/* Layout med whitespace til venstre og indhold til højre */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-star">
              {/* Venstre kolonne - Whitespace og header */}
              <div className="space-y-6 lg:space-y-8">
                <SectionHeader
                  badgeText="Se hvem jeg hjælper"
                  title="Find din aldersgruppe"
                  description="Jeg arbejder primært med unge og studerende, men hjælper også børn, familier og voksne med alle former for ubehag og fastlåsthed i livet."
                  buttonText="Book din session nu"
                  buttonHref="/kontakt"
                  buttonVariant="green"
                  buttonDirection="left"
                  showButton={false}
                />
                {/* Rektangulært naturbillede under section header */}
                <div className="my-6">
                  <img
                    src="/images/tree-touch.jpg"
                    alt="Natur og terapi"
                    className="rounded-xl object-cover w-full h-28 md:h-32 lg:h-36"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Højre kolonne - Knapper og Card */}
              <div className="space-y-6">
                {/* Målgruppe knapper - centreret */}
                <div className="flex justify-start">
                  <MaalgruppeButtons
                    maalgrupper={maalgrupper}
                    activeCard={activeCard}
                    onCardSelect={setActiveCard}
                  />
                </div>

                {/* Aktiv målgruppe card */}
                <MaalgruppeCard gruppe={maalgrupper[activeCard]} />

                {/* CTA Buttons - grøn til venstre, StaticButton til højre */}
                <div className="flex justify-end items-center gap-4">
                  <StaticButton
                    href="/ydelser"
                    className="text-gray-600 hover:text-[#1cc18e] transition-colors"
                  >
                    Læs mere om mine metoder
                  </StaticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingMaalgrupper;
