"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

const LandingMetoder = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col items-start mb-2 md:mb-6">
          <SectionBadge>Mine metoder</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Behandlingsmetoder</h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed">
            Jeg anvender evidensbaserede metoder der er anerkendt internationalt
            og tilpasset den enkelte klients behov.
          </h6>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
        </div>

        {/* Metoder som cards */}
        <div className="space-y-12 md:space-y-16">
          {/* EMDR / Chok-forløsning */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div >
              <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
                {/* Top badge */}
                <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1 border rounded-md text-xs font-light">
                      01
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-gray-800 mb-2">
                    EMDR & Chok-forløsning
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    WHO-anerkendt metode til behandling af traumer og chok
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
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
              </div>
            </div>

            <div className="relative h-full min-h-[600px]">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="EMDR og chok-forløsning"
                fill
                className="object-cover object-[50%_20%] rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Mentalisering */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full min-h-[600px] lg:order-1">
              <Image
                src="/images/walk.jpg"
                alt="Mentalisering og familieterapi"
                fill
                className="object-cover object-[50%_20%] rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 lg:order-2">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
                {/* Top badge */}
                <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1 border rounded-md text-xs font-light">
                      02
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-gray-800 mb-2">
                    Mentalisering
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Forstå relationsdynamikker og skab tryggere forbindelser
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
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
              </div>
            </div>
          </div>

          {/* Meditation & Bevidsthed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
                {/* Top badge */}
                <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1 border rounded-md text-xs font-light">
                      03
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-gray-800 mb-2">
                    Meditation & Bevidsthed
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Indre ro, klarhed og forbindelse til din spirituelle essens
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
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
              </div>
            </div>

            <div className="relative h-full min-h-[600px]">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation og bevidsthed"
                fill
                className="object-cover object-[50%_20%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMetoder;
