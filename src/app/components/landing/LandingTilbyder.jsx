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
    <section className="section-padding m-20">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Brug det genbrugelige SectionHeader-komponent med gul knap */}
        <SectionHeader 
          badgeText="Dine behandlingsmuligheder"
          title="Få den hjælp du har brug for"
          description="Jeg tilbyder evidensbaseret psykoterapi med fokus på helhedsorienteret behandling og personlig udvikling."
          buttonText="Book din session nu"
          buttonHref="/ydelser"
          buttonVariant="green"
          buttonDirection="left"
          buttonSize="large"
          /* variant="horizontal" */
        />

        {/* Fire hovedområder */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 md:gap-8 ">
          {/* Psykoterapi - Første card */}
          <TilbyderCard 
            number="01"
            title="Psykoterapi"
            image="/images/tree-touch.jpg"
            imageAlt="Psykoterapi"
            imageBorderRadius="rounded-tl-[50px] rounded-tr-xl rounded-b-xl"
            buttonText="Se mere"
            buttonHref="/ydelser"
          />

          {/* Chok-forløsning - Andet card */}
          <TilbyderCard 
            number="02"
            title="Chok- & traumeforløsning"
            image="/images/hand-on-chest-2.jpg"
            imageAlt="Chok-forløsning"
            imageBorderRadius="rounded-bl-[50px] rounded-t-xl rounded-br-xl"
            buttonText="Se mere"
            buttonHref="/ydelser"
          />

          {/* Meditation - Tredje card */}
          <TilbyderCard 
            number="03"
            title="Meditation"
            image="/images/sitting-closed.jpg"
            imageAlt="Meditation"
            imageBorderRadius="rounded-l-xl rounded-tr-[50px] rounded-br-xl"
            buttonText="Se mere"
            buttonHref="/ydelser"
          />

          {/* Familie- og parterapi - Fjerde card */}
          <TilbyderCard 
            number="04"
            title="Familie- og parterapi"
            image="/images/walk.jpg"
            imageAlt="Familie- og parterapi"
            imageBorderRadius="rounded-l-xl rounded-tr-xl rounded-br-[50px]"
            buttonText="Se mere"
            buttonHref="/ydelser"
          />
        </div>
        
       {/*  <CallToActionBox 
          title="I terapien kan du, dit barn, familien eller din partner få åbnet op for kroppens naturlige intelligens og med lethed udfolde dine ønsker og drømme."
        /> */}
      </div>
    </section>
  );
};

export default LandingTilbyder;
