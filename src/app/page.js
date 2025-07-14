import Image from 'next/image';
import Hero from './components/forside/Hero';
// Tjenester varianter
import TjenesterSektion from './components/forside/tjenester/TjenesterSektion';
import TjenesterBase from './components/forside/tjenester/TjenesterBase';
import TjenesterGrid from './components/forside/tjenester/TjenesterGrid';
import TjenesterMinimal from './components/forside/tjenester/TjenesterMinimal';
import TjenesterFlow from './components/forside/tjenester/TjenesterFlow';

// Hjælpe Med varianter
import HjaelpeMedSektion from './components/forside/hjaelpe-med/HjaelpeMedSektion';
import HjaelpeMedCards from './components/forside/hjaelpe-med/HjaelpeMedCards';
import HjaelpeMedAccordion from './components/forside/hjaelpe-med/HjaelpeMedAccordion';
import HjaelpeMedTabs from './components/forside/hjaelpe-med/HjaelpeMedTabs';
import HjaelpeMedList from './components/forside/hjaelpe-med/HjaelpeMedList';

// Session Forløb varianter
import SessionForloeb from './components/forside/session-forloeb/SessionForloeb';
import SessionForloebSteps from './components/forside/session-forloeb/SessionForloebSteps';
import SessionForloebMinimal from './components/forside/session-forloeb/SessionForloebMinimal';
import SessionForloebVertical from './components/forside/session-forloeb/SessionForloebVertical';

// Klient Udtalelser varianter
import KlientUdtalelser from './components/forside/klient-udtalelser/KlientUdtalelser';
import KlientUdtalelserBase from './components/forside/klient-udtalelser/KlientUdtalelserBase';
import KlientUdtalelserGrid from './components/forside/klient-udtalelser/KlientUdtalelserGrid';
import KlientUdtalelserMinimal from './components/forside/klient-udtalelser/KlientUdtalelserMinimal';

// Priser varianter
import PriserForside from './components/forside/priser/PriserForside';
import PriserBase from './components/forside/priser/PriserBase';
import PriserCards from './components/forside/priser/PriserCards';
import PriserMinimal from './components/forside/priser/PriserMinimal';

import MetodeHorizontal from './components/forside/metode/MetodeHorizontal';
import ImageTextSection from './components/sections/ImageTextSection';
import Card from './components/ui/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* =========== VALGTE KOMPONENTER (DSE review gennemført) =========== */}
      
      {/* Tjenester sektion - VALGT: TjenesterSektion (Original) */}
      <TjenesterSektion />
      
  

      {/* =========== DSE REVIEW: HJÆLPE MED SEKTION (NYE VARIANTER) =========== */}
     

      {/* Tabs variant */}
  
        <HjaelpeMedTabs />
   
    

      {/* =========== DSE REVIEW: SESSION FORLØB SEKTION =========== */}
  
      {/* Vertical variant */}
  
        <SessionForloebVertical />


      {/* =========== ANDRE SEKTIONER (afventer DSE review) =========== */}
      {/* Klient Udtalelser: KlientUdtalelser | KlientUdtalelserBase | KlientUdtalelserGrid | KlientUdtalelserMinimal */}
      {/* Priser: PriserForside | PriserBase | PriserCards | PriserMinimal */}
      
      {/* Metode sektion */}
      <MetodeHorizontal />

      {/* Om mig sektion */}
      <ImageTextSection
        title="Om mig"
        imageSrc="/images/om-mig.png"
        imageAlt="Susan Albertsen - Psykoterapeut"
      >
        <div className="space-y-8">
          <Card>
            <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Susan Albertsen</h3>
            <p className="text-gray-600 leading-relaxed">
              Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
              Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
              Karen Aaes (Essentielt institut i Århus).
            </p>
          </Card>

          <Card variant="glass">
            <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Erfaring</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
              børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
              opstå i disse sammenhænge og relationer.
            </p>
          </Card>

          <Card variant="glass">
            <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Uddannelse</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Essentielt institut er godkendt af og medlem af EAIP (European Association for 
              integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
              anerkendt både i Danmark og i udlandet.
            </p>
          </Card>
        </div>
      </ImageTextSection>
    </main>
  );
}
