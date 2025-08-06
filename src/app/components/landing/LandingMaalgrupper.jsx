"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";
import LandingMaalCard from "./LandingMaalCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../components/ui/carousel";

const LandingMaalgrupper = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Data for de 4 målgrupper
  const maalgrupper = [
    {
      id: "boern",
      label: "Børn",
      title: "Børn & Terapi",
      description: "Specialiseret terapi for børn med fokus på tryghed og udvikling",
      image: "/images/flower.jpg", // Blid blomst for børn
      items: [
        "Angst og bekymringer",
        "Skolevægring og skoleproblemer", 
        "Sociale udfordringer",
        "Selvværd og selvtillid",
        "Følelsesregulering",
        "Familiedynamikker"
      ]
    },
    {
      id: "unge",
      label: "Unge",
      title: "Unge & Studerende",
      description: "Specialiseret terapi for unge i udvikling og studerende",
      image: "/images/wheat.jpg", // Kornmark for vækst og udvikling
      items: [
        "Eksamensangst og studieproblemer",
        "Præstationsangst og perfektionisme",
        "Sociale udfordringer og ensomhed",
        "Identitetsudvikling og fremtidsangst",
        "Overgang til voksenliv",
        "Stress og udbrændthed"
      ]
    },
    {
      id: "voksne",
      label: "Voksne", 
      title: "Voksne & Arbejdsliv",
      description: "Terapi for voksne med fokus på balance og velvære",
      image: "/images/tree-touch.jpg", // Træ for stabilitet og vækst
      items: [
        "Stress og udbrændthed",
        "Arbejdsrelaterede udfordringer",
        "Angst og depression",
        "Parforhold og familieliv",
        "Livskriser og forandringer",
        "Selvrealisering og mening"
      ]
    },
    {
      id: "familier",
      label: "Familier",
      title: "Familie & Relationer", 
      description: "Familieterapi med fokus på kommunikation og samhørighed",
      image: "/images/beach-walk.jpg", // Strandgang for sammen-tid
      items: [
        "Familiekonflikter",
        "Kommunikationsudfordringer",
        "Forældrerollen",
        "Søskenderivaliseringer",
        "Skilsmisse og separation",
        "Blended families"
      ]
    }
  ];

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const scrollTo = useCallback((index) => {
    if (api) api.scrollTo(index);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="section-padding bg-[#fff100]/10 rounded-tr-[100px] sm:rounded-tr-[150px] lg:rounded-tr-[250px] rounded-bl-[100px] sm:rounded-bl-[150px] lg:rounded-bl-[250px]">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Layout med whitespace til venstre og indhold til højre */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Venstre kolonne - Whitespace og header */}
          <div className="space-y-6 lg:space-y-8">
            <SectionHeader
              badgeText="Målgrupper"
              title="Hvem jeg hjælper"
              description="Jeg arbejder primært med unge og studerende, men hjælper også børn, familier og voksne med alle former for ubehag og fastlåsthed i livet."
              showButton={false}
            />

          
            {/* Ekstra whitespace og eventuelt decorativ content */}
            <div className="hidden lg:block">
            
              <p className="text-gray-600 font-light leading-relaxed">
                Specialiseret vejledning tilpasset din livssituation og behov.
              </p>
            </div>
          </div>

          {/* Højre kolonne - Carousel med indikatorer */}
          <div className="w-full">
            {/* Indikatorer og Navigation knapper på samme linje */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 mb-4">
              {/* Navigation knapper - først på mobile */}
              <div className="flex gap-10 sm:gap-6 mb-0 sm:mb-2 justify-start sm:order-2 sm:justify-end w-full sm:w-auto">
                <button 
                  onClick={scrollPrev}
                  className="size-10 sm:size-12 rounded-full border-2 border-[#333333] bg-[#fff100] hover:bg-[#333333] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center group flex-shrink-0"
                >
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 group-hover:text-white text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={scrollNext}
                  className="size-10 sm:size-12 rounded-full border-2 border-[#333333] bg-[#fff100] hover:bg-[#333333] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center group flex-shrink-0"
                >
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 group-hover:text-white text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* 4 grønne indikatorer/badges - andet på mobile */}
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto sm:order-1">
                {maalgrupper.map((gruppe, index) => (
                  <button
                    key={gruppe.id}
                    onClick={() => scrollTo(index)}
                    className={`px-2 sm:px-3 py-1 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 flex-shrink-0 ${
                      current === index
                        ? "bg-[#1cc18e] text-white shadow-lg transform "
                        : "bg-white text-[#333333] hover:bg-[#1cc18e]/30"
                    }`}
                  >
                    {gruppe.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Carousel med enkelt card */}
            <div className="w-full">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent >
                  {maalgrupper.map((gruppe, index) => (
                    <CarouselItem key={gruppe.id} >
                      <div className="h-full">
                        <LandingMaalCard
                          title={gruppe.title}
                          description={gruppe.description}
                          items={gruppe.items}
                          image={gruppe.image}
                          buttonText="Book samtale"
                          href="/kontakt"
                          buttonSize="small"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
