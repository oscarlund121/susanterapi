import Image from "next/image";
import Hero from "./components/forside/Hero";
import TjenesteCard from "./components/forside/TjenesteCard";
import MetodeSektion from "./components/forside/MetodeSektion";
import HjaelpeMedSektion from "./components/forside/HjaelpeMedSektion";
import SessionForloeb from "./components/forside/SessionForloeb";
import KlientUdtalelser from "./components/forside/KlientUdtalelser";
import PriserForside from "./components/forside/PriserForside";
import OmMigCard from "./components/ommig/OmMigCard";

export default function Home() {
  const tjenester = [
    {
      title: "Psykoterapi",
      description: "Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi."
    },
    {
      title: "Chok- og traumeforløsning",
      description: "EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed."
    },
    {
      title: "Meditation",
      description: "Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl."
    },
    {
      title: "Familie- og parterapi",
      description: "Mentaliserende tilgang til relationer. Forstå dynamikker og skab sikkerhed i familien og parforhold."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* Tjenester sektion */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
              Hvad jeg<br />
              tilbyder
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {tjenester.map((tjeneste, index) => (
              <TjenesteCard 
                key={index}
                title={tjeneste.title}
                description={tjeneste.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metode sektion */}
      <MetodeSektion />

      {/* Hvad kan jeg hjælpe med */}
      <HjaelpeMedSektion />

      {/* Session forløb */}
      <SessionForloeb />

      {/* Klientudtalelser sektion */}
      <KlientUdtalelser />

      {/* Priser på forsiden */}
      <PriserForside />

      {/* Om mig sektion */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Om mig
            </h2>
          </div>
          <OmMigCard />
        </div>
      </section>
    </main>
  );
}
