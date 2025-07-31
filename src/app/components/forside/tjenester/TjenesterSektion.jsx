
import React from 'react';

const TjenesterSektion = () => (
  <section >
    <div className="px-4 mb-20">
      {/* Titel */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
          Hvad jeg tilbyder
        </h2>
      </div>

      {/* Tjenester stack */}
      <div className="">
        {/* Psykoterapi */}
        <div className="lg:mr-auto lg:ml-0 lg:max-w-2xl">
          <div className="mb-8 text-left">
            <span className="text-6xl lg:text-7xl font-extralight bg-gray-800/50 text-white px-2 tracking-wider drop-shadow-md">
              01
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
              Psykoterapi
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
              Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi.
            </p>
          </div>
          <div className="mt-12 lg:mr-auto">
            <div className="w-16 h-px bg-gray-200"></div>
          </div>
        </div>

        {/* Chok- og traumeforløsning */}
        <div className="lg:ml-auto lg:mr-0 lg:max-w-2xl lg:text-right">
          <div className="mb-8 lg:text-right">
            <span className="text-6xl lg:text-7xl font-extralight bg-gray-800/50 text-white px-2 tracking-wider drop-shadow-md">
              02
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
              Chok- og traumeforløsning
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg lg:ml-auto">
              EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed.
            </p>
          </div>
          <div className="mt-12 lg:ml-auto">
            <div className="w-16 h-px bg-gray-200"></div>
          </div>
        </div>

        {/* Meditation */}
        <div className="lg:mr-auto lg:ml-0 lg:max-w-2xl">
          <div className="mb-8 text-left">
            <span className="text-6xl lg:text-7xl font-extralight bg-gray-800/50 text-white px-2 tracking-wider drop-shadow-md">
              03
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
              Meditation
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
              Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl.
            </p>
          </div>
          <div className="mt-12 lg:mr-auto">
            <div className="w-16 h-px bg-gray-200"></div>
          </div>
        </div>

        {/* Familie- og parterapi */}
        <div className="lg:ml-auto lg:mr-0 lg:max-w-2xl lg:text-right">
          <div className="mb-8 lg:text-right">
            <span className="text-6xl lg:text-7xl font-extralight bg-gray-800/50 text-white px-2 tracking-wider drop-shadow-md">
              04
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight tracking-wide">
              Familie- og parterapi
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg lg:ml-auto">
              Mentaliserende tilgang til relationer. Forstå dynamikker og skab sikkerhed i familien og parforhold.
            </p>
          </div>
          <div className="mt-12 lg:ml-auto">
            <div className="w-16 h-px bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TjenesterSektion;
