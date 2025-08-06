"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";
import LandingMaalCard from "./LandingMaalCard";

const LandingMaalgrupper = () => {
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
              <div className="w-24 h-1 bg-[#1cc18e] rounded-full mb-6"></div>
              <p className="text-gray-600 font-light leading-relaxed">
                Specialiseret vejledning tilpasset din livssituation og behov.
              </p>
            </div>
          </div>

          {/* Højre kolonne - Enkelt samlet card */}
          <div>
            <LandingMaalCard 
              title="Unge & Studerende Focus"
              description="Specialiseret terapi for unge i udvikling, studerende og alle der navigerer livets udfordringer"
              items={[
                "Eksamensangst og studieproblemer",
                "Præstationsangst og perfektionisme", 
                "Sociale udfordringer og ensomhed",
                "Identitetsudvikling og fremtidsangst",
                "Overgang til voksenliv",
                "Stress og udbrændthed",
                "Parforhold og kærlighed",
                "Familiekonflikter og kommunikation",
                "Selvværd og selvtillid",
                "Angst og depression"
              ]}
              buttonText="Book samtale"
              href="/kontakt"
              buttonSize="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
