"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";

const LandingTilbyder = () => {
  return (
    <section className="py-20 px-10 mt-32 shadow-sm mx-12">
      <div className="  px-4 ">
        {/* Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <SectionBadge>
            Terapi hos mig
          </SectionBadge>
          <h2 className="text-gray-800 mb-6">
            Hvad jeg tilbyder
          </h2>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
          <p className="text-base md:text-lg font-light text-gray-600  md:max-w-xl leading-relaxed">
            Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition
            og energier, og en mentaliserende tilgang. Gennem terapien lærer
            du at give slip på destruktive følelser, fastlåsthed og
            overbevisninger.
          </p>
        </div>

        {/* Fire hovedområder */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-6">
          {/* Psykoterapi */}
          <div className="bg-white shadow-sm overflow-hidden ">
            <div className="relative h-48">
              <Image
                src="/images/tree-touch.jpg"
                alt="Psykoterapi"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-light text-gray-800">
                Psykoterapi
              </h5>
              <p className="text-gray-600 font-light leading-relaxed">
                Gennem helhjertet terapi lærer du at give slip på destruktive
                følelser og fastlåsthed. Oplev frihed, glæde og en fornyet
                energi.
              </p>
              <a 
                href="/ydelser" 
                className="inline-block text-[#1cc18e] hover:text-[#159e7e] font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Chok-forløsning */}
          <div className="bg-white shadow-sm overflow-hidden ">
            <div className="relative h-48">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="Chok-forløsning"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-light text-gray-800">
                Chok- og traumeforløsning
              </h5>
              <p className="text-gray-600 font-light leading-relaxed">
                EMDR metode til at forløse chok lagret i kroppen. Genvind
                balance og oplevelse af ro og kærlighed.
              </p>
              <a 
                href="/ydelser" 
                className="inline-block text-[#1cc18e] hover:text-[#159e7e] font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Meditation */}
          <div className="bg-white shadow-sm overflow-hidden ">
            <div className="relative h-48">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-light text-gray-800">
                Meditation
              </h5>
              <p className="text-gray-600 font-light leading-relaxed">
                Meditativ fordybelse for harmoni og balance. Kom bag om det
                bevidste sind og oplev intens forbindelse med din sjæl.
              </p>
              <a 
                href="/ydelser" 
                className="inline-block text-[#1cc18e] hover:text-[#159e7e] font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Familie- og parterapi */}
          <div className="bg-white shadow-sm overflow-hidden ">
            <div className="relative h-48">
              <Image
                src="/images/walk.jpg"
                alt="Familie- og parterapi"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent "></div>
            </div>
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-light text-gray-800">
                Familie- og parterapi
              </h5>
              <p className="text-gray-600 font-light">
                Mentaliserende tilgang til relationer. Forstå dynamikker og skab
                sikkerhed i familien og parforhold.
              </p>
              <a 
                href="/ydelser" 
                className="inline-block text-[#1cc18e] hover:text-[#159e7e] font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-light text-gray-800 max-w-xl mx-auto text-center leading-relaxed">
              I terapien kan du, dit barn, familien eller din partner få åbnet
              op for kroppens naturlige intelligens og med lethed udfolde dine
              ønsker og drømme.
            </p>
          </div>
        </div>
      </div>

        {/* Bundtekst */}
    </section>
  );
};

export default LandingTilbyder;
