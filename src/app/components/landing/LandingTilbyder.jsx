"use client";
import React from "react";
import Image from "next/image";

const LandingTilbyder = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center flex flex-col items- justify-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8">
            Hvad jeg tilbyder
          </h2>
          <div className="w-8 h-px bg-gray-800"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
              Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition
              og energier, og en mentaliserende tilgang. Gennem terapien lærer
              du at give slip på destruktive følelser, fastlåsthed og
              overbevisninger.
            </p>
          </div>
        </div>

        {/* Fire hovedområder */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Psykoterapi */}
          <div className="space-y-6">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/tree-touch.jpg"
                alt="Psykoterapi"
                fill
                className="object-cover shadow-lg"
              />
          {/*     <div className="absolute inset-0 bg-gray-800/50"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gray-800/50 text-white px-3 py-1 text-xl font-light tracking-wider">
                  01
                </span>
              </div> */}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Psykoterapi
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Gennem helhjertet terapi lærer du at give slip på destruktive
                følelser og fastlåsthed. Oplev frihed, glæde og en fornyet
                energi.
              </p>
              <div className="w-8 h-px bg-gray-800"></div>
            </div>
          </div>

          {/* Chok-forløsning */}
          <div className="space-y-6">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="Chok-forløsning"
                fill
                className="object-cover shadow-lg"
              />
           
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Chok- og traumeforløsning
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                EMDR metode til at forløse chok lagret i kroppen. Genvind
                balance og oplevelse af ro og kærlighed.
              </p>
              <div className="w-8 h-px bg-gray-800"></div>
            </div>
          </div>

          {/* Meditation */}
          <div className="space-y-6">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation"
                fill
                className="object-cover shadow-lg"
              />
           
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Meditation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Meditativ fordybelse for harmoni og balance. Kom bag om det
                bevidste sind og oplev intens forbindelse med din sjæl.
              </p>
              <div className="w-8 h-px bg-gray-800"></div>
            </div>
          </div>

          {/* Familie- og parterapi */}
          <div className="space-y-6">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/walk.jpg"
                alt="Familie- og parterapi"
                fill
                className="object-cover shadow-lg"
              />
           
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Familie- og parterapi
              </h3>
              <p className="text-gray-600 font-light">
                Mentaliserende tilgang til relationer. Forstå dynamikker og skab
                sikkerhed i familien og parforhold.
              </p>
              <div className="w-8 h-px bg-gray-800"></div>
            </div>
          </div>
        </div>

        {/* Bundtekst */}
        <div className="text-center mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
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
