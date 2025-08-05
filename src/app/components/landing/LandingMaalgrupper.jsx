"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";

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
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/flower.jpg"
                alt="Børn og familier"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h4 className="text-xl font-light text-gray-800">
                Børn & Familier
              </h4>
              <div className="h-32 flex items-center">
                <BulletList 
                  items={[
                    "Familiedynamikker og relationer",
                    "Skolefravær og læringsvanskeligheder",
                    "ADHD og følelsesmæssige udfordringer",
                    "Mentaliserende forældreguidning"
                  ]} 
                />
              </div>
              <div className="flex justify-end mt-4">
                <YellowButton text="Læs mere" size="small" />
              </div>
            </div>
          </div>

          {/* Unge & Studerende */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/sitting.jpg"
                alt="Unge og studerende"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h4 className="text-xl font-light text-gray-800">
                Unge & Studerende
              </h4>
              <div className="h-32 flex items-start">
                <BulletList 
                  items={[
                    "Præstationsangst og eksamenstress",
                    "Sociale udfordringer og gruppedannelser",
                    "Usikkerhed og lavt selvværd",
                    "Overgange og nye miljøer"
                  ]} 
                />
              </div>
              <div className="flex justify-end mt-4">
                <YellowButton text="Læs mere" size="small" />
              </div>
            </div>
          </div>

          {/* Voksne & Par */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Voksne og par"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h4 className="text-xl font-light text-gray-800">
                Voksne & Par
              </h4>
              <div className="h-32 flex items-start">
                <BulletList 
                  items={[
                    "Stress, angst og depression",
                    "Parforhold og kæresteproblematikker",
                    "Traumer og sorg",
                    "Personlig udvikling og selvværd"
                  ]} 
                />
              </div>
              <div className="flex justify-end mt-4">
                <YellowButton text="Læs mere" size="small" />
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
