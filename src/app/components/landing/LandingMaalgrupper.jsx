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
        {/* Brug det genbrugelige SectionHeader-komponent */}
        <SectionHeader 
          badgeText="Målgrupper"
          title="Hvem jeg hjælper"
          description="Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag og fastlåsthed i livet."
          buttonText="Book en samtale"
          buttonHref="/kontakt"
          buttonDirection="left"
          buttonVariant="green"
          buttonSize="large"
        />

        {/* Tre målgrupper */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Børn & Familier */}
          <LandingMaalCard 
            title="Børn & Familier"
            items={[
              "Familiedynamikker og relationer",
              "Skolefravær og læringsvanskeligheder",
              "ADHD og følelsesmæssige udfordringer",
              "Mentaliserende forældreguidning"
            ]}
            variant="minimal"
          />

          {/* Unge & Studerende */}
          <LandingMaalCard 
            title="Unge & Studerende"
            items={[
              "Præstationsangst og eksamenstress",
              "Sociale udfordringer og gruppedannelser",
              "Usikkerhed og lavt selvværd",
              "Overgange og nye miljøer"
            ]}
            variant="icon"
          />

          {/* Voksne & Par */}
          <LandingMaalCard 
            title="Voksne & Par"
            items={[
              "Stress, angst og depression",
              "Parforhold og kæresteproblematikker",
              "Traumer og sorg",
              "Personlig udvikling og selvværd"
            ]}
            variant="gradient"
          />
        </div>

    
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
