"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";
import LandingMaalCard from "./LandingMaalCard";
import MaalCard from "./MaalCard";

import TilbyderCard from "./TilbyderCard";

const LandingMaalgrupper = () => {
  // Data for de 4 målgrupper
  const maalgrupper = [
    {
      id: "boern",
      label: "Børn",
      title: "Børn & Terapi",
      description:
        "Specialiseret terapi for børn med fokus på tryghed og udvikling",
      image: "/images/flower.jpg",
      number: "01",
      imageBorderRadius: "rounded-tl-[50px] rounded-tr-xl rounded-b-xl",
      items: [
        "Angst og bekymringer",
        "Skolevægring og skoleproblemer",
        "Sociale udfordringer",
        "Selvværd og selvtillid",
      ],
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
        "Identitetsudvikling og fremtidsangst",
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
      <div className="absolute inset-0 bg-[#fff100]/10 rounded-l-[150px] lg:left-1/2 left-0"></div>

      {/* Content */}
      <div className="relative">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            {/* Layout med whitespace til venstre og indhold til højre */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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

              {/* Højre kolonne - 2x2 Grid med TilbyderCard */}
            
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingMaalgrupper;
