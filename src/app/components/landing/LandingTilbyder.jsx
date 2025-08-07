"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import ReadMoreButton from "../ui/ReadMoreButton";
import YellowButton from "../ui/YellowButton";
import TilbyderCard from "./TilbyderCard";

const LandingTilbyder = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Brug det genbrugelige SectionHeader-komponent med gul knap */}
        <SectionHeader 
          badgeText="Terapi hos mig"
          title="Hvad jeg tilbyder"
          description="Jeg tilbyder evidensbaseret psykoterapi med fokus på helhedsorienteret behandling og personlig udvikling."
          buttonText="Book tid nu"
          buttonHref="/ydelser"
          buttonVariant="yellow"
          buttonDirection="left"
          buttonSize="large"
            
        />

        {/* Fire hovedområder */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8 ">
          {/* Psykoterapi */}
          <TilbyderCard 
            title="Psykoterapi"
            image="/images/tree-touch.jpg"
            imageAlt="Psykoterapi"
            variant="default"
            buttonText="Læs mere"
            buttonHref="/ydelser"
          />

          {/* Chok-forløsning */}
          <TilbyderCard 
            title="Chok- og traumeforløsning"
            image="/images/hand-on-chest-2.jpg"
            imageAlt="Chok-forløsning"
            variant="rounded"
            buttonText="Læs mere"
            buttonHref="/ydelser"
          />

          {/* Meditation */}
          <TilbyderCard 
            title="Meditation"
            image="/images/sitting-closed.jpg"
            imageAlt="Meditation"
            variant="asymmetric"
            buttonText="Læs mere"
            buttonHref="/ydelser"
          />

          {/* Familie- og parterapi */}
          <TilbyderCard 
            title="Familie- og parterapi"
            image="/images/walk.jpg"
            imageAlt="Familie- og parterapi"
            variant="rounded"
            buttonText="Læs mere"
            buttonHref="/ydelser"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="bg-[#333333] px-6 py-4 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h4 className="text-base md:text-lg font-light text-white leading-relaxed">
                I terapien kan du, dit barn, familien eller din partner få åbnet
                op for kroppens naturlige intelligens og med lethed udfolde dine
                ønsker og drømme.
              </h4>
              <div className="flex items-end justify-end">
                <YellowButton 
                  href="/kontakt"
                  text="Kontakt mig"
                  variant="yellow"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTilbyder;
