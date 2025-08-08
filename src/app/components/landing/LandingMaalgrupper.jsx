"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";
import LandingMaalCard from "./LandingMaalCard";
import MaalCard from "./MaalCard";
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
      image: "/images/flower.jpg",
      number: "01",
      items: [
        "Angst og bekymringer",
        "Skolevægring og skoleproblemer", 
        "Sociale udfordringer",
        "Selvværd og selvtillid"
      ]
    },
    {
      id: "unge",
      label: "Unge",
      title: "Unge & Studerende",
      description: "Specialiseret terapi for unge i udvikling og studerende",
      image: "/images/wheat.jpg",
      number: "02",
      items: [
        "Eksamensangst og studieproblemer",
        "Præstationsangst og perfektionisme",
        "Sociale udfordringer og ensomhed",
        "Identitetsudvikling og fremtidsangst"
      ]
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
        "Parforhold og familieliv"
      ]
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
        "Søskenderivaliseringer"
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
    <div className="relative">
      {/* Baggrund der starter 50% fra højre */}
      <div className="absolute inset-0 bg-[#fff100]/10 rounded-l-[150px]" style={{ left: '50%' }}></div>
      
      {/* Content */}
      <div className="relative">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
        {/* Layout med whitespace til venstre og indhold til højre */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Venstre kolonne - Whitespace og header */}
          <div className="space-y-6 lg:space-y-8">
            <SectionHeader
              badgeText="Målgrupper"
              title="Hvem jeg hjælper"
              description="Jeg arbejder primært med unge og studerende, men hjælper også børn, familier og voksne med alle former for ubehag og fastlåsthed i livet."
              buttonText="Book samtale" 
              buttonHref="/kontakt"
              buttonVariant="yellow"
              buttonDirection="left"
            />

          </div>

          {/* Højre kolonne - Carousel med indikatorer */}
          <div className="w-full">
            {/* Elegante indikatorer - små dots i stedet for tunge buttons */}
            <div className="flex justify-center items-center max-w-sm gap-4 mb-8">
              {maalgrupper.map((gruppe, index) => (
                <button
                  key={gruppe.id}
                  onClick={() => scrollTo(index)}
                  className={`transition-all duration-300 ${
                    current === index
                      ? "w-8 h-3 bg-[#1cc18e] rounded-full"
                      : "w-3 h-3 bg-gray-300 rounded-full hover:bg-[#1cc18e]/50"
                  }`}
                />
              ))}
            </div>

            {/* Clean carousel uden tung baggrund */}
            <div className="w-full ">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {maalgrupper.map((gruppe, index) => (
                    <CarouselItem key={gruppe.id}>
                      <div className="h-full px-2">
                        <MaalCard
                          number={gruppe.number}
                          title={gruppe.title}
                          description={gruppe.description}
                          items={gruppe.items}
                          buttonText="Book samtale"
                          buttonHref="/kontakt"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Elegante navigation buttons */}
            <div className="flex justify-center gap-6 mt-8">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#1cc18e] hover:text-white hover:border-[#1cc18e] transition-all duration-300 flex items-center justify-center group"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#1cc18e] hover:text-white hover:border-[#1cc18e] transition-all duration-300 flex items-center justify-center group"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
