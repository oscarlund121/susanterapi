"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import ReadMoreButton from "../ui/ReadMoreButton";
import YellowButton from "../ui/YellowButton";
import TilbyderCard from "./TilbyderCard";
import CallToActionBox from "../layout/CallToActionBox";

const LandingTilbyder = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-warm-beige-100 via-warm-beige-50 to-sage-100 relative overflow-hidden">
      {/* Organic background shapes - mere subtile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-sage-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-warm-beige-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Smallere container for variation */}
      <div className="max-w-6xl mx-auto container-padding relative z-10">
        {/* Varmere header */}
        <SectionHeader 
          badgeText="Dine behandlingsmuligheder"
          title="Find den rette hjælp til dig"
          description="Jeg tilbyder skræddersyede behandlingsforløb, der kombinerer evidensbaseret terapi med et holistisk syn på mental sundhed. Mit mål er at guide dig mod større trivsel og indre balance."
          buttonText="Udforsk alle behandlinger"
          buttonHref="/ydelser"
          buttonVariant="green"
          buttonDirection="left"
          buttonSize="large"
        />

        {/* Fire hovedområder med forbedret design */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          {/* Essentiel Integrativ Psykoterapi */}
          <TilbyderCard 
            number="01"
            title="Essentiel Integrativ Psykoterapi"
            image="/images/tree-touch.jpg"
            imageAlt="En person rører ved et træ - symboliserer forbindelse med naturen"
            imageBorderRadius="rounded-3xl"
            buttonText="Læs mere"
            buttonHref="/ydelser/essentiel-integrativ-psykoterapi"
          />

          {/* EMDR */}
          <TilbyderCard 
            number="02"
            title="EMDR Traumeterapi"
            image="/images/flower.jpg"
            imageAlt="En smuk blomst - symboliserer healing og vækst"
            imageBorderRadius="rounded-3xl"
            buttonText="Læs mere"
            buttonHref="/ydelser/emdr"
          />

          {/* Meditation */}
          <TilbyderCard 
            number="03"
            title="Meditation & Spirituel Udvikling"
            image="/images/sitting-closed.jpg"
            imageAlt="En person i meditation - symboliserer indre ro"
            imageBorderRadius="rounded-3xl"
            buttonText="Læs mere"
            buttonHref="/ydelser/meditation-spirituel-udvikling"
          />

          {/* Familie- og parterapi */}
          <TilbyderCard 
            number="04"
            title="Familie & Børneterapi"
            image="/images/walk.jpg"
            imageAlt="Familie på gåtur - symboliserer samhørighed"
            imageBorderRadius="rounded-3xl"
            buttonText="Læs mere"
            buttonHref="/ydelser/mentaliserende-tilgang"
          />
        </div>
        
        {/* Tillidsskabende element */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-sage-200/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              "Jeg tror på, at hver person har en iboende evne til healing og vækst. Min rolle er at skabe et trygt rum, 
              hvor du kan udforske dine ressourcer og udvikle nye perspektiver på livet."
            </p>
            <div className="text-text-primary font-medium">— Susan Albertsen, Autoriseret Psykoterapeut</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTilbyder;
