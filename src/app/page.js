import Image from 'next/image';
import Hero from './components/forside/Hero';
// Hero varianter - DSE REVIEW

import HeroElegantMinimal from './components/forside/HeroElegantMinimal';
// Tjenester varianter
import TjenesterSektion from './components/forside/tjenester/TjenesterSektion';
// Hjælpe Med varianter
import HjaelpeMedTabs from './components/forside/hjaelpe-med/HjaelpeMedTabs';
// Session Forløb varianter
import SessionForloebVertical from './components/forside/session-forloeb/SessionForloebVertical';
// Klient Udtalelser varianter
import KlientUdtalelser from './components/forside/klient-udtalelser/KlientUdtalelser';
// Priser varianter
import MetodeHorizontal from './components/forside/metode/MetodeHorizontal';
// Om mig varianter
import OmMig from './components/ommig/OmMig';
import Card from './components/ui/Card';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========== DSE REVIEW: HERO SEKTION (ZEN VARIANTER) =========== */}
  
      
 

    
        <HeroElegantMinimal />
   

      
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
      {/* Klient Udtalelser */}
      {/* <KlientUdtalelser /> */}
      {/* Metode sektion */}
      <OmMig />

      <MetodeHorizontal />

      {/* Om mig sektion */}
    </main>
  );
}
