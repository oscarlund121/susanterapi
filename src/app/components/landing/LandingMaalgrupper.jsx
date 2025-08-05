"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

const LandingMaalgrupper = () => {
  return (
    <section className=" px-22 py-16 bg-gray-50">
      <div className="">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <SectionBadge>
            Målgrupper
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Hvem jeg hjælper
          </h2>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
          <p className="text-base md:text-lg font-light text-gray-600 max-w-xl">
            Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag 
            og fastlåsthed i livet.
          </p>
        </div>

        {/* Tre målgrupper */}
        <div className="grid md:grid-cols-3 gap-8 py-6  items-stretch">
          
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
