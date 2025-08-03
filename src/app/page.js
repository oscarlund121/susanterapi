import Image from 'next/image';
import Hero from './components/forside/Hero';
// Hero varianter - DSE REVIEW

import HeroElegantMinimal from './components/forside/HeroElegantMinimal';
// Tjenester varianter
import TjenesterGrid from './components/forside/tjenester/TjenesterGrid';
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

// NY SAMMENHÆNGENDE LANDING PAGE
import LandingPage from './components/landing/LandingPage';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========== NY SAMMENHÆNGENDE LANDING PAGE =========== */}

      <HeroElegantMinimal />
      <LandingPage />


   
 
   
    </main>
  );
}
