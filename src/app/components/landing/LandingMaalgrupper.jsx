"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";

const LandingMaalgrupper = () => {
  return (
    <section className="section-padding bg-[#fff100]/10 rounded-tr-[250px] rounded-bl-[250px]">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col items-start mb-2 md:mb-6">
          <SectionBadge>
            Målgrupper
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Hvem jeg hjælper
          </h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed">
            Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag 
            og fastlåsthed i livet.
          </h6>
          <div className="mt-6 mb-2">
            <YellowButton text="Book en samtale" href="/kontakt" size="large" />
          </div>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
        </div>

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
              <h3 className="text-xl font-light text-gray-800">
                Børn & Familier
              </h3>
              <div className="flex-grow">
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
              <h3 className="text-xl font-light text-gray-800">
                Unge & Studerende
              </h3>
              <div className="flex-grow">
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
              <h3 className="text-xl font-light text-gray-800">
                Voksne & Par
              </h3>
              <div className="flex-grow">
                <BulletList 
                  items={[
                    "Stress, angst og depression",
                    "Parforhold og kæresteproblematikker",
                    "Traumer og sorg",
                    "Personlig udvikling og selvværd"
                  ]} 
                />
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
