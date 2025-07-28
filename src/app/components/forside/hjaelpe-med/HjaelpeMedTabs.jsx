'use client'
import React from 'react';
import Button from '../../ui/Button';

const cardRadius = [
  'rounded-2xl',
  'rounded-tl-3xl rounded-br-3xl',
  'rounded-full',
  'rounded-b-2xl',
  'rounded-tr-3xl rounded-bl-3xl'
];

const kategorier = [
  {
    navn: "Følelser",
    problemer: ["Angst og fobier", "Vrede og frustration", "Tristhed/depression", "Følelsesmæssig ustabilitet", "Sorg og tab"],
    beskrivelse: "Når følelser bliver overvældende eller svære at håndtere i hverdagen"
  },
  {
    navn: "Stress",
    problemer: ["Stress og udbrændthed", "Søvnproblemer", "Tankemylder", "Præstationsangst", "Udmattelse"],
    beskrivelse: "Når kroppen og sindet er udmattet og har brug for hvile"
  },
  {
    navn: "Selvværd",
    problemer: ["Lavt selvværd", "Usikkerhed", "Fastlåsthed", "Sensitivitet", "Selvkritik"],
    beskrivelse: "Når du kæmper med at finde og acceptere dig selv som du er"
  },
  {
    navn: "Relationer",
    problemer: ["Parforhold problemer", "Familiekonflikter", "Social angst", "Ensomhed", "Kommunikation"],
    beskrivelse: "Når forbindelser til andre bliver vanskelige eller smertefulde"
  },
  {
    navn: "Traumer",
    problemer: ["Traumer", "ADHD", "Chok og kriser", "Skolefravær", "Uforklarlige reaktioner"],
    beskrivelse: "Når tidligere oplevelser påvirker dit nuværende liv negativt"
  }
];

const HjaelpeMedTabs = () => {
  return (
    <section className="py-0 lg:py-0 bg-white w-full">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12 w-full text-left pl-4">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight tracking-[0.02em] mb-6">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
          </p>
        </div>

        {/* Timeline/Flow */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
            {/* Venstre: Alle kategorier og lister */}
            <div className="space-y-16 w-full">
              {/* Følelser */}
              <div className="flex flex-col gap-8 w-full items-start pl-4">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide leading-tight w-full">Følelser</h3>
                <p className="text-gray-500 italic mb-6 text-base w-full">Når følelser bliver overvældende eller svære at håndtere i hverdagen</p>
                <ul className="flex flex-col gap-4 w-full items-start">
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Angst og fobier</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Vrede og frustration</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Tristhed/depression</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Følelsesmæssig ustabilitet</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Sorg og tab</span></li>
                </ul>
                <div className="w-full h-[2px] bg-black my-6 rounded-full" />
              </div>
              {/* Stress */}
              <div className="flex flex-col gap-8 w-full items-start pl-4">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide leading-tight w-full">Stress</h3>
                <p className="text-gray-500 italic mb-6 text-base w-full">Når kroppen og sindet er udmattet og har brug for hvile</p>
                <ul className="flex flex-col gap-4 w-full items-start">
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Stress og udbrændthed</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Søvnproblemer</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Tankemylder</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Præstationsangst</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Udmattelse</span></li>
                </ul>
                <div className="w-full h-[2px] bg-black my-6 rounded-full" />
              </div>
              {/* Selvværd */}
              <div className="flex flex-col gap-8 w-full items-start pl-4">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide leading-tight w-full">Selvværd</h3>
                <p className="text-gray-500 italic mb-6 text-base w-full">Når du kæmper med at finde og acceptere dig selv som du er</p>
                <ul className="flex flex-col gap-4 w-full items-start">
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Lavt selvværd</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Usikkerhed</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Fastlåsthed</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Sensitivitet</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Selvkritik</span></li>
                </ul>
                <div className="w-full h-[2px] bg-black my-6 rounded-full" />
              </div>
              {/* Relationer */}
              <div className="flex flex-col gap-8 w-full items-start pl-4">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide leading-tight w-full">Relationer</h3>
                <p className="text-gray-500 italic mb-6 text-base w-full">Når forbindelser til andre bliver vanskelige eller smertefulde</p>
                <ul className="flex flex-col gap-4 w-full items-start">
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Parforhold problemer</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Familiekonflikter</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Social angst</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Ensomhed</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Kommunikation</span></li>
                </ul>
                <div className="w-full h-[2px] bg-black my-6 rounded-full" />
              </div>
              {/* Traumer */}
              <div className="flex flex-col gap-8 w-full items-start pl-4">
                <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide leading-tight w-full">Traumer</h3>
                <p className="text-gray-500 italic mb-6 text-base w-full">Når tidligere oplevelser påvirker dit nuværende liv negativt</p>
                <ul className="flex flex-col gap-4 w-full items-start">
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Traumer</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">ADHD</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Chok og kriser</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Skolefravær</span></li>
                  <li className="bg-white rounded-2xl py-4 px-8 text-left w-full max-w-md shadow-none border border-gray-200"><span className="text-gray-600 font-light tracking-wide text-base w-full">Uforklarlige reaktioner</span></li>
                </ul>
                <div className="w-full h-[2px] bg-black my-6 rounded-full" />
              </div>
            </div>
            {/* Højre: 4 billeder i grid, billede 2 til højre */}
            <div className="grid grid-cols-2 grid-rows-4 gap-x-16 gap-y-16 w-full h-full">
              {/* Billede 1: øverst til venstre */}
              <img
                src="/images/om-mig.png"
                alt="Om mig"
                className="h-[400px] w-[300px] object-cover block col-start-1 row-start-1"
                style={{margin: 0, padding: 0}}
              />
              {/* Billede 2: øverst til højre */}
              <img
                src="/images/om-mig.png"
                alt="Om mig"
                className="h-[400px] w-[300px] object-cover block col-start-2 row-start-2"
                style={{margin: 0, padding: 0}}
              />
              {/* Billede 3: under billede 1 til venstre (room.jpg) */}
              <img
                src="/images/room.jpg"
                alt="Terapi-rum"
                className="h-[400px] w-[300px] object-cover object-center rotate-90 block col-start-1 row-start-3"
                style={{margin: 0, padding: 0}}
              />
              {/* Billede 4: nederst til højre */}
              <img
                src="/images/om-mig.png"
                alt="Om mig"
                className="h-[400px] w-[300px] object-cover block col-start-2 row-start-4"
                style={{margin: 0, padding: 0}}
              />
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-left mt-12 w-full">
          <p className="text-gray-500 leading-relaxed w-full mb-8 font-light">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem til det du ønsker at arbejde med.
          </p>
          <Button href="/kontakt">
            Book session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedTabs;
