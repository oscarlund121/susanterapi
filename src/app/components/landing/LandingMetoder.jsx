"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

const LandingMetoder = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start px-6 mb-5 md:mb-20">
          <SectionBadge>Mine metoder</SectionBadge>
          <h2 className="text-gray-800 mb-6">Behandlingsmetoder</h2>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
          <p className="text-lg md:text-xl font-light text-gray-800 max-w-3xl leading-relaxed">
            Jeg anvender evidensbaserede metoder der er anerkendt internationalt
            og tilpasset den enkelte klients behov.
          </p>
        </div>

        {/* Hovedmetoder */}
        <div className="space-y-12 md:space-y-20 px-2">
          {/* EMDR / Chok-forløsning */}
          <div className="grid lg:grid-cols-2 items-center">
            <div className="space-y-0">
              <div className="flex flex-col items-start px-6 py-4 bg-[#1cc18e]/10">
                <span className="inline-block px-3 py-1  mb-4 border rounded-md text-xs font-medium">
                  01
                </span>
                <h4 className="text-2xl md:text-3xl font-light text-gray-800 mb-0">EMDR & Chok-forløsning</h4>
              </div>

              <div className="space-y-2 text-gray-700 font-light px-6 pb-4 bg-[#1cc18e]/10 leading-relaxed">
                <p>
                  <strong className="font-normal">
                    Eye Movement Desensitization and Reprocessing (EMDR)
                  </strong>
                  er anerkendt af World Health Organization (WHO) som et
                  effektivt værktøj til behandling af traumer og chok.
                </p>

                <p>
                  Chok, der er lagret i din krop fra oplevelser i dit liv, kan
                  ses som en række små programmer, der er blevet installeret i
                  dig. Disse programmer aktiveres igen og igen i situationer,
                  der minder om dem, der skabte overbelastningen.
                </p>

                <p>
                  Gennem chok-forløsning lokaliserer vi disse programmationer,
                  forløser dem og hjælper dig til en fornyet energi med følelse
                  af ro, glæde, frihed og kærlighed.
                </p>
              </div>

              <div className="space-y-5 mt-6 px-6 mb-6 ">
                <BulletList 
                  title="Hjælper med:" 
                  variant="grid"
                  items={[
                    "Traumer og PTSD",
                    "Angst og fobier", 
                    "Chok og kriser",
                    "Fastlåsthed",
                    "Negative tankemønstre",
                    "Uforklarlige reaktioner"
                  ]} 
                />
              </div>
            </div>

            <div className="relative h-full min-h-[400px]">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="EMDR og chok-forløsning"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Mentalisering */}
          <div className="grid lg:grid-cols-2 items-center lg:shadow-lg">
            <div className="space-y-0 lg:order-2 ">
              <div className="flex flex-col items-start px-6 py-4 space-x-4  bg-[#1cc18e]/10">
                <span className="inline-block px-3 py-1  mb-4 border rounded-md text-xs font-medium">
                  02
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                  Mentalisering
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 font-light px-6 pb-4 bg-[#1cc18e]/10 leading-relaxed">
                <p>
                  Mentaliserende tilgang hjælper os til at forstå egen og andres
                  adfærd ud fra mentale tilstande som følelser, tanker og behov.
                </p>

                <p>
                  At have andres sind på sinde og skabe sikkerhed i
                  relationerne. Denne tilgang er særligt effektiv i familie- og
                  parterapi, hvor vi arbejder med at forstå dynamikker og skabe
                  tryggere relationer.
                </p>

                <p>
                  Gennem mentalisering lærer familier at regulere følelser,
                  skabe mening i relationerne og åbenhed for læring og vækst.
                </p>
              </div>

              <div className="space-y-5 my-6 px-6 ">
                <BulletList 
                  title="Anvendes til:" 
                  variant="grid"
                  items={[
                    "Familie- og parterapi",
                    "Forældreguidning",
                    "Relationsproblemer", 
                    "Kommunikationsvanskeligheder",
                    "Følelsesregulering",
                    "Uro i familien"
                  ]} 
                />
              </div>
            </div>
            <div className="relative order-1 h-full min-h-[400px]">
              <Image
                src="/images/walk.jpg"
                alt="Mentalisering og familieterapi"
                fill
                className="object-cover shadow-lg w-full h-full"
              />
            </div>
          </div>

          {/* Meditation & Bevidsthed */}
          <div className="grid lg:grid-cols-2 items-center">
            <div className="space-y-0">
              <div className="flex flex-col items-start px-6 py-4 bg-[#1cc18e]/10">
                <span className="inline-block px-3 py-1  mb-4 border rounded-md text-xs font-medium">
                  03
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                  Meditation & Bevidsthed
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 font-light px-6 pb-4 bg-[#1cc18e]/10 leading-relaxed">
                <p>
                  Meditativ fordybelse for harmoni, balance, ro og fred i både
                  krop, tanker og følelser. At komme bag om det bevidste sind og
                  ind i en dyb indadvendt fokuseret opmærksomhed.
                </p>

                <p>
                  En oplevelse hvor du føler en intens forbindelse med universet
                  eller din egen sjæl. Det kan være en følelse af kroppens og
                  visdommens reservoir af gemte ressourcer og indsigter.
                </p>

                <p>
                  Arbejde med loven om tiltrækning og bevidsthed - at få fokus
                  på det du gerne vil tiltrække, så det i kroppen flyder
                  naturligt og giver god mening i hele dig.
                </p>
              </div>

              <div className="space-y-5 mt-6 px-10 mb-6">
                <BulletList 
                  title="Skaber:" 
                  variant="grid"
                  items={[
                    "Indre ro og balance",
                    "Klarhed og indsigt",
                    "Forbindelse til intuition",
                    "Energi og vitalitet", 
                    "Spirituel udvikling",
                    "Manifestation af ønsker"
                  ]} 
                />
              </div>
            </div>

            <div className="relative h-full min-h-[400px]">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation og bevidsthed"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMetoder;
