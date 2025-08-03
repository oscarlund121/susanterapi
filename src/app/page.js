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
     
      
        <LandingPage />
    

      {/* =========== GAMLE KOMPONENTER TIL SAMMENLIGNING =========== */}
      <div className="bg-gray-50 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light text-gray-500">📋 Gamle komponenter (til sammenligning)</h3>
        </div>
      </div>

      {/* =========== DSE REVIEW: HERO SEKTION (ZEN VARIANTER) =========== */}
      <div className="border-b border-gray-200 pb-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-light text-gray-500">GAMMEL: HeroElegantMinimal</h3>
        </div>
        <HeroElegantMinimal />
      </div>

      {/* =========== TJENESTER SAMMENLIGNING =========== */}
      
      {/* 1. Original TjenesterSektion */}
      <div className="border-b border-gray-200 pb-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-light text-gray-500">GAMMEL: TjenesterSektion</h3>
        </div>
        <TjenesterSektion />
      </div>
      
      {/* 2. Ny TjenesterGrid (3 målgrupper) */}
      <div className="border-b border-gray-200 pb-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-light text-gray-500">GAMMEL: TjenesterGrid</h3>
        </div>
        <TjenesterGrid />
      </div>
      
      {/* Andre gamle komponenter (skjulte for nu) */}
      <div style={{ display: 'none' }}>
        <HjaelpeMedTabs />
        <SessionForloebVertical />
        <KlientUdtalelser />
        <OmMig />
        <MetodeHorizontal />
      </div>
    </main>
  );
}
