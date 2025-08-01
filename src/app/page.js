import Image from 'next/image';
import Hero from './components/forside/Hero';
// Hero varianter - DSE REVIEW
import HeroElegant from './components/forside/HeroElegant';
import HeroElegantFlow from './components/forside/HeroElegantFlow';
import HeroElegantMinimal from './components/forside/HeroElegantMinimal';
import HeroElegantBreathing from './components/forside/HeroElegantBreathing';
// Tjenester varianter
import TjenesterSektion from './components/forside/tjenester/TjenesterSektion';
// Hjælpe Med varianter
import HjaelpeMedTabs from './components/forside/hjaelpe-med/HjaelpeMedTabs';
// Session Forløb varianter
import SessionForloebVertical from './components/forside/session-forloeb/SessionForloebVertical';
// Klient Udtalelser varianter
// Priser varianter
import MetodeHorizontal from './components/forside/metode/MetodeHorizontal';
// Om mig varianter
import OmMig from './components/ommig/OmMig';
import Card from './components/ui/Card';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========== DSE REVIEW: HERO SEKTION (ZEN VARIANTER) =========== */}
      
      {/* Original Hero */}
      <div className="bg-gray-50">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light text-gray-600 mb-2">ORIGINAL - Hero</h3>
        </div>
        <Hero />
      </div>
      
      {/* Elegant variant */}
      <div className="bg-white">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light text-gray-600 mb-2">VARIANT 1 - HeroElegant (Zen-inspired bottom-left)</h3>
        </div>
        <HeroElegant />
      </div>
      
      {/* Flow variant */}
      <div className="bg-gray-50">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light text-gray-600 mb-2">VARIANT 2 - HeroElegantFlow (Vertical flow right-side)</h3>
        </div>
        <HeroElegantFlow />
      </div>
      
      {/* Minimal variant */}
      <div className="bg-white">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light text-gray-600 mb-2">VARIANT 3 - HeroElegantMinimal (Ultra-minimal center)</h3>
        </div>
        <HeroElegantMinimal />
      </div>
      
      {/* Breathing variant */}
      <div className="bg-gray-50">
        <div className="p-4 text-center">
          <h3 className="text-lg font-light text-gray-600 mb-2">VARIANT 4 - HeroElegantBreathing (Animated zen timing)</h3>
        </div>
        <HeroElegantBreathing />
      </div>
      
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
      <OmMig />

      <MetodeHorizontal />

      {/* Om mig sektion */}
    </main>
  );
}
