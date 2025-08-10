"use client";
import React from "react";
import SectionHeader from "../layout/SectionHeader";
import MetodeCard from "./MetodeCard";

const LandingMetoder = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <SectionHeader
          badgeText="Mine metoder"
          title="Behandlingsmetoder"
          description="Jeg anvender evidensbaserede metoder der er anerkendt internationalt og tilpasset den enkelte klients behov."
          buttonText="Læs mere"
          buttonHref="/ydelser"
          buttonVariant="green"
          buttonDirection="left"
          buttonSize="medium"
          
        />

        {/* Metoder som cards */}
        <div className="space-y-12 md:space-y-16">
          {/* EMDR / Chok-forløsning */}
          <MetodeCard
            number="01"
            title="EMDR & Chok-forløsning"
            description="WHO-anerkendt metode til behandling af traumer og chok"
            content={[
              "Eye Movement Desensitization and Reprocessing (EMDR) er anerkendt af World Health Organization (WHO) som et effektivt værktøj til behandling af traumer og chok.",
              "Chok, der er lagret i din krop fra oplevelser i dit liv, kan ses som en række små programmer, der er blevet installeret i dig. Disse programmer aktiveres igen og igen i situationer, der minder om dem, der skabte overbelastningen.",
              "Gennem chok-forløsning lokaliserer vi disse programmationer, forløser dem og hjælper dig til en fornyet energi med følelse af ro, glæde, frihed og kærlighed.",
            ]}
            imageShape="rounded-tl-lg rounded-tr-[150px] rounded-br-lg rounded-bl-lg"
            bulletItems={[
              "Traumer og PTSD",
              "Angst og fobier",
              "Chok og kriser",
              "Fastlåsthed",
              "Negative tankemønstre",
              "Uforklarlige reaktioner",
            ]}
            bulletTitle="Hjælper med:"
            imageUrl="/images/hand-on-chest-2.jpg"
            imageAlt="EMDR og chok-forløsning"
            variant="imageRight"
            cardVariant="light"
          />

          {/* Mentalisering */}
          <MetodeCard
            number="02"
            title="Mentalisering"
            description="Forstå relationsdynamikker og skab tryggere forbindelser"
            content={[
              "Mentaliserende tilgang hjælper os til at forstå egen og andres adfærd ud fra mentale tilstande som følelser, tanker og behov.",
              "At have andres sind på sinde og skabe sikkerhed i relationerne. Denne tilgang er særligt effektiv i familie- og parterapi, hvor vi arbejder med at forstå dynamikker og skabe tryggere relationer.",
              "Gennem mentalisering lærer familier at regulere følelser, skabe mening i relationerne og åbenhed for læring og vækst.",
            ]}
            imageShape="rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[150px]"
            bulletItems={[
              "Familie- og parterapi",
              "Forældreguidning",
              "Relationsproblemer",
              "Kommunikationsvanskeligheder",
              "Følelsesregulering",
              "Uro i familien",
            ]}
            bulletTitle="Anvendes til:"
            imageUrl="/images/walk.jpg"
            imageAlt="Mentalisering og familieterapi"
            variant="imageLeft"
            cardVariant="blue"
          />

          {/* Meditation & Bevidsthed */}
          <MetodeCard
            number="03"
            title="Meditation & Bevidsthed"
            description="Indre ro, klarhed og forbindelse til din spirituelle essens"
            content={[
              "Meditativ fordybelse for harmoni, balance, ro og fred i både krop, tanker og følelser. At komme bag om det bevidste sind og ind i en dyb indadvendt fokuseret opmærksomhed.",
              "En oplevelse hvor du føler en intens forbindelse med universet eller din egen sjæl. Det kan være en følelse af kroppens og visdommens reservoir af gemte ressourcer og indsigter.",
              "Arbejde med loven om tiltrækning og bevidsthed - at få fokus på det du gerne vil tiltrække, så det i kroppen flyder naturligt og giver god mening i hele dig.",
            ]}
            imageShape="rounded-tl-lg rounded-tr-lg rounded-br-[150px] rounded-bl-lg"
            bulletItems={[
              "Indre ro og balance",
              "Klarhed og indsigt",
              "Forbindelse til intuition",
              "Energi og vitalitet",
              "Spirituel udvikling",
              "Manifestation af ønsker",
            ]}
            bulletTitle="Skaber:"
            imageUrl="/images/sitting-closed.jpg"
            imageAlt="Meditation og bevidsthed"
            variant="imageRight"
            cardVariant="green"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingMetoder;
