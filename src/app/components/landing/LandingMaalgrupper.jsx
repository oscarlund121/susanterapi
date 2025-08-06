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
    <section className="section-padding bg-[#fff100]/10 rounded-tr-[250px] rounded-bl-[250px]">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Layout med whitespace til venstre og indhold til højre */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Venstre kolonne - Whitespace og header */}
          <div className="space-y-8">
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
          <div>
            {/* Indikatorer og Navigation knapper på samme linje */}
            <div className="flex justify-between items-end">
              {/* 4 grønne indikatorer/badges */}
              <div className="flex gap-3">
                {maalgrupper.map((gruppe, index) => (
                  <button
                    key={gruppe.id}
                    onClick={() => scrollTo(index)}
                    className={`px-3 py-1 rounded-xl text-base font-bold transition-all duration-300 ${
                      current === index
                        ? "bg-[#1cc18e] text-white shadow-lg transform "
                        : "bg-white text-[#333333] hover:bg-[#1cc18e]/30"
                    }`}
                  >
                    {gruppe.label}
                  </button>
                ))}
              </div>

              {/* Navigation knapper */}
              <div className="flex gap-6 mb-2">
                <button 
                  onClick={scrollPrev}
                  className="size-12 rounded-full border-2 border-[#333333] bg-[#fff100] hover:bg-[#333333] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center group"
                >
                  <svg className="h-10 w-10 group-hover:text-white text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={scrollNext}
                  className="size-12 rounded-full border-2 border-[#333333] bg-[#fff100] hover:bg-[#333333] hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center group"
                >
                  <svg className="h-10 w-10 group-hover:text-white text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel med enkelt card */}
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {maalgrupper.map((gruppe, index) => (
                  <CarouselItem key={gruppe.id}>
                    <LandingMaalCard
                      title={gruppe.title}
                      description={gruppe.description}
                      items={gruppe.items}
                      buttonText="Book samtale"
                      href="/kontakt"
                      buttonSize="small"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
