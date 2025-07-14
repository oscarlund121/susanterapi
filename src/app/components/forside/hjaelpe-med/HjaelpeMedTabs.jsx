'use client'
import React from 'react';
import Button from '../../ui/Button';

const HjaelpeMedTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

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

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200">
            {kategorier.map((kategori, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-200 border-b-2 ${
                  activeTab === index
                    ? 'text-gray-800 border-gray-800'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {kategori.navn}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {kategorier.map((kategori, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  activeTab === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'
                }`}
                style={{ display: activeTab === index ? 'block' : 'none' }}
              >
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {kategori.beskrivelse}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {kategori.problemer.map((problem, problemIndex) => (
                    <div
                      key={problemIndex}
                      className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-200 hover:bg-gray-100"
                    >
                      <span className="text-gray-700 font-light tracking-wide">
                        {problem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
            det du ønsker at arbejde med.
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
