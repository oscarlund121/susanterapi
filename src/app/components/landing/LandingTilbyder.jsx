"use client";
import React from "react";
import Image from "next/image";

const LandingTilbyder = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Terapi hos mig
          </span>
          <h2 className="text-gray-800 mb-6">
            Hvad jeg tilbyder
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mb-8"></div>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl leading-relaxed">
            Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition
            og energier, og en mentaliserende tilgang. Gennem terapien lærer
            du at give slip på destruktive følelser, fastlåsthed og
            overbevisninger.
          </p>
        </div>

        {/* Fire hovedområder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-6">
          {/* Psykoterapi */}
          <div className="bg-white shadow-sm overflow-hidden rounded-lg">
            <div className="relative h-48">
              <Image
                src="/images/tree-touch.jpg"
                alt="Psykoterapi"
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
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
                className="inline-block text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Chok-forløsning */}
          <div className="bg-white shadow-sm overflow-hidden rounded-lg">
            <div className="relative h-48">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="Chok-forløsning"
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
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
                className="inline-block text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Meditation */}
          <div className="bg-white shadow-sm overflow-hidden rounded-lg">
            <div className="relative h-48">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation"
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
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
                className="inline-block text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>

          {/* Familie- og parterapi */}
          <div className="bg-white shadow-sm overflow-hidden rounded-lg">
            <div className="relative h-48">
              <Image
                src="/images/walk.jpg"
                alt="Familie- og parterapi"
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
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
                className="inline-block text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Læs mere →
              </a>
            </div>
          </div>
        </div>

        {/* Bundtekst */}
        <div className="text-center mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
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
