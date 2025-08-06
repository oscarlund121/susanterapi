"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import ReadMoreButton from "../ui/ReadMoreButton";

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
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
          {/* Psykoterapi */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/tree-touch.jpg"
                alt="Psykoterapi"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h5 className="text-xl font-light text-[#333333]">
                Psykoterapi
              </h5>
              <div className="flex-grow">
                <p className="text-gray-600 font-light leading-relaxed">
                  Gennem helhjertet terapi lærer du at give slip på destruktive
                  følelser og fastlåsthed. Oplev frihed, glæde og en fornyet
                  energi.
                </p>
              </div>
              <ReadMoreButton 
                href="/ydelser"
                text="Læs mere"
                variant="green"
                size="medium"
              />
            </div>
          </div>

          {/* Chok-forløsning */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="Chok-forløsning"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h5 className="text-xl font-light text-[#333333]">
                Chok- og traumeforløsning
              </h5>
              <div className="flex-grow">
                <p className="text-gray-600 font-light leading-relaxed">
                  EMDR metode til at forløse chok lagret i kroppen. Genvind
                  balance og oplevelse af ro og kærlighed.
                </p>
              </div>
              <ReadMoreButton 
                href="/ydelser"
                text="Læs mere" 
                variant="greenLight"
                size="medium"
              />
            </div>
          </div>

          {/* Meditation */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h5 className="text-xl font-light text-[#333333]">
                Meditation
              </h5>
              <div className="flex-grow">
                <p className="text-gray-600 font-light leading-relaxed">
                  Meditativ fordybelse for harmoni og balance. Kom bag om det
                  bevidste sind og oplev intens forbindelse med din sjæl.
                </p>
              </div>
              <ReadMoreButton 
                href="/ydelser"
                text="Læs mere"
                variant="yellow"
                size="medium"
              />
            </div>
          </div>

          {/* Familie- og parterapi */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src="/images/walk.jpg"
                alt="Familie- og parterapi"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h5 className="text-xl font-light text-[#333333]">
                Familie- og parterapi
              </h5>
              <div className="flex-grow">
                <p className="text-gray-600 font-light leading-relaxed">
                  Mentaliserende tilgang til relationer. Forstå dynamikker og skab
                  sikkerhed i familien og parforhold.
                </p>
              </div>
              <ReadMoreButton 
                href="/ydelser"
                text="Læs mere"
                variant="green"
                size="medium"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-light text-[#333333] max-w-xl mx-auto text-center leading-relaxed">
              I terapien kan du, dit barn, familien eller din partner få åbnet
              op for kroppens naturlige intelligens og med lethed udfolde dine
              ønsker og drømme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTilbyder;
