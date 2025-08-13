"use client";
import React, { useState } from "react";
import Image from "next/image";
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
    <section className="section-padding bg-gradient-to-br from-sage-100 via-sage-50 to-sage-100 relative overflow-hidden">
      {/* Organic background shapes - pure sage fokus */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-60 h-60 bg-sage-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-sage-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Smaller container for variation */}
      <div className="max-w-5xl mx-auto container-padding relative z-10">
        {/* Varmere header */}
        <SectionHeader
          badgeText="Se hvem jeg hjælper"
          title="Find din målgruppe"
          description="Jeg specialiserer mig i at hjælpe mennesker i alle livsfaser - fra unge der kæmper med præstationsangst til familier der søger bedre kommunikation og forståelse."
          buttonText="Book en uforpligtende samtale"
          buttonHref="/kontakt"
          buttonVariant="green"
          buttonDirection="left"
          showButton={true}
        />

        {/* Målgruppe navigation */}
        <div className="mb-12">
          <MaalgruppeButtons
            maalgrupper={maalgrupper}
            activeCard={activeCard}
            onCardSelect={setActiveCard}
          />
        </div>

        {/* Hovedlayout - aktiv målgruppe showcase */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Venstre side - Målgruppe information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-sage-200/30">
              {/* Målgruppe header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sage-500/20 rounded-full flex items-center justify-center text-sage-700 font-bold text-lg">
                    {maalgrupper[activeCard].number}
                  </div>
                  <div>
                    <h3 className="text-text-primary mb-1">{maalgrupper[activeCard].title}</h3>
                    <p className="text-text-secondary">{maalgrupper[activeCard].description}</p>
                  </div>
                </div>
              </div>

              {/* Fokusområder */}
              <div>
                <h5 className="text-text-primary mb-4">Typiske fokusområder:</h5>
                <div className="grid sm:grid-cols-2 gap-3">
                  {maalgrupper[activeCard].items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-sage-50/60 rounded-xl">
                      <div className="w-2 h-2 bg-sage-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action for denne målgruppe */}
              <div className="mt-6 pt-6 border-t border-sage-200/30">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                  <div>
                    <p className="text-text-secondary text-sm mb-2">
                      Genkender du dig selv eller dit barn i ovenstående?
                    </p>
                  </div>
                  <StaticButton
                    href="/kontakt"
                    text="Book en samtale"
                    variant="green"
                    size="small"
                    direction="left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Højre side - Målgruppe billede */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={maalgrupper[activeCard].image}
                  alt={`Billede relateret til ${maalgrupper[activeCard].title}`}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                />
                {/* Gradient overlay for bedre integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-600/10 via-transparent to-sage-600/5"></div>
              </div>
              
              {/* Floating testimonial eller quote */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-sage-200/50">
                <p className="text-text-primary text-sm font-medium leading-relaxed">
                  {activeCard === 0 && '"Jeg fik hjælp til at håndtere min eksamensangst og føler mig meget mere selvsikker nu."'}
                  {activeCard === 1 && '"Mit barn blev mere åbent og tillidsfuldt efter terapien hos Susan."'}
                  {activeCard === 2 && '"Jeg lærte at sætte grænser og finde balance mellem arbejde og familie."'}
                  {activeCard === 3 && '"Vores familie kommunikerer meget bedre nu efter familieterapien."'}
                </p>
                <div className="mt-2 text-xs text-text-muted">
                  — Tidligere klient
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ekstra information */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-sage-200/30">
            <p className="text-text-secondary text-lg leading-relaxed">
              Uanset hvilken målgruppe du tilhører, er min tilgang altid den samme: at skabe et trygt, 
              ikke-dømmende rum hvor du kan udforske dine udfordringer og opdage dine egne ressourcer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
