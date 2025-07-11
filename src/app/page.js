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
      <section className="bg-white">
        <div className="max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:min-h-screen">
            {/* Billede til venstre - centreret vertikalt */}
            <div className="relative h-[60vh] lg:h-[70vh] bg-gray-200">
              <Image
                src="/images/om-mig.png"
                alt="Susan Albertsen - Psykoterapeut"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Tekst til højre med padding og header */}
            <div className="px-8 lg:pl-16 lg:pr-8 xl:pr-16 2xl:pr-20 py-8 lg:py-16 flex flex-col justify-center">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                  Om mig
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Susan Albertsen</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                    Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
                    Karen Aaes (Essentielt institut i Århus).
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Erfaring</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
                    børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
                    opstå i disse sammenhænge og relationer.
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Uddannelse</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Essentielt institut er godkendt af og medlem af EAIP (European Association for 
                    integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
                    anerkendt både i Danmark og i udlandet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
